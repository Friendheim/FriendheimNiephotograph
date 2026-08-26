import { useState } from 'react'
import Reveal from '../components/Reveal.jsx'
import Lightbox from '../components/Lightbox.jsx'
import { useLang, useSite, workInLang } from '../i18n.jsx'
import { works } from '../data/works.js'
import { essayZh } from '../data/zh.js'

const find = (k) => works.find((w) => w.id === `../assets/works/${k}.jpg`)

const CHAPTERS = [
  {
    no: 'I',
    title: 'Departure',
    prose:
      'It began in Nanchang — my first two years at university, the camera still new, and so was I, pointing it at everything the way you do when you are just beginning to see. I found a magazine about wandering and read it slowly, like a promise. Then came the streets of Kunming, the blue hour of Xiamen — places I did not yet know I was leaving.',
    works: ['travel/travel-15', 'street/street-01', 'travel/travel-10'],
  },
  {
    no: 'II',
    title: 'Arrival',
    prose:
      'Dresden arrived slowly — first as a name, then as streets I had to learn by walking. The university taught me computer engineering; the streets taught me patience. Somewhere between the two, the camera slowly stopped being a toy and became a way of paying attention.',
    works: ['street/street-04', 'portrait/portrait-03', 'travel/travel-16'],
  },
  {
    no: 'III',
    title: 'The Ordinary Days',
    prose:
      'A set meal, a red light, a back row in a lecture hall. Days like these are worth keeping precisely because they never perform for the camera. This is what a life looks like mid-sentence.',
    works: ['street/street-02', 'street/street-03', 'street/street-06'],
  },
  {
    no: 'IV',
    title: 'Passing Through',
    prose:
      'Between semesters I travel light: a small bag, a film camera, and the quiet conviction that the next corner is worth turning. A clock tower against the ironwork, the white cliffs at dusk, a chairlift climbing toward snow — and my X-Pro2 resting on my knee between stations, waiting for the next window.',
    works: ['street/street-09', 'travel/landscape-04', 'travel/travel-06', 'travel/travel-17'],
  },
  {
    no: 'V',
    title: 'The End of the World',
    prose:
      'The plane fought through rough air, and when it landed the whole cabin applauded. Ushuaia — golden light, an iceberg rising to meet us. The mountains kept arriving for days afterwards: light crossing the snow, a peak above the town. I had walked to the end of the map, and the camera was still in my hand.',
    works: ['travel/travel-12', 'travel/travel-13', 'travel/travel-14'],
  },
  {
    no: 'VI',
    title: 'What Remains',
    prose:
      'The work keeps pointing back to the same questions: what is remembered, what is watched, what is true. My grandparents standing in the blue hour; at midnight, honest words held gently by the night; and in the dusk of Ushuaia, a boat resting before the snow mountains — whether the distance is real is never discovered, only formed, again and again, in the act of watching. The dream of Magnum is still there. And the walk is not finished — there is always a new face waiting at the next corner.',
    works: ['memory/memory-01', 'before/before-03', 'frame/frame-02'],
  },
]

export default function About() {
  const { lang, t } = useLang()
  const s = useSite()
  const { about } = s
  const [selected, setSelected] = useState(null)
  const essayWorks = CHAPTERS.flatMap((c) => c.works.map(find)).filter(Boolean)
  const zh = lang === 'zh' ? essayZh : null

  return (
    <>
      <section className="page-head">
        <div className="container">
          <Reveal>
            <p className="eyebrow">{t('aboutEyebrow')}</p>
            <h1>{t('aboutMe')}</h1>
          </Reveal>

          <div className="about-grid">
            <Reveal delay={100}>
              <figure className="about-figure">
                <img src="images/avatar.jpg" alt={s.hero.alt} width="900" height="1125" />
                <figcaption className="about-caption">{t('avatarNote')}</figcaption>
              </figure>
            </Reveal>

            <div>
              <Reveal>
                <div className="about-section">
                  <h2>{t('quietSeeing')}</h2>
                  {about.philosophy.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={160}>
                <div className="about-section">
                  <h2>{t('alongTheWay')}</h2>
                  {(Array.isArray(about.story) ? about.story : [about.story]).map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={240}>
                <div className="about-section">
                  <h2>{t('inTheBag')}</h2>
                  <ul className="equip-list">
                    {about.equipment.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- The Long Walk (essay, merged into About) ---------- */}
      <article className="essay essay-merged">
        <header className="essay-head">
          <div className="container">
            <Reveal>
              <p className="eyebrow">{t('essayEyebrow')}</p>
              <h2>{t('essayH1')}</h2>
              <p className="essay-intro">{t('essayIntro')}</p>
            </Reveal>
          </div>
        </header>

        {CHAPTERS.map((c, i) => {
          const items = c.works.map(find).filter(Boolean)
          const title = zh ? zh[i].title : c.title
          const prose = zh ? zh[i].prose : c.prose
          return (
            <section className="essay-chapter" key={c.no}>
              <div className="container">
                <Reveal>
                  <p className="essay-no">{c.no}</p>
                  <h3>{title}</h3>
                  <p className="essay-prose">{prose}</p>
                </Reveal>
                <div className={`essay-figures${i % 2 ? ' flipped' : ''}`}>
                  {items.map((w) => {
                    const wl = workInLang(w, lang)
                    return (
                      <Reveal key={w.id} delay={80}>
                        <figure className="essay-figure">
                          <button
                            type="button"
                            className="work-card"
                            onClick={() => setSelected(w)}
                            aria-label={`${t('viewDetails')}: ${wl.title}`}
                          >
                            <div className="frame">
                              <img src={w.image} alt={w.alt} loading="lazy" />
                            </div>
                          </button>
                          <figcaption>
                            <strong>{wl.title}</strong>
                            {w.location && <span> · {w.location}</span>}
                          </figcaption>
                        </figure>
                      </Reveal>
                    )
                  })}
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
    </>
  )
}
