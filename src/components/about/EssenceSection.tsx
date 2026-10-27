import React from "react";
import { EssenceCard } from "./EssenceCard";
import { essenceItems } from "@/lib/teamData";

/**
 * EssenceSection - Apresenta Missão, Visão e Valores
 * Grid responsivo com cards interativos
 */
const EssenceSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#E9EDF1] pb-16 lg:pb-24 overflow-hidden" aria-labelledby="essence-title">
      {/* Textura de fundo que cobre toda a seção */}
      <div
        className="absolute inset-0 z-0"
        aria-hidden="true"
        style={{
          backgroundImage: "url('/textura/textura cinza.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat',
          opacity: 0.6,
        }}
      />

      {/* Divisor de forma que sobrepõe o fundo texturizado da Seção 2 com o azul da Seção 1 */}
      <div className="w-full overflow-hidden leading-none relative z-10 pointer-events-none -mt-px mb-8 sm:mb-12">
        <svg
          className="relative block w-full h-8 sm:h-12 lg:h-16 text-[#0a1526]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,0 L1200,0 L1200,80 L0,0 Z" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#073A7D]/20 bg-[#073A7D]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#073A7D] mb-4">
            Pilares
          </span>
          <h2
            id="essence-title"
            className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#073A7D] tracking-tight"
          >
            Nossa Essência
          </h2>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-slate-700">
            Missão, Visão e Valores que guiam cada projeto e formam o DNA da CONSELT.
          </p>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {essenceItems.map((item) => (
            <EssenceCard
              key={item.id}
              title={item.title}
              description={item.description}
              icon={item.icon}
              color={item.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { EssenceSection };
