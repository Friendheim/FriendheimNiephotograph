// List every work and whether it has map coords/location (fixed parser)
const fs = require('fs')
const path = require('path')

const worksRoot = path.join(__dirname, '..', 'src', 'assets', 'works')
const files = []
for (const dir of fs.readdirSync(worksRoot)) {
  const d = path.join(worksRoot, dir)
  if (!fs.statSync(d).isDirectory()) continue
  for (const f of fs.readdirSync(d)) {
    if (/\.(jpe?g|png|webp)$/i.test(f)) files.push(`${dir}/${f}`)
  }
}

// Read placePins block properly (balanced braces)
const src = fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'works.js'), 'utf8')
const start = src.indexOf('const placePins = {')
let depth = 0
let end = start
for (let i = src.indexOf('{', start); i < src.length; i++) {
  if (src[i] === '{') depth++
  else if (src[i] === '}') {
    depth--
    if (depth === 0) { end = i + 1; break }
  }
}
const pinBlock = src.slice(start, end)
const pinned = new Set([...pinBlock.matchAll(/'([^']+)': \{/g)].map((m) => m[1]))

const missing = files.filter((f) => !pinned.has(f)).sort()
console.log('=== Files WITHOUT map pin ===')
for (const f of missing) console.log('  ', f)
console.log(`\nTotal files: ${files.length} | pinned: ${pinned.size} | missing: ${missing.length}`)
