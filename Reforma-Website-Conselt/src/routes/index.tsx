import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, Globe, Smartphone, ShoppingBag, Star, Handshake, Lightbulb, Building, GraduationCap, ShieldCheck, Sliders, Eye, Layers, ChevronDown } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import heroDiamond from "@/assets/conselt-diamond-icon.png";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Conselt — Transforme o seu sonho em realidade" },
      {
        name: "description",
        content:
          "Estúdio digital especializado em websites, e-commerce e aplicativos sob medida. Design premium, tecnologia de ponta.",
      },
      { property: "og:title", content: "Conselt — Estúdio Digital Premium" },
      {
        property: "og:description",
        content: "Websites, e-commerce e apps com design minimalista e tecnologia de ponta.",
      },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: Globe,
    title: "Website",
    desc: "Presença digital sob medida, rápida e otimizada para conversão.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    desc: "Lojas online completas, integradas a meios de pagamento e logística.",
  },
  {
    icon: Smartphone,
    title: "Aplicativo",
    desc: "Apps nativos e híbridos com experiência de uso impecável.",
  },
];

const categories = ["Todos", "Tecnologia", "Negócios", "UX"];

const posts = [
  {
    img: blog1,
    category: "Tecnologia",
    date: "22 Jul 2026",
    title: "O futuro dos websites em 2026",
    excerpt: "Como interfaces mínimas e IA generativa estão redesenhando a web.",
  },
  {
    img: blog2,
    category: "Negócios",
    date: "14 Jul 2026",
    title: "E-commerce: além do carrinho",
    excerpt: "Estratégias de conversão que priorizam experiência e velocidade.",
  },
  {
    img: blog3,
    category: "UX",
    date: "02 Jul 2026",
    title: "Design de apps que encantam",
    excerpt: "Princípios de usabilidade para produtos móveis premium.",
  },
];

const partnerships = [
  {
    name: "Constru EJ",
    image: "/parceiros/parceiros1.png",
    square: false,
  },
  {
    name: "La Biblioteca",
    image: "/parceiros/parceiros2.png",
    square: false,
  },
  {
    name: "ARCHÉJR",
    image: "/parceiros/parceiros4.png",
    square: false,
  },
  {
    name: "LOL",
    image: "/parceiros/parceiros3.png",
    square: false,
  },
  {
    name: "Atuar Cursos",
    image: "/parceiros/parceiros5.png",
    square: true,
  },
];

const stats = [
  {
    icon: Handshake,
    label: "Anos de MERCADO",
    value: "+25",
  },
  {
    icon: Lightbulb,
    label: "Clientes SATISFEITOS",
    value: "+150",
  },
  {
    icon: Building,
    label: "Projetos ENTREGUES",
    value: "+115",
  },
];

const carouselPartnerships = partnerships;

