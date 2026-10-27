/* ============================================================
   Agent Commerce & Agentic Security Foundations — Hand-Drawn Diagrams
   Excalidraw-style rough.js diagrams for high-contrast technical visual clarity
   Audited & Verified: 1.5x Text Size, Zero Overlap, Zero Clipping
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
  const FONT_SCALE = 1.5;

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
    const rawFs = o.size || 12;
    const fs = Math.round(rawFs * FONT_SCALE);
    t.setAttribute("font-size", fs);
    t.setAttribute("fill", o.col || COL.ink);
    t.setAttribute("text-anchor", o.anchor || "start");
    t.setAttribute("font-weight", o.weight || 400);

    if (typeof str === "string" && str.includes("\n")) {
      const lines = str.split("\n");
      const lineH = Math.round(fs * 1.25);
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
    if (label) {
      txt(s, x + w / 2, y + h / 2 + 6, label, {
        anchor: "middle", col: o.textCol || color, weight: o.weight || 700, size: o.size || 11.5, family: o.family
      });
    }
  }

  // -------------------------------------------------------------
  // Slide 3 Diagram: Commerce Attack Surface vs Guardrails
  // -------------------------------------------------------------
  function drawCommerceThreats(host) {
    const s = scene(host, 720, 370);
    const zh = isZh();

    // Adversary inputs
    chip(s, 20, 35, 195, 54, zh ? "对抗性提示注入" : "Adversarial Prompt", COL.red, { size: 11.5 });
    chip(s, 20, 110, 195, 54, zh ? "假冒报价与商户" : "Spoofed Quote / Merch", COL.orange, { size: 11.5 });
    chip(s, 20, 185, 195, 54, zh ? "资金抽水攻击" : "Wallet Drain Attack", COL.yellow, { size: 11.5 });

    // Agent Center Core
    rect(s, 255, 25, 220, 245, { fill: hex(COL.blue, 0.06), stroke: COL.blue, strokeWidth: 2.2 });
    txt(s, 365, 55, zh ? "智能体商业核心" : "Autonomous Core", { anchor: "middle", weight: 700, size: 13, col: COL.blue });
    rect(s, 270, 75, 190, 42, { fill: hex(COL.slate, 0.08), stroke: COL.slate });
    txt(s, 365, 102, zh ? "LLM 推理与规划" : "LLM Planning Engine", { anchor: "middle", size: 11 });
    rect(s, 270, 125, 190, 42, { fill: hex(COL.grape, 0.08), stroke: COL.grape });
    txt(s, 365, 152, zh ? "钱包私钥与签名" : "Signer / Wallet Keys", { anchor: "middle", size: 11, col: COL.grape });
    rect(s, 270, 175, 190, 72, { fill: hex(COL.green, 0.12), stroke: COL.green });
    txt(s, 365, 204, zh ? "🛡️ 确定性防护拦截" : "🛡️ Invariant Guardrails", { anchor: "middle", size: 11.5, col: COL.green, weight: 700 });
    txt(s, 365, 228, zh ? "限额 / IBAC / 熔断器" : "Limits / IBAC / Breakers", { anchor: "middle", size: 10.5, col: COL.green });

    arrow(s, 215, 62, 255, 96, { stroke: COL.red });
    arrow(s, 215, 137, 255, 146, { stroke: COL.orange });
    arrow(s, 215, 212, 255, 195, { stroke: COL.yellow });

    // Outputs
    chip(s, 515, 45, 185, 72, zh ? "❌ 未受控国库抽水\n(不可逆链上损失)" : "❌ Unchecked Drain\n(Irreversible Loss)", COL.red, { size: 11 });
    chip(s, 515, 175, 185, 72, zh ? "✓ 校验托管安全结算\n(受保护商业闭环)" : "✓ Verified Escrow\n(Safe M2M Settle)", COL.green, { size: 11 });

    line(s, 445, 115, 515, 81, { stroke: COL.red, strokeWidth: 2 });
    arrow(s, 445, 211, 515, 211, { stroke: COL.green });

    // Bottom Warning
    rect(s, 20, 295, 680, 56, { fill: hex(COL.red, 0.08), stroke: COL.red, strokeWidth: 1.5 });
    txt(s, 360, 328, zh ? "⚠️ 关键缺陷：传统应用安全无法阻止已获授权智能体执行注入恶意交易" : "⚠️ Flaw: Web AppSec fails once an authorized agent signs prompt injections", {
      anchor: "middle", size: 11.5, col: COL.red, weight: 700
    });
  }

  // -------------------------------------------------------------
  // Slide 4 Diagram: HTTP 402 & MPP Payment Protocol Handshake
  // -------------------------------------------------------------
  function drawPaymentFlow(host) {
    const s = scene(host, 720, 380);
    const zh = isZh();

    // Lanes
    line(s, 115, 52, 115, 345, { stroke: COL.blue, strokeWidth: 2.2 });
    line(s, 605, 52, 605, 345, { stroke: COL.teal, strokeWidth: 2.2 });

    // Headers
    chip(s, 15, 12, 200, 38, zh ? "买方智能体 (Client)" : "Buyer Agent (Client)", COL.blue, { size: 12, fill: "#ffffff" });
    chip(s, 505, 12, 200, 38, zh ? "商户端 / API 提供方" : "Merchant / Provider", COL.teal, { size: 12, fill: "#ffffff" });

    // Step 1: Request
    rect(s, 160, 58, 400, 30, { fill: "#ffffff", fillStyle: "solid", stroke: COL.slate, strokeWidth: 1.5 });
    txt(s, 360, 78, zh ? "1. GET /resource (任务查询请求)" : "1. GET /resource (Task Request)", {
      anchor: "middle", size: 11.5, col: COL.ink, weight: 700
    });
    arrow(s, 115, 94, 605, 94, { stroke: COL.slate, strokeWidth: 2 });

    // Step 2: 402 Payment Required
    rect(s, 160, 110, 400, 30, { fill: "#ffffff", fillStyle: "solid", stroke: COL.orange, strokeWidth: 1.8 });
    txt(s, 360, 130, zh ? "2. HTTP 402 Payment Required (x402)" : "2. HTTP 402 Payment Required (x402)", {
      anchor: "middle", size: 11.5, col: COL.orange, weight: 700
    });
    arrow(s, 605, 146, 115, 146, { stroke: COL.orange, strokeWidth: 2 });

    // Step 3: Local Voucher Signing
    rect(s, 15, 155, 205, 48, { fill: "#ffffff", fillStyle: "solid", stroke: COL.green, strokeWidth: 2 });
    txt(s, 117, 177, zh ? "🛡️ 签署 EIP-712 凭单" : "🛡️ Sign EIP-712 Voucher", {
      anchor: "middle", size: 11.5, col: COL.green, weight: 700
    });
    txt(s, 117, 195, zh ? "额度与策略核验" : "Local Policy Check", {
      anchor: "middle", size: 10.5, col: COL.green
    });

    // Step 4: Pay & Execute
    rect(s, 160, 208, 400, 30, { fill: "#ffffff", fillStyle: "solid", stroke: COL.blue, strokeWidth: 1.8 });
    txt(s, 360, 228, zh ? "3. 提交凭单签名 (X-PAYMENT)" : "3. GET /resource + X-PAYMENT", {
      anchor: "middle", size: 11.5, col: COL.blue, weight: 700
    });
    arrow(s, 115, 244, 605, 244, { stroke: COL.blue, strokeWidth: 2 });

    // Step 5: Deliver
    rect(s, 160, 260, 400, 30, { fill: "#ffffff", fillStyle: "solid", stroke: COL.green, strokeWidth: 1.8 });
    txt(s, 360, 280, zh ? "4. HTTP 200 交付数据与结果" : "4. HTTP 200 OK (Deliver Stream)", {
      anchor: "middle", size: 11.5, col: COL.green, weight: 700
    });
    arrow(s, 605, 296, 115, 296, { stroke: COL.green, strokeWidth: 2 });

    // Step 6: MPP Channel Settlement
    chip(s, 160, 315, 400, 48, zh ? "⚡ MPP 状态通道净额汇总与链上结算" : "⚡ MPP State Channel Netting & Escrow Settle", COL.grape, {
      size: 12, fill: "#ffffff"
    });
  }

  // -------------------------------------------------------------
  // Slide 5 Diagram: Security Contracts & Invariants
  // -------------------------------------------------------------
  function drawSecurityContracts(host) {
    const s = scene(host, 720, 375);
    const zh = isZh();

    // 4 Invariant Boxes
    chip(s, 18, 25, 335, 148, "", COL.blue);
    txt(s, 185, 54, zh ? "1. 条件托管与时间锁" : "1. Conditional Escrow & Timelock", { anchor: "middle", weight: 700, col: COL.blue, size: 13 });
    txt(s, 35, 86, zh ? "• 交付物哈希验证提交" : "• Cryptographic delivery proof", { size: 11 });
    txt(s, 35, 114, zh ? "• 超时自动触发原路退款" : "• Auto-refund upon SLA expiry", { size: 11 });
    txt(s, 35, 142, zh ? "• 杜绝单方恶意扣留资金" : "• Zero unilateral griefing hold", { size: 11 });

    chip(s, 367, 25, 335, 148, "", COL.red);
    txt(s, 534, 54, zh ? "2. 经济质押与罚没机制" : "2. Slashing & Stake Collateral", { anchor: "middle", weight: 700, col: COL.red, size: 13 });
    txt(s, 384, 86, zh ? "• 服务智能体质押入驻保证金" : "• Service agent stakes collateral", { size: 11 });
    txt(s, 384, 114, zh ? "• 违背协议自动罚没质押金" : "• Programmatic slash on breach", { size: 11 });
    txt(s, 384, 142, zh ? "• 独立仲裁节点共识核验" : "• Evaluator consensus verification", { size: 11 });

    chip(s, 18, 195, 335, 148, "", COL.grape);
    txt(s, 185, 224, zh ? "3. 多签与门限共识机制" : "3. Multi-Sig & M-of-N Consensus", { anchor: "middle", weight: 700, col: COL.grape, size: 13 });
    txt(s, 35, 256, zh ? "• 大额交易强制多智能体复核" : "• High-value M-of-N consensus", { size: 11 });
    txt(s, 35, 284, zh ? "• 超额支出强制人工联合签名" : "• Mandatory human co-signing", { size: 11 });
    txt(s, 35, 312, zh ? "• 根除单点智能体失控风险" : "• Zero single point of failure", { size: 11 });

    chip(s, 367, 195, 335, 148, "", COL.green);
    txt(s, 534, 224, zh ? "4. 支出速率与金额硬顶" : "4. Velocity Caps & Hard Limits", { anchor: "middle", weight: 700, col: COL.green, size: 13 });
    txt(s, 384, 256, zh ? "• 单笔交易刚性硬顶 (L_tx)" : "• Per-transaction limit (L_tx)", { size: 11 });
    txt(s, 384, 284, zh ? "• 24小时滚动支出预算 (L_24h)" : "• 24h rolling velocity cap (L_24h)", { size: 11 });
    txt(s, 384, 312, zh ? "• 流动资金与冷国库物理隔离" : "• Working vs cold vault partition", { size: 11 });
  }

  // -------------------------------------------------------------
  // Slide 6 Diagram: Level of Autonomy (LoA 0 to LoA 5)
  // -------------------------------------------------------------
  function drawLoASpectrum(host) {
    const s = scene(host, 720, 380);
    const zh = isZh();

    const loas = [
      { l: "LoA 0", name: zh ? "辅助模式" : "Assistive", c: COL.blue, desc: zh ? "仅建议无工具" : "Advisory" },
      { l: "LoA 1", name: zh ? "脚本确定" : "Scripted", c: COL.teal, desc: zh ? "确定性脚本" : "Deterministic" },
      { l: "LoA 2", name: zh ? "条件委托" : "Conditional", c: COL.green, desc: zh ? "读放写管" : "Read-only" },
      { l: "LoA 3", name: zh ? "受控自主" : "Supervised", c: COL.yellow, desc: zh ? "额度受限" : "Bounded" },
      { l: "LoA 4", name: zh ? "高度自主" : "High Auton.", c: COL.orange, desc: zh ? "异常升级" : "Escalation" },
      { l: "LoA 5", name: zh ? "完全自主" : "Unconstrained", c: COL.red, desc: zh ? "⛔ 商业严禁" : "⛔ Banned" }
    ];

    const w = 104, gap = 11;
    loas.forEach((item, idx) => {
      const x = 18 + idx * (w + gap);
      rect(s, x, 55, w, 205, { fill: hex(item.c, 0.12), stroke: item.c, strokeWidth: 2 });
      chip(s, x + 6, 65, w - 12, 34, item.l, item.c, { size: 12 });
      txt(s, x + w / 2, 128, item.name, { anchor: "middle", weight: 700, size: 11, col: item.c });
      txt(s, x + w / 2, 165, item.desc, { anchor: "middle", size: 10.5, col: COL.slate });

      // Risk bar
      const hBar = 12 + idx * 14;
      rect(s, x + 16, 245 - hBar, w - 32, hBar, { fill: item.c, fillStyle: "solid", stroke: item.c });
    });

    // Spectrum Arrow
    arrow(s, 18, 290, 702, 290, { stroke: COL.ink });
    txt(s, 22, 312, zh ? "◀ 人工全程直接控制 (低爆炸半径)" : "◀ High Human Control (Low Blast Radius)", { size: 11, col: COL.blue, weight: 700 });
    txt(s, 698, 312, zh ? "智能体机器自主权 (高破坏风险) ▶" : "High Autonomous Agency (High Liability) ▶", { anchor: "end", size: 11, col: COL.red, weight: 700 });

    // Recommendation annotation
    rect(s, 35, 325, 650, 42, { fill: hex(COL.green, 0.1), stroke: COL.green });
    txt(s, 360, 351, zh ? "生产金融系统黄金基准：LoA 2 (写操作强制确认) 或 LoA 3 (限额受控)" : "Production Commerce Standard: LoA 2 (Confirm Writes) or LoA 3 (Capped)", {
      anchor: "middle", size: 11.5, col: COL.green, weight: 700
    });
  }

  // -------------------------------------------------------------
  // Slide 7 Diagram: Multi-Dimensional Threshold Engine
  // -------------------------------------------------------------
  function drawThresholdEngine(host) {
    const s = scene(host, 720, 380);
    const zh = isZh();

    // Input Action Request
    chip(s, 18, 55, 195, 72, zh ? "智能体动作请求\n(API / 交易 / 工具)" : "Action Request\n(Tool / Tx / Call)", COL.blue, { size: 11.5, fill: "#ffffff" });

    // Multi-Dimensional Threshold Evaluator
    rect(s, 245, 20, 235, 260, { fill: "#ffffff", fillStyle: "solid", stroke: COL.orange, strokeWidth: 2 });
    txt(s, 362, 48, zh ? "多维门限评估网关" : "Threshold Gateway", { anchor: "middle", weight: 700, col: COL.orange, size: 13 });

    chip(s, 260, 68, 205, 38, zh ? "1. 资金金额门限" : "1. Financial Cap ($)", COL.green, { size: 11.5, fill: "#ffffff" });
    chip(s, 260, 118, 205, 38, zh ? "2. 工具风险分级" : "2. Tool Risk Tier", COL.blue, { size: 11.5, fill: "#ffffff" });
    chip(s, 260, 168, 205, 38, zh ? "3. 速率与语义漂移" : "3. Velocity / Drift", COL.grape, { size: 11.5, fill: "#ffffff" });
    chip(s, 260, 218, 205, 38, zh ? "4. 累积破坏半径" : "4. Blast Radius", COL.teal, { size: 11.5, fill: "#ffffff" });

    arrow(s, 213, 91, 245, 91, { stroke: COL.ink, strokeWidth: 2 });

    // Outputs
    arrow(s, 480, 85, 510, 62, { stroke: COL.green, strokeWidth: 2 });
    chip(s, 510, 30, 195, 62, zh ? "✓ 自动放行 (<$50)\n即刻执行" : "✓ Auto-Approve (<$50)\n(Instant Exec)", COL.green, { size: 11.5, fill: "#ffffff" });

    arrow(s, 480, 142, 510, 142, { stroke: COL.yellow, strokeWidth: 2 });
    chip(s, 510, 110, 195, 62, zh ? "⚠️ 双智能体复核\n($50 - $500)" : "⚠️ Dual-Agent Check\n($50 - $500)", COL.yellow, { size: 11.5, fill: "#ffffff" });

    arrow(s, 480, 200, 510, 222, { stroke: COL.red, strokeWidth: 2 });
    chip(s, 510, 190, 195, 62, zh ? "🛑 强制人工签署\n(>$500)" : "🛑 Human Co-Sign\n(>$500)", COL.red, { size: 11.5, fill: "#ffffff" });

    // Circuit Breaker
    rect(s, 18, 298, 685, 64, { fill: "#ffffff", fillStyle: "solid", stroke: COL.red, strokeWidth: 2 });
    txt(s, 360, 324, zh ? "⚡ 自动熔断器：单分钟超 10 次调用或语义漂移 > 0.4 即刻触发自主权降级" : "⚡ Circuit Breaker: Immediate LoA Step-Down on Anomaly (>10 calls/min or drift > 0.4)", {
      anchor: "middle", weight: 700, col: COL.red, size: 12
    });
    txt(s, 360, 348, zh ? "强制暂停执行并冻结待决托管资金" : "Execution instantly halted & pending escrow frozen", {
      anchor: "middle", size: 11, col: COL.ink
    });
  }

  // -------------------------------------------------------------
  // Slide 8 Diagram: Spec-Driven Job Descriptions (SJD)
  // -------------------------------------------------------------
  function drawSJDArchitecture(host) {
    const s = scene(host, 720, 380);
    const zh = isZh();

    // SJD Manifest Terminal Card
    const bgRect = document.createElementNS(NS, "rect");
    bgRect.setAttribute("x", 18); bgRect.setAttribute("y", 18);
    bgRect.setAttribute("width", 335); bgRect.setAttribute("height", 345);
    bgRect.setAttribute("rx", 10); bgRect.setAttribute("fill", "#0f172a");
    bgRect.setAttribute("stroke", "#0284c7"); bgRect.setAttribute("stroke-width", "2");
    addNode(s, bgRect);

    // Terminal header
    const headerRect = document.createElementNS(NS, "rect");
    headerRect.setAttribute("x", 18); headerRect.setAttribute("y", 18);
    headerRect.setAttribute("width", 335); headerRect.setAttribute("height", 36);
    headerRect.setAttribute("rx", 10); headerRect.setAttribute("fill", "#1e293b");
    addNode(s, headerRect);

    // 3 window control dots
    const dotY = 36;
    [35, 50, 65].forEach((cx, i) => {
      const dot = document.createElementNS(NS, "circle");
      dot.setAttribute("cx", cx); dot.setAttribute("cy", dotY); dot.setAttribute("r", 5);
      dot.setAttribute("fill", ["#ef4444", "#f59e0b", "#10b981"][i]);
      addNode(s, dot);
    });

    txt(s, 200, 42, "SPEC.json (SJD Manifest)", {
      anchor: "middle", col: "#f8fafc", weight: 700, size: 12.5, family: "'JetBrains Mono', monospace"
    });

    // Code lines
    txt(s, 32, 84, 'agent_id: "procure-bot-01"', { col: "#60a5fa", size: 11.5, weight: 600, family: "'JetBrains Mono'" });
    txt(s, 32, 114, 'role: "Material Procurement"', { col: "#38bdf8", size: 11.5, weight: 600, family: "'JetBrains Mono'" });
    txt(s, 32, 144, 'tools: ["quote", "escrow"]', { col: "#4ade80", size: 11.5, weight: 600, family: "'JetBrains Mono'" });
    txt(s, 32, 174, 'non_goals: ["no_shell", "no_wire"]', { col: "#f87171", size: 11.5, weight: 700, family: "'JetBrains Mono'" });
    txt(s, 32, 204, 'budget_daily: 200.00 USDC', { col: "#facc15", size: 11.5, weight: 600, family: "'JetBrains Mono'" });
    txt(s, 32, 234, 'loa_tier: 2 (Escrow Capped)', { col: "#c084fc", size: 11.5, weight: 600, family: "'JetBrains Mono'" });
    txt(s, 32, 274, '# 🛡️ Zero Ambient Authority', { col: "#94a3b8", size: 11.5, weight: 700, family: "'JetBrains Mono'" });
    txt(s, 32, 304, '# Cryptographic Proof Anchored', { col: "#64748b", size: 11, family: "'JetBrains Mono'" });

    // Arrow to right
    arrow(s, 353, 185, 375, 185, { stroke: COL.ink, strokeWidth: 2 });

    // Right card
    rect(s, 375, 18, 330, 345, { fill: "#ffffff", fillStyle: "solid", stroke: COL.blue, strokeWidth: 2 });
    txt(s, 540, 48, zh ? "可信身份凭证生命周期" : "Credential Lifecycle", {
      anchor: "middle", weight: 700, col: COL.blue, size: 13
    });

    chip(s, 390, 65, 300, 56, zh ? "1. 临时任务密钥对 (Ed25519)" : "1. Ephemeral Keypair (Ed25519)", COL.blue, { size: 11.5, fill: "#ffffff" });
    chip(s, 390, 131, 300, 56, zh ? "2. 细粒度衰减授权 (Macaroons)" : "2. Attenuated Delegation Token", COL.grape, { size: 11.5, fill: "#ffffff" });
    chip(s, 390, 197, 300, 56, zh ? "3. 密码学证明绑定 (DID / SJD)" : "3. Verifiable DID / Agent ID", COL.teal, { size: 11.5, fill: "#ffffff" });
    chip(s, 390, 263, 300, 56, zh ? "4. 任务结束即刻销毁密钥" : "4. Ephemeral Zeroize on Close", COL.green, { size: 11.5, fill: "#ffffff" });
  }

  // -------------------------------------------------------------
  // Slide 9 Diagram: Domain Ontology for Semantic Intent Grounding
  // -------------------------------------------------------------
  function drawDomainOntology(host) {
    const s = scene(host, 720, 380);
    const zh = isZh();

    // Natural Language Input
    chip(s, 15, 55, 205, 75, zh ? "模糊自然语言输入\n(\"结清商户报价\")" : "Fuzzy User Prompt\n(\"Liquidate & Settle Debt\")", COL.red, { size: 11.5, fill: "#ffffff" });

    arrow(s, 220, 92, 250, 92, { stroke: COL.ink, strokeWidth: 2 });

    // Formal Domain Ontology Engine
    rect(s, 250, 20, 245, 335, { fill: "#ffffff", fillStyle: "solid", stroke: COL.grape, strokeWidth: 2 });
    txt(s, 372, 48, zh ? "金融领域本体语义引擎" : "Domain Ontology Engine", { anchor: "middle", weight: 700, col: COL.grape, size: 13 });

    chip(s, 265, 68, 215, 42, zh ? "概念实体 (Asset / Order)" : "Entities (Asset / Order)", COL.grape, { size: 11.5, fill: "#ffffff" });
    chip(s, 265, 120, 215, 42, zh ? "原子动作 (Action Primitives)" : "Action Primitives", COL.blue, { size: 11.5, fill: "#ffffff" });
    chip(s, 265, 172, 215, 42, zh ? "状态迁移约束 (Invariants)" : "Pre/Post Invariants", COL.orange, { size: 11.5, fill: "#ffffff" });
    chip(s, 265, 224, 215, 42, zh ? "状态机图谱 (State Graph)" : "State Machine Graph", COL.teal, { size: 11.5, fill: "#ffffff" });
    chip(s, 265, 276, 215, 46, zh ? "语义消歧与注入清洗" : "Disambiguation &\nSanitizer", COL.green, { size: 11.5, fill: "#ffffff" });

    arrow(s, 495, 92, 520, 92, { stroke: COL.green, strokeWidth: 2 });

    // Formal Intent AST
    rect(s, 520, 20, 185, 335, { fill: "#ffffff", fillStyle: "solid", stroke: COL.teal, strokeWidth: 2 });
    txt(s, 612, 48, zh ? "形式化意图树" : "Intent AST", { anchor: "middle", weight: 700, col: COL.teal, size: 13 });
    txt(s, 535, 84, "Intent: Settle", { size: 11.5, weight: 600, family: "'JetBrains Mono'" });
    txt(s, 535, 114, "Asset: USDC", { size: 11.5, weight: 600, family: "'JetBrains Mono'" });
    txt(s, 535, 144, "MaxSlip: 0.5%", { size: 11.5, weight: 600, family: "'JetBrains Mono'" });
    txt(s, 535, 174, "Cap: $150", { size: 11.5, weight: 600, family: "'JetBrains Mono'" });
    txt(s, 535, 230, zh ? "✓ 拦截越权语义" : "✓ No semantic drift", { size: 11.5, col: COL.green, weight: 700 });
    txt(s, 535, 265, zh ? "✓ 阻断越界注入" : "✓ Injection blocked", { size: 11.5, col: COL.green, weight: 700 });
  }

  // -------------------------------------------------------------
  // Slide 10 Diagram: Intent-Based Access Control (IBAC)
  // -------------------------------------------------------------
  function drawIBACPipeline(host) {
    const s = scene(host, 720, 380);
    const zh = isZh();

    const steps = [
      { num: "Step 1", t: zh ? "意图提取与解析" : "Intent AST Extract", c: COL.blue, d: zh ? "解析并约束自然语言为显式结构" : "Parse natural language into Intent AST" },
      { num: "Step 2", t: zh ? "本体约束与不变量核验" : "Invariant Verification", c: COL.orange, d: zh ? "核实限额、权限与前置约束条件" : "Check policies, spend caps & thresholds" },
      { num: "Step 3", t: zh ? "动态编译能力代币 (CapToken)" : "Dynamic CapToken", c: COL.grape, d: zh ? "生成单次、短时且范围受限凭据" : "Compile single-use scoped token" },
      { num: "Step 4", t: zh ? "目标服务/合约严格消费" : "Target Execution & Burn", c: COL.green, d: zh ? "核验代币签名与参数并立即销毁" : "Validate signature & burn token" }
    ];

    steps.forEach((st, idx) => {
      const y = 20 + idx * 75;
      rect(s, 25, y, 670, 64, { fill: hex(st.c, 0.08), stroke: st.c, strokeWidth: 1.8 });
      chip(s, 40, y + 10, 100, 44, st.num, st.c, { size: 11.5 });
      txt(s, 160, y + 30, st.t, { weight: 700, col: st.c, size: 12.5 });
      txt(s, 160, y + 52, st.d, { size: 11, col: COL.slate });

      if (idx < 3) {
        arrow(s, 360, y + 64, 360, y + 75, { stroke: COL.ink });
      }
    });

    // Comparison Callout
    rect(s, 25, 325, 670, 42, { fill: hex(COL.green, 0.12), stroke: COL.green });
    txt(s, 360, 351, zh ? "IBAC 核心价值：彻底终结静态角色漏洞，智能体仅能执行已验证意图的工具" : "IBAC Core: Eliminates RBAC flaw; agents run only verified user intent", {
      anchor: "middle", size: 11.5, col: COL.green, weight: 700
    });
  }

  // -------------------------------------------------------------
  // Slide 11 Diagram: Memory Threat Triad
  // -------------------------------------------------------------
  function drawMemoryThreats(host) {
    const s = scene(host, 720, 375);
    const zh = isZh();

    // 3 Threat Columns
    chip(s, 18, 20, 220, 255, "", COL.red);
    txt(s, 128, 48, zh ? "1. 记忆投毒\n(Memory Poisoning)" : "1. Memory Poisoning\n(Indirect Injection)", { anchor: "middle", weight: 700, col: COL.red, size: 13 });
    txt(s, 30, 105, zh ? "• 网页/发票中隐匿恶意指令" : "• Concealed payload in docs", { size: 11 });
    txt(s, 30, 135, zh ? "• 诱骗智能体写入长期记忆" : "• Writes backdoor to memory", { size: 11 });
    txt(s, 30, 165, zh ? "• 会话重置后仍然长期潜伏" : "• Persists across sessions", { size: 11 });
    txt(s, 30, 205, zh ? "后果：隐蔽盗取国库资金" : "Impact: Treasury theft", { size: 11.5, col: COL.red, weight: 700 });

    chip(s, 250, 20, 220, 255, "", COL.orange);
    txt(s, 360, 48, zh ? "2. 时效漂移\n(Temporal Drift)" : "2. Temporal Drift\n(Stale Quotes)", { anchor: "middle", weight: 700, col: COL.orange, size: 13 });
    txt(s, 262, 105, zh ? "• 依赖过期的缓存市场报价" : "• Stale market quotes", { size: 11 });
    txt(s, 262, 135, zh ? "• 依赖已被吊销的旧凭据" : "• Revoked credentials", { size: 11 });
    txt(s, 262, 165, zh ? "• 忽略最新订单取消状态" : "• Unhandled cancellations", { size: 11 });
    txt(s, 262, 205, zh ? "后果：严重滑点与交易失败" : "Impact: Slippage & fails", { size: 11.5, col: COL.orange, weight: 700 });

    chip(s, 482, 20, 220, 255, "", COL.yellow);
    txt(s, 592, 48, zh ? "3. 脑裂冲突\n(Split-Brain State)" : "3. Split-Brain State\n(Deadlocks)", { anchor: "middle", weight: 700, col: COL.yellow, size: 13 });
    txt(s, 494, 105, zh ? "• 多智能体传递相反事实" : "• Contradictory agent facts", { size: 11 });
    txt(s, 494, 135, zh ? "• 上下文认知僵局与死循环" : "• Cognitive retry deadlocks", { size: 11 });
    txt(s, 494, 165, zh ? "• 随机降级至脆弱默认策略" : "• Insecure fallback policy", { size: 11 });
    txt(s, 494, 205, zh ? "后果：业务中断与服务拒绝" : "Impact: Denial of service", { size: 11.5, col: COL.yellow, weight: 700 });

    // Bottom warning
    rect(s, 18, 295, 685, 58, { fill: hex(COL.red, 0.08), stroke: COL.red });
    txt(s, 360, 330, zh ? "传统 RAG 缺乏密码学溯源确权，是智能体长期记忆最大的安全风险源" : "Standard RAG lacks cryptographic provenance, creating persistent attack vectors", {
      anchor: "middle", size: 11.5, col: COL.red, weight: 700
    });
  }

  // -------------------------------------------------------------
  // Slide 12 Diagram: 3-Tier Defensive Memory Architecture
  // -------------------------------------------------------------
  function drawMemoryHygiene(host) {
    const s = scene(host, 720, 380);
    const zh = isZh();

    // Ingestion
    chip(s, 15, 40, 185, 72, zh ? "外部不可信摄入\n(网页 / API / 文档)" : "Untrusted Ingestion\n(Web / API / Docs)", COL.slate, { size: 11.5, fill: "#ffffff" });

    arrow(s, 200, 76, 225, 76, { stroke: COL.ink, strokeWidth: 2 });

    // Tier 1: Ephemeral
    chip(s, 225, 25, 230, 72, zh ? "Tier 1: 临时工作记忆\n(任务结束即刻清空)" : "Tier 1: Ephemeral Memory\n(Zeroized on task close)", COL.blue, { size: 12, fill: "#ffffff" });

    arrow(s, 340, 97, 340, 120, { stroke: COL.ink, strokeWidth: 2 });

    // Tier 2: Quarantined
    rect(s, 225, 120, 230, 96, { fill: "#ffffff", fillStyle: "solid", stroke: COL.orange, strokeWidth: 2 });
    txt(s, 340, 146, zh ? "Tier 2: 隔离检验缓冲区" : "Tier 2: Quarantined Buffer", { anchor: "middle", weight: 700, col: COL.orange, size: 12 });
    txt(s, 340, 174, zh ? "• 密码学溯源核验 (Provenance)" : "• Provenance verification check", { anchor: "middle", size: 11, weight: 600 });
    txt(s, 340, 198, zh ? "• 冲突消除与 TTL (CRDTs)" : "• Conflict reconciliation & TTL", { anchor: "middle", size: 11, weight: 600 });

    arrow(s, 340, 216, 340, 240, { stroke: COL.green, strokeWidth: 2 });

    // Tier 3: Verified Long Term
    chip(s, 225, 240, 230, 75, zh ? "Tier 3: 已验证可信长期存储\n(只追加 / 共识签名)" : "Tier 3: Verified Long-Term\n(Append-only & signed)", COL.green, { size: 12, fill: "#ffffff" });

    // Hygiene Rules sidebar
    rect(s, 480, 20, 225, 335, { fill: "#ffffff", fillStyle: "solid", stroke: COL.teal, strokeWidth: 2 });
    txt(s, 592, 48, zh ? "记忆卫生防护法则" : "Memory Invariants", { anchor: "middle", weight: 700, col: COL.teal, size: 13 });

    txt(s, 492, 80, zh ? "1. 密码学来源标签" : "1. Cryptographic Tags", { size: 11.5, weight: 700, col: COL.teal });
    txt(s, 492, 104, zh ? "签名者、时间戳与哈希" : "Author, timestamp, hash", { size: 10.5, col: COL.ink });

    txt(s, 492, 140, zh ? "2. 严格 TTL 动态过期" : "2. Strict TTL Expiry", { size: 11.5, weight: 700, col: COL.teal });
    txt(s, 492, 164, zh ? "报价 30 秒，凭证 15 分钟" : "Quotes 30s, tokens 15m", { size: 10.5, col: COL.ink });

    txt(s, 492, 200, zh ? "3. 确定性冲突仲裁" : "3. Deterministic Arb", { size: 11.5, weight: 700, col: COL.teal });
    txt(s, 492, 224, zh ? "领域本体优先序判别真伪" : "Ontological precedence", { size: 10.5, col: COL.ink });

    txt(s, 492, 260, zh ? "4. 零外部直写长期库" : "4. Zero Direct Writes", { size: 11.5, weight: 700, col: COL.red });
    txt(s, 492, 284, zh ? "不可信数据绝不持久化" : "No untrusted persistence", { size: 10.5, col: COL.red });

    txt(s, 492, 324, zh ? "🛡️ 向量数据库严格隔离" : "🛡️ Strict Vector DB Isolation", { size: 11, weight: 700, col: COL.blue });
  }

  // -------------------------------------------------------------
  // Slide 13 Diagram: Trajectory Telemetry & Action Graph
  // -------------------------------------------------------------
  function drawTrajectoryMonitoring(host) {
    const s = scene(host, 720, 380);
    const zh = isZh();

    // Step nodes in DAG
    const nodes = [
      { x: 30, y: 35, l: zh ? "思考\n(Thought)" : "Thought 1\n(Intent)" },
      { x: 170, y: 35, l: zh ? "规划\n(Plan)" : "Plan Step\n(Quote)" },
      { x: 310, y: 35, l: zh ? "调用\n(Tool)" : "Tool Call\n(get_quote)" },
      { x: 450, y: 35, l: zh ? "响应\n(Response)" : "Response\n(Valid)" },
      { x: 560, y: 115, l: zh ? "托管\n(Escrow)" : "Tool Call\n(escrow)" },
      { x: 380, y: 115, l: zh ? "核验\n(Cap Check)" : "Verify Cap\n(Invariant)" },
      { x: 200, y: 115, l: zh ? "结算\n(Settle)" : "Settlement\n(Final 200)" }
    ];

    nodes.forEach(n => {
      chip(s, n.x, n.y, 130, 52, n.l, COL.blue, { size: 11 });
    });

    arrow(s, 160, 61, 170, 61, { stroke: COL.ink });
    arrow(s, 300, 61, 310, 61, { stroke: COL.ink });
    arrow(s, 440, 61, 450, 61, { stroke: COL.ink });
    arrow(s, 515, 87, 560, 115, { stroke: COL.ink });
    arrow(s, 560, 141, 510, 141, { stroke: COL.ink });
    arrow(s, 380, 141, 330, 141, { stroke: COL.green });

    // Anomaly Engine Overlay
    rect(s, 25, 195, 670, 165, { fill: hex(COL.orange, 0.08), stroke: COL.orange, strokeWidth: 1.8 });
    txt(s, 360, 222, zh ? "轨迹遥测与异常行为探测器 (OpenTelemetry Semantic Conventions)" : "Trajectory Telemetry & Anomaly Engine (OTel GenAI Standard)", {
      anchor: "middle", weight: 700, col: COL.orange, size: 12.5
    });
    txt(s, 40, 256, zh ? "• 语义漂移监控：实时比对当前推理步骤与预定 SJD 的余弦距离 (>0.4 报警)" : "• Semantic Drift Scoring: Measures cosine distance to baseline SJD (>0.4 alerts)", { size: 11 });
    txt(s, 40, 288, zh ? "• 循环振荡拦截：识别重复调用失败工具超过 3 次的死循环，阻断 Token 抽水" : "• Loop Interception: Flags >3 repeated tool failures, preventing token exhaustion", { size: 11 });
    txt(s, 40, 320, zh ? "• 隐蔽侧移检测：阻止商业智能体尝试访问文件系统、环境变量或网络" : "• Lateral Movement Detection: Halts unauthorized file/key/network access attempts", { size: 11 });
  }

  // -------------------------------------------------------------
  // Slide 14 Diagram: Active Runtime Steering & Control Plane
  // -------------------------------------------------------------
  function drawRuntimeSteering(host) {
    const s = scene(host, 720, 380);
    const zh = isZh();

    // 1. Left Card: Agent Core
    rect(s, 15, 18, 200, 345, { fill: "#ffffff", fillStyle: "solid", stroke: COL.blue, strokeWidth: 2 });
    txt(s, 115, 46, zh ? "🧠 智能体推理核心" : "🧠 Agent Core", { anchor: "middle", weight: 700, col: COL.blue, size: 13 });

    chip(s, 25, 65, 180, 34, "Thought: Plan Order", COL.blue, { size: 11, fill: "#ffffff" });
    chip(s, 25, 107, 180, 34, "Intent: Escrow Settle", COL.blue, { size: 11, fill: "#ffffff" });
    chip(s, 25, 149, 180, 34, "Tool: x402_pay()", COL.grape, { size: 11, fill: "#ffffff" });
    chip(s, 25, 191, 180, 34, "Args: {to, $120 USDC}", COL.teal, { size: 11, fill: "#ffffff" });

    chip(s, 25, 240, 180, 56, zh ? "⚠️ 待放行动作请求\n(Zero Ambient Auth)" : "⚠️ Action Request\n(Pending Gateway)", COL.orange, { size: 11, fill: "#ffffff" });
    txt(s, 115, 335, zh ? "零环境执行特权" : "Zero Ambient Privilege", { anchor: "middle", size: 11, col: COL.slate, weight: 600 });

    arrow(s, 215, 185, 235, 185, { stroke: COL.ink, strokeWidth: 2 });

    // 2. Center Card: Control Gateway
    rect(s, 235, 18, 280, 345, { fill: "#ffffff", fillStyle: "solid", stroke: COL.red, strokeWidth: 2.2 });
    txt(s, 375, 46, zh ? "🛡️ 确定性控制网关" : "🛡️ Control Gateway", { anchor: "middle", weight: 700, col: COL.red, size: 13 });

    chip(s, 245, 58, 260, 42, zh ? "1. PreToolUse 拦截核验\n(Schema / 限额 / SJD 意图)" : "1. PreToolUse Interceptor\n(Schema / Invariants / SJD)", COL.red, { size: 11.5, fill: "#ffffff" });
    chip(s, 245, 105, 260, 42, zh ? "2. 动态策略与风控仲裁\n(Policy Arbiter)" : "2. Dynamic Policy Arbiter\n(Dual-Agent / Escalation)", COL.orange, { size: 11.5, fill: "#ffffff" });
    chip(s, 245, 152, 260, 42, zh ? "3. PostToolUse 脱敏净化\n(抹除注入 / 隐藏凭据)" : "3. PostToolUse Sanitizer\n(Strip Injection Payloads)", COL.teal, { size: 11.5, fill: "#ffffff" });

    // Sub-box inside Gateway: Decision Primitives
    rect(s, 245, 202, 260, 150, { fill: "#f8fafc", fillStyle: "solid", stroke: COL.ink, strokeWidth: 1.2 });
    txt(s, 375, 224, zh ? "网关四项确定性裁决动作" : "4 Gateway Decision Actions", { anchor: "middle", size: 11.5, weight: 700, col: COL.ink });
    txt(s, 255, 252, zh ? "• APPROVE: 放行合规请求" : "• APPROVE: Allow valid call", { size: 11, col: COL.green, weight: 700 });
    txt(s, 255, 278, zh ? "• STEER: 重写参数/注入提示" : "• STEER: Mutate / Re-prompt", { size: 11, col: COL.blue, weight: 700 });
    txt(s, 255, 304, zh ? "• SANDBOX: 重定向至沙箱" : "• SANDBOX: Divert to testbed", { size: 11, col: COL.teal, weight: 700 });
    txt(s, 255, 330, zh ? "• KILL: 吊销凭据硬熔断" : "• KILL: Circuit break & freeze", { size: 11, col: COL.red, weight: 700 });

    // 3 Arrows to Target Outcomes
    arrow(s, 515, 75, 535, 75, { stroke: COL.green, strokeWidth: 2 });
    arrow(s, 515, 165, 535, 165, { stroke: COL.teal, strokeWidth: 2 });
    arrow(s, 515, 260, 535, 260, { stroke: COL.red, strokeWidth: 2 });

    // 3. Right Column: 3 Target Outcome Cards
    chip(s, 535, 38, 170, 68, zh ? "✓ 真实生产环境\n(银行/区块链/API)" : "✓ Production Rails\n(Bank / Chain / API)", COL.green, { size: 11.5, fill: "#ffffff" });
    chip(s, 535, 132, 170, 68, zh ? "⚡ 隔离沙箱环境\n(Worktree 影子试运行)" : "⚡ Sandbox Worktree\n(Isolated Shadow Run)", COL.teal, { size: 11.5, fill: "#ffffff" });
    chip(s, 535, 226, 170, 68, zh ? "🛑 硬熔断与冻结\n(吊销密钥 & 冻结托管)" : "🛑 Hard Kill Switch\n(Revoke Token & Freeze)", COL.red, { size: 11.5, fill: "#ffffff" });
  }

  // -------------------------------------------------------------
  // Slide 15 Diagram: Benchmarks & Token Efficiency Matrix
  // -------------------------------------------------------------
  function drawBenchmarkMatrix(host) {
    const s = scene(host, 720, 375);
    const zh = isZh();

    // 4 Benchmark Metrics
    chip(s, 18, 20, 335, 152, "", COL.blue);
    txt(s, 185, 48, zh ? "任务完成率 (TCR)" : "Task Completion Rate (TCR)", { anchor: "middle", weight: 700, col: COL.blue, size: 13 });
    txt(s, 35, 82, zh ? "• 端到端复杂商业目标达成比例" : "• % of complex multi-turn goals met", { size: 11 });
    txt(s, 35, 110, zh ? "• 跨工具编排与自我容错修正能力" : "• Cross-tool resilience & recovery", { size: 11 });
    txt(s, 35, 138, zh ? "• 工业级达标门槛：>= 92.5%" : "• Production Target: >= 92.5%", { size: 11.5, col: COL.blue, weight: 700 });

    chip(s, 367, 20, 335, 152, "", COL.red);
    txt(s, 534, 48, zh ? "不变量合规率 (SICR)" : "Invariant Compliance (SICR)", { anchor: "middle", weight: 700, col: COL.red, size: 13 });
    txt(s, 384, 82, zh ? "• 资金限额与安全策略违规率" : "• Zero financial policy violations", { size: 11 });
    txt(s, 384, 110, zh ? "• 越权调用、未授权转账发生率" : "• Zero unauthorized spend events", { size: 11 });
    txt(s, 384, 138, zh ? "• 工业级硬性要求：100% 零容忍" : "• Requirement: 100% Exact", { size: 11.5, col: COL.red, weight: 700 });

    chip(s, 18, 195, 335, 152, "", COL.green);
    txt(s, 185, 224, zh ? "Token 效能比 (TER)" : "Token Efficiency (TER)", { anchor: "middle", weight: 700, col: COL.green, size: 13 });
    txt(s, 35, 258, zh ? "• 最优步数与实际消耗比例" : "• Optimal vs actual token usage", { size: 11 });
    txt(s, 35, 286, zh ? "• 动态模式裁剪规避上下文膨胀" : "• Pruned schemas avoid bloat", { size: 11 });
    txt(s, 35, 314, zh ? "• 规避死循环节省高达 70% 成本" : "• Loop defense saves up to 70%", { size: 11.5, col: COL.green, weight: 700 });

    chip(s, 367, 195, 335, 152, "", COL.grape);
    txt(s, 534, 224, zh ? "对抗注入弹性分 (ARS)" : "Adversarial Resilience (ARS)", { anchor: "middle", weight: 700, col: COL.grape, size: 13 });
    txt(s, 384, 258, zh ? "• 500+ 项自动化红蓝对抗测试" : "• 500+ automated red-team tests", { size: 11 });
    txt(s, 384, 286, zh ? "• 间接提示注入/上下文投毒防御" : "• Indirect prompt injection defense", { size: 11 });
    txt(s, 384, 314, zh ? "• 工业级及格线：>= 99.2%" : "• Enterprise Target: >= 99.2%", { size: 11.5, col: COL.grape, weight: 700 });
  }

  // -------------------------------------------------------------
  // Slide 16 Diagram: Summary & Synthesis Architecture
  // -------------------------------------------------------------
  function drawSummaryQA(host) {
    const s = scene(host, 720, 375);
    const zh = isZh();

    // Central Engine Hub
    rect(s, 235, 110, 250, 96, { fill: hex(COL.blue, 0.12), stroke: COL.blue, strokeWidth: 2.5 });
    txt(s, 360, 145, zh ? "🛡️ 智能体安全引擎" : "🛡️ AGENTIC SEC ENGINE", { anchor: "middle", weight: 700, col: COL.blue, size: 13 });
    txt(s, 360, 175, zh ? "纵深防御与确定性闭环" : "Unified Defense Harness", { anchor: "middle", size: 11.5, col: COL.slate });

    // Surrounding 6 Pillar Nodes
    chip(s, 18, 20, 205, 58, zh ? "1. x402 与 MPP 支付轨" : "1. x402 & MPP Rails", COL.teal, { size: 11.5 });
    arrow(s, 223, 78, 245, 110, { stroke: COL.teal });

    chip(s, 497, 20, 205, 58, zh ? "2. 链上数学不变量" : "2. Smart Invariants", COL.orange, { size: 11.5 });
    arrow(s, 497, 78, 475, 110, { stroke: COL.orange });

    chip(s, 12, 130, 205, 58, zh ? "3. LoA 0-5 分级治理" : "3. LoA 0-5 Governance", COL.indigo, { size: 11.5 });
    arrow(s, 217, 159, 235, 159, { stroke: COL.indigo });

    chip(s, 503, 130, 205, 58, zh ? "4. SJD 与 IBAC 代币" : "4. SJD & IBAC Tokens", COL.grape, { size: 11.5 });
    arrow(s, 503, 159, 485, 159, { stroke: COL.grape });

    chip(s, 18, 240, 205, 58, zh ? "5. 记忆卫生与 TTL" : "5. Memory Hygiene & TTL", COL.green, { size: 11.5 });
    arrow(s, 223, 240, 245, 206, { stroke: COL.green });

    chip(s, 497, 240, 205, 58, zh ? "6. 运行时引导与拦截" : "6. Runtime Steering & Kill", COL.red, { size: 11.5 });
    arrow(s, 497, 240, 475, 206, { stroke: COL.red });

    // Bottom Invariant Bar
    rect(s, 35, 318, 650, 44, { fill: hex(COL.green, 0.10), stroke: COL.green, strokeWidth: 1.5 });
    txt(s, 360, 345, zh ? "✓ 零越权转账 · 100% 不变量合规 · 生产就绪治理闭环" : "✓ Zero Unauthorized Spend · 100% Invariant Compliance", {
      anchor: "middle", size: 12, col: COL.green, weight: 700
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
