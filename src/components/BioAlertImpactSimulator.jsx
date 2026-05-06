import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Thermometer, 
  ThermometerSun, 
  Flame, 
  Volume, 
  Volume1, 
  Volume2, 
  Home, 
  Factory, 
  Building2, 
  AlertTriangle, 
  TrendingDown, 
  Zap, 
  CheckCircle2, 
  Activity, 
  BellRing, 
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function BioAlertImpactSimulator() {
  const { t } = useLanguage();
  
  const [phase, setPhase] = useState(1);
  const [temp, setTemp] = useState('optimal'); 
  const [noise, setNoise] = useState('normal'); 
  const [size, setSize] = useState('1000'); 

  const metrics = useMemo(() => {
    let baseMortalityRate = 0.08; 
    
    if (temp === 'summer') baseMortalityRate += 0.04;
    if (temp === 'heatwave') baseMortalityRate += 0.09;

    if (noise === 'high') baseMortalityRate += 0.05;
    if (noise === 'low') baseMortalityRate -= 0.01;

    const totalMothers = parseInt(size);
    const pigletsPerMother = 12; 
    const littersPerYear = 2.4; 
    const totalPigletsMonthly = Math.floor((totalMothers * pigletsPerMother * littersPerYear) / 12);
    
    const mortalityCount = Math.floor(totalPigletsMonthly * baseMortalityRate);
    const pigletValue = 45; 
    const estimatedLoss = mortalityCount * pigletValue;

    const reductionRate = 0.85; 
    const savedPiglets = Math.floor(mortalityCount * reductionRate);
    const roi = savedPiglets * pigletValue;

    return {
      mortalityRate: (baseMortalityRate * 100).toFixed(1),
      mortalityCount,
      estimatedLoss: estimatedLoss.toLocaleString('en-US'),
      roi: roi.toLocaleString('en-US'),
    };
  }, [temp, noise, size]);

  const Pill = ({ active, onClick, icon: Icon, label, subLabel }) => (
    <button
      onClick={onClick}
      style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        padding: '1.2rem 1rem', borderRadius: 'var(--radius-md)', 
        background: active ? 'var(--color-steel-800)' : 'transparent',
        border: `1px solid ${active ? 'var(--color-green-500)' : 'var(--color-steel-600)'}`,
        cursor: 'pointer', transition: 'all var(--transition-base)',
        color: active ? '#fff' : 'var(--text-on-dark-muted)',
        position: 'relative'
      }}
    >
      <Icon style={{ width: '24px', height: '24px', marginBottom: '10px', color: active ? 'var(--color-green-400)' : 'var(--text-tertiary)' }} />
      <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>{label}</span>
      {subLabel && <span style={{ fontSize: '0.75rem', opacity: 0.8, marginTop: '4px' }}>{subLabel}</span>}
      {active && (
        <motion.div 
          layoutId={`pill-indicator-${label.split(' ')[0]}`}
          style={{ position: 'absolute', inset: 0, border: '2px solid var(--color-green-500)', borderRadius: 'var(--radius-md)', pointerEvents: 'none' }}
          initial={false}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
    </button>
  );

  return (
    <section className="section bg-noise" style={{ background: 'var(--bg-dark-deep)', borderTop: '1px solid var(--color-steel-800)' }} id="simulator">
      <div className="container">
        
        <div className="text-center" style={{ marginBottom: 'var(--space-3xl)' }}>
          <span className="section-tag" style={{ background: 'var(--color-steel-800)', color: 'var(--color-steel-200)', borderColor: 'var(--color-steel-700)' }}>
            <Activity size={14} style={{ marginRight: '6px' }}/>
            {t('simulator.sectionTag')}
          </span>
          <h2 className="section-title" style={{ color: '#fff' }}>
            {t('simulator.title')}
          </h2>
          <p className="section-description" style={{ color: 'var(--text-on-dark-muted)', margin: '0 auto', maxWidth: '700px' }}>
            {t('simulator.description')}
          </p>
        </div>

        <div className="card" style={{ background: 'var(--bg-dark)', borderColor: 'var(--color-steel-700)', padding: 0, overflow: 'hidden' }}>
          <div className="grid-2" style={{ gap: 0 }}>
            
            {/* Inputs Panel */}
            <div style={{ padding: 'var(--space-2xl)', borderRight: '1px solid var(--color-steel-700)' }}>
              
              <div style={{ marginBottom: 'var(--space-xl)' }}>
                <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', color: 'var(--text-on-dark)' }}>
                  <Thermometer size={18} color="var(--color-amber-500)"/> {t('simulator.labels.temperature')}
                </label>
                <div className="grid-3" style={{ gap: '12px' }}>
                  <Pill active={temp === 'optimal'} onClick={() => setTemp('optimal')} icon={Thermometer} label={t('simulator.options.optimal')} subLabel="18-22°C" />
                  <Pill active={temp === 'summer'} onClick={() => setTemp('summer')} icon={ThermometerSun} label={t('simulator.options.summer')} subLabel="28-32°C" />
                  <Pill active={temp === 'heatwave'} onClick={() => setTemp('heatwave')} icon={Flame} label={t('simulator.options.heatwave')} subLabel="35-40°C" />
                </div>
              </div>

              <div style={{ marginBottom: 'var(--space-xl)' }}>
                <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', color: 'var(--text-on-dark)' }}>
                  <Volume2 size={18} color="var(--color-steel-200)"/> {t('simulator.labels.noise')}
                </label>
                <div className="grid-3" style={{ gap: '12px' }}>
                  <Pill active={noise === 'low'} onClick={() => setNoise('low')} icon={Volume} label={t('simulator.options.low')} subLabel="55 dB" />
                  <Pill active={noise === 'normal'} onClick={() => setNoise('normal')} icon={Volume1} label={t('simulator.options.normal')} subLabel="75 dB" />
                  <Pill active={noise === 'high'} onClick={() => setNoise('high')} icon={Volume2} label={t('simulator.options.high')} subLabel="95+ dB" />
                </div>
              </div>

              <div>
                <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', color: 'var(--text-on-dark)' }}>
                  <Building2 size={18} color="var(--color-steel-400)"/> {t('simulator.labels.productionSize')}
                </label>
                <div className="grid-3" style={{ gap: '12px' }}>
                  <Pill active={size === '500'} onClick={() => setSize('500')} icon={Home} label="500" subLabel={t('simulator.options.mothers')} />
                  <Pill active={size === '1000'} onClick={() => setSize('1000')} icon={Factory} label="1,000" subLabel={t('simulator.options.mothers')} />
                  <Pill active={size === '5000'} onClick={() => setSize('5000')} icon={Building2} label="5,000+" subLabel={t('simulator.options.mothers')} />
                </div>
              </div>

            </div>

            {/* Outputs Panel */}
            <div style={{ position: 'relative', background: 'var(--bg-dark-deep)' }}>
              <AnimatePresence mode="wait">
                {phase === 1 && (
                  <motion.div
                    key="phase-1"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}
                    style={{ padding: 'var(--space-2xl)', height: '100%', display: 'flex', flexDirection: 'column' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: 'var(--space-2xl)' }}>
                      <div className="card-icon" style={{ background: 'rgba(217, 123, 13, 0.1)', borderColor: 'rgba(217, 123, 13, 0.2)', color: 'var(--color-amber-500)', margin: 0, width: '56px', height: '56px' }}>
                        <AlertTriangle size={28} />
                      </div>
                      <h3 style={{ color: 'var(--color-amber-400)', margin: 0, fontSize: '1.4rem' }}>{t('simulator.phase1.title')}</h3>
                    </div>

                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
                      <div style={{ background: 'rgba(255,255,255,0.03)', padding: 'var(--space-lg) var(--space-xl)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(217, 123, 13, 0.15)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-on-dark-muted)', marginBottom: '8px', fontSize: '0.95rem' }}>
                          <TrendingDown size={18} /> {t('simulator.phase1.mortalityRisk')}
                        </div>
                        <div style={{ fontSize: '3.5rem', fontWeight: 700, color: 'var(--color-amber-100)', lineHeight: 1 }}>
                          {metrics.mortalityRate}%
                        </div>
                      </div>

                      <div style={{ background: 'rgba(255,255,255,0.03)', padding: 'var(--space-lg) var(--space-xl)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(217, 123, 13, 0.15)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-on-dark-muted)', marginBottom: '8px', fontSize: '0.95rem' }}>
                          <Activity size={18} /> {t('simulator.phase1.economicLoss')}
                        </div>
                        <div style={{ fontSize: '3.5rem', fontWeight: 700, color: 'var(--color-amber-500)', lineHeight: 1 }}>
                          ${metrics.estimatedLoss} <span style={{ fontSize: '1.2rem', color: 'var(--text-on-dark-muted)' }}>{t('simulator.phase1.currency')}</span>
                        </div>
                      </div>
                    </div>

                    <div style={{ marginTop: 'var(--space-2xl)' }}>
                      <button className="btn btn-amber" style={{ width: '100%', fontSize: '1.1rem', padding: '1.2rem' }} onClick={() => setPhase(2)}>
                        <Zap size={22} style={{ marginRight: '8px' }}/> {t('simulator.phase1.button')}
                      </button>
                    </div>
                  </motion.div>
                )}

                {phase === 2 && (
                  <motion.div
                    key="phase-2"
                    initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
                    style={{ padding: 'var(--space-2xl)', height: '100%', display: 'flex', flexDirection: 'column', background: 'rgba(26, 86, 50, 0.1)' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: 'var(--space-2xl)' }}>
                      <div className="card-icon" style={{ margin: 0, width: '56px', height: '56px' }}>
                        <CheckCircle2 size={28} />
                      </div>
                      <h3 style={{ color: 'var(--color-green-400)', margin: 0, fontSize: '1.4rem' }}>{t('simulator.phase2.title')}</h3>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', background: 'rgba(0,0,0,0.2)', padding: '1.2rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(61, 153, 96, 0.2)' }}>
                        <Activity size={24} color="var(--color-green-500)" />
                        <span style={{ color: 'var(--text-on-dark)', fontSize: '1.05rem' }}>{t('simulator.phase2.detection')} <strong>{t('simulator.phase2.detectionTime')}</strong></span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', background: 'rgba(0,0,0,0.2)', padding: '1.2rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(61, 153, 96, 0.2)' }}>
                        <BellRing size={24} color="var(--color-green-500)" />
                        <span style={{ color: 'var(--text-on-dark)', fontSize: '1.05rem' }}>{t('simulator.phase2.notification')} <strong>{t('simulator.phase2.notificationTime')}</strong></span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', background: 'rgba(0,0,0,0.2)', padding: '1.2rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(61, 153, 96, 0.2)' }}>
                        <TrendingDown size={24} color="var(--color-green-500)" />
                        <span style={{ color: 'var(--text-on-dark)', fontSize: '1.05rem' }}>{t('simulator.phase2.reduction')} <strong style={{ color: 'var(--color-green-400)'}}>{t('simulator.phase2.reductionValue')}</strong></span>
                      </div>

                      <div style={{ marginTop: 'auto', paddingTop: 'var(--space-xl)', borderTop: '1px solid var(--color-green-900)' }}>
                        <span style={{ fontSize: '0.95rem', color: 'var(--color-green-400)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>{t('simulator.phase2.roi')}</span>
                        <div style={{ fontSize: '4rem', fontWeight: 700, color: '#fff', lineHeight: 1, marginTop: '12px' }}>
                          +${metrics.roi}
                        </div>
                      </div>
                    </div>

                    <div style={{ marginTop: 'var(--space-xl)', textAlign: 'center' }}>
                      <button onClick={() => setPhase(1)} style={{ background: 'none', border: 'none', color: 'var(--text-on-dark-muted)', textDecoration: 'underline', cursor: 'pointer', fontSize: '0.9rem' }}>
                        {t('simulator.phase2.recalculate')}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
          
          {/* CTA Form placed at the bottom inside the card */}
          <div style={{ background: 'var(--bg-dark)', padding: 'var(--space-2xl)', borderTop: '1px solid var(--color-steel-700)', textAlign: 'center' }}>
            <h4 style={{ color: '#fff', marginBottom: '12px', fontSize: '1.5rem' }}>{t('simulator.cta.title')}</h4>
            <p style={{ color: 'var(--text-on-dark-muted)', margin: '0 auto var(--space-xl) auto', fontSize: '1.1rem' }}>{t('simulator.cta.description')}</p>
            <form style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }} onSubmit={e => e.preventDefault()}>
              <input type="email" placeholder={t('simulator.cta.placeholder')} className="form-input" style={{ maxWidth: '350px', background: 'rgba(0,0,0,0.3)', padding: '1rem 1.5rem', fontSize: '1rem' }} required />
              <button type="submit" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1rem' }}>
                {t('simulator.cta.button')} <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
