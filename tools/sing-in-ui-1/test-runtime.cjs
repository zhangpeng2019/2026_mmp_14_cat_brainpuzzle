'use strict';

// Run against a fresh development Web build: node tools/sing-in-ui-1/test-runtime.cjs
// Uses isolated browser storage and a loopback-only static server; no data server.
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const assert = require('node:assert/strict');
const { chromium } = require('playwright');

const root = path.resolve(__dirname, '../..');
const web = path.join(root, 'build/web-desktop');
const moduleDir = path.join(root, 'assets/resources/sing-in-ui-1');
const output = path.join(root, 'build/sing-in-ui-1-validation');
const deliverables = path.join(root, 'deliverables/SingInUI1');
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
        const node = cc.find(nodePath, fromScene ? scene : window.__singInUI1);
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
            const cc = window.__cc, button = cc.find(nodePath, window.__singInUI1).getComponent(cc.Button);
            const scale = button.target.scale;
            return Math.abs(scale.x - 1) < 0.0001 && Math.abs(scale.y - 1) < 0.0001;
        }, nodePath);
        await page.mouse.move(x, y);
        await page.mouse.down();
        const pressed = await page.evaluate(async nodePath => {
            const cc = window.__cc, button = cc.find(nodePath, window.__singInUI1).getComponent(cc.Button);
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
        window.__claims = [];
        window.__closes = [];
        for (const [event, list] of [['sing-in-ui-1:action', '__actions'], ['sing-in-ui-1:claim', '__claims'], ['sing-in-ui-1:close', '__closes']]) {
            window.__singInUI1.on(event, detail => window[list].push(detail ? { ...detail } : null));
        }
    });
}

async function waitForDialog() {
    await page.waitForFunction(() => {
        const root = window.__cc.find('Canvas/modal/SingInUI1', window.__cc.director.getScene());
        if (!root?.activeInHierarchy || !root.getComponent('SingInUI1')) return false;
        window.__singInUI1 = root;
        return true;
    });
    await frame();
    await watchRoot();
}

async function openFromRoom() {
    await clickNode('Canvas/hud/MainUI2/Room/Header/SignInButton', true);
    await waitForDialog();
}

async function state() {
    return page.evaluate(() => {
        const cc = window.__cc, root = window.__singInUI1, controller = root.getComponent('SingInUI1');
        const label = path => cc.find(path, root).getComponent(cc.Label).string;
        return {
            view: controller.getViewData(), actions: [...window.__actions], claims: [...window.__claims], closes: [...window.__closes],
            claimEnabled: cc.find('Content/ClaimButton', root).getComponent(cc.Button).interactable,
            tripleEnabled: cc.find('Content/TripleButton', root).getComponent(cc.Button).interactable,
            claimLabel: label('Content/ClaimButton/Label'), status: label('Content/Status'),
            tutorial: cc.find('Content/TutorialHand', root).active,
            days: Array.from({ length: 7 }, (_, i) => {
                const card = cc.find(`Content/Panel/Days/Day${i + 1}`, root);
                return { selected: card.getChildByName('Selected').active,
                    claimed: card.getChildByName('Claimed').active,
                    reward: card.getChildByName('RewardLabel').getComponent(cc.Label).string };
            }),
        };
    });
}

async function reset(data) {
    await page.evaluate(data => {
        const controller = window.__singInUI1.getComponent('SingInUI1');
        controller.demoFeedback = true;
        controller.resetDemo();
        if (data) controller.setViewData(data);
        window.__actions.length = 0;
        window.__claims.length = 0;
        window.__closes.length = 0;
    }, data);
    await frame();
}

async function screenshot(filename, delivery = false) {
    const file = path.join(delivery ? deliverables : output, filename);
    await page.screenshot({ path: file });
    screenshots.push(path.relative(root, file).replaceAll('\\', '/'));
}

