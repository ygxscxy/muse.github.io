# Tasks
- [x] Task 1: 初始化 VitePress 项目 — 在 `electron-app-web/` 根目录下初始化 VitePress 项目，配置 TypeScript 支持
  - [x] 执行 `npm create vitepress` 初始化项目
  - [x] 选择 `docs/` 作为源目录
  - [x] 确认 `docs/.vitepress/config.ts` 配置文件生成正确
  - [x] 配置站点基本信息（title、description、themeConfig 等）

- [x] Task 2: 编写首页宣传内容（index.md）— 按 frontend-skill 指导编写 Hero + Support + Detail + Final CTA 四段式落地页
  - [x] 实现 Hero 区域：品牌名 + 副标题 + CTA 按钮 + 编辑器截图背景
  - [x] 实现核心特性区域：富文本编辑、文件管理、个性化设置三个特性卡片
  - [x] 实现高级特性区域：代码高亮、数学公式、Mermaid 图表、任务列表、表格、图片拖放等功能网格
  - [x] 实现下载 CTA 区域：下载引导 + 跨平台提示 + GitHub 链接
  - [x] 编写页脚信息

- [x] Task 3: 配置 VitePress 主题与自定义样式 — 在 `.vitepress/theme/` 下编写自定义样式，匹配品牌视觉
  - [x] 创建 `.vitepress/theme/index.ts` 自定义主题
  - [x] 创建自定义 CSS 样式文件，设置深色主题基调 + 蓝色强调色
  - [x] 配置响应式布局，适配移动端

- [x] Task 4: 实现交互动画 — 实现 Hero 淡入动画和特性区域的滚动触发动画
  - [x] Hero 区域品牌文字和 CTA 使用 CSS animation 实现淡入
  - [x] 特性卡片使用 IntersectionObserver 实现滚动渐入上浮效果

- [x] Task 5: 准备视觉素材 — 从实际运行的桌面应用中截取高质量编辑器界面截图
  - [x] 启动 Electron 应用，打开包含多种内容的 Markdown 文件
  - [x] 截取完整界面（含侧边栏、工具栏、编辑区、状态栏）
  - [x] 截取各功能特写（代码高亮、数学公式、Mermaid 图表等）
  - [x] 将截图放入 `docs/public/screenshots/` 目录

- [ ] Task 6: 验证与构建 — 运行 `npm run docs:build` 确保构建成功，本地预览确认效果
  - [ ] 运行构建命令，修复任何构建错误
  - [ ] 本地预览，检查所有区域显示正常
  - [ ] 确认响应式布局在移动端工作正常

# Task Dependencies
- [Task 5 截图] 需在本地运行 Electron 应用后完成
- [Task 6 验证] 依赖 Task 1-5 全部完成