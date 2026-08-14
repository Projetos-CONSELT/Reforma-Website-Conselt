import diamondImg from "@/assets/conselt-diamond-icon.png";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <img
      src={diamondImg}
      alt="Conselt Diamante"
      className={className}
      width={490}
      height={490}
      style={{ objectFit: "contain" }}
    />
  );
}
