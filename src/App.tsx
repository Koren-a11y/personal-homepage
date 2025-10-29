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
  productIconUrl: string
  productUrl?: string
  time: string
  location: string
  projects: { title: string; points: string[] }[]
}

const career: CareerItem[] = [
  {
    company: 'Smart We 株式会社',
    logoUrl: '/logos/smartwe.png',
    productIconUrl: '/logos/selfcheckout.png',
    productUrl: '',
    time: '2023年11月 ~ 現在',
    location: '—',
    projects: [
      {
        title: 'セルフレジアプリの開発 (Flutter)',
        points: [
          'アーキテクチャ構築およびデータ型の定義',
          'ネットワークユーティリティ・データベースの実装',
          '複数モードのUIと機能のワンタッチ切替',
          'POSレジ/現金機/プリンターとの通信コンポーネント実装',
          'Firebase 分析機能の導入'
        ]
      }
    ]
  },
  {
    company: '一賢株式会社',
    logoUrl: '/logos/ikken.png',
    productIconUrl: '/logos/selfcheckout.png',
    productUrl: '',
    time: '2023年1月 ~ 2023年9月',
    location: '—',
    projects: [
      {
        title: '物流業界の位置管理システムの開発',
        points: [
          '企画・設計・開発・テスト・デプロイまで一貫対応',
          'Jenkins と Docker を用いたデプロイメントフロー構築',
          'AWS テストサーバー設定、Redis / RabbitMQ による機能改善',
          '顧客フィードバックに基づく継続的な改善'
        ]
      }
    ]
  },
  {
    company: 'LEDVANCE',
    logoUrl: '/logos/ledvance.png',
    productIconUrl: '/logos/selfcheckout.png',
    productUrl: 'https://apps.apple.com/jp/app/ledvance-smart-plus-pro/id1642677893?l=en-US',
    time: '2021年7月 ~ 2022年12月',
    location: '—',
    projects: [
      {
        title: 'Ledvance Smart plus pro アプリ',
        points: [
          'アーキテクチャ設計とデータ構造定義、機能実装・テスト',
          'Flutter でユーザー管理モジュール、React Native でデバイスパネルを実装',
          '拡張可能で保守容易な構造を実現、ハードウェア連携で体験と売上を向上'
        ]
      }
    ]
  },
  {
    company: 'HARMAN',
    logoUrl: '/logos/harman.png',
    productIconUrl: '/logos/selfcheckout.png',
    productUrl: 'https://jp.jbl.com/app.html',
    time: '2017年11月 ~ 2021年7月',
    location: '—',
    projects: [
      {
        title: 'JBL Headphones アプリ',
        points: [
          'アーキテクチャ設計、機能実装、App Store 配信と保守',
          'Firebase データ収集、AWS を用いたメッセージプッシュ、Jenkins でリリースフロー構築',
          'グローバルユーザー評価 4.5、iF Design 賞 受賞'
        ]
      }
    ]
  },
  {
    company: 'TCL Group',
    logoUrl: '/logos/tcl.png',
    productIconUrl: '/logos/selfcheckout.png',
    productUrl: '',
    time: '2014年7月 ~ 2017年9月',
    location: '—',
    projects: [
      {
        title: 'TCL Telcom iOS アプリ',
        points: [
          '家電製品を管理・設定するスマートホームアプリの開発',
          'プログラム実装、保守、顧客対応、トラブルシュート',
          '同社初の IoT アプリを実現し、iOS 開発スキルを確立'
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
                    <div className="timeline-card-grid">
                      <div className="timeline-card-body">
                        <h3 className="card-title">{p.title}</h3>
                        <ul>
                          {p.points.map((pt, j) => (<li key={j}>{pt}</li>))}
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
                            <img src={item.productIconUrl} loading="lazy" alt={`${item.company} ${p.title} icon`} />
                          </a>
                        ) : (
                          <span className="media-link is-disabled" aria-disabled="true" title={t('links.placeholder')}>
                            <img src={item.productIconUrl} loading="lazy" alt={`${item.company} ${p.title} icon`} />
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
