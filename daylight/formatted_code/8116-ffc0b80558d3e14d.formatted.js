"use strict";
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8116], {
79567:(e,t,s)=> {
s.d(t, {
n:()=>b
}
);
var r=s(69797),a=s(15987),n=s(63774),l=s(60804),i=s(48795),o=s(15791),c=s(18898),d=s(50514),u=s(92206),m=s(64665),x=s(11487),f=s(82372),h=s(27564);
let p=e=> {
let {
value:t
}
=e,s=(0,o.useRef)(null),n=(0,o.useRef)(0),i=(0,o.useRef)(!0);
return(0,a.V)(()=> {
if(s.current) {
if(i.current) {
s.current.textContent=t.toString().padStart(2,"0"),n.current=t,i.current=!1;
return
}
t<n.current?s.current.textContent=t.toString().padStart(2,"0"):l.ZP.fromTo(s.current, {
textContent:n.current
}
, {
textContent:t,duration:.3,ease:"power2.out",snap: {
textContent:1
}
,onUpdate:function() {
s.current&&(s.current.textContent=Math.round(this.targets()[0].textContent).toString().padStart(2,"0"))
}

}
),n.current=t
}

}
,[t]),(0,r.jsx)("span", {
ref:s,children:"00"
}
)
}
,b=e=> {
let {
className:t,showCloseButton:s=!1,onClose:a,variant:l="desktop",hideOrderButton:b=!1
}
=e,[g,v]=(0,o.useState)(h.wE.getActiveCampaign()),[w,j]=(0,o.useState)( {
days:0,hours:0,minutes:0,seconds:0
}
),[y,N]=(0,o.useState)(!1),[C,k]=(0,o.useState)(!1),[E,A]=(0,o.useState)(!0);
if((0,o.useEffect)(()=> {
N(!0),v(h.wE.getActiveCampaign());
let e=()=> {
A(window.innerHeight>=800)
}
;
return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)
}
,[]),(0,o.useEffect)(()=> {
if(!g)return;
let e=()=> {
let e=new Date,t=g.endDate;
if(e>t) {
v(h.wE.getActiveCampaign());
return
}
j((0,n.y)( {
start:e,end:t
}
))
}
;
e();
let t=setInterval(e,1e3);
return()=>clearInterval(t)
}
,[g]),!y||!g||C)return null;
let S="winter-solstice"===g.id?x.Z:"amber-sunday"===g.id?u.Z:m.Z,R="winter-solstice"===g.id;
return(0,r.jsxs)("div", {
className:(0,f.L)("relative flex flex-col gap-4 rounded-2xl overflow-hidden border-2 border-amber py-6 md:min-w-[440px]","bg-night text-moonlight","mobile"===l&&"fixed inset-x-2 bottom-2 sm:bottom-16 m-auto z-[9999] shadow-2xl animate-slide-fade-in max-w-[450px] sm:max-w-[400px] h-fit",t),children:[(0,r.jsx)("div", {
className:"absolute inset-0 z-0 opacity-100 pointer-events-none",children:(0,r.jsx)(c.m, {
className:"w-full h-full"
}
)
}
),(0,r.jsxs)("div", {
className:"relative z-10 flex flex-col gap-6",children:[(s||"mobile"===l)&&(0,r.jsx)("button", {
onClick:()=> {
k(!0),a&&a()
}
,className:"absolute -top-2 right-2 p-2 opacity-60 hover:opacity-100 transition-opacity z-20","aria-label":"Close campaign banner",children:(0,r.jsx)("svg", {
width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path", {
d:"M1 1L11 11M11 1L1 11",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"
}
)
}
)
}
),(0,r.jsxs)("div", {
className:"flex flex-col gap-2 justify-center px-8",children:[(0,r.jsxs)("div", {
children:[(0,r.jsx)("h3", {
className:"font-serif text-5xl whitespace-nowrap tracking-tighter font-medium leading-tight mb-3 text-amber text-center",children:g.title
}
),"winter-solstice"===g.id?(0,r.jsxs)("div", {
className:"flex flex-col",children:[(0,r.jsxs)("p", {
className:"font-sans text-xl tracking-tight font-bold uppercase text-center opacity-90 pb-4",children:["Holiday bundle for"," ",(0,r.jsx)("span", {
className:"text-amber font-bold drop-shadow-[0_0_8px_rgba(255,157,0,0.5)]",children:"$729"
}
)]
}
),E&&(0,r.jsx)("div", {
className:"relative w-full aspect-[16/12] rounded-lg overflow-hidden border border-white/10 shadow-lg",children:(0,r.jsx)(i.default, {
src:x.Z,alt:"Winter Solstice Bundle",fill:!0,className:"object-cover",placeholder:"blur"
}
)
}
),(0,r.jsxs)("div", {
className:"grid grid-cols-2 gap-2 py-3 rounded-lg",children:[(0,r.jsxs)("div", {
className:"flex items-start gap-2 text-sm md:text.base",children:[(0,r.jsx)("span", {
className:"text-amber text-xs mt-1",children:"✓"
}
),(0,r.jsx)("span", {
className:"opacity-90",children:"Daylight DC-1"
}
)]
}
),(0,r.jsxs)("div", {
className:"flex items-start gap-2 text-sm md:text.base",children:[(0,r.jsx)("span", {
className:"text-amber text-xs mt-1",children:"✓"
}
),(0,r.jsx)("span", {
className:"opacity-90",children:"White Stylus"
}
)]
}
),(0,r.jsxs)("div", {
className:"flex items-start gap-2 text-sm md:text.base",children:[(0,r.jsx)("span", {
className:"text-amber text-xs mt-1",children:"✓"
}
),(0,r.jsx)("span", {
className:"opacity-90",children:"Wooden Stand *"
}
)]
}
),(0,r.jsxs)("div", {
className:"flex items-start gap-2 text-sm md:text.base",children:[(0,r.jsx)("span", {
className:"text-amber text-xs mt-1",children:"✓"
}
),(0,r.jsx)("span", {
className:"opacity-90",children:"Pebble Keyboard *"
}
)]
}
),(0,r.jsxs)("div", {
className:"flex items-start gap-2 text-sm md:text.base",children:[(0,r.jsx)("span", {
className:"text-amber text-xs mt-1",children:"✓"
}
),(0,r.jsx)("span", {
className:"opacity-90",children:"Pebble Mouse *"
}
)]
}
)]
}
),(0,r.jsx)("p", {
className:"text-base text-center opacity-60 mt-2",children:"* DC-1 + stylus ship immediately. Stand + keyboard + mouse ship ~2 weeks after Christmas."
}
)]
}
):"amber-sunday"===g.id?(0,r.jsxs)("div", {
className:"flex flex-col",children:[(0,r.jsxs)("p", {
className:"font-sans text-xl tracking-tight font-normal text-center opacity-90 pb-4",children:["Special bundle for"," ",(0,r.jsx)("span", {
className:"text-amber font-bold drop-shadow-[0_0_8px_rgba(255,157,0,0.5)]",children:"$699"
}
)]
}
),E&&(0,r.jsx)("div", {
className:"relative w-full aspect-[16/9] shrink-0 overflow-hidden rounded-lg border border-white/10 shadow-lg",children:(0,r.jsx)(i.default, {
src:S,alt:g?.title||"Campaign",fill:!0,className:"object-cover",placeholder:"blur"
}
)
}
),(0,r.jsxs)("div", {
className:"grid grid-cols-2 gap-2 py-3 rounded-lg",children:[(0,r.jsxs)("div", {
className:"flex items-start gap-2 text-sm md:text.base",children:[(0,r.jsx)("span", {
className:"text-amber text-xs mt-1",children:"✓"
}
),(0,r.jsx)("span", {
className:"opacity-90",children:"Daylight Computer"
}
)]
}
),(0,r.jsxs)("div", {
className:"flex items-start gap-2 text-sm md:text.base",children:[(0,r.jsx)("span", {
className:"text-amber text-xs mt-1",children:"✓"
}
),(0,r.jsx)("span", {
className:"opacity-90",children:"Wooden Rim Stand"
}
)]
}
),(0,r.jsxs)("div", {
className:"flex items-start gap-2 text-sm md:text.base",children:[(0,r.jsx)("span", {
className:"text-amber text-xs mt-1",children:"✓"
}
),(0,r.jsx)("span", {
className:"opacity-90",children:"Logitech Pebble Keyboard"
}
)]
}
),(0,r.jsxs)("div", {
className:"flex items-start gap-2 text-sm md:text.base",children:[(0,r.jsx)("span", {
className:"text-amber text-xs mt-1",children:"✓"
}
),(0,r.jsx)("span", {
className:"opacity-90",children:"Precision Stylus"
}
)]
}
)]
}
)]
}
):(0,r.jsxs)(r.Fragment, {
children:[(0,r.jsx)("p", {
className:"font-sans text-xl md:px-12 pb-4 tracking-tight font-normal opacity-90 text-shadow text-center",children:(e=> {
if(e.includes("$729")) {
let t=e.split("$729");
return(0,r.jsxs)(r.Fragment, {
children:[t[0],(0,r.jsx)("span", {
className:"text-amber font-bold drop-shadow-[0_0_8px_rgba(255,157,0,0.5)]",children:"$729"
}
),t[1]]
}
)
}
if(e.includes("$699")) {
let t=e.split("$699");
return(0,r.jsxs)(r.Fragment, {
children:[t[0],(0,r.jsx)("span", {
className:"text-amber font-bold drop-shadow-[0_0_8px_rgba(255,157,0,0.5)]",children:"$699"
}
),t[1]]
}
)
}
if(e.includes("$649")) {
let t=e.split("$649");
return(0,r.jsxs)(r.Fragment, {
children:[t[0],(0,r.jsx)("span", {
className:"text-amber font-bold drop-shadow-[0_0_8px_rgba(255,157,0,0.5)]",children:"$649"
}
),t[1]]
}
)
}
return e
}
)(g.description)
}
),E&&(0,r.jsx)("div", {
className:"relative w-full aspect-[16/9] shrink-0 overflow-hidden rounded-lg border border-white/10 shadow-lg",children:(0,r.jsx)(i.default, {
src:S,alt:g?.title||"Campaign",fill:!0,className:"object-cover",placeholder:"blur"
}
)
}
)]
}
)]
}
),!R&&(0,r.jsxs)("div", {
className:"flex gap-2 text-center",children:[(0,r.jsxs)("div", {
className:"flex flex-col p-2 bg-night/40 backdrop-blur-sm border border-white/10 rounded flex-1",children:[(0,r.jsx)("span", {
className:"text-xl font-mono font-bold text-amber tabular-nums",children:(0,r.jsx)(p, {
value:w.days||0
}
)
}
),(0,r.jsx)("span", {
className:"text-xs uppercase opacity-60",children:"Days"
}
)]
}
),(0,r.jsxs)("div", {
className:"flex flex-col p-2 bg-night/40 backdrop-blur-sm border border-white/10 rounded flex-1",children:[(0,r.jsx)("span", {
className:"text-xl font-mono font-bold text-amber tabular-nums",children:(0,r.jsx)(p, {
value:w.hours||0
}
)
}
),(0,r.jsx)("span", {
className:"text-xs uppercase opacity-60",children:"Hrs"
}
)]
}
),(0,r.jsxs)("div", {
className:"flex flex-col p-2 bg-night/40 backdrop-blur-sm border border-white/10 rounded flex-1",children:[(0,r.jsx)("span", {
className:"text-xl font-mono font-bold text-amber tabular-nums",children:(0,r.jsx)(p, {
value:w.minutes||0
}
)
}
),(0,r.jsx)("span", {
className:"text-xs uppercase opacity-60",children:"Mins"
}
)]
}
),(0,r.jsxs)("div", {
className:"flex flex-col p-2 bg-night/40 backdrop-blur-sm border border-white/10 rounded flex-1",children:[(0,r.jsx)("span", {
className:"text-xl font-mono font-bold text-amber tabular-nums",children:(0,r.jsx)(p, {
value:w.seconds||0
}
)
}
),(0,r.jsx)("span", {
className:"text-xs uppercase opacity-60",children:"Secs"
}
)]
}
)]
}
),!b&&(0,r.jsxs)("div", {
className:"mt-2",children:[(0,r.jsx)(d.s, {
className:"w-full bg-amber text-night hover:bg-amber/90 shadow-[0_0_15px_rgba(255,157,0,0.3)]"
}
),(0,r.jsx)("div", {
className:"text-center mt-2",children:(0,r.jsx)("span", {
className:"text-xs opacity-60 uppercase font-medium tracking-wide",children:"Ships in 3-5 business days"
}
)
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

}
,18898:(e,t,s)=> {
s.d(t, {
m:()=>l
}
);
var r=s(69797),a=s(37440),n=s(67695);
let l=e=> {
let {
className:t
}
=e,[s,l]=(0,n.S)( {
threshold:0
}
);
return(0,r.jsx)("div", {
ref:s,className:t,children:(0,r.jsx)(a.mI, {
colorBack:"#00000000",colors:["#FE9400"],colorBloom:"#FE9400",offsetX:0,offsetY:-1,intensity:.5,spotty:.19,midSize:.3,midIntensity:.95,density:.02,bloom:.81,speed:l?1:0,scale:.25,style: {
backgroundColor:"#00000000",height:"100%",width:"100%"
}

}
)
}
)
}

}
,84862:(e,t,s)=> {
s.d(t, {
A:()=>n
}
);
var r=s(15791),a=s(98625);
let n=e=> {
let {
offscreen:t=!1,onResize:s,maxDpr:n=2,options:l
}
=e,[i,o]=(0,r.useState)(null),[c,d]=(0,r.useState)(null),[u,m]=(0,r.useState)(1),[x, {
width:f,height:h
}
]=(0,a.Z)( {
onChange:s
}
);
(0,r.useLayoutEffect)(()=> {
m(Math.min(window.devicePixelRatio,n))
}
,[f,h,n]),(0,r.useEffect)(()=> {
c?.scale(u,u)
}
,[u,c]),(0,r.useEffect)(()=> {
if(!i)return;
let e=i?.getContext("2d",l);
e&&d(e)
}
,[i]);
let p=(0,r.useCallback)(e=> {
if(e) {
if(t&&"transferControlToOffscreen"in e) {
o(e.transferControlToOffscreen());
return
}
o(e)
}

}
,[t]);
return(0,r.useEffect)(()=> {
i&&(i.width=f*u,i.height=h*u)
}
,[i,f,h,u]),[p,x, {
canvas:i,ctx:c,dpr:u,width:f,height:h
}
]
}

}
,67695:(e,t,s)=> {
s.d(t, {
S:()=>a
}
);
var r=s(15791);
let a=e=> {
let t=r.useRef(null),[s,a]=r.useState(!1);
return r.useEffect(()=> {
let s=t.current;
if(!s)return;
let r=new IntersectionObserver(t=> {
let[s]=t;
s&&a(t=>e&&e.triggerOnce&&!0===t?t:s.isIntersecting)
}
,e);
return r.observe(s),()=> {
r.disconnect()
}

}
,[e]),[t,s]
}

}
,98625:(e,t,s)=> {
s.d(t, {
Z:()=>o
}
);
var r=s(35192),a=s.n(r),n=s(15791);
let l=["x","y","top","bottom","left","right","width","height"],i=(e,t)=>l.every(s=>e[s]===t[s]),o=function() {
var e;
let {
debounce:t,scroll:s,polyfill:r,offsetSize:l,offsetCoords:o,onChange:c
}
=arguments.length>0&&void 0!==arguments[0]?arguments[0]: {
debounce:0,scroll:!1,offsetSize:!1,offsetCoords:!1
}
,d=r||window.ResizeObserver;
if(!d)throw Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
let[u,m]=(0,n.useState)( {
left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0,offsetLeft:0,offsetTop:0,hasMeasured:!1
}
),x=(0,n.useRef)( {
element:null,scrollContainers:null,resizeObserver:null,lastBounds:u
}
),f=t?"number"==typeof t?t:t.scroll:null,h=t?"number"==typeof t?t:t.resize:null,p=(0,n.useRef)(!1);
(0,n.useEffect)(()=>(p.current=!0,()=>void(p.current=!1)));
let[b,g,v]=(0,n.useMemo)(()=> {
let e=()=> {
if(!x.current.element)return;
let {
left:e,top:t,width:s,height:r,bottom:a,right:n,x:d,y:u
}
=x.current.element.getBoundingClientRect(),f= {
left:e,top:t,width:s,height:r,bottom:a,right:n,x:d,y:u,offsetLeft:0,offsetTop:0,hasMeasured:!0
}
;
x.current.element instanceof HTMLElement&&l&&(f.height=x.current.element.offsetHeight,f.width=x.current.element.offsetWidth),x.current.element instanceof HTMLElement&&o&&(f.offsetTop=x.current.element.offsetTop,f.offsetLeft=x.current.element.offsetLeft),Object.freeze(f),p.current&&!i(x.current.lastBounds,f)&&(m(x.current.lastBounds=f),c?.(f))
}
;
return[e,h?a()(e,h):e,f?a()(e,f):e]
}
,[m,l,f,h]);
function w() {
x.current.scrollContainers&&(x.current.scrollContainers.forEach(e=>e.removeEventListener("scroll",v,!0)),x.current.scrollContainers=null),x.current.resizeObserver&&(x.current.resizeObserver.disconnect(),x.current.resizeObserver=null)
}
function j() {
x.current.element&&(x.current.resizeObserver=new d(v),x.current.resizeObserver.observe(x.current.element),s&&x.current.scrollContainers&&x.current.scrollContainers.forEach(e=>e.addEventListener("scroll",v, {
capture:!0,passive:!0
}
)))
}
return e=!!s,(0,n.useEffect)(()=> {
if(e)return window.addEventListener("scroll",v, {
capture:!0,passive:!0
}
),()=>void window.removeEventListener("scroll",v,!0)
}
,[v,e]),(0,n.useEffect)(()=>(window.addEventListener("resize",g),()=>void window.removeEventListener("resize",g)),[g]),(0,n.useEffect)(()=> {
w(),j()
}
,[s,v,g]),(0,n.useEffect)(()=>w,[]),[e=> {
e&&e!==x.current.element&&(w(),x.current.element=e,x.current.scrollContainers=function e(t) {
let s=[];
if(!t||t===document.body)return s;
let {
overflow:r,overflowX:a,overflowY:n
}
=window.getComputedStyle(t);
return[r,a,n].some(e=>"auto"===e||"scroll"===e)&&s.push(t),[...s,...e(t.parentElement)]
}
(e),j())
}
,u,b]
}

}
,24364:(e,t,s)=> {
s.d(t, {
G:()=>n
}
);
var r=s(15791),a=s(9673);
let n=(e,t)=> {
let[s,n]=r.useState(t);
return r.useEffect(()=> {
if(!(0,a.Q3)("matchMedia")) {
console.warn("matchMedia is not supported by your current browser");
return
}
let t=window.matchMedia(e),s=()=>n(!!t.matches);
return(s(),"function"==typeof t.addEventListener)?(t.addEventListener("change",s),()=> {
t.removeEventListener("change",s)
}
):"function"==typeof t.addListener?(t.addListener(s),()=> {
t.removeListener(s)
}
):void 0
}
,[e]),s
}

}
,1278:(e,t,s)=> {
s.d(t, {
p8:()=>a.ZP,ui:()=>c,xy:()=>o
}
);
var r=s(15987),a=s(60804),n=s(82058),l=s(22948),i=s(29512);
a.ZP.config( {
autoSleep:1/0,force3D:!0,nullTargetWarn:l.r8
}
),a.ZP.registerEffect( {
name:"textFadeIn",default: {
duration:.5,stagger:.1
}
,effect:(e,t)=> {
let {
duration:s,stagger:r,...n
}
=t;
return a.ZP.fromTo(e, {
opacity:0,y:-10,z:25,rotationX:10
}
, {
ease:"power3.out",y:0,z:0,duration:s,rotationX:0,opacity:1,stagger:r,...n
}
)
}
,extendTimeline:!0
}
),a.ZP.registerEffect( {
name:"imageParallax",effect:(e,t)=> {
let {
direction:s="y",trigger:r,amount:n=.2,noScale:l=!1,centered:i=!0,markers:o,ease:c="none",start:d="top bottom",end:u="bottom top"
}
=t,m=100*n,x=m/2;
return a.ZP.fromTo(e, {
scale:l?1:1+n,[s]:-((i?x:m)*1)+"%"
}
, {
[s]:(i?x:0)+"%",ease:c,overwrite:"auto",scrollTrigger: {
trigger:r??e,start:d,end:u,scrub:!0,markers:o
}

}
)
}

}
);
let o=e=> {
e.data= {
...e.data,_visualizer: {
isScrollytelling:!0
}

}
;
let t=(e,t)=> {
let s=`rest-tween-${(0,n.x0)(5)}`;
a.ZP.getById(s)?.revert();
let r=100-e;
return t.to( {

}
, {
id:s,duration:r,data: {
_visualizer: {
type:"rest"
}

}

}
,100-r),()=> {
a.ZP.getById(s)?.revert()
}

}
,s=s=> {
if(!e)throw Error("timeline is required");
let {
start:r,end:a,...n
}
=s,l=a-r;
if(r<0)throw Error("start time must be greater than 0");
if(a>100)throw Error("end time must be less than 100");
if(l<0)throw Error("end time must be greater than start time");
return t(a,e),[ {
...n,duration:l
}
,r]
}
,r=new Proxy(e, {
get:(e,t,s)=>"symbol"==typeof t?Reflect.get(e,t,s):"function"==typeof e[t]?("to"===t?function(s,r,a) {
let n= {
...r,data: {
...r.data,isScrollytellingTween:!0,type:"animation"
}

}
;
Reflect.apply(e[t],e,[s,n,a])
}
:e[t]).bind(e):Reflect.get(e,t,s)
}
),l= {
waypoint:t=> {
let[r,a]=s( {
start:t.at,end:t.at,onComplete:()=> {
r.data._visualizer._internalOnCall?.(),t.onCall?.()
}
,onReverseComplete:()=> {
r.data._visualizer._internalOnReverseCall?.(),t.onReverseCall?.()
}
,data: {
_visualizer: {
type:"waypoint",label:t.label
}

}

}
);
return e.set( {

}
,r,a),l
}

}
;
return {
get:s,utils:l,timeline:r
}

}
,c=(e,t)=>(0,r.V)((t,s)=> {
if(s)return i.c.schedule(s(e.bind(void 0,t,s)))
}
,t)
}
,29512:(e,t,s)=> {
s.d(t, {
c:()=>l
}
);
var r=s(82058),a=s(21434);
class n {
constructor() {
this.tasks=(0,a.O)(),this.instantlyRunOnce=this.instantlyRunOnce.bind(this)
}
schedule(e) {
let t="noBlockingScheduler__"+(0,r.x0)(5);
return this.tasks.addCallback(()=> {
e(),this.tasks.removeCallback(t)
}
,t),()=> {
this.tasks.removeCallback(t)
}

}
run() {
this.tasks.getCallbackIds().forEach(e=>this.instantlyRunOnce(e))
}
instantlyRunOnce(e) {
let t=this.tasks.getCallback(e);
t?(t(),this.tasks.removeCallback(e)):console.error(`Callback with id ${e} not found`)
}
startRunAllInstantly() {
this.tasks.emitter.on("add",this.instantlyRunOnce)
}
killRunAllInstantly() {
this.tasks.emitter.off("add",this.instantlyRunOnce)
}
clear() {
this.tasks.clearCallbacks()
}

}
let l=new n
}
,9673:(e,t,s)=> {
s.d(t, {
PF:()=>l,Q3:()=>a,TQ:()=>n
}
);
var r=s(22948);
let a=e=>r.C5&&e in window,n=e=>e.map(e=> {
if(!e)return"";
if("string"==typeof e)return e;
if("number"==typeof e)return`${e}px`;
if(e.breakpoint.includes("px")||e.breakpoint.includes("rem"))return`(min-width: ${e.breakpoint}) ${e.width}`;
throw Error(`Invalid breakpoint: ${e.breakpoint}`)
}
).join(", "),l=e=> {
let t=[],s=[];
return e.split(" ").forEach((e,r,a)=> {
let n=e.split("").map((e,t,s)=> {
let n=r===a.length-1,l=t===s.length-1;
return!n&&l?`${e} `:e
}
);
t.push(...n),s.push([e,n])
}
), {
chars:t,words:s
}

}

}
,92206:(e,t,s)=> {
s.d(t, {
Z:()=>r
}
);
let r= {
src:"/_next/static/media/amber-bundle.eeba61bf.webp",height:1700,width:2547,blurDataURL:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAACQAQCdASoIAAUAAkA4JQBOgB4/DiAA/vfhMczxqaaFqCp/Q18un8K+xSpK67fOjq7Wjwr4L7so2V7PQx2pjfyP+H9pMkAA",blurWidth:8,blurHeight:5
}

}
,64665:(e,t,s)=> {
s.d(t, {
Z:()=>r
}
);
let r= {
src:"/_next/static/media/bright-sale.276ad6f1.webp",height:907,width:1405,blurDataURL:"data:image/webp;base64,UklGRl4AAABXRUJQVlA4IFIAAABQAgCdASoIAAUAAkA4JZACdEcAZIACh6KDtwAA/vb/Gq0xAUuc5fBeRSmy5EFn33ReHTNQtE09V6xVfdeefX/CnefhDTplX/BMcv3FekMWGpAA",blurWidth:8,blurHeight:5
}

}

}
]);
