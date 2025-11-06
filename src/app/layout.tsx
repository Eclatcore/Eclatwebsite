import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans, Montserrat, Exo } from "next/font/google";


const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
  preload: true,
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-montserrat",
  display: "swap",
  preload: true,
});

const exo = Exo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-exo",
  display: "swap",
  preload: true,
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://eclatcore.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Éclat | Diseño Web y Estrategia Digital en Valencia",
    template: "%s | Éclat"
  },
  description: "Transformamos tu negocio con diseño web profesional, desarrollo UX/UI y estrategia digital. Creamos experiencias digitales que generan resultados reales. Auditoría UX gratuita disponible.",
  keywords: [
    "diseño web",
    "desarrollo web",
    "diseño UX/UI",
    "estrategia digital",
    "marketing digital",
    "página web profesional",
    "tienda online",
    "e-commerce",
    "SEO",
    "Valencia",
    "España",
    "agencia digital",
    "diseño web responsive",
    "desarrollo web personalizado",
    "auditoría UX",
    "consultoría digital",
    "branding digital"
  ],
  authors: [{ name: "Éclat", url: siteUrl }],
  creator: "Éclat",
  publisher: "Éclat",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    siteName: "Éclat",
    title: "Éclat | Diseño Web y Estrategia Digital en Valencia",
    description: "Transformamos tu negocio con diseño web profesional, desarrollo UX/UI y estrategia digital. Creamos experiencias digitales que generan resultados reales.",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Éclat - Diseño Web y Estrategia Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Éclat | Diseño Web y Estrategia Digital en Valencia",
    description: "Transformamos tu negocio con diseño web profesional, desarrollo UX/UI y estrategia digital.",
    images: [`${siteUrl}/og-image.jpg`],
    creator: "@eclatcore",
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "es-ES": siteUrl,
      "x-default": siteUrl,
    },
  },
  category: "technology",
  classification: "Business",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  other: {
    "theme-color": "#8b5cf6",
    "color-scheme": "dark",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${dmSans.variable} ${montserrat.variable} ${exo.variable} antialiased bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
