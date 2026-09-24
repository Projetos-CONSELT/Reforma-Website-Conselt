import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  ShieldCheck,
  LogOut,
  Plus,
  Filter,
  Edit2,
  Trash2,
  X,
  FileText,
  Lock,
  Mail,
  AlertCircle,
  Upload,
  Inbox,
  Search,
  RefreshCw,
  Clock,
  Building,
  Calendar,
  Eye,
  EyeOff,
  MessageCircle,
} from "lucide-react";
import { supabase } from "@/supabaseClient";
import diamondImg from "@/assets/conselt-diamond-icon.png";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Painel Administrativo — CONSELT" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminPage,
});

const AUTHORIZED_EMAIL = "projetos@conselt.com.br";

interface PostItem {
  id: number;
  title: string;
  author: string;
  excerpt: string;
  category: string;
  image: string;
  fullText: string;
  date: string;
}

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

const INITIAL_POSTS: PostItem[] = [
  {
    id: 1,
    title: "Como a Automação Industrial reduz custos operacionais em até 30%",
    category: "Automação",
    author: "Equipe CONSELT",
    date: "14/09/2026",
    excerpt: "Visão completa das melhores práticas em automação para empresas juniores e indústrias.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    fullText: `A automação industrial deixou de ser um diferencial e se tornou uma necessidade estratégica para empresas que buscam reduzir custos operacionais, otimizar processos e garantir a qualidade máxima dos seus produtos.\n\n### 1. Eliminação de Erros Manuais\nAo substituir tarefas repetitivas e suscetíveis a falhas por controladores lógicos programáveis (CLPs) e sensores de alta precisão, o índice de refugo de material diminui drasticamente.\n\n### 2. Aumento da Produtividade\nEquipamentos automatizados operam de maneira contínua, garantindo ciclos produtivos previsíveis e permitindo que as equipes humanas se concentrem na gestão, inovação e tomadas de decisão estratégicas.`,
  },
  {
    id: 2,
    title: "Por que sua empresa precisa de uma plataforma Web sob medida em 2026",
    category: "Websites",
    author: "Diretoria de Projetos",
    date: "10/09/2026",
    excerpt: "Vantagens competitivas de investir em tecnologia própria, arquitetura limpa e alta performance.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    fullText: `Plataformas genéricas e construtores de sites prontos costumam impor limitações de velocidade, SEO e segurança que travam o crescimento do seu negócio.\n\n### Desenvolvimento Dedicado vs Soluções Prontas\nUm sistema desenvolvido sob medida para os fluxos da sua empresa garante:\n- Carregamento ultrarrápido;\n- Personalização total das jornadas de conversão;\n- Integração simplificada com CRMs e meios de pagamento.`,
  },
  {
    id: 3,
    title: "Laudos de Segurança Elétrica e Adequação de Projetos Comerciais",
    category: "Projetos elétricos",
    author: "Consultoria Elétrica",
    date: "05/09/2026",
    excerpt: "Orientações normativas essenciais (NR-10 e NBR 5410) para laudos de segurança e instalações.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
    fullText: `Garantir a conformidade das instalações elétricas comerciais com a NR-10 e NBR 5410 evita paralisações operacionais, autuações e riscos de curtos-circuitos.\n\n### Principais Etapas do Laudo Técnico\n1. Inspeção termográfica das instalações;\n2. Verificação de sistemas de aterramento e SPDA;\n3. Emissão de ART (Anotação de Responsabilidade Técnica) assinada por engenheiros supervisores.`,
  },
];

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

