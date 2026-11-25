(()=>{'use strict';
const E=window.EXPO,$=id=>document.getElementById(id),root=document.documentElement;
const calm=matchMedia('(prefers-reduced-motion: reduce)').matches;
const ar=n=>String(n).replace(/\d/g,d=>'٠١٢٣٤٥٦٧٨٩'[d]);
const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const count=(n,one,two,few,many)=>n===1?one:n===2?two:(n%100>=3&&n%100<=10)?ar(n)+' '+few:ar(n)+' '+many;
const nWorks=n=>count(n,'عمل واحد','عملان','أعمال',n%100>10?'عملًا':'عمل');
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));

/* ---------- بوابة رقمية: زوايا مشطوفة ونتوء علوي ---------- */
const gatePts=()=>[[0,100],[0,11],[11,0],[33,0],[37,2.4],[63,2.4],[67,0],[89,0],[100,11],[100,100]];
const poly=p=>'polygon('+p.map(([x,y])=>x.toFixed(2)+'% '+Math.max(0,y).toFixed(2)+'%').join(',')+')';
root.style.setProperty('--arch',poly(gatePts()));
/* نقش الدوائر الإلكترونية */
const circuit=(col,op)=>`url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='560' height='480' fill='none' stroke='${col}' stroke-opacity='${op}' stroke-width='2'><path d='M40 60h90l30 30h70M300 60h110l50 50h40M70 420v-80l50-50h40l40-40M330 220l40 40v100l20 40M470 430v-90l40-40h10M60 180h60l30-30'/><g fill='${col}' fill-opacity='${op}' stroke='none'><circle cx='40' cy='60' r='6'/><circle cx='230' cy='90' r='6'/><circle cx='300' cy='60' r='6'/><circle cx='500' cy='110' r='6'/><circle cx='70' cy='420' r='6'/><circle cx='200' cy='250' r='6'/><circle cx='330' cy='220' r='6'/><circle cx='390' cy='400' r='6'/><circle cx='470' cy='430' r='6'/><circle cx='520' cy='300' r='6'/><circle cx='60' cy='180' r='6'/><circle cx='150' cy='150' r='6'/></g><g fill='#ffffff' stroke='none'><circle cx='40' cy='60' r='2.5'/><circle cx='230' cy='90' r='2.5'/><circle cx='300' cy='60' r='2.5'/><circle cx='500' cy='110' r='2.5'/><circle cx='70' cy='420' r='2.5'/><circle cx='200' cy='250' r='2.5'/><circle cx='330' cy='220' r='2.5'/><circle cx='390' cy='400' r='2.5'/><circle cx='470' cy='430' r='2.5'/><circle cx='520' cy='300' r='2.5'/><circle cx='60' cy='180' r='2.5'/><circle cx='150' cy='150' r='2.5'/></g></svg>`)}")`;
root.style.setProperty('--trace',circuit('#6a5be8','.34'));root.style.setProperty('--trace2',circuit('#6a5be8','.2'));

const IC={dna:'<path d="M7 3c0 7 10 11 10 18M17 3c0 7-10 11-10 18M8.4 6.5h7.2M8.4 17.5h7.2M10.5 10h3M10.5 14h3"/>',ball:'<circle cx="12" cy="12" r="9"/><path d="M12 3v18M3 12h18M5.6 5.6c4 3.6 4 9.200 0 12.800M18.400 5.600c-4 3.600-4 9.200 0 12.800"/>',chip:'<rect x="6" y="6" width="12" height="12" rx="2.500"/><rect x="10" y="10" width="4" height="4" rx="1"/><path d="M9 6V3M15 6V3M9 21v-3M15 21v-3M6 9H3M6 15H3M21 9h-3M21 15h-3"/>',moon:'<path d="M19 14.500A8 8 0 1 1 10 4.300a6.500 6.500 0 0 0 9 10.200z"/><path d="M17.500 4.500l.6 1.900 1.900.6-1.900.6-.6 1.900-.6-1.900-1.900-.6 1.900-.6z"/>',pi:'<path d="M4 8c1-2 2-2.500 4-2.500h12M9 5.500c0 6-.5 9.500-2.500 13M15.500 5.500v9.500c0 2.500 1 3.500 3.500 3"/>',atom:'<circle cx="12" cy="12" r="1.500"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>',flask:'<path d="M9 3h6M10 3v6l-5.500 9.500A1.700 1.700 0 0 0 6 21h12a1.700 1.700 0 0 0 1.500-2.500L14 9V3M7.500 15h9"/><circle cx="11" cy="18" r=".6"/><circle cx="14" cy="17.500" r=".6"/>',aa:'<text x="12" y="17.500" text-anchor="middle">Aa</text>',dad:'<text x="12" y="15.500" text-anchor="middle" style="font-size:19px">ض</text>',book:'<path d="M12 6.500C10 5 7 4.500 3.500 4.500v13.500c3.500 0 6.500.5 8.500 2 2-1.500 5-2 8.500-2V4.500C17 4.500 14 5 12 6.500zM12 6.500V20"/>'};
const icon=(k,s)=>`<svg class="ico" viewBox="0 0 24 24" width="${s}" height="${s}" aria-hidden="true">${IC[k]}</svg>`;
const PAL=[['#dfe7ff','#b9c9ff','#4663d0'],['#ecdfff','#d0b8ff','#7a4fd0'],['#dcecff','#b0d0fb','#3a74c0'],['#f2e3ff','#dfc0f8','#9450c4'],['#e6e4f5','#cbc7e6','#6a6296'],['#ece8f6','#d3cbe8','#6f6396'],['#e4e1ff','#c3b9ff','#5d4cd0'],['#d9e6ff','#a9c2f8','#3c60c4'],['#eee2fb','#d3b9f0','#7f48ba'],['#e2def9','#beb3ef','#5944b4']];

/* ---------- البيانات ---------- */
const WINGS=E.wings;let total=0,teachers=0;const FLAT=[];
WINGS.forEach((w,i)=>{w.i=i;w.pal=PAL[i%PAL.length];w.count=0;w.teachers.forEach(t=>{t.wing=w;t.items=[];t.zones.forEach((z,zi)=>{z.start=t.items.length;z.items.forEach(it=>{const o=Object.assign({},it,{zone:zi,ti:t.items.length,teacher:t});t.items.push(o);FLAT.push(o)})});w.count+=t.items.length;if(!/أعمال القسم/.test(t.name))teachers+=t.people||1});total+=w.count});
const OPEN=WINGS.filter(w=>w.teachers.length),TEACH=OPEN.flatMap(w=>w.teachers);
const tURL=(t,i)=>`#/hall/${t.wing.id}/${t.id}${i?'/'+i:''}`;
/* واجهة القسم: عمل من كل نوع (صورة، فيديو، عرض، PDF، رابط) ثم الباقي بالتناوب بين المعلمات */
const KINDS=['img','video','pptx','pdf','link'];
const KNAME={img:['صورة واحدة','صورتان','صور','صورة'],video:['فيديو واحد','فيديوهان','فيديوهات','فيديو'],pptx:['عرض واحد','عرضان','عروض','عرضًا'],pdf:['ملف PDF واحد','ملفا PDF','ملفات PDF','ملف PDF'],link:['نشاط تفاعلي واحد','نشاطان تفاعليان','أنشطة تفاعلية','نشاطًا تفاعليًا']};
const KTAG={video:'فيديو',pptx:'عرض',pdf:'PDF',link:'رابط'};
const inside=its=>KINDS.map(k=>[k,its.filter(x=>x.k===k).length]).filter(x=>x[1]).map(([k,n])=>count(n,...KNAME[k])).join('، ');
function covers(lists,n){const mixd=[];for(let i=0,m=Math.max(...lists.map(l=>l.length));i<m;i++)lists.forEach(l=>{if(l[i])mixd.push(l[i])});
  const pool=mixd.slice().sort((x,y)=>(x.k==='img'&&x.w/x.h<.6)-(y.k==='img'&&y.w/y.h<.6)),out=[];
  KINDS.forEach(k=>{const x=pool.find(v=>v.k===k);if(x&&out.length<n)out.push(x)});
  for(const x of pool){if(out.length>=n)break;if(!out.includes(x)&&x.k==='img')out.push(x)}
  for(const x of pool){if(out.length>=n)break;if(!out.includes(x))out.push(x)}
  return out}
