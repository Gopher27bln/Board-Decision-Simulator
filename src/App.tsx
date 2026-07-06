import { useState } from "react";
import { scenarios } from "./data/scenarios";
import type { Scenario, Option } from "./types";
import { TeamsFrame } from "./components/TeamsFrame";
import { Sidebar } from "./components/Sidebar";
import { DecisionCockpit } from "./components/DecisionCockpit";

function App() {
  const [selectedScenario, setSelectedScenario] = useState<Scenario>(scenarios[0]);
  const [selectedOption, setSelectedOption] = useState<Option>(scenarios[0].options[0]);

  const handleScenarioChange = (scenario: Scenario) => {
    setSelectedScenario(scenario);
    setSelectedOption(scenario.options[0]);
  };

  return (
    <TeamsFrame>
      <div className="flex h-full">
        <Sidebar
          scenarios={scenarios}
          selectedId={selectedScenario.id}
          onSelect={handleScenarioChange}
        />
        <main className="flex-1 overflow-y-auto bg-[#f3f2f1]">
          <DecisionCockpit
            scenario={selectedScenario}
            selectedOption={selectedOption}
            onSelectOption={setSelectedOption}
          />
        </main>
      </div>
    </TeamsFrame>
  );
}

export default App;
