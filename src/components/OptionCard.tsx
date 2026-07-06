import type { Option } from "../types";

interface OptionCardProps {
  option: Option;
  isSelected: boolean;
  onClick: () => void;
}

export function OptionCard({ option, isSelected, onClick }: OptionCardProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg border p-4 text-left transition-all ${
        isSelected
          ? "border-[#6264a7] bg-[#f5f5fb] shadow-sm ring-1 ring-[#6264a7]"
          : "border-[#e1dfdd] bg-white hover:bg-[#f9f9f9]"
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-[#252424]">{option.label}</span>
        {isSelected && (
          <span className="rounded bg-[#6264a7] px-1.5 py-0.5 text-[10px] font-semibold text-white">
            AKTIV
          </span>
        )}
      </div>
      <p className="mt-2 line-clamp-3 text-xs text-[#616161]">{option.summary}</p>
    </button>
  );
}
