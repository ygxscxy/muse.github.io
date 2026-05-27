# Tasks

- [x] Task 1: 扩展代码块语法高亮语言支持
  - [x] SubTask 1.1: 使用 lowlight 的官方语言包替换自定义语法高亮规则，注册常用编程语言（java, go, rust, c, cpp, ruby, php, swift, kotlin, r, matlab, yaml, xml, toml, dockerfile, git, lua 等）
  - [x] SubTask 1.2: 更新代码块组件中的语言列表（LANGUAGES 数组）
  - [x] SubTask 1.3: 验证已有语言（JS/TS/Python/JSON/HTML/CSS/Shell/SQL/Markdown）高亮正常

- [x] Task 2: 新增文件类型检测工具函数
  - [x] SubTask 2.1: 创建 `src/renderer/utils/fileType.ts`，定义文件类型枚举（markdown, text, code, excel, word, ppt, xmind, image, other）
  - [x] SubTask 2.2: 实现 `detectFileType(filePath: string)` 函数，根据文件扩展名返回文件类型
  - [x] SubTask 2.3: 定义各类文件支持的扩展名映射表

- [x] Task 3: 新增文件预览 IPC 处理器（主进程）
  - [x] SubTask 3.1: 在 `src/shared/types.ts` 中新增 `FilePreviewRequest`、`FilePreviewResponse` 类型和 `IPC_CHANNELS.FILE.PREVIEW` 通道
  - [x] SubTask 3.2: 在 `src/main/ipc/file.ts` 中注册 `file:preview` IPC handler，读取文件为 ArrayBuffer 返回给渲染进程

- [x] Task 4: 实现 Excel 文件预览组件
  - [x] SubTask 4.1: 安装 `xlsx` (SheetJS) 依赖
  - [x] SubTask 4.2: 创建 `src/renderer/components/FilePreview/ExcelPreview.tsx` 组件
  - [x] SubTask 4.3: 实现多 sheet 切换功能
  - [x] SubTask 4.4: 使用 antd Table 渲染 Excel 数据

- [x] Task 5: 实现 Word 文件预览组件
  - [x] SubTask 5.1: 安装 `mammoth` 依赖
  - [x] SubTask 5.2: 创建 `src/renderer/components/FilePreview/WordPreview.tsx` 组件
  - [x] SubTask 5.3: 使用 mammoth 将 .docx 转换为 HTML 并渲染

- [x] Task 6: 实现 PPT 文件预览组件
  - [x] SubTask 6.1: 安装 `pptx2json` 或使用自定义 PPTX 解析（PPTX 本质是 zip 包含 XML）
  - [x] SubTask 6.2: 创建 `src/renderer/components/FilePreview/PptPreview.tsx` 组件
  - [x] SubTask 6.3: 实现逐页幻灯片预览，支持翻页导航

- [x] Task 7: 实现 XMind 文件预览组件
  - [x] SubTask 7.1: 分析 XMind 文件格式（zip 包含 content.json）
  - [x] SubTask 7.2: 创建 `src/renderer/components/FilePreview/XmindPreview.tsx` 组件
  - [x] SubTask 7.3: 使用递归树形组件渲染思维导图结构

- [x] Task 8: 创建统一文件预览面板组件
  - [x] SubTask 8.1: 创建 `src/renderer/components/FilePreview/index.tsx` 主组件
  - [x] SubTask 8.2: 根据文件类型动态加载对应的预览子组件
  - [x] SubTask 8.3: 添加加载状态和错误处理 UI

- [x] Task 9: 修改 App.tsx 集成预览与编辑切换逻辑
  - [x] SubTask 9.1: 修改 `loadFileIntoEditor` 逻辑，根据文件类型决定加载预览还是编辑器
  - [x] SubTask 9.2: 修改拖拽文件逻辑 `handleDropFiles`，支持预览文件类型
  - [x] SubTask 9.3: 添加状态 `previewFile` 和 `previewFileType` 管理当前预览文件
  - [x] SubTask 9.4: 渲染条件：有预览文件时显示 FilePreview，否则显示 Editor

- [x] Task 10: 更新侧边栏文件图标
  - [x] SubTask 10.1: 修改 `src/renderer/components/Sidebar/FileTreeNode.tsx`
  - [x] SubTask 10.2: 根据文件类型显示不同图标（使用 lucide-react 图标）
  - [x] SubTask 10.3: 点击非 md 文件时触发预览而非编辑

- [x] Task 11: 安装新增依赖并验证整体功能
  - [x] SubTask 11.1: 安装 `xlsx`、`mammoth`、`jszip` 依赖
  - [x] SubTask 11.2: 运行 `npm run lint` 和 `npm run typecheck` 验证无新增错误
  - [x] SubTask 11.3: 测试各类文件打开、预览、高亮功能（通过手动测试验证）

# Task Dependencies

- Task 2 是基础，Task 9、Task 10 依赖 Task 2
- Task 3 是基础，Task 4、5、6、7 依赖 Task 3
- Task 4、5、6、7 可以并行开发
- Task 8 依赖 Task 4、5、6、7 完成
- Task 9 依赖 Task 2、Task 8 完成
- Task 1 可以独立并行开发
- Task 10 依赖 Task 2 完成
- Task 11 是最后验证任务，依赖所有其他任务
