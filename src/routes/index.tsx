import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Instagram, Linkedin, MessageCircle, Globe, ShoppingBag, Smartphone, ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import heroDiamond from "@/assets/conselt-diamond.png.asset.json";
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
    <header className="fixed top-0 inset-x-0 z-50 bg-brand-white border-b border-brand-blue/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-24 lg:h-28 grid grid-cols-[auto_1fr_auto] items-center gap-6">
        <a href="#home" className="flex items-center gap-2 group">
          <Logo className="w-14 h-14 lg:w-16 lg:h-16 transition-transform duration-300 group-hover:scale-110" />
        </a>

        <nav className="hidden lg:flex items-center justify-center gap-12">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="relative font-opensans text-base lg:text-lg font-semibold uppercase tracking-wider text-brand-blue transition-opacity duration-300 hover:opacity-70 after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0 after:bg-brand-blue after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden col-start-3 justify-self-end p-2 rounded-lg text-brand-blue hover:bg-brand-blue/5 transition-colors"
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        <div className="hidden lg:block" />
      </div>

      {open && (
        <div className="lg:hidden border-t border-brand-blue/10 bg-brand-white">
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-opensans text-base font-semibold uppercase tracking-wider text-brand-blue hover:opacity-70 transition-opacity"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-hero">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-8 items-center">
        <div className="max-w-2xl">
          <p className="text-xl font-semibold tracking-[0.3em] uppercase text-brand-blue/70 font-montserrat">
            Transforme o seu
          </p>
          <h1 className="mt-3 font-montserrat font-black uppercase leading-[0.95] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-brand-blue">
            Sonho em
            <br />
            <span className="text-gradient-primary">Realidade</span>
          </h1>

          <p className="mt-8 text-lg text-brand-blue/70 max-w-lg leading-relaxed font-montserrat">
            Somos apaixonados por tecnologia e pela forma como ela pode impactar pessoas e ideias.
            Criamos produtos digitais que unem design, performance e propósito.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue/80 hover:text-primary transition-colors"
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
              src={heroDiamond.url}
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
    <footer id="contatos" className="relative bg-brand-white border-t border-brand-blue/10 font-opensans text-brand-blue">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 grid gap-16 items-start lg:grid-cols-2">
        <div className="flex flex-col sm:flex-row items-start gap-10 lg:gap-12">
          <Logo className="w-36 h-36 lg:w-44 lg:h-44 shrink-0" />

          <div className="flex flex-col sm:flex-row gap-10 lg:gap-12">
            <nav className="flex flex-col items-start gap-4">
              {navLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="font-opensans text-base lg:text-lg font-semibold uppercase tracking-widest text-brand-blue hover:opacity-70 transition-opacity"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="flex flex-col items-start gap-4">
              <div className="font-opensans text-base lg:text-lg font-bold uppercase tracking-widest text-brand-blue">
                Siga-nos
              </div>
              {[
                { Icon: MessageCircle, label: "WhatsApp" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Linkedin, label: "LinkedIn" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="text-brand-blue hover:opacity-70 transition-opacity"
                >
                  <Icon className="w-7 h-7 lg:w-8 lg:h-8" strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="overflow-hidden rounded-2xl border border-brand-blue/15">
            <iframe
              title="Mapa CONSELT — Universidade Federal de Uberlândia"
              src="https://maps.google.com/maps?q=Universidade%20Federal%20de%20Uberl%C3%A2ndia%2C%20Av%20Jo%C3%A3o%20Naves%20de%20%C3%81vila%2C%202121%2C%20Bloco%201N%2C%20Santa%20M%C3%B4nica%2C%20Uberl%C3%A2ndia%20-%20MG%2C%2038408-144&z=16&output=embed"
              className="w-full h-80 lg:h-96 border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="mt-4 text-sm lg:text-base leading-relaxed text-brand-blue/80">
            Universidade Federal de Uberlândia — Av. João Naves de Ávila, Bloco 1N, 2121 — Sala 06,
            Saraiva, Uberlândia - MG, 38408-144
          </p>
        </div>
      </div>

      <div className="border-t border-brand-blue/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-brand-blue/70">
          <div>© 2026 Conselt Digital. Todos os direitos reservados.</div>
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
