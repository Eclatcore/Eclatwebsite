"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Verificar si el usuario ya ha dado su consentimiento
    // Usar try-catch para evitar errores en SSR o si localStorage no está disponible
    try {
      if (typeof window !== "undefined") {
        const cookieConsent = localStorage.getItem("cookieConsent");
        if (!cookieConsent) {
          // Mostrar el banner inmediatamente
          setShowBanner(true);
          // Pequeño delay para la animación
          const timer = setTimeout(() => {
            setIsVisible(true);
          }, 300);
          return () => clearTimeout(timer);
        }
      }
    } catch (error) {
      // Si hay error con localStorage, mostrar el banner de todas formas
      console.error("Error checking cookie consent:", error);
      setShowBanner(true);
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, []);

  // No renderizar hasta que esté montado en el cliente
  if (!mounted) return null;

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    localStorage.setItem("cookieConsentDate", new Date().toISOString());
    setIsVisible(false);
    setTimeout(() => setShowBanner(false), 300);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    localStorage.setItem("cookieConsentDate", new Date().toISOString());
    setIsVisible(false);
    setTimeout(() => setShowBanner(false), 300);
  };

  const handleCustomize = () => {
    // Aquí puedes abrir un modal para personalizar las cookies si lo necesitas
    // Por ahora, redirigimos a la política de cookies
    window.location.href = "/legal/politica-de-cookies";
  };

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-[9999] p-4 lg:p-6"
        >
          <div className="mx-auto">
            <div className="relative rounded-2xl border border-white/15 bg-black/90 backdrop-blur-xl backdrop-saturate-150 shadow-2xl p-6 lg:p-8">
              {/* Glow effect */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-[#8b5cf6]/10 via-transparent to-[#ec4899]/10 opacity-50" />
              
              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6">
                  {/* Icono y texto */}
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <svg
                          className="w-6 h-6 text-[#8b5cf6]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-2">
                          Uso de Cookies
                        </h3>
                        <p className="text-sm text-white/80 leading-relaxed">
                          Utilizamos cookies para mejorar su experiencia de navegación, analizar el tráfico del sitio y personalizar el contenido. 
                          Al hacer clic en "Aceptar todas", usted consiente el uso de todas las cookies. Puede gestionar sus preferencias o 
                          obtener más información en nuestra{" "}
                          <Link
                            href="/legal/politica-de-cookies"
                            className="text-[#8b5cf6] hover:text-[#a78bfa] underline transition-colors"
                          >
                            Política de Cookies
                          </Link>
                          .
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Botones */}
                  <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                    <button
                      onClick={handleReject}
                      className="px-6 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-all duration-300 whitespace-nowrap"
                    >
                      Rechazar
                    </button>
                    <button
                      onClick={handleCustomize}
                      className="px-6 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-all duration-300 whitespace-nowrap"
                    >
                      Personalizar
                    </button>
                    <button
                      onClick={handleAccept}
                      className="px-6 py-3 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] hover:from-[#7c3aed] hover:to-[#8b5cf6] text-white text-sm font-semibold transition-all duration-300 shadow-lg shadow-[#8b5cf6]/25 hover:shadow-[#8b5cf6]/40 whitespace-nowrap"
                    >
                      Aceptar todas
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