const SLOTS={1:[[13,29,74,40]],2:[[13,28,74,21],[13,51,74,21]],3:[[9,28,82,23],[9,53,39,19],[52,53,39,19]],4:[[9,28,39,21.5],[52,28,39,21.5],[9,52,39,20],[52,52,39,20]]};
const hang=its=>its.map((x,i)=>{const p=SLOTS[its.length][i];return `<span class="hang" style="left:${p[0]}%;top:${p[1]}%;width:${p[2]}%;height:${p[3]}%">${x.th?`<img src="${innerWidth<=760?x.th.replace('/thumb/','/sm/'):x.th}" alt="" draggable="false">`:`<em>${esc(x.host)}</em>`}${KTAG[x.k]?`<u>${KTAG[x.k]}</u>`:''}</span>`}).join('');
const setPal=w=>{root.style.setProperty('--wall',w.pal[0]);root.style.setProperty('--wall2',w.pal[1]);root.style.setProperty('--deep',w.pal[2])};

$('lead').textContent=E.lead;
$('credits').innerHTML=[['المدرسة',E.school],['إعداد المعلمتين',E.authors.join(' و')],['مديرة المدرسة',E.principal]].map(([a,b])=>`<div><dt>${esc(a)}</dt><dd>${esc(b)}</dd></div>`).join('');

/* ---------- المدخل: نفق بيانات وشريحة ذكاء ---------- */
const arc=$('arcade'),ax=arc.getContext('2d');let aw=0,ah=0,az=0,av=.004,arcOn=false,dpr=1;
const shots=['i046','i074','i026','i190','i168','i177','i048','i134','i110','i156','i183','i040'].map(n=>{const im=new Image();im.src=`media/thumb/${n}.webp`;return im});
function sizeArc(){dpr=Math.min(2,devicePixelRatio||1);aw=innerWidth;ah=innerHeight;arc.width=aw*dpr;arc.height=ah*dpr}
/* حلقة النفق: مثمّن مشطوف بنتوءين */
const RING=[[-1,.62],[-1,-.62],[-.7,-1],[-.3,-1],[-.24,-.95],[.24,-.95],[.3,-1],[.7,-1],[1,-.62],[1,.62],[.7,1],[.3,1],[.24,.95],[-.24,.95],[-.3,1],[-.7,1]],RAIL=[0,1,2,7,8,9,10,15];
const ringPath=(cx,cy,w,h)=>{RING.forEach(([x,y],i)=>ax[i?'lineTo':'moveTo'](cx+x*w,cy+y*h));ax.closePath()};
const nodes=[];{let s=29;const R=()=>(s=s*16807%2147483647)/2147483647;for(let i=0;i<30;i++)nodes.push([R(),R(),R()*6.3,.3+R()])}
function drawArc(){const small=aw<=760,cx=small?aw*.5:aw*.285,cy=small?ah*.21:ah*.5,U=small?Math.min(aw*.225,ah*.095):Math.min(ah*.25,aw*.131);
  ax.setTransform(dpr,0,0,dpr,0,0);const bg=ax.createLinearGradient(0,0,aw*.7,ah);bg.addColorStop(0,'#c9dcff');bg.addColorStop(.5,'#dfd4ff');bg.addColorStop(1,'#f5effe');ax.fillStyle=bg;ax.fillRect(0,0,aw,ah);
  /* شبكة عقد في الخلفية */
  const nx=nodes.map(n=>[(small?n[0]:n[0]*.62)*aw+Math.sin(az*1.3+n[2])*14*n[3],n[1]*(small?ah*.46:ah)+Math.cos(az+n[2])*14*n[3]]);ax.lineWidth=1;ax.strokeStyle='#6a5be8';ax.fillStyle='#6a5be8';const lim=small?90:170;
  for(let i=0;i<nx.length;i++){for(let k=i+1;k<nx.length;k++){const d=Math.hypot(nx[i][0]-nx[k][0],nx[i][1]-nx[k][1]);if(d<lim){ax.globalAlpha=.2*(1-d/lim);ax.beginPath();ax.moveTo(...nx[i]);ax.lineTo(...nx[k]);ax.stroke()}}ax.globalAlpha=.34;ax.beginPath();ax.arc(nx[i][0],nx[i][1],2.2,0,7);ax.fill()}
  ax.globalAlpha=1;const g=ax.createRadialGradient(cx,cy,0,cx,cy,U*1.9);g.addColorStop(0,'rgba(255,255,255,1)');g.addColorStop(.45,'rgba(255,255,255,.75)');g.addColorStop(1,'rgba(255,255,255,0)');ax.fillStyle=g;ax.fillRect(cx-U*2,cy-U*2,U*4,U*4);
  const N=6,b0=Math.floor(az),fr=az-b0,near=.6,size=z=>U*1.18/(z*.4+.36),asp=.86;
  const gr=ax.createLinearGradient(cx-U,cy-U,cx+U,cy+U);gr.addColorStop(0,'#4f7dfa');gr.addColorStop(1,'#9a4ff0');
  /* قضبان البيانات */
  const zFar=N+.4,Sf=size(zFar),Sn=size(near+.06);ax.strokeStyle=gr;
  RAIL.forEach((q,m)=>{const [x,y]=RING[q];ax.globalAlpha=.32;ax.lineWidth=1.2;ax.beginPath();ax.moveTo(cx+x*Sf,cy+y*Sf*asp);ax.lineTo(cx+x*Sn,cy+y*Sn*asp);ax.stroke();
    for(let e=0;e<2;e++){const t=((az*.9+m*.31+e*.5)%1+1)%1,zz=zFar*(1-t)+near*t,s1=size(zz),s2=size(Math.min(zFar,zz+.5));ax.globalAlpha=.85*clamp(t*4,0,1);ax.lineWidth=Math.max(1.4,s1*.013);ax.lineCap='round';ax.beginPath();ax.moveTo(cx+x*s2,cy+y*s2*asp);ax.lineTo(cx+x*s1,cy+y*s1*asp);ax.stroke()}});ax.lineCap='butt';
  /* نواة الذكاء الاصطناعي */
  const K=U*.185;ax.globalAlpha=1;ax.strokeStyle=gr;ax.lineWidth=Math.max(1,K*.07);for(let i=-2;i<=2;i++){const o=i*K*.36;ax.beginPath();ax.moveTo(cx+o,cy-K*1.45);ax.lineTo(cx+o,cy+K*1.45);ax.moveTo(cx-K*1.45,cy+o);ax.lineTo(cx+K*1.45,cy+o);ax.stroke()}
  ax.fillStyle='#fff';ax.beginPath();ax.roundRect(cx-K*1.1,cy-K*1.1,K*2.2,K*2.2,K*.28);ax.fill();ax.fillStyle=gr;ax.beginPath();ax.roundRect(cx-K,cy-K,K*2,K*2,K*.22);ax.fill();ax.fillStyle='#fff';ax.font=`700 ${K*1.02}px Alexandria`;ax.textAlign='center';ax.textBaseline='middle';ax.fillText('AI',cx,cy+K*.06);
  for(let k=N;k>=0;k--){const z=k-fr+.6;if(z<near)continue;const id=b0+k,S=size(z),H2=S*asp,dep=clamp((z-near)/N,0,1),fade=clamp((N+.3-z)/2.5,0,1)*clamp((z-near)*4,0,1),bw=S*.075;
    ax.globalAlpha=fade*(.62-.2*dep);ax.fillStyle='#ffffff';ax.beginPath();ringPath(cx,cy,S+bw,H2+bw);ringPath(cx,cy,S,H2);ax.fill('evenodd');
    ax.strokeStyle=gr;ax.globalAlpha=fade*.16;ax.lineWidth=S*.035;ax.beginPath();ringPath(cx,cy,S,H2);ax.stroke();
    ax.globalAlpha=fade*(.95-.45*dep);ax.lineWidth=Math.max(1,S*.0085);ax.stroke();
    ax.globalAlpha=fade*.45;ax.lineWidth=Math.max(.7,S*.004);ax.beginPath();ringPath(cx,cy,S+bw,H2+bw);ax.stroke();
    /* مقاطع مضيئة تدور على الحلقة */
    ax.globalAlpha=fade;ax.fillStyle='#8a4ff0';RAIL.forEach(q=>{const [x,y]=RING[q];ax.beginPath();ax.arc(cx+x*S,cy+y*H2,Math.max(1.4,S*.016),0,7);ax.fill()});
    const zi=z+.5,Si=size(zi),im=shots[((id*5)%shots.length+shots.length)%shots.length];
    if(im.complete&&im.naturalWidth&&k<N-2){const side=id%2?1:-1,hh=Si*.5,ww=Math.min(hh*1.15,hh*im.naturalWidth/im.naturalHeight),x=cx+side*Si*.68-ww/2,y=cy-hh*.5,b=Math.max(1.5,Si*.014),al=fade*clamp((z-near)*3,0,1);
      ax.globalAlpha=al;ax.shadowColor='rgba(90,60,200,.35)';ax.shadowBlur=Si*.09*dpr;ax.fillStyle='#fff';ax.fillRect(x-b,y-b,ww+2*b,hh+2*b);ax.shadowColor='transparent';ax.shadowBlur=0;
      ax.drawImage(im,0,0,im.naturalWidth,Math.min(im.naturalHeight,im.naturalWidth*hh/ww),x,y,ww,hh);
      const o=b*3.2,L=ww*.17;ax.strokeStyle=gr;ax.lineWidth=Math.max(1.2,Si*.011);ax.beginPath();[[x-o,y-o,1,1],[x+ww+o,y-o,-1,1],[x-o,y+hh+o,1,-1],[x+ww+o,y+hh+o,-1,-1]].forEach(([px,py,sx,sy])=>{ax.moveTo(px+L*sx,py);ax.lineTo(px,py);ax.lineTo(px,py+L*sy)});ax.stroke()}
  }
  ax.globalAlpha=1}
