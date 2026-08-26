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
      <div className="mb-8 pb-6 border-b-2 border-blue-600">
        <h3
          id={`dept-${department.id}`}
          className="text-3xl font-bold text-slate-900 mb-2"
        >
          {department.name}
        </h3>
        {department.description && (
          <p className="text-slate-600 text-lg">{department.description}</p>
        )}
      </div>

      {/* Grid de Membros */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
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
