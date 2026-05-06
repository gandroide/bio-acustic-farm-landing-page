import React from 'react';
import { ShieldCheck, Cpu, Sun, Zap, Radio, Thermometer, Database, Maximize, Wrench, Mic, Bell, LayoutDashboard, LineChart, Square } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import './TechSpecsSection.css';

export default function TechSpecsSection() {
  const { t } = useLanguage();

  const specs = [
    {
      icon: ShieldCheck,
      key: 'protection'
    },
    {
      icon: Cpu,
      key: 'processing'
    },
    {
      icon: Sun,
      key: 'energy'
    },
    {
      icon: Zap,
      key: 'detection'
    },
    {
      icon: Radio,
      key: 'connectivity'
    },
    {
      icon: Thermometer,
      key: 'range'
    },
    {
      icon: Database,
      key: 'storage'
    },
    {
      icon: Maximize,
      key: 'coverage'
    },
    {
      icon: Wrench,
      key: 'installation'
    }
  ];

  const certs = ['ce', 'rohs', 'lorawan', 'gdpr'];

  const archNodes = [
    { icon: Mic, key: 'sensor' },
    { icon: Cpu, key: 'edge' },
    { icon: Bell, key: 'alert' },
    { icon: LayoutDashboard, key: 'dashboard' },
    { icon: LineChart, key: 'predictive' }
  ];

  return (
    <section className="section tech-specs">
      <div className="container">
        
        <div className="tech-specs__header">
          <div className="tech-specs__tag">{t('techSpecs.tag')}</div>
          <h2 className="tech-specs__title">{t('techSpecs.title')}</h2>
          <p className="tech-specs__desc">{t('techSpecs.desc')}</p>
        </div>

        <div className="tech-specs__grid-wrapper">
          <div className="tech-specs__grid">
            {specs.map((spec, idx) => (
              <div key={idx} className="tech-specs__card">
                <div className="tech-specs__icon">
                  <spec.icon size={20} strokeWidth={2.5} />
                </div>
                <div className="tech-specs__label">{t(`techSpecs.specs.${spec.key}.label`)}</div>
                <div className="tech-specs__value">{t(`techSpecs.specs.${spec.key}.value`)}</div>
                <div className="tech-specs__card-desc">{t(`techSpecs.specs.${spec.key}.desc`)}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="tech-specs__certs">
          {certs.map((certKey, idx) => (
            <div key={idx} className="tech-certs__item">
              <span className="tech-certs__badge">{t(`techSpecs.certs.${certKey}.badge`)}</span>
              <span className="tech-certs__desc">{t(`techSpecs.certs.${certKey}.desc`)}</span>
            </div>
          ))}
        </div>

        <div className="tech-arch">
          <div className="tech-arch__title">{t('techSpecs.arch.title')}</div>
          <div className="tech-arch__flow">
            {archNodes.map((node, idx) => (
              <React.Fragment key={idx}>
                <div className="tech-arch__node">
                  <div className="tech-arch__node-icon">
                    <node.icon size={20} strokeWidth={2.5} />
                  </div>
                  <div className="tech-arch__node-title">{t(`techSpecs.arch.nodes.${node.key}.title`)}</div>
                  <div className="tech-arch__node-desc">{t(`techSpecs.arch.nodes.${node.key}.desc`)}</div>
                </div>
                {idx < archNodes.length - 1 && (
                  <div className="tech-arch__arrow">
                    <Square size={14} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