function loopArc(){if(!arcOn)return;az+=av;drawArc();requestAnimationFrame(loopArc)}
function startArc(){sizeArc();av=.004;drawArc();if(calm){shots.forEach(i=>i.onload=drawArc);return}if(!arcOn){arcOn=true;loopArc()}}
$('enter').onclick=()=>{if(calm){location.hash='#/lobby';return}const t0=performance.now();(function up(){const k=(performance.now()-t0)/750;av=.004+k*k*.08;if(k<1)requestAnimationFrame(up);else location.hash='#/lobby'})()};

/* ---------- انتقال: أعمدة بيانات ---------- */
const wc=$('wipe'),wx=wc.getContext('2d');let wiping=0;
function wipe(color,mid){if(calm||document.hidden){mid();return}const my=++wiping;wc.width=innerWidth;wc.height=innerHeight;const W=wc.width,HH=wc.height,C=Math.max(8,Math.round(W/90)),cw=W/C,t0=performance.now();let done=false;
  const dl=[];for(let i=0;i<C;i++)dl.push(Math.abs(i-(C-1)/2)/C*.5+Math.random()*.16);
  (function f(){if(my!==wiping)return;const t=(performance.now()-t0)/480;wx.clearRect(0,0,W,HH);
    if(t>=1.1&&!done){done=true;mid()}
    for(let i=0;i<C;i++){const e=x=>{x=clamp(x,0,1);return x*x*(3-2*x)},p=t<1.1?e((t-dl[i])/.55):1-e((t-1.12-dl[i])/.55);if(p<=0)continue;const up=i%2,hh=HH*p,y=t<1.1?(up?HH-hh:0):(up?0:HH-hh);
      wx.fillStyle=color;wx.fillRect(i*cw,y,cw+1,hh);if(p<1){wx.fillStyle=i%3?'#8a63e6':'#5f86ea';wx.fillRect(i*cw,(t<1.1)===!!up?y:y+hh-3,cw+1,3)}}
    if(t<2.3)requestAnimationFrame(f);else wx.clearRect(0,0,W,HH)})()}

/* ---------- رسم البيئة على لوحة واحدة (خفيف على ذاكرة الجوال) ---------- */
const hex=s=>[1,3,5].map(i=>parseInt(s.slice(i,i+2),16));
const rgba=(s,o)=>`rgba(${hex(s).join(',')},${o})`;
const blend=(x,y,t)=>{const A=hex(x),B=hex(y);return `rgb(${A.map((v,i)=>Math.round(v+(B[i]-v)*t)).join(',')})`};
function Env(id){const cv=$(id),g=cv.getContext('2d');let W=0,HH=0,P=1,cx=0,cy=0,co=1,si=0,oz=0,oy=0,near=1;
  return {g,cv,size(){W=innerWidth;HH=innerHeight;const q=Math.min(1.6,devicePixelRatio||1);cv.width=Math.round(W*q);cv.height=Math.round(HH*q);this.q=q},
    free(){cv.width=cv.height=1},
    cam(p,yaw,z,y,n){P=p;co=Math.cos(yaw);si=Math.sin(yaw);oz=z;oy=y;near=n;cx=W/2;cy=HH/2;g.setTransform(this.q,0,0,this.q,0,0)},
    W:()=>W,H:()=>HH,
    view(X,Y,Z){const z=Z-oz;return [X*co+z*si,Y+oy,X*si-z*co]},
    scr(v){const k=P/v[2];return [cx+v[0]*k,cy+v[1]*k]},
    clip(pts,closed){const V=pts.map(p=>this.view(p[0],p[1],p[2])),o=[],n=V.length;for(let i=0;i<n;i++){const A=V[i],ok=A[2]>near;if(ok)o.push(A);if(i===n-1&&!closed)break;const B=V[(i+1)%n];if(ok!==(B[2]>near)){const t=(near-A[2])/(B[2]-A[2]);o.push([A[0]+(B[0]-A[0])*t,A[1]+(B[1]-A[1])*t,near])}}return o.map(v=>this.scr(v))},
    path(pts,closed){const q=this.clip(pts,closed);if(q.length<2)return false;q.forEach((p,i)=>g[i?'lineTo':'moveTo'](p[0],p[1]));if(closed)g.closePath();return true},
    poly(pts,fill){g.beginPath();if(this.path(pts,true)){g.fillStyle=fill;g.fill()}},
    line(pts){g.beginPath();if(this.path(pts,false))g.stroke()},
    depth(X,Y,Z){return this.view(X,Y,Z)[2]}}}
const CIR=[[[40,60],[130,60],[160,90],[230,90]],[[300,60],[410,60],[460,110],[500,110]],[[70,420],[70,340],[120,290],[160,290],[200,250]],[[330,220],[370,260],[370,360],[390,400]],[[470,430],[470,340],[510,300],[520,300]],[[60,180],[120,180],[150,150]]];

