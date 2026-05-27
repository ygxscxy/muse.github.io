# Toolbar Settings Icon & Personalization Spec

## Why
用户需要一个直观的入口来访问个性化设置功能，当前应用已有Settings组件和settingsStore，但缺少从工具栏访问设置的入口图标。添加设置图标可以提升用户体验，让用户更方便地进行个性化定制。

## What Changes
- 在 Toolbar 组件中添加设置图标按钮
- 在 App 组件中集成 Settings 面板的状态管理
- 保持现有的 Settings 组件和 settingsStore 不变，仅添加入口

## Impact
- Affected specs: 工具栏UI, 设置面板集成
- Affected code: 
  - `src/renderer/components/Toolbar/index.tsx` - 添加设置图标按钮
  - `src/renderer/App.tsx` - 集成 Settings 面板状态管理

## ADDED Requirements

### Requirement: Toolbar Settings Icon
工具栏的右侧区域 SHALL 提供一个设置图标按钮，用户点击后可打开个性化设置面板。

#### Scenario: 用户点击设置图标
- **WHEN** 用户点击工具栏中的设置图标
- **THEN** 打开设置面板（SettingsPanel）
- **AND** 用户可以查看所有和修改个性化设置

#### Scenario: 用户关闭设置面板
- **WHEN** 用户点击设置面板的关闭按钮、完成按钮或点击遮罩层外
- **THEN** 设置面板关闭
- **AND** 用户返回主编辑界面

### Requirement: Settings Panel Integration
App 组件 SHALL 管理设置面板的打开/关闭状态，并将状态传递给 SettingsPanel 组件。

#### Scenario: 应用启动时
- **WHEN** 应用启动
- **THEN** 设置面板默认处于关闭状态

#### Scenario: 设置修改后自动保存
- **WHEN** 用户在设置面板中修改任何设置项
- **THEN** 设置自动保存到本地存储
- **AND** 修改立即生效（如主题切换、字号调整等）

## MODIFIED Requirements

### Requirement: Toolbar Layout
工具栏 SHALL 在右侧操作区域添加设置图标按钮，位于现有按钮之后。

**变更内容**:
- 在 Toolbar 组件的右侧按钮区域添加设置图标（Settings icon from lucide-react）
- 设置图标按钮 SHALL 使用与其他工具栏按钮一致的样式
- 设置图标 SHALL 提供 tooltip 提示"设置"

## REMOVED Requirements

**无** - 本功能仅添加新入口，不移除任何现有功能
