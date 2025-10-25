"use client";
import { motion } from "framer-motion";
import { memo } from "react";

const reasons = [
  {
    id: 1,
    title: "Experiencia Comprobada",
    description: "Años de experiencia creando webs exitosas",
    details: "Hemos desarrollado más de 100 proyectos web que han impulsado el crecimiento de nuestros clientes.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Diseño Personalizado",
    description: "Cada proyecto es único y a medida",
    details: "No usamos plantillas. Cada web está diseñada específicamente para tu negocio y objetivos.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Tecnología Moderna",
    description: "Las últimas tecnologías web",
    details: "Utilizamos las tecnologías más avanzadas para garantizar velocidad, seguridad y escalabilidad.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: 4,
    title: "Soporte Continuo",
    description: "Te acompañamos siempre",
    details: "No te dejamos solo. Ofrecemos soporte técnico y mantenimiento continuo para tu web.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
      </svg>
    )
  },
  {
    id: 5,
    title: "Precios Transparentes",
    description: "Sin costes ocultos ni sorpresas",
    details: "Precios claros desde el inicio. No hay costes adicionales inesperados en tu proyecto.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
      </svg>
    )
  },
  {
    id: 6,
    title: "Entrega Rápida",
    description: "Tu web lista en tiempo récord",
    details: "Procesos optimizados que nos permiten entregar tu proyecto web en plazos cortos sin comprometer la calidad.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

const WhyChooseUs = memo(function WhyChooseUs() {
  return (
    <section id="por-que-elegirnos" className="relative min-h-[100vh] w-full overflow-hidden py-10 sm:py-20 lg:py-24">
      {/* Background original y único */}
      <div className="absolute inset-0 -z-10">
        {/* Gradiente base con patrón geométrico */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a0b2e] to-[#2d1b69]" />
        
        {/* Patrón de líneas diagonales animadas */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_0%,rgba(139,92,246,0.1)_25%,transparent_50%,rgba(236,72,153,0.1)_75%,transparent_100%)] bg-[length:100px_100px] animate-pulse" />
        </div>
        
        
        {/* Patrón de hexágonos sutiles */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.1)_2px,transparent_2px),radial-gradient(circle_at_80%_80%,rgba(236,72,153,0.1)_2px,transparent_2px)] bg-[size:80px_80px]" />
        </div>
        
        {/* Overlay de profundidad */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight tracking-tight text-white mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-[#8b5cf6] via-[#a78bfa] to-[#ec4899] bg-clip-text text-transparent">
              ¿Por qué elegirnos?
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            Descubre las ventajas que nos hacen la mejor opción para tu proyecto web
          </p>
        </motion.div>

        {/* Grid de razones con diseño único */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0}}
              whileInView={{ opacity: 1}}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-black/30 via-[#1a0b2e]/20 to-black/40 backdrop-blur-2xl backdrop-saturate-150 p-6 sm:p-8 shadow-2xl transition-all duration-700 hover:border-[#8b5cf6]/30 hover:shadow-[0_25px_50px_-12px_rgba(139,92,246,0.4)] hover:scale-[1.03] hover:rotate-1"
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              {/* Efectos de fondo únicos */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              
              {/* Patrón geométrico único por card */}
              <div className={`absolute inset-0 opacity-10 ${
                index % 3 === 0 ? 'bg-[radial-gradient(circle_at_30%_30%,rgba(139,92,246,0.2)_1px,transparent_1px)] bg-[size:40px_40px]' :
                index % 3 === 1 ? 'bg-[linear-gradient(30deg,transparent_0%,rgba(236,72,153,0.1)_50%,transparent_100%)] bg-[size:60px_60px]' :
                'bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(167,139,250,0.1)_90deg,transparent_180deg)] bg-[size:50px_50px]'
              }`} />
              
              {/* Efectos de hover únicos */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6]/5 via-transparent to-[#a78bfa]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Borde animado */}
              <div className="absolute inset-0 rounded-3xl border border-transparent bg-gradient-to-r from-[#8b5cf6]/20 via-[#a78bfa]/10 to-[#ec4899]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'xor' }} />
              
              <div className="relative z-10">
                {/* Icono con efecto 3D */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8b5cf6]/30 to-[#a78bfa]/20 border border-white/20 mb-4 sm:mb-6 group-hover:from-[#8b5cf6]/40 group-hover:to-[#a78bfa]/30 transition-all duration-500 shadow-lg group-hover:shadow-[0_10px_30px_rgba(139,92,246,0.3)] group-hover:scale-110">
                  <div className="text-white group-hover:text-[#a78bfa] transition-colors duration-500 group-hover:rotate-12">
                    {reason.icon}
                  </div>
                </div>
                
                {/* Título con efecto especial */}
                <h3 className="font-heading text-xl sm:text-2xl text-white mb-2 sm:mb-3 group-hover:scale-105 transition-transform duration-300">
                  <span className="bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] bg-clip-text text-transparent group-hover:from-[#a78bfa] group-hover:to-[#ec4899] transition-all duration-500">
                    {reason.title}
                  </span>
                </h3>
                
                {/* Descripción */}
                <p className="text-lg sm:text-xl text-white/90 mb-3 sm:mb-4 font-medium group-hover:text-white transition-colors duration-300">
                  {reason.description}
                </p>
                
                {/* Detalles */}
                <p className="text-sm sm:text-base text-white/70 leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  {reason.details}
                </p>
              </div>

              {/* Efectos de borde glass mejorados */}
              <div className="absolute inset-0 rounded-3xl border border-white/5 bg-gradient-to-r from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Partículas flotantes en hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute top-4 left-4 w-2 h-2 bg-[#8b5cf6]/60 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
                <div className="absolute top-8 right-6 w-1 h-1 bg-[#a78bfa]/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-[#ec4899]/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute bottom-4 right-4 w-1 h-1 bg-[#c084fc]/60 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
          className="text-center mt-12 sm:mt-16"
        >
          <motion.a
            href="#contacto"
            className="group relative inline-flex items-center justify-center rounded-full px-6 sm:px-8 py-3 sm:py-3.5 font-semibold text-white ring-2 ring-[#a78bfa]/70 bg-gradient-to-r from-[#8b5cf6]/70 via-[#8b5cf6]/45 to-[#8b5cf6]/25 shadow-[0_12px_40px_-16px_rgba(139,92,246,0.75)] transition-all duration-300 hover:from-[#8b5cf6]/80 hover:via-[#8b5cf6]/55 hover:to-[#8b5cf6]/35 hover:shadow-[0_16px_50px_-14px_rgba(139,92,246,0.8)] hover:ring-[#a78bfa]/80 hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 drop-shadow-[0_2px_8px_rgba(139,92,246,0.6)]">Trabajar con nosotros</span>
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

export default WhyChooseUs;
