"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Logo from "../../components/ui/Logo";

export default function PoliticaPrivacidad() {
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
        <h1 className="text-4xl font-bold mb-8 text-center">Política de Privacidad</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-white/85 mb-6">
            <strong>Última actualización:</strong> 1 de enero de 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Información del Responsable</h2>
            <p className="text-white/85 mb-4">
              En cumplimiento del Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales, le informamos de que los datos personales que nos proporcione serán tratados por:
            </p>
            <ul className="text-white/85 mb-4 list-disc pl-6">
              <li><strong>Responsable:</strong> Éclat Studio</li>
              <li><strong>Domicilio:</strong> España</li>
              <li><strong>Teléfono:</strong> +34 613 80 97 06</li>
              <li><strong>Email:</strong> eclat@eclatcore.com</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">2. Finalidad del Tratamiento</h2>
            <p className="text-white/85 mb-4">
              Los datos personales que nos proporcione serán utilizados para las siguientes finalidades:
            </p>
            <ul className="text-white/85 mb-4 list-disc pl-6">
              <li>Gestionar y responder a sus consultas y solicitudes de información</li>
              <li>Prestar los servicios solicitados</li>
              <li>Enviar comunicaciones comerciales sobre nuestros servicios (solo si ha dado su consentimiento)</li>
              <li>Cumplir con las obligaciones legales aplicables</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">3. Legitimación</h2>
            <p className="text-white/85 mb-4">
              La base legal para el tratamiento de sus datos personales es:
            </p>
            <ul className="text-white/85 mb-4 list-disc pl-6">
              <li><strong>Consentimiento del interesado:</strong> Para el envío de comunicaciones comerciales</li>
              <li><strong>Ejecución de un contrato:</strong> Para la prestación de servicios</li>
              <li><strong>Interés legítimo:</strong> Para responder a consultas y solicitudes</li>
              <li><strong>Cumplimiento de una obligación legal:</strong> Cuando sea requerido por la normativa aplicable</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">4. Conservación de Datos</h2>
            <p className="text-white/85 mb-4">
              Los datos personales serán conservados durante el tiempo necesario para cumplir con la finalidad para la que fueron recabados y, en cualquier caso, durante los plazos establecidos en la normativa aplicable. En concreto:
            </p>
            <ul className="text-white/85 mb-4 list-disc pl-6">
              <li><strong>Datos de contacto:</strong> Hasta que retire su consentimiento o solicite la supresión</li>
              <li><strong>Datos contractuales:</strong> Durante la vigencia del contrato y posteriormente durante los plazos legales de conservación</li>
              <li><strong>Datos de navegación:</strong> Según la configuración de cookies que haya aceptado</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">5. Comunicación de Datos</h2>
            <p className="text-white/85 mb-4">
              Sus datos personales no serán comunicados a terceros, salvo en los siguientes casos:
            </p>
            <ul className="text-white/85 mb-4 list-disc pl-6">
              <li>Cuando sea necesario para la prestación del servicio contratado</li>
              <li>Cuando exista una obligación legal</li>
              <li>Cuando haya dado su consentimiento expreso</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">6. Derechos del Interesado</h2>
            <p className="text-white/85 mb-4">
              Como titular de los datos personales, usted tiene derecho a:
            </p>
            <ul className="text-white/85 mb-4 list-disc pl-6">
              <li><strong>Acceso:</strong> Conocer qué datos tenemos sobre usted</li>
              <li><strong>Rectificación:</strong> Corregir datos inexactos o incompletos</li>
              <li><strong>Supresión:</strong> Solicitar la eliminación de sus datos</li>
              <li><strong>Limitación:</strong> Restringir el tratamiento de sus datos</li>
              <li><strong>Portabilidad:</strong> Recibir sus datos en formato estructurado</li>
              <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos</li>
            </ul>
            <p className="text-white/85 mb-4">
              Para ejercer estos derechos, puede contactarnos en: <strong>eclat@eclatcore.com</strong>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">7. Seguridad de los Datos</h2>
            <p className="text-white/85 mb-4">
              Éclat Studio ha adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad de los datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado, habida cuenta del estado de la tecnología, la naturaleza de los datos almacenados y los riesgos a que están expuestos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">8. Menores de Edad</h2>
            <p className="text-white/85 mb-4">
              Nuestros servicios no están dirigidos a menores de 16 años. No recopilamos intencionalmente información personal de menores de 16 años. Si descubrimos que hemos recopilado información personal de un menor de 16 años, tomaremos medidas para eliminar esa información.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">9. Modificaciones</h2>
            <p className="text-white/85 mb-4">
              Éclat Studio se reserva el derecho a modificar esta Política de Privacidad para adaptarla a novedades legislativas, jurisprudenciales o en la interpretación de la Agencia Española de Protección de Datos. Dichas modificaciones serán notificadas a los usuarios.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">10. Contacto</h2>
            <p className="text-white/85 mb-4">
              Para cualquier consulta sobre esta Política de Privacidad o para ejercer sus derechos, puede contactarnos:
            </p>
            <ul className="text-white/85 mb-4 list-disc pl-6">
              <li><strong>Email:</strong> eclat@eclatcore.com</li>
              <li><strong>Teléfono:</strong> +34 613 80 97 06</li>
            </ul>
            <p className="text-white/85 mb-4">
              También puede presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) si considera que el tratamiento de sus datos personales no es adecuado.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
