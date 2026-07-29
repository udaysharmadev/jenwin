"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface HolographicCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export default function HolographicCard({ 
  children, 
  className = "",
  glowColor = "rgba(220, 20, 60, 0.15)"
}: HolographicCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [5, -5]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-5, 5]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        mouseX.set(0.5);
        mouseY.set(0.5);
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative perspective-1000 ${className}`}
    >
      <div 
        className="w-full h-full rounded-sm border border-[#1e1e1e] bg-[#0a0a0a] overflow-hidden transition-colors duration-300 relative z-10"
        style={{ transform: "translateZ(0)" }}
      >
        {children}
        
        {/* Holographic overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none z-20 mix-blend-overlay opacity-0"
          animate={{ opacity: isHovered ? 1 : 0 }}
          style={{
            background: `radial-gradient(circle at ${mouseX.get() * 100}% ${mouseY.get() * 100}%, ${glowColor}, transparent 60%)`,
          }}
        />
        
        {/* Shimmer effect line */}
        <motion.div
          className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.1)] to-transparent skew-x-[-20deg] pointer-events-none z-30"
          animate={isHovered ? { left: "200%" } : { left: "-100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </div>
      
      {/* Behind glow */}
      <motion.div
        className="absolute inset-0 rounded-sm z-0 blur-xl transition-opacity duration-300"
        style={{
          background: glowColor,
          opacity: isHovered ? 1 : 0,
          transform: "translateZ(-10px) scale(0.95)"
        }}
      />
    </motion.div>
  );
}
