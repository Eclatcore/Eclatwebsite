"use client";
import { motion } from "framer-motion";

const industries = [
  "Restaurantes",
  "Real Estate", 
  "Influencers",
  "Centros de Salud",
  "Abogados",
  "E-commerce",
  "Fitness",
  "Educación",
  "Tecnología",
  "Belleza",
  "Automotriz",
  "Turismo",
  "Finanzas",
  "Moda",
  "Construcción",
  "Consultoría",
  "Marketing",
  "Gastronomía",
  "Deportes",
  "Arte",
  "Música",
  "Fotografía",
  "Eventos",
  "Bienestar"
];

export default function CarruselIndustry() {
    return (
        <section className="relative w-full min-h-screen overflow-hidden">
            {/* Background dinámico */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a0b2e] to-[#2d1b69]" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6]/10 via-transparent to-[#ec4899]/10" />
                <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-[#8b5cf6]/20 to-[#a78bfa]/10 blur-3xl animate-pulse" />
                <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-[#ec4899]/15 to-[#f472b6]/8 blur-3xl animate-pulse" />
            </div>

            {/* Header flotante */}
            <div className="relative z-20 pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-8"
                >
                    <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-white mb-6">
                        <span className="bg-gradient-to-r from-[#8b5cf6] via-[#a78bfa] to-[#ec4899] bg-clip-text text-transparent animate-pulse">
                            Industrias que atendemos
                        </span>
                    </h2>
                    <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto font-medium">
                        Creamos soluciones web personalizadas para cada sector
                    </p>
                </motion.div>
            </div>

            {/* Carrusel de desbordamiento - 3 filas */}
            <div className="relative z-10 w-full">
                {/* Fila 1 - Movimiento hacia la derecha */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                    className="w-full overflow-hidden py-8"
                >
                    <div className="flex animate-scroll-right-smooth">
                        {/* Duplicamos el contenido para efecto infinito perfecto */}
                        {[...industries, ...industries].map((industry, index) => (
                            <div key={`row1-${industry}-${index}`} className="flex-shrink-0 mx-4">
                                <motion.div
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    transition={{ duration: 0.2 }}
                                    className="group relative"
                                >
                                    <div className="relative inline-flex items-center px-8 py-4 rounded-full text-lg font-bold text-white border-2 border-[#a78bfa]/40 bg-gradient-to-r from-[#8b5cf6]/20 via-[#a78bfa]/15 to-[#c084fc]/20 backdrop-blur-2xl transition-all duration-300 hover:border-[#a78bfa]/60 hover:bg-gradient-to-r hover:from-[#8b5cf6]/30 hover:via-[#a78bfa]/25 hover:to-[#c084fc]/30">
                                        <span className="relative z-10 drop-shadow-[0_2px_8px_rgba(167,139,250,0.6)]">{industry}</span>
                                        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#8b5cf6]/30 via-[#a78bfa]/25 to-[#c084fc]/30 blur-xs opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
                                        <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#8b5cf6]/20 via-[#a78bfa]/15 to-[#c084fc]/20 blur-sm opacity-60" />
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Fila 2 - Movimiento hacia la izquierda */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                    className="w-full overflow-hidden py-8"
                >
                    <div className="flex animate-scroll-left-smooth">
                        {/* Duplicamos el contenido para efecto infinito perfecto */}
                        {[...industries.slice().reverse(), ...industries.slice().reverse()].map((industry, index) => (
                            <div key={`row2-${industry}-${index}`} className="flex-shrink-0 mx-4">
                                <motion.div
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    transition={{ duration: 0.2 }}
                                    className="group relative"
                                >
                                    <div className="relative inline-flex items-center px-8 py-4 rounded-full text-lg font-bold text-white border-2 border-[#ec4899]/40 bg-gradient-to-r from-[#ec4899]/20 via-[#f472b6]/15 to-[#f97316]/20 backdrop-blur-2xl transition-all duration-300 hover:border-[#ec4899]/60 hover:bg-gradient-to-r hover:from-[#ec4899]/30 hover:via-[#f472b6]/25 hover:to-[#f97316]/30">
                                        <span className="relative z-10 drop-shadow-[0_2px_8px_rgba(236,72,153,0.6)]">{industry}</span>
                                        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ec4899]/30 via-[#f472b6]/25 to-[#f97316]/30 blur-xs opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
                                        <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#ec4899]/20 via-[#f472b6]/15 to-[#f97316]/20 blur-sm opacity-60" />
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Fila 3 - Movimiento hacia la derecha */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                    className="w-full overflow-hidden py-8"
                >
                    <div className="flex animate-scroll-right-smooth">
                        {/* Duplicamos el contenido para efecto infinito perfecto */}
                        {[...industries, ...industries].map((industry, index) => (
                            <div key={`row3-${industry}-${index}`} className="flex-shrink-0 mx-4">
                                <motion.div
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    transition={{ duration: 0.2 }}
                                    className="group relative"
                                >
                                    <div className="relative inline-flex items-center px-8 py-4 rounded-full text-lg font-bold text-white border-2 border-[#06b6d4]/40 bg-gradient-to-r from-[#06b6d4]/20 via-[#0891b2]/15 to-[#0e7490]/20 backdrop-blur-2xl transition-all duration-300 hover:border-[#06b6d4]/60 hover:bg-gradient-to-r hover:from-[#06b6d4]/30 hover:via-[#0891b2]/25 hover:to-[#0e7490]/30">
                                        <span className="relative z-10 drop-shadow-[0_2px_8px_rgba(6,182,212,0.6)]">{industry}</span>
                                        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#06b6d4]/30 via-[#0891b2]/25 to-[#0e7490]/30 blur-xs opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
                                        <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#06b6d4]/20 via-[#0891b2]/15 to-[#0e7490]/20 blur-sm opacity-60" />
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