/* ---------- البهو الدائري ---------- */
const ring=$('ring'),N=WINGS.length,STEP=360/N;let la=0,lt=0,lobOn=false;
const glimpse=w=>w.teachers.length?hang(covers(w.teachers.map(t=>t.items),4)):'';
/* على الجوال: أبواب أعرض وزاوية رؤية أوسع، فتظهر حافتا القسمين المجاورين يمينًا ويسارًا */
const lobPort=()=>innerWidth<=1100&&innerHeight>innerWidth;
const LE=Env('lobEnv');let LB=null;
function buildLobby(){const port=lobPort(),R=port?innerWidth:1000,floor=port?innerHeight/2-132:340,dw=port?Math.round(innerWidth*.6):450,
  dh=port?Math.round(Math.min(innerHeight-236,innerWidth*1.36)):720;
  $('lobby').classList.toggle('port',port);LE.size();LB={port,R,floor,top:port?-innerHeight:-700,key:''};
  ring.innerHTML=WINGS.map((w,i)=>{
    const soon=!w.teachers.length,names=w.teachers.map(t=>t.name).filter(n=>!/أعمال القسم/.test(n));
    return `<div class="bay" data-i="${i}" style="transform:rotateY(${i*STEP}deg) translateZ(${-R}px);--wall:${w.pal[0]};--wall2:${w.pal[1]};--deep:${w.pal[2]}">
      <a class="door${soon?' soon':''}" href="${soon?'#/lobby':'#/wing/'+w.id}" draggable="false" style="left:${-dw/2}px;top:${floor-dh}px;width:${dw}px;height:${dh}px;transform:translateZ(2px)" aria-label="${esc('جناح '+w.name+(soon?'، يفتتح قريبًا':''))}"><span class="in">${icon(w.icon,port?(soon?76:46):(soon?130:76))}${glimpse(w)}<span class="plate${w.name.length>14?' long':''}"><b>${esc(w.name)}</b><span>${soon?'يُفتتح قريبًا':esc(names.join('، '))}</span>${soon?'':`<i>${inside(w.teachers.flatMap(t=>t.items))}</i>`}</span></span></a></div>`}).join('')}
function drawLobby(p,ty){const g=LE.g,{R,floor,top}=LB,yaw=-la*STEP*Math.PI/180,W=LE.W(),HH=LE.H();LE.cam(p,yaw,0,ty,R*.06);
  const bg=g.createLinearGradient(0,0,0,HH);bg.addColorStop(0,'#fdfcff');bg.addColorStop(.5,'#f0ebff');bg.addColorStop(1,'#d3cafa');g.globalAlpha=1;g.fillStyle=bg;g.fillRect(0,0,W,HH);
  const fy=HH/2+(floor+ty)*p/R,fl=g.createLinearGradient(0,fy-10,0,HH);fl.addColorStop(0,'#efeaff');fl.addColorStop(1,'#cabffa');
  const ph=Math.PI/N,rc=R/Math.cos(ph),at=(q,rr,y)=>[-Math.sin(q)*rr,y,-Math.cos(q)*rr];
  /* الأرضية */
  const rim=[];for(let i=0;i<=N;i++){const q=(i-.5)*2*ph;rim.push(at(q,rc,floor))}
  LE.poly(rim.slice(0,N),fl);
  g.lineWidth=1.5;g.strokeStyle='#7d6cf0';g.globalAlpha=.3;for(const f of [.38,.52,.66,.8,.94]){const pts=[];for(let i=0;i<=60;i++)pts.push(at(i/60*Math.PI*2,R*f,floor));LE.line(pts)}
  g.globalAlpha=.24;for(let i=0;i<40;i++){const q=i/40*Math.PI*2;LE.line([at(q,R*.38,floor),at(q,R*.98,floor)])}
  /* الجدران ونقش الدوائر */
  const wall=g.createLinearGradient(0,0,0,fy);wall.addColorStop(0,'#fdfcff');wall.addColorStop(1,'#e2dafc');
  const half=R*Math.tan(ph),u=half*2/560;
  for(let i=0;i<N;i++){const q=i*2*ph,d=LE.depth(...at(q,R,0));if(d<R*.12)continue;
    const L=at(q+ph,rc,0),Rr=at(q-ph,rc,0),pt=(x,y)=>{const t=x/560;return [L[0]+(Rr[0]-L[0])*t,y,L[2]+(Rr[2]-L[2])*t]};
    g.globalAlpha=1;LE.poly([pt(0,top),pt(560,top),pt(560,floor),pt(0,floor)],wall);
    g.strokeStyle='#6a5be8';g.fillStyle='#6a5be8';g.lineWidth=1.4;for(let rp=0;rp<3;rp++)for(const c of CIR){const y0=floor-(rp+1)*480*u;if(y0+480*u<top)continue;g.globalAlpha=.2;LE.line(c.map(([x,y])=>pt(x,y0+y*u)));g.globalAlpha=.32;for(const e of [c[0],c[c.length-1]]){const v=LE.view(...pt(e[0],y0+e[1]*u));if(v[2]>R*.1){const s=LE.scr(v);g.beginPath();g.arc(s[0],s[1],Math.max(1.4,4*u*p/v[2]),0,7);g.fill()}}}}
  /* أعمدة LED */
  for(let i=0;i<N;i++){const q=(i+.5)*2*ph,A=at(q,rc,top),B=at(q,rc,floor);if(LE.depth(...A)<R*.1)continue;const sA=LE.scr(LE.view(...A)),sB=LE.scr(LE.view(...B)),lg=g.createLinearGradient(0,Math.max(0,sA[1]),0,sB[1]);lg.addColorStop(0,'rgba(109,141,242,0)');lg.addColorStop(.3,'#6d8df2');lg.addColorStop(1,'#9a5cf0');g.strokeStyle=lg;const z=p/LE.depth(...A)*R/1000*(LB.port?2:1);
    g.globalAlpha=.14;g.lineWidth=46*z;LE.line([A,B]);g.globalAlpha=.2;g.lineWidth=22*z;LE.line([A,B]);g.globalAlpha=1;g.lineWidth=6*z;LE.line([A,B])}
  g.globalAlpha=1}
function lobFrame(){if(!lobOn)return;requestAnimationFrame(lobFrame);if(frozen())return;la+=(lt-la)*(calm?1:.09);if(Math.abs(lt-la)<.001)la=lt;const port=LB.port,s=port?1:Math.min(innerHeight/900,1.25),p=port?LB.R:820*s,ty=port?0:40,key=la+'|'+LB.R+'|'+innerHeight;
  if(key!==LB.key){LB.key=key;ring.style.transform=`perspective(${p}px) translateZ(${p}px) scale3d(${s},${s},${s}) translateY(${ty}px) rotateY(${-la*STEP}deg)`;
    const lim=port?56:80;for(const b of ring.children){let a=((b.dataset.i-la)*STEP+540)%360-180;if(a<-180)a+=360;b.style.display=Math.abs(a)<lim?'':'none'}
    drawLobby(p/s*s,ty)}
  const cur=((Math.round(la)%N)+N)%N;if(cur!==lobFrame.c){lobFrame.c=cur;const w=WINGS[cur];$('lobNow').innerHTML=`${esc(w.name)}<small>${w.teachers.length?count(w.teachers.length,'قاعة واحدة','قاعتان','قاعات','قاعة')+' و'+nWorks(w.count):'يُفتتح قريبًا'}</small>`}}
/* التالي على اليسار كما في القراءة العربية */
const lobGo=d=>{lt=Math.round(lt)+d};
$('lobNext').onclick=()=>lobGo(1);$('lobPrev').onclick=()=>lobGo(-1);

