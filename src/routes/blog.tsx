import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight, UserCheck, Search, Sparkles } from "lucide-react";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Conteúdos — Conselt" },
      {
        name: "description",
        content: "Conteúdos para tomar decisões melhores em tecnologia, engenharia e automação.",
      },
    ],
  }),
  component: BlogPage,
});

const COVER_IMAGES = [blog1, blog2, blog3];

const INITIAL_POSTS = [
  {
    id: 1,
    title: "Como a Automação Industrial reduz custos operacionais em até 30%",
    category: "Automação",
    author: "Equipe CONSELT",
    date: "14/09/2026",
    content: "Visão completa das melhores práticas em automação para empresas júniores.",
  },
  {
    id: 2,
    title: "Por que sua empresa precisa de uma plataforma Web sob medida em 2026",
    category: "Websites",
    author: "Diretoria de Projetos",
    date: "10/09/2026",
    content: "Vantagens competitivas de investir em tecnologia própria e personalizada.",
  },
  {
    id: 3,
    title: "Laudos de Segurança Elétrica e Adequação de Projetos Comerciais",
    category: "Projetos elétricos",
    author: "Consultoria Elétrica",
    date: "05/09/2026",
    content: "Orientações normativas essenciais para laudos de segurança e instalações.",
  },
];

