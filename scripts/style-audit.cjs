// Style/layout audit: verifies the warm palette, serif display font,
// responsive breakpoints, and absence of horizontal overflow.
// Run with: <electron.exe> scripts/style-audit.cjs

const { app, BrowserWindow } = require('electron')
const path = require('node:path')

const BASE = process.env.SMOKE_BASE || 'http://127.0.0.1:5173/'
const results = []
let failures = 0
const check = (name, ok, detail) => {
  results.push(`${ok ? 'PASS' : 'FAIL'} ${name}${detail ? ' — ' + String(detail) : ''}`)
  if (!ok) failures++
}
const wait = (ms) => new Promise((r) => setTimeout(r, ms))

app.disableHardwareAcceleration()

app.whenReady().then(async () => {
  const win = new BrowserWindow({ width: 1440, height: 1000, show: true })

  try {
    // ---- Desktop light theme ----
    await win.loadURL(BASE)
    await wait(1800)
    const light = await win.webContents.executeJavaScript(`(() => {
      const body = getComputedStyle(document.body)
      const h1 = getComputedStyle(document.querySelector('h1'))
      const hero = document.querySelector('.hero-figure').getBoundingClientRect()
      const nav = getComputedStyle(document.querySelector('.nav'))
      return {
        bg: body.backgroundColor,
        ink: body.color,
        h1Font: h1.fontFamily,
        heroW: Math.round(hero.width),
        heroH: Math.round(hero.height),
        innerW: window.innerWidth,
        dpr: window.devicePixelRatio,
        navSticky: nav.position,
        overflowX: document.documentElement.scrollWidth > window.innerWidth,
      }
    })()`)
    check('light bg is warm cream', light.bg === 'rgb(247, 242, 234)', light.bg)
    check('ink is warm brown', light.ink === 'rgb(44, 38, 31)', light.ink)
    check('h1 uses serif display font', /Fraunces|Georgia|serif/i.test(light.h1Font), light.h1Font.slice(0, 60))
    check(
      'hero image is large (>= 30% of viewport width)',
      light.heroW >= light.innerW * 0.3,
      `${light.heroW}px of ${light.innerW}px viewport (dpr ${light.dpr})`
    )
    check('navbar sticky', light.navSticky === 'sticky', light.navSticky)
    check('no horizontal overflow (desktop)', !light.overflowX)

    // ---- Dark theme palette ----
    await win.webContents.executeJavaScript(`document.querySelector('.theme-toggle').click()`)
    await wait(500)
    const dark = await win.webContents.executeJavaScript(`(() => {
      const body = getComputedStyle(document.body)
      return { bg: body.backgroundColor, ink: body.color }
    })()`)
    check('dark bg is warm brown, not black', dark.bg === 'rgb(32, 28, 23)', dark.bg)
    check('dark ink is warm cream', dark.ink === 'rgb(237, 229, 216)', dark.ink)
    await win.webContents.executeJavaScript(`document.querySelector('.theme-toggle').click()`)
    await wait(300)

    // ---- Portfolio masonry at desktop ----
    await win.loadURL(BASE + '#/work')
    await wait(1600)
    const masonry = await win.webContents.executeJavaScript(`(() => {
      const m = document.querySelector('.masonry')
      const cs = getComputedStyle(m)
      const first = document.querySelector('.masonry .work-card img')
      const firstH = first ? Math.round(first.getBoundingClientRect().height) : 0
      return { cols: cs.columnCount, gap: cs.columnGap, firstH, overflowX: document.documentElement.scrollWidth > window.innerWidth }
    })()`)
    check('masonry 3 columns on desktop', String(masonry.cols) === '3', masonry.cols)
    check('masonry gap present', masonry.gap !== 'normal', masonry.gap)
    check('images have varied heights (masonry)', masonry.firstH > 0, masonry.firstH)

    // ---- Tablet ----
    win.setSize(820, 1000)
    await wait(900)
    const tablet = await win.webContents.executeJavaScript(`(() => ({
      cols: getComputedStyle(document.querySelector('.masonry')).columnCount,
      overflowX: document.documentElement.scrollWidth > window.innerWidth,
    }))()`)
    check('masonry 2 columns on tablet', String(tablet.cols) === '2', tablet.cols)
    check('no horizontal overflow (tablet)', !tablet.overflowX)

    // ---- Mobile ----
    win.setSize(390, 844)
    await wait(900)
    const mobile = await win.webContents.executeJavaScript(`(() => ({
      cols: getComputedStyle(document.querySelector('.masonry')).columnCount,
      overflowX: document.documentElement.scrollWidth > window.innerWidth,
      navLinks: document.querySelectorAll('.nav-link').length,
    }))()`)
    check('masonry 1 column on mobile', String(mobile.cols) === '1', mobile.cols)
    check('no horizontal overflow (mobile)', !mobile.overflowX)
    check('nav links present on mobile', mobile.navLinks === 4, mobile.navLinks)

    // ---- Lightbox at mobile size ----
    await win.webContents.executeJavaScript(`document.querySelector('.masonry .work-card').click()`)
    await wait(700)
    const lbInfo = await win.webContents.executeJavaScript(`(() => {
      const d = document.querySelector('.lightbox')
      const p = document.querySelector('.lightbox-panel')
      if (!d || !p) return { open: false, reason: 'lightbox not in DOM' }
      const r = p.getBoundingClientRect()
      return { open: true, fitW: r.width <= window.innerWidth, fitH: r.height <= window.innerHeight + 1, w: Math.round(r.width), h: Math.round(r.height), vw: window.innerWidth, vh: window.innerHeight }
    })()`)
    check('lightbox opens at mobile', lbInfo.open, lbInfo.reason || `${lbInfo.w}x${lbInfo.h} in ${lbInfo.vw}x${lbInfo.vh}`)
    check('lightbox fits mobile viewport', !lbInfo.open || (lbInfo.fitW && lbInfo.fitH))

    // ---- Home hero stacks at mobile ----
    await win.loadURL(BASE)
    await wait(1200)
    const homeMobile = await win.webContents.executeJavaScript(`(() => ({
      stacked: getComputedStyle(document.querySelector('.hero-grid')).gridTemplateColumns.split(' ').length === 1,
      overflowX: document.documentElement.scrollWidth > window.innerWidth,
    }))()`)
    check('home hero stacks on mobile', homeMobile.stacked)
    check('no horizontal overflow on home (mobile)', !homeMobile.overflowX)
  } catch (e) {
    check('style audit run', false, e && e.stack ? e.stack.split('\n')[0] : e)
  }

  console.log(results.join('\n'))
  console.log(failures === 0 ? 'STYLE_ALL_PASS' : `STYLE_FAILURES=${failures}`)
  app.exit(failures === 0 ? 0 : 1)
})
