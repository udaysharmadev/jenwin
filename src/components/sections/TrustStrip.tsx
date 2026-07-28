"use client";

import FadeIn from "@/components/ui/FadeIn";

const proofPoints = [
  "Built for Founders",
  "Product-First Execution",
  "Fast Delivery Cycles",
  "Design-Led Engineering",
  "Clean, Maintainable Code",
  "AI-Native Workflows",
];

export default function TrustStrip() {
  return (
    <section className="border-y border-[#141414] bg-[#0b0b0b] overflow-hidden py-5">
      <FadeIn direction="none">
        <div className="trust-strip-inner flex items-center gap-10 whitespace-nowrap">
          {[...proofPoints, ...proofPoints, ...proofPoints].map((point, i) => (
            <span key={i} className="inline-flex items-center gap-3 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D81B60] shrink-0" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#555555]">
                {point}
              </span>
            </span>
          ))}
        </div>
      </FadeIn>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes jenwin-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .trust-strip-inner { animation: jenwin-scroll 25s linear infinite; }
      ` }} />
    </section>
  );
}
