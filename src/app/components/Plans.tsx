"use client";
import { motion } from "framer-motion";
import PlanCard from "./ui/PlanCard";

const plansData = [
    {
        title: "Básico",
        price: "300€",
        maintenance: "Todo el sitio web + 15€/mes por mantenimiento (opcional)",
        features: [
            "Página web de 4 secciones",
            "Diseño responsive (adaptado a todos los dispositivos)",
            "SEO para aparecer en buscadores",
            "Formulario de contacto profesional",
            "Hosting 1 año incluido",
            "Regalo de bienvenida: Análisis gratuito de tu marca y asesoría de color y tipografía",
            "Informe inicial de rendimiento web"
        ],
        buttonText: "Elegir plan",
        delay: 0
    },
    {
        title: "Premium",
        price: "350€",
        maintenance: "Todo el sitio web + 25€/mes de mantenimiento por 12 meses (opcional)",
        features: [
            "Web profesional personalizada",
            "Diseño responsive (adaptado a todos los dispositivos)",
            "SEO para aparecer en buscadores",
            "Hosting 1 año incluido",
            "Mantenimiento por 12 meses",
            "Regalo: Optimización de velocidad y diseño UX mejorado",
            "Cambios ilimitados"
        ],
        buttonText: "Quiero empezar ahora",
        isPremium: true,
        delay: 0.1
    },
    {
        title: "Empresarial",
        price: "800€",
        maintenance: "+ 40€/mes por mantenimiento",
        features: [
            "Página web ilimitada",
            "Diseño premium",
            "SEO completo",
            "E-commerce básico",
            "Panel de administración",
        ],
        buttonText: "Elegir plan",
        delay: 0.2
    }
];

export default function Plans() {
    return (
        <section id="planes" className="relative min-h-[100vh] w-full overflow-hidden">
            {/* Background con continuidad desde Services */}
            <div className="absolute inset-0 -z-10">
                {/* Gradiente sutil y elegante */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a]/80 via-[#1a0b2e]/60 to-[#2d1b69]/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#8b5cf6]/5 to-transparent" />

                {/* Glows animados (continuación de Services) */}
                <div className="pointer-events-none absolute -top-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-[#8b5cf6]/40 to-[#a78bfa]/20 blur-3xl animate-pulse" />
                <div className="pointer-events-none absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-[#ec4899]/35 to-[#f472b6]/20 blur-3xl animate-pulse" />
                <div className="pointer-events-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-60 w-60 rounded-full bg-gradient-to-br from-[#a78bfa]/20 to-[#ec4899]/15 blur-2xl animate-pulse" />

                {/* Patrón de puntos sutil (igual que Services) */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(139,92,246,0.1)_1px,transparent_1px),radial-gradient(circle_at_75%_75%,rgba(236,72,153,0.1)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30" />

                {/* Viñeta para enfoque (igual que Services) */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_30%,rgba(0,0,0,0.3)_100%)]" />
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-16"
                >
                    <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight tracking-tight text-white mb-4 sm:mb-6">
                        <span className="bg-gradient-to-r from-[#8b5cf6] via-[#a78bfa] to-[#ec4899] bg-clip-text text-transparent">
                            Nuestros planes
                        </span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                        Soluciones web completas para impulsar tu negocio digital
                    </p>

                    {/* Botón como en Hero */}
                    <motion.a
                        href="#contacto"
                        className="group relative inline-flex items-center justify-center rounded-full px-6 sm:px-8 py-3 sm:py-3.5 font-semibold text-white ring-2 ring-[#a78bfa]/70 bg-gradient-to-r from-[#8b5cf6]/70 via-[#8b5cf6]/45 to-[#8b5cf6]/25 shadow-[0_12px_40px_-16px_rgba(139,92,246,0.75)] transition-all duration-300 hover:from-[#8b5cf6]/80 hover:via-[#8b5cf6]/55 hover:to-[#8b5cf6]/35 hover:shadow-[0_16px_50px_-14px_rgba(139,92,246,0.8)] hover:ring-[#a78bfa]/80 hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span className="relative z-10 drop-shadow-[0_2px_8px_rgba(139,92,246,0.6)]">Ver todos los planes</span>
                        <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
                            <span className="absolute -left-10 top-0 h-full w-10 translate-x-0 skew-x-[-20deg] bg-[#8b5cf6]/60 blur-md opacity-0 transition-transform duration-700 ease-out group-hover:translate-x-[140%] group-hover:opacity-70"></span>
                            <span className="absolute -inset-1 rounded-full bg-[#8b5cf6]/30 blur-2xl opacity-100 transition-opacity duration-300 group-hover:bg-[#8b5cf6]/40" />
                        </span>
                    </motion.a>
                </motion.div>

                {/* Plans Grid - Responsive */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 gap-10 mb-12 sm:mb-16 items-stretch">
                    {plansData.map((plan, index) => (
                        <PlanCard
                            key={plan.title}
                            title={plan.title}
                            price={plan.price}
                            maintenance={plan.maintenance}
                            features={plan.features}
                            buttonText={plan.buttonText}
                            isPremium={plan.isPremium}
                            delay={plan.delay}
                        />
                    ))}
                </div>

                {/* Banner elegante - Oferta especial */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="group relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-white/8 via-white/5 to-white/3 backdrop-blur-2xl p-6 sm:p-8 transition-all duration-500 hover:border-white/30 hover:shadow-[0_25px_50px_-12px_rgba(139,92,246,0.3)] w-full max-w-2xl mx-auto"
                >
                    {/* Efectos de fondo glass sutiles */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/8" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                    {/* Patrón sutil */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_0%,rgba(255,255,255,0.1)_50%,transparent_100%)] bg-[length:40px_40px]" />
                    </div>

                    {/* Contenido elegante */}
                    <div className="relative z-10 text-center">
                        {/* Badge sutil */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-4"
                        >
                            <span className="text-white/80 font-medium text-sm">Oferta especial</span>
                        </motion.div>

                        {/* Título elegante */}
                        <motion.h3
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="font-heading text-2xl sm:text-3xl text-white mb-3"
                        >
                            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                                Descuento del 40%
                            </span>
                        </motion.h3>

                        {/* Subtítulo */}
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="text-white/70 text-sm sm:text-base mb-6"
                        >
                            Válido hasta final de mes
                        </motion.p>

                        {/* Descripción elegante */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.5 }}
                            className="text-white/60 text-sm mb-6"
                        >
                            <p>
                                Aprovecha esta oportunidad para impulsar tu presencia digital
                            </p>
                        </motion.div>

                        {/* Botón elegante */}
                        <motion.a
                            href="#contacto"
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.6 }}
                            className="group/btn relative inline-flex items-center justify-center rounded-full px-6 py-3 font-medium text-white border border-white/30 bg-white/10 backdrop-blur-xl transition-all duration-300 hover:border-white/50 hover:bg-white/15 hover:scale-[1.02] active:scale-[0.98] text-sm"
                            whileHover={{ y: -1 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span className="relative z-10">Aprovechar oferta</span>
                            <span className="pointer-events-none absolute inset-0 rounded-full bg-white/5 opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100" />
                        </motion.a>
                    </div>

                    {/* Efectos de borde glass sutiles */}
                    <div className="absolute inset-0 rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
            </div>
        </section>
    );
}
