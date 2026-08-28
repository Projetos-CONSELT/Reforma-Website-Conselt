import React from "react";
import { MemberCard } from "./MemberCard";
import type { Department } from "@/lib/teamData";

interface DepartmentSectionProps {
  department: Department;
}

/**
 * DepartmentSection - Seção de uma diretoria com seus membros
 * Agrupa membros em grid responsivo por departamento
 */
const DepartmentSection = React.memo(({ department }: DepartmentSectionProps) => {
  return (
    <article className="mb-16 lg:mb-20" aria-labelledby={`dept-${department.id}`}>
      {/* Header da Diretoria */}
      <div className="mb-10 border-b border-[#0A4591]/20 pb-6 text-center">
        <h3
          id={`dept-${department.id}`}
          className="mb-2 text-2xl font-bold text-[#073A7D]"
        >
          {department.name}
        </h3>
        {department.description && (
          <p className="text-lg text-[#162436]/70">{department.description}</p>
        )}
      </div>

      {/* Grid de Membros */}
      <div
        className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-10 gap-y-12"
        role="group"
        aria-labelledby={`dept-${department.id}`}
      >
        {department.members.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </article>
  );
});

DepartmentSection.displayName = "DepartmentSection";

export { DepartmentSection };
