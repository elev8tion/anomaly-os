# AnomalyOS

**AnomalyOS is an evidence-first engineering operating system built on Pi.**

It turns engineering intent into controlled, reviewable missions:

> Observe → Understand → Prioritize → Plan → Execute → Verify → Document → Learn

## Vision

Most AI coding tools optimize for code generation. AnomalyOS optimizes for trustworthy engineering outcomes. Every meaningful action should produce evidence: why a change was made, which assumptions were used, what was verified, and what risk remains.

## v0.1 objective

The first release will take a well-defined issue and produce:

- explicit acceptance criteria
- a scoped implementation plan
- controlled execution
- component-aware verification
- an independent review summary
- durable repository knowledge

## Initial commands

```text
/anomaly init
/anomaly map
/anomaly brief
/anomaly issue <description>
/anomaly plan
/anomaly execute
/anomaly verify
/anomaly review
/anomaly status
```

## Principles

1. **Evidence over confidence** — completion claims require verification artifacts.
2. **Autonomy is earned** — higher-risk actions require stronger controls and approval.
3. **The repository is the source of truth** — durable knowledge lives in readable, versioned files.
4. **Plans are contracts** — execution remains bounded by acceptance criteria and constraints.
5. **Models are replaceable** — workflows, policy, memory, and evidence are the durable product.

## Status

AnomalyOS is in active early development. The current milestone is a repository-local Pi package that can initialize project intelligence and create structured engineering missions.
