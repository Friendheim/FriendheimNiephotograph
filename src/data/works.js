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
//  2. Title comes from the file name (e.g. "golden-hour.jpg" →
//     "Golden Hour"). Rename the file to change the title, or add
//     an entry in `overrides` below for full control.
//  3. Location / date / description are optional: add them in
//     `overrides` and they appear in the detail view.
// ============================================================

// --- Optional rich metadata, keyed by "category/filename" ---
// Add your own entries here to give a photo a title, location,
// date, description or better alt text.
const overrides = {
  'portrait/portrait-1.jpg': {
    title: 'Afternoon in the Window',
    location: 'Kyoto, Japan',
    date: 'April 2025',
    description:
      'Soft window light and a long pause between words. I asked nothing of my subject except that she stay exactly where she was.',
    alt: 'A woman seated beside a bright window, warm afternoon light on her face',
  },
  'portrait/portrait-2.jpg': {
    title: 'The Gardener’s Hands',
    location: 'Luang Prabang, Laos',
    date: 'November 2024',
    description:
      'He had been pruning the frangipani for forty years. I waited until he forgot I was there — then his hands did the portrait.',
    alt: 'Close portrait of an older gardener with weathered hands resting on a tool',
  },
  'portrait/portrait-3.jpg': {
    title: 'Pause',
    location: 'Taipei, Taiwan',
    date: 'July 2024',
    description:
      'A musician between sets, leaning on the doorframe of a small jazz bar. The whole city seemed to hold still with him.',
    alt: 'A young musician resting against a doorframe in warm evening light',
  },
  'landscape/landscape-1.jpg': {
    title: 'Ridge in Morning Fog',
    location: 'Jiufen, Taiwan',
    date: 'February 2025',
    description:
      'The mountains appear and disappear all morning. This frame is the one moment the ridge agreed to stay.',
    alt: 'Mountain ridge dissolving into soft morning fog',
  },
  'landscape/landscape-2.jpg': {
    title: 'Last Light Over the Valley',
    location: 'Hualien, Taiwan',
    date: 'December 2024',
    description:
      'Ten minutes of amber light before the valley went blue. I made three frames and put the camera away — some places are best finished early.',
    alt: 'Valley landscape glowing in low amber evening light',
  },
  'landscape/landscape-3.jpg': {
    title: 'The Long Road Home',
    location: 'The Highlands, Iceland',
    date: 'June 2024',
    description:
      'A gravel road, no car in sight, and weather moving in from three directions at once. The most honest kind of landscape.',
    alt: 'A long empty road crossing a wide, moody northern landscape',
  },
  'street/street-1.jpg': {
    title: 'Umbrellas at the Crossing',
    location: 'Hong Kong',
    date: 'August 2024',
    description:
      'A sudden downpour, a traffic light, and twenty strangers sharing one small piece of weather. I shot from the hip and got lucky.',
    alt: 'Pedestrians with umbrellas crossing a rainy street in a dense city',
  },
  'street/street-2.jpg': {
    title: 'Morning Market',
    location: 'Bangkok, Thailand',
    date: 'January 2025',
    description:
      'Before the tourists wake up, the market belongs to the sellers. Steam, negotiation, and the particular light of 6 a.m.',
    alt: 'A lively morning market stall with steam rising in early light',
  },
  'street/street-3.jpg': {
    title: 'A Man and His Dog',
    location: 'London, United Kingdom',
    date: 'September 2024',
    description:
      'They crossed the square in perfect unison, as if rehearsed. I was the only one watching, which felt exactly right.',
    alt: 'A man walking his dog across an empty city square',
  },
  'travel/travel-1.jpg': {
    title: 'Train Window, Hokkaido',
    location: 'Hokkaido, Japan',
    date: 'March 2025',
    description:
      'Two hours of snow and silence from the window seat. This frame is what the journey mostly looked like — which is to say, perfect.',
    alt: 'Snow-covered countryside seen through a moving train window',
  },
  'travel/travel-2.jpg': {
    title: 'Lanterns Over the Alley',
    location: 'Hội An, Vietnam',
    date: 'May 2024',
    description:
      'The lanterns go on at dusk and the river turns to paper. I stayed until the last tourist left and the alley was mine again.',
    alt: 'Colorful lanterns hanging over a narrow old-town alley at dusk',
  },
  'travel/travel-3.jpg': {
    title: 'Coastal Walk at Dusk',
    location: 'Cinque Terre, Italy',
    date: 'July 2023',
    description:
      'The trail empties just before sunset. Warm stone, salt air, and the sound of a town far below starting its evening.',
    alt: 'A coastal path winding above the sea in warm dusk light',
  },
}

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
