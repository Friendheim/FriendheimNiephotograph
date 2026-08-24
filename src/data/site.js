// ============================================================
//  Site-wide content.
//  EDIT HERE: name, role, slogan, email, Instagram, bio, equipment.
//  Photos themselves live in /public/images (see README).
// ============================================================

export const site = {
  name: 'FriendheimNie',
  role: 'Independent Photographer',
  slogan: 'Quiet moments, honestly observed.',

  // — Contact —
  email: 'friendheimguo@gmail.com',
  instagramHandle: '@friendheimgyh',
  instagramUrl: 'https://www.instagram.com/friendheimgyh/',

  // — Home hero —
  hero: {
    image: 'images/hero.jpg',
    alt: 'A quiet landscape in warm evening light — replace with your own hero photo',
    intro:
      'I make photographs of the small, honest moments — the pause before a sentence, the light on a rainy window, a stranger who almost smiled.',
  },

  // — About page —
  about: {
    philosophy: [
      'I photograph what is already there. My work favours quiet scenes and unguarded moments — a folded hand, light crossing a wall, a street that is almost empty. I try not to interrupt the world, only to notice it more carefully.',
      'The images here are a kind of visual diary: portraits of people I have met along the way, landscapes that slowed me down, and places I have been lucky enough to wander. I edit lightly and honestly — no invented skies, no rearranged shadows.',
    ],
    story:
      'I have been making photographs for over a decade, mostly between Asia and Europe, working slowly and in small series. Alongside commissioned portraits and editorial work, I keep a personal practice of street and travel photography that shapes everything else I do.',
    equipment: [
      'Fujifilm X-T5 — 23mm f/1.4 & 56mm f/1.2',
      'Fujifilm X100VI — the everyday camera',
      '35mm film — Olympus OM-1, Kodak Portra 400',
      'Lightroom only, minimal color work',
    ],
  },

  // — Contact page —
  contact: {
    intro:
      'Commissions, editorial assignments and travel collaborations — if you have an idea, or simply a place worth wandering, I would love to hear it.',
    note: 'I usually reply within a few days.',
  },
}
