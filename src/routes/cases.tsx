import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import {
  Search,
  Filter,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Layers,
  Building2,
  ExternalLink,
  MessageSquare,
  X,
  ChevronRight,
  HelpCircle,
  Zap,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  SERVICE_OPTIONS,
  SEGMENT_OPTIONS,
  CHALLENGE_OPTIONS,
  CASES_DATA,
} from "@/data/casesData";
import {
  CaseItem,
  ServiceCategory,
  SegmentCategory,
  ChallengeTypeCategory,
} from "@/types/case";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export const Route = createFileRoute("/cases")({
  head: () => ({
    meta: [
      { title: "Cases & Portfólio — Conselt" },
      {
        name: "description",
        content:
          "Explore projetos de soluções digitais, engenharia e automação e entenda o problema, o processo e a transformação entregue em cada caso.",
      },
    ],
  }),
  component: CasesPage,
});

function CasesPage() {
  const [selectedService, setSelectedService] = useState<ServiceCategory | "Todos">("Todos");
  const [selectedSegment, setSelectedSegment] = useState<SegmentCategory | "Todos">("Todos");
  const [selectedChallenge, setSelectedChallenge] = useState<ChallengeTypeCategory | "Todos">("Todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCase, setActiveCase] = useState<CaseItem | null>(null);

  // Filter logic
  const filteredCases = useMemo(() => {
    return CASES_DATA.filter((item) => {
      const matchService = selectedService === "Todos" || item.service === selectedService;
      const matchSegment = selectedSegment === "Todos" || item.segment === selectedSegment;
      const matchChallenge = selectedChallenge === "Todos" || item.challengeType === selectedChallenge;
      
      const query = searchQuery.toLowerCase().trim();
      const matchQuery =
        !query ||
        item.client.toLowerCase().includes(query) ||
        item.service.toLowerCase().includes(query) ||
        item.segment.toLowerCase().includes(query) ||
        item.challengeType.toLowerCase().includes(query) ||
        item.cardData.desafio.toLowerCase().includes(query);

      return matchService && matchSegment && matchChallenge && matchQuery;
    });
  }, [selectedService, selectedSegment, selectedChallenge, searchQuery]);

  const hasActiveFilters =
    selectedService !== "Todos" ||
    selectedSegment !== "Todos" ||
    selectedChallenge !== "Todos" ||
    searchQuery !== "";

  const clearFilters = () => {
    setSelectedService("Todos");
    setSelectedSegment("Todos");
    setSelectedChallenge("Todos");
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#070b14] text-foreground font-sans selection:bg-primary/30 selection:text-white">
      <Header />

      <main className="flex-1 pt-32 pb-24 lg:pt-40 lg:pb-32 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto w-full">
        {/* 16.1 HERO SECTION - Abertura da página */}
        <section className="relative text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          {/* Subtle Glow Backdrop */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/15 blur-[120px] rounded-full pointer-events-none -z-10" />

          {/* Badge / Tagline */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs sm:text-sm font-bold tracking-widest uppercase mb-6 shadow-soft">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CASES</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight sm:leading-tight mb-6">
            Resultados construídos a partir de{" "}
            <span className="text-gradient-primary">desafios reais.</span>
          </h1>

          {/* Description Copy */}
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-normal">
            Explore projetos de soluções digitais, engenharia e automação e entenda o problema, o processo e a transformação entregue em cada caso.
          </p>
        </section>

        {/* 16.2 SISTEMA DE FILTROS */}
        <section className="bg-card/70 border border-border/80 backdrop-blur-xl rounded-2xl p-6 sm:p-8 mb-12 shadow-card transition-all duration-300">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 pb-6 border-b border-border/60">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                <Filter className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white tracking-wide">Filtrar Projetos</h2>
                <p className="text-xs text-muted-foreground">Encontre cases específicos por área de atuação e desafio</p>
              </div>
            </div>

            {/* Quick Search */}
            <div className="relative min-w-[260px] sm:min-w-[320px]">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar por cliente, serviço ou palavra..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-background/80 border border-border/80 rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Filter Selectors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Filter by Serviço */}
            <div>
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Serviço
              </label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value as ServiceCategory | "Todos")}
                className="w-full px-3.5 py-2.5 bg-background/90 border border-border rounded-xl text-sm text-foreground focus:outline-none focus:border-primary transition-all cursor-pointer font-medium"
              >
                {SERVICE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt} className="bg-card text-foreground">
                    {opt === "Todos" ? "Todos os Serviços" : opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Filter by Segmento */}
            <div>
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Segmento
              </label>
              <select
                value={selectedSegment}
                onChange={(e) => setSelectedSegment(e.target.value as SegmentCategory | "Todos")}
                className="w-full px-3.5 py-2.5 bg-background/90 border border-border rounded-xl text-sm text-foreground focus:outline-none focus:border-primary transition-all cursor-pointer font-medium"
              >
                {SEGMENT_OPTIONS.map((opt) => (
                  <option key={opt} value={opt} className="bg-card text-foreground">
                    {opt === "Todos" ? "Todos os Segmentos" : opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Filter by Tipo de Desafio */}
            <div>
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Tipo de Desafio
              </label>
              <select
                value={selectedChallenge}
                onChange={(e) => setSelectedChallenge(e.target.value as ChallengeTypeCategory | "Todos")}
                className="w-full px-3.5 py-2.5 bg-background/90 border border-border rounded-xl text-sm text-foreground focus:outline-none focus:border-primary transition-all cursor-pointer font-medium"
              >
                {CHALLENGE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt} className="bg-card text-foreground">
                    {opt === "Todos" ? "Todos os Desafios" : opt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Filter Pills for Quick Toggle Services */}
          <div className="mt-6 pt-6 border-t border-border/40 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-muted-foreground font-medium mr-1">Serviço rápido:</span>
              {SERVICE_OPTIONS.map((svc) => (
                <button
                  key={svc}
                  onClick={() => setSelectedService(svc)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedService === svc
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-background/60 border border-border/60 text-muted-foreground hover:text-white hover:border-border"
                  }`}
                >
                  {svc === "Todos" ? "Todos" : svc}
                </button>
              ))}
            </div>

            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline font-semibold"
              >
                <X className="w-3.5 h-3.5" /> Limpar Filtros
              </button>
            )}
          </div>
        </section>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-8 px-2">
          <p className="text-sm font-medium text-muted-foreground">
            Exibindo <span className="text-white font-bold">{filteredCases.length}</span>{" "}
            {filteredCases.length === 1 ? "case de sucesso" : "cases de sucesso"}
          </p>
        </div>

        {/* 16.4 GRADE DE CARDS REESCRITA */}
        {filteredCases.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((caseItem) => (
              <div
                key={caseItem.id}
                className="group relative flex flex-col justify-between bg-card/80 border border-border/80 hover:border-primary/50 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:shadow-glow hover:-translate-y-1 overflow-hidden"
              >
                {/* Decorative Top Accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary opacity-80 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Case Logo / Image Banner if available */}
                  {caseItem.image && (
                    <div className="w-full h-36 bg-white/95 rounded-xl mb-4 p-4 flex items-center justify-center overflow-hidden border border-border/40 shadow-inner group-hover:scale-[1.02] transition-transform duration-300">
                      <img
                        src={caseItem.image}
                        alt={`Logo ${caseItem.client}`}
                        className="max-h-full max-w-full object-contain filter drop-shadow-sm"
                      />
                    </div>
                  )}

                  {/* Card Header: Tags */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-primary/10 text-primary border border-primary/20 text-xs font-bold uppercase tracking-wider">
                      {caseItem.service}
                    </span>
                    <span className="text-xs font-medium text-muted-foreground/80 px-2 py-0.5 rounded bg-background/50 border border-border/40">
                      {caseItem.segment}
                    </span>
                  </div>

                  {/* Standardized Card Title (16.4): CLIENTE | SERVIÇO */}
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase mb-5 group-hover:text-primary transition-colors flex items-center gap-2">
                    {caseItem.client} <span className="text-primary/70 font-bold">|</span> {caseItem.service}
                  </h3>

                  {/* Standardized Card Content Blocks */}
                  <div className="space-y-4 mb-8 text-sm">
                    {/* Desafio */}
                    <div className="p-3.5 rounded-xl bg-background/60 border border-border/50">
                      <span className="block text-xs font-bold text-white uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <HelpCircle className="w-3.5 h-3.5 text-amber-400" /> Desafio:
                      </span>
                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                        {caseItem.cardData.desafio}
                      </p>
                    </div>

                    {/* Solução */}
                    <div className="p-3.5 rounded-xl bg-background/60 border border-border/50">
                      <span className="block text-xs font-bold text-white uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-primary" /> Solução:
                      </span>
                      <p
                        className={`text-xs sm:text-sm leading-relaxed font-mono ${
                          caseItem.cardData.solucao.startsWith("[")
                            ? "text-primary/90 font-medium"
                            : "text-muted-foreground font-sans"
                        }`}
                      >
                        {caseItem.cardData.solucao}
                      </p>
                    </div>

                    {/* Resultado */}
                    <div className="p-3.5 rounded-xl bg-background/60 border border-border/50">
                      <span className="block text-xs font-bold text-white uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Resultado:
                      </span>
                      <p
                        className={`text-xs sm:text-sm leading-relaxed font-mono ${
                          caseItem.cardData.resultado.startsWith("[")
                            ? "text-emerald-400/90 font-medium"
                            : "text-muted-foreground font-sans"
                        }`}
                      >
                        {caseItem.cardData.resultado}
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA Button (16.4): Ver case completo */}
                <button
                  onClick={() => setActiveCase(caseItem)}
                  className="w-full py-3 px-5 rounded-xl bg-primary/10 hover:bg-primary border border-primary/30 hover:border-primary text-primary hover:text-primary-foreground font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-soft hover:shadow-glow group/btn"
                >
                  <span>Ver case completo</span>
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-6 bg-card/40 rounded-2xl border border-border/60">
            <div className="w-12 h-12 rounded-full bg-primary/10 text-primary mx-auto flex items-center justify-center mb-4">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Nenhum case encontrado</h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto mb-6">
              Não encontramos nenhum projeto com a combinação de filtros selecionada. Tente ajustar os parâmetros.
            </p>
            <button
              onClick={clearFilters}
              className="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              Resetar Filtros
            </button>
          </div>
        )}

        {/* 16.3 TEMPLATE OBRIGATÓRIO DE CASE - MODAL DE DETALHES COM 8 BLOCOS */}
        <Dialog open={!!activeCase} onOpenChange={(open) => !open && setActiveCase(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0b101d] border-border/80 text-foreground p-6 sm:p-10 rounded-2xl shadow-2xl">
            {activeCase && (
              <div className="space-y-8">
                {/* Modal Header */}
                <DialogHeader className="border-b border-border/60 pb-6">
                  {activeCase.image && (
                    <div className="w-full h-32 bg-white/95 rounded-xl mb-4 p-4 flex items-center justify-center border border-border/40 shadow-sm">
                      <img
                        src={activeCase.image}
                        alt={`Logo ${activeCase.client}`}
                        className="max-h-full max-w-full object-contain filter drop-shadow-sm"
                      />
                    </div>
                  )}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-md bg-primary/10 text-primary border border-primary/20 text-xs font-bold uppercase tracking-wider">
                      {activeCase.service}
                    </span>
                    <span className="px-3 py-1 rounded-md bg-background border border-border/60 text-xs font-semibold text-muted-foreground">
                      {activeCase.segment}
                    </span>
                    <span className="px-3 py-1 rounded-md bg-background border border-border/60 text-xs font-semibold text-muted-foreground">
                      {activeCase.challengeType}
                    </span>
                  </div>

                  <DialogTitle className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight flex items-center gap-3">
                    {activeCase.client} <span className="text-primary">|</span> {activeCase.service}
                  </DialogTitle>
                  <DialogDescription className="text-sm text-muted-foreground mt-2">
                    Template Obrigatório do Case — Estrutura oficial de auditoria da Conselt (8 Blocos)
                  </DialogDescription>
                </DialogHeader>

                {/* THE 8 OBLIGATORY BLOCKS (16.3) */}
                <div className="space-y-6">
                  {/* BLOCO 1: CONTEXTO */}
                  <div className="p-5 rounded-2xl bg-card/60 border border-border/80">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="px-2.5 py-1 rounded bg-primary/20 text-primary text-xs font-black uppercase">
                        Bloco 1
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white">
                          {activeCase.details.contexto.bloco}
                        </h4>
                        <p className="text-xs text-primary font-medium">
                          {activeCase.details.contexto.pergunta}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                      {activeCase.details.contexto.conteudo}
                    </p>
                    {activeCase.details.contexto.detalhes && (
                      <ul className="mt-3 space-y-1.5 pl-4 border-l-2 border-primary/40">
                        {activeCase.details.contexto.detalhes.map((item, idx) => (
                          <li key={idx} className="text-xs text-muted-foreground flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" /> {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* BLOCO 2: DESAFIO */}
                  <div className="p-5 rounded-2xl bg-card/60 border border-border/80">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-400 text-xs font-black uppercase">
                        Bloco 2
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white">
                          {activeCase.details.desafio.bloco}
                        </h4>
                        <p className="text-xs text-amber-400 font-medium">
                          {activeCase.details.desafio.pergunta}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                      {activeCase.details.desafio.conteudo}
                    </p>
                    {activeCase.details.desafio.detalhes && (
                      <ul className="mt-3 space-y-1.5 pl-4 border-l-2 border-amber-500/40">
                        {activeCase.details.desafio.detalhes.map((item, idx) => (
                          <li key={idx} className="text-xs text-muted-foreground flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" /> {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* BLOCO 3: OBJETIVO */}
                  <div className="p-5 rounded-2xl bg-card/60 border border-border/80">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="px-2.5 py-1 rounded bg-sky-500/20 text-sky-400 text-xs font-black uppercase">
                        Bloco 3
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white">
                          {activeCase.details.objetivo.bloco}
                        </h4>
                        <p className="text-xs text-sky-400 font-medium">
                          {activeCase.details.objetivo.pergunta}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                      {activeCase.details.objetivo.conteudo}
                    </p>
                    {activeCase.details.objetivo.detalhes && (
                      <ul className="mt-3 space-y-1.5 pl-4 border-l-2 border-sky-500/40">
                        {activeCase.details.objetivo.detalhes.map((item, idx) => (
                          <li key={idx} className="text-xs text-muted-foreground flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" /> {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* BLOCO 4: DIAGNÓSTICO */}
                  <div className="p-5 rounded-2xl bg-card/60 border border-border/80">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="px-2.5 py-1 rounded bg-indigo-500/20 text-indigo-400 text-xs font-black uppercase">
                        Bloco 4
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white">
                          {activeCase.details.diagnostico.bloco}
                        </h4>
                        <p className="text-xs text-indigo-400 font-medium">
                          {activeCase.details.diagnostico.pergunta}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                      {activeCase.details.diagnostico.conteudo}
                    </p>
                    {activeCase.details.diagnostico.detalhes && (
                      <ul className="mt-3 space-y-1.5 pl-4 border-l-2 border-indigo-500/40">
                        {activeCase.details.diagnostico.detalhes.map((item, idx) => (
                          <li key={idx} className="text-xs text-muted-foreground flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" /> {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* BLOCO 5: SOLUÇÃO */}
                  <div className="p-5 rounded-2xl bg-card/60 border border-border/80">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="px-2.5 py-1 rounded bg-primary/20 text-primary text-xs font-black uppercase">
                        Bloco 5
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white">
                          {activeCase.details.solucao.bloco}
                        </h4>
                        <p className="text-xs text-primary font-medium">
                          {activeCase.details.solucao.pergunta}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                      {activeCase.details.solucao.conteudo}
                    </p>
                    {activeCase.details.solucao.detalhes && (
                      <ul className="mt-3 space-y-1.5 pl-4 border-l-2 border-primary/40">
                        {activeCase.details.solucao.detalhes.map((item, idx) => (
                          <li key={idx} className="text-xs text-muted-foreground flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" /> {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* BLOCO 6: PROCESSO */}
                  <div className="p-5 rounded-2xl bg-card/60 border border-border/80">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="px-2.5 py-1 rounded bg-purple-500/20 text-purple-400 text-xs font-black uppercase">
                        Bloco 6
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white">
                          {activeCase.details.processo.bloco}
                        </h4>
                        <p className="text-xs text-purple-400 font-medium">
                          {activeCase.details.processo.pergunta}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                      {activeCase.details.processo.conteudo}
                    </p>
                    {activeCase.details.processo.detalhes && (
                      <ul className="mt-3 space-y-1.5 pl-4 border-l-2 border-purple-500/40">
                        {activeCase.details.processo.detalhes.map((item, idx) => (
                          <li key={idx} className="text-xs text-muted-foreground flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" /> {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* BLOCO 7: RESULTADO */}
                  <div className="p-5 rounded-2xl bg-card/60 border border-border/80">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 text-xs font-black uppercase">
                        Bloco 7
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white">
                          {activeCase.details.resultado.bloco}
                        </h4>
                        <p className="text-xs text-emerald-400 font-medium">
                          {activeCase.details.resultado.pergunta}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                      {activeCase.details.resultado.conteudo}
                    </p>
                    {activeCase.details.resultado.detalhes && (
                      <ul className="mt-3 space-y-1.5 pl-4 border-l-2 border-emerald-500/40">
                        {activeCase.details.resultado.detalhes.map((item, idx) => (
                          <li key={idx} className="text-xs text-muted-foreground flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* BLOCO 8: PRÓXIMA AÇÃO (CTA CONTEXTUAL POR SERVIÇO) */}
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/20 via-card to-primary/10 border-2 border-primary/50 text-center shadow-glow">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary text-primary-foreground text-xs font-black uppercase mb-3">
                      Bloco 8 — {activeCase.details.proximaAcao.bloco}
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      {activeCase.details.proximaAcao.pergunta}
                    </h4>
                    <p className="text-sm text-muted-foreground max-w-xl mx-auto mb-6">
                      {activeCase.details.proximaAcao.conteudo}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href={activeCase.details.proximaAcao.ctaLink}
                        className="w-full sm:w-auto px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-glow"
                      >
                        <span>{activeCase.details.proximaAcao.ctaText}</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      <a
                        href={`https://wa.me/5531999999999?text=${encodeURIComponent(
                          activeCase.details.proximaAcao.whatsappMessage
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-soft"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Falar no WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </main>

      <Footer />
    </div>
  );
}
