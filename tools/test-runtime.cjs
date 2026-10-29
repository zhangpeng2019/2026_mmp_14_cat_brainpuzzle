const fs = require('node:fs'), path = require('node:path'), http = require('node:http');
const assert = require('node:assert/strict');
const { chromium } = require('playwright');
const { startServer } = require('./dev-server.cjs');
const root = path.resolve(__dirname, '..'), web = path.join(root, 'build/web-desktop');
const output = path.join(root, 'build/runtime-validation');
let mode = 0, entry = 'Boot', missingExternal = false, checks = 0;
const check = (condition, message) => { assert.ok(condition, message); checks++; console.log('PASS ' + message); };

async function main() {
  fs.mkdirSync(output, {recursive:true});
  const local = await startServer(), external = await startServer();
  let browser;
  const staticServer = http.createServer((request, response) => {
    let file = path.resolve(web, '.' + decodeURIComponent(new URL(request.url, 'http://localhost').pathname));
    if (file !== web && !file.startsWith(web + path.sep)) return response.writeHead(403).end();
    if (file === web) file = path.join(file, 'index.html');
    if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) return response.writeHead(404).end();
    const ext = path.extname(file);
    response.setHeader('Content-Type', ({'.html':'text/html','.js':'application/javascript','.json':'application/json','.css':'text/css','.wasm':'application/wasm'})[ext] || 'application/octet-stream');
    let content;
    if (['.html','.js','.json'].includes(ext)) content = fs.readFileSync(file,'utf8');
    if (file === path.join(web, 'assets/main/index.js')) {
      const hook = 'FrameworkRuntime.selectLoginMode(this.loginMode, this.externalServerUrl);';
      assert.ok(content.includes(hook), 'Expected development build initialization hook');
      content = content.replace(hook, `{ this.loginMode=${mode}; this.externalServerUrl=${JSON.stringify(missingExternal ? '' : external.baseUrl)}; globalThis.__runtime=FrameworkRuntime; ${hook} }`);
    }
    if (ext === '.json') {
      content = content.split('http://127.0.0.1:28515').join(local.baseUrl);
      if (file === path.join(web, 'src/settings.json')) content = content.replace('db://assets/scenes/Boot.scene', `db://assets/scenes/${entry}.scene`);
    }
    if (ext === '.html') content = content.replace(/<h1 class="header">[\s\S]*?<\/h1>/, '')
      .replace(/<p class="footer">[\s\S]*?<\/p>/, '')
      .replace('</head>', '<style>html,body{margin:0;width:100%;height:100%;overflow:hidden}#GameDiv{width:100vw!important;height:100vh!important;margin:0;border:0}</style></head>');
    if (content !== undefined) response.end(content); else fs.createReadStream(file).pipe(response);
  });
  try {
    await new Promise(resolve => staticServer.listen(0,'127.0.0.1',resolve));
    browser = await chromium.launch({channel:process.env.FRAMEWORK_BROWSER || 'chrome',headless:true,args:['--enable-unsafe-swiftshader']});
    const url = `http://127.0.0.1:${staticServer.address().port}`;
    const errors = [];
    async function createPage(context) {
      await context.route('**/api/gamedata/**', route => [local.baseUrl,external.baseUrl].some(base => route.request().url().startsWith(base+'/')) ? route.continue() : route.abort());
      const page = await context.newPage();
      page.on('pageerror',error=>errors.push(error.message));
      return page;
    }
    async function connect(page) {
      await page.goto(url);
      await page.waitForFunction(()=>typeof System!=='undefined');
      await page.evaluate(async()=>{window.__cc=await System.import('cc');});
    }
    async function ready(page, scene='Home') {
      try { await page.waitForFunction(name=>{
        const scene=window.__cc?.director.getScene(), canvas=scene?.getChildByName('Canvas');
        const controller=canvas?.getComponent(name+'SceneController');
        return scene?.name===name && window.__runtime?.initialized && controller?.screen && !controller.running;
      },scene,{timeout:45000}); } catch(error) {
        console.error('Scene state', await page.evaluate(()=>({scene:window.__cc?.director.getScene()?.name,mode:window.__runtime?.loginMode,error:String(window.__runtime?.lastError),labels:window.__cc?.director.getScene()?.getComponentsInChildren(__cc.Label).map(label=>label.string)})));
        await page.screenshot({path:path.join(output,'failure.png')});
        throw error;
      }
    }
    async function click(page,names) {
      const point=await page.evaluate(names=>{
        const cc=window.__cc,scene=cc.director.getScene();
        const target=names.reduce((n,key)=>n?.getChildByName(key),scene);
        if(!target?.activeInHierarchy)throw new Error('Missing UI '+names.join('/'));
        const box=target.getComponent(cc.UITransform).getBoundingBoxToWorld();
        const bounds=scene.getChildByName('Canvas').getComponent(cc.UITransform).getBoundingBoxToWorld();
        return {x:(box.x+box.width/2-bounds.x)/bounds.width,y:(bounds.y+bounds.height-box.y-box.height/2)/bounds.height};
      },names);
      const rect=await page.locator('canvas').boundingBox();
      await page.mouse.click(rect.x+point.x*rect.width,rect.y+point.y*rect.height);
    }
    const action=n=>['Canvas','content','FrameworkScreen','Action'+n];
    for(mode of [0,1,2]) {
      entry='Boot';
      const context=await browser.newContext({viewport:{width:640,height:1386}});
      const page=await createPage(context);
      const requestCount=local.requests.length+external.requests.length;
      await connect(page); await ready(page);
      check(await page.evaluate(()=>__runtime.loginMode)===mode,`mode ${mode}: Boot to Home preserves login mode`);
      await page.screenshot({path:path.join(output,`mode-${mode}-home.png`)});
      await click(page,action(2));
      await page.waitForFunction(()=>!!__cc.director.getScene().getChildByName('Canvas').getChildByName('modal').getChildByName('FrameworkModal'));
      await page.screenshot({path:path.join(output,`mode-${mode}-modal.png`)});
      await click(page,['Canvas','modal','FrameworkModal','Dialog','Close']);
      await page.waitForFunction(()=>!__cc.director.getScene().getChildByName('Canvas').getChildByName('modal').getChildByName('FrameworkModal'));
      await click(page,action(1)); await ready(page,'Game');
      check(await page.evaluate(()=>__runtime.loginMode)===mode,`mode ${mode}: Game preserves login mode`);
      await page.screenshot({path:path.join(output,`mode-${mode}-game.png`)});
      await click(page,action(1)); await ready(page);
      const saved=await page.evaluate(async value=>{
        const stored=__runtime.store.update(draft=>{draft.validationValue=value;});
        await __runtime.flush();return stored;
      },`mode-${mode}`);
      check(saved,`mode ${mode}: generic data writes durably`);
      await connect(page); await ready(page);
      check(await page.evaluate(()=>__runtime.store.read().validationValue)===`mode-${mode}`,`mode ${mode}: reload restores generic data`);
      if(mode===0) check(local.requests.length+external.requests.length===requestCount,'standalone makes no data requests');
      if(mode===1) {
        local.setFailure(503);
        await connect(page); await ready(page);
        check(await page.evaluate(()=>__runtime.status)==='offline','cached account starts offline');
        await page.evaluate(()=>__runtime.store.update(draft=>{draft.validationValue='offline-queue';}));
        await connect(page); await ready(page);
        check(await page.evaluate(()=>__runtime.store.read().validationValue)==='offline-queue','pending queue survives offline restart');
        local.setFailure(0);
        await page.evaluate(()=>__runtime.flush());
        check(await page.evaluate(()=>__runtime.status)==='synced','offline queue syncs after reconnect');
      }
      await context.close();
    }
    mode=0;
    for(entry of ['Home','Game']) {
      const context=await browser.newContext({viewport:{width:960,height:540}}), page=await createPage(context);
      await connect(page); await ready(page,entry);
      check(await page.evaluate(()=>__runtime.initialized),`direct ${entry} entry initializes runtime`);
      await page.screenshot({path:path.join(output,`direct-${entry}-landscape.png`)});
      await context.close();
    }
    entry='Boot'; mode=1; local.setFailure(503);
    const context=await browser.newContext({viewport:{width:640,height:1386}}),page=await createPage(context);
    await connect(page);
    await page.waitForFunction(()=>__cc.director.getScene()?.name==='Boot'&&__cc.director.getScene().getChildByName('Canvas').getChildByName('content')?.getChildByName('FrameworkScreen')?.getChildByName('Retry')?.activeInHierarchy);
    check(!await page.evaluate(()=>__runtime.initialized),'first connection failure blocks entry without cache');
    await page.screenshot({path:path.join(output,'boot-retry.png')});
    local.setFailure(0); await click(page,['Canvas','content','FrameworkScreen','Retry']); await ready(page);
    check(await page.evaluate(()=>__runtime.initialized),'startup retry reaches Home');
    await context.close();
    check(errors.length===0,`no uncaught browser errors: ${errors.join('; ')}`);
    fs.writeFileSync(path.join(output,'result.json'),JSON.stringify({checks,passed:true,screenshots:fs.readdirSync(output).filter(p=>p.endsWith('.png'))},null,2));
    console.log(`Runtime validation complete: ${checks} checks.`);
  } finally {
    await browser?.close();
    await Promise.all([staticServer,local.server,external.server].map(server=>new Promise(resolve=>server.close(resolve))));
  }
}
main().catch(error=>{console.error(error);process.exitCode=1;});