async function validateAssets(owned) {
    const state = await page.evaluate(() => {
        const cc = window.__cc, root = window.__singInUI1;
        return {
            bound: !!root.getComponent('SingInUI1'),
            sprites: root.getComponentsInChildren(cc.Sprite).map(sprite => ({
                node: sprite.node.name, uuid: sprite.spriteFrame?._uuid,
                valid: !!(sprite.spriteFrame && cc.isValid(sprite.spriteFrame) && sprite.spriteFrame.texture),
            })),
        };
    });
    check(state.bound, 'Prefab has the actual SingInUI1 component bound');
    check(state.sprites.length > 15 && state.sprites.every(sprite => sprite.valid && owned.includes(sprite.uuid)),
        'Every SpriteFrame is valid and owned by sing-in-ui-1', state.sprites.filter(sprite => !sprite.valid || !owned.includes(sprite.uuid)));
}

async function validateProportions(label, pngSizes) {
    const sprites = await page.evaluate(() => {
        const cc = window.__cc, root = window.__singInUI1;
        return root.getComponentsInChildren(cc.Sprite).map(sprite => {
            const names = [];
            for (let node = sprite.node; node && node !== root; node = node.parent) names.unshift(node.name);
            return { path: names.join('/'), uuid: sprite.spriteFrame?._uuid,
                original: sprite.spriteFrame?.originalSize,
                size: sprite.node.getComponent(cc.UITransform).contentSize,
                scale: { x: sprite.node.worldScale.x, y: sprite.node.worldScale.y } };
        });
    });
    const failures = sprites.filter(sprite => {
        const png = pngSizes[sprite.uuid];
        if (!png || !sprite.original || sprite.original.width !== png.width || sprite.original.height !== png.height) return true;
        if (Math.abs(Math.abs(sprite.scale.x / sprite.scale.y) - 1) > 0.0001) return true;
        return sprite.path !== 'Shade' && Math.abs((sprite.size.width / sprite.size.height) / (png.width / png.height) - 1) > 0.0001;
    });
    check(failures.length === 0, `${label}: all art keeps its PNG aspect ratio and equal-axis scale`, failures);
}

async function resizeViewport(viewport) {
    await page.setViewportSize(viewport);
    await page.evaluate(({ width, height }) => {
        window.__cc.screen.windowSize = new window.__cc.Size(width, height);
    }, viewport);
    await page.waitForFunction(({ width, height }) => {
        const size = window.__singInUI1.getComponent(window.__cc.UITransform);
        return Math.abs(size.height / size.width - height / width) < 0.003;
    }, viewport, { timeout: 5000 });
    await frame();
}

async function validateBounds(viewport, pngSizes) {
    await resizeViewport(viewport);
    const bounds = await page.evaluate(() => {
        const cc = window.__cc, root = window.__singInUI1;
        const canvas = cc.director.getScene().getChildByName('Canvas').getComponent(cc.UITransform).getBoundingBoxToWorld();
        const paths = ['Content/Panel', 'Content/Panel/CloseButton', 'Content/TripleButton', 'Content/ClaimButton', 'Content/Status', 'Content/CloseHint',
            ...Array.from({ length: 7 }, (_, i) => `Content/Panel/Days/Day${i + 1}`)];
        return paths.map(path => {
            const node = cc.find(path, root), box = node.getComponent(cc.UITransform).getBoundingBoxToWorld();
            return { path, inside: node.activeInHierarchy && box.x >= canvas.x - 1 && box.xMax <= canvas.xMax + 1 && box.y >= canvas.y - 1 && box.yMax <= canvas.yMax + 1 };
        });
    });
    check(bounds.every(item => item.inside), `${viewport.width}x${viewport.height}: panel, seven cards and controls remain inside the screen`, bounds.filter(item => !item.inside));
    await validateProportions(`${viewport.width}x${viewport.height}`, pngSizes);
    await clickNode('Content/Panel/Days/Day7');
    check((await state()).days[6].selected, `${viewport.width}x${viewport.height}: card remains clickable after adaptation`);
    await screenshot(`layout-${viewport.width}x${viewport.height}.png`);
}

