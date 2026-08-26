import { useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import Lightbox from '../components/Lightbox.jsx'
import { useLang, workInLang } from '../i18n.jsx'
import { site } from '../data/site.js'
import { siteZh } from '../data/zh.js'
import { works } from '../data/works.js'

// Six featured frames with an identical natural aspect ratio (16:9) — no cropping.
const FEATURED_KEYS = [
  '../assets/works/travel/travel-09.jpg',
  '../assets/works/travel/travel-07.jpg',
  '../assets/works/travel/travel-04.jpg',
  '../assets/works/travel/travel-10.jpg',
  '../assets/works/street/street-02.jpg',
  '../assets/works/street/street-03.jpg',
]

export default function Home() {
  const { lang, t } = useLang()
  const s = lang === 'zh' ? { ...site, ...siteZh } : site
  const featured = FEATURED_KEYS.map((k) => works.find((w) => w.id === k)).filter(Boolean)
  const [selected, setSelected] = useState(null)

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="hero">
        <div className="container hero-grid">
          <Reveal className="hero-copy">
            <p className="eyebrow">{s.role}</p>
            <h1>{s.name}</h1>
            <p className="hero-slogan">{s.slogan}</p>
            <p className="hero-lede">{s.hero.intro}</p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/work">
                {t('viewWork')}
              </Link>
              <Link className="btn btn-ghost" to="/contact">
                {t('contact')}
              </Link>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <figure className="hero-figure">
              <img src={s.hero.image} alt={s.hero.alt} width="1200" height="1500" />
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ---------- Selected frames ---------- */}
      <section className="section featured">
        <div className="container">
          <Reveal>
            <div className="featured-head">
              <h2>{t('selectedFrames')}</h2>
              <Link className="text-link" to="/work">
                {t('allFrames')}
              </Link>
            </div>
          </Reveal>
          <div className="featured-grid">
            {featured.map((w, i) => {
              const wl = workInLang(w, lang)
              return (
                <Reveal key={w.id} delay={i * 100}>
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

      {/* ---------- Quiet note ---------- */}
      <section className="section note">
        <div className="container note-inner">
          <Reveal>
            <p className="eyebrow">{t('noteFrom')}</p>
            <p className="note-quote">“{s.slogan}”</p>
            <p className="note-text">{s.about.philosophy[0]}</p>
            <div style={{ marginTop: '1.8rem' }}>
              <Link className="btn btn-ghost" to="/about">
                {t('moreAboutMe')}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {selected && (
        <Lightbox
          work={selected}
          items={works}
          onClose={() => setSelected(null)}
          onNavigate={(w) => setSelected(w)}
        />
      )}
    </>
  )
}
