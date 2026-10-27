/* ============================================================
   Agentic Commerce & Agentic Security Foundations — Bilingual i18n
   Full English and Chinese translations for all 16 slides
   Strict Rule: Ken Huang is Adjunct Professor, University of San Francisco (USF) / 旧金山大学 (USF) 客座教授
   ============================================================ */
(function () {
  const DICT = {
    en: {
      "ui.fullscreen": "Full Screen",
      "ui.exitFull": "Exit Full",
      "ui.prev": "‹ Prev",
      "ui.next": "Next ›",
      "ui.launch": "Documentation ↗",
      "ui.repo": "GitHub Repo ↗",

      "slide.1.title": "Agentic Commerce & Security Foundations",
      "slide.2.title": "About the Instructor: Ken Huang, CISSP",
      "slide.3.title": "Commerce Threat Landscape",
      "slide.4.title": "Modern Payment Protocols",
      "slide.5.title": "Financial Security Contracts",
      "slide.6.title": "Autonomy Governance (LoA)",
      "slide.7.title": "Threshold Control & Circuit Breakers",
      "slide.8.title": "Agent Identity & Spec-Driven Descriptions",
      "slide.9.title": "Domain Ontology for Intent",
      "slide.10.title": "Intent-Based Access Control (IBAC)",
      "slide.11.title": "Context & Memory Threats",
      "slide.12.title": "Memory Hygiene Architecture",
      "slide.13.title": "Behavioral Observability & Trajectory",
      "slide.14.title": "Runtime Steering & Control Plane",
      "slide.15.title": "Evaluation, Benchmarks & Token ROI",
      "slide.16.title": "Summary & Open Q/A: Foundations of Agentic Commerce Security",

      // Slide 1
      "hero.eyebrow": "Autonomous Systems & Agentic Commerce Security",
      "hero.title": "AGENTIC COMMERCE & AGENTIC SECURITY",
      "hero.acronym": "<b>P</b>ayment Protocols · <b>S</b>mart Contracts · <b>A</b>utonomy · <b>I</b>BAC · <b>M</b>emory · <b>O</b>bservability",
      "hero.sub": "The Definitive <strong>Foundations &amp; Architecture Blueprint</strong> for Securing Autonomous Financial Execution and Agent Behavior",
      "hero.by": "Presented by <strong>Ken Huang, CISSP</strong><br/>Adjunct Professor, University of San Francisco (USF) · Fellow &amp; Co-Chair, CSA AI Safety Working Groups · CEO, DistributedApps.ai",
      "hero.start": "Start Presentation ➔",
      "hero.spec": "Explore Full Blueprint ↗",

      // Slide 2
      "about.kicker": "Authority & Academic Grounding",
      "about.h2": "About the Instructor: Ken Huang, CISSP",
      "about.b1": "🎓 <strong>Adjunct Professor, University of San Francisco (USF)</strong> &amp; CEO of <a href=\"https://distributedapps.ai/\" target=\"_blank\" rel=\"noopener noreferrer\">DistributedApps.ai</a>",
      "about.b2": "🛡️ <strong>Fellow &amp; Co-Chair, CSA AI Safety Working Groups</strong> (MAESTRO) &amp; OWASP AIVSS Lead",
      "about.b3": "📚 <strong>Author of AI Security &amp; Agent Books</strong> (<a href=\"https://www.amazon.com/dp/B0HF3F86YM\" target=\"_blank\" rel=\"noopener noreferrer\">Harness Engineering</a>, Springer, Cambridge, Wiley)",
      "about.pubs": "📚 Featured AI Security Books (Packt · Springer · Cambridge · Wiley)",
      "about.amazon": "Amazon Author Page ➔",

      // Slide 3
      "s3.kicker": "The Financial Frontier",
      "s3.h2": "The Agentic Commerce Paradigm & Attack Surface",
      "s3.lead": "Autonomous agents executing machine-to-machine financial transactions introduce severe systemic risks where prompt manipulation directly triggers irreversible monetary loss.",
      "s3.tag": "Attack Surface",
      "s3.card_title": "Web2 vs. Agentic Commerce Paradigm Shift",
      "s3.p1_t": "Autonomous Financial Execution:",
      "s3.p1_d": "M2M agents hold wallet keys and execute API transactions autonomously without human form-filling or manual 2FA.",
      "s3.p2_t": "Irreversible Settlement Rails:",
      "s3.p2_d": "Transactions settle instantly on-chain, eliminating the 30–90 day chargeback safety net of Web2 credit networks.",
      "s3.p3_t": "Prompt Injection as Direct Drain:",
      "s3.p3_d": "Indirect prompt injections in invoices or quotes manipulate tool arguments to drain treasury vaults without credential theft.",

      // Slide 4
      "s4.kicker": "Machine-to-Machine Rails",
      "s4.h2": "Modern Agent Payment Protocols: The Modern Rail Stack",
      "s4.lead": "Agentic commerce requires micro-metered, low-latency, non-custodial payment rails eliminating human checkout friction while enforcing cryptographic non-repudiation.",
      "s4.tag": "Protocol Rails",
      "s4.card_title": "3 Pillars of Autonomous Payments",
      "s4.p1_t": "HTTP 402 / x402 Protocol:",
      "s4.p1_d": "Revives native web payments—servers return a 402 challenge, and client agents sign an off-chain EIP-712 voucher in the X-PAYMENT header.",
      "s4.p2_t": "Metered Payment Protocol (MPP):",
      "s4.p2_d": "Enables streaming micropayments per inference token through off-chain state channels, settling net balances periodically on-chain.",
      "s4.p3_t": "A2A-Pay & Task Escrow (ERC-8004):",
      "s4.p3_d": "Decentralized peer-to-peer escrow holding buyer deposits until independent evaluator agents verify cryptographic delivery proofs.",

      // Slide 5
      "s5.kicker": "Programmable Trust",
      "s5.h2": "Financial Security Contracts & Cryptographic Invariants",
      "s5.lead": "Smart contracts in agentic commerce must enforce hard mathematical invariants that cannot be overridden by LLM hallucinations or adversarial prompt manipulation.",
      "s5.tag": "On-Chain Invariants",
      "s5.card_title": "Mathematical Guardrails in Smart Contracts",
      "s5.p1_t": "Conditional Escrow & Timelocks:",
      "s5.p1_d": "Funds remain programmatically locked until cryptographic delivery proofs verify; automated refunds trigger if SLA expires.",
      "s5.p2_t": "Velocity Caps & Hard Limits:",
      "s5.p2_d": "On-chain mathematical caps enforce maximum spend per transaction and 24h rolling window, isolating working capital from cold treasury.",
      "s5.p3_t": "Multi-Sig & Slashing Stakes:",
      "s5.p3_d": "High-value transfers require M-of-N multi-agent consensus, while malicious service agents suffer automated stake slashing.",

      // Slide 6
      "s6.kicker": "The Autonomy Spectrum",
      "s6.h2": "Autonomy Governance: Levels of Autonomy (LoA 0 to LoA 5)",
      "s6.lead": "Autonomy is not binary. Organizations must classify and bound agent systems across a formal 6-tier Level of Autonomy framework based on risk profile and operational blast radius.",
      "s6.tag": "LoA Taxonomy",
      "s6.card_title": "The 6 Levels of Operational Autonomy",
      "s6.p1_t": "Tiered Autonomy Spectrum (LoA 0 to LoA 5):",
      "s6.p1_d": "Categorizes agent autonomy from advisory (LoA 0) to supervised delegation (LoA 3) to unconstrained autonomy (LoA 5).",
      "s6.p2_t": "Production Baseline (LoA 2 – LoA 3):",
      "s6.p2_d": "Commercial finance mandates LoA 2 (human confirmation for state writes) or bounded LoA 3 (spend caps with veto power).",
      "s6.p3_t": "Strict Ban on LoA 5 Autonomy:",
      "s6.p3_d": "Unconstrained, open-ended tool execution without human kill-switches is strictly prohibited in enterprise commerce.",

      // Slide 7
      "s7.kicker": "Guardrailed Boundaries",
      "s7.h2": "Multi-Dimensional Threshold Control & Circuit Breakers",
      "s7.lead": "Dynamic threshold controls act as active governor valves, containing the agent's blast radius and enforcing progressive authorization as operational risk scales.",
      "s7.tag": "Threshold Matrix",
      "s7.card_title": "Multi-Dimensional Risk Containment",
      "s7.p1_t": "Tiered Financial Value Gates:",
      "s7.p1_d": "Autonomous execution under $50, dual-agent consensus for $50–$500, and mandatory human cryptographic signature above $500.",
      "s7.p2_t": "Action Sensitivity Tiers:",
      "s7.p2_d": "Read-only queries run automatically; state mutations, external communications, and fund transfers require elevated authorization.",
      "s7.p3_t": "Automated Circuit Breakers:",
      "s7.p3_d": "Velocity spikes (>10 calls/min) or semantic drift (>0.4 cosine distance) immediately force autonomy step-down and freeze pending escrow.",

      // Slide 8
      "s8.kicker": "Verifiable Agency",
      "s8.h2": "Agent Identity: Spec-Driven Job Descriptions & Credentials",
      "s8.lead": "An AI agent cannot be treated as an anonymous prompt. It requires a machine-enforceable Spec-Driven Job Description (SJD) and verifiable cryptographic identity to prevent ambient authority.",
      "s8.tag": "Identity Governance",
      "s8.card_title": "Eliminating Ambient Authority",
      "s8.p1_t": "Spec-Driven Job Descriptions (SJD):",
      "s8.p1_d": "Immutable machine contracts defining bounded roles, explicit tool allowlists, and prohibited non-goals to prevent capability creep.",
      "s8.p2_t": "Verifiable Cryptographic Identity:",
      "s8.p2_d": "Every agent is identified by a unique DID or SPIFFE ID with ephemeral Ed25519 session keypairs.",
      "s8.p3_t": "Zero Ambient Authority:",
      "s8.p3_d": "Agents inherit no default system permissions; every action requires an explicit, short-lived delegation token.",

      // Slide 9
      "s9.kicker": "Semantic Grounding",
      "s9.h2": "Domain Ontology for Intent Determination",
      "s9.lead": "LLMs interpret natural language fuzzily. In security-critical commerce, intent must be grounded in a rigorous Domain Ontology to distinguish genuine user objectives from malicious injections.",
      "s9.tag": "Ontological Framework",
      "s9.card_title": "Formal Knowledge Representation for Agents",
      "s9.p1_t": "Formal Semantic Grounding:",
      "s9.p1_d": "Maps fuzzy natural language instructions into strongly typed entities (Asset, Order, Account) and permitted action primitives.",
      "s9.p2_t": "State Machine Invariants:",
      "s9.p2_d": "Enforces legal state sequences (Created → Funded → Delivered → Settled) and rejects illegal state transitions.",
      "s9.p3_t": "Intent Disambiguation Gate:",
      "s9.p3_d": "Parses user commands into an Intent AST, filtering prompt injection payloads before tool dispatch.",

      // Slide 10
      "s10.kicker": "Policy Compilation",
      "s10.h2": "Intent-Based Access Control (IBAC)",
      "s10.lead": "RBAC and ABAC are fundamentally insufficient for autonomous agents. Intent-Based Access Control (IBAC) dynamically generates single-use capability tokens matched strictly to verified user intent.",
      "s10.tag": "IBAC Pipeline",
      "s10.card_title": "Closing the Semantic-to-Execution Gap",
      "s10.p1_t": "The Failure of Static RBAC:",
      "s10.p1_d": "Fixed roles grant persistent tool access; hijacked agents abuse authorized tools to execute malicious transactions.",
      "s10.p2_t": "Dynamic Capability Compilation:",
      "s10.p2_d": "IBAC compiles ephemeral, single-use CapToken credentials scoped strictly to verified intent, amount, and recipient.",
      "s10.p3_t": "Cryptographic Token Consumption:",
      "s10.p3_d": "Target APIs and smart contracts verify and burn the CapToken, preventing unauthorized replay or parameter tampering.",

      // Slide 11
      "s11.kicker": "The Cognitive Attack Surface",
      "s11.h2": "Context & Memory Threats: Poisoning, Drift & Conflict",
      "s11.lead": "Agent memory is the primary vector for persistent compromise. Unlike stateless LLM chats, autonomous agents maintain state across turns, making them vulnerable to cognitive corruption.",
      "s11.tag": "Memory Threats",
      "s11.card_title": "The 3 Cognitive Vulnerability Vectors",
      "s11.p1_t": "Memory Poisoning (Indirect Injection):",
      "s11.p1_d": "Adversaries hide instructions in documents or quotes, writing backdoors into persistent agent memory.",
      "s11.p2_t": "Temporal Drift & Stale Quotes:",
      "s11.p2_d": "Agents act on expired price quotes or revoked tokens, causing arbitrage slippage and failed executions.",
      "s11.p3_t": "Split-Brain State & Deadlocks:",
      "s11.p3_d": "Multi-agent teams receiving contradictory state facts fall into infinite retry loops or insecure fallbacks.",

      // Slide 12
      "s12.kicker": "Cognitive Defense",
      "s12.h2": "Memory Hygiene Architecture: Provenance, TTL & Reconciliation",
      "s12.lead": "Securing agent memory requires applying database rigor and cryptographic verification to every cognitive read and write operation.",
      "s12.tag": "Memory Hygiene",
      "s12.card_title": "Sanitizing Long-Term Cognitive Storage",
      "s12.p1_t": "Cryptographic Provenance:",
      "s12.p1_d": "Every memory entry is signed and tagged with author ID, timestamp, and content hash; untrusted data cannot persist.",
      "s12.p2_t": "Three-Tier Memory Lifecycle:",
      "s12.p2_d": "Segregates ephemeral working memory, quarantined staging buffers, and append-only verified long-term storage.",
      "s12.p3_t": "Strict TTL & Deterministic CRDTs:",
      "s12.p3_d": "Enforces automated expiration on market quotes (30s) and credentials (15m), resolving conflicts via ontological rules.",

      // Slide 13
      "s13.kicker": "Real-Time Telemetry",
      "s13.h2": "Behavioral Observability & Trajectory Monitoring",
      "s13.lead": "Security in autonomous agents cannot rely solely on input/output inspection. Teams must observe the entire cognitive trajectory: intermediate thoughts, tool calls, and environment responses.",
      "s13.tag": "Observability Suite",
      "s13.card_title": "End-to-End Cognitive Telemetry",
      "s13.p1_t": "Full Trajectory DAG Tracing:",
      "s13.p1_d": "Records intermediate thoughts, tool calls, arguments, and environment responses using OpenTelemetry GenAI semantic standards.",
      "s13.p2_t": "Real-Time Semantic Drift Scoring:",
      "s13.p2_d": "Measures cosine distance between execution trajectory and the baseline SJD; drift > 0.4 triggers alert and pause.",
      "s13.p3_t": "Loop & Lateral Movement Interception:",
      "s13.p3_d": "Halts repeated failed calls (>3 retries) and blocks unauthorized probing of host files, environment keys, or networks.",

      // Slide 14
      "s14.kicker": "The Active Control Plane",
      "s14.h2": "Runtime Steering & Active Policy Interception",
      "s14.lead": "Observability without enforcement is merely passive logging. Runtime steering provides programmatic, out-of-band control hooks that intercept, guide, or terminate agent actions before execution.",
      "s14.tag": "Control Gateway",
      "s14.card_title": "Deterministic Interceptor Pipeline",
      "s14.p1_t": "PreToolUse Deterministic Interceptor:",
      "s14.p1_d": "Evaluates tool arguments, checks IBAC tokens, and enforces rate limits before execution occurs outside the LLM.",
      "s14.p2_t": "PostToolUse Output Sanitizer:",
      "s14.p2_d": "Inspects tool responses before returning them to LLM context, stripping leaked keys and concealed injection payloads.",
      "s14.p3_t": "Active Steering Primitives:",
      "s14.p3_d": "Programmatically steers reasoning, downgrades autonomy levels, isolates tools in sandboxes, or triggers hard kill switches.",

      // Slide 15
      "s15.kicker": "Performance & Economics",
      "s15.h2": "Evaluation, Benchmarks & Token Efficiency Optimization",
      "s15.lead": "Enterprise agent systems must optimize both safety and unit economics. Measuring Task Completion Rate against Token Efficiency reveals the true cost-per-outcome of secure autonomous systems.",
      "s15.tag": "Production Scorecard",
      "s15.card_title": "Key Benchmarking & Efficiency Metrics",
      "s15.p1_t": "Task Completion Rate (TCR >= 92.5%):",
      "s15.p1_d": "Measures end-to-end multi-turn commercial workflow success and autonomous error-recovery capability.",
      "s15.p2_t": "100% Invariant Compliance (Zero Tolerance):",
      "s15.p2_d": "Mathematical guarantee of zero unauthorized spend, zero policy breaches, and strict budget adherence.",
      "s15.p3_t": "Token ROI & Adversarial Resilience:",
      "s15.p3_d": "Schema pruning and memory hygiene cut context bloat by 65%, while maintaining >= 99.2% prompt injection defense.",

      // Slide 16
      "s16.kicker": "Synthesis & Discussion",
      "s16.h2": "Summary & Open Q/A: Foundations of Agentic Commerce Security",
      "s16.lead": "Autonomous financial execution requires defense-in-depth across payment protocols, mathematical invariants, bounded autonomy, domain ontology, memory hygiene, and continuous runtime steering.",
      "s16.takeaways_title": "3 Pillars of Agentic Security",
      "s16.p1_t": "Cryptographic Rails & Invariants:",
      "s16.p1_d": "Non-custodial payment channels (x402/MPP) and smart contract invariants eliminate human checkout while mathematically bounding spend.",
      "s16.p2_t": "Verified Agency & Memory Hygiene:",
      "s16.p2_d": "Spec-Driven Job Descriptions, single-use IBAC tokens, and signed 3-tier memory eliminate ambient authority and poisoning.",
      "s16.p3_t": "Runtime Steering & Observability:",
      "s16.p3_d": "Real-time trajectory tracing and PreToolUse interceptors detect drift and halt rogue actions before execution.",
      "s16.qa_title": "Interactive Discussion Prompts:",
      "s16.q1_t": "Payment Channels:",
      "s16.q1_d": "When to switch from atomic HTTP 402 to state channels (MPP)?",
      "s16.q2_t": "Blast Radius:",
      "s16.q2_d": "How to mathematically contain risk before promoting agents to LoA 3+?",
      "s16.q3_t": "Memory Isolation:",
      "s16.q3_d": "What runtime validation prevents untrusted quotes from poisoning memory?"
    },
    zh: {
      "ui.fullscreen": "全屏演示",
      "ui.exitFull": "退出全屏",
      "ui.prev": "‹ 上一页",
      "ui.next": "下一页 ›",
      "ui.launch": "技术文档 ↗",
      "ui.repo": "GitHub 代码仓 ↗",

      "slide.1.title": "智能体商业与自主安全体系",
      "slide.2.title": "关于讲师：黄连金 (Ken Huang), CISSP",
      "slide.3.title": "智能体商业威胁全景",
      "slide.4.title": "现代智能体支付协议",
      "slide.5.title": "金融安全合约与不变量",
      "slide.6.title": "自主权治理 (LoA 框架)",
      "slide.7.title": "多维门限控制与熔断器",
      "slide.8.title": "智能体身份与规范驱动岗位描述",
      "slide.9.title": "领域本体与意图确定",
      "slide.10.title": "基于意图的访问控制 (IBAC)",
      "slide.11.title": "上下文与记忆安全威胁",
      "slide.12.title": "记忆卫生架构与防御",
      "slide.13.title": "行为可观测性与轨迹监控",
      "slide.14.title": "运行时引导与动态控制面",
      "slide.15.title": "评估基准与 Token 效能优化",
      "slide.16.title": "核心总结与互动问答：智能体商业安全",

      // Slide 1
      "hero.eyebrow": "自主系统与智能体商业安全",
      "hero.title": "智能体商业与安全架构基石",
      "hero.acronym": "<b>P</b>支付协议 · <b>S</b>智能合约 · <b>A</b>自主权边界 · <b>I</b>意图访问控制 · <b>M</b>记忆防护 · <b>O</b>轨迹观测",
      "hero.sub": "面向多智能体生态的<strong>自主金融执行与行为边界安全架构蓝图</strong>",
      "hero.by": "主讲人：<strong>黄连金 (Ken Huang), CISSP</strong><br/>旧金山大学 (USF) 客座教授 · 云安全联盟 (CSA) AI安全工作组联合主席 · DistributedApps.ai CEO",
      "hero.start": "开始演示 ➔",
      "hero.spec": "浏览规范蓝图 ↗",

      // Slide 2
      "about.kicker": "权威资质与学术基石",
      "about.h2": "关于讲师：黄连金 (Ken Huang), CISSP",
      "about.b1": "🎓 <strong>旧金山大学 (USF) 客座教授</strong> 与 <a href=\"https://distributedapps.ai/\" target=\"_blank\" rel=\"noopener noreferrer\">DistributedApps.ai</a> 创始人兼 CEO",
      "about.b2": "🛡️ <strong>云安全联盟 (CSA) AI 安全工作组 Fellow 兼联合主席</strong> (MAESTRO) 与 OWASP AIVSS 负责人",
      "about.b3": "📚 <strong>AI 安全与智能体专著作者</strong>（<a href=\"https://www.amazon.com/dp/B0HF3F86YM\" target=\"_blank\" rel=\"noopener noreferrer\">Harness Engineering</a>、Springer、剑桥大学出版社、Wiley）",
      "about.pubs": "📚 重点 AI 安全专著（Packt · Springer · 剑桥大学 · Wiley）",
      "about.amazon": "亚马逊作者主页 ➔",

      // Slide 3
      "s3.kicker": "金融前沿与全新挑战",
      "s3.h2": "智能体商业范式与全新攻击面",
      "s3.lead": "自主智能体执行机器对机器 (M2M) 金融交易带来了系统性风险，提示词注入可以直接诱发不可逆转的资金抽水损失。",
      "s3.tag": "攻击面全景",
      "s3.card_title": "Web2 与智能体商业的范式转移",
      "s3.p1_t": "自主金融执行：",
      "s3.p1_d": "M2M 智能体直接持有钱包私钥与 API 凭据，自主执行高频支付，消除了人工表单与 2FA 交互。",
      "s3.p2_t": "不可逆结算链路：",
      "s3.p2_d": "交易通过原子化加密链路即时结算，消除了传统 Web2 信用卡网络 30 至 90 天的争议撤单保护期。",
      "s3.p3_t": "提示注入直接盗资：",
      "s3.p3_d": "发票或报价单中的间接提示注入可直接篡改工具调用参数，在不盗取凭据的情况下抽空资金国库。",

      // Slide 4
      "s4.kicker": "机器对机器支付网络",
      "s4.h2": "现代智能体支付协议：微支付轨栈",
      "s4.lead": "智能体商业需要极低延迟、非托管的微计量支付轨，消除人工结算摩擦的同时保障密码学不可抵赖性。",
      "s4.tag": "支付协议栈",
      "s4.card_title": "自主支付三大核心支柱",
      "s4.p1_t": "HTTP 402 / x402 协议：",
      "s4.p1_d": "激活原生网络支付状态——服务端返回 402 计费挑战，智能体在 X-PAYMENT 标头中提交链下 EIP-712 签名凭单。",
      "s4.p2_t": "计量支付协议 (MPP)：",
      "s4.p2_d": "通过链下状态通道实现每 Token 或每 API 请求的流式微支付，定期链上汇总净额结算以最小化开销。",
      "s4.p3_t": "A2A-Pay 与任务托管 (ERC-8004)：",
      "s4.p3_d": "去中心化点对点托管合约暂扣买方资金，由第三方验证节点核验交付成果的密码学证明后自动释放款项。",

      // Slide 5
      "s5.kicker": "可编程信任与约束",
      "s5.h2": "金融安全合约与密码学不变量",
      "s5.lead": "智能体商业中的智能合约必须强制执行硬性数学不变量，绝不能被大模型幻觉或对抗性提示词覆盖。",
      "s5.tag": "链上不变量",
      "s5.card_title": "智能合约中的数学级防护栏",
      "s5.p1_t": "条件托管与时间锁：",
      "s5.p1_d": "资金在密码学交付证明提交前保持锁定；若履约 SLA 超时，智能合约将确定性触发自动全额退款。",
      "s5.p2_t": "支出速率与金额硬顶：",
      "s5.p2_d": "链上数学规则严格限制单笔交易与 24 小时滚动支出上限，实现流动资金与冷国库的物理隔离。",
      "s5.p3_t": "多签共识与质押罚没：",
      "s5.p3_d": "大额转账强制要求 M-of-N 节点共识或人工联合签名，违规智能体节点将面临自动化押金罚没。",

      // Slide 6
      "s6.kicker": "自主权光谱与分类",
      "s6.h2": "自主权治理：自主权等级体系 (LoA 0 到 LoA 5)",
      "s6.lead": "自主权不是非黑即白的。企业必须根据风险等级与潜在破坏半径，将智能体严格划分并约束在 6 级自主权体系内。",
      "s6.tag": "LoA 分级体系",
      "s6.card_title": "运行自主权六级阶梯",
      "s6.p1_t": "6 级自主权分级体系 (LoA 0-5)：",
      "s6.p1_d": "将智能体能力从仅提供建议的辅助模式 (LoA 0)，划分为受监督委托 (LoA 3)，直至完全开放自主 (LoA 5)。",
      "s6.p2_t": "生产级商业基准 (LoA 2–3)：",
      "s6.p2_d": "金融系统必须强制采用 LoA 2（写操作必须人工确认）或有界 LoA 3（预授权额度内自主运行，保留异步否决权）。",
      "s6.p3_t": "严禁无约束 LoA 5：",
      "s6.p3_d": "企业级商业系统中严禁部署缺乏人工熔断与物理边界的无约束完全自主智能体。",

      // Slide 7
      "s7.kicker": "防护边界与控制阀",
      "s7.h2": "多维门限控制与自动化熔断器",
      "s7.lead": "动态门限控制充当主动节流阀，遏制智能体的爆炸半径，并在风险攀升时强制执行阶梯式授权。",
      "s7.tag": "门限控制矩阵",
      "s7.card_title": "多维风险遏制体系",
      "s7.p1_t": "分级资金门限：",
      "s7.p1_d": "50 美元以下自主审批，50 至 500 美元需双智能体交叉复核，500 美元以上强制人类密码学签名。",
      "s7.p2_t": "动作敏感度分级：",
      "s7.p2_d": "只读查询直接放行；状态变更、外部通信与资金划转需阶梯式提升授权级别。",
      "s7.p3_t": "动态自动化熔断：",
      "s7.p3_d": "调用频率超标（>10次/分）或语义偏离度超标（>0.4）立即触发自主权降级并冻结待决托管。",

      // Slide 8
      "s8.kicker": "可验证代理与最小特权",
      "s8.h2": "智能体身份：规范驱动岗位描述 (SJD) 与凭证",
      "s8.lead": "智能体绝不能等同于匿名的提示词。它必须具备机器可执行的规范驱动岗位描述与密码学身份，彻底终结无界隐式特权。",
      "s8.tag": "身份治理",
      "s8.card_title": "彻底消除环境隐式特权",
      "s8.p1_t": "规范驱动岗位描述 (SJD)：",
      "s8.p1_d": "不可变机器执行契约，严格界定角色范围、工具调用白名单与禁止事项。",
      "s8.p2_t": "可验证密码学身份：",
      "s8.p2_d": "每个智能体均绑定唯一的 DID 或 SPIFFE ID，并为每次会话生成临时的 Ed25519 密钥对。",
      "s8.p3_t": "零环境隐式特权：",
      "s8.p3_d": "智能体不继承宿主或用户的默认权限；每次工具调用必须出示具备有效期约束的显式委托代币。",

      // Slide 9
      "s9.kicker": "语义对齐与形式化约束",
      "s9.h2": "基于领域本体的意图确定",
      "s9.lead": "大模型对自然语言的理解具有模糊性。在安全关键的商业领域，意图必须锚定在形式化的领域本体中，精准识别恶意注入。",
      "s9.tag": "本体知识体系",
      "s9.card_title": "智能体形式化知识表示",
      "s9.p1_t": "形式化语义锚定：",
      "s9.p1_d": "将模糊的自然语言指令映射为强类型的实体（资产、订单、账户）与合法动作原语。",
      "s9.p2_t": "状态机不变量：",
      "s9.p2_d": "严格执行合法状态流转顺序（创建 → 注资 → 交付 → 结算），直接阻断越权状态跳跃。",
      "s9.p3_t": "意图消歧闸口：",
      "s9.p3_d": "在分发工具前将用户输入解析为结构化意图抽象语法树 (AST)，提前清洗并拦截提示注入载荷。",

      // Slide 10
      "s10.kicker": "动态安全策略编译",
      "s10.h2": "基于意图的访问控制 (IBAC)",
      "s10.lead": "RBAC 与 ABAC 无法应对智能体安全挑战。IBAC 依据已验证的真实用户意图，动态编译单次、最小权限的能力代币。",
      "s10.tag": "IBAC 流水线",
      "s10.card_title": "弥合语义理解与底层执行鸿沟",
      "s10.p1_t": "静态 RBAC 的局限：",
      "s10.p1_d": "静态角色赋予持久性工具权限；被劫持的智能体可滥用合法工具执行未授权恶意交易。",
      "s10.p2_t": "动态能力代币编译：",
      "s10.p2_d": "IBAC 依据验证通过的真实意图，动态签发单次使用、严格限定金额与收款方的短时 CapToken。",
      "s10.p3_t": "密码学代币核销：",
      "s10.p3_d": "目标接口与智能合约在执行前核验并销毁 CapToken，杜绝请求重放与参数篡改。",

      // Slide 11
      "s11.kicker": "认知层面的全新攻击面",
      "s11.h2": "上下文与记忆威胁：投毒、时效漂移与脑裂冲突",
      "s11.lead": "智能体记忆是持久性攻击的主要向量。与无状态的聊天模型不同，智能体在跨会话中维护状态，极易遭受认知腐蚀。",
      "s11.tag": "记忆安全威胁",
      "s11.card_title": "三大认知层攻击向量",
      "s11.p1_t": "记忆投毒（间接注入）：",
      "s11.p1_d": "攻击者在发票或文档中隐匿对抗性指令，诱导智能体将恶意后门写入持久化记忆。",
      "s11.p2_t": "时效漂移与过期数据：",
      "s11.p2_d": "智能体依据过期的市场报价或已被吊销的凭据执行交易，导致严重的套利滑点与履约失败。",
      "s11.p3_t": "脑裂冲突与认知死锁：",
      "s11.p3_d": "多智能体协作中接收到相互矛盾的事实指令，诱发无限重试死循环或不安全的降级执行。",

      // Slide 12
      "s12.kicker": "认知防护体系",
      "s12.h2": "记忆卫生架构：溯源认证、TTL 与确定性冲突裁决",
      "s12.lead": "保障智能体记忆安全需要将数据库级别的严谨性和密码学验证引入到每一次记忆读写与固化操作中。",
      "s12.tag": "记忆防御支柱",
      "s12.card_title": "净化长期认知存储空间",
      "s12.p1_t": "密码学溯源确权：",
      "s12.p1_d": "每条记忆均签署并附加作者 ID、时间戳与哈希信封；不可信外部数据严禁直接持久化。",
      "s12.p2_t": "三层记忆隔离生命周期：",
      "s12.p2_d": "严格隔离临时工作记忆、隔离审查缓冲区与只追加的可信长期存储库。",
      "s12.p3_t": "严格 TTL 与确定性 CRDT：",
      "s12.p3_d": "对市场报价（30秒）与授权凭据（15分钟）强制执行到期销毁，依据领域本体消除事实冲突。",

      // Slide 13
      "s13.kicker": "全链路实时遥测",
      "s13.h2": "行为可观测性与执行轨迹监控",
      "s13.lead": "智能体安全绝不能仅仅依赖输入输出检测。必须对整个认知轨迹进行端到端监控：中间思考、工具调用与环境反馈。",
      "s13.tag": "可观测套件",
      "s13.card_title": "端到端认知遥测体系",
      "s13.p1_t": "全链路轨迹 DAG 追踪：",
      "s13.p1_d": "遵循 OpenTelemetry GenAI 语义标准，端到端捕获思考、意图、工具调用与环境反馈。",
      "s13.p2_t": "实时语义漂移评分：",
      "s13.p2_d": "计算当前执行轨迹与基准 SJD 之间的余弦距离；偏离度超过 0.4 立即触发预警与暂停。",
      "s13.p3_t": "死循环与横向移动阻断：",
      "s13.p3_d": "拦截失败工具重复调用（>3次），严防 Token 消耗攻击，并阻断对系统凭据与非授权网络的探测。",

      // Slide 14
      "s14.kicker": "主动控制面与带外拦截",
      "s14.h2": "运行时引导与动态策略拦截",
      "s14.lead": "缺乏执行力的可观测性仅仅是事后日志。运行时引导提供了带外的程序化控制挂钩，在操作执行前予以拦截或动态修正。",
      "s14.tag": "控制网关",
      "s14.card_title": "确定性拦截流水线",
      "s14.p1_t": "PreToolUse 确定性前置拦截：",
      "s14.p1_d": "在大模型上下文之外核验工具参数、验证 IBAC 代币并执行限流，决定放行或拦截。",
      "s14.p2_t": "PostToolUse 后置脱敏净化：",
      "s14.p2_d": "在工具返回值注入上下文前进行审查，自动抹除敏感凭据与潜在的间接提示注入载荷。",
      "s14.p3_t": "主动引导与动态熔断原语：",
      "s14.p3_d": "程序化向推理流注入纠偏指导、动态降低自主权等级、将操作重定向至沙箱或触发硬终止开关。",

      // Slide 15
      "s15.kicker": "性能与经济学平衡",
      "s15.h2": "评估基准、效能评测与 Token 投入产出比",
      "s15.lead": "企业级智能体系统必须同时优化安全性和单位经济效益。通过任务完成率与 Token 效能矩阵，揭示真实商业产出成本。",
      "s15.tag": "生产计分卡",
      "s15.card_title": "关键评估基准与效能指标",
      "s15.p1_t": "任务完成率 (TCR >= 92.5%)：",
      "s15.p1_d": "衡量复杂多轮商业工作流的端到端达成比例与自主容错修正能力。",
      "s15.p2_t": "100% 不变量合规率 (零容忍)：",
      "s15.p2_d": "坚守资金限额与安全策略的数学硬约束，对未授权越权转账保持零容忍。",
      "s15.p3_t": "Token 投入产出比与对抗韧性：",
      "s15.p3_d": "动态模式裁剪与记忆卫生削减 65% 的上下文冗余，同时保持 99.2% 以上的抗提示注入防御率。",

      // Slide 16
      "s16.kicker": "总结与问答互动",
      "s16.h2": "核心总结与互动问答：构建安全可信的智能体商业未来",
      "s16.lead": "自主金融执行需要横跨支付协议、数学不变量、边界自主、领域本体、记忆卫生与连续运行时引导的纵深防御体系。",
      "s16.takeaways_title": "智能体安全三大核心支柱",
      "s16.p1_t": "密码学支付轨与不变量：",
      "s16.p1_d": "非托管支付通道（x402/MPP）与智能合约数学不变量消除人工结账摩擦，同时对资金支出施加绝对硬顶约束。",
      "s16.p2_t": "可验证代理与记忆卫生：",
      "s16.p2_d": "规范驱动岗位描述 (SJD)、单次 IBAC 能力代币与三层签名记忆，彻底终结环境隐式特权与记忆投毒。",
      "s16.p3_t": "运行时引导与可观测控制面：",
      "s16.p3_d": "端到端执行轨迹追踪与带外 PreToolUse 拦截器实时侦测语义漂移，在动作生效前阻断恶意调用。",
      "s16.qa_title": "核心讨论与架构思考：",
      "s16.q1_t": "通道结算 vs 单次请求：",
      "s16.q1_d": "高频智能体交易何时应从单次 HTTP 402 切换至累积状态通道 (MPP)？",
      "s16.q2_t": "自主爆炸半径控制：",
      "s16.q2_d": "企业团队如何在将智能体提升至 LoA 3+ 之前建立数学上可证明的遏制机制？",
      "s16.q3_t": "记忆污染隔离：",
      "s16.q3_d": "采用何种运行时校验机制可防止不可信商户报价污染智能体情景记忆？"
    }
  };

  let currentLang = "en";

  function setLang(lang) {
    if (!DICT[lang]) return;
    currentLang = lang;
    document.documentElement.lang = (lang === "zh" ? "zh-CN" : "en");
    document.body.classList.toggle("is-zh", lang === "zh");

    // Update buttons
    document.querySelectorAll(".lang__btn").forEach(btn => {
      btn.classList.toggle("is-on", btn.dataset.lang === lang);
    });

    // Update data-i18n text
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (DICT[lang][key]) {
        el.textContent = DICT[lang][key];
      }
    });

    // Update data-i18n-html
    document.querySelectorAll("[data-i18n-html]").forEach(el => {
      const key = el.dataset.i18n;
      if (DICT[lang][key]) {
        el.innerHTML = DICT[lang][key];
      }
    });

    // Dispatch event
    document.dispatchEvent(new CustomEvent("agentsec:lang", { detail: { lang } }));
  }

  window.AGENT_SEC_I18N = {
    t: (key) => (DICT[currentLang] && DICT[currentLang][key]) || key,
    getSlideTitle: (idx) => (DICT[currentLang] && DICT[currentLang][`slide.${idx + 1}.title`]) || "",
    isZh: () => currentLang === "zh",
    setLang: setLang
  };

  window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".lang__btn").forEach(btn => {
      btn.addEventListener("click", () => {
        setLang(btn.dataset.lang);
      });
    });

    // Check URL or preference
    const params = new URLSearchParams(window.location.search);
    const qLang = params.get("lang");
    if (qLang && DICT[qLang]) {
      setLang(qLang);
    } else {
      setLang("en");
    }
  });
})();
