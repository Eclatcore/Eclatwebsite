import { motion } from "framer-motion";
import FeatureItem from "./FeatureItem";

interface PlanCardProps {
  title: string;
  price: string;
  maintenance: string;
  features: string[];
  buttonText: string;
  isPremium?: boolean;
  delay?: number;
}

export default function PlanCard({ 
  title, 
  price, 
  maintenance, 
  features, 
  buttonText, 
  isPremium = false, 
  delay = 0 
}: PlanCardProps) {
  const cardClasses = isPremium 
    ? "border-2 border-[#a78bfa] bg-gradient-to-br from-[#0a0a0a]/95 via-[#1a0b2e]/90 to-[#2d1b69]/85 backdrop-blur-2xl hover:border-[#c084fc] hover:shadow-[0_0_60px_rgba(167,139,250,0.6)]"
    : "border border-white/15 bg-white/5 backdrop-blur-xl hover:bg-white/8 hover:border-white/25";

  const titleClasses = isPremium 
    ? "bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] bg-clip-text text-transparent"
    : "text-white";

  const buttonClasses = isPremium
    ? "group/btn relative w-full inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-white font-medium border border-[#a78bfa]/50 bg-gradient-to-r from-[#8b5cf6]/20 via-[#a78bfa]/15 to-[#c084fc]/20 backdrop-blur-2xl shadow-[0_8px_32px_rgba(167,139,250,0.4)] transition-all duration-300 hover:border-[#a78bfa]/70 hover:shadow-[0_12px_40px_rgba(167,139,250,0.5)] hover:from-[#8b5cf6]/30 hover:via-[#a78bfa]/25 hover:to-[#c084fc]/30 text-sm sm:text-base"
    : "w-full inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white/20 text-white/90 hover:text-white hover:border-white/40 transition-all duration-300 text-sm sm:text-base";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
      className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-500 w-full max-w-md ${isPremium ? 'h-[550px] sm:h-[600px]' : 'h-[450px] sm:h-[500px]'} flex flex-col justify-center ${cardClasses}`}
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

      <div className="relative z-10">
        <h3 className={`font-heading text-xl sm:text-2xl mb-4 sm:mb-6 text-left ${titleClasses}`}>
          {title}
        </h3>
        
        <div className="mb-4 sm:mb-6">
          <div className={`font-bold mb-1 ${isPremium ? 'text-3xl sm:text-4xl lg:text-5xl' : 'text-2xl sm:text-3xl lg:text-4xl'} text-white`}>
            {price}
          </div>
          <div className="text-xs sm:text-sm text-white/60">{maintenance}</div>
        </div>

        <ul className="text-white/80 space-y-2 sm:space-y-3 mb-6 sm:mb-8">
          {features.map((feature, index) => (
            <FeatureItem key={index} text={feature} />
          ))}
        </ul>

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

      {/* Efectos hover para cards normales */}
      {!isPremium && (
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#8b5cf6]/10 to-[#ec4899]/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
      )}
    </motion.div>
  );
}
