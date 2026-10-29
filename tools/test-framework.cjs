/* Focused lifecycle regression tests. The Cocos boundary is mocked; runtime scene
 * rendering is separately checked in test-runtime.cjs / the Creator web build. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');

function harness() {
    const loads = [];
    const launches = [];
    const destroyQueue = [];
    class Asset {
        constructor() { this.refCount = 0; }
        addRef() { this.refCount++; return this; }
        decRef() { this.refCount--; assert.ok(this.refCount >= 0, 'reference underflow'); return this; }
    }
    class Prefab extends Asset {}
    class SpriteFrame extends Asset {}
    class JsonAsset extends Asset {}
    class Node {
        static EventType = { NODE_DESTROYED: 'node-destroyed' };
        constructor(name = 'View') {
            this.name = name; this.children = []; this.listeners = [];
            this.layer = 1; this.active = true; this.destroyed = false; this.destroying = false;
        }
        addComponent(Type) { return new Type(); }
        setParent(parent) {
            if (this.parent) this.parent.children.splice(this.parent.children.indexOf(this), 1);
            this.parent = parent; parent.children.push(this);
        }
        setSiblingIndex(index) {
            const siblings = this.parent.children;
            siblings.splice(siblings.indexOf(this), 1); siblings.splice(index, 0, this);
        }
        once(event, callback, target) { this.listeners.push({ event, callback, target }); }
        off(event, callback, target) {
            this.listeners = this.listeners.filter(x => !(x.event === event && x.callback === callback && x.target === target));
        }
        destroy() { if (!this.destroyed && !this.destroying) { this.destroying = true; destroyQueue.push(this); } }
        flushDestroy() {
            if (this.destroyed) return;
            this.destroyed = true;
            for (const listener of [...this.listeners]) listener.callback.call(listener.target);
            this.listeners = [];
            for (const child of [...this.children]) child.flushDestroy();
        }
    }
    class UITransform {}
    class Widget { updateAlignment() {} }
    const director = {
        accept: true,
        scene: 'Boot',
        getScene() { return { name: this.scene }; },
        loadScene(name, callback) {
            launches.push({ name, callback: error => { if (!error) this.scene = name; callback(error); } });
            return this.accept;
        },
    };
    const cc = {
        Asset, Prefab, SpriteFrame, JsonAsset, Node, UITransform, Widget, director,
        isValid: (value, strict = false) => !!value && !value.destroyed && (!strict || !value.destroying),
        instantiate: () => new Node(),
        resources: {
            load(resourcePath, Type, callback) { loads.push({ path: resourcePath, Type, callback }); },
            preload(resourcePath, Type, callback) { callback(null); },
        },
    };
    const modules = new Map();
    function loadModule(name) {
        if (modules.has(name)) return modules.get(name);
        const file = path.join(__dirname, '../assets/scripts/framework', name + '.ts');
        const code = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
            compilerOptions: { target: ts.ScriptTarget.ES2020, module: ts.ModuleKind.CommonJS },
        }).outputText;
        const module = { exports: {} };
        const requireLocal = dependency => dependency === 'cc' ? cc : loadModule(dependency.slice(2));
        vm.runInThisContext(`(function(require,module,exports){${code}\n})`, { filename: file })(requireLocal, module, module.exports);
        modules.set(name, module.exports);
        return module.exports;
    }
    return {
        cc, loads, launches, loadModule,
        flushDestroy() { while (destroyQueue.length) destroyQueue.shift().flushDestroy(); },
    };
}

const tick = async () => { await Promise.resolve(); await Promise.resolve(); };
const tests = [];
function test(name, run) { tests.push({ name, run }); }

test('resources share pending work and cache exactly one reference', async () => {
    const h = harness(), { ResourceLoader: R } = h.loadModule('ResourceLoader');
    const first = R.load('ui/Dialog', h.cc.Prefab), second = R.load('ui/Dialog', h.cc.Prefab);
    assert.equal(first, second); assert.equal(h.loads.length, 1);
    const asset = new h.cc.Prefab(); h.loads[0].callback(null, asset);
    assert.equal(await first, asset); assert.equal(await second, asset);
    assert.equal(await R.load('ui/Dialog', h.cc.Prefab), asset);
    assert.equal(asset.refCount, 1); R.releaseAll(); assert.equal(asset.refCount, 0);
});

test('failed resources can retry without a poisoned pending cache', async () => {
    const h = harness(), { ResourceLoader: R } = h.loadModule('ResourceLoader');
    const failed = R.load('retry', h.cc.Prefab);
    const checked = assert.rejects(failed, /network/);
    h.loads[0].callback(new Error('network')); await checked;
    const retry = R.load('retry', h.cc.Prefab);
    assert.equal(h.loads.length, 2);
    h.loads[1].callback(null, new h.cc.Prefab()); await retry; R.releaseAll();
});

test('release cancels old consumers while an immediate reload reuses physical loading', async () => {
    const h = harness(), { ResourceLoader: R } = h.loadModule('ResourceLoader');
    const old = R.load('pending', h.cc.Prefab);
    const rejected = assert.rejects(old, { name: 'ResourceLoadCancelledError' });
    R.release('pending', h.cc.Prefab);
    const fresh = R.load('pending', h.cc.Prefab);
    assert.notEqual(old, fresh); assert.equal(h.loads.length, 1);
    const asset = new h.cc.Prefab(); h.loads[0].callback(null, asset);
    await rejected; assert.equal(await fresh, asset); assert.equal(asset.refCount, 1);
    R.releaseAll(); assert.equal(asset.refCount, 0);
});

test('late completions do not resurrect released assets; retain protects pending and cached entries', async () => {
    const h = harness(), { ResourceLoader: R } = h.loadModule('ResourceLoader');
    const cancelled = R.load('discard', h.cc.Prefab);
    const rejected = assert.rejects(cancelled, { name: 'ResourceLoadCancelledError' });
    R.retain('persistent', h.cc.Prefab);
    const persistent = R.load('persistent', h.cc.Prefab);
    R.releaseAll(); await rejected;
    const discarded = new h.cc.Prefab(), retained = new h.cc.Prefab();
    h.loads[0].callback(null, discarded); h.loads[1].callback(null, retained);
    await persistent; assert.equal(discarded.refCount, 0); assert.equal(retained.refCount, 1);
    R.releaseAll(); assert.equal(retained.refCount, 1);
    R.unretain('persistent', h.cc.Prefab); R.releaseAll(); assert.equal(retained.refCount, 0);
});

test('UI destroyed during prefab loading rejects and never attaches late nodes', async () => {
    const h = harness(), { UIManager } = h.loadModule('UIManager');
    const canvas = new h.cc.Node('Canvas'), ui = new UIManager(canvas);
    const opening = ui.open('ui/Dialog');
    const rejected = assert.rejects(opening, { name: 'UIOpenCancelledError' });
    ui.destroy(); h.flushDestroy();
    const prefab = new h.cc.Prefab(); h.loads[0].callback(null, prefab); await rejected;
    assert.ok(canvas.children.every(node => node.destroyed));
    h.loadModule('ResourceLoader').ResourceLoader.releaseAll(); assert.equal(prefab.refCount, 0);
});

test('UI close hooks run once and prefab ownership ends at physical node destruction', async () => {
    const h = harness(), { UIManager } = h.loadModule('UIManager');
    const ui = new UIManager(new h.cc.Node('Canvas')); let closes = 0;
    const opening = ui.open('ui/Dialog', { modal: true, onClose: () => closes++ });
    const prefab = new h.cc.Prefab(); h.loads[0].callback(null, prefab);
    const node = await opening; assert.equal(prefab.refCount, 2);
    h.loadModule('ResourceLoader').ResourceLoader.releaseAll(); assert.equal(prefab.refCount, 1);
    ui.popModal(); ui.close(node); assert.equal(closes, 1); assert.equal(prefab.refCount, 1);
    h.flushDestroy(); assert.equal(prefab.refCount, 0); assert.equal(closes, 1);
    ui.destroy(); h.flushDestroy();
});

test('externally destroyed modals leave the stack and run onClose once', async () => {
    const h = harness(), { UIManager } = h.loadModule('UIManager');
    const ui = new UIManager(new h.cc.Node()); let closes = 0;
    const opening = ui.open('ui/Dialog', { layer: 'modal', onClose: () => closes++ });
    const prefab = new h.cc.Prefab(); h.loads[0].callback(null, prefab);
    const node = await opening; node.destroy(); h.flushDestroy();
    ui.popModal(); ui.clearModals(); assert.equal(closes, 1); assert.equal(prefab.refCount, 1);
    ui.destroy(); h.flushDestroy(); h.loadModule('ResourceLoader').ResourceLoader.releaseAll();
});

test('closing a UI while asynchronous onOpen runs rejects opening and releases ownership', async () => {
    const h = harness(), { UIManager } = h.loadModule('UIManager');
    const ui = new UIManager(new h.cc.Node()); let finish, closes = 0;
    const ready = new Promise(resolve => { finish = resolve; });
    const opening = ui.open('ui/Dialog', { onOpen: () => ready, onClose: () => closes++ });
    const rejected = assert.rejects(opening, { name: 'UIOpenCancelledError' });
    const prefab = new h.cc.Prefab(); h.loads[0].callback(null, prefab); await tick();
    ui.destroy(); h.flushDestroy(); finish(); await rejected;
    assert.equal(closes, 1); assert.equal(prefab.refCount, 1);
    h.loadModule('ResourceLoader').ResourceLoader.releaseAll(); assert.equal(prefab.refCount, 0);
});

test('scene transitions expose payload before launch and reject concurrent requests', async () => {
    const h = harness(), { SceneFlow: S } = h.loadModule('SceneFlow'); const order = [];
    S.configure({ before: transition => order.push('before:' + transition.to.scene), after: () => order.push('after') });
    const move = S.enterGame({ feature: 'example' });
    await assert.rejects(S.goHome(), { name: 'SceneTransitionBusyError' }); await tick();
    assert.equal(S.getContext().scene, 'Game'); assert.equal(S.getContext().payload.feature, 'example');
    h.launches[0].callback(null); await move;
    assert.deepEqual(order, ['before:Game', 'after']); assert.equal(S.isChanging, false);
});

test('scene failure rolls back context and permits retry; synchronous rejection never hangs', async () => {
    const h = harness(), { SceneFlow: S } = h.loadModule('SceneFlow'); let errors = 0;
    S.configure({ error: () => errors++ });
    const move = S.enterGame({ value: 42 }); const failed = assert.rejects(move, /missing/); await tick();
    h.launches[0].callback(new Error('missing')); await failed;
    assert.equal(S.getContext().scene, 'Boot'); assert.equal(S.isChanging, false); assert.equal(errors, 1);
    h.cc.director.accept = false;
    await assert.rejects(S.goHome(), /Cocos rejected/); assert.equal(S.getContext().scene, 'Boot');
    h.cc.director.accept = true;
    const retry = S.goHome(); await tick(); h.launches[2].callback(null); await retry;
    assert.equal(S.getContext().scene, 'Home');
});

test('before-hook failure does not launch; after-hook failure retains the launched scene context', async () => {
    const h = harness(), { SceneFlow: S } = h.loadModule('SceneFlow');
    S.configure({ before: () => { throw new Error('before failed'); } });
    await assert.rejects(S.goHome(), /before failed/); assert.equal(h.launches.length, 0);
    assert.equal(S.getContext().scene, 'Boot');
    S.configure({ after: () => { throw new Error('after failed'); } });
    const move = S.goHome(), failed = assert.rejects(move, /after failed/);
    await tick(); h.launches[0].callback(null); await failed;
    assert.equal(S.getContext().scene, 'Home'); assert.equal(S.isChanging, false);
});

test('direct Creator scene previews synchronize context and transition origin', async () => {
    const h = harness(), { SceneFlow: S } = h.loadModule('SceneFlow');
    h.cc.director.scene = 'Game';
    assert.equal(S.getContext().scene, 'Game'); assert.equal(S.getContext().payload, undefined);
    let origin;
    S.configure({ before: transition => { origin = transition.from.scene; } });
    const move = S.goHome(); await tick(); assert.equal(origin, 'Game');
    h.launches[0].callback(null); await move; assert.equal(S.getContext().scene, 'Home');
});

(async () => {
    for (const { name, run } of tests) { await run(); console.log('PASS ' + name); }
    console.log(`Framework lifecycle checks: ${tests.length} passed.`);
})().catch(error => { console.error(error); process.exitCode = 1; });
