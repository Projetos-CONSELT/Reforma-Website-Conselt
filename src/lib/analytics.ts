import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";
import { supabase } from "@/supabaseClient";

function makeId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function getSessionId() {
  const key = "conselt_analytics_session";
  try {
    const current = sessionStorage.getItem(key);
    if (current) return current;
    const created = makeId();
    sessionStorage.setItem(key, created);
    return created;
  } catch {
    return makeId();
  }
}

function getDeviceType() {
  const width = typeof window === "undefined" ? 1024 : window.innerWidth;
  return width < 768 ? "mobile" : width < 1200 ? "tablet" : "desktop";
}

function getBrowser() {
  const userAgent = navigator.userAgent;
  if (/Edg\//.test(userAgent)) return "Edge";
  if (/Chrome\//.test(userAgent)) return "Chrome";
  if (/Firefox\//.test(userAgent)) return "Firefox";
  if (/Safari\//.test(userAgent)) return "Safari";
  return "Outro";
}

async function sendVisit(payload: Record<string, unknown>) {
  try {
    await supabase.functions.invoke("track-analytics", { body: payload });
  } catch (error) {
    console.warn("Analytics indisponível:", error);
  }
}

export function AnalyticsTracker() {
  const locationHref = useRouterState({ select: (state) => state.location.href });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const visitId = makeId();
    const sessionId = getSessionId();
    const startedAt = new Date().toISOString();
    const startedClock = Date.now();
    let visibleSince = document.visibilityState === "hidden" ? null : startedClock;
    let visibleMilliseconds = 0;
    let closed = false;

    const getDurationSeconds = () => {
      const currentVisible = visibleSince ? Date.now() - visibleSince : 0;
      return Math.max(0, Math.round((visibleMilliseconds + currentVisible) / 1000));
    };

    const payload = () => ({
      visitId,
      sessionId,
      pagePath: `${window.location.pathname}${window.location.search}`,
      pageTitle: document.title,
      referrer: document.referrer,
      startedAt,
      durationSeconds: getDurationSeconds(),
      deviceType: getDeviceType(),
      browser: getBrowser(),
      language: navigator.language,
      screenWidth: window.innerWidth,
    });

    void sendVisit({ ...payload(), eventType: "page_view" });
    const heartbeat = window.setInterval(() => {
      if (!closed) void sendVisit({ ...payload(), eventType: "heartbeat" });
    }, 15000);

    const handleVisibility = () => {
      if (document.visibilityState === "hidden") {
        if (visibleSince) visibleMilliseconds += Date.now() - visibleSince;
        visibleSince = null;
      } else if (!visibleSince) {
        visibleSince = Date.now();
      }
    };

    const closeVisit = () => {
      if (closed) return;
      closed = true;
      handleVisibility();
      void sendVisit({ ...payload(), eventType: "page_exit" });
    };

    document.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("pagehide", closeVisit);
    return () => {
      window.clearInterval(heartbeat);
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("pagehide", closeVisit);
      closeVisit();
    };
  }, [locationHref]);

  return null;
}
