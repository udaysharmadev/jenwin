"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useProjectModal } from "@/components/ui/ModalContext";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [pillStyle, setPillStyle] = useState<{ left: number; width: number } | null>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const { openModal } = useProjectModal();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  function handleLinkHover(href: string) {
    const el = linkRefs.current[href];
    if (!el) return;
    const parent = el.parentElement;
    if (!parent) return;
    const parentRect = parent.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    setPillStyle({
      left: elRect.left - parentRect.left,
      width: elRect.width,
    });
    setHoveredLink(href);
  }

  return (
    <>
      <header
        className={`fixed top-4 left-0 right-0 z-50 transition-all duration-500 flex justify-center px-4`}
      >
        <motion.nav 
          className={`flex items-center justify-between h-14 px-6 rounded-full transition-all duration-500 w-full max-w-5xl ${
            scrolled 
              ? "bg-[#111111]/80 backdrop-blur-xl border border-[#1e1e1e] shadow-[0_4px_30px_rgba(0,0,0,0.5)]" 
              : "bg-transparent border border-transparent"
          }`}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0 magnetic" aria-label="Jenwin Home">
            <Image
              src="/jenwin-logo.png"
              alt="Jenwin"
              width={130}
              height={40}
              priority
              style={{ mixBlendMode: "screen", objectFit: "contain" }}
            />
          </Link>

          {/* Desktop links - Glass pill style */}
          <div className="hidden md:flex items-center relative" onMouseLeave={() => { setHoveredLink(null); setPillStyle(null); }}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              
              return (
                <a
                  key={link.href}
                  href={link.href}
                  ref={(el) => { linkRefs.current[link.href] = el; }}
                  className={`relative px-5 py-2 text-sm font-medium tracking-wide transition-colors duration-300 z-10 ${
                    isActive ? "text-white" : "text-[#888888] hover:text-white"
                  }`}
                  onMouseEnter={() => handleLinkHover(link.href)}
                >
                  {link.label}
                  
                  {/* Active dot indicator */}
                  {isActive && (
                    <motion.div 
                      layoutId="active-dot"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#DC143C]"
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                  )}
                </a>
              );
            })}
            
            {/* Hover background pill — positioned by measured link widths */}
            <AnimatePresence>
              {hoveredLink && pillStyle && (
                <motion.div
                  className="absolute inset-y-0 bg-white/5 rounded-full z-0"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: 1,
                    left: pillStyle.left,
                    width: pillStyle.width,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                />
              )}
            </AnimatePresence>
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <button
              onClick={openModal}
              className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-sm font-bold text-white rounded-md relative overflow-hidden group"
            >
              {/* Base bg */}
              <span className="absolute inset-0 bg-[#DC143C] rounded-md transition-all duration-300" />
              {/* Hover gradient */}
              <span className="absolute inset-0 bg-gradient-to-r from-[#8B0000] to-[#FF0040] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md" />
              {/* Glow */}
              <span className="absolute inset-0 rounded-md shadow-[0_0_0_0_rgba(220,20,60,0)] group-hover:shadow-[0_0_25px_rgba(220,20,60,0.5)] transition-shadow duration-300" />
              <span className="relative z-10 flex items-center gap-2 text-white">
                Start a Project
              </span>
            </button>
            
            <button
              className="md:hidden p-2 text-white magnetic relative z-[60]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <motion.div
                animate={{ rotate: mobileOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile menu - Cinematic Full Screen */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#060606] flex flex-col justify-center px-8"
          >
            {/* Background noise and scanline */}
            <div className="absolute inset-0 noise-overlay opacity-30" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(220,20,60,0.05)_51%)] bg-[length:100%_4px]" />
            
            <div className="relative z-10 flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 40, rotateX: 90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformPerspective: 1000 }}
                >
                  <Link
                    href={link.href}
                    className={`block text-6xl font-display font-bold tracking-tighter transition-colors ${
                      pathname === link.href ? "text-white" : "text-[#444] hover:text-[#DC143C]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + navLinks.length * 0.1, duration: 0.5 }}
                className="pt-12"
              >
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    openModal();
                  }}
                  className="inline-flex items-center gap-2 text-2xl font-display font-bold text-[#DC143C] hover:text-white transition-colors text-left"
                >
                  Start a Project
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
