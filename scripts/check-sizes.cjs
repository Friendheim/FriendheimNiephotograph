const sharp = require('sharp')
const path = require('path')

async function main() {
  for (const f of ['travel-07.jpg', 'travel-12.jpg', 'travel-09.jpg', 'travel-04.jpg', 'travel-10.jpg', 'street-02.jpg', 'street-03.jpg']) {
    const p = path.join(__dirname, '..', 'src', 'assets', 'works', f.startsWith('street') ? 'street' : 'travel', f)
    try {
      const m = await sharp(p).metadata()
      console.log(`${f}: ${m.width}x${m.height} ratio=${(m.width / m.height).toFixed(3)}`)
    } catch (e) {
      console.log(`${f}: ERROR ${e.message}`)
    }
  }
}
main()
