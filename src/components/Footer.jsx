import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'
import './Footer.css'

export default function Footer() {
  const { t } = useLanguage()
  const [formState, setFormState] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In production, this would POST to an API
    console.log('[Bio-Alert] Form submitted:', formState)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setFormState({ company: '', name: '', email: '', phone: '', message: '' })
  }

  return (
    <footer className="footer" id="contact">
      <div className="container footer__inner">
        {/* Form Column */}
        <motion.div
          className="footer__form-col"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="footer__form-title">{t('footer.formTitle')}</h2>
          <p className="footer__form-desc">{t('footer.formDescription')}</p>

          <form onSubmit={handleSubmit} className="footer__form" id="contact-form">
            <div className="footer__form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="company">{t('footer.fields.company')}</label>
                <input
                  className="form-input"
                  type="text"
                  id="company"
                  name="company"
                  value={formState.company}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="name">{t('footer.fields.name')}</label>
                <input
                  className="form-input"
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="footer__form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="email">{t('footer.fields.email')}</label>
                <input
                  className="form-input"
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="phone">{t('footer.fields.phone')}</label>
                <input
                  className="form-input"
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="message">{t('footer.fields.message')}</label>
              <textarea
                className="form-textarea"
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                rows="4"
              />
            </div>

            <button type="submit" className="btn btn-primary footer__submit" id="submit-form">
              {submitted ? '✓' : t('footer.submit')}
            </button>
          </form>
        </motion.div>

        {/* Info Column */}
        <motion.div
          className="footer__info-col"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="footer__brand">
            <svg className="footer__brand-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
              <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M10 16 C10 12 13 10 16 10 C19 10 22 12 22 16" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              <path d="M8 16 C8 10 11 7 16 7 C21 7 24 10 24 16" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5" />
              <circle cx="16" cy="16" r="2.5" fill="currentColor" />
              <path d="M16 18.5 L16 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <div>
              <span className="footer__brand-name">
                <span style={{ color: 'var(--color-green-400)' }}>Bio</span>-Alert
              </span>
              <span className="footer__brand-sub">by Brivex</span>
            </div>
          </div>

          <p className="footer__legal">{t('footer.legal')}</p>

          <div className="footer__links">
            <a href="https://brivex.ai" target="_blank" rel="noopener noreferrer">
              brivex.ai
            </a>
            <a href="https://bioalert.brivex.ai" target="_blank" rel="noopener noreferrer">
              bioalert.brivex.ai
            </a>
          </div>

          <div className="footer__bottom">
            <p className="footer__copyright">{t('footer.copyright')}</p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
