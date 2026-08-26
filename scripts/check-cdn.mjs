// Inspect the latest deploy and response caching headers.
const main = async () => {
  const runs = await fetch('https://api.github.com/repos/Friendheim/FriendheimNiephotograph/actions/runs?per_page=3').then((r) => r.json())
  for (const run of (runs.workflow_runs || [])) {
    console.log('RUN', run.id, run.head_sha.slice(0, 7), run.status, run.conclusion, run.created_at)
  }
  const r = await fetch('https://friendheim.github.io/FriendheimNiephotograph/?probe=' + Math.random())
  console.log('HTTP', r.status)
  console.log('age:', r.headers.get('age'), '| cache-control:', r.headers.get('cache-control'), '| last-modified:', r.headers.get('last-modified'), '| x-served-by:', r.headers.get('x-served-by') || r.headers.get('server'))
  const t = await r.text()
  console.log('asset in html:', (/(assets\/index-[^"]+\.js)/.exec(t) || [])[0])
}
main()
