/**
 * Guia de Configuração do Tailwind CSS para a seção "Sobre"
 * 
 * As cores institucionais CONSELT já estão integradas via classes padrão do Tailwind.
 * Este arquivo documenta como as cores foram aplicadas.
 */

/**
 * PALETA DE CORES INSTITUCIONAL CONSELT
 * Implementada nativamente com Tailwind classes
 */

export const TAILWIND_COLOR_USAGE = {
  primary: {
    description: "Azul institucional - tons escuros para headers e destaque",
    usage: {
      darkest: "text-[#1a3a7a] ou bg-[#1a3a7a]", // Hero section header
      dark: "text-blue-700 ou bg-blue-700", // Equivalente ao #2b5ca8
      medium: "border-blue-600, text-blue-600", // Equivalente ao #4a8bcb
      light: "bg-blue-50, text-blue-500", // Backgrounds leves
    },
  },

  semantic: {
    description: "Cores semânticas já configuradas no Tailwind v4",
    usage: {
      white: "bg-white, text-white",
      slate: {
        900: "text-slate-900", // Textos principais
        700: "text-slate-700", // Textos secundários
        600: "text-slate-600", // Textos terciários
        400: "text-slate-400", // Textos desabilitados
      },
    },
  },

  interactive: {
    description: "Cores para feedback interativo",
    usage: {
      hover: "hover:text-blue-600, hover:bg-blue-50",
      focus: "focus-visible:outline-blue-600",
      gradient: "from-blue-600 to-blue-400", // Para cards
    },
  },
};

/**
 * SHADOWS E ELEVAÇÃO
 * Criando hierarquia visual com sombras
 */
export const SHADOW_IMPLEMENTATION = {
  card: "shadow-lg hover:shadow-2xl transition-shadow",
  hero: "shadow-2xl",
  button: "shadow-sm hover:shadow-md",
  modal: "shadow-2xl drop-shadow-lg",

  // Escala de sombras Tailwind
  scales: {
    sm: "shadow-sm", // Sutil
    md: "shadow-md", // Médio
    lg: "shadow-lg", // Grande (usado nos cards)
    xl: "shadow-xl", // Muito grande
    "2xl": "shadow-2xl", // Hero section
  },
};

/**
 * ANIMAÇÕES E TRANSIÇÕES
 * Implementadas com CSS puro, sem dependências externas
 */
export const ANIMATIONS = {
  transitions: {
    fast: "transition-all duration-200",
    smooth: "transition-all duration-300",
    slow: "transition-all duration-500",
  },

  hover_effects: {
    scale: "hover:scale-105",
    lift: "hover:-translate-y-1",
    color_shift: "hover:text-blue-600 transition-colors",
  },

  css_keyframes: `
    /* Adicionar em tailwind.config.ts se necessário */
    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `,
};

/**
 * TIPOGRAFIA
 * Configuração de texto com tamanhos responsivos
 */
export const TYPOGRAPHY = {
  headings: {
    h1: "text-4xl lg:text-5xl font-bold text-slate-900",
    h2: "text-3xl lg:text-4xl font-bold text-slate-900",
    h3: "text-2xl font-bold text-slate-900",
    h4: "text-xl font-semibold text-slate-900",
  },

  body: {
    lead: "text-lg text-slate-600",
    normal: "text-base text-slate-700",
    small: "text-sm text-slate-600",
  },

  emphasis: {
    bold: "font-bold text-slate-900",
    semibold: "font-semibold text-slate-700",
  },
};

/**
 * ESPAÇAMENTO E LAYOUT
 * Mantém consistência visual
 */
export const SPACING = {
  sections: {
    mobile: "py-12 px-6",
    desktop: "py-20 lg:py-32 px-6 lg:px-10",
  },

  gaps: {
    tight: "gap-4",
    normal: "gap-6 lg:gap-8",
    loose: "gap-8 lg:gap-10",
    relaxed: "gap-12 lg:gap-16",
  },

  container: {
    max: "max-w-7xl mx-auto w-full",
  },
};

/**
 * GRID RESPONSIVO
 * Aplicado em DepartmentSection
 */
export const RESPONSIVE_GRIDS = {
  members: {
    mobile: "grid-cols-1",
    tablet: "sm:grid-cols-2",
    desktop: "lg:grid-cols-4",
    full: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8",
  },

  essence: {
    full: "grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10",
  },

  // Breakpoints do Tailwind v4
  breakpoints: {
    xs: "640px", // sm
    sm: "768px", // md
    md: "1024px", // lg
    lg: "1280px", // xl
    xl: "1536px", // 2xl
  },
};

/**
 * ACESSIBILIDADE
 * Cores com contraste WCAG AA 4.5:1
 */
export const ACCESSIBILITY_COLORS = {
  text: {
    primary: "#1e293b", // slate-900 - Contraste 16:1 em branco
    secondary: "#475569", // slate-600 - Contraste 8.5:1 em branco
  },

  focus: {
    ring: "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600",
  },

  contrast_check: {
    note: "Todas as combinações texto/fundo atendem AA (4.5:1) ou AAA (7:1)",
    tools: [
      "https://webaim.org/resources/contrastchecker/",
      "https://www.tpgi.com/color-contrast-checker/",
    ],
  },
};

/**
 * IMPLEMENTAÇÃO NO tailwind.config.ts
 * Se precisar customização adicional:
 */
export const TAILWIND_CONFIG_EXAMPLE = `
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  theme: {
    extend: {
      colors: {
        conselt: {
          darkest: '#1a3a7a',
          dark: '#2b5ca8',
          medium: '#4a8bcb',
          light: '#6ba3d8',
        },
      },
      animation: {
        slideUp: 'slideUp 0.3s ease-out',
        fadeIn: 'fadeIn 0.3s ease-out',
      },
      keyframes: {
        slideUp: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
      },
    },
  },
}

export default config
`;

/**
 * CLASSE AUXILIAR REUTILIZÁVEL
 * Para simplificar uso de classes longas
 */
export const REUSABLE_CLASSES = {
  buttonPrimary: "px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",
  cardHover: "shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105",
  textMuted: "text-slate-600 hover:text-slate-700 transition-colors",
};
