import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Users,
  FileText,
  Briefcase,
  TrendingUp,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  AlertCircle,
  MoreVertical,
  ArrowUpRight,
  ShieldCheck,
  LogOut,
  ChevronRight,
  Sparkles,
  BarChart3,
  Layers,
  Settings,
  Bell,
} from "lucide-react";
import { Logo } from "@/components/Logo";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Painel Administrativo — Conselt" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminPage,
});

// Dados Mockados para o Painel Administrativo
const INITIAL_LEADS = [
  {
    id: "LEAD-2026-001",
    nome: "Carlos Eduardo Silva",
    empresa: "Constru Soluções",
    email: "carlos@constru.com.br",
    whatsapp: "(34) 99876-5432",
    servico: "Website e Landing Pages",
    prazo: "30 dias",
    status: "Novo",
    data: "14/09/2026",
    desafio: "Reestruturação completa da presença online da empresa de construção civil.",
  },
  {
    id: "LEAD-2026-002",
    nome: "Mariana Oliveira",
    empresa: "Consenso Jr",
    email: "mariana@consensojr.com.br",
    whatsapp: "(34) 98811-2233",
    servico: "Software sob medida",
    prazo: "60 dias",
    status: "Em Análise",
    data: "13/09/2026",
    desafio: "Automação de processos internos e gestão de membros.",
  },
  {
    id: "LEAD-2026-003",
    nome: "Roberto Mendes",
    empresa: "Sustenta Consultoria",
    email: "roberto@sustentabr.com.br",
    whatsapp: "(34) 99123-4567",
    servico: "Projeto Elétrico",
    prazo: "Imediato",
    status: "Em Contato",
    data: "12/09/2026",
    desafio: "Compatibilização de projeto elétrico comercial com laudo de segurança.",
  },
  {
    id: "LEAD-2026-004",
    nome: "Fernanda Lima",
    empresa: "Ledoc Fotografias",
    email: "fernanda@ledoc.com.br",
    whatsapp: "(34) 99765-4321",
    servico: "E-commerce",
    prazo: "90+ dias",
    status: "Aprovado",
    data: "10/09/2026",
    desafio: "Portal de galeria e venda de acervo fotográfico de alta resolução.",
  },
  {
    id: "LEAD-2026-005",
    nome: "Lucas Pacheco",
    empresa: "Marketeando Agência",
    email: "lucas@marketeando.com",
    whatsapp: "(34) 98444-5566",
    servico: "Automação",
    prazo: "30 dias",
    status: "Concluído",
    data: "05/09/2026",
    desafio: "Integração de APIs de CRM com bot de WhatsApp automatizado.",
  },
];

const PROJECTS = [
  { id: "PRJ-01", cliente: "Constru Soluções", tipo: "Website", progresso: 75, equipe: "Soluções Digitais", entrega: "25/09/2026" },
  { id: "PRJ-02", cliente: "Consenso Jr", tipo: "Software", progresso: 40, equipe: "Engenharia de Software", entrega: "15/10/2026" },
  { id: "PRJ-03", cliente: "Sustenta Consultoria", tipo: "Projeto Elétrico", progresso: 90, equipe: "Engenharia Elétrica", entrega: "18/09/2026" },
  { id: "PRJ-04", cliente: "Ledoc Fotografias", tipo: "Plataforma Web", progresso: 20, equipe: "Soluções Digitais", entrega: "30/11/2026" },
];