function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isCheckingSession, setIsCheckingSession] = useState<boolean>(true);

  // Tab ativa: "blog" | "solicitacoes"
  const [activeTab, setActiveTab] = useState<"blog" | "solicitacoes">(() => {
    if (typeof window !== "undefined") {
      if (
        window.location.pathname.includes("solicitacoes") ||
        window.location.search.includes("tab=solicitacoes") ||
        window.location.hash.includes("solicitacoes")
      ) {
        return "solicitacoes";
      }
    }
    return "blog";
  });

  // Login form state
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // ==========================================
  // ESTADO DO BLOG
  // ==========================================
  const [posts, setPosts] = useState<PostItem[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("conselt_blog_posts");
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.error("Erro ao ler posts do localStorage:", e);
        }
      }
    }
    return INITIAL_POSTS;
  });

  const [categories, setCategories] = useState<string[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("conselt_blog_categories");
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.error("Erro ao ler categorias do localStorage:", e);
        }
      }
    }
    return ["Automação", "Websites", "Software", "Projetos elétricos", "Inovação"];
  });

  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<PostItem | null>(null);

  const [formTitle, setFormTitle] = useState("");
  const [formAuthor, setFormAuthor] = useState("");
  const [formExcerpt, setFormExcerpt] = useState("");
  const [formCategory, setFormCategory] = useState("Automação");
  const [formImage, setFormImage] = useState("");
  const [formFullText, setFormFullText] = useState("");
  const [newFilterInput, setNewFilterInput] = useState("");
  const [isLoadingPosts, setIsLoadingPosts] = useState(false);
  const [postsError, setPostsError] = useState("");

  const fetchPosts = async () => {
    setIsLoadingPosts(true);
    setPostsError("");

    try {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;

      let postsFromDatabase = data || [];
      if (postsFromDatabase.length === 0 && typeof window !== "undefined") {
        const localPosts = JSON.parse(localStorage.getItem("conselt_blog_posts") || "[]");
        if (Array.isArray(localPosts) && localPosts.length > 0) {
          const { error: migrationError } = await supabase.from("blog_posts").insert(
            localPosts.map((post: PostItem) => ({
              title: post.title,
              author: post.author,
              excerpt: post.excerpt,
              category: post.category,
              image: post.image || null,
              full_text: post.fullText || post.excerpt,
              date: post.date,
            })),
          );
          if (migrationError) throw migrationError;

          const refreshed = await supabase
            .from("blog_posts")
            .select("*")
            .order("created_at", { ascending: false });
          if (refreshed.error) throw refreshed.error;
          postsFromDatabase = refreshed.data || [];
          localStorage.removeItem("conselt_blog_posts");
        }
      }

      setPosts(
        postsFromDatabase.map((post) => ({
          id: post.id,
          title: post.title,
          author: post.author,
          excerpt: post.excerpt,
          category: post.category,
          image: post.image || "",
          fullText: post.full_text,
          date: post.date,
        })),
      );
    } catch (err: any) {
      console.error("Erro ao carregar posts do Supabase:", err);
      setPostsError(err.message || "Não foi possível carregar os posts do blog.");
    } finally {
      setIsLoadingPosts(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const { data, error } = await supabase
        .from("blog_categories")
        .select("name")
        .order("name");
      if (error) throw error;

      let categoryNames = (data || []).map((item) => item.name);
      if (categoryNames.length === 0 && typeof window !== "undefined") {
        const localCategories = JSON.parse(localStorage.getItem("conselt_blog_categories") || "[]");
        if (Array.isArray(localCategories) && localCategories.length > 0) {
          const { error: migrationError } = await supabase
            .from("blog_categories")
            .insert(localCategories.map((name: string) => ({ name })));
          if (migrationError) throw migrationError;
          categoryNames = localCategories;
          localStorage.removeItem("conselt_blog_categories");
        }
      }
      setCategories(categoryNames);
    } catch (err: any) {
      console.error("Erro ao carregar categorias do Supabase:", err);
      setPostsError(err.message || "Não foi possível carregar as categorias do blog.");
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchPosts();
      fetchCategories();
    }
  }, [isAuthenticated]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        setFormImage(uploadEvent.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleOpenNewPost = () => {
    setEditingPost(null);
    setFormTitle("");
    setFormAuthor("Equipe CONSELT");
    setFormExcerpt("");
    setFormCategory(categories[0] || "Automação");
    setFormImage("");
    setFormFullText("");
    setIsPostModalOpen(true);
  };

  const handleOpenEditPost = (post: PostItem) => {
    setEditingPost(post);
    setFormTitle(post.title);
    setFormAuthor(post.author);
    setFormExcerpt(post.excerpt);
    setFormCategory(post.category);
    setFormImage(post.image || "");
    setFormFullText(post.fullText || post.excerpt || "");
    setIsPostModalOpen(true);
  };

  const handleDeletePost = async (id: number) => {
    if (!window.confirm("Deseja realmente excluir esta postagem?")) return;

    const { error } = await supabase.from("blog_posts").delete().eq("id", id);
    if (error) {
      alert("Erro ao excluir postagem: " + error.message);
      return;
    }
    setPosts((previous) => previous.filter((post) => post.id !== id));
  };

  const handleSavePost = async (e: React.FormEvent) => {
    e.preventDefault();

    const postData = {
      title: formTitle.trim(),
      author: formAuthor.trim(),
      excerpt: formExcerpt.trim(),
      category: formCategory,
      image: formImage || null,
      full_text: formFullText.trim(),
      date: editingPost?.date || new Date().toLocaleDateString("pt-BR"),
    };

    const result = editingPost
      ? await supabase.from("blog_posts").update(postData).eq("id", editingPost.id).select().single()
      : await supabase.from("blog_posts").insert(postData).select().single();

    if (result.error) {
      alert("Erro ao salvar postagem: " + result.error.message);
      return;
    }

    const savedPost = result.data;
    const postForState: PostItem = {
      id: savedPost.id,
      title: savedPost.title,
      author: savedPost.author,
      excerpt: savedPost.excerpt,
      category: savedPost.category,
      image: savedPost.image || "",
      fullText: savedPost.full_text,
      date: savedPost.date,
    };

    setPosts((previous) =>
      editingPost
        ? previous.map((post) => (post.id === editingPost.id ? postForState : post))
        : [postForState, ...previous],
    );
    setIsPostModalOpen(false);
  };

  const handleAddCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    const val = newFilterInput.trim();
    if (!val || categories.includes(val)) return;

    const { error } = await supabase.from("blog_categories").insert({ name: val });
    if (error) {
      alert("Erro ao adicionar categoria: " + error.message);
      return;
    }
    setCategories((previous) => [...previous, val].sort((a, b) => a.localeCompare(b)));
    setNewFilterInput("");
  };

  const handleRemoveCategory = async (index: number) => {
    const category = categories[index];
    const { error } = await supabase.from("blog_categories").delete().eq("name", category);
    if (error) {
      alert("Erro ao remover categoria: " + error.message);
      return;
    }
    setCategories((previous) => previous.filter((_, i) => i !== index));
  };

  // ==========================================
  // ESTADO DAS SOLICITAÇÕES COMERCIAIS
  // ==========================================
  const [solicitacoes, setSolicitacoes] = useState<SolicitacaoItem[]>([]);
  const [isLoadingSolicitacoes, setIsLoadingSolicitacoes] = useState<boolean>(false);
  const [solicitacoesError, setSolicitacoesError] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedStatus, setSelectedStatus] = useState<string>("Todos");
  const [selectedItem, setSelectedItem] = useState<SolicitacaoItem | null>(null);
  const [isUpdatingStatus, setIsUpdatingStatus] = useState<boolean>(false);

  const fetchSolicitacoes = async () => {
    setIsLoadingSolicitacoes(true);
    setSolicitacoesError("");
    try {
      const { data, error } = await supabase
        .from("solicitacoes_comercial")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setSolicitacoes(data || []);
    } catch (err: any) {
      console.error("Erro ao buscar solicitações:", err);
      setSolicitacoesError(
        err.message ||
          "Não foi possível carregar as solicitações. Verifique se a tabela solicitacoes_comercial existe."
      );
    } finally {
      setIsLoadingSolicitacoes(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchSolicitacoes();
    }
  }, [isAuthenticated]);

  const handleUpdateSolicitacaoStatus = async (id: number, newStatus: string) => {
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

  const handleDeleteSolicitacao = async (id: number) => {
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

  // ==========================================
  // AUTENTICAÇÃO SUPABASE
  // ==========================================
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

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");

    if (emailInput.trim().toLowerCase() !== AUTHORIZED_EMAIL) {
      setLoginError("Acesso negado: credencial não autorizada");
      return;
    }

    setIsLoading(true);

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
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
    } catch (err) {
      console.error("Erro ao realizar logout:", err);
    } finally {
      setIsAuthenticated(false);
    }
  };

  // Filtros aplicados para solicitações
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
                  type={showPassword ? "text" : "password"}
                  required
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-11 py-3 text-sm rounded-xl bg-white border border-slate-300 text-slate-900 font-medium placeholder-slate-400 focus:outline-none focus:border-[#42A5D3]"
                />
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <button
                  type="button"
                  onClick={() => setShowPassword((visible) => !visible)}
                  title={showPassword ? "Ocultar senha" : "Mostrar senha"}
                  aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#2270A1] transition-colors cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 px-4 rounded-xl bg-[#42A5D3] text-[#051D3E] font-extrabold text-sm hover:bg-[#3492be] transition-all shadow-lg shadow-[#42A5D3]/30 cursor-pointer mt-2 disabled:opacity-75"
            >
              {isLoading ? "Autenticando..." : "Entrar"}
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

  // VIEW DO DASHBOARD
  return (
    <div id="dashboard-section" className="min-h-screen flex flex-col md:flex-row bg-[#FFFFFF]">
      {/* Sidebar Lateral Azul Noite (#051D3E) */}
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

          {/* Navegação Entre Abas */}
          <nav className="px-4 space-y-2">
            <button
              type="button"
              onClick={() => setActiveTab("blog")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                activeTab === "blog"
                  ? "bg-[#42A5D3] text-[#051D3E] shadow-md"
                  : "text-[#B1D3E1] hover:bg-white/10 hover:text-white"
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Gerenciar Conteúdos</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveTab("solicitacoes");
                fetchSolicitacoes();
              }}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                activeTab === "solicitacoes"
                  ? "bg-[#42A5D3] text-[#051D3E] shadow-md"
                  : "text-[#B1D3E1] hover:bg-white/10 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-3">
                <Inbox className="w-4 h-4" />
                <span>Solicitações Comerciais</span>
              </div>
              {novosCount > 0 && (
                <span
                  className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold ${
                    activeTab === "solicitacoes"
                      ? "bg-[#051D3E] text-white"
                      : "bg-[#42A5D3] text-[#051D3E]"
                  }`}
                >
                  {novosCount}
                </span>
              )}
            </button>
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

      {/* ========================================================
          CONTEÚDO DA ABA ATIVA
          ======================================================== */}
      {activeTab === "blog" ? (
        // ABA 1: GERENCIAMENTO DE POSTAGENS (BLOG)
        <main className="flex-1 bg-[#FFFFFF] p-6 md:p-10 overflow-y-auto font-opensans">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <h1 className="font-montserrat text-2xl font-extrabold text-[#051D3E]">
                Gerenciamento de Postagens
              </h1>
              <p className="text-xs text-slate-500 mt-1">
                Crie, edite e organize os artigos publicados no portal da CONSELT.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsFilterModalOpen(true)}
                className="px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-700 font-bold text-xs hover:bg-slate-50 transition-all shadow-sm flex items-center gap-2 cursor-pointer"
              >
                <Filter className="w-4 h-4 text-slate-500" />
                <span>Gerenciar Filtros</span>
              </button>

              <button
                type="button"
                onClick={handleOpenNewPost}
                className="px-4 py-2.5 rounded-xl bg-[#42A5D3] text-[#051D3E] font-extrabold text-xs hover:bg-[#3492be] transition-all shadow-md flex items-center gap-2 cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Novo Post</span>
              </button>
            </div>
          </div>

          {postsError && (
            <div className="mt-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-semibold">
              Não foi possível sincronizar o blog com o Supabase: {postsError}
            </div>
          )}

          {/* Tabela Estruturada de Artigos */}
          <div className="mt-8 border border-slate-200 rounded-2xl overflow-hidden shadow-sm bg-white">
            <div className="overflow-x-auto">
              <table className="w-full text-left font-['Open_Sans',sans-serif]">
                <thead className="bg-slate-50 border-b border-slate-200 uppercase tracking-[0.05em] text-[12px] font-bold text-[#051D3E]">
                  <tr>
                    <th className="py-4 px-6">Título</th>
                    <th className="py-4 px-6">Filtro (Categoria)</th>
                    <th className="py-4 px-6">Autor</th>
                    <th className="py-4 px-6">Data de Publicação</th>
                    <th className="py-4 px-6 text-right">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  {isLoadingPosts ? (
                    <tr>
                      <td colSpan={5} className="py-8 text-center text-slate-400 font-normal">
                        Carregando artigos do Supabase...
                      </td>
                    </tr>
                  ) : posts.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="py-8 text-center text-slate-400 font-normal">
                        Nenhum artigo cadastrado. Clique em "Novo Post" para adicionar.
                      </td>
                    </tr>
                  ) : (
                    posts.map((post) => (
                      <tr key={post.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-4 px-6 font-semibold text-[#093565]">{post.title}</td>
                        <td className="py-4 px-6 whitespace-nowrap">
                          <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-[#B1D3E1] text-[#093565] font-semibold text-[12px] whitespace-nowrap">
                            {post.category}
                          </span>
                        </td>
                        <td className="py-4 px-6 font-normal text-[#162638]">{post.author}</td>
                        <td className="py-4 px-6 font-normal text-[#162638]">{post.date}</td>
                        <td className="py-4 px-6 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              type="button"
                              onClick={() => handleOpenEditPost(post)}
                              className="px-3 py-1.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 font-semibold text-xs transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                            >
                              <Edit2 className="w-3.5 h-3.5" />
                              <span>Editar</span>
                            </button>
                            <button
                              type="button"
                              onClick={() => handleDeletePost(post.id)}
                              className="px-3 py-1.5 rounded-lg border border-red-200 text-red-600 hover:bg-red-50 font-semibold text-xs transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                              <span>Excluir</span>
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
      ) : (
        // ABA 2: SOLICITAÇÕES COMERCIAIS
        <main className="flex-1 bg-[#FFFFFF] p-6 md:p-10 overflow-y-auto font-opensans">
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
                Gerencie os diagnósticos e oportunidades capturados em todos os formulários do site.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={fetchSolicitacoes}
                disabled={isLoadingSolicitacoes}
                className="px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-700 font-bold text-xs hover:bg-slate-50 transition-all shadow-sm flex items-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <RefreshCw
                  className={`w-4 h-4 text-slate-500 ${
                    isLoadingSolicitacoes ? "animate-spin" : ""
                  }`}
                />
                <span>Atualizar</span>
              </button>
            </div>
          </div>

          {solicitacoesError && (
            <div className="mt-6 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-800 text-xs sm:text-sm font-medium flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold">Aviso do Banco de Dados:</p>
                <p className="mt-0.5">{solicitacoesError}</p>
              </div>
            </div>
          )}

          {/* Filtros e Busca */}
          <div className="mt-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
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
                  {isLoadingSolicitacoes ? (
                    <tr>
                      <td colSpan={6} className="py-16 text-center text-slate-400">
                        <div className="flex items-center justify-center gap-3">
                          <div className="w-5 h-5 border-2 border-[#42A5D3] border-t-transparent rounded-full animate-spin" />
                          <span className="font-semibold text-slate-600">
                            Carregando solicitações...
                          </span>
                        </div>
                      </td>
                    </tr>
                  ) : filteredSolicitacoes.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="py-16 text-center text-slate-400">
                        <Inbox className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                        <p className="font-bold text-slate-700 text-sm">
                          Nenhuma solicitação encontrada
                        </p>
                        <p className="text-xs text-slate-400 mt-1">
                          {searchTerm || selectedStatus !== "Todos"
                            ? "Nenhum resultado com os filtros selecionados."
                            : "Quando os clientes enviarem formulários no site, eles aparecerão aqui com data e horário."}
                        </p>
                      </td>
                    </tr>
                  ) : (
                    filteredSolicitacoes.map((item) => (
                      <tr key={item.id} className="hover:bg-slate-50/80 transition-colors group">
                        <td className="py-4 px-5 text-slate-500 whitespace-nowrap">
                          <div className="flex items-center gap-1.5 font-medium">
                            <Clock className="w-3.5 h-3.5 text-slate-400" />
                            <span>{formatDate(item.created_at)}</span>
                          </div>
                        </td>

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
                            {item.whatsapp && item.whatsapp !== "Não informado" && (
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
                            )}
                          </div>
                        </td>

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

                        <td className="py-4 px-5">
                          <select
                            value={item.status}
                            onChange={(e) =>
                              handleUpdateSolicitacaoStatus(item.id, e.target.value)
                            }
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
                              onClick={() => handleDeleteSolicitacao(item.id)}
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
      )}

      {/* ========================================================
          MODAIS DO BLOG
          ======================================================== */}
      {isPostModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#051D3E]/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h3 className="font-montserrat font-extrabold text-xl text-[#051D3E]">
                {editingPost ? "Editar Artigo" : "Novo Artigo para o Blog"}
              </h3>
              <button
                type="button"
                onClick={() => setIsPostModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSavePost} className="space-y-4 text-xs font-semibold">
              <div className="space-y-1.5">
                <label className="text-slate-700">Título da Postagem</label>
                <input
                  type="text"
                  required
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  placeholder="Ex: Tendências de Engenharia para 2026"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 outline-none focus:border-[#42A5D3]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-slate-700">Categoria (Filtro)</label>
                  <select
                    value={formCategory}
                    onChange={(e) => setFormCategory(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 bg-white outline-none focus:border-[#42A5D3]"
                  >
                    {categories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-700">Autor</label>
                  <input
                    type="text"
                    required
                    value={formAuthor}
                    onChange={(e) => setFormAuthor(e.target.value)}
                    placeholder="Ex: Equipe CONSELT / Prof. Dr. Silva"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 outline-none focus:border-[#42A5D3]"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-slate-700">Imagem de Capa</label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    value={formImage}
                    onChange={(e) => setFormImage(e.target.value)}
                    placeholder="Cole o link da imagem (https://...)"
                    className="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 outline-none focus:border-[#42A5D3]"
                  />
                  <label className="px-4 py-2.5 rounded-xl border border-dashed border-slate-300 bg-slate-50 text-slate-700 hover:bg-slate-100 flex items-center justify-center gap-2 cursor-pointer transition-colors whitespace-nowrap">
                    <Upload className="w-4 h-4 text-slate-500" />
                    <span>Upload de Arquivo</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-slate-700">Resumo Chamativo (Card)</label>
                <textarea
                  required
                  rows={2}
                  value={formExcerpt}
                  onChange={(e) => setFormExcerpt(e.target.value)}
                  placeholder="Escreva um breve resumo chamativo que aparecerá no card do blog..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 outline-none focus:border-[#42A5D3]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-slate-700">Conteúdo Completo do Artigo</label>
                <textarea
                  required
                  rows={6}
                  value={formFullText}
                  onChange={(e) => setFormFullText(e.target.value)}
                  placeholder="Escreva aqui todo o artigo completo do blog, incluindo parágrafos e detalhes técnicos..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 outline-none focus:border-[#42A5D3]"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsPostModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 font-bold"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#42A5D3] text-[#051D3E] font-extrabold hover:bg-[#3492be] transition-all shadow-md cursor-pointer"
                >
                  Salvar Postagem
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal de Filtros / Categorias */}
      {isFilterModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#051D3E]/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-md rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h3 className="font-montserrat font-extrabold text-xl text-[#051D3E]">
                Gerenciar Categorias
              </h3>
              <button
                type="button"
                onClick={() => setIsFilterModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddCategory} className="flex gap-2 text-xs">
              <input
                type="text"
                required
                value={newFilterInput}
                onChange={(e) => setNewFilterInput(e.target.value)}
                placeholder="Nova Categoria (ex: Automação)"
                className="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 outline-none focus:border-[#42A5D3]"
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded-xl bg-[#42A5D3] text-[#051D3E] font-extrabold hover:bg-[#3492be] transition-all"
              >
                Adicionar
              </button>
            </form>

            <div className="space-y-2 max-h-60 overflow-y-auto">
              {categories.map((c, idx) => (
                <div
                  key={c}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800"
                >
                  <span>{c}</span>
                  {categories.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveCategory(idx)}
                      className="p-1 text-slate-400 hover:text-red-500 rounded-md"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-2 text-right">
              <button
                type="button"
                onClick={() => setIsFilterModalOpen(false)}
                className="px-6 py-2.5 rounded-xl bg-[#051D3E] text-white font-bold text-xs"
              >
                Concluir
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          MODAL DE DETALHES DA SOLICITAÇÃO COMERCIAL
          ======================================================== */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-[#051D3E]/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
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

            <div className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1 font-opensans text-slate-800">
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
                      onChange={(e) =>
                        handleUpdateSolicitacaoStatus(selectedItem.id, e.target.value)
                      }
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
                  {selectedItem.whatsapp && selectedItem.whatsapp !== "Não informado" && (
                    <a
                      href={`https://wa.me/55${selectedItem.whatsapp.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp</span>
                    </a>
                  )}

                  <a
                    href={`mailto:${selectedItem.email}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#093565] hover:bg-[#2270A1] text-white font-bold text-xs transition-colors shadow-sm"
                  >
                    <Mail className="w-4 h-4" />
                    <span>E-mail</span>
                  </a>
                </div>
              </div>

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

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-[11px] font-bold text-[#051D3E] uppercase tracking-wider block">
                  Desafio e Objetivo Descrito pelo Cliente:
                </span>
                <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">
                  {selectedItem.desafio}
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              <button
                type="button"
                onClick={() => handleDeleteSolicitacao(selectedItem.id)}
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
