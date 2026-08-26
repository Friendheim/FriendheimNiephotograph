// Check placePins for duplicate coordinates
const fs = require('fs')

const src = fs.readFileSync('src/data/works.js', 'utf8')
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

const pins = {}
for (const m of pinBlock.matchAll(/'([^']+)': \{ location: '([^']+)', coords: \[([^\]]+)\] \}/g)) {
  pins[m[1]] = { location: m[2], coords: m[3].replace(/\s+/g, '') }
}

// Group by identical coords
const byCoord = {}
for (const [file, p] of Object.entries(pins)) {
  const k = p.coords
  ;(byCoord[k] = byCoord[k] || []).push(`${file} (${p.location})`)
}

console.log(`Total pins: ${Object.keys(pins).length}`)
let dup = 0
for (const [coord, files] of Object.entries(byCoord)) {
  if (files.length > 1) {
    dup++
    console.log(`\nDUPLICATE [${coord}]:`)
    for (const f of files) console.log('  ', f)
  }
}
if (!dup) console.log('\nNo duplicate coordinates — all pins are distinct.')
