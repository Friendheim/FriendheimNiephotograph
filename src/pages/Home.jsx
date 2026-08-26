import { useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import Lightbox from '../components/Lightbox.jsx'
import { site } from '../data/site.js'
import { works } from '../data/works.js'

export default function Home() {
  const featured = works.slice(0, 6)
  const [selected, setSelected] = useState(null)

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="hero">
        <div className="container hero-grid">
          <Reveal className="hero-copy">
            <p className="eyebrow">{site.role}</p>
            <h1>{site.name}</h1>
            <p className="hero-slogan">{site.slogan}</p>
            <p className="hero-lede">{site.hero.intro}</p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/work">
                View the work
              </Link>
              <Link className="btn btn-ghost" to="/contact">
                Contact
              </Link>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <figure className="hero-figure">
              <img src={site.hero.image} alt={site.hero.alt} width="1200" height="1500" />
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ---------- Selected frames ---------- */}
      <section className="section featured">
        <div className="container">
          <Reveal>
            <div className="featured-head">
              <h2>Selected frames</h2>
              <Link className="text-link" to="/work">
                All frames →
              </Link>
            </div>
          </Reveal>
          <div className="featured-grid">
            {featured.map((w, i) => (
              <Reveal key={w.id} delay={i * 100}>
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

      {/* ---------- Quiet note ---------- */}
      <section className="section note">
        <div className="container note-inner">
          <Reveal>
            <p className="eyebrow">A note from the photographer</p>
            <p className="note-quote">“{site.slogan}”</p>
            <p className="note-text">{site.about.philosophy[0]}</p>
            <div style={{ marginTop: '1.8rem' }}>
              <Link className="btn btn-ghost" to="/about">
                More about me
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {selected && <Lightbox work={selected} onClose={() => setSelected(null)} />}
    </>
  )
}
