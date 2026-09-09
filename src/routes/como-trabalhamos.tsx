import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Search,
  FileText,
  Code2,
  CheckCircle2,
  Rocket,
  Quote,
} from "lucide-react";

export const STEPS = [
  {
    icon: Search,
    title: "Diagnóstico",
    description:
      "Entendemos o contexto, o problema, o público e o resultado esperado.",
  },
  {
    icon: FileText,
    title: "Proposta e escopo",
    description:
      "Definimos entregas, responsabilidades, prazo e critérios de validação.",
  },
  {
    icon: Code2,
    title: "Desenvolvimento",
    description:
      "Executamos o projeto com acompanhamento e registros de evolução.",
  },
  {
    icon: CheckCircle2,
    title: "Validação",
    description:
      "Testamos, revisamos e ajustamos com base no escopo aprovado.",
  },
  {
    icon: Rocket,
    title: "Entrega e orientação",
    description:
      "Entregamos a solução, a documentação necessária e os próximos passos.",
  },
];

export const TESTIMONIALS = [
  {
    author: "Lary Pacheco",
    quote:
      "Gostaria de expressar minha satisfação com o trabalho realizado pela empresa Conselt na consultoria na criação do meu website. A equipe demonstrou profissionalismo, criatividade e atenção aos detalhes, resultando em um resultado que superou minhas expectativas. A comunicação foi clara e eficiente, e o prazo foi cumprido. Recomendo a marca para qualquer pessoa que busque uma solução de qualidade para sua presença on-line.",
  },
  {
    author: "Sinomar",
    quote:
      "Gostei muito, equipe muito atenciosa, coerente e responsável no atendimento ao cliente.",
  },
  {
    author: "Constru",
    quote:
      "Olá, equipe da Conselt! Estamos extremamente satisfeitos com todo o processo de reestruturação do nosso site. O atendimento de vocês foi maravilhoso do início ao fim, sempre com muita agilidade, profissionalismo e uma atenção genuína às nossas necessidades. O resultado final ficou ótimo! Sobre pontos de melhoria, sinceramente, não temos nada a acrescentar. Houve uma comunicação clara e constante durante todo o processo e os prazos foram cumpridos. Agradecemos imensamente pelo trabalho excepcional! Um grande abraço de toda a equipe Constru.",
  },
  {
    author: "Marketeando",
    quote:
      "Equipe muito organizada e atenciosa. Foram muito solícitos em mostrar o andamento do projeto e em tirar nossas dúvidas. Buscaram se adequar ao máximo a nossa identidade visual e acataram os ajustes necessários muito bem. Agradecemos todo o empenho que tiveram para entregar o site que, a propósito, ficou do jeitinho que imaginávamos.",
  },
  {
    author: "Ledoc",
    quote:
      "Olá, fizemos a contratação da Conselt para a criação do site do projeto que foi finalizado, porém o site ficou aquém do que esperávamos e não comporta todo o material que precisamos inserir. Acredito que não houve um dimensionamento correto por falta de conhecimento da demanda e estamos com alguns problemas. A equipe tinha boa vontade, mas acho que faltou compreensão da nossa demanda de disponibilizar um acervo fotográfico que acarretaria espaço e, um site um pouco mais moderno e dinâmico. Gostaria de sugerir que as reuniões não sejam somente on-line, que façam visitas aos contratantes a depender da demanda para a visualização e melhor compreensão do serviço a ser prestado. Sugiro, ainda, que tentem estabelecer uma comunicação mais clara e mais detida, buscando atender o público que pode não ter acesso ou conhecimento da linguagem técnica da área.",
  },
];

export const Route = createFileRoute("/como-trabalhamos")({
  head: () => ({
    meta: [
      { title: "Como Trabalhamos — Conselt" },
      { name: "description", content: "Conheça nossa metodologia de trabalho na Conselt." },
    ],
  }),
  component: ComoTrabalhamosPage,
});

function ComoTrabalhamosPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-foreground">
      <Header />
      <main className="flex-1">
        <section
          className="relative bg-brand-white pt-32 lg:pt-36 pb-10 lg:pb-12 px-6 lg:px-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(9,53,101,0.07) 1px, transparent 0)",
            backgroundSize: "26px 26px",
          }}
        >
          <div className="max-w-5xl mx-auto w-full text-center">
            <h1
              className="font-montserrat text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight"
              style={{
                color: "#093565",
                textShadow: "0 3px 14px rgba(9,53,101,0.18)",
              }}
            >
              {"Do diagnóstico à entrega:\u00a0"}
              <br />
              um processo claro em cada etapa
            </h1>
          </div>
        </section>

        <section className="bg-brand-white px-6 lg:px-10 pb-10 lg:pb-14">
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              <div
                className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-px"
                style={{
                  background:
                    "linear-gradient(90deg, #42A5D3, #2270A1, #184C77, #2270A1, #42A5D3)",
                }}
              />
              <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6">
                {STEPS.map((step, i) => (
                  <li key={step.title} className="group relative text-center">
                    <div
                      className="step-icon relative mx-auto flex items-center justify-center w-[104px] h-[104px] rounded-3xl transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-[0_22px_50px_-12px_rgba(9,53,101,0.55)]"
                      style={{
                        background:
                          "linear-gradient(135deg, #093565 0%, #184C77 55%, #2270A1 100%)",
                        boxShadow:
                          "0 18px 40px -14px rgba(9,53,101,0.45), inset 0 1px 0 rgba(177,211,225,0.35)",
                      }}
                    >
                      <span
                        className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        style={{
                          background:
                            "linear-gradient(135deg, #42A5D3 0%, #2270A1 55%, #184C77 100%)",
                        }}
                      />
                      <span
                        className="absolute -top-2 -right-2 flex items-center justify-center w-8 h-8 rounded-full font-montserrat text-sm font-bold z-10"
                        style={{ background: "#42A5D3", color: "#FFFFFF" }}
                      >
                        {i + 1}°
                      </span>
                      <step.icon
                        className="relative z-10 w-11 h-11 transition-transform duration-300 group-hover:scale-110"
                        style={{ color: "#FFFFFF" }}
                        strokeWidth={3}
                      />
                      <span
                        className="step-ring absolute inset-0 rounded-3xl pointer-events-none z-10"
                        style={{ border: "1px solid rgba(66,165,211,0.55)" }}
                      />
                    </div>
                    <h3
                      className="font-montserrat mt-6 text-lg font-bold transition-transform duration-300 group-hover:scale-105"
                      style={{ color: "#093565" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="mt-2 text-sm leading-relaxed max-w-[240px] mx-auto transition-transform duration-300 group-hover:scale-105"
                      style={{ color: "#162638" }}
                    >
                      {step.description}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section
          className="relative px-6 lg:px-10 py-20 lg:py-28"
          style={{ background: "#051D3E" }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14 lg:mb-18">
              <h2
                className="font-montserrat text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight"
                style={{
                  color: "#FFFFFF",
                  textShadow: "0 2px 10px rgba(0,0,0,0.25)",
                }}
              >
                O que dizem quem confia na gente
              </h2>
              <p
                className="mt-3 text-base sm:text-lg max-w-2xl mx-auto"
                style={{ color: "#B1D3E1" }}
              >
                Histórias reais de parceiros que viveram nosso processo de perto
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:gap-8">
              {TESTIMONIALS.map((t) => (
                <article
                  key={t.author}
                  className="group relative flex flex-col lg:flex-row items-stretch rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_-12px_rgba(9,53,101,0.25)]"
                  style={{
                    background:
                      "linear-gradient(135deg, #FFFFFF 0%, #B1D3E1 100%)",
                    borderColor: "rgba(66,165,211,0.45)",
                  }}
                >
                  <div className="flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                    <Quote
                      className="w-8 h-8 mb-4 opacity-70"
                      style={{ color: "#162638" }}
                    />
                    <p
                      className="text-sm sm:text-base leading-relaxed"
                      style={{ color: "#162638" }}
                    >
                      {t.quote}
                    </p>
                  </div>

                  <div
                    className="lg:w-64 shrink-0 flex items-center justify-center p-6 sm:p-8 lg:p-10 lg:border-l border-t lg:border-t-0"
                    style={{
                      borderColor: "rgba(22,112,161,0.25)",
                    }}
                  >
                    <span
                      className="font-opensans text-sm sm:text-base font-bold tracking-wide text-center lg:text-left"
                      style={{ color: "#162638" }}
                    >
                      — {t.author}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
