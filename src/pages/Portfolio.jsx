import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import Lightbox from '../components/Lightbox.jsx'
import { categories, works, seriesNotes, seriesMeta } from '../data/works.js'

// e.g. "../assets/works/travel/travel-12.jpg" → "travel/travel-12"
const keyOf = (w) => w.id.replace('../assets/works/', '').replace(/\.(jpe?g|png|webp)$/i, '')

export default function Portfolio() {
  const { workKey } = useParams()
  const navigate = useNavigate()
  const [active, setActive] = useState('All')
  const [selected, setSelected] = useState(null)

  const filtered = useMemo(
    () => (active === 'All' ? works : works.filter((w) => w.category === active)),
    [active]
  )

  // Deep link: visiting /work/travel/travel-12 opens that work directly
  useEffect(() => {
    if (!workKey) return
    const w = works.find((x) => keyOf(x) === workKey)
    if (w) {
      setActive(w.category)
      setSelected(w)
    }
  }, [workKey])

  const openWork = (w) => {
    setSelected(w)
    navigate(`/work/${encodeURIComponent(keyOf(w))}`, { replace: true })
  }
  const closeWork = () => {
    setSelected(null)
    if (workKey) navigate('/work', { replace: true })
  }

  const activeSeries = seriesMeta.find((s) => s.label === active)

  return (
    <>
      <section className="page-head">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Portfolio</p>
            <h1>Selected work</h1>
            <p className="page-intro">
              Frames from eight quiet series — click any image to read its story.
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
            {seriesNotes[active] && <p className="series-note">{seriesNotes[active]}</p>}
            {activeSeries && (
              <Link className="series-link" to={`/series/${activeSeries.key}`}>
                View the series →
              </Link>
            )}
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
                  onClick={() => openWork(w)}
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

      {selected && (
        <Lightbox
          work={selected}
          items={filtered}
          onClose={closeWork}
          onNavigate={(w) => setSelected(w)}
        />
      )}
    </>
  )
}
