const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const { EventEmitter } = require('node:events');
const root = path.resolve(__dirname, '..');
const modules = new Map();
class MemoryStorage {
  values = new Map(); fail = false;
  getItem(key) { return this.values.get(key) ?? null; }
  setItem(key, value) { if (this.fail) throw new Error('storage unavailable'); this.values.set(key, value); }
  removeItem(key) { this.values.delete(key); }
}
const events = new EventEmitter();
const cc = { Game: { EVENT_HIDE: 'hide', EVENT_SHOW: 'show' }, game: events,
  sys: { platform: 'WEB', isNative: false, localStorage: new MemoryStorage() }, JsonAsset: class {},
  resources: { load() { throw new Error('Tests must inject configLoader'); } } };
function load(file) {
  file = path.resolve(root, 'assets/scripts/framework', file);
  if (!path.extname(file)) file += '.ts';
  if (modules.has(file)) return modules.get(file).exports;
  const module = { exports: {} }; modules.set(file, module);
  const code = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
    compilerOptions: { target: ts.ScriptTarget.ES2020, module: ts.ModuleKind.CommonJS, strict: true }
  }).outputText;
  new Function('require', 'module', 'exports', code)(id => {
    if (id === 'cc') return cc;
    if (id.startsWith('.')) return load(path.resolve(path.dirname(file), id));
    return require(id);
  }, module, module.exports);
  return module.exports;
}
const { DataStore, EMPTY_SCHEMA } = load('storage/DataStore');
const { CloudSession } = load('storage/CloudSession');
const { LoginMode, resolveNetworkConfig, getSaveStorageKey } = load('network/NetworkConfig');
const { GuestLoginProvider } = load('network/PlayerLogin');
const { EasyServerClient, EasyServerError, XmlHttpTransport } = load('network/EasyServerClient');
const { MiniGameTransport } = load('network/MiniGameTransport');
const { FrameworkRuntime: Runtime } = load('FrameworkRuntime');
const raw = { enabled: false, logEnabled: false, gameId: 'test_app', baseUrl: 'http://127.0.0.1:28515',
  externalBaseUrl: 'https://example.test/data', timeoutMs: 100, saveDebounceMs: 100000,
  retryBaseMs: 100000, retryMaxMs: 100000, headers: {} };
const config = (mode = LoginMode.Local, overrides = {}) => resolveNetworkConfig({ ...raw, ...overrides }, mode);
const snap = data => ({ version: 1, data });
const reply = data => ({ status: 200, body: JSON.stringify(data) });
const missing = { status: 404, body: '' };
const deferred = () => { let resolve, reject; const promise = new Promise((a, b) => { resolve = a; reject = b; }); return { promise, resolve, reject }; };
const sessions = [];
function setup({ storage = new MemoryStorage(), player = 'player-a', transport, provider, schema = EMPTY_SCHEMA } = {}) {
  const store = new DataStore(storage, schema);
  const cloud = new CloudSession(store, storage, provider ?? { login: async () => ({ playerId: player }) }, transport);
  sessions.push(cloud);
  return { store, cloud, storage };
}
function server(initial = snap({})) {
  const requests = []; let current = initial;
  return { requests, get data() { return current; }, set data(value) { current = value; },
    async send(request) {
      requests.push(request);
      if (request.method === 'GET') return current ? reply(current) : missing;
      current = JSON.parse(request.body);
      return reply({ id: 1, gameId: raw.gameId, playerId: decodeURIComponent(request.url.split('/').at(-1)), data: current });
    } };
}
const tests = [];
const test = (name, run) => tests.push({ name, run });

test('empty schema, copy isolation, invalid data and last-good backup', () => {
  const storage = new MemoryStorage(), store = new DataStore(storage, EMPTY_SCHEMA);
  assert.deepEqual(store.snapshot(), snap({}));
  assert.throws(() => store.replace({ value: 1 }), /初始化/);
  store.selectStorage('device');
  assert.equal(store.replace({ value: 1 }), true);
  const read = store.read(); read.value = 99;
  assert.equal(store.read().value, 1);
  store.update(draft => { draft.value = 2; });
  assert.deepEqual(JSON.parse(storage.getItem('device.bak')), snap({ value: 1 }));
  for (const data of [{ value: NaN }, { value: undefined }, { value: new Date() }, { value: BigInt(1) }])
    assert.throws(() => store.replace(data));
  const cyclic = {}; cyclic.self = cyclic;
  assert.throws(() => store.replace(cyclic));
  assert.throws(() => store.restore({ version: 99, data: {} }));
  assert.equal(store.read().value, 2);
  storage.setItem('device', '{invalid');
  const recovered = new DataStore(storage, EMPTY_SCHEMA); recovered.selectStorage('device');
  assert.deepEqual(recovered.read(), { value: 1 });
  assert.ok(recovered.lastError);
  assert.equal(storage.getItem('device.broken'), '{invalid');
});

