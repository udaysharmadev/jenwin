import FadeIn from "@/components/ui/FadeIn";

const differentiators = [
  {
    number: "01",
    title: "Strategy Before Screens",
    description:
      "We start with the problem, not the palette. Every project begins with a clear understanding of business goals, user needs, and the constraints that define a great solution.",
  },
  {
    number: "02",
    title: "Design With Restraint",
    description:
      "Good design is invisible. We apply visual discipline that serves clarity — not decoration. Every element earns its place.",
  },
  {
    number: "03",
    title: "Code With Maintainability",
    description:
      "We write code you can own. Clean architecture, documented decisions, and a codebase your team can build on long after we're done.",
  },
  {
    number: "04",
    title: "Delivery With Accountability",
    description:
      "We ship on time, communicate clearly, and treat your project with the same urgency we'd want for our own. No surprises.",
  },
];

export default function WhyJenwin() {
  return (
    <section className="py-24 lg:py-32 max-w-7xl mx-auto px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-2xl mb-16">
        <FadeIn>
          <p className="flex items-center gap-3 mb-4">
            <span className="inline-block w-6 h-px bg-[#D81B60]" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D81B60]">
              Why Jenwin
            </span>
          </p>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h2 className="text-headline text-white">
            Sharp taste.<br />Clean code.<br />Real accountability.
          </h2>
        </FadeIn>
      </div>

      {/* Differentiators */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#141414] border border-[#141414] rounded-sm overflow-hidden">
        {differentiators.map((item, i) => (
          <FadeIn key={item.number} delay={i * 0.08}>
            <div className="bg-[#0a0a0a] p-8 lg:p-10 flex flex-col gap-4 h-full group hover:bg-[#0d0d0d] transition-colors duration-200">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-bold text-[#333333] tracking-widest font-mono">
                  {item.number}
                </span>
                <span className="flex-1 h-px bg-[#1a1a1a]" />
              </div>
              <h3 className="text-base font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-[#666666] leading-relaxed">{item.description}</p>
              <div className="mt-auto pt-4">
                <div
                  className="h-px w-0 bg-[#D81B60] transition-all duration-500 group-hover:w-full"
                  style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
                />
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
