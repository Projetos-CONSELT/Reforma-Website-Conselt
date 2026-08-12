import logoAsset from "@/assets/conselt-diamond.png.asset.json";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <img
      src={logoAsset.url}
      alt="Conselt"
      className={className}
      width={490}
      height={490}
      style={{ objectFit: "contain" }}
    />
  );
}
