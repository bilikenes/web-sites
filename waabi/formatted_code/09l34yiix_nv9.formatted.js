(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,65721,e=> {
"use strict";
let t,o;
e.s([],53521),e.i(53521);
var r=e.i(56242),n=e.i(59163);
let a=(0,n.createContext)(null);
var i=e.i(69348),s=e.i(76791),l=e.i(80709),c=e.i(16758),d=e.i(47703);
let u=(0,n.forwardRef)(function( {
children:e,as:t="ul",axis:o="y",onReorder:u,values:f,...g
}
,h) {
let b=(0,s.useConstant)(()=>i.motion[t]),y=[],v=(0,n.useRef)(!1);
return(0,d.invariant)(!!f,"Reorder.Group must be provided a values prop"),(0,n.useEffect)(()=> {
v.current=!1
}
),(0,r.jsx)(b, {
...g,ref:h,ignoreStrict:!0,children:(0,r.jsx)(a.Provider, {
value: {
axis:o,registerItem:(e,t)=> {
let r=y.findIndex(t=>e===t.value);
-1!==r?y[r].layout=t[o]:y.push( {
value:e,layout:t[o]
}
),y.sort(p)
}
,updateOrder:(e,t,o)=> {
if(v.current)return;
let r=function(e,t,o,r) {
if(!r)return e;
let n=e.findIndex(e=>e.value===t);
if(-1===n)return e;
let a=r>0?1:-1,i=e[n+a];
if(!i)return e;
let s=e[n],d=i.layout,u=(0,l.mixNumber)(d.min,d.max,.5);
return 1===a&&s.layout.max+o>u||-1===a&&s.layout.min+o<u?(0,c.moveItem)(e,n,n+a):e
}
(y,e,t,o);
y!==r&&(v.current=!0,u(r.map(m).filter(e=>-1!==f.indexOf(e))))
}

}
,children:e
}
)
}
)
}
);
function m(e) {
return e.value
}
function p(e,t) {
return e.layout.min-t.layout.min
}
var f=e.i(1332),g=e.i(78164),h=e.i(37198);
function b(e,t=0) {
return(0,h.isMotionValue)(e)?e:(0,f.useMotionValue)(t)
}
let y=(0,n.forwardRef)(function( {
children:e,style:t= {

}
,value:o,as:l="li",onDrag:c,layout:u=!0,...m
}
,p) {
let f=(0,s.useConstant)(()=>i.motion[l]),h=(0,n.useContext)(a),y= {
x:b(t.x),y:b(t.y)
}
,v=(0,g.useTransform)([y.x,y.y],([e,t])=>e||t?1:"unset");
(0,d.invariant)(!!h,"Reorder.Item must be a child of Reorder.Group");
let {
axis:w,registerItem:x,updateOrder:k
}
=h;
return(0,r.jsx)(f, {
drag:w,...m,dragSnapToOrigin:!0,style: {
...t,x:y.x,y:y.y,zIndex:v
}
,layout:u,onDrag:(e,t)=> {
let {
velocity:r
}
=t;
r[w]&&k(o,y[w].get(),r[w]),c&&c(e,t)
}
,onLayoutMeasure:e=>x(o,e),ref:p,ignoreStrict:!0,children:e
}
)
}
);
e.s(["Group",0,u,"Item",0,y],87288);
var v=e.i(87288);
e.s([],43485),e.i(43485);
var w=e.i(27686),x=e.i(35508),k=e.i(21191),C=e.i(52495);
function S(e) {
return"function"==typeof e
}
var j=e.i(69718),T=e.i(74770),E=e.i(11423);
let A=(0,e.i(4317).createMotionComponentFactory)(),N=(0,E.createDOMMotionComponentProxy)(A);
var _=e.i(66870),M=e.i(92149),R=e.i(81596),L=e.i(75024),I=e.i(21636),P=e.i(13784),O=e.i(14946),B=e.i(72717),D=e.i(46563),V=e.i(34673),z=e.i(778),F=e.i(53626);
let H= {
renderer:F.createDomVisualElement,...R.animations,...z.gestureAnimations
}
;
var $=e.i(11492),U=e.i(36306);
let K= {
...H,...$.drag,...U.layout
}
,W= {
renderer:F.createDomVisualElement,...R.animations
}
;
var G=e.i(22307);
e.i(79789);
var q=e.i(69235),J=e.i(69312),Z=e.i(48908),Y=e.i(95814),X=e.i(72651),Q=e.i(37758),ee=e.i(47620);
let et=new Set(["opacity","clipPath","filter","transform"]);
class eo extends Q.MotionValue {
constructor() {
super(...arguments),this.isEnabled=!1
}
add(e) {
(ee.transformProps.has(e)||et.has(e))&&(this.isEnabled=!0,this.update())
}
update() {
this.set(this.isEnabled?"transform":"auto")
}

}
var er=e.i(38441),en=e.i(98289),ea=e.i(32843);
function ei() {
ea.hasReducedMotionListener.current||(0,en.initPrefersReducedMotion)();
let[e]=(0,n.useState)(ea.prefersReducedMotion.current);
return e
}
var es=e.i(21530),el=e.i(77467),ec=e.i(39314);
function ed(e,t) {
[...t].reverse().forEach(o=> {
let r=e.getVariant(o);
r&&(0,el.setTarget)(e,r),e.variantChildren&&e.variantChildren.forEach(e=> {
ed(e,t)
}
)
}
)
}
function eu() {
let e=!1,t=new Set,o= {
subscribe:e=>(t.add(e),()=>void t.delete(e)),start(o,r) {
(0,d.invariant)(e,"controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");
let n=[];
return t.forEach(e=> {
n.push((0,ec.animateVisualElement)(e,o, {
transitionOverride:r
}
))
}
),Promise.all(n)
}
,set:o=>((0,d.invariant)(e,"controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."),t.forEach(e=> {
var t,r;
t=e,Array.isArray(r=o)?ed(t,r):"string"==typeof r?ed(t,[r]):(0,el.setTarget)(t,r)
}
)),stop() {
t.forEach(e=> {
e.values.forEach(e=>e.stop())
}
)
}
,mount:()=>(e=!0,()=> {
e=!1,o.stop()
}
)
}
;
return o
}
var em=e.i(7611),ep=e.i(41074),ef=e.i(94832);
let eg=new WeakMap,eh=(e,t="")=>`${e}:${t}`;
function eb(e) {
let t=eg.get(e)||new Map;
return eg.set(e,t),t
}
var ey=e.i(96998);
function ev(e,t) {
let o=window.getComputedStyle(e);
return(0,ey.isCSSVar)(t)?o.getPropertyValue(t):o[t]
}
var ew=e.i(85749);
let ex=new Set(["borderWidth","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","borderRadius","radius","borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius","width","maxWidth","height","maxHeight","top","right","bottom","left","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","margin","marginTop","marginRight","marginBottom","marginLeft","backgroundPositionX","backgroundPositionY"]);
function ek(e,t) {
for(let o=0;
o<e.length;
o++)"number"==typeof e[o]&&ex.has(t)&&(e[o]=e[o]+"px")
}
var eC=e.i(38986),eS=e.i(29621),ej=e.i(2017);
let eT=e=>function(t,o,r) {
return new ej.GroupAnimationWithThen(function(e,t,o,r) {
let n=(0,ep.resolveElements)(e,r),a=n.length;
(0,d.invariant)(!!a,"No valid element provided.");
let i=[];
for(let e=0;
e<a;
e++) {
let r=n[e],s= {
...o
}
;
for(let o in"function"==typeof s.delay&&(s.delay=s.delay(e,a)),t) {
let e=t[o];
Array.isArray(e)||(e=[e]);
let n= {
...(0,ef.getValueTransition)(s,o)
}
;
n.duration&&(n.duration=(0,eS.secondsToMilliseconds)(n.duration)),n.delay&&(n.delay=(0,eS.secondsToMilliseconds)(n.delay));
let a=eb(r),l=eh(o,n.pseudoElement||""),c=a.get(l);
c&&c.stop(),i.push( {
map:a,key:l,unresolvedKeyframes:e,options: {
...n,element:r,name:o,allowFlatten:!s.type&&!s.ease
}

}
)
}

}
for(let e=0;
e<i.length;
e++) {
let {
unresolvedKeyframes:t,options:o
}
=i[e], {
element:r,name:n,pseudoElement:a
}
=o;
a||null!==t[0]||(t[0]=ev(r,n)),(0,ew.fillWildcards)(t),ek(t,n),!a&&t.length<2&&t.unshift(ev(r,n)),o.keyframes=t
}
let s=[];
for(let e=0;
e<i.length;
e++) {
let {
map:t,key:o,options:r
}
=i[e],n=new eC.NativeAnimation(r);
t.set(o,n),n.finished.finally(()=>t.delete(o)),s.push(n)
}
return s
}
(t,o,r,e))
}
,eE=eT();
function eA() {
let e=(0,s.useConstant)(eu);
return(0,D.useIsomorphicLayoutEffect)(e.mount,[]),e
}
var eN=e.i(88098),e_=e.i(3412),eM=e.i(67251);
class eR {
constructor() {
this.componentControls=new Set
}
subscribe(e) {
return this.componentControls.add(e),()=>this.componentControls.delete(e)
}
start(e,t) {
this.componentControls.forEach(o=> {
o.start(e.nativeEvent||e,t)
}
)
}

}
let eL=()=>new eR;
var eI=e.i(33935),eP=e.i(2006);
function eO(e) {
return null!==e&&"object"==typeof e&&eP.motionComponentSymbol in e
}
var eB=e.i(17272),eD=e.i(20418),eV=e.i(16534);
function ez() {
return eF
}
function eF(e) {
eV.rootProjectionNode.current&&(eV.rootProjectionNode.current.isUpdating=!1,eV.rootProjectionNode.current.blockUpdate(),e&&e())
}
var eH=e.i(54265),e$=e.i(90802),eU=e.i(20003),eK=e.i(10800),eW=e.i(87648),eG=e.i(56927),eq=e.i(22835),eJ=e.i(16724);
let eZ=new Map,eY=new Map,eX=(e,t)=> {
let o=ee.transformProps.has(t)?"transform":t;
return`${e}: ${o}`
}
;
function eQ(e,t,o) {
let r=eX(e,t),n=eZ.get(r);
if(!n)return null;
let {
animation:a,startTime:i
}
=n;
function s() {
window.MotionCancelOptimisedAnimation?.(e,t,o)
}
return(a.onfinish=s,null===i||window.MotionHandoffIsComplete?.(e))?(s(),null):i
}
var e1=e.i(14886),e0=e.i(93168);
let e5=new Set;
function e2() {
e5.forEach(e=> {
e.animation.play(),e.animation.startTime=e.startTime
}
),e5.clear()
}
var e4=e.i(76920),e6=e.i(10160),e3=e.i(74602),e8=e.i(45156),e9=e.i(84033),e7=eU;
let te=()=>( {

}
);
class tt extends e7.VisualElement {
constructor() {
super(...arguments),this.measureInstanceViewportBox=P.createBox
}
build() {

}
resetTransform() {

}
restoreTransform() {

}
removeValueFromRenderState() {

}
renderInstance() {

}
scrapeMotionValuesFromProps() {
return te()
}
getBaseTargetFromProps() {

}
readValueFromInstance(e,t,o) {
return o.initialState[t]||0
}
sortInstanceNodePosition() {
return 0
}

}
let to=(0,L.makeUseVisualState)( {
scrapeMotionValuesFromProps:te,createRenderState:te
}
),tr=0;
var tn=e.i(59672);
let ta=e=>e>.001?1/e:1e5,ti=!1;
var ts=e.i(91632),tl=e.i(83592),tc=e.i(75678),td=e.i(94743),tu=e.i(62584),tm=e.i(48865),tp=e.i(53222),tf=e.i(56408),tg=e.i(8560),th=e.i(76429),tb=e.i(24694),ty=e.i(44123),tv=e.i(65185),tw=e.i(38699),tx=e.i(33882),tk=e.i(43466);
let tC=new Set;
var tS=e.i(99244),tj=e.i(54549),tT=e.i(23602),tE=e.i(50660),tA=e.i(82043),tN=e.i(73074),t_=e.i(70884),tM=e.i(88012),tR=e.i(80194),tL=e.i(92095),tI=e.i(91787),tP=e.i(65985),tO=e.i(3023),tB=e.i(69694),tD=eC;
class tV extends tD.NativeAnimation {
constructor(e) {
super(),this.animation=e,e.onfinish=()=> {
this.finishedTime=this.time,this.notifyFinished()
}

}

}
var tz=e.i(59641),tF=e.i(20742),tH=e.i(22829),t$=e.i(782),tU=e.i(91862),tK=e.i(36915),tW=e.i(8632),tG=e.i(82903),tq=e.i(49810),tJ=e.i(54001),tZ=e.i(24562),tY=e.i(51401),tX=e.i(1810),tQ=e.i(131),t1=e.i(53813),t0=e.i(20973),t5=e.i(4532);
let t2=(0,ty.memo)(()=> {
try {
document.createElement("div").animate( {
opacity:[1]
}
)
}
catch(e) {
return!1
}
return!0
}
);
var t4=e.i(94055),t6=e.i(9384);
function t3(e) {
return(t,o)=> {
let r=(0,ep.resolveElements)(t),n=[];
for(let t of r) {
let r=e(t,o);
n.push(r)
}
return()=> {
for(let e of n)e()
}

}

}
var t8=e.i(96704),t9=e.i(31642);
class t7 {
constructor() {
this.latest= {

}
,this.values=new Map
}
set(e,t,o,r,n=!0) {
let a=this.values.get(e);
a&&a.onRemove();
let i=()=> {
let r=t.get();
n?this.latest[e]=(0,t9.getValueAsType)(r,t8.numberValueTypes[e]):this.latest[e]=r,o&&eG.frame.render(o)
}
;
i();
let s=t.on("change",i);
r&&t.addDependent(r);
let l=()=> {
s(),o&&(0,eG.cancelFrame)(o),this.values.delete(e),r&&t.removeDependent(r)
}
;
return this.values.set(e, {
value:t,onRemove:l
}
),l
}
get(e) {
return this.values.get(e)?.value
}
destroy() {
for(let e of this.values.values())e.onRemove()
}

}
function oe(e) {
let t=new WeakMap,o=[];
return(r,n)=> {
let a=t.get(r)??new t7;
for(let i in t.set(r,a),n) {
let t=n[i],s=e(r,a,i,t);
o.push(s)
}
return()=> {
for(let e of o)e()
}

}

}
let ot=(e,t,o,r)=> {
let n=function(e,t) {
if(!(t in e))return!1;
let o=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e),t)||Object.getOwnPropertyDescriptor(e,t);
return o&&"function"==typeof o.set
}
(e,o),a=n?o:o.startsWith("data")||o.startsWith("aria")?o.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`):o,i=n?()=> {
e[a]=t.latest[o]
}
:()=> {
let r=t.latest[o];
null==r?e.removeAttribute(a):e.setAttribute(a,String(r))
}
;
return t.set(o,r,i)
}
,oo=t3(oe(ot)),or=oe((e,t,o,r)=>t.set(o,r,()=> {
e[o]=t.latest[o]
}
,void 0,!1));
var on=e.i(62733);
let oa= {
x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"
}
,oi=new Set(["originX","originY","originZ"]),os=(e,t,o,r)=> {
let n,a;
return ee.transformProps.has(o)?(t.get("transform")||((0,on.isHTMLElement)(e)||t.get("transformBox")||os(e,t,"transformBox",new Q.MotionValue("fill-box")),t.set("transform",new Q.MotionValue("none"),()=> {
e.style.transform=function(e) {
let t="",o=!0;
for(let r=0;
r<ee.transformPropOrder.length;
r++) {
let n=ee.transformPropOrder[r],a=e.latest[n];
if(void 0!==a) {
if(!("number"==typeof a?a===+!!n.startsWith("scale"):0===parseFloat(a))) {
o=!1;
let r=oa[n]||n,a=e.latest[n];
t+=`${r}(${a}) `
}

}

}
return o?"none":t.trim()
}
(t)
}
)),a=t.get("transform")):oi.has(o)?(t.get("transformOrigin")||t.set("transformOrigin",new Q.MotionValue(""),()=> {
let o=t.latest.originX??"50%",r=t.latest.originY??"50%",n=t.latest.originZ??0;
e.style.transformOrigin=`${o} ${r} ${n}`
}
),a=t.get("transformOrigin")):n=(0,ey.isCSSVar)(o)?()=> {
e.style.setProperty(o,t.latest[o])
}
:()=> {
e.style[o]=t.latest[o]
}
,t.set(o,r,n,a)
}
,ol=t3(oe(os));
var oc=e.i(28623);
let od=oc.px.transform,ou=t3(oe((e,t,o,r)=> {
if(o.startsWith("path"))return(eG.frame.render(()=>e.setAttribute("pathLength","1")),"pathOffset"===o)?t.set(o,r,()=>e.setAttribute("stroke-dashoffset",od(-t.latest[o]))):(t.get("stroke-dasharray")||t.set("stroke-dasharray",new Q.MotionValue("1 1"),()=> {
let {
pathLength:o=1,pathSpacing:r
}
=t.latest;
e.setAttribute("stroke-dasharray",`${od(o)} ${od(r??1-Number(o))}`)
}
),t.set(o,r,void 0,t.get("stroke-dasharray")));
return o.startsWith("attr")?ot(e,t,o.replace(/^attr([A-Z])/,(e,t)=>t.toLowerCase()),r):(o in e.style?os:ot)(e,t,o,r)
}
));
var om=e.i(70422),op=e.i(46151),of=e.i(95466),og=e.i(3005),oh=e.i(7505),ob=e.i(71309),oy=e.i(5059),ov=e.i(92352),ow=e.i(81460),ox=e.i(24856),ok=e.i(53938),oC=e.i(73295),oS=e.i(58510),oj=e.i(20940),oT=e.i(11329),oE=e.i(63205);
function oA() {
let {
value:e
}
=oE.statsBuffer;
null===e?(0,eG.cancelFrame)(oA):(e.frameloop.rate.push(eG.frameData.delta),e.animations.mainThread.push(oT.activeAnimations.mainThread),e.animations.waapi.push(oT.activeAnimations.waapi),e.animations.layout.push(oT.activeAnimations.layout))
}
function oN(e) {
return e.reduce((e,t)=>e+t,0)/e.length
}
function o_(e,t=oN) {
return 0===e.length? {
min:0,max:0,avg:0
}
: {
min:Math.min(...e),max:Math.max(...e),avg:t(e)
}

}
let oM=e=>Math.round(1e3/e);
function oR() {
oE.statsBuffer.value=null,oE.statsBuffer.addProjectionMetrics=null
}
function oL() {
let {
value:e
}
=oE.statsBuffer;
if(!e)throw Error("Stats are not being measured");
oR(),(0,eG.cancelFrame)(oA);
let t= {
frameloop: {
setup:o_(e.frameloop.setup),rate:o_(e.frameloop.rate),read:o_(e.frameloop.read),resolveKeyframes:o_(e.frameloop.resolveKeyframes),preUpdate:o_(e.frameloop.preUpdate),update:o_(e.frameloop.update),preRender:o_(e.frameloop.preRender),render:o_(e.frameloop.render),postRender:o_(e.frameloop.postRender)
}
,animations: {
mainThread:o_(e.animations.mainThread),waapi:o_(e.animations.waapi),layout:o_(e.animations.layout)
}
,layoutProjection: {
nodes:o_(e.layoutProjection.nodes),calculatedTargetDeltas:o_(e.layoutProjection.calculatedTargetDeltas),calculatedProjections:o_(e.layoutProjection.calculatedProjections)
}

}
, {
rate:o
}
=t.frameloop;
return o.min=oM(o.min),o.max=oM(o.max),o.avg=oM(o.avg),[o.min,o.max]=[o.max,o.min],t
}
var oI=e.i(73841),oP=e.i(50467),oO=e.i(98118),oB=e.i(14153),oD=e.i(61486),oV=e.i(74050),oz=e.i(41433),oF=e.i(32628),oH=e.i(80419),o$=e.i(69737),oU=e.i(16846);
function oK(e) {
let t,o,r,n=[];
Q.collectMotionValues.current=n;
let a=e();
Q.collectMotionValues.current=void 0;
let i=(0,Q.motionValue)(a);
return t=()=>i.set(e()),o=()=>eG.frame.preRender(t,!1,!0),r=n.map(e=>e.on("change",o)),i.on("destroy",()=> {
r.forEach(e=>e()),(0,eG.cancelFrame)(t)
}
),i
}
var oW=e.i(17057),oG=e.i(71702),oq=e.i(18754),oJ=e.i(61542),oZ=e.i(87127),oY=e.i(99908),oX=e.i(44163),oQ=e.i(39230),o1=e.i(26068),o0=e.i(20226),o5=e.i(98954),o2=e.i(31353),o4=e.i(57407),o6=e.i(41495),o3=e.i(35710);
let o8= {

}
,o9=null,o7=(e,t)=> {
o8[e]=t
}
;
function re(e) {
let {
effect:t
}
=e;
return!!t&&t.target===document.documentElement&&t.pseudoElement?.startsWith("::view-transition")
}
let rt=["layout","enter","exit","new","old"];
function ro(e,t) {
return e?.[t]?.keyframes.opacity
}
let rr=[],rn=null;
function ra() {
for(let e=rr.length-1;
e>=0;
e--) {
let t=rr[e], {
interrupt:o
}
=t.options;
if("immediate"===o) {
let o=rr.slice(0,e+1).map(e=>e.update),r=rr.slice(e+1);
t.update=()=> {
o.forEach(e=>e())
}
,rr=[t,...r];
break
}

}
rn&&rr[0]?.options.interrupt!=="immediate"||function e() {
var t;
rn=null;
let[o]=rr;
o&&(t=o,(0,c.removeItem)(rr,t),rn=t,(function(e) {
let {
update:t,targets:o,options:r
}
=e;
if(!document.startViewTransition)return new Promise(async e=> {
await t(),e(new tP.GroupAnimation([]))
}
);
o.has("root")&&Object.keys(o.get("root")).length>0||o7(":root", {
"view-transition-name":"none"
}
),o7("::view-transition-group(*), ::view-transition-old(*), ::view-transition-new(*)", {
"animation-timing-function":"linear !important"
}
),(()=> {
o9||((o9=document.createElement("style")).id="motion-view");
let e="";
for(let t in o8) {
let o=o8[t];
for(let[r,n]of(e+=`${t} {
`,Object.entries(o)))e+=`  ${r}: ${n};
`;
e+="}\n"
}
o9.textContent=e,document.head.appendChild(o9),o8= {

}

}
)();
let n=document.startViewTransition(async()=> {
await t()
}
);
return n.finished.finally(()=> {
o9&&o9.parentElement&&o9.parentElement.removeChild(o9)
}
),new Promise(e=> {
n.ready.then(()=> {
let t=document.getAnimations().filter(re),n=[];
for(let e of(o.forEach((e,t)=> {
for(let o of rt) {
if(!e[o])continue;
let {
keyframes:a,options:i
}
=e[o];
for(let[e,s]of Object.entries(a)) {
if(!s)continue;
let a= {
...(0,ef.getValueTransition)(r,e),...(0,ef.getValueTransition)(i,e)
}
,l="layout"===o?"group":"enter"===o||"new"===o?"new":"exit"===o||"old"===o?"old":"group";
"opacity"!==e||Array.isArray(s)||(s=[+("new"!==l),s]),"function"==typeof a.delay&&(a.delay=a.delay(0,1)),a.duration&&(a.duration=(0,eS.secondsToMilliseconds)(a.duration)),a.delay&&(a.delay=(0,eS.secondsToMilliseconds)(a.delay));
let c=new eC.NativeAnimation( {
...a,element:document.documentElement,name:e,pseudoElement:`::view-transition-${l}(${t})`,keyframes:s
}
);
n.push(c)
}

}

}
),t)) {
if("finished"===e.playState)continue;
let {
effect:t
}
=e;
if(!t||!(t instanceof KeyframeEffect))continue;
let {
pseudoElement:a
}
=t;
if(!a)continue;
let i=function(e) {
let t=e.match(/::view-transition-(old|new|group|image-pair)\((.*?)\)/);
return t? {
layer:t[2],type:t[1]
}
:null
}
(a);
if(!i)continue;
let s=o.get(i.layer);
if(s)ro(s,"enter")&&ro(s,"exit")&&t.getKeyframes().some(e=>e.mixBlendMode)?n.push(new tV(e)):e.cancel();
else {
let o="group"===i.type?"layout":"",a= {
...(0,ef.getValueTransition)(r,o)
}
;
a.duration&&(a.duration=(0,eS.secondsToMilliseconds)(a.duration)),a=(0,o3.applyGeneratorOptions)(a);
let s=(0,t5.mapEasingToNativeEasing)(a.ease,a.duration);
t.updateTiming( {
delay:(0,eS.secondsToMilliseconds)(a.delay??0),duration:a.duration,easing:s
}
),n.push(new tV(e))
}

}
e(new tP.GroupAnimation(n))
}
)
}
)
}
)(t).then(o=> {
t.notifyReady(o),o.finished.finally(e)
}
))
}
()
}
class ri {
constructor(e,t= {

}
) {
this.currentTarget="root",this.targets=new Map,this.notifyReady=e0.noop,this.readyPromise=new Promise(e=> {
this.notifyReady=e
}
),this.update=e,this.options= {
interrupt:"wait",...t
}
,function(e) {
rr.push(e),op.microtask.render(ra)
}
(this)
}
get(e) {
return this.currentTarget=e,this
}
layout(e,t) {
return this.updateTarget("layout",e,t),this
}
new(e,t) {
return this.updateTarget("new",e,t),this
}
old(e,t) {
return this.updateTarget("old",e,t),this
}
enter(e,t) {
return this.updateTarget("enter",e,t),this
}
exit(e,t) {
return this.updateTarget("exit",e,t),this
}
crossfade(e) {
return this.updateTarget("enter", {
opacity:1
}
,e),this.updateTarget("exit", {
opacity:0
}
,e),this
}
updateTarget(e,t,o= {

}
) {
let {
currentTarget:r,targets:n
}
=this;
n.has(r)||n.set(r, {

}
),n.get(r)[e]= {
keyframes:t,options:o
}

}
then(e,t) {
return this.readyPromise.then(e,t)
}

}
var rs=e.i(56611);
let rl=eG.frame,rc=rs.stepsOrder.reduce((e,t)=>(e[t]=e=>(0,eG.cancelFrame)(e),e), {

}
);
e.s(["AnimatePresence",()=>w.AnimatePresence,"AnimateSharedLayout",0,( {
children:e
}
)=>(n.useEffect(()=> {
(0,d.invariant)(!1,"AnimateSharedLayout is deprecated: https://www.framer.com/docs/guide-upgrade/##shared-layout-animations")
}
,[]),(0,r.jsx)(x.LayoutGroup, {
id:(0,s.useConstant)(()=>`asl-${tr++}`),children:e
}
)),"AsyncMotionValueAnimation",()=>tI.AsyncMotionValueAnimation,"DOMKeyframesResolver",()=>tq.DOMKeyframesResolver,"DeprecatedLayoutGroupContext",()=>tn.DeprecatedLayoutGroupContext,"DragControls",0,eR,"FlatTree",()=>e9.FlatTree,"GroupAnimation",()=>tP.GroupAnimation,"GroupAnimationWithThen",()=>ej.GroupAnimationWithThen,"JSAnimation",()=>tO.JSAnimation,"KeyframeResolver",()=>tJ.KeyframeResolver,"LayoutGroup",()=>x.LayoutGroup,"LayoutGroupContext",()=>e4.LayoutGroupContext,"LazyMotion",0,function( {
children:e,features:t,strict:o=!1
}
) {
let[,a]=(0,n.useState)(!S(t)),i=(0,n.useRef)(void 0);
if(!S(t)) {
let {
renderer:e,...o
}
=t;
i.current=e,(0,C.loadFeatures)(o)
}
return(0,n.useEffect)(()=> {
S(t)&&t().then(( {
renderer:e,...t
}
)=> {
(0,C.loadFeatures)(t),i.current=e,a(!0)
}
)
}
,[]),(0,r.jsx)(k.LazyContext.Provider, {
value: {
renderer:i.current,strict:o
}
,children:e
}
)
}
,"MotionConfig",0,function( {
children:e,isValidProp:t,...o
}
) {
t&&(0,T.loadExternalIsValidProp)(t),(o= {
...(0,n.useContext)(j.MotionConfigContext),...o
}
).isStatic=(0,s.useConstant)(()=>o.isStatic);
let a=(0,n.useMemo)(()=>o,[JSON.stringify(o.transition),o.transformPagePoint,o.reducedMotion]);
return(0,r.jsx)(j.MotionConfigContext.Provider, {
value:a,children:e
}
)
}
,"MotionConfigContext",()=>j.MotionConfigContext,"MotionContext",()=>e6.MotionContext,"MotionGlobalConfig",()=>es.MotionGlobalConfig,"MotionValue",()=>Q.MotionValue,"NativeAnimation",()=>eC.NativeAnimation,"NativeAnimationExtended",()=>tB.NativeAnimationExtended,"NativeAnimationWrapper",0,tV,"PresenceContext",()=>e3.PresenceContext,"Reorder",0,v,"SubscriptionManager",()=>tx.SubscriptionManager,"SwitchLayoutGroupContext",()=>e8.SwitchLayoutGroupContext,"ViewTransitionBuilder",0,ri,"VisualElement",()=>eU.VisualElement,"WillChangeMotionValue",0,eo,"acceleratedValues",0,et,"activeAnimations",()=>oT.activeAnimations,"addAttrValue",0,ot,"addPointerEvent",()=>_.addPointerEvent,"addPointerInfo",()=>M.addPointerInfo,"addScaleCorrector",()=>eD.addScaleCorrector,"addStyleValue",0,os,"addUniqueItem",()=>c.addUniqueItem,"alpha",()=>o5.alpha,"analyseComplexValue",()=>oX.analyseComplexValue,"animate",()=>tl.animate,"animateMini",0,eE,"animateValue",()=>tO.animateValue,"animateView",0,function(e,t= {

}
) {
return new ri(e,t)
}
,"animateVisualElement",()=>ec.animateVisualElement,"animationControls",0,eu,"animationMapKey",0,eh,"animations",()=>R.animations,"anticipate",()=>tS.anticipate,"applyPxDefaults",0,ek,"attachSpring",()=>oW.attachSpring,"attrEffect",0,oo,"backIn",()=>tj.backIn,"backInOut",()=>tj.backInOut,"backOut",()=>tj.backOut,"buildTransform",()=>eH.buildTransform,"calcGeneratorDuration",()=>tK.calcGeneratorDuration,"calcLength",()=>I.calcLength,"cancelFrame",()=>eG.cancelFrame,"cancelMicrotask",()=>op.cancelMicrotask,"cancelSync",0,rc,"circIn",()=>tT.circIn,"circInOut",()=>tT.circInOut,"circOut",()=>tT.circOut,"clamp",()=>tf.clamp,"collectMotionValues",()=>Q.collectMotionValues,"color",()=>oG.color,"complex",()=>oX.complex,"convertOffsetToTimes",()=>tX.convertOffsetToTimes,"createBox",()=>P.createBox,"createGeneratorEasing",()=>tW.createGeneratorEasing,"createRenderBatcher",()=>om.createRenderBatcher,"createRendererMotionComponent",()=>eI.createRendererMotionComponent,"createScopedAnimate",()=>tl.createScopedAnimate,"cubicBezier",()=>tE.cubicBezier,"cubicBezierAsString",()=>tQ.cubicBezierAsString,"defaultEasing",()=>t$.defaultEasing,"defaultOffset",()=>tZ.defaultOffset,"defaultTransformValue",()=>ox.defaultTransformValue,"defaultValueTypes",()=>o1.defaultValueTypes,"degrees",()=>oc.degrees,"delay",()=>ts.delay,"dimensionValueTypes",()=>oQ.dimensionValueTypes,"disableInstantTransitions",0,function() {
es.MotionGlobalConfig.instantAnimations=!1
}
,"distance",()=>tp.distance,"distance2D",()=>tp.distance2D,"domAnimation",0,H,"domMax",0,K,"domMin",0,W,"easeIn",()=>tA.easeIn,"easeInOut",()=>tA.easeInOut,"easeOut",()=>tA.easeOut,"easingDefinitionToFunction",()=>tm.easingDefinitionToFunction,"fillOffset",()=>tY.fillOffset,"fillWildcards",()=>ew.fillWildcards,"filterProps",()=>T.filterProps,"findDimensionValueType",()=>oQ.findDimensionValueType,"findValueType",()=>o6.findValueType,"flushKeyframeResolvers",()=>tJ.flushKeyframeResolvers,"frame",()=>eG.frame,"frameData",()=>eG.frameData,"frameSteps",()=>eG.frameSteps,"generateLinearEasing",()=>t6.generateLinearEasing,"getAnimatableNone",()=>o4.getAnimatableNone,"getAnimationMap",0,eb,"getComputedStyle",0,ev,"getDefaultValueType",()=>o1.getDefaultValueType,"getEasingForSegment",()=>tM.getEasingForSegment,"getMixer",()=>oV.getMixer,"getValueAsType",()=>t9.getValueAsType,"getValueTransition",()=>ef.getValueTransition,"getVariableValue",()=>tz.getVariableValue,"hasWarned",0,function(e) {
return tC.has(e)
}
,"hex",()=>oq.hex,"hover",()=>ob.hover,"hsla",()=>oJ.hsla,"hslaToRgba",()=>oZ.hslaToRgba,"inView",()=>tu.inView,"inertia",()=>tH.inertia,"interpolate",()=>oI.interpolate,"invariant",()=>d.invariant,"invisibleValues",()=>oF.invisibleValues,"isBezierDefinition",()=>tR.isBezierDefinition,"isBrowser",()=>O.isBrowser,"isCSSVariableName",()=>tF.isCSSVariableName,"isCSSVariableToken",()=>tF.isCSSVariableToken,"isDragActive",()=>og.isDragActive,"isDragging",()=>og.isDragging,"isEasingArray",()=>tL.isEasingArray,"isGenerator",()=>tG.isGenerator,"isHTMLElement",()=>on.isHTMLElement,"isMotionComponent",0,eO,"isMotionValue",()=>h.isMotionValue,"isNodeOrChild",()=>ov.isNodeOrChild,"isNumericalString",()=>tg.isNumericalString,"isObject",()=>th.isObject,"isPrimaryPointer",()=>ow.isPrimaryPointer,"isSVGElement",()=>oP.isSVGElement,"isSVGSVGElement",()=>oO.isSVGSVGElement,"isValidMotionProp",()=>eB.isValidMotionProp,"isWaapiSupportedEasing",0,function e(t) {
return!!("function"==typeof t&&(0,t1.supportsLinearEasing)()||!t||"string"==typeof t&&(t in t0.supportedWaapiEasing||(0,t1.supportsLinearEasing)())||(0,tR.isBezierDefinition)(t)||Array.isArray(t)&&t.every(e))
}
,"isZeroValueString",()=>tb.isZeroValueString,"keyframes",()=>t$.keyframes,"m",0,N,"makeUseVisualState",()=>L.makeUseVisualState,"mapEasingToNativeEasing",()=>t5.mapEasingToNativeEasing,"mapValue",0,function(e,t,o,r) {
let n=(0,oU.transform)(t,o,r);
return oK(()=>n(e.get()))
}
,"maxGeneratorDuration",()=>tK.maxGeneratorDuration,"memo",()=>ty.memo,"microtask",()=>op.microtask,"millisecondsToSeconds",()=>eS.millisecondsToSeconds,"mirrorEasing",()=>tN.mirrorEasing,"mix",()=>oB.mix,"mixArray",()=>oV.mixArray,"mixColor",()=>oD.mixColor,"mixComplex",()=>oV.mixComplex,"mixImmediate",()=>oz.mixImmediate,"mixLinearColor",()=>oD.mixLinearColor,"mixNumber",()=>l.mixNumber,"mixObject",()=>oV.mixObject,"mixVisibility",()=>oF.mixVisibility,"motion",()=>i.motion,"motionValue",()=>Q.motionValue,"moveItem",()=>c.moveItem,"noop",()=>e0.noop,"number",()=>o5.number,"numberValueTypes",()=>t8.numberValueTypes,"observeTimeline",()=>oj.observeTimeline,"optimizedAppearDataAttribute",()=>eq.optimizedAppearDataAttribute,"parseCSSVariable",()=>tz.parseCSSVariable,"parseValueFromTransform",()=>ox.parseValueFromTransform,"percent",()=>oc.percent,"pipe",()=>tv.pipe,"positionalKeys",()=>oC.positionalKeys,"press",()=>oy.press,"progress",()=>tw.progress,"progressPercentage",()=>oc.progressPercentage,"propEffect",0,or,"px",()=>oc.px,"readTransformValue",()=>ox.readTransformValue,"recordStats",0,function() {
if(oE.statsBuffer.value)throw oR(),Error("Stats are already being measured");
let e=oE.statsBuffer;
return e.value= {
frameloop: {
setup:[],rate:[],read:[],resolveKeyframes:[],preUpdate:[],update:[],preRender:[],render:[],postRender:[]
}
,animations: {
mainThread:[],waapi:[],layout:[]
}
,layoutProjection: {
nodes:[],calculatedTargetDeltas:[],calculatedProjections:[]
}

}
,e.addProjectionMetrics=t=> {
let {
layoutProjection:o
}
=e.value;
o.nodes.push(t.nodes),o.calculatedTargetDeltas.push(t.calculatedTargetDeltas),o.calculatedProjections.push(t.calculatedProjections)
}
,eG.frame.postRender(oA,!0),oL
}
,"removeItem",()=>c.removeItem,"resize",()=>oS.resize,"resolveElements",()=>ep.resolveElements,"resolveMotionValue",()=>er.resolveMotionValue,"reverseEasing",()=>t_.reverseEasing,"rgbUnit",()=>oY.rgbUnit,"rgba",()=>oY.rgba,"scale",()=>o5.scale,"scroll",()=>tc.scroll,"scrollInfo",()=>td.scrollInfo,"secondsToMilliseconds",()=>eS.secondsToMilliseconds,"setDragLock",()=>oh.setDragLock,"setStyle",()=>ok.setStyle,"spring",()=>tU.spring,"springValue",()=>oW.springValue,"stagger",0,function(e=.1, {
startDelay:t=0,from:o=0,ease:r
}
= {

}
) {
return(n,a)=> {
let i=e*Math.abs(("number"==typeof o?o:function(e,t) {
if("first"===e)return 0;
 {
let o=t-1;
return"last"===e?o:o/2
}

}
(o,a))-n);
if(r) {
let t=a*e;
i=(0,tm.easingDefinitionToFunction)(r)(i/t)*t
}
return t+i
}

}
,"startOptimizedAppearAnimation",0,function(e,r,n,a,i) {
if(window.MotionIsMounted)return;
let s=e.dataset[eq.optimizedAppearDataId];
if(!s)return;
window.MotionHandoffAnimation=eQ;
let l=eX(s,r);
o||(o=(0,e1.startWaapiAnimation)(e,r,[n[0],n[0]], {
duration:1e4,ease:"linear"
}
),eZ.set(l, {
animation:o,startTime:null
}
),window.MotionHandoffAnimation=eQ,window.MotionHasOptimisedAnimation=(e,t)=> {
if(!e)return!1;
if(!t)return eY.has(e);
let o=eX(e,t);
return!!eZ.get(o)
}
,window.MotionHandoffMarkAsComplete=e=> {
eY.has(e)&&eY.set(e,!0)
}
,window.MotionHandoffIsComplete=e=>!0===eY.get(e),window.MotionCancelOptimisedAnimation=(e,t,o,r)=> {
let n=eX(e,t),a=eZ.get(n);
a&&(o&&void 0===r?o.postRender(()=> {
o.postRender(()=> {
a.animation.cancel()
}
)
}
):a.animation.cancel(),o&&r?(e5.add(a),o.render(e2)):(eZ.delete(n),eZ.size||(window.MotionCancelOptimisedAnimation=void 0)))
}
,window.MotionCheckAppearSync=(e,t,o)=> {
let r=(0,eJ.getOptimisedAppearId)(e);
if(!r)return;
let n=window.MotionHasOptimisedAnimation?.(r,t),a=e.props.values?.[t];
if(!n||!a)return;
let i=o.on("change",e=> {
a.get()!==e&&(window.MotionCancelOptimisedAnimation?.(r,t),i())
}
);
return i
}
);
let c=()=> {
o.cancel();
let s=(0,e1.startWaapiAnimation)(e,r,n,a);
void 0===t&&(t=performance.now()),s.startTime=t,eZ.set(l, {
animation:s,startTime:t
}
),i&&i(s)
}
;
eY.set(s,!1),o.ready?o.ready.then(c).catch(e0.noop):c()
}
,"startWaapiAnimation",()=>e1.startWaapiAnimation,"statsBuffer",()=>oE.statsBuffer,"steps",0,function(e,t="end") {
return o=> {
let r=(o="end"===t?Math.min(o,.999):Math.max(o,.001))*e,n="end"===t?Math.floor(r):Math.ceil(r);
return(0,tf.clamp)(0,1,n/e)
}

}
,"styleEffect",0,ol,"supportedWaapiEasing",()=>t0.supportedWaapiEasing,"supportsBrowserAnimation",()=>t4.supportsBrowserAnimation,"supportsFlags",()=>oH.supportsFlags,"supportsLinearEasing",()=>t1.supportsLinearEasing,"supportsPartialKeyframes",0,t2,"supportsScrollTimeline",()=>o$.supportsScrollTimeline,"svgEffect",0,ou,"sync",0,rl,"testValueType",()=>o2.testValueType,"time",()=>of.time,"transform",()=>oU.transform,"transformPropOrder",()=>ee.transformPropOrder,"transformProps",()=>ee.transformProps,"transformValue",0,oK,"transformValueTypes",()=>o0.transformValueTypes,"unwrapMotionComponent",0,function(e) {
if(eO(e))return e[eP.motionComponentSymbol]
}
,"useAnimate",()=>em.useAnimate,"useAnimateMini",0,function() {
let e=(0,s.useConstant)(()=>( {
current:null,animations:[]
}
)),t=(0,s.useConstant)(()=>eT(e));
return(0,V.useUnmountEffect)(()=> {
e.animations.forEach(e=>e.stop())
}
),[e,t]
}
,"useAnimation",0,eA,"useAnimationControls",0,eA,"useAnimationFrame",()=>Y.useAnimationFrame,"useCycle",0,function(...e) {
let t=(0,n.useRef)(0),[o,r]=(0,n.useState)(e[t.current]);
return[o,(0,n.useCallback)(o=> {
t.current="number"!=typeof o?(0,eK.wrap)(0,e.length,t.current+1):o,r(e[t.current])
}
,[e.length,...e])]
}
,"useDeprecatedAnimatedState",0,function(e) {
let[t,o]=(0,n.useState)(e),r=to( {

}
,!1),a=(0,s.useConstant)(()=>new tt( {
props: {
onUpdate:e=> {
o( {
...e
}
)
}

}
,visualState:r,presenceContext:null
}
, {
initialState:e
}
));
return(0,n.useLayoutEffect)(()=>(a.mount( {

}
),()=>a.unmount()),[a]),[t,(0,s.useConstant)(()=>e=>(0,ec.animateVisualElement)(a,e))]
}
,"useDeprecatedInvertedScale",0,function(e) {
let t=(0,f.useMotionValue)(1),o=(0,f.useMotionValue)(1), {
visualElement:r
}
=(0,n.useContext)(e6.MotionContext);
return(0,d.invariant)(!!(e||r),"If no scale values are provided, useInvertedScale must be used within a child of another motion component."),(0,d.warning)(ti,"useInvertedScale is deprecated and will be removed in 3.0. Use the layout prop instead."),ti=!0,e?(t=e.scaleX||t,o=e.scaleY||o):r&&(t=r.getValue("scaleX",1),o=r.getValue("scaleY",1)), {
scaleX:(0,g.useTransform)(t,ta),scaleY:(0,g.useTransform)(o,ta)
}

}
,"useDomEvent",0,function(e,t,o,r) {
(0,n.useEffect)(()=> {
let n=e.current;
if(o&&n)return(0,eM.addDomEvent)(n,t,o,r)
}
,[e,t,o,r])
}
,"useDragControls",0,function() {
return(0,s.useConstant)(eL)
}
,"useElementScroll",0,function(e) {
return(0,q.useScroll)( {
container:e
}
)
}
,"useForceUpdate",()=>B.useForceUpdate,"useInView",()=>eW.useInView,"useInstantLayoutTransition",0,ez,"useInstantTransition",0,function() {
let[e,t]=(0,B.useForceUpdate)(),o=ez(),r=(0,n.useRef)(-1);
return(0,n.useEffect)(()=> {
eG.frame.postRender(()=>eG.frame.postRender(()=> {
t===r.current&&(es.MotionGlobalConfig.instantAnimations=!1)
}
))
}
,[t]),n=> {
o(()=> {
es.MotionGlobalConfig.instantAnimations=!0,e(),n(),r.current=t+1
}
)
}

}
,"useIsPresent",()=>eN.useIsPresent,"useIsomorphicLayoutEffect",()=>D.useIsomorphicLayoutEffect,"useMotionTemplate",()=>J.useMotionTemplate,"useMotionValue",()=>f.useMotionValue,"useMotionValueEvent",()=>G.useMotionValueEvent,"usePresence",()=>eN.usePresence,"usePresenceData",()=>e_.usePresenceData,"useReducedMotion",0,ei,"useReducedMotionConfig",0,function() {
let e=ei(), {
reducedMotion:t
}
=(0,n.useContext)(j.MotionConfigContext);
return"never"!==t&&("always"===t||e)
}
,"useResetProjection",0,function() {
return(0,n.useCallback)(()=> {
let e=eV.rootProjectionNode.current;
e&&e.resetTree()
}
,[])
}
,"useScroll",()=>q.useScroll,"useSpring",()=>Z.useSpring,"useTime",0,function() {
let e=(0,f.useMotionValue)(0);
return(0,Y.useAnimationFrame)(t=>e.set(t)),e
}
,"useTransform",()=>g.useTransform,"useUnmountEffect",()=>V.useUnmountEffect,"useVelocity",()=>X.useVelocity,"useViewportScroll",0,function() {
return(0,q.useScroll)()
}
,"useWillChange",0,function() {
return(0,s.useConstant)(()=>new eo("auto"))
}
,"velocityPerSecond",()=>tk.velocityPerSecond,"vh",()=>oc.vh,"visualElementStore",()=>e$.visualElementStore,"vw",()=>oc.vw,"warnOnce",0,function(e,t,o) {
e||tC.has(t)||(console.warn(t),o&&console.warn(o),tC.add(t))
}
,"warning",()=>d.warning,"wrap",()=>eK.wrap],65721)
}
,75980,e=> {
"use strict";
var t=e.i(44637),o=e.i(59163);
e.s(["GoogleAnalyticsPageView",0,function() {
let e=(0,t.usePathname)();
return(0,o.useEffect)(()=> {
window.dataLayer=window.dataLayer||[],window.dataLayer.push( {
event:"page_view",page:window.location.href
}
)
}
,[e]),null
}
])
}
,23321,37094,e=> {
"use strict";
var t=e.i(59163);
let o=(0,t.createContext)( {
theme:void 0,noStyle:!1,disableAnimation:!1,scrollLock:!1,trapFocus:!0
}
),r=(0,t.createContext)(null);
e.s(["GlobalThemeContext",0,o,"LocalThemeContext",0,r],23321);
let n= {
common: {
acceptAll:"Accept All",rejectAll:"Reject All",customize:"Customize",save:"Save Settings"
}
,cookieBanner: {
title:"We value your privacy",description:"This site uses cookies to improve your browsing experience, analyze site traffic, and show personalized content."
}
,consentManagerDialog: {
title:"Privacy Settings",description:"Customize your privacy settings here. You can choose which types of cookies and tracking technologies you allow."
}
,consentTypes: {
necessary: {
title:"Strictly Necessary",description:"These cookies are essential for the website to function properly and cannot be disabled."
}
,functionality: {
title:"Functionality",description:"These cookies enable enhanced functionality and personalization of the website."
}
,marketing: {
title:"Marketing",description:"These cookies are used to deliver relevant advertisements and track their effectiveness."
}
,measurement: {
title:"Analytics",description:"These cookies help us understand how visitors interact with the website and improve its performance."
}
,experience: {
title:"Experience",description:"These cookies help us provide a better user experience and test new features."
}

}
,frame: {
title:"Accept {category} consent to view this content.",actionButton:"Enable {category} consent"
}
,legalLinks: {
privacyPolicy:"Privacy Policy",cookiePolicy:"Cookie Policy",termsOfService:"Terms of Service"
}

}
;
var a=e.i(36844);
let i=/^\/+/;
function s(e,t=null,o=null,r=null) {
return {
data:t,error:o,ok:e,response:r
}

}
let l=[500,502,503,504],c=[400,401,403,404],d,u=/^(?:[a-z+]+:)?\/\//i,m=e=>new Promise(t=>setTimeout(t,e));
function p(e) {
let t=e.length;
for(;
t>0&&"/"===e[t-1];
)t--;
return e.slice(0,t)
}
async function f(e,t,o) {
let r= {
...e.retryConfig,...o?.retryConfig|| {

}
,retryableStatusCodes:o?.retryConfig?.retryableStatusCodes??e.retryConfig.retryableStatusCodes??l,nonRetryableStatusCodes:o?.retryConfig?.nonRetryableStatusCodes??e.retryConfig.nonRetryableStatusCodes??c
}
, {
maxRetries:n,initialDelayMs:a,backoffFactor:d,retryableStatusCodes:f,nonRetryableStatusCodes:g,retryOnNetworkError:h
}
=r,b=0,y=a,v=null;
for(;
b<=(n??0);
) {
let a,l="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=> {
let t=16*Math.random()|0;
return("x"===e?t:3&t|8).toString(16)
}
),c=e.customFetch||globalThis.fetch,w=function(e,t) {
if(u.test(e)) {
let o=new URL(e),r=p(o.pathname),n=t.replace(i,"");
return o.pathname=`${r}/${n}`,o.toString()
}
let o=p(e),r=t.replace(i,"");
return`${o}/${r}`
}
(e.backendURL,t);
try {
a=new URL(w)
}
catch {
a=new URL(w,window.location.origin)
}
if(o?.query)for(let[e,t]of Object.entries(o.query))void 0!==t&&a.searchParams.append(e,String(t));
let x= {
method:o?.method||"GET",mode:e.corsMode,credentials:"include",headers: {
...e.headers,"X-Request-ID":l,...o?.headers
}
,...o?.fetchOptions
}
;
o?.body&&"GET"!==x.method&&(x.body=JSON.stringify(o.body));
try {
let e=await c(a.toString(),x),i=null,l=null;
try {
let t=e.headers.get("content-type");
t?.includes("application/json")&&204!==e.status&&"0"!==e.headers.get("content-length")?i=await e.json():204===e.status&&(i=null)
}
catch(e) {
l=e
}
if(l) {
let r=s(!1,null, {
message:"Failed to parse response",status:e.status,code:"PARSE_ERROR",cause:l
}
,e);
if(o?.onError?.(r,t),o?.throw)throw Error("Failed to parse response");
return r
}
if(e.status>=200&&e.status<300) {
let t=s(!0,i,null,e);
return o?.onSuccess?.(t),t
}
let u=i,p=s(!1,null, {
message:u?.message||`Request failed with status ${e.status}`,status:e.status,code:u?.code||"API_ERROR",details:u?.details||null
}
,e);
v=p;
let h=!1;
if(g?.includes(e.status))console.debug(`Not retrying request to ${t} with status ${e.status} (nonRetryableStatusCodes)`),h=!1;
else if("function"==typeof r.shouldRetry)try {
h=r.shouldRetry(e, {
attemptsMade:b,url:a.toString(),method:x.method||"GET"
}
),console.debug(`Custom retry strategy for ${t} with status ${e.status}: ${h}`)
}
catch {
h=f?.includes(e.status)??!1,console.debug(`Custom retry strategy failed, falling back to status code check: ${h}`)
}
else h=f?.includes(e.status)??!1,console.debug(`Standard retry check for ${t} with status ${e.status}: ${h}`);
if(!h||b>=(n??0)) {
if(o?.onError?.(p,t),o?.throw)throw Error(p.error?.message||"Request failed");
return p
}
b++,await m(y??0),y=(y??0)*(d??2)
}
catch(a) {
if(a&&"Failed to parse response"===a.message)throw a;
let e=!(a instanceof Response),r=s(!1,null, {
message:a instanceof Error?a.message:String(a),status:0,code:"NETWORK_ERROR",cause:a
}
,null);
if(v=r,!(e&&h)||b>=(n??0)) {
if(o?.onError?.(r,t),o?.throw)throw a;
return r
}
b++,await m(y??0),y=(y??0)*(d??2)
}

}
let w=v||s(!1,null, {
message:`Request failed after ${n} retries`,status:0,code:"MAX_RETRIES_EXCEEDED"
}
,null);
if(o?.onError?.(w,t),o?.throw)throw Error(`Request failed after ${n} retries`);
return w
}
function g(e) {
return {
expiryDays:e?.defaultExpiryDays??365,crossSubdomain:e?.crossSubdomain??!1,domain:e?.defaultDomain??"",path:"/",secure:"u">typeof window&&"https:"===window.location.protocol,sameSite:"Lax"
}

}
function h() {
if("u"<typeof window)return"";
let e=window.location.hostname;
if("localhost"===e||/^\d+\.\d+\.\d+\.\d+$/.test(e))return e;
let t=e.split(".");
return t.length>=2?`.${t.slice(-2).join(".")}`:e
}
let b= {
consents:"c",consentInfo:"i",timestamp:"ts",time:"t",type:"y",id:"id",identified:"eid"
}
,y=Object.entries(b).reduce((e,[t,o])=>(e[o]=t,e), {

}
);
function v(e,t,o,r) {
if("u"<typeof document)return;
let n= {
...g(r),...o
}
;
n.crossSubdomain&&!o?.domain&&(n.domain=h());
try {
let o;
if("string"==typeof t)o=t;
else {
var a;
let e=function e(t,o="") {
let r= {

}
;
for(let[n,a]of Object.entries(t)) {
let t=o?`${o}.${n}`:n;
null==a?r[t]="":"boolean"==typeof a?a&&(r[t]="1"):"object"!=typeof a||Array.isArray(a)?r[t]=String(a):Object.assign(r,e(a,t))
}
return r
}
(t);
a=function(e) {
let t= {

}
;
for(let[o,r]of Object.entries(e))t[o.split(".").map(e=>b[e]||e).join(".")]=r;
return t
}
(e),o=Object.entries(a).map(([e,t])=>`${e}:${t}`).join(",")
}
let r=new Date;
r.setTime(r.getTime()+24*n.expiryDays*36e5);
let i=`expires=${r.toUTCString()}`,s=[`${e}=${o}`,i,`path=${n.path}`];
n.domain&&s.push(`domain=${n.domain}`),n.secure&&s.push("secure"),n.sameSite&&s.push(`SameSite=${n.sameSite}`),document.cookie=s.join("; ")
}
catch(t) {
console.warn(`Failed to set cookie "${e}":`,t)
}

}
function w(e,t,o) {
if("u"<typeof document)return;
let r= {
...g(o),...t
}
;
r.crossSubdomain&&!t?.domain&&(r.domain=h());
try {
let t=[`${e}=`,"expires=Thu, 01 Jan 1970 00:00:00 GMT",`path=${r.path}`];
r.domain&&t.push(`domain=${r.domain}`),document.cookie=t.join("; ")
}
catch(t) {
console.warn(`Failed to delete cookie "${e}":`,t)
}

}
let x= {
translations: {
en:n
}
,defaultLanguage:"en",disableAutoLanguageSwitch:!1
}
,k=[ {
defaultValue:!0,description:"These trackers are used for activities that are strictly necessary to operate or deliver the service you requested from us and, therefore, do not require you to consent.",disabled:!0,display:!0,gdprType:1,name:"necessary"
}
, {
defaultValue:!1,description:"These trackers enable basic interactions and functionalities that allow you to access selected features of our service and facilitate your communication with us.",display:!1,gdprType:2,name:"functionality"
}
, {
defaultValue:!1,description:"These trackers help us to measure traffic and analyze your behavior to improve our service.",display:!1,gdprType:4,name:"measurement"
}
, {
defaultValue:!1,description:"These trackers help us to improve the quality of your user experience and enable interactions with external content, networks, and platforms.",display:!1,gdprType:3,name:"experience"
}
, {
defaultValue:!1,description:"These trackers help us to deliver personalized ads or marketing content to you, and to measure their performance.",display:!1,gdprType:5,name:"marketing"
}
],C=k.map(e=>e.name),S="c15t",j="privacy-consent-storage",T= {
config: {
pkg:"c15t",version:"1.8.2",mode:"Unknown"
}
,consents:k.reduce((e,t)=>(e[t.name]=t.defaultValue,e), {

}
),selectedConsents:k.reduce((e,t)=>(e[t.name]=t.defaultValue,e), {

}
),consentInfo:null,branding:"c15t",showPopup:!0,isLoadingConsentInfo:!1,hasFetchedBanner:!1,lastBannerFetchData:null,gdprTypes:["necessary","marketing"],isPrivacyDialogOpen:!1,isConsentDomain:!1,complianceSettings: {
gdpr: {
enabled:!0,appliesGlobally:!0,applies:!0
}
,ccpa: {
enabled:!0,appliesGlobally:!1,applies:void 0
}
,lgpd: {
enabled:!1,appliesGlobally:!1,applies:void 0
}
,usStatePrivacy: {
enabled:!0,appliesGlobally:!1,applies:void 0
}

}
,callbacks: {

}
,detectedCountry:null,locationInfo:null,legalLinks: {

}
,jurisdictionInfo:null,translationConfig:x,includeNonDisplayedConsents:!1,consentTypes:k,iframeBlockerConfig: {
disableAutomaticBlocking:!1
}
,ignoreGeoLocation:!1,storageConfig:void 0,privacySettings: {
honorDoNotTrack:!0
}
,user:void 0,setConsent:()=> {

}
,setShowPopup:()=> {

}
,setIsPrivacyDialogOpen:()=> {

}
,saveConsents:()=> {

}
,resetConsents:()=> {

}
,setGdprTypes:()=> {

}
,setComplianceSetting:()=> {

}
,resetComplianceSettings:()=> {

}
,setCallback:()=> {

}
,setDetectedCountry:()=> {

}
,setLocationInfo:()=> {

}
,getDisplayedConsents:()=>[],hasConsented:()=>!1,setTranslationConfig:()=> {

}
,scripts:[],loadedScripts: {

}
,scriptIdMap: {

}

}
;
function E(e,t,o) {
let r=!1,n=!1,a=o?.storageKey||S;
try {
"u">typeof window&&window.localStorage&&(window.localStorage.setItem(a,JSON.stringify(e)),r=!0)
}
catch(e) {
console.warn("Failed to save consent to localStorage:",e)
}
try {
v(a,e,t,o),n=!0
}
catch(e) {
console.warn("Failed to save consent to cookie:",e)
}
if(!r&&!n)throw Error("Failed to save consent to any storage method")
}
function A(e) {
if(!e.consents)return e;
let t= {
...e.consents
}
;
for(let o of C)t[o]=e.consents[o]??!1;
return {
...e,consents:t
}

}
function N(e) {
!function(e) {
let t=e?.storageKey||S;
if(t!==j)try {
if("u">typeof window&&window.localStorage) {
if(window.localStorage.getItem(t))return void window.localStorage.removeItem(j);
let e=window.localStorage.getItem(j);
e&&(window.localStorage.setItem(t,e),window.localStorage.removeItem(j),console.log(`[c15t] Migrated consent data from "${j}" to "${t}"`))
}

}
catch(e) {
console.warn("[c15t] Failed to migrate legacy storage:",e)
}

}
(e);
let t=e?.storageKey||S,o=null,r=null;
try {
if("u">typeof window&&window.localStorage) {
let e=window.localStorage.getItem(t);
e&&(o=JSON.parse(e))
}

}
catch(e) {
console.warn("Failed to read consent from localStorage:",e)
}
try {
r=function(e) {
if("u"<typeof document)return null;
try {
let t=`${e}=`;
for(let e of document.cookie.split(";")) {
let o=e;
for(;
" "===o.charAt(0);
)o=o.substring(1);
if(0===o.indexOf(t)) {
let e=o.substring(t.length);
if(e.includes(":")) {
let t=function(e) {
if(!e)return {

}
;
let t= {

}
;
for(let o of e.split(",")) {
let e=o.indexOf(":");
if(-1===e)continue;
let r=o.substring(0,e),n=o.substring(e+1);
t[r]=n
}
return t
}
(e),o=function(e) {
let t= {

}
;
for(let[o,r]of Object.entries(e))t[o.split(".").map(e=>y[e]||e).join(".")]=r;
return t
}
(t);
return function(e) {
let t= {

}
;
for(let[o,r]of Object.entries(e)) {
let e=o.split(".");
if(0===e.length)continue;
let n=t;
for(let t=0;
t<e.length-1;
t++) {
let o=e[t];
void 0!==o&&(n[o]||(n[o]= {

}
),n=n[o])
}
let a=e[e.length-1];
void 0!==a&&("1"===r?n[a]=!0:"0"===r?n[a]=!1:""===r?n[a]=null:Number.isNaN(Number(r))||""===r?n[a]=r:n[a]=Number(r))
}
return t
}
(o)
}
return e
}

}
return null
}
catch(t) {
return console.warn(`Failed to get cookie "${e}":`,t),null
}

}
(t)
}
catch(e) {
console.warn("Failed to read consent from cookie:",e)
}
let n=null,a=null;
if(r?(n=r,a="cookie"):o&&(n=o,a="localStorage"),n&&a) {
let o=e?.crossSubdomain===!0||!!e?.defaultDomain;
if("localStorage"!==a||r) {
if("cookie"===a)try {
if("u">typeof window&&window.localStorage) {
let e=n;
"object"==typeof e&&null!==e&&"consents"in e&&(e=A(e));
let r=null;
try {
let e=window.localStorage.getItem(t);
if(e) {
let t=JSON.parse(e);
r="object"==typeof t&&null!==t&&"consents"in t?A(t):t
}

}
catch {
r=null
}
let a=JSON.stringify(e),i=JSON.stringify(r);
a!==i&&(window.localStorage.setItem(t,a),r?o?console.log("[c15t] Updated localStorage with consent from cookie (cross-subdomain mode)"):console.log("[c15t] Updated localStorage with consent from cookie"):console.log("[c15t] Synced consent from cookie to localStorage"))
}

}
catch(e) {
console.warn("[c15t] Failed to sync consent to localStorage:",e)
}

}
else try {
v(t,n,void 0,e),console.log("[c15t] Synced consent from localStorage to cookie")
}
catch(e) {
console.warn("[c15t] Failed to sync consent to cookie:",e)
}

}
return n&&"object"==typeof n&&"consents"in n?A(n):n
}
let _="/consent/set",M="/consent/identify";
async function R(e,t,o,r,n) {
try {
let a=await f(e,t, {
method:o,...r
}
);
if(a.ok)return a;
return console.warn(`API request failed, falling back to offline mode for ${t}`),n(r)
}
catch(e) {
return console.warn(`Error calling ${t}, falling back to offline mode:`,e),n(r)
}

}
function L(e) {
try {
if("u">typeof window) {
let t=N(e);
t?.consentInfo?E( {
consents:t.consents|| {

}
,consentInfo: {
...t.consentInfo,identified:!0,time:t.consentInfo.time??Date.now()
}

}
,void 0,e):t&&E( {
consents:t.consents|| {

}
,consentInfo: {
identified:!0,time:Date.now()
}

}
,void 0,e)
}

}
catch(e) {
console.warn("Failed to update consent storage after identification:",e)
}

}
async function I(e,t) {
let o="c15t-pending-identify-user-submissions";
try {
if("u">typeof window&&(L(e),t?.body&&window.localStorage)) {
let e=[];
try {
let t=window.localStorage.getItem(o);
if(t) {
let o=JSON.parse(t);
Array.isArray(o)&&(e=o)
}

}
catch(t) {
console.warn("Error parsing pending identify-user submissions:",t),e=[]
}
let r=t.body;
e.some(e=>JSON.stringify(e)===JSON.stringify(r))||(e.push(r),window.localStorage.setItem(o,JSON.stringify(e)),console.log("Queued identify-user submission for retry on next page load"))
}

}
catch(e) {
console.warn("Failed to write to localStorage in offline fallback:",e)
}
let r=s(!0, {
success:!0
}
,null,null);
return t?.onSuccess&&await t.onSuccess(r),r
}
async function P(e,t,o) {
let r=await R(e,M,"PATCH",o,async e=>I(t,e));
return r.ok&&r.data&&L(t),r
}
async function O(e,t) {
let o="c15t-pending-consent-submissions",r=[...t];
for(let t=0;
t<3&&r.length>0;
t++) {
let o=[];
for(let t=0;
t<r.length;
t++) {
let n=r[t];
try {
console.log("Retrying consent submission:",n),(await f(e,_, {
method:"POST",body:n
}
)).ok&&(console.log("Successfully resubmitted consent"),o.push(t))
}
catch(e) {
console.warn("Failed to resend consent submission:",e)
}

}
for(let e=o.length-1;
e>=0;
e--) {
let t=o[e];
void 0!==t&&r.splice(t,1)
}
if(0===r.length)break;
t<2&&await m(1e3*(t+1))
}
try {
"u">typeof window&&window.localStorage&&(r.length>0?(window.localStorage.setItem(o,JSON.stringify(r)),console.log(`${r.length} consent submissions still pending for future retry`)):(window.localStorage.removeItem(o),console.log("All pending consent submissions processed successfully")))
}
catch(e) {
console.warn("Error updating pending submissions storage:",e)
}

}
async function B(e,t) {
let o="c15t-pending-identify-user-submissions",r=[...t];
for(let t=0;
t<3&&r.length>0;
t++) {
let o=[];
for(let t=0;
t<r.length;
t++) {
let n=r[t];
try {
console.log("Retrying identify-user submission:",n),(await f(e,M, {
method:"PATCH",body:n
}
)).ok&&(console.log("Successfully resubmitted identify-user"),o.push(t))
}
catch(e) {
console.warn("Failed to resend identify-user submission:",e)
}

}
for(let e=o.length-1;
e>=0;
e--) {
let t=o[e];
void 0!==t&&r.splice(t,1)
}
if(0===r.length)break;
t<2&&await m(1e3*(t+1))
}
try {
"u">typeof window&&window.localStorage&&(r.length>0?(window.localStorage.setItem(o,JSON.stringify(r)),console.log(`${r.length} identify-user submissions still pending for future retry`)):(window.localStorage.removeItem(o),console.log("All pending identify-user submissions processed successfully")))
}
catch(e) {
console.warn("Error updating pending identify-user submissions storage:",e)
}

}
async function D(e,t) {
let o="c15t-pending-consent-submissions";
try {
if("u">typeof window&&(E( {
consents:t?.body?.preferences|| {

}
,consentInfo: {
time:Date.now(),identified:!!t?.body?.externalSubjectId
}

}
,void 0,e),t?.body&&window.localStorage)) {
let e=[];
try {
let t=window.localStorage.getItem(o);
t&&(e=JSON.parse(t))
}
catch(t) {
console.warn("Error parsing pending submissions:",t),e=[]
}
let r=t.body;
e.some(e=>JSON.stringify(e)===JSON.stringify(r))||(e.push(r),window.localStorage.setItem(o,JSON.stringify(e)),console.log("Queued consent submission for retry on next page load"))
}

}
catch(e) {
console.warn("Failed to write to localStorage in offline fallback:",e)
}
let r=s(!0,null,null,null);
return r.ok&&r.data&&E( {
consents:t?.body?.preferences|| {

}
,consentInfo: {
time:Date.now(),id:r.data.id,identified:!!t?.body?.externalSubjectId
}

}
,void 0,e),t?.onSuccess&&await t.onSuccess(r),r
}
async function V(e,t,o) {
let r=await R(e,_,"POST",o,async e=>D(t,e));
return r.ok&&r.data&&E( {
consents:o?.body?.preferences|| {

}
,consentInfo: {
time:Date.now(),id:r.data.id,identified:!!o?.body?.externalSubjectId
}

}
,void 0,t),r
}
async function z(e) {
let t=!0,o=!1;
try {
if("u">typeof window&&window.localStorage) {
window.localStorage.setItem("c15t-storage-test-key","test"),window.localStorage.removeItem("c15t-storage-test-key"),o=!0;
let e=window.localStorage.getItem("c15t-consent");
t=null===e
}

}
catch(e) {
console.warn("Failed to access localStorage in offline fallback:",e),t=!1
}
let r=s(!0, {
showConsentBanner:t&&o,jurisdiction: {
code:"NONE",message:"Unknown (offline mode)"
}
,location: {
countryCode:null,regionCode:null
}
,translations:n
}
,null,null);
return e?.onSuccess&&await e.onSuccess(r),r
}
async function F(e,t) {
try {
let o=await f(e,"/show-consent-banner", {
method:"GET",...t
}
);
if(o.ok)return o;
return console.warn("API request failed, falling back to offline mode for consent banner"),z(t)
}
catch(e) {
return console.warn("Error fetching consent banner info, falling back to offline mode:",e),z(t)
}

}
async function H(e,t) {
return await f(e,"/consent/verify", {
method:"POST",...t
}
)
}
class $ {
backendURL;
storageConfig;
headers;
customFetch;
corsMode;
retryConfig;
fetcherContext;
constructor(e) {
this.backendURL=e.backendURL.endsWith("/")?e.backendURL.slice(0,-1):e.backendURL,this.headers= {
"Content-Type":"application/json",...e.headers
}
,this.customFetch=e.customFetch,this.corsMode=e.corsMode||"cors",this.storageConfig=e.storageConfig,this.retryConfig= {
maxRetries:e.retryConfig?.maxRetries??3??3,initialDelayMs:e.retryConfig?.initialDelayMs??100??100,backoffFactor:e.retryConfig?.backoffFactor??2??2,retryableStatusCodes:e.retryConfig?.retryableStatusCodes??l,nonRetryableStatusCodes:e.retryConfig?.nonRetryableStatusCodes??c,shouldRetry:e.retryConfig?.shouldRetry??d,retryOnNetworkError:e.retryConfig?.retryOnNetworkError??!0
}
,this.fetcherContext= {
backendURL:this.backendURL,headers:this.headers,customFetch:this.customFetch,corsMode:this.corsMode,retryConfig:this.retryConfig
}
,this.checkPendingConsentSubmissions(),this.checkPendingIdentifyUserSubmissions()
}
async showConsentBanner(e) {
return F(this.fetcherContext,e)
}
async setConsent(e) {
return V(this.fetcherContext,this.storageConfig,e)
}
async verifyConsent(e) {
return H(this.fetcherContext,e)
}
async identifyUser(e) {
return P(this.fetcherContext,this.storageConfig,e)
}
async $fetch(e,t) {
return f(this.fetcherContext,e,t)
}
checkPendingConsentSubmissions() {
!function(e,t) {
let o="c15t-pending-consent-submissions";
if("u">typeof window&&window.localStorage)try {
window.localStorage.setItem("c15t-storage-test-key","test"),window.localStorage.removeItem("c15t-storage-test-key");
let e=window.localStorage.getItem(o);
if(!e)return;
let r=JSON.parse(e);
if(!r.length)return void window.localStorage.removeItem(o);
console.log(`Found ${r.length} pending consent submission(s) to retry`),setTimeout(()=> {
t(r)
}
,2e3)
}
catch(e) {
console.warn("Failed to check for pending consent submissions:",e)
}

}
(this.fetcherContext,e=>this.processPendingConsentSubmissions(e))
}
async processPendingConsentSubmissions(e) {
return O(this.fetcherContext,e)
}
checkPendingIdentifyUserSubmissions() {
!function(e,t) {
let o="c15t-pending-identify-user-submissions";
if("u">typeof window&&window.localStorage)try {
window.localStorage.setItem("c15t-storage-test-key","test"),window.localStorage.removeItem("c15t-storage-test-key");
let e=window.localStorage.getItem(o);
if(!e)return;
let r=JSON.parse(e);
if(!r.length)return void window.localStorage.removeItem(o);
console.log(`Found ${r.length} pending identify-user submission(s) to retry`),setTimeout(()=> {
t(r)
}
,2e3)
}
catch(e) {
console.warn("Failed to check for pending identify-user submissions:",e)
}

}
(this.fetcherContext,e=>this.processPendingIdentifyUserSubmissions(e))
}
async processPendingIdentifyUserSubmissions(e) {
return B(this.fetcherContext,e)
}

}
function U(e,t=500,o="HANDLER_ERROR",r) {
return function(e,t=500,o="ERROR",r) {
return s(!1,null, {
message:e,status:t,code:o,cause:r
}
,null)
}
(e,t,o,r)
}
async function K(e,t,o) {
let r=e[t];
if(!r) {
let e=U(`No endpoint handler found for '${String(t)}'`,404,"ENDPOINT_NOT_FOUND");
if(o?.throw)throw Error(`No endpoint handler found for '${String(t)}'`);
return e
}
try {
let e=await r(o);
return {
data:e.data,error:e.error,ok:e.ok??!e.error,response:e.response
}

}
catch(t) {
let e=U(t instanceof Error?t.message:String(t),0,"HANDLER_ERROR",t);
if(o?.throw)throw t;
return e
}

}
async function W(e,t,o,r) {
let n=o.replace(i,"").split("/")[0],a=t[o];
if(a)try {
return await a(r)
}
catch(e) {
return U(e instanceof Error?e.message:String(e),0,"HANDLER_ERROR",e)
}
return n&&n in e?await K(e,n,r):U(`No endpoint handler found for '${o}'`,404,"ENDPOINT_NOT_FOUND")
}
async function G(e,t) {
return await K(e,"identifyUser",t)
}
async function q(e,t) {
return await K(e,"setConsent",t)
}
async function J(e,t) {
return await K(e,"showConsentBanner",t)
}
async function Z(e,t) {
return await K(e,"verifyConsent",t)
}
class Y {
endpointHandlers;
dynamicHandlers= {

}
;
constructor(e) {
this.endpointHandlers=e.endpointHandlers
}
async showConsentBanner(e) {
return J(this.endpointHandlers,e)
}
async setConsent(e) {
return q(this.endpointHandlers,e)
}
async verifyConsent(e) {
return Z(this.endpointHandlers,e)
}
async identifyUser(e) {
return G(this.endpointHandlers,e)
}
registerHandler(e,t) {
this.dynamicHandlers[e]=t
}
async $fetch(e,t) {
return W(this.endpointHandlers,this.dynamicHandlers,e,t)
}

}
function X(e=null) {
return s(!0,e)
}
async function Q(e) {
let t=X();
return e?.onSuccess&&await e.onSuccess(t),t
}
async function ee(e) {
return await Q(e)
}
async function et(e,t) {
try {
"u">typeof window&&E( {
consentInfo: {
time:Date.now(),identified:!!t?.body?.externalSubjectId
}
,consents:t?.body?.preferences|| {

}

}
,void 0,e)
}
catch(e) {
console.warn("Failed to write to storage:",e)
}
return await Q(t)
}
async function eo(e) {
let t=e?.headers?.["x-c15t-country"]??"GB",o=e?.headers?.["x-c15t-region"]??null,r=e?.headers?.["accept-language"]??x.defaultLanguage??"en", {
showConsentBanner:n,jurisdictionCode:a,message:i
}
=function(e) {
let t= {
EU:new Set(["AT","BE","BG","HR","CY","CZ","DK","EE","FI","FR","DE","GR","HU","IE","IT","LV","LT","LU","MT","NL","PL","PT","RO","SK","SI","ES","SE"]),EEA:new Set(["IS","NO","LI"]),UK:new Set(["GB"]),CH:new Set(["CH"]),BR:new Set(["BR"]),CA:new Set(["CA"]),AU:new Set(["AU"]),JP:new Set(["JP"]),KR:new Set(["KR"])
}
,o=!0,r="NONE";
if(e) {
let n=e.toUpperCase();
for(let {
sets:e,code:a
}
of(o=!1,[ {
sets:[t.EU,t.EEA,t.UK],code:"GDPR"
}
, {
sets:[t.CH],code:"CH"
}
, {
sets:[t.BR],code:"BR"
}
, {
sets:[t.CA],code:"PIPEDA"
}
, {
sets:[t.AU],code:"AU"
}
, {
sets:[t.JP],code:"APPI"
}
, {
sets:[t.KR],code:"PIPA"
}
]))if(e.some(e=>e.has(n))) {
r=a,o=!0;
break
}

}
return {
showConsentBanner:o,jurisdictionCode:r,message:""
}

}
(t),s=X( {
showConsentBanner:n,jurisdiction: {
code:a,message:i
}
,branding:"c15t",location: {
countryCode:t,regionCode:o
}
,translations: {
language:r,translations:x.translations[r]
}

}
);
return e?.onSuccess&&await e.onSuccess(s),s
}
async function er(e) {
return await Q(e)
}
class en {
storageConfig;
constructor(e) {
this.storageConfig=e
}
async showConsentBanner(e) {
return eo(e)
}
async setConsent(e) {
return et(this.storageConfig,e)
}
async verifyConsent(e) {
return er(e)
}
async identifyUser(e) {
return ee(e)
}
async $fetch(e,t) {
return await Q(t)
}

}
let ea=new Map;
function ei(e,t) {
if(0===e.length)throw TypeError(`${t} condition cannot be empty`)
}
function es(e,t) {
if("string"==typeof e) {
var o,r;
if(!(e in t))throw Error(`Consent category "${e}" not found in consent state`);
return t[e]||!1
}
if("object"==typeof e&&null!==e) {
if("and"in e) {
let r;
return o=e.and,ei(r=Array.isArray(o)?o:[o],"AND"),r.every(e=>es(e,t))
}
if("or"in e) {
let o;
return r=e.or,ei(o=Array.isArray(r)?r:[r],"OR"),o.some(e=>es(e,t))
}
if("not"in e)return!es(e.not,t)
}
throw TypeError(`Invalid condition structure: ${JSON.stringify(e)}`)
}
function el(e) {
let t=new Set;
return!function e(o) {
"string"==typeof o?t.add(o):"object"==typeof o&&null!==o&&("and"in o?(Array.isArray(o.and)?o.and:[o.and]).forEach(e):"or"in o?(Array.isArray(o.or)?o.or:[o.or]).forEach(e):"not"in o&&e(o.not))
}
(e),Array.from(t)
}
function ec(e,t) {
let o=e.getAttribute("data-src"),r=function(e) {
let t=e.getAttribute("data-category");
if(t) {
if(!C.includes(t))throw Error(`Invalid category attribute "${t}" on iframe. Must be one of: ${C.join(", ")}`);
return t
}

}
(e);
r&&(es(r,t)?o&&!e.src&&(e.src=o,e.removeAttribute("data-src")):e.src&&e.removeAttribute("src"))
}
function ed() {
if("u"<typeof document)return[];
let e=document.querySelectorAll("iframe[data-category]"),t=new Set;
return e?(e.forEach(e=> {
let o=e.getAttribute("data-category");
if(!o)return;
let r=o.trim();
C.includes(r)&&t.add(r)
}
),Array.from(t)):[]
}
function eu(e) {
if("u"<typeof document)return;
let t=document.querySelectorAll("iframe");
t&&t.forEach(t=> {
ec(t,e)
}
)
}
function em() {
if("u">typeof crypto&&crypto.randomUUID)return crypto.randomUUID().replace(/-/g,"").substring(0,8);
if("u">typeof crypto&&crypto.getRandomValues) {
let e=new Uint8Array(4);
return crypto.getRandomValues(e),Array.from(e,e=>e.toString(36)).join("").padEnd(8,"0").substring(0,8)
}
return Math.random().toString(36).substring(2).padEnd(8,"0").substring(0,8)
}
function ep(e,t,o) {
return t?(o[e]||(o[e]=em()),o[e]):`c15t-script-${e}`
}
let ef=new Map;
function eg(e) {
return ef.has(e)
}
function eh(e) {
ef.delete(e)
}
function eb(e,t,o= {

}
) {
let r=[];
return e.forEach(e=> {
var n,a,i;
if(!e.alwaysLoad&&!es(e.category,t))return;
if(eg(e.id))return void e.onConsentChange?.( {
id:e.id,elementId:ep(e.id,!1!==e.anonymizeId,o),hasConsent:es(e.category,t),consents:t
}
);
if(e.src&&e.textContent)throw Error(`Script '${e.id}' cannot have both 'src' and 'textContent'. Choose one.`);
if(!e.src&&!e.textContent&&!e.callbackOnly)throw Error(`Script '${e.id}' must have either 'src', 'textContent', or 'callbackOnly' set to true.`);
if(!0===e.callbackOnly) {
let a=!1!==e.anonymizeId,i=ep(e.id,a,o),s= {
id:e.id,elementId:i,consents:t,hasConsent:es(e.category,t)
}
;
e.onBeforeLoad&&e.onBeforeLoad(s),e.onLoad&&e.onLoad(s),n=e.id,ef.set(n,null),r.push(e.id);
return
}
let s=!1!==e.anonymizeId,l=ep(e.id,s,o);
if(!0===e.persistAfterConsentRevoked) {
let o=document.getElementById(l);
if(o) {
let n= {
id:e.id,hasConsent:es(e.category,t),elementId:l,consents:t,element:o
}
;
e.onConsentChange?.(n),e.onLoad?.(n),a=e.id,ef.set(a,o),r.push(e.id);
return
}

}
let c=document.createElement("script");
c.id=l,e.src?c.src=e.src:e.textContent&&(c.textContent=e.textContent),e.fetchPriority&&(c.fetchPriority=e.fetchPriority),e.async&&(c.async=!0),e.defer&&(c.defer=!0),e.nonce&&(c.nonce=e.nonce),e.attributes&&Object.entries(e.attributes).forEach(([e,t])=> {
c.setAttribute(e,t)
}
);
let d= {
id:e.id,hasConsent:es(e.category,t),elementId:l,consents:t,element:c
}
;
e.onLoad&&(e.textContent?setTimeout(()=> {
e.onLoad?.( {
...d
}
)
}
,0):c.addEventListener("load",()=> {
e.onLoad?.( {
...d
}
)
}
)),e.onError&&(e.textContent||c.addEventListener("error",()=> {
e.onError?.( {
...d,error:Error(`Failed to load script: ${e.src}`)
}
)
}
)),e.onBeforeLoad&&e.onBeforeLoad(d);
let u=e.target??"head",m="body"===u?document.body:document.head;
if(!m)throw Error(`Document ${u} is not available for script injection`);
m.appendChild(c),i=e.id,ef.set(i,c),r.push(e.id)
}
),r
}
let ey= {
"www.google-analytics.com":"measurement","analytics.google.com":"measurement","www.googletagmanager.com":"measurement","stats.g.doubleclick.net":"measurement","ampcid.google.com":"measurement","analytics.twitter.com":"measurement","analytics.pinterest.com":"measurement","dc.services.visualstudio.com":"measurement","www.clarity.ms":"measurement","www.hotjar.com":"measurement","static.hotjar.com":"measurement","script.hotjar.com":"measurement","insights.hotjar.com":"measurement","mouseflow.com":"measurement","api.mouseflow.com":"measurement","tools.mouseflow.com":"measurement","cdn.heapanalytics.com":"measurement","plausible.io":"measurement","matomo.cloud":"measurement","matomo.org":"measurement","mixpanel.com":"measurement","api.mixpanel.com":"measurement","sentry.io":"measurement","browser.sentry-cdn.com":"measurement","js.monitor.azure.com":"measurement","stats.wp.com":"measurement","pixel.wp.com":"measurement","analytics.amplitude.com":"measurement","api2.amplitude.com":"measurement","cdn.amplitude.com":"measurement","api.segment.io":"measurement","cdn.segment.com":"measurement","api.segment.com":"measurement","pendo.io":"measurement","data.pendo.io":"measurement","cdn.pendo.io":"measurement","connect.facebook.net":"marketing","platform.twitter.com":"marketing","platform.linkedin.com":"marketing","www.googleadservices.com":"marketing","doubleclick.net":"marketing","googleads.g.doubleclick.net":"marketing","ad.doubleclick.net":"marketing","www.facebook.com":"marketing","ads.linkedin.com":"marketing","ads-api.tiktok.com":"marketing","analytics.tiktok.com":"marketing","business.tiktok.com":"marketing","ads.pinterest.com":"marketing","log.pinterest.com":"marketing","ads-twitter.com":"marketing","static.ads-twitter.com":"marketing","advertising.twitter.com":"marketing","ads.yahoo.com":"marketing","sp.analytics.yahoo.com":"marketing","gemini.yahoo.com":"marketing","adroll.com":"marketing","a.adroll.com":"marketing","d.adroll.com":"marketing","s.adroll.com":"marketing","adform.net":"marketing","track.adform.net":"marketing","dmp.adform.net":"marketing","criteo.com":"marketing","static.criteo.net":"marketing","bidder.criteo.com":"marketing","dynamic.criteo.com":"marketing","gum.criteo.com":"marketing","taboola.com":"marketing","cdn.taboola.com":"marketing","trc.taboola.com":"marketing","outbrain.com":"marketing","widgets.outbrain.com":"marketing","tr.outbrain.com":"marketing","amplify.outbrain.com":"marketing","bing.com":"marketing","bat.bing.com":"marketing","clarity.ms":"marketing","quantserve.com":"marketing","secure.quantserve.com":"marketing","pixel.quantserve.com":"marketing","exelator.com":"marketing","load.exelator.com":"marketing","api.exelator.com":"marketing","ad.360yield.com":"marketing","match.360yield.com":"marketing","ad.turn.com":"marketing","r.turn.com":"marketing","d.turn.com":"marketing","cdn.jsdelivr.net":"functionality","ajax.googleapis.com":"functionality","fonts.googleapis.com":"functionality","maps.googleapis.com":"functionality","www.recaptcha.net":"functionality","recaptcha.net":"functionality","www.gstatic.com":"functionality","fonts.gstatic.com":"functionality","cdnjs.cloudflare.com":"functionality","unpkg.com":"functionality","code.jquery.com":"functionality","maxcdn.bootstrapcdn.com":"functionality","cdn.datatables.net":"functionality","js.stripe.com":"functionality","api.stripe.com":"functionality","checkout.stripe.com":"functionality","js.braintreegateway.com":"functionality","api.braintreegateway.com":"functionality","cdn.shopify.com":"functionality","js.intercomcdn.com":"functionality","widget.intercom.io":"functionality","cdn.auth0.com":"functionality","js.pusher.com":"functionality","sockjs.pusher.com":"functionality","app.optimizely.com":"experience","cdn.optimizely.com":"experience","logx.optimizely.com":"experience","cdn.mouseflow.com":"experience","fullstory.com":"experience","rs.fullstory.com":"experience","edge.fullstory.com":"experience","vwo.com":"experience","dev.visualwebsiteoptimizer.com":"experience","assets.adobedtm.com":"experience","cdn.tt.omtrdc.net":"experience","demdex.net":"experience","sc.omtrdc.net":"experience","crazyegg.com":"experience","script.crazyegg.com":"experience","tracking.crazyegg.com":"experience","luckyorange.com":"experience","cdn.luckyorange.com":"experience","w1.luckyorange.com":"experience","upload.luckyorange.com":"experience","clicktale.net":"experience","cdn.clicktale.net":"experience","conductor.clicktale.net":"experience","userzoom.com":"experience","cdn.userzoom.com":"experience","api.userzoom.com":"experience","contentsquare.net":"experience","t.contentsquare.net":"experience","app.contentsquare.com":"experience"
}
,ev=/^www\./,ew=/:\d+$/;
function ex(e,t) {
return t&&"u">typeof window&&"1"===window.navigator.doNotTrack?Object.keys(e).reduce((t,o)=>(o in e&&(t[o]="necessary"===o),t), {

}
):e
}
function ek(e, {
set:t,get:o,initialTranslationConfig:r,trackingBlocker:a
}
,i) {
let {
consentInfo:s,ignoreGeoLocation:l,callbacks:c,setDetectedCountry:d
}
=o(), {
translations:u,location:m,showConsentBanner:p
}
=e,f=e.jurisdiction?.code==="NONE"&&!e.showConsentBanner,g= {
isLoadingConsentInfo:!1,branding:e.branding??"c15t",...null===s? {
showPopup:p&&i||l
}
: {

}
,...f&& {
consents: {
necessary:!0,functionality:!0,experience:!0,marketing:!0,measurement:!0
}

}
,locationInfo: {
countryCode:m?.countryCode??null,regionCode:m?.regionCode??null,jurisdiction:e.jurisdiction?.code??null,jurisdictionMessage:e.jurisdiction?.message??null
}
,jurisdictionInfo:e.jurisdiction
}
;
u?.language&&u?.translations;
 {
let e,t;
t=function(e,t,o=!1) {
if(o||"u"<typeof window)return t||"en";
let r=window.navigator.language?.split("-")[0]||"";
return r&&r in e?r:t||"en"
}
((e=function(e,t) {
let o= {
en:JSON.parse(JSON.stringify(n))
}
;
for(let r of[e.translations,t?.translations])if(r)for(let[e,t]of Object.entries(r)) {
if(!t)continue;
let r=o[e]||o.en;
o[e]=function(e,t) {
return["cookieBanner","consentManagerDialog","common","consentTypes","frame","legalLinks"].reduce((o,r)=> {
let n=e[r],a=t[r];
return(n||a)&&(o[r]= {
...n|| {

}
,...a|| {

}

}
),o
}
, {

}
)
}
(r,t)
}
return {
...e,...t,translations:o
}

}
( {
translations: {
[u.language]:u.translations
}
,disableAutoLanguageSwitch:!0,defaultLanguage:u.language
}
,r)).translations,e.defaultLanguage,e.disableAutoLanguageSwitch),g.translationConfig= {
...e,defaultLanguage:t
}

}
e.location?.countryCode&&d(e.location.countryCode),g.hasFetchedBanner=!0,g.lastBannerFetchData=e,t(g),f&&c?.onConsentSet?.( {
preferences: {
necessary:!0,functionality:!0,experience:!0,marketing:!0,measurement:!0
}

}
),c?.onBannerFetched?.( {
showConsentBanner:e.showConsentBanner,jurisdiction:e.jurisdiction,location:e.location,translations: {
language:u.language,translations:u.translations
}

}
),a?.updateConsents(o().consents),o().updateScripts()
}
async function eC(e) {
let {
get:t,set:o,manager:r,initialData:n
}
=e, {
callbacks:a
}
=t();
if("u"<typeof window)return;
let i=function(e) {
try {
if(window.localStorage)return window.localStorage.setItem("c15t-storage-test-key","test"),window.localStorage.removeItem("c15t-storage-test-key"),!0
}
catch(t) {
console.warn("localStorage not available, skipping consent banner:",t),e( {
isLoadingConsentInfo:!1,showPopup:!1
}
)
}
return!1
}
(o);
if(i) {
if(o( {
isLoadingConsentInfo:!0
}
),n&&!t().overrides) {
let t=await n;
if(t)return ek(t,e,!0),t
}
try {
let o=t().overrides?.language,n=t().overrides?.country,s=t().overrides?.region, {
data:l,error:c
}
=await r.showConsentBanner( {
headers: {
...o&& {
"accept-language":o
}
,...n&& {
"x-c15t-country":n
}
,...s&& {
"x-c15t-region":s
}

}
,onError:a.onError?e=> {
a.onError&&a.onError( {
error:e.error?.message||"Unknown error"
}
)
}
:void 0
}
);
if(c||!l)throw Error(`Failed to fetch consent banner info: ${c?.message}`);
return ek(l,e,i),l
}
catch(t) {
console.error("Error fetching consent banner information:",t),o( {
isLoadingConsentInfo:!1
}
);
let e=t instanceof Error?t.message:"Unknown error fetching consent banner information";
a.onError?.( {
error:e
}
),o( {
showPopup:!1
}
);
return
}

}

}
let eS= {
functionality_storage:"denied",security_storage:"denied",analytics_storage:"denied",ad_storage:"denied",ad_user_data:"denied",ad_personalization:"denied",personalization_storage:"denied"
}
,ej= {
necessary:["security_storage"],functionality:["functionality_storage"],measurement:["analytics_storage"],marketing:["ad_storage","ad_user_data","ad_personalization"],experience:["personalization_storage"]
}
;
function eT(e) {
let t= {
...eS
}
;
for(let o of Object.keys(e)) {
let r=e[o];
for(let e of ej[o])t[e]=r?"granted":"denied"
}
return t
}
async function eE( {
user:e,manager:t,get:o,set:r
}
) {
let {
hasConsented:n,consentInfo:a
}
=o(),i=n()&&!!a?.id,s=!!a?.identified;
r( {
user: {
id:e.id,identityProvider:e.identityProvider
}

}
),i&&!s&&(await t.identifyUser( {
body: {
consentId:a.id,externalId:e.id,identityProvider:e.identityProvider
}

}
),r( {
consentInfo: {
...a,identified:!0
}

}
))
}
async function eA( {
manager:e,type:t,get:o,set:r,trackingBlocker:n
}
) {
let {
callbacks:a,selectedConsents:i,consents:s,consentTypes:l,updateScripts:c,updateIframeConsents:d,gdprTypes:u
}
=o(),m=i??s?? {

}
;
if("all"===t)for(let e of l)u.includes(e.name)&&(m[e.name]=!0);
else if("necessary"===t)for(let e of l)m[e.name]="necessary"===e.name;
r( {
consents:m,selectedConsents:m,showPopup:!1,consentInfo: {
time:Date.now(),type:t,identified:!!o().user?.id
}

}
),await new Promise(e=>setTimeout(e,0)),n?.updateConsents(m),d(),window.gtag&&window.gtag("consent","update",eT(m)),c(),a.onConsentSet?.( {
preferences:m
}
);
let p=await e.setConsent( {
body: {
type:"cookie_banner",domain:window.location.hostname,preferences:m,externalSubjectId:o().user?.id,identityProvider:o().user?.identityProvider,metadata: {
source:"consent_widget",acceptanceMethod:t
}

}

}
);
if(!p.ok) {
let e=p.error?.message??"Failed to save consents";
a.onError?.( {
error:e
}
),a.onError||console.error(e)
}

}
let eN=e=> {
if("u"<typeof window)return null;
try {
return N(e)
}
catch(e) {
return console.error("Failed to retrieve stored consent:",e),null
}

}
;
e.s(["configureConsentManager",0,function(e) {
let t,o=function(e) {
var t;
let o=(t=e.storageConfig)?Object.keys(t).sort().map(e=> {
let o=t[e];
return null==o?`${e}:null`:`${e}:${String(o)}`
}
).join("|"):"",r=o?`:storage:${o}`:"";
if("offline"===e.mode)return`offline${r}`;
if("custom"===e.mode) {
let t=Object.keys(e.endpointHandlers|| {

}
).sort().join(",");
return`custom:${t}${r}`
}
let n="";
if("headers"in e&&e.headers) {
let t=Object.keys(e.headers).sort();
n=`:headers:${t.map(t=>`$ {
t
}
=$ {
e.headers?.[t]
}
`).join(",")}`
}
return`c15t:${e.backendURL||""}${n}${r}`
}
(e);
if(ea.has(o)) {
if("offline"!==e.mode&&"custom"!==e.mode&&"headers"in e&&e.headers) {
let t=ea.get(o);
t instanceof $&&(t.headers= {
"Content-Type":"application/json",...e.headers
}
)
}
let t=ea.get(o);
if(t)return new Proxy(t, {
get:(e,t)=>e[t]
}
)
}
switch(e.mode||"c15t") {
case"custom":t=new Y( {
endpointHandlers:e.endpointHandlers
}
);
break;
case"offline":t=new en(e.storageConfig);
break;
default:t=new $( {
backendURL:e.backendURL||"/api/c15t",headers:e.headers,customFetch:e.customFetch,retryConfig:e.retryConfig,storageConfig:e.storageConfig
}
)
}
return ea.set(o,t),t
}
,"createConsentManagerStore",0,(e,t= {

}
)=> {
let {
namespace:o="c15tStore",trackingBlockerConfig:r,isConsentDomain:n=!1,translationConfig:i,storageConfig:s,enabled:l=!0
}
=t,c=eN(s),d=t.scripts&&t.scripts.length>0,u="u"<typeof window||d?null:function(e= {

}
,t) {
let o= {
disableAutomaticBlocking:!1,...e,domainConsentMap:e.overrideDomainConsentMap?e.domainConsentMap: {
...ey,...e.domainConsentMap
}

}
,r=t|| {
experience:!1,functionality:!1,marketing:!1,measurement:!1,necessary:!0
}
,n=window.fetch,a=window.XMLHttpRequest;
function i(e) {
return e.toLowerCase().replace(ev,"").replace(ew,"").trim()
}
function s(e) {
try {
let t=new URL(e).hostname,n=function(e,t) {
let o=i(e),r=t[o];
if(r)return r;
for(let[e,r]of Object.entries(t)) {
let t=i(e);
if(o.endsWith(`.${t}`)||o===t)return r
}

}
(t,o.domainConsentMap|| {

}
);
if(!n)return!0;
return!0===r[n]
}
catch {
return!0
}

}
function l(e) {
document.dispatchEvent(new CustomEvent("ConsentBlockedRequest", {
detail: {
url:e
}

}
))
}
return o.disableAutomaticBlocking||(window.fetch===n&&(window.fetch=async(e,t)=> {
let o=e instanceof Request?e.url:e.toString();
return s(o)?await n.call(window,e,t):(l(o),Promise.reject(Error(`Request to ${o} blocked due to missing consent`)))
}
),window.XMLHttpRequest===a&&(window.XMLHttpRequest=class extends a {
open(e,t,o=!0,r,n) {
if(!s(t.toString()))throw l(t.toString()),Error(`Request to ${t} blocked due to missing consent`);
super.open(e,t,o,r,n)
}

}
)), {
updateConsents:e=> {
r= {
...r,...e
}

}
,destroy:()=> {
window.fetch!==n&&(window.fetch=n),window.XMLHttpRequest!==a&&(window.XMLHttpRequest=a)
}

}

}
(r|| {

}
,c?.consents||T.consents),m=(0,a.createStore)((o,r)=> {
let a,d,m;
return {
...T,gdprTypes:t.initialGdprTypes??T.gdprTypes,ignoreGeoLocation:t.ignoreGeoLocation??!1,config:t.config??T.config,iframeBlockerConfig:t.iframeBlockerConfig??T.iframeBlockerConfig,isConsentDomain:n,callbacks:t.callbacks??T.callbacks,scripts:t.scripts??T.scripts,legalLinks:t.legalLinks??T.legalLinks,translationConfig:i||T.translationConfig,storageConfig:s,user:t.user??T.user,...(()=> {
if(!l) {
let e=k.reduce((e,t)=>(e[t.name]=!0,e), {

}
);
return {
consents:e,selectedConsents:e,consentInfo: {
time:Date.now(),type:"all",identified:!!t.user?.id
}
,showPopup:!1,isLoadingConsentInfo:!1,hasFetchedBanner:!1,lastBannerFetchData:null
}

}
return c? {
consents:c.consents,selectedConsents:c.consents,consentInfo:c.consentInfo,showPopup:!1,isLoadingConsentInfo:!1
}
: {
showPopup:!1,isLoadingConsentInfo:!0
}

}
)(),setShowPopup:(e,t=!1)=> {
if(!e)return void o( {
showPopup:!1
}
);
let n=r(),a=eN();
!t&&(a||n.consentInfo||n.isLoadingConsentInfo)||o( {
showPopup:!0
}
)
}
,setIsPrivacyDialogOpen:e=> {
o( {
isPrivacyDialogOpen:e
}
),e||queueMicrotask(()=> {

}
)
}
,setSelectedConsent:(e,t)=> {
o(o=> {
let r=o.consentTypes.find(t=>t.name===e);
return r?.disabled?o: {
selectedConsents: {
...o.selectedConsents,[e]:t
}

}

}
)
}
,saveConsents:async t=>await eA( {
manager:e,type:t,get:r,set:o,trackingBlocker:u
}
),setConsent:(e,t)=> {
o(o=> {
let r=o.consentTypes.find(t=>t.name===e);
return r?.disabled?o: {
selectedConsents: {
...o.consents,[e]:t
}

}

}
),r().saveConsents("custom")
}
,resetConsents:()=> {
o(()=> {
let e=k.reduce((e,t)=>(e[t.name]=t.defaultValue,e), {

}
);
var t=void 0;
let o=s?.storageKey||S;
try {
"u">typeof window&&window.localStorage&&(window.localStorage.removeItem(o),o!==j&&window.localStorage.removeItem(j))
}
catch(e) {
console.warn("Failed to remove consent from localStorage:",e)
}
try {
w(o,t,s),o!==j&&w(j,t,s)
}
catch(e) {
console.warn("Failed to remove consent cookie:",e)
}
return {
consents:e,selectedConsents:e,consentInfo:null
}

}
)
}
,setGdprTypes:e=>o( {
gdprTypes:e
}
),setComplianceSetting:(e,t)=>o(o=>( {
complianceSettings: {
...o.complianceSettings,[e]: {
...o.complianceSettings[e],...t
}

}

}
)),resetComplianceSettings:()=>o( {
complianceSettings:T.complianceSettings
}
),setCallback:(e,t)=> {
let n=r();
if(o(o=>( {
callbacks: {
...o.callbacks,[e]:t
}

}
)),"onConsentSet"===e&&t&&"function"==typeof t&&t?.( {
preferences:n.consents
}
),"onBannerFetched"===e&&n.hasFetchedBanner&&n.lastBannerFetchData&&t&&"function"==typeof t) {
let {
lastBannerFetchData:e
}
=n;
t?.( {
showConsentBanner:e.showConsentBanner,jurisdiction:e.jurisdiction,location:e.location,translations: {
language:e.translations.language,translations:e.translations.translations
}

}
)
}

}
,setDetectedCountry:e=>o( {
detectedCountry:e
}
),setLocationInfo:e=>o( {
locationInfo:e
}
),fetchConsentBannerInfo:()=>l?eC( {
manager:e,initialData:t._initialData,initialTranslationConfig:t.initialTranslationConfig,get:r,set:o,trackingBlocker:u
}
):Promise.resolve(void 0),getDisplayedConsents:()=> {
let {
gdprTypes:e,consentTypes:t
}
=r();
return t.filter(t=>e.includes(t.name))
}
,hasConsented:()=> {
let {
consentInfo:e
}
=r();
return null!==e
}
,getEffectiveConsents:()=> {
let {
consents:e,privacySettings:t
}
=r();
return ex(e,t.honorDoNotTrack)
}
,hasConsentFor:e=> {
let {
consents:t,privacySettings:o
}
=r();
return ex(t,o.honorDoNotTrack)[e]||!1
}
,has:e=> {
let {
consents:t
}
=r();
return es(e,t)
}
,setTranslationConfig:e=> {
o( {
translationConfig:e
}
)
}
,updateConsentCategories:e=> {
o( {
gdprTypes:[...new Set([...r().gdprTypes,...e])]
}
)
}
,identifyUser:t=>eE( {
user:t,manager:e,get:r,set:o
}
),setOverrides:e=>o( {
overrides: {
...r().overrides,...e
}

}
),...(a=()=> {
let {
scripts:e,consents:t,scriptIdMap:n
}
=r(),a=function(e,t,o= {

}
) {
let r=function(e,t,o= {

}
) {
let r=[];
return e.forEach(e=> {
if(eg(e.id)&&!e.alwaysLoad) {
var n;
if(!es(e.category,t)) {
let a=(n=e.id,ef.get(n)),i=o[e.id]||`c15t-script-${e.id}`;
if(!0===e.callbackOnly||null===a) {
let o= {
id:e.id,elementId:i,consents:t,hasConsent:es(e.category,t)
}
;
e.onDelete&&e.onDelete(o),eh(e.id),r.push(e.id)
}
else if(a) {
let o= {
id:e.id,elementId:i,consents:t,hasConsent:es(e.category,t),element:a
}
;
e.onDelete&&e.onDelete(o),e.persistAfterConsentRevoked||a.remove(),eh(e.id),r.push(e.id)
}

}

}

}
),r
}
(e,t,o);
return {
loaded:eb(e,t,o),unloaded:r
}

}
(e,t,n),i= {
...r().loadedScripts
}
;
return a.loaded.forEach(e=> {
i[e]=!0
}
),a.unloaded.forEach(e=> {
i[e]=!1
}
),o( {
loadedScripts:i
}
),a
}
, {
updateScripts:()=>a(),setScripts:e=> {
u&&u.destroy();
let t=r(),n= {
...t.scriptIdMap
}
;
e.forEach(e=> {
!1!==e.anonymizeId&&(n[e.id]=em())
}
);
let i=e.flatMap(e=>el(e.category)),s=[...new Set([...t.gdprTypes,...i])];
o( {
scripts:[...t.scripts,...e],scriptIdMap:n,gdprTypes:s
}
),a()
}
,removeScript:e=> {
let t=r(),n=t.scripts.find(t=>t.id===e);
if(eg(e)) {
let o=ef.get(e);
if(o) {
let r=t.scriptIdMap[e]||`c15t-script-${e}`,a= {
id:e,elementId:r,consents:t.consents,element:o,hasConsent:es(n?.category??"necessary",t.consents)
}
;
n?.onDelete&&n.onDelete(a),o.remove(),eh(e)
}

}
let a= {
...t.scriptIdMap
}
;
delete a[e],o( {
scripts:t.scripts.filter(t=>t.id!==e),loadedScripts: {
...t.loadedScripts,[e]:!1
}
,scriptIdMap:a
}
)
}
,reloadScript:e=> {
let t=r();
return function(e,t,o,r= {

}
) {
let n=t.find(t=>t.id===e);
if(!n)return!1;
if(eg(e)) {
let t=ef.get(e),a=r[e]||`c15t-script-${e}`;
if(!0===n.callbackOnly||null===t) {
let t= {
id:e,elementId:a,consents:o,hasConsent:es(n.category,o)
}
;
n.onDelete&&n.onDelete(t),eh(e)
}
else if(t) {
let r= {
id:e,elementId:a,consents:o,hasConsent:es(n.category,o),element:t
}
;
n.onDelete&&n.onDelete(r),n.persistAfterConsentRevoked||t.remove(),eh(e)
}

}
return(!!n.alwaysLoad||!!es(n.category,o))&&(eb([n],o,r),!0)
}
(e,t.scripts,t.consents,t.scriptIdMap)
}
,isScriptLoaded:e=>eg(e),getLoadedScriptIds:()=>Array.from(ef.keys())
}
),...(d=null,m=!1, {
initializeIframeBlocker:()=> {
var e;
let t;
if(m||"u"<typeof document)return;
let o=r();
if(o.iframeBlockerConfig?.disableAutomaticBlocking)return;
let n=()=> {
let e=ed();
e.length>0&&r().updateConsentCategories(e)
}
;
"loading"===document.readyState?document.addEventListener("DOMContentLoaded",n):n(),setTimeout(n,100),eu(o.consents),e=e=>r().updateConsentCategories(e),(t=new MutationObserver(t=> {
let o=(()=>r().consents)(),n=!1;
if(t.forEach(e=> {
e.addedNodes.forEach(e=> {
if(e.nodeType===Node.ELEMENT_NODE) {
e.tagName&&"IFRAME"===e.tagName.toUpperCase()&&(ec(e,o),e.hasAttribute("data-category")&&(n=!0));
let t=e.querySelectorAll?.("iframe");
t&&t.length>0&&t.forEach(e=> {
ec(e,o),e.hasAttribute("data-category")&&(n=!0)
}
)
}

}
)
}
),n&&e) {
let t=ed();
t.length>0&&e(t)
}

}
)).observe(document.body, {
childList:!0,subtree:!0
}
),d=t,m=!0
}
,updateIframeConsents:()=> {
if(!m||"u"<typeof document)return;
let {
consents:e,iframeBlockerConfig:t
}
=r();
t?.disableAutomaticBlocking||eu(e)
}
,destroyIframeBlocker:()=> {
if(!m||"u"<typeof document)return;
let {
iframeBlockerConfig:e
}
=r();
e?.disableAutomaticBlocking||(d&&(d.disconnect(),d=null),m=!1)
}

}
)
}

}
);
if(m.getState().initializeIframeBlocker(),t.scripts&&t.scripts.length>0&&m.getState().updateConsentCategories(t.scripts.flatMap(e=>el(e.category))),"u">typeof window) {
if(window[o]=m,t.unstable_googleTagManager)try {
!function(e) {
let t=e.id;
if(!t||0===t.trim().length)throw Error("GTM container ID is required and must be a non-empty string");
if("u">typeof window&&"u">typeof document) {
let t=e.consentState?eT(e.consentState):eS,o=document.createElement("script");
if(o.textContent=`
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag('consent', 'default', {
      ...${JSON.stringify(t)},
    });
    window.dataLayer.push({
      'gtm.start': Date.now(),
      event: 'gtm.js',
    });
  `,!document.head)throw Error("Document head is not available for script injection");
document.head.appendChild(o);
let r=document.createElement("script");
if(r.async=!0,r.src=e.customScriptUrl?e.customScriptUrl:`https://www.googletagmanager.com/gtm.js?id=${e.id}`,!document.head)throw Error("Document head is not available for script injection");
document.head.appendChild(r)
}

}
( {
...t.unstable_googleTagManager,consentState:m.getState().consents
}
)
}
catch(e) {
console.error("Failed to setup Google Tag Manager:",e)
}
m.getState().callbacks.onConsentSet?.( {
preferences:m.getState().consents
}
),t.user&&m.getState().identifyUser(t.user),u?.updateConsents(m.getState().consents),m.getState().updateScripts(),l&&m.getState().fetchConsentBannerInfo()
}
return m
}
,"defaultTranslationConfig",0,x],37094)
}
,89207,e=> {
"use strict";
let t=(0,e.i(59163).createContext)(void 0);
e.s(["ConsentStateContext",0,t])
}
,81619,e=> {
"use strict";
var t=e.i(59163),o=e.i(89207);
e.s(["useConsentManager",0,function() {
let e=(0,t.useContext)(o.ConsentStateContext);
if(void 0===e)throw Error("useConsentManager must be used within a ConsentManagerProvider");
return {
...e.state,...e.manager? {
manager:e.manager
}
: {

}

}

}
])
}
,49027,76754,9081,14509,41730,54725,97207,94822,64433,29756,43711,e=> {
"use strict";
var t=e.i(59163);
e.s(["useScrollLock",0,function(e) {
(0,t.useEffect)(()=> {
if(e) {
let e= {
overflow:document.body.style.overflow,paddingRight:document.body.style.paddingRight
}
,t=window.innerWidth-document.documentElement.clientWidth;
return document.body.style.overflow="hidden",t>0&&(document.body.style.paddingRight=`${t}px`),()=> {
document.body.style.overflow=e.overflow,document.body.style.paddingRight=e.paddingRight
}

}

}
,[e])
}
],49027);
var o=e.i(23321);
let r=()=> {
let e=(0,t.useContext)(o.GlobalThemeContext),r=(0,t.useContext)(o.LocalThemeContext);
if(!e)throw Error("Theme components must be used within Theme.Root");
return function e(t,o) {
if(!o)return t;
let r= {
...t
}
;
for(let n in o)void 0!==o[n]&&(o[n]&&"object"==typeof o[n]&&!Array.isArray(o[n])&&t[n]&&"object"==typeof t[n]?r[n]=e(t[n],o[n]):r[n]=o[n]);
return r
}
(e,r||null)
}
;
e.s(["useTheme",0,r],76754);
var n=e.i(7284);
function a(e,t) {
let o=e=> {
if("string"==typeof e||void 0===e||"className"in e||"style"in e||"noStyle"in e)return e
}
,r=o(Array.isArray(e)?e[0]:e),a=o(t);
if("object"==typeof r&&r?.noStyle||"object"==typeof a&&a?.noStyle)return {
className:void 0,style:void 0
}
;
let i=function(...e) {
return(0,n.default)(...e)
}
(["string"==typeof r?r:r?.className,"string"==typeof a?a:a?.className,"object"==typeof r&&r?.baseClassName,"object"==typeof a&&a?.baseClassName]),s= {
..."object"==typeof r&&r?.style,..."object"==typeof a&&a?.style
}
;
return {
className:i||void 0,style:Object.keys(s).length>0?s:void 0
}

}
function i(e,o) {
let {
noStyle:n,theme:i
}
=r(),s=!!("object"==typeof i?.[e]&&i?.[e]?.noStyle),l=!!("object"==typeof o&&"noStyle"in o&&o.noStyle||s||n),c=(0,t.useMemo)(()=>e?i?.[e]:null,[e,i]),d=(0,t.useMemo)(()=>( {
className:"string"==typeof o?o:o?.className,style:void 0
}
),[o]),u=(0,t.useMemo)(()=>c?a(d,c):d,[d,c]),m=(0,t.useMemo)(()=>o?a(u,o):u,[u,o]);
return(0,t.useMemo)(()=> {
if(l)return c?"string"==typeof c? {
className:c
}
: {
className:c.className,style:c.style
}
: {

}
;
let e=Array.from(new Set(["object"==typeof o?o?.baseClassName:void 0,m.className,"string"==typeof o?o:o?.className].filter(Boolean).flat())).join(" ");
return {
...m,className:e
}

}
,[m,l,c,o])
}
e.s(["useStyles",0,i],9081);
let s=["ar","he","fa","ur","ps","sd","ku","dv"];
function l(e) {
return Array.from(e.querySelectorAll('a[href]:not([disabled]),button:not([disabled]),textarea:not([disabled]),input:not([disabled]),select:not([disabled]),[contenteditable],[tabindex]:not([tabindex="-1"])')).filter(e=>e.offsetWidth>0&&e.offsetHeight>0)
}
e.s(["useTextDirection",0,function(e) {
let o=(0,t.useMemo)(()=> {
let t=e?e.split("-")[0]?.toLowerCase():"en";
return s.includes(t||"")?"rtl":"ltr"
}
,[e]);
return(0,t.useEffect)(()=> {
"rtl"===o?document.body.classList.add("c15t-rtl"):document.body.classList.remove("c15t-rtl")
}
,[o]),o
}
],14509),e.s(["useFocusTrap",0,function(e,o) {
let r=(0,t.useRef)(null);
(0,t.useEffect)(()=> {
if(!e||!o||!o.current)return;
r.current=document.activeElement;
let t=l(o.current);
if(t.length>0)setTimeout(()=> {
t[0]?.focus()
}
,0);
else if(-1!==o.current.tabIndex)try {
o.current.focus()
}
catch {

}
let n=e=> {
if("Tab"!==e.key||!o.current)return;
let t=l(o.current);
if(0===t.length)return;
let r=t[0],n=t.at(-1);
e.shiftKey&&document.activeElement===r?(e.preventDefault(),n?.focus()):e.shiftKey||document.activeElement!==n||(e.preventDefault(),r?.focus())
}
;
return document.addEventListener("keydown",n),()=> {
document.removeEventListener("keydown",n),r.current&&"focus"in r.current&&setTimeout(()=>r.current?.focus(),0)
}

}
,[e,o])
}
],41730);
var c=e.i(56242);
function d(e,t) {
if("function"==typeof e)return e(t);
null!=e&&(e.current=t)
}
function u(...e) {
return t=> {
let o=!1,r=e.map(e=> {
let r=d(e,t);
return o||"function"!=typeof r||(o=!0),r
}
);
if(o)return()=> {
for(let t=0;
t<r.length;
t++) {
let o=r[t];
"function"==typeof o?o():d(e[t],null)
}

}

}

}
function m(e) {
var o;
let r,n=(o=e,(r=t.forwardRef((e,o)=> {
let {
children:r,...n
}
=e;
if(t.isValidElement(r)) {
var a;
let e,i,s=(a=r,(i=(e=Object.getOwnPropertyDescriptor(a.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?a.ref:(i=(e=Object.getOwnPropertyDescriptor(a,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?a.props.ref:a.props.ref||a.ref),l=function(e,t) {
let o= {
...t
}
;
for(let r in t) {
let n=e[r],a=t[r];
/^on[A-Z]/.test(r)?n&&a?o[r]=(...e)=> {
a(...e),n(...e)
}
:n&&(o[r]=n):"style"===r?o[r]= {
...n,...a
}
:"className"===r&&(o[r]=[n,a].filter(Boolean).join(" "))
}
return {
...e,...o
}

}
(n,r.props);
return r.type!==t.Fragment&&(l.ref=o?u(o,s):s),t.cloneElement(r,l)
}
return t.Children.count(r)>1?t.Children.only(null):null
}
)).displayName=`${o}.SlotClone`,r),a=t.forwardRef((e,o)=> {
let {
children:r,...a
}
=e,i=t.Children.toArray(r),s=i.find(g);
if(s) {
let e=s.props.children,r=i.map(o=>o!==s?o:t.Children.count(e)>1?t.Children.only(null):t.isValidElement(e)?e.props.children:null);
return(0,c.jsx)(n, {
...a,ref:o,children:t.isValidElement(e)?t.cloneElement(e,void 0,r):null
}
)
}
return(0,c.jsx)(n, {
...a,ref:o,children:r
}
)
}
);
return a.displayName=`${e}.Slot`,a
}
e.s(["composeRefs",0,u,"useComposedRefs",0,function(...e) {
return t.useCallback(u(...e),e)
}
],54725);
var p=m("Slot"),f=Symbol("radix.slottable");
function g(e) {
return t.isValidElement(e)&&"function"==typeof e.type&&"__radixId"in e.type&&e.type.__radixId===f
}
e.s(["Slot",0,p,"createSlot",0,m],97207);
let h=(0,t.forwardRef)(( {
asChild:e,className:t,style:o,themeKey:r,baseClassName:n,...a
}
,s)=> {
let l=i(r, {
baseClassName:n,className:t,style:o
}
);
return(0,c.jsx)(e?p:"div", {
ref:s,...a,...l
}
)
}
);
h.displayName="Box",e.s(["Box",0,h],94822);
var b=e.i(81619),y= {
"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/css-loader/index.js??ruleSet[1].rules[1].use[1]!builtin:lightningcss-loader??ruleSet[1].rules[1].use[2]!./src/components/shared/ui/button/button.module.css":function(e,t,o) {
o.d(t, {
A:()=>s
}
);
var r=o("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/css-loader/noSourceMaps.js"),n=o.n(r),a=o("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/css-loader/api.js"),i=o.n(a)()(n());
i.push([e.id,":root{--button-primary:#335cff;--button-primary-dark:#2547d0;--button-primary-hover:#476fff1a;--button-primary-hover-dark:#476cff1a;--button-neutral:#5c5c5c;--button-neutral-dark:#414958;--button-neutral-hover:#626d84;--button-neutral-hover-dark:#363d49;--button-neutral-soft:#ebebeb;--button-neutral-soft-dark:#414958;--button-focus-ring:#476cff;--button-focus-ring-dark:#2547d0;--button-text:#5c5c5c;--button-text-dark:#b3b3b3;--button-text-hover:#171717;--button-text-hover-dark:#e6e6e6;--button-background-color:#fff;--button-background-color-dark:#1a1a1a;--button-border:#5c5c5c;--button-border-dark:#414958;--button-hover-overlay:#2b303b0d;--button-hover-overlay-dark:#e2e4e91a;--button-font:inherit;--button-border-width:0px;--button-border-style:solid;--button-border-color:transparent;--button-border-radius:.375rem;--button-font-weight:500;--button-font-size:.875rem;--button-line-height:1.25rem;--button-transition:opacity .15s ease-in-out,transform .15s ease-in-out;--button-hover-transition-color:background-color .15s ease-in-out;--button-hover-transition-full:background-color .15s ease-in-out,box-shadow .15s ease-in-out,color .15s ease-in-out;--button-cursor:pointer;--button-shadow:0px 1px 2px 0px #0e121b0f;--button-shadow-dark:0px 1px 2px 0px #8080800f;--button-shadow-primary-focus:0 0 0 2px var(--button-focus-ring);--button-shadow-neutral-focus:0 0 0 2px var(--button-focus-ring);--button-shadow-primary-focus-dark:0 0 0 2px var(--button-focus-ring-dark);--button-shadow-neutral-focus-dark:0 0 0 2px var(--button-focus-ring-dark);--button-shadow-primary:var(--button-shadow),inset 0 0 0 1px var(--button-primary);--button-shadow-primary-dark:var(--button-shadow-dark),inset 0 0 0 1px var(--button-primary-dark);--button-shadow-primary-hover:none;--button-shadow-primary-hover-dark:none;--button-shadow-neutral:var(--button-shadow),inset 0 0 0 1px var(--button-neutral-soft);--button-shadow-neutral-dark:var(--button-shadow-dark),inset 0 0 0 1px var(--button-neutral-soft-dark);--button-shadow-neutral-hover:none;--button-shadow-neutral-hover-dark:none}.c15t-button-YKOgW{border-radius:var(--button-border-radius);font-weight:var(--button-font-weight);transition:var(--button-transition);cursor:var(--button-cursor);border:var(--button-border-width)var(--button-border-style)var(--button-border-color);font-size:var(--button-font-size);line-height:var(--button-line-height);color:var(--button-text);font-family:var(--button-font);justify-content:center;align-items:center;gap:.5rem;display:inline-flex}.c15t-button-YKOgW:focus-visible{box-shadow:var(--button-shadow-primary-focus);outline:none}.c15t-dark .c15t-button-YKOgW:focus-visible{box-shadow:var(--button-shadow-primary-focus-dark)}.c15t-dark .c15t-button-YKOgW{color:var(--button-text-dark)}.c15t-button-YKOgW:disabled{opacity:.5;cursor:not-allowed}.c15t-button-medium-1Mfpj{font-size:var(--button-font-size);line-height:var(--button-line-height);padding:.625rem 1rem}.c15t-button-small-n5LJg{font-size:var(--button-font-size);line-height:var(--button-line-height);padding:.5rem .75rem}.c15t-button-xsmall-ygCjx{font-size:var(--button-font-size);line-height:var(--button-line-height);padding:.375rem .625rem}.c15t-button-xxsmall-r7ZLO{font-size:var(--button-font-size);line-height:var(--button-line-height);padding:.25rem .5rem}.c15t-button-primary-filled-YzeKk{background-color:var(--button-primary);color:var(--button-background-color)}.c15t-button-primary-filled-YzeKk:focus-visible{box-shadow:var(--button-shadow-primary-focus)}.c15t-dark .c15t-button-primary-filled-YzeKk{background-color:var(--button-primary-dark);color:var(--button-background-color-dark)}.c15t-button-primary-filled-YzeKk:hover:not(:disabled){background-color:var(--button-primary-hover);transition:var(--button-hover-transition-color)}.c15t-dark .c15t-button-primary-filled-YzeKk:hover:not(:disabled){background-color:var(--button-primary-hover-dark);transition:var(--button-hover-transition-color)}.c15t-button-primary-stroke-TWzjH{background-color:var(--button-background-color);color:var(--button-primary);box-shadow:var(--button-shadow-primary)}.c15t-dark .c15t-button-primary-stroke-TWzjH{background-color:var(--button-background-color-dark);color:var(--button-primary-dark);box-shadow:var(--button-shadow-primary-dark)}.c15t-button-primary-stroke-TWzjH:hover:not(:disabled){background-color:var(--button-primary-hover);box-shadow:var(--button-shadow-primary-hover);transition:var(--button-hover-transition-full)}.c15t-dark .c15t-button-primary-stroke-TWzjH:hover:not(:disabled){background-color:var(--button-primary-hover-dark);box-shadow:var(--button-shadow-primary-hover-dark);transition:var(--button-hover-transition-full)}.c15t-button-primary-lighter-kAHLT{background-color:color-mix(in srgb,var(--button-primary)10%,transparent);color:var(--button-primary)}.c15t-dark .c15t-button-primary-lighter-kAHLT{background-color:color-mix(in srgb,var(--button-primary-dark)10%,transparent);color:var(--button-primary-dark)}.c15t-button-primary-lighter-kAHLT:hover:not(:disabled){background-color:color-mix(in srgb,var(--button-primary)20%,transparent);transition:var(--button-hover-transition-color)}.c15t-dark .c15t-button-primary-lighter-kAHLT:hover:not(:disabled){background-color:color-mix(in srgb,var(--button-primary-dark)20%,transparent);transition:var(--button-hover-transition-color)}.c15t-button-primary-ghost-j0CcU{color:var(--button-primary)}.c15t-dark .c15t-button-primary-ghost-j0CcU{color:var(--button-primary-dark)}.c15t-button-primary-ghost-j0CcU:hover:not(:disabled){background-color:var(--button-hover-overlay);transition:var(--button-hover-transition-color)}.c15t-dark .c15t-button-primary-ghost-j0CcU:hover:not(:disabled){background-color:var(--button-hover-overlay-dark);transition:var(--button-hover-transition-color)}.c15t-button-neutral-filled-uvvkN{background-color:var(--button-neutral);color:var(--button-background-color)}.c15t-button-neutral-filled-uvvkN:focus-visible{box-shadow:var(--button-shadow-neutral-focus)}.c15t-dark .c15t-button-neutral-filled-uvvkN{background-color:var(--button-neutral-dark);color:var(--button-background-color-dark)}.c15t-button-neutral-filled-uvvkN:hover:not(:disabled){background-color:var(--button-neutral-hover);transition:var(--button-hover-transition-color)}.c15t-dark .c15t-button-neutral-filled-uvvkN:hover:not(:disabled){background-color:var(--button-neutral-hover-dark);transition:var(--button-hover-transition-color)}.c15t-button-neutral-stroke-EAzCC{background-color:var(--button-background-color);box-shadow:var(--button-shadow-neutral)}.c15t-dark .c15t-button-neutral-stroke-EAzCC{background-color:var(--button-background-color-dark);box-shadow:var(--button-shadow-neutral-dark)}.c15t-button-neutral-stroke-EAzCC:hover:not(:disabled){box-shadow:var(--button-shadow-neutral-hover);color:var(--button-text-hover);transition:var(--button-hover-transition-full);background-color:#0000}.c15t-dark .c15t-button-neutral-stroke-EAzCC:hover:not(:disabled){box-shadow:var(--button-shadow-neutral-hover-dark);color:var(--button-text-hover-dark);transition:var(--button-hover-transition-full)}.c15t-button-neutral-lighter-ANBJI{background-color:color-mix(in srgb,var(--button-neutral)10%,transparent);color:var(--button-neutral)}.c15t-dark .c15t-button-neutral-lighter-ANBJI{background-color:color-mix(in srgb,var(--button-neutral-dark)10%,transparent);color:var(--button-neutral-dark)}.c15t-button-neutral-lighter-ANBJI:hover:not(:disabled){background-color:color-mix(in srgb,var(--button-neutral)20%,transparent);transition:var(--button-hover-transition-color)}.c15t-dark .c15t-button-neutral-lighter-ANBJI:hover:not(:disabled){background-color:color-mix(in srgb,var(--button-neutral-dark)20%,transparent);transition:var(--button-hover-transition-color)}.c15t-button-neutral-ghost-x4zTl{color:var(--button-neutral)}.c15t-dark .c15t-button-neutral-ghost-x4zTl{color:var(--button-neutral-dark)}.c15t-button-neutral-ghost-x4zTl:hover:not(:disabled){background-color:var(--button-hover-overlay);transition:var(--button-hover-transition-color)}.c15t-dark .c15t-button-neutral-ghost-x4zTl:hover:not(:disabled){background-color:var(--button-hover-overlay-dark);transition:var(--button-hover-transition-color)}.c15t-button-icon-ps6Fy{justify-content:center;align-items:center;display:inline-flex}",""]),i.locals= {
button:"c15t-button-YKOgW","button-medium":"c15t-button-medium-1Mfpj",buttonMedium:"c15t-button-medium-1Mfpj","button-small":"c15t-button-small-n5LJg",buttonSmall:"c15t-button-small-n5LJg","button-xsmall":"c15t-button-xsmall-ygCjx",buttonXsmall:"c15t-button-xsmall-ygCjx","button-xxsmall":"c15t-button-xxsmall-r7ZLO",buttonXxsmall:"c15t-button-xxsmall-r7ZLO","button-primary-filled":"c15t-button-primary-filled-YzeKk",buttonPrimaryFilled:"c15t-button-primary-filled-YzeKk","button-primary-stroke":"c15t-button-primary-stroke-TWzjH",buttonPrimaryStroke:"c15t-button-primary-stroke-TWzjH","button-primary-lighter":"c15t-button-primary-lighter-kAHLT",buttonPrimaryLighter:"c15t-button-primary-lighter-kAHLT","button-primary-ghost":"c15t-button-primary-ghost-j0CcU",buttonPrimaryGhost:"c15t-button-primary-ghost-j0CcU","button-neutral-filled":"c15t-button-neutral-filled-uvvkN",buttonNeutralFilled:"c15t-button-neutral-filled-uvvkN","button-neutral-stroke":"c15t-button-neutral-stroke-EAzCC",buttonNeutralStroke:"c15t-button-neutral-stroke-EAzCC","button-neutral-lighter":"c15t-button-neutral-lighter-ANBJI",buttonNeutralLighter:"c15t-button-neutral-lighter-ANBJI","button-neutral-ghost":"c15t-button-neutral-ghost-x4zTl",buttonNeutralGhost:"c15t-button-neutral-ghost-x4zTl","button-icon":"c15t-button-icon-ps6Fy",buttonIcon:"c15t-button-icon-ps6Fy"
}
;
let s=i
}
,"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/css-loader/api.js":function(e) {
e.exports=function(e) {
var t=[];
return t.toString=function() {
return this.map(function(t) {
var o="",r=void 0!==t[5];
return t[4]&&(o+="@supports (".concat(t[4],") {")),t[2]&&(o+="@media ".concat(t[2]," {")),r&&(o+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),o+=e(t),r&&(o+="}"),t[2]&&(o+="}"),t[4]&&(o+="}"),o
}
).join("")
}
,t.i=function(e,o,r,n,a) {
"string"==typeof e&&(e=[[null,e,void 0]]);
var i= {

}
;
if(r)for(var s=0;
s<this.length;
s++) {
var l=this[s][0];
null!=l&&(i[l]=!0)
}
for(var c=0;
c<e.length;
c++) {
var d=[].concat(e[c]);
r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),o&&(d[2]&&(d[1]="@media ".concat(d[2]," {").concat(d[1],"}")),d[2]=o),n&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=n):d[4]="".concat(n)),t.push(d))
}

}
,t
}

}
,"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/css-loader/noSourceMaps.js":function(e) {
e.exports=function(e) {
return e[1]
}

}
,"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/injectStylesIntoStyleTag.js":function(e) {
var t=[];
function o(e) {
for(var o=-1,r=0;
r<t.length;
r++)if(t[r].identifier===e) {
o=r;
break
}
return o
}
function r(e,r) {
for(var n= {

}
,a=[],i=0;
i<e.length;
i++) {
var s=e[i],l=r.base?s[0]+r.base:s[0],c=n[l]||0,d="".concat(l," ").concat(c);
n[l]=c+1;
var u=o(d),m= {
css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]
}
;
if(-1!==u)t[u].references++,t[u].updater(m);
else {
var p=function(e,t) {
var o=t.domAPI(t);
return o.update(e),function(t) {
t?(t.css!==e.css||t.media!==e.media||t.sourceMap!==e.sourceMap||t.supports!==e.supports||t.layer!==e.layer)&&o.update(e=t):o.remove()
}

}
(m,r);
r.byIndex=i,t.splice(i,0, {
identifier:d,updater:p,references:1
}
)
}
a.push(d)
}
return a
}
e.exports=function(e,n) {
var a=r(e=e||[],n=n|| {

}
);
return function(e) {
e=e||[];
for(var i=0;
i<a.length;
i++) {
var s=o(a[i]);
t[s].references--
}
for(var l=r(e,n),c=0;
c<a.length;
c++) {
var d=o(a[c]);
0===t[d].references&&(t[d].updater(),t.splice(d,1))
}
a=l
}

}

}
,"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/insertBySelector.js":function(e) {
var t= {

}
;
e.exports=function(e,o) {
var r=function(e) {
if(void 0===t[e]) {
var o=document.querySelector(e);
if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try {
o=o.contentDocument.head
}
catch(e) {
o=null
}
t[e]=o
}
return t[e]
}
(e);
if(!r)throw Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
r.appendChild(o)
}

}
,"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/insertStyleElement.js":function(e) {
e.exports=function(e) {
var t=document.createElement("style");
return e.setAttributes(t,e.attributes),e.insert(t,e.options),t
}

}
,"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/setAttributesWithoutAttributes.js":function(e,t,o) {
e.exports=function(e) {
var t=o.nc;
t&&e.setAttribute("nonce",t)
}

}
,"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/styleDomAPI.js":function(e) {
e.exports=function(e) {
if("u"<typeof document)return {
update:function() {

}
,remove:function() {

}

}
;
var t=e.insertStyleElement(e);
return {
update:function(o) {
var r,n,a;
r="",o.supports&&(r+="@supports (".concat(o.supports,") {")),o.media&&(r+="@media ".concat(o.media," {")),(n=void 0!==o.layer)&&(r+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),r+=o.css,n&&(r+="}"),o.media&&(r+="}"),o.supports&&(r+="}"),(a=o.sourceMap)&&"u">typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,t,e.options)
}
,remove:function() {
null===t.parentNode||t.parentNode.removeChild(t)
}

}

}

}
,"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/styleTagTransform.js":function(e) {
e.exports=function(e,t) {
if(t.styleSheet)t.styleSheet.cssText=e;
else {
for(;
t.firstChild;
)t.removeChild(t.firstChild);
t.appendChild(document.createTextNode(e))
}

}

}

}
,v= {

}
;
function w(e) {
var t=v[e];
if(void 0!==t)return t.exports;
var o=v[e]= {
id:e,exports: {

}

}
;
return y[e](o,o.exports,w),o.exports
}
w.n=e=> {
var t=e&&e.__esModule?()=>e.default:()=>e;
return w.d(t, {
a:t
}
),t
}
,w.d=(e,t)=> {
for(var o in t)w.o(t,o)&&!w.o(e,o)&&Object.defineProperty(e,o, {
enumerable:!0,get:t[o]
}
)
}
,w.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),w.nc=void 0;
var x=w("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/injectStylesIntoStyleTag.js"),k=w.n(x),C=w("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/styleDomAPI.js"),S=w.n(C),j=w("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/insertBySelector.js"),T=w.n(j),E=w("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/setAttributesWithoutAttributes.js"),A=w.n(E),N=w("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/insertStyleElement.js"),_=w.n(N),M=w("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/styleTagTransform.js"),R=w.n(M),L=w("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/css-loader/index.js??ruleSet[1].rules[1].use[1]!builtin:lightningcss-loader??ruleSet[1].rules[1].use[2]!./src/components/shared/ui/button/button.module.css"),I= {

}
;
I.styleTagTransform=R(),I.setAttributes=A(),I.insert=T().bind(null,"head"),I.domAPI=S(),I.insertStyleElement=_(),k()(L.A,I);
let P=L.A&&L.A.locals?L.A.locals:void 0,O=( {
variant:e="primary",mode:t="filled",size:o="medium"
}
= {

}
)=> {
let r=[P.button,P[`button-${o}`]];
r.push(P[( {
"primary-filled":"button-primary-filled","primary-stroke":"button-primary-stroke","primary-lighter":"button-primary-lighter","primary-ghost":"button-primary-ghost","neutral-filled":"button-neutral-filled","neutral-stroke":"button-neutral-stroke","neutral-lighter":"button-neutral-lighter","neutral-ghost":"button-neutral-ghost"
}
)[`${e}-${t}`]]);
let n=[P["button-icon"]];
return {
root:e=>[...r,e?.class].filter(Boolean).join(" "),icon:e=>[...n,e?.class].filter(Boolean).join(" ")
}

}
;
(0,t.forwardRef)(( {
children:e,variant:o,mode:r,size:n,asChild:a,className:i,noStyle:s,...l
}
,d)=> {
let u=(0,t.useId)(),m=a?p:"button",f=[s?"":O( {
variant:o,mode:r,size:n
}
).root(),i].filter(Boolean).join(" "),g=function e(o,r,n,a,i) {
let s=t.Children.map(o,o=> {
if(!(0,t.isValidElement)(o))return o;
let i=o.type?.displayName||"",s=n.includes(i)?r: {

}
,l=o.props;
return(0,t.cloneElement)(o, {
...s,key:`${a}-${o.key||i}`
}
,e(l?.children,r,n,a,l?.asChild))
}
);
return i?s?.[0]:s
}
(e, {
...o&& {
variant:o
}
,...r&& {
mode:r
}
,...n&& {
size:n
}

}
,["ButtonIcon"],u,a);
return(0,c.jsx)(m, {
ref:d,className:f,...l,children:g
}
)
}
).displayName="ButtonRoot";
let B=(0,t.forwardRef)(( {
asChild:e,className:o,style:n,noStyle:a,action:s,themeKey:l,baseClassName:d,variant:u="neutral",mode:m="stroke",size:f="small",onClick:g,closeCookieBanner:h=!1,closeCustomizeDialog:y=!1,category:v,...w
}
,x)=> {
let {
saveConsents:k,setShowPopup:C,setIsPrivacyDialogOpen:S,setConsent:j
}
=(0,b.useConsentManager)(), {
noStyle:T
}
=r(),E=i(l??"button", {
baseClassName:[!(T||a)&&O( {
variant:u,mode:m,size:f
}
).root()],style: {
...n
}
,className:o,noStyle:T||a
}
);
if(!v&&"set-consent"===s)throw Error("Category is required for set-consent action");
let A=(0,t.useCallback)(e=> {
if(h&&C(!1),y&&S(!1),"open-consent-dialog"===s&&(S(!0),C(!1,!0)),g&&g(e),"open-consent-dialog"!==s)switch(s) {
case"accept-consent":k("all");
break;
case"reject-consent":k("necessary");
break;
case"custom-consent":k("custom");
break;
case"set-consent":if(!v)throw Error("Category is required for set-consent action");
j(v,!0)
}

}
,[h,y,g,k,S,C,s]);
return(0,c.jsx)(e?p:"button", {
ref:x,...E,onClick:A,...w
}
)
}
);
B.displayName="ConsentButton",e.s(["ConsentButton",0,B],64433);
var D=e.i(37094);
function V() {
let {
translationConfig:e
}
=(0,b.useConsentManager)();
return(0,t.useMemo)(()=> {
let {
translations:t= {

}
,defaultLanguage:o="en"
}
=e,r=t[o];
if(z(r))return r;
let n=t.en;
return z(n)?n:D.defaultTranslationConfig.translations.en
}
,[e])
}
function z(e) {
return!!e&&"object"==typeof e&&"cookieBanner"in e&&"consentManagerDialog"in e&&"consentTypes"in e&&"common"in e
}
e.s(["useTranslations",0,V],29756);
var F= {
"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/css-loader/index.js??ruleSet[1].rules[1].use[1]!builtin:lightningcss-loader??ruleSet[1].rules[1].use[2]!./src/components/shared/primitives/legal-links/legal-links.module.css":function(e,t,o) {
o.d(t, {
A:()=>s
}
);
var r=o("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/css-loader/noSourceMaps.js"),n=o.n(r),a=o("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/css-loader/api.js"),i=o.n(a)()(n());
i.push([e.id,":root{--legal-links-gap:.75rem;--legal-links-font-size:.875rem;--legal-links-transition:text-decoration .2s ease;--legal-links-text-decoration:none;--legal-links-text-decoration-hover:underline;--legal-links-outline:2px solid currentColor;--legal-links-outline-offset:2px;--legal-links-color:#476cff;--legal-links-focus-color:#476cff;--legal-links-focus-color-dark:#2547d0}.c15t-legalLinks-b9O5c{gap:var(--legal-links-gap);flex-wrap:wrap;align-items:center;display:flex}.c15t-legalLink-S90r8{color:var(--legal-links-color);text-decoration:var(--legal-links-text-decoration);font-size:var(--legal-links-font-size);transition:var(--legal-links-transition)}.c15t-dark .c15t-legalLink-S90r8{color:var(--legal-links-focus-color-dark)}.c15t-legalLink-S90r8:hover{text-decoration:var(--legal-links-text-decoration-hover)}.c15t-legalLink-S90r8:focus{outline:none;text-decoration:underline}",""]),i.locals= {
legalLinks:"c15t-legalLinks-b9O5c",legalLink:"c15t-legalLink-S90r8"
}
;
let s=i
}
,"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/css-loader/api.js":function(e) {
e.exports=function(e) {
var t=[];
return t.toString=function() {
return this.map(function(t) {
var o="",r=void 0!==t[5];
return t[4]&&(o+="@supports (".concat(t[4],") {")),t[2]&&(o+="@media ".concat(t[2]," {")),r&&(o+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),o+=e(t),r&&(o+="}"),t[2]&&(o+="}"),t[4]&&(o+="}"),o
}
).join("")
}
,t.i=function(e,o,r,n,a) {
"string"==typeof e&&(e=[[null,e,void 0]]);
var i= {

}
;
if(r)for(var s=0;
s<this.length;
s++) {
var l=this[s][0];
null!=l&&(i[l]=!0)
}
for(var c=0;
c<e.length;
c++) {
var d=[].concat(e[c]);
r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),o&&(d[2]&&(d[1]="@media ".concat(d[2]," {").concat(d[1],"}")),d[2]=o),n&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=n):d[4]="".concat(n)),t.push(d))
}

}
,t
}

}
,"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/css-loader/noSourceMaps.js":function(e) {
e.exports=function(e) {
return e[1]
}

}
,"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/injectStylesIntoStyleTag.js":function(e) {
var t=[];
function o(e) {
for(var o=-1,r=0;
r<t.length;
r++)if(t[r].identifier===e) {
o=r;
break
}
return o
}
function r(e,r) {
for(var n= {

}
,a=[],i=0;
i<e.length;
i++) {
var s=e[i],l=r.base?s[0]+r.base:s[0],c=n[l]||0,d="".concat(l," ").concat(c);
n[l]=c+1;
var u=o(d),m= {
css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]
}
;
if(-1!==u)t[u].references++,t[u].updater(m);
else {
var p=function(e,t) {
var o=t.domAPI(t);
return o.update(e),function(t) {
t?(t.css!==e.css||t.media!==e.media||t.sourceMap!==e.sourceMap||t.supports!==e.supports||t.layer!==e.layer)&&o.update(e=t):o.remove()
}

}
(m,r);
r.byIndex=i,t.splice(i,0, {
identifier:d,updater:p,references:1
}
)
}
a.push(d)
}
return a
}
e.exports=function(e,n) {
var a=r(e=e||[],n=n|| {

}
);
return function(e) {
e=e||[];
for(var i=0;
i<a.length;
i++) {
var s=o(a[i]);
t[s].references--
}
for(var l=r(e,n),c=0;
c<a.length;
c++) {
var d=o(a[c]);
0===t[d].references&&(t[d].updater(),t.splice(d,1))
}
a=l
}

}

}
,"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/insertBySelector.js":function(e) {
var t= {

}
;
e.exports=function(e,o) {
var r=function(e) {
if(void 0===t[e]) {
var o=document.querySelector(e);
if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try {
o=o.contentDocument.head
}
catch(e) {
o=null
}
t[e]=o
}
return t[e]
}
(e);
if(!r)throw Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
r.appendChild(o)
}

}
,"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/insertStyleElement.js":function(e) {
e.exports=function(e) {
var t=document.createElement("style");
return e.setAttributes(t,e.attributes),e.insert(t,e.options),t
}

}
,"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/setAttributesWithoutAttributes.js":function(e,t,o) {
e.exports=function(e) {
var t=o.nc;
t&&e.setAttribute("nonce",t)
}

}
,"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/styleDomAPI.js":function(e) {
e.exports=function(e) {
if("u"<typeof document)return {
update:function() {

}
,remove:function() {

}

}
;
var t=e.insertStyleElement(e);
return {
update:function(o) {
var r,n,a;
r="",o.supports&&(r+="@supports (".concat(o.supports,") {")),o.media&&(r+="@media ".concat(o.media," {")),(n=void 0!==o.layer)&&(r+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),r+=o.css,n&&(r+="}"),o.media&&(r+="}"),o.supports&&(r+="}"),(a=o.sourceMap)&&"u">typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,t,e.options)
}
,remove:function() {
null===t.parentNode||t.parentNode.removeChild(t)
}

}

}

}
,"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/styleTagTransform.js":function(e) {
e.exports=function(e,t) {
if(t.styleSheet)t.styleSheet.cssText=e;
else {
for(;
t.firstChild;
)t.removeChild(t.firstChild);
t.appendChild(document.createTextNode(e))
}

}

}

}
,H= {

}
;
function $(e) {
var t=H[e];
if(void 0!==t)return t.exports;
var o=H[e]= {
id:e,exports: {

}

}
;
return F[e](o,o.exports,$),o.exports
}
$.n=e=> {
var t=e&&e.__esModule?()=>e.default:()=>e;
return $.d(t, {
a:t
}
),t
}
,$.d=(e,t)=> {
for(var o in t)$.o(t,o)&&!$.o(e,o)&&Object.defineProperty(e,o, {
enumerable:!0,get:t[o]
}
)
}
,$.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),$.nc=void 0;
var U=$("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/injectStylesIntoStyleTag.js"),K=$.n(U),W=$("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/styleDomAPI.js"),G=$.n(W),q=$("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/insertBySelector.js"),J=$.n(q),Z=$("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/setAttributesWithoutAttributes.js"),Y=$.n(Z),X=$("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/insertStyleElement.js"),Q=$.n(X),ee=$("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/styleTagTransform.js"),et=$.n(ee),eo=$("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/css-loader/index.js??ruleSet[1].rules[1].use[1]!builtin:lightningcss-loader??ruleSet[1].rules[1].use[2]!./src/components/shared/primitives/legal-links/legal-links.module.css"),er= {

}
;
er.styleTagTransform=et(),er.setAttributes=Y(),er.insert=J().bind(null,"head"),er.domAPI=G(),er.insertStyleElement=Q(),K()(eo.A,er);
let en=eo.A&&eo.A.locals?eo.A.locals:void 0;
function ea(e) {
let {
legalLinks:t
}
=(0,b.useConsentManager)();
return null==e?null:Object.fromEntries(Object.entries(t?? {

}
).filter(([t])=>e.includes(t)))
}
(0,t.forwardRef)(( {
links:e,themeKey:t,...o
}
,r)=> {
let n=ea(e), {
legalLinks:a
}
=V(),s=i(`${t}.link`, {
baseClassName:en.legalLink
}
);
return n&&0!==Object.keys(n).length?(0,c.jsx)(h, {
ref:r,themeKey:t,baseClassName:en.legalLinks,...o,children:Object.entries(n).map(([e,t])=>t?(0,c.jsx)("a", {
href:t.href,target:t.target||"_blank",rel:t.rel||("_blank"===t.target?"noopener noreferrer":void 0),...s,children:t.label??a?.[e]
}
,String(e)):null)
}
):null
}
).displayName="LegalLinks",e.s(["InlineLegalLinks",0,function( {
links:e,themeKey:t,testIdPrefix:o
}
) {
let r=ea(e), {
legalLinks:n
}
=V(),a=i(`${t}.link`, {
baseClassName:en.legalLink
}
);
return r&&0!==Object.keys(r).length?(0,c.jsxs)("span", {
children:[" ",Object.entries(r).map(([e,t],r,i)=>t?(0,c.jsxs)("span", {
children:[(0,c.jsxs)("a", {
href:t.href,target:t.target||"_blank",rel:t.rel||("_blank"===t.target?"noopener noreferrer":void 0),...a,"data-testid":o?`${o}-${e}`:void 0,children:[t.label??n?.[e],r<i.length-1&&","]
}
),r<i.length-1&&" "]
}
,String(e)):null)]
}
):null
}
],43711)
}
,30408,e=> {
"use strict";
var t=e.i(56242),o=e.i(59163),r=e.i(76754),n=e.i(29756),a=e.i(94822);
function i(e,r=[]) {
let n=[],a=()=> {
let t=n.map(e=>o.createContext(e));
return function(r) {
let n=r?.[e]||t;
return o.useMemo(()=>( {
[`__scope${e}`]: {
...r,[e]:n
}

}
),[r,n])
}

}
;
return a.scopeName=e,[function(r,a) {
let i=o.createContext(a),s=n.length;
n=[...n,a];
let l=r=> {
let {
scope:n,children:a,...l
}
=r,c=n?.[e]?.[s]||i,d=o.useMemo(()=>l,Object.values(l));
return(0,t.jsx)(c.Provider, {
value:d,children:a
}
)
}
;
return l.displayName=r+"Provider",[l,function(t,n) {
let l=n?.[e]?.[s]||i,c=o.useContext(l);
if(c)return c;
if(void 0!==a)return a;
throw Error(`\`${t}\` must be used within \`${r}\``)
}
]
}
,function(...e) {
let t=e[0];
if(1===e.length)return t;
let r=()=> {
let r=e.map(e=>( {
useScope:e(),scopeName:e.scopeName
}
));
return function(e) {
let n=r.reduce((t, {
useScope:o,scopeName:r
}
)=> {
let n=o(e)[`__scope${r}`];
return {
...t,...n
}

}
, {

}
);
return o.useMemo(()=>( {
[`__scope${t.scopeName}`]:n
}
),[n])
}

}
;
return r.scopeName=t.scopeName,r
}
(a,...r)]
}
var s=e.i(54725),l=e.i(97207);
function c(e,t, {
checkForDefaultPrevented:o=!0
}
= {

}
) {
return function(r) {
if(e?.(r),!1===o||!r.defaultPrevented)return t?.(r)
}

}
function d(e) {
let t=o.useRef(e);
return o.useEffect(()=> {
t.current=e
}
),o.useMemo(()=>(...e)=>t.current?.(...e),[])
}
function u( {
prop:e,defaultProp:t,onChange:r=()=> {

}

}
) {
let[n,a]=function( {
defaultProp:e,onChange:t
}
) {
let r=o.useState(e),[n]=r,a=o.useRef(n),i=d(t);
return o.useEffect(()=> {
a.current!==n&&(i(n),a.current=n)
}
,[n,a,i]),r
}
( {
defaultProp:t,onChange:r
}
),i=void 0!==e,s=i?e:n,l=d(r);
return[s,o.useCallback(t=> {
if(i) {
let o="function"==typeof t?t(e):t;
o!==e&&l(o)
}
else a(t)
}
,[i,e,a,l])]
}
var m=e.i(70813),p=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,r)=> {
let n=(0,l.createSlot)(`Primitive.${r}`),a=o.forwardRef((e,o)=> {
let {
asChild:a,...i
}
=e;
return"u">typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,t.jsx)(a?n:r, {
...i,ref:o
}
)
}
);
return a.displayName=`Primitive.${r}`, {
...e,[r]:a
}

}
, {

}
),f=globalThis?.document?o.useLayoutEffect:()=> {

}
,g=e=> {
var t;
let r,n, {
present:a,children:i
}
=e,l=function(e) {
var t,r;
let[n,a]=o.useState(),i=o.useRef( {

}
),s=o.useRef(e),l=o.useRef("none"),[c,d]=(t=e?"mounted":"unmounted",r= {
mounted: {
UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"
}
,unmountSuspended: {
MOUNT:"mounted",ANIMATION_END:"unmounted"
}
,unmounted: {
MOUNT:"mounted"
}

}
,o.useReducer((e,t)=>r[e][t]??e,t));
return o.useEffect(()=> {
let e=h(i.current);
l.current="mounted"===c?e:"none"
}
,[c]),f(()=> {
let t=i.current,o=s.current;
if(o!==e) {
let r=l.current,n=h(t);
e?d("MOUNT"):"none"===n||t?.display==="none"?d("UNMOUNT"):o&&r!==n?d("ANIMATION_OUT"):d("UNMOUNT"),s.current=e
}

}
,[e,d]),f(()=> {
if(n) {
let e,t=n.ownerDocument.defaultView??window,o=o=> {
let r=h(i.current).includes(o.animationName);
if(o.target===n&&r&&(d("ANIMATION_END"),!s.current)) {
let o=n.style.animationFillMode;
n.style.animationFillMode="forwards",e=t.setTimeout(()=> {
"forwards"===n.style.animationFillMode&&(n.style.animationFillMode=o)
}
)
}

}
,r=e=> {
e.target===n&&(l.current=h(i.current))
}
;
return n.addEventListener("animationstart",r),n.addEventListener("animationcancel",o),n.addEventListener("animationend",o),()=> {
t.clearTimeout(e),n.removeEventListener("animationstart",r),n.removeEventListener("animationcancel",o),n.removeEventListener("animationend",o)
}

}
d("ANIMATION_END")
}
,[n,d]), {
isPresent:["mounted","unmountSuspended"].includes(c),ref:o.useCallback(e=> {
e&&(i.current=getComputedStyle(e)),a(e)
}
,[])
}

}
(a),c="function"==typeof i?i( {
present:l.isPresent
}
):o.Children.only(i),d=(0,s.useComposedRefs)(l.ref,(t=c,(n=(r=Object.getOwnPropertyDescriptor(t.props,"ref")?.get)&&"isReactWarning"in r&&r.isReactWarning)?t.ref:(n=(r=Object.getOwnPropertyDescriptor(t,"ref")?.get)&&"isReactWarning"in r&&r.isReactWarning)?t.props.ref:t.props.ref||t.ref));
return"function"==typeof i||l.isPresent?o.cloneElement(c, {
ref:d
}
):null
}
;
function h(e) {
return e?.animationName||"none"
}
g.displayName="Presence";
var b=o[" useId ".trim().toString()]||(()=>void 0),y=0;
function v(e) {
let[t,r]=o.useState(b());
return f(()=> {
e||r(e=>e??String(y++))
}
,[e]),e||(t?`radix-${t}`:"")
}
var w="Collapsible",[x,k]=i(w),[C,S]=x(w),j=o.forwardRef((e,r)=> {
let {
__scopeCollapsible:n,open:a,defaultOpen:i,disabled:s,onOpenChange:l,...c
}
=e,[d=!1,m]=u( {
prop:a,defaultProp:i,onChange:l
}
);
return(0,t.jsx)(C, {
scope:n,disabled:s,contentId:v(),open:d,onOpenToggle:o.useCallback(()=>m(e=>!e),[m]),children:(0,t.jsx)(p.div, {
"data-state":M(d),"data-disabled":s?"":void 0,...c,ref:r
}
)
}
)
}
);
j.displayName=w;
var T="CollapsibleTrigger",E=o.forwardRef((e,o)=> {
let {
__scopeCollapsible:r,...n
}
=e,a=S(T,r);
return(0,t.jsx)(p.button, {
type:"button","aria-controls":a.contentId,"aria-expanded":a.open||!1,"data-state":M(a.open),"data-disabled":a.disabled?"":void 0,disabled:a.disabled,...n,ref:o,onClick:c(e.onClick,a.onOpenToggle)
}
)
}
);
E.displayName=T;
var A="CollapsibleContent",N=o.forwardRef((e,o)=> {
let {
forceMount:r,...n
}
=e,a=S(A,e.__scopeCollapsible);
return(0,t.jsx)(g, {
present:r||a.open,children:( {
present:e
}
)=>(0,t.jsx)(_, {
...n,ref:o,present:e
}
)
}
)
}
);
N.displayName=A;
var _=o.forwardRef((e,r)=> {
let {
__scopeCollapsible:n,present:a,children:i,...l
}
=e,c=S(A,n),[d,u]=o.useState(a),m=o.useRef(null),g=(0,s.useComposedRefs)(r,m),h=o.useRef(0),b=h.current,y=o.useRef(0),v=y.current,w=c.open||d,x=o.useRef(w),k=o.useRef(void 0);
return o.useEffect(()=> {
let e=requestAnimationFrame(()=>x.current=!1);
return()=>cancelAnimationFrame(e)
}
,[]),f(()=> {
let e=m.current;
if(e) {
k.current=k.current|| {
transitionDuration:e.style.transitionDuration,animationName:e.style.animationName
}
,e.style.transitionDuration="0s",e.style.animationName="none";
let t=e.getBoundingClientRect();
h.current=t.height,y.current=t.width,x.current||(e.style.transitionDuration=k.current.transitionDuration,e.style.animationName=k.current.animationName),u(a)
}

}
,[c.open,a]),(0,t.jsx)(p.div, {
"data-state":M(c.open),"data-disabled":c.disabled?"":void 0,id:c.contentId,hidden:!w,...l,ref:g,style: {
"--radix-collapsible-content-height":b?`${b}px`:void 0,"--radix-collapsible-content-width":v?`${v}px`:void 0,...e.style
}
,children:w&&i
}
)
}
);
function M(e) {
return e?"open":"closed"
}
var R=o.createContext(void 0),L="Accordion",I=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[P,O,B]=function(e) {
let r=e+"CollectionProvider",[n,a]=i(r),[c,d]=n(r, {
collectionRef: {
current:null
}
,itemMap:new Map
}
),u=e=> {
let {
scope:r,children:n
}
=e,a=o.default.useRef(null),i=o.default.useRef(new Map).current;
return(0,t.jsx)(c, {
scope:r,itemMap:i,collectionRef:a,children:n
}
)
}
;
u.displayName=r;
let m=e+"CollectionSlot",p=(0,l.createSlot)(m),f=o.default.forwardRef((e,o)=> {
let {
scope:r,children:n
}
=e,a=d(m,r),i=(0,s.useComposedRefs)(o,a.collectionRef);
return(0,t.jsx)(p, {
ref:i,children:n
}
)
}
);
f.displayName=m;
let g=e+"CollectionItemSlot",h="data-radix-collection-item",b=(0,l.createSlot)(g),y=o.default.forwardRef((e,r)=> {
let {
scope:n,children:a,...i
}
=e,l=o.default.useRef(null),c=(0,s.useComposedRefs)(r,l),u=d(g,n);
return o.default.useEffect(()=>(u.itemMap.set(l, {
ref:l,...i
}
),()=>void u.itemMap.delete(l))),(0,t.jsx)(b, {
... {
[h]:""
}
,ref:c,children:a
}
)
}
);
return y.displayName=g,[ {
Provider:u,Slot:f,ItemSlot:y
}
,function(t) {
let r=d(e+"CollectionConsumer",t);
return o.default.useCallback(()=> {
let e=r.collectionRef.current;
if(!e)return[];
let t=Array.from(e.querySelectorAll(`[${h}]`));
return Array.from(r.itemMap.values()).sort((e,o)=>t.indexOf(e.ref.current)-t.indexOf(o.ref.current))
}
,[r.collectionRef,r.itemMap])
}
,a]
}
(L),[D,V]=i(L,[B,k]),z=k(),F=o.default.forwardRef((e,o)=> {
let {
type:r,...n
}
=e;
return(0,t.jsx)(P.Provider, {
scope:e.__scopeAccordion,children:"multiple"===r?(0,t.jsx)(G, {
...n,ref:o
}
):(0,t.jsx)(W, {
...n,ref:o
}
)
}
)
}
);
F.displayName=L;
var[H,$]=D(L),[U,K]=D(L, {
collapsible:!1
}
),W=o.default.forwardRef((e,r)=> {
let {
value:n,defaultValue:a,onValueChange:i=()=> {

}
,collapsible:s=!1,...l
}
=e,[c,d]=u( {
prop:n,defaultProp:a,onChange:i
}
);
return(0,t.jsx)(H, {
scope:e.__scopeAccordion,value:c?[c]:[],onItemOpen:d,onItemClose:o.default.useCallback(()=>s&&d(""),[s,d]),children:(0,t.jsx)(U, {
scope:e.__scopeAccordion,collapsible:s,children:(0,t.jsx)(Z, {
...l,ref:r
}
)
}
)
}
)
}
),G=o.default.forwardRef((e,r)=> {
let {
value:n,defaultValue:a,onValueChange:i=()=> {

}
,...s
}
=e,[l=[],c]=u( {
prop:n,defaultProp:a,onChange:i
}
),d=o.default.useCallback(e=>c((t=[])=>[...t,e]),[c]),m=o.default.useCallback(e=>c((t=[])=>t.filter(t=>t!==e)),[c]);
return(0,t.jsx)(H, {
scope:e.__scopeAccordion,value:l,onItemOpen:d,onItemClose:m,children:(0,t.jsx)(U, {
scope:e.__scopeAccordion,collapsible:!0,children:(0,t.jsx)(Z, {
...s,ref:r
}
)
}
)
}
)
}
),[q,J]=D(L),Z=o.default.forwardRef((e,r)=> {
let n, {
__scopeAccordion:a,disabled:i,dir:l,orientation:d="vertical",...u
}
=e,m=o.default.useRef(null),f=(0,s.useComposedRefs)(m,r),g=O(a),h="ltr"===(n=o.useContext(R),l||n||"ltr"),b=c(e.onKeyDown,e=> {
if(!I.includes(e.key))return;
let t=e.target,o=g().filter(e=>!e.ref.current?.disabled),r=o.findIndex(e=>e.ref.current===t),n=o.length;
if(-1===r)return;
e.preventDefault();
let a=r,i=n-1,s=()=> {
(a=r+1)>i&&(a=0)
}
,l=()=> {
(a=r-1)<0&&(a=i)
}
;
switch(e.key) {
case"Home":a=0;
break;
case"End":a=i;
break;
case"ArrowRight":"horizontal"===d&&(h?s():l());
break;
case"ArrowDown":"vertical"===d&&s();
break;
case"ArrowLeft":"horizontal"===d&&(h?l():s());
break;
case"ArrowUp":"vertical"===d&&l()
}
let c=a%n;
o[c].ref.current?.focus()
}
);
return(0,t.jsx)(q, {
scope:a,disabled:i,direction:l,orientation:d,children:(0,t.jsx)(P.Slot, {
scope:a,children:(0,t.jsx)(p.div, {
...u,"data-orientation":d,ref:f,onKeyDown:i?void 0:b
}
)
}
)
}
)
}
),Y="AccordionItem",[X,Q]=D(Y),ee=o.default.forwardRef((e,o)=> {
let {
__scopeAccordion:r,value:n,...a
}
=e,i=J(Y,r),s=$(Y,r),l=z(r),c=v(),d=n&&s.value.includes(n)||!1,u=i.disabled||e.disabled;
return(0,t.jsx)(X, {
scope:r,open:d,disabled:u,triggerId:c,children:(0,t.jsx)(j, {
"data-orientation":i.orientation,"data-state":ei(d),...l,...a,ref:o,disabled:u,open:d,onOpenChange:e=> {
e?s.onItemOpen(n):s.onItemClose(n)
}

}
)
}
)
}
);
ee.displayName=Y;
var et="AccordionHeader";
o.default.forwardRef((e,o)=> {
let {
__scopeAccordion:r,...n
}
=e,a=J(L,r),i=Q(et,r);
return(0,t.jsx)(p.h3, {
"data-orientation":a.orientation,"data-state":ei(i.open),"data-disabled":i.disabled?"":void 0,...n,ref:o
}
)
}
).displayName=et;
var eo="AccordionTrigger",er=o.default.forwardRef((e,o)=> {
let {
__scopeAccordion:r,...n
}
=e,a=J(L,r),i=Q(eo,r),s=K(eo,r),l=z(r);
return(0,t.jsx)(P.ItemSlot, {
scope:r,children:(0,t.jsx)(E, {
"aria-disabled":i.open&&!s.collapsible||void 0,"data-orientation":a.orientation,id:i.triggerId,...l,...n,ref:o
}
)
}
)
}
);
er.displayName=eo;
var en="AccordionContent",ea=o.default.forwardRef((e,o)=> {
let {
__scopeAccordion:r,...n
}
=e,a=J(L,r),i=Q(en,r),s=z(r);
return(0,t.jsx)(N, {
role:"region","aria-labelledby":i.triggerId,"data-orientation":a.orientation,...s,...n,ref:o,style: {
"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style
}

}
)
}
);
function ei(e) {
return e?"open":"closed"
}
ea.displayName=en;
let es=( {
title:e,iconPath:r
}
)=>(0,o.forwardRef)((o,n)=>(0,t.jsxs)("svg", {
xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,ref:n,...o,children:[(0,t.jsx)("title", {
children:e
}
),r]
}
));
var el=e.i(9081),ec= {
"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/css-loader/index.js??ruleSet[1].rules[1].use[1]!builtin:lightningcss-loader??ruleSet[1].rules[1].use[2]!./src/components/shared/ui/accordion/accordion.module.css":function(e,t,o) {
o.d(t, {
A:()=>s
}
);
var r=o("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/css-loader/noSourceMaps.js"),n=o.n(r),a=o("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/css-loader/api.js"),i=o.n(a)()(n());
i.push([e.id,":root{--accordion-padding:.875rem;--accordion-radius:.625rem;--accordion-duration:.2s;--accordion-ease:cubic-bezier(.4,0,.2,1);--accordion-icon-size:1.25rem;--accordion-background-color:#fff;--accordion-background-color-dark:#171717;--accordion-background-hover:#f7f7f7;--accordion-background-hover-dark:#1c1c1c;--accordion-border-color:#ebebeb;--accordion-border-color-dark:#333;--accordion-text-color:#171717;--accordion-text-color-dark:#e6e6e6;--accordion-icon-color:#5c5c5c;--accordion-icon-color-dark:#999;--accordion-arrow-color:#a3a3a3;--accordion-arrow-color-dark:#ccc;--accordion-content-color:#5c5c5c;--accordion-content-color-dark:#999;--accordion-focus-ring:#476cff;--accordion-focus-ring-dark:#2547d0;--accordion-focus-shadow:0 0 0 2px var(--accordion-focus-ring);--accordion-focus-shadow-dark:0 0 0 2px var(--accordion-focus-ring-dark)}.c15t-root-mn3Kc{&>:not([hidden])~:not([hidden]){--space-y-reverse:0;margin-top:calc(1rem*calc(1 - var(--space-y-reverse)));margin-bottom:calc(1rem*var(--space-y-reverse))}}.c15t-item-wEBHW{padding:var(--accordion-padding);background-color:var(--accordion-background-color);box-shadow:inset 0 0 0 1px var(--accordion-border-color);transition:all var(--accordion-duration)var(--accordion-ease);border-radius:var(--accordion-radius);position:relative;overflow:visible}.c15t-dark .c15t-item-wEBHW{background-color:var(--accordion-background-color-dark);box-shadow:inset 0 0 0 1px var(--accordion-border-color-dark)}.c15t-item-wEBHW:is(:hover,[data-state=open]){background-color:var(--accordion-background-hover);box-shadow:inset 0 0 0 1px #0000}.c15t-dark .c15t-item-wEBHW:is(:hover,[data-state=open]){background-color:var(--accordion-background-hover-dark);box-shadow:inset 0 0 0 1px #0000}.c15t-item-wEBHW:focus-within:not(:has(.c15t-triggerInner-P7q0J:focus-visible)){background-color:var(--accordion-background-hover);box-shadow:inset 0 0 0 1px #0000}.c15t-dark .c15t-item-wEBHW:focus-within:not(:has(.c15t-triggerInner-P7q0J:focus-visible)){background-color:var(--accordion-background-hover-dark);box-shadow:inset 0 0 0 1px #0000}.c15t-item-wEBHW:has(.c15t-triggerInner-P7q0J:focus-visible){box-shadow:var(--accordion-focus-shadow)}.c15t-dark .c15t-item-wEBHW:has(.c15t-triggerInner-P7q0J:focus-visible){box-shadow:var(--accordion-focus-shadow-dark)}.c15t-trigger-YptQf{justify-content:space-between;align-items:center;width:100%;display:flex;position:relative;overflow:visible}.c15t-triggerInner-P7q0J{width:90%;margin:calc(-1*var(--accordion-padding));padding:var(--accordion-padding);letter-spacing:-.006em;text-align:left;color:var(--accordion-text-color);cursor:pointer;border-radius:var(--accordion-radius);z-index:1;background:0 0;border:0;grid-template-columns:auto 1fr;align-items:center;gap:.625rem;font-size:.875rem;font-weight:500;line-height:1.25rem;display:grid;position:relative}.c15t-dark .c15t-triggerInner-P7q0J{color:var(--accordion-text-color-dark)}.c15t-triggerInner-P7q0J:focus-visible{outline:none}.c15t-icon-CWXG_{width:var(--accordion-icon-size);height:var(--accordion-icon-size);color:var(--accordion-icon-color);flex-shrink:0}.c15t-dark .c15t-icon-CWXG_{color:var(--accordion-icon-color-dark)}.c15t-arrowOpen-BtPT6,.c15t-arrowClose-Rc1mA{width:var(--accordion-icon-size);height:var(--accordion-icon-size);transition:color var(--accordion-duration)var(--accordion-ease);flex-shrink:0}.c15t-arrowOpen-BtPT6{color:var(--accordion-arrow-color)}.c15t-dark .c15t-arrowOpen-BtPT6{color:var(--accordion-arrow-color-dark)}.c15t-item-wEBHW:hover .c15t-arrowOpen-BtPT6{color:var(--accordion-icon-color)}.c15t-dark .c15t-item-wEBHW:hover .c15t-arrowOpen-BtPT6{color:var(--accordion-icon-color-dark)}.c15t-arrowClose-Rc1mA{color:var(--accordion-icon-color);display:none}.c15t-dark .c15t-arrowClose-Rc1mA{color:var(--accordion-icon-color-dark)}.c15t-item-wEBHW[data-state=open] .c15t-arrowOpen-BtPT6{display:none}.c15t-item-wEBHW[data-state=open] .c15t-arrowClose-Rc1mA{display:block}.c15t-content-F0Oyv{overflow:hidden}@keyframes c15t-accordionDown-BXyWj{0%{opacity:0;height:0}to{height:var(--radix-accordion-content-height);opacity:1}}@keyframes c15t-accordionUp-JM5v8{0%{height:var(--radix-accordion-content-height);opacity:1}to{opacity:0;height:0}}.c15t-content-F0Oyv[data-state=open]{animation:c15t-accordionDown-BXyWj var(--accordion-duration)var(--accordion-ease)}.c15t-content-F0Oyv[data-state=closed]{animation:c15t-accordionUp-JM5v8 var(--accordion-duration)var(--accordion-ease)}.c15t-contentInner-seFon{letter-spacing:-.006em;color:var(--accordion-content-color);padding-top:.375rem;font-size:.875rem;line-height:1.25rem}.c15t-dark .c15t-contentInner-seFon{color:var(--accordion-content-color-dark)}",""]),i.locals= {
root:"c15t-root-mn3Kc",item:"c15t-item-wEBHW",triggerInner:"c15t-triggerInner-P7q0J",trigger:"c15t-trigger-YptQf",icon:"c15t-icon-CWXG_",arrowOpen:"c15t-arrowOpen-BtPT6",arrowClose:"c15t-arrowClose-Rc1mA",content:"c15t-content-F0Oyv",accordionDown:"c15t-accordionDown-BXyWj",accordionUp:"c15t-accordionUp-JM5v8",contentInner:"c15t-contentInner-seFon"
}
;
let s=i
}
,"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/css-loader/api.js":function(e) {
e.exports=function(e) {
var t=[];
return t.toString=function() {
return this.map(function(t) {
var o="",r=void 0!==t[5];
return t[4]&&(o+="@supports (".concat(t[4],") {")),t[2]&&(o+="@media ".concat(t[2]," {")),r&&(o+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),o+=e(t),r&&(o+="}"),t[2]&&(o+="}"),t[4]&&(o+="}"),o
}
).join("")
}
,t.i=function(e,o,r,n,a) {
"string"==typeof e&&(e=[[null,e,void 0]]);
var i= {

}
;
if(r)for(var s=0;
s<this.length;
s++) {
var l=this[s][0];
null!=l&&(i[l]=!0)
}
for(var c=0;
c<e.length;
c++) {
var d=[].concat(e[c]);
r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),o&&(d[2]&&(d[1]="@media ".concat(d[2]," {").concat(d[1],"}")),d[2]=o),n&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=n):d[4]="".concat(n)),t.push(d))
}

}
,t
}

}
,"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/css-loader/noSourceMaps.js":function(e) {
e.exports=function(e) {
return e[1]
}

}
,"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/injectStylesIntoStyleTag.js":function(e) {
var t=[];
function o(e) {
for(var o=-1,r=0;
r<t.length;
r++)if(t[r].identifier===e) {
o=r;
break
}
return o
}
function r(e,r) {
for(var n= {

}
,a=[],i=0;
i<e.length;
i++) {
var s=e[i],l=r.base?s[0]+r.base:s[0],c=n[l]||0,d="".concat(l," ").concat(c);
n[l]=c+1;
var u=o(d),m= {
css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]
}
;
if(-1!==u)t[u].references++,t[u].updater(m);
else {
var p=function(e,t) {
var o=t.domAPI(t);
return o.update(e),function(t) {
t?(t.css!==e.css||t.media!==e.media||t.sourceMap!==e.sourceMap||t.supports!==e.supports||t.layer!==e.layer)&&o.update(e=t):o.remove()
}

}
(m,r);
r.byIndex=i,t.splice(i,0, {
identifier:d,updater:p,references:1
}
)
}
a.push(d)
}
return a
}
e.exports=function(e,n) {
var a=r(e=e||[],n=n|| {

}
);
return function(e) {
e=e||[];
for(var i=0;
i<a.length;
i++) {
var s=o(a[i]);
t[s].references--
}
for(var l=r(e,n),c=0;
c<a.length;
c++) {
var d=o(a[c]);
0===t[d].references&&(t[d].updater(),t.splice(d,1))
}
a=l
}

}

}
,"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/insertBySelector.js":function(e) {
var t= {

}
;
e.exports=function(e,o) {
var r=function(e) {
if(void 0===t[e]) {
var o=document.querySelector(e);
if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try {
o=o.contentDocument.head
}
catch(e) {
o=null
}
t[e]=o
}
return t[e]
}
(e);
if(!r)throw Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
r.appendChild(o)
}

}
,"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/insertStyleElement.js":function(e) {
e.exports=function(e) {
var t=document.createElement("style");
return e.setAttributes(t,e.attributes),e.insert(t,e.options),t
}

}
,"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/setAttributesWithoutAttributes.js":function(e,t,o) {
e.exports=function(e) {
var t=o.nc;
t&&e.setAttribute("nonce",t)
}

}
,"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/styleDomAPI.js":function(e) {
e.exports=function(e) {
if("u"<typeof document)return {
update:function() {

}
,remove:function() {

}

}
;
var t=e.insertStyleElement(e);
return {
update:function(o) {
var r,n,a;
r="",o.supports&&(r+="@supports (".concat(o.supports,") {")),o.media&&(r+="@media ".concat(o.media," {")),(n=void 0!==o.layer)&&(r+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),r+=o.css,n&&(r+="}"),o.media&&(r+="}"),o.supports&&(r+="}"),(a=o.sourceMap)&&"u">typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,t,e.options)
}
,remove:function() {
null===t.parentNode||t.parentNode.removeChild(t)
}

}

}

}
,"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/styleTagTransform.js":function(e) {
e.exports=function(e,t) {
if(t.styleSheet)t.styleSheet.cssText=e;
else {
for(;
t.firstChild;
)t.removeChild(t.firstChild);
t.appendChild(document.createTextNode(e))
}

}

}

}
,ed= {

}
;
function eu(e) {
var t=ed[e];
if(void 0!==t)return t.exports;
var o=ed[e]= {
id:e,exports: {

}

}
;
return ec[e](o,o.exports,eu),o.exports
}
eu.n=e=> {
var t=e&&e.__esModule?()=>e.default:()=>e;
return eu.d(t, {
a:t
}
),t
}
,eu.d=(e,t)=> {
for(var o in t)eu.o(t,o)&&!eu.o(e,o)&&Object.defineProperty(e,o, {
enumerable:!0,get:t[o]
}
)
}
,eu.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),eu.nc=void 0;
var em=eu("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/injectStylesIntoStyleTag.js"),ep=eu.n(em),ef=eu("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/styleDomAPI.js"),eg=eu.n(ef),eh=eu("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/insertBySelector.js"),eb=eu.n(eh),ey=eu("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/setAttributesWithoutAttributes.js"),ev=eu.n(ey),ew=eu("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/insertStyleElement.js"),ex=eu.n(ew),ek=eu("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/styleTagTransform.js"),eC=eu.n(ek),eS=eu("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/css-loader/index.js??ruleSet[1].rules[1].use[1]!builtin:lightningcss-loader??ruleSet[1].rules[1].use[2]!./src/components/shared/ui/accordion/accordion.module.css"),ej= {

}
;
ej.styleTagTransform=eC(),ej.setAttributes=ev(),ej.insert=eb().bind(null,"head"),ej.domAPI=eg(),ej.insertStyleElement=ex(),ep()(eS.A,ej);
let eT=eS.A&&eS.A.locals?eS.A.locals:void 0,eE=(0,o.forwardRef)(( {
className:e,themeKey:o="accordion.root",baseClassName:n,noStyle:a,style:i,...s
}
,l)=> {
let {
noStyle:c
}
=(0,r.useTheme)(),d=(0,el.useStyles)(o, {
baseClassName:[n,eT.root],className:e,noStyle:c||a,style:i
}
);
return(0,t.jsx)(F, {
ref:l,...s,...d
}
)
}
);
eE.displayName="AccordionRoot";
let eA=(0,o.forwardRef)(( {
className:e,themeKey:o,baseClassName:n,noStyle:a,style:i,...s
}
,l)=> {
let {
noStyle:c
}
=(0,r.useTheme)(),d=(0,el.useStyles)(o??"accordion.item", {
baseClassName:[n,eT.item],className:e,noStyle:c||a,style:i
}
);
return(0,t.jsx)(ee, {
ref:l,...s,...d
}
)
}
);
eA.displayName="AccordionItem";
let eN=(0,o.forwardRef)(( {
children:e,className:o,themeKey:n,baseClassName:a,noStyle:i,style:s,...l
}
,c)=> {
let {
noStyle:d
}
=(0,r.useTheme)(),u=(0,el.useStyles)(n??"accordion.trigger-inner", {
baseClassName:[a,eT.triggerInner],className:o,noStyle:d||i,style:s
}
);
return(0,t.jsx)(er, {
ref:c,...l,...u,children:e
}
)
}
);
function e_( {
openIcon:e= {
Element:es( {
title:"Open",iconPath:(0,t.jsx)("path", {
d:"M5 12h14M12 5v14"
}
)
}
),themeKey:"accordion.arrow.open"
}
,closeIcon:o= {
Element:es( {
title:"Close",iconPath:(0,t.jsx)("path", {
d:"M5 12h14"
}
)
}
),themeKey:"accordion.arrow.close"
}
,...r
}
) {
let n=(0,el.useStyles)(e.themeKey, {
baseClassName:[e.baseClassName,eT.arrowOpen],className:e.className,noStyle:e.noStyle,style:e.style
}
),a=(0,el.useStyles)(o.themeKey, {
baseClassName:[o.baseClassName,eT.arrowClose],className:o.className,noStyle:o.noStyle,style:o.style
}
);
return(0,t.jsxs)(t.Fragment, {
children:[(0,t.jsx)(e.Element, {
...r,...n
}
),(0,t.jsx)(o.Element, {
...r,...a
}
)]
}
)
}
eN.displayName="AccordionTrigger",e_.displayName="AccordionArrow";
let eM=(0,o.forwardRef)(( {
children:e,className:o,theme:n,...i
}
,s)=> {
let {
noStyle:l
}
=(0,r.useTheme)(),c=(0,el.useStyles)(n?.content?.themeKey??"accordion.content", {
baseClassName:[n?.content?.baseClassName,eT.content],className:o,noStyle:n?.content?.noStyle||l,style:n?.content?.style
}
);
return(0,t.jsx)(ea, {
ref:s,...i,...c,children:(0,t.jsx)(a.Box, {
...n?.contentInner,baseClassName:[n?.content?.baseClassName,eT.contentInner],themeKey:n?.contentInner?.themeKey??"accordion.content-inner",children:e
}
)
}
)
}
);
eM.displayName="AccordionContent";
var eR="Switch",[eL,eI]=i(eR),[eP,eO]=eL(eR),eB=o.forwardRef((e,r)=> {
let {
__scopeSwitch:n,name:a,checked:i,defaultChecked:l,required:d,disabled:m,value:f="on",onCheckedChange:g,form:h,...b
}
=e,[y,v]=o.useState(null),w=(0,s.useComposedRefs)(r,e=>v(e)),x=o.useRef(!1),k=!y||h||!!y.closest("form"),[C=!1,S]=u( {
prop:i,defaultProp:l,onChange:g
}
);
return(0,t.jsxs)(eP, {
scope:n,checked:C,disabled:m,children:[(0,t.jsx)(p.button, {
type:"button",role:"switch","aria-checked":C,"aria-required":d,"data-state":eF(C),"data-disabled":m?"":void 0,disabled:m,value:f,...b,ref:w,onClick:c(e.onClick,e=> {
S(e=>!e),k&&(x.current=e.isPropagationStopped(),x.current||e.stopPropagation())
}
)
}
),k&&(0,t.jsx)(ez, {
control:y,bubbles:!x.current,name:a,value:f,checked:C,required:d,disabled:m,form:h,style: {
transform:"translateX(-100%)"
}

}
)]
}
)
}
);
eB.displayName=eR;
var eD="SwitchThumb",eV=o.forwardRef((e,o)=> {
let {
__scopeSwitch:r,...n
}
=e,a=eO(eD,r);
return(0,t.jsx)(p.span, {
"data-state":eF(a.checked),"data-disabled":a.disabled?"":void 0,...n,ref:o
}
)
}
);
eV.displayName=eD;
var ez=e=> {
let r, {
control:n,checked:a,bubbles:i=!0,...s
}
=e,l=o.useRef(null),c=(r=o.useRef( {
value:a,previous:a
}
),o.useMemo(()=>(r.current.value!==a&&(r.current.previous=r.current.value,r.current.value=a),r.current.previous),[a])),d=function(e) {
let[t,r]=o.useState(void 0);
return f(()=> {
if(e) {
r( {
width:e.offsetWidth,height:e.offsetHeight
}
);
let t=new ResizeObserver(t=> {
let o,n;
if(!Array.isArray(t)||!t.length)return;
let a=t[0];
if("borderBoxSize"in a) {
let e=a.borderBoxSize,t=Array.isArray(e)?e[0]:e;
o=t.inlineSize,n=t.blockSize
}
else o=e.offsetWidth,n=e.offsetHeight;
r( {
width:o,height:n
}
)
}
);
return t.observe(e, {
box:"border-box"
}
),()=>t.unobserve(e)
}
r(void 0)
}
,[e]),t
}
(n);
return o.useEffect(()=> {
let e=l.current,t=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"checked").set;
if(c!==a&&t) {
let o=new Event("click", {
bubbles:i
}
);
t.call(e,a),e.dispatchEvent(o)
}

}
,[c,a,i]),(0,t.jsx)("input", {
type:"checkbox","aria-hidden":!0,defaultChecked:a,...s,tabIndex:-1,ref:l,style: {
...e.style,...d,position:"absolute",pointerEvents:"none",opacity:0,margin:0
}

}
)
}
;
function eF(e) {
return e?"checked":"unchecked"
}
var eH= {
"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/css-loader/index.js??ruleSet[1].rules[1].use[1]!builtin:lightningcss-loader??ruleSet[1].rules[1].use[2]!./src/components/shared/ui/switch/switch.module.css":function(e,t,o) {
o.d(t, {
A:()=>s
}
);
var r=o("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/css-loader/noSourceMaps.js"),n=o.n(r),a=o("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/css-loader/api.js"),i=o.n(a)()(n());
i.push([e.id,':root{--switch-height:1.25rem;--switch-width:2rem;--switch-padding:.125rem;--switch-duration:.2s;--switch-ease:cubic-bezier(.4,0,.2,1);--switch-thumb-size:.75rem;--switch-thumb-size-disabled:.625rem;--switch-thumb-translate:.75rem;--switch-background-color:#ebebeb;--switch-background-color-dark:#333;--switch-background-color-hover:#d1d1d1;--switch-background-color-hover-dark:#292929;--switch-background-color-checked:#335cff;--switch-background-color-checked-dark:#2547d0;--switch-background-color-disabled:#fff;--switch-background-color-disabled-dark:#171717;--switch-thumb-background-color:#fff;--switch-thumb-background-color-dark:#f7f7f7;--switch-thumb-background-color-disabled:#f7f7f7;--switch-thumb-background-color-disabled-dark:#333;--switch-shadow-thumb:0 0 0 1px #ebebeb;--switch-shadow-thumb-dark:0 0 0 1px #333;--switch-focus-ring:#335cff;--switch-focus-ring-dark:#2547d0;--switch-focus-shadow:0 0 0 2px var(--switch-focus-ring);--switch-focus-shadow-dark:0 0 0 2px var(--switch-focus-ring-dark)}.c15t-root-qh0zR{height:var(--switch-height);width:var(--switch-width);padding:var(--switch-padding);white-space:nowrap;background:0 0;border:0;border-radius:9999px;outline:none;flex-shrink:0;margin:0;font-family:inherit;font-size:100%;line-height:1.15;display:block}.c15t-track-OlfR7{height:calc(var(--switch-height) - 2*var(--switch-padding));width:calc(var(--switch-width) - 2*var(--switch-padding));padding:var(--switch-padding);background-color:var(--switch-background-color);transition:all var(--switch-duration)var(--switch-ease);border-radius:9999px;outline:none;position:relative}.c15t-dark .c15t-track-OlfR7{background-color:var(--switch-background-color-dark)}.c15t-track-OlfR7:hover{background-color:var(--switch-background-color-hover)}.c15t-dark .c15t-track-OlfR7:hover{background-color:var(--switch-background-color-hover-dark)}.c15t-track-OlfR7:focus-visible{background-color:var(--switch-background-color-hover)}.c15t-dark .c15t-track-OlfR7:focus-visible{background-color:var(--switch-background-color-hover-dark)}.c15t-track-OlfR7:active{background-color:var(--switch-background-color)}.c15t-dark .c15t-track-OlfR7:active{background-color:var(--switch-background-color-dark)}.c15t-root-qh0zR[data-state=checked] .c15t-track-OlfR7{background-color:var(--switch-background-color-checked)}.c15t-dark .c15t-root-qh0zR[data-state=checked] .c15t-track-OlfR7{background-color:var(--switch-background-color-checked-dark)}.c15t-root-qh0zR[data-state=checked]:hover .c15t-track-OlfR7{background-color:var(--switch-background-color-checked)}.c15t-dark .c15t-root-qh0zR[data-state=checked]:hover .c15t-track-OlfR7{background-color:var(--switch-background-color-checked-dark)}.c15t-root-qh0zR[data-disabled]{cursor:not-allowed}.c15t-root-qh0zR:focus{outline:none}.c15t-dark .c15t-root-qh0zR:focus{outline:none}.c15t-track-disabled-reR3p{background-color:var(--switch-background-color-disabled);opacity:.4;box-shadow:inset 0 0 0 1px #ebebeb}.c15t-dark .c15t-track-disabled-reR3p{background-color:var(--switch-background-color-disabled-dark)}.c15t-root-qh0zR[data-state=checked] .c15t-track-disabled-reR3p{background-color:var(--switch-background-color-checked);opacity:.4;box-shadow:none}.c15t-dark .c15t-root-qh0zR[data-state=checked] .c15t-track-disabled-reR3p{background-color:var(--switch-background-color-checked-dark)}.c15t-thumb-JukBu{pointer-events:none;width:var(--switch-thumb-size);height:var(--switch-thumb-size);transition:transform var(--switch-duration)var(--switch-ease);display:block;position:relative;transform:translate(0)}.c15t-thumb-JukBu:before{content:"";inset-block:0;background-color:var(--switch-thumb-background-color);border-radius:9999px;width:100%;position:absolute;left:0;mask:radial-gradient(circle farthest-side,#0000 1.95px,#000 2.05px 100%) 50%/100% 100% no-repeat}.c15t-dark .c15t-thumb-JukBu:before{background-color:var(--switch-thumb-background-color-dark)}.c15t-thumb-JukBu:after{content:"";inset-block:0;width:100%;box-shadow:var(--switch-shadow-thumb);border-radius:9999px;position:absolute;left:0}.c15t-dark .c15t-thumb-JukBu:after{box-shadow:var(--switch-shadow-thumb-dark)}.c15t-root-qh0zR[data-state=checked] .c15t-thumb-JukBu{transform:translateX(var(--switch-thumb-translate))}.c15t-root-qh0zR[dir=rtl][data-state=checked] .c15t-thumb-JukBu{transform:translateX(calc(-1*var(--switch-thumb-translate)))}.c15t-track-OlfR7:active .c15t-thumb-JukBu{transform:scale(.833)}.c15t-thumb-disabled-s9gXH{box-shadow:none}.c15t-root-qh0zR[data-state=checked] .c15t-thumb-disabled-s9gXH{transform:translateX(var(--switch-thumb-translate))}.c15t-root-qh0zR:focus-visible{box-shadow:var(--switch-focus-shadow);outline:none}.c15t-dark .c15t-root-qh0zR:focus-visible{box-shadow:var(--switch-focus-shadow-dark)}',""]),i.locals= {
root:"c15t-root-qh0zR",track:"c15t-track-OlfR7","track-disabled":"c15t-track-disabled-reR3p",trackDisabled:"c15t-track-disabled-reR3p",thumb:"c15t-thumb-JukBu","thumb-disabled":"c15t-thumb-disabled-s9gXH",thumbDisabled:"c15t-thumb-disabled-s9gXH"
}
;
let s=i
}
,"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/css-loader/api.js":function(e) {
e.exports=function(e) {
var t=[];
return t.toString=function() {
return this.map(function(t) {
var o="",r=void 0!==t[5];
return t[4]&&(o+="@supports (".concat(t[4],") {")),t[2]&&(o+="@media ".concat(t[2]," {")),r&&(o+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),o+=e(t),r&&(o+="}"),t[2]&&(o+="}"),t[4]&&(o+="}"),o
}
).join("")
}
,t.i=function(e,o,r,n,a) {
"string"==typeof e&&(e=[[null,e,void 0]]);
var i= {

}
;
if(r)for(var s=0;
s<this.length;
s++) {
var l=this[s][0];
null!=l&&(i[l]=!0)
}
for(var c=0;
c<e.length;
c++) {
var d=[].concat(e[c]);
r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),o&&(d[2]&&(d[1]="@media ".concat(d[2]," {").concat(d[1],"}")),d[2]=o),n&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=n):d[4]="".concat(n)),t.push(d))
}

}
,t
}

}
,"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/css-loader/noSourceMaps.js":function(e) {
e.exports=function(e) {
return e[1]
}

}
,"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/injectStylesIntoStyleTag.js":function(e) {
var t=[];
function o(e) {
for(var o=-1,r=0;
r<t.length;
r++)if(t[r].identifier===e) {
o=r;
break
}
return o
}
function r(e,r) {
for(var n= {

}
,a=[],i=0;
i<e.length;
i++) {
var s=e[i],l=r.base?s[0]+r.base:s[0],c=n[l]||0,d="".concat(l," ").concat(c);
n[l]=c+1;
var u=o(d),m= {
css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]
}
;
if(-1!==u)t[u].references++,t[u].updater(m);
else {
var p=function(e,t) {
var o=t.domAPI(t);
return o.update(e),function(t) {
t?(t.css!==e.css||t.media!==e.media||t.sourceMap!==e.sourceMap||t.supports!==e.supports||t.layer!==e.layer)&&o.update(e=t):o.remove()
}

}
(m,r);
r.byIndex=i,t.splice(i,0, {
identifier:d,updater:p,references:1
}
)
}
a.push(d)
}
return a
}
e.exports=function(e,n) {
var a=r(e=e||[],n=n|| {

}
);
return function(e) {
e=e||[];
for(var i=0;
i<a.length;
i++) {
var s=o(a[i]);
t[s].references--
}
for(var l=r(e,n),c=0;
c<a.length;
c++) {
var d=o(a[c]);
0===t[d].references&&(t[d].updater(),t.splice(d,1))
}
a=l
}

}

}
,"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/insertBySelector.js":function(e) {
var t= {

}
;
e.exports=function(e,o) {
var r=function(e) {
if(void 0===t[e]) {
var o=document.querySelector(e);
if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try {
o=o.contentDocument.head
}
catch(e) {
o=null
}
t[e]=o
}
return t[e]
}
(e);
if(!r)throw Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
r.appendChild(o)
}

}
,"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/insertStyleElement.js":function(e) {
e.exports=function(e) {
var t=document.createElement("style");
return e.setAttributes(t,e.attributes),e.insert(t,e.options),t
}

}
,"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/setAttributesWithoutAttributes.js":function(e,t,o) {
e.exports=function(e) {
var t=o.nc;
t&&e.setAttribute("nonce",t)
}

}
,"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/styleDomAPI.js":function(e) {
e.exports=function(e) {
if("u"<typeof document)return {
update:function() {

}
,remove:function() {

}

}
;
var t=e.insertStyleElement(e);
return {
update:function(o) {
var r,n,a;
r="",o.supports&&(r+="@supports (".concat(o.supports,") {")),o.media&&(r+="@media ".concat(o.media," {")),(n=void 0!==o.layer)&&(r+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),r+=o.css,n&&(r+="}"),o.media&&(r+="}"),o.supports&&(r+="}"),(a=o.sourceMap)&&"u">typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,t,e.options)
}
,remove:function() {
null===t.parentNode||t.parentNode.removeChild(t)
}

}

}

}
,"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/styleTagTransform.js":function(e) {
e.exports=function(e,t) {
if(t.styleSheet)t.styleSheet.cssText=e;
else {
for(;
t.firstChild;
)t.removeChild(t.firstChild);
t.appendChild(document.createTextNode(e))
}

}

}

}
,e$= {

}
;
function eU(e) {
var t=e$[e];
if(void 0!==t)return t.exports;
var o=e$[e]= {
id:e,exports: {

}

}
;
return eH[e](o,o.exports,eU),o.exports
}
eU.n=e=> {
var t=e&&e.__esModule?()=>e.default:()=>e;
return eU.d(t, {
a:t
}
),t
}
,eU.d=(e,t)=> {
for(var o in t)eU.o(t,o)&&!eU.o(e,o)&&Object.defineProperty(e,o, {
enumerable:!0,get:t[o]
}
)
}
,eU.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),eU.nc=void 0;
var eK=eU("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/injectStylesIntoStyleTag.js"),eW=eU.n(eK),eG=eU("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/styleDomAPI.js"),eq=eU.n(eG),eJ=eU("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/insertBySelector.js"),eZ=eU.n(eJ),eY=eU("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/setAttributesWithoutAttributes.js"),eX=eU.n(eY),eQ=eU("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/insertStyleElement.js"),e1=eU.n(eQ),e0=eU("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/styleTagTransform.js"),e5=eU.n(e0),e2=eU("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/css-loader/index.js??ruleSet[1].rules[1].use[1]!builtin:lightningcss-loader??ruleSet[1].rules[1].use[2]!./src/components/shared/ui/switch/switch.module.css"),e4= {

}
;
e4.styleTagTransform=e5(),e4.setAttributes=eX(),e4.insert=eZ().bind(null,"head"),e4.domAPI=eq(),e4.insertStyleElement=e1(),eW()(e2.A,e4);
let e6=e2.A&&e2.A.locals?e2.A.locals:void 0,e3=(0,o.forwardRef)(( {
className:e,disabled:o,slot:r,theme:n,...i
}
,s)=> {
let l=(0,el.useStyles)(n?.root.themeKey??"switch.root", {
...n?.root,baseClassName:[e6.root,n?.root.baseClassName],className:e
}
),c=(0,el.useStyles)(n?.thumb.themeKey??"switch.thumb", {
...n?.thumb,baseClassName:[n?.thumb.baseClassName,e6.thumb,o&&e6["thumb-disabled"]],style: {
...n?.thumb.style,"--mask":"radial-gradient(circle farthest-side at 50% 50%, #0000 1.95px, #000 2.05px 100%) 50% 50%/100% 100% no-repeat"
}

}
);
return(0,t.jsx)(eB, {
ref:s,disabled:o,...i,...l,children:(0,t.jsx)(a.Box, {
themeKey:n?.track.themeKey??"switch.track",baseClassName:[e6.track,o&&e6["track-disabled"]],style:n?.track.style,children:(0,t.jsx)(eV, {
...c
}
)
}
)
}
)
}
);
e3.displayName=eB.displayName;
var e8=e.i(81619),e9= {
"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/css-loader/index.js??ruleSet[1].rules[1].use[1]!builtin:lightningcss-loader??ruleSet[1].rules[1].use[2]!./src/components/consent-manager-widget/consent-manager-widget.module.css":function(e,t,o) {
o.d(t, {
A:()=>s
}
);
var r=o("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/css-loader/noSourceMaps.js"),n=o.n(r),a=o("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/css-loader/api.js"),i=o.n(a)()(n());
i.push([e.id,':root{--widget-background-color:#fff;--widget-background-color-dark:#1a1a1a;--widget-border-color:#ebebeb;--widget-border-color-dark:#333;--widget-text-color:#171717;--widget-text-color-dark:#e6e6e6;--widget-text-muted-color:#5c5c5c;--widget-text-muted-color-dark:#999;--widget-footer-background-color:transparent;--widget-footer-background-color-dark:transparent;--widget-link-text-color:#171717;--widget-link-text-color-dark:#e6e6e6;--widget-branding-link-color:#47c2ff;--widget-padding:0;--widget-radius:0;--widget-gap:.375rem;--widget-border-width:0;--widget-max-width:32rem;--widget-z-index:50;--widget-footer-padding:1.5rem 0 0 0;--widget-title-size:.875rem;--widget-title-line-height:1.25;--widget-title-tracking:-.006em;--widget-title-weight:600;--widget-entry-animation:c15t-enter-rkppV .15s ease-out;--widget-exit-animation:c15t-exit-pldK8 .15s ease-out;--widget-accordion-padding:.875rem;--widget-accordion-radius:.625rem;--widget-accordion-duration:.2s;--widget-accordion-ease:cubic-bezier(.4,0,.2,1);--widget-accordion-icon-size:1.25rem;--widget-accordion-background-color:#fff;--widget-accordion-background-color-dark:#171717;--widget-accordion-background-hover:#f7f7f7;--widget-accordion-background-hover-dark:#1c1c1c;--widget-accordion-border-color:#ebebeb;--widget-accordion-border-color-dark:#333;--widget-accordion-text-color:#171717;--widget-accordion-text-color-dark:#e6e6e6;--widget-accordion-icon-color:#5c5c5c;--widget-accordion-icon-color-dark:#999;--widget-accordion-arrow-color:#a3a3a3;--widget-accordion-arrow-color-dark:#ccc;--widget-accordion-content-color:#5c5c5c;--widget-accordion-content-color-dark:#999;--widget-accordion-focus-ring:#476cff;--widget-accordion-focus-ring-dark:#2547d0;--widget-accordion-focus-shadow:0 0 0 2px #476cff;--widget-accordion-focus-shadow-dark:0 0 0 2px #2547d0;--widget-font-family:system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";--widget-line-height:1.15}.c15t-widget-mZfPK{font-family:var(--widget-font-family);line-height:var(--widget-line-height)}.c15t-widget-mZfPK>:not([hidden])~:not([hidden]){--space-y-reverse:0;margin-top:calc(1.5rem*calc(1 - var(--space-y-reverse)));margin-bottom:calc(1.5rem*var(--space-y-reverse))}.c15t-card-cpA5_{width:100%;max-width:var(--widget-max-width);border-radius:var(--widget-radius);border:var(--widget-border-width)solid var(--widget-border-color);background-color:var(--widget-background-color);position:relative}.c15t-dark .c15t-card-cpA5_{background-color:var(--widget-background-color-dark);border-color:var(--widget-border-color-dark)}.c15t-card-cpA5_[data-state=open]{animation:var(--widget-entry-animation)}.c15t-card-cpA5_[data-state=closed]{animation:var(--widget-exit-animation)}.c15t-header-ubIEO{gap:var(--widget-gap);padding:var(--widget-padding);flex-direction:column;display:flex}.c15t-title-LLWlk{font-size:var(--widget-title-size);line-height:var(--widget-title-line-height);letter-spacing:var(--widget-title-tracking);font-weight:var(--widget-title-weight);color:var(--widget-text-color)}.c15t-dark .c15t-title-LLWlk{color:var(--widget-text-color-dark)}.c15t-description-AdjjX{color:var(--widget-text-muted-color)}.c15t-dark .c15t-description-AdjjX{color:var(--widget-text-muted-color-dark)}.c15t-content-JJu4V{padding:0 var(--widget-padding);padding-bottom:var(--widget-padding)}.c15t-footer-ySewJ{padding:var(--widget-footer-padding);background-color:var(--widget-footer-background-color);justify-content:space-between;gap:1rem;display:flex}.c15t-dark .c15t-footer-ySewJ{background-color:var(--widget-footer-background-color-dark)}@media (width<=640px){.c15t-footer-ySewJ{flex-direction:column}}@media (width>=640px){.c15t-footer-ySewJ{flex-direction:row}}.c15t-footerGroup-PNx3e{flex-direction:row;justify-content:space-between;gap:1rem;display:flex}@media (width<=640px){.c15t-footerGroup-PNx3e,.c15t-footerGroup-PNx3e button{width:100%}}.c15t-branding-ayjMW{border-top:var(--widget-border-width)solid var(--widget-border-color);justify-content:center;width:100%;padding-top:1rem;display:flex}.c15t-dark .c15t-branding-ayjMW{border-color:var(--widget-border-color-dark)}.c15t-brandingLink-mwCeb{color:var(--widget-link-text-color);text-align:center;flex-direction:row;flex:1;justify-content:center;align-items:center;gap:.5rem;text-decoration:none;display:flex}.c15t-dark .c15t-brandingLink-mwCeb{color:var(--widget-link-text-color-dark)}.c15t-brandingLink-mwCeb svg{height:1.2rem}@keyframes c15t-enter-rkppV{0%{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}@keyframes c15t-exit-pldK8{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.95)}}.c15t-bottomLeft-ZpTtt{bottom:0;left:0}.c15t-bottomRight-StkOw{bottom:0;right:0}.c15t-topLeft-_G3uz{top:0;left:0}.c15t-topRight-By5Hm{top:0;right:0}.c15t-accordionItem-fU3xo{border-radius:var(--widget-accordion-radius);border:1px solid var(--widget-accordion-border-color);background-color:var(--widget-accordion-background-color);position:relative;overflow:visible}.c15t-accordionItem-fU3xo:has(.c15t-accordionTriggerInner-bepZm:focus-visible){box-shadow:0 0 0 2px var(--widget-accordion-focus-ring)}.c15t-dark .c15t-accordionItem-fU3xo{border-color:var(--widget-accordion-border-color-dark);background-color:var(--widget-accordion-background-color-dark)}.c15t-accordionTrigger-SWny4{width:100%;color:var(--widget-accordion-text-color);transition:background-color var(--widget-accordion-duration)var(--widget-accordion-ease);background-color:#0000;justify-content:space-between;align-items:center;display:flex}.c15t-accordionTrigger-SWny4:hover{background-color:var(--widget-accordion-background-hover)}.c15t-dark .c15t-accordionTrigger-SWny4{color:var(--widget-accordion-text-color-dark)}.c15t-dark .c15t-accordionTrigger-SWny4:hover{background-color:var(--widget-accordion-background-hover-dark)}.c15t-accordionTriggerInner-bepZm{align-items:center;gap:var(--widget-gap);font-size:var(--widget-title-size);font-weight:var(--widget-title-weight);border-radius:var(--widget-accordion-radius);display:flex;position:relative}.c15t-accordionContent-qm_yt{padding:var(--widget-accordion-padding);color:var(--widget-accordion-content-color);font-size:.875rem;line-height:1.5}.c15t-dark .c15t-accordionContent-qm_yt{color:var(--widget-accordion-content-color-dark)}.c15t-accordionArrow-t0PT0{color:var(--widget-accordion-arrow-color);width:var(--widget-accordion-icon-size);height:var(--widget-accordion-icon-size);transition:transform var(--widget-accordion-duration)var(--widget-accordion-ease)}.c15t-dark .c15t-accordionArrow-t0PT0{color:var(--widget-accordion-arrow-color-dark)}.c15t-accordionItem-fU3xo[data-state=open] .c15t-accordionArrow-t0PT0{transform:rotate(180deg)}.c15t-switch-cBZCr{cursor:pointer;background-color:var(--widget-accordion-background-hover);width:2rem;height:1.25rem;transition:background-color var(--widget-accordion-duration)var(--widget-accordion-ease);border-radius:9999px;justify-content:center;align-items:center;display:inline-flex}.c15t-dark .c15t-switch-cBZCr{background-color:var(--widget-accordion-background-hover-dark)}.c15t-switch-cBZCr[data-state=checked]{background-color:var(--widget-accordion-focus-ring)}.c15t-dark .c15t-switch-cBZCr[data-state=checked]{background-color:var(--widget-accordion-focus-ring-dark)}',""]),i.locals= {
enter:"c15t-enter-rkppV",exit:"c15t-exit-pldK8",widget:"c15t-widget-mZfPK",card:"c15t-card-cpA5_",header:"c15t-header-ubIEO",title:"c15t-title-LLWlk",description:"c15t-description-AdjjX",content:"c15t-content-JJu4V",footer:"c15t-footer-ySewJ",footerGroup:"c15t-footerGroup-PNx3e",branding:"c15t-branding-ayjMW",brandingLink:"c15t-brandingLink-mwCeb",bottomLeft:"c15t-bottomLeft-ZpTtt",bottomRight:"c15t-bottomRight-StkOw",topLeft:"c15t-topLeft-_G3uz",topRight:"c15t-topRight-By5Hm",accordionItem:"c15t-accordionItem-fU3xo",accordionTriggerInner:"c15t-accordionTriggerInner-bepZm",accordionTrigger:"c15t-accordionTrigger-SWny4",accordionContent:"c15t-accordionContent-qm_yt",accordionArrow:"c15t-accordionArrow-t0PT0",switch:"c15t-switch-cBZCr"
}
;
let s=i
}
,"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/css-loader/api.js":function(e) {
e.exports=function(e) {
var t=[];
return t.toString=function() {
return this.map(function(t) {
var o="",r=void 0!==t[5];
return t[4]&&(o+="@supports (".concat(t[4],") {")),t[2]&&(o+="@media ".concat(t[2]," {")),r&&(o+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),o+=e(t),r&&(o+="}"),t[2]&&(o+="}"),t[4]&&(o+="}"),o
}
).join("")
}
,t.i=function(e,o,r,n,a) {
"string"==typeof e&&(e=[[null,e,void 0]]);
var i= {

}
;
if(r)for(var s=0;
s<this.length;
s++) {
var l=this[s][0];
null!=l&&(i[l]=!0)
}
for(var c=0;
c<e.length;
c++) {
var d=[].concat(e[c]);
r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),o&&(d[2]&&(d[1]="@media ".concat(d[2]," {").concat(d[1],"}")),d[2]=o),n&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=n):d[4]="".concat(n)),t.push(d))
}

}
,t
}

}
,"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/css-loader/noSourceMaps.js":function(e) {
e.exports=function(e) {
return e[1]
}

}
,"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/injectStylesIntoStyleTag.js":function(e) {
var t=[];
function o(e) {
for(var o=-1,r=0;
r<t.length;
r++)if(t[r].identifier===e) {
o=r;
break
}
return o
}
function r(e,r) {
for(var n= {

}
,a=[],i=0;
i<e.length;
i++) {
var s=e[i],l=r.base?s[0]+r.base:s[0],c=n[l]||0,d="".concat(l," ").concat(c);
n[l]=c+1;
var u=o(d),m= {
css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]
}
;
if(-1!==u)t[u].references++,t[u].updater(m);
else {
var p=function(e,t) {
var o=t.domAPI(t);
return o.update(e),function(t) {
t?(t.css!==e.css||t.media!==e.media||t.sourceMap!==e.sourceMap||t.supports!==e.supports||t.layer!==e.layer)&&o.update(e=t):o.remove()
}

}
(m,r);
r.byIndex=i,t.splice(i,0, {
identifier:d,updater:p,references:1
}
)
}
a.push(d)
}
return a
}
e.exports=function(e,n) {
var a=r(e=e||[],n=n|| {

}
);
return function(e) {
e=e||[];
for(var i=0;
i<a.length;
i++) {
var s=o(a[i]);
t[s].references--
}
for(var l=r(e,n),c=0;
c<a.length;
c++) {
var d=o(a[c]);
0===t[d].references&&(t[d].updater(),t.splice(d,1))
}
a=l
}

}

}
,"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/insertBySelector.js":function(e) {
var t= {

}
;
e.exports=function(e,o) {
var r=function(e) {
if(void 0===t[e]) {
var o=document.querySelector(e);
if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try {
o=o.contentDocument.head
}
catch(e) {
o=null
}
t[e]=o
}
return t[e]
}
(e);
if(!r)throw Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
r.appendChild(o)
}

}
,"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/insertStyleElement.js":function(e) {
e.exports=function(e) {
var t=document.createElement("style");
return e.setAttributes(t,e.attributes),e.insert(t,e.options),t
}

}
,"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/setAttributesWithoutAttributes.js":function(e,t,o) {
e.exports=function(e) {
var t=o.nc;
t&&e.setAttribute("nonce",t)
}

}
,"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/styleDomAPI.js":function(e) {
e.exports=function(e) {
if("u"<typeof document)return {
update:function() {

}
,remove:function() {

}

}
;
var t=e.insertStyleElement(e);
return {
update:function(o) {
var r,n,a;
r="",o.supports&&(r+="@supports (".concat(o.supports,") {")),o.media&&(r+="@media ".concat(o.media," {")),(n=void 0!==o.layer)&&(r+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),r+=o.css,n&&(r+="}"),o.media&&(r+="}"),o.supports&&(r+="}"),(a=o.sourceMap)&&"u">typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,t,e.options)
}
,remove:function() {
null===t.parentNode||t.parentNode.removeChild(t)
}

}

}

}
,"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/styleTagTransform.js":function(e) {
e.exports=function(e,t) {
if(t.styleSheet)t.styleSheet.cssText=e;
else {
for(;
t.firstChild;
)t.removeChild(t.firstChild);
t.appendChild(document.createTextNode(e))
}

}

}

}
,e7= {

}
;
function te(e) {
var t=e7[e];
if(void 0!==t)return t.exports;
var o=e7[e]= {
id:e,exports: {

}

}
;
return e9[e](o,o.exports,te),o.exports
}
te.n=e=> {
var t=e&&e.__esModule?()=>e.default:()=>e;
return te.d(t, {
a:t
}
),t
}
,te.d=(e,t)=> {
for(var o in t)te.o(t,o)&&!te.o(e,o)&&Object.defineProperty(e,o, {
enumerable:!0,get:t[o]
}
)
}
,te.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),te.nc=void 0;
var tt=te("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/injectStylesIntoStyleTag.js"),to=te.n(tt),tr=te("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/styleDomAPI.js"),tn=te.n(tr),ta=te("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/insertBySelector.js"),ti=te.n(ta),ts=te("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/setAttributesWithoutAttributes.js"),tl=te.n(ts),tc=te("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/insertStyleElement.js"),td=te.n(tc),tu=te("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/styleTagTransform.js"),tm=te.n(tu),tp=te("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/css-loader/index.js??ruleSet[1].rules[1].use[1]!builtin:lightningcss-loader??ruleSet[1].rules[1].use[2]!./src/components/consent-manager-widget/consent-manager-widget.module.css"),tf= {

}
;
tf.styleTagTransform=tm(),tf.setAttributes=tl(),tf.insert=ti().bind(null,"head"),tf.domAPI=tn(),tf.insertStyleElement=td(),to()(tp.A,tf);
let tg=tp.A&&tp.A.locals?tp.A.locals:void 0,th=(0,o.forwardRef)(( {
children:e,themeKey:o,...r
}
,n)=>(0,t.jsx)(a.Box, {
ref:n,baseClassName:tg.accordionTrigger,themeKey:o,...r,children:e
}
)),tb=()=> {
let {
selectedConsents:e,setSelectedConsent:r,getDisplayedConsents:a
}
=(0,e8.useConsentManager)(),i=(0,o.useCallback)((e,t)=> {
r(e,t)
}
,[r]), {
consentTypes:s
}
=(0,n.useTranslations)();
return a().map(o=>(0,t.jsxs)(ty, {
value:o.name,themeKey:"widget.accordion.item",className:tg.accordionItem,children:[(0,t.jsxs)(th, {
themeKey:"widget.accordion.trigger","data-testid":`consent-manager-widget-accordion-trigger-${o.name}`,children:[(0,t.jsxs)(eN, {
themeKey:"widget.accordion.trigger-inner",className:tg.accordionTriggerInner,"data-testid":`consent-manager-widget-accordion-trigger-inner-${o.name}`,children:[(0,t.jsx)(e_, {
"data-testid":`consent-manager-widget-accordion-arrow-${o.name}`,className:tg.accordionArrow
}
),s[o.name]?.title??o.name.replace(/_/g," ").replace(/\b\w/g,e=>e.toUpperCase())]
}
),(0,t.jsx)(e3, {
checked:e[o.name],onClick:e=>e.stopPropagation(),onKeyUp:e=>e.stopPropagation(),onKeyDown:e=>e.stopPropagation(),onCheckedChange:e=>i(o.name,e),disabled:o.disabled,theme: {
root: {
themeKey:"widget.switch",className:tg.switch
}
,thumb: {
themeKey:"widget.switch.thumb",className:tg.switchThumb
}
,track: {
themeKey:"widget.switch.track"
}

}
,"data-testid":`consent-manager-widget-switch-${o.name}`
}
)]
}
),(0,t.jsx)(eM, {
theme: {
content: {
themeKey:"widget.accordion.content",className:tg.accordionContent
}
,contentInner: {
themeKey:"widget.accordion.content-inner"
}

}
,"data-testid":`consent-manager-widget-accordion-content-${o.name}`,children:s[o.name]?.description??o.description
}
)]
}
,o.name))
}
,ty=(0,o.forwardRef)(( {
className:e,...o
}
,r)=>(0,t.jsx)(eA, {
ref:r,className:tg.accordionItem,...o
}
));
var tv=e.i(64433);
let tw=(0,o.forwardRef)(( {
children:e,...o
}
,r)=>(0,t.jsx)(tv.ConsentButton, {
ref:r,variant:"neutral",mode:"stroke",size:"small",action:"accept-consent",...o,themeKey:"widget.footer.accept-button","data-testid":"consent-manager-widget-footer-accept-button",closeCookieBanner:!0,closeCustomizeDialog:!0,children:e
}
)),tx=((0,o.forwardRef)(( {
children:e,...o
}
,r)=>(0,t.jsx)(tv.ConsentButton, {
ref:r,action:"open-consent-dialog",...o,themeKey:"widget.footer.customize-button","data-testid":"consent-manager-widget-footer-customize-button",children:e
}
)),(0,o.forwardRef)(( {
children:e,...o
}
,r)=>(0,t.jsx)(tv.ConsentButton, {
ref:r,action:"custom-consent",variant:"primary",closeCustomizeDialog:!0,...o,themeKey:"widget.footer.save-button","data-testid":"consent-manager-widget-footer-save-button",children:e
}
))),tk=(0,o.forwardRef)(( {
children:e,...o
}
,r)=>(0,t.jsx)(tv.ConsentButton, {
ref:r,variant:"neutral",mode:"stroke",size:"small",action:"reject-consent",...o,themeKey:"widget.footer.reject-button","data-testid":"consent-manager-widget-reject-button",closeCookieBanner:!0,closeCustomizeDialog:!0,children:e
}
)),tC=(0,o.forwardRef)(( {
children:e,...o
}
,r)=>(0,t.jsx)(a.Box, {
ref:r,baseClassName:tg.footer,"data-testid":"consent-manager-widget-footer",...o,themeKey:"widget.footer",children:e
}
)),tS=(0,o.forwardRef)(( {
children:e,...o
}
,r)=>(0,t.jsx)(a.Box, {
ref:r,baseClassName:tg.footerGroup,"data-testid":"consent-manager-widget-footer-sub-group",...o,themeKey:"widget.footer.sub-group",children:e
}
));
var tj=e.i(23321),tT=e.i(14509);
let tE=( {
children:e,noStyle:o=!1,disableAnimation:r=!1,theme:n,useProvider:i=!0
}
)=> {
let {
translationConfig:s
}
=(0,e8.useConsentManager)(),l=(0,t.jsx)(a.Box, {
"data-testid":"consent-manager-widget-root",themeKey:"widget.root",dir:(0,tT.useTextDirection)(s.defaultLanguage),children:e
}
);
return i?(0,t.jsx)(tj.LocalThemeContext.Provider, {
value: {
disableAnimation:r,noStyle:o,theme:n
}
,children:l
}
):l
}
,tA=( {
hideBrading:e,theme:a,noStyle:i,disableAnimation:s,scrollLock:l,trapFocus:c,...d
}
)=> {
let[u,m]=(0,o.useState)([]), {
common:p
}
=(0,n.useTranslations)(),f=(0,r.useTheme)();
return(0,t.jsxs)(tE, {
... {
theme: {
...f.theme,...a
}
,noStyle:i??f.noStyle,disableAnimation:s??f.disableAnimation,scrollLock:l??f.scrollLock,trapFocus:c??f.trapFocus,...d
}
,children:[(0,t.jsx)(eE, {
themeKey:"widget.accordion",type:"multiple",value:u,onValueChange:m,children:(0,t.jsx)(tb, {

}
)
}
),(0,t.jsxs)(tC, {
children:[(0,t.jsxs)(tS, {
themeKey:"widget.footer.sub-group",children:[(0,t.jsx)(tk, {
themeKey:"widget.footer.reject-button",children:p.rejectAll
}
),(0,t.jsx)(tw, {
themeKey:"widget.footer.accept-button",children:p.acceptAll
}
)]
}
),(0,t.jsx)(tx, {
themeKey:"widget.footer.save-button",children:p.save
}
)]
}
),!e&&(0,t.jsx)(t0, {
themeKey:"widget.branding",children:(0,t.jsx)(t5, {

}
)
}
)]
}
)
}
;
var tN=e.i(43711);
let t_=( {
title:e="c15t",titleId:o="c15t",...r
}
)=>(0,t.jsxs)("svg", {
xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 408 149","aria-labelledby":o,...r,children:[(0,t.jsx)("title", {
id:o,children:e
}
),(0,t.jsx)("path", {
fill:"currentColor",fillRule:"evenodd",d:"M74.133 14.042c-5.58 0-10.105 4.524-10.105 10.104 0 5.581 4.524 10.105 10.105 10.105 5.58 0 10.105-4.524 10.105-10.105 0-5.58-4.524-10.104-10.105-10.104ZM50.556 24.146C50.556 11.125 61.112.57 74.133.57 87.154.57 97.71 11.125 97.71 24.146c0 13.022-10.556 23.578-23.577 23.578-4.06 0-7.88-1.027-11.216-2.834L44.354 63.453a23.424 23.424 0 0 1 1.858 4.48h55.843c2.899-9.74 11.921-16.841 22.601-16.841 13.022 0 23.578 10.556 23.578 23.577 0 13.022-10.556 23.578-23.578 23.578-10.68 0-19.702-7.102-22.601-16.841H46.211a23.455 23.455 0 0 1-2.628 5.798l18.015 18.015a23.473 23.473 0 0 1 12.535-3.604c13.021 0 23.577 10.556 23.577 23.577 0 13.022-10.556 23.577-23.577 23.577-13.021 0-23.577-10.555-23.577-23.577 0-3.506.765-6.833 2.138-9.824l-19.26-19.26a23.49 23.49 0 0 1-9.823 2.139C10.588 98.247.032 87.69.032 74.669c0-13.021 10.556-23.577 23.577-23.577 4.061 0 7.882 1.026 11.217 2.834L53.39 35.364a23.473 23.473 0 0 1-2.834-11.218Zm63.996 50.523v.023c.012 5.57 4.531 10.082 10.104 10.082 5.581 0 10.105-4.524 10.105-10.105 0-5.58-4.524-10.104-10.105-10.104-5.573 0-10.092 4.511-10.104 10.082v.022ZM23.61 64.565c-5.58 0-10.104 4.524-10.104 10.104 0 5.58 4.524 10.105 10.104 10.105 5.581 0 10.105-4.524 10.105-10.105 0-5.58-4.524-10.104-10.105-10.104Zm40.418 60.627c0-5.581 4.524-10.104 10.105-10.104 5.58 0 10.105 4.523 10.105 10.104 0 5.581-4.524 10.105-10.105 10.105-5.58 0-10.105-4.524-10.105-10.105Z",clipRule:"evenodd"
}
),(0,t.jsx)("path", {
fill:"currentColor",d:"M213.869 86.31c0-18.48 14.64-32.04 32.88-32.04 9 0 17.28 3 24.24 10.44l-8.88 9.24c-4.08-4.2-8.88-6.6-15.36-6.6-10.56 0-18.6 8.04-18.6 18.96 0 10.92 8.04 18.959 18.6 18.959 6.48 0 11.28-2.4 15.36-6.6l8.88 9.24c-6.96 7.44-15.24 10.44-24.24 10.44-18.24 0-32.88-13.56-32.88-32.04Zm70.372-39.72h-11.88V33.03h26.88v83.639h-15v-70.08Zm23.468 54.599 12.24-6.96c2.88 6.12 9.24 10.2 16.44 10.2 10.2 0 17.04-6.36 17.04-15.84s-6.48-15.84-16.2-15.84c-4.68 0-9.48 1.44-12.48 4.32l-10.8-2.88 7.8-41.16h40.56v13.56h-29.28l-3 15.12c2.52-1.08 5.52-1.56 8.76-1.56 17.76 0 29.52 11.28 29.52 28.32 0 17.76-12.72 29.64-31.92 29.64-12.6 0-23.52-6.84-28.68-16.92Zm72.386-31.92h-7.8V56.19h7.8V33.03h14.4v23.16h13.08v13.08h-13.08v47.4h-14.4v-47.4Z"
}
)]
}
),tM=( {
title:e="Consent",titleId:o="consent-logo",...r
}
)=>(0,t.jsxs)("svg", {
xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 595 97","aria-labelledby":o,className:"consent-logo",...r,children:[(0,t.jsx)("title", {
id:o,children:e
}
),(0,t.jsx)("path", {
fill:"currentColor",fillRule:"evenodd",d:"M53.679 70.787c6.17 0 11.172-5.002 11.172-11.172 0-4.009-2.111-7.524-5.283-9.495a23.868 23.868 0 0 1 8.817-1.677c13.217 0 23.93 10.714 23.93 23.93s-10.713 23.93-23.93 23.93c-13.216 0-23.93-10.714-23.93-23.93 0-1.924.227-3.795.656-5.588a11.148 11.148 0 0 0 8.568 4.002Z",clipRule:"evenodd"
}
),(0,t.jsx)("path", {
fill:"currentColor",fillRule:"evenodd",d:"M1.118 74.716a68.462 68.462 0 0 1-.098-3.654c0-37.205 30.16-67.365 67.365-67.365s67.365 30.16 67.365 67.365c0 1.226-.032 2.444-.097 3.654h-21.927c.041-.776.061-1.557.061-2.343 0-24.531-19.887-44.418-44.418-44.418-24.532 0-44.418 19.887-44.418 44.418 0 .786.02 1.567.06 2.343H1.118Z",clipRule:"evenodd"
}
),(0,t.jsx)("path", {
fill:"currentColor",d:"M566.424 36.6h-7.8V23.52h7.8V.36h14.4v23.16h13.08V36.6h-13.08V84h-14.4V36.6ZM497.535 23.52h14.28v8.64c2.76-5.76 9.6-9.84 18.36-9.84 14.52 0 22.92 9.36 22.92 24.24V84h-14.4V48.6c0-8.16-4.68-13.44-12.84-13.44s-14.04 5.76-14.04 14.04V84h-14.28V23.52ZM429.265 53.76c0-19.44 13.56-31.92 31.68-31.92 18 0 29.88 13.56 29.88 30.48 0 0 0 2.64-.24 5.04h-47.04c.48 9.6 7.56 15.84 18.24 15.84 7.32 0 11.76-2.4 16.32-6.96l8.64 8.4c-7.8 8.28-16.32 10.8-25.44 10.8-18.96 0-32.04-12.24-32.04-31.2v-.48Zm46.92-6.48c0-7.2-6.84-13.2-15.24-13.2-9 0-16.44 5.88-17.04 13.2h32.28ZM385.367 65.52c2.52 4.08 8.159 7.56 15.959 7.56 8.28 0 10.8-3.48 10.8-6.6 0-5.04-7.2-6.24-16.56-9.6-8.88-3.24-14.88-7.8-14.88-17.04 0-11.64 9.84-18.12 21.36-18.12 10.08 0 16.8 3.84 21 9.12l-8.039 8.52c-2.521-3-6.6-5.28-13.2-5.28-4.56 0-7.321 2.16-7.321 5.4 0 4.56 5.041 5.16 15.241 8.88 11.16 3.96 16.199 9.24 16.199 18 0 10.44-7.559 19.2-24.839 19.2-12.6 0-21.241-5.04-24.961-12.24l9.241-7.8ZM315.997 23.52h14.28v8.64c2.76-5.76 9.6-9.84 18.36-9.84 14.52 0 22.92 9.36 22.92 24.24V84h-14.4V48.6c0-8.16-4.68-13.44-12.84-13.44s-14.04 5.76-14.04 14.04V84h-14.28V23.52ZM242.806 53.76c0-18.12 14.64-32.04 33-32.04 18.24 0 33 13.92 33 32.04 0 18.12-14.76 32.04-33 32.04-18.36 0-33-13.92-33-32.04Zm14.28 0c0 10.68 8.04 18.96 18.72 18.96 10.56 0 18.72-8.28 18.72-18.96 0-10.68-8.16-18.96-18.72-18.96-10.68 0-18.72 8.28-18.72 18.96ZM183.387 53.64c0-18.48 14.64-32.04 32.88-32.04 9 0 17.28 3 24.24 10.44l-8.88 9.24c-4.08-4.2-8.88-6.6-15.36-6.6-10.56 0-18.6 8.04-18.6 18.96 0 10.92 8.04 18.96 18.6 18.96 6.48 0 11.28-2.4 15.36-6.6l8.88 9.24c-6.96 7.44-15.24 10.44-24.24 10.44-18.24 0-32.88-13.56-32.88-32.04Z"
}
)]
}
);
var tR= {
"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/css-loader/index.js??ruleSet[1].rules[1].use[1]!builtin:lightningcss-loader??ruleSet[1].rules[1].use[2]!./src/components/consent-manager-dialog/consent-manager-dialog.module.css":function(e,t,o) {
o.d(t, {
A:()=>s
}
);
var r=o("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/css-loader/noSourceMaps.js"),n=o.n(r),a=o("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/css-loader/api.js"),i=o.n(a)()(n());
i.push([e.id,':root{--dialog-font-family:system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";--dialog-line-height:1.15;--dialog-title-font-size:.875rem;--dialog-title-font-weight:600;--dialog-title-letter-spacing:-.025em;--dialog-description-font-size:1rem;--dialog-description-font-weight:400;--dialog-description-line-height:1.15;--dialog-footer-gap:.75rem;--dialog-footer-font-size:14px;--dialog-branding-font-size:1rem;--dialog-branding-font-weight:500;--dialog-branding-line-height:1.5;--dialog-branding-letter-spacing:-.01em;--dialog-stroke-color:#ebebeb;--dialog-stroke-color-dark:#333;--dialog-branding-focus-color:#476cff;--dialog-branding-focus-color-dark:#2547d0;--dialog-link-text-color:#171717;--dialog-link-text-color-dark:#e6e6e6;--dialog-border-color:#ebebeb;--dialog-border-color-dark:#333;--dialog-background-color:white;--dialog-background-color-dark:#1a1a1a;--dialog-foreground-color:#171717;--dialog-foreground-color-dark:#e6e6e6;--dialog-muted-color:#737373;--dialog-muted-color-dark:#a3a3a3;--dialog-overlay-background-color:#00000080;--dialog-overlay-background-color-dark:#00000080;--dialog-card-padding:1.5rem;--dialog-card-padding-mobile:1rem;--dialog-card-gap:.375rem;--dialog-header-gap:.375rem;--dialog-content-gap:1rem;--dialog-footer-padding-y:1rem;--dialog-card-radius:1.25rem;--dialog-max-width:28rem;--dialog-height:80%;--dialog-z-index:1000000000;--dialog-overlay-z-index:1000000000;--dialog-card-shadow:0 1px 2px 0 #0000000d;--dialog-border-width:1px;--dialog-border-style:solid;--dialog-animation-duration:.2s;--dialog-animation-timing:ease-out;--dialog-branding-gap:.5rem;--dialog-branding-icon-height:1.25rem;--dialog-branding-icon-width:auto}.c15t-root-QhMZC{isolation:isolate;font-family:var(--dialog-font-family);line-height:var(--dialog-line-height);-webkit-text-size-adjust:100%;tab-size:4;padding:var(--dialog-card-padding-mobile);z-index:var(--dialog-z-index);border-radius:var(--dialog-card-radius);width:100%;height:var(--dialog-height);background:0 0;border:0;justify-content:center;align-items:center;margin:0;display:flex;position:fixed;inset:0}.c15t-root-QhMZC[dir=rtl]{direction:rtl}.c15t-dialogVisible-fwyvr{opacity:1;transition:opacity var(--dialog-animation-duration)var(--dialog-animation-timing)}.c15t-dialogHidden-WwOAw{opacity:0;transition:opacity var(--dialog-animation-duration)var(--dialog-animation-timing)}.c15t-contentVisible-A_pT0{opacity:1;transition:opacity var(--dialog-animation-duration)var(--dialog-animation-timing),transform var(--dialog-animation-duration)cubic-bezier(.34,1.56,.64,1);transform:scale(1)}.c15t-contentHidden-GCC7t{opacity:0;transition:opacity var(--dialog-animation-duration)var(--dialog-animation-timing),transform var(--dialog-animation-duration)var(--dialog-animation-timing);transform:scale(.95)}@media (width>=640px){.c15t-root-QhMZC{padding:var(--dialog-card-padding);width:auto}}.c15t-container-bOKMN{width:100%;max-width:var(--dialog-max-width);margin:auto}.c15t-branding-p1rXd{justify-content:center;align-items:center;gap:var(--dialog-branding-gap);font-size:var(--dialog-branding-font-size);font-weight:var(--dialog-branding-font-weight);line-height:var(--dialog-branding-line-height);letter-spacing:var(--dialog-branding-letter-spacing);color:var(--dialog-foreground-color);border-radius:.25rem;margin:auto 0;padding:0 .5rem;text-decoration:none;display:flex}.c15t-branding-p1rXd:focus-visible{box-shadow:0 0 0 2px var(--dialog-branding-focus-color);outline:none}.c15t-dark .c15t-branding-p1rXd:focus-visible{box-shadow:0 0 0 2px var(--dialog-branding-focus-color-dark)}.c15t-dark .c15t-branding-p1rXd{color:var(--dialog-foreground-color-dark)}.c15t-brandingC15T-gskQ7{width:var(--dialog-branding-icon-width);height:var(--dialog-branding-icon-height)}.c15t-brandingConsent-yGJd8{width:var(--dialog-branding-icon-width);height:1rem}.c15t-headerWrapper-GSp8u{position:relative}.c15t-closeButton-PxEni{position:absolute;top:22px;right:22px}.c15t-footer-oOtr_{border-top:solid 1px var(--dialog-stroke-color);justify-content:center;padding-top:1rem;padding-bottom:1rem;font-size:14px}.c15t-overlay-jJ4Q1{color:var(--dialog-link-text-color);background-color:var(--dialog-overlay-background-color);z-index:var(--dialog-overlay-z-index);position:fixed;inset:0}.c15t-overlayVisible-qy2bF{opacity:1;transition:opacity var(--dialog-animation-duration)var(--dialog-animation-timing)}.c15t-overlayHidden-IC_C7{opacity:0;transition:opacity var(--dialog-animation-duration)var(--dialog-animation-timing)}.c15t-dark .c15t-overlay-jJ4Q1{background-color:var(--dialog-overlay-background-color-dark);color:var(--dialog-link-text-color-dark)}.c15t-card-d2uUf{border-radius:var(--dialog-card-radius);border:var(--dialog-border-width)var(--dialog-border-style)var(--dialog-border-color);background-color:var(--dialog-background-color);color:var(--dialog-foreground-color);box-shadow:var(--dialog-card-shadow);overflow:hidden}.c15t-dark .c15t-card-d2uUf{background-color:var(--dialog-background-color-dark);color:var(--dialog-foreground-color-dark);border-color:var(--dialog-border-color-dark)}.c15t-header-qF2QY{padding:var(--dialog-card-padding);gap:var(--dialog-header-gap);flex-direction:column;display:flex}.c15t-header-qF2QY>*+*{margin-top:var(--dialog-card-gap)}.c15t-title-B_498{font-weight:var(--dialog-title-font-weight);font-size:var(--dialog-title-font-size);letter-spacing:var(--dialog-title-letter-spacing);line-height:1}.c15t-description-Nct_b{color:var(--dialog-muted-color);font-size:var(--dialog-description-font-size);font-weight:var(--dialog-description-font-weight);line-height:var(--dialog-description-line-height)}.c15t-dark .c15t-description-Nct_b{color:var(--dialog-muted-color-dark)}.c15t-content-_6tun{padding:var(--dialog-card-padding);gap:var(--dialog-content-gap);padding-top:0}.c15t-footer-oOtr_{justify-content:center;align-items:center;gap:var(--dialog-footer-gap);font-size:var(--dialog-footer-font-size);padding-top:var(--dialog-footer-padding-y);padding-bottom:var(--dialog-footer-padding-y);border-top:var(--dialog-border-width)var(--dialog-border-style)var(--dialog-stroke-color);flex-direction:column;display:flex}.c15t-footer-oOtr_:empty{border-top:none;display:none}.c15t-dark .c15t-footer-oOtr_{border-color:var(--dialog-stroke-color-dark)}',""]),i.locals= {
root:"c15t-root-QhMZC",dialogVisible:"c15t-dialogVisible-fwyvr",dialogHidden:"c15t-dialogHidden-WwOAw",contentVisible:"c15t-contentVisible-A_pT0",contentHidden:"c15t-contentHidden-GCC7t",container:"c15t-container-bOKMN",branding:"c15t-branding-p1rXd",brandingC15T:"c15t-brandingC15T-gskQ7",brandingConsent:"c15t-brandingConsent-yGJd8",headerWrapper:"c15t-headerWrapper-GSp8u",closeButton:"c15t-closeButton-PxEni",footer:"c15t-footer-oOtr_",overlay:"c15t-overlay-jJ4Q1",overlayVisible:"c15t-overlayVisible-qy2bF",overlayHidden:"c15t-overlayHidden-IC_C7",card:"c15t-card-d2uUf",header:"c15t-header-qF2QY",title:"c15t-title-B_498",description:"c15t-description-Nct_b",content:"c15t-content-_6tun"
}
;
let s=i
}
,"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/css-loader/api.js":function(e) {
e.exports=function(e) {
var t=[];
return t.toString=function() {
return this.map(function(t) {
var o="",r=void 0!==t[5];
return t[4]&&(o+="@supports (".concat(t[4],") {")),t[2]&&(o+="@media ".concat(t[2]," {")),r&&(o+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),o+=e(t),r&&(o+="}"),t[2]&&(o+="}"),t[4]&&(o+="}"),o
}
).join("")
}
,t.i=function(e,o,r,n,a) {
"string"==typeof e&&(e=[[null,e,void 0]]);
var i= {

}
;
if(r)for(var s=0;
s<this.length;
s++) {
var l=this[s][0];
null!=l&&(i[l]=!0)
}
for(var c=0;
c<e.length;
c++) {
var d=[].concat(e[c]);
r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),o&&(d[2]&&(d[1]="@media ".concat(d[2]," {").concat(d[1],"}")),d[2]=o),n&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=n):d[4]="".concat(n)),t.push(d))
}

}
,t
}

}
,"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/css-loader/noSourceMaps.js":function(e) {
e.exports=function(e) {
return e[1]
}

}
,"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/injectStylesIntoStyleTag.js":function(e) {
var t=[];
function o(e) {
for(var o=-1,r=0;
r<t.length;
r++)if(t[r].identifier===e) {
o=r;
break
}
return o
}
function r(e,r) {
for(var n= {

}
,a=[],i=0;
i<e.length;
i++) {
var s=e[i],l=r.base?s[0]+r.base:s[0],c=n[l]||0,d="".concat(l," ").concat(c);
n[l]=c+1;
var u=o(d),m= {
css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]
}
;
if(-1!==u)t[u].references++,t[u].updater(m);
else {
var p=function(e,t) {
var o=t.domAPI(t);
return o.update(e),function(t) {
t?(t.css!==e.css||t.media!==e.media||t.sourceMap!==e.sourceMap||t.supports!==e.supports||t.layer!==e.layer)&&o.update(e=t):o.remove()
}

}
(m,r);
r.byIndex=i,t.splice(i,0, {
identifier:d,updater:p,references:1
}
)
}
a.push(d)
}
return a
}
e.exports=function(e,n) {
var a=r(e=e||[],n=n|| {

}
);
return function(e) {
e=e||[];
for(var i=0;
i<a.length;
i++) {
var s=o(a[i]);
t[s].references--
}
for(var l=r(e,n),c=0;
c<a.length;
c++) {
var d=o(a[c]);
0===t[d].references&&(t[d].updater(),t.splice(d,1))
}
a=l
}

}

}
,"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/insertBySelector.js":function(e) {
var t= {

}
;
e.exports=function(e,o) {
var r=function(e) {
if(void 0===t[e]) {
var o=document.querySelector(e);
if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try {
o=o.contentDocument.head
}
catch(e) {
o=null
}
t[e]=o
}
return t[e]
}
(e);
if(!r)throw Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
r.appendChild(o)
}

}
,"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/insertStyleElement.js":function(e) {
e.exports=function(e) {
var t=document.createElement("style");
return e.setAttributes(t,e.attributes),e.insert(t,e.options),t
}

}
,"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/setAttributesWithoutAttributes.js":function(e,t,o) {
e.exports=function(e) {
var t=o.nc;
t&&e.setAttribute("nonce",t)
}

}
,"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/styleDomAPI.js":function(e) {
e.exports=function(e) {
if("u"<typeof document)return {
update:function() {

}
,remove:function() {

}

}
;
var t=e.insertStyleElement(e);
return {
update:function(o) {
var r,n,a;
r="",o.supports&&(r+="@supports (".concat(o.supports,") {")),o.media&&(r+="@media ".concat(o.media," {")),(n=void 0!==o.layer)&&(r+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),r+=o.css,n&&(r+="}"),o.media&&(r+="}"),o.supports&&(r+="}"),(a=o.sourceMap)&&"u">typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,t,e.options)
}
,remove:function() {
null===t.parentNode||t.parentNode.removeChild(t)
}

}

}

}
,"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/styleTagTransform.js":function(e) {
e.exports=function(e,t) {
if(t.styleSheet)t.styleSheet.cssText=e;
else {
for(;
t.firstChild;
)t.removeChild(t.firstChild);
t.appendChild(document.createTextNode(e))
}

}

}

}
,tL= {

}
;
function tI(e) {
var t=tL[e];
if(void 0!==t)return t.exports;
var o=tL[e]= {
id:e,exports: {

}

}
;
return tR[e](o,o.exports,tI),o.exports
}
tI.n=e=> {
var t=e&&e.__esModule?()=>e.default:()=>e;
return tI.d(t, {
a:t
}
),t
}
,tI.d=(e,t)=> {
for(var o in t)tI.o(t,o)&&!tI.o(e,o)&&Object.defineProperty(e,o, {
enumerable:!0,get:t[o]
}
)
}
,tI.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),tI.nc=void 0;
var tP=tI("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/injectStylesIntoStyleTag.js"),tO=tI.n(tP),tB=tI("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/styleDomAPI.js"),tD=tI.n(tB),tV=tI("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/insertBySelector.js"),tz=tI.n(tV),tF=tI("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/setAttributesWithoutAttributes.js"),tH=tI.n(tF),t$=tI("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/insertStyleElement.js"),tU=tI.n(t$),tK=tI("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/styleTagTransform.js"),tW=tI.n(tK),tG=tI("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/css-loader/index.js??ruleSet[1].rules[1].use[1]!builtin:lightningcss-loader??ruleSet[1].rules[1].use[2]!./src/components/consent-manager-dialog/consent-manager-dialog.module.css"),tq= {

}
;
tq.styleTagTransform=tW(),tq.setAttributes=tH(),tq.insert=tz().bind(null,"head"),tq.domAPI=tD(),tq.insertStyleElement=tU(),tO()(tG.A,tq);
let tJ=tG.A&&tG.A.locals?tG.A.locals:void 0,tZ=(0,o.forwardRef)(( {
children:e,...o
}
,r)=>(0,t.jsx)(a.Box, {
ref:r,className:tJ.card,...o,themeKey:"dialog.root","data-testid":"consent-manager-dialog-root",children:e
}
)),tY=(0,o.forwardRef)(( {
children:e,...o
}
,r)=>(0,t.jsx)(a.Box, {
ref:r,className:tJ.header,...o,themeKey:"dialog.header","data-testid":"consent-manager-dialog-header",children:e
}
)),tX=(0,o.forwardRef)(( {
children:e,...o
}
,r)=>(0,t.jsx)(a.Box, {
ref:r,className:tJ.title,themeKey:"dialog.title",...o,"data-testid":"consent-manager-dialog-title",children:e
}
)),tQ=(0,o.forwardRef)(( {
children:e,legalLinks:o,asChild:r,...n
}
,i)=>r?(0,t.jsx)(a.Box, {
ref:i,className:tJ.description,themeKey:"dialog.description",asChild:r,...n,children:e
}
):(0,t.jsxs)(a.Box, {
ref:i,className:tJ.description,themeKey:"dialog.description",asChild:r,...n,"data-testid":"consent-manager-dialog-description",children:[e,(0,t.jsx)(tN.InlineLegalLinks, {
links:o,themeKey:"dialog.legal-links",testIdPrefix:"consent-manager-dialog-legal-link"
}
)]
}
)),t1=(0,o.forwardRef)(( {
children:e,...o
}
,r)=>(0,t.jsx)(a.Box, {
ref:r,className:tJ.content,themeKey:"dialog.content","data-testid":"consent-manager-dialog-content",...o,children:e
}
)),t0=(0,o.forwardRef)(( {
children:e,themeKey:o,...r
}
,n)=>(0,t.jsx)(a.Box, {
ref:n,className:tJ.footer,themeKey:o||"dialog.footer",...r,"data-testid":"consent-manager-dialog-footer",children:e
}
)),t5=()=> {
let {
branding:e
}
=(0,e8.useConsentManager)();
if("none"===e)return null;
let o="u">typeof window?`?ref=${window.location.hostname}`:"";
return(0,t.jsxs)("a", {
dir:"ltr",className:tJ.branding,href:"consent"===e?`https://consent.io${o}`:`https://c15t.com${o}`,children:["Secured by"," ","consent"===e?(0,t.jsx)(tM, {
className:tJ.brandingConsent
}
):(0,t.jsx)(t_, {
className:tJ.brandingC15T
}
)]
}
)
}
,t2=( {
noStyle:e,legalLinks:o
}
)=> {
let {
consentManagerDialog:r
}
=(0,n.useTranslations)();
return(0,t.jsxs)(tZ, {
children:[(0,t.jsxs)(tY, {
children:[(0,t.jsx)(tX, {
children:r.title
}
),(0,t.jsx)(tQ, {
legalLinks:o,children:r.description
}
)]
}
),(0,t.jsx)(t1, {
children:(0,t.jsx)(tA, {
hideBrading:!0,noStyle:e,useProvider:!0
}
)
}
),(0,t.jsx)(t0, {
themeKey:"dialog.footer",children:(0,t.jsx)(t5, {

}
)
}
)]
}
)
}
;
var t4=e.i(7284);
let t6=( {
noStyle:e,style:n
}
)=> {
let a, {
isPrivacyDialogOpen:i
}
=(0,e8.useConsentManager)(), {
disableAnimation:s,noStyle:l,scrollLock:c=!0
}
=(0,r.useTheme)(),[d,u]=(0,o.useState)(!1);
(0,o.useEffect)(()=> {
if(i)u(!0);
else if(s)u(!1);
else {
let e=setTimeout(()=> {
u(!1)
}
,Number.parseInt(getComputedStyle(document.documentElement).getPropertyValue("--dialog-animation-duration")||"200",10));
return()=>clearTimeout(e)
}

}
,[i,s]);
let m="string"==typeof n?n:n?.className,p=(0,el.useStyles)("dialog.overlay", {
baseClassName:!(l||e)&&tJ.overlay,className:m,noStyle:l||e
}
);
a=l||e||s?void 0:d?tJ.overlayVisible:tJ.overlayHidden;
let f=(0,t4.default)(p.className,a);
return(0,t.jsx)("div", {
style:"object"==typeof n&&"style"in n? {
...p.style,...n.style
}
:p.style,className:f,"data-testid":"consent-manager-dialog-overlay"
}
)
}
;
var t3=e.i(41730),t8=e.i(49027);
let t9=( {
children:e,open:n,noStyle:a,disableAnimation:i,scrollLock:s=!0,trapFocus:l=!0,overlay:c,className:d,style:u,theme:p,...f
}
)=> {
let g=(0,r.useTheme)(),h= {
...g.theme,...p
}
,b=i??g.disableAnimation??!1,y=a??g.noStyle??!1,v=s??g.scrollLock??!0,w=l??g.trapFocus??!0, {
isPrivacyDialogOpen:x,translationConfig:k
}
=(0,e8.useConsentManager)(),C=(0,tT.useTextDirection)(k.defaultLanguage),S=n??x,[j,T]=(0,o.useState)(!1),E=(0,o.useRef)(null),A=(0,o.useRef)(null),[N,_]=(0,o.useState)(!1);
(0,o.useEffect)(()=> {
_(!0)
}
,[]),(0,o.useEffect)(()=> {
if(S)T(!0);
else if(b)T(!1);
else {
let e=setTimeout(()=>T(!1),Number.parseInt(getComputedStyle(document.documentElement).getPropertyValue("--dialog-animation-duration")||"200",10));
return()=>clearTimeout(e)
}

}
,[S,b]),(0,t3.useFocusTrap)(S&&w,E),(0,t8.useScrollLock)(S&&v);
let M=(0,el.useStyles)("dialog.root", {
baseClassName:void 0,className:(0,t4.default)(tJ.root,!b&&(j?tJ.dialogVisible:tJ.dialogHidden),d),style:u,noStyle:y
}
),R=(0,t.jsx)(tj.LocalThemeContext.Provider, {
value: {
disableAnimation:b,noStyle:y,scrollLock:v,trapFocus:w,theme:h
}
,children:S&&(0,t.jsxs)(t.Fragment, {
children:[!1===c?null:c??(0,t.jsx)(t6, {

}
),(0,t.jsx)("dialog", {
ref:E,...f,...M,className:M.className,"aria-labelledby":"privacy-settings-title",tabIndex:-1,dir:C,children:(0,t.jsx)("div", {
ref:A,className:(0,t4.default)(tJ.container,!b&&j?tJ.contentVisible:tJ.contentHidden),children:e
}
)
}
)]
}
)
}
);
return N?(0,m.createPortal)(R,document.body):null
}
,t7=Object.assign(( {
open:e,theme:o,noStyle:n,disableAnimation:a,scrollLock:i=!0,trapFocus:s=!0,legalLinks:l
}
)=> {
let c=(0,r.useTheme)(), {
isPrivacyDialogOpen:d
}
=(0,e8.useConsentManager)(),u= {
open:e??d,theme: {
...c.theme,...o
}
,noStyle:n??c.noStyle,disableAnimation:a??c.disableAnimation,scrollLock:i??c.scrollLock,trapFocus:s??c.trapFocus
}
;
return(0,t.jsx)(t9, {
...u,children:(0,t.jsx)(t2, {
noStyle:u.noStyle,legalLinks:l
}
)
}
)
}
, {
Card:tZ,Header:tY,HeaderTitle:tX,HeaderDescription:tQ,Content:t1,Footer:t0,ConsentCustomizationCard:t2,DialogFooter:t0,DialogHeader:tY,DialogHeaderTitle:tX,DialogHeaderDescription:tQ,DialogContent:t1,Overlay:t6,Root:t9
}
);
e.s(["ConsentManagerDialog",0,t7,"default",0,t7],36661),e.i(36661),e.s(["Card",0,tZ,"ConsentCustomizationCard",0,t2,"ConsentManagerDialog",0,t7,"ConsentManagerDialogOverlay",0,t6,"ConsentManagerDialogRoot",0,t9,"Content",0,t1,"DialogContent",0,t1,"DialogFooter",0,t0,"DialogHeader",0,tY,"DialogHeaderDescription",0,tQ,"DialogHeaderTitle",0,tX,"Footer",0,t0,"Header",0,tY,"HeaderDescription",0,tQ,"HeaderTitle",0,tX,"Overlay",0,t6,"Root",0,t9,"default",0,t7],30408)
}
,5440,e=> {
"use strict";
var t=e.i(56242),o=e.i(37094),r=e.i(59163),n=e.i(89207),a=e.i(23321);
let i=new Map,s=new Map;
e.s(["ConsentManagerProvider",0,function( {
children:e,options:l
}
) {
let {
mode:c,backendURL:d,store:u= {

}
,translations:m,react:p= {

}

}
=l, {
theme:f,disableAnimation:g=!1,scrollLock:h=!1,trapFocus:b=!0,colorScheme:y,noStyle:v=!1
}
=p,w=(0,r.useMemo)(()=>"u">typeof window&&!!(("c15t"===c||"offline"===c)&&(d?.includes("c15t.dev")||d?.includes("c15t.cloud")||window.location.hostname.includes("c15t.dev")||window.location.hostname.includes("c15t.cloud"))),[c,d]),x=function( {
mode:e,backendURL:t,endpointHandlers:o,storageConfig:r,enabled:n
}
) {
return`${e}:${t??"default"}:${o?"custom":"none"}:${r?.storageKey??"default"}:${!1===n?"disabled":"enabled"}`
}
( {
mode:c||"c15t",backendURL:d||"/api/c15t",endpointHandlers:"endpointHandlers"in l?l.endpointHandlers:void 0,storageConfig:l.storageConfig,enabled:l.enabled
}
),k=(0,r.useMemo)(()=> {
let e;
return s.get(x)||(e="offline"===c?(0,o.configureConsentManager)( {
mode:"offline",store:u,storageConfig:l.storageConfig
}
):"custom"===c&&"endpointHandlers"in l?(0,o.configureConsentManager)( {
mode:"custom",endpointHandlers:l.endpointHandlers,store:u,storageConfig:l.storageConfig
}
):(0,o.configureConsentManager)( {
mode:"c15t",backendURL:d||"/api/c15t",store:u,storageConfig:l.storageConfig
}
),s.set(x,e),e)
}
,[x,c,d,u,l]),C=(0,r.useMemo)(()=> {
let e=i.get(x);
if(e)return e;
let t=(0,o.createConsentManagerStore)(k, {
unstable_googleTagManager:l.unstable_googleTagManager,config: {
pkg:"@c15t/react",version:"1.8.2",mode:c||"Unknown"
}
,enabled:l.enabled,ignoreGeoLocation:l.ignoreGeoLocation,initialGdprTypes:l.consentCategories,callbacks:l.callbacks,trackingBlockerConfig:l.trackingBlockerConfig,scripts:l.scripts,legalLinks:l.legalLinks,storageConfig:l.storageConfig,user:l.user,overrides:l.overrides,...u,isConsentDomain:w,initialTranslationConfig:m
}
);
return i.set(x,t),t
}
,[x,k,c,l.callbacks,l.unstable_googleTagManager,l.ignoreGeoLocation,l.consentCategories,l.trackingBlockerConfig,l.scripts,l.legalLinks,l.user,l.overrides,u,w,m,l.storageConfig]),[S,j]=(0,r.useState)(()=>C?C.getState(): {

}
),T=(0,r.useRef)(!1);
(0,r.useEffect)(()=> {
if(!C)return;
let e=C.subscribe(j);
if(!T.current) {
let e=C.getState();
(0,r.startTransition)(()=> {
j(t=>t!==e?(T.current=!0,e):(T.current=!0,t))
}
)
}
return e
}
,[C]);
let E=(0,r.useMemo)(()=>( {
theme:f,noStyle:v,disableAnimation:g,scrollLock:h,trapFocus:b,colorScheme:y
}
),[f,v,g,h,b,y]);
(0,r.useEffect)(()=> {
let e=window.matchMedia("(prefers-color-scheme: dark)"),t=document.documentElement.classList.contains("dark"),o=e=> {
document.documentElement.classList.toggle("c15t-dark",e.matches)
}
,r=new MutationObserver(e=> {
for(let t of e)if("attributes"===t.type&&"class"===t.attributeName) {
let e=document.documentElement.classList.contains("dark");
document.documentElement.classList.toggle("c15t-dark",e)
}

}
);
switch(y) {
case"light":document.documentElement.classList.remove("c15t-dark");
break;
case"dark":document.documentElement.classList.add("c15t-dark");
break;
case"system":document.documentElement.classList.toggle("c15t-dark",e.matches),e.addEventListener("change",o);
break;
default:document.documentElement.classList.toggle("c15t-dark",t),r.observe(document.documentElement, {
attributes:!0
}
)
}
return()=> {
e.removeEventListener("change",o),r.disconnect()
}

}
,[y]);
let A=(0,r.useMemo)(()=> {
if(!C)throw Error("Consent store must be initialized before creating context value");
return {
state:S,store:C,manager:k
}

}
,[S,C,k]);
return(0,t.jsx)(n.ConsentStateContext.Provider, {
value:A,children:(0,t.jsx)(a.GlobalThemeContext.Provider, {
value:E,children:e
}
)
}
)
}
,"clearConsentManagerCache",0,function() {
i.clear(),s.clear()
}
],5440)
}
,29237,e=> {
"use strict";
var t=e.i(56242),o=e.i(7284),r=e.i(59163),n=e.i(81619),a=e.i(49027),i=e.i(9081),s=e.i(76754),l= {
"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/css-loader/index.js??ruleSet[1].rules[1].use[1]!builtin:lightningcss-loader??ruleSet[1].rules[1].use[2]!./src/components/cookie-banner/cookie-banner.module.css":function(e,t,o) {
o.d(t, {
A:()=>s
}
);
var r=o("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/css-loader/noSourceMaps.js"),n=o.n(r),a=o("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/css-loader/api.js"),i=o.n(a)()(n());
i.push([e.id,':root{--banner-font-family:system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";--banner-line-height:1.5;--banner-text-size-adjust:100%;--banner-tab-size:4;--banner-border-radius-sm:.3125rem;--banner-border-radius:1.25rem;--banner-max-width:440px;--banner-animation-duration:.2s;--banner-animation-timing:ease-out;--banner-entry-animation:c15t-enter-OSOPL .15s ease-out;--banner-exit-animation:c15t-exit-PbMtf .15s ease-out;--banner-border-width:1px;--banner-shadow:0 16px 32px -12px #0e121b1a;--banner-shadow-dark:0 16px 32px -12px #0e121b1a;--banner-background-color:#fff;--banner-background-color-dark:#171717;--banner-footer-background-color:#f7f7f7;--banner-footer-background-color-dark:#1c1c1c;--banner-text-color:#171717;--banner-text-color-dark:#e6e6e6;--banner-border-color:#ebebeb;--banner-border-color-dark:#333;--banner-title-color:#171717;--banner-title-color-dark:#e6e6e6;--banner-description-color:#5c5c5c;--banner-description-color-dark:#999;--banner-overlay-background-color:#00000080;--banner-overlay-background-color-dark:#00000080}.c15t-root-tnx7V{z-index:999999998;width:100%;font-family:var(--banner-font-family);line-height:var(--banner-line-height);-webkit-text-size-adjust:var(--banner-text-size-adjust);tab-size:var(--banner-tab-size);flex-direction:column;padding:1rem;display:flex;position:fixed}.c15t-bannerVisible-bty7Y{opacity:1;transition:opacity var(--banner-animation-duration)var(--banner-animation-timing),transform var(--banner-animation-duration)cubic-bezier(.34,1.56,.64,1);transform:translateY(0)}.c15t-bannerHidden-kfAtO{opacity:0;transition:opacity var(--banner-animation-duration)var(--banner-animation-timing),transform var(--banner-animation-duration)var(--banner-animation-timing);transform:translateY(50px)}@media (width>=640px){.c15t-root-tnx7V{width:auto;padding:1.5rem}}.c15t-bottomLeft-wv7ez{bottom:0;left:0}.c15t-bottomRight-Oibp8{bottom:0;right:0}.c15t-topLeft-JJ9D6{top:0;left:0}.c15t-topRight-A6dOV{top:0;right:0}.c15t-card-MOqQY{width:100%;max-width:var(--banner-max-width);border-radius:var(--banner-border-radius);border-width:var(--banner-border-width);border-color:var(--banner-border-color);background-color:var(--banner-background-color);box-shadow:var(--banner-shadow);position:relative;overflow:hidden}.c15t-dark .c15t-card-MOqQY{background-color:var(--banner-background-color-dark);border-color:var(--banner-border-color-dark);box-shadow:var(--banner-shadow-dark)}.c15t-card-MOqQY[data-state=open]{animation:var(--banner-entry-animation)}.c15t-card-MOqQY[data-state=closed]{animation:var(--banner-exit-animation)}.c15t-card-MOqQY>:not([hidden])~:not([hidden]){border-top-width:var(--banner-border-width);border-color:var(--banner-border-color)}.c15t-dark .c15t-card-MOqQY>:not([hidden])~:not([hidden]){border-color:var(--banner-border-color-dark)}.c15t-card-MOqQY:focus{outline-offset:2px;outline:none}@keyframes c15t-enter-OSOPL{0%{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}@keyframes c15t-exit-PbMtf{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.95)}}.c15t-rejectButton-qP3hZ,.c15t-acceptButton-zReyG,.c15t-customizeButton-ZjdG0{width:100%}@media (width>=640px){.c15t-rejectButton-qP3hZ,.c15t-acceptButton-zReyG,.c15t-customizeButton-ZjdG0{width:auto}}.c15t-header-X6bpE{color:var(--banner-text-color);flex-direction:column;padding:1rem;display:flex}.c15t-dark .c15t-header-X6bpE{color:var(--banner-text-color-dark)}@media (width>=640px){.c15t-header-X6bpE{padding:1.5rem}}.c15t-header-X6bpE>:not([hidden])~:not([hidden]){--banner-space-y-reverse:0;margin-top:calc(.5rem*calc(1 - var(--banner-space-y-reverse)));margin-bottom:calc(.5rem*var(--banner-space-y-reverse))}.c15t-footer-wS150{background-color:var(--banner-footer-background-color);flex-direction:column;justify-content:space-between;gap:.75rem;padding:1rem 1.25rem;display:flex}.c15t-dark .c15t-footer-wS150{background-color:var(--banner-footer-background-color-dark)}@media (width>=640px){.c15t-footer-wS150{flex-direction:row}}.c15t-footerSubGroup-HbTp3{flex-direction:row;justify-content:space-between;gap:1rem;display:flex}.c15t-footerSubGroup-HbTp3 button{flex-grow:1}.c15t-description-jP5LU{letter-spacing:-.006em;color:var(--banner-description-color);font-size:.875rem;font-weight:400;line-height:1.25rem}.c15t-dark .c15t-description-jP5LU{color:var(--banner-description-color-dark)}.c15t-title-qr_tp{letter-spacing:-.011em;color:var(--banner-title-color);font-size:1rem;font-weight:500;line-height:1.5rem}.c15t-dark .c15t-title-qr_tp{color:var(--banner-title-color-dark)}.c15t-overlay-Y8QYV{background-color:var(--banner-overlay-background-color);z-index:999999997;position:fixed;inset:0}.c15t-overlayVisible-YTJZr{opacity:1;transition:opacity var(--banner-animation-duration)var(--banner-animation-timing)}.c15t-overlayHidden-JeNTf{opacity:0;transition:opacity var(--banner-animation-duration)var(--banner-animation-timing)}.c15t-dark .c15t-overlay-Y8QYV{background-color:var(--banner-overlay-background-color-dark)}',""]),i.locals= {
enter:"c15t-enter-OSOPL",exit:"c15t-exit-PbMtf",root:"c15t-root-tnx7V",bannerVisible:"c15t-bannerVisible-bty7Y",bannerHidden:"c15t-bannerHidden-kfAtO",bottomLeft:"c15t-bottomLeft-wv7ez",bottomRight:"c15t-bottomRight-Oibp8",topLeft:"c15t-topLeft-JJ9D6",topRight:"c15t-topRight-A6dOV",card:"c15t-card-MOqQY",rejectButton:"c15t-rejectButton-qP3hZ",acceptButton:"c15t-acceptButton-zReyG",customizeButton:"c15t-customizeButton-ZjdG0",header:"c15t-header-X6bpE",footer:"c15t-footer-wS150",footerSubGroup:"c15t-footerSubGroup-HbTp3",description:"c15t-description-jP5LU",title:"c15t-title-qr_tp",overlay:"c15t-overlay-Y8QYV",overlayVisible:"c15t-overlayVisible-YTJZr",overlayHidden:"c15t-overlayHidden-JeNTf"
}
;
let s=i
}
,"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/css-loader/api.js":function(e) {
e.exports=function(e) {
var t=[];
return t.toString=function() {
return this.map(function(t) {
var o="",r=void 0!==t[5];
return t[4]&&(o+="@supports (".concat(t[4],") {")),t[2]&&(o+="@media ".concat(t[2]," {")),r&&(o+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),o+=e(t),r&&(o+="}"),t[2]&&(o+="}"),t[4]&&(o+="}"),o
}
).join("")
}
,t.i=function(e,o,r,n,a) {
"string"==typeof e&&(e=[[null,e,void 0]]);
var i= {

}
;
if(r)for(var s=0;
s<this.length;
s++) {
var l=this[s][0];
null!=l&&(i[l]=!0)
}
for(var c=0;
c<e.length;
c++) {
var d=[].concat(e[c]);
r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),o&&(d[2]&&(d[1]="@media ".concat(d[2]," {").concat(d[1],"}")),d[2]=o),n&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=n):d[4]="".concat(n)),t.push(d))
}

}
,t
}

}
,"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/css-loader/noSourceMaps.js":function(e) {
e.exports=function(e) {
return e[1]
}

}
,"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/injectStylesIntoStyleTag.js":function(e) {
var t=[];
function o(e) {
for(var o=-1,r=0;
r<t.length;
r++)if(t[r].identifier===e) {
o=r;
break
}
return o
}
function r(e,r) {
for(var n= {

}
,a=[],i=0;
i<e.length;
i++) {
var s=e[i],l=r.base?s[0]+r.base:s[0],c=n[l]||0,d="".concat(l," ").concat(c);
n[l]=c+1;
var u=o(d),m= {
css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]
}
;
if(-1!==u)t[u].references++,t[u].updater(m);
else {
var p=function(e,t) {
var o=t.domAPI(t);
return o.update(e),function(t) {
t?(t.css!==e.css||t.media!==e.media||t.sourceMap!==e.sourceMap||t.supports!==e.supports||t.layer!==e.layer)&&o.update(e=t):o.remove()
}

}
(m,r);
r.byIndex=i,t.splice(i,0, {
identifier:d,updater:p,references:1
}
)
}
a.push(d)
}
return a
}
e.exports=function(e,n) {
var a=r(e=e||[],n=n|| {

}
);
return function(e) {
e=e||[];
for(var i=0;
i<a.length;
i++) {
var s=o(a[i]);
t[s].references--
}
for(var l=r(e,n),c=0;
c<a.length;
c++) {
var d=o(a[c]);
0===t[d].references&&(t[d].updater(),t.splice(d,1))
}
a=l
}

}

}
,"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/insertBySelector.js":function(e) {
var t= {

}
;
e.exports=function(e,o) {
var r=function(e) {
if(void 0===t[e]) {
var o=document.querySelector(e);
if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try {
o=o.contentDocument.head
}
catch(e) {
o=null
}
t[e]=o
}
return t[e]
}
(e);
if(!r)throw Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
r.appendChild(o)
}

}
,"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/insertStyleElement.js":function(e) {
e.exports=function(e) {
var t=document.createElement("style");
return e.setAttributes(t,e.attributes),e.insert(t,e.options),t
}

}
,"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/setAttributesWithoutAttributes.js":function(e,t,o) {
e.exports=function(e) {
var t=o.nc;
t&&e.setAttribute("nonce",t)
}

}
,"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/styleDomAPI.js":function(e) {
e.exports=function(e) {
if("u"<typeof document)return {
update:function() {

}
,remove:function() {

}

}
;
var t=e.insertStyleElement(e);
return {
update:function(o) {
var r,n,a;
r="",o.supports&&(r+="@supports (".concat(o.supports,") {")),o.media&&(r+="@media ".concat(o.media," {")),(n=void 0!==o.layer)&&(r+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),r+=o.css,n&&(r+="}"),o.media&&(r+="}"),o.supports&&(r+="}"),(a=o.sourceMap)&&"u">typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,t,e.options)
}
,remove:function() {
null===t.parentNode||t.parentNode.removeChild(t)
}

}

}

}
,"../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/styleTagTransform.js":function(e) {
e.exports=function(e,t) {
if(t.styleSheet)t.styleSheet.cssText=e;
else {
for(;
t.firstChild;
)t.removeChild(t.firstChild);
t.appendChild(document.createTextNode(e))
}

}

}

}
,c= {

}
;
function d(e) {
var t=c[e];
if(void 0!==t)return t.exports;
var o=c[e]= {
id:e,exports: {

}

}
;
return l[e](o,o.exports,d),o.exports
}
d.n=e=> {
var t=e&&e.__esModule?()=>e.default:()=>e;
return d.d(t, {
a:t
}
),t
}
,d.d=(e,t)=> {
for(var o in t)d.o(t,o)&&!d.o(e,o)&&Object.defineProperty(e,o, {
enumerable:!0,get:t[o]
}
)
}
,d.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),d.nc=void 0;
var u=d("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/injectStylesIntoStyleTag.js"),m=d.n(u),p=d("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/styleDomAPI.js"),f=d.n(p),g=d("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/insertBySelector.js"),h=d.n(g),b=d("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/setAttributesWithoutAttributes.js"),y=d.n(b),v=d("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/insertStyleElement.js"),w=d.n(v),x=d("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/style-loader/runtime/styleTagTransform.js"),k=d.n(x),C=d("../../node_modules/.pnpm/@rsbuild+core@1.6.1/node_modules/@rsbuild/core/compiled/css-loader/index.js??ruleSet[1].rules[1].use[1]!builtin:lightningcss-loader??ruleSet[1].rules[1].use[2]!./src/components/cookie-banner/cookie-banner.module.css"),S= {

}
;
S.styleTagTransform=k(),S.setAttributes=y(),S.insert=h().bind(null,"head"),S.domAPI=f(),S.insertStyleElement=w(),m()(C.A,S);
let j=C.A&&C.A.locals?C.A.locals:void 0,T=(0,r.forwardRef)(( {
className:e,style:l,noStyle:c,asChild:d,...u
}
,m)=> {
let p, {
showPopup:f
}
=(0,n.useConsentManager)(), {
disableAnimation:g,noStyle:h,scrollLock:b
}
=(0,s.useTheme)(),[y,v]=(0,r.useState)(!1);
(0,r.useEffect)(()=> {
if(f)v(!0);
else if(g)v(!1);
else {
let e=setTimeout(()=> {
v(!1)
}
,Number.parseInt(getComputedStyle(document.documentElement).getPropertyValue("--banner-animation-duration")||"200",10));
return()=>clearTimeout(e)
}

}
,[f,g]);
let w=(0,i.useStyles)("banner.overlay", {
baseClassName:!(h||c)&&j.overlay,className:e,noStyle:h||c
}
);
p=h||c||g?void 0:y?j.overlayVisible:j.overlayHidden;
let x=(0,o.default)(w.className,p);
return(0,a.useScrollLock)(!!(f&&b)),f&&b?(0,t.jsx)("div", {
ref:m,...u,className:x,style: {
...w.style,...l
}
,"data-testid":"cookie-banner-overlay"
}
):null
}
);
var E=e.i(70813),A=e.i(23321),N=e.i(14509);
let _=( {
children:e,className:o,noStyle:r,disableAnimation:n,theme:a,scrollLock:i,trapFocus:s=!0,...l
}
)=>(0,t.jsx)(A.LocalThemeContext.Provider, {
value: {
disableAnimation:n,noStyle:r,theme:a,scrollLock:i,trapFocus:s
}
,children:(0,t.jsx)(M, {
disableAnimation:n,className:o,noStyle:r,...l,children:e
}
)
}
),M=(0,r.forwardRef)(( {
asChild:e,children:o,className:a,style:s,className:l,disableAnimation:c,noStyle:d,...u
}
,m)=> {
let {
showPopup:p,translationConfig:f
}
=(0,n.useConsentManager)(),g=(0,N.useTextDirection)(f.defaultLanguage),[h,b]=(0,r.useState)(!1),[y,v]=(0,r.useState)(!1),[w,x]=(0,r.useState)(200);
(0,r.useEffect)(()=> {
x(Number.parseInt(getComputedStyle(document.documentElement).getPropertyValue("--banner-animation-duration")||"200",10))
}
,[]),(0,r.useEffect)(()=> {
if(p)if(y)b(!0);
else {
let e=setTimeout(()=> {
b(!0),v(!0)
}
,10);
return()=>clearTimeout(e)
}
else if(v(!1),c)b(!1);
else {
let e=setTimeout(()=> {
b(!1)
}
,w);
return()=>clearTimeout(e)
}

}
,[p,c,y,w]);
let k=(0,i.useStyles)("banner.root", {
baseClassName:[j.root,"ltr"===g?j.bottomLeft:j.bottomRight],style:s,className:a||l,noStyle:d
}
),[C,S]=(0,r.useState)(!1);
if((0,r.useEffect)(()=> {
S(!0)
}
,[]),!C)return null;
let A=d?k.className||"":`${k.className||""} ${h?j.bannerVisible:j.bannerHidden}`;
return p?(0,E.createPortal)((0,t.jsxs)(t.Fragment, {
children:[(0,t.jsx)(T, {

}
),(0,t.jsx)("div", {
ref:m,...u,...k,className:A,"data-testid":"cookie-banner-root",dir:g,children:o
}
)]
}
),document.body):null
}
);
M.displayName="CookieBannerRootChildren";
var R=e.i(41730),L=e.i(94822),I=e.i(64433),P=e.i(43711);
let O=(0,r.forwardRef)(( {
children:e,...o
}
,r)=>(0,t.jsx)(L.Box, {
ref:r,baseClassName:j.title,"data-testid":"cookie-banner-title",themeKey:"banner.header.title",...o,children:e
}
));
O.displayName="CookieBannerTitle";
let B=(0,r.forwardRef)(( {
children:e,legalLinks:o,asChild:r,...n
}
,a)=>r?(0,t.jsx)(L.Box, {
ref:a,baseClassName:j.description,"data-testid":"cookie-banner-description",themeKey:"banner.header.description",asChild:r,...n,children:e
}
):(0,t.jsxs)(L.Box, {
ref:a,baseClassName:j.description,"data-testid":"cookie-banner-description",themeKey:"banner.header.description",asChild:r,...n,children:[e,(0,t.jsx)(P.InlineLegalLinks, {
links:o,themeKey:"banner.header.legal-links",testIdPrefix:"cookie-banner-legal-link"
}
)]
}
));
B.displayName="CookieBannerDescription";
let D=(0,r.forwardRef)(( {
children:e,...o
}
,r)=>(0,t.jsx)(L.Box, {
ref:r,baseClassName:j.footer,"data-testid":"cookie-banner-footer",themeKey:"banner.footer",...o,children:e
}
));
D.displayName="CookieBannerFooter";
let V=(0,r.forwardRef)(( {
children:e,...o
}
,n)=> {
let {
trapFocus:a
}
=(0,s.useTheme)(),i=(0,r.useRef)(null),l=n||i,c=!!a;
return(0,R.useFocusTrap)(c,l),(0,t.jsx)(L.Box, {
ref:l,tabIndex:0,baseClassName:j.card,"data-testid":"cookie-banner-card",themeKey:"banner.card","aria-label":o["aria-label"]||"Cookie Banner","aria-modal":c?"true":void 0,role:c?"dialog":void 0,...o,children:e
}
)
}
);
V.displayName="CookieBannerCard";
let z=(0,r.forwardRef)(( {
children:e,...o
}
,r)=>(0,t.jsx)(L.Box, {
ref:r,baseClassName:j.header,"data-testid":"cookie-banner-header",themeKey:"banner.header.root",...o,children:e
}
));
z.displayName="CookieBannerHeader";
let F=(0,r.forwardRef)(( {
children:e,...o
}
,r)=>(0,t.jsx)(L.Box, {
ref:r,baseClassName:j.footerSubGroup,"data-testid":"cookie-banner-footer-sub-group",themeKey:"banner.footer.sub-group",...o,children:e
}
));
F.displayName="CookieBannerFooterSubGroup";
let H=(0,r.forwardRef)(( {
children:e,...o
}
,r)=>(0,t.jsx)(I.ConsentButton, {
ref:r,action:"reject-consent","data-testid":"cookie-banner-reject-button",closeCookieBanner:!0,...o,children:e
}
));
H.displayName="CookieBannerRejectButton";
let $=(0,r.forwardRef)(( {
children:e,...o
}
,r)=>(0,t.jsx)(I.ConsentButton, {
ref:r,action:"open-consent-dialog","data-testid":"cookie-banner-customize-button",...o,children:e
}
));
$.displayName="CookieBannerCustomizeButton";
let U=(0,r.forwardRef)(( {
children:e,...o
}
,r)=> {
let {
noStyle:n
}
=(0,s.useTheme)();
return(0,t.jsx)(I.ConsentButton, {
ref:r,action:"accept-consent",variant:"primary","data-testid":"cookie-banner-accept-button",closeCookieBanner:!0,noStyle:n,...o,children:e
}
)
}
);
U.displayName="CookieBannerAcceptButton";
var K=e.i(29756),W=r;
class G extends W.Component {
constructor(e) {
super(e),this.state= {
hasError:!1,error:null,errorInfo:null
}

}
static getDerivedStateFromError(e) {
return {
hasError:!0,error:e,errorInfo:null
}

}
componentDidCatch(e,t) {
this.setState( {
error:e,errorInfo:t
}
)
}
render() {
return this.state.hasError?"function"==typeof this.props.fallback?this.props.fallback(this.state.error,this.state.errorInfo):this.props.fallback:this.props.children
}

}
let q=Object.assign(( {
theme:e,noStyle:o,disableAnimation:r,scrollLock:n,trapFocus:a=!0,title:i,description:l,rejectButtonText:c,customizeButtonText:d,acceptButtonText:u,legalLinks:m
}
)=> {
let {
cookieBanner:p,common:f
}
=(0,K.useTranslations)(),g=(0,s.useTheme)(),h= {
theme: {
...g.theme,...e
}
,noStyle:o??g.noStyle,disableAnimation:r??g.disableAnimation,scrollLock:n??g.scrollLock,trapFocus:a??g.trapFocus
}
;
return(0,t.jsx)(G, {
fallback:(0,t.jsx)("div", {
children:"Something went wrong with the Cookie Banner."
}
),children:(0,t.jsx)(_, {
...h,children:(0,t.jsxs)(V, {
"aria-label":p.title,children:[(0,t.jsxs)(z, {
children:[(0,t.jsx)(O, {
children:i||p.title
}
),(0,t.jsx)(B, {
legalLinks:m,children:l||p.description
}
)]
}
),(0,t.jsxs)(D, {
children:[(0,t.jsxs)(F, {
children:[(0,t.jsx)(I.ConsentButton, {
action:"reject-consent",closeCookieBanner:!0,themeKey:"banner.footer.reject-button","data-testid":"cookie-banner-reject-button",children:c||f.rejectAll
}
),(0,t.jsx)(I.ConsentButton, {
action:"accept-consent",closeCookieBanner:!0,themeKey:"banner.footer.accept-button","data-testid":"cookie-banner-accept-button",children:u||f.acceptAll
}
)]
}
),(0,t.jsx)(I.ConsentButton, {
action:"open-consent-dialog",variant:"primary",closeCookieBanner:!0,themeKey:"banner.footer.customize-button","data-testid":"cookie-banner-customize-button",children:d||f.customize
}
)]
}
)]
}
)
}
)
}
)
}
, {
Root:_,Card:V,Header:z,Title:O,Description:B,Footer:D,FooterSubGroup:F,RejectButton:H,CustomizeButton:$,AcceptButton:U,Overlay:T,Content:V,Actions:F
}
);
e.s(["CookieBanner",0,q,"default",0,q],55780),e.i(55780),e.s(["AcceptButton",0,U,"Card",0,V,"CookieBanner",0,q,"CookieBannerAcceptButton",0,U,"CookieBannerCard",0,V,"CookieBannerCustomizeButton",0,$,"CookieBannerDescription",0,B,"CookieBannerFooter",0,D,"CookieBannerFooterSubGroup",0,F,"CookieBannerHeader",0,z,"CookieBannerOverlay",0,T,"CookieBannerRejectButton",0,H,"CookieBannerRoot",0,_,"CookieBannerTitle",0,O,"CustomizeButton",0,$,"Description",0,B,"Footer",0,D,"FooterSubGroup",0,F,"Header",0,z,"Overlay",0,T,"RejectButton",0,H,"Root",0,_,"Title",0,O,"default",0,q],29237)
}
,74658,e=> {
"use strict";
e.i(79789);
var t=e.i(56242),o=e.i(81619),r=e.i(59163);
function n( {
children:e,callbacks:t,scripts:a
}
) {
let {
setCallback:i,setScripts:s
}
=(0,o.useConsentManager)(),l=(0,r.useRef)(t),c=(0,r.useRef)(a),d=(0,r.useRef)( {
callbacks:!1,scripts:!1
}
);
return(0,r.useEffect)(()=> {
if(!d.current.callbacks&&l.current) {
for(let[e,t]of Object.entries(l.current))i(e,t);
d.current.callbacks=!0
}

}
,[i]),(0,r.useEffect)(()=> {
!d.current.scripts&&c.current&&(s(c.current),d.current.scripts=!0)
}
,[s]),e
}
let a= {
functionality_storage:"denied",security_storage:"denied",analytics_storage:"denied",ad_storage:"denied",ad_user_data:"denied",ad_personalization:"denied",personalization_storage:"denied"
}
,i= {
necessary:["security_storage"],functionality:["functionality_storage"],measurement:["analytics_storage"],marketing:["ad_storage","ad_user_data","ad_personalization"],experience:["personalization_storage"]
}
;
function s(e) {
let t= {
...a
}
;
for(let o of Object.keys(e)) {
let r=e[o];
for(let e of i[o])t[e]=r?"granted":"denied"
}
return t
}
e.s(["ConsentManagerClient",0,()=> {
let {
setSelectedConsent:e
}
=(0,o.useConsentManager)();
return(0,r.useLayoutEffect)(()=> {
e("measurement",!0)
}
,[]),(0,t.jsx)(n, {
scripts:[function( {
id:e,script:t,category:o
}
) {
return {
...t,id:t?.id?t.id:"gtag",src:t?.src?t.src:`https://www.googletagmanager.com/gtag/js?id=${e}`,category:o,async:t?.async??!0,persistAfterConsentRevoked:!0,alwaysLoad:!0,onBeforeLoad:( {
consents:o,elementId:r,...n
}
)=> {
let i=a;
o&&(i=s(o));
let l=document.createElement("script");
if(l.id=`${r}-init`,l.textContent=`
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag('consent', 'default', {
      ...${JSON.stringify(i)},
    });
 		window.gtag('js', new Date());
		window.gtag('config', '${e}');
  `,!document.head)throw Error("Document head is not available for script injection");
document.head.appendChild(l),t?.onBeforeLoad&&t.onBeforeLoad( {
consents:o,elementId:r,...n
}
)
}
,onConsentChange(e) {
window.gtag&&window.gtag("consent","update",s(e.consents)),t?.onConsentChange&&t.onConsentChange(e)
}

}

}
( {
id:"G-1DQN0FRLSK",category:"measurement"
}
)]
}
)
}
],74658)
}
,24491,e=> {
"use strict";
var t=e.i(56242);
e.i(48490);
var o=e.i(1855),r=e.i(7284),n=e.i(69348),a=e.i(69235),i=e.i(78164),s=e.i(59163),l=e.i(41167),c=e.i(63429),d=e.i(99084),u=e.i(23023),m=e.i(39842),p=e.i(46368);
e.s(["Footer",0,( {
global:e,links:f=[]
}
)=> {
let g=(0,s.useRef)(null),h=(0,o.useMediaQuery)("(min-width: 768px)"),b=e.legalPages, {
scrollYProgress:y
}
=(0,a.useScroll)( {
target:g,offset:["start end","end end"]
}
),v=(0,i.useTransform)(y,[0,1],[-200,0]),w=(0,i.useTransform)(y,[0,.75,1],[0,0,1]);
return(0,t.jsx)("footer", {
ref:g,className:"relative w-full overflow-clip",children:(0,t.jsxs)(n.motion.div, {
className:(0,r.default)("relative w-full","bg-pink text-white","","lg:h-[60rem]"),style: {
y:v
}
,children:[(0,t.jsxs)("div", {
className:"absolute inset-0 size-full",children:[(0,t.jsx)(u.Video, {
video: {
url:"https://static.ext.waabi.ai/Waabi_System_LightTunnel_1.mp4"
}
,useObjectURL:!1,autoPlay:!0,className:"size-full object-fill"
}
),(0,t.jsx)(l.Client, {
children:h&&(0,t.jsx)(c.Canvas, {
targetRef:g
}
)
}
)]
}
),(0,t.jsxs)(n.motion.div, {
className:"relative flex size-full flex-col justify-between gap-64 pt-60 pb-30 lg:gap-0 lg:pt-80 lg:pb-80",style: {
opacity:w
}
,children:[(0,t.jsxs)("div", {
className:(0,r.default)("w-calc relative flex flex-col gap-30 lg:flex-row lg:justify-between lg:gap-0"),children:[(0,t.jsx)("div", {
className:(0,r.default)("flex w-full flex-col gap-30 lg:w-[68.4rem] lg:gap-32"),children:(0,t.jsxs)("div", {
className:(0,r.default)("flex flex-col gap-16"),children:[(0,t.jsx)("h2", {
className:(0,r.default)("text-[2.4rem] leading-[110%] tracking-[-0.072rem] text-balance md:max-w-[40%] md:text-[4rem] md:tracking-[-0.12rem]"),dangerouslySetInnerHTML: {
__html:(0,p.sanitizeText)(e?.headline)
}

}
),(0,t.jsx)("div", {
className:(0,r.default)("w-full"),children:(0,t.jsxs)("p", {
className:"font-neue text-[1.4rem] leading-[140%] tracking-[0.028rem] md:text-[1.5rem] md:tracking-[0.015rem]",children:[e?.paragraph,(0,t.jsx)("br", {

}
),e?.emails.map((o,n)=>(0,t.jsxs)(s.Fragment, {
children:[(0,t.jsx)("a", {
href:`mailto:${o.url}`,className:(0,r.default)("text-current/60 underline decoration-solid","underline-offset-auto transition-colors hover:text-current"),children:o.url
}
,o.id),n<e?.emails.length-1&&(0,t.jsx)("span", {
className:"px-6 text-current/60",children:"|"
}
)]
}
,o.id))]
}
)
}
)]
}
)
}
),(0,t.jsxs)("div", {
className:(0,r.default)("flex w-full flex-col gap-12 lg:w-[32.5rem] lg:gap-24"),children:[(0,t.jsx)("div", {
className:(0,r.default)("type-s-11 md:type-s-12 text-current/60"),children:"About us"
}
),(0,t.jsx)("nav", {
className:(0,r.default)("flex flex-col gap-4"),children:(0,t.jsx)("ul", {
children:f.map(e=>(0,t.jsx)("li", {
children:(0,t.jsx)(d.Link, {
route:e.href,href:(0,m.getInternalLink)(e.link),className:(0,r.default)("type-z-20 inline-flex","transition-colors hover:text-current/80"),children:e.label
}
)
}
,e.label))
}
)
}
)]
}
),(0,t.jsxs)("div", {
className:(0,r.default)("flex items-start gap-12"),children:[(0,t.jsx)(d.Link, {
href:"https://www.linkedin.com/company/waabi/",className:(0,r.default)("h-[3.6rem] w-[3.6rem] rounded-full bg-white text-black","lg:h-[5rem] lg:w-[5rem]","flex cursor-pointer items-center justify-center transition-colors"),children:(0,t.jsx)("svg", {
xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:(0,t.jsx)("path", {
d:"M9.26338 0H2.73662C2.01082 0 1.31475 0.288321 0.801536 0.801536C0.288321 1.31475 0 2.01082 0 2.73662V9.26338C0 9.98918 0.288321 10.6852 0.801536 11.1985C1.31475 11.7117 2.01082 12 2.73662 12H9.26338C9.98918 12 10.6852 11.7117 11.1985 11.1985C11.7117 10.6852 12 9.98918 12 9.26338V2.73662C12 2.01082 11.7117 1.31475 11.1985 0.801536C10.6852 0.288321 9.98918 0 9.26338 0ZM4.05723 9.68739C4.05916 9.72088 4.05422 9.75442 4.04272 9.78594C4.03121 9.81745 4.01339 9.84629 3.99034 9.87067C3.96728 9.89504 3.93949 9.91445 3.90866 9.9277C3.87784 9.94094 3.84463 9.94775 3.81108 9.94769H2.71569C2.64964 9.94608 2.58685 9.91862 2.54082 9.87121C2.49479 9.8238 2.4692 9.76023 2.46954 9.69415V5.13846C2.46863 5.10557 2.47433 5.07283 2.4863 5.04218C2.49826 5.01153 2.51625 4.98359 2.5392 4.96001C2.56215 4.93643 2.58959 4.91769 2.6199 4.9049C2.65022 4.89211 2.68279 4.88553 2.71569 4.88554H3.81108C3.84398 4.88553 3.87655 4.89211 3.90687 4.9049C3.93718 4.91769 3.96462 4.93643 3.98757 4.96001C4.01052 4.98359 4.02851 5.01153 4.04047 5.04218C4.05244 5.07283 4.05814 5.10557 4.05723 5.13846V9.68739ZM3.24308 3.92738C3.12448 3.9265 3.00723 3.90226 2.898 3.85605C2.78877 3.80985 2.68972 3.74258 2.60649 3.65809C2.52326 3.57361 2.45748 3.47355 2.41292 3.36365C2.36836 3.25374 2.34588 3.13613 2.34677 3.01754C2.34766 2.89894 2.3719 2.78169 2.4181 2.67246C2.46431 2.56324 2.53157 2.46418 2.61606 2.38095C2.70055 2.29772 2.8006 2.23195 2.91051 2.18738C3.02041 2.14282 3.13802 2.12034 3.25662 2.12123C3.49201 2.12889 3.71509 2.22823 3.87827 2.39807C4.04144 2.5679 4.13178 2.79478 4.13002 3.03029C4.12825 3.26581 4.03451 3.49131 3.86881 3.65868C3.70311 3.82604 3.47856 3.92203 3.24308 3.92615M9.89969 9.68C9.8994 9.74218 9.87499 9.80182 9.8316 9.84636C9.78821 9.8909 9.72923 9.91686 9.66708 9.91877H8.51077C8.44851 9.91685 8.38944 9.89081 8.34603 9.84614C8.30262 9.80147 8.27828 9.74167 8.27815 9.67939V7.57231C8.27815 7.25785 8.37415 6.20431 7.44369 6.20431C6.71815 6.20431 6.57477 6.94277 6.54708 7.27138V9.72738C6.54711 9.78978 6.52284 9.84973 6.47941 9.89453C6.43599 9.93933 6.37682 9.96547 6.31446 9.96739H5.19262C5.12907 9.96722 5.06818 9.94186 5.02331 9.89687C4.97843 9.85188 4.95323 9.79093 4.95323 9.72738V5.11631C4.95515 5.05394 4.98128 4.99478 5.02608 4.95136C5.07089 4.90793 5.13084 4.88366 5.19323 4.88369H6.31446C6.37685 4.88366 6.43681 4.90793 6.48161 4.95136C6.52641 4.99478 6.55254 5.05394 6.55446 5.11631V5.51323C6.71817 5.27361 6.9442 5.08324 7.20816 4.96265C7.47212 4.84205 7.764 4.79582 8.05231 4.82892C9.92 4.82892 9.91323 6.57354 9.91323 7.56554L9.89969 9.68Z",fill:"currentColor"
}
)
}
)
}
),(0,t.jsx)(d.Link, {
href:"https://www.youtube.com/channel/UCNJWh6U6vfTz77SJCeWZloQ",className:(0,r.default)("h-[3.6rem] w-[3.6rem] rounded-full bg-white text-black","lg:h-[5rem] lg:w-[5rem]","flex cursor-pointer items-center justify-center transition-colors"),children:(0,t.jsxs)("svg", {
xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:[(0,t.jsx)("path", {
d:"M8.05705 3.2002C13.7142 3.2002 13.7142 3.2002 13.7142 7.6002C13.7142 12.0002 13.7142 12.0002 8.05705 12.0002C2.3999 12.0002 2.3999 12.0002 2.3999 7.6002C2.3999 3.2002 2.3999 3.2002 8.05705 3.2002Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"
}
),(0,t.jsx)("path", {
d:"M6.80029 5.40039L10.5717 7.60039L6.80029 9.80039V5.40039Z",fill:"white"
}
)]
}
)
}
),(0,t.jsx)(d.Link, {
href:"https://x.com/waabi_ai?lang=en",className:(0,r.default)("h-[3.6rem] w-[3.6rem] rounded-full bg-white text-black","lg:h-[5rem] lg:w-[5rem]","flex cursor-pointer items-center justify-center transition-colors"),children:(0,t.jsx)("svg", {
xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:(0,t.jsx)("path", {
d:"M11.1953 1.59961C12.9622 1.59961 14.3945 3.03195 14.3945 4.79883V11.1973C14.3945 12.9641 12.9622 14.3965 11.1953 14.3965H4.79688C3.03 14.3965 1.59766 12.9641 1.59766 11.1973V4.79883C1.59766 3.03195 3.03 1.59961 4.79688 1.59961H11.1953ZM4.86133 3.64844C4.75391 3.64861 4.64755 3.67116 4.5498 3.71387L4.45508 3.7627C4.36358 3.81869 4.28482 3.89327 4.22363 3.98047L4.16895 4.07129C4.1036 4.19843 4.07375 4.34179 4.08398 4.48438C4.09432 4.62692 4.14366 4.76443 4.22656 4.88086L6.86035 8.57324L4.38379 11.5254C4.20684 11.7369 4.2341 12.0521 4.44531 12.2295C4.63029 12.3847 4.89501 12.3826 5.07715 12.2383L5.15039 12.168L7.45996 9.41504L9.31836 12.0195V12.0186C9.3904 12.1197 9.48538 12.2028 9.5957 12.2598C9.70602 12.3166 9.82903 12.3456 9.95312 12.3457V12.3467H11.1328C11.2757 12.3465 11.4161 12.3068 11.5381 12.2324C11.66 12.1579 11.7597 12.0508 11.8252 11.9238C11.8906 11.7967 11.9193 11.6534 11.9092 11.5107C11.8989 11.3681 11.8495 11.2308 11.7666 11.1143L9.13184 7.4209L11.6094 4.46973C11.7869 4.25821 11.7593 3.94314 11.5479 3.76562C11.3363 3.58821 11.0212 3.61565 10.8438 3.82715L8.5332 6.58008L6.67578 3.97559C6.60366 3.87436 6.50794 3.7923 6.39746 3.73535C6.31457 3.69264 6.2249 3.66531 6.13281 3.6543L6.04004 3.64844H4.86133ZM5.92676 4.64844L8.09375 7.68652L10.7051 11.3467H10.0674L7.89941 8.30762L5.28906 4.64844H5.92676Z",fill:"currentColor"
}
)
}
)
}
)]
}
)]
}
),(0,t.jsxs)("div", {
className:(0,r.default)("w-calc relative flex flex-col gap-30 lg:flex-row lg:items-end lg:justify-between lg:gap-0"),children:[(0,t.jsx)("div", {
className:(0,r.default)("order-1 flex h-[8rem] w-full items-center justify-start lg:order-2 lg:h-[14rem] lg:w-[52.6rem] lg:justify-end"),children:(0,t.jsx)("svg", {
xmlns:"http://www.w3.org/2000/svg",width:"300",height:"80",viewBox:"0 0 526 140",fill:"none",className:"lg:h-[14rem] lg:w-[52.6rem]",children:(0,t.jsx)("path", {
d:"M28.2525 140C45.5279 140 55.7852 129.59 59.5641 110.564L68.0219 66.0513C68.5618 63.1795 70.1813 61.0256 72.7007 61.0256C75.22 61.0256 76.8396 63.1795 77.3794 66.0513L85.8372 110.564C89.6161 129.59 99.8734 140 117.149 140C133.165 140 145.401 129.231 145.401 109.308V39.4872H120.208V110.564C120.208 115.41 118.948 117.564 116.069 117.564C113.91 117.564 111.93 115.769 111.03 110.564L102.753 67.3077C99.1536 48.2821 88.1765 38.9487 72.7007 38.9487C57.4047 38.9487 46.2477 48.2821 42.6486 67.3077L34.3709 110.564C33.2911 115.769 31.4916 117.564 29.3322 117.564C26.453 117.564 25.1933 115.41 25.1933 110.564V39.4872H0V109.308C0 129.231 12.2367 140 28.2525 140ZM203.886 140C219.002 140 227.999 134.436 233.938 126.359V138.205H259.131V88.8462C259.131 52.0513 233.938 37.6923 208.744 37.6923C183.551 37.6923 157.998 52.0513 157.998 88.8462C157.998 125.641 183.551 140 203.886 140ZM208.744 120.256C194.348 120.256 183.551 111.103 183.551 88.8462C183.551 66.9487 193.988 57.4359 208.744 57.4359C223.86 57.4359 233.938 67.1282 233.938 88.8462C233.938 110.923 223.141 120.256 208.744 120.256ZM316.716 140C331.832 140 340.829 134.436 346.768 126.359V138.205H371.961V88.8462C371.961 52.0513 346.768 37.6923 321.574 37.6923C296.381 37.6923 270.828 52.0513 270.828 88.8462C270.828 125.641 296.381 140 316.716 140ZM321.754 120.256C307.358 120.256 296.561 111.103 296.561 88.8462C296.561 66.9487 306.998 57.4359 321.754 57.4359C336.87 57.4359 346.948 67.1282 346.948 88.8462C346.948 110.923 336.151 120.256 321.754 120.256ZM434.764 120.256C419.648 120.256 409.571 110.564 409.571 88.8462C409.571 66.7692 420.368 57.4359 434.764 57.4359C449.16 57.4359 459.958 66.5897 459.958 88.8462C459.958 110.744 449.52 120.256 434.764 120.256ZM434.944 140C460.138 140 485.691 125.641 485.691 88.8462C485.691 52.0513 460.138 37.6923 439.803 37.6923C424.687 37.6923 415.689 43.2564 409.751 51.3333V3.58974H384.558V88.8462C384.558 125.641 409.751 140 434.944 140ZM498.287 138.205H523.481V39.4872H498.287V138.205ZM510.884 30.3333C520.062 30.3333 526 24.7692 526 15.0769C526 5.92308 520.422 0 510.884 0C501.527 0 495.588 5.5641 495.588 15.0769C495.588 24.4103 501.167 30.3333 510.884 30.3333Z",fill:"currentColor"
}
)
}
)
}
),(0,t.jsxs)("div", {
className:(0,r.default)("order-2 flex flex-col gap-8 lg:order-1"),children:[(0,t.jsxs)("div", {
className:(0,r.default)("type-s-11 lg:type-s-11 md:type-s-12 text-current/60"),children:["© ",new Date().getFullYear()," Waabi. All Rights Reserved."]
}
),b.length>0&&(0,t.jsx)("div", {
className:(0,r.default)("type-s-11 lg:type-s-11 md:type-s-12 flex gap-12 lg:gap-24"),children:b.map(e=>(0,t.jsx)("a", {
href:e.url,className:"transition-colors hover:text-current/80",children:e.label
}
,e.id))
}
)]
}
)]
}
)]
}
)]
}
)
}
)
}
])
}
,88489,e=> {
"use strict";
var t=e.i(56242);
e.i(48490);
var o=e.i(1855),r=e.i(7284),n=e.i(69348),a=e.i(69235),i=e.i(44637),s=e.i(59163);
let l=( {
isOpen:e,setIsOpen:o
}
)=>(0,t.jsx)(n.motion.button, {
layout:!0,name:"Menu","aria-label":"Menu",onClick:()=>o(!e),className:(0,r.clsx)("flex-center mt-[0.95rem] h-36 w-36 rounded-full"),children:(0,t.jsxs)(n.motion.svg, {
xmlns:"http://www.w3.org/2000/svg",width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",children:[(0,t.jsx)(n.motion.rect, {
animate: {
y:3*!!e
}
,width:"12",height:"2",rx:"1",fill:"currentColor"
}
),(0,t.jsx)(n.motion.rect, {
animate: {
y:e?3:6
}
,width:"12",height:"2",rx:"1",fill:"currentColor"
}
)]
}
)
}
);
var c=e.i(27686),d=e.i(64204),u=e.i(99084),m=e.i(39842),p=e.i(30397);
let f=[],g=( {
isOpen:e,links:a=[]
}
)=> {
let s=(0,o.useMediaQuery)("(min-width: 640px)"),l=(0,i.usePathname)();
return(0,t.jsx)(c.AnimatePresence, {
children:e&&(0,t.jsx)(n.motion.nav, {
layout:"size",initial: {
opacity:0
}
,animate: {
opacity:1,transition: {
...p.config,delay:.15*!!e
}

}
,className:(0,r.default)("relative flex h-full w-[100vw] flex-col sm:w-full"),children:(0,t.jsx)(n.motion.div, {
layout:"size",initial: {
opacity:0,height:0
}
,animate: {
opacity:1,height:"auto",transition: {
...p.config,delay:.15*!!e
}

}
,exit: {
opacity:0,transition: {
...p.config,duration:0
}

}
,className:(0,r.default)("relative flex size-full flex-col overflow-clip","sm:bg-black/15 sm:p-1"),style: {
borderRadius:12*!!s
}
,children:(0,t.jsx)(n.motion.div, {
layout:"size",className:"relative flex w-full bg-white",style: {
borderRadius:11*!!s
}
,children:(0,t.jsxs)(n.motion.div, {
layout:"size",initial: {
opacity:0,scale:1.1,filter:"blur(10px)"
}
,animate: {
opacity:1,scale:1,filter:"blur(0px)",transition: {
...p.config,delay:.15*!!e
}

}
,exit: {
opacity:0,scale:1,filter:"blur(10px)"
}
,className:"flex h-[calc(100svh-10.1rem)] w-full flex-col justify-between border-t-1 border-t-black/15 px-40 py-20 sm:h-auto sm:gap-48 sm:border-t-0 sm:px-24",children:[(0,t.jsxs)("div", {
className:"flex flex-col gap-20",children:[(0,t.jsx)("div", {
className:"type-s-11 md:type-s-12 text-current/50",children:"Menu"
}
),(0,t.jsx)("div", {
className:"flex flex-col gap-12",children:a.map(e=> {
var o;
let n=e.image.image,a=(0,m.getInternalLink)(e.link),i=(o=n.width, {
width:150,height:Math.round(150*(n.height/o))
}
),s=l===a||l.startsWith(a)&&"/"!==a;
return(0,t.jsxs)(u.Link, {
route:a,href:a,target:a.includes("https://")?"_blank":"_self",className:"group flex h-50 w-[26rem] items-center gap-12",children:[(0,t.jsx)("div", {
className:"relative h-43 w-65 shrink-0 overflow-clip rounded-lg bg-current/20 sm:h-50 sm:w-75",children:(0,t.jsx)(d.default, {
src:n.src,alt:e.label,width:i.width,height:i.height,priority:!1,loading:"lazy",decoding:"async",className:"h-full w-full object-cover"
}
)
}
),(0,t.jsx)("span", {
className:(0,r.default)("group-hover:text-pink text-[3.4rem] leading-[110%] font-normal tracking-[-0.102rem]",s&&"text-pink"),children:e.label
}
)]
}
,e.id)
}
)
}
)]
}
),f.length>0&&(0,t.jsx)("div", {
className:"flex items-center gap-12",children:f.map((e,o)=>(0,t.jsx)("a", {
href:e.href,className:"type-s-10 underlined text-current/50",children:e.label
}
,e.label))
}
)]
}
)
}
)
}
)
}
)
}
)
}
;
var h=e.i(3505),b=e.i(85383);
e.s(["Header",0,( {
links:e=[]
}
)=> {
let c=(0,i.usePathname)(), {
scrollYProgress:d
}
=(0,a.useScroll)(),[m,f]=(0,s.useState)(!1),[y,v]=(0,s.useState)(!1),w=(0,o.useMediaQuery)("(pointer: fine)"),x=(0,o.useMediaQuery)("(min-width: 640px)"),k=(0,h.useApp)("isNewsBannerDisplayed"),C=(0,h.useApp)("section"),S=(0,h.useApp)("subMenuSections"),j=(0,h.useApp)("subMenuPageName");
(0,s.useEffect)(()=> {
v(!1)
}
,[c]);
let T=(0,s.useMemo)(()=>j||("/"===c?"Home":c.split("/")[1].replace("-"," ")),[c,j]),E=S.length>0;
return(0,t.jsxs)(n.motion.header, {
layoutRoot:"size",initial:!1,animate: {
y:42*!!k
}
,className:(0,r.default)("css-header fixed right-0 left-0 z-500 mx-auto flex flex-col items-center justify-center sm:top-34 sm:w-338 sm:gap-10",y?"top-0 w-full":"top-24 w-[calc(100vw-2.4rem)]"),onPointerEnter:()=> {
w&&(f(E),v(!0))
}
,onPointerLeave:()=> {
w&&(f(!1),v(!1))
}
,children:[(0,t.jsxs)(n.motion.div, {
layout:"size",className:(0,r.default)("relative flex w-full items-start overflow-clip sm:bg-black/15 sm:p-1",y?"h-auto sm:h-55":"bg-black/15 p-1",m?"h-auto sm:h-auto":"h-55"),style: {
borderRadius:x?12:12*!y
}
,children:[(0,t.jsx)(n.motion.div, {
layout:"size",className:(0,r.default)("relative h-full w-full bg-white",y?"pt-24 pb-24 sm:pt-0 sm:pb-0":"pt-0"),style: {
borderRadius:x?11:11*!y
}
,children:(0,t.jsx)(n.motion.div, {
layout:"size",className:(0,r.default)("item-start relative flex h-full w-full",y?"pr-25 pl-40 sm:pr-13 sm:pl-28":"pr-13 pl-28"),children:(0,t.jsxs)(n.motion.div, {
layout:"size",className:"flex w-full justify-between",children:[(0,t.jsxs)(n.motion.div, {
layout:"size",className:"flex gap-25 [@media(max-width:320px)]:gap-15",children:[(0,t.jsx)(u.MotionLink, {
layout:"position",route:"/",href:"/","aria-label":"Waabi Logo",className:"flex h-53 w-auto items-center",children:(0,t.jsxs)(n.motion.svg, {
layout:!0,xmlns:"http://www.w3.org/2000/svg",width:"75",height:"23",viewBox:"0 0 75 23",fill:"none",className:"mt-[-0.4rem] h-auto w-56 sm:w-75",children:[(0,t.jsx)("path", {
d:"M4.0284 22.5C6.49162 22.5 7.95416 21.0128 8.49299 18.2949L9.69894 11.9359C9.77592 11.5257 10.0068 11.218 10.3661 11.218C10.7253 11.218 10.9562 11.5257 11.0332 11.9359L12.2391 18.2949C12.778 21.0128 14.2405 22.5 16.7037 22.5C18.9873 22.5 20.7321 20.9616 20.7321 18.1154V8.14104H17.1399V18.2949C17.1399 18.9872 16.9603 19.2949 16.5498 19.2949C16.2419 19.2949 15.9596 19.0385 15.8313 18.2949L14.651 12.1154C14.1379 9.39745 12.5727 8.06412 10.3661 8.06412C8.18508 8.06412 6.59425 9.39745 6.08108 12.1154L4.90079 18.2949C4.74684 19.0385 4.49025 19.2949 4.18235 19.2949C3.77181 19.2949 3.5922 18.9872 3.5922 18.2949V8.14104H0V18.1154C0 20.9616 1.74478 22.5 4.0284 22.5Z",fill:"currentColor"
}
),(0,t.jsx)(n.motion.path, {
d:"M29.0713 22.5C31.2266 22.5 32.5095 21.7051 33.3562 20.5513V22.2436H36.9484V15.1923C36.9484 9.9359 33.3562 7.88462 29.764 7.88462C26.1718 7.88462 22.5283 9.9359 22.5283 15.1923C22.5283 20.4487 26.1718 22.5 29.0713 22.5ZM29.764 19.6795C27.7114 19.6795 26.1718 18.3718 26.1718 15.1923C26.1718 12.0641 27.66 10.7051 29.764 10.7051C31.9194 10.7051 33.3562 12.0897 33.3562 15.1923C33.3562 18.3462 31.8167 19.6795 29.764 19.6795ZM45.1592 22.5C47.3145 22.5 48.5974 21.7051 49.4442 20.5513V22.2436H53.0364V15.1923C53.0364 9.9359 49.4442 7.88462 45.852 7.88462C42.2598 7.88462 38.6162 9.9359 38.6162 15.1923C38.6162 20.4487 42.2598 22.5 45.1592 22.5ZM45.8776 19.6795C43.8249 19.6795 42.2854 18.3718 42.2854 15.1923C42.2854 12.0641 43.7736 10.7051 45.8776 10.7051C48.0329 10.7051 49.4698 12.0897 49.4698 15.1923C49.4698 18.3462 47.9303 19.6795 45.8776 19.6795ZM61.9912 19.6795C59.8359 19.6795 58.399 18.2949 58.399 15.1923C58.399 12.0385 59.9385 10.7051 61.9912 10.7051C64.0439 10.7051 65.5834 12.0128 65.5834 15.1923C65.5834 18.3205 64.0952 19.6795 61.9912 19.6795ZM62.0169 22.5C65.6091 22.5 69.2526 20.4487 69.2526 15.1923C69.2526 9.9359 65.6091 7.88462 62.7096 7.88462C60.5543 7.88462 59.2714 8.67949 58.4247 9.83333V3.01282H54.8325V15.1923C54.8325 20.4487 58.4247 22.5 62.0169 22.5ZM71.0487 22.2436H74.6409V8.14103H71.0487V22.2436ZM72.8448 6.83333C74.1534 6.83333 75.0001 6.03846 75.0001 4.65385C75.0001 3.34615 74.2047 2.5 72.8448 2.5C71.5105 2.5 70.6638 3.29487 70.6638 4.65385C70.6638 5.98718 71.4592 6.83333 72.8448 6.83333Z",fill:"currentColor",animate: {
opacity:+!m,transition: {
...p.config,duration:.1,delay:.1*!m
}

}

}
)]
}
)
}
),(0,t.jsxs)(n.motion.div, {
layout:"size",className:"relative mt-[1.4rem] mb-[1.4rem] flex h-fit w-156 flex-col [@media(max-width:320px)]:mt-[1.7rem] [@media(max-width:320px)]:mb-[1.7rem]",children:[E&&m&&(0,t.jsx)(n.motion.div, {
layout:"size",initial: {
opacity:0
}
,animate: {
opacity:1,transition: {
...p.config,delay:.1
}

}
,exit: {
opacity:0
}
,className:"absolute top-6 -left-25 h-[calc(100%-1.2rem)] w-2 bg-black/15",children:(0,t.jsx)(n.motion.div, {
style: {
scaleY:d
}
,className:"bg-pink absolute top-0 left-0 size-full origin-top"
}
)
}
),(0,t.jsx)(n.motion.span, {
layout:"position",className:"font-neue inline-flex text-[1.5rem] leading-[160%] tracking-[0.015rem] capitalize [@media(max-width:320px)]:text-[1.25rem]",children:T
}
),E&&m&&(0,t.jsx)("nav", {
className:"flex",children:(0,t.jsx)("ul", {
className:"flex flex-col",children:S.map((e,o)=> {
let r=(0,b.slugify)(C)===(0,b.slugify)(e);
return(0,t.jsx)(n.motion.li, {
layout:"position",className:"flex",children:(0,t.jsx)(u.MotionLink, {
href:`#${(0,b.slugify)(e)}`,className:"font-neue inline-flex cursor-pointer text-[1.5rem] leading-[160%] tracking-[0.015rem] [@media(max-width:320px)]:text-[1.25rem]",children:(0,t.jsx)(n.motion.span, {
initial: {
opacity:0
}
,animate: {
opacity:r?1:.3,transition: {
...p.config,delay:.1*o
}

}
,whileHover: {
opacity:1,transition: {
...p.config,delay:0
}

}
,className:"flex",children:e
}
)
}
)
}
,e)
}
)
}
)
}
)]
}
)]
}
),(0,t.jsx)(l, {
isPointer:w,isExpanded:m,isOpen:y,setIsOpen:v
}
)]
}
)
}
)
}
),!m&&(0,t.jsx)(n.motion.div, {
style: {
scaleX:d
}
,className:"bg-pink absolute right-25 bottom-0 left-25 h-2 origin-left"
}
)]
}
),(0,t.jsx)(g, {
isOpen:y,links:e
}
)]
}
)
}
],88489)
}
,14253,e=> {
"use strict";
var t=e.i(56242),o=e.i(7284),r=e.i(27686),n=e.i(69348),a=e.i(44637),i=e.i(59163);
function s(e) {
return(0,t.jsx)("svg", {
width:"5",height:"5",viewBox:"0 0 5 5",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,t.jsx)("path", {
d:"M3.35788 0.947849L0.607899 0.947923C0.473598 0.947874 0.362229 0.901764 0.273791 0.809595C0.185354 0.717425 0.141135 0.604215 0.141135 0.469963C0.146046 0.340523 0.192719 0.229718 0.281157 0.137549C0.369595 0.0453795 0.480964 -0.00072999 0.615265 -0.000779038L4.50435 -0.000778542C4.5703 -0.000729467 4.63102 0.0118169 4.68651 0.0368602C4.74195 0.0618545 4.79166 0.0963506 4.83566 0.140348C4.87966 0.184346 4.91415 0.234064 4.93915 0.289503C4.96419 0.344992 4.97674 0.40571 4.97679 0.471657L4.97671 4.36421C4.97671 4.49109 4.93092 4.60033 4.83934 4.69191C4.74776 4.78349 4.63666 4.83114 4.50605 4.83487C4.37179 4.83487 4.25858 4.78879 4.16641 4.69662C4.07424 4.60445 4.02813 4.49122 4.02809 4.35691L4.02816 1.61813L2.42067 3.22562L0.813181 4.83311C0.719145 4.92714 0.607432 4.97418 0.478042 4.97423C0.348651 4.97418 0.236938 4.92714 0.142902 4.83311C0.048867 4.73907 0.00182472 4.62736 0.00177568 4.49797C0.00182491 4.36858 0.0488672 4.25686 0.142903 4.16283L3.35788 0.947849Z",fill:"currentColor"
}
)
}
)
}
function l(e) {
return(0,t.jsx)("svg", {
width:"7",height:"7",viewBox:"0 0 7 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,t.jsx)("path", {
d:"M3.5 3.5L0.5 0.5M3.5 3.5L6.5 6.5M3.5 3.5L6.5 0.5M3.5 3.5L0.5 6.5",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"
}
)
}
)
}
var c=e.i(99084),d=e.i(3505),u=e.i(39842);
let m=( {
text:e,link:o,linkLabel:r
}
)=> {
let n=o?.url?o.url:(0,u.getInternalLink)(o);
return(0,t.jsxs)("div", {
className:"flex flex-nowrap items-start gap-4",children:[(0,t.jsx)("p", {
className:"type-s-11 md:type-s-12 text-dark whitespace-nowrap",children:e
}
),o&&n&&(0,t.jsx)(c.Link, {
href:n,className:"text-dark",children:(0,t.jsxs)("div", {
className:"inline-flex flex-nowrap items-center gap-2",children:[(0,t.jsx)("span", {
className:"type-s-11 md:type-s-12 under whitespace-nowrap",children:r||"Learn more"
}
),o?.url&&(0,t.jsx)(s, {
className:"relative top-1 left-1 size-6"
}
)]
}
)
}
)]
}
)
}
;
e.s(["NewsBanner",0,( {
text:e,link:s,linkLabel:c,displayOnHomepageOnly:u
}
)=> {
let {
isNewsBannerDisplayed:p,set:f
}
=(0,d.useApp)(),[g,h]=(0,i.useState)(!1),b=(0,a.usePathname)(),y=!u||"/"===b;
(0,i.useLayoutEffect)(()=>(y&&!g?f( {
isNewsBannerDisplayed:!0
}
):f( {
isNewsBannerDisplayed:!1
}
),()=> {
f( {
isNewsBannerDisplayed:!1
}
)
}
),[y,g,f]);
let v=(0,i.useRef)(null),[w,x]=(0,i.useState)(!1);
return(0,i.useEffect)(()=> {
let e=()=> {
if(v.current) {
let {
scrollWidth:e,clientWidth:t
}
=v.current;
x(e>t)
}

}
;
return document.fonts.ready.then(()=> {
requestAnimationFrame(e)
}
),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)
}
,[e,s,p]),(0,t.jsx)(r.AnimatePresence, {
children:p&&(0,t.jsxs)(n.motion.div, {
initial: {
y:"-100%"
}
,animate: {
y:0
}
,exit: {
y:"-100%"
}
,className:"fixed top-0 left-0 z-999 flex w-full items-center justify-center border-b border-b-black/15 bg-white",children:[(0,t.jsx)("div", {
className:"mr-48 flex-1 overflow-hidden",children:(0,t.jsxs)("div", {
ref:v,className:(0,o.default)("flex py-12",w?"animate-marquee justify-start gap-24":"justify-center"),children:[(0,t.jsx)(m, {
text:e,link:s,linkLabel:c
}
),w&&(0,t.jsx)(m, {
text:e,link:s,linkLabel:c
}
)]
}
)
}
),(0,t.jsx)("div", {
className:"flex-center absolute top-0 right-0 mr-12 h-full",children:(0,t.jsx)("button", {
className:"p-10","aria-label":"Close news banner",onClick:()=> {
h(!0),f( {
isNewsBannerDisplayed:!1
}
)
}
,children:(0,t.jsx)(l, {
className:"text-dark size-8"
}
)
}
)
}
)]
}
)
}
)
}
],14253)
}
,24638,e=> {
"use strict";
var t=e.i(56242);
e.i(48490);
var o=e.i(4812),r=e.i(59163);
e.s(["Viewport",0,()=> {
let[e,n]=(0,r.useState)(0),a=(0,o.useWindowSize)();
return(0,r.useEffect)(()=> {
n(window.outerHeight)
}
,[a.width,a.height]),(0,t.jsx)("style", {
children:`
      :root {
        --viewport-height: ${e}px;
      }

      .h-slvh {
        height: ${e}px;
      }
    `
}
)
}
])
}
,29991,e=> {
"use strict";
e.s(["PerformanceDetector",0,function() {
if(!window.PERF_DETECTED) {
let e;
console.info("PerformanceDetector"),window.PERF_DETECTED=!0;
let t=window.PERFS= {
PERF_BAD:0,PERF_LOW:1,PERF_GOOD:2,PERF_HIGH:3
}
,o=t.PERF_BAD,r=(window.performance||Date).now(),n=(window.performance||Date).now()-r;
o=n<=1?t.PERF_HIGH:n<5?t.PERF_GOOD:n<14?t.PERF_LOW:t.PERF_BAD,navigator&&navigator.connection&&navigator.connection?.effectiveType!=="4g"&&(o=navigator.connection?.effectiveType==="slow-2g"||navigator.connection?.effectiveType==="2g"?t.PERF_BAD:t.PERF_LOW),window.PERF=o,e=o===t.PERF_HIGH?"PERF_HIGH":o===t.PERF_GOOD?"PERF_GOOD":o===t.PERF_LOW?"PERF_LOW":"PERF_BAD";
let a=window.PERF>=window.PERFS.PERF_HIGH;
console.info( {
PERF:window.PERF,PERFS:t,perf:n
}
),a||document.documentElement.classList.add("low-performance-device"),document.documentElement.classList.add(e)
}
return null
}
])
}
]);
