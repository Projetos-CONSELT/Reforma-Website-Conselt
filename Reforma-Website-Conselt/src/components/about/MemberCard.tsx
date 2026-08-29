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
        className="group w-full basis-full text-center cursor-pointer transition-transform duration-200 hover:scale-105 sm:basis-[calc(50%-1.25rem)] lg:basis-[calc(25%-1.875rem)]"
        onClick={handleCardInteraction}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-label={`${member.name}, ${member.role}`}
      >
        {/* Avatar */}
        <div className="mb-4 flex justify-center">
          <div className="relative mx-auto h-36 w-36 overflow-hidden rounded-full md:h-36 md:w-36">
            {member.image ? (
              <img
                src={member.image}
                alt={`Foto de ${member.name} - ${member.role}`}
                className="w-36 h-36 rounded-full border-4 border-[#073A7D] object-cover shadow-sm"
              />
            ) : (
              <span className="text-white font-bold text-lg">{initials}</span>
            )}
          </div>
        </div>

        {/* Nome */}
        <h4 className="mt-3 mb-2 text-base font-bold text-[#101A26] md:text-lg">
          {member.name}
        </h4>

        {/* Cargo */}
        <p className="mb-3 text-xs font-medium text-[#162436]/70 md:text-sm">
          {member.role}
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
