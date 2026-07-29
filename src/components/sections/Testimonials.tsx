"use client";

import FadeIn from "@/components/ui/FadeIn";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

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
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 lg:py-40 max-w-7xl mx-auto px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-xl mb-20 text-center mx-auto">
        <FadeIn>
          <p className="flex items-center justify-center gap-3 mb-4">
            <span className="inline-block w-6 h-px bg-[#DC143C]" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#DC143C] font-mono">
              Client Voices
            </span>
            <span className="inline-block w-6 h-px bg-[#DC143C]" />
          </p>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h2 className="text-headline text-white">
            What clients say after we ship.
          </h2>
        </FadeIn>
      </div>

      {/* Testimonial Auto-cycling Carousel */}
      <div className="relative min-h-[300px] flex items-center justify-center">
        {/* Abstract Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full pointer-events-none">
          <div className="absolute top-0 left-10 w-32 h-32 bg-[#DC143C] rounded-full blur-[80px] opacity-10" />
          <div className="absolute bottom-0 right-10 w-40 h-40 bg-[#8B0000] rounded-full blur-[100px] opacity-20" />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 1.05 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-4xl relative z-10"
          >
            <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl p-10 lg:p-16 flex flex-col items-center text-center gap-8 relative overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              
              {/* Cyber Border on Active */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#DC143C]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#DC143C] to-transparent" />

              {/* Huge Quote Mark */}
              <div className="absolute -top-10 left-10 text-[150px] font-display font-black text-[#111111] leading-none select-none -z-10">
                &ldquo;
              </div>

              <p className="text-xl lg:text-3xl text-white font-medium leading-relaxed font-display max-w-2xl text-balance">
                "{testimonials[activeIndex].quote}"
              </p>

              <div className="flex flex-col items-center gap-4 mt-4">
                <div className="relative">
                  {/* Rotating Gradient Border */}
                  <motion.div
                    className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#8B0000] to-[#DC143C] opacity-50"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />
                  <div className="w-14 h-14 relative z-10 rounded-full bg-[#0a0a0a] flex items-center justify-center text-lg font-bold text-white border border-[#222]">
                    {testimonials[activeIndex].initials}
                  </div>
                </div>
                <div>
                  <p className="text-base font-bold text-white">{testimonials[activeIndex].author}</p>
                  <p className="text-sm text-[#888888]">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-3 mt-12">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className="group py-2 px-1 magnetic"
          >
            <div
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex ? "w-8 bg-[#DC143C]" : "w-2 bg-[#333333] group-hover:bg-[#555555]"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
