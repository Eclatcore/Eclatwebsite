"use client";
import { motion } from "framer-motion";
import { memo } from "react";

const processSteps = [
  {
    id: 1,
    title: "Briefing",
    subtitle: "Conocemos tu proyecto",
    description: "Analizamos tus necesidades, objetivos y visión para crear la estrategia perfecta.",
    icon: "📋",
    color: "from-blue-400 to-cyan-400",
    bgColor: "from-blue-500/20 to-cyan-500/20",
    glowColor: "from-blue-400/30 to-cyan-400/30"
  },
  {
    id: 2,
    title: "Diseño",
    subtitle: "Diseñamos tu página",
    description: "Creamos el diseño perfecto basado en tus necesidades y la identidad de tu marca.",
    icon: "🎨",
    color: "from-purple-400 to-pink-400",
    bgColor: "from-purple-500/20 to-pink-500/20",
    glowColor: "from-purple-400/30 to-pink-400/30"
  },
  {
    id: 3,
    title: "Desarrollo",
    subtitle: "Desarrollamos tu web",
    description: "Una vez aprobado el diseño, lo convertimos en una web funcional y optimizada.",
    icon: "⚡",
    color: "from-green-400 to-emerald-400",
    bgColor: "from-green-500/20 to-emerald-500/20",
    glowColor: "from-green-400/30 to-emerald-400/30"
  },
  {
    id: 4,
    title: "Entrega",
    subtitle: "Revisión y ajustes",
    description: "Nos reunimos contigo para aprobar el desarrollo y realizar los ajustes necesarios.",
    icon: "🚀",
    color: "from-orange-400 to-red-400",
    bgColor: "from-orange-500/20 to-red-500/20",
    glowColor: "from-orange-400/30 to-red-400/30"
  }
];

