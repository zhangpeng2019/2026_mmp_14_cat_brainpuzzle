/* 根据实际透明主体登记SpriteFrame边界，不修改PNG像素。 */
const fs = require('node:fs'), path = require('node:path'), zlib = require('node:zlib');
const root = path.resolve(__dirname,'..');
function alpha(file) {
 const png=fs.readFileSync(file), w=png.readUInt32BE(16),h=png.readUInt32BE(20), chunks=[];
 if(png[25]!==6) throw Error('需要RGBA图集');
 for(let p=8;p<png.length;) { const n=png.readUInt32BE(p); if(png.toString('ascii',p+4,p+8)==='IDAT') chunks.push(png.subarray(p+8,p+8+n)); p+=12+n; }
 const raw=zlib.inflateSync(Buffer.concat(chunks)),out=new Uint8Array(w*h),stride=w*4;
 let prev=Buffer.alloc(stride),row=Buffer.alloc(stride),p=0;
 const paeth=(a,b,c)=>{const v=a+b-c,x=Math.abs(v-a),y=Math.abs(v-b),z=Math.abs(v-c);return x<=y&&x<=z?a:y<=z?b:c;};
 for(let y=0;y<h;y++){ const filter=raw[p++]; for(let x=0;x<stride;x++){const a=x<4?0:row[x-4],b=prev[x],c=x<4?0:prev[x-4];row[x]=(raw[p++]+(filter===0?0:filter===1?a:filter===2?b:filter===3?Math.floor((a+b)/2):paeth(a,b,c)))&255;if(x%4===3)out[y*w+(x>>2)]=row[x];} [prev,row]=[row,prev]; }
 return {w,h,out};
}
const rects={};
for(let sheet=1;sheet<=10;sheet++){
 const name='sheet-'+String(sheet).padStart(2,'0'),{w,h,out}=alpha(path.join(root,'assets/resources/cat-detective/candy/props',name+'.png'));
 const seen=new Uint8Array(w*h),queue=new Int32Array(w*h),cells=Array.from({length:16},()=>({x:w,y:h,r:0,b:0,area:0}));
 for(let seed=0;seed<out.length;seed++){
  if(seen[seed]||out[seed]<180)continue;
  let head=0,tail=1,area=0,sx=0,sy=0,x0=w,y0=h,x1=0,y1=0;queue[0]=seed;seen[seed]=1;
  while(head<tail){const i=queue[head++],x=i%w,y=Math.floor(i/w);area++;sx+=x;sy+=y;x0=Math.min(x0,x);y0=Math.min(y0,y);x1=Math.max(x1,x);y1=Math.max(y1,y);
   for(const n of [x>0?i-1:-1,x<w-1?i+1:-1,y>0?i-w:-1,y<h-1?i+w:-1]) if(n>=0&&!seen[n]&&out[n]>=180){seen[n]=1;queue[tail++]=n;}
  }
  if(area<80)continue;
  const col=Math.min(3,Math.floor((sx/area)/w*4)),row=Math.min(3,Math.floor((sy/area)/h*4)),cell=cells[row*4+col];
  cell.x=Math.min(cell.x,x0);cell.y=Math.min(cell.y,y0);cell.r=Math.max(cell.r,x1);cell.b=Math.max(cell.b,y1);cell.area+=area;
 }
 rects[name]=cells.map((c,i)=>{if(c.area<2000)throw Error(name+' '+i+'缺少美术主体');const x=Math.max(0,c.x-3),y=Math.max(0,c.y-3);return[x,y,Math.min(w,c.r+4)-x,Math.min(h,c.b+4)-y];});
}
const target=path.join(root,'assets/scripts/features/cat-detective/PropArtRects.ts');
fs.writeFileSync(target,'/** 实际透明主体的图集边界，保留越过等分网格的完整角色，隔离邻格。由tools/export-prop-rects.cjs生成。 */\nexport const PROP_ART_RECTS: Readonly<Record<string, readonly (readonly number[])[]>> = '+JSON.stringify(rects,null,2)+';\n');
console.log('已登记10张原始PNG、160个SpriteFrame实际边界，未修改图像。');
