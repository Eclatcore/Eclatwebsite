import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans, Montserrat, Exo } from "next/font/google";


const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // ajusta según lo que uses
  variable: "--font-dm-sans",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-montserrat",
});

const exo = Exo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-exo",
});


export const metadata: Metadata = {
  title: "Eclát",
  description: "La empresa que le da brillo a tu negocio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${montserrat.variable} ${exo.variable} antialiased bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
