// One-off helper: web-optimizes every photo in src/assets/works/ in place.
// - auto-rotates phone photos (EXIF orientation)
// - resizes the long edge to MAX_EDGE px (2000)
// - re-encodes as progressive JPEG, quality 82
// Your original files are NOT touched anywhere else (keep backups yourself).
// Run: node scripts/optimize-images.mjs
import sharp from 'sharp'
import { readdir, stat, writeFile, unlink } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'assets', 'works')
const MAX_EDGE = 2000
const QUALITY = 82

const imageExt = /\.(jpe?g|png|webp)$/i

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) yield* walk(full)
    else if (entry.isFile() && imageExt.test(entry.name)) yield full
  }
}

let before = 0
let after = 0
let count = 0
const failures = []

for await (const file of walk(ROOT)) {
  try {
    const sizeBefore = (await stat(file)).size
    const img = sharp(file, { failOn: 'error' }).rotate() // EXIF auto-orient
    const meta = await img.metadata()
    const longest = Math.max(meta.width || 0, meta.height || 0)
    const target = longest > MAX_EDGE ? { width: null, height: null } : null
    let pipeline = img
    if (longest > MAX_EDGE) {
      pipeline = meta.width >= meta.height
        ? img.resize({ width: MAX_EDGE, withoutEnlargement: true })
        : img.resize({ height: MAX_EDGE, withoutEnlargement: true })
    }
    const buf = await pipeline
      .withMetadata() // keep EXIF (shooting date, camera, GPS) for future scans
      .jpeg({ quality: QUALITY, progressive: true, mozjpeg: true })
      .toBuffer()
    const tmp = file + '.tmp'
    await writeFile(tmp, buf)
    await unlink(file)
    await import('node:fs/promises').then(({ rename }) => rename(tmp, file))
    const sizeAfter = (await stat(file)).size
    before += sizeBefore
    after += sizeAfter
    count++
    console.log(`OK  ${file.replace(ROOT, '…')}  ${(sizeBefore / 1024).toFixed(0)}KB → ${(sizeAfter / 1024).toFixed(0)}KB`)
  } catch (e) {
    failures.push(`${file}: ${e.message}`)
    console.log(`FAIL ${file.replace(ROOT, '…')} — ${e.message}`)
  }
}

console.log(`\nDONE ${count} photos, ${(before / 1024 / 1024).toFixed(1)}MB → ${(after / 1024 / 1024).toFixed(1)}MB (${Math.round((1 - after / before) * 100)}% smaller)`)
if (failures.length) console.log('FAILURES:\n' + failures.join('\n'))
