https://koren-a11y.github.io/personal-homepage/

# Personal Homepage (Vite + React + TypeScript)

这是一个使用 Vite + React + TypeScript 构建的个人主页示例，并通过 GitHub Actions 部署到 GitHub Pages。

## 本地开发

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
npm run preview
```

## 部署（GitHub Actions → GitHub Pages）

- 推送到 `main` 后会自动构建并部署。
- 站点地址（项目页）：`https://<username>.github.io/personal-homepage`
- 已在 `vite.config.ts` 中设置：`base: '/personal-homepage/'` 以适配项目页子路径。
- 如果你更改了仓库名，请同步修改 `vite.config.ts` 的 `base`。


## 设计与实现概要（瀑布式主页）
- 布局：使用 CSS columns 实现 Masonry（瀑布流），轻量且无需第三方依赖；在 `src/styles.css` 中的 `.masonry`、`.masonry-item`、`.masonry-card`。
- 内容：结合你的个人描述与 README 中的建议，分为 About、Skills、Projects（Case 模板）、Hobby & Aesthetics、Experience、Links、Contact 七类卡片。
- 视觉：低饱和配色、留白、轻阴影；支持系统暗色模式（`prefers-color-scheme`）。
- 字体：Inter + Noto Sans SC（在 `index.html` 里通过 Google Fonts 引入）。
- SEO：在 `index.html` 中加入 JSON-LD（Person）结构化数据与更精准的 `meta description`。

## 填充你的真实内容
- 在 `src/App.tsx`：
  - 修改 `socials` 的 LinkedIn / Email。
  - 更新 `projects` 数组为你的 2–3 个精选案例（建议按 README 的 Case 模板撰写）。
  - 若有 PDF 简历，把 `public/Koren-a11y-CV.pdf` 放入并更新链接。

## 开发小贴士
- 图片：建议使用 WebP，宽度按列（~360–420px）裁切，懒加载可后续加入。
- 文案：尽量用“问题→方法→结果”的结构表达影响；能量化就量化。
- 可访问性：保证卡片标题唯一、按钮有可见焦点、颜色对比达标；当前已提供基础语义结构。

### 图片资源放置与路径（GitHub Pages 基础路径适配）
- 放在 public：将图片放入 `public/logos/`，在数据里写 `"logos/xxx.png"`，运行时会自动带上 `vite.config.ts` 里的 `base`（例如 `/personal-homepage/`）。
- 放在 src：将图片放入 `src/logos/`，同样在数据里写 `"logos/xxx.png"`。项目已使用 `import.meta.glob` 进行打包映射，运行时会得到正确的 URL。
- 注意大小写：文件名区分大小写；新增 public 资源后请重新构建。
- 预览与部署：使用 `npm run preview` 访问的路径通常为 `http://localhost:4173/personal-homepage/`（包含 base 前缀）；GitHub Pages 访问形如 `https://<username>.github.io/personal-homepage/`。

## 待办建议（可选）
- [ ] 国际化：提供英文版 /en（或开关）。
- [ ] 项目截图与动图：增加关键交互演示。
- [ ] 轻量分析：接入 Plausible/Fathom 或 GA4。
- [ ] 表单：新增联系表单（Formspree / 自建 API）。


# 个人主页设计方案（面向公司与招聘）
目标：用真诚且有成效的表达，把“你是谁、你能做什么、你做过什么影响力的事情”三点清晰呈现，吸引招聘方进一步沟通。

目录
- 关键原则
- 页面结构（区块与优先级）
- 每个区块的文案示例（中文 + 英文 + 日文 短版）
- 项目 Case 模板（可复制粘贴）
- 视觉 / 排版 / 图片建议（含日式美学如何融入）
- 技术实现建议（快速上线与可维护）

---

## 关键原则（写给你的做法参考）
- 简洁、有故事：用 3-5 个短句把你是谁、擅长什么、目标是什么讲清楚。不要罗列太多无量化的头衔。
- 强调影响而非职责：公司关心你能带来什么结果。写项目时尽量给出结果（时间、转化、稳定性、业务指标、用户数、节省成本等）。
- 视觉与品牌一致：你热爱美学，主页要体现这种品味（极简、留白、素材高质感），但别牺牲可读性或加载速度。
- 招聘导向 CTA：在明显位置写清楚你在找什么（全职/合同/顾问/远程/城市），并提供联系方法（邮箱、LinkedIn、简历下载）。

