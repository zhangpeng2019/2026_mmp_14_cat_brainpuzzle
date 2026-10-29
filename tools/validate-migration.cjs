const fs = require('node:fs'), path = require('node:path'), crypto = require('node:crypto');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'docs/source-assets.json'), 'utf8'));
const hash = file => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
const adapters = new Set([
  'CocosCompat.ts','LevelManager.ts','audio-manager.ts','GameController.ts','game-manager.ts','game-entry.ts','game-storage.ts',
  'ui-manager.ts','ui-base.ts','resource-manager.ts','level-res-manager.ts','storage-utils.ts',
  'web-platform-provider.ts','Level_1.ts','Level_3.ts',
]);
let preserved = 0, metadata = 0;
for (const entry of manifest.assets) {
  if (entry.path.startsWith('assets/scenes/')) continue;
  const file = path.join(root, entry.path);
  assert.ok(fs.existsSync(file), 'Missing source asset: ' + entry.path);
  if (entry.path.endsWith('.meta')) {
    assert.equal(JSON.parse(fs.readFileSync(file,'utf8')).uuid,entry.uuid,'Changed source UUID: '+entry.path);
    metadata++; continue;
  }
  if (adapters.has(path.basename(file)) && entry.path.startsWith('assets/scripts/')) continue;
  assert.equal(hash(file), entry.sha256, 'Changed source gameplay/resource: ' + entry.path);
  preserved++;
}
const sourceLevels = manifest.assets.filter(e => /^assets\/Level_\d+\/Level_\d+\.prefab$/.test(e.path));
assert.equal(sourceLevels.length, 87);
for (const entry of sourceLevels) {
  const level = path.basename(entry.path, '.prefab');
  const prefab = JSON.parse(fs.readFileSync(path.join(root,entry.path), 'utf8'));
  assert.equal(prefab[0].__type__, 'cc.Prefab');
  assert.ok(prefab.some(item => item.__type__ === 'cc.Node'));
  const meta = JSON.parse(fs.readFileSync(path.join(root,'assets',level+'.meta'),'utf8'));
  assert.equal(meta.userData.bundleName,level); assert.equal(meta.userData.isBundle,true);
  assert.ok(fs.existsSync(path.join(root,'assets/scripts',level+'.ts')));
}
const net = JSON.parse(fs.readFileSync(path.join(root,'assets/resources/config/network-config.json'),'utf8'));
assert.equal(net.gameId,'cat_brainpuzzle');
const project = JSON.parse(fs.readFileSync(path.join(root,'settings/v2/packages/project.json'),'utf8'));
assert.deepEqual(project.general.designResolution,{width:640,height:1386,fitWidth:true,fitHeight:false});
const ids = new Set([
  // Creator 3.8.7 built-in toggle sprites used by the original UITest prefab.
  '158e7e52-3220-4cd7-9694-713e0e6e8278@f9941',
  '11bdc4b0-64a8-4eb7-a2a7-9fb9e233e977@f9941',
]);
const files=[];
function walk(dir) { for(const e of fs.readdirSync(dir,{withFileTypes:true})) {const f=path.join(dir,e.name);if(e.isDirectory())walk(f);else files.push(f);} }
walk(path.join(root,'assets'));
function metadataIds(value) {
  if(!value||typeof value!=='object')return;
  if(value.uuid)ids.add(value.uuid);
  Object.values(value).forEach(metadataIds);
}
for(const file of files.filter(f=>f.endsWith('.meta')))metadataIds(JSON.parse(fs.readFileSync(file,'utf8')));
let references=0;
function verify(value,file) {
  if(!value||typeof value!=='object')return;
  if(value.__uuid__) {assert.ok(ids.has(value.__uuid__),`Unresolved asset ${value.__uuid__} in ${file}`);references++;}
  Object.values(value).forEach(v=>verify(v,file));
}
for(const file of files.filter(f=>/\.(prefab|scene|anim|json)$/.test(f)))verify(JSON.parse(fs.readFileSync(file,'utf8')),file);
console.log(`PASS all ${references} serialized asset references resolve locally or to Creator built-ins`);
console.log(`PASS migration: ${sourceLevels.length} local level bundles, ${preserved} unchanged source files, ${metadata} source metadata files present`);
