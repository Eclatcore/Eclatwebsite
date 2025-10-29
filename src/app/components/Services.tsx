"use client";
import { motion } from "framer-motion";
import CardService from "./ui/CardService";

export default function Services() {
  return (
    <section id="servicios" className="relative min-h-[100vh] w-full overflow-hidden">
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
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-10 lg:py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-white mb-6">
            <span className="bg-gradient-to-r from-[#8b5cf6] via-[#a78bfa] to-[#ec4899] bg-clip-text text-transparent">
              Nuestros tres pilares
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Éclat nace de la unión entre el diseño de experiencia, la ingeniería web y la psicología del usuario.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          <CardService
            title="Diseño web basado en evidencia"
            description="Análisis exhaustivo de tus potenciales clientes. Diseñamos tu web con estrategias probadas para generar resultados."
            delay={0}
            icon={
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
              </svg>
            }
          />
          <CardService
            title="Desarrollo web profesional"
            description="Cuando desarrollamos nos aseguramos que sea una web: limpia, segura, escalable y con un rendimiento optimizado para buscadores y usuarios."
            delay={0.1}
            icon={
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            }
          />
          <CardService
            title="Estrategia de crecimiento digital"
            description="Lo que define si una web triunfa o no es su analisis previo, por eso, cada proyecto parte de un diagnóstico real y una visión orientada a la rentabilidad."
            delay={0.2}
            icon={
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
}
