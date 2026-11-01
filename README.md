# 猫咪侦探社

Cocos Creator **3.8.7** / strict TypeScript 竖屏轻解谜游戏，正式版本包含 **80 个原创可玩关卡**，分为 14 页案卷。原版 87 关已独立归档，不参与正式打包。

## 试玩

1. 用 Creator 3.8.7 打开本工程并等待导入。
2. 预览 `assets/scenes/Boot.scene`，在 Home 点击「开始调查」。
3. 在案卷选择任意关卡。Home / Game 均支持直接预览，均进入猫咪侦探社。

操作包括点击、拖动、定向滑动、长按和往复擦拭；提供按当前进度的三级提示、调查笔记、撤销、确认重置、暂停和自动存档。Tab／方向键切换焦点，Enter确认，WASD滑动，按住空格长按，连续空格擦拭，Esc关闭弹层或暂停。每关限时180—360秒；弹层和切后台暂停计时，超时可免费续60秒一次或重试。

保留原关卡编号、`catDetective.v1`与已结案记录；无法按新依赖重放的旧进行中记录仅重置对应案件。本轮参考旧版的找猫、逐项修复、热气球减重、角色排除、降温救援和合照设计，重制现有80关，单关5—11个有效步骤。

## 设计与资源

- [80关目录与资源复用](docs/猫咪侦探社/08-80关目录与资源复用.md)
- [当前80关完整重制设计与旧版借鉴](docs/猫咪侦探社/09-旧版借鉴与80关玩法重制.md)
- [界面优化与视觉规范](docs/猫咪侦探社/10-界面优化与视觉规范.md)、[80关陈设审查](docs/猫咪侦探社/11-关卡陈设审查.md)
- [设计总案](docs/猫咪侦探社/00-设计总案.md)、[实现与验收](docs/猫咪侦探社/04-实现与验收.md)
- [场景与UI美术提示词](docs/猫咪侦探社/糖果美术-场景与UI提示词.md)、[道具美术提示词](docs/猫咪侦探社/糖果美术-道具提示词.md)

正式美术采用圆润、柔和高光的2.5D糖果卡通风格，包含12张1122 × 1402场景、1张入口插画、2张UI图集、10张透明道具图集，共25张PNG。160格道具与状态贴图服务80关的740个对象定义（含替代状态与印章），不显示常驻物件名称。入口装饰、按钮、场景和道具使用真实Sprite贴图；阅读底板、遮罩、进度线、接触阴影与功能光效由引擎绘制。按钮按高度正确缩放九宫格，预览等比裁切，文字使用独立高对比图层。全关共459个有效步骤。

首版6张绘本背景已移至 `archive/cat-detective-v1-art/`，与原版87关归档一样处于assets外，不参与打包。

设计分辨率为640 × 1386、fitWidth=true、fitHeight=false，侦探社界面按可用空间等比缩放。横屏完整显示，尚未制作独立横屏布局。

## 原版87关归档

原版关卡Bundle、专属配置、图片、音频、Prefab、Spine、字体、玩法脚本和SDK注册器保存在 [archive/legacy-brainpuzzle](archive/legacy-brainpuzzle/README.md)。目录在 `assets/` 外，没有正式入口引用。共享目录元数据保持原UUID，存档与框架继续复用。

归档有11,038个专属文件和23份共享接入快照，记录原路径、长度及SHA256，供查阅、恢复和复用。构建工具清理明确核对过的生成目录，再验证实际产物的Bundle、旧脚本、旧UUID（含压缩形式）和原始资源哈希，防止旧内容残留。

## 构建与验证

使用Node.js 20或以上：

```powershell
npm ci
npm run build:web
npm run typecheck
npm test
npm run test:runtime
```

- `build:web` 使用本机Creator 3.8.7，可设置 `COCOS_CREATOR_EXE`，构建后自动执行发布隔离检查。
- `test` 包括框架回归、归档哈希、存档兼容、计时边界、80关完整解法、1134种可达状态、错误组合和美术映射检查。
- `test:runtime` 用本次构建真实操作全部80关，并验证五种手势、无物件标签、倒计时、暂停、续时、刷新、键盘、失败重试与多视口。可设置 `FRAMEWORK_BROWSER=msedge`。
- `test:archive` 单独检查归档；`test:release` 单独检查当前发布产物；`test:detective` 单独检查关卡模型。

Web产物位于 `build/web-desktop/`，实际交互结果和截图位于 `build/cat-detective-validation/`，发布隔离结果位于 `build/release-isolation.json`。这些生成目录均不提交Git。浏览器验收不等于移动端真机或手柄验收。

## 存档与框架

默认Device单机模式。链路仍为 `GameStorage → BrainPuzzleRuntime → DataStore`，gameId=`cat_brainpuzzle`，保留原业务字符串类型和隔离命名空间，不清空全局localStorage。Local / Internet配置继续位于 `assets/resources/config/network-config.json`；`node tools/dev-server.cjs` 提供本地协议服务。

详细接入见 [框架说明](docs/框架说明.md) 与 [AI工程指南](AGENTS.md)。原版迁移验收只作为归档中的历史记录，不代表当前发布版本仍包含原玩法。
