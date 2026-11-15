/* =====================================================================
   SITE CONFIG — EDIT THIS ONE FILE TO REBRAND THE WHOLE SITE
   ---------------------------------------------------------------------
   - Change OWNER_NAME to your name: every "[Your Name]" across the
     site (titles, headers, share cards, phone widget) updates.
   - Edit `answers` to add/remove questions. Set `affiliate` to "none"
     (or null) to hide the product button on a card.
   - Edit `fallbackNews` for the offline / API-failure feed.
   ===================================================================== */
(function () {
  "use strict";

  var OWNER_NAME = "[Your Name]";

  window.SITE_CONFIG = {
    ownerName: OWNER_NAME,
    brandName: OWNER_NAME + "'s GTA VI Nexus",
    brandShort: "LEONIDA NEXUS",
    answersTitle: OWNER_NAME + "'s GTA VI Answers",
    siteUrl: "https://gtaa-vi.netlify.app",

    /* Launch: midnight (00:00) in EACH visitor's own local time zone */
    launch: { year: 2026, month: 11, day: 19, hour: 0, minute: 0 },

    /* News endpoint (Netlify Function) + auto refresh options in minutes */
    newsEndpoint: "/api/news",
    newsRefreshOptions: [5, 15],
    newsDefaultRefresh: 15,

    /* Official trailers via youtube-nocookie. Breakdown timestamps are
       approximate fan notes — edit `t` (seconds) and labels freely. */
    trailers: [
      {
        id: "QdBZY2fkU-0",
        title: "Trailer 1",
        breakdown: [
          { t: 0, label: "Cold open", note: "The story opens on Lucia in a correctional facility." },
          { t: 12, label: "Vice City skyline", note: "First wide look at the neon coastline and beaches." },
          { t: 30, label: "Leonida Keys", note: "Island chain, boats and turquoise shallows." },
          { t: 45, label: "Wildlife & swamps", note: "Grassrivers-style wetlands and gators." },
          { t: 60, label: "Social feed montage", note: "In-world viral clips parodying online culture." },
          { t: 75, label: "Nightlife", note: "Club scenes and late-night Vice City streets." },
          { t: 80, label: "The duo", note: "Jason and Lucia team up for a hold-up." }
        ]
      },
      {
        id: "VQRLujxTm3c",
        title: "Trailer 2",
        breakdown: [
          { t: 0, label: "Opening", note: "Jason introduced in the Leonida Keys." },
          { t: 20, label: "Lucia's story", note: "Lucia's background and motivations." },
          { t: 50, label: "Port & industry", note: "Port Gellhorn-style industrial zones." },
          { t: 75, label: "City life", note: "Vice City streets, beaches, and crowds." },
          { t: 100, label: "Heist energy", note: "High-stakes moments and getaways." },
          { t: 130, label: "Finale", note: "Closing montage and release card." }
        ]
      }
    ],

    /* Global launch converter: midnight in each of these zones */
    timezones: [
      { zone: "Pacific/Auckland", label: "New Zealand" },
      { zone: "Australia/Sydney", label: "Sydney" },
      { zone: "Asia/Tokyo", label: "Tokyo" },
      { zone: "Asia/Dhaka", label: "Dhaka" },
      { zone: "Asia/Kolkata", label: "India" },
      { zone: "Asia/Dubai", label: "Dubai" },
      { zone: "Europe/Berlin", label: "Berlin" },
      { zone: "Europe/London", label: "London" },
      { zone: "America/Sao_Paulo", label: "Sao Paulo" },
      { zone: "America/New_York", label: "New York / Leonida" },
      { zone: "America/Chicago", label: "Chicago" },
      { zone: "America/Los_Angeles", label: "Los Angeles" }
    ],

    /* Storage planner console presets (approx. usable space in GB) */
    consoles: [
      { id: "ps5", name: "PlayStation 5 (825 GB)", usable: 667 },
      { id: "ps5slim", name: "PlayStation 5 Slim (1 TB)", usable: 848 },
      { id: "ps5pro", name: "PlayStation 5 Pro (2 TB)", usable: 1860 },
      { id: "xss", name: "Xbox Series S (512 GB)", usable: 364 },
      { id: "xss1", name: "Xbox Series S (1 TB)", usable: 802 },
      { id: "xsx", name: "Xbox Series X (1 TB)", usable: 802 },
      { id: "xsx2", name: "Xbox Series X (2 TB)", usable: 1700 }
    ],
    gameSizeGB: 212,

    /* Knowledge base. Categories: Storage, Preload, Console, Gameplay, Languages, Online */
    answers: [
      {
        category: "Console",
        question: "When does GTA VI launch and on which consoles?",
        answer: "GTA VI launches on November 19, 2026, unlocking at midnight in your local time zone on PlayStation 5 and Xbox Series X|S. No PC date has been announced.",
        lastChecked: "2026-11-15",
        affiliate: "none"
      },
      {
        category: "Storage",
        question: "How much free storage space do I need?",
        answer: "Plan for at least 212 GB of free SSD space for the install plus day-one updates. Leaving an extra 10-20% free keeps patches from failing.",
        lastChecked: "2026-11-15",
        affiliate: { label: "Compatible Console SSD", url: "https://example.com/your-ssd-affiliate-link" }
      },
      {
        category: "Storage",
        question: "Can I play GTA VI from an external USB hard drive?",
        answer: "Current-gen games must run from internal SSD or an approved expansion (M.2 on PS5, Expansion Card on Xbox). A USB drive can only store the game, not run it.",
        lastChecked: "2026-11-15",
        affiliate: { label: "Xbox / PS5 Expansion Storage", url: "https://example.com/your-expansion-affiliate-link" }
      },
      {
        category: "Preload",
        question: "Can I pre-load the game before launch day?",
        answer: "Digital pre-orders can usually pre-load a few days before launch. Check the game's store page on your console — when pre-load opens, the download button appears there.",
        lastChecked: "2026-11-15",
        affiliate: "none"
      },
      {
        category: "Preload",
        question: "Why can't I start the game after pre-loading?",
        answer: "Pre-loaded games stay locked until midnight local time on launch day. Keep your console online at unlock so the license and day-one patch can activate.",
        lastChecked: "2026-11-15",
        affiliate: "none"
      },
      {
        category: "Console",
        question: "Will it run on PS4 or Xbox One?",
        answer: "No. GTA VI is a current-generation release for PS5 and Xbox Series X|S only.",
        lastChecked: "2026-11-15",
        affiliate: { label: "Current-Gen Console Bundle", url: "https://example.com/your-console-affiliate-link" }
      },
      {
        category: "Gameplay",
        question: "Who are the main characters?",
        answer: "The story follows Jason Duval and Lucia Caminos, a criminal duo in the fictional state of Leonida, which includes Vice City.",
        lastChecked: "2026-11-15",
        affiliate: "none"
      },
      {
        category: "Gameplay",
        question: "Any beginner tips for the first hour?",
        answer: "Follow the story missions first — they unlock map areas and mechanics. Save often at safehouses, and turn on subtitles if dialogue is fast.",
        lastChecked: "2026-11-15",
        affiliate: { label: "Pro Controller", url: "https://example.com/your-controller-affiliate-link" }
      },
      {
        category: "Languages",
        question: "What spoken and subtitle languages are included?",
        answer: "Spoken dialogue is English only, while menus and subtitles support 13 languages across major regions.",
        lastChecked: "2026-11-15",
        affiliate: { label: "Recommended Gaming Headset", url: "https://example.com/your-headset-affiliate-link" }
      },
      {
        category: "Online",
        question: "Is online multiplayer active on launch day?",
        answer: "No. GTA VI launches as a single-player story release, with online multiplayer planned separately later.",
        lastChecked: "2026-11-15",
        affiliate: "none"
      },
      {
        category: "Online",
        question: "Do I need PlayStation Plus or Game Pass Core to play?",
        answer: "Single-player does not require a subscription. Online modes on console normally require PS Plus or Game Pass Core / Ultimate when they arrive.",
        lastChecked: "2026-11-15",
        affiliate: { label: "Membership Gift Card", url: "https://example.com/your-membership-affiliate-link" }
      }
    ],

    affiliateDisclosure: "Some links on this site are affiliate links. If you buy through them, " + OWNER_NAME + " may earn a small commission at no extra cost to you. Recommendations are independent.",

    /* Shown when the live news function is offline or fails */
    fallbackNews: [
      {
        title: "GTA VI release date locked for November 19, 2026",
        source: "Rockstar Newswire",
        date: "2026-11-15",
        summary: "Launch is set for PlayStation 5 and Xbox Series X|S, unlocking at midnight local time.",
        link: "https://www.rockstargames.com/newswire"
      },
      {
        title: "Official language list: English voice, 13 subtitle languages",
        source: "PlayStation Support",
        date: "2026-11-15",
        summary: "Store listings confirm English-only voice acting with 13 supported subtitle and menu languages.",
        link: "https://www.playstation.com"
      },
      {
        title: "Storage check: plan for 212 GB free before launch",
        source: "Xbox Wire",
        date: "2026-11-14",
        summary: "Store install-size listings point to a large footprint, so clear space before pre-load opens.",
        link: "https://news.xbox.com"
      },
      {
        title: "Trailers remain the best look at Leonida",
        source: "Rockstar Games YouTube",
        date: "2026-11-10",
        summary: "Both official trailers are available on Rockstar's official channel and in this site's Trailer Theater.",
        link: "https://www.youtube.com/@RockstarGames"
      }
    ],

    /* Default tracker seed — visitors can add/remove their own */
    trackerSeed: {
      story: ["Prologue complete", "First heist planned", "Reach Vice City", "Midgame finale", "Final mission"],
      side: ["First side hustle", "Street race win", "Bounty contract", "Property purchased"],
      collectibles: ["Hidden package #1", "Hidden package #2", "Photo spot: Ocean beach", "Signal jammer"],
      vehicles: ["Sports coupe", "Airboat", "Speedboat", "Motorbike", "Helicopter"]
    }
  };

  /* Pre-apply saved theme before first paint (no flash) */
  try {
    var t = localStorage.getItem("nexus.theme");
    if (t) document.documentElement.setAttribute("data-theme", t);
  } catch (e) { /* storage blocked — default theme */ }
})();
