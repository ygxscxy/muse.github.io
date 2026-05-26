# Muse VitePress 产品官网 Spec

## Why

桌面 Markdown 编辑器 Muse 目前没有产品介绍网站。潜在用户无法了解产品功能、获取下载或查阅文档。需要建立一个基于 VitePress 的静态产品官网，展示产品定位、核心功能、下载渠道和使用文档。

## Visual Thesis

克制、深邃、编辑器的质感。深色背景搭配微光效，让 Markdown 内容本身成为视觉主角。类似 Linear 与 Stripe 文档页的结合——干净、信息密度高、界面截图为视觉锚点。

## Content Plan

| 区域 | 职责 | 视觉主语 |
|------|------|----------|
| **Hero** | 品牌宣告 + 一句话价值 + 下载 | 全屏编辑器界面截图，标题叠压在上方暗区 |
| **Features** | 展示 3 个核心能力 | 每个 feature 对应一个界面截图/示意图 |
| **Demo** | 动态度展示 WYSIWYG 体验 | 视频或 GIF 循环播放 |
| **CTA** | 立即下载 | 平台选择按钮 + 版本号 |

## What Changes

- 在项目根目录初始化 VitePress
- 创建 Landing 页面（Hero + Features + Demo + CTA）
- 创建产品文档页面（快速开始、用户指南、API 配置）
- 配置 VitePress 主题色、字体、布局适配 frontend-skill 设计规范
- 配置导航和页脚
- 集成 Framer Motion 入场动画（hero 文字渐入、feature 卡片滚动浮现）
- 确保 full-bleed hero、无卡片式布局、克制配色

## Impact

- 新增 `docs/` 目录（VitePress 站点）
- 新增 `package.json` scripts：`docs:dev`、`docs:build`、`docs:preview`

## ADDED Requirements

### Requirement: 产品 Landing 页面

The system SHALL provide一个完整的着陆页作为网站首页。

#### Scenario: 访问首页

- **WHEN** 用户访问 `/`
- **THEN** 展示 full-bleed hero：Muse 品牌标识 + 标题 "A Modern Markdown Editor" + 简短描述 + "Download" CTA
- **AND** hero 背景为编辑器全屏截图，边缘无 padding
- **AND** 页面包含 Features 区（3 个核心亮点）、Demo 区（编辑器动态度展示）、Final CTA 区（下载按钮）
- **AND** 页面滚动时触发文字/卡片渐入动画

### Requirement: 产品文档

The system SHALL提供基础产品文档。

#### Scenario: 访问文档

- **WHEN** 用户访问 `/guide/` 或 `/guide/getting-started`
- **THEN** 展示 VitePress 默认文档布局：左侧导航 + 右侧内容区
- **AND** 涵盖：快速开始、功能指南（WYSIWYG、代码块、数学公式、Mermaid 图表、表格）、配置说明、快捷键列表

### Requirement: 下载页面

The system SHALL提供跨平台下载入口。

#### Scenario: 下载页面

- **WHEN** 用户访问 `/download`
- **THEN** 显示 Windows、macOS、Linux 三个平台下载按钮
- **AND** 显示当前版本号和发布日期

### Requirement: 设计规范

The SHALL遵循 frontend-skill 设计准则。

- **SC01** Hero full-bleed：图片铺满首屏无容器内边距，仅内层文字列约束宽度
- **SC02** 无卡片布局：默认不使用卡片容器，用分割线/留白/列表替代
- **SC03** 配色克制：最多 1 个强调色（蓝色 `#3b82f6`），背景使用深色系
- **SC04** 字体：正文 Inter, 标题 Inter + 回退系统字体
- **SC05** 动画：至少 3 处动效—hero 文字入场、feature 滚动浮现、CTA hover 动效

### Requirement: VitePress 配置

The SHALL配置 VitePress 站点元数据。

- **SEO**: 配置 `title`、`description`、`og:image`
- **主题色**: 自定义 CSS 变量覆盖 VitePress 默认色
- **导航**: 首页、功能、下载、文档

## MODIFIED Requirements

N/A

## REMOVED Requirements

N/A