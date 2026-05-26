# 桌面端应用宣传落地页 Spec

## Why

该 Electron 桌面端 Markdown 编辑器已完成开发，需要一个高质量的营销宣传页面来展示产品价值、吸引用户下载和使用。该页面使用 VitePress 构建，部署为静态站点。

## Visual Thesis

干净、专业、留白有呼吸感，以深色编辑器界面截图为主视觉锚点，展现"简洁、高效"的产品气质。采用深色主题基调以匹配代码编辑器用户群体的审美偏好，蓝色作为强调色。

## Content Plan

1. **Hero** — 产品品牌名 + 一句话价值主张 + CTA + 全幅编辑器界面截图
2. **Support** — 三大核心能力：富文本编辑、文件管理、个性化设置
3. **Detail** — 高级特性展示：代码语法高亮、数学公式渲染、Mermaid 图表、任务列表、表格编辑
4. **Final CTA** — 下载引导 + GitHub 仓库链接

## Interaction Thesis

1. Hero 区域品牌文字与 CTA 的优雅淡入入场动画
2. 特性区块随滚动视口触发的渐入上浮效果
3. 编辑器截图在 hover 时的微妙上浮与阴影变化

## What Changes

- 在 `electron-app-web` 根目录下初始化 VitePress 项目
- 编写落地页核心内容与布局
- 配置 VitePress 主题与样式，匹配品牌视觉
- 生成编辑器界面截图作为视觉素材
- 配置部署相关文件

## Impact

- Affected specs: 无现有 spec 受影响
- Affected code: `electron-app-web/` 目录下的 VitePress 配置与 Markdown 源文件

---

## ADDED Requirements

### Requirement: VitePress 项目初始化

The system SHALL 在 `electron-app-web/` 根目录初始化一个 VitePress 项目，使用默认主题 + 自定义样式。

#### Scenario: 安装与配置
- **WHEN** 执行 `npm create vitepress` 初始化
- **THEN** 生成 `docs/` 目录结构（或自定义目录），包含 `.vitepress/config.ts` 配置文件

### Requirement: 落地页 Hero 区域

The system SHALL 实现一个全幅 Hero 区域，包含品牌标识、标题、副标题和 CTA 按钮。

#### Scenario: 桌面端展示
- **WHEN** 用户访问落地页
- **THEN** Hero 区域显示"Markdown Editor"品牌名 + "简洁、高效的 Markdown 编辑器"副标题 + "立即下载"和"了解更多"两个 CTA 按钮 + 编辑器全屏截图作为视觉背景

#### Scenario: 入场动画
- **WHEN** 页面加载完成
- **THEN** 品牌文字和 CTA 以淡入方式入场（使用 CSS animation 或 VitePress 内置过渡）

### Requirement: 核心特性展示区域

The system SHALL 展示应用的三大核心能力。

#### Scenario: 特性卡片展示
- **WHEN** 用户滚动到特性区域
- **THEN** 展示以下三个特性卡片：
  1. 富文本编辑 — 基于 Tiptap 的所见即所得编辑器，支持 Markdown 实时预览
  2. 文件管理 — 内置文件浏览器，支持文件夹打开、文件创建/重命名/删除
  3. 个性化设置 — 深色/浅色主题、可调节字体大小和行高

#### Scenario: 滚动动画
- **WHEN** 卡片进入视口
- **THEN** 卡片以渐入上浮动画出现

### Requirement: 高级特性展示区域

The system SHALL 展示应用的高级专业功能。

#### Scenario: 功能网格展示
- **WHEN** 用户滚动到高级特性区域
- **THEN** 以网格形式展示以下功能项，每项包含图标和简短描述：
  1. 代码语法高亮 — 支持多种编程语言
  2. 数学公式 — KaTeX 渲染，支持行内和块级公式
  3. Mermaid 图表 — 流程图、时序图等
  4. 任务列表 — 嵌套任务列表
  5. 表格编辑 — 可调整列宽的表格
  6. 图片拖放 — 拖放插入图片

### Requirement: 下载与行动号召区域

The system SHALL 提供最终的行动号召区域，引导用户下载或访问项目仓库。

#### Scenario: CTA 底部区域
- **WHEN** 用户滚动到页面底部
- **THEN** 显示"开始使用 Markdown Editor"标题 + "支持 Windows / macOS / Linux"跨平台提示 + GitHub 仓库链接

### Requirement: 页脚信息

The system SHALL 在页面底部显示版权信息和相关链接。

#### Scenario: 页脚展示
- **WHEN** 用户查看页面底部
- **THEN** 显示版权年份、作者信息和项目许可证信息

### Requirement: 响应式设计

The system SHALL 适配桌面端和移动端不同屏幕尺寸。

#### Scenario: 移动端适配
- **WHEN** 在手机/平板设备上访问
- **THEN** 布局自动调整为单列，Hero 区域内容居中，字体大小和间距自适应

### Requirement: 应用截图生成

The system SHALL 为宣传页面提供真实的编辑器界面截图作为视觉素材。

#### Scenario: 截图获取
- **WHEN** 构建宣传页面时
- **THEN** 从实际运行的桌面应用中截取高质量的编辑器界面截图，包含：
  1. Hero 区域用：编辑器打开一个 Markdown 文件的完整界面（含侧边栏、工具栏、编辑区）
  2. 特性区域用：编辑器各功能特写截图

---

## MODIFIED Requirements

无

---

## REMOVED Requirements

无