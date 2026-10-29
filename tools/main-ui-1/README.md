# MainUI1 制作与验证工具

运行资源及迁移说明在 `assets/resources/main-ui-1/`，本目录不需要复制到使用方工程。

## 从已保存的美术母版重建

```powershell
python tools/main-ui-1/build-art.py
```

Python 需要 Pillow、NumPy。读取 `deliverables/MainUI1/art-spec.json` 和 `source/` 内母图，输出独立 PNG、640 × 1386 效果图、透明资源表及像素核验清单。无需再次调用图像生成服务。

运行资源共 19 张 PNG：17 张控件纹理、海岛背景和纯色遮罩。重建时保持以下比例规则：

- `counter-pill` 和 `button-play`：先把母版按目标高度等比缩放，再横向三段式处理，仅延展中部，保留两端圆角和高光的比例。不要恢复成整图直接缩放至目标宽高。
- `button-confirm`：直接从原始 `button-play` 母版按相同规则派生为 280 × 80，避免先压缩关卡按钮再二次缩放；Prefab 中也使用 280 × 80。
- 其他图标：等比缩放后居中放入目标画布，空余部分为透明像素。
- 背景：等比覆盖 640 × 1386 后居中裁切。运行时按实际 Canvas 尺寸等比覆盖，允许裁边。

三段式延展在导出时完成，运行时仍是普通 Sprite，没有启用九宫格。改变控件尺寸时应同时调整导出规格与 Prefab，或为运行时九宫格另行设置合适的边界。纯色遮罩可随界面铺满。所有高光均来自 2D 图片，不包含实时 PBR 材质。

## 新工程首次生成预设

1. 用 Creator 3.8.7 打开工程，或运行 `npm run build:web`，先导入脚本、图片并生成 `.meta`。
2. `node tools/main-ui-1/create-prefab.cjs --prepare-sprites`：修改图片的 SpriteFrame 导入设置，保持已有 UUID。
3. 再次运行 `npm run build:web`，让 Creator 生成 SpriteFrame 子资源。
4. `node tools/main-ui-1/create-prefab.cjs`：读取 Creator 原生组件模板、已导入资源及真实脚本注册标识，生成可编辑预设。
5. 最后运行 `npm run build:web`，导入并验证新预设。

已有交付目录包含完整 Prefab 和 `.meta`，直接复制使用，不需要重新生成。重建预设会覆盖该预设文件，应先保留自己在编辑器里的定制。

## 验证

```powershell
npm run typecheck
npm test
npm run test:runtime
node tools/main-ui-1/test-runtime.cjs
```

浏览器测试依赖最新开发版 Web 构建及 Chrome，可用 `FRAMEWORK_BROWSER=msedge` 切换 Edge。测试仅监听回环地址，使用隔离浏览器存储；MainUI1 测试不运行数据服务器。结果位于 `build/main-ui-1-validation/`，实际界面截图输出到 `deliverables/MainUI1/MainUI1-runtime.png` 与 `MainUI1-popup.png`。
