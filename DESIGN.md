# DESIGN.md

## 气质与意象
清晨画室的白墙——空气通透，光线均匀，只有一束浅蓝从天窗斜落。信息像挂在墙上的作品，每件都有足够的呼吸空间。访客的第一感受是"干净、讲究"，而非"炫技"。

## 视觉策略
- 摄影方向：不使用照片（无头像），以排版和几何装饰承载视觉。
- 图形语言：右侧浅蓝渐变流体 blob 作为 Hero 唯一装饰元素，其余板块纯靠留白与排版层级制造节奏。

## 配色方案

| 用途 | Token | 色值 | 意象来源 |
|------|-------|------|----------|
| 主背景 | --background | `#FFFFFF` | 画室白墙 |
| 浅蓝点缀 | --accent-blue-soft | `#E8F4FD` | 天窗透进来的光 |
| 强调色 | --accent-blue | `#4A90D9` | 晴空一角的蓝 |
| 主文字 | --foreground | `#1A1A2E` | 墨色铅笔线条 |
| 次要文字 | --muted | `#6B7280` | 铅笔淡稿 |
| 卡片/分割 | --border | `#E5E7EB` | 画框边缘 |

## 字体排版
- 英文展示字体：DM Sans（几何感、现代、不俗），通过 Google Fonts .cn 域引入
- 中文正文：系统字体栈（PingFang SC → Microsoft YaHei → sans-serif），不额外加载中文字体
- 标题节奏：板块标题 `text-3xl font-bold`，Hero 姓名 `text-5xl font-bold tracking-tight`
- 正文：`text-base leading-relaxed`，行高 1.625
- 内容最大宽度：`max-w-4xl`（896px），居中

## 动效与交互
- 运动性格：沉稳、克制，如翻动画册
- 板块进入：fade-up（translateY 20→0, opacity 0→1, 600ms ease-out）
- 工作经历逐条：stagger 100ms
- 项目卡片 hover：translateY(-4px) + shadow 加深, 200ms
- 导航栏滚动：透明→白底, 300ms
- 语言切换：内容淡入淡出, 200ms
- 缓动曲线：ease-out 为主，hover 用 ease

## 设计禁忌
- 禁止进度条展示技能
- 禁止头像/照片
- 禁止紫色渐变
- 禁止自动轮播
- 禁止全屏深色背景
- 禁止过度装饰性图标或插画
- 禁止使用 Inter / Roboto / Arial 作为主字体
