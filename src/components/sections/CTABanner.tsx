import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import { ArrowRight } from "lucide-react";

interface CTABannerProps {
  eyebrow?: string;
  heading?: string;
  subtext?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function CTABanner({
  eyebrow = "Ready to build?",
  heading = "Let's build something that feels as good as it performs.",
  subtext = "Most projects start with one conversation. Bring your idea — we'll bring the execution.",
  primaryCta = { label: "Start a Project", href: "/contact" },
  secondaryCta = { label: "View Work", href: "/work" },
}: CTABannerProps) {
  return (
    <section className="relative py-24 lg:py-36 overflow-hidden bg-[#060606] border-t border-[#111111]">
      {/* Ruby glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(216,27,96,0.1) 0%, transparent 65%)",
          filter: "blur(20px)",
        }}
      />

      {/* Fine grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <FadeIn>
          <p className="flex items-center justify-center gap-3 mb-6">
            <span className="inline-block w-6 h-px bg-[#D81B60]" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D81B60]">
              {eyebrow}
            </span>
            <span className="inline-block w-6 h-px bg-[#D81B60]" />
          </p>
        </FadeIn>

        <FadeIn delay={0.05}>
          <h2 className="text-headline text-white mb-6">{heading}</h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-base text-[#666666] max-w-xl mx-auto mb-10">{subtext}</p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href={primaryCta.href}
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#D81B60] text-white text-sm font-semibold rounded-sm hover:bg-[#b01550] hover:shadow-[0_0_28px_rgba(216,27,96,0.45)] transition-all duration-200 active:scale-[0.98]"
            >
              {primaryCta.label}
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href={secondaryCta.href}
              className="group inline-flex items-center gap-2 px-7 py-3.5 border border-[#2a2a2a] text-sm font-semibold text-[#aaaaaa] rounded-sm hover:border-[#444444] hover:text-white transition-all duration-200 active:scale-[0.98]"
            >
              {secondaryCta.label}
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
