"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import PlanCard from "./ui/PlanCard";

const plansData = [
    {
        title: "Básico",
        price: "280€",
        oldPrice: "392€",
        maintenance: "Todo el sitio web + mantenimiento opcional de 15€/mes si prefieres que lo gestionemos todo",
        features: [
            "Hasta 4 secciones personalizadas",
            "Diseño adaptado a todos los dispositivos",
            "Vsibilidad en buscadores",
            "Formulario de contacto profesional",
            "Regalo de bienvenida: Análisis de marca y asesoría de color y tipografía",
            "Soporte continuo durante el proceso de creación",
        ],
        buttonText: "Elegir plan",
        delay: 0
    },
    {
        title: "Premium",
        price: "340€",
        oldPrice: "476€",
        maintenance: "Todo el sitio web + mantenimiento opcional 25€/mes si prefieres que lo gestionemos todo",
        features: [
            "Sitio web profesional totalmente personalizado",
            "Diseño adaptado a todos los dispositivos",
            "Visibilidad en buscadores",
            "Actualizaciones por temporada (Navidad, verano, Halloween, etc.)",
            "Análisis de tráfico durante 12 meses",
            "Éclat Writer: contenido semanal con IA para mantener tu web visible.",
            "Soporte y acompañamiento continuo",
        ],
        buttonText: "Quiero empezar ahora",
        isPremium: true,
        delay: 0.1
    },
    {
        title: "Empresarial",
        price: "700€",
        oldPrice: "980€",
        maintenance: "Todo el sitio web + mantenimiento opcional de 40€/mes si prefieres que lo gestionemos todo",
        features: [
            "Web ilimitada con diseño premium UX/UI",
            "Diseño adaptado a todos los dispositivos",
            "SEO avanzado y auditoría inicial",
            "E-commerce (tienda online)",
            "Actualizaciones de diseño por temporada y eventos",
            "Soporte técnico y estratégico prioritario",
            "Branding digital (logo, colores, guía visual)",
            "Éclat Writer Pro: crea y programa contenido inteligente con IA alineado a tu estrategia.",
        ],
        buttonText: "Elegir plan",
        delay: 0.2
    }

];

export default function Plans() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const update = () => setIsMobile(window.innerWidth < 768);
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);
    return (
        <section id="planes" className="relative min-h-[100vh] w-full overflow-hidden">
            {/* Background con continuidad desde Services */}
            <div className="absolute inset-0 -z-10">
                {/* Gradiente sutil y elegante */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a]/80 via-[#1a0b2e]/60 to-[#2d1b69]/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#8b5cf6]/5 to-transparent" />

                {/* Glows animados (continuación de Services) */}
                <div className={`pointer-events-none absolute -top-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-[#8b5cf6]/40 to-[#a78bfa]/20 blur-3xl ${isMobile ? '' : 'animate-pulse'}`} />
                <div className={`pointer-events-none absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-[#ec4899]/35 to-[#f472b6]/20 blur-3xl ${isMobile ? '' : 'animate-pulse'}`} />
                <div className={`pointer-events-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-60 w-60 rounded-full bg-gradient-to-br from-[#a78bfa]/20 to-[#ec4899]/15 blur-2xl ${isMobile ? '' : 'animate-pulse'}`} />

                {/* Patrón de puntos sutil (igual que Services) */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(139,92,246,0.1)_1px,transparent_1px),radial-gradient(circle_at_75%_75%,rgba(236,72,153,0.1)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30" />

                {/* Viñeta para enfoque (igual que Services) */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_30%,rgba(0,0,0,0.3)_100%)]" />
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-10 lg:py-20">
                {/* Header */}
                <motion.div
                    initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
                    animate={isMobile ? { opacity: 1 } : undefined}
                    whileInView={isMobile ? undefined : { opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={isMobile ? { duration: 0 } : { duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center"
                >
                    <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight tracking-tight text-white mb-4 sm:mb-6">
                        <span className="bg-gradient-to-r from-[#8b5cf6] via-[#a78bfa] to-[#ec4899] bg-clip-text text-transparent">
                            Nuestros planes
                        </span>
                    </h2>
                    <p className="ltext-lg g:text-xl text-white/80 max-w-3xl mx-auto mb-8 lg:mb-16 px-4">
                        Soluciones web completas para impulsar tu negocio digital
                    </p>

                </motion.div>

                {/* Plans Grid - Responsive */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 gap-10 mb-12 sm:mb-16 items-stretch px-4">
                    {plansData.map((plan, index) => (
                        <PlanCard
                            key={plan.title}
                            title={plan.title}
                            price={plan.price}
                            oldPrice={(plan as any).oldPrice}
                            maintenance={plan.maintenance}
                            features={plan.features}
                            buttonText={plan.buttonText}
                            isPremium={plan.isPremium}
                            delay={plan.delay}
                        />
                    ))}
                </div>

                <div className="text-center my-10 font-bold">
                    <p>Importante: Todos nuestros planes no incluyen dominio. Te ofrecemos la posibilidad de contratarlos por separado.</p>
                </div>

                {/* Banner elegante - Oferta especial */}
                <motion.div
                    initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    animate={isMobile ? { opacity: 1, y: 0 } : undefined}
                    whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={isMobile ? { duration: 0 } : { duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="group relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-white/8 via-white/5 to-white/3 backdrop-blur-2xl p-6 sm:p-8 transition-all duration-500 hover:border-white/30 hover:shadow-[0_25px_50px_-12px_rgba(139,92,246,0.3)] w-full max-w-7xl mx-auto"
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
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#8b5cf6]/20 to-[#ec4899]/20 border border-white/20 backdrop-blur-sm mb-6">
                            <span className="text-sm font-medium text-white/90">Oferta especial</span>
                        </div>
                        

                        {/* Título elegante */}
                        <motion.h3
                            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                            animate={isMobile ? { opacity: 1, y: 0 } : undefined}
                            whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={isMobile ? { duration: 0 } : { duration: 0.7, delay: 0.3 }}
                            className="font-heading text-2xl lg:text-4xl text-white mb-3"
                        >
                            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                                Descuento exclusivo del 40%
                            </span>
                        </motion.h3>

                        {/* Subtítulo */}
                        <motion.p
                            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                            animate={isMobile ? { opacity: 1, y: 0 } : undefined}
                            whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={isMobile ? { duration: 0 } : { duration: 0.7, delay: 0.4 }}
                            className="text-white/70 text-base lg:text-lg mb-6 max-w-4xl mx-auto"
                        >
                            Solo hasta final de mes. Es el momento perfecto una web estratégica, moderna y lista para crecer.
                        </motion.p>



                        {/* Botón elegante */}
                        <motion.a
                            href="#contacto"
                            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                            animate={isMobile ? { opacity: 1, y: 0 } : undefined}
                            whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={isMobile ? { duration: 0 } : { duration: 0.7, delay: 0.6 }}
                            className="group/btn relative inline-flex items-center justify-center rounded-full px-6 py-3 font-medium text-white border border-white/30 bg-white/10 backdrop-blur-xl transition-all duration-300 hover:border-white/50 hover:bg-white/15 hover:scale-[1.02] active:scale-[0.98]"
                            whileTap={{ scale: 0.98 }}
                        >
                            <span className="relative z-10">Quiero saber más</span>
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
