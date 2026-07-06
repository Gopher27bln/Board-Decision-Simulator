import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ZAxis,
  ReferenceLine,
  Cell,
} from "recharts";
import type { Stakeholder } from "../types";

interface StakeholderRadarProps {
  stakeholders: Stakeholder[];
}

export function StakeholderRadar({ stakeholders }: StakeholderRadarProps) {
  const internal = stakeholders.filter((s) => s.role === "Intern");
  const external = stakeholders.filter((s) => s.role === "Extern");

  return (
    <div className="h-48 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart margin={{ top: 5, right: 5, bottom: 5, left: -10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e1dfdd" />
          <XAxis
            type="number"
            dataKey="interest"
            name="Interesse"
            domain={[0, 10]}
            tick={{ fontSize: 10 }}
            label={{ value: "Interesse", position: "bottom", fontSize: 10 }}
          />
          <YAxis
            type="number"
            dataKey="influence"
            name="Einfluss"
            domain={[0, 10]}
            tick={{ fontSize: 10 }}
            label={{ value: "Einfluss", angle: -90, position: "insideLeft", fontSize: 10 }}
          />
          <ZAxis type="number" dataKey="interest" range={[60, 120]} />
          <Tooltip
            cursor={{ strokeDasharray: "3 3" }}
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const s = payload[0].payload as Stakeholder;
                return (
                  <div className="rounded border border-[#e1dfdd] bg-white p-2 text-xs shadow">
                    <div className="font-semibold">{s.name}</div>
                    <div className="text-[#616161]">{s.role}</div>
                    <div>Interesse: {s.interest}/10</div>
                    <div>Einfluss: {s.influence}/10</div>
                  </div>
                );
              }
              return null;
            }}
          />
          <ReferenceLine x={5} stroke="#c8c6c4" strokeDasharray="4 4" />
          <ReferenceLine y={5} stroke="#c8c6c4" strokeDasharray="4 4" />
          <Scatter name="Intern" data={internal} fill="#6264a7">
            {internal.map((_, index) => (
              <Cell key={`cell-int-${index}`} fill="#6264a7" />
            ))}
          </Scatter>
          <Scatter name="Extern" data={external} fill="#008575">
            {external.map((_, index) => (
              <Cell key={`cell-ext-${index}`} fill="#008575" />
            ))}
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
      <div className="mt-2 flex justify-center gap-4 text-xs text-[#616161]">
        <span className="flex items-center gap-1">
          <span className="inline-block h-2 w-2 rounded-full bg-[#6264a7]"></span> Intern
        </span>
        <span className="flex items-center gap-1">
          <span className="inline-block h-2 w-2 rounded-full bg-[#008575]"></span> Extern
        </span>
      </div>
    </div>
  );
}
