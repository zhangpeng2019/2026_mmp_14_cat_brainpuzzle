# MainUI2 制作与验证

本目录只用于维护，不是运行依赖。所有输出独立于 MainUI1；复用的是制作方法，不是运行资源、UUID 或组件。

```powershell
python tools/main-ui-2/build-art.py
```

Python 需要 Pillow 和 NumPy。读取 `deliverables/MainUI2/art-spec.json`、已保存的房间母版和控件母版，处理透明边缘、按全图连通区域切图，再等比缩放或三段式延展。输出 19 张运行 PNG、640 × 1386 合成图、透明资源表及 manifest。普通文字由 Label 渲染，不烘焙进贴图。资源表和合成图来自同一套 PNG，RGBA 校验必须为零差异；两端像素另做比例保护核验。

首次导入或增加资源时：

1. `npm run build:web`：让 Creator 导入脚本和新 PNG，生成原生 `.meta`。
2. `node tools/main-ui-2/create-prefab.cjs --prepare-sprites`：修改 SpriteFrame 导入设置，保留 UUID。
3. `npm run build:web`：让 Creator 生成 SpriteFrame 子资源。
4. `node tools/main-ui-2/create-prefab.cjs`：根据原生组件模板、实际编译类标识和已导入 UUID 生成 Prefab。
5. `npm run build:web`：导入并构建最终 Prefab。

重建预设会覆盖对该 Prefab 的手工编辑；必要的布局修改同时记录在生成器及 art-spec 中。不要凭普通 UUID 推测脚本类标识。

```powershell
npm run typecheck
npm test
npm run test:runtime
node tools/main-ui-2/test-runtime.cjs
```

浏览器测试依赖最新 Web 开发构建及 Chrome，`FRAMEWORK_BROWSER=msedge` 可改用 Edge。测试通过现有 UIManager 打开 MainUI2，验证按钮事件、所有升级目标、弹窗遮罩、设置、生命周期、尺寸比例、热点与房间共同适配，以及脱离 Home 的独立实例化。只使用回环静态服务，不请求数据服务器。

结果输出到 `build/main-ui-2-validation/`；主界面与弹窗截图输出到 `deliverables/MainUI2/`。迁移包只包含 `assets/resources/main-ui-2/` 及其相邻 `.meta`，打包后逐文件核对内容。实际验证结果以 `deliverables/MainUI2/validation.json` 为准。
