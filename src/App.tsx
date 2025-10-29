import React from 'react'
import { useI18n } from './i18n'

type Link = { name: string; url: string; placeholder?: boolean }

const socials: Link[] = [
  { name: 'GitHub', url: 'https://github.com/Koren-a11y' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/your-linkedin', placeholder: true },
  { name: 'Email', url: 'mailto:you@example.com', placeholder: true },
]

type CareerItem = {
  company: string
  logoUrl: string
  time: string
  location: string
  projects: { title: string; points: string[] }[]
}

const career: CareerItem[] = [
  {
    company: 'Company 新',
    logoUrl: '/logos/company-new.png',
    time: '2024 – 今',
    location: 'Tokyo, JP',
    projects: [
      { title: '代表项目 A', points: ['负责移动端核心模块', '性能优化与架构重构', '跨团队协作推进落地'] },
    ],
  },
  {
    company: 'Company B',
    logoUrl: '/logos/company-b.png',
    time: '2022 – 2024',
    location: 'Shanghai, CN',
    projects: [
      { title: '支付 SDK 模块化', points: ['模块边界设计', 'API 规范与示例 App', '10+ 客户对接'] },
    ],
  },
]

type Interest = { titleKey: string; descKey: string; emoji: string }
const interests: Interest[] = [
  { titleKey: 'interests.ride', descKey: 'interests.ride.desc', emoji: '🚴‍♂️' },
  { titleKey: 'interests.surf', descKey: 'interests.surf.desc', emoji: '🏄‍♂️' },
  { titleKey: 'interests.renovation', descKey: 'interests.renovation.desc', emoji: '🛠️' },
]

export default function App() {
  const { t, locale, setLocale } = useI18n()
  return (
    <main className="container">
      {/* Background gallery (decorative) */}
      <div className="bg-gallery" aria-hidden="true">
        <div className="bg-photo bg-photo-1" />
        <div className="bg-photo bg-photo-2" />
        <div className="bg-photo bg-photo-3" />
      </div>

      {/* Hero (unchanged basic info) */}
      <section className="hero">
        <img className="avatar" src="https://github.com/Koren-a11y.png" alt="Koren 的头像" />
        <h1>{t('hero.h1')}</h1>
        <p className="tagline">{t('hero.tagline')}</p>
        <p className="bio">{t('hero.bio')}</p>
        <div className="actions">
          <a className="btn primary" href="#contact">{t('actions.contact')}</a>
          <a className="btn" href="#career">{t('actions.view_projects')}</a>
          <a className="btn" href="https://github.com/Koren-a11y/personal-homepage" target="_blank" rel="noreferrer">{t('actions.view_source')}</a>
        </div>
        <div className="actions" aria-label="language switcher">
          <button className="btn" onClick={() => setLocale('ja')} aria-pressed={locale==='ja'}>日本語</button>
          <button className="btn" onClick={() => setLocale('zh')} aria-pressed={locale==='zh'}>中文</button>
          <button className="btn" onClick={() => setLocale('en')} aria-pressed={locale==='en'}>EN</button>
        </div>
      </section>

      {/* Section 1: 我是谁 - 三个特征卡片 */}
      <section aria-labelledby="traits-title" className="section" id="traits">
        <h2 id="traits-title" className="section-heading">{t('traits.title')}</h2>
        <div className="traits-grid">
          <article className="feature-card" aria-label={t('traits.engineer')}>
            <div className="feature-image placeholder" data-label={t('traits.engineer')} />
            <div className="feature-body">
              <h3 className="card-title">{t('traits.engineer')}</h3>
              <p className="muted">{t('traits.engineer.desc')}</p>
            </div>
          </article>
          <article className="feature-card" aria-label={t('traits.values')}>
            <div className="feature-image placeholder" data-label={t('traits.values')} />
            <div className="feature-body">
              <h3 className="card-title">{t('traits.values')}</h3>
              <p className="muted">{t('traits.values.desc')}</p>
            </div>
          </article>
          <article className="feature-card" aria-label={t('traits.sport')}>
            <div className="feature-image placeholder" data-label={t('traits.sport')} />
            <div className="feature-body">
              <h3 className="card-title">{t('traits.sport')}</h3>
              <p className="muted">{t('traits.sport.desc')}</p>
            </div>
          </article>
        </div>
      </section>

      {/* Section 2: 职业生涯 - 时间线 */}
      <section aria-labelledby="career-title" className="section" id="career">
        <h2 id="career-title" className="section-heading">{t('career.title')}</h2>
        <ol className="timeline" aria-label="career timeline">
          {career.map((item, idx) => (
            <li className="timeline-item" key={item.company + idx}>
              <div className="timeline-left">
                <div className="logo-wrap">
                  <img className="company-logo" src={item.logoUrl} alt={item.company + ' logo'} />
                </div>
                <div className="company-meta">
                  <div className="company-name">{item.company}</div>
                  <div className="company-time">{item.time}</div>
                  <div className="company-location">{item.location}</div>
                </div>
              </div>
              <div className="timeline-right">
                {item.projects.map((p, i) => (
                  <div className="timeline-card" key={i}>
                    <h3 className="card-title">{p.title}</h3>
                    <ul>
                      {p.points.map((pt, j) => (<li key={j}>{pt}</li>))}
                    </ul>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Section 3: 兴趣爱好 */}
      <section aria-labelledby="interests-title" className="section" id="interests">
        <h2 id="interests-title" className="section-heading">{t('interests.title')}</h2>
        <div className="interests-grid">
          {interests.map((it, i) => (
            <article className="interest-card" key={i} aria-label={t(it.titleKey)}>
              <div className="interest-icon" aria-hidden="true">{it.emoji}</div>
              <div className="interest-body">
                <h3 className="card-title">{t(it.titleKey)}</h3>
                <p className="muted">{t(it.descKey)}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer" role="contentinfo" id="contact">
        <p>{t('footer', { year: new Date().getFullYear() })}</p>
      </footer>
    </main>
  )
}
