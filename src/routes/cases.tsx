import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/cases")({
  head: () => ({
    meta: [
      { title: "Cases — Conselt" },
      { name: "description", content: "Cases e projetos desenvolvidos pela Conselt." },
    ],
  }),
  component: CasesPage,
});

type CaseItem = {
  title: string;
  service: string;
  segment: string;
  challenge: string;
  description: string;
};

const CASES: CaseItem[] = [
  {
    title: "Website",
    service: "Website",
    segment: "Institucional",
    challenge: "Presença digital",
    description:
      "Desenvolvimento de sites WordPress profissionais com foco em otimização de custo e velocidade de entrega",
  },
  {
    title: "Software",
    service: "Software",
    segment: "Varejo",
    challenge: "Vendas online",
    description: "Desenvolvimento de e-commerces em WordPress com Woocommerce",
  },
  {
    title: "Aplicativo",
    service: "Aplicativo",
    segment: "Serviços",
    challenge: "Aproximação do cliente",
    description:
      "Desenvolvimento de aplicativos para aproximar o seu negócio do meio digital",
  },
  {
    title: "Projeto Elétrico",
    service: "Projeto Elétrico",
    segment: "Engenharia",
    challenge: "Eficiência e segurança",
    description:
      "Desenvolvemos projetos elétricos completos para residências, comércios e indústrias, utilizando o AutoCAD e Revit",
  },
  {
    title: "Projeto Luminotécnico",
    service: "Projeto Luminotécnico",
    segment: "Engenharia",
    challenge: "Conforto visual",
    description:
      "Criamos projetos luminotécnicos personalizados no DIALux, otimizando iluminação, conforto visual e economia de energia",
  },
  {
    title: "Automação",
    service: "Automação",
    segment: "Residencial",
    challenge: "Otimização e conforto",
    description:
      "Desenvolvemos soluções personalizadas de automação descentralizada para sua residência com foco em otimização e conforto",
  },
];

const FILTERS = [
  "Todos",
  "Website",
  "Software",
  "Aplicativo",
  "Projeto Elétrico",
  "Projeto Luminotécnico",
  "Automação",
];

function CasesPage() {
  const [filter, setFilter] = useState("Todos");
  const visible = filter === "Todos" ? CASES : CASES.filter((c) => c.service === filter);

  return (
    <div className="min-h-screen flex flex-col bg-brand-white text-ink font-opensans">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="relative bg-brand-white pt-32 pb-16 lg:pt-40 lg:pb-24 px-6 lg:px-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(9,53,101,0.07) 1px, transparent 0)",
            backgroundSize: "26px 26px",
          }}
        >
          <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-mid/30 bg-ice/40 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-deep">
              Portfólio
            </span>
            <h1 className="mt-6 font-montserrat text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-deep">
              CASES
            </h1>
            <p className="mt-4 max-w-2xl text-xl lg:text-2xl font-semibold leading-relaxed text-mid">
              Resultados construídos a partir de desafios reais
            </p>
            <p className="mt-6 max-w-3xl text-base lg:text-lg leading-relaxed text-ink/80">
              Explore projetos de soluções digitais, engenharia e automação e entenda o
              problema, o processo e a transformação entregue em cada caso.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="px-6 lg:px-10 pb-6">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-5 py-2 text-sm font-bold uppercase tracking-wide transition-colors border ${
                  filter === f
                    ? "bg-deep text-brand-white border-deep"
                    : "bg-brand-white text-mid border-mid/30 hover:border-mid hover:text-deep"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </section>

        {/* Cards Grid */}
        <section className="px-6 lg:px-10 pb-24">
          <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((c) => (
              <article
                key={c.title}
                className="group relative h-64 overflow-hidden rounded-xl bg-cyan shadow-card transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Base content */}
                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-white/80">
                    {c.service} · {c.segment}
                  </span>
                  <div>
                    <h3 className="font-montserrat text-2xl font-extrabold text-brand-white">
                      {c.title}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-brand-white/85">
                      {c.challenge}
                    </p>
                  </div>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-deep/90 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-center text-base font-semibold leading-relaxed text-brand-white">
                    {c.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
