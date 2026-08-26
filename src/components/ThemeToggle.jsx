import { useEffect, useState } from 'react'
import { SunIcon, MoonIcon } from './icons.jsx'
import { useLang } from '../i18n.jsx'

function getInitialTheme() {
  try {
    const stored = localStorage.getItem('fhn-theme')
    if (stored === 'light' || stored === 'dark') return stored
  } catch (e) {
    /* ignore */
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function ThemeToggle() {
  const { t } = useLang()
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem('fhn-theme', theme)
    } catch (e) {
      /* ignore */
    }
  }, [theme])

  const next = theme === 'light' ? 'dark' : 'light'

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => setTheme(next)}
      aria-label={next === 'dark' ? t('switchDark') : t('switchLight')}
      title={next === 'dark' ? t('switchDark') : t('switchLight')}
    >
      {theme === 'light' ? <MoonIcon /> : <SunIcon />}
    </button>
  )
}
