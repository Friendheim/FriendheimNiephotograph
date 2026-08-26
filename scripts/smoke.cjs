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

// Expected counts come from the actual photos in src/assets/works/
const WORKS_ROOT = path.join(__dirname, '..', 'src', 'assets', 'works')
const IMG_EXT = /\.(jpe?g|png|webp)$/i
function countImages(dir) {
  if (!fs.existsSync(dir)) return 0
  return fs.readdirSync(dir, { withFileTypes: true }).reduce((n, e) => {
    if (e.isDirectory()) return n + countImages(path.join(dir, e.name))
    return n + (IMG_EXT.test(e.name) ? 1 : 0)
  }, 0)
}
const EXPECTED_TOTAL = countImages(WORKS_ROOT)
const EXPECTED_PORTRAIT = countImages(path.join(WORKS_ROOT, 'portrait'))

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
    check('6 featured cards', home.workCards === 6, home.workCards)

    // ---------- Home featured lightbox ----------
    await win.webContents.executeJavaScript(`document.querySelector('.featured-grid .work-card').click()`)
    await wait(600)
    const homeLb = await win.webContents.executeJavaScript(`(() => {
      const d = document.querySelector('.lightbox')
      const h2 = document.querySelector('.lightbox-meta h2')
      return { open: !!d, title: h2 && h2.textContent.trim() }
    })()`)
    check('home featured opens lightbox', homeLb.open && homeLb.title === 'Wrist in Blue', homeLb.title)
    await win.webContents.executeJavaScript(
      `document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }))`
    )
    await wait(300)
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
    await wait(4000) // let Vite finish first-pass module compilation
    // scroll through the grid so lazy-loaded images count reliably (retry loop)
    let loadedImgs = 0
    for (let attempt = 0; attempt < 3 && loadedImgs < EXPECTED_TOTAL; attempt++) {
      await win.webContents.executeJavaScript(`(async () => {
        for (let y = 0; y <= document.body.scrollHeight; y += 600) {
          window.scrollTo(0, y)
          await new Promise(r => setTimeout(r, 120))
        }
        window.scrollTo(0, 0)
      })()`)
      await wait(1500)
      loadedImgs = await win.webContents.executeJavaScript(
        `[...document.querySelectorAll('.masonry img')].filter(i => i.complete && i.naturalWidth > 0).length`
      )
    }
    const work = await win.webContents.executeJavaScript(`(() => ({
      cards: document.querySelectorAll('.masonry .work-card').length,
      filters: document.querySelectorAll('.filter-btn').length,
    }))()`)
    check('work grid matches photos on disk', work.cards === EXPECTED_TOTAL, `${work.cards} vs ${EXPECTED_TOTAL}`)
    check('all work images loaded', loadedImgs === EXPECTED_TOTAL, `${loadedImgs}/${EXPECTED_TOTAL}`)
    check('9 filter buttons', work.filters === 9, work.filters)
    await shot(win, 'work-light.png')

    // ---------- Category filter ----------
    await win.webContents.executeJavaScript(
      `[...document.querySelectorAll('.filter-btn')].find(b => b.textContent.trim() === 'Faces').click()`
    )
    await wait(900)
    const filt = await win.webContents.executeJavaScript(
      `document.querySelectorAll('.masonry .work-card').length`
    )
    check('Faces filter matches portrait folder', filt === EXPECTED_PORTRAIT, `${filt} vs ${EXPECTED_PORTRAIT}`)
    await shot(win, 'work-portrait.png')

    // ---------- Lightbox ----------
    await win.webContents.executeJavaScript(`document.querySelector('.masonry .work-card').click()`)
    await wait(800)
    const lb = await win.webContents.executeJavaScript(`(() => {
      const d = document.querySelector('.lightbox')
      const h2 = document.querySelector('.lightbox-meta h2')
      return { open: !!d, title: h2 && h2.textContent.trim(), desc: !!document.querySelector('.lightbox-desc'), facts: !!document.querySelector('.lightbox-facts') }
    })()`)
    check('lightbox opens on click', lb.open)
    check('lightbox shows title', lb.title === 'Wrist in Blue', lb.title)
    check('lightbox shows description, hides empty facts', lb.desc && !lb.facts)
    await shot(win, 'lightbox.png')

    await win.webContents.executeJavaScript(
      `document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }))`
    )
    await wait(400)
    const closed = await win.webContents.executeJavaScript(`!document.querySelector('.lightbox')`)
    check('Esc closes lightbox', closed)

    // ---------- Creative filter ----------
    await win.webContents.executeJavaScript(
      `[...document.querySelectorAll('.filter-btn')].find(b => b.textContent.trim() === 'Creative').click()`
    )
    await wait(700)
    const creative = await win.webContents.executeJavaScript(`(() => ({
      cards: document.querySelectorAll('.masonry .work-card').length,
    }))()`)
    check('Creative filter matches creative folder', creative.cards === countImages(path.join(WORKS_ROOT, 'creative')), `${creative.cards} cards`)

    // ---------- Odyssey filter ----------
    await win.webContents.executeJavaScript(
      `[...document.querySelectorAll('.filter-btn')].find(b => b.textContent.trim() === 'Odyssey').click()`
    )
    await wait(700)
    const odyssey = await win.webContents.executeJavaScript(`(() => ({
      cards: document.querySelectorAll('.masonry .work-card').length,
      first: (document.querySelector('.masonry .work-title') || {}).textContent || '',
    }))()`)
    check('Odyssey filter matches odyssey folder', odyssey.cards === countImages(path.join(WORKS_ROOT, 'odyssey')), `${odyssey.cards} cards`)
    check('Odyssey first title is The Passage', odyssey.first === 'The Passage', odyssey.first)

    // ---------- Memory filter ----------
    await win.webContents.executeJavaScript(
      `[...document.querySelectorAll('.filter-btn')].find(b => b.textContent.trim() === 'Memory').click()`
    )
    await wait(700)
    const memory = await win.webContents.executeJavaScript(`(() => ({
      cards: document.querySelectorAll('.masonry .work-card').length,
      first: (document.querySelector('.masonry .work-title') || {}).textContent || '',
    }))()`)
    check('Memory filter shows 2 cards', memory.cards === 2, memory.cards)
    check('Memory first title is Memory of the Coast', memory.first === 'Memory of the Coast', memory.first)

    // ---------- Outside the Frame filter ----------
    await win.webContents.executeJavaScript(
      `[...document.querySelectorAll('.filter-btn')].find(b => b.textContent.trim() === 'Outside the Frame').click()`
    )
    await wait(700)
    const frame = await win.webContents.executeJavaScript(`(() => ({
      cards: document.querySelectorAll('.masonry .work-card').length,
      first: (document.querySelector('.masonry .work-title') || {}).textContent || '',
    }))()`)
    check('Outside the Frame shows 4 cards', frame.cards === 4, frame.cards)
    check('Outside the Frame first title is Spire Through Three Realities', frame.first === 'Spire Through Three Realities', frame.first)

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
    check('mailto button', /friendheimnie@gmail\.com/.test(contact.mailto), contact.mailto)
    check('instagram button', contact.ig === '@friendheimnie', contact.ig)
    await shot(win, 'contact.png')
  } catch (e) {
    check('smoke run', false, e && e.stack ? e.stack.split('\n')[0] : e)
  }

  console.log(results.join('\n'))
  if (consoleErrors.length) console.log('CONSOLE_ERRORS:\n' + consoleErrors.join('\n'))
  console.log(failures === 0 ? 'SMOKE_ALL_PASS' : `SMOKE_FAILURES=${failures}`)
  app.exit(failures === 0 ? 0 : 1)
})
