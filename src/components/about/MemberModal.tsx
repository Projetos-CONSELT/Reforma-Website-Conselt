import React, { useState } from "react";
import { X, Mail, Linkedin } from "lucide-react";

interface MemberModalProps {
  isOpen: boolean;
  member: {
    name: string;
    position: string;
    bio?: string;
    email?: string;
    linkedin?: string;
    image?: string;
  } | null;
  onClose: () => void;
}

/**
 * MemberModal - Modal/Lightbox com informações completas do membro
 * Inclui biografia, links de contato e redes sociais
 */
const MemberModal: React.FC<MemberModalProps> = ({ isOpen, member, onClose }) => {
  if (!isOpen || !member) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full transform transition-all duration-300 animate-in fade-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header com fechar */}
        <div className="flex justify-between items-start p-6 border-b border-slate-100">
          <div>
            <h2 id="modal-title" className="text-2xl font-bold text-slate-900">
              {member.name}
            </h2>
            <p className="text-blue-600 font-semibold mt-1">{member.position}</p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 transition-colors p-2 rounded-lg hover:bg-slate-100"
            aria-label="Fechar modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Conteúdo */}
        <div className="p-6">
          {/* Biografia */}
          {member.bio && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-slate-600 mb-2 uppercase tracking-wide">
                Sobre
              </h3>
              <p className="text-slate-700 leading-relaxed">{member.bio}</p>
            </div>
          )}

          {/* Links de contato */}
          <div className="space-y-3">
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors text-slate-700 hover:text-blue-600"
                aria-label={`Email: ${member.email}`}
              >
                <Mail size={18} className="text-blue-600 flex-shrink-0" />
                <span className="text-sm truncate">{member.email}</span>
              </a>
            )}

            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors text-slate-700 hover:text-blue-600"
                aria-label="Perfil LinkedIn"
              >
                <Linkedin size={18} className="text-blue-600 flex-shrink-0" />
                <span className="text-sm">Ver no LinkedIn</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { MemberModal };
