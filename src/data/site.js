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
  email: 'friendheimnie@gmail.com',
  instagramHandle: '@friendheimnie',
  instagramUrl: 'https://www.instagram.com/friendheimnie/',

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
      'I am a student first — third year at TU Dresden — and a photographer second. My favourite way to see a city is on foot; walking is where most of my photographs begin. My work favours quiet scenes and unguarded moments: a folded hand, light crossing a wall, a street that is almost empty. I try not to interrupt the world, only to notice it more carefully.',
      'The images here are a kind of visual diary — portraits, street scenes, landscapes and travels from the places I have been lucky enough to wander. I edit lightly and honestly: no invented skies, no rearranged shadows.',
    ],
    story:
      'Photography found me during my student years and has been pulling me forward ever since. I make pictures whenever I can — on the way to class, on long walks through the city, on short trips, in the long quiet of the evening. My dream is to grow into the kind of photographer whose work could one day sit alongside the greats of Magnum Photos.',
    equipment: [
      'Nikon 35Ti — 35mm film compact, for slow days',
      'Fujifilm X-T5 — 23mm f/1.4 & 56mm f/1.2',
      'Fujifilm X100VI — the everyday camera',
      'Minimal post-processing — honest scans, light edits',
    ],
  },

  // — Contact page —
  contact: {
    intro:
      'Commissions, editorial assignments and travel collaborations — if you have an idea, or simply a place worth wandering, I would love to hear it.',
    note: 'I usually reply within a few days.',
  },
}
