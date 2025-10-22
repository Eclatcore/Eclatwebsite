import Link from "next/link";
import Logo from "../ui/Logo";

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="relative text-white overflow-hidden"
    >
      {/* Background dinámico */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a0b2e] to-[#2d1b69]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6]/10 via-transparent to-[#ec4899]/10" />
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-[#8b5cf6]/20 to-[#a78bfa]/10 blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-[#ec4899]/15 to-[#f472b6]/8 blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-4">
          {/* Columna 1 */}
          <div>
            <div className="flex items-center gap-3">
              <Logo className="h-9 w-auto" />
              <h2 className="text-3xl font-exo">Éclat</h2>
            </div>
            <p className="mt-4 max-w-xs text-white/85 leading-relaxed">
              Combinamos diseño, tecnología y estrategia para tu éxito online. Haz que tu marca brille
            </p>

          </div>

          {/* Columna 2 */}
          <nav aria-label="Principal">
            <h3 className="text-lg font-semibold text-white mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li><Link href="#home" className="hover:text-white transition-colors duration-200 text-white/85">Home</Link></li>
              <li><Link href="#nosotros" className="hover:text-white transition-colors duration-200 text-white/85">Nosotros</Link></li>
              <li><Link href="#servicios" className="hover:text-white transition-colors duration-200 text-white/85">Servicios</Link></li>
              <li><Link href="#proceso" className="hover:text-white transition-colors duration-200 text-white/85">Proceso</Link></li>
              <li><Link href="#por-que-elegirnos" className="hover:text-white transition-colors duration-200 text-white/85">Por qué elegirnos</Link></li>
              <li><Link href="#planes" className="hover:text-white transition-colors duration-200 text-white/85">Planes</Link></li>
              <li><Link href="#contacto" className="hover:text-white transition-colors duration-200 text-white/85">Contacto</Link></li>
            </ul>
          </nav>

          {/* Columna 3 */}
          <nav aria-label="Legal">
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><Link href="/legal/aviso-legal" className="hover:text-white transition-colors duration-200 text-white/85">Aviso legal</Link></li>
              <li><Link href="/legal/politica-de-cookies" className="hover:text-white transition-colors duration-200 text-white/85">Política de cookies</Link></li>
              <li><Link href="/legal/politica-de-privacidad" className="hover:text-white transition-colors duration-200 text-white/85">Política de privacidad</Link></li>
            </ul>
          </nav>

          {/* Columna 4 */}
          <address className="not-italic">
            <h3 className="text-lg font-semibold text-white mb-4">Contacto</h3>
            <ul className="space-y-3 text-white/85">
              <li><a href="tel:+341234567890" className="hover:text-white transition-colors duration-200">+34 613 80 97 06</a></li>
              <li><a href="mailto:eclat@gmail.com" className="hover:text-white transition-colors duration-200">eclat@eclatcore.com</a></li>
              <li>España</li>
            </ul>
          </address>
        
        </div>
        <div>
            <p className="mt-10 text-white/70">
            ©Copyright 2025 Éclat core. Todos los derechos reservados. Diseñado y desarrollado por Éclat.
            </p>
          </div>
      </div>
    </footer>
  );
}

