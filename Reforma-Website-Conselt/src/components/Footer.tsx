import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, MessageCircle, MapPin, Phone, Mail } from "lucide-react";
import { Logo } from "@/components/Logo";

const quickLinks = [
  { label: "Soluções Digitais", href: "/solucoes-digitais" },
  { label: "Engenharia e Automação", href: "/engenharia-automacao" },
  { label: "Cases", href: "/cases" },
  { label: "Como Trabalhamos", href: "/como-trabalhamos" },
  { label: "Sobre a CONSELT", href: "/sobre" },
  { label: "Conteúdos", href: "/blog" },
  { label: "Solicitar Diagnóstico", href: "/contato" },
];

export function Footer() {
  return (
    <footer id="contatos" className="relative bg-[#051D3E] font-opensans text-[#FFFFFF]">
      {/* Container Principal do Rodapé em 4 Colunas */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 text-left">
        
        {/* Coluna 1: Marca & Logo */}
        <div className="flex flex-col items-start justify-start">
          <Link to="/" className="inline-block">
            <Logo className="w-24 h-24 sm:w-28 sm:h-28" />
          </Link>
          <p className="mt-4 font-opensans text-sm sm:text-base leading-relaxed text-[#B1D3E1]">
            Engenharia e Tecnologia sob medida para transformar desafios complexos em soluções eficientes e mensuráveis.
          </p>
          <div className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#42A5D3]">
            Vinculada à FEELT / UFU
          </div>
        </div>

        {/* Coluna 2: Navegação Rápida (respeitando caixa normal/sem uppercase) */}
        <div>
          <h4 className="font-opensans font-bold text-base lg:text-lg text-[#FFFFFF] mb-5 pb-2 border-b border-[#B1D3E1]/20">
            Navegação Rápida
          </h4>
          <ul className="space-y-2.5">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.href}
                  className="font-opensans text-sm sm:text-base text-[#B1D3E1] hover:text-[#FFFFFF] transition-all inline-block"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Coluna 3: Contato e SEO Local (NAP) */}
        <div>
          <h4 className="font-opensans font-bold text-base lg:text-lg text-[#FFFFFF] mb-5 pb-2 border-b border-[#B1D3E1]/20">
            Contato & Localização
          </h4>
          <div className="space-y-4 font-opensans text-sm sm:text-base text-[#B1D3E1]">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#42A5D3] shrink-0 mt-1" />
              <span className="leading-relaxed">
                Universidade Federal de Uberlândia — Av. João Naves de Ávila, Bloco 1N, 2121 — Sala 06, Saraiva, Uberlândia - MG, 38408-144
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#42A5D3] shrink-0" />
              <a href="tel:+5534999999999" className="hover:text-[#FFFFFF] transition-colors">
                (34) 99999-9999
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#42A5D3] shrink-0" />
              <a href="mailto:contato@conselt.com.br" className="hover:text-[#FFFFFF] transition-colors">
                contato@conselt.com.br
              </a>
            </div>
          </div>
        </div>

        {/* Coluna 4: Redes Sociais & Mapa */}
        <div className="flex flex-col justify-between">
          <div>
            <h4 className="font-opensans font-bold text-base lg:text-lg text-[#FFFFFF] mb-5 pb-2 border-b border-[#B1D3E1]/20">
              Siga-nos
            </h4>

            {/* Ícones de Redes Sociais incluindo WhatsApp */}
            <div className="flex items-center gap-4 mb-6">
              <a
                href="https://wa.me/5534999999999"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-xl bg-[#42A5D3]/10 border border-[#42A5D3]/30 grid place-items-center text-[#B1D3E1] hover:bg-[#42A5D3] hover:text-[#051D3E] transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-[#42A5D3]/10 border border-[#42A5D3]/30 grid place-items-center text-[#B1D3E1] hover:bg-[#42A5D3] hover:text-[#051D3E] transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl bg-[#42A5D3]/10 border border-[#42A5D3]/30 grid place-items-center text-[#B1D3E1] hover:bg-[#42A5D3] hover:text-[#051D3E] transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Mapa do Google Embed */}
          <div className="w-full overflow-hidden rounded-xl border border-[#B1D3E1]/20 shadow-sm">
            <iframe
              title="Mapa CONSELT — Universidade Federal de Uberlândia"
              src="https://maps.google.com/maps?q=Universidade%20Federal%20de%20Uberl%C3%A2ndia%2C%20Av%20Jo%C3%A3o%20Naves%20de%20%C3%81vila%2C%202121%2C%20Bloco%201N%2C%20Santa%20M%C3%B4nica%2C%20Uberl%C3%A2ndia%20-%20MG%2C%2038408-144&z=16&output=embed"
              className="w-full h-36 border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>

      {/* Barra Inferior (Copyright em tom mais escuro #03132B) */}
      <div className="bg-[#03132B] border-t border-[#B1D3E1]/10 py-5 px-6 lg:px-10 text-center font-opensans text-sm text-[#B1D3E1]">
        <div className="mx-auto max-w-7xl">
          © 2026 CONSELT. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
