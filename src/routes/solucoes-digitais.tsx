import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/solucoes-digitais")({
  head: () => ({
    meta: [
      { title: "Soluções Digitais — Conselt" },
      { name: "description", content: "Soluções digitais sob medida desenvolvidas pela Conselt." },
    ],
  }),
  component: SolucoesDigitaisPage,
});

function SolucoesDigitaisPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 lg:px-10 max-w-7xl mx-auto w-full">
        {/* Página Soluções Digitais - inicialmente vazia */}
      </main>
      <Footer />
    </div>
  );
}
