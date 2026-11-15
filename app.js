/* ============================================================
   1. CONFIGURATION — EDIT YOUR NAME, Q&As & NEWS ENDPOINT HERE
   ============================================================ */
const SITE_CONFIG = {
  brandTitle: "LEONIDA HUB",
  brandSub: "[Your Name]'s GTA VI Portal",
  answersTitle: "[Your Name]'s GTA VI Answers",
  liveRssEndpoint:
    "https://api.rss2json.com/v1/api.json?rss_url=" +
    encodeURIComponent(
      'https://news.google.com/rss/search?q=GTA+6+OR+"GTA+VI"&hl=en-US&gl=US&ceid=US:en'
    )
};

const QA_ITEMS = [
  {
    question: "When does GTA VI launch and on which consoles?",
    answer:
      "GTA VI launches at midnight on November 19, 2026 in each player's local time zone on PlayStation 5 and Xbox Series X|S (plus Xbox Cloud Gaming). No PC date has been announced yet.",
    lastChecked: "November 15, 2026",
    productLink: "none",
    productLabel: "View Product"
  },
  {
    question: "How much free console storage space is required?",
    answer:
      "Plan for at least 212 GB of free SSD storage for the initial installation plus Day One updates.",
    lastChecked: "November 15, 2026",
    productLink: "https://example.com/your-ssd-affiliate-link",
    productLabel: "Compatible Console SSD"
  },
  {
    question: "Is online multiplayer active on launch day?",
    answer:
      "No. GTA VI launches on November 19 as a single-player story release, with online multiplayer planned separately later.",
    lastChecked: "November 15, 2026",
    productLink: "none",
    productLabel: "View Product"
  },
  {
    question: "What spoken and subtitle languages are included?",
    answer:
      "Spoken dialogue is English-only, while menus and subtitles support 13 languages across major global regions.",
    lastChecked: "November 15, 2026",
    productLink: "https://example.com/your-headset-affiliate-link",
    productLabel: "Recommended Gaming Headset"
  }
];

const VERIFIED_FALLBACK_NEWS = [
  {
    title: "Rockstar North Confirms Empathy Mechanics, Relationships & Gold Status",
    source: "The Guardian / IGN",
    date: "Nov 14–15, 2026",
    summary:
      "Rockstar North leaders confirmed Jason and Lucia start with low-end crimes, can go on dates, and that GTA VI went gold roughly a month ago.",
    link: "https://www.ign.com"
  },
  {
    title: "Official Language List: 13 Subtitle Languages, English-Only Voice",
    source: "PlayStation Support / Rockstar Store",
    date: "Nov 15, 2026",
    summary:
      "Official support listings confirm spoken dialogue in English only with 13 supported subtitle languages.",
    link: "https://support.playstation.com"
  },
  {
    title: "EA Jokes About GTA VI's 212GB File Size Inside Madden NFL 27",
    source: "Push Square / EA Sports",
    date: "Nov 15, 2026",
    summary:
      "EA added an in-game message inside Madden NFL 27 teasing an update and asking players not to uninstall it for GTA VI storage.",
    link: "https://www.pushsquare.com"
  },
  {
    title: "Physical Code-in-Box Buyers Flag Missing Codes & Flashlight Checks",
    source: "GamesRadar+ / Push Square",
    date: "Nov 14, 2026",
    summary:
      "Early physical buyers reported missing codes in sealed boxes while unboxing tests showed included posters shield codes from flashlights.",
    link: "https://www.gamesradar.com"
  },
  {
    title: "GTA V Leaves PS Plus Extra/Premium on November 17",
    source: "Sony PS Plus Notice",
    date: "Nov 15, 2026",
    summary:
      "GTA V exits the PS Plus catalog two days ahead of GTA VI's November 19 midnight rollout.",
    link: "https://www.playstation.com"
  }
];

/* ============================================================
   2. CODED SVG LOGOS & VECTOR ICONS (ZERO EMOJIS)
   ============================================================ */
