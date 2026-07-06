interface AreaTagsProps {
  areas: string[];
}

export function AreaTags({ areas }: AreaTagsProps) {
  const colors: Record<string, string> = {
    IT: "bg-blue-100 text-blue-800",
    Finance: "bg-emerald-100 text-emerald-800",
    Legal: "bg-indigo-100 text-indigo-800",
    HR: "bg-pink-100 text-pink-800",
    Operations: "bg-orange-100 text-orange-800",
    Sales: "bg-purple-100 text-purple-800",
  };

  return (
    <div className="flex flex-wrap gap-2">
      {areas.map((area) => (
        <span
          key={area}
          className={`rounded px-2.5 py-1 text-xs font-medium ${colors[area] || "bg-gray-100 text-gray-800"}`}
        >
          {area}
        </span>
      ))}
    </div>
  );
}
