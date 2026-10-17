/* ============================================================
   Agent Commerce & Agentic Security Foundations — Hand-Drawn Diagrams
   Excalidraw-style rough.js diagrams for high-contrast technical visual clarity
   ============================================================ */
(function () {
  const NS = "http://www.w3.org/2000/svg";
  const COL = {
    blue: "#1971c2", red: "#e03131", green: "#2b8a3e", teal: "#0c8599",
    grape: "#7048e8", orange: "#f08c00", yellow: "#f59f00", pink: "#d6336c",
    indigo: "#3b5bdb", cyan: "#099268", ink: "#14171f", accent: "#ff6a2b",
    slate: "#4b5563", line: "#cbd5e1", lightBg: "#f8fafc", white: "#ffffff"
  };
  const FONT = "'Kalam', cursive";

  function isZh() {
    return !!(window.AGENT_SEC_I18N && window.AGENT_SEC_I18N.isZh());
  }

  function fontFace() {
    return isZh() ? "'Noto Sans SC', 'Inter', sans-serif" : FONT;
  }

  function scene(host, w, h) {
    host.innerHTML = "";
    const svg = document.createElementNS(NS, "svg");
    svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
    svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
    host.appendChild(svg);
    return { svg, rc: rough.svg(svg), w, h };
  }

  function addNode(s, node) { s.svg.appendChild(node); return node; }

  function rect(s, x, y, w, h, o = {}) {
    return addNode(s, s.rc.rectangle(x, y, w, h, Object.assign(
      { roughness: 1.1, bowing: 1, stroke: COL.ink, strokeWidth: 1.6 }, o)));
  }

  function line(s, x1, y1, x2, y2, o = {}) {
    return addNode(s, s.rc.line(x1, y1, x2, y2, Object.assign(
      { roughness: 1.1, strokeWidth: 1.5, stroke: COL.ink }, o)));
  }

  function poly(s, pts, o = {}) {
    return addNode(s, s.rc.polygon(pts, Object.assign(
      { roughness: 1.1, strokeWidth: 1.6, stroke: COL.ink }, o)));
  }

  function arrow(s, x1, y1, x2, y2, o = {}) {
    const stroke = o.stroke || COL.ink;
    line(s, x1, y1, x2, y2, Object.assign({ stroke, strokeWidth: 2 }, o));
    const a = Math.atan2(y2 - y1, x2 - x1), L = 12;
    poly(s, [
      [x2, y2],
      [x2 - L * Math.cos(a - 0.4), y2 - L * Math.sin(a - 0.4)],
      [x2 - L * Math.cos(a + 0.4), y2 - L * Math.sin(a + 0.4)],
    ], { fill: stroke, fillStyle: "solid", stroke, strokeWidth: 1 });
  }

  function txt(s, x, y, str, o = {}) {
    const t = document.createElementNS(NS, "text");
    t.setAttribute("x", x); t.setAttribute("y", y);
    t.setAttribute("font-family", o.family || fontFace());
    t.setAttribute("font-size", o.size || 14);
    t.setAttribute("fill", o.col || COL.ink);
    t.setAttribute("text-anchor", o.anchor || "start");
    t.setAttribute("font-weight", o.weight || 400);
    t.textContent = str;
    return addNode(s, t);
  }

  function hex(c, a) {
    const n = c.replace("#", "");
    const r = parseInt(n.slice(0, 2), 16), g = parseInt(n.slice(2, 4), 16), b = parseInt(n.slice(4, 6), 16);
    return `rgba(${r},${g},${b},${a})`;
  }

  function chip(s, x, y, w, h, label, color, o = {}) {
    rect(s, x, y, w, h, { fill: o.fill || hex(color, 0.12), fillStyle: "solid", stroke: color, strokeWidth: 2 });
    txt(s, x + w / 2, y + h / 2 + 5, label, {
      anchor: "middle", col: o.textCol || color, weight: 700, size: o.size || 13
    });
  }

  // -------------------------------------------------------------
  // Slide 3 Diagram: Commerce Attack Surface vs Guardrails
  // -------------------------------------------------------------
  function drawCommerceThreats(host) {
    const s = scene(host, 620, 360);
    const zh = isZh();

    // Adversary input
    chip(s, 20, 40, 140, 50, zh ? "恶意攻击提示注入" : "Adversarial Prompt", COL.red);
    chip(s, 20, 120, 140, 50, zh ? "假冒商户/报价" : "Spoofed Quote / Merch", COL.orange);
    chip(s, 20, 200, 140, 50, zh ? "高频重放/抽水" : "Replay / Gas Drain", COL.yellow);

    // Agent Center Core
    rect(s, 220, 30, 180, 240, { fill: hex(COL.blue, 0.06), stroke: COL.blue, strokeWidth: 2.2 });
    txt(s, 310, 60, zh ? "自主商业智能体" : "Autonomous Commerce Agent", { anchor: "middle", weight: 700, size: 14, col: COL.blue });
    rect(s, 235, 80, 150, 40, { fill: hex(COL.slate, 0.08), stroke: COL.slate });
    txt(s, 310, 105, zh ? "LLM 推理 & 规划" : "LLM Planning Engine", { anchor: "middle", size: 12 });
    rect(s, 235, 135, 150, 40, { fill: hex(COL.grape, 0.08), stroke: COL.grape });
    txt(s, 310, 160, zh ? "钱包私钥 / 签名者" : "Signer / Wallet Keys", { anchor: "middle", size: 12, col: COL.grape });
    rect(s, 235, 190, 150, 65, { fill: hex(COL.green, 0.12), stroke: COL.green });
    txt(s, 310, 215, zh ? "🛡️ 确定性防护拦截器" : "🛡️ Invariant Guardrails", { anchor: "middle", size: 12, col: COL.green, weight: 700 });
    txt(s, 310, 235, zh ? "限额 / IBAC / 熔断器" : "Limits / IBAC / Circuit Breaker", { anchor: "middle", size: 10, col: COL.green });

    arrow(s, 160, 65, 220, 100, { stroke: COL.red });
    arrow(s, 160, 145, 220, 145, { stroke: COL.orange });
    arrow(s, 160, 225, 220, 185, { stroke: COL.yellow });

    // Outputs: Drain vs Settlement
    chip(s, 460, 60, 140, 65, zh ? "❌ 未受控国库抽水\n(不可逆链上损失)" : "❌ Unchecked Drain\n(Irreversible Loss)", COL.red);
    chip(s, 460, 190, 140, 65, zh ? "✓ 校验托管安全结算\n(受保护商业闭环)" : "✓ Verified Escrow\n(Safe M2M Settlement)", COL.green);

    line(s, 385, 120, 460, 95, { stroke: COL.red, strokeWidth: 2 });
    arrow(s, 385, 220, 460, 220, { stroke: COL.green });

    // Warning Banner
    rect(s, 20, 300, 580, 45, { fill: hex(COL.red, 0.08), stroke: COL.red, strokeWidth: 1.5 });
    txt(s, 310, 328, zh ? "⚠️ 关键缺陷：传统应用层安全无法阻止已获授权自主智能体的恶意交易" : "⚠️ Key Flaw: AppSec fails once an authorized agent signs an injection payload", {
      anchor: "middle", size: 12, col: COL.red, weight: 700
    });
  }

  // -------------------------------------------------------------
  // Slide 4 Diagram: HTTP 402 & MPP Payment Protocol Handshake
  // -------------------------------------------------------------
  function drawPaymentFlow(host) {
    const s = scene(host, 620, 350);
    const zh = isZh();

    // Lanes
    line(s, 120, 40, 120, 320, { stroke: COL.blue, strokeWidth: 2 });
    line(s, 500, 40, 500, 320, { stroke: COL.teal, strokeWidth: 2 });
    txt(s, 120, 30, zh ? "买方智能体 (Client)" : "Buyer Agent (Client)", { anchor: "middle", weight: 700, col: COL.blue, size: 14 });
    txt(s, 500, 30, zh ? "商户端 / API 提供商" : "Merchant / Provider", { anchor: "middle", weight: 700, col: COL.teal, size: 14 });

    // Step 1: Request
    arrow(s, 120, 70, 500, 70, { stroke: COL.ink });
    txt(s, 310, 62, "1. GET /resource (Query inference/data)", { anchor: "middle", size: 12 });

    // Step 2: 402 Payment Required
    arrow(s, 500, 115, 120, 115, { stroke: COL.orange });
    rect(s, 160, 95, 300, 35, { fill: hex(COL.orange, 0.1), stroke: COL.orange });
    txt(s, 310, 118, "2. HTTP 402 Payment Required (x402 Quote / Address / Rate)", { anchor: "middle", size: 11, col: COL.orange, weight: 700 });

    // Step 3: Local Verification & Permit2 Signing
    rect(s, 40, 150, 160, 45, { fill: hex(COL.green, 0.12), stroke: COL.green });
    txt(s, 120, 170, zh ? "本地策略校验 & 额度检查" : "Policy Check & Permit2", { anchor: "middle", size: 11, col: COL.green, weight: 700 });
    txt(s, 120, 185, zh ? "生成 EIP-712 / 微支付凭单" : "Sign EIP-712 Voucher", { anchor: "middle", size: 10, col: COL.green });

    // Step 4: Pay & Execute
    arrow(s, 120, 220, 500, 220, { stroke: COL.blue });
    rect(s, 180, 200, 260, 35, { fill: hex(COL.blue, 0.1), stroke: COL.blue });
    txt(s, 310, 222, "3. GET /resource with X-PAYMENT: <Voucher/Sig>", { anchor: "middle", size: 11, col: COL.blue, weight: 700 });

    // Step 5: Deliver Resource
    arrow(s, 500, 270, 120, 270, { stroke: COL.green });
    rect(s, 190, 255, 240, 30, { fill: hex(COL.green, 0.15), stroke: COL.green });
    txt(s, 310, 275, "4. HTTP 200 OK + Verified Data/Stream", { anchor: "middle", size: 11, col: COL.green, weight: 700 });

    // Step 6: MPP Channel Settlement
    chip(s, 220, 305, 180, 30, zh ? "MPP 状态通道净额结算" : "MPP State Channel Netting", COL.grape, { size: 11 });
  }

  // -------------------------------------------------------------
  // Slide 5 Diagram: Security Contracts & Invariants
  // -------------------------------------------------------------
  function drawSecurityContracts(host) {
    const s = scene(host, 620, 350);
    const zh = isZh();

    // 4 Invariant Boxes
    chip(s, 20, 30, 270, 130, "", COL.blue);
    txt(s, 155, 55, zh ? "1. 条件托管 & 时间锁" : "1. Conditional Escrow & Timelock", { anchor: "middle", weight: 700, col: COL.blue, size: 13 });
    txt(s, 40, 85, zh ? "• 交付物哈希验证提交" : "• Cryptographic delivery proof", { size: 11 });
    txt(s, 40, 105, zh ? "• 超时自动原路退款 (Time-to-Refund)" : "• Auto-refund after T blocks expiry", { size: 11 });
    txt(s, 40, 125, zh ? "• 无需对手方恶意同意" : "• No unilateral griefing hold", { size: 11 });

    chip(s, 330, 30, 270, 130, "", COL.red);
    txt(s, 465, 55, zh ? "2. 经济质押 & 罚没机制" : "2. Slashing & Staked Reputation", { anchor: "middle", weight: 700, col: COL.red, size: 13 });
    txt(s, 350, 85, zh ? "• 智能体节点入驻质押金 (Stake)" : "• Service agent stakes collateral", { size: 11 });
    txt(s, 350, 105, zh ? "• 违背 SLA / 恶意输出自动罚没" : "• Programmatic slash on SLA breach", { size: 11 });
    txt(s, 350, 125, zh ? "• 仲裁者或多方验证签名" : "• Verified by Evaluator consensus", { size: 11 });

    chip(s, 20, 185, 270, 135, "", COL.grape);
    txt(s, 155, 210, zh ? "3. 多签与门限共识" : "3. Multi-Sig & M-of-N Consensus", { anchor: "middle", weight: 700, col: COL.grape, size: 13 });
    txt(s, 40, 240, zh ? "• 高额交易强制 M-of-N 智能体复核" : "• M-of-N validator verification", { size: 11 });
    txt(s, 40, 260, zh ? "• 敏感转账强制人机协同 (HITL)" : "• Mandatory human co-signing", { size: 11 });
    txt(s, 40, 280, zh ? "• 消除单点智能体失控风险" : "• Zero single point of agent failure", { size: 11 });

    chip(s, 330, 185, 270, 135, "", COL.green);
    txt(s, 465, 210, zh ? "4. 链上速率与最大敞口限制" : "4. Programmatic Velocity & Caps", { anchor: "middle", weight: 700, col: COL.green, size: 13 });
    txt(s, 350, 240, zh ? "• 单笔交易硬顶 (Per-Tx Cap)" : "• Per-transaction limit (L_tx)", { size: 11 });
    txt(s, 350, 260, zh ? "• 24小时滚动支出预算 (Rolling Cap)" : "• 24h rolling velocity cap (L_24h)", { size: 11 });
    txt(s, 350, 280, zh ? "• 业务钱包与冷国库物理隔离" : "• Working capital vs cold vault", { size: 11 });
  }

  // -------------------------------------------------------------
  // Slide 6 Diagram: Level of Autonomy (LoA 0 to LoA 5)
  // -------------------------------------------------------------
  function drawLoASpectrum(host) {
    const s = scene(host, 620, 350);
    const zh = isZh();

    const loas = [
      { l: "LoA 0", name: zh ? "辅助模式" : "Assistive", c: COL.blue, desc: zh ? "仅建议，无工具" : "Advisory only" },
      { l: "LoA 1", name: zh ? "脚本确定" : "Scripted", c: COL.teal, desc: zh ? "严格确定性脚本" : "Deterministic" },
      { l: "LoA 2", name: zh ? "条件委托" : "Conditional", c: COL.green, desc: zh ? "只读探索，写需确认" : "Read-only auth" },
      { l: "LoA 3", name: zh ? "受监督自主" : "Supervised", c: COL.yellow, desc: zh ? "有界自主，异步否决" : "Bounded autonomy" },
      { l: "LoA 4", name: zh ? "高度自主" : "High Autonomy", c: COL.orange, desc: zh ? "异常触发升级" : "Exception escalation" },
      { l: "LoA 5", name: zh ? "完全自主" : "Unconstrained", c: COL.red, desc: zh ? "⛔ 商业系统严禁" : "⛔ Enterprise Banned" }
    ];

    const w = 92, gap = 8;
    loas.forEach((item, idx) => {
      const x = 20 + idx * (w + gap);
      rect(s, x, 60, w, 190, { fill: hex(item.c, 0.12), stroke: item.c, strokeWidth: 2 });
      chip(s, x + 6, 70, w - 12, 28, item.l, item.c, { size: 12 });
      txt(s, x + w / 2, 125, item.name, { anchor: "middle", weight: 700, size: 11, col: item.c });
      txt(s, x + w / 2, 160, item.desc, { anchor: "middle", size: 10, col: COL.slate });

      // Risk vs Human Curve bar
      const hBar = 10 + idx * 12;
      rect(s, x + 15, 230 - hBar, w - 30, hBar, { fill: item.c, fillStyle: "solid", stroke: item.c });
    });

    // Spectrum Arrow
    arrow(s, 20, 280, 600, 280, { stroke: COL.ink });
    txt(s, 20, 305, zh ? "◀ 人工全程直接控制 (低爆炸半径)" : "◀ High Human Control (Low Blast Radius)", { size: 11, col: COL.blue });
    txt(s, 600, 305, zh ? "智能体机器自主权 (高破坏风险) ▶" : "High Autonomous Agency (High Liability) ▶", { anchor: "end", size: 11, col: COL.red });

    // Recommendation annotation
    rect(s, 120, 320, 380, 25, { fill: hex(COL.green, 0.1), stroke: COL.green });
    txt(s, 310, 337, zh ? "生产金融商业系统黄金基准：LoA 2 (写操作强制确认) 或 LoA 3 (限额受控)" : "Production Commerce Gold Standard: LoA 2 (Confirm Writes) or LoA 3 (Capped)", {
      anchor: "middle", size: 11, col: COL.green, weight: 700
    });
  }

  // -------------------------------------------------------------
  // Slide 7 Diagram: Multi-Dimensional Threshold Engine
  // -------------------------------------------------------------
  function drawThresholdEngine(host) {
    const s = scene(host, 620, 350);
    const zh = isZh();

    // Input Action Request
    chip(s, 20, 50, 150, 60, zh ? "智能体动作请求\n(API / 交易 / 工具)" : "Action Request\n(Tool / Tx / Call)", COL.blue);

    // Multi-Dimensional Threshold Evaluator
    rect(s, 220, 30, 180, 230, { fill: hex(COL.orange, 0.08), stroke: COL.orange, strokeWidth: 2 });
    txt(s, 310, 55, zh ? "多维门限评估网关" : "Threshold Gateway", { anchor: "middle", weight: 700, col: COL.orange, size: 13 });

    chip(s, 235, 75, 150, 35, zh ? "1. 资金金额门限" : "1. Financial Cap ($)", COL.green, { size: 11 });
    chip(s, 235, 120, 150, 35, zh ? "2. 工具风险分级" : "2. Tool Risk Tier", COL.blue, { size: 11 });
    chip(s, 235, 165, 150, 35, zh ? "3. 速率与异常度" : "3. Velocity / Drift", COL.grape, { size: 11 });
    chip(s, 235, 210, 150, 35, zh ? "4. 累积影响半径" : "4. Blast Radius", COL.teal, { size: 11 });

    arrow(s, 170, 80, 220, 80, { stroke: COL.ink });

    // Outputs
    arrow(s, 400, 95, 460, 70, { stroke: COL.green });
    chip(s, 460, 45, 140, 50, zh ? "✓ 自动放行 (LOW)\n即刻执行" : "✓ Auto-Approve\nInstant Exec", COL.green, { size: 11 });

    arrow(s, 400, 145, 460, 145, { stroke: COL.yellow });
    chip(s, 460, 120, 140, 50, zh ? "⚠️ 双智能体复核\n(MEDIUM / $50-$500)" : "⚠️ Dual-Agent Check\n($50 - $500)", COL.yellow, { size: 11 });

    arrow(s, 400, 195, 460, 220, { stroke: COL.red });
    chip(s, 460, 195, 140, 50, zh ? "🛑 强制人工签署\n(CRITICAL / >$500)" : "🛑 Human Sign\n(High Value / Shell)", COL.red, { size: 11 });

    // Circuit Breaker trip
    rect(s, 20, 280, 580, 55, { fill: hex(COL.red, 0.12), stroke: COL.red, strokeWidth: 1.8 });
    txt(s, 310, 303, zh ? "⚡ 自动熔断器 (Circuit Breaker)：任意指标越界立即触发自主权降级" : "⚡ Automated Circuit Breaker: Immediate LoA Step-Down on Anomaly", {
      anchor: "middle", weight: 700, col: COL.red, size: 12
    });
    txt(s, 310, 323, zh ? "例如：单分钟超 10 次调用或语义漂移 > 0.4 ➔ 强制暂停智能体并回滚待处理事务" : "e.g., >10 calls/min or drift > 0.4 triggers instant pause and pending escrow freeze", {
      anchor: "middle", size: 11, col: COL.slate
    });
  }

  // -------------------------------------------------------------
  // Slide 8 Diagram: Spec-Driven Job Descriptions (SJD)
  // -------------------------------------------------------------
  function drawSJDArchitecture(host) {
    const s = scene(host, 620, 350);
    const zh = isZh();

    // SJD Manifest
    rect(s, 20, 40, 250, 270, { fill: "#161b26", stroke: COL.teal, strokeWidth: 2 });
    txt(s, 145, 65, "SJD Manifest (SPEC.json)", { anchor: "middle", col: "#fff", weight: 700, size: 13, family: "'JetBrains Mono', monospace" });

    txt(s, 35, 95, "agent_id: \"procure-bot-01\"", { col: "#a5d8ff", size: 11, family: "'JetBrains Mono'" });
    txt(s, 35, 120, "role: \"Material Procurement\"", { col: "#a5d8ff", size: 11, family: "'JetBrains Mono'" });
    txt(s, 35, 145, "allowed_tools: [\"quote\", \"escrow\"]", { col: "#74c0fc", size: 11, family: "'JetBrains Mono'" });
    txt(s, 35, 170, "non_goals: [\"no_shell\", \"no_wire\"]", { col: "#ff8787", size: 11, family: "'JetBrains Mono'" });
    txt(s, 35, 195, "budget_cap_daily: 200.00 USDC", { col: "#b197fc", size: 11, family: "'JetBrains Mono'" });
    txt(s, 35, 220, "loa_tier: 2", { col: "#69db7c", size: 11, family: "'JetBrains Mono'" });
    txt(s, 35, 245, "parent_auth: 0x8a91...f3", { col: "#ffd43b", size: 11, family: "'JetBrains Mono'" });
    txt(s, 35, 275, "# 消除默认无界权限 (Zero Ambient Authority)", { col: "#868e96", size: 10, family: "'JetBrains Mono'" });

    arrow(s, 270, 170, 340, 170, { stroke: COL.ink });

    // Runtime Verification & Attenuated Token
    rect(s, 340, 40, 260, 270, { fill: hex(COL.blue, 0.06), stroke: COL.blue, strokeWidth: 2 });
    txt(s, 470, 65, zh ? "可信身份凭证生命周期" : "Credential Lifecycle", { anchor: "middle", weight: 700, col: COL.blue, size: 13 });

    chip(s, 355, 85, 230, 40, zh ? "1. 临时任务密钥对 (Ed25519)" : "1. Ephemeral Task Keypair", COL.blue, { size: 11 });
    chip(s, 355, 135, 230, 40, zh ? "2. 细粒度衰减授权 (Macaroons)" : "2. Attenuated Delegation Token", COL.grape, { size: 11 });
    chip(s, 355, 185, 230, 40, zh ? "3. 密码学证明绑定 (ERC-8004/DID)" : "3. Verifiable DID / Agent ID", COL.teal, { size: 11 });
    chip(s, 355, 235, 230, 40, zh ? "4. 任务结束即刻销毁密钥" : "4. Ephemeral Zeroize on Close", COL.green, { size: 11 });
  }

  // -------------------------------------------------------------
  // Slide 9 Diagram: Domain Ontology for Semantic Intent Grounding
  // -------------------------------------------------------------
  function drawDomainOntology(host) {
    const s = scene(host, 620, 350);
    const zh = isZh();

    // Natural Language Input
    chip(s, 20, 50, 170, 60, zh ? "模糊自然语言提示\n\"帮我平仓并结清供应商\"" : "Fuzzy User Prompt\n\"Liquidate & settle debt\"", COL.red, { size: 11 });

    arrow(s, 190, 80, 240, 80, { stroke: COL.ink });

    // Formal Domain Ontology Engine
    rect(s, 240, 30, 200, 280, { fill: hex(COL.grape, 0.06), stroke: COL.grape, strokeWidth: 2 });
    txt(s, 340, 55, zh ? "金融领域本体语义图谱" : "Financial Domain Ontology", { anchor: "middle", weight: 700, col: COL.grape, size: 13 });

    chip(s, 255, 75, 170, 35, zh ? "概念实体 (Entity / Asset)" : "Entities (Asset / Order)", COL.grape, { size: 11 });
    chip(s, 255, 120, 170, 35, zh ? "原子动作 (Action Primitives)" : "Action Primitives", COL.blue, { size: 11 });
    chip(s, 255, 165, 170, 35, zh ? "前后置条件约束 (Invariants)" : "Pre/Post Invariants", COL.orange, { size: 11 });
    chip(s, 255, 210, 170, 35, zh ? "状态迁移状态机 (State Graph)" : "State Machine Graph", COL.teal, { size: 11 });
    chip(s, 255, 255, 170, 40, zh ? "消歧与注入清洗" : "Disambiguation & Sanitizer", COL.green, { size: 11 });

    arrow(s, 440, 80, 480, 80, { stroke: COL.green });

    // Formal Intent AST
    rect(s, 480, 40, 130, 260, { fill: "#f1f3f5", stroke: COL.teal, strokeWidth: 1.8 });
    txt(s, 545, 65, zh ? "形式化意图树" : "Intent AST", { anchor: "middle", weight: 700, col: COL.teal, size: 12 });
    txt(s, 490, 95, "Intent: Settle", { size: 10, family: "'JetBrains Mono'" });
    txt(s, 490, 120, "Asset: USDC", { size: 10, family: "'JetBrains Mono'" });
    txt(s, 490, 145, "MaxSlip: 0.5%", { size: 10, family: "'JetBrains Mono'" });
    txt(s, 490, 170, "Vendor: 0x9f..", { size: 10, family: "'JetBrains Mono'" });
    txt(s, 490, 195, "Cap: $150", { size: 10, family: "'JetBrains Mono'" });
    txt(s, 490, 230, zh ? "✓ 拦截越权语义" : "✓ No semantic drift", { size: 9, col: COL.green, weight: 700 });
    txt(s, 490, 255, zh ? "✓ 阻断越界注入" : "✓ Injection blocked", { size: 9, col: COL.green, weight: 700 });
  }

  // -------------------------------------------------------------
  // Slide 10 Diagram: Intent-Based Access Control (IBAC)
  // -------------------------------------------------------------
  function drawIBACPipeline(host) {
    const s = scene(host, 620, 350);
    const zh = isZh();

    // 4 Steps in IBAC
    const steps = [
      { num: "Step 1", t: zh ? "意图提取与解析" : "Intent AST Extract", c: COL.blue, d: zh ? "解析并约束自然语言为显式结构" : "Parse NL into Intent AST" },
      { num: "Step 2", t: zh ? "本体约束与不变量校验" : "Invariant Verification", c: COL.orange, d: zh ? "核实限额、权限与前置条件" : "Check policies & thresholds" },
      { num: "Step 3", t: zh ? "动态编译能力代币 (CapToken)" : "Dynamic CapToken", c: COL.grape, d: zh ? "生成单次、短时、范围受限凭据" : "Single-use scoped token" },
      { num: "Step 4", t: zh ? "目标服务/合约严格消费" : "Target Execution", c: COL.green, d: zh ? "核验代币签名与参数匹配执行" : "Validate & Burn Token" }
    ];

    steps.forEach((st, idx) => {
      const y = 30 + idx * 72;
      rect(s, 40, y, 540, 58, { fill: hex(st.c, 0.08), stroke: st.c, strokeWidth: 1.8 });
      chip(s, 55, y + 10, 80, 38, st.num, st.c, { size: 11 });
      txt(s, 150, y + 26, st.t, { weight: 700, col: st.c, size: 13 });
      txt(s, 150, y + 46, st.d, { size: 11, col: COL.slate });

      if (idx < 3) {
        arrow(s, 310, y + 58, 310, y + 72, { stroke: COL.ink });
      }
    });

    // Comparison Callout
    rect(s, 40, 315, 540, 28, { fill: hex(COL.green, 0.12), stroke: COL.green });
    txt(s, 310, 334, zh ? "IBAC 核心价值：彻底终结 RBAC 漏洞，即拥有角色权限的智能体也无法执行未经意图核验的工具" : "IBAC Core: Eliminates RBAC flaw; agents cannot execute tools outside verified user intent", {
      anchor: "middle", size: 10, col: COL.green, weight: 700
    });
  }

  // -------------------------------------------------------------
  // Slide 11 Diagram: Memory Threat Triad
  // -------------------------------------------------------------
  function drawMemoryThreats(host) {
    const s = scene(host, 620, 350);
    const zh = isZh();

    // 3 Threat Columns
    chip(s, 20, 40, 180, 240, "", COL.red);
    txt(s, 110, 65, zh ? "1. 记忆投毒\n(Memory Poisoning)" : "1. Poisoning\n(Indirect Injection)", { anchor: "middle", weight: 700, col: COL.red, size: 12 });
    txt(s, 35, 115, zh ? "• 网页/邮件内嵌恶意指令" : "• Concealed markdown payloads", { size: 10 });
    txt(s, 35, 140, zh ? "• 诱骗智能体写入 MEMORY.md" : "• Writes backdoor to memory", { size: 10 });
    txt(s, 35, 165, zh ? "• 会话重置后仍然长期潜伏" : "• Persists across sessions", { size: 10 });
    txt(s, 35, 195, zh ? "后果：窃取资金、转账重定向" : "Impact: Silent treasury theft", { size: 10, col: COL.red, weight: 700 });

    chip(s, 220, 40, 180, 240, "", COL.orange);
    txt(s, 310, 65, zh ? "2. 过期时效漂移\n(Temporal Drift)" : "2. Outdated Info\n(Temporal Drift)", { anchor: "middle", weight: 700, col: COL.orange, size: 12 });
    txt(s, 235, 115, zh ? "• 依据过期报价下单" : "• Stale market quotes", { size: 10 });
    txt(s, 235, 140, zh ? "• 依赖已吊销的授权凭证" : "• Using revoked credentials", { size: 10 });
    txt(s, 235, 165, zh ? "• 忽略最新取消或退款事件" : "• Ignores cancellation state", { size: 10 });
    txt(s, 235, 195, zh ? "后果：套利滑点损失、越权调用" : "Impact: Arbitrage losses & fails", { size: 10, col: COL.orange, weight: 700 });

    chip(s, 420, 40, 180, 240, "", COL.yellow);
    txt(s, 510, 65, zh ? "3. 冲突与脑裂\n(Conflict & Split-Brain)" : "3. Conflicting Info\n(Split-Brain State)", { anchor: "middle", weight: 700, col: COL.yellow, size: 12 });
    txt(s, 435, 115, zh ? "• 多智能体传递相反事实" : "• Multi-agent contradictory facts", { size: 10 });
    txt(s, 435, 140, zh ? "• 上下文认知僵局与死循环" : "• Cognitive looping & deadlocks", { size: 10 });
    txt(s, 435, 165, zh ? "• 随机降级至脆弱默认策略" : "• Fallback to insecure default", { size: 10 });
    txt(s, 435, 195, zh ? "后果：业务中断、拒绝服务" : "Impact: Deadlock & denial", { size: 10, col: COL.yellow, weight: 700 });

    // Bottom warning
    rect(s, 20, 295, 580, 40, { fill: hex(COL.red, 0.08), stroke: COL.red });
    txt(s, 310, 320, zh ? "传统 RAG 与向量数据库缺乏事实溯源与访问控制，是智能体长期记忆最大风险源" : "Standard RAG lacks cryptographic provenance, creating severe persistent attack vectors", {
      anchor: "middle", size: 11, col: COL.red, weight: 700
    });
  }

  // -------------------------------------------------------------
  // Slide 12 Diagram: 3-Tier Defensive Memory Architecture
  // -------------------------------------------------------------
  function drawMemoryHygiene(host) {
    const s = scene(host, 620, 350);
    const zh = isZh();

    // Ingestion
    chip(s, 20, 40, 140, 60, zh ? "外部信息摄入\n(网页/API/文档)" : "Untrusted Ingestion\n(Web/API/Docs)", COL.slate, { size: 11 });

    arrow(s, 160, 70, 210, 70, { stroke: COL.ink });

    // Tier 1: Ephemeral
    chip(s, 210, 40, 160, 60, zh ? "Tier 1: 临时工作记忆\n(任务结束即刻清空)" : "Tier 1: Ephemeral\n(Zeroized on end)", COL.blue, { size: 11 });

    arrow(s, 290, 100, 290, 140, { stroke: COL.ink });

    // Tier 2: Quarantined
    rect(s, 200, 140, 180, 80, { fill: hex(COL.orange, 0.1), stroke: COL.orange, strokeWidth: 2 });
    txt(s, 290, 165, zh ? "Tier 2: 隔离检验缓冲区" : "Tier 2: Quarantined Buffer", { anchor: "middle", weight: 700, col: COL.orange, size: 12 });
    txt(s, 290, 185, zh ? "• 溯源信誉核验 (Provenance)" : "• Provenance Signature Check", { anchor: "middle", size: 10 });
    txt(s, 290, 205, zh ? "• 冲突消除引擎 (CRDTs)" : "• Conflict Reconciliation / TTL", { anchor: "middle", size: 10 });

    arrow(s, 290, 220, 290, 260, { stroke: COL.green });

    // Tier 3: Verified Long Term
    chip(s, 210, 260, 160, 60, zh ? "Tier 3: 已验证可信长期存储\n(只追加/共识签名)" : "Tier 3: Verified Long-Term\n(Immutable / Signed)", COL.green, { size: 11 });

    // Hygiene Rules sidebar
    rect(s, 420, 40, 180, 280, { fill: hex(COL.teal, 0.06), stroke: COL.teal, strokeWidth: 1.8 });
    txt(s, 510, 65, zh ? "记忆卫生防护法则" : "Memory Invariants", { anchor: "middle", weight: 700, col: COL.teal, size: 13 });
    txt(s, 435, 95, zh ? "1. 密码学来源标签" : "1. Cryptographic Tags", { size: 11, weight: 700, col: COL.teal });
    txt(s, 435, 115, zh ? "谁写入、何时写、哈希值" : "Author, timestamp, hash", { size: 10 });
    txt(s, 435, 145, zh ? "2. 严格 TTL 动态过期" : "2. Strict TTL Expiry", { size: 11, weight: 700, col: COL.teal });
    txt(s, 435, 165, zh ? "报价30秒，凭证15分" : "Prices 30s, tokens 15m", { size: 10 });
    txt(s, 435, 195, zh ? "3. 确定性冲突仲裁" : "3. Deterministic Arb", { size: 11, weight: 700, col: COL.teal });
    txt(s, 435, 215, zh ? "本体优先序判定真伪" : "Ontological precedence", { size: 10 });
    txt(s, 435, 245, zh ? "4. 拒绝外部直写长期库" : "4. Zero Direct Writes", { size: 11, weight: 700, col: COL.red });
    txt(s, 435, 265, zh ? "不可信内容绝不可固化" : "No untrusted persistence", { size: 10 });
  }

  // -------------------------------------------------------------
  // Slide 13 Diagram: Trajectory Telemetry & Action Graph
  // -------------------------------------------------------------
  function drawTrajectoryMonitoring(host) {
    const s = scene(host, 620, 350);
    const zh = isZh();

    // Step nodes in DAG
    const nodes = [
      { x: 30, y: 50, l: "Thought 1\n(Intent)" },
      { x: 170, y: 50, l: "Plan Step\n(Quote)" },
      { x: 310, y: 50, l: "Tool Call\n(get_quote)" },
      { x: 450, y: 50, l: "Response\n(Valid)" },
      { x: 450, y: 160, l: "Tool Call\n(escrow_fund)" },
      { x: 310, y: 160, l: "Verify Invariant\n(Cap Check)" },
      { x: 170, y: 160, l: "Settlement\n(Final 200)" }
    ];

    nodes.forEach(n => {
      chip(s, n.x, n.y, 110, 48, n.l, COL.blue, { size: 10 });
    });

    arrow(s, 140, 74, 170, 74, { stroke: COL.ink });
    arrow(s, 280, 74, 310, 74, { stroke: COL.ink });
    arrow(s, 420, 74, 450, 74, { stroke: COL.ink });
    arrow(s, 505, 98, 505, 160, { stroke: COL.ink });
    arrow(s, 450, 184, 420, 184, { stroke: COL.ink });
    arrow(s, 310, 184, 280, 184, { stroke: COL.green });

    // Anomaly Engine Overlay
    rect(s, 30, 240, 560, 95, { fill: hex(COL.orange, 0.08), stroke: COL.orange, strokeWidth: 1.8 });
    txt(s, 310, 265, zh ? "轨迹遥测与异常行为探测器 (OpenTelemetry Semantic Conventions)" : "Trajectory Telemetry & Anomaly Engine (OTel GenAI Standard)", {
      anchor: "middle", weight: 700, col: COL.orange, size: 12
    });
    txt(s, 45, 290, zh ? "• 语义漂移监控：实时比对当前推理步骤与预定 SJD 的余弦距离" : "• Semantic Drift Scoring: Measures cosine distance between active plan and SJD", { size: 10 });
    txt(s, 45, 308, zh ? "• 循环振荡拦截：识别重复调用失败工具超过 3 次的死循环，阻断 Token 抽水" : "• Loop Interception: Flags >3 repeated tool failures, preventing token exhaustion", { size: 10 });
    txt(s, 45, 326, zh ? "• 隐蔽侧移检测：阻止商业智能体尝试访问文件系统、环境变量或私钥" : "• Lateral Movement Detection: Halts unauthorized file/key/env access attempts", { size: 10 });
  }

  // -------------------------------------------------------------
  // Slide 14 Diagram: Active Runtime Steering & Control Plane
  // -------------------------------------------------------------
  function drawRuntimeSteering(host) {
    const s = scene(host, 620, 350);
    const zh = isZh();

    // LLM Agent
    rect(s, 20, 40, 150, 260, { fill: hex(COL.blue, 0.06), stroke: COL.blue, strokeWidth: 2 });
    txt(s, 95, 70, zh ? "智能体认知核心" : "Agent Core", { anchor: "middle", weight: 700, col: COL.blue, size: 13 });
    txt(s, 35, 105, "Thought: ...", { size: 10, family: "'JetBrains Mono'" });
    txt(s, 35, 130, "Intent: Pay", { size: 10, family: "'JetBrains Mono'" });
    txt(s, 35, 155, "Tool: transfer", { size: 10, family: "'JetBrains Mono'" });
    txt(s, 35, 180, "Args: {to, amt}", { size: 10, family: "'JetBrains Mono'" });
    txt(s, 35, 225, zh ? "外部控制挂钩" : "Out-of-band Hook", { size: 10, col: COL.slate });

    arrow(s, 170, 160, 220, 160, { stroke: COL.ink });

    // Active Control Gateway (Pre & Post Hook)
    rect(s, 220, 30, 200, 280, { fill: hex(COL.red, 0.06), stroke: COL.red, strokeWidth: 2.2 });
    txt(s, 320, 55, zh ? "🛡️ 确定性运行时网关" : "🛡️ Deterministic Gateway", { anchor: "middle", weight: 700, col: COL.red, size: 13 });

    chip(s, 235, 75, 170, 40, zh ? "PreToolUse 拦截器\n(参数校验/限额/签名)" : "PreToolUse Hook\n(Schema & IBAC Check)", COL.red, { size: 10 });
    chip(s, 235, 125, 170, 35, zh ? "动态策略仲裁 (Policy)" : "Dynamic Policy Arbiter", COL.orange, { size: 10 });
    chip(s, 235, 170, 170, 40, zh ? "PostToolUse 净化器\n(脱敏/抹除注入指令)" : "PostToolUse Sanitizer\n(Strip Injection Payloads)", COL.green, { size: 10 });

    // Actions
    txt(s, 320, 230, zh ? "网关裁决动作：" : "Gateway Decision Primitives:", { anchor: "middle", size: 10, weight: 700 });
    txt(s, 240, 250, "• APPROVE / MODIFY", { size: 9, col: COL.green, weight: 700 });
    txt(s, 240, 268, "• STEER / RE-PROMPT", { size: 9, col: COL.blue, weight: 700 });
    txt(s, 240, 286, "• STEP-DOWN / KILL", { size: 9, col: COL.red, weight: 700 });

    arrow(s, 420, 95, 470, 95, { stroke: COL.green });

    // Target Environments
    chip(s, 470, 60, 130, 65, zh ? "真实外部系统\n(银行/区块链/API)" : "External Rails\n(Bank / Chain / API)", COL.green, { size: 11 });
    chip(s, 470, 180, 130, 65, zh ? "隔离沙箱工作区\n(Worktree / Git)" : "Sandbox Worktree\n(Isolated Testbed)", COL.teal, { size: 11 });
  }

  // -------------------------------------------------------------
  // Slide 15 Diagram: Benchmarks & Token Efficiency Matrix
  // -------------------------------------------------------------
  function drawBenchmarkMatrix(host) {
    const s = scene(host, 620, 350);
    const zh = isZh();

    // 4 Benchmark Metrics
    chip(s, 20, 30, 270, 135, "", COL.blue);
    txt(s, 155, 55, zh ? "任务完成率 (TCR)" : "Task Completion Rate (TCR)", { anchor: "middle", weight: 700, col: COL.blue, size: 13 });
    txt(s, 40, 85, zh ? "• 端到端复杂商业目标达成比例" : "• % of complex multi-turn goals met", { size: 11 });
    txt(s, 40, 105, zh ? "• 衡量跨工具编排与自我修正能力" : "• Measures cross-tool resilience", { size: 11 });
    txt(s, 40, 125, zh ? "• 工业级达标门槛：>= 92.5%" : "• Production Target: >= 92.5%", { size: 11, col: COL.blue, weight: 700 });

    chip(s, 330, 30, 270, 135, "", COL.red);
    txt(s, 465, 55, zh ? "不变量合规率 (SICR)" : "Invariant Compliance (SICR)", { anchor: "middle", weight: 700, col: COL.red, size: 13 });
    txt(s, 350, 85, zh ? "• 资金限额与安全策略违规率" : "• Zero financial policy violations", { size: 11 });
    txt(s, 350, 105, zh ? "• 越权调用、未授权转账发生率" : "• Unauthorized spend occurrence", { size: 11 });
    txt(s, 350, 125, zh ? "• 工业级硬性要求：100% 零容忍" : "• Production Requirement: 100% Exact", { size: 11, col: COL.red, weight: 700 });

    chip(s, 20, 185, 270, 135, "", COL.green);
    txt(s, 155, 210, zh ? "Token 效能比 (Token ROI)" : "Token Efficiency (TER)", { anchor: "middle", weight: 700, col: COL.green, size: 13 });
    txt(s, 40, 240, zh ? "• 达成单个业务成果所耗费 Token" : "• Optimal steps vs actual steps", { size: 11 });
    txt(s, 40, 260, zh ? "• 上下文动态裁剪降低冗余消耗" : "• Pruned schemas avoid bloat", { size: 11 });
    txt(s, 40, 280, zh ? "• 规避死循环节省高达 70% 成本" : "• Loop interception saves up to 70%", { size: 11, col: COL.green, weight: 700 });

    chip(s, 330, 185, 270, 135, "", COL.grape);
    txt(s, 465, 210, zh ? "对抗注入弹性分 (ARS)" : "Adversarial Resilience (ARS)", { anchor: "middle", weight: 700, col: COL.grape, size: 13 });
    txt(s, 350, 240, zh ? "• 500+ 项自动化红蓝对抗测试" : "• Automated red-teaming test suites", { size: 11 });
    txt(s, 350, 260, zh ? "• 间接提示注入/上下文投毒防御" : "• Indirect prompt injection defense", { size: 11 });
    txt(s, 350, 280, zh ? "• 工业级及格线：>= 99.2%" : "• Enterprise Target: >= 99.2%", { size: 11, col: COL.grape, weight: 700 });
  }

  // Master render dispatcher
  const renderers = {
    "threat-model": drawCommerceThreats,
    "payment-flow": drawPaymentFlow,
    "security-contracts": drawSecurityContracts,
    "loa-spectrum": drawLoASpectrum,
    "threshold-engine": drawThresholdEngine,
    "sjd-architecture": drawSJDArchitecture,
    "domain-ontology": drawDomainOntology,
    "ibac-pipeline": drawIBACPipeline,
    "memory-threats": drawMemoryThreats,
    "memory-hygiene": drawMemoryHygiene,
    "trajectory-monitoring": drawTrajectoryMonitoring,
    "runtime-steering": drawRuntimeSteering,
    "benchmark-matrix": drawBenchmarkMatrix
  };

  window.renderAllDiagrams = function () {
    document.querySelectorAll(".draw[data-fig]").forEach(el => {
      const fig = el.dataset.fig;
      if (renderers[fig]) {
        renderers[fig](el);
      }
    });
  };

  window.renderDiagramForSlide = function (slideIdx) {
    const slide = document.getElementById("s" + slideIdx);
    if (!slide) return;
    slide.querySelectorAll(".draw[data-fig]").forEach(el => {
      const fig = el.dataset.fig;
      if (renderers[fig]) {
        renderers[fig](el);
      }
    });
  };

  // Re-render when language changes
  document.addEventListener("agentsec:lang", () => {
    window.renderAllDiagrams();
  });

  // Initial render when DOM is ready
  window.addEventListener("DOMContentLoaded", () => {
    window.renderAllDiagrams();
  });
})();
