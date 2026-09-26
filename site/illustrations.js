// Concept illustrations, one per shloka. Each draws an inline SVG from
// language-specific labels so the picture speaks the reader's language.
(function () {
  const C = {
    saffron: "#E8811A", saffronLt: "#F6C27A", blue: "#1B3A6B", blueLt: "#DCE6F2",
    gold: "#C9A227", parch: "#FBF3E4", lotus: "#D9687A", green: "#1E7B6E",
    greenLt: "#D5ECE7", ink: "#3A3226", maroon: "#9E3B2A", grey: "#9A9186", greyLt: "#E7E1D6",
  };

  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  // Text with optional line breaks ("\n").
  function T(x, y, s, o = {}) {
    const size = o.s || 16;
    const lines = String(s).split("\n");
    const spans = lines
      .map((l, i) => `<tspan x="${x}" dy="${i === 0 ? 0 : size * 1.25}">${esc(l)}</tspan>`)
      .join("");
    return `<text x="${x}" y="${y}" text-anchor="${o.a || "middle"}" font-size="${size}" fill="${o.f || C.ink}" font-weight="${o.w || 500}">${spans}</text>`;
  }

  function person(x, y, color = C.blue, opts = {}) {
    // y = feet position; ~70px tall
    const arms = opts.armsUp
      ? `<path d="M${x} ${y - 48} L${x - 16} ${y - 66} M${x} ${y - 48} L${x + 16} ${y - 66}"/>`
      : `<path d="M${x} ${y - 46} L${x - 15} ${y - 28} M${x} ${y - 46} L${x + 15} ${y - 28}"/>`;
    return `<g stroke="${color}" stroke-width="5" stroke-linecap="round" fill="none">
      <circle cx="${x}" cy="${y - 64}" r="10" fill="${color}" stroke="none"/>
      <path d="M${x} ${y - 52} L${x} ${y - 22}"/>${arms}
      <path d="M${x} ${y - 22} L${x - 12} ${y} M${x} ${y - 22} L${x + 12} ${y}"/></g>`;
  }

  function sitting(x, y, color) {
    return `<g stroke="${color}" stroke-width="5" stroke-linecap="round" fill="none">
      <circle cx="${x + 6}" cy="${y - 44}" r="10" fill="${color}" stroke="none"/>
      <path d="M${x} ${y - 32} Q${x - 4} ${y - 14} ${x} ${y}"/>
      <path d="M${x} ${y} L${x + 24} ${y} L${x + 24} ${y + 14}"/>
      <path d="M${x} ${y - 24} L${x + 18} ${y - 6}"/></g>`;
  }

  function arrow(x1, y1, x2, y2, color = C.saffron) {
    const a = Math.atan2(y2 - y1, x2 - x1);
    const h = 12;
    const p1 = `${x2 - h * Math.cos(a - 0.45)},${y2 - h * Math.sin(a - 0.45)}`;
    const p2 = `${x2 - h * Math.cos(a + 0.45)},${y2 - h * Math.sin(a + 0.45)}`;
    return `<g stroke="${color}" fill="${color}" stroke-width="4" stroke-linecap="round">
      <line x1="${x1}" y1="${y1}" x2="${x2 - 6 * Math.cos(a)}" y2="${y2 - 6 * Math.sin(a)}"/>
      <polygon points="${x2},${y2} ${p1} ${p2}" stroke="none"/></g>`;
  }

  function diya(x, y, s = 1) {
    return `<g transform="translate(${x} ${y}) scale(${s})">
      <path d="M-40 0 Q0 34 40 0 Q20 -6 0 -6 Q-20 -6 -40 0 Z" fill="${C.saffron}" stroke="${C.maroon}" stroke-width="2"/>
      <path d="M0 -8 C-12 -26 -4 -44 0 -58 C4 -44 12 -26 0 -8 Z" fill="${C.gold}"/>
      <path d="M0 -12 C-6 -24 -2 -34 0 -42 C2 -34 6 -24 0 -12 Z" fill="#FFF3C4"/></g>`;
  }

  function sun(x, y, r = 30) {
    let rays = "";
    for (let i = 0; i < 12; i++) {
      const a = (i * Math.PI) / 6;
      rays += `<line x1="${x + Math.cos(a) * (r + 6)}" y1="${y + Math.sin(a) * (r + 6)}" x2="${x + Math.cos(a) * (r + 16)}" y2="${y + Math.sin(a) * (r + 16)}"/>`;
    }
    return `<g stroke="${C.saffron}" stroke-width="3" stroke-linecap="round">${rays}</g><circle cx="${x}" cy="${y}" r="${r}" fill="${C.saffronLt}" stroke="${C.saffron}" stroke-width="3"/>`;
  }

  const heart = (x, y, s = 1, fill = C.lotus) =>
    `<path transform="translate(${x} ${y}) scale(${s})" d="M0 12 C-22 -4 -16 -22 0 -12 C16 -22 22 -4 0 12 Z" fill="${fill}"/>`;

  const frame = (inner, label) =>
    `<svg viewBox="0 0 640 380" role="img" aria-label="${esc(label)}" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="632" height="372" rx="18" fill="${C.parch}" stroke="${C.gold}" stroke-width="2"/>${inner}</svg>`;

  const I = {};

  I["bow-rise"] = {
    labels: {
      en: { a: "Fear: the bow is dropped", b: "Courage: stand up", c: "Rise up — don't give in to weakness" },
      kn: { a: "ಭಯ: ಬಿಲ್ಲು ಕೆಳಗೆ", b: "ಧೈರ್ಯ: ಎದ್ದು ನಿಲ್ಲು", c: "ಎದ್ದೇಳು — ದೌರ್ಬಲ್ಯಕ್ಕೆ ಮಣಿಯಬೇಡ" },
    },
    draw: (t) => `
      <rect x="30" y="40" width="250" height="250" rx="14" fill="${C.greyLt}"/>
      <path d="M50 250 H260" stroke="${C.grey}" stroke-width="3"/>
      ${sitting(120, 236, C.grey)}
      <path d="M160 248 Q200 228 250 248" stroke="${C.grey}" stroke-width="5" fill="none"/>
      <line x1="160" y1="248" x2="250" y2="248" stroke="${C.grey}" stroke-width="1.5"/>
      <path d="M90 120 q10 -14 20 0 q10 -14 20 0" stroke="${C.grey}" stroke-width="3" fill="none"/>
      ${T(155, 318, t.a, { s: 17, f: C.ink })}
      ${arrow(296, 165, 344, 165)}
      <rect x="360" y="40" width="250" height="250" rx="14" fill="#FDE8C8"/>
      ${sun(485, 110, 34)}
      <path d="M380 250 H590" stroke="${C.saffron}" stroke-width="3"/>
      ${person(470, 248, C.blue, { armsUp: false })}
      <path d="M500 150 Q530 200 500 250" stroke="${C.maroon}" stroke-width="5" fill="none"/>
      <line x1="500" y1="150" x2="500" y2="250" stroke="${C.maroon}" stroke-width="1.5"/>
      <line x1="485" y1="202" x2="500" y2="200" stroke="${C.blue}" stroke-width="5" stroke-linecap="round"/>
      ${T(485, 318, t.b, { s: 17, f: C.blue, w: 700 })}
      ${T(320, 358, t.c, { s: 15, f: C.maroon })}`,
  };

  I["own-path"] = {
    labels: {
      en: { a: "Your path", a2: "imperfect, but yours", b: "Another's path", b2: "borrowed, full of fear", c: "Walk your own path" },
      kn: { a: "ನಿನ್ನ ದಾರಿ", a2: "ಅಪೂರ್ಣ, ಆದರೆ ನಿನ್ನದು", b: "ಪರರ ದಾರಿ", b2: "ಎರವಲು, ಭಯದಿಂದ ಕೂಡಿದ್ದು", c: "ನಿನ್ನ ದಾರಿಯಲ್ಲೇ ನಡೆ" },
    },
    draw: (t) => `
      <path d="M40 300 L200 110 L290 180 L380 90 L600 300 Z" fill="${C.greyLt}"/>
      ${sun(380, 70, 22)}
      <path d="M320 320 C250 290 300 250 240 220 C180 190 250 160 210 130" stroke="${C.saffron}" stroke-width="10" fill="none" stroke-linecap="round"/>
      <g fill="${C.maroon}">
        <ellipse cx="292" cy="296" rx="4" ry="7"/><ellipse cx="275" cy="268" rx="4" ry="7"/>
        <ellipse cx="262" cy="232" rx="4" ry="7"/><ellipse cx="226" cy="200" rx="4" ry="7"/><ellipse cx="228" cy="160" rx="4" ry="7"/></g>
      <path d="M330 320 L470 130" stroke="${C.grey}" stroke-width="10" stroke-dasharray="4 10" fill="none" stroke-linecap="round"/>
      ${person(325, 350, C.blue)}
      <g opacity="0.45">${person(452, 176, C.grey)}</g>
      ${T(150, 250, t.a, { s: 19, f: C.saffron, w: 700 })}
      ${T(150, 274, t.a2, { s: 14 })}
      ${T(530, 230, t.b, { s: 19, f: C.grey, w: 700 })}
      ${T(530, 254, t.b2, { s: 14 })}
      ${T(320, 40, t.c, { s: 18, f: C.blue, w: 700 })}`,
  };

  I["control-circle"] = {
    labels: {
      en: { inner: "IN YOUR HANDS", i: ["Effort", "Preparation", "Honesty", "Attitude"], outer: "NOT IN YOUR HANDS", o: ["Results", "Others'\nchoices", "Luck", "Timing"] },
      kn: { inner: "ನಿನ್ನ ಕೈಯಲ್ಲಿ", i: ["ಪ್ರಯತ್ನ", "ತಯಾರಿ", "ಪ್ರಾಮಾಣಿಕತೆ", "ಮನೋಭಾವ"], outer: "ನಿನ್ನ ಕೈಯಲ್ಲಿಲ್ಲ", o: ["ಫಲಿತಾಂಶ", "ಇತರರ\nನಿರ್ಧಾರ", "ಅದೃಷ್ಟ", "ಸಮಯ"] },
    },
    draw: (t) => `
      <circle cx="320" cy="195" r="170" fill="${C.blueLt}" stroke="${C.blue}" stroke-width="2" stroke-dasharray="6 6"/>
      <circle cx="320" cy="195" r="95" fill="${C.saffronLt}" stroke="${C.saffron}" stroke-width="4"/>
      ${T(320, 150, t.inner, { s: 15, f: C.maroon, w: 800 })}
      ${T(320, 180, t.i[0], { s: 17, w: 700 })}${T(320, 204, t.i[1], { s: 17, w: 700 })}
      ${T(320, 228, t.i[2], { s: 17, w: 700 })}${T(320, 252, t.i[3], { s: 17, w: 700 })}
      ${T(320, 72, t.outer, { s: 15, f: C.blue, w: 800 })}
      ${T(206, 124, t.o[0], { s: 15, f: C.blue })}${T(434, 116, t.o[1], { s: 15, f: C.blue })}
      ${T(206, 272, t.o[2], { s: 15, f: C.blue })}${T(434, 272, t.o[3], { s: 15, f: C.blue })}
      ${diya(560, 345, 0.6)}`,
  };

  I["balance-scale"] = {
    labels: {
      en: { a: "Success", b: "Failure", c: "Samatvam — an even mind", d: "Same effort. Same calm." },
      kn: { a: "ಗೆಲುವು", b: "ಸೋಲು", c: "ಸಮತ್ವ — ಸಮಚಿತ್ತ", d: "ಒಂದೇ ಪ್ರಯತ್ನ. ಒಂದೇ ಶಾಂತಿ." },
    },
    draw: (t) => `
      <path d="M320 90 L320 300" stroke="${C.blue}" stroke-width="8"/>
      <path d="M270 310 H370" stroke="${C.blue}" stroke-width="10" stroke-linecap="round"/>
      <circle cx="320" cy="84" r="12" fill="${C.gold}"/>
      <path d="M140 100 H500" stroke="${C.blue}" stroke-width="6" stroke-linecap="round"/>
      <g stroke="${C.blue}" stroke-width="2"><path d="M140 100 L100 190 M140 100 L180 190 M500 100 L460 190 M500 100 L540 190"/></g>
      <path d="M90 190 Q140 225 190 190 Z" fill="${C.saffronLt}" stroke="${C.saffron}" stroke-width="3"/>
      <path d="M450 190 Q500 225 550 190 Z" fill="${C.greyLt}" stroke="${C.grey}" stroke-width="3"/>
      <path d="M126 186 h28 v-20 q-14 -18 -28 0 z" fill="${C.gold}"/>
      <path d="M486 186 l14 -30 l14 30 z" fill="${C.grey}"/>
      ${T(140, 250, t.a, { s: 19, f: C.saffron, w: 700 })}
      ${T(500, 250, t.b, { s: 19, f: C.grey, w: 700 })}
      ${T(320, 350, t.c, { s: 19, f: C.blue, w: 700 })}
      ${T(320, 50, t.d, { s: 16 })}`,
  };

  I["skill-target"] = {
    labels: {
      en: { r: ["Calm mind", "Care", "Full attention"], c: "Yoga is skill in action", n: "yogaḥ karmasu kauśalam" },
      kn: { r: ["ಶಾಂತ ಮನಸ್ಸು", "ಕಾಳಜಿ", "ಪೂರ್ಣ ಗಮನ"], c: "ಕರ್ಮದಲ್ಲಿ ಕೌಶಲವೇ ಯೋಗ", n: "ಯೋಗಃ ಕರ್ಮಸು ಕೌಶಲಮ್" },
    },
    draw: (t) => `
      <circle cx="230" cy="190" r="140" fill="${C.blueLt}" stroke="${C.blue}" stroke-width="3"/>
      <circle cx="230" cy="190" r="95" fill="${C.greenLt}" stroke="${C.green}" stroke-width="3"/>
      <circle cx="230" cy="190" r="50" fill="${C.saffronLt}" stroke="${C.saffron}" stroke-width="3"/>
      <circle cx="230" cy="190" r="12" fill="${C.maroon}"/>
      ${arrow(560, 70, 244, 184, C.maroon)}
      <path d="M560 70 l18 -14 M560 70 l22 2" stroke="${C.maroon}" stroke-width="4"/>
      ${T(230, 68, t.r[0], { s: 15, f: C.blue, w: 700 })}
      ${T(230, 114, t.r[1], { s: 15, f: C.green, w: 700 })}
      ${T(230, 160, t.r[2], { s: 14, f: C.maroon, w: 700 })}
      ${T(490, 250, t.c, { s: 19, f: C.blue, w: 700 })}
      ${T(490, 280, t.n, { s: 15, f: C.maroon })}`,
  };

  I["lamp-smoke"] = {
    labels: {
      en: { a: "The fire:", a2: "meaningful work", b: "The smoke:", b2: "its flaws", c: "Keep the fire. Accept the smoke." },
      kn: { a: "ಬೆಂಕಿ:", a2: "ಅರ್ಥಪೂರ್ಣ ಕೆಲಸ", b: "ಹೊಗೆ:", b2: "ಅದರ ದೋಷಗಳು", c: "ಬೆಂಕಿಯನ್ನು ಕಾಪಾಡು. ಹೊಗೆಯನ್ನು ಸ್ವೀಕರಿಸು." },
    },
    draw: (t) => `
      <path d="M320 150 C300 120 350 100 325 70 C300 40 345 30 330 10" stroke="${C.grey}" stroke-width="8" fill="none" opacity="0.6" stroke-linecap="round"/>
      <path d="M335 150 C360 120 320 95 350 70" stroke="${C.grey}" stroke-width="5" fill="none" opacity="0.4" stroke-linecap="round"/>
      <circle cx="320" cy="220" r="70" fill="#FFF3C4" opacity="0.7"/>
      ${diya(320, 270, 1.9)}
      ${T(140, 230, t.a, { s: 19, f: C.saffron, w: 700 })}${T(140, 256, t.a2, { s: 16 })}
      ${T(500, 90, t.b, { s: 19, f: C.grey, w: 700 })}${T(500, 116, t.b2, { s: 16 })}
      ${T(320, 350, t.c, { s: 18, f: C.blue, w: 700 })}`,
  };

  I["growing-sprout"] = {
    labels: {
      en: { s: ["Day 1", "Day 30", "Day 100", "Year 1"], c: "Unseen growth is still growth", d: "No sincere effort is wasted" },
      kn: { s: ["ದಿನ 1", "ದಿನ 30", "ದಿನ 100", "ವರ್ಷ 1"], c: "ಕಾಣದ ಬೆಳವಣಿಗೆಯೂ ಬೆಳವಣಿಗೆಯೇ", d: "ಪ್ರಾಮಾಣಿಕ ಪ್ರಯತ್ನ ವ್ಯರ್ಥವಲ್ಲ" },
    },
    draw: (t) => {
      const xs = [100, 247, 394, 540];
      const plants = [
        `<ellipse cx="0" cy="12" rx="9" ry="6" fill="${C.maroon}"/>`,
        `<ellipse cx="0" cy="12" rx="9" ry="6" fill="${C.maroon}"/><path d="M0 16 q-6 20 -14 32 M0 16 q5 22 12 30 M0 16 v34" stroke="${C.maroon}" stroke-width="2" fill="none"/>`,
        `<path d="M0 16 q-8 22 -18 34 M0 16 q8 22 16 34 M0 16 v38" stroke="${C.maroon}" stroke-width="2" fill="none"/><path d="M0 12 V-40" stroke="${C.green}" stroke-width="4"/><path d="M0 -30 q-26 -8 -30 -28 q24 2 30 24 M0 -38 q24 -10 28 -28 q-24 2 -28 26" fill="${C.green}"/>`,
        `<path d="M0 16 q-12 26 -30 40 M0 16 q12 26 28 40 M0 16 v44 M0 16 q-20 10 -38 14 M0 16 q20 10 36 12" stroke="${C.maroon}" stroke-width="2" fill="none"/><path d="M0 12 V-110" stroke="${C.green}" stroke-width="6"/><circle cx="0" cy="-130" r="44" fill="${C.green}"/><circle cx="-26" cy="-100" r="28" fill="${C.green}"/><circle cx="28" cy="-98" r="28" fill="${C.green}"/><circle cx="12" cy="-140" r="6" fill="${C.lotus}"/><circle cx="-18" cy="-118" r="6" fill="${C.lotus}"/>`,
      ];
      return `
      <rect x="4" y="232" width="632" height="144" rx="0" fill="#E9D7B5"/>
      <path d="M4 232 H636" stroke="${C.maroon}" stroke-width="3"/>
      ${xs.map((x, i) => `<g transform="translate(${x} 222)">${plants[i]}</g>${T(x, 330, t.s[i], { s: 16, w: 700, f: C.blue })}`).join("")}
      ${arrow(140, 300, 205, 300, C.saffron)}${arrow(287, 300, 352, 300, C.saffron)}${arrow(434, 300, 499, 300, C.saffron)}
      ${T(200, 60, t.d, { s: 19, f: C.blue, w: 700 })}
      ${T(200, 88, t.c, { s: 15, f: C.maroon })}`;
    },
  };

  I["mind-dial"] = {
    labels: {
      en: { e: "Enemy", f: "Friend", eq: "\"I'm just bad at this.\"", fq: "\"I haven't learned it yet.\"", c: "Your mind: friend or enemy?" },
      kn: { e: "ಶತ್ರು", f: "ಮಿತ್ರ", eq: "\"ನಾನು ಇದರಲ್ಲಿ ದಡ್ಡ.\"", fq: "\"ನಾನು ಇದನ್ನು ಇನ್ನೂ ಕಲಿತಿಲ್ಲ.\"", c: "ನಿನ್ನ ಮನಸ್ಸು: ಮಿತ್ರನೋ ಶತ್ರುವೋ?" },
    },
    draw: (t) => `
      <path d="M150 250 A170 170 0 0 1 320 80" stroke="${C.maroon}" stroke-width="34" fill="none"/>
      <path d="M320 80 A170 170 0 0 1 490 250" stroke="${C.green}" stroke-width="34" fill="none"/>
      <line x1="320" y1="250" x2="440" y2="140" stroke="${C.blue}" stroke-width="8" stroke-linecap="round"/>
      <circle cx="320" cy="250" r="16" fill="${C.blue}"/>
      ${T(85, 250, t.e, { s: 18, f: C.maroon, w: 800 })}
      ${T(555, 250, t.f, { s: 18, f: C.green, w: 800 })}
      <rect x="30" y="285" width="270" height="44" rx="22" fill="#F4DDD7"/>
      ${T(165, 313, t.eq, { s: 15, f: C.maroon })}
      <rect x="340" y="285" width="270" height="44" rx="22" fill="${C.greenLt}"/>
      ${T(475, 313, t.fq, { s: 15, f: C.green })}
      ${T(320, 40, t.c, { s: 19, f: C.blue, w: 700 })}
      ${T(320, 362, "6.5", { s: 12, f: C.grey })}`,
  };

  I["boat-oars"] = {
    labels: {
      en: { w: "Restless mind", p: "Practice", pd: "abhyāsa", d: "Letting go", dd: "vairāgya", g: "Calm focus" },
      kn: { w: "ಚಂಚಲ ಮನಸ್ಸು", p: "ಅಭ್ಯಾಸ", pd: "abhyāsa", d: "ವೈರಾಗ್ಯ", dd: "vairāgya", g: "ಶಾಂತ ಏಕಾಗ್ರತೆ" },
    },
    draw: (t) => `
      <path d="M4 250 q30 -20 60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0 V376 H4 Z" fill="${C.blueLt}" stroke="${C.blue}" stroke-width="2"/>
      <path d="M4 300 q30 -16 60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0" stroke="${C.blue}" stroke-width="2" fill="none" opacity="0.5"/>
      <path d="M200 240 H400 L370 280 H230 Z" fill="${C.saffron}" stroke="${C.maroon}" stroke-width="3"/>
      ${person(300, 240, C.blue)}
      <line x1="285" y1="206" x2="170" y2="300" stroke="${C.maroon}" stroke-width="6" stroke-linecap="round"/>
      <ellipse cx="165" cy="304" rx="16" ry="7" fill="${C.maroon}" transform="rotate(-40 165 304)"/>
      <line x1="315" y1="206" x2="430" y2="300" stroke="${C.maroon}" stroke-width="6" stroke-linecap="round"/>
      <ellipse cx="435" cy="304" rx="16" ry="7" fill="${C.maroon}" transform="rotate(40 435 304)"/>
      ${T(110, 200, t.p, { s: 19, f: C.green, w: 800 })}${T(110, 222, t.pd, { s: 14, f: C.green })}
      ${T(510, 200, t.d, { s: 19, f: C.green, w: 800 })}${T(510, 222, t.dd, { s: 14, f: C.green })}
      ${T(320, 345, t.w, { s: 16, f: C.blue, w: 700 })}
      <path d="M560 60 V130" stroke="${C.blue}" stroke-width="4"/><path d="M560 60 L600 75 L560 90 Z" fill="${C.saffron}"/>
      ${T(520, 160, t.g, { s: 16, f: C.blue, w: 700 })}
      ${arrow(420, 120, 500, 90, C.gold)}`,
  };

  I["ladder-of-fall"] = {
    labels: {
      en: { s: ["Dwelling on it", "Attachment", "Desire", "Anger", "Delusion", "Memory confused", "Judgement lost", "Downfall"], b: "Break the chain here!", c: "The ladder of fall" },
      kn: { s: ["ಚಿಂತನೆ", "ಆಸಕ್ತಿ", "ಕಾಮ", "ಕ್ರೋಧ", "ಸಮ್ಮೋಹ", "ಸ್ಮೃತಿಭ್ರಮೆ", "ಬುದ್ಧಿನಾಶ", "ವಿನಾಶ"], b: "ಸರಪಳಿಯನ್ನು ಇಲ್ಲೇ ಮುರಿ!", c: "ಅಧಃಪತನದ ಏಣಿ" },
    },
    draw: (t) => {
      const fills = ["#F6C27A", "#F2A95A", "#E8811A", "#C8561A", "#9E3B2A", "#6E2A3A", "#3A2350", "#1B1A3A"];
      const steps = t.s
        .map((s, i) => {
          const x = 24 + i * 50, y = 60 + i * 38;
          const light = i < 3;
          return `<rect x="${x}" y="${y}" width="210" height="34" rx="8" fill="${fills[i]}"/>
            ${T(x + 14, y + 23, `${i + 1}. ${s}`, { s: 15, a: "start", w: 700, f: light ? "#3A2408" : "#FFF4E4" })}`;
        })
        .join("");
      return `${steps}
        <rect x="380" y="40" width="230" height="56" rx="12" fill="${C.green}"/>
        ${T(495, 74, t.b, { s: 16, f: "#fff", w: 800 })}
        ${arrow(380, 68, 282, 76, C.green)}
        ${T(495, 130, t.c, { s: 18, f: C.blue, w: 700 })}
        ${T(495, 154, "2.62–63", { s: 13, f: C.grey })}`;
    },
  };

  I["three-gates"] = {
    labels: {
      en: { g: ["Lust", "Anger", "Greed"], p: "Path of self-control", c: "Close the three gates" },
      kn: { g: ["ಕಾಮ", "ಕ್ರೋಧ", "ಲೋಭ"], p: "ಸಂಯಮದ ದಾರಿ", c: "ಮೂರು ಬಾಗಿಲುಗಳನ್ನು ಮುಚ್ಚು" },
    },
    draw: (t) => `
      ${[70, 190, 310].map((x, i) => `
        <path d="M${x} 300 V150 Q${x + 50} 90 ${x + 100} 150 V300 Z" fill="#2B1E2F" stroke="${C.maroon}" stroke-width="6"/>
        <path d="M${x + 12} 300 V156 Q${x + 50} 108 ${x + 88} 156 V300" fill="none" stroke="${C.maroon}" stroke-width="2" opacity="0.6"/>
        <line x1="${x + 6}" y1="170" x2="${x + 94}" y2="290" stroke="${C.grey}" stroke-width="5"/>
        <line x1="${x + 94}" y1="170" x2="${x + 6}" y2="290" stroke="${C.grey}" stroke-width="5"/>
        ${T(x + 50, 330, t.g[i], { s: 19, f: C.maroon, w: 800 })}`).join("")}
      ${sun(560, 110, 30)}
      <path d="M430 300 Q500 280 610 300" stroke="${C.saffron}" stroke-width="8" fill="none" stroke-linecap="round"/>
      ${person(520, 290, C.blue)}
      ${arrow(540, 230, 580, 190, C.gold)}
      ${T(525, 330, t.p, { s: 15, f: C.blue, w: 700 })}
      ${T(220, 55, t.c, { s: 19, f: C.blue, w: 700 })}`,
  };

  I["seasons-cycle"] = {
    labels: {
      en: { a: "Heat · Pleasure", b: "Cold · Pain", c: "They come and go", d: "Endure patiently", e: "titikṣā" },
      kn: { a: "ಉಷ್ಣ · ಸುಖ", b: "ಶೀತ · ದುಃಖ", c: "ಬರುತ್ತವೆ, ಹೋಗುತ್ತವೆ", d: "ತಾಳ್ಮೆಯಿಂದ ಸಹಿಸು", e: "ತಿತಿಕ್ಷೆ" },
    },
    draw: (t) => `
      <path d="M200 110 A140 110 0 0 1 440 110" stroke="${C.saffron}" stroke-width="6" fill="none"/>
      ${arrow(420, 92, 442, 116, C.saffron)}
      <path d="M440 280 A140 110 0 0 1 200 280" stroke="${C.blue}" stroke-width="6" fill="none"/>
      ${arrow(220, 298, 198, 274, C.blue)}
      ${sun(320, 70, 26)}
      <g transform="translate(320 318)" stroke="${C.blue}" stroke-width="4" stroke-linecap="round">
        <line x1="-24" y1="0" x2="24" y2="0"/><line x1="-12" y1="-21" x2="12" y2="21"/><line x1="12" y1="-21" x2="-12" y2="21"/></g>
      ${T(110, 70, t.a, { s: 17, f: C.saffron, w: 700 })}
      ${T(110, 330, t.b, { s: 17, f: C.blue, w: 700 })}
      ${T(320, 180, t.c, { s: 20, f: C.ink, w: 800 })}
      ${T(320, 210, t.d, { s: 17, f: C.green, w: 700 })}
      ${T(320, 234, t.e, { s: 14, f: C.green })}`,
  };

  I["rock-waves"] = {
    labels: {
      en: { w: ["Sorrow", "Craving", "Fear", "Anger"], c: "Steady wisdom", d: "The waves rise and fall; the rock stays" },
      kn: { w: ["ದುಃಖ", "ಹಂಬಲ", "ಭಯ", "ಕ್ರೋಧ"], c: "ಸ್ಥಿತಪ್ರಜ್ಞ", d: "ಅಲೆಗಳು ಏಳುತ್ತವೆ, ಬೀಳುತ್ತವೆ; ಬಂಡೆ ಸ್ಥಿರ" },
    },
    draw: (t) => `
      <path d="M4 260 q40 -30 80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 V376 H4 Z" fill="${C.blueLt}"/>
      <path d="M4 230 q30 -40 60 -10 q10 10 20 0 M560 230 q30 -40 60 -10" stroke="${C.blue}" stroke-width="4" fill="none"/>
      <path d="M230 300 L260 170 L320 140 L390 175 L420 300 Z" fill="#8B7B6B" stroke="#5A4B3E" stroke-width="3"/>
      <g stroke="${C.blue}" stroke-width="5" stroke-linecap="round" fill="none">
        <circle cx="322" cy="95" r="11" fill="${C.blue}" stroke="none"/>
        <path d="M322 108 V132 M300 145 Q322 128 344 145 M308 128 L322 118 L336 128"/></g>
      <circle cx="322" cy="95" r="26" fill="none" stroke="${C.gold}" stroke-width="2"/>
      ${T(90, 180, t.w[0], { s: 17, f: C.blue, w: 700 })}${T(90, 320, t.w[1], { s: 17, f: C.blue, w: 700 })}
      ${T(550, 180, t.w[2], { s: 17, f: C.blue, w: 700 })}${T(550, 320, t.w[3], { s: 17, f: C.blue, w: 700 })}
      ${T(320, 40, t.c, { s: 20, f: C.maroon, w: 800 })}
      ${T(320, 355, t.d, { s: 15, f: C.ink })}`,
  };

  I["balance-wheel"] = {
    labels: {
      en: { s: ["Food", "Sleep", "Work / Study", "Play / Rest"], c: "Yukta — balanced", d: "Not too much, not too little" },
      kn: { s: ["ಆಹಾರ", "ನಿದ್ರೆ", "ಕೆಲಸ / ಓದು", "ಆಟ / ವಿಶ್ರಾಂತಿ"], c: "ಯುಕ್ತ — ಸಮತೋಲಿತ", d: "ಅತಿಯೂ ಬೇಡ, ಕಡಿಮೆಯೂ ಬೇಡ" },
    },
    draw: (t) => {
      const cx = 230, cy = 195, r = 150;
      const cols = [C.saffronLt, C.blueLt, C.greenLt, "#F6D6DC"];
      const segs = [0, 1, 2, 3].map((i) => {
        const a0 = -Math.PI / 2 + (i * Math.PI) / 2, a1 = a0 + Math.PI / 2;
        const p = (a) => `${cx + r * Math.cos(a)} ${cy + r * Math.sin(a)}`;
        const am = (a0 + a1) / 2;
        return `<path d="M${cx} ${cy} L${p(a0)} A${r} ${r} 0 0 1 ${p(a1)} Z" fill="${cols[i]}" stroke="${C.gold}" stroke-width="3"/>
          ${T(cx + 92 * Math.cos(am), cy + 92 * Math.sin(am) + 6, t.s[i], { s: 17, w: 700, f: C.blue })}`;
      }).join("");
      let spokes = "";
      for (let i = 0; i < 8; i++) {
        const a = (i * Math.PI) / 4;
        spokes += `<line x1="${cx + 40 * Math.cos(a)}" y1="${cy + 40 * Math.sin(a)}" x2="${cx + r * Math.cos(a)}" y2="${cy + r * Math.sin(a)}" stroke="${C.gold}" stroke-width="1.5" opacity="0.6"/>`;
      }
      return `${segs}${spokes}
        <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${C.maroon}" stroke-width="10"/>
        <circle cx="${cx}" cy="${cy}" r="30" fill="${C.maroon}"/><circle cx="${cx}" cy="${cy}" r="10" fill="${C.gold}"/>
        ${T(495, 170, t.c, { s: 20, f: C.maroon, w: 800 })}
        ${T(495, 205, t.d, { s: 16 })}
        ${T(495, 240, "6.16–17", { s: 13, f: C.grey })}`;
    },
  };

  I["three-pillars"] = {
    labels: {
      en: { p: ["Humility", "Questions", "Service"], d: ["praṇipāta", "paripraśna", "sevā"], c: "Knowledge" },
      kn: { p: ["ನಮ್ರತೆ", "ಪ್ರಶ್ನೆ", "ಸೇವೆ"], d: ["ಪ್ರಣಿಪಾತ", "ಪರಿಪ್ರಶ್ನ", "ಸೇವಾ"], c: "ಜ್ಞಾನ" },
    },
    draw: (t) => `
      ${diya(320, 78, 1)}
      ${T(420, 70, t.c, { s: 20, f: C.maroon, w: 800, a: "start" })}
      <path d="M130 110 L320 90 L510 110 Z" fill="${C.gold}"/>
      <rect x="120" y="110" width="400" height="22" fill="${C.saffron}"/>
      ${[170, 320, 470].map((x, i) => `
        <rect x="${x - 34}" y="132" width="68" height="170" fill="${C.parch}" stroke="${C.blue}" stroke-width="3"/>
        <g stroke="${C.blue}" stroke-width="1.5" opacity="0.5"><line x1="${x - 17}" y1="136" x2="${x - 17}" y2="298"/><line x1="${x}" y1="136" x2="${x}" y2="298"/><line x1="${x + 17}" y1="136" x2="${x + 17}" y2="298"/></g>
        ${T(x, 330, t.p[i], { s: 18, f: C.blue, w: 800 })}
        ${T(x, 352, t.d[i], { s: 14, f: C.green })}`).join("")}
      <rect x="110" y="302" width="420" height="10" fill="${C.blue}"/>`,
  };

  I["footsteps"] = {
    labels: {
      en: { a: "What you do…", b: "…is what they learn", c: "Lead by example" },
      kn: { a: "ನೀನು ಮಾಡುವುದು…", b: "…ಅವರು ಕಲಿಯುವುದು", c: "ಉದಾಹರಣೆಯಾಗಿ ಮುನ್ನಡೆಸು" },
    },
    draw: (t) => {
      const foot = (x, y, s, c, r) => `<g transform="translate(${x} ${y}) rotate(${r}) scale(${s})" fill="${c}">
        <ellipse cx="0" cy="0" rx="14" ry="24"/><circle cx="-9" cy="-30" r="4.5"/><circle cx="-2" cy="-33" r="4.5"/><circle cx="5" cy="-32" r="4"/><circle cx="11" cy="-28" r="3.5"/></g>`;
      let big = "", small = "";
      for (let i = 0; i < 5; i++) big += foot(80 + i * 110, i % 2 ? 110 : 150, 1.2, C.saffron, 80);
      for (let i = 0; i < 7; i++) small += foot(60 + i * 80, i % 2 ? 240 : 270, 0.7, C.blue, 80);
      return `${big}${small}
        ${T(320, 60, t.a, { s: 19, f: C.saffron, w: 800 })}
        ${T(320, 320, t.b, { s: 19, f: C.blue, w: 800 })}
        ${T(320, 355, t.c, { s: 15 })}`;
    },
  };

  I["speech-filter"] = {
    labels: {
      en: { f: ["Is it true?", "Does it avoid hurt?", "Is it pleasant?", "Does it help?"], in: "Words", out: "Speak!" },
      kn: { f: ["ಸತ್ಯವೇ?", "ನೋವು ತರುವುದಿಲ್ಲವೇ?", "ಪ್ರಿಯವೇ?", "ಹಿತವೇ?"], in: "ಮಾತುಗಳು", out: "ಮಾತನಾಡು!" },
    },
    draw: (t) => {
      const cols = [C.blue, C.green, C.lotus, C.saffron];
      const layers = t.f.map((s, i) => {
        const y = 60 + i * 62, w = 360 - i * 60;
        return `<rect x="${260 - w / 2}" y="${y}" width="${w}" height="46" rx="10" fill="${cols[i]}"/>
          ${T(260, y + 30, `${i + 1}. ${s}`, { s: 16, f: "#fff", w: 700 })}`;
      }).join("");
      return `
        <g fill="${C.grey}" opacity="0.7"><circle cx="520" cy="56" r="5"/><circle cx="548" cy="44" r="4"/><circle cx="580" cy="60" r="6"/><circle cx="600" cy="40" r="4"/></g>
        ${T(550, 96, t.in, { s: 16, f: C.grey, w: 700 })}${arrow(505, 90, 448, 84, C.grey)}
        ${layers}
        ${arrow(260, 310, 260, 340, C.saffron)}
        <path d="M430 270 h160 a20 20 0 0 1 20 20 v30 a20 20 0 0 1 -20 20 h-120 l-20 18 v-18 h-20 a20 20 0 0 1 -20 -20 v-30 a20 20 0 0 1 20 -20 z" fill="${C.greenLt}" stroke="${C.green}" stroke-width="3"/>
        ${T(520, 312, t.out, { s: 20, f: C.green, w: 800 })}
        ${arrow(300, 330, 420, 305, C.green)}`;
    },
  };

  I["circle-of-care"] = {
    labels: {
      en: { q: ["No hatred", "Friendly", "Compassionate", "No ego", "Even-minded", "Forgiving"] },
      kn: { q: ["ದ್ವೇಷವಿಲ್ಲ", "ಮೈತ್ರಿ", "ಕರುಣೆ", "ಅಹಂಕಾರವಿಲ್ಲ", "ಸಮಚಿತ್ತ", "ಕ್ಷಮೆ"] },
    },
    draw: (t) => {
      const cx = 320, cy = 195;
      const cols = [C.blue, C.green, C.saffron, C.maroon, C.lotus, C.gold];
      const items = t.q.map((q, i) => {
        const a = -Math.PI / 2 + (i * Math.PI) / 3;
        const px = cx + 118 * Math.cos(a), py = cy + 118 * Math.sin(a);
        const lx = cx + 238 * Math.cos(a), ly = cy + 150 * Math.sin(a);
        return `<line x1="${cx}" y1="${cy}" x2="${px}" y2="${py}" stroke="${C.gold}" stroke-width="2" stroke-dasharray="4 5"/>
          <circle cx="${px}" cy="${py - 8}" r="11" fill="${cols[i]}"/>
          <path d="M${px - 16} ${py + 22} q16 -30 32 0 z" fill="${cols[i]}"/>
          ${T(lx, ly + 6, q, { s: 16, f: C.ink, w: 700 })}`;
      }).join("");
      return `<circle cx="${cx}" cy="${cy}" r="118" fill="none" stroke="${C.gold}" stroke-width="3"/>
        ${items}
        <circle cx="${cx}" cy="${cy}" r="46" fill="#FDE1E6"/>
        ${heart(cx, cy, 2.4)}`;
    },
  };

  I["humble-offering"] = {
    labels: {
      en: { a: "A leaf, a flower, water", a2: "+ love", b: "Gold", b2: "without love", c: "Love outweighs cost" },
      kn: { a: "ಎಲೆ, ಹೂವು, ನೀರು", a2: "+ ಪ್ರೀತಿ", b: "ಚಿನ್ನ", b2: "ಪ್ರೀತಿ ಇಲ್ಲದೆ", c: "ಬೆಲೆಗಿಂತ ಪ್ರೀತಿ ಭಾರ" },
    },
    draw: (t) => `
      <path d="M320 80 L320 300" stroke="${C.blue}" stroke-width="8"/>
      <path d="M270 310 H370" stroke="${C.blue}" stroke-width="10" stroke-linecap="round"/>
      <circle cx="320" cy="76" r="12" fill="${C.gold}"/>
      <path d="M140 150 L500 70" stroke="${C.blue}" stroke-width="6" stroke-linecap="round"/>
      <g stroke="${C.blue}" stroke-width="2"><path d="M140 150 L95 230 M140 150 L185 230 M500 70 L455 150 M500 70 L545 150"/></g>
      <path d="M85 230 Q140 265 195 230 Z" fill="${C.greenLt}" stroke="${C.green}" stroke-width="3"/>
      <path d="M445 150 Q500 185 555 150 Z" fill="${C.greyLt}" stroke="${C.grey}" stroke-width="3"/>
      <path d="M108 226 q10 -30 30 -26 q-6 22 -30 26 z" fill="${C.green}"/>
      <g transform="translate(150 214)"><circle r="6" fill="${C.gold}"/>${[0, 1, 2, 3, 4].map((i) => `<ellipse cx="${10 * Math.cos(i * 1.256)}" cy="${10 * Math.sin(i * 1.256)}" rx="6" ry="4" fill="${C.lotus}" transform="rotate(${i * 72} ${10 * Math.cos(i * 1.256)} ${10 * Math.sin(i * 1.256)})"/>`).join("")}</g>
      <path d="M176 226 q-8 -12 0 -22 q8 10 0 22 z" fill="#5BA3D0"/>
      ${heart(140, 196, 1.1)}
      <g fill="${C.gold}" stroke="#8C6D12" stroke-width="2"><ellipse cx="482" cy="144" rx="16" ry="6"/><ellipse cx="500" cy="136" rx="16" ry="6"/><ellipse cx="518" cy="144" rx="16" ry="6"/><ellipse cx="500" cy="128" rx="16" ry="6"/></g>
      ${T(140, 290, t.a, { s: 16, f: C.green, w: 700 })}${T(140, 312, t.a2, { s: 16, f: C.lotus, w: 800 })}
      ${T(500, 212, t.b, { s: 16, f: C.grey, w: 700 })}${T(500, 234, t.b2, { s: 15, f: C.grey })}
      ${T(320, 355, t.c, { s: 19, f: C.blue, w: 800 })}`,
  };

  I["old-new-clothes"] = {
    labels: {
      en: { a: "Worn-out", b: "New", c: "The self — unchanged", d: "Bodies change like clothes" },
      kn: { a: "ಹಳೆಯದು", b: "ಹೊಸದು", c: "ಆತ್ಮ — ಬದಲಾಗದ್ದು", d: "ಬಟ್ಟೆಯಂತೆ ದೇಹ ಬದಲಾಗುತ್ತದೆ" },
    },
    draw: (t) => {
      const shirt = (x, fill, stroke, torn) => `<g transform="translate(${x} 110)">
        <path d="M-50 0 L-20 -10 Q0 8 20 -10 L50 0 L70 40 L45 50 L45 130 L-45 130 L-45 50 L-70 40 Z" fill="${fill}" stroke="${stroke}" stroke-width="3"/>
        ${torn ? `<path d="M-20 70 l10 10 l-8 8 l12 10 M20 110 l-6 -10 l8 -6" stroke="${stroke}" stroke-width="2.5" fill="none"/><circle cx="25" cy="60" r="5" fill="${C.parch}" stroke="${stroke}"/>` : `<path d="M0 0 V130" stroke="${stroke}" stroke-width="1.5" opacity="0.5"/>`}
        <circle cx="0" cy="-10" r="4" fill="${C.ink}"/></g>`;
      return `<path d="M30 96 Q320 130 610 96" stroke="${C.ink}" stroke-width="3" fill="none"/>
        ${shirt(130, C.greyLt, C.grey, true)}
        ${shirt(510, C.saffronLt, C.saffron, false)}
        <circle cx="320" cy="200" r="60" fill="#FFF3C4" opacity="0.8"/>
        ${diya(320, 235, 1.4)}
        ${arrow(200, 200, 256, 200, C.gold)}${arrow(384, 200, 440, 200, C.gold)}
        ${T(130, 280, t.a, { s: 18, f: C.grey, w: 700 })}
        ${T(510, 280, t.b, { s: 18, f: C.saffron, w: 700 })}
        ${T(320, 300, t.c, { s: 17, f: C.maroon, w: 800 })}
        ${T(320, 350, t.d, { s: 16, f: C.blue })}
        ${T(320, 40, "2.22", { s: 13, f: C.grey })}`;
    },
  };

  I["reflect-choose"] = {
    labels: {
      en: { s: ["Listen", "Reflect fully", "Choose freely"], d: ["gather wisdom", "think it through", "and own it"] },
      kn: { s: ["ಆಲಿಸು", "ಸಂಪೂರ್ಣ ವಿಮರ್ಶಿಸು", "ಸ್ವತಂತ್ರವಾಗಿ ಆರಿಸು"], d: ["ಜ್ಞಾನ ಸಂಗ್ರಹಿಸು", "ಆಳವಾಗಿ ಯೋಚಿಸು", "ಹೊಣೆ ಹೊರು"] },
    },
    draw: (t) => {
      const xs = [110, 320, 530];
      const icons = [
        `<path d="M-14 -20 q24 -10 28 16 q2 16 -12 22 q-6 4 -4 14 q-10 8 -18 -2" fill="none" stroke="${C.blue}" stroke-width="6" stroke-linecap="round"/><path d="M-4 -4 q8 -6 10 4" fill="none" stroke="${C.blue}" stroke-width="4"/>`,
        `${diya(0, 22, 0.8)}`,
        `<path d="M0 30 V0 M0 0 L-22 -26 M0 0 L22 -26" stroke="${C.grey}" stroke-width="6" stroke-linecap="round" fill="none"/><path d="M0 0 L22 -26" stroke="${C.saffron}" stroke-width="7" stroke-linecap="round"/><polygon points="28,-33 12,-26 24,-16" fill="${C.saffron}"/>`,
      ];
      const fills = [C.blueLt, "#FDE8C8", C.greenLt];
      return `${xs.map((x, i) => `<circle cx="${x}" cy="170" r="72" fill="${fills[i]}" stroke="${C.gold}" stroke-width="3"/>
          <g transform="translate(${x} 170)">${icons[i]}</g>
          ${T(x, 286, t.s[i], { s: 18, f: C.blue, w: 800 })}
          ${T(x, 310, t.d[i], { s: 14 })}`).join("")}
        ${arrow(188, 170, 242, 170)}${arrow(398, 170, 452, 170)}
        ${T(320, 60, "vimṛśyaitad aśeṣeṇa yathecchasi tathā kuru", { s: 15, f: C.maroon })}`;
    },
  };

  window.GITA_ILLUSTRATIONS = {
    render(id, lang) {
      const il = I[id];
      if (!il) return "";
      const t = il.labels[lang] || il.labels.en;
      return frame(il.draw(t), Object.values(t).flat().join(", "));
    },
    ids: Object.keys(I),
  };
})();
