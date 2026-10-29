'use strict';

// Run against a fresh development Web build: node tools/main-ui-1/test-runtime.cjs
// Uses isolated browser storage and a loopback-only static server; no data server.
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const assert = require('node:assert/strict');
const { chromium } = require('playwright');

const root = path.resolve(__dirname, '../..');
const web = path.join(root, 'build/web-desktop');
const moduleDir = path.join(root, 'assets/resources/main-ui-1');
const output = path.join(root, 'build/main-ui-1-validation');
const deliverables = path.join(root, 'deliverables/MainUI1');
const results = [];
const errors = [];
const screenshots = [];
let browser, page;

function check(condition, message, details) {
    assert.ok(condition, details ? `${message}: ${JSON.stringify(details)}` : message);
    results.push({ passed: true, message });
    console.log(`PASS ${message}`);
}

function ownedUuids() {
    const owned = new Set();
    const collect = value => {
        if (!value || typeof value !== 'object') return;
        if (typeof value.uuid === 'string') owned.add(value.uuid);
        for (const child of Object.values(value)) collect(child);
    };
    const walk = directory => {
        for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
            const file = path.join(directory, entry.name);
            if (entry.isDirectory()) walk(file);
            else if (entry.name.endsWith('.meta')) collect(JSON.parse(fs.readFileSync(file, 'utf8').replace(/^\uFEFF/, '')));
        }
    };
    walk(moduleDir);
    return [...owned];
}

function pngSizesByUuid() {
    const sizes = {};
    const directory = path.join(moduleDir, 'textures');
    for (const name of fs.readdirSync(directory).filter(name => name.endsWith('.png'))) {
        const bytes = fs.readFileSync(path.join(directory, name));
        assert.equal(bytes.subarray(0, 8).toString('hex'), '89504e470d0a1a0a', `${name} is a PNG`);
        const meta = JSON.parse(fs.readFileSync(path.join(directory, `${name}.meta`), 'utf8').replace(/^\uFEFF/, ''));
        for (const sub of Object.values(meta.subMetas || {})) {
            if (sub.importer === 'sprite-frame') sizes[sub.uuid] = { name, width: bytes.readUInt32BE(16), height: bytes.readUInt32BE(20) };
        }
    }
    return sizes;
}

const server = http.createServer((request, response) => {
    try {
        const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
        if (pathname === '/favicon.ico') return response.writeHead(204).end();
        let file = path.resolve(web, '.' + pathname);
        if (file !== web && !file.startsWith(web + path.sep)) return response.writeHead(403).end();
        if (file === web) file = path.join(file, 'index.html');
        if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) return response.writeHead(404).end();
        const ext = path.extname(file);
        response.setHeader('Content-Type', ({ '.html': 'text/html', '.js': 'application/javascript', '.json': 'application/json', '.css': 'text/css', '.png': 'image/png', '.wasm': 'application/wasm' })[ext] || 'application/octet-stream');
        if (ext === '.html') {
            const html = fs.readFileSync(file, 'utf8').replace(/<h1 class="header">[\s\S]*?<\/h1>/, '')
                .replace(/<p class="footer">[\s\S]*?<\/p>/, '')
                .replace('</head>', '<style>html,body{margin:0;width:100%;height:100%;overflow:hidden}#GameDiv{width:100vw!important;height:100vh!important;margin:0;border:0}</style></head>');
            return response.end(html);
        }
        if (file === path.join(web, 'assets/main/index.js')) {
            const hook = 'FrameworkRuntime.selectLoginMode(this.loginMode, this.externalServerUrl);';
            const source = fs.readFileSync(file, 'utf8');
            assert.ok(source.includes(hook), 'Expected current development-build initialization hook');
            return response.end(source.replace(hook, `this.loginMode=0; globalThis.__runtime=FrameworkRuntime; ${hook}`));
        }
        fs.createReadStream(file).pipe(response);
    } catch (error) {
        errors.push(`Static server: ${error.message}`);
        response.writeHead(500).end('Validation server error');
    }
});

async function frame() {
    await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
}

