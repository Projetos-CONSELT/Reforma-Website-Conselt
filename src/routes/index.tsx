import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Instagram, Linkedin, MessageCircle, Globe, ShoppingBag, Smartphone, ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import heroDiamond from "@/assets/hero-diamond.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vertex — Transforme o seu sonho em realidade" },
      {
        name: "description",
        content:
          "Estúdio digital especializado em websites, e-commerce e aplicativos sob medida. Design premium, tecnologia de ponta.",
      },
      { property: "og:title", content: "Vertex — Estúdio Digital Premium" },
      {
        property: "og:description",
        content: "Websites, e-commerce e apps com design minimalista e tecnologia de ponta.",
      },
    ],
  }),
  component: Index,
});

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Contatos", href: "#contatos" },
  { label: "Blog", href: "#blog" },
];

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

const categories = ["Todos", "Tecnologia", "Design", "Negócios", "UX"];

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

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 grid grid-cols-[auto_1fr_auto] items-center gap-6">
        <a href="#home" className="flex items-center gap-2 group">
          <Logo className="w-9 h-9 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
          <span className="font-display font-extrabold tracking-tight text-lg text-foreground">
            VERTEX
          </span>
        </a>

        <nav className="hidden lg:flex items-center justify-center gap-10">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="relative text-sm font-semibold uppercase tracking-wider text-foreground/70 hover:text-foreground transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-0.5 after:w-0 after:bg-gradient-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-1">
          {[
            { Icon: Instagram, label: "Instagram" },
            { Icon: Linkedin, label: "LinkedIn" },
            { Icon: MessageCircle, label: "WhatsApp" },
          ].map(({ Icon, label }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="p-2.5 rounded-full text-foreground/60 hover:text-primary hover:bg-accent transition-all duration-300 hover:-translate-y-0.5"
            >
              <Icon className="w-[18px] h-[18px]" strokeWidth={1.5} />
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-lg hover:bg-accent transition-colors"
          aria-label="Menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl">
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold uppercase tracking-wider text-foreground/70 hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
            <div className="flex items-center gap-2 pt-2">
              {[Instagram, Linkedin, MessageCircle].map((Icon, i) => (
                <a key={i} href="#" className="p-2.5 rounded-full hover:bg-accent">
                  <Icon className="w-[18px] h-[18px]" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-hero">
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.22 0.02 260) 1px, transparent 1px), linear-gradient(90deg, oklch(0.22 0.02 260) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-8 items-center">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-accent text-accent-foreground border border-primary/10">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Estúdio Digital Premium
          </span>

          <p className="mt-6 text-sm font-semibold tracking-[0.3em] uppercase text-muted-foreground">
            Transforme o seu
          </p>
          <h1 className="mt-3 font-display font-black uppercase leading-[0.95] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-foreground">
            Sonho em
            <br />
            <span className="text-gradient-primary">Realidade</span>
          </h1>

          <p className="mt-8 text-lg text-muted-foreground max-w-lg leading-relaxed">
            Somos apaixonados por tecnologia e pela forma como ela pode impactar pessoas e ideias.
            Criamos produtos digitais que unem design, performance e propósito.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contatos"
              className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-gradient-primary text-primary-foreground text-sm font-semibold shadow-soft hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300"
            >
              Fale Conosco
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/80 hover:text-primary transition-colors"
            >
              Ver portfólio
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Reimagined diamond composition */}
        <div className="relative flex items-center justify-center min-h-[400px] lg:min-h-[560px]">
          <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
          <div className="relative w-full max-w-[520px] aspect-square">
            <img
              src={heroDiamond}
              alt="Diamante Vertex — símbolo de precisão e energia"
              width={1600}
              height={1408}
              className="w-full h-full object-contain animate-[float_6s_ease-in-out_infinite]"
              style={{
                filter: "drop-shadow(0 30px 60px oklch(0.55 0.22 255 / 0.25))",
              }}
            />
            {/* Floating accents */}
            <div className="absolute top-6 -right-2 w-16 h-16 rounded-2xl bg-background/80 backdrop-blur border border-border shadow-card grid place-items-center animate-[float_5s_ease-in-out_infinite_reverse]">
              <Logo className="w-8 h-8" />
            </div>
            <div className="absolute bottom-10 -left-4 px-4 py-3 rounded-2xl bg-background/90 backdrop-blur border border-border shadow-card">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Projetos</div>
              <div className="font-display font-extrabold text-xl text-foreground">+120</div>
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
  );
}

function Services() {
  return (
    <section id="quem-somos" className="py-24 lg:py-36 bg-background">
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
              {/* Gradient border on hover */}
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

                <a
                  href="#"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary group/link"
                >
                  Saber mais
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </a>
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
    <section id="blog" className="py-24 lg:py-36 bg-gradient-soft">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
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

                <a
                  href="#"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground group/l"
                >
                  Ler mais
                  <ArrowRight className="w-4 h-4 text-primary transition-transform duration-300 group-hover/l:translate-x-1.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contatos" className="relative bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2">
            <Logo className="w-9 h-9" />
            <span className="font-display font-extrabold tracking-tight text-lg">VERTEX</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
            Transformamos ideias em produtos digitais premium. Baseados no Brasil, atuando no mundo.
          </p>
          <div className="mt-6 flex items-center gap-1">
            {[Instagram, Linkedin, MessageCircle].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-2.5 rounded-full text-foreground/60 hover:text-primary hover:bg-accent transition-all duration-300"
              >
                <Icon className="w-[18px] h-[18px]" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Navegação
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-foreground/80 hover:text-primary transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Contato
          </div>
          <ul className="mt-4 space-y-2 text-sm text-foreground/80">
            <li>ola@vertex.digital</li>
            <li>+55 11 99999-0000</li>
            <li>São Paulo · Brasil</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© 2026 Vertex Digital. Todos os direitos reservados.</div>
          <div>Feito com precisão em São Paulo.</div>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Services />
      <Blog />
      <Footer />
    </main>
  );
}
