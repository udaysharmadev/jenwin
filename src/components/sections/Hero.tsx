"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background glow orbs */}
      <div
        className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(216,27,96,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
          transform: "translateY(-30%)",
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(216,27,96,0.07) 0%, transparent 70%)",
          filter: "blur(60px)",
          transform: "translateY(30%)",
        }}
      />

      {/* Fine grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="inline-block w-8 h-px bg-[#D81B60]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D81B60]">
              Development Agency
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-display text-white mb-6"
          >
            Built to perform.{" "}
            <span className="text-ruby-gradient">Designed</span> to last.
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg lg:text-xl text-[#888888] max-w-2xl leading-relaxed mb-10"
          >
            We blend engineering precision, product thinking, and design discipline to build digital experiences that feel sharp, scale clean, and ship on time.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#D81B60] text-white text-sm font-semibold rounded-sm hover:bg-[#b01550] hover:shadow-[0_0_28px_rgba(216,27,96,0.45)] transition-all duration-200 active:scale-[0.98]"
            >
              Start a Project
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 px-7 py-3.5 border border-[#2a2a2a] text-sm font-semibold text-[#aaaaaa] rounded-sm hover:border-[#444444] hover:text-white transition-all duration-200 active:scale-[0.98]"
            >
              View Work
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>

        {/* Floating proof strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 lg:mt-28 grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#1a1a1a] rounded-sm overflow-hidden border border-[#1a1a1a]"
        >
          {[
            { value: "50+", label: "Projects Delivered" },
            { value: "< 8 wk", label: "Avg. MVP Timeline" },
            { value: "100%", label: "On-time Delivery" },
            { value: "5★", label: "Client Satisfaction" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-[#0d0d0d] px-6 py-5 flex flex-col gap-1"
            >
              <span className="text-2xl font-bold text-white tracking-tight">{stat.value}</span>
              <span className="text-xs text-[#555555] tracking-wide">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #080808)",
        }}
      />
    </section>
  );
}