async function closeWithShade() {
    // Click a true blank part of the full-screen shade; clicking its center
    // would hit the panel above it and would not exercise backdrop dismissal.
    const canvas = await page.locator('canvas').boundingBox();
    await page.mouse.click(canvas.x + canvas.width * 0.025, canvas.y + canvas.height * 0.03);
    await frame();
}

async function waitForClosed() {
    await page.waitForFunction(() => !window.__cc.find('Canvas/modal/SingInUI1', window.__cc.director.getScene()));
}

async function validateDataApi() {
    const data = await page.evaluate(() => {
        const controller = window.__singInUI1.getComponent('SingInUI1');
        controller.resetDemo();
        const labels = Array.from({ length: 7 }, (_, i) => `独立奖励 ${i + 1}`), claimed = [5, 1, 5];
        controller.setViewData({ currentDay: 7, claimedDays: claimed, rewardLabels: labels });
        claimed.push(7); labels[0] = 'mutated';
        const inputDetached = controller.getViewData().rewardLabels[0] === '独立奖励 1'
            && JSON.stringify(controller.getViewData().claimedDays) === '[1,5]';
        const copy = controller.getViewData();
        copy.currentDay = 2; copy.claimedDays.push(7); copy.rewardLabels[0] = 'mutated';
        const outputDetached = controller.getViewData().currentDay === 7
            && !controller.getViewData().claimedDays.includes(7) && controller.getViewData().rewardLabels[0] === '独立奖励 1';
        const before = JSON.stringify(controller.getViewData());
        const invalid = [{ currentDay: 0 }, { currentDay: 8 }, { currentDay: 1.5 }, { currentDay: NaN },
            { claimedDays: [0] }, { claimedDays: [8] }, { claimedDays: [2.5] }, { claimedDays: [1, '2'] },
            { rewardLabels: [] }, { rewardLabels: Array(7).fill('') }, { rewardLabels: Array(7).fill(123) },
            { claimedDays: null }, { rewardLabels: null }, { claimedDays: Array(2) }, { rewardLabels: Array(7) }];
        const rejected = invalid.map(value => {
            let threw = false;
            try { controller.setViewData(value); } catch { threw = true; }
            return { threw, unchanged: JSON.stringify(controller.getViewData()) === before };
        });
        const cc = window.__cc;
        const shown = Array.from({ length: 7 }, (_, i) => cc.find(`Content/Panel/Days/Day${i + 1}/RewardLabel`, window.__singInUI1).getComponent(cc.Label).string);
        return { inputDetached, outputDetached, rejected, shown, current: controller.getViewData() };
    });
    check(data.inputDetached && data.outputDetached, 'Display API owns copies of incoming and returned arrays', data);
    check(data.current.currentDay === 7 && JSON.stringify(data.current.claimedDays) === '[1,5]', 'Display API supports day seven and sorts/deduplicates claimed days');
    check(data.shown.every((label, i) => label === `独立奖励 ${i + 1}`), 'All seven reward labels are editable through the public display API');
    check(data.rejected.length === 15 && data.rejected.every(item => item.threw && item.unchanged), 'Invalid view data, including null and sparse arrays, is rejected atomically', data.rejected);
}

async function startIoAudit() {
    await page.evaluate(() => {
        const snapshot = () => JSON.stringify(Object.keys(localStorage).sort().map(key => [key, localStorage.getItem(key)]));
        const audit = window.__ioAudit = { writes: 0, fetches: 0, xhrs: 0, before: snapshot(), snapshot,
            setItem: Storage.prototype.setItem, fetch: window.fetch, send: XMLHttpRequest.prototype.send };
        Storage.prototype.setItem = function (...args) { audit.writes++; return audit.setItem.apply(this, args); };
        window.fetch = function (...args) { audit.fetches++; return audit.fetch.apply(this, args); };
        XMLHttpRequest.prototype.send = function (...args) { audit.xhrs++; return audit.send.apply(this, args); };
    });
}

