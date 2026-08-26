import Reveal from '../components/Reveal.jsx'
import { useLang } from '../i18n.jsx'
import { site } from '../data/site.js'
import { siteZh } from '../data/zh.js'

export default function About() {
  const { lang, t } = useLang()
  const s = lang === 'zh' ? { ...site, ...siteZh } : site
  const { about } = s

  return (
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
  )
}
