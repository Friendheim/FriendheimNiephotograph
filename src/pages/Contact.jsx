import Reveal from '../components/Reveal.jsx'
import { MailIcon, InstagramIcon } from '../components/icons.jsx'
import { site } from '../data/site.js'

export default function Contact() {
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent('Photography collaboration')}`

  return (
    <section className="contact">
      <div className="container contact-inner">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h1>Let&rsquo;s make something together.</h1>
          <p className="contact-lede">{site.contact.intro}</p>

          <div className="contact-actions">
            <a className="btn btn-primary" href={mailto}>
              <MailIcon /> Email me
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
            {site.contact.note} · {site.email}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
