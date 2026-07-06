export interface Stakeholder {
  name: string;
  role: string;
  interest: number; // 1-10
  influence: number; // 1-10
}

export interface Risk {
  text: string;
  severity: "low" | "medium" | "high";
}

export interface Impact {
  revenue: number; // -5 to +5 relative score
  cost: number; // 1-5
  risk: number; // 1-5
  timeToValue: number; // months
}

export interface Option {
  id: string;
  label: string;
  summary: string;
  impact: Impact;
  affectedAreas: string[];
  risks: Risk[];
  approvals: string[];
  openQuestions: string[];
  stakeholderRadar: Stakeholder[];
}

export interface Scenario {
  id: string;
  title: string;
  description: string;
  status: "draft" | "ready" | "pending";
  options: Option[];
}
