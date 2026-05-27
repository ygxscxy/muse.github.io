# 文件预览与代码自动上色 Spec

## Why
Muse 作为 Markdown 桌面应用，当前仅支持 `.md` 文件的编辑。用户需要：
1. 查看 Excel、Word、PPT、XMind 等办公文档内容，无需打开其他应用
2. 编辑 `.md`、`.txt`、`.js` 等文本文件时，代码块自动语法高亮

## What Changes
- 新增文件预览面板，支持 `.xlsx/.xls`、`.docx`、`.pptx`、`.xmind` 格式
- 扩展代码块语法高亮支持更多语言（当前已有 JS/TS/Python/JSON/HTML/CSS/Shell/SQL/Markdown）
- 新增拖拽和文件对话框打开非 Markdown 文件的能力
- 文件预览与编辑器互斥：预览文件时显示预览面板，编辑文件时显示编辑器

## Impact
- 新增依赖：
  - `xlsx` (SheetJS) — Excel 文件解析与渲染
  - `mammoth` — Word (.docx) 转 HTML
  - `pptx2html` 或自定义 PPTX 解析 — PowerPoint 预览
  - 自定义 XMind 解析器 — XMind (.xmind) 预览
- 新增组件：`FilePreview` 预览面板
- 修改组件：`App.tsx`（路由逻辑）、`Sidebar`（文件类型过滤）
- 修改 IPC：`file.ts`（新增文件读取方法）

## ADDED Requirements

### Requirement: Office 文件预览
系统 shall 提供文件预览能力，支持常见办公文档格式在应用内查看。

#### Scenario: 打开 Excel 文件
- **WHEN** 用户通过文件对话框或拖拽打开 `.xlsx` 或 `.xls` 文件
- **THEN** 应用显示预览面板，渲染 Excel 表格内容（含多 sheet 切换）

#### Scenario: 打开 Word 文件
- **WHEN** 用户通过文件对话框或拖拽打开 `.docx` 文件
- **THEN** 应用显示预览面板，渲染 Word 文档的富文本内容

#### Scenario: 打开 PowerPoint 文件
- **WHEN** 用户通过文件对话框或拖拽打开 `.pptx` 文件
- **THEN** 应用显示预览面板，按幻灯片逐页渲染内容

#### Scenario: 打开 XMind 文件
- **WHEN** 用户通过文件对话框或拖拽打开 `.xmind` 文件
- **THEN** 应用显示预览面板，以思维导图树形结构展示内容

### Requirement: 代码块自动上色扩展
系统 shall 支持更多编程语言的语法高亮，并在文件打开时自动识别语言。

#### Scenario: 打开 .js 文件时自动高亮
- **WHEN** 用户打开 `.js` 文件
- **THEN** 代码块自动识别为 JavaScript 语言并高亮

#### Scenario: 打开 .py 文件时自动高亮
- **WHEN** 用户打开 `.py` 文件
- **THEN** 代码块自动识别为 Python 语言并高亮

#### Scenario: 手动切换语言
- **WHEN** 用户在代码块右上角选择语言下拉框
- **THEN** 代码块立即以新语言重新高亮

### Requirement: 文件预览与编辑器切换
系统 shall 根据文件类型自动切换显示模式。

#### Scenario: 预览模式
- **WHEN** 打开非文本文件（Excel/Word/PPT/XMind）
- **THEN** 显示预览面板，隐藏编辑器

#### Scenario: 编辑模式
- **WHEN** 打开 Markdown 或纯文本文件
- **THEN** 显示编辑器，隐藏预览面板

## MODIFIED Requirements

### Requirement: 文件拖拽与打开
[App.tsx] 修改文件拖拽和打开逻辑，支持更多文件类型：
- 拖拽 `.xlsx`、`.xls`、`.docx`、`.pptx`、`.xmind` 时触发预览
- 拖拽 `.md`、`.txt`、`.js`、`.ts`、`.py` 等文本文件时触发编辑

### Requirement: 侧边栏文件树
[Sidebar] 文件树应显示文件类型图标，区分不同文件类型（Markdown、Excel、Word、PPT、XMind、代码文件等）。

## REMOVED Requirements

无
