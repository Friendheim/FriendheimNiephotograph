// Runtime smoke test: loads the site in a real Chromium (Electron) window,
// verifies key behaviors, captures screenshots into ../smoke-out, and exits
// non-zero on any failure. Run with:
//   <electron.exe> scripts/smoke.cjs
// (uses the dev server at http://127.0.0.1:5173 by default)

const { app, BrowserWindow } = require('electron')
const fs = require('node:fs')
const path = require('node:path')

const BASE = process.env.SMOKE_BASE || 'http://127.0.0.1:5173/'
const OUT = path.join(__dirname, '..', 'smoke-out')

const results = []
const consoleErrors = []
let failures = 0

function check(name, ok, detail) {
  results.push(`${ok ? 'PASS' : 'FAIL'} ${name}${detail ? ' — ' + String(detail) : ''}`)
  if (!ok) failures++
}

const wait = (ms) => new Promise((r) => setTimeout(r, ms))

async function shot(win, file) {
  const img = await win.webContents.capturePage()
  fs.writeFileSync(path.join(OUT, file), img.toPNG())
}

app.disableHardwareAcceleration()

app.whenReady().then(async () => {
  fs.mkdirSync(OUT, { recursive: true })
  const win = new BrowserWindow({ width: 1440, height: 1000, show: true })

  win.webContents.on('console-message', (_e, level, message) => {
    if (level >= 3) consoleErrors.push(message)
  })

  try {
    // ---------- Home ----------
    await win.loadURL(BASE)
    await wait(2200)
    const home = await win.webContents.executeJavaScript(`(() => {
      const h1 = document.querySelector('h1')
      const slogan = document.querySelector('.hero-slogan')
      const img = document.querySelector('.hero-figure img')
      return {
        title: document.title,
        h1: h1 && h1.textContent.trim(),
        slogan: slogan && slogan.textContent.trim(),
        heroLoaded: !!img && img.complete && img.naturalWidth > 0,
        workCards: document.querySelectorAll('.work-card').length,
      }
    })()`)
    check('page title', /FriendheimNie/.test(home.title), home.title)
    check('home h1 = name', home.h1 === 'FriendheimNie', home.h1)
    check('slogan shown', home.slogan === 'Quiet moments, honestly observed.', home.slogan)
    check('hero image loads', home.heroLoaded)
    check('3 featured cards', home.workCards === 3, home.workCards)
    await shot(win, 'home-light.png')

    // ---------- Theme toggle ----------
    await win.webContents.executeJavaScript(`document.querySelector('.theme-toggle').click()`)
    await wait(500)
    const theme = await win.webContents.executeJavaScript(
      `document.documentElement.getAttribute('data-theme')`
    )
    check('theme switches to dark', theme === 'dark', theme)
    await shot(win, 'home-dark.png')
    await win.webContents.executeJavaScript(`document.querySelector('.theme-toggle').click()`)
    await wait(300)

    // ---------- Portfolio ----------
    await win.loadURL(BASE + '#/work')
    await wait(1800)
    const work = await win.webContents.executeJavaScript(`(() => ({
      cards: document.querySelectorAll('.masonry .work-card').length,
      imgs: [...document.querySelectorAll('.masonry img')].filter(i => i.complete && i.naturalWidth > 0).length,
      filters: document.querySelectorAll('.filter-btn').length,
    }))()`)
    check('work grid has 12 cards', work.cards === 12, work.cards)
    check('all 12 images loaded', work.imgs === 12, work.imgs)
    check('5 filter buttons', work.filters === 5, work.filters)
    await shot(win, 'work-light.png')

    // ---------- Category filter ----------
    await win.webContents.executeJavaScript(
      `[...document.querySelectorAll('.filter-btn')].find(b => b.textContent.trim() === 'Portrait').click()`
    )
    await wait(900)
    const filt = await win.webContents.executeJavaScript(
      `document.querySelectorAll('.masonry .work-card').length`
    )
    check('Portrait filter → 3 cards', filt === 3, filt)
    await shot(win, 'work-portrait.png')

    // ---------- Lightbox ----------
    await win.webContents.executeJavaScript(`document.querySelector('.masonry .work-card').click()`)
    await wait(800)
    const lb = await win.webContents.executeJavaScript(`(() => {
      const d = document.querySelector('.lightbox')
      const h2 = document.querySelector('.lightbox-meta h2')
      return { open: !!d, title: h2 && h2.textContent.trim(), desc: !!document.querySelector('.lightbox-desc') }
    })()`)
    check('lightbox opens on click', lb.open)
    check('lightbox shows title', lb.title === 'Afternoon in the Window', lb.title)
    check('lightbox shows description', lb.desc)
    await shot(win, 'lightbox.png')

    await win.webContents.executeJavaScript(
      `document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }))`
    )
    await wait(400)
    const closed = await win.webContents.executeJavaScript(`!document.querySelector('.lightbox')`)
    check('Esc closes lightbox', closed)

    // ---------- About ----------
    await win.loadURL(BASE + '#/about')
    await wait(1400)
    const about = await win.webContents.executeJavaScript(`(() => {
      const h1 = document.querySelector('h1')
      const img = document.querySelector('.about-figure img')
      return {
        h1: h1 && h1.textContent.trim(),
        avatarLoaded: !!img && img.complete && img.naturalWidth > 0,
        equip: document.querySelectorAll('.equip-list li').length,
      }
    })()`)
    check('about h1', about.h1 === 'About me', about.h1)
    check('avatar image loads', about.avatarLoaded)
    check('equipment list has 4 items', about.equip === 4, about.equip)
    await shot(win, 'about.png')

    // ---------- Contact ----------
    await win.loadURL(BASE + '#/contact')
    await wait(1200)
    const contact = await win.webContents.executeJavaScript(`(() => {
      const mailto = document.querySelector('a.btn-primary')
      const ig = document.querySelector('a.btn-ghost')
      return { mailto: mailto && mailto.getAttribute('href'), ig: ig && ig.textContent.trim() }
    })()`)
    check('mailto button', /friendheimguo@gmail\.com/.test(contact.mailto), contact.mailto)
    check('instagram button', contact.ig === '@friendheimgyh', contact.ig)
    await shot(win, 'contact.png')
  } catch (e) {
    check('smoke run', false, e && e.stack ? e.stack.split('\n')[0] : e)
  }

  console.log(results.join('\n'))
  if (consoleErrors.length) console.log('CONSOLE_ERRORS:\n' + consoleErrors.join('\n'))
  console.log(failures === 0 ? 'SMOKE_ALL_PASS' : `SMOKE_FAILURES=${failures}`)
  app.exit(failures === 0 ? 0 : 1)
})
