(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,46296,e=> {
"use strict";
var t=e.i(56242),l=e.i(64204);
e.s(["Media",0,( {
media:e,alt:i,className:r="",style:a= {

}

}
)=>(0,t.jsx)(l.default, {
src:e.url||e.src,alt:e.alt||i||e.title||"",width:e.width,height:e.height,className:r,priority:!1,loading:"lazy",decoding:"async",style: {
...a,objectPosition:"focalPoint"in e&&null!==e.focalPoint?`${100*e.focalPoint.x}% ${100*e.focalPoint.y}%`:"center center"
}

}
)])
}
,77625,e=> {
"use strict";
var t=e.i(56242),l=e.i(7284),i=e.i(69348),r=e.i(99084),a=e.i(46296),s=e.i(4043),n=e.i(23023),o=e.i(5025);
e.s(["Article",0,( {
slug:e,tags:c,_firstPublishedAt:d,thumbnail:u,useVideoThumbnail:m,videoThumbnail:x,video:p= {

}
,base:h="insights",title:f="",authors:g="",conference:v="",variant:y="default",className:w="",fadeInProps:j
}
)=>(0,t.jsx)(r.Link, {
href:`/${h}/${e}`,className:(0,l.default)("group relative flex shrink-0 snap-start flex-col items-start justify-start gap-16","border-b border-current/15 pb-24",w),children:(0,t.jsxs)(i.motion.article, {
...j,className:(0,l.default)("relative flex w-full flex-col items-start justify-start gap-12 md:gap-16"),children:[(0,t.jsxs)("div", {
className:(0,l.default)("rounded-calc relative w-full overflow-clip bg-current","flex aspect-[295/221] items-center justify-center","default"===y&&"md:aspect-[448/336]","featured"===y&&"md:aspect-[917/516]"),children:[(0,t.jsxs)("div", {
className:"ease-snappy relative h-full w-full transition-transform duration-500 group-hover:scale-110",children:[u&&u.url&&(0,t.jsx)(a.Media, {
media:u,className:"absolute h-full w-full object-cover"
}
),m&&x&&(0,t.jsx)(n.Video, {
video:x,autoPlay:!0,useObjectURL:!1
}
),u&&u.image&&(0,t.jsx)(a.Media, {
media:u.image,className:"absolute h-full w-full object-cover"
}
),p&&p.src&&(0,t.jsx)(n.Video, {
video:p,autoPlay:!0,useObjectURL:!1
}
),u&&u.video&&u.video.url&&(0,t.jsx)(n.Video, {
video:u.video,autoPlay:!0,useObjectURL:!1
}
)]
}
),"featured"===y&&(0,t.jsx)("div", {
className:"absolute top-16 left-16 flex items-center gap-12",children:c?.map((e,l)=>(0,t.jsx)(s.Tag, {
className:"bg-pink text-current",children:e.name
}
,`${e.id}-${l}`))
}
)]
}
),"default"===y&&(0,t.jsxs)(t.Fragment, {
children:[(0,t.jsxs)("div", {
className:(0,l.default)("relative flex w-full flex-row flex-wrap items-center justify-start gap-16"),children:[c?.length>0&&(0,t.jsx)("div", {
className:"flex flex-wrap items-center gap-6",children:c?.map(e=>(0,t.jsx)(s.Tag, {
className:"group-hover:bg-pink/25 group-hover:text-pink bg-[#DEDCD9] text-current/50",children:e.name
}
,e.id))
}
),d&&(0,t.jsx)("span", {
className:"type-s-11 md:type-s-12 whitespace-nowrap text-current/50",children:(0,o.formatDate)(d)
}
)]
}
),(0,t.jsx)("h2", {
className:(0,l.default)("type-z-18 md:type-z-24 group-hover:text-pink ease-snappy max-w-600 text-current transition-colors duration-500"),children:f
}
)]
}
),"featured"===y&&(0,t.jsxs)("div", {
className:(0,l.default)("relative flex w-full flex-col gap-10"),children:[(0,t.jsxs)("div", {
className:"flex flex-col gap-6",children:[(0,t.jsx)("span", {
className:"type-s-14 md:type-s-15 text-current/60",children:v
}
),(0,t.jsx)("h2", {
className:(0,l.default)("type-z-18 md:type-z-24 group-hover:text-pink ease-snappy max-w-600 text-current transition-colors duration-500"),children:f
}
)]
}
),(0,t.jsx)("p", {
className:"type-s-11 md:type-s-12 text-current",children:g
}
)]
}
)]
}
)
}
)])
}
,67990,e=> {
"use strict";
e.s(["Blossom",0,(e,t)=> {
let l=!0,i= {
x:0,y:0
}
,r= {
x:0,y:0
}
,a= {
x:0,y:0
}
,s=new Proxy( {
x:0,y:0
}
, {
set:(e,t,l)=>(e[t]===l||(e[t]=l,(e.x>=10||e.y>=10)&&_(!0)),!0)
}
),n=new Proxy( {
x:!1,y:!1
}
, {
set:(t,l,i)=>(t[l]===i||(t[l]=i,t.x||t.y?(e.setAttribute("has-overflow","true"),e.addEventListener("pointerdown",P),e.addEventListener("wheel",I, {
passive:!1
}
)):(e.removeAttribute("has-overflow"),e.removeEventListener("pointerdown",P),e.removeEventListener("wheel",I))),!0)
}
),o=300,c=null,d=!1,u=300,m=300,x=300,p=300,h= {
start:0,end:0
}
,f= {
start:0,end:0
}
,g=[],v=null,y=null,w=null,j=!1,b,N=1,k= {
target:null,x:0
}
;
function C(e) {
s.x>10&&e.preventDefault()
}
function L() {
var l;
let i,r,a,s;
if(!e)return;
let c="ontouchmove"in window;
u=e.scrollWidth,m=e.clientWidth,x=e.scrollHeight,p=e.clientHeight;
let d=window.getComputedStyle(e);
n.x=!c&&u>m&&["auto","scroll"].includes(d.getPropertyValue("overflow-x")),n.y=!c&&x>p&&["auto","scroll"].includes(d.getPropertyValue("overflow-y")),h.end=parseInt(d.paddingInlineEnd)||0,h.start=parseInt(d.paddingInlineStart)||0,f.start=parseInt(d.scrollPaddingInlineStart)||0,f.end=parseInt(d.scrollPaddingInlineEnd)||0,N=e.closest('[dir="rtl"]')?-1:1,o=(u-m-4)*N,g=j?(l=e,i=[],r=0,(a=e=> {
if(++r>100)return;
let t=window.getComputedStyle(e).scrollSnapAlign;
if("none"!==t)return void i.push( {
align:t,el:e
}
);
let l=e.children;
if(0!==l.length)for(let e of l)a(e)
}
)(l),s=l.getBoundingClientRect(),i.map(( {
el:e,align:t
}
,i)=> {
let r=e.getBoundingClientRect(),a=e.clientWidth,n=r.left-s.left+l.scrollLeft;
switch(t) {
case"start":return {
target:e,x:n-f.start
}
;
case"end":return {
target:e,x:n+a-m+f.end
}
;
case"center":return {
target:e,x:n+.5*a-m/2
}
;
default:return null
}

}
).filter(e=>null!==e).reduce((e,t)=>((0===e.length||e[e.length-1].x!==t.x)&&e.push(t),e),[])):[],null!=t&&t.repeat&&A(null,null)
}
function E() {
L()
}
function T() {
if(null!=t&&t.repeat)return void A(null,null);
if(d||!e)return;
let l=e.scrollLeft;
l<0?D(-1*l):l>u-m&&D(-1*l+u-m)
}
let M= {
x:0,y:0
}
;
function P(t) {
e&&(n.x&&(M.x=e.scrollLeft,i.x=t.clientX,a.x=0),n.y&&(M.y=e.scrollTop,i.y=t.clientY,a.y=0),s.x=0,d=!0,window.addEventListener("pointermove",R),window.addEventListener("pointerup",z))
}
function R(e) {
if(e.preventDefault(),n.x) {
let t=i.x-e.clientX;
r.x+=t,a.x+=t,i.x=e.clientX,s.x+=Math.abs(t)
}
if(n.y) {
let t=i.y-e.clientY;
r.y+=t,a.y+=t,i.y=e.clientY,s.y+=Math.abs(t)
}

}
function z() {
var e,t,l;
let i,o;
window.removeEventListener("pointermove",R),window.removeEventListener("pointerup",z),d=!1,s.x<=10||(n.x&&(a.x*=2),n.y&&(a.y*=2),(i=Z( {
axis:"x"
}
)).x!==k.x&&W(i),k=i,a.x=(e=i.x,t=Math.min((u-m)*N,0),l=Math.max((u-m)*N,0),((e<t?t:e>l?l:e)-r.x)*(1-V)*(1/V)),o=e=> {
e.preventDefault(),e.stopPropagation(),window.removeEventListener("click",o,!0)
}
,window.addEventListener("click",o,!0))
}
function I(t) {
Math.abs(t.deltaX)>Math.abs(t.deltaY)&&(_(!1),!d&&e&&(n.x&&(M.x=e.scrollLeft),n.y&&(M.y=e.scrollTop)))
}
function S(e) {
["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.key)&&_(!1)
}
function A(t,l) {
if(!e)return;
let i=l??e.scrollLeft,r=h.start-i,a=i-(u-m-h.end),s=Array.from(e.children),n=0;
for(let e=s.length-1;
e>=s.length/2;
e--) {
let t=n>r?0:-(u-m);
n+=s[e].clientWidth,s[e].style.translate=`${t}px 0`
}
let c=0;
for(let e=0;
e<s.length/2;
e++) {
let t=c>a?0:u-m;
c+=s[e].clientWidth,s[e].style.translate=`${t}px 0`
}
if(d)return;
let x=i>o?4:i<4?o:null;
x&&(q=!0,e.scrollTo( {
left:x,behavior:"instant"
}
))
}
function B(e) {
$&&e.stopPropagation()
}
let V=.72,$=!1;
function _(t) {
e&&(t&&!$?(H=performance.now(),n.x&&(r.x=e.scrollLeft),n.y&&(r.y=e.scrollTop),e.addEventListener("scrollend",B, {
capture:!0,passive:!1
}
),c||(c=requestAnimationFrame(F))):t||(c&&cancelAnimationFrame(c),c=null,e.removeEventListener("scrollend",B)),$=t,l=!t,e.setAttribute("has-snap",l?"true":"false"))
}
let O=0,H=0;
function F(l) {
if(c=requestAnimationFrame(F),O=l-H,e) {
let i;
if(n.x&&(a.x*=V,d?M.x=G(M.x,r.x,V,O):(r.x+=a.x,M.x=G(M.x,r.x,.12,O))),n.y&&(a.y*=V,d?M.y=G(M.y,r.y,V,O):(r.y+=a.y,M.y=G(M.y,r.y,.12,O))),null!=t&&t.repeat&&(M.x>o&&(M.x=r.x=4),M.x<4&&(M.x=r.x=o)),q=!0,e.scrollTo( {
left:M.x,top:M.y,behavior:"instant"
}
),d&&j) {
let e=Z( {
axis:"x"
}
);
e.x!==k.x&&(k=e,W(e))
}
!d&&0===J(a.x,8)&&(_(!1),null==e||e.dispatchEvent(X),j&&(i=new CustomEvent("scrollsnapchange", {
bubbles:!0,cancelable:!0,detail: {
snapTargetInline:k.target,snapTargetBlock:k.target
}

}
),null==e||e.dispatchEvent(i))),null!=t&&t.repeat?A(null,M.x):function(t) {
if(!e)return;
let l=o,i=0;
if(t*N<=0?i=d?-.2*t:0:t*N>l*N&&(i=d?-((t-l)*.2):0),Math.abs(U=G(U,i,d?.8:.12,O))>.01) {
if(D(U).defaultPrevented)return;
e.style.transform=`translateX(${J(U,3)}px)`;
return
}
e.style.transform="",U=0
}
(J(M.x,2)),H=l
}

}
let U=0;
function D(t) {
let l=new CustomEvent("overscroll", {
bubbles:!0,cancelable:!0,detail: {
left:t
}

}
);
return null==e||e.dispatchEvent(l),l
}
let X=new Event("scrollend", {
bubbles:!0,cancelable:!0
}
);
function W(t) {
let l=new CustomEvent("scrollsnapchanging", {
bubbles:!0,cancelable:!0,detail: {
snapTargetInline:(t||k).target,snapTargetBlock:(t||k).target
}

}
);
return null==e||e.dispatchEvent(l),l
}
let q=!1,Y=e.scrollTo.bind(e);
e.scrollTo=function(e) {
!0===q||_(!1),q=!1,Y(e)
}
;
let K=e.scrollBy.bind(e);
function Z( {
axis:e="x"
}
) {
var t,l,i;
let s=function( {
axis:e="x"
}
) {
return r[e]+a[e]/(1-V)
}
( {
axis:e
}
);
return g.length?g.reduce((e,t)=>Math.abs(t.x-s)<Math.abs(e.x-s)?t:e): {
target:null,x:(t=s,l=Math.min(o,0),i=Math.max(o,0),t<l?l:t>i?i:t)
}

}
function G(e,t,l,i) {
var r;
return(1-(r=1-Math.exp(i/16.666666666666668*Math.log(1-l))))*e+r*t
}
e.scrollBy=function(e) {
!0===q||_(!1),q=!1,K(e)
}
;
function J(e,t=0) {
let l=Math.pow(10,t);
return Math.round(e*l)/l
}
return {
snap:l,hasOverflow:n,init:function() {
var l;
let i,r;
null==e||e.setAttribute("blossom-carousel","true"),null==(v=(null==e?void 0:e.querySelectorAll("a[href]"))||null)||v.forEach(e=> {
e.addEventListener("click",C)
}
),window.addEventListener("keydown",S),e.addEventListener("scroll",T),(y=new ResizeObserver(L)).observe(e),(w=new MutationObserver(E)).observe(e, {
attributes:!1,childList:!0,subtree:!1
}
);
let a=window.matchMedia("(hover: hover) and (pointer: fine)").matches;
N=e.closest('[dir="rtl"]')?-1:1;
let {
scrollSnapType:s
}
=window.getComputedStyle(e);
j="none"!==s,e.style.setProperty("--snap-type",s),a&&(e.style["scroll-snap-type"]="none"),e.setAttribute("has-repeat",null!=t&&t.repeat?"true":"false"),l=t=> {
(t===e||e.contains(t))&&_(!1)
}
,i=[],(r=Element.prototype.scrollIntoView)&&(Element.prototype.scrollIntoView=function(e) {
return l(this,"scrollIntoView",[e]),r.call(this,e)
}
,i.push(()=> {
Element.prototype.scrollIntoView=r
}
)),b=()=>i.forEach(e=>e())
}
,destroy:function() {
e.removeAttribute("blossom-carousel"),null==y||y.disconnect(),null==w||w.disconnect(),c&&cancelAnimationFrame(c),window.removeEventListener("keydown",S),e.removeEventListener("scroll",T),null==v||v.forEach(e=> {
e.removeEventListener("click",C)
}
),null==b||b()
}

}

}
])
}
,80315,e=> {
"use strict";
var t=e.i(56242);
e.i(48490);
var l=e.i(4812),i=e.i(67990),r=e.i(59163);
e.s(["Carousel",0,( {
children:e,as:a="div",ref:s,...n
}
)=> {
let o=(0,r.useRef)(null),c=(0,r.useRef)(0),d=(0,l.useWindowSize)();
return(0,r.useLayoutEffect)(()=> {
if(!o.current)return;
let e=(0,i.Blossom)(o.current, {

}
);
return e.init(),()=> {
e.destroy()
}

}
,[]),(0,r.useLayoutEffect)(()=> {
let e=getComputedStyle(o.current).gap,t=o.current.children[0];
t&&(c.current=t.getBoundingClientRect().width+(parseInt(e)||0))
}
,[d.width]),(0,r.useImperativeHandle)(s,()=>( {
el:o.current,distance:c.current,next:()=> {
let e=o.current.scrollLeft+c.current;
o.current.scrollTo( {
left:e,behavior:"smooth"
}
)
}
,prev:()=> {
let e=o.current.scrollLeft-c.current;
o.current.scrollTo( {
left:e,behavior:"smooth"
}
)
}

}
)),(0,t.jsx)(a, {
ref:o,"blossom-carousel":"true",...n,children:e
}
)
}
])
}
,60931,17827,e=> {
"use strict";
var t=e.i(56242);
function l() {
for(var e=[],t=0;
t<arguments.length;
t++)e[t]=arguments[t];
var l=e.filter(Boolean);
return l.length<=1?l[0]||null:function(e) {
for(var t=0;
t<l.length;
t++) {
var i=l[t];
"function"==typeof i?i(e):i&&(i.current=e)
}

}

}
e.s(["default",0,l],17827);
var i=e.i(69348),r=e.i(87648),a=e.i(59163);
let s= {
hidden:(e=0)=>( {
y:200*(e+1)
}
),visible: {
y:0,transition: {
y: {
type:"spring",stiffness:80,damping:20
}

}

}

}
;
e.s(["FadeIn",0,( {
children:e,as:n="div",ref:o,...c
}
)=> {
let d,u=(0,a.useRef)(null),m=(0,a.useMemo)(()=>i.motion.create(n),[n]),x="function"==typeof e,p=(d=(0,r.useInView)(u, {
once:!0,amount:.2
}
),(e=0)=>( {
custom:e,variants:s,initial:"hidden",animate:d?"visible":"hidden"
}
));
return(0,t.jsx)(m, {
...c,ref:l(u,o),...x? {

}
:p(0),children:x?e(p):e
}
)
}
],60931)
}
,50232,e=> {
"use strict";
var t=e.i(56242),l=e.i(7284),i=e.i(59163),r=e.i(77625),a=e.i(29229),s=e.i(20856),n=e.i(56902),o=e.i(80315),c=e.i(60931),d=e.i(84160),u=e.i(5025);
e.s(["ArticlesCarousel",0,( {
anchorName:e,articles:m,headline:x,hasWhiteBackground:p=!1,variant:h="default",base:f="insights"
}
)=> {
let g=(0,i.useRef)(null);
if(!x)return null;
let {
title:v,paragraph:y,button:w
}
=x;
return(0,t.jsx)(d.Section, {
name:e||"Insights",className:(0,l.default)("relative w-full overflow-clip",p?"bg-(--background)":"bg-cream py-(--padding-y)"),children:(0,t.jsxs)("div", {
className:"flex flex-col gap-30 md:gap-48",children:[(0,t.jsxs)("div", {
className:"w-calc grid grid-cols-2 gap-y-24 md:gap-y-48",children:[(0,t.jsx)("div", {
className:"order-1 md:col-span-2",children:(0,t.jsx)(a.Title, {
title:v,size:"medium"
}
)
}
),(0,t.jsx)("div", {
className:"order-3 max-md:col-span-2 md:order-2",children:(0,t.jsx)("p", {
className:"type-s-14 md:type-s-15 text-balance text-black/50",dangerouslySetInnerHTML: {
__html:(0,u.sanitizeText)(y,["br"])
}

}
)
}
),(0,t.jsxs)("div", {
className:"order-2 flex items-end gap-24 justify-self-end md:order-3",children:[w&&(0,t.jsx)(n.Button, {
as:"a",href:`/${f}`,className:"hidden md:flex",children:w?.label
}
),(0,t.jsxs)("div", {
className:"flex items-center gap-8 md:gap-12",children:[(0,t.jsx)(s.Left, {
onClick:()=> {
g.current&&g.current.prev()
}
,useHover:!0,className:"hover:text-white"
}
),(0,t.jsx)(s.Right, {
onClick:()=> {
g.current&&g.current.next()
}
,useHover:!0,className:"hover:text-white"
}
)]
}
)]
}
)]
}
),(0,t.jsxs)("div", {
className:"flex flex-col gap-45 md:gap-0",children:[(0,t.jsx)(c.FadeIn, {
className:"flex w-full flex-nowrap",children:e=>(0,t.jsx)(o.Carousel, {
ref:g,className:"px-calc flex snap-x snap-mandatory flex-nowrap gap-28 md:gap-24",children:m?.map((l,i)=>(0,t.jsx)(r.Article, {
base:f,variant:h,className:"w-[calc(100vw-8rem)] md:w-450",...l,fadeInProps:e(i)
}
,l.id))
}
)
}
),(0,t.jsx)("div", {
className:"flex items-center justify-center md:hidden",children:(0,t.jsx)(n.Button, {
as:"a",href:`/${f}`,children:"View all"
}
)
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
,51710,e=> {
"use strict";
var t=e.i(56242),l=e.i(7284),i=e.i(69348),r=e.i(59163);
e.i(48490),e.i(55007),e.i(1855);
var a=e.i(99084);
e.s(["Media",0,( {
children:e,className:i="",...r
}
)=>(0,t.jsx)("div", {
...r,className:(0,l.default)("relative aspect-square w-full overflow-clip rounded-t-[var(--rounded-unit)]","md:aspect-[unset] md:h-[80.7rem] md:w-10/12 md:rounded-[var(--rounded-unit)]",i),children:e
}
),"Overlap",0,( {
ref:e,as:s="div",children:n,className:o="",layout:c=!0,...d
}
)=> {
let u=(0,r.useMemo)(()=>i.motion.create("link"===s?a.Link:"div"),[]);
return(0,t.jsx)(u, {
...d,layout:c,ref:e,className:(0,l.default)("rounded-calc relative mt-[-2.8rem] flex w-full flex-col items-start justify-center bg-[var(--overlap-background,var(--color-dark))] p-28 text-[var(--overlap-text-color,var(--color-white))]","md:absolute md:right-0 md:mt-0 md:w-[44.7rem] md:p-48",o),children:n
}
)
}
],51710)
}
,16106,e=> {
"use strict";
var t=e.i(56242),l=e.i(7284),i=e.i(27686),r=e.i(69348),a=e.i(64204),s=e.i(51710),n=e.i(30397);
let o=( {
data:e,alt:l="",fill:i,priority:r=!1,loading:s="lazy",...n
}
)=> {
if(!e?.image)return null;
let {
image:o,imageResponsive:c
}
=e;
return c?(0,t.jsxs)("picture", {
children:[(0,t.jsx)("source", {
media:"(width <= 768px)",srcSet:c.webp,type:"image/webp"
}
),(0,t.jsx)("source", {
media:"(width <= 768px)",srcSet:c.src
}
),(0,t.jsx)(a.default, {
src:o.src,alt:l,width:o.width,height:o.height,priority:r,loading:s,...n
}
)]
}
):(0,t.jsx)(a.default, {
src:o.src,alt:l,width:o.width,height:o.height,priority:r,loading:s,...n
}
)
}
,c=( {
entry:e
}
)=>(0,t.jsx)(d, {
entry:e,children:(0,t.jsx)(o, {
data:e.image,alt:"",priority:!1,loading:"lazy",decoding:"async",className:(0,l.default)("h-full w-full object-cover")
}
)
}
),d=( {
children:e,entry:i
}
)=> {
let r=i.image.imageResponsive.width===i.image.imageResponsive.height,a=!r&&i.image.imageResponsive.width>i.image.imageResponsive.height,s=!r&&i.image.imageResponsive.width<i.image.imageResponsive.height;
return a||s?(0,t.jsx)("div", {
className:(0,l.default)("h-full w-full",a&&"no-scrollbar overflow-x-scroll",s&&"no-scrollbar overflow-y-scroll"),children:(0,t.jsx)("div", {
className:(0,l.default)("max-md:aspect-[var(--aspect-mobile)]","md:h-full md:w-full",a&&"h-full",s&&"w-full"),style: {
"--aspect-mobile":`${i.image.imageResponsive.width} / ${i.image.imageResponsive.height}`
}
,children:e
}
)
}
):(0,t.jsx)(t.Fragment, {
children:e
}
)
}
,u=r.motion.create(s.Media);
e.s(["Images",0,( {
data:e,active:s,fadeInProps:o,y:d,disableScaleAnimation:m,className:x
}
)=> {
let p=e[s],h=p?.image?.imageResponsive?.url;
return(0,t.jsx)(u, {
className:(0,l.default)("bg-dark",x),...o,children:(0,t.jsx)(i.AnimatePresence, {
children:(0,t.jsx)(r.motion.div, {
initial: {
opacity:0,scale:m?1:1.2
}
,animate: {
opacity:1,scale:m?1:1.1,transition:m&& {
...n.config,duration:1
}

}
,exit: {
opacity:0,transition:m&& {
...n.config,duration:1
}

}
,className:"absolute inset-0",style: {
y:d
}
,children:h?(0,t.jsx)(c, {
entry:p
}
):(0,t.jsx)(a.default, {
src:p.image.src||p.image.image.src,width:p.image.width||p.image.image.width,height:p.image.height||p.image.image.height,alt:"",priority:!1,loading:"lazy",decoding:"async",className:"h-full w-full object-cover"
}
)
}
,p.name)
}
)
}
)
}
],16106)
}
,87315,12595,56834,27866,e=> {
"use strict";
var t=e.i(56242),l=e.i(22507);
e.s(["Button",0,e=>(0,t.jsx)("div", {
className:"flex-center text-center text-pretty",children:e&&(0,t.jsx)(l.DatoButton, {
button:e
}
)
}
)],87315),e.s(["Header",0,( {
title:e,subtitle:l
}
)=>(0,t.jsxs)("div", {
className:"flex w-full flex-col items-start gap-8 md:gap-12",children:[(0,t.jsx)("p", {
className:"type-s-11 md:type-s-12 text-center tracking-[0.024rem] text-black/50",children:l
}
),(0,t.jsx)("h2", {
className:"type-z-24 md:type-z-40 text-dark leading-[110%] tracking-[-0.12rem]",children:e
}
)]
}
)],12595);
var i=e.i(7284),r=e.i(27686),a=e.i(69348),s=e.i(10800),n=e.i(59163),o=e.i(16106),c=e.i(20856),d=e.i(46368);
let u=( {
items:e=[],current:l,setCurrent:s
}
)=>(0,t.jsx)("div", {
className:"flex gap-10",children:e.map((e,n)=>(0,t.jsx)("button", {
type:"button",onClick:()=>s(n),className:(0,i.default)("bg-foreground/10 relative h-2 w-58 rounded-full","before:absolute before:-inset-5"),children:(0,t.jsx)(r.AnimatePresence, {
children:l===n&&(0,t.jsx)(a.motion.div, {
initial: {
scaleX:0
}
,animate: {
scaleX:1,transformOrigin:"left"
}
,exit: {
scaleX:0,transformOrigin:"right"
}
,className:"bg-pink h-full w-full rounded-full"
}
)
}
)
}
,n))
}
);
e.s(["Slider",0,( {
items:e=[]
}
)=> {
let[l,i]=(0,n.useState)(0),r=e[l]?.description,a=e[l]?.title,m=t=>(0,s.wrap)(0,e.length,t);
return(0,t.jsxs)("div", {
className:"-mt-36 flex flex-col gap-60 md:-mt-48",children:[a&&(0,t.jsx)("h3", {
className:"type-z-24 md:type-z-40 text-dark leading-[110%] tracking-[-0.12rem]",children:(0,d.sanitizeText)(a)
}
),(0,t.jsxs)("div", {
className:"flex gap-8 max-md:-mt-56 max-md:flex-col md:justify-between md:gap-24",children:[(0,t.jsx)("p", {
className:"type-s-15 text-foreground/50",children:(0,d.sanitizeText)(r)
}
),e?.[0]&&(0,t.jsxs)("div", {
className:"flex gap-12",children:[(0,t.jsx)(c.Left, {
useHover:!0,onClick:()=> {
i(e=>m(e-1))
}

}
),(0,t.jsx)(c.Right, {
useHover:!0,onClick:()=> {
i(e=>m(e+1))
}

}
)]
}
)]
}
),e?.[0]&&(0,t.jsxs)("div", {
className:"flex w-full flex-col items-center gap-48 md:-ml-78 md:w-[calc(100%+15.6rem)]",children:[(0,t.jsx)(o.Images, {
data:e,active:l,disableScaleAnimation:!0,className:"relative h-519! w-full!"
}
),(0,t.jsx)(u, {
items:e,current:l,setCurrent:i
}
)]
}
)]
}
)
}
],56834);
let m=( {
children:e
}
)=>(0,t.jsx)("div", {
className:(0,i.default)("prose prose-neutral flex w-full max-w-full flex-col items-start gap-16","prose-headings:type-z-18 md:type-z-24 prose-headings:mb-0 prose-headings:text-dark prose-headings:leading-[125%] prose-headings:tracking-[-0.072rem]","prose-p:type-s-14 md:type-s-15 prose-p:leading-[160%] prose-p:tracking-[0.015rem] prose-p:text-black/50"),children:e
}
);
e.s(["Text",0,( {
text:e
}
)=>e?(0,t.jsx)(m, {
children:(0,t.jsx)("div", {
dangerouslySetInnerHTML: {
__html:e
}

}
)
}
):null],27866)
}
,93868,e=> {
"use strict";
var t=e.i(56242),l=e.i(5025);
e.s(["Caption",0,( {
caption:e
}
)=>(0,t.jsx)("p", {
className:"type-s-11 md:type-s-10 leading-[140%] tracking-[0.024rem] text-black/50",dangerouslySetInnerHTML: {
__html:(0,l.sanitizeText)(e,["a","em","br"])
}

}
)])
}
,91846,e=> {
"use strict";
var t=e.i(56242),l=e.i(7284),i=e.i(69348),r=e.i(87648),a=e.i(69312),s=e.i(1332),n=e.i(59163);
let o=( {
isPlaying:e,onClick:r
}
)=>(0,t.jsx)(i.motion.button, {
animate: {
opacity:+!e
}
,whileHover: {
scale:1.05
}
,whileTap: {
scale:.95
}
,"aria-label":e?"Pause Video":"Play Video",onClick:r,className:(0,l.default)("flex-center absolute inset-0 size-full cursor-pointer",e&&"opacity-0 group-hover:opacity-100"),children:(0,t.jsx)("div", {
className:"flex-center bg-pink h-50 w-50 rounded-full",children:(0,t.jsx)("svg", {
xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",viewBox:"0 0 50 50",fill:"none",children:e?(0,t.jsxs)(t.Fragment, {
children:[(0,t.jsx)("rect", {
x:"22",y:"22",width:"2",height:"6",rx:"1",fill:"white"
}
),(0,t.jsx)("rect", {
x:"26",y:"22",width:"2",height:"6",rx:"1",fill:"white"
}
)]
}
):(0,t.jsx)("path", {
d:"M23 22.8685C23 22.0698 23.8901 21.5934 24.5547 22.0365L27.7519 24.168C28.3457 24.5638 28.3457 25.4362 27.7519 25.8321L24.5547 27.9635C23.8901 28.4066 23 27.9302 23 27.1315V22.8685Z",fill:"white"
}
)
}
)
}
)
}
);
e.s(["Player",0,( {
video:e,poster:l=null,autoPlay:c=!1
}
)=> {
let[d,u]=(0,n.useState)(c),[m,x]=(0,n.useState)(!1),p=(0,n.useRef)(null),h=(0,r.useInView)(p),f=(0,s.useMotionValue)(-100);
(0,n.useEffect)(()=> {
if(p.current)if(d) {
let e=p.current.play();
e&&e.then(()=> {
x(!0)
}
).catch(()=> {
x(!1)
}
)
}
else p.current.pause(),x(!1)
}
,[d]),(0,n.useEffect)(()=> {
h&&c?u(!0):u(!1)
}
,[h,c]);
let g=e=> {
let t=Math.floor(e/60),l=Math.floor(e%60);
return`${t}:${l.toString().padStart(2,"0")}`
}
,[v,y]=(0,n.useState)(0),[w,j]=(0,n.useState)(0),b=a.useMotionTemplate`translate3d(${f}%, 0, 0)`,N=e?.url?encodeURI(e.url):e?.url;
return(0,t.jsxs)("div", {
className:"group border-foreground/20 rounded-calc relative w-full overflow-clip border-1",children:[(0,t.jsx)("video", {
ref:p,src:N,poster:l,controls:!1,loop:!0,muted:!!c,onTimeUpdate:()=> {
if(!p.current)return;
let e=p.current.duration,t=p.current.currentTime;
f.set(-100+t/e*100),y(t),j(e)
}
,className:"size-full object-cover"
}
),!c&&(0,t.jsxs)(t.Fragment, {
children:[(0,t.jsx)(o, {
isPlaying:m,onClick:()=> {
u(!d)
}

}
),(0,t.jsx)("div", {
className:"absolute right-20 bottom-20 left-20 opacity-0 group-hover:opacity-100",children:(0,t.jsxs)(i.motion.div, {
initial: {
opacity:0
}
,animate: {
opacity:+!!m
}
,className:"flex w-full items-center justify-between gap-20",children:[(0,t.jsxs)("div", {
className:"flex w-60 items-center justify-between gap-10",children:[(0,t.jsx)("span", {
className:"text-pink flex w-30 items-center justify-center text-center",children:(0,t.jsx)("span", {
className:"type-s-10 proportional-nums",children:g(v)
}
)
}
),(0,t.jsx)("span", {
className:"text-pink flex w-30 items-center justify-center text-center",children:(0,t.jsx)("span", {
className:"type-s-10 proportional-nums",children:g(w)
}
)
}
)]
}
),(0,t.jsx)("div", {
className:"bg-background/10 h-5 w-full overflow-clip rounded-[0.5rem]",onMouseDown:e=> {
if(!p.current)return;
let {
currentTarget:t,clientX:l
}
=e, {
width:i,left:r
}
=t.getBoundingClientRect(),a=Math.max(r,Math.min(l,r+i));
p.current.currentTime=(a-r)/i*p.current.duration
}
,children:(0,t.jsx)(i.motion.div, {
className:"bg-pink size-full rounded-[0.5rem]",initial: {
x:"-100%"
}
,style: {
transform:b
}

}
)
}
)]
}
)
}
)]
}
)]
}
)
}
])
}
,39525,e=> {
"use strict";
var t=e.i(56242);
e.i(48490);
var l=e.i(69703),i=e.i(4812),r=e.i(7284),a=e.i(83592),s=e.i(27686),n=e.i(69348),o=e.i(87648),c=e.i(88098),d=e.i(64204),u=e.i(59163),m=e.i(70813),x=e.i(50122),p=e.i(87315),h=e.i(12595),f=e.i(56834),g=e.i(27866),v=e.i(93868),y=e.i(23023);
let w=( {
video:e,width:l=1920,height:i=1080,caption:r=""
}
)=>(0,t.jsxs)("div", {
className:"flex flex-col gap-16",children:[(0,t.jsx)("div", {
className:"rounded-calc relative aspect-[var(--aspect-ratio)] w-full overflow-clip",style: {
"--aspect-ratio":`${l/i}`
}
,children:(0,t.jsx)(y.Video, {
video:e,width:l,height:i,autoPlay:!0,useObjectURL:!1
}
)
}
),(0,t.jsx)("div", {
className:"flex flex-col gap-16",children:(0,t.jsx)(v.Caption, {
caption:r
}
)
}
)]
}
);
var j=e.i(91846);
let b=( {
title:e,subtitle:l,content:i
}
)=>(0,t.jsx)(x.Scroll, {
root:!1,className:"relative h-full w-full overflow-y-scroll",children:(0,t.jsxs)("div", {
className:"flex min-h-[calc(100vh-(5.5rem+2.4rem+1.2rem+1.2rem))] flex-col gap-48 bg-white px-30 py-48 md:min-h-[calc(100vh-10rem)] md:gap-60 lg:px-[15.7rem] lg:py-96",children:[(0,t.jsx)(h.Header, {
title:e,subtitle:l
}
),i.map(e=> {
if(!e||!e.__typename)return null;
switch(e.__typename) {
case"TextRecord":return(0,t.jsx)(g.Text, {
...e
}
,e.id);
case"PopupSliderRecord":return(0,t.jsx)(f.Slider, {
...e
}
,e.id);
case"AssetVideoRecord":return(0,t.jsx)(w, {
...e
}
,e.id);
case"VideoPlayerRecord":return(0,t.jsx)(j.Player, {
video:e?.video?.video,autoPlay:e?.video?.autoplay
}
,e.id);
case"ButtonRecord":return(0,t.jsx)(p.Button, {
...e
}
,e.id);
default:return console.warn(`Unknown popup section type: ${e.__typename}`),null
}

}
)]
}
)
}
);
var N=e.i(99084),k=e.i(39842),C=e.i(30397);
let L=( {
isInView:e,link:l,hasPopup:i
}
)=>l||i?(0,t.jsx)(n.motion.div, {
initial: {
opacity:0,scale:0
}
,animate: {
opacity:+!!e,scale:+!!e
}
,transition: {
...C.config,delay:.9
}
,className:(0,r.default)("group-hover:bg-pink text-foreground flex h-24 w-24 shrink-0 items-center justify-center rounded-full border border-current/25 p-[1rem] group-hover:border-current/0 group-hover:text-white","ease-snappy transition-colors duration-500"),children:(0,t.jsx)("div", {
className:"relative h-8 w-8",children:i?(0,t.jsxs)("svg", {
xmlns:"http://www.w3.org/2000/svg",width:"8",height:"8",viewBox:"0 0 8 8",fill:"none",children:[(0,t.jsx)("rect", {
x:"3.5",width:"1",height:"8",rx:"0.5",fill:"currentColor"
}
),(0,t.jsx)("rect", {
y:"4.5",width:"1",height:"8",rx:"0.5",transform:"rotate(-90 0 4.5)",fill:"currentColor"
}
)]
}
):(0,t.jsx)("svg", {
width:"8",height:"8",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:(0,r.default)("external_link"===l._modelApiKey&&"-rotate-45"),children:(0,t.jsx)("path", {
d:"M6.05208 3.31322L3.70799 0.969261C3.59356 0.854744 3.53793 0.720513 3.54112 0.566568C3.5443 0.412623 3.6031 0.278433 3.71754 0.164C3.83205 0.0578537 3.96629 0.00319027 4.12023 9.24918e-06C4.27418 -0.00317177 4.40841 0.0524542 4.52292 0.166888L7.83789 3.48186C7.89406 3.53811 7.93512 3.60056 7.96107 3.6692C7.98703 3.73776 8 3.80955 8 3.88455C8 3.95956 7.98703 4.03134 7.96107 4.0999C7.93512 4.16854 7.89406 4.23099 7.83789 4.28724L4.51991 7.6051C4.41175 7.71326 4.27962 7.76733 4.1235 7.76733C3.96737 7.76733 3.83205 7.71326 3.71754 7.6051C3.6031 7.49067 3.54589 7.35489 3.54589 7.19776C3.54589 7.04064 3.6031 6.90481 3.71754 6.7903L6.05208 4.45588L0.57133 4.45588C0.411023 4.45588 0.275703 4.40076 0.165372 4.29051C0.0551238 4.18018 1.62764e-07 4.04486 1.76779e-07 3.88455C1.90793e-07 3.72424 0.0551238 3.58892 0.165372 3.47859C0.275703 3.36834 0.411023 3.31322 0.57133 3.31322L6.05208 3.31322Z",fill:"currentColor"
}
)
}
)
}
)
}
):null,E=( {
setIsOpen:e,content:r,title:s,subtitle:o
}
)=> {
let {
height:d
}
=(0,i.useWindowSize)(),[m,x]=(0,c.usePresence)(),p=(0,u.useRef)(null);
return(0,u.useLayoutEffect)(()=> {
0!==d&&(m&&(0,a.animate)(p.current, {
opacity:[0,1]
}
, {
...C.config,duration:.2
}
),(0,a.animate)(p.current, {
y:m?[d,0]:[0,d]
}
, {
...C.config,duration:.8,delay:.5*!!m
}
).then(()=> {
m||x()
}
))
}
,[d,m,x]),(0,l.useEventListener)(null,"keyup",t=> {
"Escape"===t.key&&e(!1)
}
),(0,t.jsxs)(t.Fragment, {
children:[(0,t.jsx)(n.motion.div, {
initial: {
opacity:0
}
,animate: {
opacity:1
}
,exit: {
opacity:0
}
,transition: {
...C.config,duration:.5,ease:"linear"
}
,className:"fixed inset-0 z-400 flex size-full bg-black/40 backdrop-blur-[42px] md:z-1000",onClick:()=>e(!1)
}
),(0,t.jsx)("div", {
className:"pointer-events-none fixed inset-0 z-1000 flex size-full",children:(0,t.jsxs)(n.motion.div, {
ref:p,className:"pointer-events-auto relative m-auto mt-[calc(5.5rem+2.4rem+1.2rem)] h-[calc(100vh-(5.5rem+2.4rem+1.2rem+1.2rem))] w-[calc(100vw-2.4rem)] overflow-clip rounded-[1.2rem] opacity-0 md:mt-auto md:h-[calc(100vh-10rem)] md:w-600 lg:w-920",children:[(0,t.jsx)(b, {
title:s,subtitle:o,content:r
}
),(0,t.jsx)(n.motion.button, {
whileHover: {
scale:1.05
}
,whileTap: {
scale:.95
}
,className:"bg-pink flex-center border-text-current absolute top-18 right-18 size-32 rounded-full border border-current/0 text-white hover:border-current/25 hover:bg-transparent hover:text-black md:top-24 md:right-24 md:size-50","aria-label":"Close",onClick:()=>e(!1),children:(0,t.jsxs)("svg", {
xmlns:"http://www.w3.org/2000/svg",width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",className:"w-10 md:w-auto",children:[(0,t.jsx)("rect", {
width:"12.088",height:"1.48923",rx:"0.744617",transform:"matrix(0.712146 -0.702031 0.712294 0.701881 3.46777 11.5156)",fill:"currentColor"
}
),(0,t.jsx)("rect", {
width:"11.9139",height:"1.51343",rx:"0.756717",transform:"matrix(-0.712294 -0.701881 0.712146 -0.702031 12.0081 12.4463)",fill:"currentColor"
}
)]
}
)
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
e.s(["Dive",0,( {
className:e="bg-white/25",style:l= {

}
,button:i= {

}
,popupData:a
}
)=> {
let {
title:c,subtitle:x,cover:p,link:h
}
=i,[f,g]=(0,u.useState)(!1),v=(0,u.useRef)(null),w=(0,o.useInView)(v),j=!!a,b=(0,u.useMemo)(()=>j?n.motion.create("button"):N.MotionLink,[j]),T= {
mass:1,stiffness:100,damping:10
}
;
return(0,t.jsxs)("div", {
className:"relative flex h-64 w-full max-w-[calc(100vw-2.4rem)] sm:w-338 md:h-auto lg:w-370 lg:max-w-370",children:[(0,t.jsx)(n.motion.div, {
ref:v,className:"pointer-events-none absolute inset-0"
}
),(0,t.jsxs)(n.motion.div, {
className:"relative flex w-full",initial: {
scale:0
}
,animate: {
scale:w?1:.5
}
,transition: {
type:"spring",...T
}
,children:[(0,t.jsxs)(b, {
"aria-label":`${x} into ${c}`,whileTap: {
scale:.95,transition: {
type:"spring",...T
}

}
,whileHover: {
scale:1.025,transition: {
type:"spring",...T
}

}
,initial: {
scaleX:0
}
,animate: {
scaleX:+!!w
}
,transition: {
...C.config,delay:.2,ease:C.eases.IN_OUT_BASE
}
,className:(0,r.default)("group text-foreground relative flex size-full items-center justify-between gap-20 overflow-clip rounded-[1.2rem] pr-24 pl-28 md:py-12 lg:pl-12","hover:bg-cream-light hover:text-black","ease-snappy transition-colors duration-500",e),style:l,...j? {
onClick:()=>g(e=>!e)
}
: {
href:h?.url||(0,k.getInternalLink)(h)
}
,children:[(0,t.jsx)(n.motion.div, {
initial: {
opacity:1
}
,animate: {
opacity:+!w
}
,transition: {
...C.config,delay:.7,ease:C.eases.IN_OUT_BASE
}
,className:"bg-pink pointer-events-none absolute inset-0 rounded-[1.2rem]"
}
),(0,t.jsxs)("div", {
className:"flex items-center gap-16",children:[p&&(0,t.jsxs)(n.motion.div, {
initial: {
scale:.5,opacity:1
}
,animate: {
scale:w?1:.5,opacity:+!!w
}
,transition: {
...C.config,delay:.9
}
,className:"bg-dark relative hidden h-[6rem] w-[8.2rem] shrink-0 overflow-hidden rounded-[0.4rem] lg:flex",children:[p?.image&&(0,t.jsx)(d.default, {
src:p?.image?.src,alt:"",width:82,height:60,priority:!1,loading:"lazy",decoding:"async",className:"h-full w-full object-cover"
}
),p?.video&&(0,t.jsx)(y.Video, {
useObjectURL:!1,autoPlay:!0,muted:!0,video: {
url:p?.video?.url
}

}
)]
}
),(0,t.jsxs)(n.motion.div, {
initial: {
opacity:0
}
,animate: {
opacity:+!!w
}
,transition: {
...C.config,delay:.9
}
,className:"flex min-w-0 grow flex-col justify-center text-left",children:[(0,t.jsx)("p", {
className:"type-s-11 md:type-s-12 text-current/60",children:x
}
),(0,t.jsx)("p", {
className:"type-s-11 md:type-s-12 text-balance text-current",children:c
}
)]
}
)]
}
),(0,t.jsx)(L, {
isInView:w,link:h,hasPopup:j
}
)]
}
),(0,t.jsx)(s.AnimatePresence, {
children:f&&(0,t.jsx)(u.Fragment, {
children:(0,m.createPortal)((0,t.jsx)(t.Fragment, {
children:(0,t.jsx)(E, {
setIsOpen:g,...a
}
)
}
),document.body)
}
,"popup")
}
)]
}
)]
}
)
}
],39525)
}
]);
