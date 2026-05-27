# 修复粘贴图片 base64 存储 Spec

## Why
当前粘贴来自剪贴板的图片（如截图工具复制的图片）时，由于没有本地文件路径，图片以 base64 格式直接嵌入 Markdown 文件。这会导致 Markdown 文件体积膨胀，不利于管理和版本控制。

## What Changes
- 新增 IPC handler：`file:saveImageFromBase64`，将 base64 图片数据保存到本地文件
- 修改 `handlePaste` 逻辑：粘贴的图片统一保存到指定目录，使用相对路径引用
- 修改 `handleDrop` 逻辑：拖拽的图片如果没有路径也统一保存

## Impact
- 新增 IPC 通道和类型定义
- 修改 `src/renderer/components/Editor/index.tsx` 的粘贴/拖拽处理逻辑
- 修改 `src/main/ipc/file.ts` 新增图片保存 handler
- 修改 `src/preload/index.ts` 暴露新的 API

## ADDED Requirements

### Requirement: 粘贴图片文件化
系统 shall 将所有粘贴的图片保存到本地文件目录，而非以 base64 嵌入。

#### Scenario: 粘贴截图工具复制的图片
- **WHEN** 用户使用截图工具复制图片后粘贴到编辑器
- **THEN** 图片保存到当前项目 `images/` 目录，Markdown 中使用相对路径引用

#### Scenario: 粘贴剪贴板中的图片文件
- **WHEN** 用户从剪贴板粘贴图片文件
- **THEN** 图片保存到当前项目 `images/` 目录，Markdown 中使用相对路径引用

### Requirement: 图片保存优先级
图片保存目录优先级：
1. 用户配置的 `imageSavePath`
2. 当前打开的文件夹路径
3. 当前文件所在目录

## MODIFIED Requirements

### Requirement: 拖拽图片处理
保持现有拖拽有路径图片的逻辑不变，新增拖拽无路径图片时的保存逻辑。

## REMOVED Requirements

无
