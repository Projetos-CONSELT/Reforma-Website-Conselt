interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Vertex logo"
    >
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="oklch(0.55 0.22 255)" />
          <stop offset="100%" stopColor="oklch(0.72 0.18 245)" />
        </linearGradient>
        <linearGradient id="logo-grad-dark" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="oklch(0.38 0.18 260)" />
          <stop offset="100%" stopColor="oklch(0.55 0.22 255)" />
        </linearGradient>
      </defs>
      {/* Diamond outline via two facets */}
      <path
        d="M32 4 L60 24 L32 60 L4 24 Z"
        fill="url(#logo-grad)"
      />
      <path
        d="M32 4 L60 24 L32 30 Z"
        fill="url(#logo-grad-dark)"
        opacity="0.55"
      />
      <path
        d="M4 24 L32 30 L32 60 Z"
        fill="url(#logo-grad-dark)"
        opacity="0.35"
      />
      {/* Lightning bolt cutout */}
      <path
        d="M35 16 L22 34 L30 34 L27 50 L42 30 L34 30 Z"
        fill="white"
      />
    </svg>
  );
}
