"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Logo from "../../components/ui/Logo";

export default function AvisoLegal() {
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
        <h1 className="text-4xl font-bold mb-8 text-center">Aviso Legal</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-white/85 mb-6">
            <strong>Última actualización:</strong> 1 de enero de 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Información General</h2>
            <p className="text-white/85 mb-4">
              En cumplimiento con el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico, se informa que el titular de este sitio web es:
            </p>
            <ul className="text-white/85 mb-4 list-disc pl-6">
              <li><strong>Denominación social:</strong> Éclat core</li>
              <li><strong>Domicilio:</strong> España</li>
              <li><strong>Teléfono:</strong> +34 613 80 97 06</li>
              <li><strong>Email:</strong> eclat@eclatcore.com</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">2. Objeto</h2>
            <p className="text-white/85 mb-4">
              El presente aviso legal regula el uso del sitio web <strong>eclatcore.com</strong> (en adelante, el sitio web), del que es titular Éclat Core.
            </p>
            <p className="text-white/85 mb-4">
              La navegación por el sitio web atribuye la condición de usuario del mismo e implica la aceptación plena de todas y cada una de las disposiciones incluidas en este Aviso Legal.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">3. Condiciones de Acceso y Uso</h2>
            <p className="text-white/85 mb-4">
              El acceso al sitio web es gratuito y no requiere registro previo. El usuario se compromete a hacer un uso adecuado de los contenidos y servicios que Éclat Core ofrece a través de su sitio web y con carácter enunciativo pero no limitativo, a no emplearlos para:
            </p>
            <ul className="text-white/85 mb-4 list-disc pl-6">
              <li>Incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público</li>
              <li>Difundir contenidos o propaganda de carácter racista, xenófobo, pornográfico-ilegal, de apología del terrorismo o atentatorio contra los derechos humanos</li>
              <li>Provocar daños en los sistemas físicos y lógicos de Éclat Core, de sus proveedores o de terceras personas</li>
              <li>Introducir o difundir en la red virus informáticos o cualesquiera otros sistemas físicos o lógicos que sean susceptibles de provocar daños</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">4. Propiedad Intelectual e Industrial</h2>
            <p className="text-white/85 mb-4">
              Todos los contenidos del sitio web, incluyendo textos, fotografías, gráficos, imágenes, iconos, tecnología, software, links y demás contenidos audiovisuales o sonoros, así como su diseño gráfico y códigos fuente, constituyen una obra cuya propiedad pertenece a Éclat Core, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación sobre los mismos.
            </p>
            <p className="text-white/85 mb-4">
              Queda expresamente prohibida la reproducción, distribución, comunicación pública y transformación de los contenidos del sitio web, salvo para uso personal y no comercial.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">5. Exclusión de Garantías y Responsabilidad</h2>
            <p className="text-white/85 mb-4">
              Éclat Core no se hace responsable de la información contenida en el sitio web, ni de los daños y perjuicios que puedan derivarse de su uso.
            </p>
            <p className="text-white/85 mb-4">
              Éclat Core se reserva el derecho de realizar sin previo aviso las modificaciones que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados en su portal.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">6. Legislación Aplicable y Jurisdicción</h2>
            <p className="text-white/85 mb-4">
              La relación entre Éclat Core y el Usuario se regirá por la normativa española vigente y cualquier controversia se someterá a los Juzgados y tribunales de la ciudad de España.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">7. Contacto</h2>
            <p className="text-white/85 mb-4">
              Para cualquier consulta sobre este Aviso Legal, puede contactar con nosotros a través de:
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
