import CheckIcon from "./CheckIcon";

interface FeatureItemProps {
  text: string;
}

export default function FeatureItem({ text }: FeatureItemProps) {
  return (
    <li className="flex items-center">
      <div className="w-[10%]">
        <div className="size-6 shrink-0 rounded-full bg-[#a78bfa] flex items-center justify-center shadow-[0_0_8px_rgba(167,139,250,0.5)]">
          <CheckIcon />
        </div>
      </div>
      <div className="w-[90%]">
        <p>{text}</p>
      </div>
    </li>
  );
}

