import { useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import Lightbox from '../components/Lightbox.jsx'
import { works, seriesMeta } from '../data/works.js'

// Dedicated page for one series: header with the series note + its frames.
export default function SeriesPage() {
  const { seriesKey } = useParams()
  const meta = seriesMeta.find((s) => s.key === seriesKey)
  const [selected, setSelected] = useState(null)

  if (!meta) return <Navigate to="/work" replace />

  const items = works.filter((w) => w.folder === seriesKey)

  return (
    <>
      <section className="page-head">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Series</p>
            <h1>{meta.label}</h1>
            {meta.note && <p className="page-intro series-note-static">{meta.note}</p>}
            <p style={{ marginTop: '1.4rem' }}>
              <Link className="text-link" to="/work">
                ← All work
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section portfolio-section">
        <div className="container">
          <div className="masonry">
            {items.map((w, i) => (
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
        </div>
      </section>

      {selected && (
        <Lightbox
          work={selected}
          items={items}
          onClose={() => setSelected(null)}
          onNavigate={(w) => setSelected(w)}
        />
      )}
    </>
  )
}
