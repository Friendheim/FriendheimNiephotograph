import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import Lightbox from '../components/Lightbox.jsx'
import { useLang, workInLang } from '../i18n.jsx'
import { works, filters, seriesNotes, seriesMeta } from '../data/works.js'

// e.g. "../assets/works/travel/travel-12.jpg" → "travel/travel-12"
const keyOf = (w) => w.id.replace('../assets/works/', '').replace(/\.(jpe?g|png|webp)$/i, '')

export default function Portfolio() {
  const { workKey } = useParams()
  const navigate = useNavigate()
  const { lang, t } = useLang()
  const [active, setActive] = useState('all')
  const [selected, setSelected] = useState(null)

  const filtered = useMemo(
    () => (active === 'all' ? works : works.filter((w) => w.folder === active)),
    [active]
  )

  // Deep link: visiting /work/travel/travel-12 opens that work directly
  useEffect(() => {
    if (!workKey) return
    const w = works.find((x) => keyOf(x) === workKey)
    if (w) {
      setActive(w.folder)
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

  const activeSeries = seriesMeta.find((s) => s.key === active)
  const note = seriesNotes[active]

  return (
    <>
      <section className="page-head">
        <div className="container">
          <Reveal>
            <p className="eyebrow">{t('portfolioEyebrow')}</p>
            <h1>{t('selectedWork')}</h1>
            <p className="page-intro">{t('portfolioIntro')}</p>
          </Reveal>
          <Reveal delay={80}>
            <div className="filters" role="group" aria-label={t('filterBy')}>
              {filters.map((f) => (
                <button
                  key={f.key}
                  type="button"
                  className="filter-btn"
                  aria-pressed={active === f.key}
                  onClick={() => setActive(f.key)}
                >
                  {lang === 'zh' ? f.zh : f.en}
                </button>
              ))}
            </div>
            {note && (lang === 'zh' ? note.zh : note.en) && (
              <p className="series-note">{lang === 'zh' ? note.zh : note.en}</p>
            )}
            {activeSeries && (
              <Link className="series-link" to={`/series/${activeSeries.key}`}>
                {t('viewSeries')}
              </Link>
            )}
          </Reveal>
        </div>
      </section>

      <section className="section portfolio-section">
        <div className="container">
          {/* key={active} re-triggers the soft fade-in when filtering */}
          <div className="masonry" key={active}>
            {filtered.map((w, i) => {
              const wl = workInLang(w, lang)
              return (
                <Reveal key={w.id} delay={(i % 3) * 80}>
                  <button
                    type="button"
                    className="work-card"
                    onClick={() => openWork(w)}
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
          {filtered.length === 0 && <p className="empty-hint">{t('emptyHint')}</p>}
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
