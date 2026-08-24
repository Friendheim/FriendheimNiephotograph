// One-off helper: downloads placeholder photos from picsum.photos (free, no key).
// Run: node scripts/download-images.mjs
// Replace these files with your own photos afterwards (see README).
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname } from 'node:path'

const images = {
  'public/images/hero.jpg': ['fhn-hero', 1200, 1500],
  'public/images/avatar.jpg': ['fhn-avatar', 900, 1125],
  'public/images/works/portrait-1.jpg': ['fhn-p1', 900, 1200],
  'public/images/works/portrait-2.jpg': ['fhn-p2', 900, 1200],
  'public/images/works/portrait-3.jpg': ['fhn-p3', 900, 1150],
  'public/images/works/landscape-1.jpg': ['fhn-l1', 1200, 800],
  'public/images/works/landscape-2.jpg': ['fhn-l2', 1200, 760],
  'public/images/works/landscape-3.jpg': ['fhn-l3', 1100, 800],
  'public/images/works/street-1.jpg': ['fhn-s1', 900, 1200],
  'public/images/works/street-2.jpg': ['fhn-s2', 1200, 800],
  'public/images/works/street-3.jpg': ['fhn-s3', 900, 1150],
  'public/images/works/travel-1.jpg': ['fhn-t1', 1200, 800],
  'public/images/works/travel-2.jpg': ['fhn-t2', 900, 1200],
  'public/images/works/travel-3.jpg': ['fhn-t3', 1200, 820],
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
