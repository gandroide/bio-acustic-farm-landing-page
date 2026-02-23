import { useState, useEffect } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import './Navbar.css'

export default function Navbar() {
  const { t, locale, setLocale, SUPPORTED_LOCALES } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        {/* Logo */}
        <a href="#" className="navbar__logo" aria-label="Bio-Alert Home">
          <svg className="navbar__logo-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
            <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M10 16 C10 12 13 10 16 10 C19 10 22 12 22 16" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M8 16 C8 10 11 7 16 7 C21 7 24 10 24 16" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5" />
            <circle cx="16" cy="16" r="2.5" fill="currentColor" />
            <path d="M16 18.5 L16 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="navbar__logo-text">
            <span className="navbar__logo-bio">Bio</span>-Alert
          </span>
        </a>

        {/* Right Side */}
        <div className="navbar__right">
          {/* Brivex Badge */}
          <a
            href="https://brivex.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__badge"
          >
            <span className="navbar__badge-dot" />
            {t('nav.brivexBadge')}
          </a>

          {/* Language Switcher */}
          <div className="navbar__lang" role="group" aria-label={t('nav.langLabel')}>
            {SUPPORTED_LOCALES.map((lang) => (
              <button
                key={lang}
                className={`navbar__lang-btn ${locale === lang ? 'navbar__lang-btn--active' : ''}`}
                onClick={() => setLocale(lang)}
                aria-pressed={locale === lang}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className={`navbar__hamburger ${mobileOpen ? 'navbar__hamburger--open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
            aria-expanded={mobileOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile Panel */}
      {mobileOpen && (
        <div className="navbar__mobile-panel">
          <div className="navbar__mobile-lang" role="group" aria-label={t('nav.langLabel')}>
            {SUPPORTED_LOCALES.map((lang) => (
              <button
                key={lang}
                className={`navbar__lang-btn ${locale === lang ? 'navbar__lang-btn--active' : ''}`}
                onClick={() => {
                  setLocale(lang)
                  setMobileOpen(false)
                }}
                aria-pressed={locale === lang}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
          <a
            href="https://brivex.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__badge navbar__badge--mobile"
          >
            <span className="navbar__badge-dot" />
            {t('nav.brivexBadge')}
          </a>
        </div>
      )}
    </header>
  )
}
