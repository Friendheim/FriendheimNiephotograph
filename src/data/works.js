// ============================================================
//  Portfolio works — AUTO-DETECTED from src/assets/works/.
//
//  HOW IT WORKS
//  1. Every photo you drop into one of these folders appears on
//     the site automatically (no code changes needed):
//       src/assets/works/portrait/   → category "Portrait"
//       src/assets/works/landscape/  → category "Landscape"
//       src/assets/works/street/     → category "Street"
//       src/assets/works/travel/     → category "Travel"
//     (you may add your own folders too — the folder name becomes
//      a new category, e.g. src/assets/works/wildlife/)
//  2. Title comes from the file name (e.g. "portrait-01.jpg" →
//     "Portrait 01"). Rename the file to change the title, or add
//     an entry in `overrides` below for full control.
//  3. Location / date / description are optional: add them in
//     `overrides` and they appear in the detail view.
// ============================================================

// --- Optional rich metadata, keyed by "category/filename" ---
// Photos are auto-detected, so you only add entries for the details
// you want to show: title / location / date / description / alt text.
//
// Example (files are named portrait-01.jpg … travel-11.jpg):
//   'portrait/portrait-01.jpg': {
//     title: 'Evening Portrait',
//     location: 'Shanghai, China',
//     date: 'June 2025',
//     description: 'A short note about how this photo came to be…',
//     alt: 'A woman laughing in warm evening light',
//   },
const overrides = {}

// --- Auto-detect every photo in the category folders ---
const modules = import.meta.glob('../assets/works/*/*.{jpg,jpeg,png,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
})

const KNOWN_ORDER = ['Portrait', 'Landscape', 'Street', 'Travel']

function titleCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function humanizeTitle(filename) {
  return filename
    .replace(/\.(jpe?g|png|webp)$/i, '')
    .split(/[-_]+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
    .trim()
}

const works = Object.entries(modules)
  .map(([key, url]) => {
    const match = /\.\.\/assets\/works\/([^/]+)\/([^/]+)$/.exec(key)
    if (!match) return null
    const folder = match[1]
    const filename = match[2]
    const category = titleCase(folder)
    const override = overrides[`${folder}/${filename}`] || {}
    return {
      id: key,
      title: override.title || humanizeTitle(filename),
      category,
      location: override.location || '',
      date: override.date || '',
      description: override.description || '',
      image: url,
      alt: override.alt || `${override.title || humanizeTitle(filename)} — ${category} photograph`,
    }
  })
  .filter(Boolean)
  .sort((a, b) => {
    const oa = KNOWN_ORDER.indexOf(a.category)
    const ob = KNOWN_ORDER.indexOf(b.category)
    const ca = oa === -1 ? KNOWN_ORDER.length : oa
    const cb = ob === -1 ? KNOWN_ORDER.length : ob
    if (ca !== cb) return ca - cb
    return a.image.localeCompare(b.image, undefined, { numeric: true })
  })

const categories = ['All', ...KNOWN_ORDER.filter((c) => works.some((w) => w.category === c)), ...works
  .map((w) => w.category)
  .filter((c, i, arr) => arr.indexOf(c) === i && !KNOWN_ORDER.includes(c))
  .sort()]

export { works, categories }
