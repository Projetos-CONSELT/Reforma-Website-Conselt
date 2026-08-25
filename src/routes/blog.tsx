import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight, UserCheck, Search } from "lucide-react";
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

const clusters = [
  "Todos",
  "Websites",
  "Software/aplicativos",
  "Projetos elétricos",
  "Luminotécnico",
  "Automação",
  "Empresa Júnior",
];

const articles = [
  {
    id: "1",
    category: "Automação",
    title: "Tendências em sistemas elétricos para casas inteligentes em 2026",
    metadata: "Por Equipe de Automação | Revisão Técnica: Prof. Dr. Carlos (FEELT/UFU)",
    excerpt: "Entenda como a integração entre iluminação, climatização e energia limpa está reformulando o conceito de eficiência residencial.",
    image: blog1,
    date: "18 Ago 2026",
  },
  {
    id: "2",
    category: "Websites",
    title: "Como a arquitetura de informação reduz o custo de aquisição de clientes",
    metadata: "Por Equipe de Soluções Digitais | Revisão Técnica: Equipe UX Conselt",
    excerpt: "Um diagnóstico prático sobre como estruturas claras de navegação convertem visitantes em solicitações de orçamento qualificadas.",
    image: blog2,
    date: "12 Ago 2026",
  },
  {
    id: "3",
    category: "Software/aplicativos",
    title: "Sistemas sob medida vs. softwares genéricos: quando migrar sua operação",
    metadata: "Por Equipe de Engenharia de Software | Revisão Técnica: Conselho Técnico Conselt",
    excerpt: "Análise dos gargalos causados por planilhas fragmentadas e como centralizar dados em aplicações dedicadas de alta performance.",
    image: blog3,
    date: "05 Ago 2026",
  },
  {
    id: "4",
    category: "Projetos elétricos",
    title: "Dimensionamento e segurança em projetos elétricos comerciais",
    metadata: "Por Equipe de Engenharia Elétrica | Revisão Técnica: Supervisão FEELT/UFU",
    excerpt: "Práticas de compatibilização para eliminar retrabalhos, impropriedades e desperdícios durante a execução de obras.",
    image: blog1,
    date: "28 Jul 2026",
  },
  {
    id: "5",
    category: "Luminotécnico",
    title: "Simulação luminotécnica: conforto visual e eficiência energética",
    metadata: "Por Equipe de Engenharia | Revisão Técnica: Projeto Luminotécnico Conselt",
    excerpt: "Como especificações adequadas de temperatura de cor e curva de distribuição luminosa transformam a percepção do ambiente.",
    image: blog2,
    date: "20 Jul 2026",
  },
  {
    id: "6",
    category: "Empresa Júnior",
    title: "O impacto do modelo de Empresa Júnior no mercado de engenharia e tecnologia",
    metadata: "Por Diretoria Executiva | Revisão Técnica: Orientação Institucional UFU",
    excerpt: "Como a formação acadêmica aliada à supervisão docente entrega soluções rigorosas e acessíveis para empresas de todos os portes.",
    image: blog3,
    date: "10 Jul 2026",
  },
];

function BlogPage() {
  const [activeCluster, setActiveCluster] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = articles.filter((art) => {
    const matchesCluster =
      activeCluster === "Todos" || art.category === activeCluster;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
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
            <span className="w-1.5 h-1.5 rounded-full bg-[#42A5D3]" />
            Blog & Artigos Técnicos
          </div>

          <h1 className="font-opensans font-bold text-3xl sm:text-4xl lg:text-[48px] leading-[1.2] text-[#FFFFFF] max-w-4xl mx-auto tracking-tight">
            Conteúdos para tomar decisões melhores em tecnologia, engenharia e automação.
          </h1>

          <div className="w-16 h-1 bg-[#42A5D3] rounded-full mt-6 mx-auto" />
        </div>
      </section>

      {/* 2. Navegação de Categorias (Clusters) & Barra de Busca */}
      <section className="bg-[#F4F9FC] border-b border-[#093565]/10 py-6 px-6 lg:px-10 sticky top-20 z-20 shadow-sm backdrop-blur">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Menu Horizontal de Pills de Categoria */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {clusters.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCluster(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-opensans font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer ${
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
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-full border border-[#093565]/15 bg-white text-[#162638] focus:outline-none focus:border-[#2270A1]"
            />
            <Search className="w-4 h-4 text-[#093565]/50 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>

        </div>
      </section>

      {/* 3. Grid de Artigos (Cards do Blog) */}
      <main className="flex-1 py-16 sm:py-20 lg:py-24 px-6 lg:px-10 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto">
          
          {filteredArticles.length === 0 ? (
            <div className="py-16 text-center text-[#162638]">
              <p className="text-lg font-semibold">Nenhum artigo encontrado para os critérios selecionados.</p>
              <button
                type="button"
                onClick={() => { setActiveCluster("Todos"); setSearchQuery(""); }}
                className="mt-4 text-sm text-[#2270A1] font-bold underline"
              >
                Ver todos os artigos
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {filteredArticles.map((art) => (
                <article
                  key={art.id}
                  className="bg-[#FFFFFF] border border-[#093565]/15 rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Imagem de Capa do Artigo com Tag em Ciano Elétrico */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 border-b border-[#093565]/10">
                      <img
                        src={art.image}
                        alt={art.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-opensans font-semibold uppercase tracking-wider bg-[#2270A1] text-white shadow-sm">
                        {art.category}
                      </span>
                    </div>

                    {/* Conteúdo do Card */}
                    <div className="p-6 sm:p-8">
                      {/* Data */}
                      <div className="text-xs font-mono text-[#093565]/60 mb-2">
                        {art.date}
                      </div>

                      {/* Título do Artigo (H3) */}
                      <h3 className="font-opensans font-bold text-[20px] lg:text-[22px] leading-snug text-[#093565] group-hover:text-[#2270A1] transition-colors mb-3">
                        {art.title}
                      </h3>

                      {/* Metadados (Prova técnica) */}
                      <div className="flex items-center gap-1.5 text-xs text-[#2270A1] font-medium mb-4 pb-3 border-b border-[#093565]/10">
                        <UserCheck className="w-3.5 h-3.5 shrink-0 text-[#2270A1]" />
                        <span>{art.metadata}</span>
                      </div>

                      {/* Resumo / Excerpt (parágrafo p em Texto Escuro #162638) */}
                      <p className="font-opensans font-normal text-base text-[#162638] leading-relaxed">
                        {art.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Link / CTA no Rodapé do Card */}
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0">
                    <Link
                      to="/blog"
                      className="inline-flex items-center gap-2 text-sm font-opensans font-bold text-[#2270A1] group/link hover:text-[#093565] transition-colors"
                    >
                      <span>Ler artigo completo</span>
                      <ArrowRight className="w-4 h-4 text-[#2270A1] group-hover/link:translate-x-1.5 transition-transform duration-300" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
