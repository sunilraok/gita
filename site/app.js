(function () {
  const DATA = window.GITA_DATA;
  const ILL = window.GITA_ILLUSTRATIONS;

  const UI = {
    en: {
      siteTitle: "Gita for Everyday Life",
      navAll: "All shlokas",
      navAbout: "About",
      settings: "Settings",
      language: "Language",
      scriptLabel: "Show shlokas in",
      scriptAuto: "Automatic (matches language)",
      scriptDevanagari: "Devanagari (original Sanskrit)",
      scriptRoman: "English letters",
      scriptKannada: "Kannada letters",
      done: "Done",
      heroTitle: "Timeless wisdom for everyday life",
      heroSub: "21 widely loved shlokas of the Bhagavad Gita — with simple meanings, stories and ideas for students, homes and workplaces.",
      start: "Start the 21-day journey",
      today: "Shloka of the day",
      read: "Read more",
      all: "All",
      day: "Day",
      bg: "Bhagavad Gita",
      meaning: "Meaning",
      words: "Word by word",
      inLife: "In everyday life",
      student: "For students",
      home: "At home",
      work: "At work",
      story: "Story",
      link: "The connection",
      misreading: "What it does not mean",
      practice: "Try this today",
      related: "Related shlokas",
      sources: "Sources and further reading",
      srcText: "Sanskrit text, transliteration and word meanings",
      srcDataset: "gita/gita dataset (public domain)",
      srcRead: "Read this verse with more translations and commentaries",
      srcCompare: "Compare with public-domain English translations",
      srcStory: "Story",
      srcAlso: "Also mentioned",
      meaningNote: "Meaning written in simple words for this project.",
      compare: "Compare translations",
      thisSite: "on this site",
      prev: "Previous",
      next: "Next",
      picture: "The idea in a picture",
      footer: "Sanskrit text from the public-domain gita/gita dataset. Meanings and applications are written for this project. Stories are labelled by source.",
      notFound: "Shloka not found.",
    },
    kn: {
      siteTitle: "ನಿತ್ಯ ಜೀವನಕ್ಕೆ ಗೀತೆ",
      navAll: "ಎಲ್ಲಾ ಶ್ಲೋಕಗಳು",
      navAbout: "ಕುರಿತು",
      settings: "ಆಯ್ಕೆಗಳು",
      language: "ಭಾಷೆ",
      scriptLabel: "ಶ್ಲೋಕಗಳನ್ನು ಈ ಲಿಪಿಯಲ್ಲಿ ತೋರಿಸಿ",
      scriptAuto: "ಸ್ವಯಂಚಾಲಿತ (ಭಾಷೆಗೆ ತಕ್ಕಂತೆ)",
      scriptDevanagari: "ದೇವನಾಗರಿ (ಮೂಲ ಸಂಸ್ಕೃತ)",
      scriptRoman: "ಇಂಗ್ಲಿಷ್ ಅಕ್ಷರಗಳು",
      scriptKannada: "ಕನ್ನಡ ಅಕ್ಷರಗಳು",
      done: "ಆಯಿತು",
      heroTitle: "ನಿತ್ಯ ಜೀವನಕ್ಕೆ ಕಾಲಾತೀತ ಜ್ಞಾನ",
      heroSub: "ಭಗವದ್ಗೀತೆಯ 21 ಜನಪ್ರಿಯ ಶ್ಲೋಕಗಳು — ಸರಳ ಅರ್ಥ, ಕಥೆಗಳು ಮತ್ತು ವಿದ್ಯಾರ್ಥಿಗಳು, ಮನೆ ಹಾಗೂ ಕೆಲಸದ ಸ್ಥಳಕ್ಕೆ ಉಪಯುಕ್ತ ವಿಚಾರಗಳೊಂದಿಗೆ.",
      start: "21 ದಿನಗಳ ಪಯಣ ಆರಂಭಿಸಿ",
      today: "ಇಂದಿನ ಶ್ಲೋಕ",
      read: "ಮುಂದೆ ಓದಿ",
      all: "ಎಲ್ಲಾ",
      day: "ದಿನ",
      bg: "ಭಗವದ್ಗೀತೆ",
      meaning: "ಅರ್ಥ",
      words: "ಪದಶಃ ಅರ್ಥ (ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ)",
      inLife: "ನಿತ್ಯ ಜೀವನದಲ್ಲಿ",
      student: "ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ",
      home: "ಮನೆಯಲ್ಲಿ",
      work: "ಕೆಲಸದಲ್ಲಿ",
      story: "ಕಥೆ",
      link: "ಶ್ಲೋಕದೊಂದಿಗೆ ಸಂಬಂಧ",
      misreading: "ಇದರ ಅರ್ಥ ಇದಲ್ಲ",
      practice: "ಇಂದು ಇದನ್ನು ಪ್ರಯತ್ನಿಸಿ",
      related: "ಸಂಬಂಧಿತ ಶ್ಲೋಕಗಳು",
      sources: "ಆಧಾರಗಳು ಮತ್ತು ಹೆಚ್ಚಿನ ಓದು",
      srcText: "ಸಂಸ್ಕೃತ ಪಠ್ಯ, ಲಿಪ್ಯಂತರ ಮತ್ತು ಪದಶಃ ಅರ್ಥ",
      srcDataset: "gita/gita ದತ್ತಾಂಶ (ಸಾರ್ವಜನಿಕ ಡೊಮೇನ್)",
      srcRead: "ಈ ಶ್ಲೋಕವನ್ನು ಇನ್ನಷ್ಟು ಅನುವಾದ ಮತ್ತು ವ್ಯಾಖ್ಯಾನಗಳೊಂದಿಗೆ ಓದಿ",
      srcCompare: "ಸಾರ್ವಜನಿಕ ಡೊಮೇನ್‌ನ ಇಂಗ್ಲಿಷ್ ಅನುವಾದಗಳೊಂದಿಗೆ ಹೋಲಿಸಿ",
      srcStory: "ಕಥೆ",
      srcAlso: "ಉಲ್ಲೇಖಿಸಿದ ಇತರ ಶ್ಲೋಕಗಳು",
      meaningNote: "ಅರ್ಥವನ್ನು ಈ ಯೋಜನೆಗಾಗಿ ಸರಳ ಪದಗಳಲ್ಲಿ ಬರೆಯಲಾಗಿದೆ.",
      compare: "ಅನುವಾದಗಳನ್ನು ಹೋಲಿಸಿ",
      thisSite: "ಈ ಜಾಲತಾಣದಲ್ಲಿ",
      prev: "ಹಿಂದಿನ",
      next: "ಮುಂದಿನ",
      picture: "ಚಿತ್ರದಲ್ಲಿ ವಿಚಾರ",
      footer: "ಸಂಸ್ಕೃತ ಪಠ್ಯ ಸಾರ್ವಜನಿಕ ಡೊಮೇನ್‌ನ gita/gita ದತ್ತಾಂಶದಿಂದ. ಅರ್ಥ ಮತ್ತು ಅನ್ವಯಗಳನ್ನು ಈ ಯೋಜನೆಗಾಗಿ ಬರೆಯಲಾಗಿದೆ. ಕಥೆಗಳ ಮೂಲವನ್ನು ಸೂಚಿಸಲಾಗಿದೆ.",
      notFound: "ಶ್ಲೋಕ ಸಿಗಲಿಲ್ಲ.",
    },
  };

  const SCRIPT_CHIPS = [
    { id: "devanagari", label: "देवनागरी" },
    { id: "roman", label: "English" },
    { id: "kannada", label: "ಕನ್ನಡ" },
  ];

  // ---- settings -----------------------------------------------------------
  const store = {
    get(k) { try { return localStorage.getItem("gita." + k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem("gita." + k, v); } catch (e) { /* ignore */ } },
  };
  const defaultLang = (navigator.language || "").toLowerCase().startsWith("kn") ? "kn" : "en";
  const state = {
    lang: store.get("lang") || defaultLang,
    script: store.get("script") || "auto",
  };
  const effectiveScript = () =>
    state.script === "auto" ? (state.lang === "kn" ? "kannada" : "roman") : state.script;

  const t = (k) => UI[state.lang][k] || UI.en[k] || k;

  // ---- helpers ------------------------------------------------------------
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const rich = (s) => esc(s).replace(/\*([^*]+)\*/g, "<em>$1</em>");
  const byRef = Object.fromEntries(DATA.shlokas.map((s) => [s.ref, s]));
  const themeName = (id) => (DATA.themes.find((x) => x.id === id) || {})[state.lang] || id;
  const L = (s) => s[state.lang] || s.en;

  function verseText(v, script) {
    return v[script] || v.roman;
  }

  function shlokaBlock(s, { compact = false } = {}) {
    const script = effectiveScript();
    const verses = s.verses
      .map((v) => {
        const text = compact ? verseText(v, script).split("\n")[0].replace(/\s*[।॥]\s*$/, "") : verseText(v, script);
        return `<p class="verse script-${script}" lang="${script === "roman" ? "sa-Latn" : script === "kannada" ? "sa-Knda" : "sa-Deva"}">${esc(text).replace(/\n/g, "<br>")}</p>`;
      })
      .join("");
    return verses;
  }

  function scriptChips() {
    const cur = effectiveScript();
    return `<div class="chips" role="group" aria-label="${esc(t("scriptLabel"))}">${SCRIPT_CHIPS.map(
      (c) => `<button type="button" class="chip${c.id === cur ? " active" : ""}" data-script="${c.id}" aria-pressed="${c.id === cur}">${c.label}</button>`
    ).join("")}</div>`;
  }

  const ICONS = {
    student: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M4 18 24 8l20 10-20 10Z" fill="#1B3A6B"/><path d="M12 22v10c0 4 24 4 24 0V22l-12 6Z" fill="#1E7B6E"/><path d="M42 19v12" stroke="#C9A227" stroke-width="3"/><circle cx="42" cy="33" r="3" fill="#C9A227"/></svg>`,
    home: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M6 24 24 8l18 16" fill="none" stroke="#9E3B2A" stroke-width="4" stroke-linejoin="round"/><path d="M11 22v18h26V22" fill="#F6C27A"/><rect x="20" y="28" width="8" height="12" fill="#9E3B2A"/><path d="M24 20c-3-3-7 0-4 3l4 3 4-3c3-3-1-6-4-3Z" fill="#D9687A"/></svg>`,
    work: `<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="6" y="16" width="36" height="24" rx="4" fill="#1B3A6B"/><path d="M18 16v-4h12v4" fill="none" stroke="#1B3A6B" stroke-width="3"/><rect x="6" y="24" width="36" height="4" fill="#C9A227"/><rect x="21" y="22" width="6" height="8" rx="1" fill="#E8811A"/></svg>`,
  };

  // ---- sources -------------------------------------------------------------
  const TRANSLATIONS = [
    { cite: "Edwin Arnold, The Song Celestial (1885) — Project Gutenberg #2388", url: "https://www.gutenberg.org/ebooks/2388" },
    { cite: "Kashinath Trimbak Telang, The Bhagavadgītā (Sacred Books of the East, vol. 8, 1882)", url: "https://sacred-texts.com/hin/sbe08/index.htm" },
  ];
  const firstVerse = (ref) => { const [c, v] = ref.split("."); return [c, v.split("-")[0]]; };
  const verseLinks = (ref) => {
    const [c, v] = firstVerse(ref);
    return [
      { cite: `bhagavadgita.io — ${c}.${v}`, url: `https://bhagavadgita.io/chapter/${c}/verse/${v}/` },
      { cite: `Gita Supersite, IIT Kanpur — ${c}.${v}`, url: `https://www.gitasupersite.iitk.ac.in/srimad?language=dv&field_chapter_value=${c}&field_nsutra_value=${v}` },
    ];
  };
  const ext = (r) => r.url
    ? `<a href="${esc(r.url)}" target="_blank" rel="noopener">${esc(r.cite)}</a>`
    : esc(r.cite);
  function citeVerse(r) {
    if (byRef[r.verse]) return `${esc(r.cite)} — <a href="#/shloka/${esc(r.verse)}">${t("thisSite")}</a>`;
    const [c, v] = firstVerse(r.verse);
    return `<a href="https://bhagavadgita.io/chapter/${c}/verse/${v}/" target="_blank" rel="noopener">${esc(r.cite)}</a>`;
  }
  const citeAny = (r) => (r.verse ? citeVerse(r) : ext(r));

  function sourcesBlock(s) {
    const src = s.sources || {};
    const items = [
      `<li><strong>${t("srcText")}:</strong> <a href="https://github.com/gita/gita" target="_blank" rel="noopener">${t("srcDataset")}</a></li>`,
      `<li><strong>${t("srcRead")}:</strong> ${verseLinks(s.ref).map(ext).join(" · ")}</li>`,
      `<li id="compare-${esc(s.ref)}"><strong>${t("srcCompare")}:</strong> ${TRANSLATIONS.map(ext).join(" · ")}</li>`,
    ];
    if (src.story) items.push(`<li><strong>${t("srcStory")}:</strong> ${citeAny(src.story)}</li>`);
    if (src.more && src.more.length) items.push(`<li><strong>${t("srcAlso")}:</strong> ${src.more.map(citeAny).join(" · ")}</li>`);
    return `<section class="block sources" id="sources"><h2>${t("sources")}</h2><ol>${items.join("")}</ol></section>`;
  }

  // ---- views --------------------------------------------------------------
  function card(s) {
    const c = L(s);
    return `<a class="card" href="#/shloka/${s.ref}">
      <div class="card-top"><span class="day">${t("day")} ${s.day}</span><span class="ref">${s.ref}</span></div>
      <div class="card-verse">${shlokaBlock(s, { compact: true })}</div>
      <h3>${esc(c.title)}</h3>
      <p>${esc(c.essence)}</p>
    </a>`;
  }

  function viewHome(themeFilter) {
    const dayIndex = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 864e5) % DATA.shlokas.length;
    const tod = DATA.shlokas[dayIndex];
    const list = themeFilter ? DATA.shlokas.filter((s) => s.theme === themeFilter) : DATA.shlokas;
    const themes = `<div class="chips theme-chips">
      <a class="chip${!themeFilter ? " active" : ""}" href="#/">${t("all")}</a>
      ${DATA.themes.map((th) => `<a class="chip${th.id === themeFilter ? " active" : ""}" href="#/theme/${th.id}">${esc(th[state.lang])}</a>`).join("")}
    </div>`;
    return `
      <section class="hero">
        <div class="hero-text">
          <p class="eyebrow">${t("bg")}</p>
          <h1>${t("heroTitle")}</h1>
          <p class="lead">${t("heroSub")}</p>
          <a class="btn" href="#/shloka/${DATA.shlokas[0].ref}">${t("start")} →</a>
        </div>
        <a class="today" href="#/shloka/${tod.ref}">
          <p class="eyebrow">${t("today")} · ${tod.ref}</p>
          ${shlokaBlock(tod)}
          <p class="today-essence">${esc(L(tod).essence)}</p>
          <span class="more">${t("read")} →</span>
        </a>
      </section>
      <section>
        <div class="section-head">${scriptChips()}</div>
        ${themes}
        <div class="grid">${list.map(card).join("")}</div>
      </section>`;
  }

  function viewShloka(ref) {
    const s = byRef[ref];
    if (!s) return `<p class="empty">${t("notFound")}</p>`;
    const c = L(s);
    const i = DATA.shlokas.indexOf(s);
    const prev = DATA.shlokas[i - 1], next = DATA.shlokas[i + 1];
    const related = (s.related || [])
      .map((r) => (byRef[r] ? `<a class="chip" href="#/shloka/${r}">${r} · ${esc(L(byRef[r]).title)}</a>` : ""))
      .join("");
    const words = s.verses.map((v) => `<p><strong>${v.ref}</strong> — ${esc(v.words)}</p>`).join("");
    return `
      <article class="shloka">
        <p class="eyebrow"><a href="#/theme/${s.theme}">${esc(themeName(s.theme))}</a> · ${t("day")} ${s.day} / 21</p>
        <h1>${esc(c.title)}</h1>
        <div class="verse-box">
          <div class="verse-head"><span class="ref-badge">${t("bg")} ${s.ref}</span>${scriptChips()}</div>
          ${shlokaBlock(s)}
          <p class="essence">${esc(c.essence)}</p>
        </div>

        <figure class="illustration">
          ${ILL.render(s.illustration, state.lang)}
          <figcaption>${t("picture")}</figcaption>
        </figure>

        <section class="block">
          <h2>${t("meaning")}</h2>
          <p class="meaning">${rich(c.meaning)}</p>
          <p class="cite-note">${t("meaningNote")} <a href="#/shloka/${s.ref}" data-jump="sources">${t("compare")} ↓</a></p>
          <details class="words"><summary>${t("words")}</summary>${words}</details>
        </section>

        <section class="block">
          <h2>${t("inLife")}</h2>
          <div class="lenses">
            ${["student", "home", "work"].map((k) => `<div class="lens lens-${k}">${ICONS[k]}<h3>${t(k)}</h3><p>${rich(c[k])}</p></div>`).join("")}
          </div>
        </section>

        <section class="block story">
          <h2>${t("story")}: ${esc(c.story.title)}</h2>
          <p class="source">${esc(c.story.source)}${s.sources && s.sources.story ? ` · <span class="source-cite">${citeAny(s.sources.story)}</span>` : ""}</p>
          <p>${rich(c.story.text)}</p>
          <p class="connection"><strong>${t("link")}:</strong> ${rich(c.story.connection)}</p>
        </section>

        <div class="two-col">
          <section class="block note misreading"><h2>${t("misreading")}</h2><p>${rich(c.misreading)}</p></section>
          <section class="block note practice"><h2>${t("practice")}</h2><p>${rich(c.practice)}</p></section>
        </div>

        ${sourcesBlock(s)}

        ${related ? `<section class="block"><h2>${t("related")}</h2><div class="chips">${related}</div></section>` : ""}

        <nav class="pager">
          ${prev ? `<a href="#/shloka/${prev.ref}">← ${t("prev")}<span>${esc(L(prev).title)}</span></a>` : "<span></span>"}
          ${next ? `<a class="next" href="#/shloka/${next.ref}">${t("next")} →<span>${esc(L(next).title)}</span></a>` : "<span></span>"}
        </nav>
      </article>`;
  }

  function worksCited() {
    const seen = new Map();
    const add = (r) => { if (r && r.url && !seen.has(r.url)) seen.set(r.url, r); };
    TRANSLATIONS.forEach(add);
    DATA.shlokas.forEach((sh) => add(sh.sources && sh.sources.story));
    return [{ cite: "gita/gita — Bhagavad Gita dataset (Unlicense)", url: "https://github.com/gita/gita" }, ...seen.values()]
      .map((r) => `<li>${ext(r)}</li>`).join("");
  }

  function viewAbout() {
    if (state.lang === "kn") {
      return `<article class="prose">
        <h1>ಈ ಯೋಜನೆಯ ಕುರಿತು</h1>
        <p>ಭಗವದ್ಗೀತೆಯ ಅತ್ಯಂತ ಪ್ರಸಿದ್ಧ ಹಾಗೂ ನಿತ್ಯ ಜೀವನಕ್ಕೆ ಉಪಯುಕ್ತವಾದ 21 ಶ್ಲೋಕಗಳನ್ನು ವಿದ್ಯಾರ್ಥಿಗಳು ಮತ್ತು ಸಾಮಾನ್ಯ ಜನರಿಗಾಗಿ — ಮನೆಯಲ್ಲಿ ಮತ್ತು ಕೆಲಸದಲ್ಲಿ — ಸರಳವಾಗಿ ಪ್ರಸ್ತುತಪಡಿಸುವುದು ಈ ಜಾಲತಾಣದ ಉದ್ದೇಶ.</p>
        <h2>ಲಿಪಿ ಆಯ್ಕೆ</h2>
        <p>ಶ್ಲೋಕಗಳನ್ನು ದೇವನಾಗರಿ, ಇಂಗ್ಲಿಷ್ ಅಥವಾ ಕನ್ನಡ ಅಕ್ಷರಗಳಲ್ಲಿ ಓದಬಹುದು. ಕನ್ನಡ ಭಾಷೆ ಆರಿಸಿದಾಗ ಸಹಜವಾಗಿ ಕನ್ನಡ ಲಿಪಿ, ಇಂಗ್ಲಿಷ್ ಆರಿಸಿದಾಗ ಇಂಗ್ಲಿಷ್ ಅಕ್ಷರಗಳು ತೋರುತ್ತವೆ. ಇದನ್ನು ಆಯ್ಕೆಗಳಲ್ಲಿ (⚙) ಬದಲಿಸಬಹುದು.</p>
        <h2>ಆಧಾರಗಳು</h2>
        <ul>
          <li>ಸಂಸ್ಕೃತ ಪಠ್ಯ, ಲಿಪ್ಯಂತರ ಮತ್ತು ಪದಶಃ ಅರ್ಥ: <a href="https://github.com/gita/gita">gita/gita</a> ದತ್ತಾಂಶ (Unlicense — ಸಾರ್ವಜನಿಕ ಡೊಮೇನ್). ಕನ್ನಡ ಲಿಪಿಯನ್ನು ದೇವನಾಗರಿಯಿಂದ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ರೂಪಿಸಲಾಗಿದೆ.</li>
          <li>ಕಥೆಗಳು: ಮಹಾಭಾರತ, ರಾಮಾಯಣ, ಪುರಾಣಗಳು ಮತ್ತು ಉಪನಿಷತ್ತುಗಳು; ಜನಪದ ಕಥೆಗಳು ಮತ್ತು ದೃಷ್ಟಾಂತ ಕಥೆಗಳನ್ನು ಹಾಗೆಂದೇ ಸೂಚಿಸಲಾಗಿದೆ.</li>
          <li>ಪ್ರತಿ ಶ್ಲೋಕದ ಪುಟದ ಕೊನೆಯಲ್ಲಿ ಆಧಾರಗಳ ಪಟ್ಟಿ ಇದೆ — ಪ್ರತಿ ಕಥೆಯ ಗ್ರಂಥ ಮತ್ತು ಅಧ್ಯಾಯವನ್ನೂ ಸೂಚಿಸಲಾಗಿದೆ.</li>
          <li>ಅರ್ಥ ಮತ್ತು ಅನ್ವಯಗಳನ್ನು ಈ ಯೋಜನೆಗಾಗಿ ಹೊಸದಾಗಿ ಬರೆಯಲಾಗಿದೆ.</li>
        </ul>
        <h2>ಉಲ್ಲೇಖಿತ ಗ್ರಂಥಗಳು</h2>
        <ul class="works">${worksCited()}</ul>
        <h2>ಪರಿಶೀಲನೆ</h2>
        <p>ಕನ್ನಡ ಅನುವಾದವು ಕರಡು ರೂಪದಲ್ಲಿದೆ; ಕನ್ನಡ ಮತ್ತು ಸಂಸ್ಕೃತ ಬಲ್ಲವರಿಂದ ಪರಿಶೀಲನೆ ಬಾಕಿ ಇದೆ. ತಿದ್ದುಪಡಿಗಳಿಗೆ ಸ್ವಾಗತ.</p>
      </article>`;
    }
    return `<article class="prose">
      <h1>About this project</h1>
      <p>This site presents 21 of the most widely loved Bhagavad Gita shlokas that help in daily life — written simply for students and for everyday people at home and at work.</p>
      <h2>Choosing a script</h2>
      <p>Shlokas can be read in Devanagari, English letters or Kannada letters. By default, English readers see English letters and Kannada readers see Kannada script. Change this any time in Settings (⚙) or with the buttons above each shloka.</p>
      <h2>Sources</h2>
      <ul>
        <li>Sanskrit text, transliteration and word-by-word meanings: the <a href="https://github.com/gita/gita">gita/gita</a> dataset (Unlicense — public domain). Kannada script is generated automatically from the Devanagari.</li>
        <li>Stories come from the Mahabharata, Ramayana, Puranas and Upanishads. Folk tales and illustrative modern stories are labelled as such.</li>
        <li>Each shloka page ends with its own list of sources, including the exact book and section for every story.</li>
        <li>Meanings and applications are written fresh for this project. A check against public-domain translations (Edwin Arnold 1885, K. T. Telang 1882) is planned.</li>
      </ul>
      <h2>Works cited</h2>
      <ul class="works">${worksCited()}</ul>
      <h2>Review</h2>
      <p>The Kannada translation is a first draft awaiting review by native Kannada and Sanskrit readers. Corrections are welcome.</p>
    </article>`;
  }

  // ---- router & wiring ----------------------------------------------------
  const app = document.getElementById("app");

  function applyStatic() {
    document.documentElement.lang = state.lang;
    document.body.classList.toggle("lang-kn", state.lang === "kn");
    document.title = t("siteTitle");
    document.querySelectorAll("[data-i18n]").forEach((el) => (el.textContent = t(el.dataset.i18n)));
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => el.setAttribute("aria-label", t(el.dataset.i18nAria)));
    document.getElementById("langToggle").textContent = state.lang === "kn" ? "English" : "ಕನ್ನಡ";
  }

  function render(scrollTop = true) {
    applyStatic();
    const h = location.hash.replace(/^#\/?/, "");
    const [route, arg] = h.split("/");
    if (route === "shloka") app.innerHTML = viewShloka(decodeURIComponent(arg || ""));
    else if (route === "about") app.innerHTML = viewAbout();
    else if (route === "theme") app.innerHTML = viewHome(arg);
    else app.innerHTML = viewHome();
    if (scrollTop) window.scrollTo(0, 0);
  }

  function setLang(lang) {
    state.lang = lang;
    store.set("lang", lang);
    render(false);
  }
  function setScript(script) {
    state.script = script;
    store.set("script", script);
    render(false);
  }

  app.addEventListener("click", (e) => {
    const j = e.target.closest("[data-jump]");
    if (j) {
      e.preventDefault();
      const el = document.getElementById(j.dataset.jump);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    const b = e.target.closest("[data-script]");
    if (b) setScript(b.dataset.script);
  });
  document.getElementById("langToggle").addEventListener("click", () => setLang(state.lang === "kn" ? "en" : "kn"));

  const dlg = document.getElementById("settings");
  document.getElementById("settingsBtn").addEventListener("click", () => {
    dlg.querySelector(`input[name=lang][value=${state.lang}]`).checked = true;
    dlg.querySelector(`input[name=script][value=${state.script}]`).checked = true;
    dlg.showModal();
  });
  dlg.addEventListener("change", (e) => {
    if (e.target.name === "lang") setLang(e.target.value);
    if (e.target.name === "script") setScript(e.target.value);
  });

  window.addEventListener("hashchange", () => render(true));
  render(false);
})();
