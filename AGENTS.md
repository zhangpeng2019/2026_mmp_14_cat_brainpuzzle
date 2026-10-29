# AI 工程接入指南

适用于整个 Brain Puzzle 仓库。用户明确要求优先，不增加重复确认流程。先检查 git status，保留用户已有改动。

- 固定 Creator 3.8.7、TypeScript。框架与新增适配代码使用 strict；原恢复脚本保留已有 ts-nocheck 和 RF 类标识，避免无关格式重写。
- 正式流程 Boot → Home ⇄ Game；Game 中保留原大厅和关卡状态机。README 和 docs/框架说明.md 是当前入口，迁移验收仅代表上次已执行验证。
- 设计分辨率 640 × 1386，fitWidth=true，fitHeight=false。BrainPuzzleRoot 按原 1080 宽局部坐标等比适配；第 1/3 关增量使用 legacyTouchDelta。
- assets/scripts/framework 保持通用，不反向依赖业务。新增适配位于 features/brainpuzzle/BrainPuzzleRuntime.ts、scenes/GameSceneController.ts；原玩法位于 scripts/Level_*.ts。
- 首次初始化前注册 BRAIN_PUZZLE_SCHEMA，首次入口选择模式，后续场景复用。场景销毁不 dispose 全局 Runtime。
- 游戏存档统一通过 GameStorage → BrainPuzzleRuntime → DataStore，gameId=cat_brainpuzzle；字符串必须保持字符串类型，不清空全局 localStorage。
- 公共 Prefab 经 ResourceLoader 加载，原关卡通过 LevelResBundleManager 加载本地 Bundle。资源与 .meta 一起提交，保留 UUID、ccclass 和 RF 标识。
- 原 UIManager 是框架 UIManager 的数字层映射，不建立重复层树。Game 相机包含 DEFAULT/UI_2D，near=0 兼容原 UI Prefab 的 z=1000。
- Bundle 有交叉依赖及并发预加载。LRU 可释放闲置 Prefab，不得清除仍可能被请求使用的包配置或 removeBundle。
- Game 默认关闭物理；61/72/73 关自行开启，LevelManager.hideLevel 在销毁刚体前关闭共享模拟，避免空 Box2D 世界继续步进。

使用 Node >= 20：npm ci，npm run build:web，npm run typecheck，npm test，npm run test:runtime。类型声明必须来自 Creator 实际导入，不能用假的 cc 声明绕过。

运行时测试在 tools/test-brainpuzzle-runtime.cjs，结果在 build/runtime-validation/result.json。逐关加载检查与真实指针交互分别记录，不宣称自动解出了所有谜题。UI 或资源改动后实际重建并验证，不使用旧构建或截图。

提交源码、资源、元数据、设置、锁文件、预设、文档和工具。排除 library、temp、profiles、build、node_modules 和本机账号信息。用户要求提交推送时直接完成，核对本地 HEAD 与远端一致，不强制推送。
