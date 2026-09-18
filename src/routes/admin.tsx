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

function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isCheckingSession, setIsCheckingSession] = useState<boolean>(true);

  // Login form state
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Blog CRUD state inicializado com localStorage para sincronização em tempo real com a página de Conteúdos
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

  // Salva posts e categorias no localStorage sempre que forem alterados
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("conselt_blog_posts", JSON.stringify(posts));
    }
  }, [posts]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("conselt_blog_categories", JSON.stringify(categories));
    }
  }, [categories]);

  // Modal states
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<PostItem | null>(null);

  // Form states inside Post Modal
  const [formTitle, setFormTitle] = useState("");
  const [formAuthor, setFormAuthor] = useState("");
  const [formExcerpt, setFormExcerpt] = useState("");
  const [formCategory, setFormCategory] = useState("Automação");
  const [formImage, setFormImage] = useState("");
  const [formFullText, setFormFullText] = useState("");

  // Form state inside Filter Modal
  const [newFilterInput, setNewFilterInput] = useState("");

  // Handler para Upload de Imagem de arquivo local
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

  // Funções CRUD do Blog
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

  const handleDeletePost = (id: number) => {
    if (window.confirm("Deseja realmente excluir esta postagem?")) {
      setPosts(posts.filter((p) => p.id !== id));
    }
  };

  const handleSavePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingPost) {
      setPosts(
        posts.map((p) =>
          p.id === editingPost.id
            ? {
                ...p,
                title: formTitle,
                author: formAuthor,
                excerpt: formExcerpt,
                category: formCategory,
                image: formImage,
                fullText: formFullText,
              }
            : p
        )
      );
    } else {
      const newId = posts.length > 0 ? Math.max(...posts.map((p) => p.id)) + 1 : 1;
      const today = new Date().toLocaleDateString("pt-BR");
      setPosts([
        {
          id: newId,
          title: formTitle,
          author: formAuthor,
          excerpt: formExcerpt,
          category: formCategory,
          image: formImage,
          fullText: formFullText,
          date: today,
        },
        ...posts,
      ]);
    }
    setIsPostModalOpen(false);
  };

  // 1. Checagem inicial de sessão com Supabase
  useEffect(() => {
    async function checkSession() {
      try {
        const { data: { session } } = await supabase.auth.getSession();
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

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
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

  // 2. Manipulador do Login com Trava Restrita
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

  // 3. Manipulador de Logout
  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
    } catch (err) {
      console.error("Erro ao realizar logout:", err);
    } finally {
      setIsAuthenticated(false);
    }
  };

  const handleAddCategory = (e: React.FormEvent) => {
    e.preventDefault();
    const val = newFilterInput.trim();
    if (val && !categories.includes(val)) {
      setCategories([...categories, val]);
      setNewFilterInput("");
    }
  };

  const handleRemoveCategory = (index: number) => {
    setCategories(categories.filter((_, i) => i !== index));
  };

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

  // VIEW DE LOGIN (#login-section)
  if (!isAuthenticated) {
    return (
      <div id="login-section" className="min-h-screen bg-[#051D3E] flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-[#FFFFFF] rounded-3xl p-8 sm:p-10 shadow-2xl space-y-6">
          
          <div className="text-center space-y-2">
            <img src={diamondImg} alt="CONSELT" className="w-14 h-14 mx-auto object-contain mb-2" />
            <h1 className="font-montserrat text-2xl font-extrabold text-[#051D3E] tracking-tight">CONSELT Admin</h1>
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
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">E-mail</label>
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
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Senha de acesso</label>
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

  // VIEW DO DASHBOARD (#dashboard-section)
  return (
    <div id="dashboard-section" className="min-h-screen flex flex-col md:flex-row bg-[#FFFFFF]">
      
      {/* Sidebar Lateral Azul Noite (#051D3E) */}
      <aside className="w-full md:w-64 bg-[#051D3E] text-white flex flex-col justify-between shrink-0 border-r border-[#051D3E]">
        <div>
          <div className="p-6 border-b border-white/10 flex items-center gap-3">
            <img src={diamondImg} alt="CONSELT" className="w-9 h-9 object-contain" />
            <div>
              <h2 className="font-montserrat font-extrabold text-base tracking-tight text-white">CONSELT</h2>
              <span className="text-[10px] text-[#42A5D3] uppercase font-bold tracking-widest block -mt-1">Painel Admin</span>
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

          <nav className="px-4 space-y-1">
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#42A5D3] text-[#051D3E] font-bold text-xs shadow-md">
              <FileText className="w-4 h-4" />
              <span>Gerenciar Conteúdos</span>
            </a>
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

      {/* Área Principal Branca (#FFFFFF) */}
      <main className="flex-1 bg-[#FFFFFF] p-6 md:p-10 overflow-y-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            <h1 className="font-montserrat text-2xl font-extrabold text-[#051D3E]">Gerenciamento de Postagens</h1>
            <p className="text-xs text-slate-500 mt-1">Crie, edite e organize os artigos publicados no portal da CONSELT.</p>
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
                {posts.length === 0 ? (
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
                            className="px-3 py-1.5 rounded-lg bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 font-semibold text-xs transition-colors inline-flex items-center gap-1.5 cursor-pointer"
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

      {/* Modal Novo / Editar Post */}
      {isPostModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5 animate-in fade-in max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 sticky top-0 bg-white z-10">
              <h3 className="font-montserrat font-extrabold text-lg text-[#051D3E]">
                {editingPost ? "Editar Artigo" : "Novo Artigo"}
              </h3>
              <button
                type="button"
                onClick={() => setIsPostModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 font-bold cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSavePost} className="space-y-4 text-xs">
              {/* Título */}
              <div className="space-y-1">
                <label className="font-bold text-slate-700 block">Título do Post *</label>
                <input
                  type="text"
                  required
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  placeholder="Ex: Tendências de Engenharia para 2026"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 font-medium text-sm focus:outline-none focus:border-[#42A5D3]"
                />
              </div>

              {/* Grid: Área / Categoria e Quem criou */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700 block">Área (Categoria) *</label>
                  <select
                    value={formCategory}
                    onChange={(e) => setFormCategory(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 font-medium text-sm focus:outline-none focus:border-[#42A5D3]"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700 block">Quem criou (Autor) *</label>
                  <input
                    type="text"
                    required
                    value={formAuthor}
                    onChange={(e) => setFormAuthor(e.target.value)}
                    placeholder="Ex: Equipe CONSELT / Prof. Dr. Silva"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 font-medium text-sm focus:outline-none focus:border-[#42A5D3]"
                  />
                </div>
              </div>

              {/* Imagem de Capa (Upload de arquivo local ou URL) */}
              <div className="space-y-2">
                <label className="font-bold text-slate-700 block">Imagem de Capa (Upload do dispositivo ou URL)</label>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <label className="flex-1 px-4 py-2.5 rounded-xl border border-dashed border-slate-400 bg-slate-50 text-slate-700 text-xs font-bold hover:bg-slate-100 cursor-pointer flex items-center justify-center gap-2 transition-colors">
                    <Upload className="w-4 h-4 text-[#42A5D3]" />
                    <span>Upload de Imagem</span>
                    <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                  </label>
                  <span className="text-xs font-semibold text-slate-400 text-center">ou</span>
                  <input
                    type="url"
                    value={formImage}
                    onChange={(e) => setFormImage(e.target.value)}
                    placeholder="Cole o link da imagem (https://...)"
                    className="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 font-medium text-xs focus:outline-none focus:border-[#42A5D3]"
                  />
                </div>
                {formImage && (
                  <div className="flex items-center gap-3 pt-2">
                    <img src={formImage} alt="Pré-visualização" className="w-16 h-16 object-cover rounded-xl border border-slate-200" />
                    <div className="text-xs text-slate-500">
                      <span className="font-semibold text-emerald-600 block">✓ Imagem Selecionada</span>
                      <button type="button" onClick={() => setFormImage("")} className="text-red-500 underline font-bold mt-0.5 cursor-pointer">Remover Imagem</button>
                    </div>
                  </div>
                )}
              </div>

              {/* Resumo do Card */}
              <div className="space-y-1">
                <label className="font-bold text-slate-700 block">Resumo do Card (Aparece na listagem) *</label>
                <textarea
                  rows={2}
                  required
                  value={formExcerpt}
                  onChange={(e) => setFormExcerpt(e.target.value)}
                  placeholder="Escreva um breve resumo chamativo que aparecerá no card do blog..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 font-medium text-sm focus:outline-none focus:border-[#42A5D3]"
                />
              </div>

              {/* Corpo Completo do Texto do Blog */}
              <div className="space-y-1">
                <label className="font-bold text-slate-700 block">Corpo Completo do Texto do Blog (Artigo Completo) *</label>
                <textarea
                  rows={6}
                  required
                  value={formFullText}
                  onChange={(e) => setFormFullText(e.target.value)}
                  placeholder="Escreva aqui todo o artigo completo do blog, incluindo parágrafos e detalhes técnicos..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 font-medium text-sm focus:outline-none focus:border-[#42A5D3]"
                />
              </div>

              <div className="flex justify-end gap-3 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsPostModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-slate-200 font-bold text-slate-600 hover:bg-slate-50 cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#42A5D3] text-[#051D3E] font-extrabold hover:bg-[#3492be] cursor-pointer"
                >
                  Salvar Post
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal Gerenciar Filtros */}
      {isFilterModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h3 className="font-montserrat font-extrabold text-lg text-[#051D3E]">Gerenciar Filtros</h3>
              <button
                type="button"
                onClick={() => setIsFilterModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 font-bold cursor-pointer"
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
                className="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 font-medium text-sm focus:outline-none focus:border-[#42A5D3]"
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded-xl bg-[#051D3E] text-white font-bold hover:bg-[#093565] cursor-pointer"
              >
                Adicionar
              </button>
            </form>

            <div className="space-y-2 text-xs">
              <label className="font-bold text-slate-700 block">Filtros Existentes:</label>
              <ul className="divide-y divide-slate-100 border border-slate-200 rounded-xl max-h-48 overflow-y-auto">
                {categories.map((cat, index) => (
                  <li key={cat} className="px-4 py-2.5 flex items-center justify-between hover:bg-slate-50">
                    <span className="font-semibold text-slate-700">{cat}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveCategory(index)}
                      className="text-red-500 hover:text-red-700 font-bold text-xs cursor-pointer"
                    >
                      Remover
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 text-right">
              <button
                type="button"
                onClick={() => setIsFilterModalOpen(false)}
                className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 font-bold hover:bg-slate-200 text-xs cursor-pointer"
              >
                Concluir
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
