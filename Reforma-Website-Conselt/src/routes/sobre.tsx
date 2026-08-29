import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/about/HeroSection";
import { EssenceSection } from "@/components/about/EssenceSection";
import { TeamSection } from "@/components/about/TeamSection";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a CONSELT — Empresa Júnior de Engenharia Elétrica" },
      {
        name: "description",
        content:
          "Conheça a CONSELT, empresa júnior vinculada à Faculdade de Engenharia Elétrica da UFU. Descubra nossa missão, valores e equipe de profissionais.",
      },
      { property: "og:title", content: "Sobre a CONSELT — Empresa Júnior" },
      {
        property: "og:description",
        content: "Soluções inovadoras em engenharia elétrica e automação. Conheça nossa equipe.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: SobrePage,
});

/**
 * SobrePage - Página completa sobre a CONSELT
 * Inclui apresentação institucional, missão/visão/valores e equipe por diretoria
 * Responsiva, acessível e otimizada para SEO
 */
function SobrePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-foreground">
      <Header />

      <main className="flex-1 pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 lg:px-10 max-w-7xl mx-auto w-full">
        {/* Hero Section - Apresentação Institucional */}
        <HeroSection />

        {/* Essence Section - Missão, Visão e Valores */}
        <EssenceSection />

        {/* Team Section - Diretorias e Membros */}
        <TeamSection />
      </main>

      <Footer />
    </div>
  );
}
