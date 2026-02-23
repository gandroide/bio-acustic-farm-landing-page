import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'
import './EarlyAdoptersSection.css'

const BENEFIT_ICONS = {
  audit: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  ),
  hardware: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M9 1v3" /><path d="M15 1v3" /><path d="M9 20v3" /><path d="M15 20v3" />
      <path d="M20 9h3" /><path d="M20 14h3" /><path d="M1 9h3" /><path d="M1 14h3" />
    </svg>
  ),
  license: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
}

const BENEFIT_KEYS = ['audit', 'hardware', 'license']

export default function EarlyAdoptersSection() {
  const { t } = useLanguage()

  return (
    <section className="section early-adopters bg-grid-pattern" id="early-adopters">
      <div className="container">
        <motion.div
          className="ea-banner"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Decorative corner accents */}
          <div className="ea-banner__corner ea-banner__corner--tl" aria-hidden="true" />
          <div className="ea-banner__corner ea-banner__corner--br" aria-hidden="true" />

          <div className="ea-banner__header">
            <span className="section-tag section-tag--amber">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              {t('earlyAdopters.sectionTag')}
            </span>
            <h2 className="section-title ea-banner__title">{t('earlyAdopters.title')}</h2>
            <p className="ea-banner__subtitle">{t('earlyAdopters.subtitle')}</p>
          </div>

          <div className="ea-benefits">
            {BENEFIT_KEYS.map((key, i) => (
              <motion.div
                key={key}
                className="ea-benefit"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              >
                <div className="ea-benefit__icon">
                  {BENEFIT_ICONS[key]}
                </div>
                <div>
                  <h3 className="ea-benefit__title">{t(`earlyAdopters.benefits.${key}.title`)}</h3>
                  <p className="ea-benefit__desc">{t(`earlyAdopters.benefits.${key}.description`)}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="ea-banner__cta"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <a href="#contact" className="btn btn-amber" id="cta-founding-partner">
              {t('earlyAdopters.cta')}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
