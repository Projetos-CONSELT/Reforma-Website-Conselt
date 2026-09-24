import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Logo } from "@/components/Logo";
import {
  Globe,
  ShoppingCart,
  Code2,
  Smartphone,
  ArrowRight,
  Check,
  Gauge,
  ShieldCheck,
  Users,
  Rocket,
  CheckCircle2,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { supabase } from "../supabaseClient.ts";

export const Route = createFileRoute("/solucoes-digitais")({
  head: () => ({
    meta: [
      { title: "Soluções Digitais — Sites, E-commerce, Software e Apps | CONSELT" },
      {
        name: "description",
        content:
          "Websites, landing pages, e-commerce, software sob medida e aplicativos desenvolvidos pela CONSELT para gerar resultados mensuráveis.",
      },
      { property: "og:title", content: "Soluções Digitais — CONSELT" },
      {
        property: "og:description",
        content:
          "Do site ao aplicativo: produtos digitais rápidos, seguros e feitos para converter.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SolucoesDigitaisPage,
});

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (!digits) return "";
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

const servicos = [
  {
    icon: Globe,
    title: "Websites e Landing Pages",
    desc: "Presença digital que carrega rápido, ranqueia bem e transforma visita em contato.",
    features: [
      "Design responsivo e acessível",
      "SEO técnico e performance 90+",
      "Landing pages para campanhas",
      "Integração com analytics e CRM",
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    desc: "Lojas virtuais preparadas para escalar vendas, com checkout fluido e operação simples.",
    features: [
      "Checkout otimizado para conversão",
      "Meios de pagamento e frete",
      "Gestão de catálogo e estoque",
      "Relatórios de vendas em tempo real",
    ],
  },
  {
    icon: Code2,
    title: "Software sob Medida",
    desc: "Sistemas web e plataformas internas desenhados para a regra de negócio da sua empresa.",
    features: [
      "Painéis administrativos e dashboards",
      "Automação de processos internos",
      "APIs e integrações com terceiros",
      "Arquitetura escalável na nuvem",
    ],
  },
  {
    icon: Smartphone,
    title: "Aplicativos Mobile",
    desc: "Apps iOS e Android com experiência nativa e foco em uso recorrente.",
    features: [
      "iOS e Android em uma base",
      "Notificações e offline-first",
      "Publicação nas lojas",
      "Evolução contínua por métricas",
    ],
  },
];

const diferenciais = [
  { icon: Gauge, title: "Performance medida", desc: "Cada entrega é avaliada por velocidade, conversão e estabilidade." },
  { icon: ShieldCheck, title: "Segurança por padrão", desc: "Boas práticas de proteção de dados e conformidade desde o início." },
  { icon: Users, title: "Time multidisciplinar", desc: "Engenharia, design e negócio trabalhando no mesmo objetivo." },
  { icon: Rocket, title: "Entrega em ciclos curtos", desc: "Sprints com validação constante — você vê valor antes do fim." },
];

function SolucoesDigitaisPage() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [desafio, setDesafio] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("solicitacoes_comercial").insert([
        {
          nome: nome.trim(),
          email: email.trim(),
          whatsapp: whatsapp.trim() || "Não informado",
          empresa: null,
          servico: "Soluções Digitais",
          prazo: null,
          desafio: desafio.trim(),
          status: "Novo",
        },
      ]);

      if (error) {
        throw error;
      }

      setSubmitted(true);
      setNome("");
      setEmail("");
      setWhatsapp("");
      setDesafio("");
    } catch (err: any) {
      console.error("Erro ao enviar formulário:", err);
      setErrorMessage("Não foi possível enviar a solicitação. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-white text-ink font-opensans">
      <Header />

      <main className="flex-1 pt-24 lg:pt-28">
        {/* Hero com o Diamante à direita e espaçamento otimizado */}
        <section className="relative overflow-hidden bg-brand-white py-12 lg:py-16">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(900px_500px_at_85%_-10%,#B1D3E1_0%,transparent_60%)]" />
          <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-mid/30 bg-ice/40 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-deep">
                <Code2 className="w-4 h-4 text-main" /> Soluções Digitais
              </span>
              <h1 className="mt-6 font-montserrat text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-deep">
                Tecnologia que vira{" "}
                <span className="text-main">resultado</span> no seu negócio.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/80">
                Criamos websites, e-commerces, sistemas e aplicativos com foco em
                conversão, velocidade e crescimento sustentável — do diagnóstico
                à evolução contínua.
              </p>
            </div>

            {/* Diamante ocupando o espaço em branco à direita */}
            <div className="flex items-center justify-center lg:justify-end">
              <Logo className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-contain filter drop-shadow-md transition-transform duration-500 hover:scale-105" />
            </div>
          </div>
        </section>

        {/* Divisor de Transição Prominente */}
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-4">
          <div className="h-[3px] w-full rounded-full bg-gradient-to-r from-transparent via-cyan via-main to-transparent shadow-[0_0_12px_rgba(66,165,211,0.4)]" />
        </div>

        {/* Grid de serviços com espaço reduzido em relação ao Hero */}
        <section className="bg-brand-white pt-10 pb-20 lg:pt-12 lg:pb-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="max-w-2xl">
              <h2 className="font-montserrat text-3xl lg:text-4xl font-extrabold text-deep">
                Serviços que entregamos
              </h2>
              <p className="mt-4 text-lg text-ink/75">
                Quatro frentes complementares para cobrir toda a jornada digital
                da sua empresa.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {servicos.map(({ icon: Icon, title, desc, features }) => (
                <article
                  key={title}
                  className="group relative rounded-3xl border border-mid/20 bg-brand-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-main hover:shadow-[0_24px_60px_-30px_#184C77]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ice/60 text-mid transition-colors duration-300 group-hover:bg-main group-hover:text-brand-white">
                    <Icon className="h-7 w-7" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-6 font-montserrat text-2xl font-bold text-deep min-h-[40px] flex items-center">
                    {title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-ink/75 text-left">{desc}</p>
                  <ul className="mt-6 space-y-3">
                    {features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-ink/85">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan" strokeWidth={3} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contato"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-main transition-colors hover:text-deep"
                  >
                    Solicitar este serviço <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Transição ultra estreita entre Serviços e Por que a CONSELT */}
        <div className="h-4 sm:h-6 w-full bg-gradient-to-b from-brand-white to-night pointer-events-none select-none" />

        {/* Autoridade */}
        <section className="bg-night py-20 lg:py-28 text-brand-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="max-w-2xl">
              <h2 className="font-montserrat text-3xl lg:text-4xl font-extrabold">
                Por que a CONSELT?
              </h2>
              <p className="mt-4 text-lg text-ice/80">
                Método de engenharia aplicado a produtos digitais: previsível,
                transparente e orientado a dados.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {diferenciais.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-mid/50 bg-deep/40 p-7 transition-colors hover:border-cyan"
                >
                  <Icon className="h-8 w-8 text-cyan" strokeWidth={1.75} />
                  <h3 className="mt-5 font-montserrat text-lg font-bold min-h-[56px] flex items-center">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ice/75 text-left">{desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-14 grid gap-8 sm:grid-cols-3 border-t border-mid/40 pt-10">
              {[
                { n: "+120", l: "projetos entregues" },
                { n: "98%", l: "clientes que renovam" },
                { n: "100%", l: "supervisão docente" },
              ].map(({ n, l }) => (
                <div key={l}>
                  <div className="font-montserrat text-3xl sm:text-4xl font-extrabold text-cyan">
                    {n}
                  </div>
                  <div className="mt-1 text-sm text-ice/70">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transição ultra estreita ao final de Por que a CONSELT */}
        <div className="h-4 sm:h-6 w-full bg-gradient-to-b from-night to-ice/40 pointer-events-none select-none" />

        {/* CTA final */}
        <section className="bg-ice/40 py-20 lg:py-28">
          <div className="mx-auto max-w-5xl px-6 lg:px-10">
            <div className="rounded-3xl border border-mid/25 bg-brand-white p-10 lg:p-14 shadow-[0_30px_80px_-50px_#093565]">
              <div className="grid gap-10 lg:grid-cols-[1fr_1fr] items-center">
                <div>
                  <h2 className="font-montserrat text-3xl lg:text-4xl font-extrabold text-deep">
                    Vamos tirar seu projeto do papel?
                  </h2>
                  <p className="mt-4 text-lg text-ink/75">
                    Conte o desafio e devolvemos um diagnóstico com escopo,
                    prazo e próximos passos — sem compromisso.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-in fade-in">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 grid place-items-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-montserrat font-bold text-lg text-emerald-900">
                      Solicitação Recebida com Sucesso!
                    </h3>
                    <p className="text-xs text-emerald-700 leading-relaxed">
                      Nossa equipe técnica e comercial analisará sua necessidade e entrará em contato em até <strong>24 horas úteis</strong>.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-bold text-emerald-800 underline hover:text-emerald-950 cursor-pointer"
                    >
                      Enviar outra mensagem
                    </button>
                  </div>
                ) : (
                  <form
                    className="grid gap-4"
                    onSubmit={handleSubmit}
                  >
                    {errorMessage && (
                      <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <input
                      type="text"
                      required
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      placeholder="Seu nome completo"
                      className="w-full rounded-xl border border-mid/30 bg-brand-white px-4 py-3 text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-main"
                    />
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-mail corporativo"
                        className="w-full rounded-xl border border-mid/30 bg-brand-white px-4 py-3 text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-main"
                      />
                      <input
                        type="tel"
                        required
                        maxLength={15}
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(formatPhone(e.target.value))}
                        placeholder="WhatsApp (00) 00000-0000"
                        className="w-full rounded-xl border border-mid/30 bg-brand-white px-4 py-3 text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-main"
                      />
                    </div>

                    <textarea
                      rows={3}
                      required
                      value={desafio}
                      onChange={(e) => setDesafio(e.target.value)}
                      placeholder="Qual solução você precisa? Descreva o desafio..."
                      className="w-full resize-none rounded-xl border border-mid/30 bg-brand-white px-4 py-3 text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-main"
                    />

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-night transition-all duration-300 hover:scale-[1.02] hover:opacity-95 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span>Enviando...</span>
                        </>
                      ) : (
                        <>
                          <span>Solicitar diagnóstico</span>
                          <ArrowRight className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer fromColor="#E5F2F7" />
    </div>
  );
}