async function clickNode(nodePath, fromScene = false, verifyScale = false) {
    const point = await page.evaluate(({ nodePath, fromScene }) => {
        const cc = window.__cc;
        const scene = cc.director.getScene();
        const node = cc.find(nodePath, fromScene ? scene : window.__mainUI1);
        if (!node?.activeInHierarchy) throw new Error(`Inactive/missing click target: ${nodePath}`);
        const box = node.getComponent(cc.UITransform).getBoundingBoxToWorld();
        const canvas = scene.getChildByName('Canvas').getComponent(cc.UITransform).getBoundingBoxToWorld();
        return { x: (box.center.x - canvas.x) / canvas.width, y: (canvas.yMax - box.center.y) / canvas.height };
    }, { nodePath, fromScene });
    const canvasRect = await page.locator('canvas').boundingBox();
    assert.ok(canvasRect, 'Browser game canvas is visible');
    const x = canvasRect.x + canvasRect.width * point.x, y = canvasRect.y + canvasRect.height * point.y;
    if (verifyScale) {
        await page.waitForFunction(nodePath => {
            const cc = window.__cc, button = cc.find(nodePath, window.__mainUI1).getComponent(cc.Button);
            const scale = button.target.scale;
            return Math.abs(scale.x - 1) < 0.0001 && Math.abs(scale.y - 1) < 0.0001;
        }, nodePath);
        await page.mouse.move(x, y);
        await page.mouse.down();
        const pressed = await page.evaluate(async nodePath => {
            const cc = window.__cc, button = cc.find(nodePath, window.__mainUI1).getComponent(cc.Button);
            const samples = [];
            const started = performance.now();
            do {
                await new Promise(resolve => requestAnimationFrame(resolve));
                const scale = button.target.scale;
                samples.push({ x: scale.x, y: scale.y });
            } while (performance.now() - started < button.duration * 1000 + 80);
            return { isScale: button.transition === cc.Button.Transition.SCALE, zoom: button.zoomScale, samples };
        }, nodePath);
        await page.mouse.up();
        const last = pressed.samples.at(-1);
        check(pressed.isScale && pressed.samples.every(scale => Math.abs(scale.x - scale.y) < 0.0001)
            && Math.abs(last.x - pressed.zoom) < 0.002 && last.x < 1,
        `${nodePath}: real pointer press scales both axes equally`, pressed);
    } else {
        await page.mouse.click(x, y);
    }
    await frame();
}

async function watchRoot() {
    await page.evaluate(() => {
        window.__actions = [];
        window.__starts = [];
        window.__closes = [];
        for (const [event, list] of [['main-ui-1:action', '__actions'], ['main-ui-1:start', '__starts'], ['main-ui-1:close', '__closes']]) {
            window.__mainUI1.on(event, detail => window[list].push({ ...detail }));
        }
    });
}

async function openFromHome() {
    await clickNode('Canvas/content/FrameworkScreen/Action4', true);
    await page.waitForFunction(() => {
        const root = window.__cc.find('Canvas/hud/MainUI1', window.__cc.director.getScene());
        if (!root?.activeInHierarchy || !root.getComponent('MainUI1')) return false;
        window.__mainUI1 = root;
        return true;
    });
    await frame();
    await watchRoot();
}

async function popupState() {
    return page.evaluate(() => ({
        active: window.__cc.find('Popup', window.__mainUI1).activeInHierarchy,
        title: window.__cc.find('Popup/Panel/Title', window.__mainUI1).getComponent(window.__cc.Label).string,
        message: window.__cc.find('Popup/Panel/Message', window.__mainUI1).getComponent(window.__cc.Label).string,
        actions: [...window.__actions], starts: [...window.__starts],
    }));
}

async function screenshot(filename, delivery = false) {
    const file = path.join(delivery ? deliverables : output, filename);
    await page.screenshot({ path: file });
    screenshots.push(path.relative(root, file).replaceAll('\\', '/'));
}

