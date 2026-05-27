# Checklist

## 初始化与配置
- [x] VitePress 依赖已安装，`docs:dev` / `docs:build` / `docs:preview` 脚本可用
- [x] `docs/.vitepress/config.mts` 包含完整站点元信息（title、description、og:image）
- [x] 导航栏配置：首页、功能、下载、文档
- [x] `docs/public/` 目录已创建，静态资源就绪

## Landing 首页
- [x] Hero full-bleed：深色渐变背景铺满首屏，无容器内边距，仅文字列约束宽度
- [x] 品牌标识 "Muse" 在首屏最突出
- [x] 标题 + 简短描述 + CTA 下载按钮清晰可见
- [x] Features 区展示 3 个核心能力（WYSIWYG、代码/公式/图表、文件管理）
- [x] Demo 区有 CSS 编辑器界面模拟展示
- [x] 最终 CTA 区包含下载按钮和平台选择
- [x] 页面滚动时至少 3 处动效（Hero fadeInUp、Feature 滚动浮现、CTA 悬停）

## 文档
- [x] `/guide/` 路径可访问，HTTP 200
- [x] 快速开始页面存在，HTTP 200
- [x] 功能指南涵盖：WYSIWYG、代码块、数学公式、Mermaid、表格
- [x] 快捷键列表页面存在，HTTP 200

## 下载页
- [x] Windows / macOS / Linux 三个平台下载按钮
- [x] 显示当前版本号 v1.0.0 和发布日期

## 主题与样式
- [x] 深色主题为主背景（`#0a0a0f` / `#12121a`）
- [x] 强调色使用蓝色 `#3b82f6`
- [x] 字体使用 Inter（通过 Google Fonts 加载）
- [x] 无卡片式布局（cardless）
- [x] 自定义 CSS 覆盖 VitePress 默认变量生效

## 构建验证
- [x] `vitepress build` 无报错（5.86s 完成）
- [x] `vitepress preview` 所有页面可正常浏览（6 个页面全部返回 HTTP 200）