async function finishIoAudit() {
    const io = await page.evaluate(() => {
        const audit = window.__ioAudit;
        Storage.prototype.setItem = audit.setItem; window.fetch = audit.fetch; XMLHttpRequest.prototype.send = audit.send;
        return { writes: audit.writes, fetches: audit.fetches, xhrs: audit.xhrs, unchanged: audit.before === audit.snapshot() };
    });
    check(io.unchanged && !io.writes && !io.fetches && !io.xhrs, 'Selection, claim, triple claim and display updates perform no storage or network I/O', io);
}

async function main() {
    fs.mkdirSync(output, { recursive: true });
    fs.mkdirSync(deliverables, { recursive: true });
    assert.ok(fs.existsSync(path.join(web, 'index.html')), 'Run npm run build:web first');
    const owned = ownedUuids(), pngSizes = pngSizesByUuid();
    const prefab = JSON.parse(fs.readFileSync(path.join(moduleDir, 'SingInUI1.prefab'), 'utf8'));
    const references = [...JSON.stringify(prefab).matchAll(/"__uuid__":"([^"]+)"/g)].map(match => match[1]);
    check(references.length > 0 && references.every(uuid => owned.includes(uuid)), 'Serialized Prefab has no references outside its own module');
    const script = fs.readFileSync(path.join(moduleDir, 'scripts/SingInUI1.ts'), 'utf8');
    check([...script.matchAll(/from\s+['"]([^'"]+)['"]/g)].every(match => match[1] === 'cc'), 'Portable presentation script imports only the engine');
    await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
    browser = await chromium.launch({ channel: process.env.FRAMEWORK_BROWSER || 'chrome', headless: true, args: ['--enable-unsafe-swiftshader'] });
    const context = await browser.newContext({ viewport: { width: 640, height: 1386 }, deviceScaleFactor: 1 });
    const url = `http://127.0.0.1:${server.address().port}`, unexpectedRequests = [];
    await context.route('**/*', route => {
        const requestUrl = route.request().url();
        if (!requestUrl.startsWith(url + '/') && !requestUrl.startsWith('data:') && !requestUrl.startsWith('blob:')) {
            unexpectedRequests.push(requestUrl); return route.abort();
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
    await clickNode('Canvas/content/FrameworkScreen/Action5', true);
    await page.waitForFunction(() => !!window.__cc.find('Canvas/hud/MainUI2', window.__cc.director.getScene()));
    await openFromRoom();
    await validateAssets(owned);
    check(await page.evaluate(() => {
        const size = window.__singInUI1.getComponent(window.__cc.UITransform);
        return Math.abs(size.width - 640) < 1 && Math.abs(size.height - 1386) < 1;
    }), 'SingInUI1 uses the project 640x1386 design size');
    const initial = await state();
    check(initial.view.currentDay === 1 && initial.view.claimedDays.length === 0 && initial.claimEnabled && initial.tripleEnabled && initial.days[0].selected,
        'Default state offers the first day and highlights it', initial);
    check(await page.evaluate(() => !window.__cc.find('Canvas/hud/MainUI2/Popup', window.__cc.director.getScene()).active),
        'Home host opens SingInUI1 over MainUI2 without leaving its placeholder popup underneath');
    await validateProportions('Default view', pngSizes);
    await screenshot('SingInUI1-runtime.png', true);
    await startIoAudit();

    for (let day = 1; day <= 7; day++) {
        const before = (await state()).actions.length;
        await clickNode(`Content/Panel/Days/Day${day}`, false, day === 3);
        const selected = await state();
        check(selected.days.filter(item => item.selected).length === 1 && selected.days[day - 1].selected
            && selected.actions.length === before + 1 && selected.actions.at(-1).action === 'select-day' && selected.actions.at(-1).day === day
            && selected.view.currentDay === 1 && selected.closes.length === 0,
        `Day ${day}: card changes only selection and emits one event without closing or changing today's reward`, selected);
    }
    await clickNode('Content/ClaimButton', false, true);
    const claimed = await state();
    check(claimed.claims.length === 1 && JSON.stringify(claimed.claims[0]) === '{"day":1,"multiplier":1}'
        && claimed.view.claimedDays.includes(1) && claimed.days[0].claimed && !claimed.claimEnabled && !claimed.tripleEnabled
        && claimed.claimLabel === '演示已领取' && !claimed.tutorial,
    'Claim awards the current day once, marks it and disables both actions without advancing the day', claimed);
    await screenshot('SingInUI1-claimed.png', true);
    await clickNode('Content/ClaimButton');
    await clickNode('Content/TripleButton');
    check((await state()).claims.length === 1, 'Repeated clicks on either disabled action cannot claim twice');
    await page.evaluate(() => { window.__singInUI1.active = false; window.__singInUI1.active = true; });
    await frame();
    await clickNode('Content/ClaimButton');
    check((await state()).claims.length === 1 && !(await state()).claimEnabled, 'Disable/enable preserves the claimed state and does not allow a second claim');

    await reset({ currentDay: 7, claimedDays: [1, 2, 3, 4, 5, 6] });
    await clickNode('Content/TripleButton', false, true);
    const triple = await state();
    check(triple.claims.length === 1 && JSON.stringify(triple.claims[0]) === '{"day":7,"multiplier":3}'
        && triple.view.claimedDays.length === 7 && triple.days.every(day => day.claimed),
    'Triple claim emits multiplier three for day seven and handles all days claimed', triple);
    await clickNode('Content/TripleButton');
    check((await state()).claims.length === 1, 'Triple claim is also protected against repeat clicks');
    await validateDataApi();
    await reset({ currentDay: 3, claimedDays: [3] });
    check(!(await state()).claimEnabled && !(await state()).tripleEnabled && (await state()).days[2].claimed, 'Host-supplied already-claimed current day disables both actions');
    await reset();
    await page.evaluate(() => {
        const controller = window.__singInUI1.getComponent('SingInUI1');
        controller.demoFeedback = false;
    });
    await clickNode('Content/TripleButton');
    const requested = await state();
    check(requested.claims.length === 1 && requested.claims[0].multiplier === 3 && requested.view.claimedDays.length === 0
        && !requested.claimEnabled && !requested.tripleEnabled,
    'Event-only mode sends one request and waits for the host without granting a reward', requested);
    await clickNode('Content/ClaimButton');
    check((await state()).claims.length === 1, 'Event-only pending request blocks duplicate actions');
    await page.evaluate(() => window.__singInUI1.getComponent('SingInUI1').setViewData({}));
    check((await state()).claimEnabled && (await state()).tripleEnabled, 'Host display update can release an event-only request for retry');
    await clickNode('Content/ClaimButton');
    check((await state()).claims.length === 2 && (await state()).claims[1].multiplier === 1, 'Retry emits exactly one new request');

    await reset();
    await page.evaluate(() => {
        const cc = window.__cc, root = window.__singInUI1;
        root.once('sing-in-ui-1:claim', () => cc.find('Content/ClaimButton', root).emit(cc.Button.EventType.CLICK));
    });
    await clickNode('Content/ClaimButton');
    check((await state()).claims.length === 1, 'Synchronous reentrant click during claim dispatch cannot grant twice');
    await reset();
    const restored = await state();
    check(restored.view.currentDay === 1 && restored.view.claimedDays.length === 0 && restored.claimEnabled && restored.tripleEnabled
        && restored.days.every(day => !day.claimed), 'resetDemo restores all default local presentation state');
    await finishIoAudit();

    await validateBounds({ width: 640, height: 1386 }, pngSizes);
    await validateBounds({ width: 390, height: 844 }, pngSizes);
    await validateBounds({ width: 540, height: 960 }, pngSizes);
    await resizeViewport({ width: 640, height: 1386 });
    const beforeActions = (await state()).actions.length;
    await page.evaluate(() => { window.__singInUI1.active = false; window.__singInUI1.active = true; });
    await frame();
    await clickNode('Content/Panel/Days/Day2');
    check((await state()).actions.length === beforeActions + 1, 'Disable/enable binds each card listener exactly once');
    await clickNode('Content/Panel/CloseButton');
    await waitForClosed();
    check(await page.evaluate(() => window.__closes.length === 1), 'Close X emits once and the existing UIManager destroys the dialog');
    await openFromRoom();
    await clickNode('Content/Panel/Days/Day2');
    check((await state()).actions.length === 1 && (await state()).claims.length === 0 && (await state()).view.claimedDays.length === 0,
        'Reopening starts a new demo without persistent state or duplicate listeners');
    await closeWithShade();
    await waitForClosed();
    check(await page.evaluate(() => window.__closes.length === 1), 'Clicking empty shade closes the dialog once');

    await clickNode('Canvas/hud/MainUI2/Room/Header/SettingsButton', true);
    await clickNode('Canvas/hud/MainUI2/Popup/Panel/ExitButton', true);
    await page.waitForFunction(() => !window.__cc.find('Canvas/hud/MainUI2', window.__cc.director.getScene()));
    await clickNode('Canvas/content/FrameworkScreen/Action6', true);
    await waitForDialog();
    check((await state()).view.currentDay === 1, 'Home also has a direct independent SingInUI1 preview entry');
    await clickNode('Content/Panel/CloseButton');
    await waitForClosed();

    await page.evaluate(async () => {
        const cc = window.__cc, canvas = cc.director.getScene().getChildByName('Canvas');
        for (const name of ['content', 'hud', 'modal']) canvas.getChildByName(name).active = false;
        canvas.getComponent('HomeSceneController').enabled = false;
        const host = new cc.Node('SingInUI1StandaloneHost');
        host.layer = canvas.layer;
        host.addComponent(cc.UITransform).setContentSize(canvas.getComponent(cc.UITransform).contentSize);
        host.setParent(canvas);
        const prefab = await new Promise((resolve, reject) => cc.resources.load('sing-in-ui-1/SingInUI1', cc.Prefab, (error, value) => error ? reject(error) : resolve(value)));
        window.__singInUI1 = cc.instantiate(prefab);
        window.__singInUI1.setParent(host);
        window.__singInUI1.getComponent(cc.Widget)?.updateAlignment();
    });
    await frame();
    await watchRoot();
    await validateAssets(owned);
    await validateProportions('Standalone prefab', pngSizes);
    await clickNode('Content/Panel/Days/Day4');
    await clickNode('Content/ClaimButton');
    check((await state()).claims.length === 1 && (await state()).claims[0].day === 1, 'Portable prefab operates under a plain Canvas host with Home UI disabled');
    await clickNode('Content/Panel/CloseButton');
    check((await state()).closes.length === 1 && await page.evaluate(() => window.__cc.isValid(window.__singInUI1)),
        'Standalone close emits a request and leaves destruction to the receiving host');
    await screenshot('standalone-prefab.png');
    check(unexpectedRequests.length === 0, 'Validation makes no external, data-server or ad requests', unexpectedRequests);
    check(errors.length === 0, 'Browser has no uncaught errors or missing script classes', errors);
    fs.writeFileSync(path.join(output, 'result.json'), JSON.stringify({ passed: true, checks: results.length, results, screenshots }, null, 2));
    console.log(`SingInUI1 runtime validation complete: ${results.length} checks.`);
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