function BlogPage() {
  // Estado dos posts dinâmicos vinculados à página de Admin
  const [posts, setPosts] = useState<any[]>(() => {
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

  // Estado das categorias dinâmicas do Admin
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

  const [activeCluster, setActiveCluster] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArticle, setSelectedArticle] = useState<any | null>(null);

  // Sincronização em tempo real ao alterar posts/categorias no Admin
  useEffect(() => {
    const handleStorageChange = () => {
      if (typeof window !== "undefined") {
        const savedPosts = localStorage.getItem("conselt_blog_posts");
        if (savedPosts) {
          try {
            setPosts(JSON.parse(savedPosts));
          } catch (e) {}
        }
        const savedCategories = localStorage.getItem("conselt_blog_categories");
        if (savedCategories) {
          try {
            setCategories(JSON.parse(savedCategories));
          } catch (e) {}
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // Lista de pills de categorias dinâmicas (únicas)
  const filterPills = ["Todos", ...Array.from(new Set([...categories, ...posts.map((p) => p.category)]))];

  const filteredArticles = posts.filter((art) => {
    const matchesCluster =
      activeCluster === "Todos" || art.category === activeCluster;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (art.excerpt && art.excerpt.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (art.fullText && art.fullText.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (art.author && art.author.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCluster && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-foreground font-opensans">
      <Header />

      {/* 1. Estrutura e Cabeçalho (Hero em Azul Profundo #093565) */}
      <section className="bg-[#093565] pt-32 sm:pt-40 pb-16 lg:pt-44 lg:pb-20 px-6 lg:px-10 text-white relative z-10 overflow-hidden">
        {/* Detalhe decorativo de fundo */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#42A5D3] blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#42A5D3]/10 border border-[#42A5D3]/30 text-[#42A5D3] text-xs font-semibold tracking-widest uppercase mb-5">
            <Sparkles className="w-3.5 h-3.5 text-[#42A5D3]" />
            <span>Blog & Artigos Técnicos</span>
          </div>

          <h1 className="font-opensans font-bold text-3xl sm:text-4xl lg:text-[48px] leading-[1.2] text-[#FFFFFF] max-w-4xl mx-auto tracking-tight">
            Conteúdos para tomar decisões melhores em tecnologia, engenharia e automação.
          </h1>

          <div className="w-16 h-1 bg-[#42A5D3] rounded-full mt-6 mx-auto" />
        </div>
      </section>

      {/* 2. Navegação de Categorias (Clusters) & Barra de Busca */}
      <section className="bg-[#F4F9FC]/95 backdrop-blur-md border-b border-[#093565]/10 py-3 px-4 sm:px-6 lg:px-10 sticky top-24 lg:top-28 z-20 shadow-sm transition-all duration-300">
        <div className="w-[90%] max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
          
          {/* Menu Horizontal de Pills de Categoria Dinâmicas */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1.5 md:pb-0 no-scrollbar">
            {filterPills.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCluster(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-opensans font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  activeCluster === cat
                    ? "bg-[#2270A1] text-white shadow-md"
                    : "bg-white border border-[#093565]/15 text-[#093565] hover:border-[#2270A1] hover:text-[#2270A1]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Campo de Busca Rápida */}
          <div className="relative w-full md:w-64 shrink-0">
            <input
              type="text"
              placeholder="Buscar artigos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 text-xs sm:text-sm rounded-full border border-[#093565]/15 bg-white text-[#162638] focus:outline-none focus:border-[#2270A1]"
            />
            <Search className="w-4 h-4 text-[#093565]/50 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>

        </div>
      </section>

      {/* 3. Grid de Artigos (Cards vinculados exclusivamente aos Posts da Página Admin) */}
      <main className="flex-1 py-16 sm:py-20 lg:py-24 px-6 lg:px-10 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto">
          
          {filteredArticles.length === 0 ? (
            <div className="py-16 text-center text-[#162638]">
              <p className="text-lg font-semibold">Nenhum artigo postado ou encontrado para os critérios selecionados.</p>
              <p className="text-xs text-slate-500 mt-2">Novos artigos cadastrados no Painel Admin aparecerão aqui automaticamente.</p>
              <button
                type="button"
                onClick={() => { setActiveCluster("Todos"); setSearchQuery(""); }}
                className="mt-4 text-sm text-[#2270A1] font-bold underline cursor-pointer"
              >
                Ver todos os artigos
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {filteredArticles.map((art, index) => {
                const coverImg = art.image || COVER_IMAGES[index % COVER_IMAGES.length];
                return (
                  <article
                    key={art.id}
                    className="bg-[#FFFFFF] border border-[#093565]/15 rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Imagem de Capa do Artigo com Tag da Área/Categoria Cadastrada no Admin */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 border-b border-[#093565]/10">
                        <img
                          src={coverImg}
                          alt={art.title}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-opensans font-semibold uppercase tracking-wider bg-[#2270A1] text-white shadow-sm">
                          {art.category}
                        </span>
                      </div>

                      {/* Conteúdo do Card (Título, Autor/Quem Criou, Resumo) */}
                      <div className="p-6 sm:p-8">
                        {/* Data */}
                        <div className="text-xs font-mono text-[#093565]/60 mb-2">
                          {art.date || "Publicado recentemente"}
                        </div>

                        {/* Título do Artigo */}
                        <h3 className="font-opensans font-bold text-[20px] lg:text-[22px] leading-snug text-[#093565] group-hover:text-[#2270A1] transition-colors mb-3">
                          {art.title}
                        </h3>

                        {/* Autor / Quem Criou cadastrado no Admin */}
                        <div className="flex items-center gap-1.5 text-xs text-[#2270A1] font-medium mb-4 pb-3 border-b border-[#093565]/10">
                          <UserCheck className="w-3.5 h-3.5 shrink-0 text-[#2270A1]" />
                          <span>Por {art.author || "Equipe CONSELT"}</span>
                        </div>

                        {/* Resumo cadastrado no Admin */}
                        <p className="font-opensans font-normal text-base text-[#162638] leading-relaxed line-clamp-3">
                          {art.excerpt || art.content}
                        </p>
                      </div>
                    </div>

                    {/* Botão para Ler Artigo Completo */}
                    <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0">
                      <button
                        type="button"
                        onClick={() => setSelectedArticle({ ...art, coverImg })}
                        className="inline-flex items-center gap-2 text-sm font-opensans font-bold text-[#2270A1] group/link hover:text-[#093565] transition-colors cursor-pointer"
                      >
                        <span>Ler artigo completo</span>
                        <ArrowRight className="w-4 h-4 text-[#2270A1] group-hover/link:translate-x-1.5 transition-transform duration-300" />
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          )}

        </div>
      </main>

      {/* MODAL / LEITURA DO ARTIGO COMPLETO */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl animate-in fade-in max-h-[90vh] flex flex-col">
            {/* Header da Imagem com Botão de Fechar */}
            <div className="relative h-64 sm:h-80 w-full overflow-hidden shrink-0">
              <img
                src={selectedArticle.coverImg}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
              
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-900/60 text-white grid place-items-center hover:bg-slate-900 transition-colors font-bold cursor-pointer"
              >
                ✕
              </button>

              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#42A5D3] text-[#051D3E]">
                  {selectedArticle.category}
                </span>
                <h2 className="font-montserrat font-extrabold text-2xl sm:text-3xl leading-tight">
                  {selectedArticle.title}
                </h2>
              </div>
            </div>

            {/* Conteúdo do Artigo Completo */}
            <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-[#162638]">
              {/* Metadados */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200 text-xs text-slate-500 font-semibold">
                <div className="flex items-center gap-2 text-[#2270A1]">
                  <UserCheck className="w-4 h-4" />
                  <span>Por {selectedArticle.author || "Equipe CONSELT"}</span>
                </div>
                <div>Publicado em: {selectedArticle.date || "Setembro 2026"}</div>
              </div>

              {/* Resumo em Destaque */}
              {selectedArticle.excerpt && (
                <div className="p-4 rounded-2xl bg-[#F4F9FC] border-l-4 border-[#2270A1] text-sm sm:text-base font-semibold text-[#093565] italic">
                  "{selectedArticle.excerpt}"
                </div>
              )}

              {/* Corpo Completo do Texto */}
              <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#162638] font-opensans">
                {(selectedArticle.fullText || selectedArticle.content || selectedArticle.excerpt || "")
                  .split(/\n{2,}/)
                  .map((block: string, idx: number) => {
                    const trimmed = block.trim();
                    if (!trimmed) return null;

                    // Título H1
                    if (trimmed.startsWith("# ")) {
                      return (
                        <h2 key={idx} className="text-xl sm:text-2xl font-extrabold text-[#093565] mt-6 mb-2 font-montserrat">
                          {trimmed.replace(/^# /, "")}
                        </h2>
                      );
                    }

                    // Título H2
                    if (trimmed.startsWith("## ")) {
                      return (
                        <h3 key={idx} className="text-lg sm:text-xl font-bold text-[#093565] mt-6 mb-2 font-montserrat">
                          {trimmed.replace(/^## /, "")}
                        </h3>
                      );
                    }

                    // Título H3
                    if (trimmed.startsWith("### ")) {
                      return (
                        <h4 key={idx} className="text-base sm:text-lg font-bold text-[#093565] mt-4 mb-1 font-montserrat">
                          {trimmed.replace(/^### /, "")}
                        </h4>
                      );
                    }

                    // Citação
                    if (trimmed.startsWith("> ")) {
                      return (
                        <blockquote key={idx} className="border-l-4 border-[#2270A1] bg-[#F4F9FC] p-4 my-3 rounded-r-xl text-[#093565] italic font-medium">
                          {trimmed.replace(/^> /, "")}
                        </blockquote>
                      );
                    }

                    // Divisor
                    if (trimmed === "---") {
                      return <hr key={idx} className="my-6 border-slate-200" />;
                    }

                    // Lista
                    if (trimmed.startsWith("- ") || trimmed.startsWith("* ") || trimmed.startsWith("• ")) {
                      const items = trimmed.split("\n").filter(Boolean);
                      return (
                        <ul key={idx} className="list-disc pl-5 space-y-1.5 text-[#162638]">
                          {items.map((it, i) => (
                            <li key={i}>{it.replace(/^[-*•]\s+/, "")}</li>
                          ))}
                        </ul>
                      );
                    }

                    // Parágrafo regular (suporta quebras de linha simples internas e **negrito**)
                    return (
                      <p key={idx} className="text-[#162638] leading-relaxed whitespace-pre-line">
                        {trimmed}
                      </p>
                    );
                  })}
              </div>

              <div className="pt-6 border-t border-slate-200 text-right">
                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  className="px-6 py-2.5 rounded-xl bg-[#093565] text-white font-bold text-xs sm:text-sm hover:bg-[#2270A1] transition-colors cursor-pointer"
                >
                  Fechar Artigo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer fromColor="#F4F9FC" />
    </div>
  );
}
