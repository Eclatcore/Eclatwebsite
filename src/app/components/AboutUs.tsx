"use client";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section
      id="nosotros"
      className="relative min-h-[100vh] w-full overflow-hidden flex flex-col items-center justify-center px-6"
    >
      {/* Video de fondo */}
      <video
        className="absolute inset-0 h-full w-full object-cover z-0"
        src="/videos/bg-aboutus.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
      />

      {/* Capa negra encima del video */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/70 to-black/70 z-10" />

      {/* Bloque 1: Título gigante e introducción */}
      <div className="relative z-30 flex mb-10 w-full justify-start text-left max-w-7xl px-4">
        <div
          className="max-w-4xl text-white"
        >
          {/* H2: entra desde abajo con fade + blur suave al entrar en viewport */}
          <motion.h2
            initial={{ y: 40, opacity: 0, filter: "blur(6px)" }}
            whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="will-change-[opacity,transform,filter] font-heading text-5xl md:text-7xl lg:text-7xl leading-[1.05] tracking-tight"
          >
            <span className="relative inline-block group">
              <span className="bg-gradient-to-r from-[#8b5cf6] via-[#a78bfa] to-[#a78bfa] bg-clip-text text-transparent drop-shadow-[0_6px_30px_rgba(139,92,246,0.35)]">
                Diseñamos marcas y productos digitales que brillan y convierten
              </span>
            </span>
          </motion.h2>

          <p className="mt-6 text-lg md:text-xl text-white/85 w-[90%]">
            Somos un estudio digital que combina estrategia, diseño y tecnología para impulsar
            el crecimiento de empresas ambiciosas. Construimos experiencias memorables enfocadas
            en resultados medibles y crecimiento sostenido.
          </p>
        </div>
      </div>

      {/* Bloque 2: Más detalles, aparece al hacer scroll */}
      <div className="relative z-30 mx-auto w-full max-w-7xl px-4">
        <motion.div
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-8 md:grid-cols-2"
        >
          <div
            className="rounded-2xl border border-white/15 p-6 text-white"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
            }}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8b5cf6]/20 to-[#a78bfa]/10 border border-white/20 flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-heading text-2xl md:text-3xl">Estrategia primero</h3>
            </div>
            <p className="text-white/85">
              Definimos objetivos claros, público y propuesta de valor. Cada decisión de diseño y
              tecnología se alinea con un objetivo de negocio.
            </p>
          </div>
          <div
            className="rounded-2xl border border-white/15 p-6 text-white"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
            }}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8b5cf6]/20 to-[#a78bfa]/10 border border-white/20 flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-heading text-2xl md:text-3xl">Ejecución precisa</h3>
            </div>
            <p className="text-white/85">
              Implementamos sitios rápidos, accesibles y SEO-ready, con branding coherente y
              experiencias cuidando cada detalle.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
