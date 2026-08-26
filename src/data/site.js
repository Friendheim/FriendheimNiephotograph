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
      'Photography came to me quietly, the way the best things usually do — somewhere between lectures and the long walks I take to learn a new city. Three years in, I am still learning to see. My eye keeps returning to the small, honest moments: a folded hand, light crossing a wall, a street that is almost empty. I try not to interrupt the world, only to notice it more carefully.',
      'The images here are a kind of walking diary — portraits, street scenes, landscapes and travels from the places I have been lucky enough to wander through with a camera. I edit lightly and honestly: no invented skies, no rearranged shadows. A photograph earns its place here only if it was true before I arrived.',
    ],
    story: [
      'Photography found me three years ago, in my first two years at university in Nanchang, back home in China, and it travelled with me when I came to Dresden in my third year. I make most of my pictures on foot — on the way to class, through streets I have never walked before, in the long quiet of the evening. Between semesters I travel light: a small bag, a film camera, and the conviction that the next corner is worth turning.',
      'My dream is simple and large at the same time: to see my photographs standing one day, shoulder to shoulder, beside the work of Magnum photographers. That would mean becoming a particular kind of photographer — patient with light, honest with people, and quiet enough to notice what others walk past. I am trying to become that photographer, one honest frame at a time.',
    ],
    equipment: [
      'Nikon 35Ti — 35mm film compact, for slow days',
      'Fujifilm X-Pro2 — 23mm f/1.4 & 56mm f/1.2',
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
