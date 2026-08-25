import Reveal from '../components/Reveal.jsx'
import { site } from '../data/site.js'

export default function About() {
  const { about } = site

  return (
    <section className="page-head">
      <div className="container">
        <Reveal>
          <p className="eyebrow">About</p>
          <h1>About me</h1>
        </Reveal>

        <div className="about-grid">
          <Reveal delay={100}>
            <figure className="about-figure">
              <img
                src="images/avatar.jpg"
                alt="Portrait placeholder — replace with a photo of yourself"
                width="900"
                height="1125"
              />
              <figcaption className="about-caption">
                Portrait placeholder — swap in <code>public/images/avatar.jpg</code>
              </figcaption>
            </figure>
          </Reveal>

          <div>
            <Reveal>
              <div className="about-section">
                <h2>A quiet way of seeing</h2>
                {about.philosophy.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="about-section">
                <h2>Along the way</h2>
                {(Array.isArray(about.story) ? about.story : [about.story]).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div className="about-section">
                <h2>In the bag</h2>
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
  )
}
