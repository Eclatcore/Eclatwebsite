"use client";
import { motion } from "framer-motion";

interface CardServiceProps {
  title: string;
  description: string;
  linkText?: string;
  linkHref?: string;
  icon?: React.ReactNode;
  delay?: number;
}

export default function CardService({
  title,
  description,
  linkText = "Saber más",
  linkHref = "#contacto",
  icon,
  delay = 0
}: CardServiceProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
      whileHover={{ y: 0}}
      className="group relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-white/8 via-white/5 to-white/3 p-8 backdrop-blur-2xl transition-all duration-500 hover:border-white/30 hover:shadow-2xl"
    >
      {/* Liquid glass background effects */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        {/* Animated gradient orbs */}
        <div className="absolute -top-20 -left-20 h-40 w-40 rounded-full bg-gradient-to-br from-[#8b5cf6]/20 to-[#a78bfa]/10 blur-2xl animate-pulse" />
        <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br from-[#ec4899]/15 to-[#f472b6]/10 blur-2xl animate-pulse" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] opacity-50" />
        
        {/* Top highlight line */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Icon with enhanced styling */}
        {icon && (
          <motion.div 
            className="mb-6 text-[#a78bfa] drop-shadow-lg"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            {icon}
          </motion.div>
        )}

        {/* Title with enhanced typography */}
        <h3 className="font-heading text-3xl text-white mb-4 drop-shadow-sm group-hover:text-[#a78bfa] transition-colors duration-300">
          {title}
        </h3>
        
        {/* Description with better spacing */}
        <p className="text-white/85 mb-8 leading-relaxed text-sm md:text-base">
          {description}
        </p>
        
        {/* Creative liquid glass button */}
        <motion.a 
          href={linkHref} 
          className="group/btn relative inline-flex items-center px-6 py-1.5 rounded-full border border-white/20 bg-gradient-to-r from-[#8b5cf6]/20 via-[#a78bfa]/15 to-[#ec4899]/20 backdrop-blur-xl transition-all duration-500 hover:border-white/40 hover:shadow-lg overflow-hidden"
          whileHover={{ y: 0 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6]/30 via-[#a78bfa]/20 to-[#ec4899]/30 opacity-0 transition-opacity duration-500 group-hover/btn:opacity-100" />
          
          {/* Shimmer effect */}
          <div className="absolute -left-10 top-0 h-full w-10 translate-x-0 skew-x-[-20deg] bg-white/30 blur-sm opacity-0 transition-all duration-700 ease-out group-hover/btn:translate-x-[200%] group-hover/btn:opacity-100" />
          
          {/* Content */}
          <span className="relative z-10 text-white/90 group-hover/btn:text-white font-medium transition-colors duration-300">
            {linkText}
          </span>
          
          
          {/* Outer glow on hover */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#8b5cf6]/20 to-[#ec4899]/20 opacity-0 blur-md transition-opacity duration-500 group-hover/btn:opacity-100" />
        </motion.a>
      </div>

      {/* Enhanced hover glow with multiple layers */}
      <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#8b5cf6]/10 via-[#a78bfa]/5 to-[#ec4899]/10 opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-100" />
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-[#8b5cf6]/20 to-[#ec4899]/20 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-60" />
    </motion.div>
  );
}
