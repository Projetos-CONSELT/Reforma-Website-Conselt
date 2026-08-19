import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/engenharia-automacao")({
  head: () => ({
    meta: [
      { title: "Engenharia e Automação — Conselt" },
      { name: "description", content: "Soluções em Engenharia e Automação desenvolvidas pela Conselt." },
    ],
  }),
  component: EngenhariaAutomacaoPage,
});

function EngenhariaAutomacaoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 lg:px-10 max-w-7xl mx-auto w-full">
        {/* Página Engenharia e Automação - inicialmente vazia */}
      </main>
      <Footer />
    </div>
  );
}
