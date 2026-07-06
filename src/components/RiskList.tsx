import { AlertTriangle, AlertCircle, Info } from "lucide-react";
import type { Risk } from "../types";

interface RiskListProps {
  risks: Risk[];
}

export function RiskList({ risks }: RiskListProps) {
  const severityConfig = {
    high: { icon: AlertTriangle, color: "text-red-600", bg: "bg-red-50", label: "Hoch" },
    medium: { icon: AlertCircle, color: "text-amber-600", bg: "bg-amber-50", label: "Mittel" },
    low: { icon: Info, color: "text-blue-600", bg: "bg-blue-50", label: "Niedrig" },
  };

  return (
    <ul className="space-y-2">
      {risks.map((risk, index) => {
        const config = severityConfig[risk.severity];
        const Icon = config.icon;
        return (
          <li key={index} className="flex items-start gap-2 rounded bg-[#f9f9f9] p-2">
            <div className={`mt-0.5 rounded p-1 ${config.bg}`}>
              <Icon className={`h-3.5 w-3.5 ${config.color}`} />
            </div>
            <div className="flex-1">
              <div className="text-xs font-semibold text-[#252424]">{risk.text}</div>
              <div className={`text-[10px] uppercase ${config.color}`}>{config.label}</div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
