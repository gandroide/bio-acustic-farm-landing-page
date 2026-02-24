import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'
import './RDVisionSection.css'

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  }),
}

const ICONS = {
  environmental: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.7 7.7a7.5 7.5 0 1 0-10.6 10.6" />
      <path d="M9.4 4.6A7.5 7.5 0 0 1 21 12" />
      <path d="M6.3 19.4A7.5 7.5 0 0 1 3 12" />
      <circle cx="12" cy="12" r="2" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
    </svg>
  ),
  biomarkers: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a8 8 0 0 0-8 8c0 3.4 2.1 6.3 5 7.5V20a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2.5c2.9-1.2 5-4.1 5-7.5a8 8 0 0 0-8-8z" />
      <path d="M12 2v4" />
      <path d="M8 10h8" />
      <path d="M10 14h4" />
      <line x1="10" y1="22" x2="14" y2="22" />
    </svg>
  ),
  access: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
}

const CARD_KEYS = ['environmental', 'biomarkers', 'access']

export default function RDVisionSection() {
  const { t } = useLanguage()

  return (
    <section className="section rd-vision bg-grid-pattern" id="rd-vision">
      <div className="container">
        <motion.div
          className="rd-vision__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-tag section-tag--teal">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <polygon points="13.73 4 2 14.74 7.26 14.74 10.27 20 22 9.26 16.74 9.26 13.73 4" />
            </svg>
            {t('rdVision.sectionTag')}
          </span>
          <h2 className="section-title text-center">{t('rdVision.title')}</h2>
          <p className="rd-vision__subtitle">{t('rdVision.subtitle')}</p>
          <p className="rd-vision__intro">{t('rdVision.intro')}</p>
        </motion.div>

        <div className="grid-3 rd-vision__grid">
          {CARD_KEYS.map((key, i) => (
            <motion.div
              key={key}
              className="card rd-card"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={cardVariants}
            >
              <div className={`card-icon card-icon--rd-${key}`}>
                {ICONS[key]}
              </div>
              <h3>{t(`rdVision.cards.${key}.title`)}</h3>
              <p>{t(`rdVision.cards.${key}.description`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
