// One-off helper: downloads placeholder photos from picsum.photos (free, no key).
// Run: node scripts/download-images.mjs
// Replace these files with your own photos afterwards (see README):
//   - portfolio photos:  src/assets/works/<category>/<name>.jpg
//   - hero / avatar:     public/images/hero.jpg / avatar.jpg
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname } from 'node:path'

// [seed, width, height, categoryFolder] — category decides where the file lands
const images = {
  'public/images/hero.jpg': ['fhn-hero', 1200, 1500],
  'public/images/avatar.jpg': ['fhn-avatar', 900, 1125],

  // Portrait (8)
  'src/assets/works/portrait/portrait-1.jpg': ['fhn-p1', 900, 1200],
  'src/assets/works/portrait/portrait-2.jpg': ['fhn-p2', 900, 1200],
  'src/assets/works/portrait/portrait-3.jpg': ['fhn-p3', 900, 1150],
  'src/assets/works/portrait/portrait-4.jpg': ['fhn-p4', 900, 1200],
  'src/assets/works/portrait/portrait-5.jpg': ['fhn-p5', 900, 1125],
  'src/assets/works/portrait/portrait-6.jpg': ['fhn-p6', 900, 1200],
  'src/assets/works/portrait/portrait-7.jpg': ['fhn-p7', 900, 1100],
  'src/assets/works/portrait/portrait-8.jpg': ['fhn-p8', 900, 1200],

  // Landscape (8)
  'src/assets/works/landscape/landscape-1.jpg': ['fhn-l1', 1200, 800],
  'src/assets/works/landscape/landscape-2.jpg': ['fhn-l2', 1200, 760],
  'src/assets/works/landscape/landscape-3.jpg': ['fhn-l3', 1100, 800],
  'src/assets/works/landscape/landscape-4.jpg': ['fhn-l4', 1200, 800],
  'src/assets/works/landscape/landscape-5.jpg': ['fhn-l5', 1200, 750],
  'src/assets/works/landscape/landscape-6.jpg': ['fhn-l6', 1200, 800],
  'src/assets/works/landscape/landscape-7.jpg': ['fhn-l7', 1150, 800],
  'src/assets/works/landscape/landscape-8.jpg': ['fhn-l8', 1200, 780],

  // Street (7)
  'src/assets/works/street/street-1.jpg': ['fhn-s1', 900, 1200],
  'src/assets/works/street/street-2.jpg': ['fhn-s2', 1200, 800],
  'src/assets/works/street/street-3.jpg': ['fhn-s3', 900, 1150],
  'src/assets/works/street/street-4.jpg': ['fhn-s4', 900, 1200],
  'src/assets/works/street/street-5.jpg': ['fhn-s5', 1200, 800],
  'src/assets/works/street/street-6.jpg': ['fhn-s6', 900, 1200],
  'src/assets/works/street/street-7.jpg': ['fhn-s7', 900, 1100],

  // Travel (7)
  'src/assets/works/travel/travel-1.jpg': ['fhn-t1', 1200, 800],
  'src/assets/works/travel/travel-2.jpg': ['fhn-t2', 900, 1200],
  'src/assets/works/travel/travel-3.jpg': ['fhn-t3', 1200, 820],
  'src/assets/works/travel/travel-4.jpg': ['fhn-t4', 1200, 800],
  'src/assets/works/travel/travel-5.jpg': ['fhn-t5', 900, 1200],
  'src/assets/works/travel/travel-6.jpg': ['fhn-t6', 1200, 800],
  'src/assets/works/travel/travel-7.jpg': ['fhn-t7', 900, 1150],
}

let ok = 0
let fail = 0
for (const [file, [seed, w, h]] of Object.entries(images)) {
  try {
    await mkdir(dirname(file), { recursive: true })
    const res = await fetch(`https://picsum.photos/seed/${seed}/${w}/${h}`)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const buf = Buffer.from(await res.arrayBuffer())
    if (buf.length < 5000) throw new Error('too small')
    await writeFile(file, buf)
    ok++
    console.log(`OK   ${file} (${buf.length} bytes)`)
  } catch (e) {
    fail++
    console.log(`FAIL ${file} — ${e.message}`)
  }
}
console.log(`DONE ok=${ok} fail=${fail}`)
