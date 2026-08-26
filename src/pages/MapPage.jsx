import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { works } from '../data/works.js'

const keyOf = (w) => w.id.replace('../assets/works/', '').replace(/\.(jpe?g|png|webp)$/i, '')

export default function MapPage() {
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
      L.marker(w.coords, { icon })
        .addTo(map)
        .bindPopup(
          `<div class="map-popup">
            <img src="${w.image}" alt="${w.alt}" />
            <strong>${w.title}</strong>
            <span>${w.category}${w.location ? ' · ' + w.location : ''}</span>
            <a href="#/work/${encodeURIComponent(keyOf(w))}">View work →</a>
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
  }, [])

  return (
    <section className="page-head">
      <div className="container">
        <p className="eyebrow">Map</p>
        <h1>Where these frames were made</h1>
        <p className="page-intro">
          China → Dresden → London → the white cliffs → the end of the world. Tap a pin to open the
          work.
        </p>
      </div>
      <div className="map-wrap" ref={containerRef} aria-label="Map of photograph locations" />
      <div className="container">
        <p className="map-footnote">
          Pins show works with known locations — more will join as the collection grows.
        </p>
      </div>
    </section>
  )
}
