/* Actual Creator Web build. Pointer smoke tests and all-level load/mount checks are reported separately. */
const fs = require('node:fs'), path = require('node:path'), http = require('node:http');
const assert = require('node:assert/strict');
const { chromium } = require('playwright');
const root = path.resolve(__dirname,'..'), web = path.join(root,'build/web-desktop');
const output = path.join(root,'build/runtime-validation');
const results = [], errors = [], consoleErrors = [], requests = [], levels = [];
const check = (value, name) => { assert.ok(value,name);results.push(name);console.log('PASS '+name); };
let entry = 'Boot', currentLevel = 'startup';
const server = http.createServer((request,response) => {
  let file = path.resolve(web,'.'+decodeURIComponent(new URL(request.url,'http://localhost').pathname));
  if (file!==web&&!file.startsWith(web+path.sep)) return response.writeHead(403).end();
  if (file===web) file=path.join(file,'index.html');
  if (!fs.existsSync(file)||fs.statSync(file).isDirectory()) return response.writeHead(404).end();
  const ext=path.extname(file);
  response.setHeader('Content-Type',({'.html':'text/html','.js':'application/javascript','.json':'application/json','.css':'text/css','.wasm':'application/wasm'})[ext]||'application/octet-stream');
  let content;
  if (ext==='.html') content=fs.readFileSync(file,'utf8').replace('</head>','<style>html,body{margin:0;width:100%;height:100%;overflow:hidden}#GameDiv{width:100vw!important;height:100vh!important;margin:0;border:0}.header,.footer{display:none!important}</style></head>');
  if (file===path.join(web,'src/settings.json')) content=fs.readFileSync(file,'utf8').replace('db://assets/scenes/Boot.scene',`db://assets/scenes/${entry}.scene`);
  if (content!==undefined) response.end(content);else fs.createReadStream(file).pipe(response);
});

