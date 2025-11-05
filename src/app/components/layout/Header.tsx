"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../ui/Logo";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuItems = [
    { href: "#home", label: "Home" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#servicios", label: "Servicios" },
    { href: "#proceso", label: "Proceso" },
    { href: "#por-que-elegirnos", label: "Por qué elegirnos" },
    { href: "#planes", label: "Planes" },
    { href: "#contacto", label: "Contacto" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[60] w-full">
      <div className="mx-auto max-w-7xl px-6 py-3">
        <div className="relative overflow-hidden rounded-full border border-white/15 bg-black/10 shadow-lg backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter:blur(0)]:bg-black/10 px-6 py-4 lg:py-2">
          {/* liquid glass tint */}
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="absolute -left-24 -top-24 h-56 w-56 rounded-full bg-gradient-to-tr from-white/30 via-white/10 to-transparent blur-2xl" />
            <div className="absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-gradient-to-tr from-white/20 via-white/5 to-transparent blur-2xl" />
          </div>

          <nav className="relative z-10 flex items-center justify-between">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-300 hover:forced-color-adjust-none break-keep"
              onClick={closeMenu}
            >
              <Logo className="lg:h-20 lg:w-34 h-10 w-10"/>
              <h2 className="text-3xl font-exo text-white">Éclat</h2>
            </Link>


            {/* Desktop Navigation */}
            <ul className="hidden lg:flex gap-6">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className="text-white/90 hover:text-white transition-colors duration-300 text-sm xl:text-base"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Hamburger Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center group z-[60] hover:bg-white/10 rounded-full transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <motion.svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="text-white"
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: isMobile ? 0.1 : 0.3, ease: "easeInOut" }}
              >
                {/* Hamburger lines / X lines */}
                <motion.path
                  d="M3 12h18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  animate={{
                    d: isMenuOpen ? "M18 6L6 18" : "M3 12h18",
                  }}
                  transition={{ duration: isMobile ? 0.1 : 0.3, ease: "easeInOut" }}
                />
                <motion.path
                  d="M3 6h18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  animate={{
                    opacity: isMenuOpen ? 0 : 1,
                    y: isMenuOpen ? 0 : 0,
                  }}
                  transition={{ duration: isMobile ? 0.05 : 0.2 }}
                />
                <motion.path
                  d="M3 18h18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  animate={{
                    d: isMenuOpen ? "M6 6L18 18" : "M3 18h18",
                  }}
                  transition={{ duration: isMobile ? 0.1 : 0.3, ease: "easeInOut" }}
                />
              </motion.svg>
            </button>
          </nav>

        </div>
      </div>

      {/* Mobile Menu Overlay - Outside header container */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: isMobile ? 0.05 : 0.3 }}
              className="fixed inset-0 lg:hidden z-40 bg-black/50"
              onClick={closeMenu}
              style={{ zIndex: 40 }}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={isMobile ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={isMobile ? { opacity: 0, y: 0, scale: 1 } : { opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: isMobile ? 0.05 : 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-20 left-4 right-4 rounded-2xl border border-white/15 bg-black/10 shadow-lg backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter:blur(0)]:bg-black/10 overflow-hidden lg:hidden z-50 mt-4"
            >
              {/* liquid glass tint - igual al header */}
              <div className="pointer-events-none absolute inset-0 opacity-60">
                <div className="absolute -left-24 -top-24 h-56 w-56 rounded-full bg-gradient-to-tr from-white/30 via-white/10 to-transparent blur-2xl" />
                <div className="absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-gradient-to-tr from-white/20 via-white/5 to-transparent blur-2xl" />
              </div>
              
              <ul className="relative z-10 py-4">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: isMobile ? 0 : 0.3, 
                      delay: isMobile ? 0 : index * 0.1,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="block px-6 py-3 text-white/90 hover:text-white hover:bg-white/5 transition-all duration-300 text-base"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}


