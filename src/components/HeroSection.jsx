import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'
import './HeroSection.css'

export default function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="hero bg-grid-pattern" id="hero">
      {/* Decorative waveform */}
      <div className="hero__wave-bg" aria-hidden="true">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="hero__wave-svg">
          <defs>
            <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--color-green-700)" stopOpacity="0.06" />
              <stop offset="50%" stopColor="var(--color-green-500)" stopOpacity="0.03" />
              <stop offset="100%" stopColor="var(--color-steel-600)" stopOpacity="0.06" />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGrad)"
            d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,186.7C672,203,768,181,864,154.7C960,128,1056,96,1152,101.3C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      {/* Floating sound-wave decoration */}
      <div className="hero__sound-lines" aria-hidden="true">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className="hero__sound-bar"
            style={{
              '--bar-delay': `${i * 0.15}s`,
              '--bar-height': `${30 + Math.sin(i * 1.2) * 40}%`,
            }}
          />
        ))}
      </div>

      <div className="container hero__content">
        <motion.div
          className="hero__text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="hero__title">{t('hero.title')}</h1>

          <motion.p
            className="hero__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            className="hero__ctas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <a href="#early-adopters" className="btn btn-primary" id="cta-pilot">
              {t('hero.ctaPrimary')}
            </a>
            <a href="https://app.bioalert.brivex.ai" className="btn btn-outline" id="cta-clients" target="_blank" rel="noopener noreferrer">
              {t('hero.ctaSecondary')}
            </a>
          </motion.div>
        </motion.div>

        {/* Hardware illustration placeholder */}
        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden="true"
        >
          <div className="hero__device">
            <div className="hero__device-body">
              <div className="hero__device-screen">
                <div className="hero__device-status">
                  <span className="hero__device-dot hero__device-dot--green" />
                  <span className="hero__device-label">ONLINE</span>
                </div>
                <div className="hero__device-waveform">
                  {[...Array(24)].map((_, i) => (
                    <div
                      key={i}
                      className="hero__wf-bar"
                      style={{
                        '--wf-delay': `${i * 0.08}s`,
                        '--wf-height': `${20 + Math.sin(i * 0.6) * 60}%`,
                      }}
                    />
                  ))}
                </div>
                <div className="hero__device-meta">
                  <span>IP65</span>
                  <span>Edge AI</span>
                  <span>dB Analysis</span>
                </div>
              </div>
            </div>
            <div className="hero__device-shadow" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
