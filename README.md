# Agentic Commerce & Agentic Security Foundations

🌐 **Live GitHub Pages Website:** [https://kenhuangus.github.io/agent-commerce-security-site/](https://kenhuangus.github.io/agent-commerce-security-site/)

A publication-grade, self-contained, GitHub Pages-ready **16-slide interactive presentation deck** on Agentic Commerce Security Foundations, Autonomous Governance, Intent-Based Access Control (IBAC), Memory Hygiene, and Runtime Steering.

Modeled on the architecture and visual design system of [MAESTRO](https://kenhuangus.github.io/maestro-site/).

Presented by **黄连金 (Ken Huang), CISSP** — Adjunct Professor, University of San Francisco (USF); CSA Fellow & Co-Chair of CSA AI Safety Working Groups; OWASP AIVSS Project Lead; CEO of DistributedApps.ai.

---

## Abstract

As autonomous AI agents transition from passive cognitive advisors to active economic actors executing machine-to-machine (M2M) financial transactions, conventional perimeter defenses and human-in-the-loop checkout models become obsolete. This 16-slide interactive presentation establishes an end-to-end architectural framework for securing agentic commerce systems. It formalizes non-custodial payment rails (HTTP 402/x402, Metered Payment Protocol [MPP], and ERC-8004 A2A-Pay) integrated with smart contract mathematical invariants that strictly bound spend velocity, enforce timelocks, and prevent prompt-injected overrides. Systemic governance is structured across a 6-tier Levels of Autonomy (LoA 0–5) taxonomy equipped with multi-dimensional threshold controls and automated circuit breakers that demote agent authority upon anomaly detection. To eliminate ambient authority and neutralize Confused Deputy attacks, natural language requests are mapped into formal domain ontologies to dynamically compile single-use, attenuated capability tokens (Intent-Based Access Control / IBAC). Long-horizon memory and contextual integrity are safeguarded by a 3-tier defensive memory architecture (Ephemeral Turn, Quarantined Buffer with CRDTs and strict TTL, and Verified Long-Term Storage) that prevents indirect prompt poisoning, temporal drift, and split-brain deadlocks. Finally, OpenTelemetry GenAI semantic DAG tracing and deterministic runtime steering gates (PreToolUse/PostToolUse interceptors) provide millisecond-level containment against unauthorized trajectories, delivering a production-ready defense-in-depth harness for enterprise autonomous commerce.

---

## 16 Slides Overview

1. **Title Cover / Hero**: Architectural overview of Agentic Commerce & Agentic Security Foundations.
2. **About the Speaker & Research Foundation**: Credentials, academic posts, and publications.
3. **Agentic Commerce Paradigm & Threat Landscape**: M2M autonomous financial execution vs. Web2 e-commerce.
4. **Modern Agent Payment Protocols**: HTTP 402/x402, Metered Payment Protocol (MPP), and A2A-Pay (ERC-8004).
5. **Financial Security Contracts & Cryptographic Invariants**: Conditional escrow, timelocks, slashing, and spend velocity caps.
6. **Autonomy Governance (Levels of Autonomy)**: Formal 6-tier LoA 0 to LoA 5 operational taxonomy.
7. **Threshold Control & Blast Radius Containment**: Multi-dimensional financial, tool, and anomaly thresholds + circuit breakers.
8. **Agent Identity (Spec-Driven Job Descriptions)**: SJD contracts, ephemeral Ed25519 keypairs, and eliminating ambient authority.
9. **Domain Ontology for Intent Determination**: Grounding natural language into formal ontological action graphs.
10. **Intent-Based Access Control (IBAC)**: Dynamic compilation of single-use, least-privilege capability tokens (`CapToken`).
11. **Context & Memory Threats**: Memory poisoning, indirect prompt injection, temporal drift, and multi-agent split-brain conflicts.
12. **Memory Hygiene Architecture**: Provenance attestation, 3-tier memory model (Ephemeral, Quarantined Buffer, Long-Term), and TTL invalidation.
13. **Behavioral Observability & Trajectory Monitoring**: OTel GenAI semantic DAG tracing, semantic drift scoring, and loop interception.
14. **Runtime Steering & Active Policy Interception**: Deterministic PreToolUse/PostToolUse hooks, out-of-band steering, step-down, and kill switches.
15. **Evaluation, Benchmarks & Token Efficiency Optimization**: Task Completion Rate (TCR), 100% Invariant Compliance, and context-pruned token ROI (White Background).
16. **Summary & Open Q/A**: 6 Core Defense Pillars synthesis, interactive audience discussion prompts, and research collaborations.

---

## Interactive Navigation Controls

- **Next Slide:** `→` (Arrow Right) / `Space` / `PageDown` / Click `Next ›`
- **Previous Slide:** `←` (Arrow Left) / `PageUp` / Click `‹ Prev`
- **Jump to Start / End:** `Home` / `End`
- **Fullscreen Mode:** `F` or click `Full Screen`
- **Language Switcher:** Click `EN` or `中文` in the header bar
- **Hash Deep Linking:** Link directly to any slide via URL hash (e.g. `#1` to `#16`)
- **Swipe / Wheel:** Touch swipe on mobile or debounced scroll wheel on desktop

---

## Local Development & Viewing

```bash
cd C:\Users\kenhu\agent-commerce-security-site
python -m http.server 8000
# Open http://localhost:8000
```
