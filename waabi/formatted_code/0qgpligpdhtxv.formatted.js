(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,40967,(e,t,r)=> {
"use strict";
Object.defineProperty(r,"__esModule", {
value:!0
}
);
var n= {
assign:function() {
return l
}
,searchParamsToUrlQuery:function() {
return o
}
,urlQueryToSearchParams:function() {
return s
}

}
;
for(var i in n)Object.defineProperty(r,i, {
enumerable:!0,get:n[i]
}
);
function o(e) {
let t= {

}
;
for(let[r,n]of e.entries()) {
let e=t[r];
void 0===e?t[r]=n:Array.isArray(e)?e.push(n):t[r]=[e,n]
}
return t
}
function a(e) {
return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)
}
function s(e) {
let t=new URLSearchParams;
for(let[r,n]of Object.entries(e))if(Array.isArray(n))for(let e of n)t.append(r,a(e));
else t.set(r,a(n));
return t
}
function l(e,...t) {
for(let r of t) {
for(let t of r.keys())e.delete(t);
for(let[t,n]of r.entries())e.append(t,n)
}
return e
}

}
,53449,(e,t,r)=> {
"use strict";
Object.defineProperty(r,"__esModule", {
value:!0
}
);
var n= {
DecodeError:function() {
return y
}
,MiddlewareNotFoundError:function() {
return S
}
,MissingStaticPage:function() {
return E
}
,NormalizeError:function() {
return v
}
,PageNotFoundError:function() {
return b
}
,SP:function() {
return g
}
,ST:function() {
return m
}
,WEB_VITALS:function() {
return o
}
,execOnce:function() {
return a
}
,getDisplayName:function() {
return f
}
,getLocationOrigin:function() {
return u
}
,getURL:function() {
return c
}
,isAbsoluteUrl:function() {
return l
}
,isResSent:function() {
return p
}
,loadGetInitialProps:function() {
return h
}
,normalizeRepeatedSlashes:function() {
return d
}
,stringifyError:function() {
return A
}

}
;
for(var i in n)Object.defineProperty(r,i, {
enumerable:!0,get:n[i]
}
);
let o=["CLS","FCP","FID","INP","LCP","TTFB"];
function a(e) {
let t,r=!1;
return(...n)=>(r||(r=!0,t=e(...n)),t)
}
let s=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>s.test(e);
function u() {
let {
protocol:e,hostname:t,port:r
}
=window.location;
return`${e}//${t}${r?":"+r:""}`
}
function c() {
let {
href:e
}
=window.location,t=u();
return e.substring(t.length)
}
function f(e) {
return"string"==typeof e?e:e.displayName||e.name||"Unknown"
}
function p(e) {
return e.finished||e.headersSent
}
function d(e) {
let t=e.split("?");
return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")
}
async function h(e,t) {
let r=t.res||t.ctx&&t.ctx.res;
if(!e.getInitialProps)return t.ctx&&t.Component? {
pageProps:await h(t.Component,t.ctx)
}
: {

}
;
let n=await e.getInitialProps(t);
if(r&&p(r))return n;
if(!n)throw Object.defineProperty(Error(`"${f(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`),"__NEXT_ERROR_CODE", {
value:"E1025",enumerable:!1,configurable:!0
}
);
return n
}
let g="u">typeof performance,m=g&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);
class y extends Error {

}
class v extends Error {

}
class b extends Error {
constructor(e) {
super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`
}

}
class E extends Error {
constructor(e,t) {
super(),this.message=`Failed to load static file for page: ${e} ${t}`
}

}
class S extends Error {
constructor() {
super(),this.code="ENOENT",this.message="Cannot find the middleware module"
}

}
function A(e) {
return JSON.stringify( {
message:e.message,stack:e.stack
}
)
}

}
,88701,(e,t,r)=> {
"use strict";
Object.defineProperty(r,"__esModule", {
value:!0
}
),Object.defineProperty(r,"warnOnce", {
enumerable:!0,get:function() {
return n
}

}
);
let n=e=> {

}

}
,45552,(e,t,r)=> {
"use strict";
Object.defineProperty(r,"__esModule", {
value:!0
}
);
var n= {
formatUrl:function() {
return s
}
,formatWithValidation:function() {
return u
}
,urlObjectKeys:function() {
return l
}

}
;
for(var i in n)Object.defineProperty(r,i, {
enumerable:!0,get:n[i]
}
);
let o=e.r(44066)._(e.r(40967)),a=/https?|ftp|gopher|file/;
function s(e) {
let {
auth:t,hostname:r
}
=e,n=e.protocol||"",i=e.pathname||"",s=e.hash||"",l=e.query||"",u=!1;
t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?u=t+e.host:r&&(u=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(u+=":"+e.port)),l&&"object"==typeof l&&(l=String(o.urlQueryToSearchParams(l)));
let c=e.search||l&&`?${l}`||"";
return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||a.test(n))&&!1!==u?(u="//"+(u||""),i&&"/"!==i[0]&&(i="/"+i)):u||(u=""),s&&"#"!==s[0]&&(s="#"+s),c&&"?"!==c[0]&&(c="?"+c),i=i.replace(/[?#]/g,encodeURIComponent),c=c.replace("#","%23"),`${n}${u}${i}${c}${s}`
}
let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];
function u(e) {
return s(e)
}

}
,30185,(e,t,r)=> {
"use strict";
Object.defineProperty(r,"__esModule", {
value:!0
}
),Object.defineProperty(r,"useMergedRef", {
enumerable:!0,get:function() {
return i
}

}
);
let n=e.r(59163);
function i(e,t) {
let r=(0,n.useRef)(null),i=(0,n.useRef)(null);
return(0,n.useCallback)(n=> {
if(null===n) {
let e=r.current;
e&&(r.current=null,e());
let t=i.current;
t&&(i.current=null,t())
}
else e&&(r.current=o(e,n)),t&&(i.current=o(t,n))
}
,[e,t])
}
function o(e,t) {
if("function"!=typeof e)return e.current=t,()=> {
e.current=null
}
;
 {
let r=e(t);
return"function"==typeof r?r:()=>e(null)
}

}
("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule", {
value:!0
}
),Object.assign(r.default,r),t.exports=r.default)
}
,97425,(e,t,r)=> {
"use strict";
Object.defineProperty(r,"__esModule", {
value:!0
}
),Object.defineProperty(r,"isLocalURL", {
enumerable:!0,get:function() {
return o
}

}
);
let n=e.r(53449),i=e.r(50395);
function o(e) {
if(!(0,n.isAbsoluteUrl)(e))return!0;
try {
let t=(0,n.getLocationOrigin)(),r=new URL(e,t);
return r.origin===t&&(0,i.hasBasePath)(r.pathname)
}
catch(e) {
return!1
}

}

}
,79729,(e,t,r)=> {
"use strict";
Object.defineProperty(r,"__esModule", {
value:!0
}
),Object.defineProperty(r,"errorOnce", {
enumerable:!0,get:function() {
return n
}

}
);
let n=e=> {

}

}
,8502,(e,t,r)=> {
"use strict";
Object.defineProperty(r,"__esModule", {
value:!0
}
);
var n= {
default:function() {
return y
}
,useLinkStatus:function() {
return b
}

}
;
for(var i in n)Object.defineProperty(r,i, {
enumerable:!0,get:n[i]
}
);
let o=e.r(44066),a=e.r(56242),s=o._(e.r(59163)),l=e.r(45552),u=e.r(56332),c=e.r(30185),f=e.r(53449),p=e.r(23995);
e.r(88701);
let d=e.r(80906),h=e.r(79209),g=e.r(97425),m=e.r(96267);
function y(t) {
var r,n;
let i,o,y,[b,E]=(0,s.useOptimistic)(h.IDLE_LINK_STATUS),S=(0,s.useRef)(null), {
href:A,as:M,children:T,prefetch:j=null,passHref:O,replace:P,shallow:C,scroll:x,onClick:_,onMouseEnter:w,onTouchStart:R,legacyBehavior:k=!1,onNavigate:I,transitionTypes:L,ref:V,unstable_dynamicOnHover:N,...F
}
=t;
i=T,k&&("string"==typeof i||"number"==typeof i)&&(i=(0,a.jsx)("a", {
children:i
}
));
let U=s.default.useContext(u.AppRouterContext),B=!1!==j,$=!1!==j?null===(n=j)||"auto"===n?m.FetchStrategy.PPR:m.FetchStrategy.Full:m.FetchStrategy.PPR,W="string"==typeof(r=M||A)?r:(0,l.formatUrl)(r);
if(k) {
if(i?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE", {
value:"E863",enumerable:!1,configurable:!0
}
);
o=s.default.Children.only(i)
}
let D=k?o&&"object"==typeof o&&o.ref:V,z=s.default.useCallback(e=>(null!==U&&(S.current=(0,h.mountLinkInstance)(e,W,U,$,B,E)),()=> {
S.current&&((0,h.unmountLinkForCurrentNavigation)(S.current),S.current=null),(0,h.unmountPrefetchableInstance)(e)
}
),[B,W,U,$,E]),G= {
ref:(0,c.useMergedRef)(z,D),onClick(t) {
k||"function"!=typeof _||_(t),k&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),!U||t.defaultPrevented||function(t,r,n,i,o,a,l) {
if("u">typeof window) {
let u, {
nodeName:c
}
=t.currentTarget;
if("A"===c.toUpperCase()&&((u=t.currentTarget.getAttribute("target"))&&"_self"!==u||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;
if(!(0,g.isLocalURL)(r)) {
i&&(t.preventDefault(),location.replace(r));
return
}
if(t.preventDefault(),a) {
let e=!1;
if(a( {
preventDefault:()=> {
e=!0
}

}
),e)return
}
let {
dispatchNavigateAction:f
}
=e.r(56097);
s.default.startTransition(()=> {
f(r,i?"replace":"push",!1===o?d.ScrollBehavior.NoScroll:d.ScrollBehavior.Default,n.current,l)
}
)
}

}
(t,W,S,P,x,I,L)
}
,onMouseEnter(e) {
k||"function"!=typeof w||w(e),k&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),U&&B&&(0,h.onNavigationIntent)(e.currentTarget,!0===N)
}
,onTouchStart:function(e) {
k||"function"!=typeof R||R(e),k&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),U&&B&&(0,h.onNavigationIntent)(e.currentTarget,!0===N)
}

}
;
return(0,f.isAbsoluteUrl)(W)?G.href=W:k&&!O&&("a"!==o.type||"href"in o.props)||(G.href=(0,p.addBasePath)(W)),y=k?s.default.cloneElement(o,G):(0,a.jsx)("a", {
...F,...G,children:i
}
),(0,a.jsx)(v.Provider, {
value:b,children:y
}
)
}
e.r(79729);
let v=(0,s.createContext)(h.IDLE_LINK_STATUS),b=()=>(0,s.useContext)(v);
("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule", {
value:!0
}
),Object.assign(r.default,r),t.exports=r.default)
}
,7284,e=> {
"use strict";
function t() {
for(var e,t,r=0,n="",i=arguments.length;
r<i;
r++)(e=arguments[r])&&(t=function e(t) {
var r,n,i="";
if("string"==typeof t||"number"==typeof t)i+=t;
else if("object"==typeof t)if(Array.isArray(t)) {
var o=t.length;
for(r=0;
r<o;
r++)t[r]&&(n=e(t[r]))&&(i&&(i+=" "),i+=n)
}
else for(n in t)t[n]&&(i&&(i+=" "),i+=n);
return i
}
(e))&&(n&&(n+=" "),n+=t);
return n
}
e.s(["clsx",0,t,"default",0,t])
}
,22307,e=> {
"use strict";
var t=e.i(59163);
e.s(["useMotionValueEvent",0,function(e,r,n) {
(0,t.useInsertionEffect)(()=>e.on(r,n),[e,r,n])
}
])
}
,69312,e=> {
"use strict";
var t=e.i(17919),r=e.i(37198);
e.s(["useMotionTemplate",0,function(e,...n) {
let i=e.length;
return(0,t.useCombineMotionValues)(n.filter(r.isMotionValue),function() {
let t="";
for(let o=0;
o<i;
o++) {
t+=e[o];
let i=n[o];
i&&(t+=(0,r.isMotionValue)(i)?i.get():i)
}
return t
}
)
}
])
}
,48908,17057,e=> {
"use strict";
var t=e.i(59163),r=e.i(69718),n=e.i(1332),i=e.i(78164),o=e.i(37758),a=e.i(3023),s=e.i(37198),l=e.i(56927);
function u(e,t,r) {
let n,i,o=e.get(),u=null,f=o,p="string"==typeof o?o.replace(/[\d.-]/g,""):void 0,d=()=> {
u&&(u.stop(),u=null)
}
,h=()=> {
d(),u=new a.JSAnimation( {
keyframes:[c(e.get()),c(f)],velocity:e.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...r,onUpdate:n
}
)
}
;
return e.attach((t,r)=>(f=t,n=e=> {
var t,n;
return r((t=e,(n=p)?t+n:t))
}
,l.frame.postRender(h),e.get()),d),(0,s.isMotionValue)(t)&&(i=t.on("change",t=> {
var r,n;
return e.set((r=t,(n=p)?r+n:r))
}
),e.on("destroy",i)),i
}
function c(e) {
return"number"==typeof e?e:parseFloat(e)
}
e.s(["attachSpring",0,u,"springValue",0,function(e,t) {
let r=(0,s.isMotionValue)(e)?e.get():e,n=(0,o.motionValue)(r);
return u(n,e,t),n
}
],17057),e.s(["useSpring",0,function(e,o= {

}
) {
let {
isStatic:a
}
=(0,t.useContext)(r.MotionConfigContext),l=()=>(0,s.isMotionValue)(e)?e.get():e;
if(a)return(0,i.useTransform)(l);
let c=(0,n.useMotionValue)(l());
return(0,t.useInsertionEffect)(()=>u(c,e,o),[c,JSON.stringify(o)]),c
}
],48908)
}
,83592,88012,65985,2017,e=> {
"use strict";
function t(e) {
return"object"==typeof e&&!Array.isArray(e)
}
var r=e.i(41074);
function n(e,n,i,o) {
return"string"==typeof e&&t(n)?(0,r.resolveElements)(e,i,o):e instanceof NodeList?Array.from(e):Array.isArray(e)?e:[e]
}
function i(e,t,r,n) {
return"number"==typeof t?t:t.startsWith("-")||t.startsWith("+")?Math.max(0,e+parseFloat(t)):"<"===t?r:n.get(t)??e
}
var o=e.i(80709),a=e.i(10800),s=e.i(92095);
function l(e,t) {
return(0,s.isEasingArray)(e)?e[(0,a.wrap)(0,e.length,t)]:e
}
e.s(["getEasingForSegment",0,l],88012);
var u=e.i(16758);
function c(e,t) {
return e.at!==t.at?e.at-t.at:null===e.value?1:null===t.value?-1:0
}
var f=e.i(37198),p=e.i(24562),d=e.i(82903),h=e.i(8632),g=e.i(51401),m=e.i(47703),y=e.i(38699),v=e.i(29621);
function b(e,t) {
return t.has(e)||t.set(e, {

}
),t.get(e)
}
function E(e,t) {
return t[e]||(t[e]=[]),t[e]
}
let S=e=>"number"==typeof e,A=e=>e.every(S);
var M=e.i(90802),T=e.i(42746),j=e.i(51525),O=e.i(13784),P=e.i(20003);
class C extends P.VisualElement {
constructor() {
super(...arguments),this.type="object"
}
readValueFromInstance(e,t) {
if(t in e) {
let r=e[t];
if("string"==typeof r||"number"==typeof r)return r
}

}
getBaseTargetFromProps() {

}
removeValueFromRenderState(e,t) {
delete t.output[e]
}
measureInstanceViewportBox() {
return(0,O.createBox)()
}
build(e,t) {
Object.assign(e.output,t)
}
renderInstance(e, {
output:t
}
) {
Object.assign(e,t)
}
sortInstanceNodePosition() {
return 0
}

}
var x=e.i(41312),_=e.i(50467),w=e.i(98118);
function R(e) {
let t= {
presenceContext:null,props: {

}
,visualState: {
renderState: {
transform: {

}
,transformOrigin: {

}
,style: {

}
,vars: {

}
,attrs: {

}

}
,latestValues: {

}

}

}
,r=(0,_.isSVGElement)(e)&&!(0,w.isSVGSVGElement)(e)?new x.SVGVisualElement(t):new j.HTMLVisualElement(t);
r.mount(e),M.visualElementStore.set(e,r)
}
function k(e) {
let t=new C( {
presenceContext:null,props: {

}
,visualState: {
renderState: {
output: {

}

}
,latestValues: {

}

}

}
);
t.mount(e),M.visualElementStore.set(e,t)
}
var I=e.i(56204);
function L(e,r,i,o) {
let a=[];
if((0,f.isMotionValue)(e)||"number"==typeof e||"string"==typeof e&&!t(r))a.push((0,I.animateSingleValue)(e,t(r)&&r.default||r,i&&i.default||i));
else {
let t=n(e,r,o),s=t.length;
(0,m.invariant)(!!s,"No valid elements provided.");
for(let e=0;
e<s;
e++) {
let n=t[e],o=n instanceof Element?R:k;
M.visualElementStore.has(n)||o(n);
let l=M.visualElementStore.get(n),u= {
...i
}
;
"delay"in u&&"function"==typeof u.delay&&(u.delay=u.delay(e,s)),a.push(...(0,T.animateTarget)(l, {
...r,transition:u
}
, {

}
))
}

}
return a
}
var V=e.i(91862);
class N {
constructor(e) {
this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)
}
get finished() {
return Promise.all(this.animations.map(e=>e.finished))
}
getAll(e) {
return this.animations[0][e]
}
setAll(e,t) {
for(let r=0;
r<this.animations.length;
r++)this.animations[r][e]=t
}
attachTimeline(e) {
let t=this.animations.map(t=>t.attachTimeline(e));
return()=> {
t.forEach((e,t)=> {
e&&e(),this.animations[t].stop()
}
)
}

}
get time() {
return this.getAll("time")
}
set time(e) {
this.setAll("time",e)
}
get speed() {
return this.getAll("speed")
}
set speed(e) {
this.setAll("speed",e)
}
get state() {
return this.getAll("state")
}
get startTime() {
return this.getAll("startTime")
}
get duration() {
let e=0;
for(let t=0;
t<this.animations.length;
t++)e=Math.max(e,this.animations[t].duration);
return e
}
runAll(e) {
this.animations.forEach(t=>t[e]())
}
play() {
this.runAll("play")
}
pause() {
this.runAll("pause")
}
cancel() {
this.runAll("cancel")
}
complete() {
this.runAll("complete")
}

}
e.s(["GroupAnimation",0,N],65985);
class F extends N {
then(e,t) {
return this.finished.finally(e).then(()=> {

}
)
}

}
function U(e) {
return function(t,r,a) {
let s=[];
if(Array.isArray(t)&&t.some(Array.isArray)) {
let a;
a=[],(function(e, {
defaultTransition:t= {

}
,...r
}
= {

}
,a,s) {
let S=t.duration||.3,M=new Map,T=new Map,j= {

}
,O=new Map,P=0,C=0,x=0;
for(let r=0;
r<e.length;
r++) {
let c=e[r];
if("string"==typeof c) {
O.set(c,C);
continue
}
if(!Array.isArray(c)) {
O.set(c.name,i(C,c.at,P,O));
continue
}
let[y,M,R= {

}
]=c;
void 0!==R.at&&(C=i(C,R.at,P,O));
let k=0,I=(e,r,n,i=0,a=0)=> {
var c;
let f=Array.isArray(c=e)?c:[c], {
delay:y=0,times:b=(0,p.defaultOffset)(f),type:E="keyframes",repeat:M,repeatType:T,repeatDelay:j=0,...O
}
=r, {
ease:P=t.ease||"easeOut",duration:_
}
=r,w="function"==typeof y?y(i,a):y,R=f.length,I=(0,d.isGenerator)(E)?E:s?.[E||"keyframes"];
if(R<=2&&I) {
let e=100;
2===R&&A(f)&&(e=Math.abs(f[1]-f[0]));
let t= {
...O
}
;
void 0!==_&&(t.duration=(0,v.secondsToMilliseconds)(_));
let r=(0,h.createGeneratorEasing)(t,e,I);
P=r.ease,_=r.duration
}
_??(_=S);
let L=C+w;
1===b.length&&0===b[0]&&(b[1]=1);
let V=b.length-f.length;
if(V>0&&(0,g.fillOffset)(b,V),1===f.length&&f.unshift(null),M) {
(0,m.invariant)(M<20,"Repeat count too high, must be less than 20"),_*=M+1;
let e=[...f],t=[...b],r=[...P=Array.isArray(P)?[...P]:[P]];
for(let n=0;
n<M;
n++) {
f.push(...e);
for(let i=0;
i<e.length;
i++)b.push(t[i]+(n+1)),P.push(0===i?"linear":l(r,i-1))
}
for(let e=0;
e<b.length;
e++)b[e]=b[e]/(M+1)
}
let N=L+_;
!function(e,t,r,n,i,a) {
for(let t=0;
t<e.length;
t++) {
let r=e[t];
r.at>i&&r.at<a&&((0,u.removeItem)(e,r),t--)
}
for(let s=0;
s<t.length;
s++)e.push( {
value:t[s],at:(0,o.mixNumber)(i,a,n[s]),easing:l(r,s)
}
)
}
(n,f,P,b,L,N),k=Math.max(w+_,k),x=Math.max(N,x)
}
;
if((0,f.isMotionValue)(y))I(M,R,E("default",b(y,T)));
else {
let e=n(y,M,a,j),t=e.length;
for(let r=0;
r<t;
r++) {
let n=b(e[r],T);
for(let e in M) {
var _,w;
I(M[e],(_=R,w=e,_&&_[w]? {
..._,..._[w]
}
: {
..._
}
),E(e,n),r,t)
}

}

}
P=C,C+=k
}
return T.forEach((e,n)=> {
for(let i in e) {
let o=e[i];
o.sort(c);
let a=[],s=[],l=[];
for(let e=0;
e<o.length;
e++) {
let {
at:t,value:r,easing:n
}
=o[e];
a.push(r),s.push((0,y.progress)(0,x,t)),l.push(n||"easeOut")
}
0!==s[0]&&(s.unshift(0),a.unshift(a[0]),l.unshift("easeInOut")),1!==s[s.length-1]&&(s.push(1),a.push(null)),M.has(n)||M.set(n, {
keyframes: {

}
,transition: {

}

}
);
let u=M.get(n);
u.keyframes[i]=a,u.transition[i]= {
...t,duration:x,ease:l,times:s,...r
}

}

}
),M
}
)(t,r,e, {
spring:V.spring
}
).forEach(( {
keyframes:e,transition:t
}
,r)=> {
a.push(...L(r,e,t))
}
),s=a
}
else s=L(t,r,a,e);
let S=new F(s);
return e&&e.animations.push(S),S
}

}
e.s(["GroupAnimationWithThen",0,F],2017);
let B=U();
e.s(["animate",0,B,"createScopedAnimate",0,U],83592)
}
,44440,e=> {
"use strict";
let t=(e,t,r)=>Math.min(Math.max(e,t),r),r=e=> {
let t=parseInt(e.slice(1,3),16);
return {
r:t,g:parseInt(e.slice(3,5),16),b:parseInt(e.slice(5,7),16),a:255
}

}
,n= {
primary:["#FCB3F7","#FF2C6B","#80031C","#977E75"].map(r),extended:["#FFFFFF","#FCB3F7","#FF2C6B","#80031C","#977E75"].map(r)
}
;
e.s(["CANVAS_COLORS",0,n,"clamp",0,t,"lerp",0,(e,t,r)=>(1-r)*e+r*t,"lerpColor",0,(e,t,r)=>( {
r:Math.round(e.r+(t.r-e.r)*r),g:Math.round(e.g+(t.g-e.g)*r),b:Math.round(e.b+(t.b-e.b)*r),a:255
}
),"rangeMap",0,(e,r,n,i,o,a)=> {
let s=(e-r)/(n-r)*(o-i)+i;
return a?t(s,i,o):s
}
])
}
,23023,e=> {
"use strict";
var t=e.i(56242),r=e.i(7284),n=e.i(69348),i=e.i(87648),o=e.i(59163);
let a=new Map,s=new Map,l=new Map,u=Array.isArray;
e.s(["Video",0,( {
ref:e,video:c,width:f,height:p,loop:d=!0,muted:h=!0,controls:g=!1,autoPlay:m=!1,useObjectURL:y=!0,usePinkLoading:v=!1,onLoaded:b,onPlay:E=()=> {

}
,onError:S=()=> {

}
,className:A="size-full object-cover",...M
}
)=> {
let T,j,O,P=(0,o.useRef)(null),C=(0,o.useRef)(null),x=encodeURI(c?.url||c?.src||c),[_,w]=(0,o.useState)(y||c?.src&&u(c.src)?null:x),[R,k]=(0,o.useState)(!1),[I,L]=(0,o.useState)(!1), {
loadVideo:V,releaseVideo:N
}
=(T=(0,o.useRef)(null),j=(0,o.useRef)(new Map),(0,o.useEffect)(()=>(T.current=new Worker("/video-loader.worker.js"),T.current.onmessage=function(e) {
let {
success:t,objectURL:r,error:n,id:i
}
=e.data,o=j.current.get(i);
o&&(t?o.resolve(r):o.reject(Error(n)),j.current.delete(i))
}
,T.current.onerror=function(e) {
console.error("Worker error:",e),j.current.forEach(e=> {
e.reject(Error("Worker error"))
}
),j.current.clear()
}
,()=> {
T.current&&(T.current.terminate(),T.current=null),j.current.clear()
}
),[]),O=(0,o.useCallback)(async e=> {
if(!T.current)throw Error("Worker not initialized");
if(a.has(e)) {
let t=a.get(e);
return l.set(e,(l.get(e)||0)+1),t
}
if(s.has(e))return s.get(e);
let t=Math.random().toString(36).substr(2,9),r=new Promise((r,n)=> {
j.current.set(t, {
resolve:t=> {
a.set(e,t),l.set(e,1),s.delete(e),r(t)
}
,reject:t=> {
s.delete(e),n(t)
}

}
),T.current.postMessage( {
videoSrc:e,id:t
}
)
}
);
return s.set(e,r),r
}
,[]), {
loadVideo:O,releaseVideo:(0,o.useCallback)(e=> {
if(!l.has(e))return;
let t=l.get(e)-1;
if(t<=0) {
let t=a.get(e);
t&&t.startsWith("blob:")&&URL.revokeObjectURL(t),a.delete(e),l.delete(e)
}
else l.set(e,t)
}
,[]),clearVideoCache:(0,o.useCallback)(()=> {
a.forEach(e=> {
e&&e.startsWith("blob:")&&URL.revokeObjectURL(e)
}
),a.clear(),l.clear(),s.clear()
}
,[])
}
),F=(0,i.useInView)(P, {
once:!0,margin:"200px"
}
);
(0,o.useEffect)(()=> {
F&&c&&!I&&!R&&(k(!0),y?V(x).then(e=> {
!I&&(w(e),L(!0),C.current&&(C.current.src=e))
}
).catch(e=> {
console.warn("Video loading failed, falling back to direct URL:",e),I||(w(x),L(!0))
}
).finally(()=> {
k(!1)
}
):(L(!0),k(!1)))
}
,[F,c,I,R,y,V,x]),(0,o.useEffect)(()=> {
I&&b&&b()
}
,[I,b]),(0,o.useEffect)(()=> {
let e=C.current;
if(e&&I&&m) {
let t=()=> {
e.paused||e.ended||!(e.readyState>2)||E()
}
;
t();
let r=setTimeout(t,100);
return()=>clearTimeout(r)
}

}
,[I,m,E]),(0,o.useEffect)(()=>()=> {
y&&x&&I&&N(x)
}
,[x,y,I,N]);
let U=t=> {
t&&(e&&(e.current=t),C.current=t)
}
,B= {
controls:g,autoPlay:m,playsInline:!0,loop:d,muted:h,className:A,onPlay:E,onError:S,onPlaying:E,onCanPlay:()=> {
let e=C.current;
e&&m&&!e.paused&&E()
}

}
;
return(0,t.jsx)("div", {
ref:P,className:(0,r.default)("absolute inset-0 size-full",v?I?"bg-transparent":"bg-pink transition-colors delay-200 duration-500":""),children:(0,t.jsx)(n.motion.div, {
initial: {
opacity:0
}
,animate: {
opacity:+!!I
}
,transition: {
duration:.4,ease:"linear"
}
,className:"absolute inset-0",children:y?(0,t.jsx)("video", {
ref:U,...B,...M
}
):c?.src&&u(c.src)?(0,t.jsx)("video", {
ref:U,src:_,...B,...M,children:!y&&c?.src&&u(c.src)&&c.src.map((e,r)=>(0,t.jsx)("source", {
src:e.url,media:e.media||void 0
}
,r))
}
):(0,t.jsx)("video", {
ref:U,src:_,...B,...M
}
)
}
)
}
)
}
],23023)
}
,46368,e=> {
"use strict";
var t=e.i(10067),r=e.i(47689);
let n= {
a:["href","target","rel"],iframe:["src","width","height","allowfullscreen","allow","frameborder","marginheight","marginwidth","scrolling","style"]
}
;
e.s(["RICH_TEXT_HTML_ATTRIBUTES",0, {
strong:["style"],span:["style"]
}
,"RICH_TEXT_HTML_TAGS",0,["p","ul","ol","li","a","br","strong","em","i","u","s","span","sup"],"parseSrikethrough",0,e=>e.replaceAll("<s>",'<span style="text-decoration: underline;">').replaceAll("</s>","</span>"),"sanitizeText",0,(e="",i=["em","br"],o= {

}
)=> {
let a=(0,r.replaceSuperscriptMarkersInTextNodes)(e),s=[...new Set([...i,"sup"])];
return(0,t.default)(a, {
allowedTags:s,allowedAttributes: {
...n,...o
}

}
)
}
])
}
,50122,e=> {
"use strict";
var t=e.i(56242),r=e.i(83778),n=e.i(59163),i=e.i(3505);
let o=()=> {
let e=(0,r.useLenis)(),t=(0,i.useApp)("set");
return(0,n.useEffect)(()=> {
e&&t( {
lenis:e
}
)
}
,[e,t]),null
}
;
e.s(["Scroll",0,( {
root:e=!1,className:i="",options:a= {
lerp:.2,smoothWheel:!0,syncTouch:!1
}
,children:s
}
)=> {
let l=(0,r.useLenis)();
return(0,n.useEffect)(()=> {
if(!e&&l)return l.stop(),()=> {
l.start()
}

}
,[e,l]),(0,t.jsxs)(r.Lenis, {
root:e,options:a,className:i,children:[(0,t.jsx)(o, {

}
),s]
}
)
}
])
}
]);
