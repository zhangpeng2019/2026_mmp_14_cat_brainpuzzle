# SingInUI1 制作与验证

本目录为离线制作和验证工具，不是运行依赖。运行 Prefab、PNG、脚本与接入说明全部保存在 `assets/resources/sing-in-ui-1/`，资源 UUID 不引用 MainUI1、MainUI2 或框架示例贴图。

资源按工程的 **640 × 1386** 竖屏基准制作。PBR 风格高光、粗糙度和材质表现烘焙在独立 PNG 中，运行时使用 2D Sprite；普通文字由可编辑 Label 绘制。控件切图应保持原始比例，需要改变宽高比的框体应只延展可重复中部，不压扁图标或边角。Prefab、制作规范、源素材及迁移包应同步维护。

新资源与脚本必须先由 Creator 3.8.7 导入生成 `.meta`。Prefab 脚本类标识使用 Creator 实际编译注册结果，保留已有 UUID，不能凭普通 UUID 推算绑定。

```powershell
python tools/sing-in-ui-1/build-art.py
```

Python 需要 Pillow 和 NumPy。脚本读取 `deliverables/SingInUI1/art-spec.json` 与已保存母版，导出独立 PNG、透明资源表和合成预览，并检查资源表及预览使用的资源像素一致。宽控件只延展中央区域，两端与图标保持等比。该流程不调用网络或生成服务。

首次导入或新增资源时：

1. `npm run build:web`：由 Creator 导入脚本和 PNG，生成原生 `.meta`。
2. `node tools/sing-in-ui-1/create-prefab.cjs --prepare-sprites`：保留 UUID，将图片类型设为 SpriteFrame。
3. `npm run build:web`：导入并生成 SpriteFrame 子资源。
4. `node tools/sing-in-ui-1/create-prefab.cjs`：使用实际编译类标识、原生组件模板与已导入资源生成 Prefab。
5. `npm run build:web`：导入最终 Prefab 并构建。

重建 Prefab 会覆盖手工布局修改；必要修改应同步回制作规范及生成器。已有资源的内容更新仍需最终构建刷新导入缓存，再执行下列验证。

```powershell
npm run build:web
npm run typecheck
npm test
npm run test:runtime
node tools/sing-in-ui-1/test-runtime.cjs
```

浏览器验证依赖当前源码的最新 Web 开发构建和 Chrome；设置 `FRAMEWORK_BROWSER=msedge` 可改用 Edge。测试只启动回环静态服务器，使用独立浏览器存储，将会话设为 Device，并阻止外部请求。

测试覆盖：

- 从 MainUI2 签到入口和 Home 独立入口通过同一套 UIManager 打开、关闭。
- 七日卡片、普通领取、三倍领取、已领取、重复点击和第七日边界。
- 公开展示 API、非法输入原子拒绝、数组复制隔离、纯事件接入模式和同步重入防护。
- 遮罩关闭、关闭按钮、卡片点击不误关闭、禁用重启和重新打开后的监听器生命周期。
- 640 × 1386、390 × 844、540 × 960 三种竖屏适配，Sprite 原始 PNG 尺寸与比例，按下时等比缩放。
- 普通 Canvas 下独立实例化、Prefab 资源归属、领取及展示操作没有持久化或网络调用。

结果与辅助截图保存在 `build/sing-in-ui-1-validation/`；真实引擎主界面和已领取状态截图分别输出为 `deliverables/SingInUI1/SingInUI1-runtime.png`、`SingInUI1-claimed.png`。验收以本次脚本退出码及 `result.json` 为准，不能将历史截图当作本次通过证据。

独立迁移包仅包含 `assets/resources/sing-in-ui-1/` 和同级 `sing-in-ui-1.meta`，不包含作为预览宿主的 MainUI2。`三倍领取` 只是 multiplier 为 3 的 UI 请求，不调用广告 SDK、不真实发奖。

完成导入后运行 `python tools/sing-in-ui-1/package.py` 生成 `deliverables/SingInUI1/SingInUI1-portable.zip`。工具要求每个资源和目录都有 Creator 元数据，并逐字节核对压缩包与源文件；检查结果保存到同目录 `package-verification.json`。纸张面板使用独立高清母版 `source/panel-master.png`，控件共用 `source/ui-master.png`，不会从其他模块借用图片。
