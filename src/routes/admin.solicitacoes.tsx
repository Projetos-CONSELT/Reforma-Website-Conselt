import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  ShieldCheck,
  LogOut,
  FileText,
  Lock,
  Mail,
  AlertCircle,
  Inbox,
  Search,
  RefreshCw,
  Phone,
  Building,
  Calendar,
  Clock,
  Eye,
  Trash2,
  X,
  CheckCircle2,
  ExternalLink,
  MessageCircle,
  Filter,
} from "lucide-react";
import { supabase } from "../supabaseClient.ts";
import diamondImg from "@/assets/conselt-diamond-icon.png";

export const Route = createFileRoute("/admin/solicitacoes")({
  head: () => ({
    meta: [
      { title: "Solicitações Comerciais — Painel Admin CONSELT" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminSolicitacoesPage,
});

const AUTHORIZED_EMAIL = "projetos@conselt.com.br";

export interface SolicitacaoItem {
  id: number;
  nome: string;
  email: string;
  whatsapp: string;
  empresa: string | null;
  servico: string;
  prazo: string | null;
  desafio: string;
  status: string;
  created_at: string;
}

const STATUS_OPTIONS = [
  "Novo",
  "Em Atendimento",
  "Aguardando Proposta",
  "Finalizado",
  "Cancelado",
];

function getStatusBadgeClass(status: string) {
  switch (status) {
    case "Novo":
      return "bg-blue-100 text-blue-800 border-blue-200 font-bold";
    case "Em Atendimento":
      return "bg-amber-100 text-amber-800 border-amber-200 font-bold";
    case "Aguardando Proposta":
      return "bg-purple-100 text-purple-800 border-purple-200 font-bold";
    case "Finalizado":
      return "bg-emerald-100 text-emerald-800 border-emerald-200 font-bold";
    case "Cancelado":
      return "bg-slate-100 text-slate-600 border-slate-200 font-medium";
    default:
      return "bg-slate-100 text-slate-800 border-slate-200 font-bold";
  }
}

function formatDate(dateString: string) {
  try {
    const date = new Date(dateString);
    const dateStr = new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(date);
    const timeStr = new Intl.DateTimeFormat("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(date);
    return `${dateStr} às ${timeStr}`;
  } catch {
    return dateString;
  }
}

function AdminSolicitacoesPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isCheckingSession, setIsCheckingSession] = useState<boolean>(true);

  // Login form state
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isLoadingAuth, setIsLoadingAuth] = useState(false);

  // Data states
  const [solicitacoes, setSolicitacoes] = useState<SolicitacaoItem[]>([]);
  const [isLoadingData, setIsLoadingData] = useState<boolean>(true);
  const [dataError, setDataError] = useState<string>("");

  // Filter & Search states
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedStatus, setSelectedStatus] = useState<string>("Todos");

  // Detail Modal state
  const [selectedItem, setSelectedItem] = useState<SolicitacaoItem | null>(null);
  const [isUpdatingStatus, setIsUpdatingStatus] = useState<boolean>(false);

  // 1. Checagem inicial de sessão com Supabase
  useEffect(() => {
    async function checkSession() {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();
        if (session && session.user && session.user.email === AUTHORIZED_EMAIL) {
          setIsAuthenticated(true);
        } else {
          if (session) {
            await supabase.auth.signOut();
          }
          setIsAuthenticated(false);
        }
      } catch (err) {
        console.error("Erro na verificação de sessão:", err);
        setIsAuthenticated(false);
      } finally {
        setIsCheckingSession(false);
      }
    }

    checkSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event: any, session: any) => {
      if (session && session.user && session.user.email === AUTHORIZED_EMAIL) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // 2. Fetch das solicitações comerciais ordenadas dos mais recentes para os mais antigos
  const fetchSolicitacoes = async () => {
    setIsLoadingData(true);
    setDataError("");
    try {
      const { data, error } = await supabase
        .from("solicitacoes_comercial")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        throw error;
      }

      setSolicitacoes(data || []);
    } catch (err: any) {
      console.error("Erro ao buscar solicitações:", err);
      setDataError(
        err.message ||
          "Não foi possível carregar as solicitações. Verifique se a tabela solicitacoes_comercial foi criada."
      );
    } finally {
      setIsLoadingData(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchSolicitacoes();
    }
  }, [isAuthenticated]);

  // 3. Atualização de status da demanda
  const handleUpdateStatus = async (id: number, newStatus: string) => {
    setIsUpdatingStatus(true);
    try {
      const { error } = await supabase
        .from("solicitacoes_comercial")
        .update({ status: newStatus })
        .eq("id", id);

      if (error) throw error;

      setSolicitacoes((prev) =>
        prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
      );

      if (selectedItem && selectedItem.id === id) {
        setSelectedItem((prev) => (prev ? { ...prev, status: newStatus } : null));
      }
    } catch (err: any) {
      alert("Erro ao atualizar status: " + (err.message || "Erro desconhecido"));
    } finally {
      setIsUpdatingStatus(false);
    }
  };

  // 4. Exclusão de solicitação
  const handleDeleteItem = async (id: number) => {
    if (!window.confirm("Deseja realmente excluir este registro de solicitação?")) {
      return;
    }

    try {
      const { error } = await supabase
        .from("solicitacoes_comercial")
        .delete()
        .eq("id", id);

      if (error) throw error;

      setSolicitacoes((prev) => prev.filter((item) => item.id !== id));
      if (selectedItem?.id === id) {
        setSelectedItem(null);
      }
    } catch (err: any) {
      alert("Erro ao excluir solicitação: " + (err.message || "Erro desconhecido"));
    }
  };

  // 5. Login
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");

    if (emailInput.trim().toLowerCase() !== AUTHORIZED_EMAIL) {
      setLoginError("Acesso negado: credencial não autorizada");
      return;
    }

    setIsLoadingAuth(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: emailInput.trim(),
        password: passwordInput,
      });

      if (error) throw error;

      if (data.session && data.session.user.email === AUTHORIZED_EMAIL) {
        setIsAuthenticated(true);
      } else {
        await supabase.auth.signOut();
        setLoginError("Acesso negado: credencial não autorizada");
      }
    } catch (err: any) {
      setLoginError(err.message || "Falha ao autenticar. Verifique e-mail e senha.");
    } finally {
      setIsLoadingAuth(false);
    }
  };

  // 6. Logout
  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
    } catch (err) {
      console.error("Erro ao realizar logout:", err);
    } finally {
      setIsAuthenticated(false);
    }
  };

  // Filtros aplicados
  const filteredSolicitacoes = solicitacoes.filter((item) => {
    const matchesStatus =
      selectedStatus === "Todos" ? true : item.status === selectedStatus;
    const term = searchTerm.toLowerCase().trim();
    const matchesSearch =
      !term ||
      item.nome.toLowerCase().includes(term) ||
      item.email.toLowerCase().includes(term) ||
      item.whatsapp.toLowerCase().includes(term) ||
      (item.empresa && item.empresa.toLowerCase().includes(term)) ||
      item.servico.toLowerCase().includes(term);

    return matchesStatus && matchesSearch;
  });

  const novosCount = solicitacoes.filter((s) => s.status === "Novo").length;

  if (isCheckingSession) {
    return (
      <div className="min-h-screen bg-[#051D3E] grid place-items-center text-white">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 border-2 border-[#42A5D3] border-t-transparent rounded-full animate-spin" />
          <span className="text-sm font-semibold">Carregando painel...</span>
        </div>
      </div>
    );
  }

  // VIEW DE LOGIN
  if (!isAuthenticated) {
    return (
      <div id="login-section" className="min-h-screen bg-[#051D3E] flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-[#FFFFFF] rounded-3xl p-8 sm:p-10 shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <img src={diamondImg} alt="CONSELT" className="w-14 h-14 mx-auto object-contain mb-2" />
            <h1 className="font-montserrat text-2xl font-extrabold text-[#051D3E] tracking-tight">
              CONSELT Admin
            </h1>
            <p className="text-xs text-slate-500">Painel de Gestão e Controle Interno</p>
          </div>

          {loginError && (
            <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                E-mail
              </label>
              <div className="relative">
                <input
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="E-mail"
                  className="w-full pl-10 pr-4 py-3 text-sm rounded-xl bg-white border border-slate-300 text-slate-900 font-medium placeholder-slate-400 focus:outline-none focus:border-[#42A5D3]"
                />
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                Senha de acesso
              </label>
              <div className="relative">
                <input
                  type="password"
                  required
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 text-sm rounded-xl bg-white border border-slate-300 text-slate-900 font-medium placeholder-slate-400 focus:outline-none focus:border-[#42A5D3]"
                />
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoadingAuth}
              className="w-full py-3.5 px-4 rounded-xl bg-[#42A5D3] text-[#051D3E] font-extrabold text-sm hover:bg-[#3492be] transition-all shadow-lg shadow-[#42A5D3]/30 cursor-pointer mt-2 disabled:opacity-75"
            >
              {isLoadingAuth ? "Autenticando..." : "Entrar"}
            </button>
          </form>

          <div className="text-center pt-2">
            <Link to="/" className="text-xs text-slate-400 hover:text-[#051D3E] transition-colors font-semibold">
              ← Voltar para o site público
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // VIEW DO DASHBOARD - SOLICITAÇÕES COMERCIAIS
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#FFFFFF]">
      {/* Sidebar Lateral Azul Noite */}
      <aside className="w-full md:w-64 bg-[#051D3E] text-white flex flex-col justify-between shrink-0 border-r border-[#051D3E]">
        <div>
          <div className="p-6 border-b border-white/10 flex items-center gap-3">
            <img src={diamondImg} alt="CONSELT" className="w-9 h-9 object-contain" />
            <div>
              <h2 className="font-montserrat font-extrabold text-base tracking-tight text-white">
                CONSELT
              </h2>
              <span className="text-[10px] text-[#42A5D3] uppercase font-bold tracking-widest block -mt-1">
                Painel Admin
              </span>
            </div>
          </div>

          <div className="p-4 mx-4 my-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#42A5D3]/20 text-[#42A5D3] font-bold grid place-items-center text-xs">
              AD
            </div>
            <div className="overflow-hidden">
              <div className="text-xs font-bold text-white truncate">Diretoria CONSELT</div>
              <div className="text-[10px] text-[#42A5D3] truncate">{AUTHORIZED_EMAIL}</div>
            </div>
          </div>

          <nav className="px-4 space-y-2">
            <Link
              to="/admin"
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#B1D3E1] hover:bg-white/10 hover:text-white font-bold text-xs transition-all"
            >
              <FileText className="w-4 h-4 text-[#42A5D3]" />
              <span>Gerenciar Conteúdos</span>
            </Link>
            <Link
              to="/admin/solicitacoes"
              className="flex items-center justify-between px-4 py-3 rounded-xl bg-[#42A5D3] text-[#051D3E] font-bold text-xs shadow-md transition-all"
            >
              <div className="flex items-center gap-3">
                <Inbox className="w-4 h-4" />
                <span>Solicitações Comerciais</span>
              </div>
              {novosCount > 0 && (
                <span className="px-2 py-0.5 rounded-full bg-[#051D3E] text-[#FFFFFF] text-[10px] font-extrabold">
                  {novosCount}
                </span>
              )}
            </Link>
          </nav>
        </div>

        <div className="p-4 border-t border-white/10">
          <button
            type="button"
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 font-bold text-xs hover:bg-red-500/20 transition-all cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span>Sair</span>
          </button>
        </div>
      </aside>

      {/* Área Principal Branca */}
      <main className="flex-1 bg-[#FFFFFF] p-6 md:p-10 overflow-y-auto font-opensans">
        {/* Cabeçalho da Página */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="font-montserrat text-2xl font-extrabold text-[#051D3E]">
                Solicitações Comerciais
              </h1>
              {novosCount > 0 && (
                <span className="px-2.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold border border-blue-200">
                  {novosCount} nova{novosCount > 1 ? "s" : ""}
                </span>
              )}
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Gerencie os diagnósticos e oportunidades capturados pelo formulário de Avaliação Inicial.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={fetchSolicitacoes}
              disabled={isLoadingData}
              className="px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-700 font-bold text-xs hover:bg-slate-50 transition-all shadow-sm flex items-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 text-slate-500 ${isLoadingData ? "animate-spin" : ""}`} />
              <span>Atualizar</span>
            </button>
          </div>
        </div>

        {/* Mensagem de Erro caso a tabela não exista ou haja falha */}
        {dataError && (
          <div className="mt-6 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-800 text-xs sm:text-sm font-medium flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold">Aviso do Banco de Dados:</p>
              <p className="mt-0.5">{dataError}</p>
              <p className="mt-2 text-xs text-amber-700">
                Execute o script <code>supabase_migration.sql</code> no SQL Editor do seu projeto Supabase para criar a tabela com as devidas permissões.
              </p>
            </div>
          </div>
        )}

        {/* Filtros e Barra de Busca */}
        <div className="mt-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Campo de Busca */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar por nome, empresa, serviço..."
              className="w-full pl-9 pr-4 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#42A5D3] focus:bg-white transition-all"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>

          {/* Seletor de Status */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1 shrink-0">
              <Filter className="w-3.5 h-3.5" /> Status:
            </span>
            <div className="flex items-center gap-1.5">
              {["Todos", ...STATUS_OPTIONS].map((st) => (
                <button
                  key={st}
                  type="button"
                  onClick={() => setSelectedStatus(st)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    selectedStatus === st
                      ? "bg-[#051D3E] text-white shadow-sm"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {st}
                  {st === "Novo" && novosCount > 0 && (
                    <span className="ml-1.5 px-1.5 py-0.2 rounded-full bg-[#42A5D3] text-[#051D3E] text-[10px] font-extrabold">
                      {novosCount}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tabela de Solicitações */}
        <div className="mt-6 border border-slate-200 rounded-2xl overflow-hidden shadow-sm bg-white">
          <div className="overflow-x-auto">
            <table className="w-full text-left font-['Open_Sans',sans-serif]">
              <thead className="bg-slate-50 border-b border-slate-200 uppercase tracking-[0.05em] text-[11px] font-bold text-[#051D3E]">
                <tr>
                  <th className="py-4 px-5">Data / Hora</th>
                  <th className="py-4 px-5">Solicitante</th>
                  <th className="py-4 px-5">Empresa</th>
                  <th className="py-4 px-5">Serviço & Prazo</th>
                  <th className="py-4 px-5">Status</th>
                  <th className="py-4 px-5 text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs">
                {isLoadingData ? (
                  <tr>
                    <td colSpan={6} className="py-16 text-center text-slate-400">
                      <div className="flex items-center justify-center gap-3">
                        <div className="w-5 h-5 border-2 border-[#42A5D3] border-t-transparent rounded-full animate-spin" />
                        <span className="font-semibold text-slate-600">Carregando solicitações...</span>
                      </div>
                    </td>
                  </tr>
                ) : filteredSolicitacoes.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-16 text-center text-slate-400">
                      <Inbox className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                      <p className="font-bold text-slate-700 text-sm">Nenhuma solicitação encontrada</p>
                      <p className="text-xs text-slate-400 mt-1">
                        {searchTerm || selectedStatus !== "Todos"
                          ? "Nenhum resultado com os filtros selecionados."
                          : "Quando visitantes preencherem o formulário de Avaliação Inicial, as demandas aparecerão aqui."}
                      </p>
                    </td>
                  </tr>
                ) : (
                  filteredSolicitacoes.map((item) => (
                    <tr
                      key={item.id}
                      className="hover:bg-slate-50/80 transition-colors group"
                    >
                      {/* Data / Hora */}
                      <td className="py-4 px-5 text-slate-500 whitespace-nowrap">
                        <div className="flex items-center gap-1.5 font-medium">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          <span>{formatDate(item.created_at)}</span>
                        </div>
                      </td>

                      {/* Solicitante & Contato */}
                      <td className="py-4 px-5">
                        <div className="font-bold text-[#051D3E] text-sm">{item.nome}</div>
                        <div className="flex items-center gap-3 mt-1 text-slate-500 text-xs">
                          <a
                            href={`mailto:${item.email}`}
                            className="hover:text-[#2270A1] flex items-center gap-1 transition-colors"
                            title="Enviar e-mail"
                          >
                            <Mail className="w-3.5 h-3.5 text-slate-400" />
                            <span>{item.email}</span>
                          </a>
                          <a
                            href={`https://wa.me/55${item.whatsapp.replace(/\D/g, "")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-emerald-600 flex items-center gap-1 text-emerald-600 font-semibold transition-colors"
                            title="Conversar no WhatsApp"
                          >
                            <MessageCircle className="w-3.5 h-3.5" />
                            <span>{item.whatsapp}</span>
                          </a>
                        </div>
                      </td>

                      {/* Empresa */}
                      <td className="py-4 px-5 text-slate-700 font-medium">
                        {item.empresa ? (
                          <div className="flex items-center gap-1.5">
                            <Building className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                            <span className="truncate max-w-[160px]">{item.empresa}</span>
                          </div>
                        ) : (
                          <span className="text-slate-400 italic">Pessoa Física / Não inf.</span>
                        )}
                      </td>

                      {/* Serviço & Prazo */}
                      <td className="py-4 px-5">
                        <span className="inline-block px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 font-semibold text-xs border border-slate-200">
                          {item.servico}
                        </span>
                        {item.prazo && (
                          <div className="text-[11px] text-slate-500 flex items-center gap-1 mt-1">
                            <Calendar className="w-3 h-3 text-slate-400" />
                            <span>Prazo: {item.prazo}</span>
                          </div>
                        )}
                      </td>

                      {/* Status */}
                      <td className="py-4 px-5">
                        <select
                          value={item.status}
                          onChange={(e) => handleUpdateStatus(item.id, e.target.value)}
                          className={`text-xs px-2.5 py-1 rounded-lg border outline-none cursor-pointer ${getStatusBadgeClass(
                            item.status
                          )}`}
                        >
                          {STATUS_OPTIONS.map((st) => (
                            <option key={st} value={st} className="bg-white text-slate-900">
                              {st}
                            </option>
                          ))}
                        </select>
                      </td>

                      {/* Ações */}
                      <td className="py-4 px-5 text-right whitespace-nowrap">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            type="button"
                            onClick={() => setSelectedItem(item)}
                            className="px-3 py-1.5 rounded-lg bg-[#051D3E] text-white hover:bg-[#2270A1] text-xs font-bold transition-colors flex items-center gap-1.5 shadow-sm cursor-pointer"
                            title="Ver detalhes da demanda"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>Ver Detalhes</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDeleteItem(item.id)}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                            title="Excluir registro"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Modal de Detalhes da Solicitação */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-[#051D3E]/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
            {/* Topo do Modal */}
            <div className="p-6 bg-[#051D3E] text-white flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#42A5D3]/20 text-[#42A5D3] grid place-items-center">
                  <Inbox className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-montserrat font-extrabold text-lg text-white leading-snug">
                    Detalhes da Solicitação #{selectedItem.id}
                  </h3>
                  <p className="text-xs text-[#B1D3E1]">
                    Recebida em {formatDate(selectedItem.created_at)}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white grid place-items-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Conteúdo do Modal */}
            <div className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1 font-opensans text-slate-800">
              {/* Status e Ações Rápidas */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    Status Atual da Demanda
                  </span>
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-3 py-1 rounded-lg text-xs border ${getStatusBadgeClass(
                        selectedItem.status
                      )}`}
                    >
                      {selectedItem.status}
                    </span>
                    <select
                      value={selectedItem.status}
                      disabled={isUpdatingStatus}
                      onChange={(e) => handleUpdateStatus(selectedItem.id, e.target.value)}
                      className="text-xs px-3 py-1 rounded-lg border border-slate-300 bg-white font-semibold text-slate-700 outline-none cursor-pointer"
                    >
                      {STATUS_OPTIONS.map((st) => (
                        <option key={st} value={st}>
                          Mudar para: {st}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={`https://wa.me/55${selectedItem.whatsapp.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={`mailto:${selectedItem.email}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#093565] hover:bg-[#2270A1] text-white font-bold text-xs transition-colors shadow-sm"
                  >
                    <Mail className="w-4 h-4" />
                    <span>E-mail</span>
                  </a>
                </div>
              </div>

              {/* Grid de Informações de Contato */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Nome Completo
                  </span>
                  <p className="font-bold text-[#051D3E] text-sm">{selectedItem.nome}</p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Empresa / Organização
                  </span>
                  <p className="font-bold text-[#051D3E] text-sm">
                    {selectedItem.empresa || "Não informada"}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    E-mail Profissional
                  </span>
                  <p className="font-semibold text-slate-800 text-sm break-all">
                    {selectedItem.email}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    WhatsApp
                  </span>
                  <p className="font-semibold text-slate-800 text-sm">
                    {selectedItem.whatsapp}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Serviço de Interesse
                  </span>
                  <p className="font-bold text-[#2270A1] text-sm">{selectedItem.servico}</p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Prazo Estimado
                  </span>
                  <p className="font-semibold text-slate-800 text-sm">
                    {selectedItem.prazo || "Não especificado"}
                  </p>
                </div>
              </div>

              {/* Desafio e Objetivo */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-[11px] font-bold text-[#051D3E] uppercase tracking-wider block">
                  Desafio e Objetivo Descrito pelo Cliente:
                </span>
                <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">
                  {selectedItem.desafio}
                </p>
              </div>
            </div>

            {/* Rodapé do Modal */}
            <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              <button
                type="button"
                onClick={() => handleDeleteItem(selectedItem.id)}
                className="px-4 py-2 rounded-xl text-red-600 hover:bg-red-50 text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Trash2 className="w-4 h-4" />
                <span>Excluir Demanda</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="px-6 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs transition-colors cursor-pointer"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
