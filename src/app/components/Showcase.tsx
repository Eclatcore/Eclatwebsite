"use client";
import { motion } from "framer-motion";
import { memo } from "react";
import dynamic from "next/dynamic";

const Glass = dynamic(() => import("./ui/Glass"), { 
  ssr: false,
  loading: () => <div className="w-full h-64 bg-black/20 rounded-2xl animate-pulse" />
});

const Showcase = memo(function Showcase() {
  return (
    <section className="relative h-auto w-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden py-10 lg:py-20">
      {/* Background con imagen y gradiente oscuro */}
      <div className="absolute inset-0 -z-10">
        {/* Imagen de fondo */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60" 
             style={{ backgroundImage: 'url(/backgrounds/bg-demo-gradient.jpg)' }} />
        
        {/* Overlay oscuro para resaltar título */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent" />
        
        {/* Formas difusas simplificadas - solo 2 para mejor rendimiento */}
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-[#ec4899]/30 to-[#f472b6]/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-1/4 left-1/4 h-72 w-72 rounded-full bg-gradient-to-br from-[#8b5cf6]/25 to-[#ec4899]/15 blur-3xl" />
        
        {/* Patrón de puntos sutil */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(139,92,246,0.1)_1px,transparent_1px),radial-gradient(circle_at_75%_75%,rgba(236,72,153,0.1)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30" />
        
        {/* Viñeta para enfoque */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_30%,rgba(0,0,0,0.3)_100%)]" />
      </div>

      {/* Contenido */}
      <div className="relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="font-heading text-4xl md:text-7xl lg:text-6xl leading-tight tracking-tight text-white"
        >
          Descubre el futuro del
          <br/>
          <span className="bg-gradient-to-r from-[#8b5cf6] via-[#a78bfa] to-[#ec4899] bg-clip-text text-transparent">
            diseño digital
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mt-4 mb-8 max-w-2xl mx-auto font-body text-lg text-white/80"
        >
          Experimenta la innovación en cada píxel. Creamos experiencias digitales que transforman ideas en realidades visuales extraordinarias.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="https://eclatcore.site/" target="_blank" rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center rounded-full px-8 py-3.5 font-semibold text-white ring-2 ring-[#a78bfa]/70 bg-gradient-to-r from-[#8b5cf6]/70 via-[#8b5cf6]/45 to-[#8b5cf6]/25 shadow-[0_12px_40px_-16px_rgba(139,92,246,0.75)] transition-all duration-300 hover:from-[#8b5cf6]/80 hover:via-[#8b5cf6]/55 hover:to-[#8b5cf6]/35 hover:shadow-[0_16px_50px_-14px_rgba(139,92,246,0.8)] hover:ring-[#a78bfa]/80 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="relative z-10 drop-shadow-[0_2px_8px_rgba(139,92,246,0.6)]">Ver web demo</span>
            <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute -left-10 top-0 h-full w-10 translate-x-0 skew-x-[-20deg] bg-[#8b5cf6]/60 blur-md opacity-0 transition-transform duration-700 ease-out group-hover:translate-x-[140%] group-hover:opacity-70"></span>
              {/* outer glow (idle fuerte, hover más intenso) */}
              <span className="absolute -inset-1 rounded-full bg-[#8b5cf6]/30 blur-2xl opacity-100 transition-opacity duration-300 group-hover:bg-[#8b5cf6]/40" />
            </span>
          </a>
          <a className="btn-ghost px-16" href="#servicios">
            Ver servicios
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-6 lg:mt-12 w-full flex justify-center"
        >
          <Glass type="video" src="/videos/hero-video-eclat.mp4" />
        </motion.div>
      </div>
    </section>
  );
});

export default Showcase;
