# Tasks

- [x] Task 1: 修改 Toolbar 组件 - 添加设置图标按钮接口
  - [x] SubTask 1.1: 在 ToolbarProps 接口中添加 onSettings 回调属性
  - [x] SubTask 1.2: 从 lucide-react 导入 Settings 图标
  - [x] SubTask 1.3: 在工具栏右侧按钮区域添加设置图标按钮

- [x] Task 2: 修改 App 组件 - 集成设置面板
  - [x] SubTask 2.1: 导入 SettingsPanel 组件
  - [x] SubTask 2.2: 添加 settingsOpen 状态管理
  - [x] SubTask 2.3: 创建 handleOpenSettings 回调函数
  - [x] SubTask 2.4: 将 onSettings 回调传递给 Toolbar 组件
  - [x] SubTask 2.5: 在 App 组件渲染 SettingsPanel 组件

# Task Dependencies
- Task 2 依赖于 Task 1（Toolbar 需要先暴露 onSettings 接口）
