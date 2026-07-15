# Roadmap

## Milestone 0 — Foundation

- Define mission, evidence, risk, and lifecycle contracts.
- Initialize repository-owned `.anomaly/` state.
- Establish package structure and TypeScript domain model.
- Document operating principles and architecture.

## Milestone 1 — Pi command surface

- Register `/anomaly init`.
- Register `/anomaly issue` to create a structured mission.
- Register `/anomaly status` to render mission state.
- Add input validation and useful error messages.
- Package the extension for local installation.

## Milestone 2 — Planning and policy

- Generate bounded plans linked to acceptance criteria.
- Classify risk from affected systems and requested operations.
- Require approval for high-risk missions.
- Enforce protected paths and forbidden commands.

## Milestone 3 — Verification

- Discover repository commands and record confidence.
- Select checks based on changed components.
- Capture test, build, lint, and type-check evidence.
- Prevent completion without satisfied or explicitly waived criteria.

## Milestone 4 — Repository intelligence

- Map components, entry points, dependencies, and tests.
- Track architectural decisions and validated project knowledge.
- Produce a concise engineering brief.

## Milestone 5 — Issue-to-PR workflow

- Ingest GitHub issues.
- Create an approved implementation mission.
- Execute on a branch.
- Verify and independently review the diff.
- Open a pull request with complete evidence.

## v0.1 definition of done

A developer can initialize a repository, create a mission, approve a bounded plan, execute it through Pi, and receive a verification report that maps evidence to every acceptance criterion.
