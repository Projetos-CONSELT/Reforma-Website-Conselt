import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Search,
  FileText,
  Code2,
  CheckCircle2,
  Rocket,
} from "lucide-react";

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
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section
          className="relative bg-brand-white py-24 lg:py-32 px-6 lg:px-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(9,53,101,0.07) 1px, transparent 0)",
            backgroundSize: "26px 26px",
          }}
        >
          <div className="max-w-5xl mx-auto w-full text-center">
            <h1
              className="font-montserrat text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight"
              style={{ color: "#093565" }}
            >
              {"Do diagnóstico à entrega:\u00a0"}
              <br />
              um processo claro em cada etapa
            </h1>
          </div>
        </section>

        <section className="bg-brand-white px-6 lg:px-10 pb-24 lg:pb-32">
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
                      className="step-icon relative mx-auto flex items-center justify-center w-[104px] h-[104px] rounded-3xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
                      style={{
                        background:
                          "linear-gradient(135deg, #093565 0%, #184C77 55%, #2270A1 100%)",
                        boxShadow:
                          "0 18px 40px -14px rgba(9,53,101,0.45), inset 0 1px 0 rgba(177,211,225,0.35)",
                      }}
                    >
                      <span
                        className="absolute -top-2 -right-2 flex items-center justify-center w-8 h-8 rounded-full font-montserrat text-sm font-bold"
                        style={{ background: "#42A5D3", color: "#FFFFFF" }}
                      >
                        {i + 1}
                      </span>
                      <step.icon
                        className="w-11 h-11 transition-transform duration-300 group-hover:scale-110"
                        style={{ color: "#B1D3E1" }}
                        strokeWidth={1.8}
                      />
                      <span
                        className="step-ring absolute inset-0 rounded-3xl pointer-events-none"
                        style={{ border: "1px solid rgba(66,165,211,0.55)" }}
                      />
                    </div>
                    <h3
                      className="font-montserrat mt-6 text-lg font-bold"
                      style={{ color: "#093565" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="mt-2 text-sm leading-relaxed max-w-[240px] mx-auto"
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
      </main>
      <Footer />
    </div>
  );
}
