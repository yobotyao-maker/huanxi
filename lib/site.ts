import {
  BarChart3,
  Boxes,
  CloudCog,
  CloudDownload,
  CloudUpload,
  Cpu,
  Database,
  FileDown,
  Gauge,
  HardDriveDownload,
  Headphones,
  LockKeyhole,
  MonitorDown,
  Network,
  Palette,
  Radar,
  Server,
  ShieldCheck,
  Sparkles,
  Workflow,
  type LucideIcon
} from "lucide-react";

export type Locale = "zh" | "en" | "ja";

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const defaultLocale: Locale = "zh";

export const locales = [
  { code: "zh", label: "中文", htmlLang: "zh-CN" },
  { code: "en", label: "EN", htmlLang: "en" },
  { code: "ja", label: "日本語", htmlLang: "ja" }
] as const;

export const localeCodes = locales.map((locale) => locale.code);

export function normalizeLocale(value?: string): Locale {
  return value === "en" || value === "ja" || value === "zh" ? value : defaultLocale;
}

export function getLocaleFromPathname(pathname: string): Locale {
  const first = pathname.split("/").filter(Boolean)[0];
  return normalizeLocale(first);
}

export function stripLocale(pathname: string) {
  const parts = pathname.split("/").filter(Boolean);
  if (parts[0] === "en" || parts[0] === "ja" || parts[0] === "zh") {
    parts.shift();
  }
  return `/${parts.join("/")}${parts.length ? "/" : ""}`;
}

export function withLocalePath(locale: Locale, path = "/") {
  const [pathname, hash] = path.split("#");
  const cleanPath = pathname === "/" ? "/" : `/${pathname.split("/").filter(Boolean).join("/")}/`;
  const suffix = hash ? `#${hash}` : "";
  if (locale === defaultLocale) return `${cleanPath}${suffix}`;
  const localized = cleanPath === "/" ? `/${locale}/` : `/${locale}${cleanPath}`;
  return `${localized}${suffix}`;
}

export function switchLocalePath(pathname: string, locale: Locale) {
  return withLocalePath(locale, stripLocale(pathname));
}

export const company = {
  legalName: "宝云云计算有限公司",
  shortName: "宝云云计算",
  phone: "+86 400-880-1024",
  email: "contact@baoyuncloud.com",
  address: {
    zh: "中国 · 上海 / 东京双节点服务支持",
    en: "China · Shanghai / Tokyo service support",
    ja: "中国・上海 / 東京の二拠点サポート"
  }
};

