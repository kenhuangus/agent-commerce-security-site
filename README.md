# Agentic Commerce & Agentic Security Foundations

🌐 **Live GitHub Pages Website:** [https://kenhuangus.github.io/agent-commerce-security-site/](https://kenhuangus.github.io/agent-commerce-security-site/)

A publication-grade, self-contained, GitHub Pages-ready **16-slide interactive presentation deck** on Agentic Commerce Security Foundations, Autonomous Governance, Intent-Based Access Control (IBAC), Memory Hygiene, and Runtime Steering.

Modeled on the architecture and visual design system of [MAESTRO](https://kenhuangus.github.io/maestro-site/).

Presented by **黄连金 (Ken Huang), CISSP** — Adjunct Professor, University of San Francisco (USF); CSA Fellow & Co-Chair of CSA AI Safety Working Groups; OWASP AIVSS Project Lead; CEO of DistributedApps.ai.

---

## Abstract

This presentation outlines an enterprise security and risk governance framework for autonomous machine-to-machine commerce. It examines how organizations can safely deploy AI agents with transactional capabilities by establishing strict financial spending limits, escrow mechanisms, and automated transaction safeguards. The operational model introduces tiered autonomy levels to balance automated execution against enterprise risk, intent-based authorization to prevent unauthorized delegations, and memory controls to safeguard confidential corporate data. Real-time observability and policy interception ensure agents remain aligned with business objectives, prevent costly operational errors, and provide full auditability for compliance.

---

## About the Author: Ken Huang, CISSP

**黄连金 (Ken Huang), CISSP** is an [Adjunct Professor at the University of San Francisco (USF)](https://www.usfca.edu/faculty/ken-huang) and CEO of [DistributedApps.ai](https://distributedapps.ai/). He serves as Fellow and Co-Chair of Cloud Security Alliance (CSA) AI Safety Working Groups—co-authoring the [MAESTRO](https://cloudsecurityalliance.org/blog/2025/02/06/agentic-ai-threat-modeling-framework-maestro) Agentic AI Threat Modeling Framework—and leads the OWASP AI Verification and Security Standard (AIVSS) project. An author of books on AI security and agent systems with Springer, Cambridge, Wiley, and Packt (including *Agentic AI: Theories and Practices* [Springer, 2025] and *Generative AI Security* [Springer, 2024]), his research centers on machine-to-machine payment protocol security, cryptographic contract invariants, Intent-Based Access Control (IBAC), and runtime steering for autonomous multi-agent environments.

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
