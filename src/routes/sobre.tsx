import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a CONSELT — Conselt" },
      { name: "description", content: "Conheça a história e a equipe da Conselt." },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 lg:px-10 max-w-7xl mx-auto w-full">
        {/* Página Sobre a CONSELT - inicialmente vazia */}
      </main>
      <Footer />
    </div>
  );
}