function AdminPage() {
  const [activeTab, setActiveTab] = useState<"leads" | "projects" | "blog" | "settings">("leads");
  const [filterStatus, setFilterStatus] = useState<string>("Todos");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [leads, setLeads] = useState(INITIAL_LEADS);
  const [selectedLead, setSelectedLead] = useState<typeof INITIAL_LEADS[0] | null>(null);

  const filteredLeads = leads.filter((lead) => {
    const matchesStatus = filterStatus === "Todos" || lead.status === filterStatus;
    const matchesSearch =
      lead.nome.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.empresa.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.servico.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const updateLeadStatus = (id: string, newStatus: string) => {
    setLeads(leads.map((l) => (l.id === id ? { ...l, status: newStatus } : l)));
    if (selectedLead && selectedLead.id === id) {
      setSelectedLead({ ...selectedLead, status: newStatus });
    }
  };

  return (
    <div className="min-h-screen bg-[#071325] text-white font-opensans flex flex-col">
      {/* 1. Header do Painel Administrativo */}
      <header className="bg-[#051D3E] border-b border-[#42A5D3]/20 sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between gap-4">
          
          {/* Lado Esquerdo: Logo CONSELT + Badge Restrito */}
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-3">
              <Logo className="w-10 h-10 text-[#42A5D3]" />
              <div className="hidden sm:block">
                <span className="font-montserrat font-extrabold text-lg tracking-tight text-white block">
                  CONSELT
                </span>
                <span className="text-[10px] font-semibold tracking-widest text-[#42A5D3] uppercase block -mt-1">
                  Painel de Gestão
                </span>
              </div>
            </Link>

            <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#42A5D3]/10 border border-[#42A5D3]/30 text-[#42A5D3] text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              Acesso Interno FEELT/UFU
            </span>
          </div>

          {/* Centro: Barra de Busca do Admin */}
          <div className="flex-1 max-w-md hidden md:block relative">
            <input
              type="text"
              placeholder="Buscar solicitações, empresas, serviços..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-[#093565]/60 border border-[#42A5D3]/20 text-white placeholder-slate-400 focus:outline-none focus:border-[#42A5D3]"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          </div>

          {/* Lado Direito: Perfil & Botão Sair */}
          <div className="flex items-center gap-3 sm:gap-5">
            <div className="relative">
              <button
                type="button"
                className="w-9 h-9 rounded-xl bg-[#093565] border border-[#42A5D3]/30 grid place-items-center text-slate-300 hover:text-white transition-colors relative"
                aria-label="Notificações"
              >
                <Bell className="w-4 h-4" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#42A5D3]" />
              </button>
            </div>

            <div className="flex items-center gap-3 border-l border-[#42A5D3]/20 pl-4 sm:pl-5">
              <div className="w-9 h-9 rounded-xl bg-[#42A5D3] text-[#051D3E] font-bold grid place-items-center text-xs">
                AD
              </div>
              <div className="hidden lg:block text-left">
                <div className="text-xs font-bold text-white">Diretoria Conselt</div>
                <div className="text-[10px] text-[#B1D3E1]">admin@conselt.com.br</div>
              </div>
            </div>

            <Link
              to="/"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold bg-white/5 border border-white/10 hover:bg-red-500/20 hover:border-red-500/40 hover:text-red-300 transition-all cursor-pointer"
              title="Sair do painel e voltar ao site público"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Sair</span>
            </Link>
          </div>

        </div>
      </header>

      {/* 2. Conteúdo Principal do Dashboard */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-6 lg:px-10 py-8 space-y-8">
        
        {/* Banner Superior de Boas-vindas */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-gradient-to-r from-[#093565] to-[#051D3E] rounded-3xl p-6 sm:p-8 border border-[#42A5D3]/30 shadow-xl">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#42A5D3]/20 text-[#42A5D3] text-xs font-bold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Gestão Institucional de Projetos
            </div>
            <h1 className="font-montserrat font-extrabold text-2xl sm:text-3xl text-white">
              Central Administrativa CONSELT
            </h1>
            <p className="mt-1 text-sm text-[#B1D3E1] max-w-xl">
              Gerencie solicitações de diagnósticos, acompanhe o andamento de projetos e revise conteúdos publicados.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/contato"
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs bg-[#42A5D3] text-[#051D3E] hover:bg-[#3492be] transition-all shadow-md"
            >
              <span>Testar Formulário de Leads</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 3. Cards de Métricas Principais (KPIS) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-[#051D3E]/80 border border-[#42A5D3]/20 rounded-2xl p-5 shadow-lg flex items-center justify-between">
            <div>
              <div className="text-xs font-semibold text-[#B1D3E1] uppercase tracking-wider">Solicitações Recebidas</div>
              <div className="text-3xl font-extrabold text-white mt-1">{leads.length}</div>
              <div className="text-xs text-emerald-400 flex items-center gap-1 mt-1 font-semibold">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>+15% este mês</span>
              </div>
            </div>
            <div className="w-12 h-12 rounded-xl bg-[#42A5D3]/15 text-[#42A5D3] grid place-items-center">
              <Users className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-[#051D3E]/80 border border-[#42A5D3]/20 rounded-2xl p-5 shadow-lg flex items-center justify-between">
            <div>
              <div className="text-xs font-semibold text-[#B1D3E1] uppercase tracking-wider">Projetos em Execução</div>
              <div className="text-3xl font-extrabold text-white mt-1">{PROJECTS.length}</div>
              <div className="text-xs text-[#42A5D3] flex items-center gap-1 mt-1 font-semibold">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Supervisão FEELT/UFU</span>
              </div>
            </div>
            <div className="w-12 h-12 rounded-xl bg-purple-500/15 text-purple-400 grid place-items-center">
              <BarChart3 className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-[#051D3E]/80 border border-[#42A5D3]/20 rounded-2xl p-5 shadow-lg flex items-center justify-between">
            <div>
              <div className="text-xs font-semibold text-[#B1D3E1] uppercase tracking-wider">Taxa de Conversão</div>
              <div className="text-3xl font-extrabold text-white mt-1">68%</div>
              <div className="text-xs text-emerald-400 flex items-center gap-1 mt-1 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Meta atingida</span>
              </div>
            </div>
            <div className="w-12 h-12 rounded-xl bg-emerald-500/15 text-emerald-400 grid place-items-center">
              <TrendingUp className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-[#051D3E]/80 border border-[#42A5D3]/20 rounded-2xl p-5 shadow-lg flex items-center justify-between">
            <div>
              <div className="text-xs font-semibold text-[#B1D3E1] uppercase tracking-wider">NPS / Satisfação</div>
              <div className="text-3xl font-extrabold text-white mt-1">9.8 / 10</div>
              <div className="text-xs text-[#42A5D3] flex items-center gap-1 mt-1 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Qualidade garantida</span>
              </div>
            </div>
            <div className="w-12 h-12 rounded-xl bg-amber-500/15 text-amber-400 grid place-items-center">
              <Sparkles className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* 4. Navegação por Abas (Tabs) */}
        <div className="flex items-center gap-3 border-b border-[#42A5D3]/20 pb-2 overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveTab("leads")}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === "leads"
                ? "bg-[#42A5D3] text-[#051D3E] shadow-md"
                : "text-slate-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Diagnósticos Solicitados ({leads.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("projects")}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === "projects"
                ? "bg-[#42A5D3] text-[#051D3E] shadow-md"
                : "text-slate-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Projetos Ativos ({PROJECTS.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("blog")}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === "blog"
                ? "bg-[#42A5D3] text-[#051D3E] shadow-md"
                : "text-slate-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Artigos & Conteúdos</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("settings")}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === "settings"
                ? "bg-[#42A5D3] text-[#051D3E] shadow-md"
                : "text-slate-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>Configurações & Auditoria</span>
          </button>
        </div>

        {/* 5. Conteúdo da Aba Ativa */}
        {activeTab === "leads" && (
          <div className="space-y-6">
            
            {/* Filtros da Tabela */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#051D3E]/60 p-4 rounded-2xl border border-[#42A5D3]/20">
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
                <Filter className="w-4 h-4 text-[#42A5D3] shrink-0" />
                <span className="text-xs font-semibold text-[#B1D3E1] shrink-0 mr-2">Filtrar por:</span>
                {["Todos", "Novo", "Em Análise", "Em Contato", "Aprovado", "Concluído"].map((st) => (
                  <button
                    key={st}
                    type="button"
                    onClick={() => setFilterStatus(st)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      filterStatus === st
                        ? "bg-[#42A5D3]/20 border border-[#42A5D3] text-[#42A5D3]"
                        : "bg-white/5 text-slate-300 hover:bg-white/10"
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>

              <div className="text-xs text-slate-400">
                Exibindo <strong className="text-white">{filteredLeads.length}</strong> de {leads.length} solicitações
              </div>
            </div>

            {/* Layout da Tabela + Detalhes do Lead selecionado */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* Tabela de Leads */}
              <div className={`bg-[#051D3E]/80 border border-[#42A5D3]/20 rounded-2xl overflow-hidden shadow-xl ${selectedLead ? "lg:col-span-7" : "lg:col-span-12"}`}>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-[#093565]/80 text-[#B1D3E1] font-semibold border-b border-[#42A5D3]/20 uppercase tracking-wider text-[11px]">
                      <tr>
                        <th className="py-3.5 px-4">Código / Cliente</th>
                        <th className="py-3.5 px-4">Serviço</th>
                        <th className="py-3.5 px-4">Prazo</th>
                        <th className="py-3.5 px-4">Status</th>
                        <th className="py-3.5 px-4 text-right">Ação</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#42A5D3]/10">
                      {filteredLeads.length === 0 ? (
                        <tr>
                          <td colSpan={5} className="py-8 text-center text-slate-400">
                            Nenhuma solicitação encontrada para o filtro aplicado.
                          </td>
                        </tr>
                      ) : (
                        filteredLeads.map((lead) => (
                          <tr
                            key={lead.id}
                            className={`hover:bg-[#42A5D3]/5 transition-colors cursor-pointer ${
                              selectedLead?.id === lead.id ? "bg-[#42A5D3]/10" : ""
                            }`}
                            onClick={() => setSelectedLead(lead)}
                          >
                            <td className="py-4 px-4">
                              <div className="font-bold text-white">{lead.empresa}</div>
                              <div className="text-xs text-slate-400">{lead.nome}</div>
                              <div className="text-[10px] text-[#42A5D3] font-mono mt-0.5">{lead.id}</div>
                            </td>

                            <td className="py-4 px-4 text-slate-300">
                              <span className="inline-block px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs">
                                {lead.servico}
                              </span>
                            </td>

                            <td className="py-4 px-4 text-slate-400 text-xs">
                              {lead.prazo}
                            </td>

                            <td className="py-4 px-4">
                              <span
                                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${
                                  lead.status === "Novo"
                                    ? "bg-blue-500/20 text-blue-300 border border-blue-500/40"
                                    : lead.status === "Em Análise"
                                    ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                                    : lead.status === "Em Contato"
                                    ? "bg-purple-500/20 text-purple-300 border border-purple-500/40"
                                    : lead.status === "Aprovado"
                                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                                    : "bg-slate-500/20 text-slate-300 border border-slate-500/40"
                                }`}
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                                {lead.status}
                              </span>
                            </td>

                            <td className="py-4 px-4 text-right">
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedLead(lead);
                                }}
                                className="px-3 py-1.5 rounded-lg bg-[#42A5D3]/15 text-[#42A5D3] hover:bg-[#42A5D3] hover:text-[#051D3E] font-bold text-xs transition-colors"
                              >
                                Ver Detalhes
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Painel Lateral de Detalhes do Lead selecionado */}
              {selectedLead && (
                <div className="lg:col-span-5 bg-[#051D3E] border border-[#42A5D3]/30 rounded-2xl p-6 shadow-2xl space-y-6 animate-in fade-in slide-in-from-right-3 duration-300">
                  <div className="flex items-start justify-between pb-4 border-b border-[#42A5D3]/20">
                    <div>
                      <div className="text-xs font-mono text-[#42A5D3]">{selectedLead.id}</div>
                      <h3 className="font-montserrat font-bold text-xl text-white mt-1">
                        {selectedLead.empresa}
                      </h3>
                      <div className="text-xs text-slate-300">{selectedLead.nome}</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedLead(null)}
                      className="text-slate-400 hover:text-white p-1"
                    >
                      ✕
                    </button>
                  </div>

                  {/* Alterar Status */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-[#B1D3E1]">Atualizar Status do Lead:</label>
                    <div className="flex flex-wrap gap-2">
                      {["Novo", "Em Análise", "Em Contato", "Aprovado", "Concluído"].map((st) => (
                        <button
                          key={st}
                          type="button"
                          onClick={() => updateLeadStatus(selectedLead.id, st)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                            selectedLead.status === st
                              ? "bg-[#42A5D3] text-[#051D3E]"
                              : "bg-white/5 text-slate-300 hover:bg-white/10"
                          }`}
                        >
                          {st}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Informações Principais */}
                  <div className="grid grid-cols-2 gap-4 text-xs bg-white/5 p-4 rounded-xl border border-white/10">
                    <div>
                      <div className="text-slate-400">E-mail:</div>
                      <div className="font-bold text-white break-all mt-0.5">{selectedLead.email}</div>
                    </div>
                    <div>
                      <div className="text-slate-400">WhatsApp:</div>
                      <div className="font-bold text-white mt-0.5">{selectedLead.whatsapp}</div>
                    </div>
                    <div>
                      <div className="text-slate-400">Serviço:</div>
                      <div className="font-bold text-[#42A5D3] mt-0.5">{selectedLead.servico}</div>
                    </div>
                    <div>
                      <div className="text-slate-400">Prazo Solicitado:</div>
                      <div className="font-bold text-white mt-0.5">{selectedLead.prazo}</div>
                    </div>
                  </div>

                  {/* Desafio e Objetivo */}
                  <div className="space-y-1.5">
                    <div className="text-xs font-semibold text-[#B1D3E1]">Desafio Descrevido pelo Cliente:</div>
                    <div className="text-xs leading-relaxed text-slate-200 bg-[#093565]/40 p-4 rounded-xl border border-[#42A5D3]/20">
                      "{selectedLead.desafio}"
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
                    <span>Data do Registro: {selectedLead.data}</span>
                    <a
                      href={`https://wa.me/55${selectedLead.whatsapp.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 text-white font-bold hover:bg-emerald-600 transition-colors"
                    >
                      Abrir WhatsApp
                    </a>
                  </div>
                </div>
              )}

            </div>
          </div>
        )}

        {/* Tab Projetos */}
        {activeTab === "projects" && (
          <div className="bg-[#051D3E]/80 border border-[#42A5D3]/20 rounded-2xl p-6 space-y-6">
            <h3 className="font-montserrat font-bold text-lg text-white">Projetos em Andamento</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PROJECTS.map((prj) => (
                <div key={prj.id} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[#42A5D3]">{prj.id}</span>
                    <span className="text-xs font-bold text-slate-400">Entrega: {prj.entrega}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">{prj.cliente}</h4>
                    <p className="text-xs text-slate-300">{prj.tipo} — Equipe {prj.equipe}</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className="text-[#B1D3E1]">Progresso</span>
                      <span className="text-white">{prj.progresso}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full bg-[#42A5D3] rounded-full transition-all duration-500"
                        style={{ width: `${prj.progresso}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Blog */}
        {activeTab === "blog" && (
          <div className="bg-[#051D3E]/80 border border-[#42A5D3]/20 rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-montserrat font-bold text-lg text-white">Gestão de Artigos Publicados</h3>
              <button
                type="button"
                className="px-4 py-2 rounded-xl text-xs font-bold bg-[#42A5D3] text-[#051D3E] hover:bg-[#3492be] transition-colors"
              >
                + Novo Artigo
              </button>
            </div>
            <p className="text-xs text-slate-400">
              Todos os artigos técnicos são revisados pelos supervisores da FEELT / UFU antes da publicação.
            </p>
          </div>
        )}

        {/* Tab Settings */}
        {activeTab === "settings" && (
          <div className="bg-[#051D3E]/80 border border-[#42A5D3]/20 rounded-2xl p-6 space-y-6">
            <h3 className="font-montserrat font-bold text-lg text-white">Configurações do Sistema & Log de Auditoria</h3>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div>
                  <div className="font-bold text-white">Supervisão Institucional FEELT/UFU</div>
                  <div className="text-slate-400 mt-0.5">Status: Ativo e vinculado ao Bloco 1N - UFU</div>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold">Verificado</span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div>
                  <div className="font-bold text-white">Segurança do Servidor & SSL</div>
                  <div className="text-slate-400 mt-0.5">Criptografia de formulários e armazenamento seguro</div>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold">Protegido</span>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* Footer do Admin */}
      <footer className="bg-[#051D3E] border-t border-[#42A5D3]/20 py-4 text-center text-xs text-slate-400">
        CONSELT — Sistema de Gestão Interna © 2026. Acesso exclusivo para membros autorizados.
      </footer>
    </div>
  );
}