/* سحب مشترك */
function dragger(el,onMove,onEnd){let x0=null,moved=0,id=null;
  el.addEventListener('pointerdown',e=>{if(e.button)return;x0=e.clientX;moved=0;id=e.pointerId;el.classList.add('drag')});
  addEventListener('pointermove',e=>{if(x0==null||e.pointerId!==id)return;const d=e.clientX-x0;x0=e.clientX;moved+=Math.abs(d);if(moved>6)onMove(d)});
  const end=e=>{if(x0==null||e.pointerId!==id)return;x0=null;el.classList.remove('drag');onEnd()};
  addEventListener('pointerup',end);addEventListener('pointercancel',end);
  el.addEventListener('click',e=>{if(moved>8){e.preventDefault();e.stopPropagation()}},true);el.addEventListener('dragstart',e=>e.preventDefault())}
dragger($('rotunda'),d=>{lt+=d/Math.min(innerWidth,900)*1.5},()=>{lt=Math.round(lt)});
let wl=0;const wheel=(el,fn)=>el.addEventListener('wheel',e=>{e.preventDefault();const n=performance.now();if(n-wl<330)return;const d=Math.abs(e.deltaY)>Math.abs(e.deltaX)?e.deltaY:-e.deltaX;if(Math.abs(d)<6)return;wl=n;fn(d>0?1:-1)},{passive:false});
wheel($('rotunda'),lobGo);
/* لمس حافة قسم مجاور على الجوال يحضره إلى الوسط أولًا */
ring.addEventListener('click',e=>{const b=e.target.closest('.bay');if(!b||!lobPort())return;let d=(+b.dataset.i-Math.round(lt))%N;if(d>N/2)d-=N;if(d<-N/2)d+=N;if(d){e.preventDefault();lt=Math.round(lt)+d}});

/* ---------- الجناح ---------- */
function renderWing(w){setPal(w);const el=$('wing');el.innerHTML=`<div class="wing-head"><div><a class="back" href="#/lobby">→ عودة للرئيسية</a><h2>${esc(w.name)}</h2></div>${icon(w.icon,innerWidth<760?64:120)}</div>`+w.teachers.map(t=>{
  const c=covers([t.items],4);
  return `<article class="room"><a class="gate" href="${tURL(t)}" aria-label="${esc('ادخلي قاعة '+t.name)}"><span class="in">${hang(c)}<span class="go">ادخلي القاعة</span></span></a>
  <div><h3>${esc(t.name)}</h3><p class="role">${esc(t.role)}، ${nWorks(t.items.length)}: ${inside(t.items)}</p><ul class="zlist">${t.zones.map(z=>`<li><a href="${tURL(t,z.start+1)}"><span><b>${esc(z.t)}</b><small>${inside(z.items)}</small></span><span class="strip">${z.items.slice(0,5).map(x=>x.th?`<img src="${x.th.replace('/thumb/','/sm/')}" alt="">`:`<em>${esc(x.host)}</em>`).join('')}${z.items.length>5?`<em>+${ar(z.items.length-5)}</em>`:''}</span></a></li>`).join('')}</ul></div></article>`}).join('');el.scrollTop=0}

/* ---------- الرواق ---------- */
const hs=$('hallStage'),hw=$('hallWorld');let H=null,ht=0,hp=0,hallOn=false,touring=0,tourT=0;
const PLAY='<span class="play"><svg viewBox="0 0 10 10" fill="currentColor"><path d="M2 1.200C2 .4 2.800 0 3.500.4l5.300 3.700c.6.4.6 1.400 0 1.800L3.500 9.600C2.800 10 2 9.600 2 8.800z"/></svg></span>';
function badge(it){return it.k==='pdf'?`PDF ${ar(it.n)} ${it.n>10||it.n<3?'صفحة':'صفحات'}`:it.k==='pptx'?`عرض ${ar(it.n)} ${it.n>10||it.n<3?'شريحة':'شرائح'}`:it.k==='video'?'فيديو':''}
function buildHall(t,at){const vw=innerWidth,vh=innerHeight,port=vw<vh*.9;
  const P=Math.max(vh*.95,vw*.72),BW=port?vw*.76:Math.min(vw*.46,820),BH=vh*(port?.44:.5),th=(port?24:30)*Math.PI/180,X=Math.sin(th)*P,dd=Math.cos(th)*P,step=P*(port?.85:.72),half=X+BW*.5+30,yF=vh*.43,yC=-vh*.74,first=P*1.5;
  const n=t.items.length,segL=step*2,len=first+n*step+P*1.6,S=Math.ceil(len/segL)+1;
  let h='';const ribW=half*2,ribH=yF-yC;
  const hole=gatePts().map(([x,y])=>[(x*.9+5)*ribW/100-half,yC+(y*.94+6)*ribH/100]);hole[0][1]=hole[hole.length-1][1]=yF;
  const stops=[{z:P*.35,yaw:0}];
  h+=`<div class="sign big obj" data-z="${-P*.95}" style="transform:translate(-50%,-50%) translate3d(0,${-vh*.16}px,${-P*.95}px)">${esc(t.name)}<small>${esc(t.role)}، ${nWorks(n)}</small></div>`;
  t.items.forEach((it,i)=>{const z=-(first+i*step),side=i%2?-1:1,r=it.w/it.h,bw=Math.min(BW,BH*r),bh=bw/r,x=side*X;
    stops.push({z:z+dd,yaw:side*th});
    const cls=it.k==='link'?' lnk':'',inner=it.k==='link'?`<span class="fr">${esc(it.host)}<small>نشاط تفاعلي خارجي</small></span>`:`<span class="halo"></span><span class="fr"><img data-src="${it.th}" alt="" draggable="false"></span>`;
    h+=`<button type="button" class="work obj${cls}" data-i="${i}" data-z="${z}" aria-label="${esc(it.t)}" style="width:${bw+24}px;height:${bh+24}px;left:${-bw/2-12}px;top:${-bh/2-12-vh*.045}px;transform:translate3d(${x}px,0,${z}px) rotateY(${-side*th}rad)">${inner}${badge(it)?`<span class="badge">${badge(it)}</span>`:''}${it.k==='video'?PLAY:''}<span class="cap">${esc(it.t)}${it.by?`<small>${esc(it.by)}</small>`:''}</span></button>`;
    const zn=t.zones[it.zone];if(zn.start===i&&t.zones.length>1)h+=`<div class="sign obj" data-z="${z+step*.35}" style="transform:translate(-50%,-50%) translate3d(0,${yC*.66}px,${z+step*.35}px)">${esc(zn.t)}</div>`});
  const ze=-(first+n*step+P*.55),next=TEACH[(TEACH.indexOf(t)+1)%TEACH.length];stops.push({z:ze+P,yaw:0});
  const ew=Math.min(vw*.8,560),eh=vh*.74;
  h+=`<div class="exit obj" data-z="${ze}" style="width:${ew}px;height:${eh}px;left:${-ew/2}px;top:${yF-eh-4}px;transform:translateZ(${ze}px)"><span>نهاية القاعة</span><a href="${tURL(next)}">قاعة ${esc(next.name)}<small>${esc(next.wing.name)}</small></a><a class="alt" href="#/lobby">العودة للرئيسية</a></div>`;
  hw.innerHTML=h;
  H={t,P,stops,step,segL,half,yF,yC,hole,pal:t.wing.pal,far:segL*(port?2.3:3.2),key:'',objs:[...hw.querySelectorAll('.obj')]};H.objs.forEach(o=>{o._on=false;o.style.display='none'});
  HE.size();ht=hp=clamp(at,0,stops.length-1)}
