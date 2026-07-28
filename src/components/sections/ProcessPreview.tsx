import FadeIn from "@/components/ui/FadeIn";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "We map goals, audience, constraints, and scope. Clarity before commitment.",
  },
  {
    number: "02",
    title: "Design",
    description: "Structure, content, visual language, and interaction patterns — aligned before a line of code.",
  },
  {
    number: "03",
    title: "Build",
    description: "Precision development with performance, responsiveness, and maintainability in mind.",
  },
  {
    number: "04",
    title: "Launch",
    description: "Test, refine, deploy. Clean handoff. Continued support on request.",
  },
];

export default function ProcessPreview() {
  return (
    <section className="py-24 lg:py-32 bg-[#060606] border-y border-[#111111]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-xl mb-14">
          <FadeIn>
            <p className="flex items-center gap-3 mb-4">
              <span className="inline-block w-6 h-px bg-[#D81B60]" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D81B60]">
                How We Work
              </span>
            </p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h2 className="text-headline text-white">
              A process built for clarity, not comfort.
            </h2>
          </FadeIn>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#141414] border border-[#141414] rounded-sm overflow-hidden">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.1}>
              <div className="bg-[#0a0a0a] p-7 lg:p-8 flex flex-col gap-5 h-full group hover:bg-[#0e0e0e] transition-colors duration-200">
                <div>
                  <span className="text-5xl font-bold text-[#151515] group-hover:text-[#1e1e1e] transition-colors duration-300 font-mono">
                    {step.number}
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D81B60]" />
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#555555] leading-relaxed">{step.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
