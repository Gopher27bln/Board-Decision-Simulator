import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import type { Impact } from "../types";

interface ImpactChartProps {
  impact: Impact;
}

export function ImpactChart({ impact }: ImpactChartProps) {
  const data = [
    { name: "Revenue", value: impact.revenue, fill: "#107c10" },
    { name: "Kosten", value: impact.cost, fill: "#d83b01" },
    { name: "Risiko", value: impact.risk, fill: "#f2a30f" },
    { name: "Time-to-Value", value: impact.timeToValue, fill: "#6264a7" },
  ];

  return (
    <div className="h-48 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 5, right: 5, bottom: 5, left: -20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e1dfdd" />
          <XAxis dataKey="name" tick={{ fontSize: 10 }} />
          <YAxis tick={{ fontSize: 10 }} />
          <Tooltip
            contentStyle={{ fontSize: 12, border: "1px solid #e1dfdd", borderRadius: 4 }}
          />
          <Bar dataKey="value" radius={[4, 4, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <p className="mt-2 text-center text-xs text-[#616161]">
        Time-to-Value: {impact.timeToValue} Monate
      </p>
    </div>
  );
}
