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
              className="font-montserrat text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight"
              style={{ color: "#093565" }}
            >
              {"Do diagnóstico à entrega:\u00a0"}
              <br />
              um processo claro em cada etapa
            </h1>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
