"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { memo } from "react";

type Props =
  | { type: "image"; src: string; alt?: string }
  | { type: "video"; src: string; poster?: string; autoPlay?: boolean; loop?: boolean; muted?: boolean };

const GlassMedia = memo(function GlassMedia(props: Props) {
    const USE_VIDEO = false; 
  return (
    <section className="">
    {/* CONTENIDO */}
    <div className="relative z-10 mx-auto px-4 text-center">
      <div className="space-y-6">
        {/* Contenedor estilo liquid glass alineado al header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="relative mt-6 mx-auto w-full max-w-[1200px] overflow-hidden rounded-[28px] border border-white/15 bg-black/10 shadow-xl backdrop-blur-xl backdrop-saturate-150 transition-all duration-300 ease-out hover:shadow-2xl"
        >
          {/* glow overlays sutiles */}
          <div className="pointer-events-none absolute inset-0">
            {/* brillos animados responsive */}
            <div className="absolute -left-16 -top-16 sm:-left-20 sm:-top-20 lg:-left-28 lg:-top-28 h-32 w-32 sm:h-48 sm:w-48 lg:h-72 lg:w-72 rounded-full bg-gradient-to-tr from-[#a855f7]/40 via-white/10 to-transparent blur-2xl sm:blur-3xl animate-pulse" />
            <div className="absolute -bottom-16 -right-16 sm:-bottom-20 sm:-right-20 lg:-bottom-28 lg:-right-28 h-32 w-32 sm:h-48 sm:w-48 lg:h-72 lg:w-72 rounded-full bg-gradient-to-tr from-[#ec4899]/35 via-white/5 to-transparent blur-2xl sm:blur-3xl animate-pulse" />
            {/* línea superior sutil tipo cristal */}
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-70" />
          </div>

          {/* Contenido centrado dentro del glass */}
          <div className="relative z-10 p-4 sm:p-6 lg:p-8">
            <div className="relative mx-auto w-full aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5] lg:aspect-[16/9] rounded-2xl border border-white/20 bg-black/20 overflow-hidden shadow-2xl">
              {/* Barra de título estilo macOS con glass liquid */}
              <div className="absolute top-0 left-0 right-0 z-20 h-8 bg-gradient-to-b rounded-t-2xl from-white/10 via-white/5 to-white/8 backdrop-blur-2xl backdrop-saturate-150 border-b border-white/20 shadow-[0_1px_3px_rgba(0,0,0,0.3)]">
                {/* Botones de control macOS con glass liquid */}
                <div className="flex items-center h-full px-3 space-x-2">
                  {/* Botón rojo con glass liquid */}
                  <div className="group relative w-3 h-3 rounded-full bg-gradient-to-br from-red-500/80 via-red-400/70 to-red-600/90 backdrop-blur-sm border border-red-400/30 shadow-[0_2px_8px_rgba(239,68,68,0.4)] hover:shadow-[0_4px_12px_rgba(239,68,68,0.6)] transition-all duration-300 cursor-pointer hover:scale-110">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-300/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-red-400/30 to-red-500/20 blur-sm opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
                  </div>
                  
                  {/* Botón amarillo con glass liquid */}
                  <div className="group relative w-3 h-3 rounded-full bg-gradient-to-br from-yellow-500/80 via-yellow-400/70 to-yellow-600/90 backdrop-blur-sm border border-yellow-400/30 shadow-[0_2px_8px_rgba(234,179,8,0.4)] hover:shadow-[0_4px_12px_rgba(234,179,8,0.6)] transition-all duration-300 cursor-pointer hover:scale-110">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-300/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-yellow-400/30 to-yellow-500/20 blur-sm opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
                  </div>
                  
                  {/* Botón verde con glass liquid */}
                  <div className="group relative w-3 h-3 rounded-full bg-gradient-to-br from-green-500/80 via-green-400/70 to-green-600/90 backdrop-blur-sm border border-green-400/30 shadow-[0_2px_8px_rgba(34,197,94,0.4)] hover:shadow-[0_4px_12px_rgba(34,197,94,0.6)] transition-all duration-300 cursor-pointer hover:scale-110">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-300/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-green-400/30 to-green-500/20 blur-sm opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
              
              {/* Video de fondo optimizado */}
              <video 
                src="/videos/bg-aboutus.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                preload="metadata"
                className="h-full w-full object-cover rounded-2xl"
                style={{
                  filter: 'brightness(1.1) contrast(1.1) saturate(1.2)'
                }}
              />
              
              {/* Overlay sutil para mejor contraste */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
              
              {/* Borde interno sutil */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/10" />
              
              {/* Efecto de brillo en los bordes */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_0_20px_rgba(255,255,255,0.1)]" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    </section>
  );
});

export default GlassMedia;


