import React from "react";
import { EssenceCard } from "./EssenceCard";
import { essenceItems } from "@/lib/teamData";

/**
 * EssenceSection - Apresenta Missão, Visão e Valores
 * Grid responsivo com cards interativos
 */
const EssenceSection: React.FC = () => {
  return (
    <section className="relative left-1/2 w-screen -ml-[50vw] mb-20 bg-[#E9EDF1] lg:mb-32" aria-labelledby="essence-title">
      <div
        className="absolute inset-0 z-0"
        aria-hidden="true"
        style={{
          backgroundImage: "url('/textura/textura cinza.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat',
          opacity: 0.7,
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2
            id="essence-title"
            className="mb-4 text-3xl font-bold text-[#073A7D]"
          >
            Nossa Essência
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-[#162436]">
            Missão, Visão e Valores que guiam cada projeto
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