const SVG_BRAND = `
<svg class="brand-emblem" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs>
    <linearGradient id="viGrad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="var(--accent-1)"/>
      <stop offset="100%" stop-color="var(--accent-2)"/>
    </linearGradient>
  </defs>
  <polygon points="8,4 40,4 45,14 40,44 8,44 3,34" fill="url(#viGrad)" fill-opacity="0.16" stroke="url(#viGrad)" stroke-width="2.2"/>
  <path d="M13 15L19.5 33L26 15" stroke="url(#viGrad)" stroke-width="3.2" stroke-linecap="square"/>
  <path d="M32 15V33" stroke="var(--text-main)" stroke-width="3.2" stroke-linecap="square"/>
</svg>`;

const ICONS = {
  portal: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15.5 14"/></svg>`,
  answers: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
  tracker: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`,
  news: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"/><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"/><circle cx="12" cy="12" r="2"/><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"/><path d="M19.1 4.9C23 8.8 23 15.2 19.1 19.1"/></svg>`,
  arrow: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  sync: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>`,
  trash: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`
};

/* ============================================================
   3. SAFE STORAGE HELPER
   ============================================================ */
let storageBlocked = false;
function safeGet(key, fallback) {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) {
    storageBlocked = true;
    return fallback;
  }
}
function safeSet(key, val) {
  try {
    window.localStorage.setItem(key, JSON.stringify(val));
  } catch (e) {
    storageBlocked = true;
    const alertEl = document.getElementById("storage-alert");
    if (alertEl) alertEl.style.display = "block";
  }
}

/* ============================================================
   4. 21ST.DEV INTERACTIVE FX ENGINE (CANVAS + SPOTLIGHT + TILT)
   ============================================================ */
