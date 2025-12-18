"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import CardService from "./ui/CardService";

export default function Services() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return (
    <section id="servicios" className="relative w-full overflow-hidden">
      {/* Background más vivo */}
      <div className="absolute inset-0 -z-10">
        {/* Gradiente horizontal (180 grados) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#1a0b2e] to-[#8b5cf6]/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#ec4899]/35" />

        {/* Glows animados */}
        <div className="pointer-events-none absolute -top-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-[#8b5cf6]/40 to-[#a78bfa]/20 blur-3xl animate-pulse" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-[#ec4899]/35 to-[#f472b6]/20 blur-3xl animate-pulse" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-60 w-60 rounded-full bg-gradient-to-br from-[#a78bfa]/20 to-[#ec4899]/15 blur-2xl animate-pulse" />

        {/* Patrón de puntos sutil */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(139,92,246,0.1)_1px,transparent_1px),radial-gradient(circle_at_75%_75%,rgba(236,72,153,0.1)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30" />

        {/* Viñeta para enfoque */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_30%,rgba(0,0,0,0.3)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full px-6 lg:px-20 py-10 lg:py-20">
        <motion.div
          initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-left"
        >
          <h2 className="font-heading text-3xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-white mb-6">
            <span className="bg-gradient-to-r from-[#8b5cf6] via-[#a78bfa] to-[#ec4899] bg-clip-text text-transparent">
              Nuestros tres pilares
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-white/80">
            Éclat nace de la unión entre el diseño UX/UI, la ingeniería web y la estrategia de negocio.
          </p>
        </motion.div>

        {/* Services Layout: Servicios a la izquierda (2 filas), Imagen a la derecha */}
        <div className="mt-10 lg:mt-16 grid gap-10 lg:grid-cols-2 items-start">
          {/* Columna izquierda: Servicios en grid de 2 filas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Primera fila: 2 cards en desktop, 1 columna en móvil/tablet */}
            <CardService
              title="Diseño web basado en evidencia"
              description="Diseñamos tu web para generar resultados."
              delay={0}
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              }
            />
            <CardService
              title="Desarrollo web profesional"
              description="Seguras, escalables y con un rendimiento optimizado."
              delay={0.1}
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              }
            />
            {/* Segunda fila: 1 card que ocupa 2 columnas solo en desktop */}
            <div className="col-span-1 lg:col-span-2">
              <CardService
                title="Estrategia de crecimiento digital"
                description="Cada web nace de plan orientado a rentabilidad."
                delay={0.2}
                icon={
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                }
              />
            </div>
          </div>

          {/* Columna derecha: Imagen */}
          <motion.div
            initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="relative w-full h-full min-h-[400px] lg:min-h-[600px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src="/backgrounds/servicios-img.jpg"
              alt="Servicios Éclat"
              className="w-full h-full object-cover rounded-2xl"
            />
            {/* Overlay sutil para mejor integración */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
