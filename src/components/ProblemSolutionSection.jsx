import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'
import './ProblemSolutionSection.css'

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  }),
}

const ICONS = {
  privacy: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  ),
  biosecurity: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  autonomy: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="7" width="12" height="14" rx="2" />
      <path d="M10 3h4" />
      <path d="M10 11h4" />
      <path d="M10 15h4" />
    </svg>
  ),
  extraction: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a4 4 0 0 0-4 4v1a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2V6a4 4 0 0 0-4-4z" />
      <path d="M8 14v4a4 4 0 0 0 8 0v-4" />
      <line x1="12" y1="18" x2="12" y2="22" />
    </svg>
  ),
}

const CARD_KEYS = ['privacy', 'biosecurity', 'autonomy', 'extraction']

export default function ProblemSolutionSection() {
  const { t } = useLanguage()

  return (
    <section className="section problem-solution" id="solution">
      <div className="container">
        {/* Problem */}
        <motion.div
          className="problem-block"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            {t('problem.sectionTag')}
          </span>
          <h2 className="section-title">{t('problem.title')}</h2>
          <p className="section-description">{t('problem.description')}</p>
        </motion.div>

        {/* Solution */}
        <motion.div
          className="solution-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-tag section-tag--green">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            {t('solution.sectionTag')}
          </span>
          <h2 className="section-title">{t('solution.title')}</h2>
        </motion.div>

        <div className="grid-4 solution-grid">
          {CARD_KEYS.map((key, i) => (
            <motion.div
              key={key}
              className="card solution-card"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={cardVariants}
            >
              <div className={`card-icon card-icon--${key}`}>
                {ICONS[key]}
              </div>
              <h3>{t(`solution.cards.${key}.title`)}</h3>
              <p>{t(`solution.cards.${key}.description`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
