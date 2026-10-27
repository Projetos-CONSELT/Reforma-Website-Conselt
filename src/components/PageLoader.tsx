import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { Logo } from "@/components/Logo";

/**
 * PageLoader — Tela de carregamento oficial da CONSELT
 * Alinhada rigorosamente à Identidade Visual (IDV):
 * - Cores: Deep Midnight (#051D3E), Neon/Cyan (#42A5D3), Azul Elétrico (#0C4E9E), Ice (#B1D3E1)
 * - Símbolo: Diamante Conselt com anéis orbitais de tecnologia e aura luminosa
 * - Tipografia: Montserrat Bold/Black + tracking amplo de alta tecnologia
 * - Transição: Efeito de saída suave (fade out + scale) sem travar a navegação
 */
export function PageLoader() {
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(12);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isDone, setIsDone] = useState(false);

  // Monitora transições de rota do TanStack Router
  const isRoutePending = useRouterState({
    select: (s) => s.status === "pending",
  });

  // Estado da barra de rota
  const [routeProgress, setRouteProgress] = useState(0);

  // 1. Carregamento inicial de página (Splash/Preloader elegante)
  useEffect(() => {
    setMounted(true);

    // Incremento suave e progressivo até 100%
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Simulação de aceleração orgânica
        const increment = prev < 50 ? Math.random() * 18 + 10 : Math.random() * 12 + 6;
        const next = Math.min(100, Math.round(prev + increment));
        return next;
      });
    }, 90);

    return () => clearInterval(interval);
  }, []);

  // Quando o progresso atinge 100%, dispara a transição de saída
  useEffect(() => {
    if (progress >= 100) {
      const fadeTimer = setTimeout(() => {
        setIsFadingOut(true);
      }, 150);

      const removeTimer = setTimeout(() => {
        setIsDone(true);
      }, 750);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(removeTimer);
      };
    }
  }, [progress]);

  // Fallback de segurança: nunca bloqueia o usuário por mais de 1.8 segundos
  useEffect(() => {
    const safetyTimer = setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => setIsDone(true), 600);
    }, 1800);

    return () => clearTimeout(safetyTimer);
  }, []);

  // 2. Barra fina de topo durante transição de rotas SPA
  useEffect(() => {
    let routeInterval: NodeJS.Timeout | undefined;

    if (isRoutePending) {
      setRouteProgress(20);
      routeInterval = setInterval(() => {
        setRouteProgress((prev) => {
          if (prev >= 90) return prev;
          return prev + (90 - prev) * 0.2;
        });
      }, 100);
    } else {
      setRouteProgress(100);
      const timer = setTimeout(() => {
        setRouteProgress(0);
      }, 400);
      return () => clearTimeout(timer);
    }

    return () => {
      if (routeInterval) clearInterval(routeInterval);
    };
  }, [isRoutePending]);

  // Mensagens contextuais da identidade institucional da CONSELT
  const getStatusText = (value: number) => {
    if (value < 35) return "Conectando soluções em engenharia...";
    if (value < 70) return "Sincronizando tecnologias sob medida...";
    if (value < 95) return "Preparando experiência digital...";
    return "Transformando desafios em realidade.";
  };

  return (
    <>
      {/* Barra de progresso ultra-fina para navegações entre rotas SPA */}
      {routeProgress > 0 && routeProgress < 100 && (
        <div
          className="fixed top-0 left-0 right-0 h-[2.5px] z-[999999] pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          <div
            className="h-full bg-gradient-to-r from-[#0C4E9E] via-[#42A5D3] to-white shadow-[0_0_10px_#42A5D3,0_0_20px_#42A5D3] transition-all duration-200 ease-out"
            style={{ width: `${routeProgress}%` }}
          />
        </div>
      )}

      {/* Tela de Carregamento Completa (Preloader de Entrada) */}
      {!isDone && mounted && (
        <aside
          role="status"
          aria-live="polite"
          aria-label="Carregando portal da CONSELT"
          className={`fixed inset-0 z-[999998] flex flex-col items-center justify-center bg-[#051D3E] text-white select-none transition-all duration-700 ease-out ${
            isFadingOut
              ? "opacity-0 scale-[1.03] blur-[3px] pointer-events-none"
              : "opacity-100 scale-100 pointer-events-auto"
          }`}
        >
          {/* Efeitos de Iluminação e Ambientação Neon/Cyberpunk Corporativo */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0C4E9E]/25 rounded-full blur-[140px] pointer-events-none animate-pulse [animation-duration:4s]"
            aria-hidden="true"
          />
          <div
            className="absolute -top-24 -left-24 w-[420px] h-[420px] bg-[#42A5D3]/15 rounded-full blur-[130px] pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-24 -right-24 w-[420px] h-[420px] bg-[#42A5D3]/15 rounded-full blur-[130px] pointer-events-none"
            aria-hidden="true"
          />

          {/* Grade Tecnológica Sutil no Fundo */}
          <div
            className="absolute inset-0 bg-[radial-gradient(#42A5D3_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.04] pointer-events-none"
            aria-hidden="true"
          />

          {/* Conteúdo Central */}
          <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-md w-full">
            {/* Núcleo do Diamante com Anéis Orbitais Tecnológicos */}
            <div className="relative mb-7 w-36 h-36 flex items-center justify-center">
              {/* Anel Orbital Externo Pontilhado */}
              <div
                className="absolute inset-0 rounded-full border border-dashed border-[#42A5D3]/25 animate-spin [animation-duration:14s] pointer-events-none"
                aria-hidden="true"
              />

              {/* Anel Orbital Secundário Reverso */}
              <div
                className="absolute inset-2.5 rounded-full border border-dotted border-[#42A5D3]/35 animate-spin [animation-duration:9s] [animation-direction:reverse] pointer-events-none"
                aria-hidden="true"
              />

              {/* Aura de Glow Pulsante Atrás do Diamante */}
              <div
                className="absolute inset-6 rounded-full bg-[#42A5D3]/25 blur-xl animate-pulse [animation-duration:2.5s] pointer-events-none"
                aria-hidden="true"
              />

              {/* O Diamante Oficial da CONSELT */}
              <div className="relative z-10 p-4 transition-transform duration-500 hover:scale-105">
                <Logo className="w-18 h-18 sm:w-20 sm:h-20 object-contain drop-shadow-[0_0_24px_rgba(66,165,211,0.7)] animate-pulse [animation-duration:2.8s]" />
              </div>
            </div>

            {/* Tipografia de Identidade Visual CONSELT */}
            <div className="mb-6 flex flex-col items-center">
              <span className="font-['Montserrat',sans-serif] font-black text-2xl sm:text-3xl tracking-[0.25em] text-white drop-shadow-[0_2px_12px_rgba(255,255,255,0.15)] pl-[0.25em]">
                CONSELT
              </span>
              <span className="mt-1.5 text-[10px] sm:text-[11px] font-['Montserrat',sans-serif] font-bold uppercase tracking-[0.22em] text-[#42A5D3] pl-[0.22em]">
                Engenharia & Tecnologia • UFU
              </span>
            </div>

            {/* Barra de Progresso com Glow de Alta Energia */}
            <div className="w-64 sm:w-72 mb-4">
              <div className="relative h-1.5 w-full bg-white/10 rounded-full overflow-hidden p-[1px] border border-white/5 backdrop-blur-sm">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#0C4E9E] via-[#2270A1] to-[#42A5D3] relative shadow-[0_0_12px_rgba(66,165,211,0.8)] transition-all duration-150 ease-out"
                  style={{ width: `${progress}%` }}
                >
                  {/* Ponto de luz na extremidade da barra */}
                  <div
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white blur-[1px] shadow-[0_0_6px_#fff]"
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Rodapé da Barra: Status e Contador Percentual */}
              <div className="mt-3 flex items-center justify-between text-[11px] text-[#B1D3E1]/75 font-sans">
                <span className="truncate max-w-[200px] text-left text-[11px] text-[#B1D3E1]/80">
                  {getStatusText(progress)}
                </span>
                <span className="font-mono font-semibold text-[#42A5D3] tracking-wider shrink-0 ml-2">
                  {progress}%
                </span>
              </div>
            </div>
          </div>

          {/* Tagline Institucional no Rodapé da Tela */}
          <div className="absolute bottom-6 inset-x-0 text-center px-4 pointer-events-none">
            <span className="text-[10px] tracking-widest text-[#B1D3E1]/40 uppercase font-medium">
              Transforme o seu sonho em realidade
            </span>
          </div>
        </aside>
      )}
    </>
  );
}
