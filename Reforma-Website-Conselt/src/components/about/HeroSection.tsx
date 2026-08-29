import React, { useState } from "react";
import { INSTITUTIONAL_TEXTS, CONSELT_COLORS, TEAM_MEDIA } from "@/lib/teamData";

/**
 * HeroSection - Apresentação institucional da CONSELT
 * Layout em duas colunas com imagem institucional e texto descritivo
 */
const HeroSection: React.FC = () => {
  const [hasTeamImage, setHasTeamImage] = useState(true);

  return (
    <>
    <section className="-mx-6 mb-0 bg-[#101A26] px-6 py-20 lg:-mx-10 lg:px-10 lg:py-28" aria-labelledby="hero-title">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Esquerda - Imagem/Frame */}
        <div className="order-2 lg:order-1">
          <div className="relative">
            <div
              className="aspect-square overflow-hidden rounded-2xl border border-[#162436] shadow-2xl"
            >
              {hasTeamImage ? (
                <img
                  src={TEAM_MEDIA.team}
                  alt="Equipe CONSELT"
                  className="w-full h-full object-cover"
                  onError={() => setHasTeamImage(false)}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-[#162436]">
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
              )}
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
            className="mb-4 text-3xl font-extrabold text-white md:text-5xl"
          >
            {INSTITUTIONAL_TEXTS.heroTitle}
          </h1>

          <p
            className="mb-6 text-lg font-semibold text-[#0C4E9E]"
          >
            {INSTITUTIONAL_TEXTS.heroSubtitle}
          </p>

          <p className="mb-8 text-lg leading-relaxed text-[#E0E0E0]">
            {INSTITUTIONAL_TEXTS.heroDescription}
          </p>

          {/* Destaques */}
          <div className="grid grid-cols-2 gap-4 border-t border-[#162436] pt-8">
            <div>
              <div className="text-4xl font-extrabold text-[#0C4E9E]">4</div>
              <p className="text-sm text-[#CCCCCC]">Diretorias</p>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-[#0C4E9E]">20+</div>
              <p className="text-sm text-[#CCCCCC]">Profissionais</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="-mx-6 h-4 bg-gradient-to-b from-[#101A26] to-transparent lg:-mx-10" aria-hidden="true" />
    </>
  );
};

export { HeroSection };
