import React from "react";
import * as LucideIcons from "lucide-react";

interface EssenceCardProps {
  title: string;
  description: string;
  icon: string;
  color: string;
}

/**
 * EssenceCard - Card interativo para Missão, Visão e Valores
 * Apresenta conteúdo institucional com ícone, transição suave e efeito hover
 */
const EssenceCard = React.memo(({ title, description, icon, color }: EssenceCardProps) => {
  const IconComponent = LucideIcons[icon as keyof typeof LucideIcons] as React.ComponentType<{ size: number; className: string }>;

  return (
    <article
      className="group relative bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 border border-slate-100 cursor-pointer overflow-hidden"
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
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${color}`} />

      <div className="relative z-10">
        {/* Ícone */}
        <div className="mb-6 inline-flex">
          {IconComponent && (
            <div className={`p-3 rounded-lg bg-gradient-to-br ${color} text-white`}>
              <IconComponent size={28} className="text-white" />
            </div>
          )}
        </div>

        {/* Título */}
        <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>

        {/* Descrição */}
        <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
          {description}
        </p>
      </div>

      {/* Linha decorativa no hover */}
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </article>
  );
});

EssenceCard.displayName = "EssenceCard";

export { EssenceCard };
