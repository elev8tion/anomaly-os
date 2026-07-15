export type MissionStatus =
  | "draft"
  | "planned"
  | "approved"
  | "executing"
  | "verifying"
  | "review"
  | "completed"
  | "blocked"
  | "failed";

export type RiskLevel = "low" | "medium" | "high" | "critical";

export type CriterionStatus = "pending" | "satisfied" | "failed" | "waived";

export interface AcceptanceCriterion {
  id: string;
  statement: string;
  status: CriterionStatus;
  evidenceIds?: string[];
  waiverReason?: string;
}

export interface PlanStep {
  id: string;
  description: string;
  status: "pending" | "active" | "completed" | "blocked" | "skipped";
}

export interface Evidence {
  id: string;
  kind: "test" | "command" | "diff" | "analysis" | "review" | "approval" | "waiver";
  summary: string;
  command?: string;
  exitCode?: number;
  recordedAt: string;
}

export interface Mission {
  id: string;
  title: string;
  outcome: string;
  status: MissionStatus;
  risk: RiskLevel;
  acceptanceCriteria: AcceptanceCriterion[];
  constraints: string[];
  plan: PlanStep[];
  evidence: Evidence[];
}

export const missionCanComplete = (mission: Mission): boolean =>
  mission.acceptanceCriteria.every((criterion) =>
    criterion.status === "satisfied" ||
    (criterion.status === "waived" && Boolean(criterion.waiverReason?.trim())),
  );

export const missionRequiresApproval = (mission: Mission): boolean =>
  mission.risk === "high" || mission.risk === "critical";
