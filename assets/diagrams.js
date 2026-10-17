/* ============================================================
   Agent Commerce & Agentic Security Foundations — Hand-Drawn Diagrams
   Excalidraw-style rough.js diagrams for high-contrast technical visual clarity
   Audited & Verified: Zero overlap, zero clipping, all text size >= 10
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
    t.setAttribute("x", x);
    t.setAttribute("font-family", o.family || fontFace());
    const fs = Math.max(10, o.size || 14);
    t.setAttribute("font-size", fs);
    t.setAttribute("fill", o.col || COL.ink);
    t.setAttribute("text-anchor", o.anchor || "start");
    t.setAttribute("font-weight", o.weight || 400);

    if (typeof str === "string" && str.includes("\n")) {
      const lines = str.split("\n");
      const lineH = fs * 1.25;
      const startY = y - ((lines.length - 1) * lineH) / 2;
      lines.forEach((lineStr, lIdx) => {
        const tspan = document.createElementNS(NS, "tspan");
        tspan.setAttribute("x", x);
        tspan.setAttribute("y", startY + lIdx * lineH);
        tspan.textContent = lineStr;
        t.appendChild(tspan);
      });
    } else {
      t.setAttribute("y", y);
      t.textContent = str;
    }
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
      anchor: "middle", col: o.textCol || color, weight: 700, size: Math.max(10, o.size || 13)
    });
  }

  // -------------------------------------------------------------
  // Slide 3 Diagram: Commerce Attack Surface vs Guardrails
  // -------------------------------------------------------------
  function drawCommerceThreats(host) {
    const s = scene(host, 680, 360);
    const zh = isZh();

    // Adversary input
    chip(s, 20, 40, 145, 50, zh ? "恶意攻击提示注入" : "Adversarial Prompt", COL.red, { size: 12 });
    chip(s, 20, 120, 145, 50, zh ? "假冒商户/报价" : "Spoofed Quote/Merch", COL.orange, { size: 12 });
    chip(s, 20, 200, 145, 50, zh ? "高频重放/抽水" : "Replay / Gas Drain", COL.yellow, { size: 12 });

    // Agent Center Core
    rect(s, 230, 30, 190, 240, { fill: hex(COL.blue, 0.06), stroke: COL.blue, strokeWidth: 2.2 });
    txt(s, 325, 60, zh ? "自主智能体商业核心" : "Autonomous Agentic Core", { anchor: "middle", weight: 700, size: 13.5, col: COL.blue });
    rect(s, 245, 80, 160, 40, { fill: hex(COL.slate, 0.08), stroke: COL.slate });
    txt(s, 325, 105, zh ? "LLM 推理 & 规划" : "LLM Planning Engine", { anchor: "middle", size: 11.5 });
    rect(s, 245, 135, 160, 40, { fill: hex(COL.grape, 0.08), stroke: COL.grape });
    txt(s, 325, 160, zh ? "钱包私钥 / 签名者" : "Signer / Wallet Keys", { anchor: "middle", size: 11.5, col: COL.grape });
    rect(s, 245, 190, 160, 65, { fill: hex(COL.green, 0.12), stroke: COL.green });
    txt(s, 325, 215, zh ? "🛡️ 确定性防护拦截器" : "🛡️ Invariant Guardrails", { anchor: "middle", size: 11.5, col: COL.green, weight: 700 });
    txt(s, 325, 235, zh ? "限额 / IBAC / 熔断器" : "Limits / IBAC / Breakers", { anchor: "middle", size: 10.5, col: COL.green });

    arrow(s, 165, 65, 230, 100, { stroke: COL.red });
    arrow(s, 165, 145, 230, 145, { stroke: COL.orange });
    arrow(s, 165, 225, 230, 185, { stroke: COL.yellow });

    // Outputs: Drain vs Settlement
    chip(s, 470, 55, 195, 65, zh ? "❌ 未受控国库抽水\n(不可逆链上损失)" : "❌ Unchecked Drain\n(Irreversible Loss)", COL.red, { size: 11 });
    chip(s, 470, 190, 195, 65, zh ? "✓ 校验托管安全结算\n(受保护商业闭环)" : "✓ Verified Escrow\n(Safe M2M Settlement)", COL.green, { size: 11 });

    line(s, 405, 120, 470, 95, { stroke: COL.red, strokeWidth: 2 });
    arrow(s, 405, 220, 470, 220, { stroke: COL.green });

    // Warning Banner
    rect(s, 20, 300, 640, 45, { fill: hex(COL.red, 0.08), stroke: COL.red, strokeWidth: 1.5 });
    txt(s, 340, 328, zh ? "⚠️ 关键缺陷：传统应用层安全无法阻止已获授权自主智能体的恶意交易" : "⚠️ Key Flaw: AppSec fails once an authorized agent signs an injection payload", {
      anchor: "middle", size: 11.5, col: COL.red, weight: 700
    });
  }

  // -------------------------------------------------------------
  // Slide 4 Diagram: HTTP 402 & MPP Payment Protocol Handshake
  // -------------------------------------------------------------
  function drawPaymentFlow(host) {
    const s = scene(host, 640, 360);
    const zh = isZh();

    // Lanes (Lifelines)
    line(s, 110, 48, 110, 335, { stroke: COL.blue, strokeWidth: 2.2 });
    line(s, 530, 48, 530, 335, { stroke: COL.teal, strokeWidth: 2.2 });

    // Header Avatars / Titles
    chip(s, 25, 12, 170, 36, zh ? "买方智能体 (Client)" : "Buyer Agent (Client)", COL.blue, { size: 13, fill: "#ffffff" });
    chip(s, 445, 12, 170, 36, zh ? "商户端 / API 提供商" : "Merchant / Provider", COL.teal, { size: 13, fill: "#ffffff" });

    // Step 1: Request
    rect(s, 155, 54, 330, 26, { fill: "#ffffff", fillStyle: "solid", stroke: COL.slate, strokeWidth: 1.5 });
    txt(s, 320, 72, zh ? "1. GET /resource (推理/数据查询请求)" : "1. GET /resource (Query/Task Request)", {
      anchor: "middle", size: 12.5, col: COL.ink, weight: 700
    });
    arrow(s, 110, 86, 530, 86, { stroke: COL.slate, strokeWidth: 2 });

    // Step 2: 402 Payment Required
    rect(s, 145, 102, 350, 26, { fill: "#ffffff", fillStyle: "solid", stroke: COL.orange, strokeWidth: 1.8 });
    txt(s, 320, 120, zh ? "2. HTTP 402 Payment Required (x402 计费挑战)" : "2. HTTP 402 Payment Required (x402 Challenge)", {
      anchor: "middle", size: 12.5, col: COL.orange, weight: 700
    });
    arrow(s, 530, 134, 110, 134, { stroke: COL.orange, strokeWidth: 2 });

    // Step 3: Local Verification & Permit2 Signing (Buyer Internal Action)
    rect(s, 15, 148, 190, 48, { fill: "#ffffff", fillStyle: "solid", stroke: COL.green, strokeWidth: 2 });
    txt(s, 110, 168, zh ? "🛡️ 策略核验 & 额度准入" : "🛡️ Local Policy & Cap Check", {
      anchor: "middle", size: 12, col: COL.green, weight: 700
    });
    txt(s, 110, 186, zh ? "签署 EIP-712 微支付凭单" : "Sign EIP-712 Micro-Voucher", {
      anchor: "middle", size: 12, col: COL.green, weight: 600
    });

    // Step 4: Pay & Execute with X-PAYMENT
    rect(s, 145, 202, 350, 26, { fill: "#ffffff", fillStyle: "solid", stroke: COL.blue, strokeWidth: 1.8 });
    txt(s, 320, 220, zh ? "3. GET /resource + X-PAYMENT: <凭单签名>" : "3. GET /resource + X-PAYMENT: <Voucher/Sig>", {
      anchor: "middle", size: 12.5, col: COL.blue, weight: 700
    });
    arrow(s, 110, 234, 530, 234, { stroke: COL.blue, strokeWidth: 2 });

    // Step 5: Deliver Resource
    rect(s, 155, 250, 330, 26, { fill: "#ffffff", fillStyle: "solid", stroke: COL.green, strokeWidth: 1.8 });
    txt(s, 320, 268, zh ? "4. HTTP 200 OK (交付验证数据/流式响应)" : "4. HTTP 200 OK (Deliver Verified Stream/Data)", {
      anchor: "middle", size: 12.5, col: COL.green, weight: 700
    });
    arrow(s, 530, 282, 110, 282, { stroke: COL.green, strokeWidth: 2 });

    // Step 6: MPP Channel Settlement
    chip(s, 150, 308, 340, 36, zh ? "⚡ MPP 状态通道净额结算与周期性资金释放" : "⚡ MPP State Channel Netting & Escrow Release", COL.grape, {
      size: 12.5, fill: "#ffffff"
    });
  }

  // -------------------------------------------------------------
  // Slide 5 Diagram: Security Contracts & Invariants
  // -------------------------------------------------------------
  function drawSecurityContracts(host) {
    const s = scene(host, 640, 350);
    const zh = isZh();

    // 4 Invariant Boxes
    chip(s, 20, 30, 285, 130, "", COL.blue);
    txt(s, 162, 55, zh ? "1. 条件托管 & 时间锁" : "1. Conditional Escrow & Timelock", { anchor: "middle", weight: 700, col: COL.blue, size: 13 });
    txt(s, 35, 85, zh ? "• 交付物哈希验证提交" : "• Cryptographic delivery proof", { size: 11 });
    txt(s, 35, 105, zh ? "• 超时自动原路退款 (Time-to-Refund)" : "• Auto-refund after T blocks expiry", { size: 11 });
    txt(s, 35, 125, zh ? "• 无需对手方恶意同意" : "• No unilateral griefing hold", { size: 11 });

    chip(s, 335, 30, 285, 130, "", COL.red);
    txt(s, 477, 55, zh ? "2. 经济质押 & 罚没机制" : "2. Slashing & Staked Reputation", { anchor: "middle", weight: 700, col: COL.red, size: 13 });
    txt(s, 350, 85, zh ? "• 智能体节点入驻质押金 (Stake)" : "• Service agent stakes collateral", { size: 11 });
    txt(s, 350, 105, zh ? "• 违背 SLA / 恶意输出自动罚没" : "• Programmatic slash on SLA breach", { size: 11 });
    txt(s, 350, 125, zh ? "• 仲裁者或多方验证签名" : "• Verified by Evaluator consensus", { size: 11 });

    chip(s, 20, 185, 285, 135, "", COL.grape);
    txt(s, 162, 210, zh ? "3. 多签与门限共识" : "3. Multi-Sig & M-of-N Consensus", { anchor: "middle", weight: 700, col: COL.grape, size: 13 });
    txt(s, 35, 240, zh ? "• 高额交易强制 M-of-N 智能体复核" : "• M-of-N validator verification", { size: 11 });
    txt(s, 35, 260, zh ? "• 敏感转账强制人机协同 (HITL)" : "• Mandatory human co-signing", { size: 11 });
    txt(s, 35, 280, zh ? "• 消除单点智能体失控风险" : "• Zero single point of agent failure", { size: 11 });

    chip(s, 335, 185, 285, 135, "", COL.green);
    txt(s, 477, 210, zh ? "4. 链上速率与最大敞口限制" : "4. Programmatic Velocity & Caps", { anchor: "middle", weight: 700, col: COL.green, size: 13 });
    txt(s, 350, 240, zh ? "• 单笔交易硬顶 (Per-Tx Cap)" : "• Per-transaction limit (L_tx)", { size: 11 });
    txt(s, 350, 260, zh ? "• 24小时滚动支出预算 (Rolling Cap)" : "• 24h rolling velocity cap (L_24h)", { size: 11 });
    txt(s, 350, 280, zh ? "• 业务钱包与冷国库物理隔离" : "• Working capital vs cold vault", { size: 11 });
  }

  // -------------------------------------------------------------
  // Slide 6 Diagram: Level of Autonomy (LoA 0 to LoA 5)
  // -------------------------------------------------------------
  function drawLoASpectrum(host) {
    const s = scene(host, 650, 350);
    const zh = isZh();

    const loas = [
      { l: "LoA 0", name: zh ? "辅助模式" : "Assistive", c: COL.blue, desc: zh ? "仅建议无工具" : "Advisory" },
      { l: "LoA 1", name: zh ? "脚本确定" : "Scripted", c: COL.teal, desc: zh ? "确定性脚本" : "Deterministic" },
      { l: "LoA 2", name: zh ? "条件委托" : "Conditional", c: COL.green, desc: zh ? "读授权写确认" : "Read-only" },
      { l: "LoA 3", name: zh ? "受监督自主" : "Supervised", c: COL.yellow, desc: zh ? "有界异步否决" : "Bounded" },
      { l: "LoA 4", name: zh ? "高度自主" : "High Auton.", c: COL.orange, desc: zh ? "异常升级处理" : "Escalation" },
      { l: "LoA 5", name: zh ? "完全自主" : "Unconstrained", c: COL.red, desc: zh ? "⛔ 商业严禁" : "⛔ Banned" }
    ];

    const w = 96, gap = 8;
    loas.forEach((item, idx) => {
      const x = 20 + idx * (w + gap);
      rect(s, x, 60, w, 190, { fill: hex(item.c, 0.12), stroke: item.c, strokeWidth: 2 });
      chip(s, x + 6, 70, w - 12, 28, item.l, item.c, { size: 11.5 });
      txt(s, x + w / 2, 125, item.name, { anchor: "middle", weight: 700, size: 11, col: item.c });
      txt(s, x + w / 2, 160, item.desc, { anchor: "middle", size: 10.5, col: COL.slate });

      // Risk vs Human Curve bar
      const hBar = 10 + idx * 12;
      rect(s, x + 15, 230 - hBar, w - 30, hBar, { fill: item.c, fillStyle: "solid", stroke: item.c });
    });

    // Spectrum Arrow
    arrow(s, 20, 280, 630, 280, { stroke: COL.ink });
    txt(s, 20, 305, zh ? "◀ 人工全程直接控制 (低爆炸半径)" : "◀ High Human Control (Low Blast Radius)", { size: 11, col: COL.blue });
    txt(s, 630, 305, zh ? "智能体机器自主权 (高破坏风险) ▶" : "High Autonomous Agency (High Liability) ▶", { anchor: "end", size: 11, col: COL.red });

    // Recommendation annotation
    rect(s, 110, 320, 430, 25, { fill: hex(COL.green, 0.1), stroke: COL.green });
    txt(s, 325, 337, zh ? "生产金融系统黄金基准：LoA 2 (写操作强制确认) 或 LoA 3 (限额受控)" : "Production Commerce Standard: LoA 2 (Confirm Writes) or LoA 3 (Capped)", {
      anchor: "middle", size: 11, col: COL.green, weight: 700
    });
  }

  // -------------------------------------------------------------
  // Slide 7 Diagram: Multi-Dimensional Threshold Engine
  // -------------------------------------------------------------
  function drawThresholdEngine(host) {
    const s = scene(host, 660, 360);
    const zh = isZh();

    // Input Action Request
    chip(s, 20, 50, 180, 65, zh ? "智能体动作请求\n(API / 交易 / 工具)" : "Action Request\n(Tool / Tx / Call)", COL.blue, { size: 12, fill: "#ffffff" });

    // Multi-Dimensional Threshold Evaluator
    rect(s, 230, 25, 200, 240, { fill: "#ffffff", fillStyle: "solid", stroke: COL.orange, strokeWidth: 2 });
    txt(s, 330, 50, zh ? "多维门限评估网关" : "Threshold Gateway", { anchor: "middle", weight: 700, col: COL.orange, size: 13.5 });

    chip(s, 245, 68, 170, 36, zh ? "1. 资金金额门限" : "1. Financial Cap ($)", COL.green, { size: 12, fill: "#ffffff" });
    chip(s, 245, 114, 170, 36, zh ? "2. 工具风险分级" : "2. Tool Risk Tier", COL.blue, { size: 12, fill: "#ffffff" });
    chip(s, 245, 160, 170, 36, zh ? "3. 速率与异常度" : "3. Velocity / Drift", COL.grape, { size: 12, fill: "#ffffff" });
    chip(s, 245, 206, 170, 36, zh ? "4. 累积影响半径" : "4. Blast Radius", COL.teal, { size: 12, fill: "#ffffff" });

    arrow(s, 200, 82, 230, 82, { stroke: COL.ink, strokeWidth: 2 });

    // Outputs
    arrow(s, 430, 85, 460, 65, { stroke: COL.green, strokeWidth: 2 });
    chip(s, 460, 38, 185, 55, zh ? "✓ 自动放行 (LOW)\n即刻执行" : "✓ Auto-Approve\n(Instant Exec)", COL.green, { size: 12, fill: "#ffffff" });

    arrow(s, 430, 142, 460, 142, { stroke: COL.yellow, strokeWidth: 2 });
    chip(s, 460, 115, 185, 55, zh ? "⚠️ 双智能体复核\n(MEDIUM / $50-$500)" : "⚠️ Dual-Agent Check\n($50 - $500)", COL.yellow, { size: 12, fill: "#ffffff" });

    arrow(s, 430, 200, 460, 218, { stroke: COL.red, strokeWidth: 2 });
    chip(s, 460, 192, 185, 55, zh ? "🛑 强制人工签署\n(CRITICAL / >$500)" : "🛑 Human Co-Sign\n(CRITICAL / >$500)", COL.red, { size: 12, fill: "#ffffff" });

    // Circuit Breaker trip
    rect(s, 20, 280, 625, 56, { fill: "#ffffff", fillStyle: "solid", stroke: COL.red, strokeWidth: 2 });
    txt(s, 332, 303, zh ? "⚡ 自动熔断器 (Circuit Breaker)：任意指标越界立即触发自主权降级" : "⚡ Automated Circuit Breaker: Immediate LoA Step-Down on Anomaly", {
      anchor: "middle", weight: 700, col: COL.red, size: 12.5
    });
    txt(s, 332, 324, zh ? "例如：单分钟超 10 次调用或语义漂移 > 0.4 ➔ 强制暂停智能体并冻结托管" : "e.g., >10 calls/min or drift > 0.4 triggers instant pause and pending escrow freeze", {
      anchor: "middle", size: 11.5, col: COL.ink
    });
  }

  // -------------------------------------------------------------
  // Slide 8 Diagram: Spec-Driven Job Descriptions (SJD)
  // -------------------------------------------------------------
  function drawSJDArchitecture(host) {
    const s = scene(host, 640, 360);
    const zh = isZh();

    // SJD Manifest Terminal Card (Left Box - Solid Dark IDE Terminal)
    const bgRect = document.createElementNS(NS, "rect");
    bgRect.setAttribute("x", 15);
    bgRect.setAttribute("y", 25);
    bgRect.setAttribute("width", 290);
    bgRect.setAttribute("height", 305);
    bgRect.setAttribute("rx", 10);
    bgRect.setAttribute("fill", "#0f172a");
    bgRect.setAttribute("stroke", "#0284c7");
    bgRect.setAttribute("stroke-width", "2");
    addNode(s, bgRect);

    // Terminal header bar
    const headerRect = document.createElementNS(NS, "rect");
    headerRect.setAttribute("x", 15);
    headerRect.setAttribute("y", 25);
    headerRect.setAttribute("width", 290);
    headerRect.setAttribute("height", 32);
    headerRect.setAttribute("rx", 10);
    headerRect.setAttribute("fill", "#1e293b");
    addNode(s, headerRect);

    // 3 window control dots
    const dotY = 41;
    const d1 = document.createElementNS(NS, "circle");
    d1.setAttribute("cx", 32); d1.setAttribute("cy", dotY); d1.setAttribute("r", 4.5); d1.setAttribute("fill", "#ef4444");
    addNode(s, d1);
    const d2 = document.createElementNS(NS, "circle");
    d2.setAttribute("cx", 45); d2.setAttribute("cy", dotY); d2.setAttribute("r", 4.5); d2.setAttribute("fill", "#f59e0b");
    addNode(s, d2);
    const d3 = document.createElementNS(NS, "circle");
    d3.setAttribute("cx", 58); d3.setAttribute("cy", dotY); d3.setAttribute("r", 4.5); d3.setAttribute("fill", "#10b981");
    addNode(s, d3);

    txt(s, 175, 46, "SPEC.json (SJD Manifest)", {
      anchor: "middle", col: "#f8fafc", weight: 700, size: 12.5, family: "'JetBrains Mono', monospace"
    });

    // High-contrast, crystal-clear code lines (font-size: 12px, bold)
    txt(s, 28, 80, 'agent_id: "procure-bot-01"', { col: "#60a5fa", size: 12, weight: 600, family: "'JetBrains Mono'" });
    txt(s, 28, 104, 'role: "Material Procurement"', { col: "#38bdf8", size: 12, weight: 600, family: "'JetBrains Mono'" });
    txt(s, 28, 128, 'tools: ["quote", "escrow"]', { col: "#4ade80", size: 12, weight: 600, family: "'JetBrains Mono'" });
    txt(s, 28, 152, 'non_goals: ["no_shell", "no_wire"]', { col: "#f87171", size: 12, weight: 700, family: "'JetBrains Mono'" });
    txt(s, 28, 176, 'budget_daily: 200.00 USDC', { col: "#facc15", size: 12, weight: 600, family: "'JetBrains Mono'" });
    txt(s, 28, 200, 'loa_tier: 2 (Escrow Capped)', { col: "#c084fc", size: 12, weight: 600, family: "'JetBrains Mono'" });
    txt(s, 28, 224, 'parent_auth: 0x8a91...f3', { col: "#e2e8f0", size: 12, weight: 500, family: "'JetBrains Mono'" });
    txt(s, 28, 256, '# 🛡️ Zero Ambient Authority', { col: "#94a3b8", size: 12, weight: 700, family: "'JetBrains Mono'" });
    txt(s, 28, 280, '# Cryptographic Proof Anchored', { col: "#64748b", size: 11, family: "'JetBrains Mono'" });

    // Arrow to right
    arrow(s, 305, 175, 335, 175, { stroke: COL.ink, strokeWidth: 2 });

    // Right card: Runtime Verification & Attenuated Token
    rect(s, 335, 25, 290, 305, { fill: "#ffffff", fillStyle: "solid", stroke: COL.blue, strokeWidth: 2 });
    txt(s, 480, 52, zh ? "可信身份凭证生命周期" : "Credential Lifecycle", {
      anchor: "middle", weight: 700, col: COL.blue, size: 13.5
    });

    chip(s, 350, 72, 260, 48, zh ? "1. 临时任务密钥对 (Ed25519)" : "1. Ephemeral Keypair (Ed25519)", COL.blue, { size: 12, fill: "#ffffff" });
    chip(s, 350, 130, 260, 48, zh ? "2. 细粒度衰减授权 (Macaroons)" : "2. Attenuated Delegation Token", COL.grape, { size: 12, fill: "#ffffff" });
    chip(s, 350, 188, 260, 48, zh ? "3. 密码学证明绑定 (DID / SJD)" : "3. Verifiable DID / Agent ID", COL.teal, { size: 12, fill: "#ffffff" });
    chip(s, 350, 246, 260, 48, zh ? "4. 任务结束即刻销毁密钥" : "4. Ephemeral Zeroize on Close", COL.green, { size: 12, fill: "#ffffff" });
  }

  // -------------------------------------------------------------
  // Slide 9 Diagram: Domain Ontology for Semantic Intent Grounding
  // -------------------------------------------------------------
  function drawDomainOntology(host) {
    const s = scene(host, 660, 360);
    const zh = isZh();

    // Natural Language Input (Wider box, no text cut)
    chip(s, 15, 45, 200, 72, zh ? "模糊自然语言输入\n(平仓并结清欠款)" : "Fuzzy User Prompt\n(\"Liquidate & Settle Debt\")", COL.red, { size: 12, fill: "#ffffff" });

    arrow(s, 215, 81, 245, 81, { stroke: COL.ink, strokeWidth: 2 });

    // Formal Domain Ontology Engine
    rect(s, 245, 25, 215, 295, { fill: "#ffffff", fillStyle: "solid", stroke: COL.grape, strokeWidth: 2 });
    txt(s, 352, 50, zh ? "金融领域本体语义图谱" : "Domain Ontology Engine", { anchor: "middle", weight: 700, col: COL.grape, size: 13.5 });

    chip(s, 260, 70, 185, 36, zh ? "概念实体 (Entity / Asset)" : "Entities (Asset / Order)", COL.grape, { size: 12, fill: "#ffffff" });
    chip(s, 260, 116, 185, 36, zh ? "原子动作 (Action Primitives)" : "Action Primitives", COL.blue, { size: 12, fill: "#ffffff" });
    chip(s, 260, 162, 185, 36, zh ? "前后置条件约束 (Invariants)" : "Pre/Post Invariants", COL.orange, { size: 12, fill: "#ffffff" });
    chip(s, 260, 208, 185, 36, zh ? "状态迁移状态机 (State Graph)" : "State Machine Graph", COL.teal, { size: 12, fill: "#ffffff" });
    chip(s, 260, 254, 185, 42, zh ? "消歧与注入清洗\n(Disambiguation)" : "Disambiguation &\nSanitizer", COL.green, { size: 12, fill: "#ffffff" });

    arrow(s, 460, 81, 495, 81, { stroke: COL.green, strokeWidth: 2 });

    // Formal Intent AST
    rect(s, 495, 25, 150, 295, { fill: "#ffffff", fillStyle: "solid", stroke: COL.teal, strokeWidth: 2 });
    txt(s, 570, 50, zh ? "形式化意图树" : "Intent AST", { anchor: "middle", weight: 700, col: COL.teal, size: 13 });
    txt(s, 508, 80, "Intent: Settle", { size: 12, weight: 600, family: "'JetBrains Mono'" });
    txt(s, 508, 106, "Asset: USDC", { size: 12, weight: 600, family: "'JetBrains Mono'" });
    txt(s, 508, 132, "MaxSlip: 0.5%", { size: 12, weight: 600, family: "'JetBrains Mono'" });
    txt(s, 508, 158, "Vendor: 0x9f..", { size: 12, weight: 600, family: "'JetBrains Mono'" });
    txt(s, 508, 184, "Cap: $150", { size: 12, weight: 600, family: "'JetBrains Mono'" });
    txt(s, 508, 225, zh ? "✓ 拦截越权语义" : "✓ No semantic drift", { size: 11.5, col: COL.green, weight: 700 });
    txt(s, 508, 252, zh ? "✓ 阻断越界注入" : "✓ Injection blocked", { size: 11.5, col: COL.green, weight: 700 });
  }

  // -------------------------------------------------------------
  // Slide 10 Diagram: Intent-Based Access Control (IBAC)
  // -------------------------------------------------------------
  function drawIBACPipeline(host) {
    const s = scene(host, 640, 350);
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
      rect(s, 40, y, 560, 58, { fill: hex(st.c, 0.08), stroke: st.c, strokeWidth: 1.8 });
      chip(s, 55, y + 10, 85, 38, st.num, st.c, { size: 11 });
      txt(s, 155, y + 26, st.t, { weight: 700, col: st.c, size: 13 });
      txt(s, 155, y + 46, st.d, { size: 11, col: COL.slate });

      if (idx < 3) {
        arrow(s, 320, y + 58, 320, y + 72, { stroke: COL.ink });
      }
    });

    // Comparison Callout
    rect(s, 40, 315, 560, 28, { fill: hex(COL.green, 0.12), stroke: COL.green });
    txt(s, 320, 334, zh ? "IBAC 核心价值：彻底终结 RBAC 漏洞，即拥有角色权限的智能体也无法执行未经意图核验的工具" : "IBAC Core: Eliminates RBAC flaw; agents cannot execute tools outside verified user intent", {
      anchor: "middle", size: 10.5, col: COL.green, weight: 700
    });
  }

  // -------------------------------------------------------------
  // Slide 11 Diagram: Memory Threat Triad
  // -------------------------------------------------------------
  function drawMemoryThreats(host) {
    const s = scene(host, 640, 350);
    const zh = isZh();

    // 3 Threat Columns
    chip(s, 20, 40, 190, 240, "", COL.red);
    txt(s, 115, 65, zh ? "1. 记忆投毒\n(Memory Poisoning)" : "1. Poisoning\n(Indirect Injection)", { anchor: "middle", weight: 700, col: COL.red, size: 12 });
    txt(s, 30, 115, zh ? "• 网页/邮件内嵌恶意指令" : "• Concealed markdown payload", { size: 10.5 });
    txt(s, 30, 140, zh ? "• 诱骗智能体写入 MEMORY.md" : "• Writes backdoor to memory", { size: 10.5 });
    txt(s, 30, 165, zh ? "• 会话重置后仍然长期潜伏" : "• Persists across sessions", { size: 10.5 });
    txt(s, 30, 195, zh ? "后果：窃取资金、转账重定向" : "Impact: Silent treasury theft", { size: 10.5, col: COL.red, weight: 700 });

    chip(s, 225, 40, 190, 240, "", COL.orange);
    txt(s, 320, 65, zh ? "2. 过期时效漂移\n(Temporal Drift)" : "2. Outdated Info\n(Temporal Drift)", { anchor: "middle", weight: 700, col: COL.orange, size: 12 });
    txt(s, 235, 115, zh ? "• 依据过期报价下单" : "• Stale market quotes", { size: 10.5 });
    txt(s, 235, 140, zh ? "• 依赖已吊销的授权凭证" : "• Using revoked credentials", { size: 10.5 });
    txt(s, 235, 165, zh ? "• 忽略最新取消或退款事件" : "• Ignores cancellation state", { size: 10.5 });
    txt(s, 235, 195, zh ? "后果：套利滑点损失、越权调用" : "Impact: Arbitrage losses & fails", { size: 10.5, col: COL.orange, weight: 700 });

    chip(s, 430, 40, 190, 240, "", COL.yellow);
    txt(s, 525, 65, zh ? "3. 冲突与脑裂\n(Conflict & Split-Brain)" : "3. Conflicting Info\n(Split-Brain State)", { anchor: "middle", weight: 700, col: COL.yellow, size: 12 });
    txt(s, 440, 115, zh ? "• 多智能体传递相反事实" : "• Multi-agent contradictory facts", { size: 10.5 });
    txt(s, 440, 140, zh ? "• 上下文认知僵局与死循环" : "• Cognitive looping & deadlocks", { size: 10.5 });
    txt(s, 440, 165, zh ? "• 随机降级至脆弱默认策略" : "• Fallback to insecure default", { size: 10.5 });
    txt(s, 440, 195, zh ? "后果：业务中断、拒绝服务" : "Impact: Deadlock & denial", { size: 10.5, col: COL.yellow, weight: 700 });

    // Bottom warning
    rect(s, 20, 295, 600, 40, { fill: hex(COL.red, 0.08), stroke: COL.red });
    txt(s, 320, 320, zh ? "传统 RAG 与向量数据库缺乏事实溯源与访问控制，是智能体长期记忆最大风险源" : "Standard RAG lacks cryptographic provenance, creating severe persistent attack vectors", {
      anchor: "middle", size: 11, col: COL.red, weight: 700
    });
  }

  // -------------------------------------------------------------
  // Slide 12 Diagram: 3-Tier Defensive Memory Architecture
  // -------------------------------------------------------------
  function drawMemoryHygiene(host) {
    const s = scene(host, 660, 360);
    const zh = isZh();

    // Ingestion (Left Box - widened to 185px, solid white background, bold text)
    chip(s, 15, 35, 185, 70, zh ? "外部不可信信息摄入\n(网页 / API / 文档)" : "Untrusted Ingestion\n(Web / API / Docs)", COL.slate, { size: 12, fill: "#ffffff" });

    arrow(s, 200, 70, 225, 70, { stroke: COL.ink, strokeWidth: 2 });

    // Tier 1: Ephemeral
    chip(s, 225, 35, 195, 70, zh ? "Tier 1: 临时工作记忆\n(任务结束即刻清空)" : "Tier 1: Ephemeral Memory\n(Zeroized on end)", COL.blue, { size: 12, fill: "#ffffff" });

    arrow(s, 322, 105, 322, 130, { stroke: COL.ink, strokeWidth: 2 });

    // Tier 2: Quarantined
    rect(s, 215, 130, 215, 95, { fill: "#ffffff", fillStyle: "solid", stroke: COL.orange, strokeWidth: 2 });
    txt(s, 322, 152, zh ? "Tier 2: 隔离检验缓冲区" : "Tier 2: Quarantined Buffer", { anchor: "middle", weight: 700, col: COL.orange, size: 12.5 });
    txt(s, 322, 178, zh ? "• 密码学溯源核验 (Provenance)" : "• Provenance Signature Check", { anchor: "middle", size: 11.5, weight: 600 });
    txt(s, 322, 202, zh ? "• 冲突消除与 TTL (CRDTs)" : "• Conflict Reconciliation / TTL", { anchor: "middle", size: 11.5, weight: 600 });

    arrow(s, 322, 225, 322, 250, { stroke: COL.green, strokeWidth: 2 });

    // Tier 3: Verified Long Term
    chip(s, 225, 250, 195, 70, zh ? "Tier 3: 已验证可信长期存储\n(只追加 / 共识签名)" : "Tier 3: Verified Long-Term\n(Append-Only / Signed)", COL.green, { size: 12, fill: "#ffffff" });

    // Hygiene Rules sidebar (Right Card - solid white, crystal-clear high contrast)
    rect(s, 440, 25, 205, 305, { fill: "#ffffff", fillStyle: "solid", stroke: COL.teal, strokeWidth: 2 });
    txt(s, 542, 50, zh ? "记忆卫生防护法则" : "Memory Invariants", { anchor: "middle", weight: 700, col: COL.teal, size: 13.5 });

    txt(s, 452, 78, zh ? "1. 密码学来源标签" : "1. Cryptographic Tags", { size: 12, weight: 700, col: COL.teal });
    txt(s, 452, 98, zh ? "签名者、时间戳与哈希" : "Author, timestamp, hash", { size: 11, col: COL.ink });

    txt(s, 452, 130, zh ? "2. 严格 TTL 动态过期" : "2. Strict TTL Expiry", { size: 12, weight: 700, col: COL.teal });
    txt(s, 452, 150, zh ? "报价 30 秒，凭证 15 分钟" : "Quotes 30s, tokens 15m", { size: 11, col: COL.ink });

    txt(s, 452, 182, zh ? "3. 确定性冲突仲裁" : "3. Deterministic Arb", { size: 12, weight: 700, col: COL.teal });
    txt(s, 452, 202, zh ? "领域本体优先序判别真伪" : "Ontological precedence", { size: 11, col: COL.ink });

    txt(s, 452, 234, zh ? "4. 零外部直写长期库" : "4. Zero Direct Writes", { size: 12, weight: 700, col: COL.red });
    txt(s, 452, 254, zh ? "不可信数据绝不进入长期库" : "No untrusted persistence", { size: 11, col: COL.red });

    txt(s, 452, 286, zh ? "🛡️ 向量数据库严格隔离" : "🛡️ Strict Vector DB Isolation", { size: 11.5, weight: 700, col: COL.blue });
  }

  // -------------------------------------------------------------
  // Slide 13 Diagram: Trajectory Telemetry & Action Graph
  // -------------------------------------------------------------
  function drawTrajectoryMonitoring(host) {
    const s = scene(host, 640, 350);
    const zh = isZh();

    // Step nodes in DAG
    const nodes = [
      { x: 30, y: 50, l: "Thought 1\n(Intent)" },
      { x: 175, y: 50, l: "Plan Step\n(Quote)" },
      { x: 320, y: 50, l: "Tool Call\n(get_quote)" },
      { x: 465, y: 50, l: "Response\n(Valid)" },
      { x: 465, y: 160, l: "Tool Call\n(escrow_fund)" },
      { x: 320, y: 160, l: "Verify Invariant\n(Cap Check)" },
      { x: 175, y: 160, l: "Settlement\n(Final 200)" }
    ];

    nodes.forEach(n => {
      chip(s, n.x, n.y, 120, 48, n.l, COL.blue, { size: 10.5 });
    });

    arrow(s, 150, 74, 175, 74, { stroke: COL.ink });
    arrow(s, 295, 74, 320, 74, { stroke: COL.ink });
    arrow(s, 440, 74, 465, 74, { stroke: COL.ink });
    arrow(s, 525, 98, 525, 160, { stroke: COL.ink });
    arrow(s, 465, 184, 440, 184, { stroke: COL.ink });
    arrow(s, 320, 184, 295, 184, { stroke: COL.green });

    // Anomaly Engine Overlay
    rect(s, 25, 240, 590, 95, { fill: hex(COL.orange, 0.08), stroke: COL.orange, strokeWidth: 1.8 });
    txt(s, 320, 265, zh ? "轨迹遥测与异常行为探测器 (OpenTelemetry Semantic Conventions)" : "Trajectory Telemetry & Anomaly Engine (OTel GenAI Standard)", {
      anchor: "middle", weight: 700, col: COL.orange, size: 12
    });
    txt(s, 40, 290, zh ? "• 语义漂移监控：实时比对当前推理步骤与预定 SJD 的余弦距离" : "• Semantic Drift Scoring: Measures cosine distance between active plan and SJD", { size: 10.5 });
    txt(s, 40, 308, zh ? "• 循环振荡拦截：识别重复调用失败工具超过 3 次的死循环，阻断 Token 抽水" : "• Loop Interception: Flags >3 repeated tool failures, preventing token exhaustion", { size: 10.5 });
    txt(s, 40, 326, zh ? "• 隐蔽侧移检测：阻止商业智能体尝试访问文件系统、环境变量或私钥" : "• Lateral Movement Detection: Halts unauthorized file/key/env access attempts", { size: 10.5 });
  }

  // -------------------------------------------------------------
  // Slide 14 Diagram: Active Runtime Steering & Control Plane
  // -------------------------------------------------------------
  function drawRuntimeSteering(host) {
    const s = scene(host, 660, 360);
    const zh = isZh();

    // 1. Left Card: Agent Reasoning Core (Solid White Card with Blue Accents)
    rect(s, 15, 20, 185, 315, { fill: "#ffffff", fillStyle: "solid", stroke: COL.blue, strokeWidth: 2 });
    txt(s, 107, 45, zh ? "🧠 智能体推理核心" : "🧠 Agent Reasoning Core", { anchor: "middle", weight: 700, col: COL.blue, size: 12.5 });

    chip(s, 25, 65, 165, 32, "Thought: Plan Order", COL.blue, { size: 11, fill: "#ffffff" });
    chip(s, 25, 103, 165, 32, "Intent: Escrow Settle", COL.blue, { size: 11, fill: "#ffffff" });
    chip(s, 25, 141, 165, 32, "Tool: x402_pay()", COL.grape, { size: 11, fill: "#ffffff" });
    chip(s, 25, 179, 165, 32, "Args: {to, $120 USDC}", COL.teal, { size: 11, fill: "#ffffff" });

    chip(s, 25, 222, 165, 48, zh ? "⚠️ 待放行动作请求\n(Zero Ambient Auth)" : "⚠️ Action Request\n(Pending Gateway Check)", COL.orange, { size: 11, fill: "#ffffff" });
    txt(s, 107, 305, zh ? "零环境执行特权" : "Zero Ambient Privilege", { anchor: "middle", size: 11, col: COL.slate, weight: 600 });

    // Arrow to Gateway
    arrow(s, 200, 177, 225, 177, { stroke: COL.ink, strokeWidth: 2 });

    // 2. Center Card: Deterministic Control Gateway (Solid White Card with Red Accents)
    rect(s, 225, 20, 240, 315, { fill: "#ffffff", fillStyle: "solid", stroke: COL.red, strokeWidth: 2.2 });
    txt(s, 345, 45, zh ? "🛡️ 确定性运行时控制网关" : "🛡️ Deterministic Control Plane", { anchor: "middle", weight: 700, col: COL.red, size: 12.5 });

    chip(s, 235, 65, 220, 40, zh ? "1. PreToolUse 拦截核验\n(Schema / 限额 / SJD 意图)" : "1. PreToolUse Interceptor\n(Schema / Invariants / SJD)", COL.red, { size: 11.5, fill: "#ffffff" });
    chip(s, 235, 112, 220, 38, zh ? "2. 动态策略与风控仲裁\n(Policy Arbiter)" : "2. Dynamic Policy Arbiter\n(Dual-Agent / Escalation)", COL.orange, { size: 11.5, fill: "#ffffff" });
    chip(s, 235, 156, 220, 40, zh ? "3. PostToolUse 脱敏净化\n(抹除注入 / 隐藏凭据)" : "3. PostToolUse Sanitizer\n(Strip Injection Payloads)", COL.teal, { size: 11.5, fill: "#ffffff" });

    // Sub-box inside Gateway: Decision Primitives
    rect(s, 235, 204, 220, 120, { fill: "#f8fafc", fillStyle: "solid", stroke: COL.ink, strokeWidth: 1.2 });
    txt(s, 345, 222, zh ? "网关四项确定性裁决动作" : "4 Deterministic Decision Actions", { anchor: "middle", size: 11.5, weight: 700, col: COL.ink });
    txt(s, 245, 244, zh ? "• APPROVE: 放行合规请求" : "• APPROVE: Allow valid call", { size: 11, col: COL.green, weight: 700 });
    txt(s, 245, 266, zh ? "• STEER: 重写参数/注入提示" : "• STEER: Mutate / Re-prompt", { size: 11, col: COL.blue, weight: 700 });
    txt(s, 245, 288, zh ? "• SANDBOX: 重定向至沙箱" : "• SANDBOX: Divert to testbed", { size: 11, col: COL.teal, weight: 700 });
    txt(s, 245, 310, zh ? "• KILL: 吊销凭据硬熔断" : "• KILL: Circuit break & freeze", { size: 11, col: COL.red, weight: 700 });

    // 3 Arrows to Target Outcomes
    arrow(s, 465, 85, 495, 85, { stroke: COL.green, strokeWidth: 2 });
    arrow(s, 465, 175, 495, 175, { stroke: COL.teal, strokeWidth: 2 });
    arrow(s, 465, 265, 495, 265, { stroke: COL.red, strokeWidth: 2 });

    // 3. Right Column: 3 Target Outcome Cards
    chip(s, 495, 55, 155, 62, zh ? "✓ 真实生产环境\n(银行/区块链/API)" : "✓ Production Rails\n(Bank / Chain / API)", COL.green, { size: 11.5, fill: "#ffffff" });
    chip(s, 495, 145, 155, 62, zh ? "⚡ 隔离沙箱工作区\n(Worktree 影子试运行)" : "⚡ Sandbox Worktree\n(Isolated Shadow Run)", COL.teal, { size: 11.5, fill: "#ffffff" });
    chip(s, 495, 235, 155, 62, zh ? "🛑 硬熔断与冻结\n(吊销密钥 & 冻结托管)" : "🛑 Hard Kill Switch\n(Revoke Token & Freeze)", COL.red, { size: 11.5, fill: "#ffffff" });
  }

  // -------------------------------------------------------------
  // Slide 15 Diagram: Benchmarks & Token Efficiency Matrix
  // -------------------------------------------------------------
  function drawBenchmarkMatrix(host) {
    const s = scene(host, 640, 350);
    const zh = isZh();

    // 4 Benchmark Metrics
    chip(s, 20, 30, 285, 135, "", COL.blue);
    txt(s, 162, 55, zh ? "任务完成率 (TCR)" : "Task Completion Rate (TCR)", { anchor: "middle", weight: 700, col: COL.blue, size: 13 });
    txt(s, 35, 85, zh ? "• 端到端复杂商业目标达成比例" : "• % of complex multi-turn goals met", { size: 11 });
    txt(s, 35, 105, zh ? "• 衡量跨工具编排与自我修正能力" : "• Measures cross-tool resilience", { size: 11 });
    txt(s, 35, 125, zh ? "• 工业级达标门槛：>= 92.5%" : "• Production Target: >= 92.5%", { size: 11, col: COL.blue, weight: 700 });

    chip(s, 335, 30, 285, 135, "", COL.red);
    txt(s, 477, 55, zh ? "不变量合规率 (SICR)" : "Invariant Compliance (SICR)", { anchor: "middle", weight: 700, col: COL.red, size: 13 });
    txt(s, 350, 85, zh ? "• 资金限额与安全策略违规率" : "• Zero financial policy violations", { size: 11 });
    txt(s, 350, 105, zh ? "• 越权调用、未授权转账发生率" : "• Unauthorized spend occurrence", { size: 11 });
    txt(s, 350, 125, zh ? "• 工业级硬性要求：100% 零容忍" : "• Production Requirement: 100% Exact", { size: 11, col: COL.red, weight: 700 });

    chip(s, 20, 185, 285, 135, "", COL.green);
    txt(s, 162, 210, zh ? "Token 效能比 (Token ROI)" : "Token Efficiency (TER)", { anchor: "middle", weight: 700, col: COL.green, size: 13 });
    txt(s, 35, 240, zh ? "• 达成单个业务成果所耗费 Token" : "• Optimal steps vs actual steps", { size: 11 });
    txt(s, 35, 260, zh ? "• 上下文动态裁剪降低冗余消耗" : "• Pruned schemas avoid bloat", { size: 11 });
    txt(s, 35, 280, zh ? "• 规避死循环节省高达 70% 成本" : "• Loop interception saves up to 70%", { size: 11, col: COL.green, weight: 700 });

    chip(s, 335, 185, 285, 135, "", COL.grape);
    txt(s, 477, 210, zh ? "对抗注入弹性分 (ARS)" : "Adversarial Resilience (ARS)", { anchor: "middle", weight: 700, col: COL.grape, size: 13 });
    txt(s, 350, 240, zh ? "• 500+ 项自动化红蓝对抗测试" : "• Automated red-teaming test suites", { size: 11 });
    txt(s, 350, 260, zh ? "• 间接提示注入/上下文投毒防御" : "• Indirect prompt injection defense", { size: 11 });
    txt(s, 350, 280, zh ? "• 工业级及格线：>= 99.2%" : "• Enterprise Target: >= 99.2%", { size: 11, col: COL.grape, weight: 700 });
  }

  // -------------------------------------------------------------
  // Slide 16 Diagram: Summary & Synthesis Architecture
  // -------------------------------------------------------------
  function drawSummaryQA(host) {
    const s = scene(host, 640, 350);
    const zh = isZh();

    // Central Engine Hub
    rect(s, 220, 115, 200, 85, { fill: hex(COL.blue, 0.12), stroke: COL.blue, strokeWidth: 2.5 });
    txt(s, 320, 148, zh ? "🛡️ 智能体安全引擎" : "🛡️ AGENTIC SEC ENGINE", { anchor: "middle", weight: 700, col: COL.blue, size: 13 });
    txt(s, 320, 172, zh ? "纵深防御与确定性闭环" : "Unified Defense Harness", { anchor: "middle", size: 11, col: COL.slate });

    // Surrounding 6 Pillar Nodes
    // 1. Top Left: Payments
    chip(s, 20, 20, 185, 52, zh ? "1. x402 / MPP 支付通道" : "1. x402 & MPP Rails", COL.teal, { size: 11.5 });
    arrow(s, 195, 72, 235, 115, { stroke: COL.teal });

    // 2. Top Right: Invariants
    chip(s, 435, 20, 185, 52, zh ? "2. 合约硬性不变量" : "2. Smart Invariants", COL.orange, { size: 11.5 });
    arrow(s, 445, 72, 405, 115, { stroke: COL.orange });

    // 3. Mid Left: LoA Governance
    chip(s, 15, 130, 185, 52, zh ? "3. LoA 0-5 门限熔断" : "3. LoA 0-5 Governance", COL.indigo, { size: 11.5 });
    arrow(s, 200, 156, 220, 156, { stroke: COL.indigo });

    // 4. Mid Right: Identity & IBAC
    chip(s, 440, 130, 185, 52, zh ? "4. SJD 与 IBAC 单次凭证" : "4. SJD & IBAC Tokens", COL.grape, { size: 11.5 });
    arrow(s, 440, 156, 420, 156, { stroke: COL.grape });

    // 5. Bottom Left: Memory Hygiene
    chip(s, 20, 240, 185, 52, zh ? "5. 记忆签名与抗投毒" : "5. Memory Hygiene & TTL", COL.green, { size: 11.5 });
    arrow(s, 195, 240, 235, 200, { stroke: COL.green });

    // 6. Bottom Right: Steering
    chip(s, 435, 240, 185, 52, zh ? "6. 运行时引导与拦截" : "6. Runtime Steering / Kill", COL.red, { size: 11.5 });
    arrow(s, 445, 240, 405, 200, { stroke: COL.red });

    // Bottom Invariant Bar
    rect(s, 50, 310, 540, 34, { fill: hex(COL.green, 0.10), stroke: COL.green, strokeWidth: 1.5 });
    txt(s, 320, 332, zh ? "✓ 零越权转账 · 100% 不变量合规 · 生产就绪治理闭环" : "✓ Zero Unauthorized Spend · 100% Invariant Compliance", {
      anchor: "middle", size: 11.5, col: COL.green, weight: 700
    });
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
    "benchmark-matrix": drawBenchmarkMatrix,
    "summary-qa": drawSummaryQA
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
