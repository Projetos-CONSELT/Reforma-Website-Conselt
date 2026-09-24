// @ts-expect-error Supabase Edge Functions resolvem imports HTTPS no runtime Deno.
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

declare const Deno: {
  env: { get(name: string): string | undefined };
  serve(handler: (request: Request) => Response | Promise<Response>): void;
};

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

interface AnalyticsPayload {
  visitId: string;
  sessionId: string;
  eventType?: "page_view" | "heartbeat" | "page_exit";
  pagePath: string;
  pageTitle?: string;
  referrer?: string;
  startedAt?: string;
  durationSeconds?: number;
  deviceType?: string;
  browser?: string;
  language?: string;
  screenWidth?: number;
}

function getClientIp(request: Request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    ""
  );
}

async function getLocation(request: Request) {
  const countryHeader = request.headers.get("cf-ipcountry");
  const ip = getClientIp(request);
  if (!ip || ip === "127.0.0.1" || ip === "::1") {
    return { country: countryHeader || null, region: null, city: null };
  }

  try {
    const response = await fetch(`https://ipapi.co/${encodeURIComponent(ip)}/json/`);
    if (!response.ok) return { country: countryHeader || null, region: null, city: null };
    const data = await response.json();
    return {
      country: data.country_name || countryHeader || null,
      region: data.region || null,
      city: data.city || null,
    };
  } catch {
    return { country: countryHeader || null, region: null, city: null };
  }
}

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Método não permitido" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const payload = (await request.json()) as AnalyticsPayload;
    if (!payload.visitId || !payload.sessionId || !payload.pagePath) {
      return new Response(JSON.stringify({ error: "Dados de visita incompletos" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
    );
    const durationSeconds = Math.max(0, Math.round(payload.durationSeconds || 0));
    let error;
    if ((payload.eventType || "page_view") === "page_view") {
      const location = await getLocation(request);
      ({ error } = await supabase.from("site_analytics").upsert(
        {
          visit_id: payload.visitId,
          session_id: payload.sessionId,
          event_type: "page_view",
          page_path: payload.pagePath.slice(0, 500),
          page_title: (payload.pageTitle || "").slice(0, 300) || null,
          referrer: (payload.referrer || "").slice(0, 1000) || null,
          started_at: payload.startedAt || new Date().toISOString(),
          duration_seconds: durationSeconds,
          country: location.country,
          region: location.region,
          city: location.city,
          device_type: (payload.deviceType || "unknown").slice(0, 40),
          browser: (payload.browser || "unknown").slice(0, 80),
          language: (payload.language || "").slice(0, 40) || null,
          screen_width: Number.isFinite(payload.screenWidth) ? payload.screenWidth : null,
        },
        { onConflict: "visit_id" },
      ));
    } else {
      ({ error } = await supabase
        .from("site_analytics")
        .update({
          event_type: payload.eventType,
          duration_seconds: durationSeconds,
          ended_at: payload.eventType === "page_exit" ? new Date().toISOString() : null,
        })
        .eq("visit_id", payload.visitId));
    }

    if (error) throw error;
    return new Response(JSON.stringify({ ok: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Erro ao registrar analytics:", error);
    return new Response(JSON.stringify({ error: "Não foi possível registrar a visita" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
