"use strict";
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6425], {
66425:(t,e,i)=> {
i.d(e, {
ZP:()=>f,LZ:()=>g
}
);
var s=i(15791),o="undefined"!=typeof window&&new class {
constructor() {
this.raf=t=> {
requestAnimationFrame(this.raf);
let e=t-this.now;
this.now=t;
for(let i=0;
i<this.callbacks.length;
i++)this.callbacks[i].callback(t,e)
}
,this.callbacks=[],this.now=performance.now(),requestAnimationFrame(this.raf)
}
add(t,e=0) {
return this.callbacks.push( {
callback:t,priority:e
}
),this.callbacks.sort((t,e)=>t.priority-e.priority),()=>this.remove(t)
}
remove(t) {
this.callbacks=this.callbacks.filter(( {
callback:e
}
)=>t!==e)
}

}
;
function r(t,e,i) {
return Math.max(t,Math.min(e,i))
}
class l {
advance(t) {
var e,i,s;
if(!this.isRunning)return;
let o=!1;
if(this.lerp)this.value=(e=this.value,i=this.to,(1-(s=1-Math.exp(-(60*this.lerp)*t)))*e+s*i),Math.round(this.value)===this.to&&(this.value=this.to,o=!0);
else {
this.currentTime+=t;
let e=r(0,this.currentTime/this.duration,1),i=(o=e>=1)?1:this.easing(e);
this.value=this.from+(this.to-this.from)*i
}
this.onUpdate?.(this.value,o),o&&this.stop()
}
stop() {
this.isRunning=!1
}
fromTo(t,e, {
lerp:i=.1,duration:s=1,easing:o=t=>t,onStart:r,onUpdate:l
}
) {
this.from=this.value=t,this.to=e,this.lerp=i,this.duration=s,this.easing=o,this.currentTime=0,this.isRunning=!0,r?.(),this.onUpdate=l
}

}
class n {
constructor( {
wrapper:t,content:e,autoResize:i=!0,debounce:s=250
}
= {

}
) {
this.wrapper=t,this.content=e,i&&(this.debouncedResize=function(t,e) {
let i;
return function() {
let s=arguments,o=this;
clearTimeout(i),i=setTimeout(function() {
t.apply(o,s)
}
,e)
}

}
(this.resize,s),this.wrapper===window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()
}
destroy() {
this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),window.removeEventListener("resize",this.debouncedResize,!1)
}
resize=()=> {
this.onWrapperResize(),this.onContentResize()
}
;
onWrapperResize=()=> {
this.wrapper===window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)
}
;
onContentResize=()=> {
this.wrapper===window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)
}
;
get limit() {
return {
x:this.scrollWidth-this.width,y:this.scrollHeight-this.height
}

}

}
class h {
constructor() {
this.events= {

}

}
emit(t,...e) {
let i=this.events[t]||[];
for(let t=0,s=i.length;
t<s;
t++)i[t](...e)
}
on(t,e) {
return this.events[t]?.push(e)||(this.events[t]=[e]),()=> {
this.events[t]=this.events[t]?.filter(t=>e!==t)
}

}
off(t,e) {
this.events[t]=this.events[t]?.filter(t=>e!==t)
}
destroy() {
this.events= {

}

}

}
let a=100/6;
class c {
constructor(t, {
wheelMultiplier:e=1,touchMultiplier:i=1
}
) {
this.element=t,this.wheelMultiplier=e,this.touchMultiplier=i,this.touchStart= {
x:null,y:null
}
,this.emitter=new h,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel, {
passive:!1
}
),this.element.addEventListener("touchstart",this.onTouchStart, {
passive:!1
}
),this.element.addEventListener("touchmove",this.onTouchMove, {
passive:!1
}
),this.element.addEventListener("touchend",this.onTouchEnd, {
passive:!1
}
)
}
on(t,e) {
return this.emitter.on(t,e)
}
destroy() {
this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel, {
passive:!1
}
),this.element.removeEventListener("touchstart",this.onTouchStart, {
passive:!1
}
),this.element.removeEventListener("touchmove",this.onTouchMove, {
passive:!1
}
),this.element.removeEventListener("touchend",this.onTouchEnd, {
passive:!1
}
)
}
onTouchStart=t=> {
let {
clientX:e,clientY:i
}
=t.targetTouches?t.targetTouches[0]:t;
this.touchStart.x=e,this.touchStart.y=i,this.lastDelta= {
x:0,y:0
}
,this.emitter.emit("scroll", {
deltaX:0,deltaY:0,event:t
}
)
}
;
onTouchMove=t=> {
let {
clientX:e,clientY:i
}
=t.targetTouches?t.targetTouches[0]:t,s=-(e-this.touchStart.x)*this.touchMultiplier,o=-(i-this.touchStart.y)*this.touchMultiplier;
this.touchStart.x=e,this.touchStart.y=i,this.lastDelta= {
x:s,y:o
}
,this.emitter.emit("scroll", {
deltaX:s,deltaY:o,event:t
}
)
}
;
onTouchEnd=t=> {
this.emitter.emit("scroll", {
deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:t
}
)
}
;
onWheel=t=> {
let {
deltaX:e,deltaY:i,deltaMode:s
}
=t;
e*=1===s?a:2===s?this.windowWidth:1,i*=1===s?a:2===s?this.windowHeight:1,e*=this.wheelMultiplier,i*=this.wheelMultiplier,this.emitter.emit("scroll", {
deltaX:e,deltaY:i,event:t
}
)
}
;
onWindowResize=()=> {
this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight
}

}
class u {
constructor( {
wrapper:t=window,content:e=document.documentElement,wheelEventsTarget:i=t,eventsTarget:s=i,smoothWheel:o=!0,syncTouch:r=!1,syncTouchLerp:a=.075,touchInertiaMultiplier:u=35,duration:d,easing:p=t=>Math.min(1,1.001-Math.pow(2,-10*t)),lerp:m=!d&&.1,infinite:v=!1,orientation:g="vertical",gestureOrientation:f="vertical",touchMultiplier:w=1,wheelMultiplier:S=1,autoResize:y=!0,__experimental__naiveDimensions:b=!1
}
= {

}
) {
this.__isSmooth=!1,this.__isScrolling=!1,this.__isStopped=!1,this.__isLocked=!1,this.onVirtualScroll=( {
deltaX:t,deltaY:e,event:i
}
)=> {
if(i.ctrlKey)return;
let s=i.type.includes("touch"),o=i.type.includes("wheel");
if(this.options.syncTouch&&s&&"touchstart"===i.type&&!this.isStopped&&!this.isLocked)return void this.reset();
let r="vertical"===this.options.gestureOrientation&&0===e||"horizontal"===this.options.gestureOrientation&&0===t;
if(0===t&&0===e||r)return;
let l=i.composedPath();
if((l=l.slice(0,l.indexOf(this.rootElement))).find(t=> {
var e,i,r,l,n;
return(null===(e=t.hasAttribute)||void 0===e?void 0:e.call(t,"data-lenis-prevent"))||s&&(null===(i=t.hasAttribute)||void 0===i?void 0:i.call(t,"data-lenis-prevent-touch"))||o&&(null===(r=t.hasAttribute)||void 0===r?void 0:r.call(t,"data-lenis-prevent-wheel"))||(null===(l=t.classList)||void 0===l?void 0:l.contains("lenis"))&&!(null===(n=t.classList)||void 0===n?void 0:n.contains("lenis-stopped"))
}
))return;
if(this.isStopped||this.isLocked)return void i.preventDefault();
if(this.isSmooth=this.options.syncTouch&&s||this.options.smoothWheel&&o,!this.isSmooth)return this.isScrolling=!1,void this.animate.stop();
i.preventDefault();
let n=e;
"both"===this.options.gestureOrientation?n=Math.abs(e)>Math.abs(t)?e:t:"horizontal"===this.options.gestureOrientation&&(n=t);
let h=s&&this.options.syncTouch,a=s&&"touchend"===i.type&&Math.abs(n)>5;
a&&(n=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+n,Object.assign( {
programmatic:!1
}
,h? {
lerp:a?this.options.syncTouchLerp:1
}
: {
lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing
}
))
}
,this.onNativeScroll=()=> {
if(!this.__preventNextScrollEvent&&!this.isScrolling) {
let t=this.animatedScroll;
this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.direction=Math.sign(this.animatedScroll-t),this.emit()
}

}
,window.lenisVersion="1.0.42",t!==document.documentElement&&t!==document.body||(t=window),this.options= {
wrapper:t,content:e,wheelEventsTarget:i,eventsTarget:s,smoothWheel:o,syncTouch:r,syncTouchLerp:a,touchInertiaMultiplier:u,duration:d,easing:p,lerp:m,infinite:v,gestureOrientation:f,orientation:g,touchMultiplier:w,wheelMultiplier:S,autoResize:y,__experimental__naiveDimensions:b
}
,this.animate=new l,this.emitter=new h,this.dimensions=new n( {
wrapper:t,content:e,autoResize:y
}
),this.toggleClassName("lenis",!0),this.velocity=0,this.isLocked=!1,this.isStopped=!1,this.isSmooth=r||o,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll=new c(s, {
touchMultiplier:w,wheelMultiplier:S
}
),this.virtualScroll.on("scroll",this.onVirtualScroll)
}
destroy() {
this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.toggleClassName("lenis",!1),this.toggleClassName("lenis-smooth",!1),this.toggleClassName("lenis-scrolling",!1),this.toggleClassName("lenis-stopped",!1),this.toggleClassName("lenis-locked",!1)
}
on(t,e) {
return this.emitter.on(t,e)
}
off(t,e) {
return this.emitter.off(t,e)
}
setScroll(t) {
this.isHorizontal?this.rootElement.scrollLeft=t:this.rootElement.scrollTop=t
}
resize() {
this.dimensions.resize()
}
emit() {
this.emitter.emit("scroll",this)
}
reset() {
this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.animate.stop()
}
start() {
this.isStopped&&(this.isStopped=!1,this.reset())
}
stop() {
this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())
}
raf(t) {
let e=t-(this.time||t);
this.time=t,this.animate.advance(.001*e)
}
scrollTo(t, {
offset:e=0,immediate:i=!1,lock:s=!1,duration:o=this.options.duration,easing:l=this.options.easing,lerp:n=!o&&this.options.lerp,onComplete:h,force:a=!1,programmatic:c=!0
}
= {

}
) {
if(!this.isStopped&&!this.isLocked||a) {
if(["top","left","start"].includes(t))t=0;
else if(["bottom","right","end"].includes(t))t=this.limit;
else {
let i;
if("string"==typeof t?i=document.querySelector(t):(null==t?void 0:t.nodeType)&&(i=t),i) {
if(this.options.wrapper!==window) {
let t=this.options.wrapper.getBoundingClientRect();
e-=this.isHorizontal?t.left:t.top
}
let s=i.getBoundingClientRect();
t=(this.isHorizontal?s.left:s.top)+this.animatedScroll
}

}
if("number"==typeof t) {
if(t+=e,t=Math.round(t),this.options.infinite?c&&(this.targetScroll=this.animatedScroll=this.scroll):t=r(0,t,this.limit),i)return this.animatedScroll=this.targetScroll=t,this.setScroll(this.scroll),this.reset(),void(null==h||h(this));
if(!c) {
if(t===this.targetScroll)return;
this.targetScroll=t
}
this.animate.fromTo(this.animatedScroll,t, {
duration:o,easing:l,lerp:n,onStart:()=> {
s&&(this.isLocked=!0),this.isScrolling=!0
}
,onUpdate:(t,e)=> {
this.isScrolling=!0,this.velocity=t-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=t,this.setScroll(this.scroll),c&&(this.targetScroll=t),e||this.emit(),e&&(this.reset(),this.emit(),null==h||h(this),this.__preventNextScrollEvent=!0,requestAnimationFrame(()=> {
delete this.__preventNextScrollEvent
}
))
}

}
)
}

}

}
get rootElement() {
return this.options.wrapper===window?document.documentElement:this.options.wrapper
}
get limit() {
return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]
}
get isHorizontal() {
return"horizontal"===this.options.orientation
}
get actualScroll() {
return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop
}
get scroll() {
var t;
return this.options.infinite?(this.animatedScroll%(t=this.limit)+t)%t:this.animatedScroll
}
get progress() {
return 0===this.limit?1:this.scroll/this.limit
}
get isSmooth() {
return this.__isSmooth
}
set isSmooth(t) {
this.__isSmooth!==t&&(this.__isSmooth=t,this.toggleClassName("lenis-smooth",t))
}
get isScrolling() {
return this.__isScrolling
}
set isScrolling(t) {
this.__isScrolling!==t&&(this.__isScrolling=t,this.toggleClassName("lenis-scrolling",t))
}
get isStopped() {
return this.__isStopped
}
set isStopped(t) {
this.__isStopped!==t&&(this.__isStopped=t,this.toggleClassName("lenis-stopped",t))
}
get isLocked() {
return this.__isLocked
}
set isLocked(t) {
this.__isLocked!==t&&(this.__isLocked=t,this.toggleClassName("lenis-locked",t))
}
get className() {
let t="lenis";
return this.isStopped&&(t+=" lenis-stopped"),this.isLocked&&(t+=" lenis-locked"),this.isScrolling&&(t+=" lenis-scrolling"),this.isSmooth&&(t+=" lenis-smooth"),t
}
toggleClassName(t,e) {
this.rootElement.classList.toggle(t,e),this.emitter.emit("className change",this)
}

}
var d=i(86513),p=i(83934);
"function"==typeof SuppressedError&&SuppressedError;
let m=(0,s.createContext)(),v=(0,p.Ue)(()=>( {

}
));
function g(t,e=[],i=0) {
let {
lenis:o,addCallback:r,removeCallback:l
}
=function() {
let t=(0,s.useContext)(m),e=v();
return null!=t?t:e
}
();
return(0,s.useEffect)(()=> {
if(t&&r&&l&&o)return r(t,i),t(o),()=> {
l(t)
}

}
,[o,r,l,i,...e]),o
}
let f=(0,s.forwardRef)((t,e)=> {
var {
children:i,root:r=!1,options:l= {

}
,autoRaf:n=!0,rafPriority:h=0,className:a
}
=t,c=function(t,e) {
var i= {

}
;
for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&0>e.indexOf(s)&&(i[s]=t[s]);
if(null!=t&&"function"==typeof Object.getOwnPropertySymbols) {
var o=0;
for(s=Object.getOwnPropertySymbols(t);
o<s.length;
o++)0>e.indexOf(s[o])&&Object.prototype.propertyIsEnumerable.call(t,s[o])&&(i[s[o]]=t[s[o]])
}
return i
}
(t,["children","root","options","autoRaf","rafPriority","className"]);
let p=(0,s.useRef)(),g=(0,s.useRef)(),[f,w]=(0,s.useState)(),S=(0,s.useRef)([]),y=(0,s.useCallback)((t,e)=> {
S.current.push( {
callback:t,priority:e
}
),S.current.sort((t,e)=>t.priority-e.priority)
}
,[]),b=(0,s.useCallback)(t=> {
S.current=S.current.filter(e=>e.callback!==t)
}
,[]);
(0,s.useImperativeHandle)(e,()=>( {
wrapper:p.current,content:g.current,lenis:f
}
),[f]),(0,s.useEffect)(()=> {
let t=new u(Object.assign(Object.assign( {

}
,l),!r&& {
wrapper:p.current,content:g.current
}
));
return w(t),()=> {
t.destroy(),w(void 0)
}

}
,[r,JSON.stringify(l)]),function(t,e=0) {
(0,s.useEffect)(()=> {
if(t)return o.add(t,e),()=>o.remove(t)
}
,[t,e])
}
(t=> {
n&&(null==f||f.raf(t))
}
,h),(0,s.useEffect)(()=> {
r&&f&&v.setState( {
lenis:f,addCallback:y,removeCallback:b
}
)
}
,[r,f,y,b]);
let _=(0,s.useCallback)(t=> {
for(let e=0;
e<S.current.length;
e++)S.current[e].callback(t)
}
,[]);
(0,s.useEffect)(()=>(null==f||f.on("scroll",_),()=> {
null==f||f.off("scroll",_)
}
),[f,_]);
let E=(0,s.useCallback)(()=> {
p.current&&(p.current.className=(0,d.Z)(null==f?void 0:f.className,a))
}
,[f,a]);
return(0,s.useEffect)(()=>(E(),null==f||f.on("className change",E),()=> {
null==f||f.off("className change",E)
}
),[f,E]),s.createElement(m.Provider, {
value: {
lenis:f,addCallback:y,removeCallback:b
}

}
,r?i:s.createElement("div",Object.assign( {
ref:p,className:(0,d.Z)(null==f?void 0:f.className,a)
}
,c),s.createElement("div", {
ref:g
}
,i)))
}
)
}

}
]);
