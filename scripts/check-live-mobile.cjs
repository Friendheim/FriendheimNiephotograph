// Mobile overflow check against the LIVE site, one width per run.
const { app, BrowserWindow } = require('electron')
const wait = (ms) => new Promise((r) => setTimeout(r, ms))
app.disableHardwareAcceleration()

const W = Number(process.env.CHK_W) || 390
const BASE = 'https://friendheim.github.io/FriendheimNiephotograph/'

const FIND = `(() => {
  const vw = window.innerWidth
  const bad = []
  for (const el of document.querySelectorAll('*')) {
    const r = el.getBoundingClientRect()
    if (r.right > vw + 1 || r.left < -1) {
      bad.push((el.tagName + (typeof el.className === 'string' && el.className ? '.' + el.className.trim().split(/\\s+/)[0] : '')) + ' [r=' + Math.round(r.right) + ' l=' + Math.round(r.left) + ']')
    }
  }
  return { vw, count: bad.length, bad: bad.slice(0, 10) }
})()`

app.whenReady().then(async () => {
  for (const page of ['', '#/work', '#/about']) {
    const win = new BrowserWindow({ width: W, height: 844, show: false })
    try {
      await win.loadURL(BASE + page + '?cb=' + Date.now())
      await wait(3500)
      const res = await win.webContents.executeJavaScript(FIND)
      console.log(W + 'px ' + (page || 'home') + ': count=' + res.count + (res.count ? ' bad=' + res.bad.slice(0, 3).join(' | ') : ''))
    } catch (e) {
      console.log(W + 'px ' + page + ': ERR ' + e.message)
    }
    win.destroy()
    await wait(500)
  }
  app.exit(0)
})
