// Identifies all portfolio photos via the Gemini vision API.
// BATCHES 5 images per request (7 requests total for 28 photos) to stay
// under the free-tier rate limit (20 req/min). Writes incremental logs to
// scripts/describe.log and final results to scripts/descriptions.json.
// Run: $env:GEMINI_KEY=... ; node scripts/describe-photos.mjs
import { readdir, readFile, writeFile, appendFile } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const KEY = process.env.GEMINI_KEY
if (!KEY) { console.error('GEMINI_KEY env missing'); process.exit(1) }

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'assets', 'works')
const MODEL = process.env.GEMINI_MODEL || 'gemini-3.6-flash'
const OUT = join(dirname(fileURLToPath(import.meta.url)), 'descriptions.json')
const LOG = join(dirname(fileURLToPath(import.meta.url)), 'describe.log')
const IMG_EXT = /\.(jpe?g|png|webp)$/i
const BATCH = 5

const log = (line) => {
  console.log(line)
  appendFile(LOG, line + '\n').catch(() => {})
}

const PROMPT = (names) =>
  'You are describing photographs for a fine-art photography portfolio. ' +
  'I will give you ' + names.length + ' images, in this order: ' + names.join(', ') + '. ' +
  'Return STRICT JSON: an ARRAY with exactly ' + names.length + ' objects, one per image IN THE SAME ORDER, ' +
  'each: {"file": "' + names.join('" or "') + '", "title": "evocative 3-6 word title", ' +
  '"subject": "what is actually in the photo, 1 sentence, honest even if blurry/empty", ' +
  '"description": "2-3 sentence poetic caption mentioning only real visible details, no invented facts"}. ' +
  'Do not include images you were not given; every entry must describe a real image.'

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) yield* walk(full)
    else if (IMG_EXT.test(entry.name)) yield full
  }
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

async function callVision(parts, attempt = 0) {
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: 'user', parts }],
        generationConfig: { temperature: 0.3, maxOutputTokens: 1200, responseMimeType: 'application/json' },
      }),
    }
  )
  if (res.status === 429 || res.status === 503) {
    if (attempt >= 5) throw new Error(`still rate-limited after retries (HTTP ${res.status})`)
    const wait = 60000
    log(`  rate-limit (${res.status}), waiting ${wait / 1000}s before retry ${attempt + 1}`)
    await sleep(wait)
    return callVision(parts, attempt + 1)
  }
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${(await res.text()).slice(0, 200)}`)
  const j = await res.json()
  return j?.candidates?.[0]?.content?.parts?.map((p) => p.text || '').join('') || ''
}

const files = []
for await (const f of walk(ROOT)) files.push(f)
files.sort()

const results = {}
let ok = 0
let fail = 0
log(`Found ${files.length} photos, batching ${BATCH}/request → ~${Math.ceil(files.length / BATCH)} requests`)

for (let i = 0; i < files.length; i += BATCH) {
  const batch = files.slice(i, i + BATCH)
  const parts = [{ text: PROMPT(batch.map((f) => f.replace(ROOT + '\\', '').replace(/\\/g, '/').split('/').pop())) }]
  for (const f of batch) {
    const buf = await readFile(f)
    const mime = f.toLowerCase().endsWith('.png') ? 'image/png' : f.toLowerCase().endsWith('.webp') ? 'image/webp' : 'image/jpeg'
    parts.push({ inline_data: { mime_type: mime, data: buf.toString('base64') } })
  }
  log(`\nBATCH ${i / BATCH + 1}/${Math.ceil(files.length / BATCH)} (${batch.map((f) => f.split(/[\\/]/).pop()).join(', ')})`)
  try {
    const text = await callVision(parts)
    let arr
    try { arr = JSON.parse(text) } catch { arr = JSON.parse(text.slice(text.indexOf('['), text.lastIndexOf(']') + 1)) }
    if (!Array.isArray(arr)) throw new Error('response is not an array')
    batch.forEach((f, idx) => {
      const rel = f.replace(ROOT + '\\', '').replace(/\\/g, '/')
      const item = arr[idx]
      if (item && item.subject) {
        results[rel] = { title: String(item.title || '').trim(), subject: String(item.subject || '').trim(), description: String(item.description || '').trim() }
        ok++
        log(`OK ${rel} → ${results[rel].title}`)
      } else {
        fail++
        log(`FAIL ${rel} — missing item in response`)
      }
    })
  } catch (e) {
    fail += batch.length
    for (const f of batch) {
      const rel = f.replace(ROOT + '\\', '').replace(/\\/g, '/')
      results[rel] = { error: e.message }
      log(`FAIL ${rel} — ${e.message}`)
    }
  }
  await sleep(8000) // stay under 20 req/min
}

await writeFile(OUT, JSON.stringify(results, null, 2))
log(`\nDONE ok=${ok} fail=${fail} → ${OUT}`)
