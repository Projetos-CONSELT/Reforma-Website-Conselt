import React from "react";
import { DepartmentSection } from "./DepartmentSection";
import { teamDepartments, INSTITUTIONAL_TEXTS } from "@/lib/teamData";

/**
 * TeamSection - Seção principal da equipe
 * Agrupa e exibe todas as diretorias com seus respectivos membros
 */
const TeamSection: React.FC = () => {
  return (
    <section className="w-full bg-white pt-14 pb-24 lg:pt-18 lg:pb-32" aria-labelledby="team-title">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-14 lg:mb-18">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#073A7D] mb-4">
            Nossa Equipe
          </span>
          <h2 id="team-title" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Conheça nossas diretorias
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {INSTITUTIONAL_TEXTS.teamDescription}
          </p>
        </div>

        {/* Departamentos */}
        <div className="space-y-16 lg:space-y-20">
          {teamDepartments.map((department) => (
            <DepartmentSection key={department.id} department={department} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { TeamSection };
