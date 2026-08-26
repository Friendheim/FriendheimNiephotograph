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

  // --- Creative (创作) — experimental posters & collages ---
  'creative/creative-02.jpg': {
    title: 'Architecture, Recut and Reframed',
    description:
      'This is an edit about translation: one place is tested as photograph, pale wash, diagram, and photograph again. Thin construction lines and generous cream margins make the ordinary square read like a set of competing plans.',
  },

  // --- Memory (记忆) — a series in two parts ---
  'memory/memory-01.jpg': {
    title: 'Memory of the Coast',
    description:
      'Made on the coast after dusk, the frame holds an isolated house, a distant horizon, white cliffs, and a faint fire glowing in the dark. Nothing was arranged — the photograph only keeps the spatial truths that existed before the light left. As memory settles, the scene draws back into simple lines, colour fields and blank paper: a real place turning into the afterimage it left behind.',
  },
  'memory/memory-02.jpg': {
    title: 'Before It Fades',
    description:
      'A real coast is recorded at dusk — buildings, rocky walls, the sea, and the presence of a person forming a brief moment of the journey. The photograph watches this space with restraint, letting concrete scenery recede into an abstract structure of memory. What remains is not a place, but a proof of existence shaped by light, distance, and solitude.',
  },
  'creative/creative-06.jpg': {
    title: 'House in Four Registers',
    description:
      'The house is dismantled into material studies — glass, foliage, shadow, and measured plane. Its repeated placement makes the domestic façade feel less like a fixed object than a proposition continually redrawn.',
  },

  // --- Odyssey (奥德赛) — a series in three parts ---
  'odyssey/odyssey-01.jpg': {
    title: 'The Passage',
    description:
      'A street crowd crosses like travellers threading a strait — converging for a moment, then leaving in different directions. Light and shadow record an ordinary passage, and quietly echo the choices and unknowns that followed Odysseus across his long wandering.',
  },
  'odyssey/odyssey-02.jpg': {
    title: 'The City of Trials',
    description:
      'Towers rise into a vast spatial structure — the labyrinth of the modern world. The scale of the buildings presses down on those walking beneath them, while hidden mythic forms remind us that every city holds its own trial, its own waiting maze.',
  },
  'odyssey/odyssey-03.jpg': {
    title: 'The Island Beyond',
    description:
      'Still water keeps its careful distance from the far city, the way Odysseus paused to regard an unknown island. There is no destination here — only waiting, watching, and the imagining of what lies beyond.',
  },
  // --- Outside the Frame — four notes on being watched ---
  'frame/frame-01.jpg': {
    title: 'Spire Through Three Realities',
    description:
      'The same civic scene is stacked into three registers, shifting from observed architecture to dissolved pigment and line. Repetition turns the spire into a visual axis while the square below flickers between document and recollection.',
  },
  'frame/frame-02.jpg': {
    title: 'Is the Distance Real?',
    description:
      'A boat rests on the water; beyond it, snow mountains in the light of the setting sun. The scene is vast and quiet, and the person inside it is small. Facing such a view we believe we are close to something real — but the photograph reminds us that everything here was chosen: the place to stand, the hour, the way to keep the moment. Reality is not discovered; it is formed, again and again, in the act of watching.',
  },
  'frame/frame-03.jpg': {
    title: 'The Person Outside the Frame',
    description:
      'A person stands before a wall of flowers while background images overlap with reality — a real body, a designed scene, and the instant the photograph kept, all present at once. It is the moment Truman first understands he lives in a world being watched. But in a way we all live inside our own frame — recording, remembering, and reshaping our stories.',
  },
  'frame/frame-04.jpg': {
    title: 'Reality Inside the Room',
    description:
      'A strange room, a lit lamp, an open book. The quietest moments of travel are rarely the destinations — they are the times nobody watches, when you keep company with yourself. Truman looked for the exit to find what was real. Sometimes we need no escape, only the feeling of truly existing inside our own lives.',
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
  odyssey: 'Odyssey',
  memory: 'Memory',
  frame: 'Outside the Frame',
}
const KNOWN_ORDER = ['portrait', 'landscape', 'street', 'travel', 'creative', 'odyssey', 'memory', 'frame']

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
