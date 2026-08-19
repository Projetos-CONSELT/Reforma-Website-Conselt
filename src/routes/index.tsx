import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, Globe, Smartphone, ShoppingBag, Star, Handshake, Lightbulb, Building } from "lucide-react";
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
      <div className="bg-gradient-to-b from-[#07090e] via-[#0b0f19] to-[#07090e]">
        <Services />
        <Blog />
        <Partnerships />
      </div>
      <Footer />
    </main>
  );
}
