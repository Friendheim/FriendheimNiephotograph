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
├── public/
│   └── images/                 # ← ALL PHOTOS LIVE HERE
│       ├── hero.jpg            #   home page hero
│       ├── avatar.jpg          #   about page portrait
│       └── works/              #   12 portfolio images
├── scripts/
│   └── download-images.mjs     # one-off helper to (re)fetch placeholders
└── src/
    ├── data/
    │   ├── site.js             # ← name, role, slogan, email, Instagram, bio
    │   └── works.js            # ← titles, categories, locations, descriptions
    ├── components/             # Navbar, Footer, Lightbox, Reveal, ThemeToggle…
    └── pages/                  # Home / Work / About / Contact
```

## 🖼 Replacing the placeholder photos

All photos are **placeholders** fetched from [picsum.photos](https://picsum.photos)
(free, no key). To use your own photos:

1. Put your photos in `public/images/` (keep the same file names to avoid touching code):
   - `public/images/hero.jpg` — home hero (portrait crop, ~4:5)
   - `public/images/avatar.jpg` — about page portrait (~4:5)
   - `public/images/works/*.jpg` — portfolio pieces
2. Or drop files anywhere under `public/` and edit the paths in `src/data/works.js`
   and `src/data/site.js` (e.g. `image: 'images/works/my-photo.jpg'`).
3. Keep the `alt` text accurate in `src/data/works.js` / `src/data/site.js`.

To re-fetch the placeholders: `node scripts/download-images.mjs`

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

Portfolio works (titles, categories, locations, dates, descriptions) live in
**`src/data/works.js`** — add or remove objects freely; the four filter
categories are defined in `categories`.

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