const HE=Env('hallEnv');
function drawHall(z,yaw,bob){const g=HE.g,{P,half:X,yF,yC,segL,hole,pal:[w1,w2,dp]}=H,W=HE.W(),HH=HE.H();HE.cam(P,yaw,z,bob,P*.03);
  const vx=W/2-Math.tan(yaw)*P,vy=HH/2+bob,D=segL*4.6,zf=z-D,zn=z-P*.03,at=f=>z-D*f;
  g.globalAlpha=1;g.fillStyle='#fff';g.fillRect(0,0,W,HH);
  const fog=(x1,y1,c0,c1,c2)=>{const q=g.createLinearGradient(vx,vy,x1,y1);q.addColorStop(0,'#ffffff');q.addColorStop(.12,c0);q.addColorStop(.45,c1);q.addColorStop(1,c2);return q};
  const kx=X*P/(P*.9);
  HE.poly([[-X,yC,zn],[X,yC,zn],[X,yC,zf],[-X,yC,zf]],fog(vx,vy+yC*1.1,'#ffffff','#fcfaff',blend(w1,'#ffffff',.45)));
  HE.poly([[-X,yF,zn],[X,yF,zn],[X,yF,zf],[-X,yF,zf]],fog(vx,vy+yF*1.5,'#ffffff','#fbf9ff',blend(w2,'#ffffff',.45)));
  for(const sd of [-1,1]){const Xs=sd*X,wl=fog(vx+sd*kx*1.5,vy,blend(w1,'#ffffff',.6),w1,w2);
    HE.poly([[Xs,yC,zn],[Xs,yF,zn],[Xs,yF,zf],[Xs,yC,zf]],wl);
    const hgt=yF-yC;HE.poly([[Xs,yC,zn],[Xs,yC+hgt*.2,zn],[Xs,yC+hgt*.2,zf],[Xs,yC,zf]],'rgba(255,255,255,.4)');
    HE.poly([[Xs,yF-hgt*.055,zn],[Xs,yF,zn],[Xs,yF,zf],[Xs,yF-hgt*.055,zf]],'rgba(255,255,255,.95)');
    HE.poly([[Xs,yF-hgt*.066,zn],[Xs,yF-hgt*.055,zn],[Xs,yF-hgt*.055,zf],[Xs,yF-hgt*.066,zf]],dp);
    HE.poly([[Xs,yC+hgt*.497,zn],[Xs,yC+hgt*.503,zn],[Xs,yC+hgt*.503,zf],[Xs,yC+hgt*.497,zf]],'rgba(255,255,255,.6)')}
  /* إضاءة السقف */
  for(const sd of [-1,1]){const l=sd*X*.34,t=X*.014;g.globalAlpha=.16;HE.poly([[l-t*5,yC,zn],[l+t*5,yC,zn],[l+t*5,yC,zf],[l-t*5,yC,zf]],dp);g.globalAlpha=.9;HE.poly([[l-t,yC,zn],[l+t,yC,zn],[l+t,yC,zf],[l-t,yC,zf]],dp)}
  /* شبكة الأرضية */
  g.strokeStyle=dp;g.lineWidth=1.2;const cell=X*.2;g.globalAlpha=.26;for(let i=-5;i<=5;i++)HE.line([[i*cell,yF,zn],[i*cell,yF,z-D*.5]]);
  for(let q=Math.floor(z/cell)*cell;q>z-D*.55;q-=cell){const k=(z-q)/(D*.55);g.globalAlpha=.34*(1-k);HE.line([[-X,yF,q],[X,yF,q]])}
  /* نقش الدوائر على الجدران */
  const u=(yF-yC)/960,tw=560*u;g.lineCap='round';
  for(let b=Math.ceil(z/tw);b>(z-D*.62)/tw;b--){const z0=b*tw,k=clamp((z-z0)/(D*.62),0,1);for(const sd of [-1,1])for(let rw=0;rw<2;rw++)for(const c of CIR){const pt=c.map(([x,y])=>[sd*X,yC+(y+rw*480)*u,z0-x*u]);g.globalAlpha=.42*(1-k);g.strokeStyle=dp;g.lineWidth=1.6;HE.line(pt);
    g.fillStyle=dp;for(const e of [pt[0],pt[pt.length-1]]){const v=HE.view(...e);if(v[2]>P*.12){const s=HE.scr(v);g.globalAlpha=.6*(1-k);g.beginPath();g.arc(s[0],s[1],Math.max(1.2,5*u*P/v[2]),0,7);g.fill()}}}}
  g.lineCap='butt';
  /* بوابات القاعة من البعيد إلى القريب */
  const z0=P*.6;for(let i=Math.floor((z0-zf)/segL);i>=0;i--){const gz=z0-i*segL,k=z-gz;if(k<P*.14||k>D)continue;const pts=hole.map(([x,y])=>[x,y,gz]);if([[-X,yC],[X,yC],[X,yF],[-X,yF]].some(([x,y])=>HE.depth(x,y,gz)<P*.05))continue;
    const al=clamp((D-k)/(D*.5),0,1)*clamp((k-P*.14)/(P*.2),0,1);g.globalAlpha=al;g.beginPath();HE.path([[-X,yC,gz],[X,yC,gz],[X,yF,gz],[-X,yF,gz]],true);HE.path(pts,true);g.fillStyle=blend('#f6f3ff',w1,.18);g.fill('evenodd');
    const sc=P/k;g.strokeStyle=dp;g.lineJoin='round';g.globalAlpha=al*.16;g.lineWidth=24*sc;HE.line(pts);g.globalAlpha=al*.9;g.lineWidth=Math.max(1,4*sc);HE.line(pts);
    g.fillStyle=dp;for(const p of pts.slice(1,-1)){const s=HE.scr(HE.view(...p)),m=7*sc;g.fillRect(s[0]-m,s[1]-m,m*2,m*2)}}
  g.globalAlpha=1}
function openHall(t,at){setPal(t.wing);buildHall(t,at);$('hallName').textContent=t.name;$('hallWing').textContent=t.wing.name;$('hallBack').href='#/wing/'+t.wing.id;$('hallBack').textContent='→ جناح '+t.wing.name;
  $('zones').innerHTML=t.zones.length>1?t.zones.map((z,i)=>`<button type="button" data-z="${i}">${esc(z.t)}</button>`).join(''):'';lastCap=-1;if(!hallOn){hallOn=true;hallFrame()}}
let lastCap=-1,lastHash=0;
function hallFrame(now){if(!hallOn)return;requestAnimationFrame(hallFrame);if(frozen())return;const s=H.stops,m=s.length-1;
  if(touring&&now&&now-tourT>4600&&!$('view').open&&!document.querySelector('dialog[open]')){tourT=now;if(Math.round(ht)>=m)location.hash=tURL(TEACH[(TEACH.indexOf(H.t)+1)%TEACH.length]);else ht=Math.round(ht)+1}
  const d=ht-hp;hp+=calm?d:Math.sign(d)*Math.min(Math.abs(d)*.075,.11+Math.abs(d)*.02);if(Math.abs(ht-hp)<.0005)hp=ht;
  const i=clamp(Math.floor(hp),0,m),f=clamp(hp-i,0,1),a=s[i],b=s[Math.min(m,i+1)],e=f*f*(3-2*f),z=a.z+(b.z-a.z)*e,y=a.yaw+(b.yaw-a.yaw)*e,bob=calm?0:Math.sin(e*Math.PI*2)*5;
  const key=z+'|'+y;if(key!==H.key){H.key=key;hw.style.transform=`perspective(${H.P}px) translateZ(${H.P}px) rotateY(${y}rad) translate3d(0,${bob}px,${-z}px)`;drawHall(z,y,bob);
  for(const o of H.objs){const k=z-o.dataset.z,on=k>H.P*.16&&k<H.far;if(on!==o._on){o._on=on;o.style.display=on?'':'none'}
    if(on){const q=o._im===undefined?(o._im=o.querySelector('img[data-src]')):o._im;if(q&&!q.hasAttribute('src'))q.src=q.dataset.src;o.style.opacity=clamp(Math.min((H.far-k)/(H.segL*.8),(k-H.P*.16)/(H.P*.2)),0,1).toFixed(2)}
    else if(o._im&&Math.abs(k)>H.segL*5&&o._im.hasAttribute('src'))o._im.removeAttribute('src')}}
  const c=Math.round(hp);if(c!==lastCap){lastCap=c;const n=H.t.items.length,it=H.t.items[c-1];$('hCap').textContent=c===0?'اسحبي أو استخدمي الأسهم للتنقل في القاعة':it?`${ar(c)} من ${ar(n)}`:'نهاية القاعة';
    $('rail').firstChild.style.width=clamp(c/n*100,0,100)+'%';$('hPrev').disabled=c===0;$('hNext').disabled=c===m;
    [...$('zones').children].forEach((b,k)=>{const on=it&&it.zone===k;if(on&&b.getAttribute('aria-current')!=='true'&&b.scrollIntoView&&innerWidth<760)$('zones').scrollTo({left:b.offsetLeft-$('zones').clientWidth/2+b.clientWidth/2});b.setAttribute('aria-current',!!on)});
    const near=H.t.items.slice(Math.max(0,c-1),c+4);near.forEach(x=>{if(x.th){new Image().src=x.th}})}}