---

## 页面结构建议（顺序按重要性）
1. Hero（首屏） —— 1句话定位 + 2行补充 + CTA（联系 / 简历 / 项目）
2. About（关于我） —— 个人短介绍 + 价值观/工作方式（为什么作为核心员工）
3. 技能速览（Tech & Tools） —— 关键技术 + 熟练度
4. 精选项目（3 个主 Case） —— 每个 Case 采用同一模板（见下）
5. 其他工作经历 / 公司曾任职（公司 logo 列表，注明“核心员工/参与重要项目”）
6. 爱好与审美（短区块，展示你的人格、耐力与审美）
7. 推荐语 / 引用（如有同事/PM/设计师短评）
8. 联系方式与 CTA —— 简历下载、邮件、LinkedIn、GitHub、可预约会谈日历

---

## 文案示例（可直接复制修改）

Hero（中文短版）
- 标题：iOS / Flutter 开发者 · 热爱日式美学的产品驱动工程师
- 副标题：在国际化公司担任核心工程师，擅长把复杂产品模块化并落地。热爱长途骑行与空间改造，注重极简与细节。
- CTA 按钮：查看我的项目 / 下载简历 / 联系我

Hero（英文短版）
- Title: iOS & Flutter Engineer · Product-minded, Aesthetics-focused
- Subtitle: Core engineer at global companies. I ship scalable mobile features, value craftsmanship and simple design.
- CTA: View Projects / Download CV / Contact

About（中文示例，约 2–4 句）
- 我是一个喜欢探索的人，既写代码也会动手做房屋改造；我热衷于把工程化思路带进产品和体验中。在过去的岗位中我作为核心员工，参与并推动了若干跨国项目从 0 到 1 与后续规模化。现在我寻找能让我持续成长并参与产品决策的工程岗位。

短 English bio（一句）
- Product-minded mobile engineer with a craft sensibility — experienced in iOS and Flutter at international companies.

技能区（示例）
- Mobile: Swift, SwiftUI, UIKit, Combine, Objective-C, Flutter, Dart
- Architecture: MVVM, Clean Architecture, Modularization, CI/CD
- Infra & Tools: GitHub Actions, Fastlane, Firebase, Sentry, Unit/UI testing
- Soft skills: cross-team collaboration, mentoring, product thinking, UX sensitivity

项目入口（短列表）
- Project A — 国际社交 App：性能优化与冷启动时间缩短 40%
- Project B — 企业级支付模块：主导 SDK 设计并对接 10+ 客户
- Project C — 多语言 Flutter 重构：减少代码重复 60%，加速发布频率

爱好 / 个性（示例）
- 骑行：热爱长途骑行，耐力与自我管理是我的标签
- 美学：受日本建筑影响，偏好留白、材质感与光影
- 装修动手党：亲自参与空间改造，注重功能与美学融合

结尾 CTA（示例）
- 我现在开放：全职 / 远程 / 面向产品决策的工程角色。欢迎通过邮件联系：you@example.com 或在 LinkedIn 上发消息。

---

## 项目 Case 模板（强烈建议每个精选项目都按此写）
标题 — 公司名 · 时间（3–6 行概述）
- 背景（Context）：产品/业务目标、用户群
- 问题（Problem）：你要解决的关键问题
- 我的角色（Role）：你在团队的定位、职责
- 技术与方法（What I did）：关键设计、架构、难点、技术栈（要点式）
- 结果（Outcome/Impact）：量化成果（百分比、时间、用户数、收入或性能提升），如无量化也写可感知的结果（上线周期、稳定性提升、团队效率）
- 可验证证据（Links / 截图 / PR / App Store）：链接或备注“需面谈查看”

示例（可直接复制）
- 标题：冷启动优化 — CompanyX · 2023 Q2
  - 背景：移动端每日活跃用户 50k，首次体验中因冷启动慢流失 12%。
  - 问题：冷启动时间偏长且首屏闪烁影响体验。
  - 我的角色：核心工程师，负责 iOS 端重构与性能优化的设计和落地。
  - 技术与方法：分析启动耗时（Instruments），将启动路径拆成两部分并延后初始化次要模块；引入按需加载和资源压缩；优化图片加载与缓存策略。
  - 结果：冷启动平均时间从 2.8s 降到 1.6s，首日留存提升 6%，用户投诉数下降 40%。
  - 证据：公开 PR 链接 / 截图（若需演示可面谈）

