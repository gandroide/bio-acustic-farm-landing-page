import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import en from './en.json'
import es from './es.json'
import pt from './pt.json'

const dictionaries = { en, es, pt }
const SUPPORTED_LOCALES = ['en', 'es', 'pt']
const STORAGE_KEY = 'bioalert-locale'

function detectLocale() {
  // Check localStorage first
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored && SUPPORTED_LOCALES.includes(stored)) return stored

  // Auto-detect from browser
  const browserLang = navigator.language?.slice(0, 2).toLowerCase()
  if (SUPPORTED_LOCALES.includes(browserLang)) return browserLang

  return 'en' // fallback
}

function getNestedValue(obj, path) {
  return path.split('.').reduce((acc, part) => acc?.[part], obj)
}

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [locale, setLocaleState] = useState(detectLocale)

  const setLocale = useCallback((newLocale) => {
    if (SUPPORTED_LOCALES.includes(newLocale)) {
      setLocaleState(newLocale)
      localStorage.setItem(STORAGE_KEY, newLocale)
      document.documentElement.lang = newLocale
    }
  }, [])

  // Set initial lang attribute
  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const t = useCallback((key) => {
    const value = getNestedValue(dictionaries[locale], key)
    if (value === undefined) {
      console.warn(`[i18n] Missing key "${key}" for locale "${locale}"`)
      return getNestedValue(dictionaries.en, key) || key
    }
    return value
  }, [locale])

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, SUPPORTED_LOCALES }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider')
  return context
}
