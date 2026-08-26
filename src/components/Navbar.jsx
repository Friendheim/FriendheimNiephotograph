import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle.jsx'
import { useLang } from '../i18n.jsx'
import { site } from '../data/site.js'

export default function Navbar() {
  const { lang, setLang, t } = useLang()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { to: '/', label: t('navHome'), end: true },
    { to: '/work', label: t('navWork') },
    { to: '/map', label: t('navMap') },
    { to: '/about', label: t('navAbout') },
    { to: '/contact', label: t('navContact') },
  ]

  return (
    <header className={`nav${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container nav-inner">
        <NavLink to="/" className="nav-brand">
          {site.name}
        </NavLink>
        <nav aria-label="Main navigation">
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-toggles">
          <button
            type="button"
            className="lang-toggle"
            onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
            aria-label={lang === 'zh' ? t('switchToEn') : t('switchToZh')}
            title={lang === 'zh' ? t('switchToEn') : t('switchToZh')}
          >
            {lang === 'zh' ? 'EN' : '中'}
          </button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
