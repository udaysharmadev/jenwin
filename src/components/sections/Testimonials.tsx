import FadeIn from "@/components/ui/FadeIn";

const testimonials = [
  {
    quote:
      "They don't just build — they think. Jenwin challenged our assumptions early, and the product shipped better because of it.",
    author: "Kiran M.",
    role: "Founder, FinTrack",
    initials: "KM",
  },
  {
    quote:
      "Fast, accountable, and the design sensibility is genuinely rare. We had the MVP live in under two months. Clean code, zero drama.",
    author: "Priya R.",
    role: "Co-founder, Launchpad",
    initials: "PR",
  },
  {
    quote:
      "The website looked expensive in the best way — and our inquiry rate doubled in the first quarter after launch.",
    author: "Aditya S.",
    role: "Brand Director, Atlas",
    initials: "AS",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 max-w-7xl mx-auto px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-xl mb-14">
        <FadeIn>
          <p className="flex items-center gap-3 mb-4">
            <span className="inline-block w-6 h-px bg-[#D81B60]" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D81B60]">
              Client Voices
            </span>
          </p>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h2 className="text-headline text-white">
            What clients say after we ship.
          </h2>
        </FadeIn>
      </div>

      {/* Testimonial cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {testimonials.map((t, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="bg-[#0d0d0d] border border-[#1a1a1a] rounded-sm p-7 flex flex-col gap-6 h-full hover:border-[#2a2a2a] transition-colors duration-200">
              {/* Quote mark */}
              <div className="text-4xl font-serif text-[#D81B60] leading-none select-none">&ldquo;</div>
              <p className="text-sm text-[#aaaaaa] leading-relaxed flex-1">
                {t.quote}
              </p>
              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-[#141414]">
                <div className="w-8 h-8 rounded-full bg-[#D81B60]/15 flex items-center justify-center text-xs font-bold text-[#D81B60]">
                  {t.initials}
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">{t.author}</p>
                  <p className="text-xs text-[#555555]">{t.role}</p>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
