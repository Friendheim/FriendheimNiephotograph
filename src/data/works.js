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
//  2. Title comes from the file name by default. For a custom title,
//     location, date or description, add an entry in `overrides` below.
//  3. All 28 current photos have real titles & descriptions (AI-identified).
//     Add location / date per photo whenever you have them.
// ============================================================

// --- Rich metadata, keyed by "category/filename" ---
const overrides = {
  'portrait/portrait-01.jpg': {
    title: 'Wrist in Blue',
    description:
      'A close study of a wrist and its small ornaments — amber bead, silver chain and a hanging medallion against a cobalt sleeve, with the garden falling softly out of focus behind.',
  },
  'portrait/portrait-02.jpg': {
    title: 'Woman by the Pillar',
    description:
      'A woman stands beside a textured granite pillar on an overcast street, sunglasses on, somewhere between waiting and walking. Soft natural light keeps the frame quiet and observational.',
  },
  'portrait/portrait-03.jpg': {
    title: 'Bougainvillea and a Camera',
    description:
      'A young man with a vintage camera stands on a wooden deck beneath a cascade of pink bougainvillea. The banner behind him — a long-lived outdoor brand — adds a quiet layer of time.',
  },
  'portrait/portrait-04.jpg': {
    title: 'Under the Turning Maple',
    description:
      'Seen from above, a couple stands close beneath a maple as its leaves begin to turn, beside a quiet driveway. Soft daylight holds the frame in a calm, tender register.',
  },
  'portrait/portrait-05.jpg': {
    title: 'Between the Stone Columns',
    description:
      'The columns divide the frame into quiet vertical sections around the figure. Cool blue clothing and the passing turquoise bus provide the only strong color against the pale stone.',
  },
  'portrait/portrait-06.jpg': {
    title: 'Walking Hand in Hand',
    description:
      'A couple walks away hand in hand down a chestnut-shaded path, dappled light falling through the canopy. The blue street sign — George-Bähr-Straße — fixes the moment in a particular city afternoon.',
  },
  'landscape/landscape-01.jpg': {
    title: 'The White Ferry',
    description:
      'A white ferry crosses choppy grey water toward mist-shrouded mountains. The overcast light flattens the sea into silver and leaves the boat alone in the frame.',
  },
  'landscape/landscape-02.jpg': {
    title: 'House Beside the Pines',
    description:
      'Dark tree mass fills the right side while the buildings recede through the center. The muted light keeps the timber lines and windows subdued.',
  },
  'landscape/landscape-03.jpg': {
    title: 'Sun Over Frozen Road',
    description:
      'Low sunlight enters from the left and throws long shadows across the icy surface. Tire marks curve through the cold blue-gray foreground.',
  },
  'landscape/landscape-04.jpg': {
    title: 'Chalk Cliffs at Dusk',
    description:
      'Twilight on the Seven Sisters: a red phone box and rooftops against a fading sky, and below, the white cliffs falling to a shoreline where a small campfire glows. Two frames, one quiet evening.',
  },
  'street/street-01.jpg': {
    title: 'Light Through the Passage',
    description:
      'The surrounding architecture falls almost completely into silhouette. The rectangular opening holds the light, clouds, and a single slim lamp post.',
  },
  'street/street-02.jpg': {
    title: 'A Quiet Set Meal',
    description:
      'Warm indoor light settles across the black tray and ceramic bowls. The food is arranged plainly, with the grilled fish centered on a white plate.',
  },
  'street/street-03.jpg': {
    title: 'Red Signal at Dusk',
    description:
      'The image is built from dark outlines against a saturated sky. The red signal is a small, sharp point of color in the upper right.',
  },
  'street/street-04.jpg': {
    title: 'Poster After Rain',
    description:
      'An illuminated bus-stop poster for Technische Universität Dresden stands beside a wet path at sunset. The yellow poster dominates the frame while the trees and sky remain softly out of focus behind it.',
  },
  'street/street-05.jpg': {
    title: 'Arrow by the Ramp',
    description:
      'Most of the frame is an unadorned warm wall. The small sign and the cool-toned curve of the doorway make a restrained directional composition.',
  },
  'street/street-06.jpg': {
    title: 'Chalk Across the Lecture Hall',
    description:
      'Rows of desks, notebooks, and heads lead toward the board at the front. Chalk equations and writing stretch across the green panels above the instructor.',
  },
  'street/street-07.jpg': {
    title: 'Two Glasses at Dinner',
    description:
      'The flash-lit table is bright against the dark wood interior. Warm hanging lights and a blurred room keep the focus on the meal and glasses.',
  },
  'travel/travel-01.jpg': {
    title: 'Objects in Warm Light',
    description:
      'Warm lamps and daylight from the windows illuminate the crowded display tables. The room’s dark wood, green lower walls, and framed pictures remain softly quiet.',
  },
  'travel/travel-02.jpg': {
    title: 'Red Board of Small Faces',
    description:
      'The red display forms a concentrated field of ceramic faces and small figures. Stacked books and shop objects fade into soft focus around it.',
  },
  'travel/travel-03.jpg': {
    title: 'Houses at the Forest Edge',
    description:
      'The buildings appear in a narrow opening between a dark facade and a dense wall of trees. Soft, muted daylight keeps the scene calm and low in contrast.',
  },
  'travel/travel-04.jpg': {
    title: 'Window Across the Room',
    description:
      'The room is dark around the edges, with a chair, bed, and lit lamps barely visible. The window grid holds the brightest, coolest light in the image.',
  },
  'travel/travel-05.jpg': {
    title: 'Rain on the Glass',
    description:
      'The water on the glass softens the distant trees and breaks the sky into small blurred marks. A bare branching tree remains visible near the center.',
  },
  'travel/travel-06.jpg': {
    title: 'Lift Toward the Snow',
    description:
      'The lift cables and metal supports make strong lines through the pale mountain view. Colored jackets on the nearest riders provide small points of contrast against the snow.',
  },
  'travel/travel-07.jpg': {
    title: 'Spire and Glass Tower',
    description:
      'Backlight reduces both structures to dark shapes. Overhead wires cut diagonally across the pale, clouded sky.',
  },
  'travel/travel-08.jpg': {
    title: 'Mountain Behind the City',
    description:
      'Bright snow on the peak contrasts with the dark lower slopes. The foreground buildings create a plain urban edge beneath the mountain.',
  },
  'travel/travel-09.jpg': {
    title: 'Blue Water From Above',
    description:
      'The image looks down across hard roof surfaces, planted borders, and bright blue water. Deep shadows and cool color give the geometry a quiet, graphic quality.',
  },
  'travel/travel-10.jpg': {
    title: 'Blue Hour Under the Tree',
    description:
      'The tree’s fine branches spread across the pale blue background. The solitary figure is small beneath the trunk, with faint rocks and shoreline behind them.',
  },
  'travel/travel-11.jpg': {
    title: 'Bath Beyond the Doorway',
    description:
      'The doorway frames the pale bathroom in a narrow, centered view. A dark bottle and small items sit on the table in front of the tub.',
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
