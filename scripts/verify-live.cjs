// Watch deploy, then verify all live work images load after scrolling.
const { app, BrowserWindow } = require('electron')
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
const BASE = 'https://friendheim.github.io/friendheimnie/'
app.disableHardwareAcceleration()

async function waitForDeploy() {
  for (let i = 0; i < 40; i++) {
    const runs = await fetch('https://api.github.com/repos/Friendheim/friendheimnie/actions/runs?per_page=1').then((r) => r.json())
    const run = (runs.workflow_runs || [])[0]
    console.log('tick', i, run ? `run ${run.id} ${run.status} ${run.conclusion || ''}` : 'no runs')
    if (run && run.status === 'completed') return run.conclusion === 'success'
    await sleep(15000)
  }
  return false
}

app.whenReady().then(async () => {
  const ok = await waitForDeploy()
  if (!ok) { console.log('DEPLOY_FAILED_OR_TIMEOUT'); app.exit(1); return }
  await sleep(15000) // CDN propagation
  const win = new BrowserWindow({ width: 1280, height: 900, show: false })
  try {
    await win.loadURL(BASE + '#/work')
    await waitForImages(win)
    const res = await win.webContents.executeJavaScript(`(() => {
      const imgs = [...document.querySelectorAll('.masonry img')]
      return {
        total: imgs.length,
        loaded: imgs.filter(i => i.complete && i.naturalWidth > 0).length,
        failed: imgs.filter(i => i.complete && i.naturalWidth === 0).length,
        titles: [...document.querySelectorAll('.masonry .work-title')].slice(0, 3).map(t => t.textContent.trim()),
      }
    })()`)
    console.log('LIVE total=' + res.total, 'loaded=' + res.loaded, 'failed=' + res.failed, 'firstTitles=' + res.titles.join(' | '))
    console.log(res.total > 0 && res.loaded === res.total && res.failed === 0 ? 'LIVE_OK' : 'LIVE_ISSUE')
  } catch (e) {
    console.log('RUN_ERROR', e.message)
  }
  app.exit(0)
})

async function waitForImages(win) {
  await sleep(2000)
  await win.webContents.executeJavaScript(`(async () => {
    for (let y = 0; y <= document.body.scrollHeight; y += 700) {
      window.scrollTo(0, y)
      await new Promise(r => setTimeout(r, 100))
    }
    window.scrollTo(0, 0)
  })()`)
  await sleep(2000)
}
