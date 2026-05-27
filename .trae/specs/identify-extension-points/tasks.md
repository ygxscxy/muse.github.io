# 任务列表

## 阶段一：代码质量修复

- [ ] Task 1: 修复 ESLint 错误（12 个）
  - [ ] SubTask 1.1: 修复导入路径问题（5 处 `.js` 改 `.ts` 或添加 ESLint 配置）
  - [ ] SubTask 1.2: 移除未使用的 `hljs` 导入（codeBlock.tsx 9 处）
  - [ ] SubTask 1.3: 移除未使用的 `onSaveAs` prop（Toolbar/index.tsx）
  - [ ] SubTask 1.4: 修复 `preload/index.ts` 中的 `any` 类型
  - [ ] SubTask 1.5: 移除不必要的分号（menu/index.ts:159）
  - [ ] SubTask 1.6: 移除不必要的类型注解（helpers.ts:10）

- [ ] Task 2: 修复路径处理跨平台兼容性
  - [ ] SubTask 2.1: 使用 `path.dirname()` 替代手动字符串分割（App.tsx）
  - [ ] SubTask 2.2: 修复 Sidebar/index.tsx 中的 `getParentPath()` 函数
  - [ ] SubTask 2.3: 全局搜索并修复所有硬编码路径分隔符

- [ ] Task 3: 修复 Mermaid 渲染 ID 问题
  - [ ] SubTask 3.1: 使用稳定 ID 生成策略（基于内容 hash 或节点 ID）
  - [ ] SubTask 3.2: 确保 mermaid.render() 使用唯一且稳定的 ID

## 阶段二：核心功能增强

- [ ] Task 4: 实现自动保存功能
  - [ ] SubTask 4.1: 在 settingsStore 中添加 autoSaveEnabled 和 autoSaveInterval 配置
  - [ ] SubTask 4.2: 实现基于防抖的自动保存逻辑
  - [ ] SubTask 4.3: 在设置面板启用自动保存开关和间隔配置
  - [ ] SubTask 4.4: 添加自动保存状态指示器

- [ ] Task 5: 实现未保存更改警告
  - [ ] SubTask 5.1: 在主进程添加 before-quit 事件监听
  - [ ] SubTask 5.2: 检查 isDirty 状态并显示确认对话框
  - [ ] SubTask 5.3: 用户选择取消时阻止关闭

- [ ] Task 6: 添加用户操作反馈
  - [ ] SubTask 6.1: 创建 toast 通知组件
  - [ ] SubTask 6.2: 在文件操作失败时显示错误提示
  - [ ] SubTask 6.3: 在文件保存成功时显示成功提示（可选）

## 阶段三：功能扩展（可选）

- [ ] Task 7: 实现查找替换功能
  - [ ] SubTask 7.1: 创建查找替换 UI 组件
  - [ ] SubTask 7.2: 集成 TipTap 查找逻辑
  - [ ] SubTask 7.3: 添加键盘快捷键支持

- [ ] Task 8: 实现 PDF 导出功能
  - [ ] SubTask 8.1: 在主进程添加 PDF 导出 IPC handler
  - [ ] SubTask 8.2: 使用 webContents.printToPDF() 实现导出
  - [ ] SubTask 8.3: 在菜单栏添加导出入口
  - [ ] SubTask 8.4: 添加导出进度反馈

- [ ] Task 9: 添加本地图片支持
  - [ ] SubTask 9.1: 实现图片拖拽到本地目录的逻辑
  - [ ] SubTask 9.2: 生成相对路径引用
  - [ ] SubTask 9.3: 在 IPC 添加图片文件操作

- [ ] Task 10: 文件监听性能优化
  - [ ] SubTask 10.1: 实现增量文件树更新
  - [ ] SubTask 10.2: 防抖批量处理 watch 事件
  - [ ] SubTask 10.3: 优化大文件夹下的渲染性能

# 任务依赖关系

- Task 4、5、6 依赖于 Task 1、2（代码质量修复是基础）
- Task 7、8、9、10 是独立的功能扩展，可并行进行
- Task 3 是独立修复，可随时进行