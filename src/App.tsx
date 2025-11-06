import React from 'react'
import { useI18n } from './i18n'

type Link = { name: string; url: string; placeholder?: boolean }

const socials: Link[] = [
  { name: 'GitHub', url: 'https://github.com/Koren-a11y' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/your-linkedin', placeholder: true },
  { name: 'Email', url: 'mailto:you@example.com', placeholder: true },
]

type CareerItem = {
  key: 'smartwe' | 'ikken' | 'ledvance' | 'harman' | 'tcl'
  company: string
  logoUrl: string
  productIconUrl: string
  productUrl?: string
  time: string
  location: string
  projects: { title: string; points: string[] }[]
}

// Helper to resolve assets under Vite base (e.g., /personal-homepage/ on GitHub Pages)
// If images are under public/, prefer using BASE_URL helper above.
// For images under src/logos/, use Vite's import.meta.glob to bundle them and return URLs at runtime.
// Note: Vite v5 deprecates `as: 'url'`; use `query: '?url'` with `import: 'default'` instead.
const logoMap = import.meta.glob('./logos/*', { eager: true, query: '?url', import: 'default' }) as Record<string, string>
const logoAsset = (path: string) => {
  // Accept values like 'logos/foo.png' or './logos/foo.png'
  const normalized = path.startsWith('./') ? path : `./${path}`
  return logoMap[normalized] || logoMap[`./logos/${path.replace(/^logos\/?/, '')}`] || path
}

const career: CareerItem[] = [
  {
    key: 'smartwe',
    company: 'Smart We 株式会社',
    logoUrl: 'logos/smartwe.png',
    productIconUrl: 'logos/smartwe.product.png',
    productUrl: 'https://smartwe.co.jp/',
    time: '2023年11月 \n~ 現在',
    location: '—',
    projects: [
      {
        title: '自助收银与点餐系统 (Flutter/iOS)',
        points: [
          '技术组长，统筹App架构设计与开发进度',
          '多领域担当，产品需求设计，UI/UX 设计，程序实现，测试与发布',
          '复杂功能，高质量实现',
          '多种设备和外设的集成与通信',
        ]
      }
    ]
  },
  {
    key: 'ikken',
    company: '一賢株式会社',
    logoUrl: 'logos/ikken.png',
    productIconUrl: 'logos/ikken.product.png',
    productUrl: '',
    time: '2023年1月 \n~ 2023年9月',
    location: '—',
    projects: [
      {
        title: '室内定位系统',
        points: [
          '首次担任项目经理',
          '极具挑战的项目',
        ]
      }
    ]
  },
  {
    key: 'ledvance',
    company: 'LEDVANCE',
    logoUrl: 'logos/ledvance.png',
    productIconUrl: 'logos/ledvance.product.png',
    productUrl: 'https://apps.apple.com/jp/app/ledvance-smart-plus-pro/id1642677893?l=en-US',
    time: '2021年7月 \n~ 2022年12月',
    location: '—',
    projects: [
      {
        title: 'Ledvance 智能照明应用',
        points: [
          'iOS 开发组长',
          '功能复杂的智能照明控制应用',
          '高扩展性和易维护的架构设计',
          '多平台协同开发，Flutter 与 React Native 混合架构',
        ]
      }
    ]
  },
  {
    key: 'harman',
    company: 'HARMAN',
    logoUrl: 'logos/harman.png',
    productIconUrl: 'logos/harman.product.png',
    productUrl: 'https://jp.jbl.com/app.html',
    time: '2017年11月 \n~ 2021年7月',
    location: '—',
    projects: [
      {
        title: 'HARMAN产品系列App',
        points: [
          'iOS 核心开发者',
          '国际化开发团队协作',
          '全球用户评价 4.5、iF Design 奖 受奖'
        ]
      }
    ]
  },
  {
    key: 'tcl',
    company: 'TCL Group',
    logoUrl: 'logos/tcl.png',
    productIconUrl: 'logos/tcl.product.png',
    productUrl: '',
    time: '2014年7月 \n~ 2017年9月',
    location: '—',
    projects: [
      {
        title: 'TCL产品相关App应用',
        points: [
          '掌握iOS开发技能',
          '多团队协作',
          '实现公司首个IoT应用'
        ]
      }
    ]
  }
]

type Interest = { titleKey: string; descKey: string; emoji: string }
const interests: Interest[] = [
  { titleKey: 'interests.ride', descKey: 'interests.ride.desc', emoji: '🚴‍♂️' },
  { titleKey: 'interests.surf', descKey: 'interests.surf.desc', emoji: '🏄‍♂️' },
  { titleKey: 'interests.renovation', descKey: 'interests.renovation.desc', emoji: '🛠️' },
]

export default function App() {
  const { t, locale, setLocale } = useI18n()
  const getI18nList = (prefix: string): string[] => {
    const out: string[] = []
    for (let i = 1; i <= 12; i++) {
      const key = `${prefix}.${i}`
      const v = t(key)
      if (v === key) break
      out.push(v)
    }
    return out
  }
  return (
    <main className="container">
      {/* Background gallery (decorative) */}
      {/* <div className="bg-gallery" aria-hidden="true">
        <div className="bg-photo bg-photo-1" />
        <div className="bg-photo bg-photo-2" />
        <div className="bg-photo bg-photo-3" />
      </div> */}

      {/* Hero (unchanged basic info) */}
      <section className="hero">
        <img className="avatar" src="https://github.com/Koren-a11y.png" alt="Koren 的头像" />
        <h3>{'HOU JINGYAN'}</h3>

        <h1>{t('hero.h1')}</h1>
        <p className="tagline">{t('hero.tagline')}</p>
        {/* <p className="bio">{t('hero.bio')}</p> */}
        <div className="actions">
          <a className="btn primary" href="mailto:projectyoutobe@gmail.com">
            {t('actions.contact')}
          </a>
          {/* <a className="btn" href="#career">{t('actions.view_projects')}</a> */}
          {/* <a className="btn" href="https://github.com/Koren-a11y/personal-homepage" target="_blank" rel="noreferrer">{t('actions.view_source')}</a> */}
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
            <div className="feature-body">
              <h3 className="card-title">{t('traits.engineer')}</h3>
              <p className="muted">{t('traits.engineer.desc')}</p>
            </div>
            {(() => { const src = logoAsset('logos/me.engineer.png'); return src ? (
              <div className="feature-image"><img src={src} alt={t('traits.engineer')} style={{width:'100%',height:'100%',objectFit:'cover'}} loading="lazy" /></div>
            ) : (
              <div className="feature-image placeholder" data-label={t('traits.engineer')} />
            )})()}
          </article>
          <article className="feature-card" aria-label={t('traits.values')}>
            <div className="feature-body">
              <h3 className="card-title">{t('traits.values')}</h3>
              <p className="muted">{t('traits.values.desc')}</p>
            </div>
            {(() => { const src = logoAsset('logos/me.frendly.png'); return src ? (
              <div className="feature-image"><img src={src} alt={t('traits.values')} style={{width:'100%',height:'100%',objectFit:'cover'}} loading="lazy" /></div>
            ) : (
              <div className="feature-image placeholder" data-label={t('traits.values')} />
            )})()}
          </article>
          <article className="feature-card" aria-label={t('traits.sport')}>
            <div className="feature-body">
              <h3 className="card-title">{t('traits.sport')}</h3>
              <p className="muted">{t('traits.sport.desc')}</p>
            </div>
            {(() => { const src = logoAsset('logos/me.advanture.png'); return src ? (
              <div className="feature-image"><img src={src} alt={t('traits.sport')} style={{width:'100%',height:'100%',objectFit:'cover'}} loading="lazy" /></div>
            ) : (
              <div className="feature-image placeholder" data-label={t('traits.sport')} />
            )})()}
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
                  <img className="company-logo" src={logoAsset(item.logoUrl)} alt={item.company + ' logo'} />
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
                    <div className="timeline-card-grid">
                      <div className="timeline-card-body">
                        <h3 className="card-title">{t(`career.${item.key}.title`)}</h3>
                        <ul>
                          {getI18nList(`career.${item.key}.points`).map((pt, j) => (<li key={j}>{pt}</li>))}
                        </ul>
                      </div>
                      <div className="timeline-card-media" aria-hidden={false}>
                        {item.productUrl ? (
                          <a
                            href={item.productUrl}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="media-link"
                            aria-label={`${item.company} ${p.title} リンク`}
                          >
                            <img src={logoAsset(item.productIconUrl)} loading="lazy" alt={`${item.company} ${p.title} icon`} />
                          </a>
                        ) : (
                          <span className="media-link is-disabled" aria-disabled="true" title={t('links.placeholder')}>
                            <img src={logoAsset(item.productIconUrl)} loading="lazy" alt={`${item.company} ${p.title} icon`} />
                          </span>
                        )}
                      </div>
                    </div>
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
