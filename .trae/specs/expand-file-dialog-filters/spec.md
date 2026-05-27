# 扩展文件对话框支持预览类型 Spec

## Why
当前打开文件对话框 (`dialog:openFile`) 的 filters 仅配置了 Markdown 文件（`.md`），导致用户无法通过文件对话框选择 Excel、Word、PPT、XMind 等可预览文件，也无法选择代码文件进行编辑。

## What Changes
- 修改 `dialog:openFile` 的 filters 配置，增加所有可预览和可编辑文件类型
- 保持 `All Files` 作为兜底选项

## Impact
- 修改 `src/main/ipc/dialog.ts` 中 `OPEN_FILE` handler 的 filters 配置

## ADDED Requirements

### Requirement: 文件打开对话框支持多类型
文件打开对话框 shall 支持选择以下类型文件：
- Markdown: .md, .markdown
- 预览文件: .xlsx, .xls, .docx, .pptx, .xmind
- 文本/代码: .txt, .js, .jsx, .ts, .tsx, .py, .java, .go, .rs, .c, .cpp, .rb, .php, .swift, .kt, .r, .yaml, .yml, .json, .xml, .toml, .css, .scss, .less, .html, .sql, .sh, .bash, .lua, .log, .csv

#### Scenario: 通过对话框打开 Excel 文件
- **WHEN** 用户点击"打开文件"菜单
- **AND** 在对话框中选择 .xlsx 文件
- **THEN** 文件成功被选择并进入预览模式

#### Scenario: 通过对话框打开代码文件
- **WHEN** 用户点击"打开文件"菜单
- **AND** 在对话框中选择 .js 文件
- **THEN** 文件成功被选择并进入编辑模式

## MODIFIED Requirements

### Requirement: 文件打开对话框 filters
[dialog.ts] 修改 `OPEN_FILE` handler 的 filters 配置，扩展为多类型支持。

## REMOVED Requirements

无
