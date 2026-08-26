// Quick live check: is the fixed bundle live?
const main = async () => {
  const t = await fetch('https://friendheim.github.io/FriendheimNiephotograph/?cb=' + Date.now()).then((r) => r.text())
  const asset = /assets\/index-[^"]+\.js/.exec(t)
  console.log('live asset:', asset ? asset[0] : 'none', '| fixed:', asset ? asset[0] === 'assets/index-DqTkmUc4.js' : false)
}
main()
