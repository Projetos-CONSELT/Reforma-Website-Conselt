import React from "react";
import * as LucideIcons from "lucide-react";

interface EssenceCardProps {
  title: string;
  description: React.ReactNode;
  icon: string;
  color: string;
}

/**
 * EssenceCard - Card interativo para Missão, Visão e Valores
 * Apresenta conteúdo institucional com ícone, transição suave e efeito hover
 */
const EssenceCard = React.memo(({ title, description, icon, color }: EssenceCardProps) => {
  const IconComponent = LucideIcons[icon as keyof typeof LucideIcons] as React.ComponentType<{ size: number; className: string }>;

  const renderDescription = () => {
    if (Array.isArray(description)) {
      return (
        <ul className="space-y-2 leading-relaxed text-[#162436]">
          {description.map((item, index) => (
            <li key={`${title}-${index}`} className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#073A7D]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    }

    return <p className="leading-relaxed text-[#162436]">{description}</p>;
  };

  return (
    <article
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-[#CCCCCC]/40 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
      tabIndex={0}
      role="complementary"
      aria-label={`Card de ${title}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.currentTarget.classList.toggle("ring-2");
        }
      }}
    >
      {/* Fundo gradiente decorativo */}
      <div className="relative z-10">
        {/* Ícone */}
        <div className="mb-6 inline-flex">
          {IconComponent && (
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#073A7D]/10 text-[#073A7D]">
              <IconComponent size={24} className="text-[#073A7D]" />
            </div>
          )}
        </div>

        {/* Título */}
        <h3 className="mb-4 text-2xl font-bold text-[#101A26]">
          {title}
        </h3>

        {/* Descrição */}
        {renderDescription()}
      </div>

      {/* Linha decorativa no hover */}
    </article>
  );
});

EssenceCard.displayName = "EssenceCard";

export { EssenceCard };
