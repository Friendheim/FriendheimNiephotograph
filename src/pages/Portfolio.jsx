import { useMemo, useState } from 'react'
import Reveal from '../components/Reveal.jsx'
import Lightbox from '../components/Lightbox.jsx'
import { categories, works } from '../data/works.js'

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const [selected, setSelected] = useState(null)

  const filtered = useMemo(
    () => (active === 'All' ? works : works.filter((w) => w.category === active)),
    [active]
  )

  return (
    <>
      <section className="page-head">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Portfolio</p>
            <h1>Selected work</h1>
            <p className="page-intro">
              A quiet selection of portraits, landscapes, street scenes and travels — click any
              image to read its story.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <div className="filters" role="group" aria-label="Filter by category">
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  className="filter-btn"
                  aria-pressed={active === c}
                  onClick={() => setActive(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section portfolio-section">
        <div className="container">
          {/* key={active} re-triggers the soft fade-in when filtering */}
          <div className="masonry" key={active}>
            {filtered.map((w, i) => (
              <Reveal key={w.id} delay={(i % 3) * 80}>
                <button
                  type="button"
                  className="work-card"
                  onClick={() => setSelected(w)}
                  aria-label={`View details: ${w.title} — ${w.category}`}
                >
                  <div className="frame">
                    <img src={w.image} alt={w.alt} loading="lazy" />
                  </div>
                  <span className="work-overlay">
                    <span className="work-title">{w.title}</span>
                    <span className="work-cat">{w.category}</span>
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="empty-hint">
              Nothing here yet — drop photos into <code>src/assets/works/creative/</code> and they
              will appear automatically.
            </p>
          )}
        </div>
      </section>

      {selected && <Lightbox work={selected} onClose={() => setSelected(null)} />}
    </>
  )
}
