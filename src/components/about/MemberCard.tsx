import React, { useState } from "react";
import { MemberModal } from "./MemberModal";
import type { TeamMember } from "@/lib/teamData";

interface MemberCardProps {
  member: TeamMember;
}

/**
 * MemberCard - Card do membro da equipe
 * Exibe avatar, nome e cargo com interação para abrir modal
 */
const MemberCard = React.memo(({ member }: MemberCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardInteraction = () => {
    setIsModalOpen(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleCardInteraction();
    }
  };

  // Avatar placeholder com iniciais
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <>
      <article
        className="group text-center cursor-pointer transition-all duration-300"
        onClick={handleCardInteraction}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-label={`${member.name}, ${member.position}`}
      >
        {/* Avatar */}
        <div className="mb-4 flex justify-center">
          <div className="relative w-24 h-24 rounded-full border-4 border-blue-600 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300 shadow-lg">
            {member.image ? (
              <img
                src={member.image}
                alt={`Foto de ${member.name} - ${member.position}`}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-white font-bold text-lg">{initials}</span>
            )}
          </div>
        </div>

        {/* Nome */}
        <h4 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-blue-600 transition-colors duration-300">
          {member.name}
        </h4>

        {/* Cargo */}
        <p className="text-slate-600 text-sm mb-3 group-hover:text-slate-700 transition-colors duration-300">
          {member.position}
        </p>

        {/* Indicador de interatividade */}
        <div className="flex justify-center">
          <span className="text-xs font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blue-50 px-3 py-1 rounded-full">
            Clique para mais
          </span>
        </div>
      </article>

      <MemberModal
        isOpen={isModalOpen}
        member={member}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
});

MemberCard.displayName = "MemberCard";

export { MemberCard };
