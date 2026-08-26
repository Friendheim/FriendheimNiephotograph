// Wait for the NEWLY dispatched run and verify the live site updates.
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
const main = async () => {
  let seen = null
  for (let i = 0; i < 40; i++) {
    const runs = await fetch('https://api.github.com/repos/Friendheim/FriendheimNiephotograph/actions/runs?per_page=3').then((r) => r.json())
    const run = (runs.workflow_runs || [])[0]
    if (run && run.id !== 32976637859) {
      console.log('new run:', run.id, run.head_sha.slice(0, 7), run.status, run.conclusion || '')
      seen = run
      if (run.status === 'completed') break
    }
    await sleep(15000)
  }
  if (!seen) { console.log('NO_NEW_RUN'); return }
  // wait for CDN to serve the new asset
  for (let i = 0; i < 12; i++) {
    const t = await fetch('https://friendheim.github.io/FriendheimNiephotograph/?cb=' + Date.now()).then((r) => r.text())
    const asset = /assets\/index-[^"]+\.js/.exec(t)
    console.log('asset:', asset ? asset[0] : 'none')
    if (asset && asset[0] !== 'assets/index-iwz243MS.js') {
      const js = await fetch('https://friendheim.github.io/FriendheimNiephotograph/' + asset[0]).then((r) => r.text())
      for (const p of ['Kunming, Yunnan, China', 'Shanghai, China', 'Xiamen, Fujian, China', 'Macau, China', 'Nanchang, Jiangxi, China', 'It began in Nanchang', 'university in Nanchang']) {
        console.log(p, '→', js.includes(p))
      }
      return
    }
    await sleep(20000)
  }
  console.log('CDN_STILL_OLD')
}
main()
