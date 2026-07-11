# AGENTS.md

## 项目概览

一林个人作品集与品牌展示网站。单页长滚动结构，白底极简 + 浅蓝点缀风格，支持中/英双语切换。

### 版本技术栈

- **Framework**: Next.js 16 (App Router)
- **Core**: React 19
- **Language**: TypeScript 5 (strict)
- **UI 组件**: shadcn/ui (Radix UI)
- **Styling**: Tailwind CSS 4
- **字体**: DM Sans (Google Fonts .cn 域)
- **图标**: Lucide React

## 目录结构

```
├── docs/
│   └── prd.md              # 产品需求文档
├── DESIGN.md               # 设计规范（配色、字体、动效、禁忌）
├── src/
│   ├── app/
│   │   ├── layout.tsx      # 根布局（I18nProvider、FontPreload、元信息）
│   │   ├── page.tsx        # 首页（组装所有板块）
│   │   └── globals.css     # 全局样式（CSS 变量、fade-up 动画、字体引入）
│   ├── components/
│   │   ├── ui/             # shadcn/ui 组件库
│   │   ├── navbar.tsx      # 固定顶部导航栏（透明→白底、移动端汉堡菜单）
│   │   ├── hero.tsx        # Hero 首屏（姓名、定位语、CTA 按钮、装饰 blob）
│   │   ├── about.tsx       # 关于我（简介段落）
│   │   ├── experience.tsx  # 工作经历（垂直时间线）
│   │   ├── skills.tsx      # 技能专长（分组标签）
│   │   ├── projects.tsx    # 项目作品集（2列网格卡片）
│   │   ├── contact.tsx     # 联系方式（邮箱按钮 + 社交图标）
│   │   ├── footer.tsx      # 页脚
│   │   └── font-preload.tsx # Google Fonts preconnect
│   ├── hooks/
│   │   └── use-fade-in.ts  # Intersection Observer 滚动渐入 Hook
│   ├── i18n/
│   │   ├── provider.tsx    # I18nContext + Provider + useI18n Hook
│   │   ├── zh.json         # 中文语言包
│   │   └── en.json         # 英文语言包
│   └── lib/
│       └── utils.ts        # cn() 工具函数
```

## 构建和测试命令

- 开发：`pnpm dev`
- 构建：`pnpm build`
- 启动：`pnpm start`
- TypeScript 检查：`pnpm ts-check`
- ESLint：`pnpm lint`
- ESLint（静默）：`pnpm lint:build`
- 全量验证：`pnpm validate`

## 编码规范

- TypeScript strict 模式，禁止隐式 any
- 组件使用 'use client' 指令（因 i18n Context 需要）
- 样式使用 Tailwind CSS 类名，自定义颜色通过 CSS 变量（`--color-blue-accent` 等）
- 国际化文本全部放 `src/i18n/zh.json` 和 `src/i18n/en.json`，组件通过 `useI18n()` 读取
- 动效使用 `useFadeIn` Hook + CSS `.fade-up` / `.visible` 类

## 设计关键约束

- 白底为主，浅蓝点缀（`#E8F4FD` / `#4A90D9`）
- 禁止进度条、头像、紫色渐变、自动轮播、全屏深色背景
- 内容最大宽度 `max-w-4xl`，板块间距 `py-24 md:py-32`
- 详细设计规范见 `DESIGN.md`
