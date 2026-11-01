# AI工程接入指南

适用于整个猫咪侦探社仓库。用户最新要求优先，先检查git status，保留已有改动，不增加重复确认。

- 固定Creator 3.8.7、TypeScript；正式代码使用strict，类型声明来自Creator实际导入，不使用假的cc声明绕过。
- 当前正式内容为80个原创关卡，Boot → Home ⇄ Game；Game只启动CatDetectiveView，Home / Game支持直接预览。README、docs/框架说明.md与docs/猫咪侦探社/为当前入口。
- 原版87关专属文件位于archive/legacy-brainpuzzle，必须保持在assets外且不参与打包。不得从正式代码引用归档、旧main或旧关卡注册器。归档保留原UUID、RF、ccclass和文件哈希，不改写原恢复脚本。
- assets/scripts/framework保持通用，不反向依赖业务。关卡契约在CaseTypes，数据由CaseData聚合分段模块，CaseSession是纯逻辑；避免聚合数据与辅助构建器循环依赖。
- 设计分辨率640 × 1386，fitWidth=true、fitHeight=false。当前侦探社内容640 × 1320等比容纳；小屏和横屏均需实际验证操作入口可见。
- 首次初始化前注册BRAIN_PUZZLE_SCHEMA，首次入口选择模式，后续场景复用；场景销毁不dispose全局Runtime。
- 存档统一经GameStorage → BrainPuzzleRuntime → DataStore，gameId=cat_brainpuzzle；保留字符串类型、catDetective.v1及已结案记录。重制后不可重放的旧进行中记录仅重置对应案件，不清空全局localStorage。
- CaseClock管理每关180—360秒、弹层与后台暂停、超时一次免费60秒及重试；计时记录与步骤统一保存，禁止重新进入绕过超时。
- 12张糖果场景、10张道具图集及UI图集经CandyArt加载。道具不创建名称Label；真实贴图与命中区分离。切片使用PropArtRects实际主体边界，禁止恢复等分裁切造成邻格猫爪残留；设packable=false，避免动态图集破坏裁切。
- 新增资源与.meta一起保留，公共背景经ResourceLoader加载；共享目录与场景UUID稳定。旧Bundle资源仅作为archive中的参考。
- 关卡操作需有可观察线索、有效反馈、逐步三级提示；错误操作不推进。tap/drag/swipe/hold/scrub均有真实输入判定。有效分支不得软锁，所有可执行动作的来源与目标中心不能被后来可见对象遮挡。
- Creator节点在框外松手会派发TOUCH_CANCEL，须用公开getEventCode识别原始TOUCH_END并完成滑动；真实取消不能提交。
- Creator发布转换不支持将Set展开当成数组；使用Array.from(new Set(...))。界面事件更新状态，不轮询谜题进度。
- 使用Node >=20：npm ci、npm run build:web、npm run typecheck、npm test、npm run test:runtime。UI或资源改动后实际重建，不使用旧构建或旧截图。
- build:web清理前核对目标绝对路径只在build/web-desktop，随后自动验证发布隔离。test:archive核对归档哈希；test:release检查实际产物无旧Bundle、脚本、UUID及旧原始资源。
- 运行时结果位于build/cat-detective-validation/result.json；模型与真实指针分别记录。当前目标是全部80关真实操作验证，不能用加载成功替代解出谜题。
- 提交源码、资源、元数据、设置、锁文件、预设、中文文档、工具与归档；排除library、temp、profiles、build、node_modules和本机账号信息。用户要求提交推送时直接完成，核对HEAD与远端一致，不强制推送。
