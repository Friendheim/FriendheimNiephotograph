// Check live bundle vs local build, then verify mobile overflow on live.
const main = async () => {
  const t = await fetch('https://friendheim.github.io/FriendheimNiephotograph/?cb=' + Date.now()).then((r) => r.text())
  const asset = /assets\/index-[^"]+\.js/.exec(t)
  console.log('live asset:', asset ? asset[0] : 'none')
  console.log('local build:', 'assets/index-qEw77S4S.js')
  console.log('match:', asset ? asset[0] === 'assets/index-qEw77S4S.js' : false)
}
main()
