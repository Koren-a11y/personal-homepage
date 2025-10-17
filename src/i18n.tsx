import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

export type Locale = 'ja' | 'zh' | 'en'

const DEFAULT_LOCALE: Locale = 'ja'

type Dict = Record<string, string>
type Translations = Record<Locale, Dict>

const translations: Translations = {
  ja: {
    // Hero
    'hero.h1': 'iOS / Flutter エンジニア · プロダクト志向',
    'hero.tagline': '誠実に探求し、日本建築の美学と空間づくりが好き。グローバル企業でコアエンジニアとして、複雑な要件をシンプルに設計し着実に届けます。',
    'hero.bio': 'このサイトは Vite + React + TypeScript で構築し、GitHub Actions で GitHub Pages にデプロイしています。',
    // Actions
    'actions.contact': '連絡する',
    'actions.view_projects': 'プロジェクトを見る',
    'actions.view_source': 'ソースコード',
    // Sections
    'section.about': '私について · About',
    'section.skills': 'スキル',
    'section.links': 'リンク',
    'section.contact': 'コンタクト',
    // About card
    'about.title': '私は誰か',
    'about.p1': 'コードを書くこと、ロングライド、手を動かす空間改造が好きです。コアメンバーとして国際案件の 0→1 とその後のスケールを推進してきました。',
    'about.p2': '美学と体験を重視し、余白と細部を大切にします。エンジニアリングでは保守性と検証可能性を追求します。',
    // Skills card
    'skills.title': 'スキル概要',
    'skills.mobile': 'モバイル',
    'skills.arch': 'アーキテクチャ',
    'skills.tools': 'インフラ & ツール',
    'skills.soft': 'ソフトスキル',
    // Hobbies / Aesthetics
    'hobby.eyebrow': 'Hobby · Value',
    'hobby.title': 'ライドと美学',
    'hobby.li1': 'ロングライド：持久力とセルフマネジメント',
    'hobby.li2': '空間改造：0→1 の実装と着地力',
    'hobby.li3': '審美：低彩度、余白、抑制されたモーション',
    'hobby.p': 'ライドは長期プロジェクトを着実に進める集中力を鍛えます。日本建築や空間の好みは、エンジニアリングの細部への感度にもつながっています。',
    // Experience
    'exp.title': '経験と役割',
    'exp.p': 'グローバル企業でコアメンバーとして重要プロジェクトに参画。曖昧な段階で技術案を評価可能な MVP に落として意思決定を前進させるのが得意です。',
    // Links
    'links.title': 'ソーシャル & 資料',
    'links.placeholder': '（更新中）',
    // Contact
    'cta.title': '探しているポジション',
    'cta.p': 'フルタイム / リモート / プロダクト意思決定に関わるモバイルエンジニアの機会を探しています。複雑をシンプルにし、確実にデリバリーする人材をお探しならご連絡ください。',
    'cta.email': 'メール',
    'cta.cv': '履歴書をダウンロード',
    // Footer
    'footer': '© {year} Koren · GitHub Pages で公開',
    // Projects common
    'projects.eyebrow': 'Project Case',
    'projects.details': '詳細 / Links',
    // Project 1
    'p1.title': 'コールドスタート最適化 — CompanyX',
    'p1.time': '2023 Q2',
    'p1.context': 'DAU 50k。初回体験で起動の遅さにより 12% が離脱。',
    'p1.role': 'iOS コアエンジニア。リファクタと性能最適化の設計・実装を担当。',
    'p1.what': '起動パス分割と二次モジュールの遅延初期化 / オンデマンドロードとアセット圧縮 / 画像ローディングとキャッシュ最適化',
    'p1.impact': '起動 2.8s → 1.6s、初日リテンション +6%、苦情 -40%。',
    // Project 2
    'p2.title': 'エンタープライズ決済 SDK のモジュール化',
    'p2.time': '2022',
    'p2.context': 'B2B の多様な統合シナリオで機能肥大化により保守性が低下。',
    'p2.role': 'モバイル責任者。モジュール境界と API 設計を主導。',
    'p2.what': '境界リファクタ / リリース規約とサンプルアプリ / 10+ 社と連携',
    'p2.impact': '導入工数 -35%、回帰バグ -28%。',
    // Project 3
    'p3.title': 'Flutter 多言語化リファクタ',
    'p3.time': '2021',
    'p3.context': '複数市場展開でハードコーディングが阻害要因。',
    'p3.role': 'コアデベロッパー。i18n の資産化を推進。',
    'p3.what': '文言リソース分離とキー規約 / 再利用テンプレート / CI によるキー欠落検出',
    'p3.impact': '重複コード -60%、リリース頻度向上。',
  },
  zh: {
    'hero.h1': 'iOS / Flutter 开发者 · 产品导向',
    'hero.tagline': '真诚爱探索，喜爱日本建筑美学和空间改造；在国际化公司做过核心工程，善于将复杂需求模块化并落地。',
    'hero.bio': '本网站使用 Vite + React + TypeScript 构建，并通过 GitHub Actions 部署到 GitHub Pages。',
    'actions.contact': '联系我',
    'actions.view_projects': '查看项目',
    'actions.view_source': '查看源码',
    'section.about': '关于我 · About',
    'section.skills': '技能',
    'section.links': '链接',
    'section.contact': '联系方式',
    'about.title': '我是谁',
    'about.p1': '我喜欢探索：写代码、长途骑行、也会亲手做空间改造。作为核心成员参与过跨国项目从 0 到 1 及后续规模化。',
    'about.p2': '我注重美学与体验，偏好留白与细节；在工程上追求可维护与可验证。',
    'skills.title': '技能速览',
    'skills.mobile': '移动端',
    'skills.arch': '架构',
    'skills.tools': '基础设施与工具',
    'skills.soft': '软技能',
    'hobby.eyebrow': 'Hobby · Value',
    'hobby.title': '骑行与美学',
    'hobby.li1': '长途骑行：耐力与自我管理',
    'hobby.li2': '空间改造：0→1 的动手与落地',
    'hobby.li3': '审美偏好：低饱和度、留白、克制动效',
    'hobby.p': '骑行锻炼了长期推进的专注力；对日本建筑与空间的偏好，让我在工程中也注重细节与秩序。',
    'exp.title': '经历与角色',
    'exp.p': '在一些国际化大公司担任核心员工，参与重要项目；擅长在不明确阶段把技术方案变成可评估的 MVP，推动产品决策。',
    'links.title': '社交与资料',
    'links.placeholder': '（更新中）',
    'cta.title': '我在寻找',
    'cta.p': '开放全职 / 远程 / 面向产品决策的移动工程岗位。如果你需要把复杂变简单并稳定落地的人，欢迎联系我。',
    'cta.email': '邮件联系',
    'cta.cv': '下载简历',
    'footer': '© {year} Koren · 发布于 GitHub Pages',
    'projects.eyebrow': '项目案例',
    'projects.details': '详情 / Links',
    'p1.title': '冷启动优化 — CompanyX',
    'p1.time': '2023 Q2',
    'p1.context': 'DAU 50k，首次体验中因冷启动慢流失 12%。',
    'p1.role': 'iOS 核心工程师，负责重构与性能优化设计和落地。',
    'p1.what': '拆分启动路径并延后初始化次要模块 / 按需加载与资源压缩 / 优化图片加载与缓存',
    'p1.impact': '冷启动 2.8s → 1.6s，首日留存 +6%，投诉 -40%。',
    'p2.title': '企业支付 SDK 模块化',
    'p2.time': '2022',
    'p2.context': 'B 端客户多集成场景，功能膨胀导致维护困难。',
    'p2.role': '移动端负责人，主导模块化与 API 设计。',
    'p2.what': '模块边界重构 / 版本发布规范与示例 App / 对接 10+ 客户',
    'p2.impact': '集成工时 -35%，回归缺陷 -28%。',
    'p3.title': 'Flutter 多语言重构',
    'p3.time': '2021',
    'p3.context': '多市场发行，多处硬编码文案导致迭代阻塞。',
    'p3.role': '核心开发者，推动 i18n 资产化。',
    'p3.what': '抽离文案资源与 Key 规范 / 代码复用与脚手架 / CI 校验缺失 key',
    'p3.impact': '重复代码 -60%，发布频率提升。',
  },
  en: {
    'hero.h1': 'iOS / Flutter Engineer · Product-minded',
    'hero.tagline': 'Curious and sincere. Inspired by Japanese aesthetics and space renovation. Core engineer in global teams, shipping modular and scalable features.',
    'hero.bio': 'Built with Vite + React + TypeScript, deployed via GitHub Actions to GitHub Pages.',
    'actions.contact': 'Contact',
    'actions.view_projects': 'View Projects',
    'actions.view_source': 'View Source',
    'section.about': 'About me · About',
    'section.skills': 'Skills',
    'section.links': 'Links',
    'section.contact': 'Contact',
    'about.title': 'Who I am',
    'about.p1': 'I code, do long-distance cycling, and hands-on space renovation. As a core member, I have driven 0→1 and scaling for cross-country projects.',
    'about.p2': 'I value aesthetics and experience — favoring whitespace and details. In engineering, I aim for maintainable and verifiable solutions.',
    'skills.title': 'Skills at a glance',
    'skills.mobile': 'Mobile',
    'skills.arch': 'Architecture',
    'skills.tools': 'Infra & Tools',
    'skills.soft': 'Soft skills',
    'hobby.eyebrow': 'Hobby · Value',
    'hobby.title': 'Cycling & Aesthetics',
    'hobby.li1': 'Endurance rides: persistence and self-management',
    'hobby.li2': 'Space renovation: hands-on 0→1 and delivery',
    'hobby.li3': 'Taste: low-saturation, whitespace, restrained motion',
    'hobby.p': 'Cycling builds focus for long-running projects. My taste for Japanese architecture informs my attention to detail in engineering.',
    'exp.title': 'Experience & Role',
    'exp.p': 'Core member in global companies and critical projects. I turn ambiguous requirements into evaluable MVPs to drive product decisions.',
    'links.title': 'Social & Docs',
    'links.placeholder': '(updating)',
    'cta.title': 'Open to',
    'cta.p': 'Full-time / Remote / Product-involved mobile engineering roles. If you need someone to simplify complexity and deliver reliably, let’s talk.',
    'cta.email': 'Email',
    'cta.cv': 'Download CV',
    'footer': '© {year} Koren · Published on GitHub Pages',
    'projects.eyebrow': 'Project Case',
    'projects.details': 'Details / Links',
    'p1.title': 'Cold-start Optimization — CompanyX',
    'p1.time': '2023 Q2',
    'p1.context': 'DAU 50k; slow startup led to 12% first-time churn.',
    'p1.role': 'Core iOS engineer owning refactor and performance work.',
    'p1.what': 'Split startup path & defer non-critical init / on-demand loading & asset compression / image loading & cache tuning',
    'p1.impact': '2.8s → 1.6s, Day-1 retention +6%, complaints -40%.',
    'p2.title': 'Enterprise Payment SDK Modularization',
    'p2.time': '2022',
    'p2.context': 'Diverse B2B integrations increased complexity and maintenance cost.',
    'p2.role': 'Mobile lead. Drove module boundaries and API design.',
    'p2.what': 'Boundary refactor / release policy & sample app / integrated with 10+ clients',
    'p2.impact': 'Integration effort -35%, regression defects -28%.',
    'p3.title': 'Flutter Internationalization Refactor',
    'p3.time': '2021',
    'p3.context': 'Hardcoded strings across markets blocked iteration.',
    'p3.role': 'Core developer. Turned i18n into a reusable asset.',
    'p3.what': 'String resources & key conventions / reuse scaffolds / CI key-missing checks',
    'p3.impact': 'Duplicate code -60%, faster releases.',
  },
}

