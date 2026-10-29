# Cat Brain Puzzle

Cocos Creator **3.8.7** / TypeScript 工程，基于用户指定的 Cat Framework 接入源项目全部玩法。

## 运行

1. 用 Creator 3.8.7 打开本目录，等待导入。
2. 打开 assets/scenes/Boot.scene 并预览，在 Home 点击“进入游戏”。
3. 首次进入原教程；之后进入原选关大厅。暂停菜单可返回大厅，右上角“返回入口”返回框架 Home。
4. Home / Game 均支持直接预览。

框架使用 640 × 1386、fitWidth=true、fitHeight=false。原关卡在 BrainPuzzleRoot 中按 1080 宽局部坐标等比适配。

## 迁移范围

- 87 个本地关卡 Bundle（1–86、88；源项目没有第 87 关）。
- 111 个 Prefab、3,675 张 PNG、1,309 个 MP3，以及动画、位图字体、图集和 Spine 数据。
- 原大厅选关、教程、提示、重开、暂停、胜负结算、时间奖励、解锁、星级、声音和振动设置。
- 框架负责 Boot → Home ⇄ Game、资源缓存、UI 层级、独立设备存档和可选云同步；原游戏状态机在 Game 中管理大厅和关卡。
- 原资源保留 UUID；docs/source-assets.json 记录源文件哈希及元数据 UUID。

源项目本身已是 Creator 恢复工程，因此 Prefab、Scene、SpriteFrame、AudioClip、AnimationClip、SpriteAtlas、SkeletonData 均按真实引擎类型迁移。

## 验证命令

使用 Node.js 20 或以上：

```powershell
npm ci
npm run build:web
npm run typecheck
npm test
npm run test:runtime
```

构建脚本使用本机 Creator 3.8.7，可设置 COCOS_CREATOR_EXE。首次构建生成 temp/tsconfig.cocos.json 后执行类型检查。浏览器测试使用 Chrome，可设置 FRAMEWORK_BROWSER=msedge。

构建位于 build/web-desktop；结果和截图位于 build/runtime-validation，均不提交 Git。测试包含框架 28 组回归、业务存储适配、资源完整性、真实鼠标流程和全部 87 关逐一加载挂载。逐关加载检查不等于已自动解出每道谜题。

## 存档与平台

默认 Device 单机模式，无需服务器。所有游戏键值通过 GameStorage → BrainPuzzleRuntime → DataStore 保存，gameId=cat_brainpuzzle，不清除其他项目存储。Local / Internet 可在入口控制器与 assets/resources/config/network-config.json 配置；node tools/dev-server.cjs 提供本地内存协议服务。

原 Web 广告后备实现立即执行奖励回调。提供的源工程不含原生 FunJoy SDK，RecoveryPlatformOptions.nativeFunJoySDKAvailable 保持 false。原生广告、归因及抖音能力需要真实 SDK、应用参数和真机联调，不将后备回调当作真实广告播放验证。

参见 [框架说明](docs/框架说明.md)、[迁移验收](docs/迁移验收.md)、[AI 接入指南](AGENTS.md)。
