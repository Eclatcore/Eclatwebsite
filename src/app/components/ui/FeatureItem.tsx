import CheckIcon from "./CheckIcon";

interface FeatureItemProps {
  text: string;
}

export default function FeatureItem({ text }: FeatureItemProps) {
  return (
    <li className="flex items-start gap-3">
      <div className="flex-shrink-0 mt-0.5">
        <div className="size-5 sm:size-6 rounded-full bg-[#a78bfa] flex items-center justify-center shadow-[0_0_8px_rgba(167,139,250,0.5)]">
          <CheckIcon />
        </div>
      </div>
      <div className="flex-1">
        <p className="text-lg leading-relaxed">{text}</p>
      </div>
    </li>
  );
}

