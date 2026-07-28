import Image from "next/image";

interface JenwinLogoProps {
  className?: string;
  width?: number;
  height?: number;
}

// Actual logo dimensions: 3439 x 870 (≈ 3.95:1 ratio)
// Default: 140px wide → ~35px tall
export default function JenwinLogo({ className = "", width = 140, height = 36 }: JenwinLogoProps) {
  return (
    <Image
      src="/jenwin-logo.png"
      alt="Jenwin"
      width={width}
      height={height}
      className={className}
      priority
      style={{ objectFit: "contain", objectPosition: "left center" }}
    />
  );
}
