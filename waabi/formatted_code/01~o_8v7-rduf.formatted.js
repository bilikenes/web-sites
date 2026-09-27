(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,29229,e=> {
"use strict";
var t=e.i(56242);
e.i(48490);
var s=e.i(1855),l=e.i(7284),a=e.i(69348),i=e.i(69235),r=e.i(78164),n=e.i(59163),c=e.i(30397);
let o=( {
line:e,delay:s=0,stagger:l=.07,opacity:i=0,x:r=20,useAnimate:o=!1,useInView:d=!0
}
)=> {
let u="string"==typeof e?e.split(" "):n.default.Children.toArray(e).flatMap(e=>"string"==typeof e?e.split(" "):e);
return u.map((e,n)=>(0,t.jsxs)("span", {
children:[(0,t.jsx)(a.motion.span, {
initial: {
opacity:i,x:r
}
,animate:o? {
opacity:1,x:0
}
: {
opacity:i,x:r
}
,whileInView:d? {
opacity:1,x:0
}
: {

}
,viewport:d? {
once:!0
}
: {

}
,transition: {
...c.config,delay:s+n*l
}
,className:"no-js:opacity-100! inline-flex items-center",children:e
}
),(0,t.jsx)("span", {
children:n<u.length-1&&" "
}
)]
}
,n))
}
;
e.s(["Title",0,( {
as:e="h2",size:c="regular",textAlign:d="text-left",title:u="",subtitle:m="",opacity:f=0,x:h=20,delay:x=0,stagger:p=.07,className:v="",useCentered:g=!0,useParallax:w=!1,useAnimate:y=!1,useInView:j=!0
}
)=> {
let b=(0,n.useRef)(null),N=(0,s.useMediaQuery)("(min-width: 768px)"),C=(0,i.useScroll)( {
target:b,offset:["start end","end start"]
}
),T=(0,r.useTransform)(C.scrollYProgress,[.5,1],N?[0,50]:[0,0]),k=(0,r.useTransform)(C.scrollYProgress,[.5,1],N?[0,-50]:[0,0]);
return(0,t.jsx)("div", {
ref:b,className:(0,l.default)("flex w-full",g&&"justify-center",v),children:(0,t.jsx)(e, {
className:(0,l.default)(g&&"w-calc","large"===c&&"text-[7.2rem] leading-[85%] tracking-[-0.288rem] md:text-[min(14vw,15rem)] md:tracking-[min(-0.5vw,-0.6rem)]","regular"===c&&"text-[5.5rem] leading-[90%] tracking-[-0.22rem] md:text-[max(9rem,min(9vw,13rem))] md:tracking-[max(-0.6rem,min(-0.3vw,-0.52rem))]","medium"===c&&"type-z-34 md:type-z-80","medium-alt"===c&&"type-z-28 md:type-z-80","small"===c&&"type-z-28 md:type-z-60","text-balance"),children:(0,t.jsxs)("span", {
className:(0,l.default)("flex flex-col","small"===c&&"md:max-w-[max(60%,91.8rem)]"),children:[(0,t.jsx)(a.motion.span, {
className:(0,l.default)(d),style:w? {
x:T
}
: {

}
,children:u.split("\\n").map((e,s)=>(0,t.jsxs)(n.default.Fragment, {
children:[(0,t.jsx)(o, {
line:e,delay:x+s*p,stagger:p,opacity:f,x:h,useAnimate:y,useInView:j
}
),s<u.split("\\n").length-1&&(0,t.jsx)("br", {

}
)]
}
,s))
}
),m&&(0,t.jsx)(a.motion.span, {
className:(0,l.default)(d),style:w? {
x:k
}
: {

}
,children:m.split("\\n").map((e,s)=>(0,t.jsxs)(n.default.Fragment, {
children:[(0,t.jsx)(o, {
line:e,delay:x+s*p,stagger:p,opacity:f,x:h,useAnimate:y,useInView:j
}
),s<m.split("\\n").length-1&&(0,t.jsx)("br", {

}
)]
}
,s))
}
)]
}
)
}
)
}
)
}
])
}
,56902,e=> {
"use strict";
var t=e.i(56242),s=e.i(7284),l=e.i(27686),a=e.i(69348),i=e.i(59163),r=e.i(99084),n=e.i(30397);
e.s(["Button",0,( {
as:e="button",theme:c="solid",children:o,useCopyToClipboard:d=!1,useCopyText:u="",className:m="",download:f=!1,...h
}
)=> {
let x=(0,s.default)("flex h-36 shrink-0 items-center justify-center px-24 md:h-48","solid"===c&&"bg-pink text-white","outline"===c&&"hover:bg-pink border border-current/15 hover:border-current/0 hover:text-white",m),[p,v]=(0,i.useState)(o);
if((0,i.useEffect)(()=> {
v(o)
}
,[o]),"button"===e)return(0,t.jsx)(a.motion.button, {
layout:!0,whileHover: {
scale:1.05
}
,whileTap: {
scale:.95
}
,transition: {
layout: {
duration:1,ease:n.eases.OUT_SNAPPY
}
,duration:.4,ease:n.eases.OUT_SNAPPY
}
,className:x,style: {
borderRadius:50
}
,...d&& {
onClick:()=> {
d?(navigator.clipboard.writeText(u),v("Email copied to clipboard"),setTimeout(()=> {
v(o)
}
,2e3)):v(o)
}

}
,...h,children:(0,t.jsx)(l.AnimatePresence, {
mode:"popLayout",children:(0,t.jsx)(a.motion.div, {
layout:!0,initial: {
opacity:0
}
,animate: {
opacity:1,transition: {
...n.config,delay:.2
}

}
,exit: {
opacity:0
}
,className:"flex",children:(0,t.jsx)(a.motion.span, {
layout:!0,className:"type-s-11 md:type-s-12 leading-[140%] tracking-[0.024rem]",children:p
}
)
}
,p.toString())
}
)
}
);
let g=h.href?.startsWith("http");
return(0,t.jsx)(a.motion.div, {
whileHover: {
scale:1.05
}
,whileTap: {
scale:.95
}
,children:(0,t.jsx)(r.Link, {
...h,target:g?"_blank":"_self",download:f?h.download||!0:void 0,className:x,style: {
borderRadius:50
}
,children:(0,t.jsx)("span", {
className:"type-s-11 md:type-s-12 leading-[140%] tracking-[0.024rem]",children:p
}
)
}
)
}
)
}
])
}
,4043,e=> {
"use strict";
var t=e.i(56242),s=e.i(7284);
e.s(["Tag",0,( {
children:e,className:l=""
}
)=>(0,t.jsx)("div", {
className:(0,s.default)("flex-center h-26 gap-6","shrink-0 rounded-[4rem] px-11","ease-snappy transition-colors duration-500",l),children:(0,t.jsx)("span", {
className:"type-s-10",children:e
}
)
}
)])
}
,5025,e=> {
"use strict";
var t=e.i(10067),s=e.i(47689);
e.s(["formatDate",0,e=>new Intl.DateTimeFormat("en-US", {
timeZone:"America/Los_Angeles",month:"long",day:"numeric",year:"numeric"
}
).format(new Date(e)),"sanitizeText",0,(e="",l=["em","br"],a= {

}
)=> {
let i=(0,s.replaceSuperscriptMarkersInTextNodes)(e),r=[...new Set([...l,"sup"])];
return(0,t.default)(i, {
allowedTags:r,allowedAttributes: {
...a,a:["href","target","rel"],iframe:["src","width","height","allowfullscreen","allow","frameborder","marginheight","marginwidth","scrolling","style"]
}

}
)
}
])
}
,22635,e=> {
"use strict";
var t=e.i(56242),s=e.i(7284),l=e.i(69348);
e.s(["ButtonRound",0,( {
title:e,children:a,className:i,onClick:r,useHover:n,size:c="regular",...o
}
)=>(0,t.jsx)(l.motion.button, {
whileHover: {
scale:1.05
}
,whileTap: {
scale:.95
}
,"aria-label":e,onClick:r,className:(0,s.default)("flex-center size-32 rounded-full border-1 border-current/15","regular"===c&&"md:size-50","group-hover/arrow:bg-pink group-hover/arrow:border-current/0",n&&"hover:bg-pink hover:border-current/0 hover:text-white",i),...o,children:a
}
)])
}
,20856,e=> {
"use strict";
var t=e.i(56242);
e.i(48490);
var s=e.i(4812),l=e.i(22635);
e.s(["Down",0,( {
onClick:e,target:l=null
}
)=> {
let a=(0,s.useWindowSize)();
return(0,t.jsx)("button", {
"aria-label":"Scroll Down",onClick:e||(()=> {
window.scrollTo( {
top:l||a.height,behavior:"smooth"
}
)
}
),className:"flex-center bg-pink h-24 w-24 cursor-pointer rounded-full",children:(0,t.jsxs)("svg", {
xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,t.jsx)("path", {
d:"M12.4406 13.5852L14.2512 11.7745C14.3397 11.6861 14.4433 11.6431 14.5623 11.6456C14.6812 11.648 14.7848 11.6934 14.8732 11.7818C14.9552 11.8703 14.9974 11.974 14.9999 12.0929C15.0024 12.2118 14.9594 12.3155 14.871 12.404L12.3103 14.9646C12.2669 15.008 12.2186 15.0397 12.1656 15.0598C12.1127 15.0798 12.0572 15.0898 11.9993 15.0898C11.9413 15.0898 11.8859 15.0798 11.8329 15.0598C11.7799 15.0397 11.7317 15.008 11.6882 14.9646L9.12532 12.4016C9.04177 12.3181 9 12.216 9 12.0954C9 11.9748 9.04177 11.8703 9.12532 11.7818C9.21371 11.6934 9.31859 11.6492 9.43997 11.6492C9.56134 11.6492 9.66626 11.6934 9.75472 11.7818L11.5579 13.5852L11.5579 9.35154C11.5579 9.22771 11.6005 9.12318 11.6857 9.03795C11.7709 8.95279 11.8754 8.91021 11.9993 8.91021C12.1231 8.91021 12.2276 8.95279 12.3129 9.03795C12.398 9.12318 12.4406 9.22771 12.4406 9.35154L12.4406 13.5852Z",fill:"white"
}
),(0,t.jsx)("path", {
d:"M9.0127 12.0957C9.0127 12.0078 9.03547 11.9287 9.08105 11.8584L9.13477 11.79C9.22076 11.7043 9.32277 11.6621 9.44043 11.6621C9.55818 11.6622 9.66001 11.705 9.74609 11.791L11.5703 13.6152L11.5703 9.35156C11.5703 9.23101 11.6117 9.12966 11.6943 9.04687C11.7771 8.96418 11.8785 8.92291 11.999 8.92285C12.1196 8.92285 12.2209 8.9642 12.3037 9.04687C12.3865 9.12968 12.4277 9.23094 12.4277 9.35156L12.4277 13.6152L14.2598 11.7832C14.3458 11.6972 14.4464 11.6559 14.5615 11.6582C14.677 11.6606 14.778 11.7048 14.8643 11.791C14.9438 11.8771 14.9848 11.9773 14.9873 12.0928C14.9897 12.2081 14.9484 12.3093 14.8623 12.3955L12.3018 14.9561C12.2595 14.9983 12.2124 15.0285 12.1611 15.0479C12.1096 15.0673 12.0555 15.0771 11.999 15.0771C11.9427 15.0771 11.8884 15.0673 11.8369 15.0479C11.786 15.0285 11.7394 14.998 11.6973 14.9561L9.13379 12.3926C9.0529 12.3116 9.01276 12.2128 9.0127 12.0957Z",stroke:"white",strokeOpacity:"0.25",strokeWidth:"0.025"
}
)]
}
)
}
)
}
,"Left",0,( {
className:e,onClick:s,useHover:a=!1
}
)=>(0,t.jsx)(l.ButtonRound, {
title:"Previous",onClick:s,useHover:a,className:e,children:(0,t.jsx)("svg", {
xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",children:(0,t.jsx)("path", {
d:"M3.28293 5.36163L5.22751 7.30611C5.32244 7.40111 5.36859 7.51246 5.36595 7.64017C5.36331 7.76788 5.31453 7.8792 5.2196 7.97413C5.1246 8.06218 5.01324 8.10753 4.88553 8.11017C4.75782 8.11281 4.64647 8.06666 4.55147 7.97173L1.80147 5.22173C1.75487 5.17506 1.72081 5.12326 1.69928 5.06631C1.67776 5.00944 1.66699 4.94989 1.66699 4.88767C1.66699 4.82545 1.67776 4.7659 1.69928 4.70902C1.72081 4.65208 1.75487 4.60027 1.80147 4.5536L4.55397 1.80121C4.64369 1.71149 4.75331 1.66663 4.88283 1.66663C5.01234 1.66663 5.1246 1.71149 5.2196 1.80121C5.31453 1.89614 5.36199 2.00878 5.36199 2.13913C5.36199 2.26947 5.31453 2.38215 5.2196 2.47715L3.28293 4.41371L7.8296 4.41371C7.96258 4.41371 8.07484 4.45944 8.16637 4.5509C8.25783 4.64243 8.30355 4.75468 8.30355 4.88767C8.30355 5.02065 8.25783 5.13291 8.16637 5.22444C8.07484 5.3159 7.96258 5.36163 7.8296 5.36163L3.28293 5.36163Z",fill:"currentColor"
}
)
}
)
}
),"Right",0,( {
className:e,onClick:s,useHover:a=!1
}
)=>(0,t.jsx)(l.ButtonRound, {
title:"Next",onClick:s,useHover:a,className:e,children:(0,t.jsx)("svg", {
xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",children:(0,t.jsx)("path", {
d:"M6.71707 4.63837L4.77249 2.6939C4.67756 2.5989 4.63141 2.48754 4.63405 2.35983C4.63669 2.23212 4.68547 2.1208 4.7804 2.02587C4.8754 1.93782 4.98676 1.89247 5.11447 1.88983C5.24217 1.88719 5.35353 1.93334 5.44853 2.02827L8.19853 4.77827C8.24513 4.82494 8.27919 4.87674 8.30072 4.93369C8.32224 4.99056 8.33301 5.05011 8.33301 5.11233C8.33301 5.17455 8.32224 5.2341 8.30072 5.29098C8.27919 5.34792 8.24513 5.39973 8.19853 5.4464L5.44603 8.19879C5.35631 8.28851 5.24669 8.33337 5.11717 8.33337C4.98766 8.33337 4.8754 8.28851 4.7804 8.19879C4.68547 8.10386 4.63801 7.99122 4.63801 7.86087C4.63801 7.73053 4.68547 7.61785 4.7804 7.52285L6.71707 5.58629L2.1704 5.58629C2.03742 5.58629 1.92516 5.54056 1.83363 5.4491C1.74217 5.35758 1.69644 5.24532 1.69644 5.11233C1.69644 4.97935 1.74217 4.86709 1.83363 4.77556C1.92516 4.6841 2.03742 4.63837 2.1704 4.63837L6.71707 4.63837Z",fill:"currentColor"
}
)
}
)
}
)])
}
,84160,e=> {
"use strict";
var t=e.i(56242),s=e.i(7284),l=e.i(59163),a=e.i(87648),i=e.i(3505);
e.s(["Section",0,( {
name:e,children:r,className:n,classNameInView:c="absolute inset-0 pointer-events-none",...o
}
)=> {
let d=(0,l.useRef)(null),u=e.toLowerCase().replace(/ /g,"-");
return(( {
ref:e,name:t=""
}
)=> {
let s=(0,i.useApp)("set"),r=(0,i.useApp)("section"),n=(0,a.useInView)(e);
return(0,l.useEffect)(()=> {
n&&t!==r&&s( {
section:t
}
)
}
,[n,t,s])
}
)( {
ref:d,name:e
}
),(0,t.jsxs)("section", {
id:u,className:(0,s.default)("relative flex w-full flex-col",n),...o,children:[(0,t.jsx)("div", {
ref:d,className:(0,s.default)("debug",c)
}
),r]
}
)
}
],84160)
}
,22507,e=> {
"use strict";
var t=e.i(56242),s=e.i(56902),l=e.i(99084),a=e.i(39842);
e.s(["DatoButton",0,( {
button:e,className:i
}
)=> {
if(!e?.link)return null;
let r=e.link?.url?e.link.url:(0,a.getInternalLink)(e.link);
return r?(0,t.jsx)(s.Button, {
as:l.Link,href:r,className:i,children:e.label
}
):null
}
])
}
,71594,e=> {
"use strict";
var t=e.i(59163);
e.s(["usePageInView",0,function() {
let[e,s]=(0,t.useState)(!0);
return(0,t.useEffect)(()=> {
let e=()=>s(!document.hidden);
return document.hidden&&e(),document.addEventListener("visibilitychange",e),()=> {
document.removeEventListener("visibilitychange",e)
}

}
,[]),e
}
])
}
,93757,e=> {
"use strict";
var t=e.i(56242),s=e.i(7284),l=e.i(27686),a=e.i(69348),i=e.i(87648),r=e.i(88098),n=e.i(10800),c=e.i(64204),o=e.i(59163),d=e.i(71594),u=e.i(30397);
let m=2e3,f= {
layout: {
duration:.8,ease:u.eases.IN_OUT_QUART
}
,duration:.8,ease:u.eases.IN_OUT_QUART
}
,h=( {
image:e,className:l
}
)=> {
let i=(0,r.useIsPresent)();
return(0,t.jsx)(a.motion.div, {
layout:!0,"data-index":e.key,transition:f,className:(0,s.default)("absolute",l,!i&&"z-0!"),children:(0,t.jsx)(a.motion.div, {
layout:!0,initial: {
x:"100%"
}
,animate: {
x:"0%"
}
,exit:i? {

}
: {
scale:.5,x:20
}
,transition:f,className:"size-full overflow-clip bg-gray-300",style: {
borderRadius:12
}
,children:(0,t.jsx)(a.motion.div, {
layout:!0,initial: {
scale:1.5
}
,animate: {
scale:1
}
,transition:f,className:"size-full",children:(0,t.jsx)(c.default, {
src:e.src,width:e.width,height:e.height,priority:!1,loading:"lazy",decoding:"async",alt:"",className:"size-full object-cover"
}
)
}
)
}
)
}
,e.key)
}
;
e.s(["Images",0,( {
images:e=[],className:s="relative flex w-full px-24",classNames:a= {
container:"rounded-calc relative flex h-[35vw] w-full items-center overflow-clip",images:["left-0 h-[17vw] w-[23vw]","left-[calc(calc(100%-(47vw+(39vw*0.5)+(31vw*0.5))))] h-[23vw] w-[31vw]","left-[calc(calc(100%-(47vw+(39vw*0.5))))] h-[29vw] w-[39vw]","left-[calc(calc(100%-47vw))] h-[35vw] w-[47vw]"]
}
,intervalDuration:r=m
}
)=> {
let c=(0,o.useRef)(),u=(0,i.useInView)(c),f=a.images.length,x=(0,d.usePageInView)(), {
imagesCount:p,imageList:v
}
=(0,o.useMemo)(()=> {
if(!f||!e.length)return {
imagesCount:0,imageList:[]
}
;
let t=f+2,s=Array.from( {
length:Math.ceil(t/e.length)
}
,(t,s)=>e.map((t,l)=>( {
...t,key:s*e.length+l
}
))).flat().slice(0,t);
return {
imagesCount:s.length,imageList:s
}

}
,[e,f]),g=(0,o.useCallback)(e=>(0,n.wrap)(0,p,e),[p]),[w,y]=(0,o.useState)(0),j=Array.from( {
length:f
}
,(e,t)=>v[g(w+t)]);
return((0,o.useEffect)(()=> {
if(!u||!x)return;
let e=setInterval(()=> {
y(e=>g(e+1))
}
,r);
return()=>clearInterval(e)
}
,[u,x,r,g]),e&&0!==p)?(0,t.jsx)("div", {
ref:c,className:s,children:(0,t.jsx)("div", {
className:a.container,children:(0,t.jsx)(l.AnimatePresence, {
initial:!1,children:j.map((e,s)=>(0,t.jsx)(h, {
image:e,className:a.images[s],style: {
zIndex:f-s
}

}
,e.key))
}
)
}
)
}
):null
}
])
}
,61870,e=> {
"use strict";
var t=e.i(56242),s=e.i(93757),l=e.i(22507),a=e.i(5025);
e.s(["TwoSplits",0,( {
title:e,description:i,button:r,images:n,anchorName:c
}
)=>(0,t.jsxs)("section", {
id:c,className:"w-calc flex flex-col gap-60 py-[calc(var(--padding-y)+4rem)] md:flex-row md:items-center md:justify-between",children:[(0,t.jsx)("div", {
className:"flex w-full items-center justify-center md:order-2 lg:justify-start",children:(0,t.jsx)(s.Images, {
className:"relative w-full max-w-685 overflow-clip",classNames: {
container:"relative flex h-302 w-full items-center overflow-clip md:h-700",images:["left-0 z-4 aspect-[320/427] w-[46.71%]","right-0 z-5 aspect-[320/427] w-[70%] md:w-[76.64%]"]
}
,images:(n||[]).map(e=>e.image)
}
)
}
),(0,t.jsxs)("div", {
className:"flex w-full max-w-330 flex-col gap-23 md:order-1 md:gap-48 lg:max-w-448",children:[(0,t.jsxs)("div", {
className:"flex flex-col gap-23 md:gap-32",children:[(0,t.jsx)("p", {
className:"type-z-34 md:type-z-80",children:e
}
),(0,t.jsx)("div", {
className:"w-full max-w-[90%]",children:(0,t.jsx)("p", {
className:"type-s-14 md:type-z-24 text-balance text-current/60",dangerouslySetInnerHTML: {
__html:(0,a.sanitizeText)(i)
}

}
)
}
)]
}
),r&&(0,t.jsx)("div", {
className:"flex",children:(0,t.jsx)(l.DatoButton, {
button:r
}
)
}
)]
}
)]
}
)])
}
,4263,(e,t,s)=> {
"use strict";
Object.defineProperty(s,"__esModule", {
value:!0
}
);
var l= {
callServer:function() {
return i.callServer
}
,createServerReference:function() {
return n.createServerReference
}
,findSourceMapURL:function() {
return r.findSourceMapURL
}

}
;
for(var a in l)Object.defineProperty(s,a, {
enumerable:!0,get:l[a]
}
);
let i=e.r(56484),r=e.r(48995),n=e.r(85973)
}
,31164,e=> {
"use strict";
var t=e.i(56242);
e.i(48490);
var s=e.i(55007),l=e.i(1855),a=e.i(40097),i=e.i(4812),r=e.i(7284),n=e.i(83592),c=e.i(69348),o=e.i(87648),d=e.i(69312),u=e.i(22307),m=e.i(69235),f=e.i(78164),h=e.i(64204),x=e.i(59163),p=e.i(29229),v=e.i(27550),g=e.i(20856),w=e.i(56902),y=e.i(22507),j=e.i(39047),b=e.i(30397);
let N=c.motion.create(h.default),C=( {
media:e,isVisible:s,index:l,reverseIndex:a,isLast:i,activeItem:r
}
)=> {
let n=l===r,o=r-l;
return(0,t.jsxs)(c.motion.div, {
className:"rounded-calc absolute inset-0 overflow-clip max-md:hidden",style: {
zIndex:l+2
}
,animate: {
y:!s||l>r?"100vh":`${-3*o}vh`,scale:n?1:1-.05*o
}
,transition: {
duration:1,ease:b.cubic.OUT_EXPO,delay:s?.07*l:.07*o-.07
}
,children:[(0,t.jsx)(v.VideoWithImage, {
video:e.video,image:e.image,imageProps: {
sizes:"(max-width: 768px) 100vw, 50vw",priority:!1,loading:"lazy",decoding:"async"
}
,className:"h-full w-full object-cover"
}
),(0,t.jsx)(c.motion.div, {
animate: {
opacity:+!n
}
,className:"absolute inset-0 bg-black/50"
}
)]
}
)
}
,T=( {
benefit:e,isActive:s,onClick:l
}
)=>(0,t.jsxs)(c.motion.div, {
layout:!0,layoutId:`benefit-${e.title}`,initial: {
opacity:.3
}
,animate: {
opacity:s?1:.46
}
,className:"pointer-events-auto flex w-full cursor-pointer flex-col gap-20 max-md:hidden",onClick:l,children:[(0,t.jsx)(c.motion.p, {
layout:!0,className:"type-z-24 md:type-z-40",children:e.title
}
),s&&(0,t.jsx)(c.motion.div, {
layout:!0,initial: {
opacity:0
}
,animate: {
opacity:+!!s
}
,className:"overflow-hidden",children:(0,t.jsx)(c.motion.p, {
layout:!0,className:"text-s-14 md:text-s-15 text-pretty text-black/55",children:e.description
}
)
}
)]
}
),k=( {
benefits:e,button:s
}
)=> {
let[l,a]=(0,x.useState)(0),i=(0,x.useRef)(null),r=(0,x.useRef)(null),d=(0,x.useRef)(null),u=(0,o.useInView)(i, {
amount:.5
}
),m=(0,x.useCallback)(()=> {
r.current=(0,n.animate)(d.current, {
x:["-100%","0%"]
}
, {
duration:5
}
).then(()=> {
a(t=>(t+1)%e.length)
}
)
}
,[e.length]);
return(0,x.useEffect)(()=> {
u&&m()
}
,[u,l,m]),(0,t.jsx)("div", {
ref:i,className:"w-full py-(--padding-y) md:hidden",children:(0,t.jsxs)("div", {
className:"w-calc flex flex-col gap-40",children:[(0,t.jsx)("div", {
className:"rounded-calc relative aspect-square overflow-clip",children:(0,t.jsx)(v.VideoWithImage, {
video:e[l].media.video,image:e[l].media.image,imageProps: {
sizes:"(max-width: 768px) 100vw",priority:!1,loading:"lazy",decoding:"async"
}

}
,e[l].media.id)
}
),(0,t.jsxs)(c.motion.div, {
layout:!0,className:"flex flex-col gap-20",children:[(0,t.jsx)(c.motion.p, {
layout:!0,className:"type-z-24",children:e[l].title
}
),(0,t.jsx)("div", {
className:"grid",children:e.map((e,s)=>(0,t.jsx)(c.motion.p, {
layout:!0,initial: {
opacity:0
}
,animate: {
opacity:+(s===l)
}
,className:"area text-s-14 text-pretty text-black/50",children:e.description
}
,s))
}
),(0,t.jsx)(c.motion.div, {
layout:!0,className:"relative h-1 w-full overflow-clip bg-black/15",children:(0,t.jsx)(c.motion.div, {
ref:d,className:"bg-pink absolute bottom-0 left-0 h-2 w-full"
}
)
}
),(0,t.jsxs)("div", {
className:"flex items-center justify-between pt-4",children:[s&&(0,t.jsx)(w.Button, {
as:"a",href:s.href,children:s.label
}
),(0,t.jsxs)("div", {
className:"flex gap-8",children:[(0,t.jsx)(g.Left, {
onClick:()=> {
r?.current?.cancel?.(),a((l-1+e.length)%e.length)
}

}
),(0,t.jsx)(g.Right, {
onClick:()=> {
r?.current?.cancel?.(),a((l+1)%e.length)
}

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
;
e.s(["Benefits",0,( {
data:e
}
)=> {
let n=(0,i.useWindowSize)(),o=(0,l.useMediaQuery)("(min-width: 768px)"),h=(0,s.useIsClient)(),v=(0,x.useRef)(null),g=(0,x.useRef)(null),w=(0,x.useRef)(null),[z,I]=(0,x.useState)(0),[L,S]=(0,x.useState)(!1), {
scrollYProgress:R
}
=(0,m.useScroll)( {
target:v,offset:["start end","end center"]
}
), {
scrollYProgress:P
}
=(0,m.useScroll)( {
target:w,offset:["start center","end end"]
}
);
(0,u.useMotionValueEvent)(P,"change",e=> {
S(e>.5)
}
);
let[_,A]=(0,x.useState)( {

}
),[M,U]=(0,a.useRect)(),[B,O]=(0,a.useRect)();
(0,x.useLayoutEffect)(()=> {
let e=(0,j.fit)(U,O),t=U.left+U.width/2,s=U.top+U.height/2;
A( {
cover:e,translationX:O.left+O.width/2-t,translationY:O.top+O.height/2-s
}
)
}
,[n.width,n.height,U,O]);
let V=(0,f.useTransform)(R,[0,1],h&&o?[1/_?.cover?.scale,1]:[1,1], {
ease:b.cubic.IN_OUT_CUBIC
}
),E=(0,f.useTransform)(R,[0,1],h&&o?[-(_?.translationY*1),0]:[0,0], {
ease:b.cubic.IN_OUT_CUBIC
}
),$=(0,f.useTransform)(R,[0,1],h&&o?[-(_?.translationX*1),0]:[0,0], {
ease:b.cubic.IN_OUT_CUBIC
}
),Y=d.useMotionTemplate`translate3d(${$}px, ${E}px, 0px) scale3d(${V}, ${V}, ${V})`,D=(0,f.useTransform)(V,e=>o?16/e:16), {
scrollYProgress:W
}
=(0,m.useScroll)( {
target:g,offset:["start end","end end"]
}
),H=(0,f.useTransform)(W,[.25,.5],[0,-50]),Q=(0,f.useTransform)(W,[.25,.5],[0,1]),Z=(0,f.useTransform)(W,[.25,.5],[1,.9]),q=(0,f.useTransform)(W,[.75,1],[1,0]),F=(0,x.useRef)(null);
return(0,x.useEffect)(()=>()=> {
F.current&&clearTimeout(F.current)
}
,[]),(0,t.jsxs)("section", {
className:(0,r.default)("bg-background text-foreground relative w-full max-md:py-(--padding-y) md:h-[200vh]"),children:[(0,t.jsx)("div", {
ref:v,className:(0,r.default)("absolute top-[25vh] left-0 h-[25vh] w-30",!1)
}
),(0,t.jsx)("div", {
ref:g,className:(0,r.default)("absolute top-[100vh] left-0 h-[200vh] w-30",!1)
}
),(0,t.jsx)("div", {
ref:M,className:"rounded-calc absolute -top-133 -left-110 h-133 w-133 md:-top-[calc(133/1440*100vw)] md:left-[calc(16.667%)] md:h-[calc(133/1440*100vw)] md:w-[calc(133/1440*100vw)]"
}
),(0,t.jsx)("div", {
className:"w-calc relative md:h-full md:px-90",children:(0,t.jsxs)("div", {
className:"flex w-full gap-40 max-md:flex-col md:h-full md:justify-between",children:[(0,t.jsx)("div", {
className:(0,r.default)("relative flex flex-1 flex-col md:h-full md:max-w-527"),children:(0,t.jsxs)(c.motion.div, {
className:(0,r.default)("md:sticky md:top-0 md:flex md:h-screen md:items-center"),children:[(0,t.jsx)("div", {
ref:B,className:"rounded-calc absolute aspect-square w-full overflow-clip"
}
),(0,t.jsxs)(c.motion.div, {
className:"relative w-full",style:h&&o? {
translateY:H,scale:Z,opacity:q
}
: {

}
,children:[(0,t.jsx)(c.motion.div, {
className:"flex-center relative size-full",animate: {
opacity:+!L,scale:L?.6:1
}
,children:(0,t.jsxs)(c.motion.div, {
style: {
transform:Y,borderRadius:D,transformOrigin:"center center"
}
,className:"rounded-calc relative aspect-square w-full overflow-clip",children:[(0,t.jsx)(N, {
src:e.introductionImage.src,alt:e.introductionImage.alt||e.introductionImage.title||e.introductionTitle,width:e.introductionImage.width,height:e.introductionImage.height,priority:!1,loading:"lazy",decoding:"async",className:"h-full w-full object-cover",sizes:"(max-width: 768px) 100vw, 50vw"
}
),(0,t.jsx)(c.motion.div, {
style: {
opacity:Q
}
,className:"absolute inset-0 bg-black/50"
}
)]
}
)
}
),e.benefits.length>0&&e.benefits.map((s,l)=>(0,t.jsx)(C, {
media:s.media,index:l,isVisible:L,reverseIndex:e.benefits.length-l-1,isLast:l===e.benefits.length-1,activeItem:z
}
,l))]
}
)]
}
)
}
),(0,t.jsxs)("div", {
className:"relative flex flex-1 flex-col md:h-[200vh] md:max-w-370",children:[(0,t.jsx)("div", {
className:(0,r.default)("md:flex md:h-screen md:flex-wrap md:items-center"),children:(0,t.jsxs)("div", {
className:(0,r.default)("flex w-full flex-col gap-20 md:gap-24"),children:[(0,t.jsx)(p.Title, {
size:"small",title:e.introductionTitle
}
),(0,t.jsx)("p", {
className:"text-s-14 md:text-s-15 text-pretty text-black/55",children:e.introductionParagraph
}
)]
}
)
}
),(0,t.jsxs)("div", {
ref:w,className:(0,r.default)("sticky top-0 hidden md:flex md:h-screen md:flex-col md:items-start md:justify-center md:gap-20","pointer-events-none -mt-[50svh]"),children:[e.benefits.length>0&&e.benefits.map((e,s)=>(0,t.jsx)(T, {
benefit:e,isActive:s===z,onClick:()=> {
I(s)
}
,index:s
}
,s)),e.button&&(0,t.jsx)(y.DatoButton, {
button:e.button,className:"mt-40"
}
)]
}
)]
}
)]
}
)
}
),(0,t.jsx)(k, {
benefits:e.benefits,button:e.button
}
)]
}
)
}
])
}
,84071,e=> {
"use strict";
var t=e.i(56242);
e.i(48490);
var s=e.i(4812),l=e.i(7284),a=e.i(69348),i=e.i(69312),r=e.i(22307),n=e.i(69235),c=e.i(78164),o=e.i(59163),d=e.i(56131),u=e.i(29229),m=e.i(27550),f=e.i(20856),h=e.i(22507),x=e.i(39047),p=e.i(30397),v=e.i(46368);
e.s(["Hero",0,( {
heroVideo:e,title:g,subtitle:w,paragraph:y,button:j
}
)=> {
let b= {
src:[ {
url:e?.video?.url,media:"(min-width: 768px)"
}
, {
url:e?.responsiveVideo?.url,media:""
}
]
}
,N=(0,o.useRef)(null),C=(0,o.useRef)(null),T=(0,o.useRef)(null),k=(0,o.useRef)(null),z=(0,s.useWindowSize)(),[I,L]=(0,o.useState)(!1), {
scrollYProgress:S
}
=(0,n.useScroll)( {
target:N,offset:["start start","end end"]
}
), {
scrollYProgress:R
}
=(0,n.useScroll)( {
target:C,offset:["start start","end start"]
}
), {
scrollYProgress:P
}
=(0,n.useScroll)( {
target:T,offset:["start start","end start"]
}
),_=(0,c.useTransform)(S,[.1,.2],[0,1]),A=(0,c.useTransform)(P,[.5,1],[1,0]),M=(0,c.useTransform)(S,[0,.1],[1,0]),U=(0,c.useTransform)(R,[0,.35,1],[1,1,0]);
(0,r.useMotionValueEvent)(S,"change",e=> {
e>.15?L(!0):L(!1)
}
);
let[B,O]=(0,o.useState)( {

}
);
(0,o.useLayoutEffect)(()=> {
let e=(0,x.fit)( {
width:z.width,height:z.height
}
,k?.current?.getBoundingClientRect()),t=z.width*e.scale,s=z.height*e.scale,l=(Math.max(t,s)-Math.min(t,s))*.5/e.scale;
O( {
cover:e,clip: {
y:z.width>z.height?0:l,x:z.width>z.height?l:0
}

}
)
}
,[z.width,z.height]);
let V=(0,c.useTransform)(R,[0,1],[1,B?.cover?.scale], {
ease:p.cubic.IN_OUT_BASE
}
),E=(0,c.useTransform)(V,e=>16*(1-Math.max(0,Math.min(1,(e-.95)/.050000000000000044)))/e, {
ease:p.cubic.OUT_SNAPPY
}
),$=(0,c.useTransform)(R,[0,1],[0,B?.clip?.x], {
ease:p.cubic.OUT_SNAPPY
}
),Y=(0,c.useTransform)(R,[0,1],[0,B?.clip?.y], {
ease:p.cubic.OUT_SNAPPY
}
),D=i.useMotionTemplate`inset(${Y}px ${$}px ${Y}px ${$}px round ${E}px`,W=i.useMotionTemplate`translate3d(0, 0, 0) scale3d(${V}, ${V}, ${V})`;
return(0,t.jsxs)("section", {
ref:N,className:"text-background relative z-50 mb-[-75vh] h-[250vh] w-full md:h-[250vh]",children:[(0,t.jsx)("div", {
ref:C,className:(0,l.default)("absolute top-[100vh] left-0 h-[50vh] w-30",!1)
}
),(0,t.jsx)("div", {
ref:T,className:(0,l.default)("absolute top-[75vh] left-35 h-[25vh] w-30",!1)
}
),(0,t.jsxs)(a.motion.div, {
className:"relative h-full w-full",children:[(0,t.jsxs)("div", {
className:"sticky top-0 left-0 h-svh w-full",children:[(0,t.jsx)("div", {
className:"absolute top-0 left-0 h-dvh w-full",children:(0,t.jsxs)(a.motion.div, {
className:"absolute inset-0 will-change-transform",style: {
transform:W,clipPath:D
}
,children:[(0,t.jsx)(m.VideoWithImage, {
video:b,image:e?.posterImage
}
),(0,t.jsx)(a.motion.div, {
style: {
opacity:U
}
,className:"absolute inset-0 bg-black/35"
}
)]
}
)
}
),(0,t.jsx)(a.motion.div, {
className:"px-calc absolute top-0 flex h-svh w-full items-end justify-start pb-40 md:pb-90",style: {
opacity:_
}
,children:(0,t.jsxs)(a.motion.div, {
className:"relative flex flex-col gap-y-24",style: {
opacity:A
}
,children:[(0,t.jsx)(d.Paragraph, {
paragraph:(0,v.sanitizeText)(y,["em","strong","span","s"]),className:"type-z-24 md:type-z-40 max-w-295 text-balance md:max-w-495",opacity:0,colorTo:"rgba(255,255,255,1)",useInView:!1,useAnimate:I
}
),j&&(0,t.jsx)("div", {
className:"w-fit",children:(0,t.jsx)(h.DatoButton, {
button:j
}
)
}
)]
}
)
}
)]
}
),(0,t.jsxs)("div", {
className:"w-calc pointer-events-auto relative mt-[-100lvh] mb-[100lvh] flex h-lvh items-end justify-start py-[var(--padding-y)]",children:[(0,t.jsx)(u.Title, {
as:"h1",size:"large",title:g,subtitle:w,className:"pointer-events-auto",useParallax:!0,useCentered:!1
}
),(0,t.jsx)(a.motion.div, {
style: {
opacity:M
}
,className:"relative flex",children:(0,t.jsx)(a.motion.div, {
initial: {
opacity:0
}
,animate: {
opacity:1
}
,transition: {
duration:.4,ease:"linear",delay:1
}
,className:"pointer-events-auto flex w-full items-center justify-end",children:(0,t.jsx)(f.Down, {
target:1.65*z.height
}
)
}
)
}
)]
}
)]
}
),(0,t.jsx)("div", {
ref:k,className:"rounded-calc absolute bottom-0 left-1/2 z-500 h-133 w-133 -translate-x-1/2 translate-y-0 md:h-[calc(133/1440*100vw)] md:w-[calc(133/1440*100vw)]"
}
)]
}
)
}
])
}
,62083,e=> {
"use strict";
var t=e.i(56242);
e.i(48490);
var s=e.i(1855),l=e.i(7284),a=e.i(69348),i=e.i(69235),r=e.i(78164),n=e.i(64204),c=e.i(59163),o=e.i(56131),d=e.i(23023),u=e.i(46368);
let m="h-[150vh]",f=( {
parent:e,track:l,data:n
}
)=> {
let[d,m]=(0,c.useState)(!1),f=(0,s.useMediaQuery)("(min-width: 768px)");
(0,c.useEffect)(()=> {
m(!0)
}
,[]);
let {
scrollYProgress:h
}
=(0,i.useScroll)( {
target:l,offset:["center end","end end"]
}
),x=(0,r.useTransform)(h,[0,1],d&&f?[-200,200]:[0,0]);
return(0,t.jsx)("div", {
className:"flex-center relative",children:(0,t.jsxs)(a.motion.div, {
style: {
y:x
}
,className:"relative flex max-w-295 flex-col items-center justify-center gap-18 text-center md:max-w-full",children:[(0,t.jsx)("div", {
className:"absolute aspect-square w-full rounded-full",children:(0,t.jsx)("div", {
className:"absolute size-full rounded-full bg-white blur-2xl"
}
)
}
),(0,t.jsx)("p", {
className:"type-z-18 md:type-z-24 relative text-black/50",children:n.title
}
),n.paragraph&&(0,t.jsx)(o.Paragraph, {
parent:e,paragraph:(0,u.sanitizeText)(n.paragraph,["strong","span","em","s"]),className:"type-z-18 md:type-z-24 text-dark relative max-w-558 overflow-clip"
}
)]
}
)
}
)
}
,h=( {
parent:e,track:s,columns:l
}
)=>(0,t.jsx)("div", {
className:"absolute inset-0 origin-top",children:l.map((l,a)=>(0,t.jsx)(x, {
parent:e,track:s,column:l,index:a
}
,a))
}
),x=( {
track:e,column:s,index:n
}
)=> {
let c=s.assets, {
scrollYProgress:o
}
=(0,i.useScroll)( {
target:e,offset:["start end","end start"]
}
),d=(0,r.useTransform)(o,[0,1],[600*(0===n||3===n),0===n||3===n?-600:0]);
return(0,t.jsx)(a.motion.div, {
style: {
y:d
}
,className:(0,l.default)("absolute flex-col","justify-between",s.display,s.position,s.height,"will-change-transform"),children:c.map((e,s)=> {
let a=1===n&&s===c.length-1;
return(0,t.jsx)(p, {
asset:e,className:(0,l.default)(a&&"md:opacity-0")
}
,s)
}
)
}
)
}
,p=( {
asset:e,className:s
}
)=>(0,t.jsx)("div", {
className:(0,l.default)("rounded-calc bg-cream relative h-133 w-133 overflow-clip md:h-[calc(133/1440*100vw)] md:w-[calc(133/1440*100vw)]",s),children:"AssetVideoRecord"===e.__typename?(0,t.jsx)(d.Video, {
video:e.video,useObjectURL:!1,autoPlay:!0
}
):(0,t.jsx)(n.default, {
src:e.image.src,alt:e.image.alt||e.image.title||"Image parallax",fill:!0,sizes:"(max-width: 768px) 266px, 18.472222vw",priority:!1,loading:"lazy",decoding:"async",className:"h-full w-full object-cover"
}
)
}
);
e.s(["Parallax",0,( {
data:e
}
)=> {
let s=(0,c.useRef)(null),a=(0,c.useRef)(null),i=(0,c.useMemo)(()=>[ {
display:"flex",position:"-left-340 md:left-24",height:m,assets:e.assetsColumns[0].assets
}
, {
display:"flex",position:"-left-110 md:left-[calc(16.667%)]",height:m,assets:e.assetsColumns[1].assets
}
, {
display:"flex",position:"-right-110 md:right-[calc(16.667%)]",height:m,assets:e.assetsColumns[3].assets
}
, {
display:"flex",position:"-right-340 md:right-24",height:m,assets:e.assetsColumns[4].assets
}
],[e.assetsColumns]),r=e.assetsColumns[2]?.assets?.[0];
return(0,t.jsxs)("section", {
ref:s,className:(0,l.default)("bg-background relative w-full overflow-clip",m),children:[(0,t.jsx)("div", {
ref:a,className:(0,l.default)("absolute top-0 left-0 w-30",m,!1)
}
),(0,t.jsx)(h, {
parent:s,track:a,columns:i
}
),(0,t.jsxs)("div", {
className:"flex-center absolute inset-0 flex-col",children:[(0,t.jsx)(f, {
parent:s,track:a,data:e
}
),r&&(0,t.jsx)(p, {
asset:r,className:"max-md:translate-y-[20svh] md:top-400"
}
)]
}
)]
}
)
}
])
}
]);
