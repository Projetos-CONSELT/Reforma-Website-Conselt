import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { Home, ArrowLeft, Mail, RefreshCw, Compass } from "lucide-react";
import { Logo } from "@/components/Logo";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="relative min-h-screen bg-[#051D3E] text-white flex flex-col justify-between overflow-hidden px-4 py-8 select-none font-sans">
      {/* Glows de Fundo Decorativos */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#42A5D3]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#42A5D3]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#002C66]/40 rounded-full blur-[140px] pointer-events-none" />

      {/* Topo: Logo & Identidade */}
      <header className="relative z-10 max-w-6xl mx-auto w-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group transition-transform hover:scale-[1.02]">
          <Logo className="w-10 h-10 object-contain drop-shadow-[0_0_12px_rgba(66,165,211,0.4)]" />
          <div className="flex flex-col">
            <span className="font-['Montserrat',sans-serif] font-black text-lg tracking-wider text-white">CONSELT</span>
            <span className="text-[10px] text-[#42A5D3] uppercase font-bold tracking-widest -mt-1">Engenharia & Tecnologia</span>
          </div>
        </Link>
        <Link
          to="/"
          className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-[#B1D3E1] hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Voltar ao site
        </Link>
      </header>

      {/* Conteúdo Central: Card com Visual Conselt */}
      <main className="relative z-10 flex-1 flex items-center justify-center py-12">
        <div className="max-w-lg w-full bg-[#071F42]/80 border border-[#42A5D3]/25 rounded-3xl p-8 sm:p-12 text-center shadow-2xl backdrop-blur-xl relative overflow-hidden">
          {/* Luz interna no topo do card */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#42A5D3]/20 rounded-full blur-3xl pointer-events-none" />

          {/* Diamante Conselt Animado/Com Brilho */}
          <div className="relative mx-auto mb-6 w-24 h-24 flex items-center justify-center">
            <div className="absolute inset-0 bg-[#42A5D3]/20 rounded-full blur-xl animate-pulse" />
            <Logo className="w-20 h-20 object-contain relative z-10 drop-shadow-[0_4px_20px_rgba(66,165,211,0.5)] transition-transform duration-500 hover:scale-110" />
          </div>

          {/* Badge 404 */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#42A5D3]/15 border border-[#42A5D3]/30 text-[#42A5D3] text-xs font-bold uppercase tracking-widest mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Erro 404 • Página não encontrada</span>
          </div>

          <h1 className="font-['Montserrat',sans-serif] text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3">
            Destino não encontrado
          </h1>

          <p className="text-sm text-[#B1D3E1] leading-relaxed max-w-md mx-auto mb-8">
            O link que você tentou acessar não existe, foi reformulado ou foi movido para uma nova seção do portal da CONSELT.
          </p>

          {/* Botões de Ação */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#42A5D3] hover:bg-[#3492be] text-[#051D3E] font-['Montserrat',sans-serif] font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-[#42A5D3]/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Home className="w-4 h-4" />
              <span>Página Inicial</span>
            </Link>

            <a
              href="mailto:projetos@conselt.com.br"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/15 font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all duration-300 hover:border-[#42A5D3]/40"
            >
              <Mail className="w-4 h-4 text-[#42A5D3]" />
              <span>Fale Conosco</span>
            </a>
          </div>
        </div>
      </main>

      {/* Rodapé Sutil */}
      <footer className="relative z-10 text-center text-xs text-[#B1D3E1]/60">
        © {new Date().getFullYear()} CONSELT — Soluções em Engenharia e Tecnologia. Todos os direitos reservados.
      </footer>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="relative min-h-screen bg-[#051D3E] text-white flex flex-col justify-between overflow-hidden px-4 py-8 select-none font-sans">
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#42A5D3]/15 rounded-full blur-[120px] pointer-events-none" />

      <header className="relative z-10 max-w-6xl mx-auto w-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <Logo className="w-10 h-10 object-contain" />
          <div className="flex flex-col">
            <span className="font-['Montserrat',sans-serif] font-black text-lg tracking-wider text-white">CONSELT</span>
            <span className="text-[10px] text-[#42A5D3] uppercase font-bold tracking-widest -mt-1">Engenharia & Tecnologia</span>
          </div>
        </Link>
      </header>

      <main className="relative z-10 flex-1 flex items-center justify-center py-12">
        <div className="max-w-lg w-full bg-[#071F42]/85 border border-[#42A5D3]/30 rounded-3xl p-8 sm:p-12 text-center shadow-2xl backdrop-blur-xl">
          <div className="relative mx-auto mb-6 w-20 h-20 flex items-center justify-center">
            <Logo className="w-16 h-16 object-contain relative z-10 drop-shadow-[0_4px_20px_rgba(66,165,211,0.5)]" />
          </div>

          <h1 className="font-['Montserrat',sans-serif] text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight mb-3">
            Ocorreu um erro inesperado
          </h1>

          <p className="text-sm text-[#B1D3E1] leading-relaxed max-w-md mx-auto mb-8">
            Não foi possível processar esta requisição no momento. Você pode tentar novamente ou retornar ao início.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => {
                router.invalidate();
                reset();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#42A5D3] hover:bg-[#3492be] text-[#051D3E] font-['Montserrat',sans-serif] font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-[#42A5D3]/25 transition-all cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Tentar Novamente</span>
            </button>

            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/15 font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all"
            >
              <Home className="w-4 h-4 text-[#42A5D3]" />
              <span>Página Inicial</span>
            </Link>
          </div>
        </div>
      </main>

      <footer className="relative z-10 text-center text-xs text-[#B1D3E1]/60">
        © {new Date().getFullYear()} CONSELT — Soluções em Engenharia e Tecnologia.
      </footer>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "CONSELT — Soluções em Engenharia e Tecnologia" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "icon", href: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { rel: "icon", href: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Montserrat:wght@400;500;600;700;800;900&family=Open+Sans:wght@400;600;700&family=Poppins:wght@500;600;700;800;900&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
