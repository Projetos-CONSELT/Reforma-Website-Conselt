import React from "react";
import { EssenceCard } from "./EssenceCard";
import { essenceItems } from "@/lib/teamData";

/**
 * EssenceSection - Apresenta Missão, Visão e Valores
 * Grid responsivo com cards interativos
 */
const EssenceSection: React.FC = () => {
  return (
    <section className="-mx-6 mb-20 bg-[#F4F6F8] px-6 py-20 lg:-mx-10 lg:mb-32 lg:px-10 lg:py-24" aria-labelledby="essence-title">
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
    </section>
  );
};

export { EssenceSection };
