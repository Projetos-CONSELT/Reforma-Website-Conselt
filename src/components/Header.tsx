import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "@/components/Logo";

export const footerNavLinks = [
  { label: "Soluções Digitais", href: "/solucoes-digitais" },
  { label: "Engenharia e Automação", href: "/engenharia-automacao" },
  { label: "Cases", href: "/cases" },
  { label: "Como Trabalhamos", href: "/como-trabalhamos" },
  { label: "Sobre a CONSELT", href: "/sobre" },
  { label: "Conteúdos", href: "/blog" },
  { label: "Solicitar Diagnóstico", href: "/contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [solucoesOpen, setSolucoesOpen] = useState(false);
  const location = useLocation();

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const isSolucoesActive =
    location.pathname === "/solucoes-digitais" ||
    location.pathname === "/engenharia-automacao";

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-brand-white border-b border-brand-blue/10 shadow-sm font-opensans">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-24 lg:h-28 grid grid-cols-2 lg:grid-cols-[1fr_auto_1fr] items-center gap-4">
        {/* Esquerda: Botão com a Logo do Diamante (abre a página atual de Home) */}
        <div className="flex items-center justify-start shrink-0">
          <Link
            to="/"
            onClick={handleLogoClick}
            className="flex items-center justify-center shrink-0 p-1 rounded-xl transition-transform duration-300 hover:scale-105 focus:outline-none font-opensans"
            title="Ir para o início da Home"
            aria-label="Conselt - Página principal"
          >
            <Logo className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 shrink-0 object-contain" />
          </Link>
        </div>

        {/* Centro: Títulos do menu centralizados em fonte Open Sans */}
        <nav className="hidden lg:flex items-center justify-center gap-5 xl:gap-7 font-opensans">
          {/* Soluções (Dropdown com 2 opções) */}
          <div
            className="relative"
            onMouseEnter={() => setSolucoesOpen(true)}
            onMouseLeave={() => setSolucoesOpen(false)}
          >
            <button
              onClick={() => setSolucoesOpen(!solucoesOpen)}
              className={`relative flex items-center gap-1 font-opensans text-xs xl:text-sm font-bold uppercase tracking-wider text-brand-blue transition-opacity duration-300 hover:opacity-75 after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-0.5 after:bg-brand-blue after:transition-all after:duration-300 ${
                isSolucoesActive ? "opacity-100 after:w-full font-extrabold" : "after:w-0 hover:after:w-full"
              }`}
            >
              Soluções
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${solucoesOpen ? "rotate-180" : ""}`} />
            </button>

            {solucoesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-64 z-50 font-opensans">
                <div className="bg-brand-white border border-brand-blue/15 rounded-2xl p-2 shadow-xl flex flex-col gap-1">
                  <Link
                    to="/solucoes-digitais"
                    onClick={() => setSolucoesOpen(false)}
                    className="px-4 py-3 rounded-xl font-opensans text-xs xl:text-sm font-bold uppercase tracking-wider text-brand-blue hover:bg-brand-blue/10 transition-colors text-center"
                    activeProps={{ className: "bg-brand-blue/15 font-extrabold" }}
                  >
                    Soluções digitais
                  </Link>
                  <Link
                    to="/engenharia-automacao"
                    onClick={() => setSolucoesOpen(false)}
                    className="px-4 py-3 rounded-xl font-opensans text-xs xl:text-sm font-bold uppercase tracking-wider text-brand-blue hover:bg-brand-blue/10 transition-colors text-center"
                    activeProps={{ className: "bg-brand-blue/15 font-extrabold" }}
                  >
                    Engenharia e automação
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Cases */}
          <Link
            to="/cases"
            className="relative font-opensans text-xs xl:text-sm font-bold uppercase tracking-wider text-brand-blue transition-opacity duration-300 hover:opacity-75 after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-0.5 after:w-0 after:bg-brand-blue after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap"
            activeProps={{
              className: "opacity-100 after:w-full font-extrabold text-brand-blue",
            }}
          >
            Cases
          </Link>

          {/* Como Trabalhamos */}
          <Link
            to="/como-trabalhamos"
            className="relative font-opensans text-xs xl:text-sm font-bold uppercase tracking-wider text-brand-blue transition-opacity duration-300 hover:opacity-75 after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-0.5 after:w-0 after:bg-brand-blue after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap"
            activeProps={{
              className: "opacity-100 after:w-full font-extrabold text-brand-blue",
            }}
          >
            Como Trabalhamos
          </Link>

          {/* Sobre a CONSELT */}
          <Link
            to="/sobre"
            className="relative font-opensans text-xs xl:text-sm font-bold uppercase tracking-wider text-brand-blue transition-opacity duration-300 hover:opacity-75 after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-0.5 after:w-0 after:bg-brand-blue after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap"
            activeProps={{
              className: "opacity-100 after:w-full font-extrabold text-brand-blue",
            }}
          >
            Sobre a CONSELT
          </Link>

          {/* Conteúdos */}
          <Link
            to="/blog"
            className="relative font-opensans text-xs xl:text-sm font-bold uppercase tracking-wider text-brand-blue transition-opacity duration-300 hover:opacity-75 after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-0.5 after:w-0 after:bg-brand-blue after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap"
            activeProps={{
              className: "opacity-100 after:w-full font-extrabold text-brand-blue",
            }}
          >
            Conteúdos
          </Link>
        </nav>

        {/* Direita: Botão "Solicitar Diagnóstico" (#073A7D bg, #FFFFFF text) em Open Sans */}
        <div className="flex items-center justify-end gap-3 font-opensans">
          <Link
            to="/contato"
            className="hidden sm:inline-flex items-center justify-center px-5 xl:px-6 py-3 rounded-full font-opensans text-xs xl:text-sm font-extrabold uppercase tracking-wider bg-[#073A7D] text-[#FFFFFF] shadow-md hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Solicitar Diagnóstico
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg text-brand-blue hover:bg-brand-blue/5 transition-colors"
            aria-label="Menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menu mobile em fonte Open Sans */}
      {open && (
        <div className="lg:hidden border-t border-brand-blue/10 bg-brand-white font-opensans">
          <nav className="flex flex-col p-6 gap-4 font-opensans items-center text-center">
            <Link
              to="/solucoes-digitais"
              onClick={() => setOpen(false)}
              className="font-opensans text-base font-semibold uppercase text-brand-blue hover:opacity-70 transition-opacity text-center"
              activeProps={{ className: "font-bold text-primary" }}
            >
              Soluções digitais
            </Link>
            <Link
              to="/engenharia-automacao"
              onClick={() => setOpen(false)}
              className="font-opensans text-base font-semibold uppercase text-brand-blue hover:opacity-70 transition-opacity text-center"
              activeProps={{ className: "font-bold text-primary" }}
            >
              Engenharia e automação
            </Link>
            <Link
              to="/cases"
              onClick={() => setOpen(false)}
              className="font-opensans text-base font-semibold uppercase text-brand-blue hover:opacity-70 transition-opacity text-center"
              activeProps={{ className: "font-bold text-primary" }}
            >
              Cases
            </Link>
            <Link
              to="/como-trabalhamos"
              onClick={() => setOpen(false)}
              className="font-opensans text-base font-semibold uppercase text-brand-blue hover:opacity-70 transition-opacity text-center"
              activeProps={{ className: "font-bold text-primary" }}
            >
              Como Trabalhamos
            </Link>
            <Link
              to="/sobre"
              onClick={() => setOpen(false)}
              className="font-opensans text-base font-semibold uppercase text-brand-blue hover:opacity-70 transition-opacity text-center"
              activeProps={{ className: "font-bold text-primary" }}
            >
              Sobre a CONSELT
            </Link>
            <Link
              to="/blog"
              onClick={() => setOpen(false)}
              className="font-opensans text-base font-semibold uppercase text-brand-blue hover:opacity-70 transition-opacity text-center"
              activeProps={{ className: "font-bold text-primary" }}
            >
              Conteúdos
            </Link>

            <div className="pt-2 font-opensans w-full flex justify-center">
              <Link
                to="/contato"
                onClick={() => setOpen(false)}
                className="w-full inline-flex items-center justify-center px-6 py-3 rounded-full font-opensans text-sm font-extrabold uppercase tracking-wider bg-[#073A7D] text-[#FFFFFF] shadow-md text-center"
              >
                Solicitar Diagnóstico
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
