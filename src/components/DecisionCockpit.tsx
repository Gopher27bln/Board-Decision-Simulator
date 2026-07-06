import type { Scenario, Option } from "../types";
import { OptionCard } from "./OptionCard";
import { ImpactChart } from "./ImpactChart";
import { AreaTags } from "./AreaTags";
import { RiskList } from "./RiskList";
import { ApprovalList } from "./ApprovalList";
import { OpenQuestions } from "./OpenQuestions";
import { StakeholderRadar } from "./StakeholderRadar";
import { InfoPanel } from "./InfoPanel";
import { Cpu, AlertTriangle, ShieldCheck, HelpCircle, Users } from "lucide-react";

interface DecisionCockpitProps {
  scenario: Scenario;
  selectedOption: Option;
  onSelectOption: (option: Option) => void;
}

export function DecisionCockpit({ scenario, selectedOption, onSelectOption }: DecisionCockpitProps) {
  return (
    <div className="flex h-full flex-col gap-4">
      {/* Header */}
      <div className="rounded-lg border border-[#e1dfdd] bg-white p-5 shadow-sm">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span
                className={`rounded px-2 py-0.5 text-xs font-semibold ${
                  scenario.status === "ready"
                    ? "bg-green-100 text-green-700"
                    : "bg-amber-100 text-amber-700"
                }`}
              >
                {scenario.status === "ready" ? "Beschlussreif" : "Entwurf"}
              </span>
              <span className="text-xs text-[#616161]">Board Decision Simulator</span>
            </div>
            <h1 className="mt-2 text-xl font-bold text-[#252424]">{scenario.title}</h1>
            <p className="mt-1 max-w-3xl text-sm text-[#616161]">{scenario.description}</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-[#6264a7] text-center leading-10 text-sm font-semibold text-white">
              AI
            </div>
            <div className="text-xs text-[#616161]">
              <div className="font-semibold text-[#252424]">Boardwise AI</div>
              <div>Impact-Simulation</div>
            </div>
          </div>
        </div>
      </div>

      {/* Option cards */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {scenario.options.map((option) => (
          <OptionCard
            key={option.id}
            option={option}
            isSelected={option.id === selectedOption.id}
            onClick={() => onSelectOption(option)}
          />
        ))}
      </div>

      {/* Dashboard panels */}
      <div className="grid flex-1 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <InfoPanel icon={Cpu} title="Impact & Business Value" color="bg-blue-50 text-blue-700">
          <ImpactChart impact={selectedOption.impact} />
        </InfoPanel>

        <InfoPanel icon={Users} title="Stakeholder Radar" color="bg-purple-50 text-purple-700">
          <StakeholderRadar stakeholders={selectedOption.stakeholderRadar} />
        </InfoPanel>

        <InfoPanel icon={ShieldCheck} title="Betroffene Bereiche" color="bg-teal-50 text-teal-700">
          <AreaTags areas={selectedOption.affectedAreas} />
        </InfoPanel>

        <InfoPanel icon={AlertTriangle} title="Risiken & Abhängigkeiten" color="bg-red-50 text-red-700">
          <RiskList risks={selectedOption.risks} />
        </InfoPanel>

        <InfoPanel icon={ShieldCheck} title="Benötigte Freigaben" color="bg-indigo-50 text-indigo-700">
          <ApprovalList approvals={selectedOption.approvals} />
        </InfoPanel>

        <InfoPanel icon={HelpCircle} title="Fehlende Informationen" color="bg-amber-50 text-amber-700">
          <OpenQuestions questions={selectedOption.openQuestions} />
        </InfoPanel>
      </div>
    </div>
  );
}
