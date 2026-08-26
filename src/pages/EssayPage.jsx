import { useState } from 'react'
import Reveal from '../components/Reveal.jsx'
import Lightbox from '../components/Lightbox.jsx'
import { works } from '../data/works.js'

const find = (k) => works.find((w) => w.id === `../assets/works/${k}.jpg`)

const CHAPTERS = [
  {
    no: 'I',
    title: 'Departure',
    prose:
      'It began on water. A white ferry crossing Erhai Lake in Dali, grey light, mountains barely sure they exist. I was still in China then, the camera still new, pointing at everything the way you point at everything when you are just beginning to see.',
    works: ['landscape/landscape-01'],
  },
  {
    no: 'II',
    title: 'Arrival',
    prose:
      'Dresden arrived slowly — first as a name, then as streets I had to learn by walking. The university taught me engineering; the streets taught me patience. Somewhere between them, the camera became less a toy and more a way of paying attention.',
    works: ['street/street-04', 'portrait/portrait-03'],
  },
  {
    no: 'III',
    title: 'The Ordinary Days',
    prose:
      'A set meal, a red light, a back row in a lecture hall. Days like these are mostly unremarkable — which is exactly why they are worth keeping. This is what a student’s life looks like when nobody is performing it.',
    works: ['street/street-02', 'street/street-03', 'street/street-06'],
  },
  {
    no: 'IV',
    title: 'Passing Through',
    prose:
      'Between semesters I travel light: a small bag, a film camera, and the conviction that the next corner is worth turning. London’s clock tower, the white cliffs at dusk, a chairlift climbing toward snow.',
    works: ['street/street-09', 'landscape/landscape-04', 'travel/travel-06'],
  },
  {
    no: 'V',
    title: 'The End of the World',
    prose:
      'The plane fought through rough air, and when it landed the whole cabin applauded. Ushuaia — golden light, an iceberg rising to meet us. I had walked to the end of the map, and the camera was still in my hand.',
    works: ['travel/travel-12'],
  },
  {
    no: 'VI',
    title: 'What Remains',
    prose:
      'The work keeps pointing back to the same questions: what is remembered, what is watched, what is true. My grandparents standing in the blue hour; a coast turning into afterimages; a dream of photographs that could one day stand beside the greats of Magnum. The walk is not finished — there is always a new face waiting at the next corner.',
    works: ['memory/memory-01', 'before/before-03', 'odyssey/odyssey-01'],
  },
]

export default function EssayPage() {
  const [selected, setSelected] = useState(null)
  const essayWorks = CHAPTERS.flatMap((c) => c.works.map(find)).filter(Boolean)

  return (
    <article className="essay">
      <header className="essay-head">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Essay</p>
            <h1>The Long Walk</h1>
            <p className="essay-intro">
              Photographs from three years of walking — from the ferry at Dali to the end of the
              world.
            </p>
          </Reveal>
        </div>
      </header>

      {CHAPTERS.map((c, i) => {
        const items = c.works.map(find).filter(Boolean)
        return (
          <section className="essay-chapter" key={c.no}>
            <div className="container">
              <Reveal>
                <p className="essay-no">{c.no}</p>
                <h2>{c.title}</h2>
                <p className="essay-prose">{c.prose}</p>
              </Reveal>
              <div className={`essay-figures${i % 2 ? ' flipped' : ''}`}>
                {items.map((w) => (
                  <Reveal key={w.id} delay={80}>
                    <figure className="essay-figure">
                      <button
                        type="button"
                        className="work-card"
                        onClick={() => setSelected(w)}
                        aria-label={`View details: ${w.title}`}
                      >
                        <div className="frame">
                          <img src={w.image} alt={w.alt} loading="lazy" />
                        </div>
                      </button>
                      <figcaption>
                        <strong>{w.title}</strong>
                        {w.location && <span> · {w.location}</span>}
                      </figcaption>
                    </figure>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      {selected && (
        <Lightbox
          work={selected}
          items={essayWorks}
          onClose={() => setSelected(null)}
          onNavigate={(w) => setSelected(w)}
        />
      )}
    </article>
  )
}
