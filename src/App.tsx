import React from 'react'

const socials = [
  { name: 'GitHub', url: 'https://github.com/Koren-a11y' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/your-linkedin', placeholder: true },
  { name: 'Twitter', url: 'https://twitter.com/your-twitter', placeholder: true },
  { name: 'Email', url: 'mailto:you@example.com', placeholder: true },
]

export default function App() {
  return (
    <main className="container">
      <section className="hero">
        <img className="avatar" src="https://github.com/Koren-a11y.png" alt="Avatar" />
        <h1>Koren</h1>
        <p className="tagline">前端开发者 · 可访问性爱好者</p>
        <p className="bio">
          这里是我的个人主页。这个站点使用 Vite + React + TypeScript 构建，并通过 GitHub Actions 部署到 GitHub Pages。
        </p>
        <div className="actions">
          <a className="btn primary" href="https://github.com/Koren-a11y/personal-homepage" target="_blank" rel="noreferrer">
            查看源码
          </a>
          <a className="btn" href="#projects">我的项目</a>
        </div>
      </section>

      <section id="links" aria-labelledby="links-title">
        <h2 id="links-title">链接</h2>
        <ul className="links">
          {socials.map(s => (
            <li key={s.name}>
              <a href={s.url} target="_blank" rel="noreferrer">
                {s.name}{s.placeholder ? '（示例）' : ''}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section id="projects" aria-labelledby="projects-title">
        <h2 id="projects-title">项目</h2>
        <ul className="cards">
          <li className="card">
            <h3>示例项目</h3>
            <p>用来展示项目卡片的占位内容，后续可以替换为真实项目。</p>
            <a className="card-link" href="https://github.com/Koren-a11y" target="_blank" rel="noreferrer">前往查看</a>
          </li>
        </ul>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Koren. 通过 GitHub Pages 发布。</p>
      </footer>
    </main>
  )
}