async function main() {
  fs.mkdirSync(output,{recursive:true});
  await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
  let browser;
  try {
    browser=await chromium.launch({channel:process.env.FRAMEWORK_BROWSER||'chrome',headless:true,args:['--enable-unsafe-swiftshader']});
    const context=await browser.newContext({viewport:{width:640,height:1386}});
    const page=await context.newPage();
    page.on('pageerror',error=>{const detail=error.stack||error.message;if(!errors.includes(detail)){errors.push(detail);console.error('BROWSER ERROR at level',currentLevel,detail.slice(0,800));}});
    page.on('console',message=>{if(message.type()==='error')consoleErrors.push(message.text());});
    page.on('requestfailed',request=>requests.push({url:request.url(),error:request.failure()?.errorText}));
    const url=`http://127.0.0.1:${server.address().port}`;
    async function connect() {
      await page.goto(url);
      await page.waitForFunction(()=>typeof System!=='undefined');
      await page.evaluate(async()=>{window.__cc=await System.import('cc');});
    }
    async function ready(name) {
      try {
        await page.waitForFunction(name=>__cc.director.getScene()?.name===name&&__cc.director.getScene()?.getChildByName('Canvas'),name,{timeout:45000});
        if(name==='Home')await page.waitForFunction(()=>{
          const canvas=__cc.director.getScene()?.getChildByName('Canvas');
          return canvas?.getChildByName('content')?.getChildByName('FrameworkScreen')?.getChildByName('Action1')?.activeInHierarchy
            && !canvas.getComponent('HomeSceneController')?.running;
        },{},{timeout:45000});
      } catch(error) {
        console.error('Scene failure',await page.evaluate(()=>({scene:__cc.director.getScene()?.name,changing:__cc.director.getScene()?.getChildByName('Canvas')?.getComponent('GameSceneController')?.leaving})),errors.slice(0,3));
        await page.screenshot({path:path.join(output,'failure.png')});throw error;
      }
    }
    async function modules() {
      await page.evaluate(async()=>{
        const load=name=>System.import('chunks:///_virtual/'+name+'.ts');
        window.__runtime=(await load('FrameworkRuntime')).FrameworkRuntime;
        window.__feature=(await load('BrainPuzzleRuntime')).BrainPuzzleRuntime;
        window.__manager=(await load('game-manager')).GameManager.getInstance();
        window.__data=(await load('data-manager')).DataManager.getInstance();
        window.__levels=(await load('LevelManager')).default.getInstance();
        window.__game=(await load('GameController')).GameController.getInstance();
      });
    }
    async function clickNode(selector) {
      const point=await page.evaluate(selector=>{
        const cc=__cc,scene=cc.director.getScene(),canvas=scene.getChildByName('Canvas');
        let node;
        if(selector.path)node=selector.path.split('/').reduce((n,key)=>n?.getChildByName(key),scene);
        else {
          const component=scene.getComponentsInChildren(cc.js.getClassByName(selector.component)).find(c=>c.node.activeInHierarchy);
          node=selector.property?component?.[selector.property]?.node:component?.node;
        }
        if(!node?.activeInHierarchy)throw new Error('Inactive/missing pointer target '+JSON.stringify(selector));
        const box=node.getComponent(cc.UITransform).getBoundingBoxToWorld(), bounds=canvas.getComponent(cc.UITransform).getBoundingBoxToWorld();
        return {x:(box.x+box.width/2-bounds.x)/bounds.width,y:(bounds.y+bounds.height-box.y-box.height/2)/bounds.height};
      },selector);
      const rect=await page.locator('canvas').boundingBox();
      await page.mouse.click(rect.x+point.x*rect.width,rect.y+point.y*rect.height);
    }
    await connect(); await ready('Home');
    await page.waitForFunction(()=>!__cc.director.getScene().getChildByName('Canvas').getComponent('HomeSceneController').running);
    check(true,'Boot initializes and reaches Home');
    await page.screenshot({path:path.join(output,'home.png')});
    await clickNode({path:'Canvas/content/FrameworkScreen/Action1'});
    await ready('Game'); await modules();
    await page.waitForFunction(()=>!!__levels.m_Level_Node?.activeInHierarchy,{},{timeout:90000});
    check(await page.evaluate(()=>__runtime.initialized&&__data.getSelectedLevelId()===2),'pointer enters first-run tutorial using framework runtime');
    await page.waitForTimeout(2500);
    await page.screenshot({path:path.join(output,'tutorial.png')});
    check(await page.evaluate(()=>Math.abs(__feature.root.worldScale.x-640/1080)<0.001),'original coordinates fit 640-wide framework canvas');
    const drag=await page.evaluate(()=>{
      const level=__levels.m_Level_Src,canvas=__cc.director.getScene().getChildByName('Canvas');
      const bounds=canvas.getComponent(__cc.UITransform).getBoundingBoxToWorld();
      const point=node=>{const box=node.getComponent(__cc.UITransform).getBoundingBoxToWorld();return {x:(box.x+box.width/2-bounds.x)/bounds.width,y:(bounds.y+bounds.height-box.y-box.height/2)/bounds.height};};
      return {from:point(level.Moneytouch.node),to:point(level.dropHitNode(0)),before:level.getEffectiveDoneCount()};
    });
    const dragRect=await page.locator('canvas').boundingBox();
    await page.mouse.move(dragRect.x+drag.from.x*dragRect.width,dragRect.y+drag.from.y*dragRect.height);
    await page.mouse.down();
    await page.mouse.move(dragRect.x+drag.to.x*dragRect.width,dragRect.y+drag.to.y*dragRect.height,{steps:15});
    await page.mouse.up();
    await page.waitForTimeout(250);
    check(await page.evaluate(before=>__levels.m_Level_Src.getEffectiveDoneCount()>before,drag.before),'pointer drag advances level 2 puzzle progress');
    // Normal pointer pause, settings and return to the original level-selection lobby.
    await page.evaluate(()=>__game.setTutorialGuiding?.(false));
    await clickNode({component:'UIGame',property:'Button_back'});
    await page.waitForFunction(()=>__cc.director.getScene().getComponentsInChildren(__cc.js.getClassByName('UIPause')).some(c=>c.node.activeInHierarchy),{},{timeout:15000});
    await page.waitForTimeout(450);
    check(true,'pointer opens pause popup');
    const musicBefore=await page.evaluate(()=>__data.getUserData().musicon);
    await clickNode({component:'UIPause',property:'Button_Music'});
    check(await page.evaluate(()=>__data.getUserData().musicon)!==musicBefore,'pointer toggles persisted audio setting');
    await page.screenshot({path:path.join(output,'pause.png')});
    await clickNode({component:'UIPause',property:'Button_Lobby'});
    await page.waitForFunction(()=>__manager.getCurrentState()==='lobby',{},{timeout:30000});
    await page.waitForTimeout(600);
    await page.screenshot({path:path.join(output,'lobby.png')});
    check(true,'pointer returns to original lobby');

    const ids=await page.evaluate(async()=> (await System.import('chunks:///_virtual/BaseData.ts')).default.LevelDataS.map(c=>c.levelId));
    for(const id of ids) {
      currentLevel = id;
      const result=await page.evaluate(async id=>{
        __data.SetSelectedLevelId(id);
        const loaded=await __manager.enterGameModeForSelectedLevel('Home');
        __game.pauseTimer();
        await new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));
        if([61,72,73].includes(id)) await new Promise(resolve=>setTimeout(resolve,1200));
        const node=__levels.m_Level_Node,component=__levels.m_Level_Src;
        return {id,loaded,name:node?.name,component:component&&__cc.js.getClassName(component),valid:!!component?.isValid,nodes:node?.getComponentsInChildren(__cc.UITransform).length,physics:__cc.PhysicsSystem2D.instance.enable,bodies:node?.getComponentsInChildren(__cc.RigidBody2D).length};
      },id);
      levels.push(result);
      check(result.loaded&&result.valid&&result.nodes>0&&result.component===`Level_${id}`,`level ${id}: prefab loads, mounts and starts`);
      if([61,72,73].includes(id))check(result.physics&&result.bodies>0,`level ${id}: Box2D simulates actual bodies`);
      if(id===74)check(!result.physics,'unmounting the rope level stops the empty physics world');
      if([1,3,21,42,75,88].includes(id)) await page.screenshot({path:path.join(output,`level-${id}.png`)});
    }
    check(levels.length===87,'all 87 source levels checked');
    await page.evaluate(async()=>{__data.grantHint(3);await __runtime.flush();});
    const saved=await page.evaluate(()=>({hints:__data.getHintCount(),music:__data.getUserData().musicon,selected:__data.getSelectedLevelId()}));
    await clickNode({path:'Canvas/FrameworkHome'});await ready('Home');
    await clickNode({path:'Canvas/content/FrameworkScreen/Action1'});await ready('Game');await modules();
    await page.waitForFunction(()=>__manager.getCurrentState()==='lobby',{},{timeout:90000});
    check(true,'Game to Home to Game recreates UI without stale singleton nodes');
    await connect();await ready('Home');await clickNode({path:'Canvas/content/FrameworkScreen/Action1'});await ready('Game');await modules();
    await page.waitForFunction(()=>__manager.getCurrentState()==='lobby',{},{timeout:90000});
    check(await page.evaluate(s=>__data.getHintCount()===s.hints&&__data.getUserData().musicon===s.music&&__data.getSelectedLevelId()===s.selected,saved),'reload restores hints, audio settings and selected level');
    await page.setViewportSize({width:960,height:540});
    // Web Desktop embeds a fixed subframe. Its host must notify Creator when changing that frame.
    await page.evaluate(()=>{__cc.screen.windowSize=new __cc.Size(innerWidth,innerHeight);});
    await page.waitForTimeout(700);
    await page.screenshot({path:path.join(output,'landscape.png')});
    check(await page.evaluate(()=>{const root=__feature.root,canvas=__cc.director.getScene().getChildByName('Canvas');return Math.abs(root.getComponent(__cc.UITransform).height*root.scale.y-canvas.getComponent(__cc.UITransform).height)<1;}),'viewport resize updates original game container');
    await clickNode({path:'Canvas/FrameworkHome'});await ready('Home');
    check(true,'framework home navigation remains visible after viewport resize');
    await page.setViewportSize({width:640,height:1386});
    await page.evaluate(()=>{__cc.screen.windowSize=new __cc.Size(innerWidth,innerHeight);});
    entry='Home';currentLevel='direct Home';
    await connect();await ready('Home');await modules();
    await page.waitForFunction(()=>__runtime.initialized&&!__cc.director.getScene().getChildByName('Canvas').getComponent('HomeSceneController').running);
    check(true,'direct Home preview initializes framework runtime');
    entry='Game';currentLevel='direct Game';
    await connect();await ready('Game');await modules();
    await page.waitForFunction(()=>__runtime.initialized&&__manager.getCurrentState()==='lobby'&&__feature.root?.isValid,{},{timeout:90000});
    check(true,'direct Game preview initializes framework and original lobby');
    check(errors.length===0,'no uncaught browser errors: '+errors.join('; '));
    check(!consoleErrors.some(s=>/Missing class|Failed to deserialize|Prefab missing component|Component class not found/.test(s)),'no missing script or prefab bindings');
    check(consoleErrors.length===0,'no browser console errors: '+consoleErrors.join('; '));
    fs.writeFileSync(path.join(output,'result.json'),JSON.stringify({passed:true,checks:results,levels,errors,consoleErrors,requests},null,2));
    await context.close();
  } catch(error) {
    fs.writeFileSync(path.join(output,'result.json'),JSON.stringify({passed:false,checks:results,levels,errors,consoleErrors,requests,failure:String(error)},null,2));
    throw error;
  } finally {await browser?.close();await new Promise(resolve=>server.close(resolve));}
}
main().catch(error=>{console.error(error);process.exitCode=1;});
