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
    title: 'The Photographer, Photographed',
    description:
      'A rare portrait of the photographer himself, taken by a friend — his Fujifilm X100VI in hand, pink bougainvillea tumbling overhead, and behind him a brand that has outlived half a century of seasons. Three speeds of time in one frame: the flower, the camera, and the young man who is usually the one behind the lens.',
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
    title: 'Blue Boats by the Lake',
    description:
      'The figure is framed by tall grasses and leafy branches, facing calm water and a low tree-covered horizon. Saturated blue kayaks provide a vivid foreground accent against the warm evening landscape.',
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
    title: 'Where the Sky Comes Through',
    description:
      'The buildings let the sky through for a moment, and I happened to be walking there. Days like these are mostly unremarkable — which is exactly why they are worth keeping.',
  },
  'street/street-02.jpg': {
    title: 'The Evening Set',
    description:
      'Grilled fish, rice, soup — the small dishes arranged the way every dinner is arranged when nobody is watching. A single place setting, a quiet table, and a day that asked nothing of me.',
  },
  'street/street-03.jpg': {
    title: 'Stop for a Moment',
    description:
      'Waiting at a crossing while the sky does its evening work. Some days you notice the red light the way you notice your own breathing — only when you stop.',
  },
  'street/street-04.jpg': {
    title: 'After Rain, Before Class',
    description:
      'The bus-stop poster for my university stayed lit after the rain. Wet pavement, yellow light, the walk to class — the ordinary machinery of a student’s day, briefly beautiful.',
  },
  'street/street-05.jpg': {
    title: 'Watch the Step',
    description:
      'A small sign warning about a ramp, on a wall I passed almost every day. I never fell, and I never stopped reading it — some sentences become part of your life without your permission.',
  },
  'street/street-06.jpg': {
    title: 'Back Row, Mid-Semester',
    description:
      'Heads bent, chalk moving across green boards — a lecture hall in the middle of the semester, which is to say, in the middle of my life. I sat in the back row and kept the ordinary: equations, light, the sound of forty notebooks.',
  },
  'street/street-07.jpg': {
    title: 'Two Glasses, One Evening',
    description:
      'Two glasses, two plates, and a conversation long enough to let the room go soft around it. Some evenings are the entire reason the other days exist.',
  },
  'street/street-08.jpg': {
    title: 'Stillness Before Departure',
    description:
      'Cool daylight enters through the terminal windows while linear ceiling lights illuminate the polished floor. Repeated chairs, beams, and suspended signs give the quiet interior a precise geometric rhythm.',
  },
  'street/street-09.jpg': {
    title: 'Time Beyond the Iron',
    description:
      'The pale clock tower stands against an overcast sky, framed by heavy curved metalwork on the right. The contrast between ornate stonework and dark industrial geometry creates a restrained architectural composition.',
  },
  'street/street-10.jpg': {
    title: 'A Sign Beneath Summer',
    description:
      'The sign is viewed from below against a clear blue sky, with green foliage filling the opposite edge of the frame. Sunlit walls, deep blue tiles, and the simple white lettering give the street detail a crisp, graphic quality.',
  },
  'street/street-11.jpg': {
    title: 'Lunch Across the Table',
    description:
      'The oversized gray bowl dominates the foreground, its warm broth dotted with herbs and pale pieces of food. Cups, cutlery, and the diner opposite create the informal closeness of a shared meal.',
  },
  'street/street-12.jpg': {
    title: 'After the Last Sip',
    description:
      'Warm light gathers around the white cup while the rest of the setting recedes into shadow. Small reflections and the spoon left inside the cup preserve the quiet trace of a finished drink.',
  },
  'street/street-13.jpg': {
    title: 'Object in Hard Light',
    description:
      'Direct sunlight cuts across the pale upholstery, producing a compact, sharply defined shadow beneath the glasses. Cool blue fabric and the dark edge of the seat divide the frame into bold areas of color and light.',
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
  'travel/travel-12.jpg': {
    title: 'Arrival at the End of the World',
    location: 'Ushuaia, Argentina',
    date: 'July 15, 2026',
    description:
      'Finally — the end of the world. The plane fought through rough air, and when it landed the whole cabin applauded, like a scene from a film. The door opened onto golden light, and an iceberg rose to meet us. Ushuaia.',
  },
  'travel/travel-13.jpg': {
    title: 'Light Across the Snow',
    description:
      'Soft sunlight moves across the ridges, revealing overlapping peaks, shadowed gullies, and drifting cloud. The wide composition emphasizes the quiet scale and changing light of the alpine landscape.',
  },
  'travel/travel-14.jpg': {
    title: 'Mountain Above the Town',
    description:
      'Rendered in stark monochrome, the mountain’s rock and snow textures dominate the upper frame. Deep foreground shadows and tiny buildings below create a dramatic contrast between immense terrain and human settlement.',
  },

  // --- Memory (记忆) — a series in four parts ---
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
  'memory/memory-03.jpg': {
    title: 'The Square in Memory',
    description:
      'One place tested four ways — photograph, pale wash, diagram, photograph again. This is how memory handles a square you once lived near: some views stay sharp, others dissolve, and the same afternoon returns again and again, never quite the same.',
  },
  'memory/memory-04.jpg': {
    title: 'The House, From Memory',
    description:
      'The same small house dismantled into glass, foliage, shadow and measured plane. Memory does this to a place you have passed every day — it redraws it each time, until the building becomes less an object than a feeling that keeps its shape.',
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
    title: 'The Tree Knows I Was Here',
    description:
      'Mist over the coast; a lone tree and a person pausing for a moment make up an ordinary scene being watched. I record the instant the way one records a stage that was arranged in advance — sky, sea, branches, and the figure all placed inside a transparent set. Yet in this seemingly calm world, the single contrasting point of color becomes a small deviation — a tiny crack in reality, reminding us that even a life under countless gazes still owns its own moments.',
  },
  'frame/frame-04.jpg': {
    title: 'Reality Inside the Room',
    description:
      'A strange room, a lit lamp, an open book. The quietest moments of travel are rarely the destinations — they are the times nobody watches, when you keep company with yourself. Truman looked for the exit to find what was real. Sometimes we need no escape, only the feeling of truly existing inside our own lives.',
  },

  // --- The Before Trilogy — three times of day, one question ---
  'before/before-01.jpg': {
    title: 'The Morning We Met',
    description:
      'Early morning on a quiet sidewalk, and two people walking the same direction — one carrying a light backpack, both seen from behind or in profile. The low pale light belongs to the beginning of the day: nothing decided yet, everything still possible.',
  },
  'before/before-02.jpg': {
    title: 'The Long Evening',
    description:
      'Dusk on a residential street, two people standing close together near a large tree. Over the scene, a pale wall, window-like shapes and soft leaf shadows are laid like a collage — the evening holding its moment the way memory holds it: loosely, deliberately, almost ready to end.',
  },
  'before/before-03.jpg': {
    title: 'Before Midnight',
    description:
      'Blue hour, and my grandparents standing side by side with their backs to the camera, watching the wooded view. The day’s performances are over; what remains is the quieter work — remembering why the walk began, and choosing it again in the dark.',
  },
  'before/before-04.jpg': {
    title: 'Leaving the Dark Interior',
    description:
      'Night, and two people leaving a lit interior together, the signs glowing behind them. Whatever was said inside stays inside; what matters now is the walk out — the first steps of the next part of the evening.',
  },
  'before/before-05.jpg': {
    title: 'Between Passing Figures',
    description:
      'Daylight, and a couple holding their own small clearing among the trees while the world passes blurred in front of them. Dressed like it matters, standing close like it matters — some afternoons the whole story fits in one held pose.',
  },
  'before/before-06.jpg': {
    title: 'Walking Hand in Hand',
    description:
      'Hand in hand down George-Bähr-Straße, dappled chestnut light falling on their shoulders. I was behind them, which felt like the right place to be.',
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
  portrait: 'The Ones I Met',
  landscape: 'Places That Held Still',
  street: 'Days Like These',
  travel: 'Passing Through',
  odyssey: 'Odyssey',
  memory: 'Memory',
  frame: 'Outside the Frame',
  before: 'The Before Trilogy',
}
const KNOWN_ORDER = ['portrait', 'landscape', 'street', 'travel', 'odyssey', 'memory', 'frame', 'before']

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

// Map pins: approximate coordinates + display locations for works with known
// or strongly implied places (used by the Map page). More will join as the
// collection grows — edit freely.
const placePins = {
  'street/street-01.jpg': { location: 'Kunming, Yunnan, China', coords: [25.0389, 102.7183] },
  'street/street-02.jpg': { location: 'Kunming, Yunnan, China', coords: [25.0389, 102.7183] },
  'street/street-03.jpg': { location: 'Shanghai, China', coords: [31.2304, 121.4737] },
  'street/street-04.jpg': { location: 'Dresden, Germany', coords: [51.046, 13.739] },
  'street/street-05.jpg': { location: 'Dresden, Germany', coords: [51.051, 13.742] },
  'street/street-06.jpg': { location: 'Dresden, Germany', coords: [51.044, 13.735] },
  'street/street-07.jpg': { location: 'Dresden, Germany', coords: [51.049, 13.744] },
  'street/street-08.jpg': { location: 'Dresden, Germany', coords: [51.134, 13.767] },
  'street/street-09.jpg': { location: 'Macau, China', coords: [22.1987, 113.5439] },
  'street/street-13.jpg': { location: 'Kunming, Yunnan, China', coords: [25.0389, 102.7183] },
  'landscape/landscape-01.jpg': { location: 'Dali, Yunnan, China', coords: [25.606, 100.267] },
  'landscape/landscape-02.jpg': { location: 'Dresden, Germany', coords: [51.05, 13.737] },
  'landscape/landscape-03.jpg': { location: 'Dresden, Germany', coords: [51.05, 13.737] },
  'landscape/landscape-04.jpg': { location: 'Seven Sisters, United Kingdom', coords: [50.76, 0.202] },
  'memory/memory-01.jpg': { location: 'Seven Sisters, United Kingdom', coords: [50.762, 0.205] },
  'memory/memory-03.jpg': { location: 'Shanghai, China', coords: [31.2304, 121.4737] },
  'odyssey/odyssey-03.jpg': { location: 'Nanchang, Jiangxi, China', coords: [28.682, 115.858] },
  'travel/travel-04.jpg': { location: 'Macau, China', coords: [22.1987, 113.5439] },
  'travel/travel-08.jpg': { location: 'Ushuaia, Argentina', coords: [-54.8019, -68.303] },
  'travel/travel-10.jpg': { location: 'Xiamen, Fujian, China', coords: [24.4798, 118.0894] },
  'travel/travel-12.jpg': { location: 'Ushuaia, Argentina', coords: [-54.8019, -68.303] },
  'travel/travel-13.jpg': { location: 'Ushuaia, Argentina', coords: [-54.8019, -68.303] },
  'travel/travel-14.jpg': { location: 'Ushuaia, Argentina', coords: [-54.8019, -68.303] },
  'frame/frame-02.jpg': { location: 'Ushuaia, Argentina', coords: [-54.8019, -68.303] },
  'before/before-06.jpg': { location: 'Dresden, Germany', coords: [51.043, 13.742] },
}

const works = Object.entries(modules)
  .map(([key, url]) => {
    const match = /\.\.\/assets\/works\/([^/]+)\/([^/]+)$/.exec(key)
    if (!match) return null
    const folder = match[1]
    const filename = match[2]
    const category = labelFor(folder)
    const override = overrides[`${folder}/${filename}`] || {}
    const place = placePins[`${folder}/${filename}`] || {}
    return {
      id: key,
      folder,
      title: override.title || humanizeTitle(filename),
      category,
      location: override.location || place.location || '',
      date: override.date || '',
      description: override.description || '',
      image: url,
      coords: place.coords || override.coords || null,
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

// Optional series statement, shown when the theme is active (keyed by label)
const seriesNotes = {
  'Outside the Frame':
    'The Truman series looks at the distance between the real and the invented in travel — the photographs no longer simply prove "I was here"; they ask: as we keep recording the world, are we seeing what is real, or what we believe to be real?',
  'The Before Trilogy':
    'Three times of day, one question — sunrise, sunset, midnight. The Before Trilogy asks what love looks like between the morning we meet and the hour we finally tell the truth.',
  'Days Like These':
    'The ordinary days of a student’s life — meals, lectures, crossings, weather. Not photographs of a life: the life itself, mid-sentence.',
  'The Ones I Met':
    'People I meet along the way — those who paused, those who let me take their picture, and once, a friend who turned the camera on me. The series is never finished: there is always a new face waiting at the next corner.',
  'Places That Held Still':
    'Landscapes that asked me to stand still — a ferry crossing grey water, cliffs at dusk, a frozen road in low sun. The light came, and the place held still long enough for both of us.',
  'Passing Through':
    'Between semesters, a small bag and a film camera — shops, hotel rooms, train windows, one chairlift toward the snow. Places I was lucky enough to pass through.',
  'Odyssey':
    'A series after Homer — a street crowd as a strait to cross, a city as a labyrinth, a horizon as an island never reached. Every journey retold as myth; every myth found again in an ordinary day.',
  'Memory':
    'Places that exist twice — once as light, once as recollection. The coast, the square, the house: memory redraws them until they become less locations than feelings that keep their shape.',
}

// Series metadata for dedicated series pages (key, label, note)
const seriesMeta = KNOWN_ORDER.filter((k) => CATEGORY_LABELS[k]).map((k) => ({
  key: k,
  label: CATEGORY_LABELS[k],
  note: seriesNotes[CATEGORY_LABELS[k]] || '',
}))

export { works, categories, seriesNotes, seriesMeta }