const ProcessTimeline = memo(function ProcessTimeline() {
  return (
    <section id="proceso" className="relative py-20 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a0b2e]/80 to-[#2d1b69]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#8b5cf6]/5 to-transparent" />
        
        {/* Glows animados */}
        <div className="pointer-events-none absolute -top-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-[#8b5cf6]/30 to-[#a78bfa]/15 blur-3xl animate-pulse" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-[#ec4899]/25 to-[#f472b6]/15 blur-3xl animate-pulse" />
        
        {/* Patrón de puntos */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(139,92,246,0.1)_1px,transparent_1px),radial-gradient(circle_at_75%_75%,rgba(236,72,153,0.1)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-white mb-6">
            <span className="bg-gradient-to-r from-[#8b5cf6] via-[#a78bfa] to-[#ec4899] bg-clip-text text-transparent">
              Nuestro proceso
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Te acompañamos en cada paso del desarrollo de tu proyecto web
          </p>
        </motion.div>

        {/* Timeline horizontal */}
        <div className="relative">
          {/* Línea horizontal principal con efectos */}
          <div className="absolute top-1/2 left-0 right-0 h-3 bg-gradient-to-r from-blue-400/30 via-purple-400/25 to-orange-400/30 transform -translate-y-1/2 hidden md:block rounded-full">
            {/* Efecto de brillo animado */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/50 via-purple-400/40 to-orange-400/50 rounded-full animate-pulse" />
            {/* Partículas flotantes */}
            <div className="absolute inset-0">
              {[...Array(6)].map((_, i) => {
                const colors = ['bg-blue-400', 'bg-purple-400', 'bg-green-400', 'bg-orange-400', 'bg-cyan-400', 'bg-pink-400'];
                return (
                  <motion.div
                    key={i}
                    className={`absolute w-2 h-2 ${colors[i]} rounded-full shadow-lg`}
                    style={{
                      left: `${(i + 1) * 16.66}%`,
                      top: '50%',
                      transform: 'translateY(-50%)'
                    }}
                    animate={{
                      y: [-3, 3, -3],
                      opacity: [0.6, 1, 0.6],
                      scale: [0.8, 1.2, 0.8]
                    }}
                    transition={{
                      duration: 2 + i * 0.3,
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                  />
                );
              })}
            </div>
          </div>
          
          {/* Pasos de la timeline */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                className="relative group"
              >
                {/* Card del paso con efectos mejorados */}
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/20 backdrop-blur-xl backdrop-saturate-150 p-6 md:p-8 shadow-2xl transition-all duration-500 hover:border-white/30 hover:shadow-[0_25px_50px_-12px_rgba(139,92,246,0.4)] hover:scale-105 hover:-translate-y-2">
                  {/* Efectos de fondo mejorados */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5" />
                  
                  {/* Patrón de fondo único para cada paso */}
                  <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${step.bgColor}`} />
                  
                  {/* Glow effect mejorado */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${step.color} opacity-0 blur-xl group-hover:opacity-30 transition-all duration-500`} />
                  
                  {/* Efecto de partículas en hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-1 h-1 bg-gradient-to-r ${step.color} rounded-full`}
                        style={{
                          left: `${20 + (i * 10)}%`,
                          top: `${20 + (i * 8)}%`
                        }}
                        animate={{
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.1
                        }}
                      />
                    ))}
                  </div>
                  
                  <div className="relative z-10 text-center">
                    {/* Icono con efectos mejorados */}
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${step.color} mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 relative`}>
                      {/* Efecto de pulso */}
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${step.color} opacity-30 animate-ping`} />
                      <span className="text-3xl relative z-10">{step.icon}</span>
                    </div>
                    
                    {/* Número del paso con efectos */}
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/20 mb-4 group-hover:bg-white/20 transition-all duration-300 relative">
                      {/* Efecto de brillo */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="text-white font-bold text-sm relative z-10">{step.id}</span>
                    </div>
                    
                    {/* Contenido con efectos de texto */}
                    <h3 className="font-heading text-xl md:text-2xl text-white mb-3 group-hover:scale-105 transition-transform duration-300">
                      <span className={`bg-gradient-to-r ${step.color} bg-clip-text text-transparent group-hover:drop-shadow-lg`}>
                        {step.title}
                      </span>
                    </h3>
                    
                    <p className="text-base md:text-lg text-white/90 mb-3 font-medium group-hover:text-white transition-colors duration-300">
                      {step.subtitle}
                    </p>
                    
                    <p className="text-sm md:text-base text-white/70 leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Conector horizontal mejorado (solo en desktop) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute -right-2 top-1/2 transform -translate-y-1/2 w-6 h-1 bg-gradient-to-r from-white/40 to-transparent rounded-full">
                    {/* Efecto de brillo en el conector */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/60 to-transparent rounded-full animate-pulse" />
                  </div>
                )}

                {/* Conector vertical mejorado (solo en móvil) */}
                {index < processSteps.length - 1 && (
                  <div className="md:hidden absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-1 h-10 bg-gradient-to-b from-white/40 to-transparent rounded-full">
                    {/* Efecto de brillo en el conector vertical */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-transparent rounded-full animate-pulse" />
                  </div>
                )}

                {/* Efecto de aura alrededor de la card */}
                <div className={`absolute -inset-4 bg-gradient-to-r ${step.glowColor} opacity-0 blur-2xl group-hover:opacity-30 transition-opacity duration-500 rounded-3xl`} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#contacto"
            className="group relative inline-flex items-center justify-center rounded-full px-8 py-3.5 font-semibold text-white ring-2 ring-[#a78bfa]/70 bg-gradient-to-r from-[#8b5cf6]/70 via-[#8b5cf6]/45 to-[#8b5cf6]/25 shadow-[0_12px_40px_-16px_rgba(139,92,246,0.75)] transition-all duration-300 hover:from-[#8b5cf6]/80 hover:via-[#8b5cf6]/55 hover:to-[#8b5cf6]/35 hover:shadow-[0_16px_50px_-14px_rgba(139,92,246,0.8)] hover:ring-[#a78bfa]/80 hover:scale-[1.02] active:scale-[0.98]"
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

export default ProcessTimeline;
