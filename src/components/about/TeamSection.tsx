import React from "react";
import { DepartmentSection } from "./DepartmentSection";
import { teamDepartments, INSTITUTIONAL_TEXTS } from "@/lib/teamData";

/**
 * TeamSection - Seção principal da equipe
 * Agrupa e exibe todas as diretorias com seus respectivos membros
 */
const TeamSection: React.FC = () => {
  return (
    <section className="mb-20 lg:mb-32" aria-labelledby="team-title">
      {/* Header */}
      <div className="text-center mb-16 lg:mb-20">
        <h2 id="team-title" className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
          Conheça nossas diretorias
        </h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          {INSTITUTIONAL_TEXTS.teamDescription}
        </p>
      </div>

      {/* Departamentos */}
      <div>
        {teamDepartments.map((department) => (
          <DepartmentSection key={department.id} department={department} />
        ))}
      </div>
    </section>
  );
};

export { TeamSection };
