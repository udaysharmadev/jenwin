"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  hoverOnly?: boolean;
}

export default function GlitchText({ text, className = "", as = "span", hoverOnly = false }: GlitchTextProps) {
  const [isHovered, setIsHovered] = useState(false);
  const Tag = as as any;
  
  const showGlitch = !hoverOnly || isHovered;

  return (
    <Tag 
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className={showGlitch ? "opacity-0" : "opacity-100"}>{text}</span>
      
      {showGlitch && (
        <motion.span 
          className="absolute top-0 left-0 w-full h-full text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {/* Base text */}
          <span className="relative z-10">{text}</span>
          
          {/* Glitch layer 1 (Red) */}
          <motion.span 
            className="absolute top-0 left-0 w-full h-full text-[#DC143C] z-0 mix-blend-screen"
            animate={{ 
              x: [-2, 2, -1, 3, -2],
              y: [1, -1, 2, -1, 1],
              opacity: [0.8, 1, 0.6, 0.9, 0.8]
            }}
            transition={{ 
              duration: 0.2, 
              repeat: Infinity, 
              repeatType: "mirror" 
            }}
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)" }}
          >
            {text}
          </motion.span>
          
          {/* Glitch layer 2 (Cyan/Blue) */}
          <motion.span 
            className="absolute top-0 left-0 w-full h-full text-[#0ff] z-0 mix-blend-screen"
            animate={{ 
              x: [2, -2, 1, -3, 2],
              y: [-1, 1, -2, 1, -1],
              opacity: [0.8, 1, 0.6, 0.9, 0.8]
            }}
            transition={{ 
              duration: 0.25, 
              repeat: Infinity, 
              repeatType: "mirror" 
            }}
            style={{ clipPath: "polygon(0 80%, 100% 20%, 100% 100%, 0 100%)" }}
          >
            {text}
          </motion.span>
        </motion.span>
      )}
    </Tag>
  );
}
