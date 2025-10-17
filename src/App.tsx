import React from 'react'
import { useI18n } from './i18n'

type Link = { name: string; url: string; placeholder?: boolean }

const socials: Link[] = [
  { name: 'GitHub', url: 'https://github.com/Koren-a11y' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/your-linkedin', placeholder: true },
  { name: 'Email', url: 'mailto:you@example.com', placeholder: true },
]

const skills = {
  mobile: ['Swift', 'SwiftUI', 'UIKit', 'Combine', 'Objective-C', 'Flutter', 'Dart'],
  arch: ['MVVM', 'Clean Architecture', 'Modularization', 'CI/CD'],
  tools: ['GitHub Actions', 'Fastlane', 'Firebase', 'Sentry', 'Unit/UI testing'],
  soft: ['跨团队沟通', 'Mentoring', '产品思维', 'UX 敏感度'],
}

type Project = {
  titleKey: string
  timeKey: string
  contextKey: string
  roleKey: string
  whatKey: string
  impactKey: string
  link: string
}

const projects: Project[] = [
  {
    titleKey: 'p1.title',
    timeKey: 'p1.time',
    contextKey: 'p1.context',
    roleKey: 'p1.role',
    whatKey: 'p1.what',
    impactKey: 'p1.impact',
    link: '#',
  },
  {
    titleKey: 'p2.title',
    timeKey: 'p2.time',
    contextKey: 'p2.context',
    roleKey: 'p2.role',
    whatKey: 'p2.what',
    impactKey: 'p2.impact',
    link: '#',
  },
  {
    titleKey: 'p3.title',
    timeKey: 'p3.time',
    contextKey: 'p3.context',
    roleKey: 'p3.role',
    whatKey: 'p3.what',
    impactKey: 'p3.impact',
    link: '#',
  },
]

export default function App() {
  const { t, locale, setLocale } = useI18n()
  return (
    <main className="container">
      {/* Hero */}
      <section className="hero">
        <img className="avatar" src="https://github.com/Koren-a11y.png" alt="Koren 的头像" />
        <h1>{t('hero.h1')}</h1>
        <p className="tagline">{t('hero.tagline')}</p>
        <p className="bio">{t('hero.bio')}</p>
        <div className="actions">
          <a className="btn primary" href="#contact">{t('actions.contact')}</a>
          <a className="btn" href="#projects">{t('actions.view_projects')}</a>
          <a className="btn" href="https://github.com/Koren-a11y/personal-homepage" target="_blank" rel="noreferrer">{t('actions.view_source')}</a>
        </div>
        <div className="actions" aria-label="language switcher">
          <button className="btn" onClick={() => setLocale('ja')} aria-pressed={locale==='ja'}>日本語</button>
          <button className="btn" onClick={() => setLocale('zh')} aria-pressed={locale==='zh'}>中文</button>
          <button className="btn" onClick={() => setLocale('en')} aria-pressed={locale==='en'}>EN</button>
        </div>
      </section>

  {/* Masonry feed */}
  <h2 className="section-heading" id="about">{t('section.about')}</h2>
      <div className="masonry" aria-live="polite">
        {/* About */}
        <article className="masonry-item">
          <div className="masonry-card prose" role="region" aria-labelledby="about-title">
            <div className="eyebrow">Profile</div>
            <h3 id="about-title" className="card-title">{t('about.title')}</h3>
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
          </div>
        </article>

        {/* Skills */}
        <article className="masonry-item">
          <div className="masonry-card prose" role="region" aria-labelledby="skills-title">
            <div className="eyebrow">{t('section.skills')}</div>
            <h3 id="skills-title" className="card-title">{t('skills.title')}</h3>
            <ul>
              <li>{t('skills.mobile')}：{skills.mobile.join(', ')}</li>
              <li>{t('skills.arch')}：{skills.arch.join(', ')}</li>
              <li>{t('skills.tools')}：{skills.tools.join(', ')}</li>
              <li>{t('skills.soft')}：{skills.soft.join(', ')}</li>
            </ul>
          </div>
        </article>

        {/* Projects */}
        <h2 className="section-heading" id="projects">{t('projects.eyebrow')}</h2>
        {projects.map((p) => (
          <article className="masonry-item" key={p.titleKey}>
            <div className="masonry-card prose" role="region" aria-labelledby={`${p.titleKey}-id`}>
              <div className="eyebrow">{t('projects.eyebrow')}</div>
              <h3 id={`${p.titleKey}-id`} className="card-title">{t(p.titleKey)}</h3>
              <div className="card-meta">{t(p.timeKey)}</div>
              <ul>
                <li><strong>背景：</strong>{t(p.contextKey)}</li>
                <li><strong>角色：</strong>{t(p.roleKey)}</li>
                <li><strong>方法：</strong>{t(p.whatKey)}</li>
                <li><strong>结果：</strong>{t(p.impactKey)}</li>
              </ul>
              <div className="card-actions">
                <a className="btn" href={p.link} aria-label={`${t(p.titleKey)} details`}>{t('projects.details')}</a>
              </div>
            </div>
          </article>
        ))}

        {/* Aesthetics & Hobbies */}
        <article className="masonry-item">
          <div className="masonry-card prose" role="region" aria-labelledby="hobby-title">
            <div className="eyebrow">{t('hobby.eyebrow')}</div>
            <h3 id="hobby-title" className="card-title">{t('hobby.title')}</h3>
            <p>{t('hobby.p')}</p>
            <ul>
              <li>{t('hobby.li1')}</li>
              <li>{t('hobby.li2')}</li>
              <li>{t('hobby.li3')}</li>
            </ul>
          </div>
        </article>

        {/* Companies / Roles */}
        <article className="masonry-item">
          <div className="masonry-card prose" role="region" aria-labelledby="exp-title">
            <div className="eyebrow">Experience</div>
            <h3 id="exp-title" className="card-title">{t('exp.title')}</h3>
            <p>{t('exp.p')}</p>
          </div>
        </article>

        {/* Links */}
        <article className="masonry-item">
          <div className="masonry-card prose" role="region" aria-labelledby="links-title">
            <div className="eyebrow">Links</div>
            <h3 id="links-title" className="card-title">{t('links.title')}</h3>
            <ul>
              {socials.map(s => (
                <li key={s.name}><a href={s.url} target="_blank" rel="noreferrer">{s.name}{s.placeholder ? t('links.placeholder') : ''}</a></li>
              ))}
            </ul>
          </div>
        </article>

        {/* CTA */}
        <article className="masonry-item" id="contact">
          <div className="masonry-card prose" role="region" aria-labelledby="cta-title">
            <div className="eyebrow">{t('section.contact')}</div>
            <h3 id="cta-title" className="card-title">{t('cta.title')}</h3>
            <p>{t('cta.p')}</p>
            <div className="card-actions">
              <a className="btn primary" href="mailto:you@example.com">{t('cta.email')}</a>
              <a className="btn" href="/Koren-a11y-CV.pdf" target="_blank" rel="noreferrer">{t('cta.cv')}</a>
            </div>
          </div>
        </article>
      </div>

      <footer className="footer" role="contentinfo">
        <p>{t('footer', { year: new Date().getFullYear() })}</p>
      </footer>
    </main>
  )
}