const hGo=d=>{if(H)ht=clamp(Math.round(ht)+d,0,H.stops.length-1)};
const stopTour=()=>{touring=0;$('tour').setAttribute('aria-pressed','false');$('tour').textContent='جولة تلقائية'};
$('hNext').onclick=()=>{stopTour();hGo(1)};$('hPrev').onclick=()=>{stopTour();hGo(-1)};
wheel(hs,d=>{stopTour();hGo(d)});
dragger(hs,d=>{stopTour();if(H)ht=clamp(ht+d/Math.min(innerWidth,1000)*2.1,0,H.stops.length-1)},()=>{if(H)ht=Math.round(ht)});
$('tour').onclick=()=>{if(touring){stopTour();return}touring=1;tourT=performance.now();$('tour').setAttribute('aria-pressed','true');$('tour').textContent='إيقاف الجولة';hGo(1)};
$('zones').onclick=e=>{const b=e.target.closest('button');if(b){stopTour();ht=H.t.zones[b.dataset.z].start+1;if(Math.abs(ht-hp)>6)hp=ht-Math.sign(ht-hp)*4}};
$('rail').onclick=e=>{const r=$('rail').getBoundingClientRect(),k=(r.right-e.clientX)/r.width;stopTour();ht=clamp(Math.round(k*H.t.items.length),0,H.stops.length-1);if(Math.abs(ht-hp)>6)hp=ht-Math.sign(ht-hp)*4};
hw.addEventListener('click',e=>{const w=e.target.closest('.work');if(!w)return;stopTour();const i=+w.dataset.i;if(Math.round(ht)!==i+1){ht=i+1;return}openView(H.t.items,i)});

/* النوافذ المفتوحة توقف المشهد خلفها وتحرر ذاكرته */
let stale=false;const frozen=()=>document.body.classList.contains('dlg');
const openDlg=d=>{if(!d.open)d.showModal();document.body.classList.add('dlg')};
document.querySelectorAll('dialog').forEach(d=>d.addEventListener('close',()=>{if(d.id==='all'||d.id==='guide'){if(d._io)d._io.disconnect();d.innerHTML=''}if(!document.querySelector('dialog[open]')){document.body.classList.remove('dlg');if(stale){stale=false;relayout()}else{if(H)H.key='';if(LB)LB.key=''}}}));

/* ---------- عارض الأعمال ---------- */
const V=$('view');let vl=[],vi=0,pg=0;
function openView(list,i){vl=list;vi=i;pg=0;openDlg(V);drawView()}
function drawView(dx){const it=vl[vi],B=$('vBody');B.className='v-body';$('vT').textContent=it.t;$('vBy').textContent=[it.by,it.teacher&&it.teacher.name+'، '+it.teacher.wing.name].filter(Boolean).join(' | ');
  $('vN').textContent=`${ar(vi+1)} من ${ar(vl.length)}`;const doc=it.k==='pdf'||it.k==='pptx';$('vPages').hidden=!doc||it.n<2;
  if(it.k==='video'){B.innerHTML=`<video src="${it.src}" poster="${it.th}" controls playsinline></video>`;const v=B.firstChild;const p=v.play();if(p)p.catch(()=>{})}
  else if(it.k==='link')B.innerHTML=`<a class="golink" href="${esc(it.url)}" target="_blank" rel="noopener">فتح النشاط على ${esc(it.host)}</a>`;
  else{B.innerHTML=`<img class="turn" alt="${esc(it.t)}" style="--dx:${dx||0}px" src="${doc?it.dir+String(pg+1).padStart(2,'0')+'.webp':it.src}">`;
    if(doc){$('pN').textContent=`${ar(pg+1)} / ${ar(it.n)}`;$('pPrev').disabled=pg===0;$('pNext').disabled=pg===it.n-1;if(pg+1<it.n)new Image().src=it.dir+String(pg+2).padStart(2,'0')+'.webp'}}}
const vGo=d=>{vi=(vi+d+vl.length)%vl.length;pg=0;drawView(d*-40);if(hallOn&&H&&vl===H.t.items)ht=hp=vi+1};
const pGo=d=>{const it=vl[vi],n=clamp(pg+d,0,it.n-1);if(n!==pg){pg=n;drawView(d*-60)}};
$('vNext').onclick=()=>vGo(1);$('vPrev').onclick=()=>vGo(-1);$('pNext').onclick=()=>pGo(1);$('pPrev').onclick=()=>pGo(-1);$('vX').onclick=()=>V.close();
V.addEventListener('close',()=>{$('vBody').innerHTML=''});
$('vBody').addEventListener('click',e=>{if(e.target.tagName==='IMG')$('vBody').classList.toggle('zoom');else if(e.target===$('vBody'))V.close()});
let tx=null;$('vBody').addEventListener('touchstart',e=>{tx=e.touches.length===1&&!$('vBody').classList.contains('zoom')?e.touches[0].clientX:null},{passive:true});
$('vBody').addEventListener('touchend',e=>{if(tx==null)return;const d=e.changedTouches[0].clientX-tx;tx=null;if(Math.abs(d)<50)return;const it=vl[vi],s=d>0?1:-1;if((it.k==='pdf'||it.k==='pptx')&&it.n>1&&pg+s>=0&&pg+s<it.n)pGo(s);else vGo(s)});

