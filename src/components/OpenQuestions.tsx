import { HelpCircle } from "lucide-react";

interface OpenQuestionsProps {
  questions: string[];
}

export function OpenQuestions({ questions }: OpenQuestionsProps) {
  return (
    <ul className="space-y-2">
      {questions.map((question, index) => (
        <li key={index} className="flex items-start gap-2 rounded bg-[#f9f9f9] p-2">
          <HelpCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#f2a30f]" />
          <span className="text-xs text-[#252424]">{question}</span>
        </li>
      ))}
    </ul>
  );
}
