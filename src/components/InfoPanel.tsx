import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

interface InfoPanelProps {
  icon: LucideIcon;
  title: string;
  color: string;
  children: ReactNode;
}

export function InfoPanel({ icon: Icon, title, color, children }: InfoPanelProps) {
  return (
    <div className="flex flex-col rounded-lg border border-[#e1dfdd] bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center gap-2">
        <div className={`flex h-8 w-8 items-center justify-center rounded ${color}`}>
          <Icon className="h-4 w-4" />
        </div>
        <h3 className="text-sm font-semibold text-[#252424]">{title}</h3>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}
