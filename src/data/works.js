// ============================================================
//  Portfolio works — AUTO-DETECTED from src/assets/works/.
//
//  HOW IT WORKS
//  1. Every photo you drop into one of these folders appears on
//     the site automatically (no code changes needed):
//       src/assets/works/portrait/   → category "Faces"
//       src/assets/works/landscape/  → category "Landscapes"
//       src/assets/works/street/     → category "Streets"
//       src/assets/works/travel/     → category "Journeys"
//       src/assets/works/creative/   → category "Creative" (new)
//     (you may add your own folders too — the folder name becomes
//      a new category, e.g. src/assets/works/wildlife/)
//  2. Title comes from the file name by default. For a custom title,
//     location, date or description, add an entry in `overrides` below.
//  3. All 28 current photos have polished titles & descriptions
//     (based on AI-identified content). Add location / date whenever
//     you have them.
// ============================================================

// --- Rich metadata, keyed by "category/filename" ---
const overrides = {
  'portrait/portrait-01.jpg': {
    title: 'Wrist in Blue',
    description:
      'Blue sleeve, and a wrist dressed in small keepsakes — amber, silver, turquoise — each one a story I will never be told. The garden behind melts into a green murmur. Some portraits don’t need a face.',
  },
  'portrait/portrait-02.jpg': {
    title: 'Woman by the Pillar',
    description:
      'She stood by the granite pillar longer than anyone expected, sunglasses on against a grey sky. I waited too, and the street gave us this small, still exchange.',
  },
  'portrait/portrait-03.jpg': {
    title: 'Bougainvillea and a Camera',
    description:
      'A vintage camera in young hands, pink bougainvillea tumbling overhead, and behind him a brand that has outlived half a century of seasons. Time, in one frame, at three different speeds.',
  },
  'portrait/portrait-04.jpg': {
    title: 'Under the Turning Maple',
    description:
      'From above, the maple was already turning, and the couple underneath had no idea the tree was keeping time for them. I like photographs taken without permission to be this gentle.',
  },
  'portrait/portrait-05.jpg': {
    title: 'Between the Stone Columns',
    description:
      'The columns divided the afternoon into quiet sections, and he stood exactly where the light let him. A turquoise bus passed in a hurry; he did not.',
  },
  'portrait/portrait-06.jpg': {
    title: 'Walking Hand in Hand',
    description:
      'Hand in hand down George-Bähr-Straße, dappled chestnut light falling on their shoulders. I was behind them, which felt like the right place to be.',
  },
  'landscape/landscape-01.jpg': {
    title: 'The White Ferry',
    description:
      'A white ferry making its unhurried way across grey water, the mountains barely sure they exist. The overcast held the light low and silver, the way sea days should.',
  },
  'landscape/landscape-02.jpg': {
    title: 'House Beside the Pines',
    description:
      'The pines stand guard, and the half-timbered houses keep their counsel behind them. A muted sky, a patient street — the landscape waiting for winter to finish.',
  },
  'landscape/landscape-03.jpg': {
    title: 'Sun Over Frozen Road',
    description:
      'Low sun across a frozen road, long shadows leaning away from the cold. The yellow car is the only thing in the frame willing to hurry.',
  },
  'landscape/landscape-04.jpg': {
    title: 'Chalk Cliffs at Dusk',
    description:
      'Two frames from one dusk at the Seven Sisters: a red phone box against the last of the sky, and far below, white cliffs falling to a shore where a small fire glowed. The sea was doing its quiet work; I did mine.',
  },
  'street/street-01.jpg': {
    title: 'Light Through the Passage',
    description:
      'The buildings closed ranks, and the light escaped through the one gap they left. A single lamp post kept the opening honest.',
  },
  'street/street-02.jpg': {
    title: 'A Quiet Set Meal',
    description:
      'A set meal at a plain table — grilled fish, rice, soup, the small dishes arranged like a still life that didn’t know it was one.',
  },
  'street/street-03.jpg': {
    title: 'Red Signal at Dusk',
    description:
      'At dusk the street becomes an outline drawing. The red signal was the only thing that refused to fade.',
  },
  'street/street-04.jpg': {
    title: 'Poster After Rain',
    description:
      'The bus-stop poster for TU Dresden stayed lit after the rain, yellow against the cooling street. I passed it twice; the second time, I stopped.',
  },
  'street/street-05.jpg': {
    title: 'Arrow by the Ramp',
    description:
      'A warning on a warm wall — “Vorsicht Rampe!” — pointing toward a doorway that curves like a question mark. The quietest kind of street photograph: almost nothing, exactly placed.',
  },
  'street/street-06.jpg': {
    title: 'Chalk Across the Lecture Hall',
    description:
      'A lecture hall mid-morning: heads bent, chalk moving across green boards. I sat in the back row and kept the noise out of the frame.',
  },
  'street/street-07.jpg': {
    title: 'Two Glasses at Dinner',
    description:
      'Two glasses, two plates, one long conversation. The flash froze the table; everything around it stayed soft and dark, the way good evenings do.',
  },
  'travel/travel-01.jpg': {
    title: 'Objects in Warm Light',
    description:
      'A shop full of things no one needs and everyone should have. The chandelier and the daylight argued politely about which was warmer.',
  },
  'travel/travel-02.jpg': {
    title: 'Red Board of Small Faces',
    description:
      'A red board covered in small ceramic faces, each one watching the shop in its own way. I like things that look back.',
  },
  'travel/travel-03.jpg': {
    title: 'Houses at the Forest Edge',
    description:
      'The village keeps its timber houses close, and the forest presses in from the edge of the frame. They seem to have agreed to tolerate each other.',
  },
  'travel/travel-04.jpg': {
    title: 'Window Across the Room',
    description:
      'The hotel room kept its darkness, and the blue tower across the street kept its light. I left the curtains open, as an apology to the view.',
  },
  'travel/travel-05.jpg': {
    title: 'Rain on the Glass',
    description:
      'Rain on the window turned the city into a watercolour mid-wash. One bare tree stayed clear enough to hold the frame together.',
  },
  'travel/travel-06.jpg': {
    title: 'Lift Toward the Snow',
    description:
      'Three of us, one lift, a wall of snow mountains arriving slowly. The coloured jackets were the only warm things in the frame.',
  },
  'travel/travel-07.jpg': {
    title: 'Spire and Glass Tower',
    description:
      'A spire that has been praying for centuries and a glass tower that hasn’t decided yet. Overhead wires tried to stitch them into one sky.',
  },
  'travel/travel-08.jpg': {
    title: 'Mountain Behind the City',
    description:
      'The mountain does not notice the city at its feet. An excavator, a few roofs, and a peak that has seen all of it before.',
  },
  'travel/travel-09.jpg': {
    title: 'Blue Water From Above',
    description:
      'From a high window, the geometry of the afternoon: rooftops, planters, and a pool of blue water holding the only perfect rectangle in the city.',
  },
  'travel/travel-10.jpg': {
    title: 'Blue Hour Under the Tree',
    description:
      'Blue hour, a bare tree, and a small figure standing where the fog was thinnest. The kind of photograph you take when you’d rather not be alone.',
  },
  'travel/travel-11.jpg': {
    title: 'Bath Beyond the Doorway',
    description:
      'A white bath beyond a dark doorway, a small table, a dark bottle — a still life that was already finished before I arrived.',
  },
}

