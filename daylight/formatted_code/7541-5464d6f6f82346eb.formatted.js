(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7541], {
36329:e=> {
"use strict";
var t=Object.prototype.hasOwnProperty,n=Object.prototype.toString,r=Object.defineProperty,i=Object.getOwnPropertyDescriptor,o=function(e) {
return"function"==typeof Array.isArray?Array.isArray(e):"[object Array]"===n.call(e)
}
,l=function(e) {
if(!e||"[object Object]"!==n.call(e))return!1;
var r,i=t.call(e,"constructor"),o=e.constructor&&e.constructor.prototype&&t.call(e.constructor.prototype,"isPrototypeOf");
if(e.constructor&&!i&&!o)return!1;
for(r in e);
return void 0===r||t.call(e,r)
}
,a=function(e,t) {
r&&"__proto__"===t.name?r(e,t.name, {
enumerable:!0,configurable:!0,value:t.newValue,writable:!0
}
):e[t.name]=t.newValue
}
,s=function(e,n) {
if("__proto__"===n) {
if(!t.call(e,n))return;
if(i)return i(e,n).value
}
return e[n]
}
;
e.exports=function e() {
var t,n,r,i,u,c,f=arguments[0],p=1,h=arguments.length,d=!1;
for("boolean"==typeof f&&(d=f,f=arguments[1]|| {

}
,p=2),(null==f||"object"!=typeof f&&"function"!=typeof f)&&(f= {

}
);
p<h;
++p)if(t=arguments[p],null!=t)for(n in t)r=s(f,n),f!==(i=s(t,n))&&(d&&i&&(l(i)||(u=o(i)))?(u?(u=!1,c=r&&o(r)?r:[]):c=r&&l(r)?r: {

}
,a(f, {
name:n,newValue:e(d,c,i)
}
)):void 0!==i&&a(f, {
name:n,newValue:i
}
));
return f
}

}
,38983:(e,t,n)=> {
"use strict";
var r;
function i(e) {
return void 0===e||e
}
function o(e) {
let t=Array(e);
for(let n=0;
n<e;
n++)t[n]=l();
return t
}
function l() {
return Object.create(null)
}
function a(e,t) {
return t.length-e.length
}
function s(e) {
return"string"==typeof e
}
function u(e) {
return"object"==typeof e
}
function c(e) {
return"function"==typeof e
}
function f(e,t) {
var n=p;
if(e&&(t&&(e=g(e,t)),this.H&&(e=g(e,this.H)),this.J&&1<e.length&&(e=g(e,this.J)),n||""===n)) {
if(t=e.split(n),this.filter) {
e=this.filter,n=t.length;
let r=[];
for(let i=0,o=0;
i<n;
i++) {
let n=t[i];
n&&!e[n]&&(r[o++]=n)
}
e=r
}
else e=t
}
return e
}
n.d(t, {
Z:()=>X
}
);
let p=/[\p {
Z
}
\p {
S
}
\p {
P
}
\p {
C
}
]+/u,h=/[\u0300-\u036f]/g;
function d(e,t) {
let n=Object.keys(e),r=n.length,i=[],o="",l=0;
for(let a=0,s,u;
a<r;
a++)(u=e[s=n[a]])?(i[l++]=m(t?"(?!\\b)"+s+"(\\b|_)":s),i[l++]=u):o+=(o?"|":"")+s;
return o&&(i[l++]=m(t?"(?!\\b)("+o+")(\\b|_)":"("+o+")"),i[l]=""),i
}
function g(e,t) {
for(let n=0,r=t.length;
n<r&&(e=e.replace(t[n],t[n+1]));
n+=2);
return e
}
function m(e) {
return RegExp(e,"g")
}
function y(e) {
let t="",n="";
for(let r=0,i=e.length,o;
r<i;
r++)(o=e[r])!==n&&(t+=n=o);
return t
}
function v(e) {
return f.call(this,(""+e).toLowerCase(),!1)
}
let x= {

}
,b= {

}
;
function k(e) {
w(e,"add"),w(e,"append"),w(e,"search"),w(e,"update"),w(e,"remove")
}
function w(e,t) {
e[t+"Async"]=function() {
let e;
let n=this,r=arguments;
var i=r[r.length-1];
return c(i)&&(e=i,delete r[r.length-1]),i=new Promise(function(e) {
setTimeout(function() {
n.async=!0;
let i=n[t].apply(n,r);
n.async=!1,e(i)
}
)
}
),e?(i.then(e),this):i
}

}
function S(e,t,n,r) {
let i=e.length,o=[],a,s,u=0;
r&&(r=[]);
for(let c=i-1;
0<=c;
c--) {
let f=e[c],p=f.length,h=l(),d=!a;
for(let e=0;
e<p;
e++) {
let l=f[e],p=l.length;
if(p)for(let e=0,f,g;
e<p;
e++)if(g=l[e],a) {
if(a[g]) {
if(!c) {
if(n)n--;
else if(o[u++]=g,u===t)return o
}
(c||r)&&(h[g]=1),d=!0
}
if(r&&(f=(s[g]||0)+1,s[g]=f,f<i)) {
let e=r[f-2]||(r[f-2]=[]);
e[e.length]=g
}

}
else h[g]=1
}
if(r)a||(s=h);
else if(!d)return[];
a=h
}
if(r)for(let e=r.length-1,i,l;
0<=e;
e--) {
l=(i=r[e]).length;
for(let e=0,r;
e<l;
e++)if(!a[r=i[e]]) {
if(n)n--;
else if(o[u++]=r,u===t)return o;
a[r]=1
}

}
return o
}
function C(e) {
this.l=!0!==e&&e,this.cache=l(),this.h=[]
}
function _(e,t,n) {
u(e)&&(e=e.query);
let r=this.cache.get(e);
return r||(r=this.search(e,t,n),this.cache.set(e,r)),r
}
C.prototype.set=function(e,t) {
if(!this.cache[e]) {
var n=this.h.length;
for(n===this.l?delete this.cache[this.h[n-1]]:n++,--n;
0<n;
n--)this.h[n]=this.h[n-1];
this.h[0]=e
}
this.cache[e]=t
}
,C.prototype.get=function(e) {
let t=this.cache[e];
if(this.l&&t&&(e=this.h.indexOf(e))) {
let t=this.h[e-1];
this.h[e-1]=this.h[e],this.h[e]=t
}
return t
}
;
let I= {
memory: {
charset:"latin:extra",D:3,B:4,m:!1
}
,performance: {
D:3,B:3,s:!1,context: {
depth:2,D:1
}

}
,match: {
charset:"latin:extra",G:"reverse"
}
,score: {
charset:"latin:advanced",D:20,B:3,context: {
depth:3,D:9
}

}
,default: {

}

}
;
function A(e,t,n,r,i,o,l,a) {
setTimeout(function() {
let s=e(n?n+"."+r:r,JSON.stringify(l));
s&&s.then?s.then(function() {
t.export(e,t,n,i,o+1,a)
}
):t.export(e,t,n,i,o+1,a)
}
)
}
function E(e,t) {
if(!(this instanceof E))return new E(e);
if(e) {
s(e)?e=I[e]:(n=e.preset)&&(e=Object.assign( {

}
,n[n],e)),n=e.charset;
var n,r=e.lang;
s(n)&&(-1===n.indexOf(":")&&(n+=":default"),n=b[n]),s(r)&&(r=x[r])
}
else e= {

}
;
let a,u,c=e.context|| {

}
;
if(this.encode=e.encode||n&&n.encode||v,this.register=t||l(),this.D=a=e.resolution||9,this.G=t=n&&n.G||e.tokenize||"strict",this.depth="strict"===t&&c.depth,this.l=i(c.bidirectional),this.s=u=i(e.optimize),this.m=i(e.fastupdate),this.B=e.minlength||1,this.C=e.boost,this.map=u?o(a):l(),this.A=a=c.resolution||1,this.h=u?o(a):l(),this.F=n&&n.F||e.rtl,this.H=(t=e.matcher||r&&r.H)&&d(t,!1),this.J=(t=e.stemmer||r&&r.J)&&d(t,!0),n=t=e.filter||r&&r.filter) {
n=t,r=l();
for(let e=0,t=n.length;
e<t;
e++)r[n[e]]=1;
n=r
}
this.filter=n,this.cache=(t=e.cache)&&new C(t)
}
function P(e,t,n,r,i) {
return n&&1<e?t+(r||0)<=e?n+(i||0):(e-1)/(t+(r||0))*(n+(i||0))+1|0:0
}
function O(e,t,n,r,i,o,a) {
let s=a?e.h:e.map;
(!t[n]||a&&!t[n][a])&&(e.s&&(s=s[r]),a?((t=t[n]||(t[n]=l()))[a]=1,s=s[a]||(s[a]=l())):t[n]=1,s=s[n]||(s[n]=[]),e.s||(s=s[r]||(s[r]=[])),o&&s.includes(i)||(s[s.length]=i,e.m&&((e=e.register[i]||(e.register[i]=[]))[e.length]=s)))
}
function T(e,t,n,r,i,o,l,a) {
let s=[],u=a?e.h:e.map;
if(e.s||(u=D(u,l,a,e.l)),u) {
let n=0,c=Math.min(u.length,a?e.A:e.D);
for(let t=0,f=0,p,h;
t<c&&(!(p=u[t])||(e.s&&(p=D(p,l,a,e.l)),i&&p&&o&&((h=p.length)<=i?(i-=h,p=null):(p=p.slice(i),i=0)),!p||(s[n++]=p,!o||!((f+=p.length)>=r))));
t++);
if(n)return o?j(s,r,0):void(t[t.length]=s)
}
return!n&&s
}
function j(e,t,n) {
return e=1===e.length?e[0]:[].concat.apply([],e),n||e.length>t?e.slice(n,n+t):e
}
function D(e,t,n,r) {
return e=n?(e=e[(r=r&&t>n)?t:n])&&e[r?n:t]:e[t]
}
function z(e,t,n,r,i) {
let o=0;
if(e.constructor===Array) {
if(i)-1!==(t=e.indexOf(t))?1<e.length&&(e.splice(t,1),o++):o++;
else {
i=Math.min(e.length,n);
for(let l=0,a;
l<i;
l++)(a=e[l])&&(o=z(a,t,n,r,i),r||o||delete e[l])
}

}
else for(let l in e)(o=z(e[l],t,n,r,i))||delete e[l];
return o
}
function L(e) {
e=e.data;
var t=self._index;
let n=e.args;
var r=e.task;
"init"===r?(r=e.options|| {

}
,e=e.factory,t=r.encode,r.cache=!1,t&&0===t.indexOf("function")&&(r.encode=Function("return "+t)()),e?(Function("return "+e)()(self),self._index=new self.FlexSearch.Index(r),delete self.FlexSearch):self._index=new E(r)):(e=e.id,t=t[r].apply(t,n),postMessage("search"===r? {
id:e,msg:t
}
: {
id:e
}
))
}
(r=E.prototype).append=function(e,t) {
return this.add(e,t,!0)
}
,r.add=function(e,t,n,r) {
if(t&&(e||0===e)) {
if(!r&&!n&&this.register[e])return this.update(e,t);
if(r=(t=this.encode(t)).length) {
let c=l(),f=l(),p=this.depth,h=this.D;
for(let d=0;
d<r;
d++) {
let g=t[this.F?r-1-d:d];
var i=g.length;
if(g&&i>=this.B&&(p||!f[g])) {
var o=P(h,r,d),a="";
switch(this.G) {
case"full":if(2<i) {
for(o=0;
o<i;
o++)for(var s=i;
s>o;
s--)if(s-o>=this.B) {
var u=P(h,r,d,i,o);
O(this,f,a=g.substring(o,s),u,e,n)
}
break
}
case"reverse":if(1<i) {
for(s=i-1;
0<s;
s--)(a=g[s]+a).length>=this.B&&O(this,f,a,P(h,r,d,i,s),e,n);
a=""
}
case"forward":if(1<i) {
for(s=0;
s<i;
s++)(a+=g[s]).length>=this.B&&O(this,f,a,o,e,n);
break
}
default:if(this.C&&(o=Math.min(o/this.C(t,g,d)|0,h-1)),O(this,f,g,o,e,n),p&&1<r&&d<r-1) {
for(i=l(),a=this.A,o=g,s=Math.min(p+1,r-d),i[o]=1,u=1;
u<s;
u++)if((g=t[this.F?r-1-d-u:d+u])&&g.length>=this.B&&!i[g]) {
i[g]=1;
let t=this.l&&g>o;
O(this,c,t?o:g,P(a+(r/2>a?0:1),r,d,s-1,u-1),e,n,t?g:o)
}

}

}

}

}
this.m||(this.register[e]=1)
}

}
return this
}
,r.search=function(e,t,n) {
let r,i,o;
n||(!t&&u(e)?e=(n=e).query:u(t)&&(n=t));
let s=[],c,f,p=0;
if(n) {
e=n.query||e,t=n.limit,p=n.offset||0;
var h=n.context;
f=n.suggest
}
if(e&&1<(c=(e=this.encode(""+e)).length)) {
n=l();
var d=[];
for(let t=0,r=0,i;
t<c;
t++)if((i=e[t])&&i.length>=this.B&&!n[i]) {
if(!this.s&&!f&&!this.map[i])return s;
d[r++]=i,n[i]=1
}
c=(e=d).length
}
if(!c)return s;
for(t||(t=100),h=this.depth&&1<c&&!1!==h,n=0,h?(r=e[0],n=1):1<c&&e.sort(a);
n<c;
n++) {
if(o=e[n],h?(i=T(this,s,f,t,p,2===c,o,r),f&&!1===i&&s.length||(r=o)):i=T(this,s,f,t,p,1===c,o),i)return i;
if(f&&n===c-1) {
if(!(d=s.length)) {
if(h) {
h=0,n=-1;
continue
}
return s
}
if(1===d)return j(s[0],t,p)
}

}
return S(s,t,p,f)
}
,r.contain=function(e) {
return!!this.register[e]
}
,r.update=function(e,t) {
return this.remove(e).add(e,t)
}
,r.remove=function(e,t) {
let n=this.register[e];
if(n) {
if(this.m)for(let t=0,r;
t<n.length;
t++)(r=n[t]).splice(r.indexOf(e),1);
else z(this.map,e,this.D,this.s),this.depth&&z(this.h,e,this.A,this.s);
if(t||delete this.register[e],this.cache) {
t=this.cache;
for(let n=0,r;
n<t.h.length;
n++)r=t.h[n],t.cache[r].includes(e)&&(t.h.splice(n--,1),delete t.cache[r])
}

}
return this
}
,r.searchCache=_,r.export=function(e,t,n,r,i,o) {
let a,s,u=!0;
switch(void 0===o&&(u=new Promise(e=> {
o=e
}
)),i||(i=0)) {
case 0:if(a="reg",this.m)for(let e in s=l(),this.register)s[e]=1;
else s=this.register;
break;
case 1:a="cfg",s= {
doc:0,opt:this.s?1:0
}
;
break;
case 2:a="map",s=this.map;
break;
case 3:a="ctx",s=this.h;
break;
default:void 0===n&&o&&o();
return
}
return A(e,t||this,n,a,r,i,s,o),u
}
,r.import=function(e,t) {
if(t)switch(s(t)&&(t=JSON.parse(t)),e) {
case"cfg":this.s=!!t.opt;
break;
case"reg":this.m=!1,this.register=t;
break;
case"map":this.map=t;
break;
case"ctx":this.h=t
}

}
,k(E.prototype);
let F=0;
function N(e) {
var t;
if(!(this instanceof N))return new N(e);
e?c(t=e.encode)&&(e.encode=t.toString()):e= {

}
,(t=(self||window)._factory)&&(t=t.toString());
let r="undefined"==typeof window&&self.exports,i=this;
this.o=function(e,t,r) {
let i;
try {
i=t?new(n(45184)).Worker("//node/node.js"):e?new Worker(URL.createObjectURL(new Blob(["onmessage="+L.toString()], {
type:"text/javascript"
}
))):new Worker(s(r)?r:"worker/worker.js", {
type:"module"
}
)
}
catch(e) {

}
return i
}
(t,r,e.worker),this.h=l(),this.o&&(r?this.o.on("message",function(e) {
i.h[e.id](e.msg),delete i.h[e.id]
}
):this.o.onmessage=function(e) {
e=e.data,i.h[e.id](e.msg),delete i.h[e.id]
}
,this.o.postMessage( {
task:"init",factory:t,options:e
}
))
}
function M(e) {
N.prototype[e]=N.prototype[e+"Async"]=function() {
let t;
let n=this,r=[].slice.call(arguments);
var i=r[r.length-1];
return c(i)&&(t=i,r.splice(r.length-1,1)),i=new Promise(function(t) {
setTimeout(function() {
n.h[++F]=t,n.o.postMessage( {
task:e,id:F,args:r
}
)
}
)
}
),t?(i.then(t),this):i
}

}
function R(e) {
if(!(this instanceof R))return new R(e);
var t,n=e.document||e.doc||e;
this.K=[],this.h=[],this.A=[],this.register=l(),this.key=(t=n.key||n.id)&&B(t,this.A)||"id",this.m=i(e.fastupdate),this.C=(t=n.store)&&!0!==t&&[],this.store=t&&l(),this.I=(t=n.tag)&&B(t,this.A),this.l=t&&l(),this.cache=(t=e.cache)&&new C(t),e.cache=!1,this.o=e.worker,this.async=!1,t=l();
let r=n.index||n.field||n;
s(r)&&(r=[r]);
for(let n=0,i,o;
n<r.length;
n++)s(i=r[n])||(o=i,i=i.field),o=u(o)?Object.assign( {

}
,e,o):e,this.o&&(t[i]=new N(o),t[i].o||(this.o=!1)),this.o||(t[i]=new E(o,this.register)),this.K[n]=B(i,this.A),this.h[n]=i;
if(this.C)for(s(e=n.store)&&(e=[e]),n=0;
n<e.length;
n++)this.C[n]=B(e[n],this.A);
this.index=t
}
function B(e,t) {
let n=e.split(":"),r=0;
for(let i=0;
i<n.length;
i++)0<=(e=n[i]).indexOf("[]")&&(e=e.substring(0,e.length-2))&&(t[r]=!0),e&&(n[r++]=e);
return r<n.length&&(n.length=r),1<r?n:n[0]
}
function U(e,t) {
if(s(t))e=e[t];
else for(let n=0;
e&&n<t.length;
n++)e=e[t[n]];
return e
}
function H(e,t,n,r) {
let i=this.l[e],o=i&&i.length-n;
if(o&&0<o)return(o>t||n)&&(i=i.slice(n,n+t)),r&&(i=V.call(this,i)), {
tag:e,result:i
}

}
function V(e) {
let t=Array(e.length);
for(let n=0,r;
n<e.length;
n++)r=e[n],t[n]= {
id:r,doc:this.store[r]
}
;
return t
}
M("add"),M("append"),M("search"),M("update"),M("remove"),(r=R.prototype).add=function(e,t,n) {
if(u(e)&&(e=U(t=e,this.key)),t&&(e||0===e)) {
if(!n&&this.register[e])return this.update(e,t);
for(let r=0,i,o;
r<this.h.length;
r++)o=this.h[r],s(i=this.K[r])&&(i=[i]),function e(t,n,r,i,o,l,a,s) {
if(t=t[a]) {
if(i===n.length-1) {
if(t.constructor===Array) {
if(r[i]) {
for(n=0;
n<t.length;
n++)o.add(l,t[n],!0,!0);
return
}
t=t.join(" ")
}
o.add(l,t,s,!0)
}
else if(t.constructor===Array)for(a=0;
a<t.length;
a++)e(t,n,r,i,o,l,a,s);
else a=n[++i],e(t,n,r,i,o,l,a,s)
}

}
(t,i,this.A,0,this.index[o],e,i[0],n);
if(this.I) {
let r=U(t,this.I),i=l();
s(r)&&(r=[r]);
for(let t=0,o,l;
t<r.length;
t++)if(!i[o=r[t]]&&(i[o]=1,l=this.l[o]||(this.l[o]=[]),!n||!l.includes(e))&&(l[l.length]=e,this.m)) {
let t=this.register[e]||(this.register[e]=[]);
t[t.length]=l
}

}
if(this.store&&(!n||!this.store[e])) {
let n;
if(this.C) {
n=l();
for(let e=0,r;
e<this.C.length;
e++)s(r=this.C[e])?n[r]=t[r]:function e(t,n,r,i,o) {
if(t=t[o],i===r.length-1)n[o]=t;
else if(t) {
if(t.constructor===Array)for(n=n[o]=Array(t.length),o=0;
o<t.length;
o++)e(t,n,r,i,o);
else n=n[o]||(n[o]=l()),o=r[++i],e(t,n,r,i,o)
}

}
(t,n,r,0,r[0])
}
this.store[e]=n||t
}

}
return this
}
,r.append=function(e,t) {
return this.add(e,t,!0)
}
,r.update=function(e,t) {
return this.remove(e).add(e,t)
}
,r.remove=function(e) {
if(u(e)&&(e=U(e,this.key)),this.register[e]) {
for(var t=0;
t<this.h.length&&(this.index[this.h[t]].remove(e,!this.o),!this.m);
t++);
if(this.I&&!this.m)for(let n in this.l) {
let r=(t=this.l[n]).indexOf(e);
-1!==r&&(1<t.length?t.splice(r,1):delete this.l[n])
}
this.store&&delete this.store[e],delete this.register[e]
}
return this
}
,r.search=function(e,t,n,r) {
n||(!t&&u(e)?(n=e,e=""):u(t)&&(n=t,t=0));
let i=[],o=[],a,c,f,p,h,d,g=0;
if(n) {
if(n.constructor===Array)f=n,n=null;
else {
if(e=n.query||e,f=(a=n.pluck)||n.index||n.field,p=n.tag,c=this.store&&n.enrich,h="and"===n.bool,t=n.limit||t||100,d=n.offset||0,p&&(s(p)&&(p=[p]),!e)) {
for(let e=0,n;
e<p.length;
e++)(n=H.call(this,p[e],t,d,c))&&(i[i.length]=n,g++);
return g?i:[]
}
s(f)&&(f=[f])
}

}
f||(f=this.h),h=h&&(1<f.length||p&&1<p.length);
let m=!r&&(this.o||this.async)&&[];
for(let a=0,u,y,v;
a<f.length;
a++) {
let x;
if(s(y=f[a])||(y=(x=y).field,e=x.query||e,t=x.limit||t,c=x.enrich||c),m)m[a]=this.index[y].searchAsync(e,t,x||n);
else {
if(v=(u=r?r[a]:this.index[y].search(e,t,x||n))&&u.length,p&&v) {
let e=[],n=0;
h&&(e[0]=[u]);
for(let t=0,r,i;
t<p.length;
t++)r=p[t],(v=(i=this.l[r])&&i.length)&&(n++,e[e.length]=h?[i]:i);
n&&(v=(u=h?S(e,t||100,d||0):function(e,t) {
let n=l(),r=l(),i=[];
for(let t=0;
t<e.length;
t++)n[e[t]]=1;
for(let e=0,o;
e<t.length;
e++) {
o=t[e];
for(let e=0,t;
e<o.length;
e++)n[t=o[e]]&&!r[t]&&(r[t]=1,i[i.length]=t)
}
return i
}
(u,e)).length)
}
if(v)o[g]=y,i[g++]=u;
else if(h)return[]
}

}
if(m) {
let r=this;
return new Promise(function(i) {
Promise.all(m).then(function(o) {
i(r.search(e,t,n,o))
}
)
}
)
}
if(!g)return[];
if(a&&(!c||!this.store))return i[0];
for(let e=0,t;
e<o.length;
e++) {
if((t=i[e]).length&&c&&(t=V.call(this,t)),a)return t;
i[e]= {
field:o[e],result:t
}

}
return i
}
,r.contain=function(e) {
return!!this.register[e]
}
,r.get=function(e) {
return this.store[e]
}
,r.set=function(e,t) {
return this.store[e]=t,this
}
,r.searchCache=_,r.export=function(e,t,n,r,i,o) {
let l;
if(void 0===o&&(l=new Promise(e=> {
o=e
}
)),i||(i=0),r||(r=0),r<this.h.length) {
let n=this.h[r],l=this.index[n];
t=this,setTimeout(function() {
l.export(e,t,i?n:"",r,i++,o)||(r++,i=1,t.export(e,t,n,r,i,o))
}
)
}
else {
let t,l;
switch(i) {
case 1:t="tag",l=this.l,n=null;
break;
case 2:t="store",l=this.store,n=null;
break;
default:o();
return
}
A(e,this,n,t,r,i,l,o)
}
return l
}
,r.import=function(e,t) {
if(t)switch(s(t)&&(t=JSON.parse(t)),e) {
case"tag":this.l=t;
break;
case"reg":this.m=!1,this.register=t;
for(let e=0,n;
e<this.h.length;
e++)(n=this.index[this.h[e]]).register=t,n.m=!1;
break;
case"store":this.store=t;
break;
default:let n=(e=e.split("."))[0];
e=e[1],n&&e&&this.index[n].import(e,t)
}

}
,k(R.prototype);
let q=[m("[\xe0\xe1\xe2\xe3\xe4\xe5]"),"a",m("[\xe8\xe9\xea\xeb]"),"e",m("[\xec\xed\xee\xef]"),"i",m("[\xf2\xf3\xf4\xf5\xf6ő]"),"o",m("[\xf9\xfa\xfb\xfcű]"),"u",m("[\xfdŷ\xff]"),"y",m("\xf1"),"n",m("[\xe7c]"),"k",m("\xdf"),"s",m(" & ")," and "];
function W(e) {
var t=e=""+e;
return t.normalize&&(t=t.normalize("NFD").replace(h,"")),f.call(this,t.toLowerCase(),!e.normalize&&q)
}
let $=/[^a-z0-9]+/,K= {
b:"p",v:"f",w:"f",z:"s",x:"s",ß:"s",d:"t",n:"m",c:"k",g:"k",j:"k",q:"k",i:"e",y:"e",u:"o"
}
;
function Y(e) {
e=W.call(this,e).join(" ");
let t=[];
if(e) {
let n=e.split($),r=n.length;
for(let i=0,o,l=0;
i<r;
i++)if((e=n[i])&&(!this.filter||!this.filter[e])) {
let n=K[o=e[0]]||o,r=n;
for(let t=1;
t<e.length;
t++) {
let i=K[o=e[t]]||o;
i&&i!==r&&(n+=i,r=i)
}
t[l++]=n
}

}
return t
}
let J=[m("ae"),"a",m("oe"),"o",m("sh"),"s",m("th"),"t",m("ph"),"f",m("pf"),"f",m("(?![aeo])h(?![aeo])"),"",m("(?!^[aeo])h(?!^[aeo])"),""];
function Q(e,t) {
return e&&(2<(e=Y.call(this,e).join(" ")).length&&(e=g(e,J)),t||(1<e.length&&(e=y(e)),e&&(e=e.split(" ")))),e||[]
}
let G=m("(?!\\b)[aeo]");
b["latin:default"]= {
encode:v,F:!1,G:""
}
,b["latin:simple"]= {
encode:W,F:!1,G:""
}
,b["latin:balance"]= {
encode:Y,F:!1,G:"strict"
}
,b["latin:advanced"]= {
encode:Q,F:!1,G:""
}
,b["latin:extra"]= {
encode:function(e) {
return e&&(1<(e=Q.call(this,e,!0)).length&&(e=e.replace(G,"")),1<e.length&&(e=y(e)),e&&(e=e.split(" "))),e||[]
}
,F:!1,G:""
}
;
let X= {
Index:E,Document:R,Worker:N,registerCharset:function(e,t) {
b[e]=t
}
,registerLanguage:function(e,t) {
x[e]=t
}

}

}
,48738:e=> {
var t=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,n=/\n/g,r=/^\s*/,i=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,o=/^:\s*/,l=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,a=/^[;\s]*/,s=/^\s+|\s+$/g;function u(e){return e?e.replace(s,""):""}e.exports=function(e,s){if("string"!=typeof e)throw TypeError("First argument must be a string");if(!e)return[];s=s||{};var c=1,f=1;function p(e){var t=e.match(n);t&&(c+=t.length);var r=e.lastIndexOf("\n");f=~r?e.length-r:f+e.length}function h(){var e={line:c,column:f};return function(t){return t.position=new d(e),y(r),t}}function d(e){this.start=e,this.end={line:c,column:f},this.source=s.source}d.prototype.content=e;var g=[];function m(t){var n=Error(s.source+":"+c+":"+f+": "+t);if(n.reason=t,n.filename=s.source,n.line=c,n.column=f,n.source=e,s.silent)g.push(n);else throw n}function y(t){var n=t.exec(e);if(n){var r=n[0];return p(r),e=e.slice(r.length),n}}function v(e){var t;for(e=e||[];t=x();)!1!==t&&e.push(t);return e}function x(){var t=h();if("/"==e.charAt(0)&&"*"==e.charAt(1)){for(var n=2;""!=e.charAt(n)&&("*"!=e.charAt(n)||"/"!=e.charAt(n+1));)++n;if(n+=2,""===e.charAt(n-1))return m("End of comment missing");var r=e.slice(2,n-2);return f+=2,p(r),e=e.slice(n),f+=2,t({type:"comment",comment:r})}}return y(r),function(){var e,n=[];for(v(n);e=function(){var e=h(),n=y(i);if(n){if(x(),!y(o))return m("property missing ':'");var r=y(l),s=e({type:"declaration",property:u(n[0].replace(t,"")),value:r?u(r[0].replace(t,"")):""});return y(a),s}}();)!1!==e&&(n.push(e),v(n));return n}()}},98134:(e,t,n)=>{var r=n(14665)(n(61025),"DataView");e.exports=r},261:(e,t,n)=>{var r=n(14668),i=n(70004),o=n(88099),l=n(61035),a=n(9168);function s(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}s.prototype.clear=r,s.prototype.delete=i,s.prototype.get=o,s.prototype.has=l,s.prototype.set=a,e.exports=s},35232:(e,t,n)=>{var r=n(74862),i=n(50328),o=n(74174),l=n(98006),a=n(19610);function s(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}s.prototype.clear=r,s.prototype.delete=i,s.prototype.get=o,s.prototype.has=l,s.prototype.set=a,e.exports=s},7337:(e,t,n)=>{var r=n(14665)(n(61025),"Map");e.exports=r},15043:(e,t,n)=>{var r=n(7933),i=n(36202),o=n(59749),l=n(76235),a=n(26893);function s(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}s.prototype.clear=r,s.prototype.delete=i,s.prototype.get=o,s.prototype.has=l,s.prototype.set=a,e.exports=s},84576:(e,t,n)=>{var r=n(14665)(n(61025),"Promise");e.exports=r},8611:(e,t,n)=>{var r=n(14665)(n(61025),"Set");e.exports=r},15745:(e,t,n)=>{var r=n(15043),i=n(62997),o=n(70752);function l(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new r;++t<n;)this.add(e[t])}l.prototype.add=l.prototype.push=i,l.prototype.has=o,e.exports=l},69701:(e,t,n)=>{var r=n(35232),i=n(95052),o=n(1659),l=n(54828),a=n(84543),s=n(56180);function u(e){var t=this.__data__=new r(e);this.size=t.size}u.prototype.clear=i,u.prototype.delete=o,u.prototype.get=l,u.prototype.has=a,u.prototype.set=s,e.exports=u},53584:(e,t,n)=>{var r=n(61025).Symbol;e.exports=r},31475:(e,t,n)=>{var r=n(61025).Uint8Array;e.exports=r},30164:(e,t,n)=>{var r=n(14665)(n(61025),"WeakMap");e.exports=r},90115:e=>{e.exports=function(e,t,n,r){for(var i=-1,o=null==e?0:e.length;++i<o;){var l=e[i];t(r,l,n(l),e)}return r}},52383:e=>{e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,i=0,o=[];++n<r;){var l=e[n];t(l,n,e)&&(o[i++]=l)}return o}},45314:(e,t,n)=>{var r=n(26817),i=n(35494),o=n(87442),l=n(14974),a=n(910),s=n(85682),u=Object.prototype.hasOwnProperty;e.exports=function(e,t){var n=o(e),c=!n&&i(e),f=!n&&!c&&l(e),p=!n&&!c&&!f&&s(e),h=n||c||f||p,d=h?r(e.length,String):[],g=d.length;for(var m in e)(t||u.call(e,m))&&!(h&&("length"==m||f&&("offset"==m||"parent"==m)||p&&("buffer"==m||"byteLength"==m||"byteOffset"==m)||a(m,g)))&&d.push(m);return d}},86688:e=>{e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}},75084:e=>{e.exports=function(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}},99887:e=>{e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}},14739:(e,t,n)=>{var r=n(4703);e.exports=function(e,t){for(var n=e.length;n--;)if(r(e[n][0],t))return n;return -1}},38710:(e,t,n)=>{var r=n(3647);e.exports=function(e,t,n,i){return r(e,function(e,r,o){t(i,e,n(e),o)}),i}},71099:(e,t,n)=>{var r=n(28791);e.exports=function(e,t,n){"__proto__"==t&&r?r(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}},3647:(e,t,n)=>{var r=n(53675),i=n(99456)(r);e.exports=i},84700:(e,t,n)=>{var r=n(69619)();e.exports=r},53675:(e,t,n)=>{var r=n(84700),i=n(83292);e.exports=function(e,t){return e&&r(e,t,i)}},82534:(e,t,n)=>{var r=n(97430),i=n(57503);e.exports=function(e,t){t=r(t,e);for(var n=0,o=t.length;null!=e&&n<o;)e=e[i(t[n++])];return n&&n==o?e:void 0}},72806:(e,t,n)=>{var r=n(75084),i=n(87442);e.exports=function(e,t,n){var o=t(e);return i(e)?o:r(o,n(e))}},42998:(e,t,n)=>{var r=n(53584),i=n(29776),o=n(27824),l=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":l&&l in Object(e)?i(e):o(e)}},4906:e=>{e.exports=function(e,t){return null!=e&&t in Object(e)}},40362:(e,t,n)=>{var r=n(42998),i=n(16877);e.exports=function(e){return i(e)&&"[object Arguments]"==r(e)}},86302:(e,t,n)=>{var r=n(33973),i=n(16877);e.exports=function e(t,n,o,l,a){return t===n||(null!=t&&null!=n&&(i(t)||i(n))?r(t,n,o,l,e,a):t!=t&&n!=n)}},33973:(e,t,n)=>{var r=n(69701),i=n(10580),o=n(54861),l=n(9616),a=n(84462),s=n(87442),u=n(14974),c=n(85682),f="[object Arguments]",p="[object Array]",h="[object Object]",d=Object.prototype.hasOwnProperty;e.exports=function(e,t,n,g,m,y){var v=s(e),x=s(t),b=v?p:a(e),k=x?p:a(t);b=b==f?h:b,k=k==f?h:k;var w=b==h,S=k==h,C=b==k;if(C&&u(e)){if(!u(t))return!1;v=!0,w=!1}if(C&&!w)return y||(y=new r),v||c(e)?i(e,t,n,g,m,y):o(e,t,b,n,g,m,y);if(!(1&n)){var _=w&&d.call(e,"__wrapped__"),I=S&&d.call(t,"__wrapped__");if(_||I){var A=_?e.value():e,E=I?t.value():t;return y||(y=new r),m(A,E,n,g,y)}}return!!C&&(y||(y=new r),l(e,t,n,g,m,y))}},10238:(e,t,n)=>{var r=n(69701),i=n(86302);e.exports=function(e,t,n,o){var l=n.length,a=l,s=!o;if(null==e)return!a;for(e=Object(e);l--;){var u=n[l];if(s&&u[2]?u[1]!==e[u[0]]:!(u[0]in e))return!1}for(;++l<a;){var c=(u=n[l])[0],f=e[c],p=u[1];if(s&&u[2]){if(void 0===f&&!(c in e))return!1}else{var h=new r;if(o)var d=o(f,p,c,e,t,h);if(!(void 0===d?i(p,f,3,o,h):d))return!1}}return!0}},24149:(e,t,n)=>{var r=n(19526),i=n(39358),o=n(5857),l=n(24198),a=/^\[object .+?Constructor\]$/,s=Object.prototype,u=Function.prototype.toString,c=s.hasOwnProperty,f=RegExp("^"+u.call(c).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=function(e){return!(!o(e)||i(e))&&(r(e)?f:a).test(l(e))}},32752:(e,t,n)=>{var r=n(42998),i=n(66972),o=n(16877),l={};l["[object Float32Array]"]=l["[object Float64Array]"]=l["[object Int8Array]"]=l["[object Int16Array]"]=l["[object Int32Array]"]=l["[object Uint8Array]"]=l["[object Uint8ClampedArray]"]=l["[object Uint16Array]"]=l["[object Uint32Array]"]=!0,l["[object Arguments]"]=l["[object Array]"]=l["[object ArrayBuffer]"]=l["[object Boolean]"]=l["[object DataView]"]=l["[object Date]"]=l["[object Error]"]=l["[object Function]"]=l["[object Map]"]=l["[object Number]"]=l["[object Object]"]=l["[object RegExp]"]=l["[object Set]"]=l["[object String]"]=l["[object WeakMap]"]=!1,e.exports=function(e){return o(e)&&i(e.length)&&!!l[r(e)]}},20603:(e,t,n)=>{var r=n(85817),i=n(38501),o=n(36456),l=n(87442),a=n(7133);e.exports=function(e){return"function"==typeof e?e:null==e?o:"object"==typeof e?l(e)?i(e[0],e[1]):r(e):a(e)}},5302:(e,t,n)=>{var r=n(3804),i=n(5513),o=Object.prototype.hasOwnProperty;e.exports=function(e){if(!r(e))return i(e);var t=[];for(var n in Object(e))o.call(e,n)&&"constructor"!=n&&t.push(n);return t}},85817:(e,t,n)=>{var r=n(10238),i=n(22999),o=n(76765);e.exports=function(e){var t=i(e);return 1==t.length&&t[0][2]?o(t[0][0],t[0][1]):function(n){return n===e||r(n,e,t)}}},38501:(e,t,n)=>{var r=n(86302),i=n(30169),o=n(39955),l=n(5740),a=n(98416),s=n(76765),u=n(57503);e.exports=function(e,t){return l(e)&&a(t)?s(u(e),t):function(n){var l=i(n,e);return void 0===l&&l===t?o(n,e):r(t,l,3)}}},37856:e=>{e.exports=function(e){return function(t){return null==t?void 0:t[e]}}},66367:(e,t,n)=>{var r=n(82534);e.exports=function(e){return function(t){return r(t,e)}}},26817:e=>{e.exports=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}},8743:(e,t,n)=>{var r=n(86688);e.exports=function(e,t){return r(t,function(t){return[t,e[t]]})}},78607:(e,t,n)=>{var r=n(53584),i=n(86688),o=n(87442),l=n(42483),a=1/0,s=r?r.prototype:void 0,u=s?s.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(o(t))return i(t,e)+"";if(l(t))return u?u.call(t):"";var n=t+"";return"0"==n&&1/t==-a?"-0":n}},45416:e=>{e.exports=function(e){return function(t){return e(t)}}},31708:e=>{e.exports=function(e,t){return e.has(t)}},97430:(e,t,n)=>{var r=n(87442),i=n(5740),o=n(99597),l=n(95953);e.exports=function(e,t){return r(e)?e:i(e,t)?[e]:o(l(e))}},73730:(e,t,n)=>{var r=n(61025)["__core-js_shared__"];e.exports=r},59783:(e,t,n)=>{var r=n(90115),i=n(38710),o=n(20603),l=n(87442);e.exports=function(e,t){return function(n,a){var s=l(n)?r:i,u=t?t():{};return s(n,e,o(a,2),u)}}},99456:(e,t,n)=>{var r=n(86841);e.exports=function(e,t){return function(n,i){if(null==n)return n;if(!r(n))return e(n,i);for(var o=n.length,l=t?o:-1,a=Object(n);(t?l--:++l<o)&&!1!==i(a[l],l,a););return n}}},69619:e=>{e.exports=function(e){return function(t,n,r){for(var i=-1,o=Object(t),l=r(t),a=l.length;a--;){var s=l[e?a:++i];if(!1===n(o[s],s,o))break}return t}}},6132:(e,t,n)=>{var r=n(8743),i=n(84462),o=n(41413),l=n(37993);e.exports=function(e){return function(t){var n=i(t);return"[object Map]"==n?o(t):"[object Set]"==n?l(t):r(t,e(t))}}},28791:(e,t,n)=>{var r=n(14665),i=function(){try{var e=r(Object,"defineProperty");return e({},"",{}),e}catch(e){}}();e.exports=i},10580:(e,t,n)=>{var r=n(15745),i=n(99887),o=n(31708);e.exports=function(e,t,n,l,a,s){var u=1&n,c=e.length,f=t.length;if(c!=f&&!(u&&f>c))return!1;var p=s.get(e),h=s.get(t);if(p&&h)return p==t&&h==e;var d=-1,g=!0,m=2&n?new r:void 0;for(s.set(e,t),s.set(t,e);++d<c;){var y=e[d],v=t[d];if(l)var x=u?l(v,y,d,t,e,s):l(y,v,d,e,t,s);if(void 0!==x){if(x)continue;g=!1;break}if(m){if(!i(t,function(e,t){if(!o(m,t)&&(y===e||a(y,e,n,l,s)))return m.push(t)})){g=!1;break}}else if(!(y===v||a(y,v,n,l,s))){g=!1;break}}return s.delete(e),s.delete(t),g}},54861:(e,t,n)=>{var r=n(53584),i=n(31475),o=n(4703),l=n(10580),a=n(41413),s=n(57133),u=r?r.prototype:void 0,c=u?u.valueOf:void 0;e.exports=function(e,t,n,r,u,f,p){switch(n){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)break;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":if(e.byteLength!=t.byteLength||!f(new i(e),new i(t)))break;return!0;case"[object Boolean]":case"[object Date]":case"[object Number]":return o(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var h=a;case"[object Set]":var d=1&r;if(h||(h=s),e.size!=t.size&&!d)break;var g=p.get(e);if(g)return g==t;r|=2,p.set(e,t);var m=l(h(e),h(t),r,u,f,p);return p.delete(e),m;case"[object Symbol]":if(c)return c.call(e)==c.call(t)}return!1}},9616:(e,t,n)=>{var r=n(98899),i=Object.prototype.hasOwnProperty;e.exports=function(e,t,n,o,l,a){var s=1&n,u=r(e),c=u.length;if(c!=r(t).length&&!s)return!1;for(var f=c;f--;){var p=u[f];if(!(s?p in t:i.call(t,p)))return!1}var h=a.get(e),d=a.get(t);if(h&&d)return h==t&&d==e;var g=!0;a.set(e,t),a.set(t,e);for(var m=s;++f<c;){var y=e[p=u[f]],v=t[p];if(o)var x=s?o(v,y,p,t,e,a):o(y,v,p,e,t,a);if(!(void 0===x?y===v||l(y,v,n,o,a):x)){g=!1;break}m||(m="constructor"==p)}if(g&&!m){var b=e.constructor,k=t.constructor;b!=k&&"constructor"in e&&"constructor"in t&&!("function"==typeof b&&b instanceof b&&"function"==typeof k&&k instanceof k)&&(g=!1)}return a.delete(e),a.delete(t),g}},39409:(e,t,n)=>{var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},98899:(e,t,n)=>{var r=n(72806),i=n(55024),o=n(83292);e.exports=function(e){return r(e,o,i)}},58341:(e,t,n)=>{var r=n(22148);e.exports=function(e,t){var n=e.__data__;return r(t)?n["string"==typeof t?"string":"hash"]:n.map}},22999:(e,t,n)=>{var r=n(98416),i=n(83292);e.exports=function(e){for(var t=i(e),n=t.length;n--;){var o=t[n],l=e[o];t[n]=[o,l,r(l)]}return t}},14665:(e,t,n)=>{var r=n(24149),i=n(85456);e.exports=function(e,t){var n=i(e,t);return r(n)?n:void 0}},29776:(e,t,n)=>{var r=n(53584),i=Object.prototype,o=i.hasOwnProperty,l=i.toString,a=r?r.toStringTag:void 0;e.exports=function(e){var t=o.call(e,a),n=e[a];try{e[a]=void 0;var r=!0}catch(e){}var i=l.call(e);return r&&(t?e[a]=n:delete e[a]),i}},55024:(e,t,n)=>{var r=n(52383),i=n(95575),o=Object.prototype.propertyIsEnumerable,l=Object.getOwnPropertySymbols,a=l?function(e){return null==e?[]:r(l(e=Object(e)),function(t){return o.call(e,t)})}:i;e.exports=a},84462:(e,t,n)=>{var r=n(98134),i=n(7337),o=n(84576),l=n(8611),a=n(30164),s=n(42998),u=n(24198),c="[object Map]",f="[object Promise]",p="[object Set]",h="[object WeakMap]",d="[object DataView]",g=u(r),m=u(i),y=u(o),v=u(l),x=u(a),b=s;(r&&b(new r(new ArrayBuffer(1)))!=d||i&&b(new i)!=c||o&&b(o.resolve())!=f||l&&b(new l)!=p||a&&b(new a)!=h)&&(b=function(e){var t=s(e),n="[object Object]"==t?e.constructor:void 0,r=n?u(n):"";if(r)switch(r){case g:return d;case m:return c;case y:return f;case v:return p;case x:return h}return t}),e.exports=b},85456:e=>{e.exports=function(e,t){return null==e?void 0:e[t]}},21822:(e,t,n)=>{var r=n(97430),i=n(35494),o=n(87442),l=n(910),a=n(66972),s=n(57503);e.exports=function(e,t,n){t=r(t,e);for(var u=-1,c=t.length,f=!1;++u<c;){var p=s(t[u]);if(!(f=null!=e&&n(e,p)))break;e=e[p]}return f||++u!=c?f:!!(c=null==e?0:e.length)&&a(c)&&l(p,c)&&(o(e)||i(e))}},14668:(e,t,n)=>{var r=n(19109);e.exports=function(){this.__data__=r?r(null):{},this.size=0}},70004:e=>{e.exports=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}},88099:(e,t,n)=>{var r=n(19109),i=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;if(r){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return i.call(t,e)?t[e]:void 0}},61035:(e,t,n)=>{var r=n(19109),i=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;return r?void 0!==t[e]:i.call(t,e)}},9168:(e,t,n)=>{var r=n(19109);e.exports=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=r&&void 0===t?"__lodash_hash_undefined__":t,this}},910:e=>{var t=/^(?:0|[1-9]\d*)$/;e.exports=function(e,n){var r=typeof e;return!!(n=null==n?9007199254740991:n)&&("number"==r||"symbol"!=r&&t.test(e))&&e>-1&&e%1==0&&e<n}},5740:(e,t,n)=>{var r=n(87442),i=n(42483),o=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,l=/^\w*$/;
e.exports=function(e,t) {
if(r(e))return!1;
var n=typeof e;
return!!("number"==n||"symbol"==n||"boolean"==n||null==e||i(e))||l.test(e)||!o.test(e)||null!=t&&e in Object(t)
}

}
,22148:e=> {
e.exports=function(e) {
var t=typeof e;
return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e
}

}
,39358:(e,t,n)=> {
var r=n(73730),i=function() {
var e=/[^.]+$/.exec(r&&r.keys&&r.keys.IE_PROTO||"");
return e?"Symbol(src)_1."+e:""
}
();
e.exports=function(e) {
return!!i&&i in e
}

}
,3804:e=> {
var t=Object.prototype;
e.exports=function(e) {
var n=e&&e.constructor;
return e===("function"==typeof n&&n.prototype||t)
}

}
,98416:(e,t,n)=> {
var r=n(5857);
e.exports=function(e) {
return e==e&&!r(e)
}

}
,74862:e=> {
e.exports=function() {
this.__data__=[],this.size=0
}

}
,50328:(e,t,n)=> {
var r=n(14739),i=Array.prototype.splice;
e.exports=function(e) {
var t=this.__data__,n=r(t,e);
return!(n<0)&&(n==t.length-1?t.pop():i.call(t,n,1),--this.size,!0)
}

}
,74174:(e,t,n)=> {
var r=n(14739);
e.exports=function(e) {
var t=this.__data__,n=r(t,e);
return n<0?void 0:t[n][1]
}

}
,98006:(e,t,n)=> {
var r=n(14739);
e.exports=function(e) {
return r(this.__data__,e)>-1
}

}
,19610:(e,t,n)=> {
var r=n(14739);
e.exports=function(e,t) {
var n=this.__data__,i=r(n,e);
return i<0?(++this.size,n.push([e,t])):n[i][1]=t,this
}

}
,7933:(e,t,n)=> {
var r=n(261),i=n(35232),o=n(7337);
e.exports=function() {
this.size=0,this.__data__= {
hash:new r,map:new(o||i),string:new r
}

}

}
,36202:(e,t,n)=> {
var r=n(58341);
e.exports=function(e) {
var t=r(this,e).delete(e);
return this.size-=t?1:0,t
}

}
,59749:(e,t,n)=> {
var r=n(58341);
e.exports=function(e) {
return r(this,e).get(e)
}

}
,76235:(e,t,n)=> {
var r=n(58341);
e.exports=function(e) {
return r(this,e).has(e)
}

}
,26893:(e,t,n)=> {
var r=n(58341);
e.exports=function(e,t) {
var n=r(this,e),i=n.size;
return n.set(e,t),this.size+=n.size==i?0:1,this
}

}
,41413:e=> {
e.exports=function(e) {
var t=-1,n=Array(e.size);
return e.forEach(function(e,r) {
n[++t]=[r,e]
}
),n
}

}
,76765:e=> {
e.exports=function(e,t) {
return function(n) {
return null!=n&&n[e]===t&&(void 0!==t||e in Object(n))
}

}

}
,8226:(e,t,n)=> {
var r=n(98091);
e.exports=function(e) {
var t=r(e,function(e) {
return 500===n.size&&n.clear(),e
}
),n=t.cache;
return t
}

}
,19109:(e,t,n)=> {
var r=n(14665)(Object,"create");
e.exports=r
}
,5513:(e,t,n)=> {
var r=n(99861)(Object.keys,Object);
e.exports=r
}
,52565:(e,t,n)=> {
e=n.nmd(e);
var r=n(39409),i=t&&!t.nodeType&&t,o=i&&e&&!e.nodeType&&e,l=o&&o.exports===i&&r.process,a=function() {
try {
var e=o&&o.require&&o.require("util").types;
if(e)return e;
return l&&l.binding&&l.binding("util")
}
catch(e) {

}

}
();
e.exports=a
}
,27824:e=> {
var t=Object.prototype.toString;
e.exports=function(e) {
return t.call(e)
}

}
,99861:e=> {
e.exports=function(e,t) {
return function(n) {
return e(t(n))
}

}

}
,61025:(e,t,n)=> {
var r=n(39409),i="object"==typeof self&&self&&self.Object===Object&&self,o=r||i||Function("return this")();
e.exports=o
}
,62997:e=> {
e.exports=function(e) {
return this.__data__.set(e,"__lodash_hash_undefined__"),this
}

}
,70752:e=> {
e.exports=function(e) {
return this.__data__.has(e)
}

}
,57133:e=> {
e.exports=function(e) {
var t=-1,n=Array(e.size);
return e.forEach(function(e) {
n[++t]=e
}
),n
}

}
,37993:e=> {
e.exports=function(e) {
var t=-1,n=Array(e.size);
return e.forEach(function(e) {
n[++t]=[e,e]
}
),n
}

}
,95052:(e,t,n)=> {
var r=n(35232);
e.exports=function() {
this.__data__=new r,this.size=0
}

}
,1659:e=> {
e.exports=function(e) {
var t=this.__data__,n=t.delete(e);
return this.size=t.size,n
}

}
,54828:e=> {
e.exports=function(e) {
return this.__data__.get(e)
}

}
,84543:e=> {
e.exports=function(e) {
return this.__data__.has(e)
}

}
,56180:(e,t,n)=> {
var r=n(35232),i=n(7337),o=n(15043);
e.exports=function(e,t) {
var n=this.__data__;
if(n instanceof r) {
var l=n.__data__;
if(!i||l.length<199)return l.push([e,t]),this.size=++n.size,this;
n=this.__data__=new o(l)
}
return n.set(e,t),this.size=n.size,this
}

}
,99597:(e,t,n)=> {
var r=n(8226),i=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,o=/\\(\\)?/g,l=r(function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(i,function(e,n,r,i){t.push(r?i.replace(o,"$1"):n||e)}),t});e.exports=l},57503:(e,t,n)=>{var r=n(42483),i=1/0;e.exports=function(e){if("string"==typeof e||r(e))return e;var t=e+"";return"0"==t&&1/e==-i?"-0":t}},24198:e=>{var t=Function.prototype.toString;e.exports=function(e){if(null!=e){try{return t.call(e)}catch(e){}try{return e+""}catch(e){}}return""}},55154:(e,t,n)=>{e.exports=n(50520)},4703:e=>{e.exports=function(e,t){return e===t||e!=e&&t!=t}},30169:(e,t,n)=>{var r=n(82534);e.exports=function(e,t,n){var i=null==e?void 0:r(e,t);return void 0===i?n:i}},39374:(e,t,n)=>{var r=n(71099),i=n(59783),o=Object.prototype.hasOwnProperty,l=i(function(e,t,n){o.call(e,n)?e[n].push(t):r(e,n,[t])});e.exports=l},39955:(e,t,n)=>{var r=n(4906),i=n(21822);e.exports=function(e,t){return null!=e&&i(e,t,r)}},36456:e=>{e.exports=function(e){return e}},35494:(e,t,n)=>{var r=n(40362),i=n(16877),o=Object.prototype,l=o.hasOwnProperty,a=o.propertyIsEnumerable,s=r(function(){return arguments}())?r:function(e){return i(e)&&l.call(e,"callee")&&!a.call(e,"callee")};e.exports=s},87442:e=>{var t=Array.isArray;e.exports=t},86841:(e,t,n)=>{var r=n(19526),i=n(66972);e.exports=function(e){return null!=e&&i(e.length)&&!r(e)}},14974:(e,t,n)=>{e=n.nmd(e);var r=n(61025),i=n(24232),o=t&&!t.nodeType&&t,l=o&&e&&!e.nodeType&&e,a=l&&l.exports===o?r.Buffer:void 0,s=a?a.isBuffer:void 0;e.exports=s||i},19526:(e,t,n)=>{var r=n(42998),i=n(5857);e.exports=function(e){if(!i(e))return!1;var t=r(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},66972:e=>{e.exports=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}},5857:e=>{e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},16877:e=>{e.exports=function(e){return null!=e&&"object"==typeof e}},42483:(e,t,n)=>{var r=n(42998),i=n(16877);e.exports=function(e){return"symbol"==typeof e||i(e)&&"[object Symbol]"==r(e)}},85682:(e,t,n)=>{var r=n(32752),i=n(45416),o=n(52565),l=o&&o.isTypedArray,a=l?i(l):r;e.exports=a},83292:(e,t,n)=>{var r=n(45314),i=n(5302),o=n(86841);e.exports=function(e){return o(e)?r(e):i(e)}},98091:(e,t,n)=>{var r=n(15043);function i(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var l=e.apply(this,r);return n.cache=o.set(i,l)||o,l};return n.cache=new(i.Cache||r),n}i.Cache=r,e.exports=i},7133:(e,t,n)=>{var r=n(37856),i=n(66367),o=n(5740),l=n(57503);e.exports=function(e){return o(e)?r(l(e)):i(e)}},95575:e=>{e.exports=function(){return[]}},24232:e=>{e.exports=function(){return!1}},50520:(e,t,n)=>{var r=n(6132)(n(83292));e.exports=r},95953:(e,t,n)=>{var r=n(78607);e.exports=function(e){return null==e?"":r(e)}},56047:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=null;if(!e||"string"!=typeof e)return n;var r=(0,i.default)(e),o="function"==typeof t;return r.forEach(function(e){if("declaration"===e.type){var r=e.property,i=e.value;o?t(r,i,e):i&&((n=n||{})[r]=i)}}),n};var i=r(n(48738))},23478:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r,i,o=n(15791),l=n(83934);let a="undefined"!=typeof window&&(null!=(r=window.document)&&r.createElement||(null==(i=window.navigator)?void 0:i.product)==="ReactNative")?o.useLayoutEffect:o.useEffect;function s(){let e=(0,l.Ue)(e=>({current:[],version:0,set:e}));return{In:({children:t})=>{let n=e(e=>e.set),r=e(e=>e.version);return a(()=>{n(e=>({version:e.version+1}))},[]),a(()=>(n(({current:e})=>({current:[...e,t]})),()=>n(({current:e})=>({current:e.filter(e=>e!==t)}))),[t,r]),null},Out:()=>{let t=e(e=>e.current);return o.createElement(o.Fragment,null,t)}}}},72166:(e,t,n)=>{"use strict";n.d(t,{VY:()=>ei,ck:()=>en,fC:()=>et,xz:()=>er});var r=n(15791),i=n(54324),o=n(8686),l=n(39546),a=n(90591),s=n(80068),u=n(69389),c=n(21252),f=n(13695),p=n(92933),h=n(69797),d="Collapsible",[g,m]=(0,i.b)(d),[y,v]=g(d),x=r.forwardRef((e,t)=>{let{__scopeCollapsible:n,open:i,defaultOpen:o,disabled:l,onOpenChange:a,...c}=e,[f=!1,d]=(0,s.T)({prop:i,defaultProp:o,onChange:a});return(0,h.jsx)(y,{scope:n,disabled:l,contentId:(0,p.M)(),open:f,onOpenToggle:r.useCallback(()=>d(e=>!e),[d]),children:(0,h.jsx)(u.WV.div,{"data-state":_(f),"data-disabled":l?"":void 0,...c,ref:t})})});x.displayName=d;var b="CollapsibleTrigger",k=r.forwardRef((e,t)=>{let{__scopeCollapsible:n,...r}=e,i=v(b,n);return(0,h.jsx)(u.WV.button,{type:"button","aria-controls":i.contentId,"aria-expanded":i.open||!1,"data-state":_(i.open),"data-disabled":i.disabled?"":void 0,disabled:i.disabled,...r,ref:t,onClick:(0,a.M)(e.onClick,i.onOpenToggle)})});k.displayName=b;var w="CollapsibleContent",S=r.forwardRef((e,t)=>{let{forceMount:n,...r}=e,i=v(w,e.__scopeCollapsible);return(0,h.jsx)(f.z,{present:n||i.open,children:e=>{let{present:n}=e;return(0,h.jsx)(C,{...r,ref:t,present:n})}})});S.displayName=w;var C=r.forwardRef((e,t)=>{let{__scopeCollapsible:n,present:i,children:o,...a}=e,s=v(w,n),[f,p]=r.useState(i),d=r.useRef(null),g=(0,l.e)(t,d),m=r.useRef(0),y=m.current,x=r.useRef(0),b=x.current,k=s.open||f,S=r.useRef(k),C=r.useRef(void 0);return r.useEffect(()=>{let e=requestAnimationFrame(()=>S.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,c.b)(()=>{let e=d.current;if(e){C.current=C.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let t=e.getBoundingClientRect();m.current=t.height,x.current=t.width,S.current||(e.style.transitionDuration=C.current.transitionDuration,e.style.animationName=C.current.animationName),p(i)}},[s.open,i]),(0,h.jsx)(u.WV.div,{"data-state":_(s.open),"data-disabled":s.disabled?"":void 0,id:s.contentId,hidden:!k,...a,ref:g,style:{"--radix-collapsible-content-height":y?`${y}px`:void 0,"--radix-collapsible-content-width":b?`${b}px`:void 0,...e.style},children:k&&o})});function _(e){return e?"open":"closed"}var I=n(92771),A="Accordion",E=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[P,O,T]=(0,o.B)(A),[j,D]=(0,i.b)(A,[T,m]),z=m(),L=r.forwardRef((e,t)=>{let{type:n,...r}=e;return(0,h.jsx)(P.Provider,{scope:e.__scopeAccordion,children:"multiple"===n?(0,h.jsx)(U,{...r,ref:t}):(0,h.jsx)(B,{...r,ref:t})})});L.displayName=A;var[F,N]=j(A),[M,R]=j(A,{collapsible:!1}),B=r.forwardRef((e,t)=>{let{value:n,defaultValue:i,onValueChange:o=()=>{},collapsible:l=!1,...a}=e,[u,c]=(0,s.T)({prop:n,defaultProp:i,onChange:o});return(0,h.jsx)(F,{scope:e.__scopeAccordion,value:u?[u]:[],onItemOpen:c,onItemClose:r.useCallback(()=>l&&c(""),[l,c]),children:(0,h.jsx)(M,{scope:e.__scopeAccordion,collapsible:l,children:(0,h.jsx)(q,{...a,ref:t})})})}),U=r.forwardRef((e,t)=>{let{value:n,defaultValue:i,onValueChange:o=()=>{},...l}=e,[a=[],u]=(0,s.T)({prop:n,defaultProp:i,onChange:o}),c=r.useCallback(e=>u(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[...t,e]}),[u]),f=r.useCallback(e=>u(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.filter(t=>t!==e)}),[u]);return(0,h.jsx)(F,{scope:e.__scopeAccordion,value:a,onItemOpen:c,onItemClose:f,children:(0,h.jsx)(M,{scope:e.__scopeAccordion,collapsible:!0,children:(0,h.jsx)(q,{...l,ref:t})})})}),[H,V]=j(A),q=r.forwardRef((e,t)=>{let{__scopeAccordion:n,disabled:i,dir:o,orientation:s="vertical",...c}=e,f=r.useRef(null),p=(0,l.e)(f,t),d=O(n),g="ltr"===(0,I.gm)(o),m=(0,a.M)(e.onKeyDown,e=>{if(!E.includes(e.key))return;let t=e.target,n=d().filter(e=>!e.ref.current?.disabled),r=n.findIndex(e=>e.ref.current===t),i=n.length;if(-1===r)return;e.preventDefault();let o=r,l=i-1,a=()=>{(o=r+1)>l&&(o=0)},u=()=>{(o=r-1)<0&&(o=l)};switch(e.key){case"Home":o=0;break;case"End":o=l;break;case"ArrowRight":"horizontal"===s&&(g?a():u());break;case"ArrowDown":"vertical"===s&&a();break;case"ArrowLeft":"horizontal"===s&&(g?u():a());break;case"ArrowUp":"vertical"===s&&u()}let c=o%i;n[c].ref.current?.focus()});return(0,h.jsx)(H,{scope:n,disabled:i,direction:o,orientation:s,children:(0,h.jsx)(P.Slot,{scope:n,children:(0,h.jsx)(u.WV.div,{...c,"data-orientation":s,ref:p,onKeyDown:i?void 0:m})})})}),W="AccordionItem",[$,K]=j(W),Y=r.forwardRef((e,t)=>{let{__scopeAccordion:n,value:r,...i}=e,o=V(W,n),l=N(W,n),a=z(n),s=(0,p.M)(),u=r&&l.value.includes(r)||!1,c=o.disabled||e.disabled;return(0,h.jsx)($,{scope:n,open:u,disabled:c,triggerId:s,children:(0,h.jsx)(x,{"data-orientation":o.orientation,"data-state":ee(u),...a,...i,ref:t,disabled:c,open:u,onOpenChange:e=>{e?l.onItemOpen(r):l.onItemClose(r)}})})});Y.displayName=W;var J="AccordionHeader";r.forwardRef((e,t)=>{let{__scopeAccordion:n,...r}=e,i=V(A,n),o=K(J,n);return(0,h.jsx)(u.WV.h3,{"data-orientation":i.orientation,"data-state":ee(o.open),"data-disabled":o.disabled?"":void 0,...r,ref:t})}).displayName=J;var Q="AccordionTrigger",G=r.forwardRef((e,t)=>{let{__scopeAccordion:n,...r}=e,i=V(A,n),o=K(Q,n),l=R(Q,n),a=z(n);return(0,h.jsx)(P.ItemSlot,{scope:n,children:(0,h.jsx)(k,{"aria-disabled":o.open&&!l.collapsible||void 0,"data-orientation":i.orientation,id:o.triggerId,...a,...r,ref:t})})});G.displayName=Q;var X="AccordionContent",Z=r.forwardRef((e,t)=>{let{__scopeAccordion:n,...r}=e,i=V(A,n),o=K(X,n),l=z(n);return(0,h.jsx)(S,{role:"region","aria-labelledby":o.triggerId,"data-orientation":i.orientation,...l,...r,ref:t,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}})});function ee(e){return e?"open":"closed"}Z.displayName=X;var et=L,en=Y,er=G,ei=Z},39406:(e,t,n)=>{"use strict";n.d(t,{UG:()=>nD});var r={};n.r(r),n.d(r,{boolean:()=>m,booleanish:()=>y,commaOrSpaceSeparated:()=>w,commaSeparated:()=>k,number:()=>x,overloadedBoolean:()=>v,spaceSeparated:()=>b});var i={};n.r(i),n.d(i,{attentionMarkers:()=>tO,contentInitial:()=>tC,disable:()=>tT,document:()=>tS,flow:()=>tI,flowInitial:()=>t_,insideSpan:()=>tP,string:()=>tA,text:()=>tE});let o=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,l=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,a={};function s(e,t){return((t||a).jsx?l:o).test(e)}let u=/[ \t\n\f\r]/g;function c(e){return""===e.replace(u,"")}class f{constructor(e,t,n){this.normal=t,this.property=e,n&&(this.space=n)}}function p(e,t){let n={},r={};for(let t of e)Object.assign(n,t.property),Object.assign(r,t.normal);return new f(n,r,t)}function h(e){return e.toLowerCase()}f.prototype.normal={},f.prototype.property={},f.prototype.space=void 0;class d{constructor(e,t){this.attribute=t,this.property=e}}d.prototype.attribute="",d.prototype.booleanish=!1,d.prototype.boolean=!1,d.prototype.commaOrSpaceSeparated=!1,d.prototype.commaSeparated=!1,d.prototype.defined=!1,d.prototype.mustUseProperty=!1,d.prototype.number=!1,d.prototype.overloadedBoolean=!1,d.prototype.property="",d.prototype.spaceSeparated=!1,d.prototype.space=void 0;let g=0,m=S(),y=S(),v=S(),x=S(),b=S(),k=S(),w=S();function S(){return 2**++g}let C=Object.keys(r);class _ extends d{constructor(e,t,n,i){let o=-1;if(super(e,t),function(e,t,n){n&&(e[t]=n)}(this,"space",i),"number"==typeof n)for(;++o<C.length;){let e=C[o];!function(e,t,n){n&&(e[t]=n)}(this,C[o],(n&r[e])===r[e])}}}function I(e){let t={},n={};for(let[r,i]of Object.entries(e.properties)){let o=new _(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(o.mustUseProperty=!0),t[r]=o,n[h(r)]=r,n[h(o.attribute)]=r}return new f(t,n,e.space)}_.prototype.defined=!0;let A=I({properties:{ariaActiveDescendant:null,ariaAtomic:y,ariaAutoComplete:null,ariaBusy:y,ariaChecked:y,ariaColCount:x,ariaColIndex:x,ariaColSpan:x,ariaControls:b,ariaCurrent:null,ariaDescribedBy:b,ariaDetails:null,ariaDisabled:y,ariaDropEffect:b,ariaErrorMessage:null,ariaExpanded:y,ariaFlowTo:b,ariaGrabbed:y,ariaHasPopup:null,ariaHidden:y,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:b,ariaLevel:x,ariaLive:null,ariaModal:y,ariaMultiLine:y,ariaMultiSelectable:y,ariaOrientation:null,ariaOwns:b,ariaPlaceholder:null,ariaPosInSet:x,ariaPressed:y,ariaReadOnly:y,ariaRelevant:null,ariaRequired:y,ariaRoleDescription:b,ariaRowCount:x,ariaRowIndex:x,ariaRowSpan:x,ariaSelected:y,ariaSetSize:x,ariaSort:null,ariaValueMax:x,ariaValueMin:x,ariaValueNow:x,ariaValueText:null,role:null},transform:(e,t)=>"role"===t?t:"aria-"+t.slice(4).toLowerCase()});function E(e,t){return t in e?e[t]:t}function P(e,t){return E(e,t.toLowerCase())}let O=I({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:k,acceptCharset:b,accessKey:b,action:null,allow:null,allowFullScreen:m,allowPaymentRequest:m,allowUserMedia:m,alt:null,as:null,async:m,autoCapitalize:null,autoComplete:b,autoFocus:m,autoPlay:m,blocking:b,capture:null,charSet:null,checked:m,cite:null,className:b,cols:x,colSpan:null,content:null,contentEditable:y,controls:m,controlsList:b,coords:x|k,crossOrigin:null,data:null,dateTime:null,decoding:null,default:m,defer:m,dir:null,dirName:null,disabled:m,download:v,draggable:y,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:m,formTarget:null,headers:b,height:x,hidden:m,high:x,href:null,hrefLang:null,htmlFor:b,httpEquiv:b,id:null,imageSizes:null,imageSrcSet:null,inert:m,inputMode:null,integrity:null,is:null,isMap:m,itemId:null,itemProp:b,itemRef:b,itemScope:m,itemType:b,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:m,low:x,manifest:null,max:null,maxLength:x,media:null,method:null,min:null,minLength:x,multiple:m,muted:m,name:null,nonce:null,noModule:m,noValidate:m,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:m,optimum:x,pattern:null,ping:b,placeholder:null,playsInline:m,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:m,referrerPolicy:null,rel:b,required:m,reversed:m,rows:x,rowSpan:x,sandbox:b,scope:null,scoped:m,seamless:m,selected:m,shadowRootClonable:m,shadowRootDelegatesFocus:m,shadowRootMode:null,shape:null,size:x,sizes:null,slot:null,span:x,spellCheck:y,src:null,srcDoc:null,srcLang:null,srcSet:null,start:x,step:null,style:null,tabIndex:x,target:null,title:null,translate:null,type:null,typeMustMatch:m,useMap:null,value:y,width:x,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:b,axis:null,background:null,bgColor:null,border:x,borderColor:null,bottomMargin:x,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:m,declare:m,event:null,face:null,frame:null,frameBorder:null,hSpace:x,leftMargin:x,link:null,longDesc:null,lowSrc:null,marginHeight:x,marginWidth:x,noResize:m,noHref:m,noShade:m,noWrap:m,object:null,profile:null,prompt:null,rev:null,rightMargin:x,rules:null,scheme:null,scrolling:y,standby:null,summary:null,text:null,topMargin:x,valueType:null,version:null,vAlign:null,vLink:null,vSpace:x,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:m,disableRemotePlayback:m,prefix:null,property:null,results:x,security:null,unselectable:null},space:"html",transform:P}),T=I({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:w,accentHeight:x,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:x,amplitude:x,arabicForm:null,ascent:x,attributeName:null,attributeType:null,azimuth:x,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:x,by:null,calcMode:null,capHeight:x,className:b,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:x,diffuseConstant:x,direction:null,display:null,dur:null,divisor:x,dominantBaseline:null,download:m,dx:null,dy:null,edgeMode:null,editable:null,elevation:x,enableBackground:null,end:null,event:null,exponent:x,externalResourcesRequired:null,fill:null,fillOpacity:x,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:k,g2:k,glyphName:k,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:x,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:x,horizOriginX:x,horizOriginY:x,id:null,ideographic:x,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:x,k:x,k1:x,k2:x,k3:x,k4:x,kernelMatrix:w,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:x,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:x,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:x,overlineThickness:x,paintOrder:null,panose1:null,path:null,pathLength:x,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:b,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:x,pointsAtY:x,pointsAtZ:x,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:w,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:w,rev:w,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:w,requiredFeatures:w,requiredFonts:w,requiredFormats:w,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:x,specularExponent:x,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:x,strikethroughThickness:x,string:null,stroke:null,strokeDashArray:w,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:x,strokeOpacity:x,strokeWidth:null,style:null,surfaceScale:x,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:w,tabIndex:x,tableValues:null,target:null,targetX:x,targetY:x,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:w,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:x,underlineThickness:x,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:x,values:null,vAlphabetic:x,vMathematical:x,vectorEffect:null,vHanging:x,vIdeographic:x,version:null,vertAdvY:x,vertOriginX:x,vertOriginY:x,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:x,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:E}),j=I({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform:(e,t)=>"xlink:"+t.slice(5).toLowerCase()}),D=I({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:P}),z=I({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform:(e,t)=>"xml:"+t.slice(3).toLowerCase()}),L=p([A,O,j,D,z],"html"),F=p([A,T,j,D,z],"svg"),N=/[A-Z]/g,M=/-[a-z]/g,R=/^data[-\w.:]+$/i;function B(e){return"-"+e.toLowerCase()}function U(e){return e.charAt(1).toUpperCase()}let H={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"};var V=n(56047);let q=V.default||V,W=K("end"),$=K("start");function K(e){return function(t){let n=t&&t.position&&t.position[e]||{};if("number"==typeof n.line&&n.line>0&&"number"==typeof n.column&&n.column>0)return{line:n.line,column:n.column,offset:"number"==typeof n.offset&&n.offset>-1?n.offset:void 0}}}function Y(e){return e&&"object"==typeof e?"position"in e||"type"in e?Q(e.position):"start"in e||"end"in e?Q(e):"line"in e||"column"in e?J(e):"":""}function J(e){return G(e&&e.line)+":"+G(e&&e.column)}function Q(e){return J(e&&e.start)+"-"+J(e&&e.end)}function G(e){return e&&"number"==typeof e?e:1}class X extends Error{constructor(e,t,n){super(),"string"==typeof t&&(n=t,t=void 0);let r="",i={},o=!1;if(t&&(i="line"in t&&"column"in t?{place:t}:"start"in t&&"end"in t?{place:t}:"type"in t?{ancestors:[t],place:t.position}:{...t}),"string"==typeof e?r=e:!i.cause&&e&&(o=!0,r=e.message,i.cause=e),!i.ruleId&&!i.source&&"string"==typeof n){let e=n.indexOf(":");-1===e?i.ruleId=n:(i.source=n.slice(0,e),i.ruleId=n.slice(e+1))}if(!i.place&&i.ancestors&&i.ancestors){let e=i.ancestors[i.ancestors.length-1];e&&(i.place=e.position)}let l=i.place&&"start"in i.place?i.place.start:i.place;this.ancestors=i.ancestors||void 0,this.cause=i.cause||void 0,this.column=l?l.column:void 0,this.fatal=void 0,this.file,this.message=r,this.line=l?l.line:void 0,this.name=Y(i.place)||"1:1",this.place=i.place||void 0,this.reason=this.message,this.ruleId=i.ruleId||void 0,this.source=i.source||void 0,this.stack=o&&i.cause&&"string"==typeof i.cause.stack?i.cause.stack:"",this.actual,this.expected,this.note,this.url}}X.prototype.file="",X.prototype.name="",X.prototype.reason="",X.prototype.message="",X.prototype.stack="",X.prototype.column=void 0,X.prototype.line=void 0,X.prototype.ancestors=void 0,X.prototype.cause=void 0,X.prototype.fatal=void 0,X.prototype.place=void 0,X.prototype.ruleId=void 0,X.prototype.source=void 0;let Z={}.hasOwnProperty,ee=new Map,et=/[A-Z]/g,en=/-([a-z])/g,er=new Set(["table","tbody","thead","tfoot","tr"]),ei=new Set(["td","th"]),eo="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function el(e,t,n){return"element"===t.type?function(e,t,n){let r=e.schema,i=r;"svg"===t.tagName.toLowerCase()&&"html"===r.space&&(i=F,e.schema=i),e.ancestors.push(t);let o=ec(e,t.tagName,!1),l=function(e,t){let n,r;let i={};for(r in t.properties)if("children"!==r&&Z.call(t.properties,r)){let o=function(e,t,n){let r=function(e,t){let n=h(t),r=t,i=d;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&"data"===n.slice(0,4)&&R.test(t)){if("-"===t.charAt(4)){let e=t.slice(5).replace(M,U);r="data"+e.charAt(0).toUpperCase()+e.slice(1)}else{let e=t.slice(4);if(!M.test(e)){let n=e.replace(N,B);"-"!==n.charAt(0)&&(n="-"+n),t="data"+n}}i=_}return new i(r,t)}(e.schema,t);if(!(null==n||"number"==typeof n&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?function(e,t){let n={};return(""===e[e.length-1]?[...e,""]:e).join((n.padRight?" ":"")+","+(!1===n.padLeft?"":" ")).trim()}(n):n.join(" ").trim()),"style"===r.property){let t="object"==typeof n?n:function(e,t){let n={};try{q(t,function(e,t){let r=e;"--"!==r.slice(0,2)&&("-ms-"===r.slice(0,4)&&(r="ms-"+r.slice(4)),r=r.replace(en,ep)),n[r]=t})}catch(t){if(!e.ignoreInvalidStyle){let n=new X("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:t,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=eo+"#cannot-parse-style-attribute",n}}return n}(e,String(n));return"css"===e.stylePropertyNameCase&&(t=function(e){let t;let n={};for(t in e)Z.call(e,t)&&(n[function(e){let t=e.replace(et,eh);return"ms-"===t.slice(0,3)&&(t="-"+t),t}(t)]=e[t]);return n}(t)),["style",t]}return["react"===e.elementAttributeNameCase&&r.space?H[r.property]||r.property:r.attribute,n]}}(e,r,t.properties[r]);if(o){let[r,l]=o;e.tableCellAlignToStyle&&"align"===r&&"string"==typeof l&&ei.has(t.tagName)?n=l:i[r]=l}}return n&&((i.style||(i.style={}))["css"===e.stylePropertyNameCase?"text-align":"textAlign"]=n),i}(e,t),a=eu(e,t);return er.has(t.tagName)&&(a=a.filter(function(e){return"string"!=typeof e||!("object"==typeof e?"text"===e.type&&c(e.value):c(e))})),ea(e,l,o,t),es(l,a),e.ancestors.pop(),e.schema=r,e.create(t,o,l,n)}(e,t,n):"mdxFlowExpression"===t.type||"mdxTextExpression"===t.type?function(e,t){if(t.data&&t.data.estree&&e.evaluater){let n=t.data.estree.body[0];return n.type,e.evaluater.evaluateExpression(n.expression)}ef(e,t.position)}(e,t):"mdxJsxFlowElement"===t.type||"mdxJsxTextElement"===t.type?function(e,t,n){let r=e.schema,i=r;"svg"===t.name&&"html"===r.space&&(i=F,e.schema=i),e.ancestors.push(t);let o=null===t.name?e.Fragment:ec(e,t.name,!0),l=function(e,t){let n={};for(let r of t.attributes)if("mdxJsxExpressionAttribute"===r.type){if(r.data&&r.data.estree&&e.evaluater){let t=r.data.estree.body[0];t.type;let i=t.expression;i.type;let o=i.properties[0];o.type,Object.assign(n,e.evaluater.evaluateExpression(o.argument))}else ef(e,t.position)}else{let i;let o=r.name;if(r.value&&"object"==typeof r.value){if(r.value.data&&r.value.data.estree&&e.evaluater){let t=r.value.data.estree.body[0];t.type,i=e.evaluater.evaluateExpression(t.expression)}else ef(e,t.position)}else i=null===r.value||r.value;n[o]=i}return n}(e,t),a=eu(e,t);return ea(e,l,o,t),es(l,a),e.ancestors.pop(),e.schema=r,e.create(t,o,l,n)}(e,t,n):"mdxjsEsm"===t.type?function(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);ef(e,t.position)}(e,t):"root"===t.type?function(e,t,n){let r={};return es(r,eu(e,t)),e.create(t,e.Fragment,r,n)}(e,t,n):"text"===t.type?t.value:void 0}function ea(e,t,n,r){"string"!=typeof n&&n!==e.Fragment&&e.passNode&&(t.node=r)}function es(e,t){if(t.length>0){let n=t.length>1?t:t[0];n&&(e.children=n)}}function eu(e,t){let n=[],r=-1,i=e.passKeys?new Map:ee;for(;++r<t.children.length;){let o;let l=t.children[r];if(e.passKeys){let e="element"===l.type?l.tagName:"mdxJsxFlowElement"===l.type||"mdxJsxTextElement"===l.type?l.name:void 0;if(e){let t=i.get(e)||0;o=e+"-"+t,i.set(e,t+1)}}let a=el(e,l,o);void 0!==a&&n.push(a)}return n}function ec(e,t,n){let r;if(n){if(t.includes(".")){let e;let n=t.split("."),i=-1;for(;++i<n.length;){let t=s(n[i])?{type:"Identifier",name:n[i]}:{type:"Literal",value:n[i]};e=e?{type:"MemberExpression",object:e,property:t,computed:!!(i&&"Literal"===t.type),optional:!1}:t}r=e}else r=s(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t}}else r={type:"Literal",value:t};if("Literal"===r.type){let t=r.value;return Z.call(e.components,t)?e.components[t]:t}if(e.evaluater)return e.evaluater.evaluateExpression(r);ef(e)}function ef(e,t){let n=new X("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=eo+"#cannot-handle-mdx-estrees-without-createevaluater",n}function ep(e,t){return t.toUpperCase()}function eh(e){return"-"+e.toLowerCase()}let ed={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]};var eg=n(69797);n(15791);let em={};function ey(e,t,n){if(e&&"object"==typeof e){if("value"in e)return"html"!==e.type||n?e.value:"";if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return ev(e.children,t,n)}return Array.isArray(e)?ev(e,t,n):""}function ev(e,t,n){let r=[],i=-1;for(;++i<e.length;)r[i]=ey(e[i],t,n);return r.join("")}function ex(e,t,n,r){let i;let o=e.length,l=0;if(t=t<0?-t>o?0:o+t:t>o?o:t,n=n>0?n:0,r.length<1e4)(i=Array.from(r)).unshift(t,n),e.splice(...i);else for(n&&e.splice(t,n);l<r.length;)(i=r.slice(l,l+1e4)).unshift(t,0),e.splice(...i),l+=1e4,t+=1e4}function eb(e,t){return e.length>0?(ex(e,e.length,0,t),e):t}class ek{constructor(e){this.left=e?[...e]:[],this.right=[]}get(e){if(e<0||e>=this.left.length+this.right.length)throw RangeError("Cannot access index `"+e+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return e<this.left.length?this.left[e]:this.right[this.right.length-e+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(e,t){let n=null==t?Number.POSITIVE_INFINITY:t;return n<this.left.length?this.left.slice(e,n):e>this.left.length?this.right.slice(this.right.length-n+this.left.length,this.right.length-e+this.left.length).reverse():this.left.slice(e).concat(this.right.slice(this.right.length-n+this.left.length).reverse())}splice(e,t,n){this.setCursor(Math.trunc(e));let r=this.right.splice(this.right.length-(t||0),Number.POSITIVE_INFINITY);return n&&ew(this.left,n),r.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(e){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(e)}pushMany(e){this.setCursor(Number.POSITIVE_INFINITY),ew(this.left,e)}unshift(e){this.setCursor(0),this.right.push(e)}unshiftMany(e){this.setCursor(0),ew(this.right,e.reverse())}setCursor(e){if(e!==this.left.length&&(!(e>this.left.length)||0!==this.right.length)&&(!(e<0)||0!==this.left.length)){if(e<this.left.length){let t=this.left.splice(e,Number.POSITIVE_INFINITY);ew(this.right,t.reverse())}else{let t=this.right.splice(this.left.length+this.right.length-e,Number.POSITIVE_INFINITY);ew(this.left,t.reverse())}}}}function ew(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function eS(e){let t,n,r,i,o,l,a;let s={},u=-1,c=new ek(e);for(;++u<c.length;){for(;(u in s);)u=s[u];if(t=c.get(u),u&&"chunkFlow"===t[1].type&&"listItemPrefix"===c.get(u-1)[1].type&&((r=0)<(l=t[1]._tokenizer.events).length&&"lineEndingBlank"===l[r][1].type&&(r+=2),r<l.length&&"content"===l[r][1].type))for(;++r<l.length&&"content"!==l[r][1].type;)"chunkText"===l[r][1].type&&(l[r][1]._isInFirstContentOfListItem=!0,r++);if("enter"===t[0])t[1].contentType&&(Object.assign(s,function(e,t){let n,r;let i=e.get(t)[1],o=e.get(t)[2],l=t-1,a=[],s=i._tokenizer||o.parser[i.contentType](i.start),u=s.events,c=[],f={},p=-1,h=i,d=0,g=0,m=[0];for(;h;){for(;e.get(++l)[1]!==h;);a.push(l),!h._tokenizer&&(n=o.sliceStream(h),h.next||n.push(null),r&&s.defineSkip(h.start),h._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=!0),s.write(n),h._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=void 0)),r=h,h=h.next}for(h=i;++p<u.length;)"exit"===u[p][0]&&"enter"===u[p-1][0]&&u[p][1].type===u[p-1][1].type&&u[p][1].start.line!==u[p][1].end.line&&(g=p+1,m.push(g),h._tokenizer=void 0,h.previous=void 0,h=h.next);for(s.events=[],h?(h._tokenizer=void 0,h.previous=void 0):m.pop(),p=m.length;p--;){let t=u.slice(m[p],m[p+1]),n=a.pop();c.push([n,n+t.length-1]),e.splice(n,2,t)}for(c.reverse(),p=-1;++p<c.length;)f[d+c[p][0]]=d+c[p][1],d+=c[p][1]-c[p][0]-1;return f}(c,u)),u=s[u],a=!0);else if(t[1]._container){for(r=u,n=void 0;r--;)if("lineEnding"===(i=c.get(r))[1].type||"lineEndingBlank"===i[1].type)"enter"===i[0]&&(n&&(c.get(n)[1].type="lineEndingBlank"),i[1].type="lineEnding",n=r);else if("linePrefix"===i[1].type);else break;n&&(t[1].end={...c.get(n)[1].start},(o=c.slice(n,u)).unshift(t),c.splice(n,u-n+1,o))}}return ex(e,0,Number.POSITIVE_INFINITY,c.slice(0)),!a}let eC={}.hasOwnProperty,e_=eN(/[A-Za-z]/),eI=eN(/[\dA-Za-z]/),eA=eN(/[#-'*+\--9=?A-Z^-~]/);function eE(e){return null!==e&&(e<32||127===e)}let eP=eN(/\d/),eO=eN(/[\dA-Fa-f]/),eT=eN(/[!-/:-@[-`{-~]/);function ej(e){return null!==e&&e<-2}function eD(e){return null!==e&&(e<0||32===e)}function ez(e){return -2===e||-1===e||32===e}let eL=eN(/\p{P}|\p{S}/u),eF=eN(/\s/);function eN(e){return function(t){return null!==t&&t>-1&&e.test(String.fromCharCode(t))}}function eM(e,t,n,r){let i=r?r-1:Number.POSITIVE_INFINITY,o=0;return function(r){return ez(r)?(e.enter(n),function r(l){return ez(l)&&o++<i?(e.consume(l),r):(e.exit(n),t(l))}(r)):t(r)}}let eR={tokenize:function(e){let t;let n=e.attempt(this.parser.constructs.contentInitial,function(t){if(null===t){e.consume(t);return}return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),eM(e,n,"linePrefix")},function(n){return e.enter("paragraph"),function n(r){let i=e.enter("chunkText",{contentType:"text",previous:t});return t&&(t.next=i),t=i,function t(r){if(null===r){e.exit("chunkText"),e.exit("paragraph"),e.consume(r);return}return ej(r)?(e.consume(r),e.exit("chunkText"),n):(e.consume(r),t)}(r)}(n)});return n}},eB={tokenize:function(e){let t,n,r;let i=this,o=[],l=0;return a;function a(t){if(l<o.length){let n=o[l];return i.containerState=n[1],e.attempt(n[0].continuation,s,u)(t)}return u(t)}function s(e){if(l++,i.containerState._closeFlow){let n;i.containerState._closeFlow=void 0,t&&y();let r=i.events.length,o=r;for(;o--;)if("exit"===i.events[o][0]&&"chunkFlow"===i.events[o][1].type){n=i.events[o][1].end;break}m(l);let a=r;for(;a<i.events.length;)i.events[a][1].end={...n},a++;return ex(i.events,o+1,0,i.events.slice(r)),i.events.length=a,u(e)}return a(e)}function u(n){if(l===o.length){if(!t)return p(n);if(t.currentConstruct&&t.currentConstruct.concrete)return d(n);i.interrupt=!!(t.currentConstruct&&!t._gfmTableDynamicInterruptHack)}return i.containerState={},e.check(eU,c,f)(n)}function c(e){return t&&y(),m(l),p(e)}function f(e){return i.parser.lazy[i.now().line]=l!==o.length,r=i.now().offset,d(e)}function p(t){return i.containerState={},e.attempt(eU,h,d)(t)}function h(e){return l++,o.push([i.currentConstruct,i.containerState]),p(e)}function d(r){if(null===r){t&&y(),m(0),e.consume(r);return}return t=t||i.parser.flow(i.now()),e.enter("chunkFlow",{_tokenizer:t,contentType:"flow",previous:n}),function t(n){if(null===n){g(e.exit("chunkFlow"),!0),m(0),e.consume(n);return}return ej(n)?(e.consume(n),g(e.exit("chunkFlow")),l=0,i.interrupt=void 0,a):(e.consume(n),t)}(r)}function g(e,o){let a=i.sliceStream(e);if(o&&a.push(null),e.previous=n,n&&(n.next=e),n=e,t.defineSkip(e.start),t.write(a),i.parser.lazy[e.start.line]){let e,n,o=t.events.length;for(;o--;)if(t.events[o][1].start.offset<r&&(!t.events[o][1].end||t.events[o][1].end.offset>r))return;let a=i.events.length,s=a;for(;s--;)if("exit"===i.events[s][0]&&"chunkFlow"===i.events[s][1].type){if(e){n=i.events[s][1].end;break}e=!0}for(m(l),o=a;o<i.events.length;)i.events[o][1].end={...n},o++;ex(i.events,s+1,0,i.events.slice(a)),i.events.length=o}}function m(t){let n=o.length;for(;n-- >t;){let t=o[n];i.containerState=t[1],t[0].exit.call(i,e)}o.length=t}function y(){t.write([null]),n=void 0,t=void 0,i.containerState._closeFlow=void 0}}},eU={tokenize:function(e,t,n){return eM(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}},eH={partial:!0,tokenize:function(e,t,n){return function(t){return ez(t)?eM(e,r,"linePrefix")(t):r(t)};function r(e){return null===e||ej(e)?t(e):n(e)}}},eV={resolve:function(e){return eS(e),e},tokenize:function(e,t){let n;return function(t){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),r(t)};function r(t){return null===t?i(t):ej(t)?e.check(eq,o,i)(t):(e.consume(t),r)}function i(n){return e.exit("chunkContent"),e.exit("content"),t(n)}function o(t){return e.consume(t),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,r}}},eq={partial:!0,tokenize:function(e,t,n){let r=this;return function(t){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),eM(e,i,"linePrefix")};function i(i){if(null===i||ej(i))return n(i);let o=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&o&&"linePrefix"===o[1].type&&o[2].sliceSerialize(o[1],!0).length>=4?t(i):e.interrupt(r.parser.constructs.flow,n,t)(i)}}},eW={tokenize:function(e){let t=this,n=e.attempt(eH,function(r){if(null===r){e.consume(r);return}return e.enter("lineEndingBlank"),e.consume(r),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n},e.attempt(this.parser.constructs.flowInitial,r,eM(e,e.attempt(this.parser.constructs.flow,r,e.attempt(eV,r)),"linePrefix")));return n;function r(r){if(null===r){e.consume(r);return}return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),t.currentConstruct=void 0,n}}},e$={resolveAll:eQ()},eK=eJ("string"),eY=eJ("text");function eJ(e){return{resolveAll:eQ("text"===e?eG:void 0),tokenize:function(t){let n=this,r=this.parser.constructs[e],i=t.attempt(r,o,l);return o;function o(e){return s(e)?i(e):l(e)}function l(e){if(null===e){t.consume(e);return}return t.enter("data"),t.consume(e),a}function a(e){return s(e)?(t.exit("data"),i(e)):(t.consume(e),a)}function s(e){if(null===e)return!0;let t=r[e],i=-1;if(t)for(;++i<t.length;){let e=t[i];if(!e.previous||e.previous.call(n,n.previous))return!0}return!1}}}}function eQ(e){return function(t,n){let r,i=-1;for(;++i<=t.length;)void 0===r?t[i]&&"data"===t[i][1].type&&(r=i,i++):t[i]&&"data"===t[i][1].type||(i!==r+2&&(t[r][1].end=t[i-1][1].end,t.splice(r+2,i-r-2),i=r+2),r=void 0);return e?e(t,n):t}}function eG(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||"lineEnding"===e[n][1].type)&&"data"===e[n-1][1].type){let r;let i=e[n-1][1],o=t.sliceStream(i),l=o.length,a=-1,s=0;for(;l--;){let e=o[l];if("string"==typeof e){for(a=e.length;32===e.charCodeAt(a-1);)s++,a--;if(a)break;a=-1}else if(-2===e)r=!0,s++;else if(-1===e);else{l++;break}}if(s){let o={type:n===e.length||r||s<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:l?a:i.start._bufferIndex+a,_index:i.start._index+l,line:i.end.line,column:i.end.column-s,offset:i.end.offset-s},end:{...i.end}};i.end={...o.start},i.start.offset===i.end.offset?Object.assign(i,o):(e.splice(n,0,["enter",o,t],["exit",o,t]),n+=2)}n++}return e}let eX={name:"thematicBreak",tokenize:function(e,t,n){let r,i=0;return function(o){return e.enter("thematicBreak"),r=o,function o(l){return l===r?(e.enter("thematicBreakSequence"),function t(n){return n===r?(e.consume(n),i++,t):(e.exit("thematicBreakSequence"),ez(n)?eM(e,o,"whitespace")(n):o(n))}(l)):i>=3&&(null===l||ej(l))?(e.exit("thematicBreak"),t(l)):n(l)}(o)}}},eZ={continuation:{tokenize:function(e,t,n){let r=this;return r.containerState._closeFlow=void 0,e.check(eH,function(n){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,eM(e,t,"listItemIndent",r.containerState.size+1)(n)},function(n){return r.containerState.furtherBlankLines||!ez(n)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,i(n)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(e0,t,i)(n))});function i(i){return r.containerState._closeFlow=!0,r.interrupt=void 0,eM(e,e.attempt(eZ,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(i)}}},exit:function(e){e.exit(this.containerState.type)},name:"list",tokenize:function(e,t,n){let r=this,i=r.events[r.events.length-1],o=i&&"linePrefix"===i[1].type?i[2].sliceSerialize(i[1],!0).length:0,l=0;return function(t){let i=r.containerState.type||(42===t||43===t||45===t?"listUnordered":"listOrdered");if("listUnordered"===i?!r.containerState.marker||t===r.containerState.marker:eP(t)){if(r.containerState.type||(r.containerState.type=i,e.enter(i,{_container:!0})),"listUnordered"===i)return e.enter("listItemPrefix"),42===t||45===t?e.check(eX,n,a)(t):a(t);if(!r.interrupt||49===t)return e.enter("listItemPrefix"),e.enter("listItemValue"),function t(i){return eP(i)&&++l<10?(e.consume(i),t):(!r.interrupt||l<2)&&(r.containerState.marker?i===r.containerState.marker:41===i||46===i)?(e.exit("listItemValue"),a(i)):n(i)}(t)}return n(t)};function a(t){return e.enter("listItemMarker"),e.consume(t),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||t,e.check(eH,r.interrupt?n:s,e.attempt(e1,c,u))}function s(e){return r.containerState.initialBlankLine=!0,o++,c(e)}function u(t){return ez(t)?(e.enter("listItemPrefixWhitespace"),e.consume(t),e.exit("listItemPrefixWhitespace"),c):n(t)}function c(n){return r.containerState.size=o+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(n)}}},e1={partial:!0,tokenize:function(e,t,n){let r=this;return eM(e,function(e){let i=r.events[r.events.length-1];return!ez(e)&&i&&"listItemPrefixWhitespace"===i[1].type?t(e):n(e)},"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5)}},e0={partial:!0,tokenize:function(e,t,n){let r=this;return eM(e,function(e){let i=r.events[r.events.length-1];return i&&"listItemIndent"===i[1].type&&i[2].sliceSerialize(i[1],!0).length===r.containerState.size?t(e):n(e)},"listItemIndent",r.containerState.size+1)}},e2={continuation:{tokenize:function(e,t,n){let r=this;return function(t){return ez(t)?eM(e,i,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(t):i(t)};function i(r){return e.attempt(e2,t,n)(r)}}},exit:function(e){e.exit("blockQuote")},name:"blockQuote",tokenize:function(e,t,n){let r=this;return function(t){if(62===t){let n=r.containerState;return n.open||(e.enter("blockQuote",{_container:!0}),n.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(t),e.exit("blockQuoteMarker"),i}return n(t)};function i(n){return ez(n)?(e.enter("blockQuotePrefixWhitespace"),e.consume(n),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(n))}}};function e4(e,t,n,r,i,o,l,a,s){let u=s||Number.POSITIVE_INFINITY,c=0;return function(t){return 60===t?(e.enter(r),e.enter(i),e.enter(o),e.consume(t),e.exit(o),f):null===t||32===t||41===t||eE(t)?n(t):(e.enter(r),e.enter(l),e.enter(a),e.enter("chunkString",{contentType:"string"}),d(t))};function f(n){return 62===n?(e.enter(o),e.consume(n),e.exit(o),e.exit(i),e.exit(r),t):(e.enter(a),e.enter("chunkString",{contentType:"string"}),p(n))}function p(t){return 62===t?(e.exit("chunkString"),e.exit(a),f(t)):null===t||60===t||ej(t)?n(t):(e.consume(t),92===t?h:p)}function h(t){return 60===t||62===t||92===t?(e.consume(t),p):p(t)}function d(i){return!c&&(null===i||41===i||eD(i))?(e.exit("chunkString"),e.exit(a),e.exit(l),e.exit(r),t(i)):c<u&&40===i?(e.consume(i),c++,d):41===i?(e.consume(i),c--,d):null===i||32===i||40===i||eE(i)?n(i):(e.consume(i),92===i?g:d)}function g(t){return 40===t||41===t||92===t?(e.consume(t),d):d(t)}}function e3(e,t,n,r,i,o){let l;let a=this,s=0;return function(t){return e.enter(r),e.enter(i),e.consume(t),e.exit(i),e.enter(o),u};function u(f){return s>999||null===f||91===f||93===f&&!l||94===f&&!s&&"_hiddenFootnoteSupport"in a.parser.constructs?n(f):93===f?(e.exit(o),e.enter(i),e.consume(f),e.exit(i),e.exit(r),t):ej(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),u):(e.enter("chunkString",{contentType:"string"}),c(f))}function c(t){return null===t||91===t||93===t||ej(t)||s++>999?(e.exit("chunkString"),u(t)):(e.consume(t),l||(l=!ez(t)),92===t?f:c)}function f(t){return 91===t||92===t||93===t?(e.consume(t),s++,c):c(t)}}function e5(e,t,n,r,i,o){let l;return function(t){return 34===t||39===t||40===t?(e.enter(r),e.enter(i),e.consume(t),e.exit(i),l=40===t?41:t,a):n(t)};function a(n){return n===l?(e.enter(i),e.consume(n),e.exit(i),e.exit(r),t):(e.enter(o),s(n))}function s(t){return t===l?(e.exit(o),a(l)):null===t?n(t):ej(t)?(e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),eM(e,s,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),u(t))}function u(t){return t===l||null===t||ej(t)?(e.exit("chunkString"),s(t)):(e.consume(t),92===t?c:u)}function c(t){return t===l||92===t?(e.consume(t),u):u(t)}}function e9(e,t){let n;return function r(i){return ej(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):ez(i)?eM(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}function e6(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}let e7={partial:!0,tokenize:function(e,t,n){return function(t){return eD(t)?e9(e,r)(t):n(t)};function r(t){return e5(e,i,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(t)}function i(t){return ez(t)?eM(e,o,"whitespace")(t):o(t)}function o(e){return null===e||ej(e)?t(e):n(e)}}},e8={name:"codeIndented",tokenize:function(e,t,n){let r=this;return function(t){return e.enter("codeIndented"),eM(e,i,"linePrefix",5)(t)};function i(t){let i=r.events[r.events.length-1];return i&&"linePrefix"===i[1].type&&i[2].sliceSerialize(i[1],!0).length>=4?function t(n){return null===n?o(n):ej(n)?e.attempt(te,t,o)(n):(e.enter("codeFlowValue"),function n(r){return null===r||ej(r)?(e.exit("codeFlowValue"),t(r)):(e.consume(r),n)}(n))}(t):n(t)}function o(n){return e.exit("codeIndented"),t(n)}}},te={partial:!0,tokenize:function(e,t,n){let r=this;return i;function i(t){return r.parser.lazy[r.now().line]?n(t):ej(t)?(e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),i):eM(e,o,"linePrefix",5)(t)}function o(e){let o=r.events[r.events.length-1];return o&&"linePrefix"===o[1].type&&o[2].sliceSerialize(o[1],!0).length>=4?t(e):ej(e)?i(e):n(e)}}},tt={name:"setextUnderline",resolveTo:function(e,t){let n,r,i,o=e.length;for(;o--;)if("enter"===e[o][0]){if("content"===e[o][1].type){n=o;break}"paragraph"===e[o][1].type&&(r=o)}else"content"===e[o][1].type&&e.splice(o,1),i||"definition"!==e[o][1].type||(i=o);let l={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[r][1].type="setextHeadingText",i?(e.splice(r,0,["enter",l,t]),e.splice(i+1,0,["exit",e[n][1],t]),e[n][1].end={...e[i][1].end}):e[n][1]=l,e.push(["exit",l,t]),e},tokenize:function(e,t,n){let r;let i=this;return function(t){let l,a=i.events.length;for(;a--;)if("lineEnding"!==i.events[a][1].type&&"linePrefix"!==i.events[a][1].type&&"content"!==i.events[a][1].type){l="paragraph"===i.events[a][1].type;break}return!i.parser.lazy[i.now().line]&&(i.interrupt||l)?(e.enter("setextHeadingLine"),r=t,e.enter("setextHeadingLineSequence"),function t(n){return n===r?(e.consume(n),t):(e.exit("setextHeadingLineSequence"),ez(n)?eM(e,o,"lineSuffix")(n):o(n))}(t)):n(t)};function o(r){return null===r||ej(r)?(e.exit("setextHeadingLine"),t(r)):n(r)}}},tn=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],tr=["pre","script","style","textarea"],ti={partial:!0,tokenize:function(e,t,n){return function(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),e.attempt(eH,t,n)}}},to={partial:!0,tokenize:function(e,t,n){let r=this;return function(t){return ej(t)?(e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),i):n(t)};function i(e){return r.parser.lazy[r.now().line]?n(e):t(e)}}},tl={partial:!0,tokenize:function(e,t,n){let r=this;return function(t){return null===t?n(t):(e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),i)};function i(e){return r.parser.lazy[r.now().line]?n(e):t(e)}}},ta={concrete:!0,name:"codeFenced",tokenize:function(e,t,n){let r;let i=this,o={partial:!0,tokenize:function(e,t,n){let o=0;return function(t){return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),l};function l(t){return e.enter("codeFencedFence"),ez(t)?eM(e,s,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(t):s(t)}function s(t){return t===r?(e.enter("codeFencedFenceSequence"),function t(i){return i===r?(o++,e.consume(i),t):o>=a?(e.exit("codeFencedFenceSequence"),ez(i)?eM(e,u,"whitespace")(i):u(i)):n(i)}(t)):n(t)}function u(r){return null===r||ej(r)?(e.exit("codeFencedFence"),t(r)):n(r)}}},l=0,a=0;return function(t){return function(t){let o=i.events[i.events.length-1];return l=o&&"linePrefix"===o[1].type?o[2].sliceSerialize(o[1],!0).length:0,r=t,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),function t(i){return i===r?(a++,e.consume(i),t):a<3?n(i):(e.exit("codeFencedFenceSequence"),ez(i)?eM(e,s,"whitespace")(i):s(i))}(t)}(t)};function s(o){return null===o||ej(o)?(e.exit("codeFencedFence"),i.interrupt?t(o):e.check(tl,c,d)(o)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),function t(i){return null===i||ej(i)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),s(i)):ez(i)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),eM(e,u,"whitespace")(i)):96===i&&i===r?n(i):(e.consume(i),t)}(o))}function u(t){return null===t||ej(t)?s(t):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),function t(i){return null===i||ej(i)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),s(i)):96===i&&i===r?n(i):(e.consume(i),t)}(t))}function c(t){return e.attempt(o,d,f)(t)}function f(t){return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),p}function p(t){return l>0&&ez(t)?eM(e,h,"linePrefix",l+1)(t):h(t)}function h(t){return null===t||ej(t)?e.check(tl,c,d)(t):(e.enter("codeFlowValue"),function t(n){return null===n||ej(n)?(e.exit("codeFlowValue"),h(n)):(e.consume(n),t)}(t))}function d(n){return e.exit("codeFenced"),t(n)}}},ts=document.createElement("i");function tu(e){let t="&"+e+";
";ts.innerHTML=t;let n=ts.textContent;return(59!==n.charCodeAt(n.length-1)||"semi"===e)&&n!==t&&n}let tc={name:"characterReference",tokenize:function(e,t,n){let r,i;let o=this,l=0;return function(t){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(t),e.exit("characterReferenceMarker"),a};function a(t){return 35===t?(e.enter("characterReferenceMarkerNumeric"),e.consume(t),e.exit("characterReferenceMarkerNumeric"),s):(e.enter("characterReferenceValue"),r=31,i=eI,u(t))}function s(t){return 88===t||120===t?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(t),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),r=6,i=eO,u):(e.enter("characterReferenceValue"),r=7,i=eP,u(t))}function u(a){if(59===a&&l){let r=e.exit("characterReferenceValue");return i!==eI||tu(o.sliceSerialize(r))?(e.enter("characterReferenceMarker"),e.consume(a),e.exit("characterReferenceMarker"),e.exit("characterReference"),t):n(a)}return i(a)&&l++<r?(e.consume(a),u):n(a)}}},tf={name:"characterEscape",tokenize:function(e,t,n){return function(t){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(t),e.exit("escapeMarker"),r};function r(r){return eT(r)?(e.enter("characterEscapeValue"),e.consume(r),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(r)}}},tp={name:"lineEnding",tokenize:function(e,t){return function(n){return e.enter("lineEnding"),e.consume(n),e.exit("lineEnding"),eM(e,t,"linePrefix")}}};function th(e,t,n){let r=[],i=-1;for(;++i<e.length;){let o=e[i].resolveAll;o&&!r.includes(o)&&(t=o(t,n),r.push(o))}return t}let td={name:"labelEnd",resolveAll:function(e){let t=-1,n=[];for(;++t<e.length;){let r=e[t][1];if(n.push(e[t]),"labelImage"===r.type||"labelLink"===r.type||"labelEnd"===r.type){let e="labelImage"===r.type?4:2;r.type="data",t+=e}}return e.length!==n.length&&ex(e,0,e.length,n),e},resolveTo:function(e,t){let n,r,i,o,l=e.length,a=0;for(;l--;)if(n=e[l][1],r){if("link"===n.type||"labelLink"===n.type&&n._inactive)break;"enter"===e[l][0]&&"labelLink"===n.type&&(n._inactive=!0)}else if(i){if("enter"===e[l][0]&&("labelImage"===n.type||"labelLink"===n.type)&&!n._balanced&&(r=l,"labelLink"!==n.type)){a=2;break}}else"labelEnd"===n.type&&(i=l);let s={type:"labelLink"===e[r][1].type?"link":"image",start:{...e[r][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[r][1].start},end:{...e[i][1].end}},c={type:"labelText",start:{...e[r+a+2][1].end},end:{...e[i-2][1].start}};return o=eb(o=[["enter",s,t],["enter",u,t]],e.slice(r+1,r+a+3)),o=eb(o,[["enter",c,t]]),o=eb(o,th(t.parser.constructs.insideSpan.null,e.slice(r+a+4,i-3),t)),o=eb(o,[["exit",c,t],e[i-2],e[i-1],["exit",u,t]]),o=eb(o,e.slice(i+1)),o=eb(o,[["exit",s,t]]),ex(e,r,e.length,o),e},tokenize:function(e,t,n){let r,i;let o=this,l=o.events.length;for(;l--;)if(("labelImage"===o.events[l][1].type||"labelLink"===o.events[l][1].type)&&!o.events[l][1]._balanced){r=o.events[l][1];break}return function(t){return r?r._inactive?c(t):(i=o.parser.defined.includes(e6(o.sliceSerialize({start:r.end,end:o.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(t),e.exit("labelMarker"),e.exit("labelEnd"),a):n(t)};function a(t){return 40===t?e.attempt(tg,u,i?u:c)(t):91===t?e.attempt(tm,u,i?s:c)(t):i?u(t):c(t)}function s(t){return e.attempt(ty,u,c)(t)}function u(e){return t(e)}function c(e){return r._balanced=!0,n(e)}}},tg={tokenize:function(e,t,n){return function(t){return e.enter("resource"),e.enter("resourceMarker"),e.consume(t),e.exit("resourceMarker"),r};function r(t){return eD(t)?e9(e,i)(t):i(t)}function i(t){return 41===t?u(t):e4(e,o,l,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(t)}function o(t){return eD(t)?e9(e,a)(t):u(t)}function l(e){return n(e)}function a(t){return 34===t||39===t||40===t?e5(e,s,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(t):u(t)}function s(t){return eD(t)?e9(e,u)(t):u(t)}function u(r){return 41===r?(e.enter("resourceMarker"),e.consume(r),e.exit("resourceMarker"),e.exit("resource"),t):n(r)}}},tm={tokenize:function(e,t,n){let r=this;return function(t){return e3.call(r,e,i,o,"reference","referenceMarker","referenceString")(t)};function i(e){return r.parser.defined.includes(e6(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(e):n(e)}function o(e){return n(e)}}},ty={tokenize:function(e,t,n){return function(t){return e.enter("reference"),e.enter("referenceMarker"),e.consume(t),e.exit("referenceMarker"),r};function r(r){return 93===r?(e.enter("referenceMarker"),e.consume(r),e.exit("referenceMarker"),e.exit("reference"),t):n(r)}}},tv={name:"labelStartImage",resolveAll:td.resolveAll,tokenize:function(e,t,n){let r=this;return function(t){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(t),e.exit("labelImageMarker"),i};function i(t){return 91===t?(e.enter("labelMarker"),e.consume(t),e.exit("labelMarker"),e.exit("labelImage"),o):n(t)}function o(e){return 94===e&&"_hiddenFootnoteSupport"in r.parser.constructs?n(e):t(e)}}};function tx(e){return null===e||eD(e)||eF(e)?1:eL(e)?2:void 0}let tb={name:"attention",resolveAll:function(e,t){let n,r,i,o,l,a,s,u,c=-1;for(;++c<e.length;)if("enter"===e[c][0]&&"attentionSequence"===e[c][1].type&&e[c][1]._close){for(n=c;n--;)if("exit"===e[n][0]&&"attentionSequence"===e[n][1].type&&e[n][1]._open&&t.sliceSerialize(e[n][1]).charCodeAt(0)===t.sliceSerialize(e[c][1]).charCodeAt(0)){if((e[n][1]._close||e[c][1]._open)&&(e[c][1].end.offset-e[c][1].start.offset)%3&&!((e[n][1].end.offset-e[n][1].start.offset+e[c][1].end.offset-e[c][1].start.offset)%3))continue;a=e[n][1].end.offset-e[n][1].start.offset>1&&e[c][1].end.offset-e[c][1].start.offset>1?2:1;let f={...e[n][1].end},p={...e[c][1].start};tk(f,-a),tk(p,a),o={type:a>1?"strongSequence":"emphasisSequence",start:f,end:{...e[n][1].end}},l={type:a>1?"strongSequence":"emphasisSequence",start:{...e[c][1].start},end:p},i={type:a>1?"strongText":"emphasisText",start:{...e[n][1].end},end:{...e[c][1].start}},r={type:a>1?"strong":"emphasis",start:{...o.start},end:{...l.end}},e[n][1].end={...o.start},e[c][1].start={...l.end},s=[],e[n][1].end.offset-e[n][1].start.offset&&(s=eb(s,[["enter",e[n][1],t],["exit",e[n][1],t]])),s=eb(s,[["enter",r,t],["enter",o,t],["exit",o,t],["enter",i,t]]),s=eb(s,th(t.parser.constructs.insideSpan.null,e.slice(n+1,c),t)),s=eb(s,[["exit",i,t],["enter",l,t],["exit",l,t],["exit",r,t]]),e[c][1].end.offset-e[c][1].start.offset?(u=2,s=eb(s,[["enter",e[c][1],t],["exit",e[c][1],t]])):u=0,ex(e,n-1,c-n+3,s),c=n+s.length-u-2;break}}for(c=-1;++c<e.length;)"attentionSequence"===e[c][1].type&&(e[c][1].type="data");return e},tokenize:function(e,t){let n;let r=this.parser.constructs.attentionMarkers.null,i=this.previous,o=tx(i);return function(l){return n=l,e.enter("attentionSequence"),function l(a){if(a===n)return e.consume(a),l;let s=e.exit("attentionSequence"),u=tx(a),c=!u||2===u&&o||r.includes(a),f=!o||2===o&&u||r.includes(i);return s._open=!!(42===n?c:c&&(o||!f)),s._close=!!(42===n?f:f&&(u||!c)),t(a)}(l)}}};function tk(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}let tw={name:"labelStartLink",resolveAll:td.resolveAll,tokenize:function(e,t,n){let r=this;return function(t){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(t),e.exit("labelMarker"),e.exit("labelLink"),i};function i(e){return 94===e&&"_hiddenFootnoteSupport"in r.parser.constructs?n(e):t(e)}}},tS={42:eZ,43:eZ,45:eZ,48:eZ,49:eZ,50:eZ,51:eZ,52:eZ,53:eZ,54:eZ,55:eZ,56:eZ,57:eZ,62:e2},tC={91:{name:"definition",tokenize:function(e,t,n){let r;let i=this;return function(t){return e.enter("definition"),e3.call(i,e,o,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(t)};function o(t){return(r=e6(i.sliceSerialize(i.events[i.events.length-1][1]).slice(1,-1)),58===t)?(e.enter("definitionMarker"),e.consume(t),e.exit("definitionMarker"),l):n(t)}function l(t){return eD(t)?e9(e,a)(t):a(t)}function a(t){return e4(e,s,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(t)}function s(t){return e.attempt(e7,u,u)(t)}function u(t){return ez(t)?eM(e,c,"whitespace")(t):c(t)}function c(o){return null===o||ej(o)?(e.exit("definition"),i.parser.defined.push(r),t(o)):n(o)}}}},t_={[-2]:e8,[-1]:e8,32:e8},tI={35:{name:"headingAtx",resolve:function(e,t){let n,r,i=e.length-2,o=3;return"whitespace"===e[3][1].type&&(o+=2),i-2>o&&"whitespace"===e[i][1].type&&(i-=2),"atxHeadingSequence"===e[i][1].type&&(o===i-1||i-4>o&&"whitespace"===e[i-2][1].type)&&(i-=o+1===i?2:4),i>o&&(n={type:"atxHeadingText",start:e[o][1].start,end:e[i][1].end},r={type:"chunkText",start:e[o][1].start,end:e[i][1].end,contentType:"text"},ex(e,o,i-o+1,[["enter",n,t],["enter",r,t],["exit",r,t],["exit",n,t]])),e},tokenize:function(e,t,n){let r=0;return function(i){return e.enter("atxHeading"),e.enter("atxHeadingSequence"),function i(o){return 35===o&&r++<6?(e.consume(o),i):null===o||eD(o)?(e.exit("atxHeadingSequence"),function n(r){return 35===r?(e.enter("atxHeadingSequence"),function t(r){return 35===r?(e.consume(r),t):(e.exit("atxHeadingSequence"),n(r))}(r)):null===r||ej(r)?(e.exit("atxHeading"),t(r)):ez(r)?eM(e,n,"whitespace")(r):(e.enter("atxHeadingText"),function t(r){return null===r||35===r||eD(r)?(e.exit("atxHeadingText"),n(r)):(e.consume(r),t)}(r))}(o)):n(o)}(i)}}},42:eX,45:[tt,eX],60:{concrete:!0,name:"htmlFlow",resolveTo:function(e){let t=e.length;for(;t--&&("enter"!==e[t][0]||"htmlFlow"!==e[t][1].type););return t>1&&"linePrefix"===e[t-2][1].type&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e},tokenize:function(e,t,n){let r,i,o,l,a;let s=this;return function(t){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(t),u};function u(l){return 33===l?(e.consume(l),c):47===l?(e.consume(l),i=!0,h):63===l?(e.consume(l),r=3,s.interrupt?t:j):e_(l)?(e.consume(l),o=String.fromCharCode(l),d):n(l)}function c(i){return 45===i?(e.consume(i),r=2,f):91===i?(e.consume(i),r=5,l=0,p):e_(i)?(e.consume(i),r=4,s.interrupt?t:j):n(i)}function f(r){return 45===r?(e.consume(r),s.interrupt?t:j):n(r)}function p(r){let i="CDATA[";return r===i.charCodeAt(l++)?(e.consume(r),l===i.length)?s.interrupt?t:C:p:n(r)}function h(t){return e_(t)?(e.consume(t),o=String.fromCharCode(t),d):n(t)}function d(l){if(null===l||47===l||62===l||eD(l)){let a=47===l,u=o.toLowerCase();return!a&&!i&&tr.includes(u)?(r=1,s.interrupt?t(l):C(l)):tn.includes(o.toLowerCase())?(r=6,a)?(e.consume(l),g):s.interrupt?t(l):C(l):(r=7,s.interrupt&&!s.parser.lazy[s.now().line]?n(l):i?function t(n){return ez(n)?(e.consume(n),t):w(n)}(l):m(l))}return 45===l||eI(l)?(e.consume(l),o+=String.fromCharCode(l),d):n(l)}function g(r){return 62===r?(e.consume(r),s.interrupt?t:C):n(r)}function m(t){return 47===t?(e.consume(t),w):58===t||95===t||e_(t)?(e.consume(t),y):ez(t)?(e.consume(t),m):w(t)}function y(t){return 45===t||46===t||58===t||95===t||eI(t)?(e.consume(t),y):v(t)}function v(t){return 61===t?(e.consume(t),x):ez(t)?(e.consume(t),v):m(t)}function x(t){return null===t||60===t||61===t||62===t||96===t?n(t):34===t||39===t?(e.consume(t),a=t,b):ez(t)?(e.consume(t),x):function t(n){return null===n||34===n||39===n||47===n||60===n||61===n||62===n||96===n||eD(n)?v(n):(e.consume(n),t)}(t)}function b(t){return t===a?(e.consume(t),a=null,k):null===t||ej(t)?n(t):(e.consume(t),b)}function k(e){return 47===e||62===e||ez(e)?m(e):n(e)}function w(t){return 62===t?(e.consume(t),S):n(t)}function S(t){return null===t||ej(t)?C(t):ez(t)?(e.consume(t),S):n(t)}function C(t){return 45===t&&2===r?(e.consume(t),E):60===t&&1===r?(e.consume(t),P):62===t&&4===r?(e.consume(t),D):63===t&&3===r?(e.consume(t),j):93===t&&5===r?(e.consume(t),T):ej(t)&&(6===r||7===r)?(e.exit("htmlFlowData"),e.check(ti,z,_)(t)):null===t||ej(t)?(e.exit("htmlFlowData"),_(t)):(e.consume(t),C)}function _(t){return e.check(to,I,z)(t)}function I(t){return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),A}function A(t){return null===t||ej(t)?_(t):(e.enter("htmlFlowData"),C(t))}function E(t){return 45===t?(e.consume(t),j):C(t)}function P(t){return 47===t?(e.consume(t),o="",O):C(t)}function O(t){if(62===t){let n=o.toLowerCase();return tr.includes(n)?(e.consume(t),D):C(t)}return e_(t)&&o.length<8?(e.consume(t),o+=String.fromCharCode(t),O):C(t)}function T(t){return 93===t?(e.consume(t),j):C(t)}function j(t){return 62===t?(e.consume(t),D):45===t&&2===r?(e.consume(t),j):C(t)}function D(t){return null===t||ej(t)?(e.exit("htmlFlowData"),z(t)):(e.consume(t),D)}function z(n){return e.exit("htmlFlow"),t(n)}}},61:tt,95:eX,96:ta,126:ta},tA={38:tc,92:tf},tE={[-5]:tp,[-4]:tp,[-3]:tp,33:tv,38:tc,42:tb,60:[{name:"autolink",tokenize:function(e,t,n){let r=0;return function(t){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(t),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),i};function i(t){return e_(t)?(e.consume(t),o):64===t?n(t):a(t)}function o(t){return 43===t||45===t||46===t||eI(t)?(r=1,function t(n){return 58===n?(e.consume(n),r=0,l):(43===n||45===n||46===n||eI(n))&&r++<32?(e.consume(n),t):(r=0,a(n))}(t)):a(t)}function l(r){return 62===r?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(r),e.exit("autolinkMarker"),e.exit("autolink"),t):null===r||32===r||60===r||eE(r)?n(r):(e.consume(r),l)}function a(t){return 64===t?(e.consume(t),s):eA(t)?(e.consume(t),a):n(t)}function s(i){return eI(i)?function i(o){return 46===o?(e.consume(o),r=0,s):62===o?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(o),e.exit("autolinkMarker"),e.exit("autolink"),t):function t(o){if((45===o||eI(o))&&r++<63){let n=45===o?t:i;return e.consume(o),n}return n(o)}(o)}(i):n(i)}}},{name:"htmlText",tokenize:function(e,t,n){let r,i,o;let l=this;return function(t){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(t),a};function a(t){return 33===t?(e.consume(t),s):47===t?(e.consume(t),b):63===t?(e.consume(t),v):e_(t)?(e.consume(t),w):n(t)}function s(t){return 45===t?(e.consume(t),u):91===t?(e.consume(t),i=0,h):e_(t)?(e.consume(t),y):n(t)}function u(t){return 45===t?(e.consume(t),p):n(t)}function c(t){return null===t?n(t):45===t?(e.consume(t),f):ej(t)?(o=c,O(t)):(e.consume(t),c)}function f(t){return 45===t?(e.consume(t),p):c(t)}function p(e){return 62===e?P(e):45===e?f(e):c(e)}function h(t){let r="CDATA[";return t===r.charCodeAt(i++)?(e.consume(t),i===r.length?d:h):n(t)}function d(t){return null===t?n(t):93===t?(e.consume(t),g):ej(t)?(o=d,O(t)):(e.consume(t),d)}function g(t){return 93===t?(e.consume(t),m):d(t)}function m(t){return 62===t?P(t):93===t?(e.consume(t),m):d(t)}function y(t){return null===t||62===t?P(t):ej(t)?(o=y,O(t)):(e.consume(t),y)}function v(t){return null===t?n(t):63===t?(e.consume(t),x):ej(t)?(o=v,O(t)):(e.consume(t),v)}function x(e){return 62===e?P(e):v(e)}function b(t){return e_(t)?(e.consume(t),k):n(t)}function k(t){return 45===t||eI(t)?(e.consume(t),k):function t(n){return ej(n)?(o=t,O(n)):ez(n)?(e.consume(n),t):P(n)}(t)}function w(t){return 45===t||eI(t)?(e.consume(t),w):47===t||62===t||eD(t)?S(t):n(t)}function S(t){return 47===t?(e.consume(t),P):58===t||95===t||e_(t)?(e.consume(t),C):ej(t)?(o=S,O(t)):ez(t)?(e.consume(t),S):P(t)}function C(t){return 45===t||46===t||58===t||95===t||eI(t)?(e.consume(t),C):function t(n){return 61===n?(e.consume(n),_):ej(n)?(o=t,O(n)):ez(n)?(e.consume(n),t):S(n)}(t)}function _(t){return null===t||60===t||61===t||62===t||96===t?n(t):34===t||39===t?(e.consume(t),r=t,I):ej(t)?(o=_,O(t)):ez(t)?(e.consume(t),_):(e.consume(t),A)}function I(t){return t===r?(e.consume(t),r=void 0,E):null===t?n(t):ej(t)?(o=I,O(t)):(e.consume(t),I)}function A(t){return null===t||34===t||39===t||60===t||61===t||96===t?n(t):47===t||62===t||eD(t)?S(t):(e.consume(t),A)}function E(e){return 47===e||62===e||eD(e)?S(e):n(e)}function P(r){return 62===r?(e.consume(r),e.exit("htmlTextData"),e.exit("htmlText"),t):n(r)}function O(t){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),T}function T(t){return ez(t)?eM(e,j,"linePrefix",l.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(t):j(t)}function j(t){return e.enter("htmlTextData"),o(t)}}}],91:tw,92:[{name:"hardBreakEscape",tokenize:function(e,t,n){return function(t){return e.enter("hardBreakEscape"),e.consume(t),r};function r(r){return ej(r)?(e.exit("hardBreakEscape"),t(r)):n(r)}}},tf],93:td,95:tb,96:{name:"codeText",previous:function(e){return 96!==e||"characterEscape"===this.events[this.events.length-1][1].type},resolve:function(e){let t,n,r=e.length-4,i=3;if(("lineEnding"===e[3][1].type||"space"===e[i][1].type)&&("lineEnding"===e[r][1].type||"space"===e[r][1].type)){for(t=i;++t<r;)if("codeTextData"===e[t][1].type){e[i][1].type="codeTextPadding",e[r][1].type="codeTextPadding",i+=2,r-=2;break}}for(t=i-1,r++;++t<=r;)void 0===n?t!==r&&"lineEnding"!==e[t][1].type&&(n=t):(t===r||"lineEnding"===e[t][1].type)&&(e[n][1].type="codeTextData",t!==n+2&&(e[n][1].end=e[t-1][1].end,e.splice(n+2,t-n-2),r-=t-n-2,t=n+2),n=void 0);return e},tokenize:function(e,t,n){let r,i,o=0;return function(t){return e.enter("codeText"),e.enter("codeTextSequence"),function t(n){return 96===n?(e.consume(n),o++,t):(e.exit("codeTextSequence"),l(n))}(t)};function l(s){return null===s?n(s):32===s?(e.enter("space"),e.consume(s),e.exit("space"),l):96===s?(i=e.enter("codeTextSequence"),r=0,function n(l){return 96===l?(e.consume(l),r++,n):r===o?(e.exit("codeTextSequence"),e.exit("codeText"),t(l)):(i.type="codeTextData",a(l))}(s)):ej(s)?(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),l):(e.enter("codeTextData"),a(s))}function a(t){return null===t||32===t||96===t||ej(t)?(e.exit("codeTextData"),l(t)):(e.consume(t),a)}}}},tP={null:[tb,e$]},tO={null:[42,95]},tT={null:[]},tj=/[\0\t\n\r]/g;function tD(e,t){let n=Number.parseInt(e,t);return n<9||11===n||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(65535&n)==65535||(65535&n)==65534||n>1114111?"�":String.fromCodePoint(n)}let tz=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function tL(e,t,n){if(t)return t;if(35===n.charCodeAt(0)){let e=n.charCodeAt(1),t=120===e||88===e;return tD(n.slice(t?2:1),t?16:10)}return tu(n)||e}let tF={}.hasOwnProperty;function tN(e){return{line:e.line,column:e.column,offset:e.offset}}function tM(e,t){if(e)throw Error("Cannot close `"+e.type+"` ("+Y({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Y({start:t.start,end:t.end})+") is open");throw Error("Cannot close document, a token (`"+t.type+"`, "+Y({start:t.start,end:t.end})+") is still open")}function tR(e){let t=this;t.parser=function(n){var r,o;let l,a,s,u;return"string"!=typeof(r={...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})&&(o=r,r=void 0),(function(e){let t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:r(y),autolinkProtocol:u,autolinkEmail:u,atxHeading:r(d),blockQuote:r(function(){return{type:"blockquote",children:[]}}),characterEscape:u,characterReference:u,codeFenced:r(h),codeFencedFenceInfo:i,codeFencedFenceMeta:i,codeIndented:r(h,i),codeText:r(function(){return{type:"inlineCode",value:""}},i),codeTextData:u,data:u,codeFlowValue:u,definition:r(function(){return{type:"definition",identifier:"",label:null,title:null,url:""}}),definitionDestinationString:i,definitionLabelString:i,definitionTitleString:i,emphasis:r(function(){return{type:"emphasis",children:[]}}),hardBreakEscape:r(g),hardBreakTrailing:r(g),htmlFlow:r(m,i),htmlFlowData:u,htmlText:r(m,i),htmlTextData:u,image:r(function(){return{type:"image",title:null,url:"",alt:null}}),label:i,link:r(y),listItem:r(function(e){return{type:"listItem",spread:e._spread,checked:null,children:[]}}),listItemValue:function(e){this.data.expectingFirstListItemValue&&(this.stack[this.stack.length-2].start=Number.parseInt(this.sliceSerialize(e),10),this.data.expectingFirstListItemValue=void 0)},listOrdered:r(v,function(){this.data.expectingFirstListItemValue=!0}),listUnordered:r(v),paragraph:r(function(){return{type:"paragraph",children:[]}}),reference:function(){this.data.referenceType="collapsed"},referenceString:i,resourceDestinationString:i,resourceTitleString:i,setextHeading:r(d),strong:r(function(){return{type:"strong",children:[]}}),thematicBreak:r(function(){return{type:"thematicBreak"}})},exit:{atxHeading:l(),atxHeadingSequence:function(e){let t=this.stack[this.stack.length-1];if(!t.depth){let n=this.sliceSerialize(e).length;t.depth=n}},autolink:l(),autolinkEmail:function(e){c.call(this,e),this.stack[this.stack.length-1].url="mailto:"+this.sliceSerialize(e)},autolinkProtocol:function(e){c.call(this,e),this.stack[this.stack.length-1].url=this.sliceSerialize(e)},blockQuote:l(),characterEscapeValue:c,characterReferenceMarkerHexadecimal:p,characterReferenceMarkerNumeric:p,characterReferenceValue:function(e){let t;let n=this.sliceSerialize(e),r=this.data.characterReferenceType;r?(t=tD(n,"characterReferenceMarkerNumeric"===r?10:16),this.data.characterReferenceType=void 0):t=tu(n);let i=this.stack[this.stack.length-1];i.value+=t},characterReference:function(e){this.stack.pop().position.end=tN(e.end)},codeFenced:l(function(){let e=this.resume();this.stack[this.stack.length-1].value=e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}),codeFencedFence:function(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)},codeFencedFenceInfo:function(){let e=this.resume();this.stack[this.stack.length-1].lang=e},codeFencedFenceMeta:function(){let e=this.resume();this.stack[this.stack.length-1].meta=e},codeFlowValue:c,codeIndented:l(function(){let e=this.resume();this.stack[this.stack.length-1].value=e.replace(/(\r?\n|\r)$/g,"")}),codeText:l(function(){let e=this.resume();this.stack[this.stack.length-1].value=e}),codeTextData:c,data:c,definition:l(),definitionDestinationString:function(){let e=this.resume();this.stack[this.stack.length-1].url=e},definitionLabelString:function(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=e6(this.sliceSerialize(e)).toLowerCase()},definitionTitleString:function(){let e=this.resume();this.stack[this.stack.length-1].title=e},emphasis:l(),hardBreakEscape:l(f),hardBreakTrailing:l(f),htmlFlow:l(function(){let e=this.resume();this.stack[this.stack.length-1].value=e}),htmlFlowData:c,htmlText:l(function(){let e=this.resume();this.stack[this.stack.length-1].value=e}),htmlTextData:c,image:l(function(){let e=this.stack[this.stack.length-1];if(this.data.inReference){let t=this.data.referenceType||"shortcut";e.type+="Reference",e.referenceType=t,delete e.url,delete e.title}else delete e.identifier,delete e.label;this.data.referenceType=void 0}),label:function(){let e=this.stack[this.stack.length-1],t=this.resume(),n=this.stack[this.stack.length-1];if(this.data.inReference=!0,"link"===n.type){let t=e.children;n.children=t}else n.alt=t},labelText:function(e){let t=this.sliceSerialize(e),n=this.stack[this.stack.length-2];n.label=t.replace(tz,tL),n.identifier=e6(t).toLowerCase()},lineEnding:function(e){let n=this.stack[this.stack.length-1];if(this.data.atHardBreak){n.children[n.children.length-1].position.end=tN(e.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(n.type)&&(u.call(this,e),c.call(this,e))},link:l(function(){let e=this.stack[this.stack.length-1];if(this.data.inReference){let t=this.data.referenceType||"shortcut";e.type+="Reference",e.referenceType=t,delete e.url,delete e.title}else delete e.identifier,delete e.label;this.data.referenceType=void 0}),listItem:l(),listOrdered:l(),listUnordered:l(),paragraph:l(),referenceString:function(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=e6(this.sliceSerialize(e)).toLowerCase(),this.data.referenceType="full"},resourceDestinationString:function(){let e=this.resume();this.stack[this.stack.length-1].url=e},resourceTitleString:function(){let e=this.resume();this.stack[this.stack.length-1].title=e},resource:function(){this.data.inReference=void 0},setextHeading:l(function(){this.data.setextHeadingSlurpLineEnding=void 0}),setextHeadingLineSequence:function(e){this.stack[this.stack.length-1].depth=61===this.sliceSerialize(e).codePointAt(0)?1:2},setextHeadingText:function(){this.data.setextHeadingSlurpLineEnding=!0},strong:l(),thematicBreak:l()}};(function e(t,n){let r=-1;for(;++r<n.length;){let i=n[r];Array.isArray(i)?e(t,i):function(e,t){let n;for(n in t)if(tF.call(t,n))switch(n){case"canContainEols":{let r=t[n];r&&e[n].push(...r);break}case"transforms":{let r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{let r=t[n];r&&Object.assign(e[n],r)}}}(t,i)}})(t,(e||{}).mdastExtensions||[]);let n={};return function(e){let r={type:"root",children:[]},l={stack:[r],tokenStack:[],config:t,enter:o,exit:a,buffer:i,resume:s,data:n},u=[],c=-1;for(;++c<e.length;)("listOrdered"===e[c][1].type||"listUnordered"===e[c][1].type)&&("enter"===e[c][0]?u.push(c):c=function(e,t,n){let r,i,o,l,a=t-1,s=-1,u=!1;for(;++a<=n;){let t=e[a];switch(t[1].type){case"listUnordered":case"listOrdered":case"blockQuote":"enter"===t[0]?s++:s--,l=void 0;break;case"lineEndingBlank":"enter"===t[0]&&(!r||l||s||o||(o=a),l=void 0);break;case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:l=void 0}if(!s&&"enter"===t[0]&&"listItemPrefix"===t[1].type||-1===s&&"exit"===t[0]&&("listUnordered"===t[1].type||"listOrdered"===t[1].type)){if(r){let l=a;for(i=void 0;l--;){let t=e[l];if("lineEnding"===t[1].type||"lineEndingBlank"===t[1].type){if("exit"===t[0])continue;i&&(e[i][1].type="lineEndingBlank",u=!0),t[1].type="lineEnding",i=l}else if("linePrefix"===t[1].type||"blockQuotePrefix"===t[1].type||"blockQuotePrefixWhitespace"===t[1].type||"blockQuoteMarker"===t[1].type||"listItemIndent"===t[1].type);else break}o&&(!i||o<i)&&(r._spread=!0),r.end=Object.assign({},i?e[i][1].start:t[1].end),e.splice(i||a,0,["exit",r,t[2]]),a++,n++}if("listItemPrefix"===t[1].type){let i={type:"listItem",_spread:!1,start:Object.assign({},t[1].start),end:void 0};r=i,e.splice(a,0,["enter",i,t[2]]),a++,n++,o=void 0,l=!0}}}return e[t][1]._spread=u,n}(e,u.pop(),c));for(c=-1;++c<e.length;){let n=t[e[c][0]];tF.call(n,e[c][1].type)&&n[e[c][1].type].call(Object.assign({sliceSerialize:e[c][2].sliceSerialize},l),e[c][1])}if(l.tokenStack.length>0){let e=l.tokenStack[l.tokenStack.length-1];(e[1]||tM).call(l,void 0,e[0])}for(r.position={start:tN(e.length>0?e[0][1].start:{line:1,column:1,offset:0}),end:tN(e.length>0?e[e.length-2][1].end:{line:1,column:1,offset:0})},c=-1;++c<t.transforms.length;)r=t.transforms[c](r)||r;return r};function r(e,t){return function(n){o.call(this,e(n),n),t&&t.call(this,n)}}function i(){this.stack.push({type:"fragment",children:[]})}function o(e,t,n){this.stack[this.stack.length-1].children.push(e),this.stack.push(e),this.tokenStack.push([t,n||void 0]),e.position={start:tN(t.start),end:void 0}}function l(e){return function(t){e&&e.call(this,t),a.call(this,t)}}function a(e,t){let n=this.stack.pop(),r=this.tokenStack.pop();if(r)r[0].type!==e.type&&(t?t.call(this,e,r[0]):(r[1]||tM).call(this,e,r[0]));else throw Error("Cannot close `"+e.type+"` ("+Y({start:e.start,end:e.end})+"): it’s not open");n.position.end=tN(e.end)}function s(){return ey(this.stack.pop(),"boolean"!=typeof em.includeImageAlt||em.includeImageAlt,"boolean"!=typeof em.includeHtml||em.includeHtml)}function u(e){let t=this.stack[this.stack.length-1].children,n=t[t.length-1];n&&"text"===n.type||((n={type:"text",value:""}).position={start:tN(e.start),end:void 0},t.push(n)),this.stack.push(n)}function c(e){let t=this.stack.pop();t.value+=this.sliceSerialize(e),t.position.end=tN(e.end)}function f(){this.data.atHardBreak=!0}function p(e){this.data.characterReferenceType=e.type}function h(){return{type:"code",lang:null,meta:null,value:""}}function d(){return{type:"heading",depth:0,children:[]}}function g(){return{type:"break"}}function m(){return{type:"html",value:""}}function y(){return{type:"link",title:null,url:"",children:[]}}function v(e){return{type:"list",ordered:"listOrdered"===e.type,start:null,spread:e._spread,children:[]}}})(o)(function(e){for(;!eS(e););return e}((function(e){let t={constructs:function(e){let t={},n=-1;for(;++n<e.length;)(function(e,t){let n;for(n in t){let r;let i=(eC.call(e,n)?e[n]:void 0)||(e[n]={}),o=t[n];if(o)for(r in o){eC.call(i,r)||(i[r]=[]);let e=o[r];(function(e,t){let n=-1,r=[];for(;++n<t.length;)("after"===t[n].add?e:r).push(t[n]);ex(e,0,0,r)})(i[r],Array.isArray(e)?e:e?[e]:[])}}})(t,e[n]);return t}([i,...(e||{}).extensions||[]]),content:n(eR),defined:[],document:n(eB),flow:n(eW),lazy:{},string:n(eK),text:n(eY)};return t;function n(e){return function(n){return function(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0},i={},o=[],l=[],a=[],s={attempt:d(function(e,t){g(e,t.from)}),check:d(h),consume:function(e){ej(e)?(r.line++,r.column=1,r.offset+=-3===e?2:1,m()):-1!==e&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===l[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=e},enter:function(e,t){let n=t||{};return n.type=e,n.start=p(),u.events.push(["enter",n,u]),a.push(n),n},exit:function(e){let t=a.pop();return t.end=p(),u.events.push(["exit",t,u]),t},interrupt:d(h,{interrupt:!0})},u={code:null,containerState:{},defineSkip:function(e){i[e.line]=e.column,m()},events:[],now:p,parser:e,previous:null,sliceSerialize:function(e,t){return function(e,t){let n,r=-1,i=[];for(;++r<e.length;){let o;let l=e[r];if("string"==typeof l)o=l;else switch(l){case -5:o="\r";break;case -4:o="\n";break;case -3:o="\r\n";break;case -2:o=t?" ":"	";break;case -1:if(!t&&n)continue;o=" ";break;default:o=String.fromCharCode(l)}n=-2===l,i.push(o)}return i.join("")}(f(e),t)},sliceStream:f,write:function(e){return(l=eb(l,e),function(){let e;for(;r._index<l.length;){let n=l[r._index];if("string"==typeof n)for(e=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===e&&r._bufferIndex<n.length;){var t;t=n.charCodeAt(r._bufferIndex),c=c(t)}else c=c(n)}}(),null!==l[l.length-1])?[]:(g(t,0),u.events=th(o,u.events,u),u.events)}},c=t.tokenize.call(u,s);return t.resolveAll&&o.push(t),u;function f(e){return function(e,t){let n;let r=t.start._index,i=t.start._bufferIndex,o=t.end._index,l=t.end._bufferIndex;if(r===o)n=[e[r].slice(i,l)];else{if(n=e.slice(r,o),i>-1){let e=n[0];"string"==typeof e?n[0]=e.slice(i):n.shift()}l>0&&n.push(e[o].slice(0,l))}return n}(l,e)}function p(){let{_bufferIndex:e,_index:t,line:n,column:i,offset:o}=r;return{_bufferIndex:e,_index:t,line:n,column:i,offset:o}}function h(e,t){t.restore()}function d(e,t){return function(n,i,o){let l,c,f,h;return Array.isArray(n)?d(n):"tokenize"in n?d([n]):function(e){let t=null!==e&&n[e],r=null!==e&&n.null;return d([...Array.isArray(t)?t:t?[t]:[],...Array.isArray(r)?r:r?[r]:[]])(e)};function d(e){return(l=e,c=0,0===e.length)?o:g(e[c])}function g(e){return function(n){return(h=function(){let e=p(),t=u.previous,n=u.currentConstruct,i=u.events.length,o=Array.from(a);return{from:i,restore:function(){r=e,u.previous=t,u.currentConstruct=n,u.events.length=i,a=o,m()}}}(),f=e,e.partial||(u.currentConstruct=e),e.name&&u.parser.constructs.disable.null.includes(e.name))?v(n):e.tokenize.call(t?Object.assign(Object.create(u),t):u,s,y,v)(n)}}function y(t){return e(f,h),i}function v(e){return(h.restore(),++c<l.length)?g(l[c]):o}}}function g(e,t){e.resolveAll&&!o.includes(e)&&o.push(e),e.resolve&&ex(u.events,t,u.events.length-t,e.resolve(u.events.slice(t),u)),e.resolveTo&&(u.events=e.resolveTo(u.events,u))}function m(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}(t,e,n)}}})(o).document().write((a=1,s="",u=!0,function(e,t,n){let r,i,o,c,f;let p=[];for(e=s+("string"==typeof e?e.toString():new TextDecoder(t||void 0).decode(e)),o=0,s="",u&&(65279===e.charCodeAt(0)&&o++,u=void 0);o<e.length;){if(tj.lastIndex=o,c=(r=tj.exec(e))&&void 0!==r.index?r.index:e.length,f=e.charCodeAt(c),!r){s=e.slice(o);break}if(10===f&&o===c&&l)p.push(-3),l=void 0;else switch(l&&(p.push(-5),l=void 0),o<c&&(p.push(e.slice(o,c)),a+=c-o),f){case 0:p.push(65533),a++;break;case 9:for(i=4*Math.ceil(a/4),p.push(-2);a++<i;)p.push(-1);break;case 10:p.push(-4),a=1;break;default:l=!0,a=1}o=c+1}return n&&(l&&p.push(-5),s&&p.push(s),p.push(null)),p})(n,r,!0))))}}let tB="object"==typeof self?self:globalThis,tU=(e,t)=>{let n=(t,n)=>(e.set(n,t),t),r=i=>{if(e.has(i))return e.get(i);let[o,l]=t[i];switch(o){case 0:case -1:return n(l,i);case 1:{let e=n([],i);for(let t of l)e.push(r(t));return e}case 2:{let e=n({},i);for(let[t,n]of l)e[r(t)]=r(n);return e}case 3:return n(new Date(l),i);case 4:{let{source:e,flags:t}=l;return n(new RegExp(e,t),i)}case 5:{let e=n(new Map,i);for(let[t,n]of l)e.set(r(t),r(n));return e}case 6:{let e=n(new Set,i);for(let t of l)e.add(r(t));return e}case 7:{let{name:e,message:t}=l;return n(new tB[e](t),i)}case 8:return n(BigInt(l),i);case"BigInt":return n(Object(BigInt(l)),i);case"ArrayBuffer":return n(new Uint8Array(l).buffer,l);case"DataView":{let{buffer:e}=new Uint8Array(l);return n(new DataView(e),l)}}return n(new tB[o](l),i)};return r},tH=e=>tU(new Map,e)(0),{toString:tV}={},{keys:tq}=Object,tW=e=>{let t=typeof e;if("object"!==t||!e)return[0,t];let n=tV.call(e).slice(8,-1);switch(n){case"Array":return[1,""];case"Object":return[2,""];case"Date":return[3,""];case"RegExp":return[4,""];case"Map":return[5,""];case"Set":return[6,""];case"DataView":return[1,n]}return n.includes("Array")?[1,n]:n.includes("Error")?[7,n]:[2,n]},t$=([e,t])=>0===e&&("function"===t||"symbol"===t),tK=(e,t,n,r)=>{let i=(e,t)=>{let i=r.push(e)-1;return n.set(t,i),i},o=r=>{if(n.has(r))return n.get(r);let[l,a]=tW(r);switch(l){case 0:{let t=r;switch(a){case"bigint":l=8,t=r.toString();break;case"function":case"symbol":if(e)throw TypeError("unable to serialize "+a);t=null;break;case"undefined":return i([-1],r)}return i([l,t],r)}case 1:{if(a){let e=r;return"DataView"===a?e=new Uint8Array(r.buffer):"ArrayBuffer"===a&&(e=new Uint8Array(r)),i([a,[...e]],r)}let e=[],t=i([l,e],r);for(let t of r)e.push(o(t));return t}case 2:{if(a)switch(a){case"BigInt":return i([a,r.toString()],r);case"Boolean":case"Number":case"String":return i([a,r.valueOf()],r)}if(t&&"toJSON"in r)return o(r.toJSON());let n=[],s=i([l,n],r);for(let t of tq(r))(e||!t$(tW(r[t])))&&n.push([o(t),o(r[t])]);return s}case 3:return i([l,r.toISOString()],r);case 4:{let{source:e,flags:t}=r;return i([l,{source:e,flags:t}],r)}case 5:{let t=[],n=i([l,t],r);for(let[n,i]of r)(e||!(t$(tW(n))||t$(tW(i))))&&t.push([o(n),o(i)]);return n}case 6:{let t=[],n=i([l,t],r);for(let n of r)(e||!t$(tW(n)))&&t.push(o(n));return n}}let{message:s}=r;return i([l,{name:a,message:s}],r)};return o},tY=(e,{json:t,lossy:n}={})=>{let r=[];return tK(!(t||n),!!t,new Map,r)(e),r},tJ="function"==typeof structuredClone?(e,t)=>t&&("json"in t||"lossy"in t)?tH(tY(e,t)):structuredClone(e):(e,t)=>tH(tY(e,t));function tQ(e){let t=[],n=-1,r=0,i=0;for(;++n<e.length;){let o=e.charCodeAt(n),l="";if(37===o&&eI(e.charCodeAt(n+1))&&eI(e.charCodeAt(n+2)))i=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(l=String.fromCharCode(o));else if(o>55295&&o<57344){let t=e.charCodeAt(n+1);o<56320&&t>56319&&t<57344?(l=String.fromCharCode(o,t),i=1):l="�"}else l=String.fromCharCode(o);l&&(t.push(e.slice(r,n),encodeURIComponent(l)),r=n+i+1,l=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function tG(e,t){let n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function tX(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}let tZ=function(e){if(null==e)return t0;if("function"==typeof e)return t1(e);if("object"==typeof e)return Array.isArray(e)?function(e){let t=[],n=-1;for(;++n<e.length;)t[n]=tZ(e[n]);return t1(function(...e){let n=-1;for(;++n<t.length;)if(t[n].apply(this,e))return!0;return!1})}(e):t1(function(t){let n;for(n in e)if(t[n]!==e[n])return!1;return!0});if("string"==typeof e)return t1(function(t){return t&&t.type===e});throw Error("Expected function, string, or object as test")};function t1(e){return function(t,n,r){var i;return!!(null!==(i=t)&&"object"==typeof i&&"type"in i&&e.call(this,t,"number"==typeof n?n:void 0,r||void 0))}}function t0(){return!0}let t2=[];function t4(e,t,n,r){let i,o,l;"function"==typeof t&&"function"!=typeof n?(o=void 0,l=t,i=n):(o=t,l=n,i=r),function(e,t,n,r){let i;"function"==typeof t&&"function"!=typeof n?(r=n,n=t):i=t;let o=tZ(i),l=r?-1:1;(function e(i,a,s){let u=i&&"object"==typeof i?i:{};if("string"==typeof u.type){let e="string"==typeof u.tagName?u.tagName:"string"==typeof u.name?u.name:void 0;Object.defineProperty(c,"name",{value:"node ("+i.type+(e?"<"+e+">":"")+")"})}return c;function c(){var u;let c,f,p,h=t2;if((!t||o(i,a,s[s.length-1]||void 0))&&!1===(h=Array.isArray(u=n(i,s))?u:"number"==typeof u?[!0,u]:null==u?t2:[u])[0])return h;if("children"in i&&i.children&&i.children&&"skip"!==h[0])for(f=(r?i.children.length:-1)+l,p=s.concat(i);f>-1&&f<i.children.length;){if(!1===(c=e(i.children[f],f,p)())[0])return c;f="number"==typeof c[1]?c[1]:f+l}return h}})(e,void 0,[])()}(e,o,function(e,t){let n=t[t.length-1],r=n?n.children.indexOf(e):void 0;return l(e,r,n)},i)}function t3(e,t){let n=t.referenceType,r="]";if("collapsed"===n?r+="[]":"full"===n&&(r+="["+(t.label||t.identifier)+"]"),"imageReference"===t.type)return[{type:"text",value:"!["+t.alt+r}];let i=e.all(t),o=i[0];o&&"text"===o.type?o.value="["+o.value:i.unshift({type:"text",value:"["});let l=i[i.length-1];return l&&"text"===l.type?l.value+=r:i.push({type:"text",value:r}),i}function t5(e){let t=e.spread;return null==t?e.children.length>1:t}function t9(e,t,n){let r=0,i=e.length;if(t){let t=e.codePointAt(r);for(;9===t||32===t;)r++,t=e.codePointAt(r)}if(n){let t=e.codePointAt(i-1);for(;9===t||32===t;)i--,t=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}let t6={blockquote:function(e,t){let n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)},break:function(e,t){let n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:"\n"}]},code:function(e,t){let n=t.value?t.value+"\n":"",r={};t.lang&&(r.className=["language-"+t.lang]);let i={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(i.data={meta:t.meta}),e.patch(t,i),i={type:"element",tagName:"pre",properties:{},children:[i=e.applyData(t,i)]},e.patch(t,i),i},delete:function(e,t){let n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)},emphasis:function(e,t){let n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)},footnoteReference:function(e,t){let n;let r="string"==typeof e.options.clobberPrefix?e.options.clobberPrefix:"user-content-",i=String(t.identifier).toUpperCase(),o=tQ(i.toLowerCase()),l=e.footnoteOrder.indexOf(i),a=e.footnoteCounts.get(i);void 0===a?(a=0,e.footnoteOrder.push(i),n=e.footnoteOrder.length):n=l+1,a+=1,e.footnoteCounts.set(i,a);let s={type:"element",tagName:"a",properties:{href:"#"+r+"fn-"+o,id:r+"fnref-"+o+(a>1?"-"+a:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(n)}]};e.patch(t,s);let u={type:"element",tagName:"sup",properties:{},children:[s]};return e.patch(t,u),e.applyData(t,u)},heading:function(e,t){let n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)},html:function(e,t){if(e.options.allowDangerousHtml){let n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}},imageReference:function(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return t3(e,t);let i={src:tQ(r.url||""),alt:t.alt};null!==r.title&&void 0!==r.title&&(i.title=r.title);let o={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,o),e.applyData(t,o)},image:function(e,t){let n={src:tQ(t.url)};null!==t.alt&&void 0!==t.alt&&(n.alt=t.alt),null!==t.title&&void 0!==t.title&&(n.title=t.title);let r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)},inlineCode:function(e,t){let n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);let r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)},linkReference:function(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return t3(e,t);let i={href:tQ(r.url||"")};null!==r.title&&void 0!==r.title&&(i.title=r.title);let o={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,o),e.applyData(t,o)},link:function(e,t){let n={href:tQ(t.url)};null!==t.title&&void 0!==t.title&&(n.title=t.title);let r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)},listItem:function(e,t,n){let r=e.all(t),i=n?function(e){let t=!1;if("list"===e.type){t=e.spread||!1;let n=e.children,r=-1;for(;!t&&++r<n.length;)t=t5(n[r])}return t}(n):t5(t),o={},l=[];if("boolean"==typeof t.checked){let e;let n=r[0];n&&"element"===n.type&&"p"===n.tagName?e=n:(e={type:"element",tagName:"p",properties:{},children:[]},r.unshift(e)),e.children.length>0&&e.children.unshift({type:"text",value:" "}),e.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let a=-1;for(;++a<r.length;){let e=r[a];(i||0!==a||"element"!==e.type||"p"!==e.tagName)&&l.push({type:"text",value:"\n"}),"element"!==e.type||"p"!==e.tagName||i?l.push(e):l.push(...e.children)}let s=r[r.length-1];s&&(i||"element"!==s.type||"p"!==s.tagName)&&l.push({type:"text",value:"\n"});let u={type:"element",tagName:"li",properties:o,children:l};return e.patch(t,u),e.applyData(t,u)},list:function(e,t){let n={},r=e.all(t),i=-1;for("number"==typeof t.start&&1!==t.start&&(n.start=t.start);++i<r.length;){let e=r[i];if("element"===e.type&&"li"===e.tagName&&e.properties&&Array.isArray(e.properties.className)&&e.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}let o={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,o),e.applyData(t,o)},paragraph:function(e,t){let n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)},root:function(e,t){let n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)},strong:function(e,t){let n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)},table:function(e,t){let n=e.all(t),r=n.shift(),i=[];if(r){let n={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],n),i.push(n)}if(n.length>0){let r={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},o=$(t.children[1]),l=W(t.children[t.children.length-1]);o&&l&&(r.position={start:o,end:l}),i.push(r)}let o={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,o),e.applyData(t,o)},tableCell:function(e,t){let n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)},tableRow:function(e,t,n){let r=n?n.children:void 0,i=0===(r?r.indexOf(t):1)?"th":"td",o=n&&"table"===n.type?n.align:void 0,l=o?o.length:t.children.length,a=-1,s=[];for(;++a<l;){let n=t.children[a],r={},l=o?o[a]:void 0;l&&(r.align=l);let u={type:"element",tagName:i,properties:r,children:[]};n&&(u.children=e.all(n),e.patch(n,u),u=e.applyData(n,u)),s.push(u)}let u={type:"element",tagName:"tr",properties:{},children:e.wrap(s,!0)};return e.patch(t,u),e.applyData(t,u)},text:function(e,t){let n={type:"text",value:function(e){let t=String(e),n=/\r?\n|\r/g,r=n.exec(t),i=0,o=[];for(;r;)o.push(t9(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return o.push(t9(t.slice(i),i>0,!1)),o.join("")}(String(t.value))};return e.patch(t,n),e.applyData(t,n)},thematicBreak:function(e,t){let n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)},toml:t7,yaml:t7,definition:t7,footnoteDefinition:t7};function t7(){}let t8={}.hasOwnProperty,ne={};function nt(e,t){e.position&&(t.position=function(e){let t=$(e),n=W(e);if(t&&n)return{start:t,end:n}}(e))}function nn(e,t){let n=t;if(e&&e.data){let t=e.data.hName,r=e.data.hChildren,i=e.data.hProperties;"string"==typeof t&&("element"===n.type?n.tagName=t:n={type:"element",tagName:t,properties:{},children:"children"in n?n.children:[n]}),"element"===n.type&&i&&Object.assign(n.properties,tJ(i)),"children"in n&&n.children&&null!=r&&(n.children=r)}return n}function nr(e,t){let n=[],r=-1;for(t&&n.push({type:"text",value:"\n"});++r<e.length;)r&&n.push({type:"text",value:"\n"}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:"\n"}),n}function ni(e){let t=0,n=e.charCodeAt(t);for(;9===n||32===n;)t++,n=e.charCodeAt(t);return e.slice(t)}function no(e,t){let n=function(e,t){let n=t||ne,r=new Map,i=new Map,o={all:function(e){let t=[];if("children"in e){let n=e.children,r=-1;for(;++r<n.length;){let i=o.one(n[r],e);if(i){if(r&&"break"===n[r-1].type&&(Array.isArray(i)||"text"!==i.type||(i.value=ni(i.value)),!Array.isArray(i)&&"element"===i.type)){let e=i.children[0];e&&"text"===e.type&&(e.value=ni(e.value))}Array.isArray(i)?t.push(...i):t.push(i)}}}return t},applyData:nn,definitionById:r,footnoteById:i,footnoteCounts:new Map,footnoteOrder:[],handlers:{...t6,...n.handlers},one:function(e,t){let n=e.type,r=o.handlers[n];if(t8.call(o.handlers,n)&&r)return r(o,e,t);if(o.options.passThrough&&o.options.passThrough.includes(n)){if("children"in e){let{children:t,...n}=e,r=tJ(n);return r.children=o.all(e),r}return tJ(e)}return(o.options.unknownHandler||function(e,t){let n=t.data||{},r="value"in t&&!(t8.call(n,"hProperties")||t8.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)})(o,e,t)},options:n,patch:nt,wrap:nr};return t4(e,function(e){if("definition"===e.type||"footnoteDefinition"===e.type){let t="definition"===e.type?r:i,n=String(e.identifier).toUpperCase();t.has(n)||t.set(n,e)}}),o}(e,t),r=n.one(e,void 0),i=function(e){let t="string"==typeof e.options.clobberPrefix?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||tG,r=e.options.footnoteBackLabel||tX,i=e.options.footnoteLabel||"Footnotes",o=e.options.footnoteLabelTagName||"h2",l=e.options.footnoteLabelProperties||{className:["sr-only"]},a=[],s=-1;for(;++s<e.footnoteOrder.length;){let i=e.footnoteById.get(e.footnoteOrder[s]);if(!i)continue;let o=e.all(i),l=String(i.identifier).toUpperCase(),u=tQ(l.toLowerCase()),c=0,f=[],p=e.footnoteCounts.get(l);for(;void 0!==p&&++c<=p;){f.length>0&&f.push({type:"text",value:" "});let e="string"==typeof n?n:n(s,c);"string"==typeof e&&(e={type:"text",value:e}),f.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+u+(c>1?"-"+c:""),dataFootnoteBackref:"",ariaLabel:"string"==typeof r?r:r(s,c),className:["data-footnote-backref"]},children:Array.isArray(e)?e:[e]})}let h=o[o.length-1];if(h&&"element"===h.type&&"p"===h.tagName){let e=h.children[h.children.length-1];e&&"text"===e.type?e.value+=" ":h.children.push({type:"text",value:" "}),h.children.push(...f)}else o.push(...f);let d={type:"element",tagName:"li",properties:{id:t+"fn-"+u},children:e.wrap(o,!0)};e.patch(i,d),a.push(d)}if(0!==a.length)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...tJ(l),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:e.wrap(a,!0)},{type:"text",value:"\n"}]}}(n),o=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&o.children.push({type:"text",value:"\n"},i),o}function nl(e,t){return e&&"run"in e?async function(n,r){let i=no(n,{file:r,...t});await e.run(i,r)}:function(n,r){return no(n,{file:r,...e||t})}}function na(e){if(e)throw e}var ns=n(36329);function nu(e){if("object"!=typeof e||null===e)return!1;let t=Object.getPrototypeOf(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}let nc={basename:function(e,t){let n;if(void 0!==t&&"string"!=typeof t)throw TypeError('"ext" argument must be a string');nf(e);let r=0,i=-1,o=e.length;if(void 0===t||0===t.length||t.length>e.length){for(;o--;)if(47===e.codePointAt(o)){if(n){r=o+1;break}}else i<0&&(n=!0,i=o+1);return i<0?"":e.slice(r,i)}if(t===e)return"";let l=-1,a=t.length-1;for(;o--;)if(47===e.codePointAt(o)){if(n){r=o+1;break}}else l<0&&(n=!0,l=o+1),a>-1&&(e.codePointAt(o)===t.codePointAt(a--)?a<0&&(i=o):(a=-1,i=l));return r===i?i=l:i<0&&(i=e.length),e.slice(r,i)},dirname:function(e){let t;if(nf(e),0===e.length)return".";let n=-1,r=e.length;for(;--r;)if(47===e.codePointAt(r)){if(t){n=r;break}}else t||(t=!0);return n<0?47===e.codePointAt(0)?"/":".":1===n&&47===e.codePointAt(0)?"//":e.slice(0,n)},extname:function(e){let t;nf(e);let n=e.length,r=-1,i=0,o=-1,l=0;for(;n--;){let a=e.codePointAt(n);if(47===a){if(t){i=n+1;break}continue}r<0&&(t=!0,r=n+1),46===a?o<0?o=n:1!==l&&(l=1):o>-1&&(l=-1)}return o<0||r<0||0===l||1===l&&o===r-1&&o===i+1?"":e.slice(o,r)},join:function(...e){let t,n=-1;for(;++n<e.length;)nf(e[n]),e[n]&&(t=void 0===t?e[n]:t+"/"+e[n]);return void 0===t?".":function(e){nf(e);let t=47===e.codePointAt(0),n=function(e,t){let n,r,i="",o=0,l=-1,a=0,s=-1;for(;++s<=e.length;){if(s<e.length)n=e.codePointAt(s);else if(47===n)break;else n=47;if(47===n){if(l===s-1||1===a);else if(l!==s-1&&2===a){if(i.length<2||2!==o||46!==i.codePointAt(i.length-1)||46!==i.codePointAt(i.length-2)){if(i.length>2){if((r=i.lastIndexOf("/"))!==i.length-1){r<0?(i="",o=0):o=(i=i.slice(0,r)).length-1-i.lastIndexOf("/"),l=s,a=0;continue}}else if(i.length>0){i="",o=0,l=s,a=0;continue}}t&&(i=i.length>0?i+"/..":"..",o=2)}else i.length>0?i+="/"+e.slice(l+1,s):i=e.slice(l+1,s),o=s-l-1;l=s,a=0}else 46===n&&a>-1?a++:a=-1}return i}(e,!t);return 0!==n.length||t||(n="."),n.length>0&&47===e.codePointAt(e.length-1)&&(n+="/"),t?"/"+n:n}(t)},sep:"/"};function nf(e){if("string"!=typeof e)throw TypeError("Path must be a string. Received "+JSON.stringify(e))}let np={cwd:function(){return"/"}};function nh(e){return!!(null!==e&&"object"==typeof e&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&void 0===e.auth)}let nd=["history","path","basename","stem","extname","dirname"];class ng{constructor(e){let t,n;t=e?nh(e)?{path:e}:"string"==typeof e||function(e){return!!(e&&"object"==typeof e&&"byteLength"in e&&"byteOffset"in e)}(e)?{value:e}:e:{},this.cwd="cwd"in t?"":np.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<nd.length;){let e=nd[r];e in t&&void 0!==t[e]&&null!==t[e]&&(this[e]="history"===e?[...t[e]]:t[e])}for(n in t)nd.includes(n)||(this[n]=t[n])}get basename(){return"string"==typeof this.path?nc.basename(this.path):void 0}set basename(e){ny(e,"basename"),nm(e,"basename"),this.path=nc.join(this.dirname||"",e)}get dirname(){return"string"==typeof this.path?nc.dirname(this.path):void 0}set dirname(e){nv(this.basename,"dirname"),this.path=nc.join(e||"",this.basename)}get extname(){return"string"==typeof this.path?nc.extname(this.path):void 0}set extname(e){if(nm(e,"extname"),nv(this.dirname,"extname"),e){if(46!==e.codePointAt(0))throw Error("`extname` must start with `.`");if(e.includes(".",1))throw Error("`extname` cannot contain multiple dots")}this.path=nc.join(this.dirname,this.stem+(e||""))}get path(){return this.history[this.history.length-1]}set path(e){nh(e)&&(e=function(e){if("string"==typeof e)e=new URL(e);else if(!nh(e)){let t=TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if("file:"!==e.protocol){let e=TypeError("The URL must be of scheme file");throw e.code="ERR_INVALID_URL_SCHEME",e}return function(e){if(""!==e.hostname){let e=TypeError('File URL host must be "localhost" or empty on darwin');throw e.code="ERR_INVALID_FILE_URL_HOST",e}let t=e.pathname,n=-1;for(;++n<t.length;)if(37===t.codePointAt(n)&&50===t.codePointAt(n+1)){let e=t.codePointAt(n+2);if(70===e||102===e){let e=TypeError("File URL path must not include encoded / characters");throw e.code="ERR_INVALID_FILE_URL_PATH",e}}return decodeURIComponent(t)}(e)}(e)),ny(e,"path"),this.path!==e&&this.history.push(e)}get stem(){return"string"==typeof this.path?nc.basename(this.path,this.extname):void 0}set stem(e){ny(e,"stem"),nm(e,"stem"),this.path=nc.join(this.dirname||"",e+(this.extname||""))}fail(e,t,n){let r=this.message(e,t,n);throw r.fatal=!0,r}info(e,t,n){let r=this.message(e,t,n);return r.fatal=void 0,r}message(e,t,n){let r=new X(e,t,n);return this.path&&(r.name=this.path+":"+r.name,r.file=this.path),r.fatal=!1,this.messages.push(r),r}toString(e){return void 0===this.value?"":"string"==typeof this.value?this.value:new TextDecoder(e||void 0).decode(this.value)}}function nm(e,t){if(e&&e.includes(nc.sep))throw Error("`"+t+"` cannot be a path: did not expect `"+nc.sep+"`")}function ny(e,t){if(!e)throw Error("`"+t+"` cannot be empty")}function nv(e,t){if(!e)throw Error("Setting `"+t+"` requires `path` to be set too")}let nx=function(e){let t=this.constructor.prototype,n=t[e],r=function(){return n.apply(r,arguments)};return Object.setPrototypeOf(r,t),r},nb={}.hasOwnProperty;class nk extends nx{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=function(){let e=[],t={run:function(...t){let n=-1,r=t.pop();if("function"!=typeof r)throw TypeError("Expected function as last argument, not "+r);(function i(o,...l){let a=e[++n],s=-1;if(o){r(o);return}for(;++s<t.length;)(null===l[s]||void 0===l[s])&&(l[s]=t[s]);t=l,a?(function(e,t){let n;return function(...t){let o;let l=e.length>t.length;l&&t.push(r);try{o=e.apply(this,t)}catch(e){if(l&&n)throw e;return r(e)}l||(o&&o.then&&"function"==typeof o.then?o.then(i,r):o instanceof Error?r(o):i(o))};function r(e,...i){n||(n=!0,t(e,...i))}function i(e){r(null,e)}})(a,i)(...l):r(null,...l)})(null,...t)},use:function(n){if("function"!=typeof n)throw TypeError("Expected `middelware` to be a function, not "+n);return e.push(n),t}};return t}()}copy(){let e=new nk,t=-1;for(;++t<this.attachers.length;){let n=this.attachers[t];e.use(...n)}return e.data(ns(!0,{},this.namespace)),e}data(e,t){return"string"==typeof e?2==arguments.length?(n_("data",this.frozen),this.namespace[e]=t,this):nb.call(this.namespace,e)&&this.namespace[e]||void 0:e?(n_("data",this.frozen),this.namespace=e,this):this.namespace}freeze(){if(this.frozen)return this;for(;++this.freezeIndex<this.attachers.length;){let[e,...t]=this.attachers[this.freezeIndex];if(!1===t[0])continue;!0===t[0]&&(t[0]=void 0);let n=e.call(this,...t);"function"==typeof n&&this.transformers.use(n)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(e){this.freeze();let t=nE(e),n=this.parser||this.Parser;return nS("parse",n),n(String(t),t)}process(e,t){let n=this;return this.freeze(),nS("process",this.parser||this.Parser),nC("process",this.compiler||this.Compiler),t?r(void 0,t):new Promise(r);function r(r,i){let o=nE(e),l=n.parse(o);function a(e,n){e||!n?i(e):r?r(n):t(void 0,n)}n.run(l,o,function(e,t,r){if(e||!t||!r)return a(e);let i=n.stringify(t,r);"string"==typeof i||i&&"object"==typeof i&&"byteLength"in i&&"byteOffset"in i?r.value=i:r.result=i,a(e,r)})}}processSync(e){let t,n=!1;return this.freeze(),nS("processSync",this.parser||this.Parser),nC("processSync",this.compiler||this.Compiler),this.process(e,function(e,r){n=!0,na(e),t=r}),nA("processSync","process",n),t}run(e,t,n){nI(e),this.freeze();let r=this.transformers;return n||"function"!=typeof t||(n=t,t=void 0),n?i(void 0,n):new Promise(i);function i(i,o){let l=nE(t);r.run(e,l,function(t,r,l){let a=r||e;t?o(t):i?i(a):n(void 0,a,l)})}}runSync(e,t){let n,r=!1;return this.run(e,t,function(e,t){na(e),n=t,r=!0}),nA("runSync","run",r),n}stringify(e,t){this.freeze();let n=nE(t),r=this.compiler||this.Compiler;return nC("stringify",r),nI(e),r(e,n)}use(e,...t){let n=this.attachers,r=this.namespace;if(n_("use",this.frozen),null==e);else if("function"==typeof e)l(e,t);else if("object"==typeof e)Array.isArray(e)?o(e):i(e);else throw TypeError("Expected usable value, not `"+e+"`");return this;function i(e){if(!("plugins"in e)&&!("settings"in e))throw Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");o(e.plugins),e.settings&&(r.settings=ns(!0,r.settings,e.settings))}function o(e){let t=-1;if(null==e);else if(Array.isArray(e))for(;++t<e.length;)!function(e){if("function"==typeof e)l(e,[]);else if("object"==typeof e){if(Array.isArray(e)){let[t,...n]=e;l(t,n)}else i(e)}else throw TypeError("Expected usable value, not `"+e+"`")}(e[t]);else throw TypeError("Expected a list of plugins, not `"+e+"`")}function l(e,t){let r=-1,i=-1;for(;++r<n.length;)if(n[r][0]===e){i=r;break}if(-1===i)n.push([e,...t]);else if(t.length>0){let[r,...o]=t,l=n[i][1];nu(l)&&nu(r)&&(r=ns(!0,l,r)),n[i]=[e,r,...o]}}}}let nw=new nk().freeze();function nS(e,t){if("function"!=typeof t)throw TypeError("Cannot `"+e+"` without `parser`")}function nC(e,t){if("function"!=typeof t)throw TypeError("Cannot `"+e+"` without `compiler`")}function n_(e,t){if(t)throw Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function nI(e){if(!nu(e)||"string"!=typeof e.type)throw TypeError("Expected node, got `"+e+"`")}function nA(e,t,n){if(!n)throw Error("`"+e+"` finished async. Use `"+t+"` instead")}function nE(e){return e&&"object"==typeof e&&"message"in e&&"messages"in e?e:new ng(e)}let nP=[],nO={allowDangerousHtml:!0},nT=/^(https?|ircs?|mailto|xmpp)$/i,nj=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function nD(e){let t=function(e){let t=e.rehypePlugins||nP,n=e.remarkPlugins||nP,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...nO}:nO;return nw().use(tR).use(n).use(nl,r).use(t)}(e),n=function(e){let t=e.children||"",n=new ng;return"string"==typeof t&&(n.value=t),n}(e);return function(e,t){let n=t.allowedElements,r=t.allowElement,i=t.components,o=t.disallowedElements,l=t.skipHtml,a=t.unwrapDisallowed,s=t.urlTransform||nz;for(let e of nj)Object.hasOwn(t,e.from)&&(e.from,e.to&&e.to,e.id);return t.className&&(e={type:"element",tagName:"div",properties:{className:t.className},children:"root"===e.type?e.children:[e]}),t4(e,function(e,t,i){if("raw"===e.type&&i&&"number"==typeof t)return l?i.children.splice(t,1):i.children[t]={type:"text",value:e.value},t;if("element"===e.type){let t;for(t in ed)if(Object.hasOwn(ed,t)&&Object.hasOwn(e.properties,t)){let n=e.properties[t],r=ed[t];(null===r||r.includes(e.tagName))&&(e.properties[t]=s(String(n||""),t,e))}}if("element"===e.type){let l=n?!n.includes(e.tagName):!!o&&o.includes(e.tagName);if(!l&&r&&"number"==typeof t&&(l=!r(e,t,i)),l&&i&&"number"==typeof t)return a&&e.children?i.children.splice(t,1,...e.children):i.children.splice(t,1),t}}),function(e,t){var n,r,i;let o;if(!t||void 0===t.Fragment)throw TypeError("Expected `Fragment` in options");let l=t.filePath||void 0;if(t.development){if("function"!=typeof t.jsxDEV)throw TypeError("Expected `jsxDEV` in options when `development: true`");n=t.jsxDEV,o=function(e,t,r,i){let o=Array.isArray(r.children),a=$(e);return n(t,r,i,o,{columnNumber:a?a.column-1:void 0,fileName:l,lineNumber:a?a.line:void 0},void 0)}}else{if("function"!=typeof t.jsx)throw TypeError("Expected `jsx` in production options");if("function"!=typeof t.jsxs)throw TypeError("Expected `jsxs` in production options");r=t.jsx,i=t.jsxs,o=function(e,t,n,o){let l=Array.isArray(n.children)?i:r;return o?l(t,n,o):l(t,n)}}let a={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:o,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:l,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:!1!==t.passKeys,passNode:t.passNode||!1,schema:"svg"===t.space?F:L,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:!1!==t.tableCellAlignToStyle},s=el(a,e,void 0);return s&&"string"!=typeof s?s:a.create(e,a.Fragment,{children:s||void 0},void 0)}(e,{Fragment:eg.Fragment,components:i,ignoreInvalidStyle:!0,jsx:eg.jsx,jsxs:eg.jsxs,passKeys:!0,passNode:!0})}(t.runSync(t.parse(n),n),e)}function nz(e){let t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return -1===t||-1!==i&&t>i||-1!==n&&t>n||-1!==r&&t>r||nT.test(e.slice(0,t))?e:""}}}]);