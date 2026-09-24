import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Logo } from "@/components/Logo";
import {
  Zap,
  Lightbulb,
  Home,
  Factory,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Calculator,
  X,
  ChevronRight,
  Check,
  Gauge,
  Users,
  Rocket,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { supabase } from "../supabaseClient.ts";

export const Route = createFileRoute("/engenharia-automacao")({
  head: () => ({
    meta: [
      {
        title:
          "Projetos Elétricos & Automação — CONSELT",
      },
      {
        name: "description",
        content:
          "Projetos Elétricos, Luminotécnicos, Automação Residencial e Automação Industrial desenvolvidos por engenheiros especialistas da CONSELT.",
      },
      {
        property: "og:title",
        content: "Projetos Elétricos & Automação — CONSELT",
      },
      {
        property: "og:description",
        content:
          "Soluções em engenharia elétrica e automação industrial e residencial com máximo rigor técnico e eficiência.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: EngenhariaAutomacaoPage,
});

// Interfaces para tipagem dos serviços
interface ServiceSpec {
  norma: string;
  entregavel: string;
  aplicacao: string;
  impacto: string;
}

interface ServiceItem {
  id: string;
  icon: typeof Zap;
  title: string;
  categoryBadge: string;
  segment: "industrial" | "residencial" | "ambos";
  headline: string;
  description: string;
  specs: ServiceSpec;
  checklist: string[];
  differentials: string[];
  deliverablesDetail: string[];
  normativesDetail: string[];
}

const SERVICOS: ServiceItem[] = [
  {
    id: "eletrico",
    icon: Zap,
    title: "Projeto Elétrico",
    categoryBadge: "Alta & Baixa Tensão",
    segment: "ambos",
    headline:
      "Dimensionamento preciso de carga, infraestrutura de distribuição e proteção contra sobrecargas.",
    description:
      "Desenvolvimento de projetos elétricos executivos completos para instalações industriais, comerciais e residenciais de alto padrão. Foco em estabilidade operacional, facilidade de manutenção, mitigação de curtos e redução de desperdício em condutores.",
    specs: {
      norma: "NBR 5410 & NBR 5419 (SPDA)",
      entregavel: "Diagramas DWG/BIM + Prumadas + ART CREA",
      aplicacao: "Indústrias, comércios e residências de grande porte.",
      impacto: "Até 30% de economia em condutores sem superdimensionamento.",
    },
    checklist: [
      "Dimensionamento de cargas, condutores e barramentos",
      "Projetos de Subestações de entrada e QGBT/QDF",
      "Diagramas unifilares, trifilares e de comando",
      "Malha de Aterramento e SPDA (Para-raios)",
      "Quadro de cargas e memorial descritivo com lista de materiais",
    ],
    differentials: [
      "Tolerância zero a curtos-circuitos e aquecimento indevido",
      "Aprovação facilitada junto a concessionárias de energia (CEMIG/outras)",
      "Compatibilização em BIM para evitar interferências de obra",
    ],
    deliverablesDetail: [
      "Plantas executivas de pontos de força, iluminação e prumadas em DWG/PDF",
      "Diagramas unifilares dos quadros de distribuição",
      "Memorial descritivo de cálculo e especificação de componentes",
      "Lista quantitativa de materiais para tomada de preços",
      "Anotação de Responsabilidade Técnica (ART) assinada no CREA",
    ],
    normativesDetail: [
      "ABNT NBR 5410 — Instalações Elétricas de Baixa Tensão",
      "ABNT NBR 5419 — Proteção contra Descargas Atmosféricas",
      "Normas Técnicas de Distribuição das Concessionárias de Energia",
    ],
  },
  {
    id: "luminotecnico",
    icon: Lightbulb,
    title: "Luminotécnico",
    categoryBadge: "Engenharia Fotométrica",
    segment: "ambos",
    headline:
      "Iluminação estratégica com simulação 3D, conforto visual e máxima eficiência energética.",
    description:
      "Cálculo e projeto fotométrico utilizando softwares de precisão (DIALux EVO) para galpões industriais, escritórios e residências. Garantimos a iluminância ideal exigida pelas normas, eliminações de pontos ciegos e forte redução da fatura de energia.",
    specs: {
      norma: "NBR 8995-1 / ISO 8995",
      entregavel: "Relatório Fotométrico DIALux + Planta Executiva",
      aplicacao: "Galpões industriais, escritórios e residências de luxo.",
      impacto: "Até 65% de redução no consumo de energia de iluminação.",
    },
    checklist: [
      "Simulação fotométrica 3D e mapa de curvas de iluminância (Lux)",
      "Análise de índice de ofuscamento (UGR < 19)",
      "Especificação técnica independente de marcas comerciais",
      "Dimensionamento de iluminação de emergência e balizamento",
      "Integração com sistemas de dimerização DALI / 0-10V",
    ],
    differentials: [
      "Garantia de níveis de Lux de acordo com o tipo de trabalho",
      "Especificação sem vínculo comercial com fabricantes",
      "Estudo detalhado de ROI e payback da substituição por LED",
    ],
    deliverablesDetail: [
      "Relatório fotométrico completo com simulação 3D das superfícies",
      "Planta de distribuição de luminárias e circuitos dedicados",
      "Tabela de níveis de iluminância e uniformidade por ambiente",
      "Especificação de temperatura de cor, IRC e fluxo luminoso (Lumens)",
    ],
    normativesDetail: [
      "ABNT NBR 8995-1 — Iluminação de Ambientes de Trabalho",
      "NR-17 — Ergonomia e Níveis de Iluminância no Trabalho",
    ],
  },
  {
    id: "automacao-residencial",
    icon: Home,
    title: "Automação Residencial",
    categoryBadge: "Smart Home & Cenas",
    segment: "residencial",
    headline:
      "Controle centralizado de iluminação, clima, áudio e segurança na palma da sua mão.",
    description:
      "Transformamos residências em ecossistemas inteligentes e intuitivos. Integrando desde cenas de iluminação dimerizável e climatização até persianas motorizadas e áudio multiroom com suporte a assistentes de voz e painéis de toque.",
    specs: {
      norma: "Protocolos KNX, Control4, Zigbee & Modbus",
      entregavel: "Projeto de Infraestrutura + Programação de Cenas",
      aplicacao: "Casas de alto padrão, condomínios e apartamentos.",
      impacto: "Conforto total, valorização do imóvel e eficiência térmica.",
    },
    checklist: [
      "Cenas inteligentes de iluminação ('Cinema', 'Festa', 'Ausente', 'Relax')",
      "Controle centralizado de climatização (HVAC e ar-condicionado)",
      "Automação de persianas, cortinas e claraboias motorizadas",
      "Som ambiente multiroom com caixas de embutir e zonas independentes",
      "Segurança integrada (CFTV, fechaduras biométricas e alarme)",
    ],
    differentials: [
      "Infraestrutura híbrida (cabeada para estabilidade ou sem fio)",
      "Interface simplificada que qualquer membro da família consegue usar",
      "Suporte pós-entrega com ajuste fino das cenas pré-programadas",
    ],
    deliverablesDetail: [
      "Projeto executivo de eletrodutos e fiação de automação",
      "Esquema de ligação dos módulos de potência e atuadores",
      "Manual do usuário e guia rápido das cenas configuradas",
      "Treinamento presencial/remoto de operação do sistema",
    ],
    normativesDetail: [
      "Normas ABNT para instalações eletrônicas de baixa voltagem",
      "Padrões internacionais de comunicação residencial (KNX / Zigbee 3.0)",
    ],
  },
  {
    id: "automacao-industrial",
    icon: Factory,
    title: "Automação Industrial",
    categoryBadge: "Indústria 4.0 & CLP",
    segment: "industrial",
    headline:
      "Programação de CLPs, supervisórios SCADA e adequação à NR-12 para linhas fabris.",
    description:
      "Automação de processos industriais orientada ao aumento de produtividade, rastreabilidade de dados e eliminação de riscos operacionais. Modernizamos painéis antigos (retrofit) e programamos controladores de grandes fabricantes.",
    specs: {
      norma: "NR-10, NR-12, Profinet & Modbus TCP",
      entregavel: "Código CLP/SCADA + Projeto do Painel + Treinamento",
      aplicacao: "Linhas de produção, galpões fabris, agroindústria e farma.",
      impacto: "Redução de downtime e rastreabilidade total do processo.",
    },
    checklist: [
      "Programação de CLPs (Siemens, Rockwell, Schneider, ABB)",
      "Desenvolvimento de telas de IHM e sistemas supervisórios SCADA",
      "Redes de comunicação industrial (Profinet, Profibus, Modbus)",
      "Retrofit e modernização de painéis elétricos industriais",
      "Laudos e adequação de segurança NR-12",
    ],
    differentials: [
      "Arquitetura modular com foco em facilidade de manutenção futura",
      "Tolerância a falhas e diagnóstico rápido por alarmes visuais",
      "Conformidade rigorosa com normas de segurança do trabalho",
    ],
    deliverablesDetail: [
      "Código-fonte comentado dos CLPs e projetos de telas IHM/SCADA",
      "Esquemas elétricos de painéis industriais em DWG",
      "Manual de operação industrial e matriz de intertravamentos",
      "Laudo de validação de segurança e emissão de ART de automação",
    ],
    normativesDetail: [
      "NR-10 — Segurança em Instalações e Serviços em Eletricidade",
      "NR-12 — Segurança no Trabalho em Máquinas e Equipamentos",
      "IEC 61131-3 — Linguagens de Programação para Controladores",
    ],
  },
];

const diferenciais = [
  { icon: Gauge, title: "Performance medida", desc: "Cada entrega é avaliada por velocidade, conversão e estabilidade." },
  { icon: ShieldCheck, title: "Segurança por padrão", desc: "Boas práticas de proteção de dados e conformidade desde o início." },
  { icon: Users, title: "Time multidisciplinar", desc: "Engenharia, design e negócio trabalhando no mesmo objetivo." },
  { icon: Rocket, title: "Entrega em ciclos curtos", desc: "Sprints com validação constante — você vê valor antes do fim." },
];

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (!digits) return "";
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function EngenhariaAutomacaoPage() {
  // Estado do Formulário CTA de Diagnóstico
  const [formNome, setFormNome] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formWhatsapp, setFormWhatsapp] = useState("");
  const [formDesafio, setFormDesafio] = useState("");
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");
    setIsSubmittingForm(true);

    try {
      const { error } = await supabase.from("solicitacoes_comercial").insert([
        {
          nome: formNome.trim(),
          email: formEmail.trim(),
          whatsapp: formWhatsapp.trim() || "Não informado",
          empresa: null,
          servico: "Engenharia e Automação",
          prazo: null,
          desafio: formDesafio.trim(),
          status: "Novo",
        },
      ]);

      if (error) throw error;

      setFormSubmitted(true);
      setFormNome("");
      setFormEmail("");
      setFormWhatsapp("");
      setFormDesafio("");
    } catch (err: any) {
      console.error("Erro ao enviar formulário:", err);
      setFormError("Não foi possível enviar a solicitação. Tente novamente.");
    } finally {
      setIsSubmittingForm(false);
    }
  };

  // Estado do Modal de Detalhes do Serviço
  const [selectedModalService, setSelectedModalService] =
    useState<ServiceItem | null>(null);

  // Estado do Calculador Rápido de Projetos (Estimador)
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [calcType, setCalcType] = useState<"residencial" | "industrial">(
    "industrial",
  );
  const [calcArea, setCalcArea] = useState<number>(350);
  const [calcServices, setCalcServices] = useState<string[]>([
    "eletrico",
    "luminotecnico",
  ]);

  const toggleCalcService = (id: string) => {
    if (calcServices.includes(id)) {
      if (calcServices.length > 1) {
        setCalcServices(calcServices.filter((s) => s !== id));
      }
    } else {
      setCalcServices([...calcServices, id]);
    }
  };

  // Cálculo visual da estimativa do Simulador Rápido
  const estimatedDays = Math.max(
    5,
    Math.round((calcArea / 100) * 2.5 + calcServices.length * 3),
  );
  const estimatedComplexity =
    calcArea > 1000 || calcServices.length >= 3
      ? "Alta Complexidade (Executivo)"
      : calcArea > 300
        ? "Média Complexidade (Intermediário)"
        : "Standard Técnico";

  return (
    <div className="min-h-screen flex flex-col bg-brand-white text-ink font-opensans">
      <Header />

      <main className="flex-1 pt-24 lg:pt-28">
        {/* ==========================================
            1. HERO SECTION (Tipografia 100% Padronizada com Soluções Digitais)
           ========================================== */}
        <section className="relative overflow-hidden bg-brand-white py-12 lg:py-16">
          {/* Fundo dinâmico com subtle ice blue gradient */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(900px_500px_at_85%_-10%,#B1D3E1_0%,transparent_60%)]" />

          <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
            {/* Lado Esquerdo: Conteúdo Principal */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-mid/30 bg-ice/40 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-deep">
                <Zap className="w-4 h-4 text-main" /> Engenharia &amp; Automação
              </span>

              <h1 className="mt-6 font-montserrat text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-deep">
                Projetos Elétricos &amp; Automação
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/80">
                Engenharia focada na rápida conversão de demandas técnicas em projetos executivos viáveis. 
                Combinamos rigor normativo a soluções de eficiência 
                energética e automação inteligente para indústrias, comércios e residências.
              </p>
            </div>

            {/* Lado Direito: Diamante Conselt */}
            <div className="flex items-center justify-center lg:justify-end">
              <Logo className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-contain filter drop-shadow-md transition-transform duration-500 hover:scale-105" />
            </div>
          </div>
        </section>

        {/* Divisor de Transição Prominente */}
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-4">
          <div className="h-[3px] w-full rounded-full bg-gradient-to-r from-transparent via-cyan via-main to-transparent shadow-[0_0_12px_rgba(66,165,211,0.4)]" />
        </div>

        {/* ==========================================
            2. GRID DE SERVIÇOS TÉCNICOS (Tipografia Padronizada)
           ========================================== */}
        <section id="servicos" className="bg-brand-white pt-10 pb-20 lg:pt-12 lg:pb-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            {/* Cabeçalho do Grid */}
            <div className="max-w-2xl">
              <h2 className="font-montserrat text-3xl lg:text-4xl font-extrabold text-deep">
                Serviços de Engenharia Especializada
              </h2>
              <p className="mt-4 text-lg text-ink/75">
                Selecione um projeto para explorar o memorial descritivo, normas aplicadas, entregáveis e especificações detalhadas.
              </p>
            </div>

            {/* Grid dos 4 Cards */}
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {SERVICOS.map((servico) => {
                const IconComponent = servico.icon;
                return (
                  <article
                    key={servico.id}
                    className="group relative flex flex-col rounded-3xl border border-mid/20 bg-brand-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-main hover:shadow-[0_24px_60px_-30px_#184C77]"
                  >
                    {/* Header do Card */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ice/60 text-mid transition-colors duration-300 group-hover:bg-main group-hover:text-brand-white">
                        <IconComponent className="h-7 w-7" strokeWidth={1.75} />
                      </div>
                      <span className="rounded-full bg-ice/40 border border-mid/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-deep">
                        {servico.categoryBadge}
                      </span>
                    </div>

                    {/* Título & Subtítulo */}
                    <h3 className="mt-6 font-montserrat text-2xl font-bold text-deep min-h-[40px] flex items-center">
                      {servico.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-ink/75 text-left">
                      {servico.headline}
                    </p>

                    {/* Mini Tabela de Especificações */}
                    <div className="mt-6 rounded-2xl border border-mid/20 bg-ice/30 p-4 space-y-3.5 text-xs">
                      <div className="flex flex-col gap-1 pb-3.5 border-b border-mid/10">
                        <span className="font-bold text-mid">Aplicação Primária:</span>
                        <span className="font-semibold text-ink leading-relaxed">
                          {servico.specs.aplicacao}
                        </span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="font-bold text-mid">Diferencial de Custo:</span>
                        <span className="font-semibold text-ink leading-relaxed">
                          {servico.specs.impacto}
                        </span>
                      </div>
                    </div>

                    {/* Checklist de Escopo */}
                    <div className="mt-6 space-y-2.5 flex-1">
                      <p className="text-xs font-bold uppercase tracking-widest text-mid">
                        Escopo técnico contemplado:
                      </p>
                      {servico.checklist.slice(0, 4).map((item) => (
                        <div key={item} className="flex items-start gap-2.5 text-sm text-ink/85">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan" strokeWidth={3} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Botão Solicitar este serviço */}
                    <div className="mt-8 pt-6 border-t border-mid/20 flex items-center justify-between">
                      <Link
                        to="/contato"
                        className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-main transition-colors hover:text-deep"
                      >
                        Solicitar este serviço <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Transição ultra estreita entre Serviços e Por que a CONSELT */}
        <div className="h-4 sm:h-6 w-full bg-gradient-to-b from-brand-white to-night pointer-events-none select-none" />

        {/* ==========================================
            3. SEÇÃO POR QUE A CONSELT (Herdada e com Tipografia Idêntica)
           ========================================== */}
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
                { n: "15 dias", l: "para o primeiro entregável" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-montserrat text-4xl font-extrabold text-cyan">{s.n}</div>
                  <div className="mt-1 text-sm uppercase tracking-widest text-ice/70">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transição ultra estreita ao final de Por que a CONSELT */}
        <div className="h-4 sm:h-6 w-full bg-gradient-to-b from-night to-ice/40 pointer-events-none select-none" />

        {/* ==========================================
            4. CTA FINAL (Herdada de Soluções Digitais)
           ========================================== */}
        <section id="orcamento-tecnico" className="bg-ice/40 py-20 lg:py-28">
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

                {formSubmitted ? (
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
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs font-bold text-emerald-800 underline hover:text-emerald-950 cursor-pointer"
                    >
                      Enviar outra mensagem
                    </button>
                  </div>
                ) : (
                  <form
                    className="grid gap-4"
                    onSubmit={handleFormSubmit}
                  >
                    {formError && (
                      <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                        <span>{formError}</span>
                      </div>
                    )}

                    <input
                      type="text"
                      required
                      value={formNome}
                      onChange={(e) => setFormNome(e.target.value)}
                      placeholder="Seu nome completo"
                      className="w-full rounded-xl border border-mid/30 bg-brand-white px-4 py-3 text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-main"
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="email"
                        required
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        placeholder="E-mail corporativo"
                        className="w-full rounded-xl border border-mid/30 bg-brand-white px-4 py-3 text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-main"
                      />
                      <input
                        type="tel"
                        required
                        maxLength={15}
                        value={formWhatsapp}
                        onChange={(e) => setFormWhatsapp(formatPhone(e.target.value))}
                        placeholder="WhatsApp (00) 00000-0000"
                        className="w-full rounded-xl border border-mid/30 bg-brand-white px-4 py-3 text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-main"
                      />
                    </div>

                    <textarea
                      rows={3}
                      required
                      value={formDesafio}
                      onChange={(e) => setFormDesafio(e.target.value)}
                      placeholder="Qual solução você precisa? Descreva o desafio..."
                      className="w-full resize-none rounded-xl border border-mid/30 bg-brand-white px-4 py-3 text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-main"
                    />

                    <button
                      type="submit"
                      disabled={isSubmittingForm}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-night transition-all duration-300 hover:scale-[1.02] hover:opacity-95 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                      {isSubmittingForm ? (
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

        {/* ==========================================
            MODAL 1: DETALHES DO ESCOPO DO SERVIÇO
           ========================================== */}
        {selectedModalService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-night/70 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-mid/40 bg-brand-white p-6 sm:p-8 shadow-2xl">
              {/* Fechar Modal */}
              <button
                onClick={() => setSelectedModalService(null)}
                className="absolute top-6 right-6 flex h-9 w-9 items-center justify-center rounded-full bg-ice/50 text-deep hover:bg-deep hover:text-brand-white transition-colors cursor-pointer"
                aria-label="Fechar"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-deep text-cyan">
                  <selectedModalService.icon className="h-6 w-6" />
                </div>
                <div>
                  <span className="rounded-full bg-ice/50 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-deep">
                    {selectedModalService.categoryBadge}
                  </span>
                  <h3 className="font-montserrat text-2xl font-bold text-deep mt-0.5">
                    {selectedModalService.title}
                  </h3>
                </div>
              </div>

              <p className="mt-4 text-sm text-ink/85 leading-relaxed font-medium">
                {selectedModalService.description}
              </p>

              {/* Lista de Entregáveis Detalhados */}
              <div className="mt-6 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-mid">
                  Entregáveis inclusos no Projeto Executivo:
                </h4>
                <div className="space-y-2">
                  {selectedModalService.deliverablesDetail.map((d, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-ink p-2.5 rounded-xl bg-ice/30 border border-mid/20">
                      <CheckCircle2 className="w-4 h-4 text-main shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ações do Modal */}
              <div className="mt-8 pt-6 border-t border-mid/20 flex items-center justify-end">
                <button
                  onClick={() => setSelectedModalService(null)}
                  className="px-6 py-2.5 rounded-full bg-deep text-xs font-extrabold uppercase tracking-wider text-brand-white hover:bg-main transition-colors cursor-pointer"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer fromColor="#E5F2F7" />
    </div>
  );
}