type I18nContextType = {
  locale: Locale
  setLocale: (l: Locale) => void
  t: (key: string, vars?: Record<string, string | number>) => string
}

const I18nContext = createContext<I18nContextType | null>(null)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const initial = useMemo<Locale>(() => {
    const params = new URLSearchParams(window.location.search)
    const fromQuery = params.get('lang') as Locale | null
    const fromStorage = (localStorage.getItem('i18n:locale') as Locale | null)
    const candidate = fromQuery || fromStorage || DEFAULT_LOCALE
    return (['ja', 'zh', 'en'] as Locale[]).includes(candidate) ? candidate : DEFAULT_LOCALE
  }, [])

  const [locale, setLocaleState] = useState<Locale>(initial)

  const setLocale = (l: Locale) => {
    setLocaleState(l)
    localStorage.setItem('i18n:locale', l)
  }

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const t = (key: string, vars?: Record<string, string | number>) => {
    const dict = translations[locale] || translations[DEFAULT_LOCALE]
    let str = dict[key] || translations.en[key] || key
    if (vars) {
      for (const [k, v] of Object.entries(vars)) {
        str = str.replace(new RegExp(`\\{${k}\\}`, 'g'), String(v))
      }
    }
    return str
  }

  const value = { locale, setLocale, t }
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}
