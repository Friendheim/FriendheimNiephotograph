import { Link } from 'react-router-dom'
import { useLang } from '../i18n.jsx'
import { site } from '../data/site.js'
import { ArrowUpIcon } from './icons.jsx'

export default function Footer() {
  const { t } = useLang()
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>{site.name}</h3>
            <p>
              {site.role}. {site.slogan}
            </p>
          </div>
          <div>
            <h4>{t('menu')}</h4>
            <ul className="footer-links">
              <li><Link to="/">{t('navHome')}</Link></li>
              <li><Link to="/work">{t('navWork')}</Link></li>
              <li><Link to="/map">{t('navMap')}</Link></li>
              <li><Link to="/about">{t('navAbout')}</Link></li>
              <li><Link to="/contact">{t('navContact')}</Link></li>
            </ul>
          </div>
          <div>
            <h4>{t('footerContact')}</h4>
            <ul className="footer-links">
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <a href={site.instagramUrl} target="_blank" rel="noreferrer">
                  {site.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 {site.name}</span>
          <button type="button" className="to-top-link" onClick={scrollTop}>
            {t('backToTop')} <ArrowUpIcon />
          </button>
        </div>
      </div>
    </footer>
  )
}
