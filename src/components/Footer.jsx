import { Link } from 'react-router-dom'
import { site } from '../data/site.js'
import { ArrowUpIcon } from './icons.jsx'

export default function Footer() {
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
            <h4>Menu</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/work">Work</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
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
            Back to top <ArrowUpIcon />
          </button>
        </div>
      </div>
    </footer>
  )
}
