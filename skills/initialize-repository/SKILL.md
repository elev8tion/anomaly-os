# Initialize Repository

Use this skill when a developer asks AnomalyOS to initialize, inspect, or map a repository.

## Objective

Create a trustworthy, reviewable starting point for repository intelligence without modifying application behavior.

## Procedure

1. Identify the repository root and active branch.
2. Detect languages, package managers, frameworks, build systems, and test runners from repository evidence.
3. Locate project instructions such as `AGENTS.md`, contribution guides, and architecture documents.
4. Identify likely commands for formatting, linting, type checking, testing, building, and packaging.
5. Never claim a command is valid until it has either been executed successfully or marked as inferred.
6. Create `.anomaly/` state using the AnomalyOS initializer.
7. Record detected components, commands, uncertainty, and risks in readable files.
8. Do not write secrets, environment values, tokens, or private credentials into generated state.
9. Summarize what was observed, what was inferred, and what remains unknown.

## Required evidence

- repository files supporting every detected technology
- command result for each validated project command
- explicit uncertainty for inferred but untested commands

## Completion criteria

The repository is initialized, generated state is reviewable, no runtime code has changed, and every material claim is supported by evidence.
