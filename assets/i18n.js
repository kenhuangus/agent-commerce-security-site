/* ============================================================
   Agentic Commerce & Agentic Security Foundations — Bilingual i18n
   Full English and Chinese translations for all 16 slides
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
      "hero.sub": "The Definitive <strong>Foundations & Architecture Blueprint</strong> for Securing Autonomous Financial Execution and Agent Behavior",
      "hero.by": "Presented by <strong>Ken Huang, CISSP</strong><br/>Adjunct Professor, University of San Francisco (USF) · Fellow & Co-Chair, CSA AI Safety Working Groups · CEO, DistributedApps.ai",
      "hero.start": "Start Presentation ➔",
      "hero.spec": "Explore Full Blueprint ↗",

      // Slide 2
      "about.kicker": "Authority & Academic Grounding",
      "about.title": "About the Instructor: Ken Huang, CISSP",
      "about.h2": "About the Instructor: Ken Huang, CISSP",
      "about.b1": "AI Book Author & Speaker (Harness Engineering, MAESTRO, Agentic AI)",
      "about.b2": "Adjunct Professor, University of San Francisco (USF)",
      "about.b3": "OWASP AIVSS Project Lead",
      "about.b4": "Fellow & Co-Chair of two CSA AI Safety Working Groups",
      "about.b5": "Core Member, OWASP Top 10 for LLM Applications",
      "about.b6": "AIUC-1 Consortium Member & Schmidt Sciences Grant Reviewer",
      "about.b7": "EC-Council Instructor — Generative AI for Cyber Security",
      "about.b8": "CEO of DistributedApps.ai",
      "about.pubs": "📚 AI & Security Publications (Packt, Springer, Cambridge, Wiley)",
      "about.amazon": "Amazon Author Page ➔",

      // Slide 3
      "s3.kicker": "The Financial Frontier",
      "s3.h2": "The Agentic Commerce Paradigm & Attack Surface",
      "s3.lead": "Autonomous agents executing machine-to-machine financial transactions introduce severe systemic risks where prompt manipulation directly triggers irreversible monetary loss.",
      "s3.th1": "Dimension", "s3.th2": "Web2 E-Commerce (Human)", "s3.th3": "Autonomous Agentic Commerce (M2M)",
      "s3.r1_d": "Initiator & Auth", "s3.r1_trad": "Human via browser, 2FA/MFA, Session cookie", "s3.r1_agent": "Autonomous LLM with wallet private keys & API credentials",
      "s3.r2_d": "Velocity & Latency", "s3.r2_trad": "Minutes per checkout, manual form input", "s3.r2_agent": "Milliseconds per API call, automated high-frequency stream",
      "s3.r3_d": "Primary Threat", "s3.r3_trad": "Phishing, credential stuffing, chargeback fraud", "s3.r3_agent": "Indirect prompt injection, goal hijacking, wallet drain",
      "s3.r4_d": "Settlement Mechanism", "s3.r4_trad": "Credit card networks (reversibility window 30-90 days)", "s3.r4_agent": "Atomic blockchain / crypto settlement (instant, irreversible)",

      // Slide 4
      "s4.kicker": "Machine-to-Machine Rails",
      "s4.h2": "Modern Agent Payment Protocols: The Modern Rail Stack",
      "s4.lead": "Agentic commerce requires micro-metered, low-latency, non-custodial payment rails eliminating human checkout friction while enforcing cryptographic non-repudiation.",

      // Slide 5
      "s5.kicker": "Programmable Trust",
      "s5.h2": "Financial Security Contracts & Cryptographic Invariants",
      "s5.lead": "Smart contracts in agentic commerce must enforce hard mathematical invariants that cannot be overridden by LLM hallucinations or adversarial prompt manipulation.",

      // Slide 6
      "s6.kicker": "The Autonomy Spectrum",
      "s6.h2": "Autonomy Governance: Levels of Autonomy (LoA 0 to LoA 5)",
      "s6.lead": "Autonomy is not binary. Organizations must classify and bound agent systems across a formal 6-tier Level of Autonomy framework based on risk profile and operational blast radius.",

      // Slide 7
      "s7.kicker": "Guardrailed Boundaries",
      "s7.h2": "Multi-Dimensional Threshold Control & Circuit Breakers",
      "s7.lead": "Dynamic threshold controls act as active governor valves, containing the agent's blast radius and enforcing progressive authorization as operational risk scales.",

      // Slide 8
      "s8.kicker": "Verifiable Agency",
      "s8.h2": "Agent Identity: Spec-Driven Job Descriptions & Credentials",
      "s8.lead": "An AI agent cannot be treated as an anonymous prompt. It requires a machine-enforceable Spec-Driven Job Description (SJD) and verifiable cryptographic identity to prevent ambient authority.",

      // Slide 9
      "s9.kicker": "Semantic Grounding",
      "s9.h2": "Domain Ontology for Intent Determination",
      "s9.lead": "LLMs interpret natural language fuzzily. In security-critical commerce, intent must be grounded in a rigorous Domain Ontology to distinguish genuine user objectives from malicious injections.",

      // Slide 10
      "s10.kicker": "Policy Compilation",
      "s10.h2": "Intent-Based Access Control (IBAC)",
      "s10.lead": "RBAC and ABAC are fundamentally insufficient for autonomous agents. Intent-Based Access Control (IBAC) dynamically generates single-use capability tokens matched strictly to verified user intent.",

      // Slide 11
      "s11.kicker": "The Cognitive Attack Surface",
      "s11.h2": "Context & Memory Threats: Poisoning, Drift & Conflict",
      "s11.lead": "Agent memory is the primary vector for persistent compromise. Unlike stateless LLM chats, autonomous agents maintain state across turns, making them vulnerable to cognitive corruption.",

      // Slide 12
      "s12.kicker": "Cognitive Defense",
      "s12.h2": "Memory Hygiene Architecture: Provenance, TTL & Reconciliation",
      "s12.lead": "Securing agent memory requires applying database rigor and cryptographic verification to every cognitive read and write operation.",

      // Slide 13
      "s13.kicker": "Real-Time Telemetry",
      "s13.h2": "Behavioral Observability & Trajectory Monitoring",
      "s13.lead": "Security in autonomous agents cannot rely solely on input/output inspection. Teams must observe the entire cognitive trajectory: intermediate thoughts, tool calls, and environment responses.",

      // Slide 14
      "s14.kicker": "The Active Control Plane",
      "s14.h2": "Runtime Steering & Active Policy Interception",
      "s14.lead": "Observability without enforcement is merely passive logging. Runtime steering provides programmatic, out-of-band control hooks that intercept, guide, or terminate agent actions before execution.",

      // Slide 15
      "s15.kicker": "Performance & Economics",
      "s15.h2": "Evaluation, Benchmarks & Token Efficiency Optimization",
      "s15.lead": "Enterprise agent systems must optimize both safety and unit economics. Measuring Task Completion Rate against Token Efficiency reveals the true cost-per-outcome of secure autonomous systems.",

      // Slide 16
      "s16.kicker": "Synthesis & Discussion",
      "s16.h2": "Summary & Open Q/A: Foundations of Agentic Commerce Security",
      "s16.lead": "Autonomous financial execution requires defense-in-depth across payment protocols, mathematical invariants, bounded autonomy, domain ontology, memory hygiene, and continuous runtime steering.",
      "s16.takeaways_title": "6 Pillars of Agentic Security",
      "s16.p1_t": "Payment Rails:", "s16.p1_d": "Non-custodial x402 and MPP channels enable micro-metered settlement with zero human checkout friction.",
      "s16.p2_t": "Smart Contracts:", "s16.p2_d": "Mathematical on-chain invariants strictly bound spending caps, preventing LLM prompt overrides.",
      "s16.p3_t": "Autonomy Governance:", "s16.p3_d": "LoA 0–5 tiered bounding with deterministic circuit breakers that force dynamic step-downs.",
      "s16.p4_t": "Identity & IBAC:", "s16.p4_d": "Spec-Driven Job Descriptions (SJD) and single-use capability tokens eliminate ambient authority.",
      "s16.p5_t": "Memory Hygiene:", "s16.p5_d": "Cryptographic provenance signatures and time-to-live expirations prevent poisoning and semantic drift.",
      "s16.p6_t": "Observability & Steering:", "s16.p6_d": "Out-of-band PreToolUse interceptors and kill-switches halt unauthorized trajectories in real time.",
      "s16.qa_title": "Interactive Discussion Prompts",
      "s16.q1_t": "Channel Settlement vs Per-Request:", "s16.q1_d": "When should high-frequency agentic commerce switch from atomic HTTP 402 to cumulative state channels (MPP)?",
      "s16.q2_t": "Autonomous Blast Radius:", "s16.q2_d": "How do enterprise teams establish mathematically provable containment before elevating agents to LoA 3+?",
      "s16.q3_t": "Memory Contamination Isolation:", "s16.q3_d": "What runtime validation prevents an untrusted merchant quote from corrupting episodic agent memory?",
      "s16.author_lead": "Connect & Collaborate:",
      "s16.author_desc": "Ken Huang, CISSP · Adjunct Professor, University of San Francisco (USF) · Fellow & Co-Chair, CSA AI Safety · CEO, DistributedApps.ai"
    },
    zh: {
      "ui.fullscreen": "全屏演示",
      "ui.exitFull": "退出全屏",
      "ui.prev": "‹ 上一页",
      "ui.next": "下一页 ›",
      "ui.launch": "技术文档 ↗",
      "ui.repo": "GitHub 代码仓 ↗",

      "slide.1.title": "智能体商业与自主安全体系",
      "slide.2.title": "关于讲师：黄健 (Ken Huang), CISSP",
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
      "hero.by": "主讲人：<strong>黄健 (Ken Huang), CISSP</strong><br/>旧金山大学 (USF) 客座教授 · 云安全联盟 (CSA) AI安全工作组联合主席 · DistributedApps.ai CEO",
      "hero.start": "开始演示 ➔",
      "hero.spec": "浏览规范蓝图 ↗",

      // Slide 2
      "about.kicker": "权威资质与学术基石",
      "about.title": "关于讲师：黄健 (Ken Huang), CISSP",
      "about.h2": "关于讲师：黄健 (Ken Huang), CISSP",
      "about.b1": "AI 著作作者与演讲嘉宾（Harness Engineering、MAESTRO、Agentic AI）",
      "about.b2": "旧金山大学 (University of San Francisco) 客座教授",
      "about.b3": "OWASP AIVSS 项目负责人",
      "about.b4": "CSA 云安全联盟两个 AI 安全工作组 Fellow 兼联合主席",
      "about.b5": "OWASP Top 10 for LLM Applications 核心成员",
      "about.b6": "AIUC-1 联盟成员 · Schmidt Sciences 基金评审委员",
      "about.b7": "EC-Council 认证讲师 —— 生成式 AI 赋能网络安全",
      "about.b8": "DistributedApps.ai 创始人兼 CEO",
      "about.pubs": "📚 AI 与网络安全专著（Packt、Springer、剑桥大学出版社、Wiley）",
      "about.amazon": "亚马逊作者主页 ➔",

      // Slide 3
      "s3.kicker": "金融前沿与全新挑战",
      "s3.h2": "智能体商业范式与全新攻击面",
      "s3.lead": "自主智能体执行机器对机器 (M2M) 金融交易带来了系统性风险，提示词注入可以直接诱发不可逆转的资金抽水损失。",
      "s3.th1": "比较维度", "s3.th2": "传统 Web2 电子商务 (人类)", "s3.th3": "自主智能体商业 (M2M)",
      "s3.r1_d": "发起者与认证", "s3.r1_trad": "人类通过浏览器，双因子验证/MFA，Session Cookie", "s3.r1_agent": "自主运行的 LLM 智能体，持有钱包私钥与 API 凭据",
      "s3.r2_d": "交易速率与延迟", "s3.r2_trad": "每次结算耗时数分钟，人工填写表单", "s3.r2_agent": "毫秒级高频 API 调用，自主流式支付",
      "s3.r3_d": "核心威胁模式", "s3.r3_trad": "网络钓鱼、撞库盗号、信用卡拒付欺诈", "s3.r3_agent": "间接提示注入、意图劫持、钱包国库清空",
      "s3.r4_d": "结算机制", "s3.r4_trad": "信用卡清算网络（30-90 天争议撤单窗口）", "s3.r4_agent": "原子化区块链/加密结算（即时终局，不可撤销）",

      // Slide 4
      "s4.kicker": "机器对机器支付网络",
      "s4.h2": "现代智能体支付协议：微支付轨栈",
      "s4.lead": "智能体商业需要极低延迟、非托管的微计量支付轨，消除人工结算摩擦的同时保障密码学不可抵赖性。",

      // Slide 5
      "s5.kicker": "可编程信任与约束",
      "s5.h2": "金融安全合约与密码学不变量",
      "s5.lead": "智能体商业中的智能合约必须强制执行硬性数学不变量，绝不能被大模型幻觉或对抗性提示词覆盖。",

      // Slide 6
      "s6.kicker": "自主权光谱与分类",
      "s6.h2": "自主权治理：自主权等级体系 (LoA 0 到 LoA 5)",
      "s6.lead": "自主权不是非黑即白的。企业必须根据风险等级与潜在破坏半径，将智能体严格划分并约束在 6 级自主权体系内。",

      // Slide 7
      "s7.kicker": "防护边界与控制阀",
      "s7.h2": "多维门限控制与自动化熔断器",
      "s7.lead": "动态门限控制充当主动节流阀，遏制智能体的爆炸半径，并在风险攀升时强制执行阶梯式授权。",

      // Slide 8
      "s8.kicker": "可验证代理与最小特权",
      "s8.h2": "智能体身份：规范驱动岗位描述 (SJD) 与凭证",
      "s8.lead": "智能体绝不能等同于匿名的提示词。它必须具备机器可执行的规范驱动岗位描述与密码学身份，彻底终结无界隐式特权。",

      // Slide 9
      "s9.kicker": "语义对齐与形式化约束",
      "s9.h2": "基于领域本体的意图确定",
      "s9.lead": "大模型对自然语言的理解具有模糊性。在安全关键的商业领域，意图必须锚定在形式化的领域本体中，精准识别恶意注入。",

      // Slide 10
      "s10.kicker": "动态安全策略编译",
      "s10.h2": "基于意图的访问控制 (IBAC)",
      "s10.lead": "RBAC 与 ABAC 无法应对智能体安全挑战。IBAC 依据已验证的真实用户意图，动态编译单次、最小权限的能力代币。",

      // Slide 11
      "s11.kicker": "认知层面的全新攻击面",
      "s11.h2": "上下文与记忆威胁：投毒、时效漂移与脑裂冲突",
      "s11.lead": "智能体记忆是持久性攻击的主要向量。与无状态的聊天模型不同，智能体在跨会话中维护状态，极易遭受认知腐蚀。",

      // Slide 12
      "s12.kicker": "认知防护体系",
      "s12.h2": "记忆卫生架构：溯源认证、TTL 与确定性冲突裁决",
      "s12.lead": "保障智能体记忆安全需要将数据库级别的严谨性和密码学验证引入到每一次记忆读写与固化操作中。",

      // Slide 13
      "s13.kicker": "全链路实时遥测",
      "s13.h2": "行为可观测性与执行轨迹监控",
      "s13.lead": "智能体安全绝不能仅仅依赖输入输出检测。必须对整个认知轨迹进行端到端监控：中间思考、工具调用与环境反馈。",

      // Slide 14
      "s14.kicker": "主动控制面与带外拦截",
      "s14.h2": "运行时引导与动态策略拦截",
      "s14.lead": "缺乏执行力的可观测性仅仅是事后日志。运行时引导提供了带外的程序化控制挂钩，在操作执行前予以拦截或动态修正。",

      // Slide 15
      "s15.kicker": "性能与经济学平衡",
      "s15.h2": "评估基准、效能评测与 Token 投入产出比",
      "s15.lead": "企业级智能体系统必须同时优化安全性和单位经济效益。通过任务完成率与 Token 效能矩阵，揭示真实商业产出成本。",

      // Slide 16
      "s16.kicker": "总结与问答互动",
      "s16.h2": "核心总结与互动问答：构建安全可信的智能体商业未来",
      "s16.lead": "自主金融执行需要横跨支付协议、数学不变量、边界自主、领域本体、记忆卫生与连续运行时引导的纵深防御体系。",
      "s16.takeaways_title": "智能体安全六大核心支柱",
      "s16.p1_t": "支付协议栈：", "s16.p1_d": "非托管 x402 与 MPP 通道实现微计量即时结算，消除人工结账摩擦。",
      "s16.p2_t": "智能合约防护：", "s16.p2_d": "链上数学不变量严格约束资金限额，免疫提示词恶意越权覆盖。",
      "s16.p3_t": "自主权治理：", "s16.p3_d": "LoA 0–5 分级边界与确定性熔断器，支持异常时动态降级。",
      "s16.p4_t": "身份与意图访问控制：", "s16.p4_d": "规范驱动岗位描述 (SJD) 与单次能力代币，彻底终结环境隐式特权。",
      "s16.p5_t": "记忆认知卫生：", "s16.p5_d": "密码学溯源签名与 TTL 自动失效，杜绝认知投毒与语义漂移。",
      "s16.p6_t": "可观测性与控制面：", "s16.p6_d": "带外 PreToolUse 拦截器与熔断终止开关，毫秒级阻断恶意轨迹。",
      "s16.qa_title": "核心讨论与架构思考",
      "s16.q1_t": "通道结算 vs 单次请求：", "s16.q1_d": "高频智能体交易何时应从单次 HTTP 402 切换至累积状态通道 (MPP)？",
      "s16.q2_t": "自主爆炸半径控制：", "s16.q2_d": "企业团队如何在将智能体提升至 LoA 3+ 之前建立数学上可证明的遏制机制？",
      "s16.q3_t": "记忆污染隔离：", "s16.q3_d": "采用何种运行时校验机制可防止不可信商户报价污染智能体情景记忆？",
      "s16.author_lead": "专家联络与深入合作：",
      "s16.author_desc": "Ken Huang, CISSP · 旧金山大学 (USF) 客座教授 · CSA AI 安全工作组 Fellow 兼联合主席 · DistributedApps.ai CEO"
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
