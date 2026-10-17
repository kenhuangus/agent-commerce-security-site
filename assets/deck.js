/* ============================================================
   Agentic Commerce & Agentic Security Foundations — Deck Navigation
   Supports 16 slides, keyboard, swipe, wheel, hash deep links & i18n
   ============================================================ */
(function () {
  const slides = Array.from(document.querySelectorAll(".slide"));
  const total = slides.length;
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const count = document.getElementById("count");
  const dotsWrap = document.getElementById("dots");
  const progress = document.getElementById("progress");
  const title = document.getElementById("slideTitle");

  // Build dots
  slides.forEach((_, i) => {
    const d = document.createElement("button");
    d.className = "dot";
    d.setAttribute("aria-label", "Go to slide " + (i + 1));
    d.addEventListener("click", () => go(i));
    dotsWrap.appendChild(d);
  });
  const dots = Array.from(dotsWrap.children);

  let cur = 0;

  function clamp(i) {
    return Math.max(0, Math.min(total - 1, i));
  }

  function go(i) {
    i = clamp(i);
    slides.forEach((s, idx) => {
      s.classList.toggle("is-active", idx === i);
      s.classList.toggle("is-prev", idx < i);
    });
    dots.forEach((d, idx) => d.classList.toggle("is-on", idx === i));
    cur = i;
    count.textContent = (i + 1) + " / " + total;
    
    // Read localized title if available
    const activeSlide = slides[i];
    const localizedTitle = (window.AGENT_SEC_I18N && window.AGENT_SEC_I18N.getSlideTitle(i)) || activeSlide.dataset.title || "";
    title.textContent = localizedTitle;

    progress.style.width = ((i) / (total - 1) * 100) + "%";
    prevBtn.disabled = i === 0;
    nextBtn.disabled = i === total - 1;

    if (history.replaceState) {
      history.replaceState(null, "", "#" + (i + 1));
    }

    // Trigger diagram render for this slide if not yet rendered
    if (window.renderDiagramForSlide) {
      window.renderDiagramForSlide(i + 1);
    }
  }

  const next = () => go(cur + 1);
  const prev = () => go(cur - 1);
  nextBtn.addEventListener("click", next);
  prevBtn.addEventListener("click", prev);

  // Fullscreen support
  const fsBtn = document.getElementById("fsBtn");
  const fsLabel = fsBtn ? fsBtn.querySelector(".bar__btn-label") : null;

  function isFullscreen() {
    return !!(
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement
    );
  }

  function toggleFullscreen() {
    if (!isFullscreen()) {
      const docEl = document.documentElement;
      const rfs = docEl.requestFullscreen ||
                  docEl.webkitRequestFullscreen ||
                  docEl.mozRequestFullScreen ||
                  docEl.msRequestFullscreen;
      if (rfs) {
        const p = rfs.call(docEl);
        if (p && p.catch) p.catch(() => {});
      }
    } else {
      const efs = document.exitFullscreen ||
                  document.webkitExitFullscreen ||
                  document.mozCancelFullScreen ||
                  document.msExitFullscreen;
      if (efs) {
        const p = efs.call(document);
        if (p && p.catch) p.catch(() => {});
      }
    }
  }

  function updateFullscreenUI() {
    const inFs = isFullscreen();
    document.body.classList.toggle("is-fullscreen", inFs);
    if (fsLabel) {
      const isZh = window.AGENT_SEC_I18N && window.AGENT_SEC_I18N.isZh();
      fsLabel.textContent = inFs
        ? (isZh ? "退出全屏" : "Exit Full")
        : (isZh ? "全屏演示" : "Full Screen");
    }
  }

  if (fsBtn) {
    fsBtn.addEventListener("click", toggleFullscreen);
  }

  ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"].forEach(evt => {
    document.addEventListener(evt, updateFullscreenUI);
  });

  // Keyboard navigation
  document.addEventListener("keydown", e => {
    const tag = (e.target && e.target.tagName) || "";
    if (["INPUT", "TEXTAREA", "SELECT"].includes(tag)) return;

    if (["ArrowRight", "PageDown", " "].includes(e.key)) {
      e.preventDefault();
      next();
    } else if (["ArrowLeft", "PageUp"].includes(e.key)) {
      e.preventDefault();
      prev();
    } else if (e.key === "Home") {
      e.preventDefault();
      go(0);
    } else if (e.key === "End") {
      e.preventDefault();
      go(total - 1);
    } else if (e.key === "f" || e.key === "F") {
      e.preventDefault();
      toggleFullscreen();
    }
  });

  // Touch swipe support
  let x0 = null;
  document.addEventListener("touchstart", e => { x0 = e.touches[0].clientX; }, { passive: true });
  document.addEventListener("touchend", e => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 50) {
      if (dx < 0) next(); else prev();
    }
    x0 = null;
  }, { passive: true });

  // Debounced wheel navigation
  let wheelLock = false;
  document.addEventListener("wheel", e => {
    if (wheelLock) return;
    if (Math.abs(e.deltaY) < 28 && Math.abs(e.deltaX) < 28) return;
    wheelLock = true;
    setTimeout(() => { wheelLock = false; }, 600);
    if (e.deltaY > 0 || e.deltaX > 0) next(); else prev();
  }, { passive: true });

  // Hash deep-link
  function readHash() {
    const start = parseInt((location.hash || "").replace("#", ""), 10);
    if (!isNaN(start)) {
      go(start - 1);
    } else {
      go(0);
    }
  }
  window.addEventListener("hashchange", readHash);
  readHash();

  // Language update listener
  document.addEventListener("agentsec:lang", () => {
    const localizedTitle = (window.AGENT_SEC_I18N && window.AGENT_SEC_I18N.getSlideTitle(cur)) || slides[cur].dataset.title || "";
    title.textContent = localizedTitle;
    updateFullscreenUI();
  });
})();
