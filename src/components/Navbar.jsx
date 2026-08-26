import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle.jsx'
import { site } from '../data/site.js'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/work', label: 'Work' },
  { to: '/map', label: 'Map' },
  { to: '/essay', label: 'Essay' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
