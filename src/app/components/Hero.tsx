"use client";
import { motion } from "framer-motion";
import { memo } from "react";
import dynamic from "next/dynamic";

const Glass = dynamic(() => import("./ui/Glass"), {
  ssr: false,
  loading: () => <div className="w-full h-64 bg-black/20 rounded-2xl animate-pulse" />
});

const Hero = memo(function Hero() {
  return (
    <section className="relative h-auto w-screen flex flex-col items-center justify-center px-4 text-center overflow-hidden pt-32 pb-16">
      {/* background gradient moderno: negro → lila → fucsia con glows sutiles */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#8b5cf6]/25 to-[#ec4899]/35" />
        <div className="pointer-events-none absolute -top-40 right-[-10%] h-[60vh] w-[60vh] rounded-full bg-[#a855f7]/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 left-[-10%] h-[50vh] w-[50vh] rounded-full bg-[#ec4899]/25 blur-3xl" />
      </div>
      {/* contenido */}
      <div className="relative z-10">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-heading text-4xl md:text-5xl lg:text-7xl leading-tight tracking-tight text-white"
        >
          <span className="block">Diseño y desarrollo web estratégico</span>
          <span className="bg-gradient-to-r from-primary via-primary/100 to-secondary bg-clip-text text-transparent">
          para negocios que buscan crecer
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="mt-6 mb-8 max-w-2xl font-body text-lg text-white/80 mx-auto"
        >
          En Éclat combinamos diseño UX/UI, desarrollo web y visión de negocio para crear experiencias digitales que generan impacto y resultados sostenibles.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contacto"
            className="group relative inline-flex items-center justify-center rounded-full px-8 py-3.5 font-semibold text-white ring-2 ring-[#a78bfa]/70 bg-gradient-to-r from-[#8b5cf6]/70 via-[#8b5cf6]/45 to-[#8b5cf6]/25 shadow-[0_12px_40px_-16px_rgba(139,92,246,0.75)] transition-all duration-300 hover:from-[#8b5cf6]/80 hover:via-[#8b5cf6]/55 hover:to-[#8b5cf6]/35 hover:shadow-[0_16px_50px_-14px_rgba(139,92,246,0.8)] hover:ring-[#a78bfa]/80 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="relative z-10 drop-shadow-[0_2px_8px_rgba(139,92,246,0.6)]">Impulsar mi negocio</span>
            <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute -left-10 top-0 h-full w-10 translate-x-0 skew-x-[-20deg] bg-[#8b5cf6]/60 blur-md opacity-0 transition-transform duration-700 ease-out group-hover:translate-x-[140%] group-hover:opacity-70"></span>
              {/* outer glow (idle fuerte, hover más intenso) */}
              <span className="absolute -inset-1 rounded-full bg-[#8b5cf6]/30 blur-2xl opacity-100 transition-opacity duration-300 group-hover:bg-[#8b5cf6]/40" />
            </span>
          </a>
          <a className="btn-ghost px-16 mt-2 lg:mt-0" href="#planes">
            Ver planes
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="mt-8 w-full flex justify-center"
        >
          <Glass type="video" src="/videos/hero-video-web.mp4" />
          {/* o con video:
        <GlassBox type="video" src="/media/demo.mp4" poster="/media/poster.jpg" />
        */}
        </motion.div>
      </div>

    </section>
  );
});

export default Hero;