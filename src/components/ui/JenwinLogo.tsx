// SVG recreation of the Jenwin logo mark + wordmark
// Based on the brand kit: ruby chevron icon + "jenwin" wordmark in white

interface JenwinLogoProps {
  className?: string;
  variant?: "full" | "mark";
}

export default function JenwinLogo({ className = "h-8 w-auto", variant = "full" }: JenwinLogoProps) {
  if (variant === "mark") {
    return (
      <svg
        className={className}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Jenwin"
      >
        {/* Chevron / Arrow mark based on brand kit */}
        <path d="M20 4L8 20L14 20L20 12L26 20L32 20L20 4Z" fill="#D81B60" />
        <path d="M14 20L8 20L14 30L20 22L14 20Z" fill="#b01550" opacity="0.85" />
        <path d="M26 20L32 20L26 30L20 22L26 20Z" fill="#D81B60" opacity="0.7" />
      </svg>
    );
  }

  return (
    <svg
      className={className}
      viewBox="0 0 160 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Jenwin"
    >
      {/* Icon mark */}
      <path d="M18 3L6 19L12 19L18 11L24 19L30 19L18 3Z" fill="#D81B60" />
      <path d="M12 19L6 19L12 30L18 22L12 19Z" fill="#9e1244" opacity="0.9" />
      <path d="M24 19L30 19L24 30L18 22L24 19Z" fill="#D81B60" opacity="0.65" />

      {/* Wordmark "jenwin" */}
      <text
        x="38"
        y="27"
        fontFamily="Inter, sans-serif"
        fontSize="20"
        fontWeight="600"
        fill="#FFFFFF"
        letterSpacing="-0.5"
      >
        jenwin
      </text>
    </svg>
  );
}