test('custom schema validates defaults, updates and remote snapshots', async () => {
  const schema = { version: 2, defaults: () => ({ label: '' }),
    validate: value => !!value && typeof value.label === 'string' };
  const store = new DataStore(new MemoryStorage(), schema); store.selectStorage('custom');
  store.replace({ label: 'example' });
  assert.throws(() => store.replace({ label: 42 }));
  assert.deepEqual(store.snapshot(), { version: 2, data: { label: 'example' } });
  assert.throws(() => new DataStore(new MemoryStorage(), { ...schema, defaults: () => ({ label: 42 }) }));
  const remote = server({ version: 2, data: { label: 42 } });
  const { cloud } = setup({ schema, transport: remote });
  await assert.rejects(cloud.initialize(config()), /schema/);
  assert.equal(remote.requests.length, 1);
});

test('mode and endpoint namespaces remain isolated', async () => {
  const storage = new MemoryStorage();
  const deviceKey = getSaveStorageKey(config(LoginMode.Device), LoginMode.Device);
  const device = new DataStore(storage, EMPTY_SCHEMA); device.selectStorage(deviceKey); device.replace({ label: 'device' });
  const local = setup({ storage, transport: server(null) }); await local.cloud.initialize(config());
  assert.deepEqual(local.store.read(), {});
  local.store.replace({ label: 'local' });
  const internet = setup({ storage, transport: server(null) }); await internet.cloud.initialize(config(LoginMode.Internet));
  assert.deepEqual(internet.store.read(), {});
  assert.notEqual(local.store.storageKey, internet.store.storageKey);
  const endpoint = setup({ storage, transport: server(null) });
  await endpoint.cloud.initialize(config(LoginMode.Local, { baseUrl: 'http://127.0.0.1:3001' }));
  assert.notEqual(endpoint.store.storageKey, local.store.storageKey);
  const restored = new DataStore(storage, EMPTY_SCHEMA); restored.selectStorage(deviceKey);
  assert.deepEqual(restored.read(), { label: 'device' });
  assert.throws(() => resolveNetworkConfig({ ...raw, externalBaseUrl: '' }, LoginMode.Internet), /服务器地址/);
});

test('account caches and pending queues cannot cross players', async () => {
  const storage = new MemoryStorage();
  const a = setup({ storage, transport: server(snap({ label: 'a' })) }); await a.cloud.initialize(config());
  a.store.replace({ label: 'a-pending' }); a.cloud.dispose();
  const b = setup({ storage, player: 'player-b', transport: server(null) }); await b.cloud.initialize(config());
  assert.deepEqual(b.store.read(), {});
  const aAgain = setup({ storage, transport: server(snap({ label: 'remote-old' })) }); await aAgain.cloud.initialize(config());
  assert.deepEqual(aAgain.store.read(), { label: 'a-pending' });
  assert.notEqual(aAgain.store.storageKey, b.store.storageKey);
});

test('guest identity persists; invalid and silently failed writes reject login', async () => {
  const storage = new MemoryStorage();
  const guest = new GuestLoginProvider(storage, 'guest', () => 'guest-fixed');
  assert.equal((await guest.login()).playerId, 'guest-fixed');
  assert.equal((await new GuestLoginProvider(storage, 'guest', () => 'other').login()).playerId, 'guest-fixed');
  storage.setItem('guest', 'bad/id'); await assert.rejects(guest.login(), /playerId/);
  await assert.rejects(new GuestLoginProvider({ getItem: () => null, setItem() {} }, 'guest', () => 'valid').login(), /保存游客身份/);
});

test('EasyServer request format, headers and acknowledgement validation', async () => {
  const transport = server(null);
  const client = new EasyServerClient({ ...raw, transport, headers: { 'X-App': 'framework' } });
  assert.deepEqual(await client.load('player a'), { found: false });
  await client.save('player a', snap({ label: 'value' }), { headers: { Authorization: 'test-token' } });
  const request = transport.requests.at(-1);
  assert.ok(request.url.endsWith('/api/gamedata/game/test_app/player/player%20a'));
  assert.deepEqual(JSON.parse(request.body), snap({ label: 'value' }));
  assert.equal(request.headers.Authorization, 'test-token');
  assert.equal(request.headers['Content-Type'], 'application/json; charset=utf-8');
  const invalid = new EasyServerClient({ ...raw, transport: { send: async () => reply({ id: 1, playerId: 'someone-else', gameId: raw.gameId }) } });
  await assert.rejects(invalid.save('player a', {}), error => error.kind === 'invalid-response');
});

