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
const overrides = {
  'portrait/portrait-01.jpg': {
    title: 'Quiet Study I',
    description: 'A portrait made in a quiet room — I asked for nothing but a few honest minutes, and let the light do the introducing.',
  },
  'portrait/portrait-02.jpg': {
    title: 'Quiet Study II',
    description: 'We talked until the posing ran out. This is the frame from just after — the one that feels most like meeting someone.',
  },
  'portrait/portrait-03.jpg': {
    title: 'Quiet Study III',
    description: 'A study in stillness. I kept the camera low and the conversation soft, waiting for the face to forget it was being watched.',
  },
  'portrait/portrait-04.jpg': {
    title: 'Quiet Study IV',
    description: 'Some people are easy to photograph; this person made it a gift. Light, patience, and a small laugh somewhere in between.',
  },
  'portrait/portrait-05.jpg': {
    title: 'Quiet Study V',
    description: 'I wanted the version of this person that exists between expressions — the one that only shows up when nobody is performing.',
  },
  'portrait/portrait-06.jpg': {
    title: 'Quiet Study VI',
    description: 'A quiet close-up from a slow afternoon. The best portraits, I think, are the ones that feel less like pictures and more like pauses.',
  },
  'landscape/landscape-01.jpg': {
    title: 'Open Sky I',
    description: 'A wide view that asked me to stand still for a while. I waited for the light to settle, and the landscape agreed to stay.',
  },
  'landscape/landscape-02.jpg': {
    title: 'Open Sky II',
    description: 'The horizon did most of the work; I only had to be there when the weather decided to behave. Patience, mostly, is the craft.',
  },
  'landscape/landscape-03.jpg': {
    title: 'Open Sky III',
    description: 'A landscape that rewards slow looking — the kind of place where the best frame is the one you take twenty minutes after arriving.',
  },
  'landscape/landscape-04.jpg': {
    title: 'Open Sky IV',
    description: 'Big sky, small figure, long silence. I made this frame the way you keep a memory: quickly, and with more feeling than skill.',
  },
  'street/street-01.jpg': {
    title: 'Between Steps I',
    description: 'A moment from a street that was busy being itself. Strangers passed, light moved, and the shutter caught the instant the noise parted.',
  },
  'street/street-02.jpg': {
    title: 'Between Steps II',
    description: 'I stood at the edge of the flow and waited. The street handed me this frame the way it hands out everything — by accident, mostly.',
  },
  'street/street-03.jpg': {
    title: 'Between Steps III',
    description: 'No one noticed the camera. That was the point. Somewhere between errands and weather, this scene quietly composed itself.',
  },
  'street/street-04.jpg': {
    title: 'Between Steps IV',
    description: 'A small choreography of everyday life — someone pausing, someone rushing, the light holding its breath for half a second.',
  },
  'street/street-05.jpg': {
    title: 'Between Steps V',
    description: 'Shot from the hip, honest as a diary. I could tell you the street, but the frame tells it better than I ever could.',
  },
  'street/street-06.jpg': {
    title: 'Between Steps VI',
    description: 'The city has its own rhythm; I just tried to keep time with it. This is one beat, caught before it moved on.',
  },
  'street/street-07.jpg': {
    title: 'Between Steps VII',
    description: 'A street frame about the in-between — the moment the crowd thinned and the place became itself again.',
  },
  'travel/travel-01.jpg': {
    title: 'Elsewhere I',
    description: 'A place I was lucky to pass through. I tried to keep what I saw honest — the light, the weather, the way it felt to arrive.',
  },
  'travel/travel-02.jpg': {
    title: 'Elsewhere II',
    description: 'Travel photographs are really memory photographs. This one is a piece of a journey I still think about.',
  },
  'travel/travel-03.jpg': {
    title: 'Elsewhere III',
    description: 'Somewhere between here and there, I stopped and looked up. This is what I saw before I moved on.',
  },
  'travel/travel-04.jpg': {
    title: 'Elsewhere IV',
    description: 'A frame from the road — the kind you take without thinking and find you love anyway.',
  },
  'travel/travel-05.jpg': {
    title: 'Elsewhere V',
    description: 'I arrived tired and left grateful. This is one of the moments that made the detour worth it.',
  },
  'travel/travel-06.jpg': {
    title: 'Elsewhere VI',
    description: 'A small piece of somewhere else. The light was unfamiliar, the place was kind, and I kept the shutter open long enough to remember it.',
  },
  'travel/travel-07.jpg': {
    title: 'Elsewhere VII',
    description: 'From a journey that asked for nothing and gave plenty. I keep this one for the way it smells like the trip.',
  },
  'travel/travel-08.jpg': {
    title: 'Elsewhere VIII',
    description: 'A traveler\u2019s frame: a little unsure, a little enchanted, and honest about both.',
  },
  'travel/travel-09.jpg': {
    title: 'Elsewhere IX',
    description: 'I brought this place home with me the only way I could — as light on a sensor, and a feeling I can\u2019t quite name.',
  },
  'travel/travel-10.jpg': {
    title: 'Elsewhere X',
    description: 'Another city, another sky, another walk with no destination. This is what wandering looks like when it goes well.',
  },
  'travel/travel-11.jpg': {
    title: 'Elsewhere XI',
    description: 'The last frame of the day, from a place I may never see again. I am glad the camera was in my hands.',
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
