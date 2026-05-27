# Tasks

- [x] Task 1: 初始化 VitePress 和项目配置
  - [x] 安装 VitePress 依赖 (`vitepress`, `vue`)
  - [x] 创建 `docs/` 目录结构
  - [x] 创建 `docs/.vitepress/config.mts` 站点配置（站点元信息、导航、主题色）
  - [x] 添加 `package.json` scripts：`docs:dev`、`docs:build`、`docs:preview`
  - [x] 创建 `docs/public/` 静态资源目录

- [x] Task 2: 创建 Landing 页面（首页）
  - [x] 创建 `docs/index.md` 作为首页入口
  - [x] 创建自定义首页布局组件 `docs/.vitepress/theme/LandingLayout.vue`
  - [x] Hero 区：全屏编辑器截图背景 + Muse 品牌 + 标题 + CTA 下载按钮
  - [x] Features 区：3 个核心能力展示（WYSIWYG 实时渲染、代码/公式/图表扩展、文件管理）
  - [x] Demo 区：CSS 编辑器界面模拟展示
  - [x] 最终 CTA 区：下载按钮 + 平台选择
  - [x] 集成 CSS 动画实现滚动浮现动效

- [x] Task 3: 创建产品文档页面
  - [x] 创建 `docs/guide/index.md` 文档入口
  - [x] 创建 `docs/guide/getting-started.md` 快速开始
  - [x] 创建 `docs/guide/features.md` 功能指南
  - [x] 创建 `docs/guide/shortcuts.md` 快捷键列表
  - [x] 配置文档侧边导航 `themeConfig.sidebar`

- [x] Task 4: 创建下载页面
  - [x] 创建 `docs/download.md` 下载页面
  - [x] 展示 Windows / macOS / Linux 三个平台下载入口
  - [x] 显示当前版本和发布日期

- [x] Task 5: 自定义主题和样式
  - [x] 创建 `docs/.vitepress/theme/index.ts` 主题入口
  - [x] 创建 `docs/.vitepress/theme/style.css` 自定义样式（深色背景、Inter 字体、蓝色强调色、渐变暗角）
  - [x] 覆盖 VitePress 默认 CSS 变量
  - [x] 创建 `docs/.vitepress/theme/LandingLayout.vue` 自定义首页布局组件
  - [x] 确保 full-bleed hero、无卡片布局、克制配色

- [x] Task 6: 构建和验证
  - [x] 运行 `docs:build` 确保构建无报错
  - [x] 运行 `docs:preview` 预览验证所有页面
  - [x] 验证设计规范符合 frontend-skill 要求

# Task Dependencies

- [Task 2] 依赖 [Task 1]（需先初始化 VitePress）
- [Task 3] 依赖 [Task 1]
- [Task 4] 依赖 [Task 1]
- [Task 5] 依赖 [Task 1]
- [Task 6] 依赖 [Task 2]、[Task 3]、[Task 4]、[Task 5]