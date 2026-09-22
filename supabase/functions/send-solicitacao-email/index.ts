// Supabase Edge Function: send-solicitacao-email
// Envia e-mail de notificação para comercial@conselt.com.br a cada nova solicitação de diagnóstico

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const TO_EMAIL = "comercial@conselt.com.br";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface SolicitacaoPayload {
  nome: string;
  email: string;
  whatsapp: string;
  empresa?: string;
  servico: string;
  prazo?: string;
  desafio: string;
}

serve(async (req) => {
  // Tratamento de preflight CORS
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const payload: SolicitacaoPayload = await req.json();

    const { nome, email, whatsapp, empresa, servico, prazo, desafio } = payload;

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; rounded: 12px; background-color: #ffffff;">
        <div style="text-align: center; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 2px solid #051D3E;">
          <h2 style="color: #051D3E; margin: 0; font-size: 24px;">Nova Solicitação de Diagnóstico</h2>
          <p style="color: #42A5D3; margin: 4px 0 0; font-size: 14px; font-weight: bold;">Portal CONSELT</p>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #475569; width: 35%;">Nome:</td>
            <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; color: #0f172a;">${nome}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #475569;">E-mail:</td>
            <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; color: #0f172a;"><a href="mailto:${email}" style="color: #2270A1;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #475569;">WhatsApp:</td>
            <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; color: #0f172a;">
              <a href="https://wa.me/55${whatsapp.replace(/\D/g, '')}" style="color: #16a34a; font-weight: bold; text-decoration: none;">
                ${whatsapp} (Abrir WhatsApp)
              </a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #475569;">Empresa:</td>
            <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; color: #0f172a;">${empresa || "Não informada"}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #475569;">Serviço de Interesse:</td>
            <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: bold;">${servico}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #475569;">Prazo Estimado:</td>
            <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; color: #0f172a;">${prazo || "Não especificado"}</td>
          </tr>
        </table>

        <div style="background-color: #f8fafc; padding: 16px; border-radius: 8px; border-left: 4px solid #42A5D3; margin-top: 16px;">
          <h4 style="margin: 0 0 8px; color: #051D3E;">Desafio e Objetivo:</h4>
          <p style="margin: 0; color: #334155; line-height: 1.5; white-space: pre-wrap;">${desafio}</p>
        </div>

        <div style="margin-top: 24px; text-align: center;">
          <a href="https://conselt.com.br/admin/solicitacoes" style="display: inline-block; padding: 12px 24px; background-color: #051D3E; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 14px;">
            Acessar Painel de Demandas
          </a>
        </div>
      </div>
    `;

    if (!RESEND_API_KEY) {
      console.warn("RESEND_API_KEY não configurada no Supabase Secrets. Pulando envio direto via Resend.");
      return new Response(
        JSON.stringify({ 
          success: true, 
          warning: "Chave RESEND_API_KEY ausente. Notificação registrada no console.",
          payload 
        }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "CONSELT Portal <onboarding@resend.dev>",
        to: [TO_EMAIL],
        reply_to: email,
        subject: `[Nova Oportunidade] ${nome} - ${servico}`,
        html: emailHtml,
      }),
    });

    const data = await res.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("Erro na Edge Function:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Erro desconhecido ao processar e-mail" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