export const dictionaries = {
  zh: {
    meta: {
      title: "宝云云计算 - 企业云计算与托管运维服务",
      description:
        "宝云云计算有限公司提供云服务器、对象存储、云数据库、云安全、迁移实施与托管运维服务。"
    },
    brand: company.shortName,
    legalName: company.legalName,
    slogan: "让企业云上业务更稳、更快、更可控",
    nav: [
      { label: "首页", href: "/" },
      { label: "产品下载", href: "/download/" },
      { label: "联系我们", href: "/about/" }
    ],
    actions: {
      login: "产品方案",
      register: "免费咨询",
      download: "立即下载体验",
      console: "控制台"
    },
    footer: {
      rights: `© 2026 ${company.legalName}. All Rights Reserved.`,
      filing: "请在上线前替换备案号与正式联系方式"
    },
    home: {
      hero: {
        badge: "已支持主流云与混合云架构",
        title: "企业级云计算与托管运维平台",
        subtitle: "远程管理云资源、弹性扩容、安全巡检、成本优化，轻松上手",
        primary: "立即下载体验",
        secondary: "咨询云方案",
        version: "宝云云计算"
      },
      ui: {
        title: "精心设计多套云服务方案，适配不同阶段需求",
        accent: "简洁、稳定、可扩展",
        slides: [
          { title: "弹性计算资源池", description: "云服务器、负载均衡、镜像模板统一交付" },
          { title: "数据与备份中心", description: "对象存储、快照、异地备份策略集中管理" },
          { title: "安全运营视图", description: "访问审计、风险巡检、安全基线清晰可见" }
        ]
      },
      cloudOps: {
        title: "更自由的空间，资源、权限、监控、告警皆可自定义",
        accent: "化繁为简，DIY 你的专属云平台",
        cards: [
          { title: "资源编排", description: "按业务分组管理计算、网络与存储" },
          { title: "权限模型", description: "面向部门、项目、角色拆分访问边界" },
          { title: "运维策略", description: "告警、备份、巡检任务可视化配置" }
        ]
      },
      atmosphere: {
        title: "云资源状态一屏掌握，业务运行更有安全感",
        accent: "专属运营大屏，秒懂业务健康度",
        features: ["可用性监控", "成本趋势", "安全事件", "容量预测"]
      },
      tools: {
        title: "支持云服务器、对象存储、云数据库、迁移工具",
        accent: "实用、好用的能力全部都有",
        items: [
          { title: "云服务器", description: "高可用计算与弹性扩容", icon: Server },
          { title: "对象存储", description: "海量数据与静态资源托管", icon: Database },
          { title: "云安全", description: "基线巡检与访问审计", icon: ShieldCheck },
          { title: "云迁移", description: "评估、同步、割接陪跑", icon: CloudUpload }
        ]
      },
      ecosystem: {
        title: "专业团队研发出品，打造企业云全生态产品",
        accent: "让稳定的云体验无处不在",
        products: [
          { title: "宝云控制台", description: "资源、账单、告警一站式管理", icon: CloudCog },
          { title: "宝云监控", description: "指标、日志、事件实时观测", icon: Radar },
          { title: "宝云迁移", description: "低风险完成业务上云", icon: Workflow }
        ]
      },
      b2b: {
        title: "专业的云管理后台，更好的设备与业务兼容性",
        accent: "助力 B 端客户快速集成、放心使用",
        points: ["兼容公有云、私有云、混合云", "可视化云资源管理后台", "客户技术支持服务"]
      },
      contact: {
        title: "咨询产品合作",
        business: "添加商务微信详询产品合作",
        updatesTitle: "关注产品更新",
        updates: "关注宝云云计算官方公众号"
      }
    },
    download: {
      title: "下载应用",
      intro: "下载宝云云计算资料、监控 Agent 指南与迁移工具资料。",
      button: "点击下载",
      cards: [
        {
          title: "宝云控制台资料包",
          version: "产品白皮书",
          description: "产品概览、开通流程、方案选型。",
          icon: FileDown,
          href: "/downloads/baoyun-platform-brochure.txt"
        },
        {
          title: "云监控 Agent 指南",
          version: "Linux / Windows",
          description: "服务器监控、日志采集、告警配置。",
          icon: MonitorDown,
          href: "/downloads/baoyun-agent-guide.txt"
        },
        {
          title: "云迁移工具资料",
          version: "迁移交付",
          description: "迁移评估、数据同步、割接清单。",
          icon: HardDriveDownload,
          href: "/downloads/baoyun-migration-kit.txt"
        },
        {
          title: "企业服务咨询",
          version: "人工开通",
          description: "专属顾问确认需求后开通正式权限。",
          icon: Headphones,
          href: "/about/#contact-sales"
        }
      ]
    },
    about: {
      title: "联系我们",
      intro: "获取企业上云、云迁移、托管运维与专属云方案。",
      businessTitle: "咨询产品合作",
      businessText: "添加商务顾问，获取云迁移、托管运维、专属云报价。",
      updatesTitle: "关注产品更新",
      updatesText: "关注宝云云计算产品动态、实践案例与安全公告。"
    },
    edition: {
      title: "根据需求，选择适合的产品方案",
      feature: "功能",
      standard: "标准版",
      standardBadge: "永久免费",
      professional: "专业版",
      professionalBadge: "授权一次性收费",
      contact: "联系商务咨询专业版购买",
      rows: [
        ["首屏运营位可编辑", "限定", "全部"],
        ["首屏应用位可编辑", "限定", "全部"],
        ["次屏运营位可编辑", "限定", "全部"],
        ["桌面自带云监控功能", "支持", "支持"],
        ["支持设置开机自启动", "支持", "支持"],
        ["支持跑马灯通知", "不支持", "支持"],
        ["支持背景换肤功能", "不支持", "支持"],
        ["支持自定义屏保/大屏", "不支持", "支持"],
        ["个人应用优先检测", "不支持", "支持"],
        ["一对一技术支持", "不支持", "支持"],
        ["大客户素材设计支持", "不支持", "支持"]
      ]
    }
  },
  en: {
    meta: {
      title: "Baoyun Cloud - Enterprise Cloud & Managed Operations",
      description:
        "Baoyun Cloud provides cloud compute, storage, database, security, migration and managed operations services."
    },
    brand: "Baoyun Cloud",
    legalName: "Baoyun Cloud Computing Co., Ltd.",
    slogan: "Cloud operations that are stable, fast, and controllable",
    nav: [
      { label: "Home", href: "/" },
      { label: "Downloads", href: "/download/" },
      { label: "Contact", href: "/about/" }
    ],
    actions: {
      login: "Plans",
      register: "Free consultation",
      download: "Download now",
      console: "Console"
    },
    footer: {
      rights: "© 2026 Baoyun Cloud Computing Co., Ltd. All Rights Reserved.",
      filing: "Replace filing number and official contact details before launch"
    },
    home: {
      hero: {
        badge: "Supports mainstream cloud and hybrid-cloud architectures",
        title: "Enterprise cloud computing and managed operations platform",
        subtitle:
          "Manage cloud resources remotely, scale elastically, inspect security risks, and optimize cost with a clean operating experience.",
        primary: "Download now",
        secondary: "Talk to an architect",
        version: "Baoyun Cloud"
      },
      ui: {
        title: "Carefully designed cloud service plans for different growth stages",
        accent: "Simple, stable, and scalable",
        slides: [
          { title: "Elastic compute pool", description: "Cloud servers, load balancing, and image templates delivered together" },
          { title: "Data and backup center", description: "Object storage, snapshots, and remote backup policies in one place" },
          { title: "Security operations view", description: "Audit trails, risk checks, and security baselines stay visible" }
        ]
      },
      cloudOps: {
        title: "More flexible space where resources, permissions, monitoring, and alerts can be customized",
        accent: "Simplify complexity and build your own cloud platform",
        cards: [
          { title: "Resource orchestration", description: "Group compute, network, and storage by business domain" },
          { title: "Access model", description: "Separate permissions by department, project, and role" },
          { title: "Ops policies", description: "Visualize alerts, backups, and inspection tasks" }
        ]
      },
      atmosphere: {
        title: "Understand cloud resource status at a glance and run business with confidence",
        accent: "Dedicated operations screen for instant health awareness",
        features: ["Availability", "Cost trend", "Security events", "Capacity forecast"]
      },
      tools: {
        title: "Cloud servers, object storage, cloud databases, and migration tools are supported",
        accent: "Practical capabilities are all included",
        items: [
          { title: "Cloud compute", description: "Highly available compute with elastic scaling", icon: Server },
          { title: "Object storage", description: "Massive data and static asset hosting", icon: Database },
          { title: "Cloud security", description: "Baseline checks and access auditing", icon: ShieldCheck },
          { title: "Cloud migration", description: "Assessment, sync, and cutover support", icon: CloudUpload }
        ]
      },
      ecosystem: {
        title: "Built by a professional team for an enterprise cloud product ecosystem",
        accent: "Reliable cloud experiences everywhere",
        products: [
          { title: "Baoyun Console", description: "Resources, billing, and alerts in one console", icon: CloudCog },
          { title: "Baoyun Monitor", description: "Observe metrics, logs, and events in real time", icon: Radar },
          { title: "Baoyun Migration", description: "Move workloads to the cloud with less risk", icon: Workflow }
        ]
      },
      b2b: {
        title: "A professional cloud management backend with better compatibility",
        accent: "Helping B2B customers integrate quickly and operate with confidence",
        points: ["Public cloud, private cloud, and hybrid cloud compatible", "Visual cloud resource management backend", "Customer technical support service"]
      },
      contact: {
        title: "Product partnership",
        business: "Add our business contact for partnership details",
        updatesTitle: "Product updates",
        updates: "Follow Baoyun Cloud official updates"
      }
    },
    download: {
      title: "Download Apps",
      intro: "Download Baoyun Cloud materials, monitoring Agent guide, and migration toolkit documents.",
      button: "Download",
      cards: [
        {
          title: "Baoyun Console Pack",
          version: "Product whitepaper",
          description: "Product overview, onboarding process, and architecture options.",
          icon: FileDown,
          href: "/downloads/baoyun-platform-brochure.txt"
        },
        {
          title: "Cloud Monitor Agent Guide",
          version: "Linux / Windows",
          description: "Server monitoring, log collection, and alert policy setup.",
          icon: MonitorDown,
          href: "/downloads/baoyun-agent-guide.txt"
        },
        {
          title: "Cloud Migration Toolkit",
          version: "Migration delivery",
          description: "Assessment, data sync, and cutover checklist.",
          icon: HardDriveDownload,
          href: "/downloads/baoyun-migration-kit.txt"
        },
        {
          title: "Enterprise Service Consulting",
          version: "Manual enablement",
          description: "A dedicated consultant confirms requirements and enables official access.",
          icon: Headphones,
          href: "/about/#contact-sales"
        }
      ]
    },
    about: {
      title: "Contact Us",
      intro: "Get plans for cloud adoption, migration, managed operations, and dedicated cloud delivery.",
      businessTitle: "Product partnership",
      businessText: "Add a business consultant for migration, managed operations, and dedicated cloud pricing.",
      updatesTitle: "Product updates",
      updatesText: "Follow Baoyun Cloud product news, practices, and security bulletins."
    },
    edition: {
      title: "Choose the right product plan for your needs",
      feature: "Feature",
      standard: "Standard",
      standardBadge: "Free forever",
      professional: "Professional",
      professionalBadge: "One-time license",
      contact: "Contact sales for Professional purchase",
      rows: [
        ["Primary operation slot editing", "Limited", "All"],
        ["Primary app slot editing", "Limited", "All"],
        ["Secondary operation slot editing", "Limited", "All"],
        ["Built-in cloud monitoring", "Included", "Included"],
        ["Auto-start configuration", "Included", "Included"],
        ["Ticker notification", "No", "Yes"],
        ["Background theme switching", "No", "Yes"],
        ["Custom screensaver/dashboard", "No", "Yes"],
        ["Private app priority scan", "No", "Yes"],
        ["1-to-1 technical support", "No", "Yes"],
        ["Key account creative support", "No", "Yes"]
      ]
    }
  },
  ja: {
    meta: {
      title: "宝雲クラウド - 企業向けクラウドと運用代行",
      description:
        "宝雲クラウドは、クラウドサーバー、ストレージ、データベース、セキュリティ、移行支援、運用代行を提供します。"
    },
    brand: "宝雲クラウド",
    legalName: "宝雲クラウドコンピューティング有限公司",
    slogan: "企業のクラウド運用を、より安定・高速・制御しやすく",
    nav: [
      { label: "ホーム", href: "/" },
      { label: "ダウンロード", href: "/download/" },
      { label: "お問い合わせ", href: "/about/" }
    ],
    actions: {
      login: "プラン",
      register: "無料相談",
      download: "今すぐ試す",
      console: "コンソール"
    },
    footer: {
      rights: "© 2026 宝雲クラウドコンピューティング有限公司. All Rights Reserved.",
      filing: "公開前に届出番号と正式な連絡先を差し替えてください"
    },
    home: {
      hero: {
        badge: "主要クラウドとハイブリッドクラウド構成に対応",
        title: "企業向けクラウドコンピューティングと運用代行プラットフォーム",
        subtitle: "クラウドリソースの遠隔管理、弾力的な拡張、セキュリティ点検、コスト最適化を簡単に始められます。",
        primary: "今すぐ試す",
        secondary: "クラウド相談",
        version: "宝雲クラウド"
      },
      ui: {
        title: "成長段階に合わせた複数のクラウドサービスプラン",
        accent: "シンプル、安定、拡張しやすい",
        slides: [
          { title: "弾力的な計算リソース", description: "クラウドサーバー、ロードバランサー、イメージテンプレートを一括提供" },
          { title: "データとバックアップ", description: "オブジェクトストレージ、スナップショット、遠隔バックアップを集中管理" },
          { title: "セキュリティ運用ビュー", description: "監査ログ、リスク点検、セキュリティ基準を見える化" }
        ]
      },
      cloudOps: {
        title: "リソース、権限、監視、アラートを自由にカスタマイズ",
        accent: "複雑さを減らし、専用クラウド基盤を構築",
        cards: [
          { title: "リソース編成", description: "計算、ネットワーク、ストレージを業務別に管理" },
          { title: "権限モデル", description: "部門、プロジェクト、役割ごとにアクセス範囲を分離" },
          { title: "運用ポリシー", description: "アラート、バックアップ、点検タスクを可視化" }
        ]
      },
      atmosphere: {
        title: "クラウドリソースの状態を一画面で把握し、安心して運用",
        accent: "専用の運用ダッシュボードで健全性をすぐ確認",
        features: ["可用性監視", "コスト推移", "セキュリティイベント", "容量予測"]
      },
      tools: {
        title: "クラウドサーバー、ストレージ、データベース、移行ツールに対応",
        accent: "実用的な機能をすべて搭載",
        items: [
          { title: "クラウドサーバー", description: "高可用な計算資源と弾力的な拡張", icon: Server },
          { title: "オブジェクトストレージ", description: "大容量データと静的資産のホスティング", icon: Database },
          { title: "クラウドセキュリティ", description: "基準点検とアクセス監査", icon: ShieldCheck },
          { title: "クラウド移行", description: "評価、同期、切替を伴走支援", icon: CloudUpload }
        ]
      },
      ecosystem: {
        title: "専門チームが開発する企業クラウド製品エコシステム",
        accent: "安定したクラウド体験をあらゆる場所へ",
        products: [
          { title: "宝雲コンソール", description: "リソース、請求、アラートを一元管理", icon: CloudCog },
          { title: "宝雲モニター", description: "メトリクス、ログ、イベントをリアルタイム観測", icon: Radar },
          { title: "宝雲マイグレーション", description: "低リスクで業務をクラウドへ移行", icon: Workflow }
        ]
      },
      b2b: {
        title: "互換性に優れた専門的なクラウド管理バックエンド",
        accent: "法人顧客の迅速な導入と安心運用を支援",
        points: ["パブリック、プライベート、ハイブリッドクラウドに対応", "可視化されたクラウド管理バックエンド", "顧客向け技術サポート"]
      },
      contact: {
        title: "製品連携の相談",
        business: "ビジネス担当を追加して詳しく相談",
        updatesTitle: "製品アップデート",
        updates: "宝雲クラウド公式情報をフォロー"
      }
    },
    download: {
      title: "アプリをダウンロード",
      intro: "宝雲クラウド資料、監視 Agent ガイド、移行ツール資料をダウンロードできます。",
      button: "ダウンロード",
      cards: [
        {
          title: "宝雲コンソール資料",
          version: "製品ホワイトペーパー",
          description: "製品概要、開始手順、構成選定の資料。",
          icon: FileDown,
          href: "/downloads/baoyun-platform-brochure.txt"
        },
        {
          title: "クラウド監視 Agent ガイド",
          version: "Linux / Windows",
          description: "サーバー監視、ログ収集、アラート設定。",
          icon: MonitorDown,
          href: "/downloads/baoyun-agent-guide.txt"
        },
        {
          title: "クラウド移行ツール資料",
          version: "移行支援",
          description: "移行評価、データ同期、切替チェックリスト。",
          icon: HardDriveDownload,
          href: "/downloads/baoyun-migration-kit.txt"
        },
        {
          title: "法人サービス相談",
          version: "担当者対応",
          description: "専任担当が要件を確認し正式権限を発行します。",
          icon: Headphones,
          href: "/about/#contact-sales"
        }
      ]
    },
    about: {
      title: "お問い合わせ",
      intro: "クラウド導入、移行、運用代行、専用クラウド構築についてご相談ください。",
      businessTitle: "製品連携の相談",
      businessText: "ビジネス担当を追加して、移行、運用代行、専用クラウドの見積もりを相談できます。",
      updatesTitle: "製品アップデート",
      updatesText: "宝雲クラウドの製品情報、導入事例、セキュリティ通知を確認できます。"
    },
    edition: {
      title: "ニーズに合わせて最適なプランを選択",
      feature: "機能",
      standard: "標準版",
      standardBadge: "永久無料",
      professional: "プロ版",
      professionalBadge: "買い切りライセンス",
      contact: "プロ版の購入は営業に相談",
      rows: [
        ["トップ運用枠の編集", "限定", "すべて"],
        ["トップアプリ枠の編集", "限定", "すべて"],
        ["次画面運用枠の編集", "限定", "すべて"],
        ["クラウド監視機能", "対応", "対応"],
        ["自動起動設定", "対応", "対応"],
        ["テロップ通知", "非対応", "対応"],
        ["背景テーマ変更", "非対応", "対応"],
        ["カスタムスクリーン/大画面", "非対応", "対応"],
        ["個人アプリ優先検査", "非対応", "対応"],
        ["1対1技術サポート", "非対応", "対応"],
        ["大口顧客向けデザイン支援", "非対応", "対応"]
      ]
    }
  }
} satisfies Record<Locale, {
  meta: { title: string; description: string };
  brand: string;
  legalName: string;
  slogan: string;
  nav: Array<{ label: string; href: string }>;
  actions: { login: string; register: string; download: string; console: string };
  footer: { rights: string; filing: string };
  home: {
    hero: { badge: string; title: string; subtitle: string; primary: string; secondary: string; version: string };
    ui: { title: string; accent: string; slides: Array<{ title: string; description: string }> };
    cloudOps: { title: string; accent: string; cards: Array<{ title: string; description: string }> };
    atmosphere: { title: string; accent: string; features: string[] };
    tools: { title: string; accent: string; items: Feature[] };
    ecosystem: { title: string; accent: string; products: Feature[] };
    b2b: { title: string; accent: string; points: string[] };
    contact: { title: string; business: string; updatesTitle: string; updates: string };
  };
  download: {
    title: string;
    intro: string;
    button: string;
    cards: Array<{ title: string; version: string; description: string; icon: LucideIcon; href: string }>;
  };
  about: {
    title: string;
    intro: string;
    businessTitle: string;
    businessText: string;
    updatesTitle: string;
    updatesText: string;
  };
  edition: {
    title: string;
    feature: string;
    standard: string;
    standardBadge: string;
    professional: string;
    professionalBadge: string;
    contact: string;
    rows: string[][];
  };
}>;

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}

export const stats = {
  zh: [
    { value: "99.95%", label: "核心服务可用性目标" },
    { value: "7x24", label: "运维响应与监控" },
    { value: "3步", label: "完成迁移评估" }
  ],
  en: [
    { value: "99.95%", label: "Core service availability target" },
    { value: "7x24", label: "Operations response and monitoring" },
    { value: "3 steps", label: "Complete migration assessment" }
  ],
  ja: [
    { value: "99.95%", label: "主要サービス可用性目標" },
    { value: "7x24", label: "運用応答と監視" },
    { value: "3段階", label: "移行評価を完了" }
  ]
} satisfies Record<Locale, Array<{ value: string; label: string }>>;

export const editionCards = [
  { icon: Gauge },
  { icon: Boxes },
  { icon: Sparkles }
];

export const visualIcons = [Cpu, Database, ShieldCheck, BarChart3, Network, CloudDownload, Palette, LockKeyhole];
