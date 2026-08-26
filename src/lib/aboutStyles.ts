// Constantes de estilos e temas para a seção "Sobre"

export const ABOUT_STYLES = {
  // Sombras
  shadows: {
    card: "shadow-lg hover:shadow-2xl",
    hero: "shadow-2xl",
  },

  // Efeitos de transição
  transitions: {
    smooth: "transition-all duration-300",
    fast: "transition-all duration-200",
    slow: "transition-all duration-500",
  },

  // Animações de hover
  hover: {
    scale: "hover:scale-105",
    lift: "hover:-translate-y-1",
    glow: "hover:shadow-xl",
  },

  // Responsive breakpoints (Tailwind)
  breakpoints: {
    mobile: "max-w-md",
    tablet: "md:grid-cols-2 lg:grid-cols-4",
    desktop: "lg:grid-cols-4",
  },

  // Tipografia
  typography: {
    title: "text-4xl lg:text-5xl font-bold",
    subtitle: "text-xl text-slate-600",
    cardTitle: "text-2xl font-bold",
    memberName: "font-bold text-lg",
    memberPosition: "text-sm text-slate-600",
  },

  // Espaçamento
  spacing: {
    sectionGap: "gap-8 lg:gap-10",
    heroGap: "gap-8 lg:gap-16",
    gridGap: "gap-4",
  },
};

export const ACCESSIBILITY = {
  // Cores com contraste WCAG AA 4.5:1
  colors: {
    text: {
      primary: "#1e293b", // slate-900
      secondary: "#475569", // slate-600
      light: "#94a3b8", // slate-400
    },
    background: {
      primary: "#ffffff",
      secondary: "#f8fafc", // slate-50
    },
  },

  // Foco visível para navegação por teclado
  focusRing: "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600",

  // Role attributes para estrutura semântica
  roles: {
    card: "article",
    member: "button",
    department: "group",
  },
};

export const ANIMATION_CLASSES = {
  // Animações CSS customizadas
  fadeIn: "animate-in fade-in duration-300",
  slideUp: "animate-in slide-in-from-bottom-4 duration-300",
  scaleIn: "animate-in zoom-in-95 duration-300",
};
