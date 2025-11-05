import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import FeatureItem from "./FeatureItem";

interface PlanCardProps {
  title: string;
  price: string;
  oldPrice?: string;
  maintenance: string;
  features: string[];
  buttonText: string;
  isPremium?: boolean;
  delay?: number;
}

export default function PlanCard({ 
  title, 
  price, 
  oldPrice,
  maintenance, 
  features, 
  buttonText, 
  isPremium = false, 
  delay = 0 
}: PlanCardProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  const cardClasses = isPremium 
    ? "border-2 border-[#a78bfa] bg-gradient-to-br from-[#0a0a0a]/95 via-[#1a0b2e]/90 to-[#2d1b69]/85 backdrop-blur-2xl hover:border-[#c084fc] hover:shadow-[0_0_60px_rgba(167,139,250,0.6)]"
    : "border border-white/15 bg-white/5 backdrop-blur-xl hover:bg-white/8 hover:border-white/25";

  const titleClasses = isPremium 
    ? "bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] bg-clip-text text-transparent"
    : "text-white";

  const buttonClasses = isPremium
    ? "group/btn relative w-full inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-white font-medium border border-[#a78bfa]/50 bg-gradient-to-r from-[#8b5cf6]/20 via-[#a78bfa]/15 to-[#c084fc]/20 backdrop-blur-2xl shadow-[0_8px_32px_rgba(167,139,250,0.4)] transition-all duration-300 hover:border-[#a78bfa]/70 hover:shadow-[0_12px_40px_rgba(167,139,250,0.5)] hover:from-[#8b5cf6]/30 hover:via-[#a78bfa]/25 hover:to-[#c084fc]/30 text-base"
    : "w-full inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white/20 text-white/90 hover:text-white hover:border-white/40 transition-all duration-300 text-base";

  return (
    <motion.div
      initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
      animate={isMobile ? { opacity: 1 } : undefined}
      whileInView={isMobile ? undefined : { opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={isMobile ? { duration: 0 } : { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
      className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-500 w-full max-w-md h-full flex flex-col ${cardClasses}`}
      style={isPremium ? {
        boxShadow: 'inset 0 0 60px rgba(167,139,250,0.1), 0 0 40px rgba(167,139,250,0.4), 0 0 0 2px rgba(167,139,250,0.3), 0 0 20px rgba(167,139,250,0.2)'
      } : {}}
    >
      {/* Badge para Premium */}
      {isPremium && (
        <div className="absolute top-4 sm:top-6 right-3 sm:right-4">
          <span className="relative inline-flex items-center px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium text-white border border-[#a78bfa]/50 bg-gradient-to-r from-[#8b5cf6]/20 via-[#a78bfa]/15 to-[#c084fc]/20 backdrop-blur-2xl shadow-[0_8px_32px_rgba(167,139,250,0.4)] transition-all duration-300 hover:border-[#a78bfa]/70 hover:shadow-[0_12px_40px_rgba(167,139,250,0.5)]">
            <span className="relative z-10">Más Popular</span>
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#8b5cf6]/30 via-[#a78bfa]/25 to-[#c084fc]/30 blur-sm opacity-60" />
            <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#8b5cf6]/20 via-[#a78bfa]/15 to-[#c084fc]/20 blur-lg opacity-40" />
          </span>
        </div>
      )}

      {/* Efectos para Premium */}
      {isPremium && (
        <>
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#8b5cf6]/20 via-[#a78bfa]/15 to-[#8b5cf6]/20 opacity-40 blur-xl" />
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-[#8b5cf6]/30 to-[#a78bfa]/25 opacity-30 blur-lg" />
        </>
      )}

      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="flex-shrink-0">
          <h3 className={`font-heading text-xl sm:text-2xl mb-4 sm:mb-6 text-left ${titleClasses}`}>
            {title}
          </h3>
          
        <div className="mb-4 sm:mb-6">
          <div className="flex items-baseline gap-3">
            <div className={`font-bold text-4xl text-white`}>
              {price}
            </div>
            {oldPrice && (
              <div className="text-white/40 line-through tracking-wide">
                {oldPrice}
              </div>
            )}
          </div>
            <div className=" text-white/60 mt-2 mb-6">{maintenance}</div>
          </div>
        </div>

        {/* Features - contenido principal que se expande */}
        <div className="flex-1 mb-6 sm:mb-8">
          <ul className="text-white/80 space-y-2 sm:space-y-3">
            {features.map((feature, index) => (
              <FeatureItem key={index} text={feature} />
            ))}
          </ul>
        </div>

        {/* Button - siempre en la parte inferior */}
        <div className="flex-shrink-0">
          <a href="#contacto" className={buttonClasses}>
            {isPremium ? (
              <>
                <span className="relative z-10">{buttonText}</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#8b5cf6]/30 via-[#a78bfa]/25 to-[#c084fc]/30 blur-sm opacity-0 group-hover/btn:opacity-60 transition-opacity duration-300" />
                <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#8b5cf6]/20 via-[#a78bfa]/15 to-[#c084fc]/20 blur-lg opacity-40" />
              </>
            ) : (
              buttonText
            )}
          </a>
        </div>
      </div>

      {/* Efectos hover para cards normales */}
      {!isPremium && (
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#8b5cf6]/10 to-[#ec4899]/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
      )}
    </motion.div>
  );
}
