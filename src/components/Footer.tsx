import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, MessageCircle } from "lucide-react";
import { Logo } from "@/components/Logo";
import { footerNavLinks } from "@/components/Header";

export function Footer() {
  return (
    <footer id="contatos" className="relative bg-brand-white border-t border-brand-blue/10 font-opensans text-brand-blue">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 grid gap-8 lg:gap-10 items-center lg:grid-cols-[auto_1fr_1fr_1.6fr]">
        {/* Diamante — o mais à esquerda possível */}
        <Link to="/" className="shrink-0 justify-self-start">
          <Logo className="w-28 h-28 lg:w-40 lg:h-40 xl:w-48 xl:h-48" />
        </Link>

        {/* Páginas empilhadas e centralizadas */}
        <nav className="flex flex-col items-center gap-4 justify-self-center">
          {footerNavLinks.map((l) => (
            <Link
              key={l.label}
              to={l.href}
              className="font-opensans text-sm lg:text-base font-semibold uppercase tracking-widest text-brand-blue hover:opacity-70 transition-opacity text-center"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Siga-nos centralizado, ícones centralizados abaixo */}
        <div className="flex flex-col items-center gap-4 justify-self-center">
          <div className="font-opensans text-base lg:text-lg font-bold uppercase tracking-widest text-brand-blue">
            Siga-nos
          </div>
          <div className="flex flex-col items-center gap-3">
            {[
              { Icon: MessageCircle, label: "WhatsApp" },
              { Icon: Instagram, label: "Instagram" },
              { Icon: Linkedin, label: "LinkedIn" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="text-brand-blue hover:opacity-70 transition-opacity"
              >
                <Icon className="w-7 h-7 lg:w-8 lg:h-8" strokeWidth={1.75} />
              </a>
            ))}
          </div>
        </div>

        {/* Mapa ocupando o lado direito */}
        <div className="w-full justify-self-stretch">
          <div className="overflow-hidden rounded-2xl border border-brand-blue/15">
            <iframe
              title="Mapa CONSELT — Universidade Federal de Uberlândia"
              src="https://maps.google.com/maps?q=Universidade%20Federal%20de%20Uberl%C3%A2ndia%2C%20Av%20Jo%C3%A3o%20Naves%20de%20%C3%81vila%2C%202121%2C%20Bloco%201N%2C%20Santa%20M%C3%B4nica%2C%20Uberl%C3%A2ndia%20-%20MG%2C%2038408-144&z=16&output=embed"
              className="w-full h-64 lg:h-96 border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="mt-4 text-sm lg:text-base leading-relaxed text-brand-blue/80">
            Universidade Federal de Uberlândia — Av. João Naves de Ávila, Bloco 1N, 2121 — Sala 06,
            Saraiva, Uberlândia - MG, 38408-144
          </p>
        </div>
      </div>

      <div className="border-t border-brand-blue/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-brand-blue/70">
          <div>© 2026 Conselt Digital. Todos os direitos reservados.</div>
          <div>Feito com precisão em São Paulo.</div>
        </div>
      </div>
    </footer>
  );
}
