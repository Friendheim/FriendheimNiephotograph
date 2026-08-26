import { useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import Lightbox from '../components/Lightbox.jsx'
import { useLang, workInLang } from '../i18n.jsx'
import { works, seriesMeta } from '../data/works.js'

// Dedicated page for one series: header with the series note + its frames.
export default function SeriesPage() {
  const { seriesKey } = useParams()
  const { lang, t } = useLang()
  const [selected, setSelected] = useState(null)

  const meta = seriesMeta.find((s) => s.key === seriesKey)

  if (!meta) return <Navigate to="/work" replace />

  const items = works.filter((w) => w.folder === seriesKey)
  const label = lang === 'zh' ? meta.labelZh : meta.label
  const note = lang === 'zh' ? meta.noteZh : meta.note

  return (
    <>
      <section className="page-head">
        <div className="container">
          <Reveal>
            <p className="eyebrow">{t('seriesEyebrow')}</p>
            <h1>{label}</h1>
            {note && <p className="page-intro series-note-static">{note}</p>}
            <p style={{ marginTop: '1.4rem' }}>
              <Link className="text-link" to="/work">
                {t('allWork')}
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section portfolio-section">
        <div className="container">
          <div className="masonry">
            {items.map((w, i) => {
              const wl = workInLang(w, lang)
              return (
                <Reveal key={w.id} delay={(i % 3) * 80}>
                  <button
                    type="button"
                    className="work-card"
                    onClick={() => setSelected(w)}
                    aria-label={`${t('viewDetails')}: ${wl.title} — ${wl.category}`}
                  >
                    <div className="frame">
                      <img src={w.image} alt={w.alt} loading="lazy" />
                    </div>
                    <span className="work-overlay">
                      <span className="work-title">{wl.title}</span>
                      <span className="work-cat">{wl.category}</span>
                    </span>
                  </button>
                </Reveal>
              )
            })}
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
