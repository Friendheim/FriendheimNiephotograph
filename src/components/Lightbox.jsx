import { useCallback, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { CloseIcon } from './icons.jsx'

/**
 * Immersive work-detail modal.
 * Closes on: backdrop click, close button, or Escape.
 * Keyboard: focus is trapped inside while open, then returned to
 * the triggering element on close. Body scroll is locked.
 */
export default function Lightbox({ work, onClose }) {
  const panelRef = useRef(null)
  const closeRef = useRef(null)

  const handleKey = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
        return
      }
      if (e.key === 'Tab') {
        const panel = panelRef.current
        if (!panel) return
        const focusables = panel.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        if (focusables.length === 0) return
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    },
    [onClose]
  )

  useEffect(() => {
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const previouslyFocused = document.activeElement
    closeRef.current?.focus()
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', handleKey)
      if (previouslyFocused && typeof previouslyFocused.focus === 'function') {
        previouslyFocused.focus()
      }
    }
  }, [handleKey])

  return createPortal(
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`${work.title} — ${work.category}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="lightbox-backdrop" aria-hidden="true" />
      <div className="lightbox-panel" ref={panelRef}>
        <button
          type="button"
          ref={closeRef}
          className="lightbox-close"
          onClick={onClose}
          aria-label="Close details"
        >
          <CloseIcon />
        </button>
        <div className="lightbox-media">
          <img src={work.image} alt={work.alt} />
        </div>
        <div className="lightbox-meta">
          <span className="lightbox-cat">{work.category}</span>
          <h2>{work.title}</h2>
          <div className="lightbox-facts">
            <span>📍 {work.location}</span>
            <span>📅 {work.date}</span>
          </div>
          <p className="lightbox-desc">{work.description}</p>
          <p className="lightbox-note">Press Esc or click outside to close.</p>
        </div>
      </div>
    </div>,
    document.body
  )
}
