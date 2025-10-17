import React from 'react'

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

const projects = [
  {
    title: '冷启动优化 — CompanyX',
    time: '2023 Q2',
    context: 'DAU 50k，首次体验中因冷启动慢流失 12%。',
    role: 'iOS 核心工程师，负责重构与性能优化设计和落地。',
    what: ['拆分启动路径并延后初始化次要模块', '按需加载与资源压缩', '优化图片加载与缓存'],
    impact: '冷启动 2.8s → 1.6s，首日留存 +6%，投诉 -40%。',
    link: '#',
  },
  {
    title: '企业支付 SDK 模块化',
    time: '2022',
    context: 'B 端客户多集成场景，功能膨胀导致维护困难。',
    role: '移动端负责人，主导模块化与 API 设计。',
    what: ['模块边界重构', '版本发布规范与示例 App', '对接 10+ 客户'],
    impact: '集成工时 -35%，回归缺陷 -28%。',
    link: '#',
  },
  {
    title: 'Flutter 多语言重构',
    time: '2021',
    context: '多市场发行，多处硬编码文案导致迭代阻塞。',
    role: '核心开发者，推动 i18n 资产化。',
    what: ['抽离文案资源与 Key 规范', '代码复用与脚手架', 'CI 校验缺失 key'],
    impact: '重复代码 -60%，发布频率提升。',
    link: '#',
  },
]

export default function App() {
  return (
    <main className="container">
      {/* Hero */}
      <section className="hero">
        <img className="avatar" src="https://github.com/Koren-a11y.png" alt="Koren 的头像" />
        <h1>iOS / Flutter 开发者 · 产品导向</h1>
        <p className="tagline">真诚、爱探索，热爱日式美学与空间改造；在国际化公司做过核心工程，能把复杂产品模块化并落地。</p>
        <p className="bio">这个站点使用 Vite + React + TypeScript 构建，并通过 GitHub Actions 部署到 GitHub Pages。</p>
        <div className="actions">
          <a className="btn primary" href="#contact">联系我</a>
          <a className="btn" href="#projects">查看项目</a>
          <a className="btn" href="https://github.com/Koren-a11y/personal-homepage" target="_blank" rel="noreferrer">查看源码</a>
        </div>
      </section>

      {/* Masonry feed */}
      <h2 className="section-heading" id="about">关于我 · About</h2>
      <div className="masonry" aria-live="polite">
        {/* About */}
        <article className="masonry-item">
          <div className="masonry-card prose" role="region" aria-labelledby="about-title">
            <div className="eyebrow">Profile</div>
            <h3 id="about-title" className="card-title">我是谁</h3>
            <p>我是一个喜欢探索的人：写代码、长途骑行、也会亲手做空间改造。作为核心员工参与过跨国项目，从 0 到 1 以及后续规模化迭代。</p>
            <p>我注重美学与体验，偏好留白与细节；在工程上追求可维护与可验证。</p>
          </div>
        </article>

        {/* Skills */}
        <article className="masonry-item">
          <div className="masonry-card prose" role="region" aria-labelledby="skills-title">
            <div className="eyebrow">Skills</div>
            <h3 id="skills-title" className="card-title">技能速览</h3>
            <ul>
              <li>Mobile：{skills.mobile.join(', ')}</li>
              <li>Architecture：{skills.arch.join(', ')}</li>
              <li>Infra & Tools：{skills.tools.join(', ')}</li>
              <li>Soft skills：{skills.soft.join(', ')}</li>
            </ul>
          </div>
        </article>

        {/* Projects */}
        {projects.map((p) => (
          <article className="masonry-item" key={p.title}>
            <div className="masonry-card prose" role="region" aria-labelledby={`${p.title}-id`}>
              <div className="eyebrow">Project Case</div>
              <h3 id={`${p.title}-id`} className="card-title">{p.title}</h3>
              <div className="card-meta">{p.time}</div>
              <ul>
                <li><strong>背景：</strong>{p.context}</li>
                <li><strong>角色：</strong>{p.role}</li>
                <li><strong>方法：</strong>{p.what.join(' / ')}</li>
                <li><strong>结果：</strong>{p.impact}</li>
              </ul>
              <div className="card-actions">
                <a className="btn" href={p.link} aria-label={`${p.title} 详情`}>详情 / Links</a>
              </div>
            </div>
          </article>
        ))}

        {/* Aesthetics & Hobbies */}
        <article className="masonry-item">
          <div className="masonry-card prose" role="region" aria-labelledby="hobby-title">
            <div className="eyebrow">Hobby · Value</div>
            <h3 id="hobby-title" className="card-title">骑行与美学</h3>
            <p>骑行带给我耐力与专注，帮助我在长期项目中稳步推进；对日本建筑与空间的偏好，让我在工程中也注重材质感与光影般的细节。</p>
            <ul>
              <li>长途骑行：强调耐力与自我管理</li>
              <li>空间改造：从 0 到 1 的动手与落地能力</li>
              <li>审美偏好：低饱和度、留白、克制的动效</li>
            </ul>
          </div>
        </article>

        {/* Companies / Roles */}
        <article className="masonry-item">
          <div className="masonry-card prose" role="region" aria-labelledby="exp-title">
            <div className="eyebrow">Experience</div>
            <h3 id="exp-title" className="card-title">经历与角色</h3>
            <p>在一些国际化大公司担任核心员工，参与重要项目；偏好在不明确阶段将技术方案变成可评估的 MVP，从而推动产品决策。</p>
          </div>
        </article>

        {/* Links */}
        <article className="masonry-item">
          <div className="masonry-card prose" role="region" aria-labelledby="links-title">
            <div className="eyebrow">Links</div>
            <h3 id="links-title" className="card-title">社交与资料</h3>
            <ul>
              {socials.map(s => (
                <li key={s.name}><a href={s.url} target="_blank" rel="noreferrer">{s.name}{s.placeholder ? '（更新中）' : ''}</a></li>
              ))}
            </ul>
          </div>
        </article>

        {/* CTA */}
        <article className="masonry-item" id="contact">
          <div className="masonry-card prose" role="region" aria-labelledby="cta-title">
            <div className="eyebrow">Contact</div>
            <h3 id="cta-title" className="card-title">我在寻找</h3>
            <p>开放全职 / 远程 / 面向产品决策的移动工程岗位。若你正在寻找能将复杂需求变简单、并能稳定推进项目落地的人，欢迎联系我。</p>
            <div className="card-actions">
              <a className="btn primary" href="mailto:you@example.com">邮件联系</a>
              <a className="btn" href="/Koren-a11y-CV.pdf" target="_blank" rel="noreferrer">下载简历</a>
            </div>
          </div>
        </article>
      </div>

      <footer className="footer" role="contentinfo">
        <p>© {new Date().getFullYear()} Koren · 发布于 GitHub Pages</p>
      </footer>
    </main>
  )
}
