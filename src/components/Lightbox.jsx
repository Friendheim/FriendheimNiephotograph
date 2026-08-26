import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { CloseIcon, ArrowLeftIcon, ArrowRightIcon, LinkIcon } from './icons.jsx'
import { useLang, workInLang } from '../i18n.jsx'

/**
 * Immersive work-detail modal.
 * Closes on: backdrop click, close button, or Escape.
 * Browsing: ← / → keys or the arrow buttons step through `items`.
 * Copy link copies the current page URL (per-work deep link).
 */
export default function Lightbox({ work, items = [], onClose, onNavigate }) {
  const { lang, t } = useLang()
  const panelRef = useRef(null)
  const closeRef = useRef(null)
  const [copied, setCopied] = useState(false)

  const w = workInLang(work, lang)

  const idx = items.findIndex((x) => x.id === work.id)
  const prev = idx > 0 ? items[idx - 1] : null
  const next = idx >= 0 && idx < items.length - 1 ? items[idx + 1] : null

  const goPrev = useCallback(() => {
    if (prev) onNavigate(prev)
  }, [prev, onNavigate])

  const goNext = useCallback(() => {
    if (next) onNavigate(next)
  }, [next, onNavigate])

  const handleKey = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
        return
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        goPrev()
        return
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault()
        goNext()
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
    [onClose, goPrev, goNext]
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

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch (e) {
      /* clipboard unavailable */
    }
  }

  return createPortal(
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`${w.title} — ${w.category}`}
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
          aria-label={t('closeDetails')}
        >
          <CloseIcon />
        </button>
        {prev && (
          <button
            type="button"
            className="lightbox-nav prev"
            onClick={goPrev}
            aria-label={t('prevWork')}
          >
            <ArrowLeftIcon />
          </button>
        )}
        {next && (
          <button
            type="button"
            className="lightbox-nav next"
            onClick={goNext}
            aria-label={t('nextWork')}
          >
            <ArrowRightIcon />
          </button>
        )}
        <div className="lightbox-media">
          <img src={work.image} alt={work.alt} />
        </div>
        <div className="lightbox-meta">
          <div className="lightbox-meta-top">
            <span className="lightbox-cat">{w.category}</span>
            {items.length > 1 && (
              <span className="lightbox-count">
                {idx + 1} / {items.length}
              </span>
            )}
          </div>
          <h2>{w.title}</h2>
          {(w.location || w.date) && (
            <div className="lightbox-facts">
              {w.location && <span>📍 {w.location}</span>}
              {w.date && <span>📅 {w.date}</span>}
            </div>
          )}
          {w.description && <p className="lightbox-desc">{w.description}</p>}
          <div className="lightbox-actions">
            <button
              type="button"
              className={`copy-btn${copied ? ' copied' : ''}`}
              onClick={copyLink}
            >
              <LinkIcon /> {copied ? t('linkCopied') : t('copyLink')}
            </button>
            <span className="lightbox-note">{t('browseHint')}</span>
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}
