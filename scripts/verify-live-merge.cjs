// Verify the LIVE site: merged About+Essay, 5-link nav, no mobile overflow.
const { app, BrowserWindow } = require('electron')
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
app.disableHardwareAcceleration()
const BASE = 'https://friendheim.github.io/FriendheimNiephotograph/'

app.whenReady().then(async () => {
  // wait for the dispatched run to finish
  for (let i = 0; i < 40; i++) {
    const runs = await fetch('https://api.github.com/repos/Friendheim/FriendheimNiephotograph/actions/runs?per_page=1').then((r) => r.json())
    const run = (runs.workflow_runs || [])[0]
    if (run && run.status === 'completed' && run.conclusion === 'success') { console.log('deploy ok'); break }
    await sleep(15000)
  }
  await sleep(10000)

  const win = new BrowserWindow({ width: 390, height: 844, show: false })
  await win.loadURL(BASE + '?cb=' + Date.now())
  await sleep(3000)
  const home = await win.webContents.executeJavaScript(`(() => ({
    nav: [...document.querySelectorAll('.nav-link')].map(a => a.textContent.trim()),
    essayNav: [...document.querySelectorAll('.nav-link')].some(a => a.textContent.trim() === 'Essay' || a.textContent.trim() === '随笔'),
    overflow: document.documentElement.scrollWidth > window.innerWidth,
  }))()`)
  console.log('NAV:', JSON.stringify(home.nav))
  console.log('essay nav item present:', home.essayNav, '| home overflow:', home.overflow)

  await win.loadURL(BASE + '#/about?cb=' + Date.now())
  await sleep(3000)
  const about = await win.webContents.executeJavaScript(`(() => ({
    h1: (document.querySelector('h1') || {}).textContent || '',
    chapters: document.querySelectorAll('.essay-chapter').length,
    figures: document.querySelectorAll('.essay-figure').length,
    overflow: document.documentElement.scrollWidth > window.innerWidth,
  }))()`)
  console.log('ABOUT:', JSON.stringify(about))
  app.exit(0)
})
