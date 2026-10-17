# Agent Commerce & Agentic Security Foundations

A publication-grade, self-contained, GitHub Pages-ready **15-slide interactive presentation deck** on Agent Commerce Security Foundations, Autonomous Governance, Intent-Based Access Control (IBAC), and Memory Hygiene.

Modeled on the architecture and visual design system of [MAESTRO](https://kenhuangus.github.io/maestro-site/).

Presented by **Ken Huang, CISSP** — Adjunct Professor, University of San Francisco (USF); CSA Fellow & Co-Chair of CSA AI Safety Working Groups; OWASP AIVSS Project Lead; CEO of DistributedApps.ai.

---

## 15 Slides Overview

1. **Title Cover / Hero**: Architectural overview of Agent Commerce & Agentic Security Foundations.
2. **About the Speaker & Research Foundation**: Credentials, academic posts, and publications.
3. **Agent Commerce Paradigm & Threat Landscape**: M2M autonomous financial execution vs. Web2 e-commerce.
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
15. **Evaluation, Benchmarks & Token Efficiency Optimization**: Task Completion Rate (TCR), 100% Invariant Compliance, and context-pruned token ROI.

---

## Interactive Navigation Controls

- **Next Slide:** `→` (Arrow Right) / `Space` / `PageDown` / Click `Next ›`
- **Previous Slide:** `←` (Arrow Left) / `PageUp` / Click `‹ Prev`
- **Jump to Start / End:** `Home` / `End`
- **Fullscreen Mode:** `F` or click `Full Screen`
- **Language Switcher:** Click `EN` or `中文` in the header bar
- **Hash Deep Linking:** Link directly to any slide via URL hash (e.g. `#1` to `#15`)
- **Swipe / Wheel:** Touch swipe on mobile or debounced scroll wheel on desktop

---

## Local Development & Viewing

```bash
cd C:\Users\kenhu\agent-commerce-security-site
python -m http.server 8000
# Open http://localhost:8000
```