async function validateAssets(owned) {
    const state = await page.evaluate(() => {
        const cc = window.__cc, root = window.__mainUI1;
        return {
            bound: !!root.getComponent('MainUI1'),
            sprites: root.getComponentsInChildren(cc.Sprite).map(sprite => ({
                node: sprite.node.name, uuid: sprite.spriteFrame?._uuid,
                valid: !!(sprite.spriteFrame && cc.isValid(sprite.spriteFrame) && sprite.spriteFrame.texture),
            })),
        };
    });
    check(state.bound, 'Prefab has the actual MainUI1 component bound');
    check(state.sprites.length > 10 && state.sprites.every(sprite => sprite.valid && owned.includes(sprite.uuid)),
        'Every SpriteFrame is valid and owned by main-ui-1', state.sprites.filter(sprite => !sprite.valid || !owned.includes(sprite.uuid)));
}

async function validateSpriteProportions(label, pngSizes) {
    const state = await page.evaluate(() => {
        const cc = window.__cc, root = window.__mainUI1;
        const nodePath = node => {
            const names = [];
            for (let current = node; current && current !== root; current = current.parent) names.unshift(current.name);
            return names.join('/');
        };
        return {
            rootSize: root.getComponent(cc.UITransform).contentSize,
            sprites: root.getComponentsInChildren(cc.Sprite).map(sprite => ({
                path: nodePath(sprite.node), uuid: sprite.spriteFrame?._uuid,
                original: sprite.spriteFrame?.originalSize,
                size: sprite.node.getComponent(cc.UITransform).contentSize,
                scale: { x: sprite.node.worldScale.x, y: sprite.node.worldScale.y },
            })),
        };
    });
    const failures = state.sprites.filter(sprite => {
        const png = pngSizes[sprite.uuid];
        if (!png || !sprite.original || sprite.original.width !== png.width || sprite.original.height !== png.height) return true;
        if (Math.abs(Math.abs(sprite.scale.x / sprite.scale.y) - 1) > 0.0001) return true;
        // A solid-color mask intentionally fills its parent. Art sprites, including
        // the cover background, must retain the source PNG's complete aspect ratio.
        return sprite.path !== 'Popup/Shade'
            && Math.abs((sprite.size.width / sprite.size.height) / (png.width / png.height) - 1) > 0.0001;
    });
    check(failures.length === 0, `${label}: SpriteFrame sizes match PNGs and art keeps its aspect ratio`, failures);
    const background = state.sprites.find(sprite => sprite.path === 'Background');
    const size = background?.size, rootSize = state.rootSize;
    check(!!size && size.width >= rootSize.width - 0.01 && size.height >= rootSize.height - 0.01
        && (Math.abs(size.width - rootSize.width) < 0.01 || Math.abs(size.height - rootSize.height) < 0.01),
    `${label}: background covers the viewport with proportional cropping`, { size, rootSize });
}

async function resizeViewport(viewport) {
    await page.setViewportSize(viewport);
    // The desktop template owns a fixed-size subframe. CSS alone changes its
    // apparent size without updating Cocos's cached inline-style resize signal.
    // Resize that host through the public screen API, preserving FIXED_WIDTH.
    await page.evaluate(({ width, height }) => {
        window.__cc.screen.windowSize = new window.__cc.Size(width, height);
    }, viewport);
}

