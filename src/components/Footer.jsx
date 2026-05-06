import { useLanguage } from '../i18n/LanguageContext'
import './Footer.css'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer" id="footer">
      <div className="container">
        
        <div className="footer__grid">
          {/* Brand Column */}
          <div className="footer__col footer__col--brand">
            <div className="footer__brand">
              <svg className="footer__brand-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
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
            <p className="footer__desc">{t('footer.brandDesc')}</p>
          </div>

          {/* Product Links */}
          <div className="footer__col">
            <h4 className="footer__col-title">{t('footer.nav.product')}</h4>
            <ul className="footer__links">
              <li><a href="#problem">{t('footer.nav.problem')}</a></li>
              <li><a href="#solution">{t('footer.nav.solution')}</a></li>
              <li><a href="#simulator">{t('footer.nav.simulator')}</a></li>
              <li><a href="#early-adopters">{t('footer.nav.earlyAdopters')}</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="footer__col">
            <h4 className="footer__col-title">{t('footer.nav.company')}</h4>
            <ul className="footer__links">
              <li><a href="https://brivex.app" target="_blank" rel="noopener noreferrer">{t('footer.nav.about')}</a></li>
              <li><a href="#simulator">{t('footer.nav.contact')}</a></li>
              <li><a href="#">{t('footer.nav.privacy')}</a></li>
              <li><a href="#">{t('footer.nav.terms')}</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">{t('footer.copyright')}</p>
          <p className="footer__legal-small">{t('footer.legal')}</p>
        </div>

      </div>
    </footer>
  )
}
