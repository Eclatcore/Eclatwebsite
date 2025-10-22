"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Logo from "../../components/ui/Logo";

export default function PoliticaCookies() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background dinámico */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a0b2e] to-[#2d1b69]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6]/10 via-transparent to-[#ec4899]/10" />
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-[#8b5cf6]/20 to-[#a78bfa]/10 blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-[#ec4899]/15 to-[#f472b6]/8 blur-3xl animate-pulse" />
      </div>

      {/* Header */}
      <header className="relative z-20 pt-8 pb-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-300">
              <Logo className="h-8 w-auto" />
              <span className="text-2xl font-exo">Éclat</span>
            </Link>
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Volver
            </Link>
          </div>
        </div>
      </header>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Política de Cookies</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-white/85 mb-6">
            <strong>Última actualización:</strong> 1 de enero de 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">1. ¿Qué son las cookies?</h2>
            <p className="text-white/85 mb-4">
              Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web. Estas cookies permiten que el sitio web recuerde información sobre su visita, como su idioma preferido y otras configuraciones, lo que puede hacer que su próxima visita sea más fácil y el sitio más útil para usted.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">2. ¿Cómo utiliza Éclat Studio las cookies?</h2>
            <p className="text-white/85 mb-4">
              En Éclat Studio utilizamos cookies para mejorar su experiencia de navegación, analizar el tráfico del sitio web y personalizar el contenido. Las cookies nos ayudan a entender cómo los usuarios interactúan con nuestro sitio web para poder mejorarlo.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">3. Tipos de cookies que utilizamos</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-white">3.1 Cookies técnicas</h3>
              <p className="text-white/85 mb-4">
                Son necesarias para el funcionamiento del sitio web y no pueden ser desactivadas. Incluyen cookies de sesión, de seguridad y de personalización de la interfaz.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-white">3.2 Cookies de análisis</h3>
              <p className="text-white/85 mb-4">
                Nos permiten medir y analizar el uso que hacen los usuarios del sitio web. Estas cookies nos ayudan a entender cómo los visitantes interactúan con el sitio web recopilando y reportando información de forma anónima.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-white">3.3 Cookies de funcionalidad</h3>
              <p className="text-white/85 mb-4">
                Permiten que el sitio web recuerde las elecciones que hace el usuario (como su nombre de usuario, idioma o la región en la que se encuentra) y proporcionan características mejoradas y más personales.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">4. Cookies de terceros</h2>
            <p className="text-white/85 mb-4">
              Nuestro sitio web puede contener cookies de terceros, como Google Analytics, que nos ayudan a analizar el uso del sitio web. Estas cookies están sujetas a las políticas de privacidad de los respectivos terceros.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">5. Gestión de cookies</h2>
            <p className="text-white/85 mb-4">
              Puede controlar y/o eliminar las cookies como desee. Puede eliminar todas las cookies que ya están en su computadora y puede configurar la mayoría de navegadores para evitar que se coloquen. Sin embargo, si hace esto, es posible que tenga que ajustar manualmente algunas preferencias cada vez que visite un sitio y algunos servicios y funcionalidades pueden no funcionar.
            </p>
            
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-3 text-white">5.1 Configuración por navegador:</h3>
              <ul className="text-white/85 mb-4 list-disc pl-6">
                <li><strong>Chrome:</strong> Configuración &gt; Privacidad y seguridad &gt; Cookies y otros datos de sitios</li>
                <li><strong>Firefox:</strong> Opciones &gt; Privacidad y seguridad &gt; Cookies y datos del sitio</li>
                <li><strong>Safari:</strong> Preferencias &gt; Privacidad &gt; Cookies y datos de sitios web</li>
                <li><strong>Edge:</strong> Configuración &gt; Cookies y permisos de sitio</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">6. Consentimiento</h2>
            <p className="text-white/85 mb-4">
              Al continuar navegando por nuestro sitio web, usted acepta el uso de cookies según se describe en esta política. Si no está de acuerdo con el uso de cookies, debe configurar su navegador para rechazarlas o abandonar el sitio web.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">7. Actualizaciones de esta política</h2>
            <p className="text-white/85 mb-4">
              Éclat Studio puede actualizar esta Política de Cookies ocasionalmente. Le recomendamos que revise esta página periódicamente para estar informado de cualquier cambio.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">8. Contacto</h2>
            <p className="text-white/85 mb-4">
              Si tiene preguntas sobre nuestra Política de Cookies, puede contactarnos:
            </p>
            <ul className="text-white/85 mb-4 list-disc pl-6">
              <li><strong>Email:</strong> eclat@eclatcore.com</li>
              <li><strong>Teléfono:</strong> +34 613 80 97 06</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
