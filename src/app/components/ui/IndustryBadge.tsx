interface IndustryBadgeProps {
  industry: string;
}

export default function IndustryBadge({ industry }: IndustryBadgeProps) {
  return (
    <div className="group relative flex-shrink-0">
      <div className="relative inline-flex items-center px-6 py-3 rounded-full text-sm font-medium text-white border border-[#a78bfa]/30 bg-gradient-to-r from-[#8b5cf6]/15 via-[#a78bfa]/10 to-[#c084fc]/15 backdrop-blur-xl shadow-[0_8px_32px_rgba(167,139,250,0.2)] transition-all duration-300 hover:border-[#a78bfa]/50 hover:shadow-[0_12px_40px_rgba(167,139,250,0.3)] hover:scale-105">
        <span className="relative z-10">{industry}</span>
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#8b5cf6]/20 via-[#a78bfa]/15 to-[#c084fc]/20 blur-sm opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
        <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#8b5cf6]/10 via-[#a78bfa]/8 to-[#c084fc]/10 blur-lg opacity-40" />
      </div>
    </div>
  );
}