/* ---------- النوافذ ---------- */
const head=t=>`<div class="sh-top"><h2>${esc(t)}</h2><button type="button" class="x" data-x aria-label="إغلاق">✕</button></div>`;
const small=s=>s.replace('/thumb/','/sm/');
const tile=(it,k)=>`<button type="button" data-k="${k}">${it.th?`<img data-sm="${small(it.th)}" style="aspect-ratio:${it.w}/${it.h}" alt="">`:`<span class="lk">${esc(it.host)}</span>`}<span>${esc(it.t)}<small>${esc([it.by,badge(it)].filter(Boolean).join(' | '))}</small></span></button>`;
function masonry(its,off){const n=innerWidth<=760?2:innerWidth<1000?3:4,col=Array.from({length:n},()=>[]),ht=Array(n).fill(0);its.forEach((it,k)=>{const m=ht.indexOf(Math.min(...ht));col[m].push(tile(it,off+k));ht[m]+=it.h/it.w+.38});return `<div class="mas">${col.map(x=>`<div>${x.join('')}</div>`).join('')}</div>`}
function lazyIn(d){if(d._io)d._io.disconnect();const io=d._io=new IntersectionObserver(es=>es.forEach(e=>{const m=e.target;if(e.isIntersecting){if(!m.hasAttribute('src'))m.src=m.dataset.sm}else if(m.hasAttribute('src'))m.removeAttribute('src')}),{root:d,rootMargin:'700px 0px'});d.querySelectorAll('img[data-sm]').forEach(m=>io.observe(m))}
$('showAll').onclick=()=>{stopTour();const t=H.t,d=$('all');d.innerHTML=`<div class="wrap">${head(t.name)}${t.zones.map(z=>`<h3 class="zt">${esc(z.t)}</h3>${masonry(z.items,z.start)}`).join('')}</div>`;d.onclick=e=>{const b=e.target.closest('[data-k]');if(b)openView(t.items,+b.dataset.k)};openDlg(d);d.scrollTop=0;lazyIn(d)};
const norm=s=>String(s||'').replace(/[ًٌٍَُِّْـ]/g,'').replace(/[أإآ]/g,'ا').replace(/ة/g,'ه').replace(/ى/g,'ي').toLowerCase();
FLAT.forEach(x=>x.q=norm([x.t,x.by,x.teacher.name,x.teacher.wing.name].join(' ')));
function guide(){const d=$('guide');d.innerHTML=`<div class="wrap">${head('دليل المعرض')}<input class="search" id="q" type="search" placeholder="ابحثي باسم طالبة أو معلمة أو عمل" aria-label="بحث في المعرض" autocomplete="off"><div id="gOut"></div></div>`;
  const list=`<div class="g-list">${WINGS.map(w=>`<section style="--c:${w.pal[2]}"><h3>${w.teachers.length?`<a href="#/wing/${w.id}">${esc(w.name)}</a>`:esc(w.name)}</h3>${w.teachers.length?`<ul>${w.teachers.map(t=>`<li><a href="${tURL(t)}"><b>${esc(t.name)}<small>${inside(t.items)}</small></b><span>${nWorks(t.items.length)}</span></a></li>`).join('')}</ul>`:'<p class="muted">يُفتتح قريبًا</p>'}</section>`).join('')}</div>`;
  let res=[];$('gOut').innerHTML=list;$('q').oninput=e=>{const q=norm(e.target.value.trim());if(q.length<2){$('gOut').innerHTML=list;return}res=FLAT.filter(x=>q.split(/\s+/).every(p=>x.q.includes(p)));$('gOut').innerHTML=res.length?`<p class="zt">${nWorks(res.length)}</p>${masonry(res.slice(0,60),0)}`:'<p class="zt">لا توجد نتائج بهذا الاسم</p>';lazyIn(d)};
  d.onclick=e=>{const b=e.target.closest('[data-k]');if(b)openView(res,+b.dataset.k);else if(e.target.closest('a'))d.close()};openDlg(d)}
function about(){const d=$('about');d.innerHTML=`<div class="wrap">${head('عن المبادرة')}<p class="big"><b>متمكنة رقميًا ومبدعة في الذكاء الاصطناعي</b><br>مبادرة من ${esc(E.school)} تجمع في معرض واحد ما أنجزته المعلمات وطالباتهن بالأدوات الرقمية وتطبيقات الذكاء الاصطناعي.</p>
  <div class="nums"><div><b>${ar(OPEN.length)}</b>أجنحة</div><div><b>${ar(teachers)}</b>معلمة ومشاركة</div><div><b>${ar(total)}</b>عملًا معروضًا</div><div><b>${ar(FLAT.filter(x=>x.k==='video').length)}</b>فيديو</div></div>
  <div class="who"><div><span class="muted">إعداد المعلمتين</span>${E.authors.map(a=>`<b>${esc(a)}</b>`).join('')}</div><div><span class="muted">مديرة المدرسة</span><b>${esc(E.principal)}</b></div><div><span class="muted">المدرسة</span><b>${esc(E.school)}</b></div></div></div>`;d.onclick=null;openDlg(d)}
document.addEventListener('click',e=>{const o=e.target.closest('[data-open]');if(o){stopTour();o.dataset.open==='guide'?guide():about()}const x=e.target.closest('[data-x]');if(x)x.closest('dialog').close()});

/* ---------- لوحة المفاتيح ---------- */
addEventListener('keydown',e=>{if(e.target.tagName==='INPUT')return;const n=e.key==='ArrowLeft'||e.key==='PageDown',p=e.key==='ArrowRight'||e.key==='PageUp',up=e.key==='ArrowUp',dn=e.key==='ArrowDown';
  if(V.open){const it=vl[vi];if(e.target.tagName==='VIDEO')return;if(n||p){e.preventDefault();const s=n?1:-1;if((it.k==='pdf'||it.k==='pptx')&&pg+s>=0&&pg+s<it.n)pGo(s);else vGo(s)}return}
  if(document.querySelector('dialog[open]'))return;
  if(hallOn){if(n||up){e.preventDefault();stopTour();hGo(1)}else if(p||dn){e.preventDefault();stopTour();hGo(-1)}else if(e.key==='Enter'&&e.target===document.body&&H.t.items[Math.round(ht)-1])openView(H.t.items,Math.round(ht)-1);else if(e.key==='Escape')location.hash=$('hallBack').getAttribute('href')}
  else if(lobOn){if(n)lobGo(1);else if(p)lobGo(-1);else if(e.key==='Enter'&&e.target===document.body){const w=WINGS[((Math.round(lt)%N)+N)%N];if(w.teachers.length)location.hash='#/wing/'+w.id}}
  else if(!$('intro').hidden&&e.key==='Enter'&&e.target===document.body)$('enter').click()});

/* ---------- التنقل ---------- */
let booted=false;
function show(name){if(name!=='lobby'){ring.innerHTML='';LE.free()}if(name!=='hall'){hw.innerHTML='';H=null;hallOn=false;HE.free()}if(name!=='wing')$('wing').innerHTML='';if(name!=='intro'){arc.width=arc.height=1}['intro','lobby','wing','hall'].forEach(k=>$(k).hidden=k!==name);arcOn=name==='intro'&&arcOn;if(name!=='intro')arcOn=false;if(name!=='lobby')lobOn=false;if(name!=='hall'){hallOn=false;stopTour()}
  $('bar').hidden=name==='intro'||name==='hall';$('bar').classList.toggle('on-light',name==='lobby')}
function route(){const [,a,b,c,d]=location.hash.split('/');let go,color='#ffffff';const w=WINGS.find(x=>x.id===b&&x.teachers.length),t=w&&w.teachers.find(x=>x.id===c);
  if(a==='hall'&&t){color=w.pal[0];go=()=>{const keep=touring;show('hall');openHall(t,+d||0);if(keep){touring=1;tourT=performance.now()}}}
  else if(a==='wing'&&w){color=w.pal[0];go=()=>{lt=la=w.i;show('wing');renderWing(w)}}
  else if(a==='lobby'){color='#ffffff';go=()=>{show('lobby');if(!lobOn){lobOn=true;lobFrame.c=-1;buildLobby();if(lobPort()&&!calm)la=lt+.45;lobFrame()}}}
  else go=()=>{show('intro');startArc()};
  document.querySelectorAll('dialog[open]').forEach(x=>x.close());document.body.classList.remove('dlg');
  if(booted)wipe(color,go);else{booted=true;go()}}
addEventListener('hashchange',route);
function relayout(){if(!$('intro').hidden){sizeArc();drawArc()}if(lobOn)buildLobby();if(hallOn&&H)buildHall(H.t,Math.round(ht))}
let rz;addEventListener('resize',()=>{clearTimeout(rz);rz=setTimeout(()=>{if(frozen())stale=true;else relayout()},180)});
route();
})();
