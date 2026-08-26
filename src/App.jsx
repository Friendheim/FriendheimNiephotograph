import { useEffect } from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import BackToTop from './components/BackToTop.jsx'
import Home from './pages/Home.jsx'
import Portfolio from './pages/Portfolio.jsx'
import SeriesPage from './pages/SeriesPage.jsx'
import MapPage from './pages/MapPage.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  // scroll only when the top-level route changes (not when the work deep-link
  // parameter changes, so the lightbox does not jump the page)
  const base = pathname.split('/').filter(Boolean)[0] || ''
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [base])
  return null
}

export default function App() {
  return (
    <div className="site">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScrollToTop />
      <Navbar />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Portfolio />} />
          <Route path="/work/:workKey" element={<Portfolio />} />
          <Route path="/series/:seriesKey" element={<SeriesPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/essay" element={<Navigate to="/about" replace />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
