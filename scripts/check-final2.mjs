// Verify all location + Nanchang fixes live (with CDN patience).
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
const main = async () => {
  for (let i = 0; i < 30; i++) {
    try {
      const runs = await fetch('https://api.github.com/repos/Friendheim/FriendheimNiephotograph/actions/runs?per_page=1').then((r) => r.json())
      const run = (runs.workflow_runs || [])[0]
      if (run && run.status === 'completed') { console.log('DEPLOY', run.conclusion); break }
    } catch (e) { console.log('api retry', i + 1, e.cause?.code || e.message) }
    await sleep(15000)
  }
  // wait for CDN to move off the old asset
  for (let i = 0; i < 10; i++) {
    const t = await fetch('https://friendheim.github.io/FriendheimNiephotograph/?cb=' + Date.now()).then((r) => r.text())
    const asset = /assets\/index-[^"]+\.js/.exec(t)
    console.log('asset:', asset ? asset[0] : 'none')
    if (asset && asset[0].includes('_3_3-jU_')) {
      const js = await fetch('https://friendheim.github.io/FriendheimNiephotograph/' + asset[0]).then((r) => r.text())
      for (const p of ['Kunming, Yunnan, China', 'Shanghai, China', 'Xiamen, Fujian, China', 'Macau, China', 'Nanchang, Jiangxi, China', 'It began in Nanchang', 'university in Nanchang']) {
        console.log(p, '→', js.includes(p))
      }
      break
    }
    await sleep(20000)
  }
}
main()
