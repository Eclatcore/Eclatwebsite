"use client";
import { motion } from "framer-motion";
import { useState, memo } from "react";

const Contact = memo(function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        privacyAccepted: false
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');
        setErrorMessage(null);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...formData, sentAt: new Date().toISOString() }),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    company: "",
                    message: "",
                    privacyAccepted: false
                });
            } else {
                setSubmitStatus('error');
                try {
                    const data = await response.json();
                    const missingList = Array.isArray((data as any)?.missing) && (data as any).missing.length
                        ? ` | Faltan: ${((data as any).missing as string[]).join(', ')}`
                        : '';
                    setErrorMessage((data as any)?.message ? `${(data as any).message}${missingList}` : 'Error desconocido al enviar.');
                } catch {
                    setErrorMessage('No se pudo procesar la respuesta del servidor.');
                }
            }
        } catch (error) {
            console.error('Error sending email:', error);
            setSubmitStatus('error');
            setErrorMessage('No se pudo conectar con el servidor.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contacto" className="relative min-h-[100vh] w-full overflow-hidden py-10 lg:py-20">
            {/* Background igual a Services */}
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

            <div className="container mx-auto px-6 lg:px-4 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center mb-8 lg:mb-16"
                >
                    <div className="max-w-3xl">
                        <h2 className="font-heading text-4xl md:text-6xl text-start lg:text-7xl leading-tight tracking-tight text-white mb-6">
                            <span className="bg-gradient-to-r from-[#8b5cf6] via-[#a78bfa] to-[#a78bfa] bg-clip-text text-transparent">
                                Contacta con nosotros
                            </span>
                        </h2>
                        <p className="tex-base lg:text-lg md:text-xl text-gray-300 leading-relaxed text-start">
                            ¿Listo para transformar tu negocio? Cuéntanos sobre tu proyecto y te ayudaremos a crear algo extraordinario.
                        </p>
                    </div>


                </motion.div>

                <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">


                    {/* Formulario */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true }}
                        className="relative lg:col-span-2"
                    >
                        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/20 backdrop-blur-xl backdrop-saturate-150 p-8 shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-medium text-white mb-6">Envíanos un mensaje</h3>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                                Nombre completo *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-xl border border-white/20 bg-black/30 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]/50 focus:border-[#8b5cf6]/50 transition-all duration-300"
                                                placeholder="Tu nombre"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-xl border border-white/20 bg-black/30 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]/50 focus:border-[#8b5cf6]/50 transition-all duration-300"
                                                placeholder="tu@email.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                                                Teléfono
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-white/20 bg-black/30 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]/50 focus:border-[#8b5cf6]/50 transition-all duration-300"
                                                placeholder="+34 123 456 789"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                                                Empresa
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-white/20 bg-black/30 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]/50 focus:border-[#8b5cf6]/50 transition-all duration-300"
                                                placeholder="Tu empresa"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                            Mensaje *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="w-full px-4 py-3 rounded-xl border border-white/20 bg-black/30 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]/50 focus:border-[#8b5cf6]/50 transition-all duration-300 resize-none"
                                            placeholder="Cuéntanos sobre tu proyecto..."
                                        />
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <input
                                            type="checkbox"
                                            id="privacyAccepted"
                                            name="privacyAccepted"
                                            checked={formData.privacyAccepted}
                                            onChange={handleChange}
                                            required
                                            className="mt-1 w-4 h-4 text-[#8b5cf6] bg-black/30 border-white/20 rounded focus:ring-[#8b5cf6]/50 focus:ring-2"
                                        />
                                        <label htmlFor="privacyAccepted" className="text-sm text-gray-300">
                                            Acepto la{" "}
                                            <a
                                                href="/legal/politica-de-privacidad"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Política de Privacidad
                                            </a>{" "}
                                            *
                                        </label>
                                    </div>

                                    {/* Mensajes de estado */}
                                    {submitStatus === 'success' && (
                                        <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
                                            ¡Mensaje enviado correctamente! Te contactaremos pronto.
                                        </div>
                                    )}

                                    {submitStatus === 'error' && (
                                        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                                            Error al enviar el mensaje. {errorMessage ? `Detalles: ${errorMessage}` : 'Por favor, inténtalo de nuevo.'}
                                        </div>
                                    )}

                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                        className={`group relative inline-flex items-center justify-center rounded-full px-8 py-3.5 font-semibold text-white ring-2 ring-[#a78bfa]/70 bg-gradient-to-r from-[#8b5cf6]/70 via-[#8b5cf6]/45 to-[#8b5cf6]/25 shadow-[0_12px_40px_-16px_rgba(139,92,246,0.75)] transition-all duration-300 hover:from-[#8b5cf6]/80 hover:via-[#8b5cf6]/55 hover:to-[#8b5cf6]/35 hover:shadow-[0_16px_50px_-14px_rgba(139,92,246,0.8)] hover:ring-[#a78bfa]/80 hover:scale-[1.02] active:scale-[0.98] w-full ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    >
                                        <span className="relative z-10 drop-shadow-[0_2px_8px_rgba(139,92,246,0.6)]">
                                            {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                                        </span>
                                        <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
                                            <span className="absolute -left-10 top-0 h-full w-10 translate-x-0 skew-x-[-20deg] bg-[#8b5cf6]/60 blur-md opacity-0 transition-transform duration-700 ease-out group-hover:translate-x-[140%] group-hover:opacity-70"></span>
                                            {/* outer glow (idle fuerte, hover más intenso) */}
                                            <span className="absolute -inset-1 rounded-full bg-[#8b5cf6]/30 blur-2xl opacity-100 transition-opacity duration-300 group-hover:bg-[#8b5cf6]/40" />
                                        </span>
                                    </motion.button>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                    {/* Información de contacto */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/20 backdrop-blur-xl backdrop-saturate-150 p-8 shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-medium text-white mb-6">Información de contacto</h3>

                                <div className="space-y-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#8b5cf6]/20 to-[#a78bfa]/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                                            <svg className="w-6 h-6 text-[#a78bfa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-white text-lg font-medium">Email</p>
                                            <p className="text-gray-300 text-lg ">eclat@eclatcore.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#8b5cf6]/20 to-[#a78bfa]/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                                            <svg className="w-6 h-6 text-[#a78bfa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-white font-medium text-lg ">Teléfono</p>
                                            <p className="text-gray-300 text-lg ">+34 613 80 97 06</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#8b5cf6]/20 to-[#a78bfa]/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                                            <svg className="w-6 h-6 text-[#a78bfa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-white font-medium text-lg ">Ubicación</p>
                                            <p className="text-gray-300 text-lg ">Valencia, España</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/20 backdrop-blur-xl backdrop-saturate-150 p-8 shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-medium text-white">Agenda una reunión directamente con nosotros</h3>


                                {/* Botón de agendar reunión con estilo de CardService */}
                                <motion.button
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                    viewport={{ once: true }}
                                    className="group/btn relative inline-flex items-center px-6 py-1.5 rounded-full border border-white/20 bg-gradient-to-r from-[#8b5cf6]/20 via-[#a78bfa]/15 to-[#ec4899]/20 backdrop-blur-xl transition-all duration-300 hover:border-white/40 hover:shadow-lg overflow-hidden mt-4"
                                >
                                    {/* Animated background gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6]/30 via-[#a78bfa]/20 to-[#ec4899]/30 opacity-0 transition-opacity duration-500 group-hover/btn:opacity-100" />

                                    {/* Shimmer effect */}
                                    <div className="absolute -left-10 top-0 h-full w-10 translate-x-0 skew-x-[-20deg] bg-white/30 blur-sm opacity-0 transition-all duration-700 ease-out group-hover/btn:translate-x-[200%] group-hover/btn:opacity-100" />

                                    {/* Content */}
                                    <div className="relative z-10 flex items-center space-x-3">
                                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#8b5cf6]/30 to-[#a78bfa]/20 backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-lg shrink-0">
                                            <svg className="w-3 h-3 text-[#a78bfa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <a href="https://calendly.com/eclat-eclatcore/30min" target="_blank" rel="noopener noreferrer">
                                            <span className="text-white/90 group-hover/btn:text-white font-medium transition-colors duration-300">
                                                Agenda una reunión
                                            </span>
                                        </a>
                                    </div>

                                    {/* Outer glow on hover */}
                                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#8b5cf6]/20 to-[#ec4899]/20 opacity-0 blur-md transition-opacity duration-500 group-hover/btn:opacity-100" />
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>


                </div>
            </div>
        </section>
    );
});

export default Contact;
