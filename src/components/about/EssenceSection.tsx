import React from "react";
import { EssenceCard } from "./EssenceCard";
import { essenceItems } from "@/lib/teamData";

/**
 * EssenceSection - Apresenta Missão, Visão e Valores
 * Grid responsivo com cards interativos
 */
const EssenceSection: React.FC = () => {
  return (
    <section className="mb-20 lg:mb-32 py-16 lg:py-24" aria-labelledby="essence-title">
      {/* Header */}
      <div className="text-center mb-12 lg:mb-16">
        <h2
          id="essence-title"
          className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4"
        >
          Nossa Essência
        </h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
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
    </section>
  );
};

export { EssenceSection };