---

## 视觉与排版建议（结合你对日本建筑美学的喜好）
- 颜色：低饱和度调色（米白、浅灰、墨绿/石墨色做点缀），避免强烈饱和色。
- 字体：标题使用有亲和力的衬线或圆体（中文可选思源宋/思源黑），正文用易读无衬线。字号层级清晰。
- 空间感：大量留白（margin 与 padding），每个区块保留呼吸空间。
- 图片：用高质量的局部细节照（建筑细部、材料纹理）作为背景或分隔图。项目图使用屏幕截图 + 关键交互的短 GIF 或小视频演示。
- 组件小细节：淡入动画、卡片阴影非常轻，按钮易于点击（移动设备）。
- 可访问性：颜色对比至少 4.5:1，键盘可达，图片带 alt。

---

## 技术实现建议（从最简单到推荐）
- 最快方案（15–60 分钟上线）：
  - GitHub Pages + 一个极简的 HTML/CSS 模板（或使用 GitHub README 作为个人主页）。
- 推荐方案（专业且可扩展）：
  - Next.js 或 Astro + Vercel。理由：SEO 好、内置静态渲染与增量静态更新、部署方便。
  - 组件化，内容用 Markdown 或 headless CMS（如 Contentful / Netlify CMS）管理。
- SEO 与结构化数据：
  - 在 head 加入 JSON-LD Person（name, sameAs, jobTitle, description）。
  - meta title、meta description 针对职位关键词（iOS developer, Flutter engineer, mobile engineer）。
- 性能：
  - 图片用 WebP，按需加载（lazysizes），启用 gzip / brotli。
- 可访问性与国际化：
  - i18n：中文和英文切换。简单做法是两个静态页面 /en 和 /zh。
- 分析：
  - 使用 Plausible 或 Fathom（隐私友好），或 GA4 做基本流量追踪。

---

## 招聘导向的细节优化（把“爱好”与“职业价值”连接）
- 把“长途骑行”和“装修动手”写成带能力含义的句子：
  - 例如：长途骑行 → 强调耐力与长期项目推进能力；装修 → 强调动手能力、从 0 到 1 的落地能力、注重细节。
- 写“你在团队里的定位”而非只写“做了什么”：
  - 例如：作为核心员工，我常常在不明确需求时快速把技术方案变成可评估的 MVP，带动产品决策。
- 用对方公司能理解的指标表达你的贡献（如提升留存、加速上线、减少回归 bug、减少客户对接成本）。

---

## 推荐内容与结构的量化目标（当面试官浏览时）
- Hero + About：5–10 秒内传递“这是一个能解决问题、并注重体验的移动工程师”
- 项目 Case：每个 Case 读 30–60 秒能理解问题与结果
- 技能栏：快速识别核心技能（iOS/Flutter 可见）
- 联系 CTA：能在 10 秒内找到联系方式并能发起下一步（邮箱/日历/LinkedIn）

---

## 上线前核对清单
- [ ] Hero 有清晰定位 & CTA
- [ ] 精选 3 个项目每个都按 Case 模板写好
- [ ] 简历 PDF 可下载（文件名：Koren-a11y-CV.pdf）
- [ ] 页面移动端 / 桌面端测试过
- [ ] SEO meta 与 JSON-LD 人物结构数据
- [ ] 关键图片已压缩 WebP
- [ ] 隐私友好分析接入（或无分析）

---

## 下一步建议（便于你快速推进）
1. 从上面的 Case 模板挑 3 个最能体现“影响/技术/产品思维”的项目，填充细节（我可以帮你润色）。
2. 准备 2–3 张高质量照片或项目截图（屏幕截图、设计稿、装修细节照片）。
3. 选择上线技术栈（我推荐 Next.js + Vercel，或 GitHub Pages 若你想极简）。
4. 我可以基于你提供的 3 个项目内容，帮你把 Case 写成上屏文案，并生成一个简单的静态 index.html 或 Next.js 页面模板。


