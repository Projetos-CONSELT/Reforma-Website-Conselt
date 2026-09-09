import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight, CheckCircle2, ShieldCheck, Mail, Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Solicitar Diagnóstico — Conselt" },
      {
        name: "description",
        content: "Conte qual desafio você precisa resolver. Nossa equipe analisará sua necessidade e indicará o caminho mais adequado.",
      },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    empresa: "",
    servico: "",
    prazo: "",
    desafio: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#051D3E] text-foreground font-opensans">
      <Header />

      <main className="flex-1 pt-28 sm:pt-36 pb-20 lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          
          {/* Split Screen Layout (Desktop: 2 Colunas) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Coluna da Esquerda: Azul Noite (#051D3E) - Hero & Autoridade */}
            <div className="lg:col-span-5 text-white space-y-8 pt-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#42A5D3]/10 border border-[#42A5D3]/30 text-[#42A5D3] text-xs font-semibold tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#42A5D3]" />
                Diagnóstico Gratuito
              </div>

              {/* Título Principal (H1) */}
              <h1 className="font-opensans font-bold text-3xl sm:text-4xl lg:text-[48px] leading-[1.15] text-[#FFFFFF] tracking-tight">
                Conte qual desafio você precisa resolver.
              </h1>

              {/* Texto de Apoio (p) */}
              <p className="font-opensans font-normal text-base sm:text-lg leading-relaxed text-[#B1D3E1]">
                Nossa equipe analisará sua necessidade e indicará o caminho mais adequado para o projeto.
              </p>

              {/* Blocos de Garantia / Contato Adicional */}
              <div className="pt-6 border-t border-[#42A5D3]/20 space-y-4">
                <div className="flex items-center gap-3 text-sm text-[#B1D3E1]">
                  <ShieldCheck className="w-5 h-5 text-[#42A5D3] shrink-0" />
                  <span>Projetos com supervisão e metodologia institucional FEELT/UFU</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-[#B1D3E1]">
                  <Mail className="w-5 h-5 text-[#42A5D3] shrink-0" />
                  <span>contato@conselt.com.br</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-[#B1D3E1]">
                  <Phone className="w-5 h-5 text-[#42A5D3] shrink-0" />
                  <span>(34) 99999-9999</span>
                </div>

                <div className="flex items-start gap-3 text-sm text-[#B1D3E1]">
                  <MapPin className="w-5 h-5 text-[#42A5D3] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    Av. João Naves de Ávila, 2121, Bloco 1N, Sala 06 — Uberlândia/MG
                  </span>
                </div>
              </div>
            </div>

            {/* Coluna da Direita: Card Branco com Formulário Qualificado */}
            <div className="lg:col-span-7 bg-[#FFFFFF] rounded-3xl p-6 sm:p-10 shadow-2xl border border-[#093565]/10 text-[#162638]">
              {submitted ? (
                <div className="py-12 px-4 text-center space-y-5 animate-in fade-in zoom-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#42A5D3]/15 text-[#2270A1] grid place-items-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h2 className="font-opensans font-bold text-2xl sm:text-3xl text-[#093565]">
                    Solicitação Recebida!
                  </h2>
                  <p className="font-opensans text-base sm:text-lg text-[#162638] max-w-md mx-auto leading-relaxed">
                    Um responsável da CONSELT analisará suas informações e entrará em contato em até <strong>24 horas úteis</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-opensans font-semibold text-sm bg-[#093565] text-white hover:bg-[#2270A1] transition-colors"
                  >
                    Enviar nova solicitação
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-[#093565]/10 pb-3 mb-4">
                    <h2 className="font-opensans font-bold text-xl sm:text-2xl text-[#093565]">
                      Formulário de Avaliação Inicial
                    </h2>
                    <p className="text-xs text-[#162638]/70 mt-1">
                      Preencha os dados abaixo para direcionarmos ao especialista responsável.
                    </p>
                  </div>

                  {/* 1. Nome Completo */}
                  <div>
                    <label htmlFor="nome" className="block font-opensans font-semibold text-sm sm:text-base text-[#093565] mb-1.5">
                      Nome completo <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="nome"
                      type="text"
                      required
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      placeholder="Seu nome completo"
                      className="w-full px-4 py-3 rounded-xl border border-[#093565]/20 focus:border-[#42A5D3] focus:ring-2 focus:ring-[#42A5D3]/20 text-[#162638] font-opensans text-sm sm:text-base outline-none transition-all"
                    />
                  </div>

                  {/* Grid de E-mail e WhatsApp */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* 2. E-mail profissional */}
                    <div>
                      <label htmlFor="email" className="block font-opensans font-semibold text-sm sm:text-base text-[#093565] mb-1.5">
                        E-mail profissional <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="seuemail@empresa.com"
                        className="w-full px-4 py-3 rounded-xl border border-[#093565]/20 focus:border-[#42A5D3] focus:ring-2 focus:ring-[#42A5D3]/20 text-[#162638] font-opensans text-sm sm:text-base outline-none transition-all"
                      />
                    </div>

                    {/* 3. WhatsApp */}
                    <div>
                      <label htmlFor="whatsapp" className="block font-opensans font-semibold text-sm sm:text-base text-[#093565] mb-1.5">
                        WhatsApp <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="whatsapp"
                        type="tel"
                        required
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        placeholder="(34) 99999-9999"
                        className="w-full px-4 py-3 rounded-xl border border-[#093565]/20 focus:border-[#42A5D3] focus:ring-2 focus:ring-[#42A5D3]/20 text-[#162638] font-opensans text-sm sm:text-base outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* 4. Empresa / Organização */}
                  <div>
                    <label htmlFor="empresa" className="block font-opensans font-semibold text-sm sm:text-base text-[#093565] mb-1.5">
                      Empresa / organização
                    </label>
                    <input
                      id="empresa"
                      type="text"
                      value={formData.empresa}
                      onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                      placeholder="Nome da sua empresa ou instituição"
                      className="w-full px-4 py-3 rounded-xl border border-[#093565]/20 focus:border-[#42A5D3] focus:ring-2 focus:ring-[#42A5D3]/20 text-[#162638] font-opensans text-sm sm:text-base outline-none transition-all"
                    />
                  </div>

                  {/* Grid de Serviço de interesse e Prazo */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* 5. Serviço de interesse */}
                    <div>
                      <label htmlFor="servico" className="block font-opensans font-semibold text-sm sm:text-base text-[#093565] mb-1.5">
                        Serviço de interesse <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="servico"
                        required
                        value={formData.servico}
                        onChange={(e) => setFormData({ ...formData, servico: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#093565]/20 focus:border-[#42A5D3] focus:ring-2 focus:ring-[#42A5D3]/20 text-[#162638] font-opensans text-sm sm:text-base outline-none transition-all bg-white"
                      >
                        <option value="" disabled>Selecione um serviço</option>
                        <option value="Website e Landing Pages">Website e Landing Pages</option>
                        <option value="E-commerce">E-commerce</option>
                        <option value="Aplicativo">Aplicativo</option>
                        <option value="Software sob medida">Software sob medida</option>
                        <option value="Projeto Elétrico">Projeto Elétrico</option>
                        <option value="Projeto Luminotécnico">Projeto Luminotécnico</option>
                        <option value="Automação">Automação</option>
                      </select>
                    </div>

                    {/* 6. Prazo */}
                    <div>
                      <label htmlFor="prazo" className="block font-opensans font-semibold text-sm sm:text-base text-[#093565] mb-1.5">
                        Prazo estimado
                      </label>
                      <select
                        id="prazo"
                        value={formData.prazo}
                        onChange={(e) => setFormData({ ...formData, prazo: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#093565]/20 focus:border-[#42A5D3] focus:ring-2 focus:ring-[#42A5D3]/20 text-[#162638] font-opensans text-sm sm:text-base outline-none transition-all bg-white"
                      >
                        <option value="">Selecione a estimativa</option>
                        <option value="Imediato">Imediato</option>
                        <option value="30 dias">30 dias</option>
                        <option value="60 dias">60 dias</option>
                        <option value="90+ dias">90+ dias</option>
                      </select>
                    </div>
                  </div>

                  {/* 7. Desafio e objetivo */}
                  <div>
                    <label htmlFor="desafio" className="block font-opensans font-semibold text-sm sm:text-base text-[#093565] mb-1.5">
                      Desafio e objetivo <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="desafio"
                      required
                      rows={4}
                      value={formData.desafio}
                      onChange={(e) => setFormData({ ...formData, desafio: e.target.value })}
                      placeholder="Descreva o problema, o objetivo e o que já existe hoje"
                      className="w-full px-4 py-3 rounded-xl border border-[#093565]/20 focus:border-[#42A5D3] focus:ring-2 focus:ring-[#42A5D3]/20 text-[#162638] font-opensans text-sm sm:text-base outline-none transition-all resize-y"
                    />
                  </div>

                  {/* 8. Botão de Envio (CTA 100% largura) */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full h-12 sm:h-14 px-6 rounded-xl font-opensans font-bold text-base sm:text-lg bg-[#2270A1] text-white shadow-md hover:bg-[#093565] hover:scale-[1.01] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Solicitar avaliação</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Microcopy de Confiança */}
                  <p className="font-opensans text-xs text-[#162638]/70 leading-relaxed text-center pt-2">
                    Recebemos sua solicitação. Um responsável entrará em contato em até <strong>24 horas úteis</strong>. Seus dados serão usados apenas para responder e conduzir esta oportunidade.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
