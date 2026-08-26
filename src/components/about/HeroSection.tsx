import React from "react";
import { INSTITUTIONAL_TEXTS, CONSELT_COLORS } from "@/lib/teamData";

/**
 * HeroSection - Apresentação institucional da CONSELT
 * Layout em duas colunas com imagem institucional e texto descritivo
 */
const HeroSection: React.FC = () => {
  return (
    <section className="mb-20 lg:mb-32" aria-labelledby="hero-title">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Esquerda - Imagem/Frame */}
        <div className="order-2 lg:order-1">
          <div className="relative">
            <div
              className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-8"
              style={{ borderColor: CONSELT_COLORS.primary.medium }}
            >
              {/* Placeholder para imagem da equipe */}
              <div className="w-full h-full bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 flex items-center justify-center">
                <div className="text-center text-white">
                  <svg
                    className="w-24 h-24 mx-auto mb-4 opacity-80"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 4.354a4 4 0 110 5.292M15 12H9m6 0a6 6 0 11-12 0 6 6 0 0112 0z"
                    />
                  </svg>
                  <p className="text-lg font-semibold">Equipe CONSELT</p>
                </div>
              </div>
            </div>

            {/* Elemento decorativo */}
            <div
              className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full opacity-20 blur-3xl"
              style={{ backgroundColor: CONSELT_COLORS.primary.medium }}
            />
          </div>
        </div>

        {/* Direita - Texto Institucional */}
        <div className="order-1 lg:order-2">
          <h1
            id="hero-title"
            className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4"
            style={{ color: CONSELT_COLORS.primary.darkest }}
          >
            {INSTITUTIONAL_TEXTS.heroTitle}
          </h1>

          <p
            className="text-lg font-semibold mb-6"
            style={{ color: CONSELT_COLORS.primary.medium }}
          >
            {INSTITUTIONAL_TEXTS.heroSubtitle}
          </p>

          <p className="text-slate-700 leading-relaxed text-lg mb-8">
            {INSTITUTIONAL_TEXTS.heroDescription}
          </p>

          {/* Destaques */}
          <div className="grid grid-cols-2 gap-4 pt-8 border-t border-slate-200">
            <div>
              <div className="text-2xl font-bold text-blue-600">6+</div>
              <p className="text-sm text-slate-600">Diretorias</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">50+</div>
              <p className="text-sm text-slate-600">Profissionais</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HeroSection };
