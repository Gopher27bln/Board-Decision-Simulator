import { CheckCircle2 } from "lucide-react";

interface ApprovalListProps {
  approvals: string[];
}

export function ApprovalList({ approvals }: ApprovalListProps) {
  return (
    <ul className="space-y-2">
      {approvals.map((approval, index) => (
        <li key={index} className="flex items-center gap-2 rounded bg-[#f9f9f9] p-2">
          <CheckCircle2 className="h-4 w-4 shrink-0 text-[#6264a7]" />
          <span className="text-xs text-[#252424]">{approval}</span>
        </li>
      ))}
    </ul>
  );
}
