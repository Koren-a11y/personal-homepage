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
    // New sections
    'traits.title': '私は誰か',
    'traits.engineer': 'エンジニアとして',
    'traits.engineer.desc': 'プロダクト志向で、複雑を分解し着実に届けます。',
    'traits.values': 'オープンでフレンドリー',
    'traits.values.desc': '透明なコミュニケーションと協働を大切にします。',
    'traits.sport': 'スポーツと冒険が好き',
    'traits.sport.desc': 'ロングライドやアウトドアで培った持久力と集中力。',
    'career.title': '職業経歴',
  // Career (title & points)
  'career.smartwe.title': 'セルフレジ・オーダーシステム (Flutter/iOS)',
  'career.smartwe.points.1': 'テックリードとしてアプリのアーキ設計と進捗を統括',
  'career.smartwe.points.2': '企画・UI/UX・実装・テスト・配信までエンドツーエンドで担当',
  'career.smartwe.points.3': '複雑な機能を高品質に実装',
  'career.smartwe.points.4': '複数デバイス・周辺機器の統合と通信',

  'career.ikken.title': '屋内測位システム',
  'career.ikken.points.1': '初めてプロジェクトマネージャーを担当',
  'career.ikken.points.2': '高難度・チャレンジングな案件',

  'career.ledvance.title': 'LEDVANCE スマート照明アプリ',
  'career.ledvance.points.1': 'iOS 開発リード',
  'career.ledvance.points.2': '高機能なスマート照明制御アプリ',
  'career.ledvance.points.3': '拡張性と保守性の高いアーキテクチャ設計',
  'career.ledvance.points.4': 'Flutter と React Native を用いたハイブリッド開発',

  'career.harman.title': 'HARMAN プロダクトシリーズアプリ',
  'career.harman.points.1': 'iOS コア開発者',
  'career.harman.points.2': '国際的な開発チームとの協業',
  'career.harman.points.3': 'グローバル評価 4.5、iF デザイン賞 受賞',

  'career.tcl.title': 'TCL プロダクト関連アプリ',
  'career.tcl.points.1': 'iOS 開発スキルを確立',
  'career.tcl.points.2': '複数チームでの連携',
  'career.tcl.points.3': '会社初の IoT アプリを実現',
    'interests.title': '興味・趣味',
    'interests.ride': 'サイクリング',
    'interests.ride.desc': '長距離ライドで持久力と自己管理を鍛える。',
    'interests.surf': 'サーフィン',
    'interests.surf.desc': '自然と向き合い、機会を読む集中力。',
    'interests.renovation': '住宅リノベ',
    'interests.renovation.desc': '0→1 の手仕事と細部へのこだわり。',
    // Languages
    'languages.title': '言語能力',
    'languages.zh.title': '中国語',
    'languages.zh.desc': '母語',
    'languages.ja.title': '日本語',
    'languages.ja.desc': 'JLPT N2。業務コミュニケーション・日常会話。継続学習中。',
    'languages.en.title': '英語',
    'languages.en.desc': 'ビジネスレベル。長期の業務コミュニケーション。',
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
    // New sections
    'traits.title': '我是谁',
    'traits.engineer': '工程师身份',
    'traits.engineer.desc': '产品导向，善于把复杂拆解并稳定交付。',
    'traits.values': '开放与友好',
    'traits.values.desc': '重视透明沟通与团队协作。',
    'traits.sport': '热爱运动与冒险',
    'traits.sport.desc': '长途骑行与户外培养的耐力与专注。',
    'career.title': '职业生涯',
  // Career (title & points)
  'career.smartwe.title': '自助收银与点餐系统 (Flutter/iOS)',
  'career.smartwe.points.1': '技术组长，统筹 App 架构设计与开发进度',
  'career.smartwe.points.2': '产品需求设计、UI/UX、实现、测试与发布全流程负责',
  'career.smartwe.points.3': '复杂功能，高质量实现',
  'career.smartwe.points.4': '多种设备和外设的集成与通信',

  'career.ikken.title': '室内定位系统',
  'career.ikken.points.1': '首次担任项目经理',
  'career.ikken.points.2': '极具挑战的项目',

  'career.ledvance.title': 'Ledvance 智能照明应用',
  'career.ledvance.points.1': 'iOS 开发组长',
  'career.ledvance.points.2': '功能复杂的智能照明控制应用',
  'career.ledvance.points.3': '高扩展性和易维护的架构设计',
  'career.ledvance.points.4': 'Flutter 与 React Native 混合架构协作开发',

  'career.harman.title': 'HARMAN 产品系列 App',
  'career.harman.points.1': 'iOS 核心开发者',
  'career.harman.points.2': '国际化开发团队协作',
  'career.harman.points.3': '全球用户评价 4.5、iF Design 奖 受奖',

  'career.tcl.title': 'TCL 产品相关 App 应用',
  'career.tcl.points.1': '掌握 iOS 开发技能',
  'career.tcl.points.2': '多团队协作',
  'career.tcl.points.3': '实现公司首个 IoT 应用',
    'interests.title': '兴趣爱好',
    'interests.ride': '骑行',
    'interests.ride.desc': '通过长途骑行锻炼耐力与自我管理。',
    'interests.surf': '冲浪',
    'interests.surf.desc': '在自然中训练判断与专注。',
    'interests.renovation': '房屋改造',
    'interests.renovation.desc': '从 0 到 1 的动手能力与对细节的苛求。',
    // Languages
    'languages.title': '语言能力',
    'languages.zh.title': '中文',
    'languages.zh.desc': '母语',
    'languages.ja.title': '日语',
    'languages.ja.desc': 'JLPT N2，工作交流，日常交流。持续学习中。',
    'languages.en.title': '英文',
    'languages.en.desc': '商务水平，长期工作交流。',
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
    // New sections
    'traits.title': 'Who I am',
    'traits.engineer': 'Engineer identity',
    'traits.engineer.desc': 'Product-minded; I decompose complexity and deliver reliably.',
    'traits.values': 'Open and friendly',
    'traits.values.desc': 'Value transparent communication and collaboration.',
    'traits.sport': 'Sports and adventure',
    'traits.sport.desc': 'Endurance and focus from long rides and outdoor activities.',
    'career.title': 'Career',
  // Career (title & points)
  'career.smartwe.title': 'Self-checkout & Ordering System (Flutter/iOS)',
  'career.smartwe.points.1': 'Tech lead owning app architecture and delivery plan',
  'career.smartwe.points.2': 'End-to-end ownership: product, UI/UX, implementation, testing, release',
  'career.smartwe.points.3': 'Implemented complex features with high quality',
  'career.smartwe.points.4': 'Integrated multiple devices and peripherals',

  'career.ikken.title': 'Indoor Positioning System',
  'career.ikken.points.1': 'First time serving as project manager',
  'career.ikken.points.2': 'Highly challenging project',

  'career.ledvance.title': 'LEDVANCE smart lighting app',
  'career.ledvance.points.1': 'iOS development lead',
  'career.ledvance.points.2': 'Feature-rich smart lighting control application',
  'career.ledvance.points.3': 'Highly extensible and maintainable architecture',
  'career.ledvance.points.4': 'Hybrid stack with Flutter and React Native',

  'career.harman.title': 'HARMAN product suite apps',
  'career.harman.points.1': 'Core iOS developer',
  'career.harman.points.2': 'Collaboration in a global development team',
  'career.harman.points.3': 'Global rating 4.5, iF Design Award winner',

  'career.tcl.title': 'TCL product-related apps',
  'career.tcl.points.1': 'Built solid iOS development skills',
  'career.tcl.points.2': 'Worked across multiple teams',
  'career.tcl.points.3': 'Delivered the company’s first IoT app',
    'interests.title': 'Interests',
    'interests.ride': 'Cycling',
    'interests.ride.desc': 'Build endurance and self-management via long-distance rides.',
    'interests.surf': 'Surfing',
    'interests.surf.desc': 'Focus and timing in nature.',
    'interests.renovation': 'Home renovation',
    'interests.renovation.desc': 'Hands-on 0→1 and attention to detail.',
    // Languages
    'languages.title': 'Languages',
    'languages.zh.title': 'Chinese',
    'languages.zh.desc': 'Native',
    'languages.ja.title': 'Japanese',
    'languages.ja.desc': 'JLPT N2. Work and daily communication. Continuing to improve.',
    'languages.en.title': 'English',
    'languages.en.desc': 'Business level. Long-term work communication.',
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
