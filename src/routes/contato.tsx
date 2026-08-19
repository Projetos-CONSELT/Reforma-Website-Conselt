import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Conselt" },
      { name: "description", content: "Entre em contato ou solicite um diagnóstico com a Conselt." },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 lg:px-10 max-w-7xl mx-auto w-full">
        {/* Página Contato/Diagnóstico - inicialmente vazia */}
      </main>
      <Footer />
    </div>
  );
}
