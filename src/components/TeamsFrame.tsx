import { type ReactNode } from "react";
import { ChevronLeft, MoreHorizontal, Users, Video } from "lucide-react";

interface TeamsFrameProps {
  children: ReactNode;
}

export function TeamsFrame({ children }: TeamsFrameProps) {
  return (
    <div className="flex h-screen w-full flex-col bg-[#f3f2f1]">
      {/* Top navigation bar */}
      <header className="flex h-12 items-center justify-between border-b border-[#e1dfdd] bg-[#f3f2f1] px-3">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded hover:bg-[#e1dfdd]">
            <ChevronLeft className="h-5 w-5 text-[#616161]" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-[#616161]">Boardwise GmbH &gt; Vorstand</span>
            <span className="text-sm font-semibold text-[#252424]">Board Meeting – Decision Simulator</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex h-8 items-center gap-1 rounded bg-[#e1dfdd] px-2 text-xs font-medium text-[#424242]">
            <Video className="h-4 w-4" />
            Meeting läuft
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded hover:bg-[#e1dfdd]">
            <Users className="h-5 w-5 text-[#616161]" />
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded hover:bg-[#e1dfdd]">
            <MoreHorizontal className="h-5 w-5 text-[#616161]" />
          </div>
          <div className="ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#6264a7] text-xs font-semibold text-white">
            BG
          </div>
        </div>
      </header>

      {/* Tab bar */}
      <div className="flex h-10 items-center border-b border-[#e1dfdd] bg-white px-4">
        <div className="flex h-full items-center border-b-2 border-[#6264a7] px-3 text-sm font-semibold text-[#252424]">
          Decision Simulator
        </div>
        <div className="flex h-full items-center px-3 text-sm text-[#616161] hover:bg-[#f3f2f1]">
          Protokoll
        </div>
        <div className="flex h-full items-center px-3 text-sm text-[#616161] hover:bg-[#f3f2f1]">
          Dokumente
        </div>
      </div>

      {/* Content area */}
      <div className="flex-1 overflow-hidden p-4">{children}</div>
    </div>
  );
}
