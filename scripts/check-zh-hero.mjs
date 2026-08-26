// Verify zh-mode hero fix live.
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
const { app, BrowserWindow } = require('electron')
app.disableHardwareAcceleration()

app.whenReady().then(async () => {
  let done = false
  for (let i = 0; i < 40 && !done; i++) {
    const runs = await fetch('https://api.github.com/repos/Friendheim/FriendheimNiephotograph/actions/runs?per_page=1').then((r) => r.json())
    const run = (runs.workflow_runs || [])[0]
    if (run && run.status === 'completed' && run.conclusion === 'success') { console.log('run completed'); done = true }
    await sleep(15000)
  }
  await sleep(10000)
  const win = new BrowserWindow({ width: 1280, height: 900, show: false })
  await win.loadURL('https://friendheim.github.io/FriendheimNiephotograph/?cb=' + Date.now())
  await wait(2500)
  await win.webContents.executeJavaScript(`localStorage.setItem('fhn-lang', 'zh')`)
  await win.webContents.reload()
  await wait(2500)
  const r = await win.webContents.executeJavaScript(`(() => {
    const img = document.querySelector('.hero-figure img')
    return { src: img && img.src ? img.src.slice(-30) : null, loaded: !!img && img.complete && img.naturalWidth > 0 }
  })()`)
  console.log('zh hero:', JSON.stringify(r))
  app.exit(0)
})

function wait(ms) { return new Promise((r) => setTimeout(r, ms)) }
