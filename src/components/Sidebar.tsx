import { FileText, CheckCircle2, AlertCircle } from "lucide-react";
import type { Scenario } from "../types";

interface SidebarProps {
  scenarios: Scenario[];
  selectedId: string;
  onSelect: (scenario: Scenario) => void;
}

export function Sidebar({ scenarios, selectedId, onSelect }: SidebarProps) {
  return (
    <aside className="flex w-72 flex-col border-r border-[#e1dfdd] bg-white">
      <div className="border-b border-[#e1dfdd] p-4">
        <h2 className="text-sm font-semibold text-[#252424]">Agenda & Beschlüsse</h2>
        <p className="mt-1 text-xs text-[#616161]">Wähle einen Beschlussentwurf zur Simulation</p>
      </div>
      <div className="flex-1 overflow-y-auto p-2">
        {scenarios.map((scenario) => {
          const isActive = scenario.id === selectedId;
          const StatusIcon = scenario.status === "ready" ? CheckCircle2 : AlertCircle;
          const statusColor = scenario.status === "ready" ? "text-green-600" : "text-amber-600";
          return (
            <button
              key={scenario.id}
              onClick={() => onSelect(scenario)}
              className={`flex w-full items-start gap-3 rounded-md p-3 text-left transition-colors ${
                isActive ? "bg-[#e5e5f3]" : "hover:bg-[#f3f2f1]"
              }`}
            >
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded bg-[#f3f2f1]">
                <FileText className="h-4 w-4 text-[#6264a7]" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#252424]">{scenario.title}</span>
                </div>
                <p className="mt-1 line-clamp-2 text-xs text-[#616161]">{scenario.description}</p>
                <div className={`mt-2 flex items-center gap-1 text-xs font-medium ${statusColor}`}>
                  <StatusIcon className="h-3.5 w-3.5" />
                  {scenario.status === "ready" ? "Beschlussreif" : "Entwurf"}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
