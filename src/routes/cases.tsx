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

function CasesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-white text-ink font-opensans">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-brand-white pt-32 pb-16 lg:pt-40 lg:pb-24 px-6 lg:px-10">
          <div className="max-w-7xl mx-auto w-full">
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
              Explore projetos de soluções digitais, engenharia e automação e entenda o problema, o processo e a transformação entregue em cada caso.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
