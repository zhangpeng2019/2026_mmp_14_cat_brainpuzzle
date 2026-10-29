const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),ts=require('typescript');
const {EventEmitter}=require('node:events');
const root=path.resolve(__dirname,'..'),modules=new Map(),values=new Map();
const storage={getItem:key=>values.get(key)??null,setItem:(key,value)=>values.set(key,value),removeItem:key=>values.delete(key)};
const cc={sys:{platform:'WEB',Platform:{ANDROID:'ANDROID',IOS:'IOS'},isNative:false,localStorage:storage},game:new EventEmitter(),Game:{EVENT_HIDE:'hide',EVENT_SHOW:'show'}};
function load(file) {
  file=path.resolve(root,'assets/scripts',file);if(!path.extname(file))file+='.ts';
  if(modules.has(file))return modules.get(file).exports;
  const module={exports:{}};modules.set(file,module);
  const code=ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{target:ts.ScriptTarget.ES2020,module:ts.ModuleKind.CommonJS}}).outputText;
  new Function('require','module','exports',code)(id=>id==='cc'?cc:id.startsWith('.')?load(path.resolve(path.dirname(file),id)):require(id),module,module.exports);
  return module.exports;
}
async function main() {
  const {FrameworkRuntime}=load('framework/FrameworkRuntime'),{BRAIN_PUZZLE_SCHEMA}=load('features/brainpuzzle/BrainPuzzleRuntime');
  FrameworkRuntime.configure({schema:BRAIN_PUZZLE_SCHEMA,storage,configLoader:async()=>JSON.parse(fs.readFileSync(path.join(root,'assets/resources/config/network-config.json'),'utf8'))});
  await FrameworkRuntime.initialize();
  const api=load('game-storage').GameStorage.getInstance();
  values.set('other-app','keep');
  api.setStorageSync('string','1');assert.equal(api.getStorageSync('string'),'1');
  api.setStorageSync('number',1);assert.equal(api.getStorageSync('number'),1);
  api.setStorageSync('player',{hints:3,completed:[2,4],music:false});
  const copy=api.getStorageSync('player');copy.completed.push(7);
  assert.deepEqual(api.getStorageSync('player'),{hints:3,completed:[2,4],music:false});
  api.setStorageSync('string',null);assert.equal(api.getStorageSync('string','missing'),'missing');
  assert.throws(()=>FrameworkRuntime.store.replace({entries:{bad:12}}));
  await FrameworkRuntime.flush();
  FrameworkRuntime.dispose();
  FrameworkRuntime.configure({schema:BRAIN_PUZZLE_SCHEMA,storage,configLoader:async()=>JSON.parse(fs.readFileSync(path.join(root,'assets/resources/config/network-config.json'),'utf8'))});
  await FrameworkRuntime.initialize();assert.equal(api.getStorageSync('player').hints,3);
  api.clearStorageSync();assert.equal(api.getStorageSync('player'),null);assert.equal(values.get('other-app'),'keep');
  FrameworkRuntime.dispose();console.log('PASS game storage: type preservation, copy isolation, schema, restart, removal and app-scoped clear');
}
main().catch(error=>{console.error(error);process.exitCode=1;});
