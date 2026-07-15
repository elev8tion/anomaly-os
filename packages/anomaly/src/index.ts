import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import type { Mission, RiskLevel } from "./domain.js";

export interface InitResult {
  root: string;
  created: string[];
}

const anomalyDirectories = [
  ".anomaly/components",
  ".anomaly/decisions",
  ".anomaly/missions",
  ".anomaly/evidence",
] as const;

export async function initializeRepository(root = process.cwd()): Promise<InitResult> {
  const created: string[] = [];

  for (const directory of anomalyDirectories) {
    const absolute = join(root, directory);
    await mkdir(absolute, { recursive: true });
    created.push(directory);
  }

  const projectPath = join(root, ".anomaly/project.json");
  const project = {
    schemaVersion: 1,
    initializedAt: new Date().toISOString(),
    repositoryRoot: ".",
    evidenceRequired: true,
  };

  await writeFile(projectPath, `${JSON.stringify(project, null, 2)}\n`, {
    flag: "wx",
  }).catch((error: NodeJS.ErrnoException) => {
    if (error.code !== "EEXIST") throw error;
  });
  created.push(".anomaly/project.json");

  return { root, created };
}

export function createMission(input: {
  id: string;
  title: string;
  outcome: string;
  risk?: RiskLevel;
  acceptanceCriteria: string[];
  constraints?: string[];
}): Mission {
  if (input.acceptanceCriteria.length === 0) {
    throw new Error("A mission requires at least one acceptance criterion.");
  }

  return {
    id: input.id,
    title: input.title,
    outcome: input.outcome,
    status: "draft",
    risk: input.risk ?? "medium",
    acceptanceCriteria: input.acceptanceCriteria.map((statement, index) => ({
      id: `ac-${index + 1}`,
      statement,
      status: "pending",
    })),
    constraints: input.constraints ?? [],
    plan: [],
    evidence: [],
  };
}

export async function saveMission(root: string, mission: Mission): Promise<string> {
  const missionDirectory = join(root, ".anomaly/missions");
  await mkdir(missionDirectory, { recursive: true });
  const destination = join(missionDirectory, `${mission.id}.json`);
  await writeFile(destination, `${JSON.stringify(mission, null, 2)}\n`, "utf8");
  return destination;
}

export async function loadMission(root: string, id: string): Promise<Mission> {
  const source = join(root, ".anomaly/missions", `${id}.json`);
  return JSON.parse(await readFile(source, "utf8")) as Mission;
}