// --- Auto-detect every photo in the category folders ---
const modules = import.meta.glob('../assets/works/*/*.{jpg,jpeg,png,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
})

// folder key → short editorial theme shown in the UI
const CATEGORY_LABELS = {
  portrait: 'Faces',
  landscape: 'Landscapes',
  street: 'Streets',
  travel: 'Journeys',
  creative: 'Creative',
}
const KNOWN_ORDER = ['portrait', 'landscape', 'street', 'travel', 'creative']

function labelFor(folder) {
  return CATEGORY_LABELS[folder] || folder.charAt(0).toUpperCase() + folder.slice(1)
}

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
    const category = labelFor(folder)
    const override = overrides[`${folder}/${filename}`] || {}
    return {
      id: key,
      folder,
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
    const oa = KNOWN_ORDER.indexOf(a.folder)
    const ob = KNOWN_ORDER.indexOf(b.folder)
    const ca = oa === -1 ? KNOWN_ORDER.length : oa
    const cb = ob === -1 ? KNOWN_ORDER.length : ob
    if (ca !== cb) return ca - cb
    return a.image.localeCompare(b.image, undefined, { numeric: true })
  })

// 'All' + every known theme (including empty ones like Creative) + any extra folders
const extraFolders = works
  .map((w) => w.folder)
  .filter((f, i, arr) => arr.indexOf(f) === i && !KNOWN_ORDER.includes(f))
  .sort()
const categories = ['All', ...KNOWN_ORDER.map((k) => labelFor(k)), ...extraFolders.map((f) => labelFor(f))]

export { works, categories }
