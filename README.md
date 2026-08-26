# FriendheimNie — Photography Portfolio

A personal photography portfolio for **FriendheimNie** (Independent Photographer),
built with **React + Vite** and hand-written CSS. Warm, quiet, editorial design —
soft cream / warm gray / deep brown / muted terracotta, with a warm dark mode.

> 中文说明见文末「快速指南」。

## Quick start

```bash
npm install        # install dependencies
npm run dev        # start dev server → http://localhost:5173
```

Production build:

```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build locally
```

Requirements: Node.js 18+ (tested with Node 24 / npm 11).

## Project structure

```
├── index.html                  # fonts, meta, pre-paint theme script
├── public/images/              # hero + avatar photos
│   ├── hero.jpg                #   home page hero
│   └── avatar.jpg              #   about page portrait
├── src/assets/works/           # ← ALL PORTFOLIO PHOTOS (auto-detected)
│   ├── portrait/               #   photos in here → "Portrait" category
│   ├── street/                 #   → "Street"
│   └── travel/                 #   → "Travel" (incl. former landscape shots)
├── scripts/
│   └── download-images.mjs     # one-off helper to (re)fetch placeholders
└── src/
    ├── data/
    │   ├── site.js             # ← name, role, slogan, email, Instagram, bio
    │   └── works.js            # ← optional titles / locations / descriptions
    ├── components/             # Navbar, Footer, Lightbox, Reveal, ThemeToggle…
    └── pages/                  # Home / Work / About / Contact
```

## 🖼 Using your own photos (auto-detected)

**Portfolio photos** — just drop files into the category folders
(`src/assets/works/portrait/`, `street/`, `travel/`).
Every `.jpg` / `.jpeg` / `.png` / `.webp` you put there appears on the
site automatically — no code to touch, any number of photos:

- Title comes from the file name (`golden-hour.jpg` → "Golden Hour") —
  rename the file to change the title.
- The folder name becomes the category (add a new folder to add a category).
- For a custom title / location / date / description / alt text, add one
  entry in `src/data/works.js` → `overrides`, keyed by `category/filename`.

**Hero & avatar** — replace `public/images/hero.jpg` and
`public/images/avatar.jpg` (keep the same file names).

> Tip: keep each photo under ~1–2 MB (resize long edge to ~1600–2000 px) so
> the site stays fast. JPEG/WebP preferred.

To re-fetch the 30 placeholders: `node scripts/download-images.mjs`

## ✏️ Editing your information

Everything personal lives in **`src/data/site.js`**:

| What | Where |
| --- | --- |
| Name | `site.name` |
| Role (首页身份) | `site.role` |
| Slogan | `site.slogan` |
| Email | `site.email` |
| Instagram handle + link | `site.instagramHandle`, `site.instagramUrl` |
| Home intro paragraph | `site.hero.intro` |
| About philosophy / story | `site.about.philosophy[]`, `site.about.story` |
| Equipment list | `site.about.equipment[]` |
| Contact invitation text | `site.contact.intro` |

Portfolio works are auto-detected from the folders in
`src/assets/works/` (see above). Titles / locations / dates / descriptions
are customized in `src/data/works.js` → `overrides` — add or remove entries
freely; each is keyed by `category/filename`.

Footer copyright is `© 2026 FriendheimNie` — the year is hard-coded in
`src/components/Footer.jsx` if you ever want to change it.

## Design & accessibility notes

- Responsive: desktop / tablet / phone (CSS columns masonry for the portfolio).
- Light/dark theme: toggle in the navbar; remembers your choice; respects
  `prefers-color-scheme` on first visit; dark mode stays warm (never pure black).
- Soft fade-up on scroll via IntersectionObserver; `prefers-reduced-motion`
  disables it.
- Work detail lightbox: opens on click, closes via backdrop / ✕ / `Esc`, traps
  keyboard focus, locks body scroll, restores focus on close.
- Every image has `alt` text, buttons have visible `:focus-visible` outlines,
  and there is a skip-to-content link.
- Typography: Fraunces (editorial serif) + Inter (clean sans) via Google Fonts,
  with system-serif fallbacks when offline.

## Running the checks (optional)

```bash
npm run build                       # production build (outputs to dist/)
npm run preview                     # serve the production build locally

# Runtime smoke tests (need a running server + Electron, e.g. from
# `dsh plugin --profile web add electron`):
node scripts/download-images.mjs    # (re)fetch placeholder photos
electron scripts/smoke.cjs          # functional checks (19 assertions)
electron scripts/style-audit.cjs    # palette / typography / responsive checks
```

## Customizing colors & fonts

- Palette and theme tokens: `src/index.css` → `:root` / `[data-theme='dark']`.
- Fonts: swap the Google Fonts `<link>` in `index.html` and the
  `--font-display` / `--font-body` variables.

---

## 快速指南（中文）

- **启动**：`npm install` → `npm run dev`，浏览器打开 http://localhost:5173
- **替换照片**：把照片放进 `public/images/`，保持文件名不变即可（详情见上方表格）；
  重新下载占位图：`node scripts/download-images.mjs`
- **修改个人信息**：姓名、身份、Slogan、邮箱、Instagram、简介、设备清单都在
  `src/data/site.js`；作品标题/分类/地点/日期/描述在 `src/data/works.js`
- **改色/字体**：`src/index.css` 顶部的设计变量，以及 `index.html` 里的字体链接
