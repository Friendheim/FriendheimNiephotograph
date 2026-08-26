import Reveal from '../components/Reveal.jsx'
import { MailIcon, InstagramIcon } from '../components/icons.jsx'
import { useLang } from '../i18n.jsx'
import { site } from '../data/site.js'
import { siteZh } from '../data/zh.js'

export default function Contact() {
  const { lang, t } = useLang()
  const s = lang === 'zh' ? { ...site, ...siteZh } : site
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent('Photography collaboration')}`

  return (
    <section className="contact">
      <div className="container contact-inner">
        <Reveal>
          <p className="eyebrow">{t('contactEyebrow')}</p>
          <h1>{t('contactH1')}</h1>
          <p className="contact-lede">{s.contact.intro}</p>

          <div className="contact-actions">
            <a className="btn btn-primary" href={mailto}>
              <MailIcon /> {t('emailMe')}
            </a>
            <a
              className="btn btn-ghost"
              href={site.instagramUrl}
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon /> {site.instagramHandle}
            </a>
          </div>

          <p className="contact-note">
            {s.contact.note} · {site.email}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
