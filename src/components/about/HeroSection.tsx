import React, { useState } from "react";
import { INSTITUTIONAL_TEXTS, CONSELT_COLORS, TEAM_MEDIA } from "@/lib/teamData";

/**
 * HeroSection - Apresentação institucional da CONSELT
 * Layout em duas colunas com imagem institucional e texto descritivo
 */
const HeroSection: React.FC = () => {
  const [hasTeamImage, setHasTeamImage] = useState(true);

  return (
    <section className="relative w-full bg-[#0a1526] overflow-hidden text-white" aria-labelledby="hero-title">
      {/* Efeitos de ambientação e iluminação de fundo */}
      <div
        className="absolute top-10 right-10 w-[450px] h-[450px] bg-[#42A5D3]/10 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#0C4E9E]/15 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-12 pb-20 lg:pt-16 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Esquerda - Imagem/Frame da Equipe */}
          <div className="order-2 lg:order-1 lg:col-span-7">
            <div className="relative">
              <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[#42A5D3]/20 shadow-2xl bg-[#101A26] relative z-10">
                {hasTeamImage ? (
                  <picture>
                    <source
                      srcSet={TEAM_MEDIA.team.replace(/\.png$/i, ".webp")}
                      type="image/webp"
                    />
                    <img
                      src={TEAM_MEDIA.team}
                      alt="Equipe CONSELT"
                      width={1024}
                      height={576}
                      loading="eager"
                      fetchPriority="high"
                      decoding="async"
                      className="h-full w-full object-contain object-center"
                      onError={() => setHasTeamImage(false)}
                    />
                  </picture>
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

              {/* Elemento decorativo com brilho */}
              <div
                className="absolute -bottom-6 -right-6 w-44 h-44 rounded-full opacity-30 blur-2xl pointer-events-none"
                style={{ backgroundColor: CONSELT_COLORS.primary.medium }}
              />
            </div>
          </div>

          {/* Direita - Texto Institucional */}
          <div className="order-1 lg:order-2 lg:col-span-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#42A5D3]/30 bg-[#42A5D3]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#42A5D3] mb-4">
              Quem Somos
            </span>

            <h1
              id="hero-title"
              className="mb-4 text-3xl font-extrabold text-white md:text-5xl tracking-tight leading-tight"
            >
              {INSTITUTIONAL_TEXTS.heroTitle}
            </h1>

            <p className="mb-6 text-lg font-semibold text-[#42A5D3]">
              {INSTITUTIONAL_TEXTS.heroSubtitle}
            </p>

            <p className="mb-8 text-base sm:text-lg leading-relaxed text-slate-300">
              {INSTITUTIONAL_TEXTS.heroDescription}
            </p>

            {/* Destaques */}
            <div className="grid grid-cols-2 gap-6 border-t border-slate-700/50 pt-8">
              <div>
                <div className="text-4xl font-extrabold text-[#42A5D3]">4</div>
                <p className="text-sm font-medium text-slate-300 mt-1">Diretorias</p>
              </div>
              <div>
                <div className="text-4xl font-extrabold text-[#42A5D3]">20+</div>
                <p className="text-sm font-medium text-slate-300 mt-1">Profissionais</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HeroSection };
