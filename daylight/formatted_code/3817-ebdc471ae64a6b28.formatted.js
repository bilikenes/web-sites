(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3817], {
35192:e=> {
function t(e,t=100,n= {

}
) {
let r,o,a,i,u;
if("function"!=typeof e)throw TypeError(`Expected the first parameter to be a function, got \`${typeof e}\`.`);
if(t<0)throw RangeError("`wait` must not be negative.");
let {
immediate:s
}
="boolean"==typeof n? {
immediate:n
}
:n;
function l() {
let t=r,n=o;
return r=void 0,o=void 0,u=e.apply(t,n)
}
function c() {
let e=Date.now()-i;
e<t&&e>=0?a=setTimeout(c,t-e):(a=void 0,s||(u=l()))
}
let d=function(...e) {
if(r&&this!==r&&Object.getPrototypeOf(this)===Object.getPrototypeOf(r))throw Error("Debounced method called with different contexts of the same prototype.");
r=this,o=e,i=Date.now();
let n=s&&!a;
return a||(a=setTimeout(c,t)),n&&(u=l()),u
}
;
return Object.defineProperty(d,"isPending", {
get:()=>void 0!==a
}
),d.clear=()=> {
a&&(clearTimeout(a),a=void 0)
}
,d.flush=()=> {
a&&d.trigger()
}
,d.trigger=()=> {
u=l(),d.clear()
}
,d
}
e.exports.debounce=t,e.exports=t
}
,73134:e=> {
"use strict";
e.exports=function e(t,n) {
if(t===n)return!0;
if(t&&n&&"object"==typeof t&&"object"==typeof n) {
if(t.constructor!==n.constructor)return!1;
if(Array.isArray(t)) {
if((r=t.length)!=n.length)return!1;
for(o=r;
0!=o--;
)if(!e(t[o],n[o]))return!1;
return!0
}
if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;
if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();
if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();
if((r=(a=Object.keys(t)).length)!==Object.keys(n).length)return!1;
for(o=r;
0!=o--;
)if(!Object.prototype.hasOwnProperty.call(n,a[o]))return!1;
for(o=r;
0!=o--;
) {
var r,o,a,i=a[o];
if(("_owner"!==i||!t.$$typeof)&&!e(t[i],n[i]))return!1
}
return!0
}
return t!=t&&n!=n
}

}
,35e3:(e,t,n)=> {
"use strict";
n.d(t, {
default:()=>o.a
}
);
var r=n(31686),o=n.n(r)
}
,31686:(e,t,n)=> {
"use strict";
Object.defineProperty(t,"__esModule", {
value:!0
}
),Object.defineProperty(t,"default", {
enumerable:!0,get:function() {
return a
}

}
);
let r=n(65471);
n(69797),n(15791);
let o=r._(n(23645));
function a(e,t) {
var n;
let r= {
loading:e=> {
let {
error:t,isLoading:n,pastDelay:r
}
=e;
return null
}

}
;
"function"==typeof e&&(r.loader=e);
let a= {
...r,...t
}
;
return(0,o.default)( {
...a,modules:null==(n=a.loadableGenerated)?void 0:n.modules
}
)
}
("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule", {
value:!0
}
),Object.assign(t.default,t),e.exports=t.default)
}
,78154:(e,t,n)=> {
"use strict";
Object.defineProperty(t,"__esModule", {
value:!0
}
),Object.defineProperty(t,"BailoutToCSR", {
enumerable:!0,get:function() {
return o
}

}
);
let r=n(19354);
function o(e) {
let {
reason:t,children:n
}
=e;
if("undefined"==typeof window)throw new r.BailoutToCSRError(t);
return n
}

}
,23645:(e,t,n)=> {
"use strict";
Object.defineProperty(t,"__esModule", {
value:!0
}
),Object.defineProperty(t,"default", {
enumerable:!0,get:function() {
return l
}

}
);
let r=n(69797),o=n(15791),a=n(78154),i=n(93627);
function u(e) {
return {
default:e&&"default"in e?e.default:e
}

}
let s= {
loader:()=>Promise.resolve(u(()=>null)),loading:null,ssr:!0
}
,l=function(e) {
let t= {
...s,...e
}
,n=(0,o.lazy)(()=>t.loader().then(u)),l=t.loading;
function c(e) {
let u=l?(0,r.jsx)(l, {
isLoading:!0,pastDelay:!0,error:null
}
):null,s=t.ssr?(0,r.jsxs)(r.Fragment, {
children:["undefined"==typeof window?(0,r.jsx)(i.PreloadCss, {
moduleIds:t.modules
}
):null,(0,r.jsx)(n, {
...e
}
)]
}
):(0,r.jsx)(a.BailoutToCSR, {
reason:"next/dynamic",children:(0,r.jsx)(n, {
...e
}
)
}
);
return(0,r.jsx)(o.Suspense, {
fallback:u,children:s
}
)
}
return c.displayName="LoadableComponent",c
}

}
,93627:(e,t,n)=> {
"use strict";
Object.defineProperty(t,"__esModule", {
value:!0
}
),Object.defineProperty(t,"PreloadCss", {
enumerable:!0,get:function() {
return a
}

}
);
let r=n(69797),o=n(89312);
function a(e) {
let {
moduleIds:t
}
=e;
if("undefined"!=typeof window)return null;
let n=(0,o.getExpectedRequestStore)("next/dynamic css"),a=[];
if(n.reactLoadableManifest&&t) {
let e=n.reactLoadableManifest;
for(let n of t) {
if(!e[n])continue;
let t=e[n].files.filter(e=>e.endsWith(".css"));
a.push(...t)
}

}
return 0===a.length?null:(0,r.jsx)(r.Fragment, {
children:a.map(e=>(0,r.jsx)("link", {
precedence:"dynamic",rel:"stylesheet",href:n.assetPrefix+"/_next/"+encodeURI(e),as:"style"
}
,e))
}
)
}

}
,61225:(e,t,n)=> {
"use strict";
function r(e) {
for(var t=[],n=1;
n<arguments.length;
n++)t[n-1]=arguments[n];
e&&e.addEventListener&&e.addEventListener.apply(e,t)
}
function o(e) {
for(var t=[],n=1;
n<arguments.length;
n++)t[n-1]=arguments[n];
e&&e.removeEventListener&&e.removeEventListener.apply(e,t)
}
n.d(t, {
S1:()=>o,ae:()=>i,jU:()=>a,on:()=>r
}
);
var a="undefined"!=typeof window,i="undefined"!=typeof navigator
}
,56635:(e,t,n)=> {
"use strict";
n.d(t, {
Z:()=>s
}
);
var r=n(15791),o=n(61225),a=n(73134);
let i=n.n(a)();
var u=o.ae?navigator:void 0;
let s=u&&"function"==typeof u.getBattery?function() {
var e=(0,r.useState)( {
isSupported:!0,fetched:!1
}
),t=e[0],n=e[1];
return(0,r.useEffect)(function() {
var e=!0,r=null,a=function() {
if(e&&r) {
var o= {
isSupported:!0,fetched:!0,level:r.level,charging:r.charging,dischargingTime:r.dischargingTime,chargingTime:r.chargingTime
}
;
i(t,o)||n(o)
}

}
;
return u.getBattery().then(function(t) {
e&&(r=t,(0,o.on)(r,"chargingchange",a),(0,o.on)(r,"chargingtimechange",a),(0,o.on)(r,"dischargingtimechange",a),(0,o.on)(r,"levelchange",a),a())
}
),function() {
e=!1,r&&((0,o.S1)(r,"chargingchange",a),(0,o.S1)(r,"chargingtimechange",a),(0,o.S1)(r,"dischargingtimechange",a),(0,o.S1)(r,"levelchange",a))
}

}
,[]),t
}
:function() {
return {
isSupported:!1
}

}

}
,60992:(e,t,n)=> {
"use strict";
n.d(t, {
Z:()=>o
}
);
var r=n(15791);
let o=function(e) {
(0,r.useEffect)(e,[])
}

}
,23478:(e,t,n)=> {
"use strict";
n.d(t, {
Z:()=>s
}
);
var r,o,a=n(15791),i=n(83934);
let u="undefined"!=typeof window&&(null!=(r=window.document)&&r.createElement||(null==(o=window.navigator)?void 0:o.product)==="ReactNative")?a.useLayoutEffect:a.useEffect;
function s() {
let e=(0,i.Ue)(e=>( {
current:[],version:0,set:e
}
));
return {
In:( {
children:t
}
)=> {
let n=e(e=>e.set),r=e(e=>e.version);
return u(()=> {
n(e=>( {
version:e.version+1
}
))
}
,[]),u(()=>(n(( {
current:e
}
)=>( {
current:[...e,t]
}
)),()=>n(( {
current:e
}
)=>( {
current:e.filter(e=>e!==t)
}
))),[t,r]),null
}
,Out:()=> {
let t=e(e=>e.current);
return a.createElement(a.Fragment,null,t)
}

}

}

}
,17141:e=> {
e.exports= {
style: {
fontFamily:"'__abcRoomFont_38b1ae', '__abcRoomFont_Fallback_38b1ae'"
}
,className:"__className_38b1ae",variable:"__variable_38b1ae"
}

}
,32494:e=> {
e.exports= {
style: {
fontFamily:"'__abcRoomExtendedFont_412c3c', '__abcRoomExtendedFont_Fallback_412c3c'",fontWeight:400
}
,className:"__className_412c3c",variable:"__variable_412c3c"
}

}
,54757:e=> {
e.exports= {
style: {
fontFamily:"'__abcArizonaFlareFont_498f8e', '__abcArizonaFlareFont_Fallback_498f8e'"
}
,className:"__className_498f8e",variable:"__variable_498f8e"
}

}
,49730:(e,t,n)=> {
"use strict";
n.d(t, {
VY:()=>eE,ck:()=>eh,rU:()=>ey,aV:()=>ew,fC:()=>eg,xz:()=>eb,l_:()=>ex
}
);
var r,o=n(15791),a=n(73161),i=n(54324),u=n(90591),s=n(69389),l=n(80068),c=n(39546),d=n(92771),f=n(13695),v=n(92933),p=n(8686),m=n(53775),g=n(69797),w="dismissableLayer.update",h=o.createContext( {
layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set
}
),b=o.forwardRef((e,t)=> {
let {
disableOutsidePointerEvents:n=!1,onEscapeKeyDown:a,onPointerDownOutside:i,onFocusOutside:l,onInteractOutside:d,onDismiss:f,...v
}
=e,p=o.useContext(h),[b,x]=o.useState(null),_=b?.ownerDocument??globalThis?.document,[,R]=o.useState( {

}
),j=(0,c.e)(t,e=>x(e)),C=Array.from(p.layers),[P]=[...p.layersWithOutsidePointerEventsDisabled].slice(-1),T=C.indexOf(P),M=b?C.indexOf(b):-1,S=p.layersWithOutsidePointerEventsDisabled.size>0,L=M>=T,k=function(e) {
let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:globalThis?.document,n=(0,m.W)(e),r=o.useRef(!1),a=o.useRef(()=> {

}
);
return o.useEffect(()=> {
let e=e=> {
if(e.target&&!r.current) {
let r=function() {
E("dismissableLayer.pointerDownOutside",n,o, {
discrete:!0
}
)
}
,o= {
originalEvent:e
}
;
"touch"===e.pointerType?(t.removeEventListener("click",a.current),a.current=r,t.addEventListener("click",a.current, {
once:!0
}
)):r()
}
else t.removeEventListener("click",a.current);
r.current=!1
}
,o=window.setTimeout(()=> {
t.addEventListener("pointerdown",e)
}
,0);
return()=> {
window.clearTimeout(o),t.removeEventListener("pointerdown",e),t.removeEventListener("click",a.current)
}

}
,[t,n]), {
onPointerDownCapture:()=>r.current=!0
}

}
(e=> {
let t=e.target,n=[...p.branches].some(e=>e.contains(t));
!L||n||(i?.(e),d?.(e),e.defaultPrevented||f?.())
}
,_),N=function(e) {
let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:globalThis?.document,n=(0,m.W)(e),r=o.useRef(!1);
return o.useEffect(()=> {
let e=e=> {
e.target&&!r.current&&E("dismissableLayer.focusOutside",n, {
originalEvent:e
}
, {
discrete:!1
}
)
}
;
return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)
}
,[t,n]), {
onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1
}

}
(e=> {
let t=e.target;
[...p.branches].some(e=>e.contains(t))||(l?.(e),d?.(e),e.defaultPrevented||f?.())
}
,_);
return!function(e,t=globalThis?.document) {
let n=(0,m.W)(e);
o.useEffect(()=> {
let e=e=> {
"Escape"===e.key&&n(e)
}
;
return t.addEventListener("keydown",e, {
capture:!0
}
),()=>t.removeEventListener("keydown",e, {
capture:!0
}
)
}
,[n,t])
}
(e=> {
M!==p.layers.size-1||(a?.(e),!e.defaultPrevented&&f&&(e.preventDefault(),f()))
}
,_),o.useEffect(()=> {
if(b)return n&&(0===p.layersWithOutsidePointerEventsDisabled.size&&(r=_.body.style.pointerEvents,_.body.style.pointerEvents="none"),p.layersWithOutsidePointerEventsDisabled.add(b)),p.layers.add(b),y(),()=> {
n&&1===p.layersWithOutsidePointerEventsDisabled.size&&(_.body.style.pointerEvents=r)
}

}
,[b,_,n,p]),o.useEffect(()=>()=> {
b&&(p.layers.delete(b),p.layersWithOutsidePointerEventsDisabled.delete(b),y())
}
,[b,p]),o.useEffect(()=> {
let e=()=>R( {

}
);
return document.addEventListener(w,e),()=>document.removeEventListener(w,e)
}
,[]),(0,g.jsx)(s.WV.div, {
...v,ref:j,style: {
pointerEvents:S?L?"auto":"none":void 0,...e.style
}
,onFocusCapture:(0,u.M)(e.onFocusCapture,N.onFocusCapture),onBlurCapture:(0,u.M)(e.onBlurCapture,N.onBlurCapture),onPointerDownCapture:(0,u.M)(e.onPointerDownCapture,k.onPointerDownCapture)
}
)
}
);
function y() {
let e=new CustomEvent(w);
document.dispatchEvent(e)
}
function E(e,t,n,r) {
let {
discrete:o
}
=r,a=n.originalEvent.target,i=new CustomEvent(e, {
bubbles:!1,cancelable:!0,detail:n
}
);
t&&a.addEventListener(e,t, {
once:!0
}
),o?(0,s.jH)(a,i):a.dispatchEvent(i)
}
b.displayName="DismissableLayer",o.forwardRef((e,t)=> {
let n=o.useContext(h),r=o.useRef(null),a=(0,c.e)(t,r);
return o.useEffect(()=> {
let e=r.current;
if(e)return n.branches.add(e),()=> {
n.branches.delete(e)
}

}
,[n.branches]),(0,g.jsx)(s.WV.div, {
...e,ref:a
}
)
}
).displayName="DismissableLayerBranch";
var x=n(21252),_=o.forwardRef((e,t)=>(0,g.jsx)(s.WV.span, {
...e,ref:t,style: {
position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style
}

}
));
_.displayName="VisuallyHidden";
var R="NavigationMenu",[j,C,P]=(0,p.B)(R),[T,M,S]=(0,p.B)(R),[L,k]=(0,i.b)(R,[P,S]),[N,O]=L(R),[F,D]=L(R),W=o.forwardRef((e,t)=> {
let {
__scopeNavigationMenu:n,value:r,onValueChange:a,defaultValue:i,delayDuration:u=200,skipDelayDuration:f=300,orientation:v="horizontal",dir:p,...m
}
=e,[w,h]=o.useState(null),b=(0,c.e)(t,e=>h(e)),y=(0,d.gm)(p),E=o.useRef(0),x=o.useRef(0),_=o.useRef(0),[R,j]=o.useState(!0),[C="",P]=(0,l.T)( {
prop:r,onChange:e=> {
let t=f>0;
""!==e?(window.clearTimeout(_.current),t&&j(!1)):(window.clearTimeout(_.current),_.current=window.setTimeout(()=>j(!0),f)),a?.(e)
}
,defaultProp:i
}
),T=o.useCallback(()=> {
window.clearTimeout(x.current),x.current=window.setTimeout(()=>P(""),150)
}
,[P]),M=o.useCallback(e=> {
window.clearTimeout(x.current),P(e)
}
,[P]),S=o.useCallback(e=> {
C===e?window.clearTimeout(x.current):E.current=window.setTimeout(()=> {
window.clearTimeout(x.current),P(e)
}
,u)
}
,[C,P,u]);
return o.useEffect(()=>()=> {
window.clearTimeout(E.current),window.clearTimeout(x.current),window.clearTimeout(_.current)
}
,[]),(0,g.jsx)(I, {
scope:n,isRootMenu:!0,value:C,dir:y,orientation:v,rootNavigationMenu:w,onTriggerEnter:e=> {
window.clearTimeout(E.current),R?S(e):M(e)
}
,onTriggerLeave:()=> {
window.clearTimeout(E.current),T()
}
,onContentEnter:()=>window.clearTimeout(x.current),onContentLeave:T,onItemSelect:e=> {
P(t=>t===e?"":e)
}
,onItemDismiss:()=>P(""),children:(0,g.jsx)(s.WV.nav, {
"aria-label":"Main","data-orientation":v,dir:y,...m,ref:b
}
)
}
)
}
);
W.displayName=R;
var A="NavigationMenuSub";
o.forwardRef((e,t)=> {
let {
__scopeNavigationMenu:n,value:r,onValueChange:o,defaultValue:a,orientation:i="horizontal",...u
}
=e,c=O(A,n),[d="",f]=(0,l.T)( {
prop:r,onChange:o,defaultProp:a
}
);
return(0,g.jsx)(I, {
scope:n,isRootMenu:!1,value:d,dir:c.dir,orientation:i,rootNavigationMenu:c.rootNavigationMenu,onTriggerEnter:e=>f(e),onItemSelect:e=>f(e),onItemDismiss:()=>f(""),children:(0,g.jsx)(s.WV.div, {
"data-orientation":i,...u,ref:t
}
)
}
)
}
).displayName=A;
var I=e=> {
let {
scope:t,isRootMenu:n,rootNavigationMenu:r,dir:a,orientation:i,children:u,value:s,onItemSelect:l,onItemDismiss:c,onTriggerEnter:d,onTriggerLeave:f,onContentEnter:p,onContentLeave:w
}
=e,[h,b]=o.useState(null),[y,E]=o.useState(new Map),[x,_]=o.useState(null);
return(0,g.jsx)(N, {
scope:t,isRootMenu:n,rootNavigationMenu:r,value:s,previousValue:function(e) {
let t=o.useRef( {
value:e,previous:e
}
);
return o.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])
}
(s),baseId:(0,v.M)(),dir:a,orientation:i,viewport:h,onViewportChange:b,indicatorTrack:x,onIndicatorTrackChange:_,onTriggerEnter:(0,m.W)(d),onTriggerLeave:(0,m.W)(f),onContentEnter:(0,m.W)(p),onContentLeave:(0,m.W)(w),onItemSelect:(0,m.W)(l),onItemDismiss:(0,m.W)(c),onViewportContentChange:o.useCallback((e,t)=> {
E(n=>(n.set(e,t),new Map(n)))
}
,[]),onViewportContentRemove:o.useCallback(e=> {
E(t=>t.has(e)?(t.delete(e),new Map(t)):t)
}
,[]),children:(0,g.jsx)(j.Provider, {
scope:t,children:(0,g.jsx)(F, {
scope:t,items:y,children:u
}
)
}
)
}
)
}
,V="NavigationMenuList",z=o.forwardRef((e,t)=> {
let {
__scopeNavigationMenu:n,...r
}
=e,o=O(V,n),a=(0,g.jsx)(s.WV.ul, {
"data-orientation":o.orientation,...r,ref:t
}
);
return(0,g.jsx)(s.WV.div, {
style: {
position:"relative"
}
,ref:o.onIndicatorTrackChange,children:(0,g.jsx)(j.Slot, {
scope:n,children:o.isRootMenu?(0,g.jsx)(ei, {
asChild:!0,children:a
}
):a
}
)
}
)
}
);
z.displayName=V;
var K="NavigationMenuItem",[B,$]=L(K),H=o.forwardRef((e,t)=> {
let {
__scopeNavigationMenu:n,value:r,...a
}
=e,i=(0,v.M)(),u=o.useRef(null),l=o.useRef(null),c=o.useRef(null),d=o.useRef(()=> {

}
),f=o.useRef(!1),p=o.useCallback(function() {
let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"start";
if(u.current) {
d.current();
let t=el(u.current);
t.length&&ec("start"===e?t:t.reverse())
}

}
,[]),m=o.useCallback(()=> {
if(u.current) {
let e=el(u.current);
e.length&&(d.current=function(e) {
return e.forEach(e=> {
e.dataset.tabindex=e.getAttribute("tabindex")||"",e.setAttribute("tabindex","-1")
}
),()=> {
e.forEach(e=> {
let t=e.dataset.tabindex;
e.setAttribute("tabindex",t)
}
)
}

}
(e))
}

}
,[]);
return(0,g.jsx)(B, {
scope:n,value:r||i||"LEGACY_REACT_AUTO_VALUE",triggerRef:l,contentRef:u,focusProxyRef:c,wasEscapeCloseRef:f,onEntryKeyDown:p,onFocusProxyEnter:p,onRootContentClose:m,onContentFocusOutside:m,children:(0,g.jsx)(s.WV.li, {
...a,ref:t
}
)
}
)
}
);
H.displayName=K;
var U="NavigationMenuTrigger",q=o.forwardRef((e,t)=> {
let {
__scopeNavigationMenu:n,disabled:r,...a
}
=e,i=O(U,e.__scopeNavigationMenu),l=$(U,e.__scopeNavigationMenu),d=o.useRef(null),f=(0,c.e)(d,l.triggerRef,t),v=ev(i.baseId,l.value),p=ep(i.baseId,l.value),m=o.useRef(!1),w=o.useRef(!1),h=l.value===i.value;
return(0,g.jsxs)(g.Fragment, {
children:[(0,g.jsx)(j.ItemSlot, {
scope:n,value:l.value,children:(0,g.jsx)(es, {
asChild:!0,children:(0,g.jsx)(s.WV.button, {
id:v,disabled:r,"data-disabled":r?"":void 0,"data-state":ef(h),"aria-expanded":h,"aria-controls":p,...a,ref:f,onPointerEnter:(0,u.M)(e.onPointerEnter,()=> {
w.current=!1,l.wasEscapeCloseRef.current=!1
}
),onPointerMove:(0,u.M)(e.onPointerMove,em(()=> {
r||w.current||l.wasEscapeCloseRef.current||m.current||(i.onTriggerEnter(l.value),m.current=!0)
}
)),onPointerLeave:(0,u.M)(e.onPointerLeave,em(()=> {
r||(i.onTriggerLeave(),m.current=!1)
}
)),onClick:(0,u.M)(e.onClick,()=> {
i.onItemSelect(l.value),w.current=h
}
),onKeyDown:(0,u.M)(e.onKeyDown,e=> {
let t= {
horizontal:"ArrowDown",vertical:"rtl"===i.dir?"ArrowLeft":"ArrowRight"
}
[i.orientation];
h&&e.key===t&&(l.onEntryKeyDown(),e.preventDefault())
}
)
}
)
}
)
}
),h&&(0,g.jsxs)(g.Fragment, {
children:[(0,g.jsx)(_, {
"aria-hidden":!0,tabIndex:0,ref:l.focusProxyRef,onFocus:e=> {
let t=l.contentRef.current,n=e.relatedTarget,r=n===d.current,o=t?.contains(n);
(r||!o)&&l.onFocusProxyEnter(r?"start":"end")
}

}
),i.viewport&&(0,g.jsx)("span", {
"aria-owns":p
}
)]
}
)]
}
)
}
);
q.displayName=U;
var G="navigationMenu.linkSelect",Y=o.forwardRef((e,t)=> {
let {
__scopeNavigationMenu:n,active:r,onSelect:o,...a
}
=e;
return(0,g.jsx)(es, {
asChild:!0,children:(0,g.jsx)(s.WV.a, {
"data-active":r?"":void 0,"aria-current":r?"page":void 0,...a,ref:t,onClick:(0,u.M)(e.onClick,e=> {
let t=e.target,n=new CustomEvent(G, {
bubbles:!0,cancelable:!0
}
);
if(t.addEventListener(G,e=>o?.(e), {
once:!0
}
),(0,s.jH)(t,n),!n.defaultPrevented&&!e.metaKey) {
let e=new CustomEvent(et, {
bubbles:!0,cancelable:!0
}
);
(0,s.jH)(t,e)
}

}
, {
checkForDefaultPrevented:!1
}
)
}
)
}
)
}
);
Y.displayName="NavigationMenuLink";
var Z="NavigationMenuIndicator";
o.forwardRef((e,t)=> {
let {
forceMount:n,...r
}
=e,o=O(Z,e.__scopeNavigationMenu),i=!!o.value;
return o.indicatorTrack?a.createPortal((0,g.jsx)(f.z, {
present:n||i,children:(0,g.jsx)(X, {
...r,ref:t
}
)
}
),o.indicatorTrack):null
}
).displayName=Z;
var X=o.forwardRef((e,t)=> {
let {
__scopeNavigationMenu:n,...r
}
=e,a=O(Z,n),i=C(n),[u,l]=o.useState(null),[c,d]=o.useState(null),f="horizontal"===a.orientation,v=!!a.value;
o.useEffect(()=> {
let e=i(),t=e.find(e=>e.value===a.value)?.ref.current;
t&&l(t)
}
,[i,a.value]);
let p=()=> {
u&&d( {
size:f?u.offsetWidth:u.offsetHeight,offset:f?u.offsetLeft:u.offsetTop
}
)
}
;
return ed(u,p),ed(a.indicatorTrack,p),c?(0,g.jsx)(s.WV.div, {
"aria-hidden":!0,"data-state":v?"visible":"hidden","data-orientation":a.orientation,...r,ref:t,style: {
position:"absolute",...f? {
left:0,width:c.size+"px",transform:`translateX(${c.offset}px)`
}
: {
top:0,height:c.size+"px",transform:`translateY(${c.offset}px)`
}
,...r.style
}

}
):null
}
),J="NavigationMenuContent",Q=o.forwardRef((e,t)=> {
let {
forceMount:n,...r
}
=e,o=O(J,e.__scopeNavigationMenu),a=$(J,e.__scopeNavigationMenu),i=(0,c.e)(a.contentRef,t),s=a.value===o.value,l= {
value:a.value,triggerRef:a.triggerRef,focusProxyRef:a.focusProxyRef,wasEscapeCloseRef:a.wasEscapeCloseRef,onContentFocusOutside:a.onContentFocusOutside,onRootContentClose:a.onRootContentClose,...r
}
;
return o.viewport?(0,g.jsx)(ee, {
forceMount:n,...l,ref:i
}
):(0,g.jsx)(f.z, {
present:n||s,children:(0,g.jsx)(en, {
"data-state":ef(s),...l,ref:i,onPointerEnter:(0,u.M)(e.onPointerEnter,o.onContentEnter),onPointerLeave:(0,u.M)(e.onPointerLeave,em(o.onContentLeave)),style: {
pointerEvents:!s&&o.isRootMenu?"none":void 0,...l.style
}

}
)
}
)
}
);
Q.displayName=J;
var ee=o.forwardRef((e,t)=> {
let {
onViewportContentChange:n,onViewportContentRemove:r
}
=O(J,e.__scopeNavigationMenu);
return(0,x.b)(()=> {
n(e.value, {
ref:t,...e
}
)
}
,[e,t,n]),(0,x.b)(()=>()=>r(e.value),[e.value,r]),null
}
),et="navigationMenu.rootContentDismiss",en=o.forwardRef((e,t)=> {
let {
__scopeNavigationMenu:n,value:r,triggerRef:a,focusProxyRef:i,wasEscapeCloseRef:s,onRootContentClose:l,onContentFocusOutside:d,...f
}
=e,v=O(J,n),p=o.useRef(null),m=(0,c.e)(p,t),w=ev(v.baseId,r),h=ep(v.baseId,r),y=C(n),E=o.useRef(null), {
onItemDismiss:x
}
=v;
o.useEffect(()=> {
let e=p.current;
if(v.isRootMenu&&e) {
let t=()=> {
x(),l(),e.contains(document.activeElement)&&a.current?.focus()
}
;
return e.addEventListener(et,t),()=>e.removeEventListener(et,t)
}

}
,[v.isRootMenu,e.value,a,x,l]);
let _=o.useMemo(()=> {
let e=y().map(e=>e.value);
"rtl"===v.dir&&e.reverse();
let t=e.indexOf(v.value),n=e.indexOf(v.previousValue),o=r===v.value,a=n===e.indexOf(r);
if(!o&&!a)return E.current;
let i=(()=> {
if(t!==n) {
if(o&&-1!==n)return t>n?"from-end":"from-start";
if(a&&-1!==t)return t>n?"to-start":"to-end"
}
return null
}
)();
return E.current=i,i
}
,[v.previousValue,v.value,v.dir,y,r]);
return(0,g.jsx)(ei, {
asChild:!0,children:(0,g.jsx)(b, {
id:h,"aria-labelledby":w,"data-motion":_,"data-orientation":v.orientation,...f,ref:m,disableOutsidePointerEvents:!1,onDismiss:()=> {
let e=new Event(et, {
bubbles:!0,cancelable:!0
}
);
p.current?.dispatchEvent(e)
}
,onFocusOutside:(0,u.M)(e.onFocusOutside,e=> {
d();
let t=e.target;
v.rootNavigationMenu?.contains(t)&&e.preventDefault()
}
),onPointerDownOutside:(0,u.M)(e.onPointerDownOutside,e=> {
let t=e.target,n=y().some(e=>e.ref.current?.contains(t)),r=v.isRootMenu&&v.viewport?.contains(t);
(n||r||!v.isRootMenu)&&e.preventDefault()
}
),onKeyDown:(0,u.M)(e.onKeyDown,e=> {
let t=e.altKey||e.ctrlKey||e.metaKey;
if("Tab"===e.key&&!t) {
let t=el(e.currentTarget),n=document.activeElement,r=t.findIndex(e=>e===n);
ec(e.shiftKey?t.slice(0,r).reverse():t.slice(r+1,t.length))?e.preventDefault():i.current?.focus()
}

}
),onEscapeKeyDown:(0,u.M)(e.onEscapeKeyDown,e=> {
s.current=!0
}
)
}
)
}
)
}
),er="NavigationMenuViewport",eo=o.forwardRef((e,t)=> {
let {
forceMount:n,...r
}
=e,o=!!O(er,e.__scopeNavigationMenu).value;
return(0,g.jsx)(f.z, {
present:n||o,children:(0,g.jsx)(ea, {
...r,ref:t
}
)
}
)
}
);
eo.displayName=er;
var ea=o.forwardRef((e,t)=> {
let {
__scopeNavigationMenu:n,children:r,...a
}
=e,i=O(er,n),l=(0,c.e)(t,i.onViewportChange),d=D(J,e.__scopeNavigationMenu),[v,p]=o.useState(null),[m,w]=o.useState(null),h=v?v?.width+"px":void 0,b=v?v?.height+"px":void 0,y=!!i.value,E=y?i.value:i.previousValue;
return ed(m,()=> {
m&&p( {
width:m.offsetWidth,height:m.offsetHeight
}
)
}
),(0,g.jsx)(s.WV.div, {
"data-state":ef(y),"data-orientation":i.orientation,...a,ref:l,style: {
pointerEvents:!y&&i.isRootMenu?"none":void 0,"--radix-navigation-menu-viewport-width":h,"--radix-navigation-menu-viewport-height":b,...a.style
}
,onPointerEnter:(0,u.M)(e.onPointerEnter,i.onContentEnter),onPointerLeave:(0,u.M)(e.onPointerLeave,em(i.onContentLeave)),children:Array.from(d.items).map(e=> {
let[t, {
ref:n,forceMount:r,...o
}
]=e,a=E===t;
return(0,g.jsx)(f.z, {
present:r||a,children:(0,g.jsx)(en, {
...o,ref:(0,c.F)(n,e=> {
a&&e&&w(e)
}
)
}
)
}
,t)
}
)
}
)
}
),ei=o.forwardRef((e,t)=> {
let {
__scopeNavigationMenu:n,...r
}
=e,o=O("FocusGroup",n);
return(0,g.jsx)(T.Provider, {
scope:n,children:(0,g.jsx)(T.Slot, {
scope:n,children:(0,g.jsx)(s.WV.div, {
dir:o.dir,...r,ref:t
}
)
}
)
}
)
}
),eu=["ArrowRight","ArrowLeft","ArrowUp","ArrowDown"],es=o.forwardRef((e,t)=> {
let {
__scopeNavigationMenu:n,...r
}
=e,o=M(n),a=O("FocusGroupItem",n);
return(0,g.jsx)(T.ItemSlot, {
scope:n,children:(0,g.jsx)(s.WV.button, {
...r,ref:t,onKeyDown:(0,u.M)(e.onKeyDown,e=> {
if(["Home","End",...eu].includes(e.key)) {
let t=o().map(e=>e.ref.current);
if(["rtl"===a.dir?"ArrowRight":"ArrowLeft","ArrowUp","End"].includes(e.key)&&t.reverse(),eu.includes(e.key)) {
let n=t.indexOf(e.currentTarget);
t=t.slice(n+1)
}
setTimeout(()=>ec(t)),e.preventDefault()
}

}
)
}
)
}
)
}
);
function el(e) {
let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT, {
acceptNode:e=> {
let t="INPUT"===e.tagName&&"hidden"===e.type;
return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP
}

}
);
for(;
n.nextNode();
)t.push(n.currentNode);
return t
}
function ec(e) {
let t=document.activeElement;
return e.some(e=>e===t||(e.focus(),document.activeElement!==t))
}
function ed(e,t) {
let n=(0,m.W)(t);
(0,x.b)(()=> {
let t=0;
if(e) {
let r=new ResizeObserver(()=> {
cancelAnimationFrame(t),t=window.requestAnimationFrame(n)
}
);
return r.observe(e),()=> {
window.cancelAnimationFrame(t),r.unobserve(e)
}

}

}
,[e,n])
}
function ef(e) {
return e?"open":"closed"
}
function ev(e,t) {
return`${e}-trigger-${t}`
}
function ep(e,t) {
return`${e}-content-${t}`
}
function em(e) {
return t=>"mouse"===t.pointerType?e(t):void 0
}
var eg=W,ew=z,eh=H,eb=q,ey=Y,eE=Q,ex=eo
}
,7545:(e,t,n)=> {
"use strict";
n.d(t, {
h:()=>s
}
);
var r=n(15791),o=n(73161),a=n(69389),i=n(21252),u=n(69797),s=r.forwardRef((e,t)=> {
let {
container:n,...s
}
=e,[l,c]=r.useState(!1);
(0,i.b)(()=>c(!0),[]);
let d=n||l&&globalThis?.document?.body;
return d?o.createPortal((0,u.jsx)(a.WV.div, {
...s,ref:t
}
),d):null
}
);
s.displayName="Portal"
}
,51953:(e,t,n)=> {
"use strict";
n.d(t, {
Analytics:()=>l
}
);
var r=n(15791),o=n(89577),a=()=> {
window.va||(window.va=function() {
for(var e=arguments.length,t=Array(e),n=0;
n<e;
n++)t[n]=arguments[n];
(window.vaq=window.vaq||[]).push(t)
}
)
}
;
function i() {
return"undefined"!=typeof window
}
function u() {
return"production"
}
function s() {
return"development"===((i()?window.vam:u())||"production")
}
function l(e) {
return(0,r.useEffect)(()=> {
var t;
e.beforeSend&&(null==(t=window.va)||t.call(window,"beforeSend",e.beforeSend))
}
,[e.beforeSend]),(0,r.useEffect)(()=> {
!function() {
var e;
let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]: {
debug:!0
}
;
if(!i())return;
(function() {
let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"auto";
if("auto"===e) {
window.vam=u();
return
}
window.vam=e
}
)(t.mode),a(),t.beforeSend&&(null==(e=window.va)||e.call(window,"beforeSend",t.beforeSend));
let n=t.scriptSrc?t.scriptSrc:s()?"https://va.vercel-scripts.com/v1/script.debug.js":t.basePath?`${t.basePath}/insights/script.js`:"/_vercel/insights/script.js";
if(document.head.querySelector(`script[src*="${n}"]`))return;
let r=document.createElement("script");
r.src=n,r.defer=!0,r.dataset.sdkn="@vercel/analytics"+(t.framework?`/${t.framework}`:""),r.dataset.sdkv="1.5.0",t.disableAutoTrack&&(r.dataset.disableAutoTrack="1"),t.endpoint?r.dataset.endpoint=t.endpoint:t.basePath&&(r.dataset.endpoint=`${t.basePath}/insights`),t.dsn&&(r.dataset.dsn=t.dsn),r.onerror=()=> {
let e=s()?"Please check if any ad blockers are enabled and try again.":"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
console.log(`[Vercel Web Analytics] Failed to load script from ${n}. ${e}`)
}
,s()&&!1===t.debug&&(r.dataset.debug="false"),document.head.appendChild(r)
}
( {
framework:e.framework||"react",basePath:e.basePath??function() {
if(void 0!==o&&void 0!==o.env)return o.env.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH
}
(),...void 0!==e.route&& {
disableAutoTrack:!0
}
,...e
}
)
}
,[]),(0,r.useEffect)(()=> {
e.route&&e.path&&function(e) {
var t;
let {
route:n,path:r
}
=e;
null==(t=window.va)||t.call(window,"pageview", {
route:n,path:r
}
)
}
( {
route:e.route,path:e.path
}
)
}
,[e.route,e.path]),null
}

}

}
]);