async function validateBounds(viewport, pngSizes) {
    await resizeViewport(viewport);
    await page.waitForFunction(({ width, height }) => {
        const size = window.__mainUI1.getComponent(window.__cc.UITransform);
        return Math.abs(size.height / size.width - height / width) < 0.003;
    }, viewport, { timeout: 5000 }).catch(async error => {
        console.error('Viewport diagnostics', await page.evaluate(() => {
            const cc = window.__cc, canvas = cc.director.getScene().getChildByName('Canvas');
            return { browser: [innerWidth, innerHeight], screen: cc.screen?.windowSize, design: cc.view.getDesignResolutionSize(), visible: cc.view.getVisibleSize(),
                canvas: canvas.getComponent(cc.UITransform).contentSize, root: window.__mainUI1.getComponent(cc.UITransform).contentSize,
                domCanvas: [...document.querySelectorAll('canvas')].map(node => ({ width: node.width, height: node.height, style: node.getAttribute('style'), rect: node.getBoundingClientRect().toJSON() })),
                domFrame: document.querySelector('#GameDiv')?.getAttribute('style') };
        }));
        throw error;
    });
    await frame();
    const state = await page.evaluate(() => {
        const cc = window.__cc, root = window.__mainUI1;
        const canvas = cc.director.getScene().getChildByName('Canvas').getComponent(cc.UITransform).getBoundingBoxToWorld();
        const paths = ['Header/CoinButton', 'Header/GemButton', 'Header/EnergyButton', 'Events/BenefitsButton', 'Events/IslandGiftButton',
            'Footer/LevelButton', ...['MenuButton', 'RankButton', 'AlbumButton', 'ShopButton', 'MoreButton'].map(name => `Footer/Navigation/${name}`)];
        return paths.map(path => {
            const node = cc.find(path, root), box = node.getComponent(cc.UITransform).getBoundingBoxToWorld();
            return { path, inside: node.activeInHierarchy && box.x >= canvas.x - 1 && box.xMax <= canvas.xMax + 1 && box.y >= canvas.y - 1 && box.yMax <= canvas.yMax + 1 };
        });
    });
    check(state.every(item => item.inside), `${viewport.width}x${viewport.height}: primary buttons stay inside the screen`, state.filter(item => !item.inside));
    await validateSpriteProportions(`${viewport.width}x${viewport.height}`, pngSizes);
    await screenshot(`layout-${viewport.width}x${viewport.height}.png`);
}

