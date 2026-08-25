// Scans every photo in src/assets/works/ and prints EXIF metadata:
// shooting date, camera make/model, GPS coordinates.
// Run: node scripts/scan-exif.mjs
import exifr from 'exifr'
import { readdir } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'assets', 'works')
const IMG_EXT = /\.(jpe?g|png|webp)$/i

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) yield* walk(full)
    else if (IMG_EXT.test(entry.name)) yield full
  }
}

for await (const file of walk(ROOT)) {
  const rel = file.replace(ROOT + '\\', '').replace(/\\/g, '/')
  try {
    const out = await exifr.parse(file, {
      pick: ['DateTimeOriginal', 'CreateDate', 'Make', 'Model', 'latitude', 'longitude', 'GPSLatitude', 'GPSLongitude', 'Orientation'],
      translateKeys: true,
      reviveValues: true,
    })
    const lat = out?.latitude
    const lng = out?.longitude
    const date = out?.DateTimeOriginal || out?.CreateDate || ''
    const make = out?.Make || ''
    const model = out?.Model || ''
    console.log(JSON.stringify({ rel, date: date ? new Date(date).toISOString().slice(0, 10) : '', make, model, lat: lat ?? null, lng: lng ?? null }))
  } catch (e) {
    console.log(JSON.stringify({ rel, error: e.message }))
  }
}