function Partnerships() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const updateIndex = () => {
      setActiveIndex(carouselApi.selectedScrollSnap());
    };

    updateIndex();
    carouselApi.on("select", updateIndex);
    carouselApi.on("reInit", updateIndex);

    return () => {
      carouselApi.off("select", updateIndex);
      carouselApi.off("reInit", updateIndex);
    };
  }, [carouselApi]);

  useEffect(() => {
    if (!carouselApi || isPaused) {
      return;
    }

    const timer = window.setInterval(() => {
      carouselApi.scrollNext();
    }, 3500);

    return () => window.clearInterval(timer);
  }, [carouselApi, isPaused]);

  return (
    <section id="parcerias" className="py-24 lg:py-36 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mt-0 pt-0 overflow-hidden rounded-[2rem] bg-transparent pb-16">
          <div className="mx-auto max-w-7xl px-6 py-4 lg:px-10 lg:py-6">
            <div className="grid gap-4 md:grid-cols-3">
              {stats.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex flex-col items-center gap-4 rounded-[1.5rem] bg-slate-900/95 px-6 py-8 text-center text-white shadow-xl shadow-slate-950/30"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sky-500/10 text-sky-300">
                      <Icon className="h-7 w-7" />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-200">
                      {item.label}
                    </p>
                    <div className="text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">
                      {item.value}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-primary">
            Parceiros
          </p>
          <h2 className="mt-4 font-display font-black uppercase text-4xl sm:text-5xl lg:text-6xl leading-tight text-foreground">
            Nossos <span className="text-gradient-primary">Parceiros</span>
          </h2>
        </div>

        <div
          className="relative mt-12 overflow-visible w-full max-w-full px-4 mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <Carousel
            className="relative"
            opts={{
              containScroll: "trimSnaps",
              align: "start",
              dragFree: false,
              loop: true,
              slidesToScroll: 1,
              skipSnaps: false,
            }}
            setApi={setCarouselApi}
          >
            <CarouselPrevious
              aria-label="Parceiro anterior"
              className="absolute left-0 top-1/2 z-20 -translate-y-1/2 -translate-x-[5rem] rounded-full bg-gradient-primary text-primary-foreground p-3 shadow-soft hover:shadow-glow"
            />
            <CarouselNext
              aria-label="Próximo parceiro"
              className="absolute right-0 top-1/2 z-20 -translate-y-1/2 translate-x-[5rem] rounded-full bg-gradient-primary text-primary-foreground p-3 shadow-soft hover:shadow-glow"
            />
            <CarouselContent className="flex gap-2 pb-6 w-full">
              {carouselPartnerships.map((item, index) => {
                const Icon = (item as { icon?: typeof Star }).icon ?? Star;

                return (
                  <CarouselItem
                    key={`${item.name}-${index}`}
                    className="min-w-0 flex-none w-full sm:w-[calc(50%-0.75rem)] md:w-[calc(33.333%-1rem)] max-w-full"
                  >
                    <div className="aspect-square w-full max-w-full overflow-hidden rounded-[1.75rem] border border-border/70 bg-[#1e2632] p-6 shadow-soft flex flex-col justify-between items-center relative">
                      <div className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/10 text-sky-300">
                        <Icon className="h-4 w-4" />
                      </div>

                      <div className="flex flex-1 w-full items-center justify-center pt-6 pb-3">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            className={
                              item.square
                                ? "h-36 w-36 rounded-xl object-contain"
                                : "h-36 w-auto max-w-[84%] object-contain"
                            }
                          />
                        ) : null}
                      </div>

                      <div className="mt-2 w-full text-center">
                        <p className="text-sm font-bold uppercase tracking-[0.12em] text-white/90">
                          {item.name}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>

          <div className="mt-8 flex justify-center gap-3">
            {partnerships.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === index ? "bg-white shadow-sm shadow-white/20" : "bg-white/30"
                }`}
                aria-label={`Parceiro ${index + 1}`}
                aria-current={activeIndex === index ? "true" : "false"}
                onClick={() => carouselApi?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Hero() {
  return (
    <>
      <section id="home" className="relative pt-32 pb-12 lg:pt-40 lg:pb-16 overflow-hidden bg-gradient-hero">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-8 items-center">
          <div className="max-w-2xl">
            <h1 className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[1.15] text-brand-blue tracking-tight">
              Engenharia e tecnologia para transformar desafios em resultados.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-brand-blue/80 max-w-xl leading-relaxed font-opensans">
              Desenvolvemos websites, sistemas, automações e projetos elétricos sob medida para gerar mais eficiência, segurança, controle e oportunidades.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/contato"
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3.5 sm:py-4 rounded-full font-opensans text-sm sm:text-base font-bold bg-[#2270A1] text-[#FFFFFF] shadow-lg hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Solicitar um diagnóstico
              </Link>

              <Link
                to="/cases"
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3.5 sm:py-4 rounded-full font-opensans text-sm sm:text-base font-bold bg-[#FFFFFF] text-[#093565] border-2 border-[#093565] shadow-md hover:bg-[#093565]/5 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Conhecer nossos cases
              </Link>
            </div>
          </div>

          {/* Reimagined diamond composition */}
          <div className="relative flex items-center justify-center min-h-[400px] lg:min-h-[560px]">
            <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
            <div className="relative w-full max-w-[520px] aspect-square">
              <img
                src={heroDiamond}
                alt="Diamante Conselt — símbolo de precisão e energia"
                width={490}
                height={490}
                className="w-full h-full object-contain animate-[float_6s_ease-in-out_infinite]"
                style={{
                  filter: "drop-shadow(0 30px 60px oklch(0.55 0.22 255 / 0.25))",
                }}
              />
              {/* Floating accents */}
              <div className="absolute top-6 -right-2 w-16 h-16 rounded-2xl bg-white/80 backdrop-blur border border-brand-blue/10 shadow-card grid place-items-center animate-[float_5s_ease-in-out_infinite_reverse]">
                <Logo className="w-8 h-8" />
              </div>
              <div className="absolute bottom-10 -left-4 px-4 py-3 rounded-2xl bg-white/90 backdrop-blur border border-brand-blue/10 shadow-card">
                <div className="text-[10px] uppercase tracking-widest text-brand-blue/60">Projetos</div>
                <div className="font-display font-extrabold text-xl text-brand-blue">+120</div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-14px); }
          }
        `}</style>
      </section>

    {/* Faixa informativa imediatamente abaixo da primeira seção */}
      <div className="w-full bg-[#162638] py-4 lg:py-5 px-6 shadow-sm border-y border-[#162638]/40 relative z-20">
        <div className="mx-auto max-w-7xl text-center font-opensans font-bold text-xs sm:text-sm lg:text-base text-[#B1D3E1] tracking-wide leading-relaxed">
          Vinculada à FEELT/UFU | Projetos sob supervisão | Soluções personalizadas | Atendimento em Uberlândia e região
        </div>
      </div>
    </>
  );
}

const challenges = [
  {
    icon: Globe,
    title: "Presença digital",
    text: "Seu negócio recebe visitas, mas não transforma atenção em confiança e pedidos de orçamento?",
    cta: "Melhorar minha presença digital",
    href: "/solucoes-digitais" as const,
  },
  {
    icon: Smartphone,
    title: "Operação manual",
    text: "Sua equipe ainda depende de planilhas, retrabalho e processos difíceis de acompanhar?",
    cta: "Automatizar meus processos",
    href: "/solucoes-digitais" as const,
  },
  {
    icon: Building,
    title: "Obra e instalações",
    text: "Seu projeto corre risco de incompatibilidade, desperdício ou improviso na execução?",
    cta: "Planejar meu projeto",
    href: "/engenharia-automacao" as const,
  },
  {
    icon: Lightbulb,
    title: "Ambiente e automação",
    text: "Seu espaço poderia oferecer mais conforto, eficiência, segurança e controle?",
    cta: "Conhecer automação e iluminação",
    href: "/engenharia-automacao" as const,
  },
];

function ChallengesSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] relative z-10 text-[#073A7D]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-4xl mx-auto mb-14 lg:mb-18">
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight text-[#073A7D] text-center">
            Qual desafio está impedindo seu próximo resultado?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {challenges.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative p-6 sm:p-8 rounded-3xl bg-white border border-[#073A7D]/15 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col sm:flex-row items-start gap-6 overflow-hidden"
              >
                {/* Ícone posicionado no lado esquerdo em layout horizontal */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#073A7D]/10 grid place-items-center text-[#073A7D] group-hover:bg-[#073A7D] group-hover:text-white shrink-0 transition-colors duration-300">
                  <Icon className="w-7 h-7" strokeWidth={1.75} />
                </div>

                {/* Conteúdo à direita do ícone */}
                <div className="flex-1 flex flex-col justify-between h-full w-full">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="font-montserrat font-bold text-lg sm:text-xl uppercase tracking-tight text-[#073A7D]">
                        {item.title}
                      </h3>
                      <span className="text-xs font-mono text-[#073A7D]/40 font-bold shrink-0">
                        0{index + 1}
                      </span>
                    </div>

                    <p className="text-sm sm:text-base text-[#073A7D]/80 leading-relaxed font-opensans">
                      {item.text}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#073A7D]/15">
                    <Link
                      to={item.href}
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#2270A1] group/cta hover:text-[#073A7D] transition-colors font-opensans"
                    >
                      <span>{item.cta}</span>
                      <ArrowRight className="w-4 h-4 text-[#2270A1] group-hover/cta:text-[#073A7D] shrink-0 transition-transform duration-300 group-hover/cta:translate-x-1.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServicesIntro() {
  return (
    <section className="bg-[#B1D3E1] py-16 sm:py-20 lg:py-24 px-6 lg:px-10 text-center relative z-10">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="font-opensans font-bold text-[28px] sm:text-[34px] lg:text-[40px] leading-tight text-[#093565]">
          Soluções que conectam engenharia, tecnologia e resultado.
        </h2>
        <p className="mt-4 sm:mt-6 font-opensans text-base sm:text-lg leading-relaxed text-[#162638] max-w-3xl">
          Escolha a frente que mais se conecta ao seu desafio. Cada solução é estruturada a partir de diagnóstico, escopo e validação.
        </p>
      </div>
    </section>
  );
}

const digitalSolutionsCards = [
  {
    title: "WEBSITES E LANDING PAGES",
    description:
      "Transforme visitas em confiança e pedidos de orçamento com uma estrutura clara, responsiva, otimizada para busca e preparada para medir conversões.",
  },
  {
    title: "E-COMMERCE",
    description:
      "Crie uma operação de vendas própria, organizada e mensurável, com experiência de compra simples, gestão de produtos e integração aos canais do negócio.",
  },
  {
    title: "APLICATIVOS",
    description:
      "Leve processos, serviços e experiências para o celular com um aplicativo pensado para o usuário e para a operação da empresa.",
  },
  {
    title: "SOFTWARE SOB MEDIDA",
    description:
      "Substitua controles fragmentados por um sistema que centraliza dados, reduz tarefas manuais e dá mais visibilidade à operação.",
  },
];

const engineeringAutomationCards = [
  {
    title: "PROJETOS ELÉTRICOS",
    description:
      "Planeje instalações seguras, dimensionadas e compatibilizadas para reduzir improvisos, desperdícios e retrabalho na execução.",
  },
  {
    title: "PROJETOS LUMINOTÉCNICOS",
    description:
      "Use a luz para melhorar conforto, funcionalidade, eficiência e percepção do ambiente, com simulações e especificações adequadas ao uso.",
  },
  {
    title: "AUTOMAÇÃO RESIDENCIAL",
    description:
      "Integre iluminação, climatização, segurança e rotinas para controlar a casa com mais conforto, eficiência e tranquilidade.",
  },
  {
    title: "AUTOMAÇÃO INDUSTRIAL",
    description:
      "Automatize controles e rotinas para ganhar repetibilidade, visibilidade e eficiência operacional.",
  },
];

function ServiceCardsSection() {
  return (
    <section className="bg-[#FFFFFF] py-16 sm:py-20 lg:py-24 px-6 lg:px-10 relative z-10">
      <div className="max-w-7xl mx-auto space-y-16 lg:space-y-20">
        {/* Grupo 1: Soluções Digitais */}
        <div>
          <div className="mb-8 lg:mb-10 pb-4 border-b border-[#093565]/15 flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#093565]" />
            <h2 className="font-opensans font-bold text-xl sm:text-2xl lg:text-3xl text-[#093565] uppercase tracking-wide">
              Soluções Digitais
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {digitalSolutionsCards.map((card) => (
              <div
                key={card.title}
                className="bg-[#FFFFFF] border border-[#093565]/15 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-opensans font-bold text-[20px] lg:text-[22px] leading-snug text-[#093565]">
                    {card.title}
                  </h3>
                  <p className="mt-3 sm:mt-4 font-opensans font-normal text-base lg:text-[17px] leading-relaxed text-[#162638]">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Grupo 2: Engenharia e Automação */}
        <div>
          <div className="mb-8 lg:mb-10 pb-4 border-b border-[#093565]/15 flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#093565]" />
            <h2 className="font-opensans font-bold text-xl sm:text-2xl lg:text-3xl text-[#093565] uppercase tracking-wide">
              Engenharia e Automação
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {engineeringAutomationCards.map((card) => (
              <div
                key={card.title}
                className="bg-[#FFFFFF] border border-[#093565]/15 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-opensans font-bold text-[20px] lg:text-[22px] leading-snug text-[#093565]">
                    {card.title}
                  </h3>
                  <p className="mt-3 sm:mt-4 font-opensans font-normal text-base lg:text-[17px] leading-relaxed text-[#162638]">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const differentials = [
  {
    icon: GraduationCap,
    title: "Conhecimento aplicado",
    description:
      "Conectamos formação acadêmica, pesquisa e prática para transformar conhecimento em solução.",
  },
  {
    icon: ShieldCheck,
    title: "Supervisão e responsabilidade",
    description:
      "Os projetos são desenvolvidos com acompanhamento e validação compatíveis com sua natureza técnica.",
  },
  {
    icon: Sliders,
    title: "Solução sob medida",
    description:
      "O escopo parte do seu problema, e não de um pacote genérico.",
  },
  {
    icon: Eye,
    title: "Processo transparente",
    description:
      "Você acompanha etapas, entregas, responsáveis e critérios de validação.",
  },
  {
    icon: Layers,
    title: "Visão multidisciplinar",
    description:
      "Integramos engenharia, tecnologia e comunicação quando o desafio exige mais de uma competência.",
  },
];

function DifferentialsSection() {
  return (
    <section className="bg-[#051D3E] py-16 sm:py-20 lg:py-28 px-6 lg:px-10 relative z-10 overflow-hidden">
      {/* Elementos de Marca: Linhas técnicas / Grid de engenharia em marca d'água */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(rgba(66, 165, 211, 0.4) 1px, transparent 1px),
            linear-gradient(to right, rgba(66, 165, 211, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(66, 165, 211, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: "24px 24px, 48px 48px, 48px 48px",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Título Principal H2 e Acento Visual Ciano (#42A5D3) */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#42A5D3]/10 border border-[#42A5D3]/30 text-[#42A5D3] text-xs font-semibold tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#42A5D3]" />
            Diferenciais CONSELT
          </div>

          <h2 className="font-opensans font-bold text-[28px] sm:text-[34px] lg:text-[40px] leading-tight text-[#FFFFFF]">
            Por que desenvolver seu projeto com a CONSELT?
          </h2>

          <div className="w-16 h-1 bg-[#42A5D3] rounded-full mt-5 mx-auto" />
        </div>

        {/* 5 Blocos de Diferenciais em Grid Responsivo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`bg-[#051D3E]/80 backdrop-blur border border-[#42A5D3]/20 hover:border-[#42A5D3]/60 rounded-2xl p-6 sm:p-8 shadow-xl shadow-black/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group ${
                  index === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  {/* Ícone e acento visual ciano */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#42A5D3]/10 border border-[#42A5D3]/30 grid place-items-center text-[#42A5D3] group-hover:bg-[#42A5D3] group-hover:text-[#051D3E] transition-colors duration-300">
                      <Icon className="w-6 h-6" strokeWidth={1.75} />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#42A5D3]/60">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Título H3 com acento de traço ciano */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-[#42A5D3] shrink-0" />
                    <h3 className="font-opensans font-bold text-[20px] lg:text-[22px] leading-snug text-[#FFFFFF]">
                      {item.title}
                    </h3>
                  </div>

                  {/* Descrição em tag p em branco */}
                  <p className="font-opensans font-normal text-base lg:text-[17px] leading-relaxed text-[#FFFFFF]">
                    {item.description}
                  </p>
                </div>

                {/* Traço separador inferior */}
                <div className="mt-6 pt-4 border-t border-[#42A5D3]/15 flex items-center justify-between">
                  <div className="w-8 h-0.5 bg-[#42A5D3] group-hover:w-14 transition-all duration-300" />
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#42A5D3]/80">
                    CONSELT
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const featuredCases = [
  {
    image: blog1,
    category: "Website Institucional",
    title: "LAPEG | Website institucional",
    challenge: "Desafio: organizar um volume técnico complexo sem perder clareza.",
    solution: "Solução: arquitetura de informação, páginas de pesquisa e navegação orientada aos públicos.",
    result: "Resultado: Presença digital reestruturada com navegação clara e rápida para os usuários.",
    cta: "Ver como o projeto foi desenvolvido.",
    link: "/cases" as const,
  },
  {
    image: blog2,
    category: "E-Commerce",
    title: "Constru EJ | Plataforma Digital",
    challenge: "Desafio: integrar canais de atendimento e otimizar solicitações de orçamento.",
    solution: "Solução: interface fluida com catálogo de serviços e integração direta para vendas.",
    result: "Resultado: Aumento significativo de orçamentos qualificados e melhoria de experiência.",
    cta: "Ver case completo.",
    link: "/cases" as const,
  },
  {
    image: blog3,
    category: "Software Sob Medida",
    title: "La Biblioteca | Sistema de Gestão",
    challenge: "Desafio: centralizar o acervo técnico e facilitar a gestão operacional interna.",
    solution: "Solução: aplicação web sob medida com controle de acessos e buscas otimizadas.",
    result: "Resultado: Processos operacionais 100% digitalizados com ganho de eficiência.",
    cta: "Ver como o projeto foi desenvolvido.",
    link: "/cases" as const,
  },
];

function FeaturedCasesSection() {
  return (
    <section className="bg-[#FFFFFF] py-16 sm:py-20 lg:py-28 px-6 lg:px-10 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho H2 da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#093565]/5 border border-[#093565]/15 text-[#093565] text-xs font-semibold tracking-widest uppercase mb-4 font-opensans">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2270A1]" />
            Cases em Destaque
          </div>

          <h2 className="font-opensans font-bold text-[28px] sm:text-[34px] lg:text-[40px] leading-tight text-[#093565]">
            Veja como desafios reais foram transformados em soluções claras, funcionais e mensuráveis.
          </h2>

          <div className="w-16 h-1 bg-[#2270A1] rounded-full mt-5 mx-auto" />
        </div>

        {/* Grid de Cards de Cases */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredCases.map((item) => (
            <div
              key={item.title}
              className="bg-[#F4F9FC] border border-[#093565]/15 rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Espaço de Imagem no topo reservado para Screenshots e Fotos reais */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-200 border-b border-[#093565]/10">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-opensans font-semibold uppercase tracking-wider bg-[#093565] text-white shadow-sm">
                  {item.category}
                </span>
              </div>

              {/* Conteúdo do Card */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-opensans font-bold text-[20px] lg:text-[22px] leading-snug text-[#093565] mb-4">
                    {item.title}
                  </h3>

                  <div className="space-y-2.5 font-opensans font-normal text-base lg:text-[17px] leading-relaxed text-[#162638]">
                    <p className="font-medium text-[#093565]/90">
                      {item.challenge}
                    </p>
                    <p className="text-[#162638]">
                      {item.solution}
                    </p>
                    <p className="font-semibold text-[#2270A1]">
                      {item.result}
                    </p>
                  </div>
                </div>

                {/* Botão/CTA do Card */}
                <div className="mt-8 pt-5 border-t border-[#093565]/10">
                  <Link
                    to={item.link}
                    className="inline-flex items-center justify-center w-full px-5 py-3.5 rounded-full font-opensans text-sm font-bold bg-[#2270A1] text-white shadow-sm hover:bg-[#093565] hover:scale-[1.02] active:scale-95 transition-all duration-300 gap-2 group/btn"
                  >
                    <span>{item.cta}</span>
                    <ArrowRight className="w-4 h-4 text-white group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const processSteps = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "Entendemos o contexto, o problema, o público e o resultado esperado.",
  },
  {
    number: "02",
    title: "Proposta e escopo",
    description:
      "Definimos entregas, responsabilidades, prazo e critérios de validação.",
  },
  {
    number: "03",
    title: "Desenvolvimento",
    description:
      "Executamos o projeto com acompanhamento e registros de evolução.",
  },
  {
    number: "04",
    title: "Validação",
    description:
      "Testamos, revisamos e ajustamos com base no escopo aprovado.",
  },
  {
    number: "05",
    title: "Entrega e orientação",
    description:
      "Entregamos a solução, documentação necessária e próximos passos.",
  },
];

function ProcessSection() {
  return (
    <section className="bg-[#FFFFFF] py-16 sm:py-20 lg:py-28 px-6 lg:px-10 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho H2 da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#184C77]/5 border border-[#184C77]/15 text-[#184C77] text-xs font-semibold tracking-widest uppercase mb-4 font-opensans">
            <span className="w-1.5 h-1.5 rounded-full bg-[#184C77]" />
            Metodologia de Engenharia
          </div>

          <h2 className="font-opensans font-bold text-[28px] sm:text-[34px] lg:text-[40px] leading-tight text-[#093565]">
            Do diagnóstico à entrega: um processo claro em cada etapa.
          </h2>

          <div className="w-16 h-1 bg-[#184C77] rounded-full mt-5 mx-auto" />
        </div>

        {/* Timeline Layout Responsivo */}
        {/* Desktop View: Fluxo Horizontal Conectado (5 Colunas) */}
        <div className="hidden lg:block relative">
          {/* Linha Contínua de Conexão no Desktop (#184C77 / #42A5D3) */}
          <div className="absolute top-[34px] left-[10%] right-[10%] h-[3px] bg-gradient-to-r from-[#184C77] via-[#42A5D3] to-[#184C77] z-0" />

          <div className="grid grid-cols-5 gap-6 relative z-10">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col items-center text-center group"
              >
                {/* Node da Timeline */}
                <div className="w-16 h-16 rounded-full bg-[#FFFFFF] border-4 border-[#184C77] text-[#093565] group-hover:border-[#42A5D3] group-hover:bg-[#093565] group-hover:text-white transition-all duration-300 grid place-items-center shadow-md font-opensans font-bold text-lg mb-6">
                  {step.number}
                </div>

                {/* Card da Etapa */}
                <div className="bg-[#F4F9FC] border border-[#093565]/10 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 w-full h-full flex flex-col justify-start">
                  <h3 className="font-opensans font-bold text-[20px] lg:text-[22px] leading-snug text-[#093565] mb-3">
                    {step.title}
                  </h3>
                  <p className="font-opensans font-normal text-base leading-relaxed text-[#162638]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile / Tablet View: Linha do Tempo Vertical Conectada */}
        <div className="block lg:hidden relative pl-6 sm:pl-8 ml-2 border-l-2 border-[#184C77]/40 space-y-10">
          {processSteps.map((step) => (
            <div key={step.number} className="relative group">
              {/* Node da Timeline à Esquerda */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-1 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FFFFFF] border-3 border-[#184C77] text-[#093565] font-opensans font-bold text-sm sm:text-base grid place-items-center shadow-md">
                {step.number}
              </div>

              {/* Card da Etapa */}
              <div className="bg-[#F4F9FC] border border-[#093565]/10 rounded-2xl p-6 shadow-sm">
                <h3 className="font-opensans font-bold text-[20px] leading-snug text-[#093565] mb-2">
                  {step.title}
                </h3>
                <p className="font-opensans font-normal text-base leading-relaxed text-[#162638]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const partnerLogos = [
  {
    name: "Constru EJ",
    image: "/parceiros/parceiros1.png",
    relation: "Parceiro institucional",
  },
  {
    name: "La Biblioteca",
    image: "/parceiros/parceiros2.png",
    relation: "Cliente de software",
  },
  {
    name: "ARCHÉJR",
    image: "/parceiros/parceiros4.png",
    relation: "Parceiro de engenharia",
  },
  {
    name: "LOL",
    image: "/parceiros/parceiros3.png",
    relation: "Cliente de plataforma",
  },
  {
    name: "Atuar Cursos",
    image: "/parceiros/parceiros5.png",
    relation: "Cliente de e-commerce",
  },
];

function PartnersSocialProofSection() {
  return (
    <section className="bg-[#B1D3E1] py-16 sm:py-20 lg:py-28 px-6 lg:px-10 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho H2 da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#093565]/10 border border-[#093565]/20 text-[#093565] text-xs font-semibold tracking-widest uppercase mb-4 font-opensans">
            <span className="w-1.5 h-1.5 rounded-full bg-[#093565]" />
            Prova Social & Parcerias
          </div>

          <h2 className="font-opensans font-bold text-[28px] sm:text-[34px] lg:text-[40px] leading-tight text-[#093565]">
            Organizações que já confiaram em nossas soluções e parcerias.
          </h2>

          <div className="w-16 h-1 bg-[#093565] rounded-full mt-5 mx-auto" />
        </div>

        {/* Bloco de Logos (Grid Horizontal Responsivo) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 items-center justify-center mb-16 lg:mb-20">
          {partnerLogos.map((partner) => (
            <div
              key={partner.name}
              className="bg-[#FFFFFF] border border-[#093565]/15 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-between text-center aspect-[4/3]"
            >
              <div className="flex-1 flex items-center justify-center w-full p-2">
                <img
                  src={partner.image}
                  alt={partner.name}
                  loading="lazy"
                  className="max-h-16 w-auto max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>

              <div className="mt-2 pt-2 border-t border-[#093565]/10 w-full">
                <p className="font-opensans font-bold text-xs text-[#093565] uppercase tracking-wide truncate">
                  {partner.name}
                </p>
                <p className="font-opensans font-normal text-[12px] text-[#162638]/80 mt-0.5 truncate">
                  {partner.relation}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bloco de Depoimento (Card Centralizado Branco) */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#FFFFFF] border border-[#093565]/15 rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden text-center">
            {/* Ícone de aspas decorativo */}
            <div className="absolute -top-4 -left-2 text-[120px] font-serif text-[#093565]/5 pointer-events-none select-none">
              “
            </div>

            <div className="relative z-10">
              <blockquote className="font-opensans italic text-lg sm:text-xl lg:text-[20px] leading-relaxed text-[#162638] max-w-3xl mx-auto">
                "A CONSELT organizou nossa estrutura técnica de dados, conduziu uma arquitetura de navegação intuitiva e entregou uma solução completa e dentro do prazo. O principal diferencial foi a transparência constante, a supervisão dedicada e o alinhamento em cada etapa."
              </blockquote>

              <div className="w-12 h-1 bg-[#2270A1] rounded-full my-6 mx-auto" />

              <p className="font-opensans font-bold text-base sm:text-lg text-[#093565]">
                Eng. Roberto Mendes <span className="font-normal text-[#162638]/80">| Diretor de Operações | LAPEG</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const faqData = [
  {
    question: "Como funciona o orçamento?",
    answer:
      "Após o diagnóstico inicial, estruturamos escopo, entregas, prazo e investimento de acordo com a complexidade do seu projeto.",
  },
  {
    question: "Os projetos são supervisionados?",
    answer:
      "A forma de acompanhamento depende da natureza do projeto. A CONSELT é vinculada à FEELT/UFU e atua sob supervisão de professores, conforme sua estrutura institucional.",
  },
  {
    question: "Vocês atendem quais cidades?",
    answer:
      "Atendemos Uberlândia, região e todo o Brasil. Soluções digitais permitem atendimento 100% remoto com acompanhamento próximo e constante.",
  },
  {
    question: "Qual é o prazo?",
    answer:
      "O prazo é definido após o diagnóstico e varia conforme escopo, integrações e ciclos de validação necessários para garantir a qualidade técnica.",
  },
  {
    question: "Existe suporte após a entrega?",
    answer:
      "O suporte e o período de acompanhamento são descritos na proposta de cada projeto para garantir total tranquilidade na operação.",
  },
];

function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#FFFFFF] py-16 sm:py-20 lg:py-28 px-6 lg:px-10 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho H2 da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#093565]/5 border border-[#093565]/15 text-[#093565] text-xs font-semibold tracking-widest uppercase mb-4 font-opensans">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2270A1]" />
            Dúvidas Frequentes
          </div>

          <h2 className="font-opensans font-bold text-[28px] sm:text-[34px] lg:text-[40px] leading-tight text-[#093565]">
            Perguntas Frequentes
          </h2>

          <div className="w-16 h-1 bg-[#2270A1] rounded-full mt-5 mx-auto" />
        </div>

        {/* Accordion Container com largura restrita max-w-[800px] */}
        <div className="max-w-[800px] mx-auto space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="bg-[#FFFFFF] border-b border-[#B1D3E1] transition-all duration-300 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full py-5 px-2 flex items-center justify-between text-left gap-4 group focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-opensans font-bold text-[18px] sm:text-[20px] text-[#093565] group-hover:text-[#2270A1] transition-colors leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full bg-[#B1D3E1]/20 border border-[#B1D3E1] grid place-items-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#2270A1] text-white border-[#2270A1]" : "text-[#2270A1]"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="pb-6 px-2 pr-10 font-opensans font-normal text-base text-[#162638] leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section className="bg-[#093565] py-16 sm:py-20 lg:py-24 px-6 lg:px-10 text-center relative z-10 overflow-hidden">
      {/* Elemento gráfico decorativo sutil no fundo */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#42A5D3] blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#2270A1] blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        {/* Título H2 em Branco (#FFFFFF) */}
        <h2 className="font-opensans font-bold text-[28px] sm:text-[34px] lg:text-[40px] leading-tight text-[#FFFFFF]">
          Seu desafio já está custando tempo, segurança ou oportunidades?
        </h2>

        {/* Texto de Apoio em Branco (#FFFFFF) */}
        <p className="mt-4 sm:mt-6 font-opensans font-normal text-base sm:text-lg leading-relaxed text-[#FFFFFF] opacity-95 max-w-2xl">
          Conte o que precisa resolver. Nossa equipe analisará o contexto e indicará o próximo passo.
        </p>

        {/* Botão CTA Principal em Ciano Elétrico (#42A5D3) */}
        <div className="mt-8 sm:mt-10">
          <Link
            to="/contato"
            className="inline-flex items-center justify-center px-8 sm:px-10 h-12 sm:h-14 rounded-2xl font-opensans font-bold text-base sm:text-lg bg-[#42A5D3] text-[#093565] shadow-lg hover:bg-[#3492be] hover:scale-105 active:scale-95 transition-all duration-300 gap-3 group"
          >
            <span>Solicitar avaliação inicial</span>
            <ArrowRight className="w-5 h-5 text-[#093565] group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="quem-somos" className="py-24 lg:py-36 bg-transparent">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl mb-16 lg:mb-20">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-primary">
            O que fazemos
          </p>
          <h2 className="mt-4 font-display font-black uppercase text-4xl sm:text-5xl lg:text-6xl leading-tight text-foreground">
            Nossos <span className="text-gradient-primary">Serviços</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Três frentes, uma obsessão: entregar produtos digitais que funcionam de verdade e que as
            pessoas amam usar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="group relative p-8 lg:p-10 rounded-3xl bg-card border border-border/70 shadow-card hover:-translate-y-2 hover:shadow-glow transition-all duration-500 overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: "var(--gradient-border)",
                  padding: "1px",
                  borderRadius: "inherit",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />
              <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-primary grid place-items-center shadow-soft group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <Icon className="w-6 h-6 text-primary-foreground" strokeWidth={1.75} />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground/60">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="mt-8 font-display font-bold text-2xl uppercase tracking-tight text-foreground">
                  {title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{desc}</p>

                <Link
                  to="/solucoes-digitais"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary group/link"
                >
                  Saber mais
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Blog() {
  const [active, setActive] = useState("Todos");
  return (
    <section id="blog" className="pt-16 lg:pt-24 pb-0 bg-transparent">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 mb-0">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-primary">
              Insights & ideias
            </p>
            <h2 className="mt-4 font-display font-black uppercase text-4xl sm:text-5xl lg:text-6xl leading-tight text-foreground">
              Nosso <span className="text-gradient-primary">Blog</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  active === c
                    ? "bg-gradient-primary text-primary-foreground shadow-soft"
                    : "bg-background border border-border text-foreground/70 hover:border-primary/40 hover:text-primary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((p) => (
            <article
              key={p.title}
              className="group relative bg-card rounded-3xl border border-border/70 overflow-hidden shadow-card hover:-translate-y-2 hover:shadow-glow transition-all duration-500"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-accent/40">
                <div className="absolute inset-6 rounded-[2rem] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    width={900}
                    height={900}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-background/90 backdrop-blur text-primary border border-primary/20">
                  {p.category}
                </span>
              </div>

              <div className="p-7">
                <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  {p.date}
                </div>
                <h3 className="mt-3 font-display font-bold text-xl text-foreground leading-snug group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>

                <Link
                  to="/blog"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground group/l"
                >
                  Ler mais
                  <ArrowRight className="w-4 h-4 text-primary transition-transform duration-300 group-hover/l:translate-x-1.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <ChallengesSection />
      <ServicesIntro />
      <ServiceCardsSection />
      <DifferentialsSection />
      <FeaturedCasesSection />
      <ProcessSection />
      <PartnersSocialProofSection />
      <FaqSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
}
