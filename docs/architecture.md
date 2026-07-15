# Architecture

AnomalyOS is a repository-local control plane for engineering work. Pi provides the interactive agent runtime; AnomalyOS supplies structured missions, policy, verification, and durable memory.

## Operating loop

1. Observe repository and delivery signals.
2. Build task-specific context.
3. Convert intent into a mission.
4. Evaluate risk and approval requirements.
5. Execute bounded plan steps.
6. Verify claims with recorded evidence.
7. Review the resulting change independently.
8. Store durable decisions in the repository.

## Core modules

- **Mission Manager** — owns mission state, acceptance criteria, constraints, and transitions.
- **Context Builder** — selects relevant code, documentation, history, and project instructions.
- **Policy Engine** — classifies risk and blocks disallowed operations.
- **Workflow Router** — selects the appropriate skill for a mission.
- **Verification Engine** — chooses and records checks based on affected components and risk.
- **Memory Writer** — stores durable facts, decisions, and validated project commands.

## Repository state

An initialized project will contain an `.anomaly/` directory:

```text
.anomaly/
├── project.json
├── commands.json
├── policies.json
├── architecture.md
├── components/
├── decisions/
├── missions/
└── evidence/
```

Generated state must remain readable, reviewable, and safe to version. Sensitive data and raw secrets must never be written to this directory.

## Mission lifecycle

```text
draft → planned → approved → executing → verifying → review → completed
                              ↘ blocked
                              ↘ failed
```

A mission may only enter `completed` when every required acceptance criterion has evidence or is explicitly waived with a recorded reason.

## Risk model

- **low** — documentation, analysis, or isolated non-runtime changes
- **medium** — bounded implementation changes with local verification
- **high** — authentication, payments, migrations, permissions, or broad API changes
- **critical** — production actions, secret handling, destructive operations, or irreversible external effects

High and critical missions require explicit approval before execution. Critical operations should be unavailable by default.
