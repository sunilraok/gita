# Gita for Everyday Life · ನಿತ್ಯ ಜೀವನಕ್ಕೆ ಗೀತೆ

A bilingual (English / ಕನ್ನಡ) website presenting 21 widely loved Bhagavad Gita
shlokas for students and everyday life at home and at work. Each shloka has a
simple meaning, how it applies to students, home and work, a story, a
misreading to avoid, a daily practice, and an illustration.

Shlokas can be shown in **Devanagari**, **English letters** or **Kannada
letters**. The default follows the chosen language.

## View the site

Open `site/index.html` in a browser. It needs no server or build step.

## Edit content

1. Edit or add a file in `content/shlokas/` (one YAML file per shloka, with `en` and `kn` sections).
2. Run `python3 scripts/build.py` (needs `pyyaml`). This regenerates `site/data/shlokas.js`.

The Sanskrit text is never typed by hand. It comes from the public-domain
[gita/gita](https://github.com/gita/gita) dataset (cached in `data/gita-verses.json`),
and the Kannada script is generated from the Devanagari.

## Publish

`.github/workflows/pages.yml` deploys `site/` to GitHub Pages on every push to
`main`. To turn it on, go to **Settings → Pages → Source** and choose **GitHub Actions**.

## Plan

See [PLAN.md](PLAN.md) for sources, selection method, decisions and next phases.
The first sample graphics are in `design/samples/`.
