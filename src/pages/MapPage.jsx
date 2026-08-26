import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useLang } from '../i18n.jsx'
import { works } from '../data/works.js'

const keyOf = (w) => w.id.replace('../assets/works/', '').replace(/\.(jpe?g|png|webp)$/i, '')

export default function MapPage() {
  const { lang, t } = useLang()
  const containerRef = useRef(null)
  const mapRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return
    const pinned = works.filter((w) => w.coords)

    const map = L.map(containerRef.current, { scrollWheelZoom: false }).setView([45, 8], 3)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map)

    const icon = L.divIcon({
      className: 'map-pin',
      html: '<span></span>',
      iconSize: [16, 16],
      iconAnchor: [8, 8],
    })

    pinned.forEach((w) => {
      const title = lang === 'zh' ? w.titleZh || w.title : w.title
      const cat = lang === 'zh' ? w.categoryZh || w.category : w.category
      L.marker(w.coords, { icon })
        .addTo(map)
        .bindPopup(
          `<div class="map-popup">
            <img src="${w.image}" alt="${w.alt}" />
            <strong>${title}</strong>
            <span>${cat}${w.location ? ' · ' + w.location : ''}</span>
            <a href="#/work/${encodeURIComponent(keyOf(w))}">${t('viewDetails')} →</a>
          </div>`
        )
    })

    if (pinned.length) {
      map.fitBounds(L.latLngBounds(pinned.map((w) => w.coords)), { padding: [48, 48] })
    }

    mapRef.current = map
    return () => {
      map.remove()
      mapRef.current = null
    }
  }, [lang, t])

  return (
    <section className="page-head">
      <div className="container">
        <p className="eyebrow">{t('mapEyebrow')}</p>
        <h1>{t('mapH1')}</h1>
        <p className="page-intro">{t('mapIntro')}</p>
      </div>
      <div className="map-wrap" ref={containerRef} aria-label={t('mapH1')} />
      <div className="container">
        <p className="map-footnote">{t('mapFootnote')}</p>
      </div>
    </section>
  )
}
