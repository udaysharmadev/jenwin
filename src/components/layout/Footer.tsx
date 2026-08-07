"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const footerLinks = {
  Company: [
    { label: "About", href: "/about" },
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "Website Development", href: "/services#websites" },
    { label: "Web App Development", href: "/services#webapps" },
    { label: "MVP Development", href: "/services#mvp" },
    { label: "UI Engineering", href: "/services#ui" },
    { label: "AI Workflows", href: "/services#ai" },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#030303] relative border-t border-[#111]">
      
      {/* Animated gradient border top */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#DC143C] to-transparent opacity-30" />
      <motion.div 
        className="absolute top-0 left-0 h-[1px] w-1/3 bg-gradient-to-r from-transparent via-[#FF0040] to-transparent shadow-[0_0_15px_#FF0040]"
        animate={{ x: ["-100%", "300%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6 magnetic">
              <Image
                src="/jenwin-logo.png"
                alt="Jenwin"
                width={140}
                height={44}
                style={{ mixBlendMode: "screen", objectFit: "contain" }}
              />
            </Link>
            <p className="text-[#888888] text-sm leading-relaxed max-w-xs">
              Engineering, product thinking, and design discipline. Built for founders who care about craft.
            </p>
            <div className="flex flex-wrap items-center gap-6 mt-8">
              <a
                href="mailto:hello@jenw.in"
                className="text-sm font-bold text-white hover:text-[#DC143C] transition-colors duration-300 flex items-center gap-1 group magnetic"
              >
                hello@jenw.in
                <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="https://wa.me/919560835836"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-[#25D366] hover:text-[#1ebd5a] transition-colors duration-300 flex items-center gap-1.5 group magnetic"
              >
                <MessageCircle size={15} />
                WhatsApp Us
                <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p className="text-xs font-bold font-mono uppercase tracking-widest text-[#555555] mb-6">
                {group}
              </p>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#888888] hover:text-white transition-colors duration-300 relative group magnetic inline-block"
                    >
                      {link.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#DC143C] transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#111111] max-w-7xl mx-auto px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs font-mono text-[#555555]">
          © {year} Jenwin Technologies · All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          <p className="text-xs font-mono text-[#555555]">
            Made in India
          </p>
          {/* Animated Flag/Dot */}
          <motion.div 
            className="w-1.5 h-1.5 rounded-full bg-[#DC143C]"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </div>
    </footer>
  );
}
