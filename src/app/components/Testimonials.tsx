"use client";
import { motion } from "framer-motion";
import { memo } from "react";

const testimonials = [
  {
    id: 1,
    name: "María González",
    company: "Boutique Elegance",
    role: "Directora de Marketing",
    image: "👩‍💼",
    rating: 5,
    testimonial: "Éclat transformó completamente nuestra presencia digital. En solo 3 meses aumentamos nuestras ventas online un 150%. Su enfoque estratégico y diseño excepcional superó todas nuestras expectativas.",
    results: [
      { metric: "+150%", label: "Ventas online" },
      { metric: "+200%", label: "Tráfico web" },
      { metric: "2.5x", label: "Conversiones" }
    ],
    color: "from-blue-400 to-cyan-400",
    bgColor: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: 2,
    name: "Carlos Mendoza",
    company: "TechStart Solutions",
    role: "CEO",
    image: "👨‍💻",
    rating: 5,
    testimonial: "El equipo de Éclat no solo desarrolló nuestra web, sino que nos ayudó a entender el comportamiento de nuestros usuarios. Su análisis UX/UI fue clave para nuestro crecimiento exponencial.",
    results: [
      { metric: "+300%", label: "Usuarios activos" },
      { metric: "+180%", label: "Tiempo en sitio" },
      { metric: "4.2x", label: "ROI" }
    ],
    color: "from-purple-400 to-pink-400",
    bgColor: "from-purple-500/20 to-pink-500/20"
  },
  {
    id: 3,
    name: "Ana Rodríguez",
    company: "Wellness Center",
    role: "Fundadora",
    image: "👩‍⚕️",
    rating: 5,
    testimonial: "Desde que trabajamos con Éclat, nuestra marca ha ganado una credibilidad increíble. Su diseño profesional y estrategia digital nos posicionó como líderes en nuestro sector.",
    results: [
      { metric: "+250%", label: "Citas online" },
      { metric: "+120%", label: "Reconocimiento" },
      { metric: "3.8x", label: "Leads calificados" }
    ],
    color: "from-green-400 to-emerald-400",
    bgColor: "from-green-500/20 to-emerald-500/20"
  }
];

const Testimonials = memo(function Testimonials() {
  return (
    <section id="testimonios" className="relative py-10 lg:py-20 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a0b2e]/90 to-[#2d1b69]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#8b5cf6]/5 to-transparent" />
        
        {/* Glows animados */}
        <div className="pointer-events-none absolute -top-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-[#8b5cf6]/20 to-[#a78bfa]/10 blur-3xl animate-pulse" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-[#ec4899]/15 to-[#f472b6]/10 blur-3xl animate-pulse" />
        
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
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#8b5cf6]/20 to-[#ec4899]/20 border border-white/20 backdrop-blur-sm mb-6">
            <span className="text-sm font-medium text-white/90">Casos de éxito</span>
          </div>
          
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-white mb-6">
            <span className="bg-gradient-to-r from-[#8b5cf6] via-[#a78bfa] to-[#ec4899] bg-clip-text text-transparent">
              Resultados que hablan
            </span>
          </h2>
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Nuestros clientes han experimentado transformaciones increíbles en sus negocios. 
            <span className="font-semibold"> Sus resultados son nuestra mejor carta de presentación.</span>
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card principal */}
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/20 backdrop-blur-xl backdrop-saturate-150 p-8 shadow-2xl transition-all duration-500 hover:border-white/30 hover:shadow-[0_25px_50px_-12px_rgba(139,92,246,0.4)] hover:scale-105 hover:-translate-y-2 h-full flex flex-col">
                {/* Efectos de fondo */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5" />
                <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${testimonial.bgColor}`} />
                
                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${testimonial.color} opacity-0 blur-xl group-hover:opacity-30 transition-all duration-500`} />
                
                {/* Efecto de partículas en hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-1 h-1 bg-gradient-to-r ${testimonial.color} rounded-full`}
                      style={{
                        left: `${20 + (i * 15)}%`,
                        top: `${20 + (i * 12)}%`
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
                
                <div className="relative z-10 flex flex-col h-full">
                  {/* Contenido principal */}
                  <div className="flex-1">
                    {/* Header del testimonial */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-4xl">{testimonial.image}</div>
                      <div>
                        <h3 className="font-heading text-xl text-white mb-1">
                          <span className={`bg-gradient-to-r ${testimonial.color} bg-clip-text text-transparent`}>
                            {testimonial.name}
                          </span>
                        </h3>
                        <p className="text-white/80 text-lg font-medium">{testimonial.company}</p>
                        <p className="text-white/60 text-base">{testimonial.role}</p>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + i * 0.1 }}
                          className="text-yellow-400 text-lg"
                        >
                          ⭐
                        </motion.div>
                      ))}
                    </div>

                    {/* Testimonial */}
                    <blockquote className="text-white/90 leading-relaxed mb-6 italic">
                      "{testimonial.testimonial}"
                    </blockquote>
                  </div>
                </div>

                {/* Efecto de aura alrededor de la card */}
                <div className={`absolute -inset-4 bg-gradient-to-r ${testimonial.color} opacity-0 blur-2xl group-hover:opacity-20 transition-opacity duration-500 rounded-3xl`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="text-center mt-10"
        >
          <div className="mb-6">
            <p className="text-white/80 text-lg mb-4">
              ¿Listo para ser nuestro próximo caso de éxito?
            </p>
          </div>
          
          <motion.a
            href="#contacto"
            className="group relative inline-flex items-center justify-center rounded-full px-8 py-3.5 font-semibold text-white ring-2 ring-[#a78bfa]/70 bg-gradient-to-r from-[#8b5cf6]/70 via-[#8b5cf6]/45 to-[#8b5cf6]/25 shadow-[0_12px_40px_-16px_rgba(139,92,246,0.75)] transition-all duration-300 hover:from-[#8b5cf6]/80 hover:via-[#8b5cf6]/55 hover:to-[#8b5cf6]/35 hover:shadow-[0_16px_50px_-14px_rgba(139,92,246,0.8)] hover:ring-[#a78bfa]/80 hover:scale-[1.02] active:scale-[0.98]"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 drop-shadow-[0_2px_8px_rgba(139,92,246,0.6)]">Quiero estos resultados</span>
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

export default Testimonials;