test('serialized uploads preserve mutations and reversions during an in-flight PUT', async () => {
  const transport = server(snap({ value: 0 }));
  const first = deferred(); let intercepted = false;
  const wrapper = { send: request => {
    if (request.method === 'PUT' && !intercepted) { intercepted = true; return first.promise.then(() => transport.send(request)); }
    return transport.send(request);
  } };
  const { store, cloud } = setup({ transport: wrapper }); await cloud.initialize(config());
  store.replace({ value: 1 }); const saving = cloud.flush();
  store.replace({ value: 0 }); first.resolve();
  assert.equal(await saving, true);
  assert.equal(transport.requests.filter(request => request.method === 'PUT').length, 2);
  assert.deepEqual(transport.data, snap({ value: 0 }));
  assert.equal(cloud.pending, false);
});

test('offline startup requires matching valid cache and reconnect confirms GET', async () => {
  const storage = new MemoryStorage();
  const first = setup({ storage, transport: server(snap({ value: 1 })) }); await first.cloud.initialize(config()); first.cloud.dispose();
  const networkError = () => { throw new EasyServerError('network', 'unreachable'); };
  const transport = server(snap({ value: 1 })); let offline = true;
  const wrapper = { send: request => offline ? networkError() : transport.send(request) };
  const second = setup({ storage, transport: wrapper }); await second.cloud.initialize(config());
  assert.equal(second.cloud.status, 'offline'); second.store.replace({ value: 2 });
  offline = false; assert.equal(await second.cloud.flush(), true);
  assert.deepEqual(transport.requests.map(request => request.method), ['GET', 'PUT']);
  assert.deepEqual(transport.data, snap({ value: 2 }));
  const other = setup({ storage, player: 'no-cache', transport: { send: networkError } });
  await assert.rejects(other.cloud.initialize(config()), /unreachable/);
  const denied = setup({ storage, transport: { send: async () => ({ status: 401, body: '' }) } });
  await assert.rejects(denied.cloud.initialize(config()), error => error.statusCode === 401);
});

test('transient PUT failure forces GET and does not recreate deleted remote data', async () => {
  const requests = []; let stage = 'load';
  const transport = { async send(request) {
    requests.push(request.method);
    if (stage === 'load') return reply(snap({ value: 1 }));
    if (stage === 'fail') throw new EasyServerError('network', 'disconnect');
    return missing;
  } };
  const { store, cloud } = setup({ transport }); await cloud.initialize(config());
  store.replace({ value: 2 }); stage = 'fail'; assert.equal(await cloud.flush(), false);
  assert.equal(cloud.status, 'offline'); stage = 'deleted';
  assert.equal(await cloud.flush(), false);
  assert.deepEqual(requests, ['GET', 'PUT', 'GET']);
  assert.equal(cloud.status, 'error'); assert.equal(cloud.pending, true);
});

test('reverting after an unacknowledged PUT still repairs potentially committed remote data', async () => {
  const remote = server(snap({ value: 0 })); let failOnce = true;
  const transport = { async send(request) {
    const response = await remote.send(request);
    if (request.method === 'PUT' && failOnce) { failOnce = false; throw new EasyServerError('timeout', 'ack lost'); }
    return response;
  } };
  const { store, cloud } = setup({ transport }); await cloud.initialize(config());
  store.replace({ value: 1 }); assert.equal(await cloud.flush(), false);
  assert.deepEqual(remote.data, snap({ value: 1 }));
  store.replace({ value: 0 }); assert.equal(cloud.pending, true);
  assert.equal(await cloud.flush(), true);
  assert.deepEqual(remote.data, snap({ value: 0 }));
  assert.deepEqual(remote.requests.map(request => request.method), ['GET', 'PUT', 'GET', 'PUT']);
});

test('corrupt cache backs up and recovers from valid remote data without uploading defaults', async () => {
  const storage = new MemoryStorage();
  const initial = setup({ storage, transport: server(snap({ value: 3 })) }); await initial.cloud.initialize(config()); initial.cloud.dispose();
  const cacheKey = [...storage.values.keys()].find(key => key.startsWith('cat_framework.cloud.'));
  storage.setItem(cacheKey, '{invalid');
  const remote = server(snap({ value: 4 }));
  const recovered = setup({ storage, transport: remote }); await recovered.cloud.initialize(config());
  assert.deepEqual(recovered.store.read(), { value: 4 });
  assert.equal(storage.getItem(cacheKey + '.broken'), '{invalid');
  assert.ok(recovered.cloud.lastLocalError);
  assert.equal(recovered.cloud.pending, false);
  assert.deepEqual(remote.requests.map(request => request.method), ['GET']);
});