function init21stEffects() {
  // Global cursor spotlight on .glow-card elements
  document.addEventListener("pointermove", e => {
    document.querySelectorAll(".glow-card").forEach(card => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      card.style.setProperty("--my", `${e.clientY - rect.top}px`);
    });
  });

  // 3D Tilt effect on [data-tilt] cards (desktop pointers)
  if (window.matchMedia("(pointer: fine)").matches) {
    document.querySelectorAll("[data-tilt]").forEach(el => {
      el.addEventListener("pointermove", e => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(900px) rotateX(${(-y * 7).toFixed(2)}deg) rotateY(${(x * 7).toFixed(2)}deg) translateY(-3px)`;
      });
      el.addEventListener("pointerleave", () => {
        el.style.transform = "";
      });
    });

    // Magnetic pull on .btn-primary
    document.querySelectorAll(".btn-primary").forEach(btn => {
      btn.addEventListener("pointermove", e => {
        const r = btn.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) * 0.14;
        const dy = (e.clientY - (r.top + r.height / 2)) * 0.14;
        btn.style.transform = `translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px)`;
      });
      btn.addEventListener("pointerleave", () => {
        btn.style.transform = "";
      });
    });
  }

  // Interactive Particle & Vertical Neon Beam Canvas
  const canvas = document.getElementById("fx-canvas");
  if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const ctx = canvas.getContext("2d");
  let w = 0, h = 0;
  const pointer = { x: -999, y: -999 };
  const isMobile = window.innerWidth < 700;
  const count = isMobile ? 28 : 56;
  const particles = [];
  const beams = [];

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);
  window.addEventListener("pointermove", e => {
    pointer.x = e.clientX;
    pointer.y = e.clientY;
  });

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      r: Math.random() * 1.8 + 0.7,
      alt: i % 2 === 0
    });
  }

  for (let i = 0; i < (isMobile ? 4 : 7); i++) {
    beams.push({
      x: Math.random() * w,
      y: Math.random() * h,
      len: 90 + Math.random() * 140,
      speed: 1.1 + Math.random() * 1.6,
      alt: i % 2 === 0
    });
  }

  function frame() {
    ctx.clearRect(0, 0, w, h);
    const styles = getComputedStyle(document.documentElement);
    const rgb1 = styles.getPropertyValue("--rgb-1").trim() || "255, 42, 138";
    const rgb2 = styles.getPropertyValue("--rgb-2").trim() || "0, 229, 255";

    // Draw rising neon beams
    beams.forEach(b => {
      b.y -= b.speed;
      if (b.y + b.len < 0) {
        b.y = h + Math.random() * 120;
        b.x = Math.random() * w;
      }
      const grad = ctx.createLinearGradient(b.x, b.y, b.x, b.y + b.len);
      const col = b.alt ? rgb1 : rgb2;
      grad.addColorStop(0, `rgba(${col}, 0)`);
      grad.addColorStop(0.5, `rgba(${col}, 0.28)`);
      grad.addColorStop(1, `rgba(${col}, 0)`);
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.moveTo(b.x, b.y);
      ctx.lineTo(b.x, b.y + b.len);
      ctx.stroke();
    });

    // Draw interactive floating particles
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = w;
      if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h;
      if (p.y > h) p.y = 0;

      const dx = p.x - pointer.x;
      const dy = p.y - pointer.y;
      const dist = Math.hypot(dx, dy);
      if (dist < 110 && dist > 0) {
        p.x += (dx / dist) * 0.9;
        p.y += (dy / dist) * 0.9;
      }

      const col = p.alt ? rgb1 : rgb2;
      ctx.fillStyle = `rgba(${col}, 0.65)`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

/* ============================================================
   5. SHARED HUD SHELL, FLOATING DOCK & PAGE TRANSITIONS
   ============================================================ */
function mountBackdropAndHeader(activePage) {
  const backdrop = document.createElement("div");
  backdrop.innerHTML = `
    <div class="liquid-scene" aria-hidden="true">
      <div class="liquid-blob blob-a"></div>
      <div class="liquid-blob blob-b"></div>
      <div class="liquid-blob blob-c"></div>
    </div>
    <canvas id="fx-canvas" aria-hidden="true"></canvas>
    <div class="hud-grid-overlay" aria-hidden="true"></div>
    <svg class="skyline-backdrop" viewBox="0 0 1440 220" preserveAspectRatio="none" aria-hidden="true">
      <path fill="currentColor" d="M0,220 L0,165 L55,165 L55,115 L95,115 L95,155 L140,155 L140,85 L195,85 L195,148 L245,148 L245,120 L290,120 L290,170 L355,170 L355,62 L410,62 L410,145 L465,145 L465,105 L520,105 L520,162 L610,162 L610,92 L670,92 L670,150 L740,150 L740,48 L795,48 L795,138 L860,138 L860,110 L920,110 L920,164 L995,164 L995,74 L1055,74 L1055,142 L1130,142 L1130,96 L1190,96 L1190,158 L1265,158 L1265,112 L1335,112 L1335,165 L1440,165 L1440,220 Z"/>
    </svg>
    <div id="page-curtain" class="page-curtain"></div>
    <nav class="floating-dock" aria-label="Quick dock navigation">
      <a href="index.html" data-nav title="Launch Portal" class="dock-item ${activePage === "countdown" ? "active" : ""}">${ICONS.portal}</a>
      <a href="answers.html" data-nav title="Day One Answers" class="dock-item ${activePage === "answers" ? "active" : ""}">${ICONS.answers}</a>
      <a href="tracker.html" data-nav title="100% Tracker" class="dock-item ${activePage === "tracker" ? "active" : ""}">${ICONS.tracker}</a>
      <a href="news.html" data-nav title="Vice Wire News" class="dock-item ${activePage === "news" ? "active" : ""}">${ICONS.news}</a>
    </nav>
  `;
  document.body.prepend(backdrop);

  const headerMount = document.getElementById("hud-header-mount");
  if (headerMount) {
    headerMount.innerHTML = `
      <header class="hud-header">
        <div class="hud-top-row">
          <a href="index.html" class="brand-link" data-nav>
            ${SVG_BRAND}
            <div>
              <div class="brand-title display-font" id="hud-brand-title"></div>
              <span class="brand-sub" id="hud-brand-sub"></span>
            </div>
          </a>
          <select id="theme-picker" class="theme-picker" aria-label="Select Visual Theme">
            <option value="vice">Vice Liquid (GTA VI)</option>
            <option value="los-santos">Los Santos Gold (GTA V)</option>
            <option value="noir">Leonida Midnight Noir</option>
            <option value="frost">Ocean Drive Frost</option>
          </select>
        </div>
        <nav class="hud-nav" aria-label="Primary pages">
          <a href="index.html" data-nav class="nav-item ${activePage === "countdown" ? "active" : ""}">${ICONS.portal}<span>Launch Portal</span></a>
          <a href="answers.html" data-nav class="nav-item ${activePage === "answers" ? "active" : ""}">${ICONS.answers}<span>Answers</span></a>
          <a href="tracker.html" data-nav class="nav-item ${activePage === "tracker" ? "active" : ""}">${ICONS.tracker}<span>100% Tracker</span></a>
          <a href="news.html" data-nav class="nav-item ${activePage === "news" ? "active" : ""}">${ICONS.news}<span>Vice Wire</span></a>
        </nav>
      </header>
    `;
    document.getElementById("hud-brand-title").textContent = SITE_CONFIG.brandTitle;
    document.getElementById("hud-brand-sub").textContent = SITE_CONFIG.brandSub;
  }

  const savedTheme = safeGet("gta_vi_theme_v2", "vice");
  document.documentElement.setAttribute("data-theme", savedTheme);
  const picker = document.getElementById("theme-picker");
  if (picker) {
    picker.value = savedTheme;
    picker.addEventListener("change", () => {
      document.documentElement.setAttribute("data-theme", picker.value);
      safeSet("gta_vi_theme_v2", picker.value);
    });
  }

  document.addEventListener("click", e => {
    const link = e.target.closest("a[data-nav]");
    if (!link) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const href = link.getAttribute("href");
    if (!href || href.startsWith("http")) return;
    e.preventDefault();
    const curtain = document.getElementById("page-curtain");
    if (curtain) {
      curtain.classList.add("active");
      setTimeout(() => { window.location.href = href; }, 220);
    } else {
      window.location.href = href;
    }
  });
}

/* ============================================================
   6. PAGE INITIALIZERS
   ============================================================ */
function initCountdownPage() {
  const target = new Date(2026, 10, 19, 0, 0, 0);
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const tzEl = document.getElementById("tz-label");
    if (tz && tzEl) tzEl.textContent = `Synchronized to local time zone: ${tz}`;
  } catch (e) {}

  const pad = n => String(n).padStart(2, "0");
  function updateClock() {
    const diff = target.getTime() - Date.now();
    if (diff <= 0) {
      ["cd-d", "cd-h", "cd-m", "cd-s"].forEach(id => {
        document.getElementById(id).textContent = "00";
      });
      document.getElementById("live-banner").style.display = "block";
      return;
    }
    const sec = Math.floor(diff / 1000);
    document.getElementById("cd-d").textContent = pad(Math.floor(sec / 86400));
    document.getElementById("cd-h").textContent = pad(Math.floor((sec % 86400) / 3600));
    document.getElementById("cd-m").textContent = pad(Math.floor((sec % 3600) / 60));
    document.getElementById("cd-s").textContent = pad(sec % 60);
  }
  updateClock();
  setInterval(updateClock, 1000);

  const checks = safeGet("gta_vi_checklist_v2", {});
  document.querySelectorAll("[data-check]").forEach(box => {
    const key = box.getAttribute("data-check");
    if (checks[key]) box.checked = true;
    box.addEventListener("change", () => {
      checks[key] = box.checked;
      safeSet("gta_vi_checklist_v2", checks);
    });
  });
}

function initAnswersPage() {
  const heading = document.getElementById("answers-page-title");
  if (heading) heading.textContent = SITE_CONFIG.answersTitle;

  const search = document.getElementById("qa-search");
  const list = document.getElementById("qa-list");
  const count = document.getElementById("qa-count");

  function render(query) {
    const q = query.trim().toLowerCase();
    const filtered = QA_ITEMS.filter(item =>
      item.question.toLowerCase().includes(q) || item.answer.toLowerCase().includes(q)
    );
    count.textContent = `Displaying ${filtered.length} of ${QA_ITEMS.length} verified entries`;
    list.innerHTML = "";

    if (filtered.length === 0) {
      const empty = document.createElement("div");
      empty.className = "card glass glow-card";
      empty.textContent = "No matching entries found. Try another keyword.";
      list.appendChild(empty);
      return;
    }

    filtered.forEach(item => {
      const card = document.createElement("article");
      card.className = "card glass glow-card";

      const h3 = document.createElement("h3");
      h3.textContent = item.question;

      const p = document.createElement("p");
      p.textContent = item.answer;

      const meta = document.createElement("div");
      meta.className = "meta-row";

      const checked = document.createElement("span");
      checked.textContent = `Last checked: ${item.lastChecked}`;
      meta.appendChild(checked);

      if (item.productLink && item.productLink.toLowerCase() !== "none") {
        const a = document.createElement("a");
        a.className = "btn-primary";
        a.style.padding = "9px 15px";
        a.style.fontSize = "0.82rem";
        a.href = item.productLink;
        a.target = "_blank";
        a.rel = "noopener noreferrer sponsored";
        a.textContent = item.productLabel || "Recommended Gear";
        meta.appendChild(a);
      }

      card.append(h3, p, meta);
      list.appendChild(card);
    });
  }

  search.addEventListener("input", e => render(e.target.value));
  render("");
}

function initTrackerPage() {
  const DEFAULT_DATA = [
    { id: "story", title: "Story Missions", items: [
      { id: "s1", title: "Prologue / Opening Chapter", done: false, note: "" },
      { id: "s2", title: "First Major Dual-Protagonist Heist", done: false, note: "" }
    ]},
    { id: "side", title: "Side Jobs", items: [
      { id: "j1", title: "First Street Job / Hustle", done: false, note: "" }
    ]},
    { id: "collectibles", title: "Collectibles", items: [
      { id: "c1", title: "Leonida Hidden Landmarks", done: false, note: "" }
    ]},
    { id: "vehicles", title: "Vehicles", items: [
      { id: "v1", title: "First Upgraded Personal Vehicle", done: false, note: "" }
    ]}
  ];

  let data = safeGet("gta_vi_tracker_v2", JSON.parse(JSON.stringify(DEFAULT_DATA)));
  if (storageBlocked) {
    const alertEl = document.getElementById("storage-alert");
    if (alertEl) alertEl.style.display = "block";
  }

  function updateBars() {
    let totalDone = 0, totalItems = 0;
    data.forEach(sec => {
      const done = sec.items.filter(i => i.done).length;
      const count = sec.items.length;
      totalDone += done;
      totalItems += count;
      const pct = count === 0 ? 0 : Math.round((done / count) * 100);
      const pctEl = document.getElementById(`pct-${sec.id}`);
      const barEl = document.getElementById(`bar-${sec.id}`);
      if (pctEl) pctEl.textContent = `${pct}% (${done}/${count})`;
      if (barEl) barEl.style.width = `${pct}%`;
    });
    const overall = totalItems === 0 ? 0 : Math.round((totalDone / totalItems) * 100);
    document.getElementById("overall-pct").textContent = `${overall}% (${totalDone}/${totalItems})`;
    document.getElementById("overall-bar").style.width = `${overall}%`;
  }

  function render() {
    const mount = document.getElementById("tracker-mount");
    mount.innerHTML = "";

    data.forEach(sec => {
      const card = document.createElement("section");
      card.className = "card glass glow-card";

      const head = document.createElement("div");
      head.className = "head-split";
      const h2 = document.createElement("h2");
      h2.className = "display-font";
      h2.textContent = sec.title;
      const pct = document.createElement("span");
      pct.className = "pct-text";
      pct.id = `pct-${sec.id}`;
      head.append(h2, pct);

      const track = document.createElement("div");
      track.className = "bar-track";
      const fill = document.createElement("div");
      fill.className = "bar-fill";
      fill.id = `bar-${sec.id}`;
      track.appendChild(fill);

      const form = document.createElement("form");
      form.className = "add-form";
      const input = document.createElement("input");
      input.className = "input-box";
      input.style.padding = "10px 12px";
      input.placeholder = `Add new entry to ${sec.title}...`;
      const btn = document.createElement("button");
      btn.type = "submit";
      btn.className = "btn-primary";
      btn.style.padding = "10px 16px";
      btn.textContent = "Add Item";
      form.append(input, btn);

      form.addEventListener("submit", e => {
        e.preventDefault();
        const title = input.value.trim();
        if (!title) return;
        sec.items.push({ id: `${sec.id}-${Date.now()}`, title, done: false, note: "" });
        safeSet("gta_vi_tracker_v2", data);
        render();
      });

      card.append(head, track, form);

      const ul = document.createElement("ul");
      ul.className = "tracker-list";

      sec.items.forEach(item => {
        const li = document.createElement("li");
        li.className = `tracker-row${item.done ? " done" : ""}`;

        const cb = document.createElement("input");
        cb.type = "checkbox";
        cb.style.width = "20px";
        cb.style.height = "20px";
        cb.style.accentColor = "var(--success)";
        cb.checked = item.done;
        cb.addEventListener("change", () => {
          item.done = cb.checked;
          li.className = `tracker-row${item.done ? " done" : ""}`;
          safeSet("gta_vi_tracker_v2", data);
          updateBars();
        });

        const main = document.createElement("div");
        main.className = "tracker-main";
        const title = document.createElement("span");
        title.className = "tracker-title";
        title.textContent = item.title;

        const note = document.createElement("input");
        note.className = "note-box";
        note.value = item.note || "";
        note.placeholder = "Add note...";
        note.addEventListener("input", () => {
          item.note = note.value;
          safeSet("gta_vi_tracker_v2", data);
        });
        main.append(title, note);

        const del = document.createElement("button");
        del.type = "button";
        del.className = "btn-ghost";
        del.style.padding = "7px 9px";
        del.innerHTML = ICONS.trash;
        del.setAttribute("aria-label", `Delete ${item.title}`);
        del.addEventListener("click", () => {
          sec.items = sec.items.filter(i => i.id !== item.id);
          safeSet("gta_vi_tracker_v2", data);
          render();
        });

        li.append(cb, main, del);
        ul.appendChild(li);
      });

      card.appendChild(ul);
      mount.appendChild(card);
    });

    updateBars();
  }

  render();
}

function initNewsPage() {
  const list = document.getElementById("news-list");
  const status = document.getElementById("sync-status");
  const rate = document.getElementById("refresh-rate");
  const btn = document.getElementById("sync-now");
  btn.innerHTML = `${ICONS.sync}<span>Sync Now</span>`;
  let timer = null;

  function render(items) {
    list.innerHTML = "";
    items.forEach(item => {
      const card = document.createElement("article");
      card.className = "card glass glow-card";

      const tag = document.createElement("span");
      tag.className = "tag-chip";
      tag.textContent = `${item.source || "Wire"} | ${item.date || "Recent"}`;

      const h3 = document.createElement("h3");
      h3.textContent = item.title;

      const p = document.createElement("p");
      p.className = "muted";
      p.textContent = item.summary || "Open the source report for full details.";

      const link = document.createElement("a");
      link.className = "btn-ghost";
      link.href = item.link;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.innerHTML = `<span>Read Source</span>${ICONS.arrow}`;

      card.append(tag, h3, p, link);
      list.appendChild(card);
    });
  }

  async function sync() {
    status.textContent = "Synchronizing with Google News RSS...";
    try {
      const res = await fetch(SITE_CONFIG.liveRssEndpoint);
      if (!res.ok) throw new Error("Network error");
      const data = await res.json();
      if (data && Array.isArray(data.items) && data.items.length > 0) {
        const items = data.items.slice(0, 10).map(it => {
          const clean = (it.description || "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
          return {
            title: it.title,
            source: it.author || "Google News",
            date: it.pubDate ? new Date(it.pubDate).toLocaleString() : "Live",
            summary: clean.slice(0, 180) + (clean.length > 180 ? "..." : ""),
            link: it.link
          };
        });
        render(items);
        status.textContent = `Live feed synced at ${new Date().toLocaleTimeString()}`;
        return;
      }
      throw new Error("Empty feed");
    } catch (err) {
      render(VERIFIED_FALLBACK_NEWS);
      status.textContent = "Verified local cache active (live bridge busy or offline)";
    }
  }

  function resetTimer() {
    if (timer) clearInterval(timer);
    const ms = Number(rate.value);
    if (ms > 0) timer = setInterval(sync, ms);
  }

  btn.addEventListener("click", sync);
  rate.addEventListener("change", resetTimer);

  render(VERIFIED_FALLBACK_NEWS);
  sync();
  resetTimer();
}

/* ============================================================
   7. BOOTSTRAP
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;
  mountBackdropAndHeader(page);
  if (page === "countdown") initCountdownPage();
  if (page === "answers") initAnswersPage();
  if (page === "tracker") initTrackerPage();
  if (page === "news") initNewsPage();
  init21stEffects();
});