async function main() {
    fs.mkdirSync(output, { recursive: true });
    fs.mkdirSync(deliverables, { recursive: true });
    assert.ok(fs.existsSync(path.join(web, 'index.html')), 'Run npm run build:web first');
    const owned = ownedUuids();
    const pngSizes = pngSizesByUuid();
    const prefab = JSON.parse(fs.readFileSync(path.join(moduleDir, 'MainUI1.prefab'), 'utf8'));
    const references = [...JSON.stringify(prefab).matchAll(/"__uuid__":"([^"]+)"/g)].map(match => match[1]);
    check(references.length > 0 && references.every(uuid => owned.includes(uuid)), 'Serialized Prefab has no asset references outside its own module');
    await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
    browser = await chromium.launch({ channel: process.env.FRAMEWORK_BROWSER || 'chrome', headless: true, args: ['--enable-unsafe-swiftshader'] });
    const context = await browser.newContext({ viewport: { width: 640, height: 1386 }, deviceScaleFactor: 1 });
    const url = `http://127.0.0.1:${server.address().port}`;
    const unexpectedRequests = [];
    await context.route('**/*', route => {
        const requestUrl = route.request().url();
        if (!requestUrl.startsWith(url + '/') && !requestUrl.startsWith('data:') && !requestUrl.startsWith('blob:')) {
            unexpectedRequests.push(requestUrl);
            return route.abort();
        }
        return route.continue();
    });
    page = await context.newPage();
    page.on('pageerror', error => errors.push(error.message));
    page.on('console', message => {
        if (/missing class|can not find.*class|class.*not found/i.test(message.text())) errors.push(message.text());
    });
    await page.goto(url);
    await page.waitForFunction(() => typeof System !== 'undefined');
    await page.evaluate(async () => { window.__cc = await System.import('cc'); });
    await page.waitForFunction(() => {
        const scene = window.__cc.director.getScene();
        const controller = scene?.getChildByName('Canvas')?.getComponent('HomeSceneController');
        return scene?.name === 'Home' && window.__runtime?.initialized && controller?.screen && !controller.running;
    }, null, { timeout: 45000 });
    await openFromHome();
    await validateAssets(owned);
    check(await page.evaluate(() => {
        const size = window.__mainUI1.getComponent(window.__cc.UITransform);
        return Math.abs(size.width - 640) < 1 && Math.abs(size.height - 1386) < 1;
    }), 'MainUI1 uses the project 640x1386 design size');
    await validateSpriteProportions('640x1386', pngSizes);
    await screenshot('MainUI1-runtime.png', true);

    const cases = [
        ['Header/CoinButton', 'add-coins', '金币补给'],
        ['Header/GemButton', 'add-gems', '海洋珍宝'],
        ['Header/EnergyButton', 'add-energy', '活力满满'],
        ['Events/BenefitsButton', 'benefits', '福利中心'],
        ['Events/IslandGiftButton', 'island-gift', '海岛礼包'],
        ['Footer/LevelButton', 'start', '第1关'],
        ['Footer/Navigation/RankButton', 'rank', '排行榜'],
        ['Footer/Navigation/AlbumButton', 'album', '海岛图鉴'],
        ['Footer/Navigation/ShopButton', 'shop', '道具屋'],
        ['Footer/Navigation/MoreButton', 'more', '更多精彩'],
    ];
    for (const [nodePath, action, title] of cases) {
        const before = (await popupState()).actions.length;
        await clickNode(nodePath, false, true);
        const state = await popupState();
        check(state.active && state.title === title && state.actions.length === before + 1 && state.actions.at(-1).action === action,
            `${action}: one click emits one action and opens its popup`, state);
        if (action === 'benefits') {
            await validateSpriteProportions('Popup visible', pngSizes);
            await screenshot('MainUI1-popup.png', true);
            await clickNode('Header/CoinButton');
            const blocked = await popupState();
            check(blocked.active && blocked.title === title && blocked.actions.length === state.actions.length,
                'Popup shade blocks clicks on the screen underneath');
        }
        await clickNode('Popup/Panel/CloseButton', false, action === 'benefits');
        check(!(await popupState()).active, `${action}: close button dismisses popup`);
    }
    check((await popupState()).starts.length === 1, 'Start event is emitted once without loading gameplay');

    await clickNode('Footer/Navigation/MenuButton', false, true);
    check((await popupState()).message.includes('已开启'), 'Menu shows the initial local sound setting');
    await clickNode('Popup/Panel/ConfirmButton', false, true);
    const toggled = await popupState();
    check(toggled.message.includes('已关闭') && toggled.actions.at(-1).action === 'toggle-sound' && toggled.actions.at(-1).soundEnabled === false,
        'Sound button changes local UI state and emits its event');
    await clickNode('Popup/Panel/CloseButton');

    const display = await page.evaluate(async () => {
        const storage = () => JSON.stringify(Object.keys(localStorage).sort().map(key => [key, localStorage.getItem(key)]));
        const before = storage();
        const controller = window.__mainUI1.getComponent('MainUI1');
        const defaults = controller.getViewData();
        const io = { writes: 0, fetches: 0, xhrs: 0 };
        const originalSetItem = Storage.prototype.setItem, originalFetch = window.fetch, originalSend = XMLHttpRequest.prototype.send;
        Storage.prototype.setItem = function (...args) { io.writes++; return originalSetItem.apply(this, args); };
        window.fetch = function (...args) { io.fetches++; return originalFetch.apply(this, args); };
        XMLHttpRequest.prototype.send = function (...args) { io.xhrs++; return originalSend.apply(this, args); };
        try {
            controller.setViewData({ coins: 123, gems: '8万', energy: '12/30', energyTimer: '03:00后+1', level: 9, unlockHint: '新的海岛即将开启' });
            const label = path => window.__cc.find(path, window.__mainUI1).getComponent(window.__cc.Label).string;
            const values = [label('Header/CoinButton/Amount'), label('Header/GemButton/Amount'), label('Header/EnergyButton/Amount'), label('Footer/LevelButton/Title')];
            const copy = controller.getViewData();
            copy.level = 99;
            const isolated = controller.getViewData().level === 9;
            await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
            controller.setViewData(defaults);
            return { values, isolated, io, unchanged: before === storage() };
        } finally {
            Storage.prototype.setItem = originalSetItem;
            window.fetch = originalFetch;
            XMLHttpRequest.prototype.send = originalSend;
        }
    });
    check(display.values.join('|') === '123|8万|12/30|第9关' && display.isolated, 'Public display API updates labels and returns a detached value object', display);
    check(display.unchanged && Object.values(display.io).every(value => value === 0), 'setViewData performs no persistence or network I/O', display.io);

    await validateBounds({ width: 390, height: 844 }, pngSizes);
    await validateBounds({ width: 540, height: 960 }, pngSizes);
    await resizeViewport({ width: 640, height: 1386 });
    await frame();
    await clickNode('Footer/Navigation/MenuButton');
    await clickNode('Popup/Panel/ExitButton', false, true);
    await page.waitForFunction(() => !window.__cc.find('Canvas/hud/MainUI1', window.__cc.director.getScene()));
    check(await page.evaluate(() => window.__closes.length === 1), 'Menu return requests one close and UIManager removes the instance');
    await openFromHome();
    await clickNode('Header/CoinButton');
    check((await popupState()).actions.length === 1, 'Reopening through UIManager does not duplicate click listeners');
    await clickNode('Popup/Panel/ConfirmButton');
    check(!(await popupState()).active, 'Popup confirmation dismisses a regular popup');
    await page.evaluate(() => { window.__mainUI1.active = false; window.__mainUI1.active = true; });
    await frame();
    await clickNode('Header/CoinButton');
    check((await popupState()).actions.length === 2, 'Disable/enable rebinds click listeners exactly once');
    await clickNode('Popup/Panel/CloseButton');
    await clickNode('Footer/Navigation/MenuButton');
    await clickNode('Popup/Panel/ExitButton');
    await page.waitForFunction(() => !window.__cc.find('Canvas/hud/MainUI1', window.__cc.director.getScene()));

    await page.evaluate(async () => {
        const cc = window.__cc, canvas = cc.director.getScene().getChildByName('Canvas');
        for (const name of ['content', 'hud']) canvas.getChildByName(name).active = false;
        canvas.getComponent('HomeSceneController').enabled = false;
        const host = new cc.Node('MainUI1StandaloneHost');
        host.layer = canvas.layer;
        host.addComponent(cc.UITransform).setContentSize(canvas.getComponent(cc.UITransform).contentSize);
        host.setParent(canvas);
        const prefab = await new Promise((resolve, reject) => cc.resources.load('main-ui-1/MainUI1', cc.Prefab, (error, value) => error ? reject(error) : resolve(value)));
        window.__mainUI1 = cc.instantiate(prefab);
        window.__mainUI1.setParent(host);
        window.__mainUI1.getComponent(cc.Widget)?.updateAlignment();
    });
    await frame();
    await watchRoot();
    await validateAssets(owned);
    await clickNode('Events/BenefitsButton');
    check((await popupState()).title === '福利中心' && (await popupState()).actions.length === 1,
        'Prefab works when loaded and instantiated under a plain host with Home UI disabled');
    await clickNode('Popup/Panel/CloseButton');
    await page.evaluate(() => { window.__mainUI1.getComponent('MainUI1').demoFeedback = false; });
    await clickNode('Footer/LevelButton');
    const eventOnly = await popupState();
    check(!eventOnly.active && eventOnly.starts.length === 1, 'Event-only mode lets another project own its gameplay and dialogs');
    await validateSpriteProportions('Standalone prefab', pngSizes);
    await screenshot('standalone-prefab.png');
    check(unexpectedRequests.length === 0, 'Validation makes no external or gameplay-server requests', unexpectedRequests);
    check(errors.length === 0, 'Browser has no uncaught errors or missing script classes', errors);
    fs.writeFileSync(path.join(output, 'result.json'), JSON.stringify({ passed: true, checks: results.length, results, screenshots }, null, 2));
    console.log(`MainUI1 runtime validation complete: ${results.length} checks.`);
}

main().catch(async error => {
    console.error(error);
    try { if (page) await screenshot('failure.png'); } catch { /* Preserve the original failure. */ }
    fs.mkdirSync(output, { recursive: true });
    fs.writeFileSync(path.join(output, 'result.json'), JSON.stringify({ passed: false, checks: results.length, results, errors, failure: error.stack, screenshots }, null, 2));
    process.exitCode = 1;
}).finally(async () => {
    await browser?.close();
    if (server.listening) await new Promise(resolve => server.close(resolve));
});
