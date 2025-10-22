"use client";
import { motion } from "framer-motion";
import { memo } from "react";

const timelineSteps = [
  {
    id: 1,
    title: "Briefing",
    description: "Conocemos tu proyecto",
    details: "Analizamos tus necesidades, objetivos y visión para crear la estrategia perfecta.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Diseño",
    description: "Diseñamos tu página",
    details: "Creamos el diseño perfecto basado en tus necesidades y la identidad de tu marca.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Desarrollo",
    description: "Desarrollamos tu web",
    details: "Una vez aprobado el diseño, lo convertimos en una web funcional y optimizada.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    id: 4,
    title: "Entrega",
    description: "Revisión y ajustes",
    details: "Nos reunimos contigo para aprobar el desarrollo y realizar los ajustes necesarios.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

const Timeline = memo(function Timeline() {
  return (
    <section id="proceso" className="relative min-h-[100vh] w-full overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Background con continuidad desde Services */}
      <div className="absolute inset-0 -z-10">
        {/* Gradiente sutil y elegante */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a]/80 via-[#1a0b2e]/60 to-[#2d1b69]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#8b5cf6]/5 to-transparent" />
        
        {/* Glows animados sutiles */}
        <div className="pointer-events-none absolute -top-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-[#8b5cf6]/40 to-[#a78bfa]/20 blur-3xl animate-pulse" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-[#ec4899]/35 to-[#f472b6]/20 blur-3xl animate-pulse" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-60 w-60 rounded-full bg-gradient-to-br from-[#a78bfa]/20 to-[#ec4899]/15 blur-2xl animate-pulse" />
        
        {/* Patrón de puntos sutil */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(139,92,246,0.1)_1px,transparent_1px),radial-gradient(circle_at_75%_75%,rgba(236,72,153,0.1)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30" />
        
        {/* Viñeta para enfoque */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_30%,rgba(0,0,0,0.3)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight tracking-tight text-white mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-[#8b5cf6] via-[#a78bfa] to-[#ec4899] bg-clip-text text-transparent">
              Nuestro proceso
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            Te acompañamos en cada paso del desarrollo de tu proyecto web
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Línea central */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#8b5cf6]/30 via-[#a78bfa]/20 to-[#ec4899]/30 rounded-full hidden lg:block" />
          
          {/* Pasos de la timeline */}
          <div className="space-y-8 lg:space-y-16">
            {timelineSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                className={`relative flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-6 lg:gap-12`}
              >
                {/* Contenido del paso */}
                <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-black/20 backdrop-blur-xl backdrop-saturate-150 p-6 sm:p-8 shadow-2xl transition-all duration-500 hover:border-white/20 hover:shadow-[0_25px_50px_-12px_rgba(139,92,246,0.3)]">
                    {/* Efectos de fondo glass */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5" />
                    
                    <div className="relative z-10">
                      {/* Número del paso */}
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#8b5cf6]/20 to-[#a78bfa]/10 border border-white/20 mb-4 sm:mb-6">
                        <span className="text-white font-bold text-lg">{step.id}</span>
                      </div>
                      
                      {/* Título y descripción */}
                      <h3 className="font-heading text-2xl sm:text-3xl text-white mb-2 sm:mb-3">
                        <span className="bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] bg-clip-text text-transparent">
                          {step.title}
                        </span>
                      </h3>
                      
                      <p className="text-lg sm:text-xl text-white/90 mb-3 sm:mb-4 font-medium">
                        {step.description}
                      </p>
                      
                      <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                        {step.details}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Icono central (solo en desktop) */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-r from-[#8b5cf6]/30 to-[#a78bfa]/20 border-2 border-white/20 backdrop-blur-xl items-center justify-center shadow-2xl">
                  <div className="text-white">
                    {step.icon}
                  </div>
                </div>

                {/* Espacio para el icono en móvil */}
                <div className="lg:hidden flex w-12 h-12 rounded-full bg-gradient-to-r from-[#8b5cf6]/30 to-[#a78bfa]/20 border border-white/20 backdrop-blur-xl items-center justify-center shadow-lg">
                  <div className="text-white">
                    {step.icon}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="text-center mt-12 sm:mt-16"
        >
          <motion.a
            href="#contacto"
            className="group relative inline-flex items-center justify-center rounded-full px-6 sm:px-8 py-3 sm:py-3.5 font-semibold text-white ring-2 ring-[#a78bfa]/70 bg-gradient-to-r from-[#8b5cf6]/70 via-[#8b5cf6]/45 to-[#8b5cf6]/25 shadow-[0_12px_40px_-16px_rgba(139,92,246,0.75)] transition-all duration-300 hover:from-[#8b5cf6]/80 hover:via-[#8b5cf6]/55 hover:to-[#8b5cf6]/35 hover:shadow-[0_16px_50px_-14px_rgba(139,92,246,0.8)] hover:ring-[#a78bfa]/80 hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 drop-shadow-[0_2px_8px_rgba(139,92,246,0.6)]">Comenzar mi proyecto</span>
            <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute -left-10 top-0 h-full w-10 translate-x-0 skew-x-[-20deg] bg-[#8b5cf6]/60 blur-md opacity-0 transition-transform duration-700 ease-out group-hover:translate-x-[140%] group-hover:opacity-70"></span>
              <span className="absolute -inset-1 rounded-full bg-[#8b5cf6]/30 blur-2xl opacity-100 transition-opacity duration-300 group-hover:bg-[#8b5cf6]/40" />
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
});

export default Timeline;