test('local write failure still queues the latest cloud snapshot', async () => {
  const storage = new MemoryStorage(), remote = server(snap({}));
  const { store, cloud } = setup({ storage, transport: remote }); await cloud.initialize(config());
  storage.fail = true;
  assert.equal(store.replace({ value: 7 }), false);
  assert.ok(store.lastError); assert.equal(cloud.pending, true);
  assert.equal(await cloud.flush(), true);
  assert.deepEqual(remote.data, snap({ value: 7 }));
  assert.ok(cloud.lastLocalError);
});

test('HTTP timeout and explicit cancellation terminate platform requests', async () => {
  let aborted = 0;
  const transport = new MiniGameTransport(() => ({ abort() { aborted++; } }));
  await assert.rejects(transport.send({ method: 'GET', url: 'https://example.test', headers: {}, timeoutMs: 5 }), error => error.kind === 'timeout');
  assert.equal(aborted, 1);
  const controller = new AbortController();
  const pending = transport.send({ method: 'GET', url: 'https://example.test', headers: {}, timeoutMs: 1000, signal: controller.signal });
  controller.abort(); await assert.rejects(pending, error => error.kind === 'cancelled');
  assert.equal(aborted, 2);
  let xhrAborts = 0;
  const xhr = { open() {}, setRequestHeader() {}, send() {}, abort() { xhrAborts++; } };
  await assert.rejects(new XmlHttpTransport(() => xhr).send({ method: 'GET', url: 'https://example.test', headers: {}, timeoutMs: 5 }), error => error.kind === 'timeout');
  assert.equal(xhrAborts, 1);
});

test('runtime shares initialization, retries login and unregisters lifecycle listeners', async () => {
  let attempts = 0;
  Runtime.configure({ storage: new MemoryStorage(), configLoader: async () => raw, transport: server(snap({})),
    loginProvider: { login: async () => { if (++attempts === 1) throw new Error('login unavailable'); return { playerId: 'player-a' }; } } });
  Runtime.selectLoginMode(LoginMode.Local);
  const a = Runtime.initialize(), b = Runtime.initialize(); assert.equal(a, b);
  await assert.rejects(a, /login unavailable/);
  assert.equal(Runtime.status, 'error'); assert.equal(Runtime.initialized, false);
  await Runtime.initialize(); await Runtime.initialize();
  assert.equal(attempts, 2); assert.equal(Runtime.initialized, true);
  assert.equal(events.listenerCount('hide'), 1); assert.equal(events.listenerCount('show'), 1);
  assert.equal(Runtime.lastError, null);
  Runtime.dispose(); assert.equal(events.listenerCount('hide'), 0); assert.equal(events.listenerCount('show'), 0);
});

test('device startup never logs in and failed local persistence fails runtime flush', async () => {
  const storage = new MemoryStorage();
  Runtime.configure({ storage, configLoader: async () => raw, loginProvider: { login() { throw new Error('should not login'); } } });
  Runtime.selectLoginMode(LoginMode.Device); await Runtime.initialize();
  assert.equal(Runtime.status, 'disabled'); assert.deepEqual(Runtime.store.read(), {});
  storage.fail = true; Runtime.store.replace({ value: 1 });
  await assert.rejects(Runtime.flush(), /storage unavailable/);
  Runtime.dispose();
});

test('disposed initialization cannot interfere with a replacement runtime', async () => {
  const oldLogin = deferred();
  Runtime.configure({ storage: new MemoryStorage(), configLoader: async () => raw, transport: server(snap({})), loginProvider: { login: () => oldLogin.promise } });
  Runtime.selectLoginMode(LoginMode.Local);
  const old = Runtime.initialize();
  await Promise.resolve(); await Promise.resolve();
  Runtime.dispose();
  Runtime.configure({ storage: new MemoryStorage(), configLoader: async () => raw });
  await Runtime.initialize();
  oldLogin.resolve({ playerId: 'old-player' }); await assert.rejects(old, /释放/);
  assert.equal(Runtime.initialized, true); assert.equal(Runtime.status, 'disabled');
  assert.equal(events.listenerCount('hide'), 1); Runtime.dispose();
});

(async () => {
  let passed = 0;
  for (const { name, run } of tests) {
    try { await run(); passed++; console.log('PASS ' + name); }
    finally { for (const session of sessions.splice(0)) session.dispose(); Runtime.dispose(); }
  }
  console.log(`PASS ${passed} data/network/runtime regression tests`);
})().catch(error => { console.error(error); process.exitCode = 1; });
