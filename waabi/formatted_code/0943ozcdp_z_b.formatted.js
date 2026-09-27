(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,29229,e=> {
"use strict";
var t=e.i(56242);
e.i(48490);
var i=e.i(1855),a=e.i(7284),s=e.i(69348),l=e.i(69235),r=e.i(78164),n=e.i(59163),o=e.i(30397);
let d=( {
line:e,delay:i=0,stagger:a=.07,opacity:l=0,x:r=20,useAnimate:d=!1,useInView:m=!0
}
)=> {
let c="string"==typeof e?e.split(" "):n.default.Children.toArray(e).flatMap(e=>"string"==typeof e?e.split(" "):e);
return c.map((e,n)=>(0,t.jsxs)("span", {
children:[(0,t.jsx)(s.motion.span, {
initial: {
opacity:l,x:r
}
,animate:d? {
opacity:1,x:0
}
: {
opacity:l,x:r
}
,whileInView:m? {
opacity:1,x:0
}
: {

}
,viewport:m? {
once:!0
}
: {

}
,transition: {
...o.config,delay:i+n*a
}
,className:"no-js:opacity-100! inline-flex items-center",children:e
}
),(0,t.jsx)("span", {
children:n<c.length-1&&" "
}
)]
}
,n))
}
;
e.s(["Title",0,( {
as:e="h2",size:o="regular",textAlign:m="text-left",title:c="",subtitle:u="",opacity:p=0,x=20,delay:h=0,stagger:y=.07,className:f="",useCentered:g=!0,useParallax:j=!1,useAnimate:w=!1,useInView:b=!0
}
)=> {
let v=(0,n.useRef)(null),N=(0,i.useMediaQuery)("(min-width: 768px)"),T=(0,l.useScroll)( {
target:v,offset:["start end","end start"]
}
),k=(0,r.useTransform)(T.scrollYProgress,[.5,1],N?[0,50]:[0,0]),P=(0,r.useTransform)(T.scrollYProgress,[.5,1],N?[0,-50]:[0,0]);
return(0,t.jsx)("div", {
ref:v,className:(0,a.default)("flex w-full",g&&"justify-center",f),children:(0,t.jsx)(e, {
className:(0,a.default)(g&&"w-calc","large"===o&&"text-[7.2rem] leading-[85%] tracking-[-0.288rem] md:text-[min(14vw,15rem)] md:tracking-[min(-0.5vw,-0.6rem)]","regular"===o&&"text-[5.5rem] leading-[90%] tracking-[-0.22rem] md:text-[max(9rem,min(9vw,13rem))] md:tracking-[max(-0.6rem,min(-0.3vw,-0.52rem))]","medium"===o&&"type-z-34 md:type-z-80","medium-alt"===o&&"type-z-28 md:type-z-80","small"===o&&"type-z-28 md:type-z-60","text-balance"),children:(0,t.jsxs)("span", {
className:(0,a.default)("flex flex-col","small"===o&&"md:max-w-[max(60%,91.8rem)]"),children:[(0,t.jsx)(s.motion.span, {
className:(0,a.default)(m),style:j? {
x:k
}
: {

}
,children:c.split("\\n").map((e,i)=>(0,t.jsxs)(n.default.Fragment, {
children:[(0,t.jsx)(d, {
line:e,delay:h+i*y,stagger:y,opacity:p,x:x,useAnimate:w,useInView:b
}
),i<c.split("\\n").length-1&&(0,t.jsx)("br", {

}
)]
}
,i))
}
),u&&(0,t.jsx)(s.motion.span, {
className:(0,a.default)(m),style:j? {
x:P
}
: {

}
,children:u.split("\\n").map((e,i)=>(0,t.jsxs)(n.default.Fragment, {
children:[(0,t.jsx)(d, {
line:e,delay:h+i*y,stagger:y,opacity:p,x:x,useAnimate:w,useInView:b
}
),i<u.split("\\n").length-1&&(0,t.jsx)("br", {

}
)]
}
,i))
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
var t=e.i(56242),i=e.i(7284),a=e.i(27686),s=e.i(69348),l=e.i(59163),r=e.i(99084),n=e.i(30397);
e.s(["Button",0,( {
as:e="button",theme:o="solid",children:d,useCopyToClipboard:m=!1,useCopyText:c="",className:u="",download:p=!1,...x
}
)=> {
let h=(0,i.default)("flex h-36 shrink-0 items-center justify-center px-24 md:h-48","solid"===o&&"bg-pink text-white","outline"===o&&"hover:bg-pink border border-current/15 hover:border-current/0 hover:text-white",u),[y,f]=(0,l.useState)(d);
if((0,l.useEffect)(()=> {
f(d)
}
,[d]),"button"===e)return(0,t.jsx)(s.motion.button, {
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
,className:h,style: {
borderRadius:50
}
,...m&& {
onClick:()=> {
m?(navigator.clipboard.writeText(c),f("Email copied to clipboard"),setTimeout(()=> {
f(d)
}
,2e3)):f(d)
}

}
,...x,children:(0,t.jsx)(a.AnimatePresence, {
mode:"popLayout",children:(0,t.jsx)(s.motion.div, {
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
,className:"flex",children:(0,t.jsx)(s.motion.span, {
layout:!0,className:"type-s-11 md:type-s-12 leading-[140%] tracking-[0.024rem]",children:y
}
)
}
,y.toString())
}
)
}
);
let g=x.href?.startsWith("http");
return(0,t.jsx)(s.motion.div, {
whileHover: {
scale:1.05
}
,whileTap: {
scale:.95
}
,children:(0,t.jsx)(r.Link, {
...x,target:g?"_blank":"_self",download:p?x.download||!0:void 0,className:h,style: {
borderRadius:50
}
,children:(0,t.jsx)("span", {
className:"type-s-11 md:type-s-12 leading-[140%] tracking-[0.024rem]",children:y
}
)
}
)
}
)
}
])
}
]);
