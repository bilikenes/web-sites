"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1106],{67037:(e,t,o)=>{Object.defineProperty(t,"$",{enumerable:!0,get:function(){return r}});let a=o(3692);function r(e){let{createServerReference:t}=o(26916);return t(e,a.callServer)}},54719:(e,t,o)=>{/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=o(15791),r=o(93831),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},l=r.useSyncExternalStore,n=a.useRef,s=a.useEffect,u=a.useMemo,c=a.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,o,a,r){var f=n(null);if(null===f.current){var m={hasValue:!1,value:null};f.current=m}else m=f.current;var p=l(e,(f=u(function(){function e(e){if(!s){if(s=!0,l=e,e=a(e),void 0!==r&&m.hasValue){var t=m.value;if(r(t,e))return n=t}return n=e}if(t=n,i(l,e))return t;var o=a(e);return void 0!==r&&r(t,o)?(l=e,t):(l=e,n=o)}var l,n,s=!1,u=void 0===o?null:o;return[function(){return e(t())},null===u?void 0:function(){return e(u())}]},[t,o,a,r]))[0],f[1]);return s(function(){m.hasValue=!0,m.value=p},[p]),c(p),p}},60743:(e,t,o)=>{e.exports=o(54719)},70567:(e,t,o)=>{o.d(t,{Xd:()=>v});var a=o(15791),r=o(24617),i=o(66468);let l={maxColorCount:10},n=`#version 300 es
precision highp float;

in mediump vec2 v_imageUV;
in mediump vec2 v_objectUV;
out vec4 fragColor;

uniform sampler2D u_image;
uniform float u_time;
uniform mediump float u_imageAspectRatio;

uniform vec4 u_colorBack;
uniform vec4 u_colors[${l.maxColorCount}];
uniform float u_colorsCount;

uniform float u_angle;
uniform float u_noise;
uniform float u_innerGlow;
uniform float u_outerGlow;
uniform float u_contour;

#define TWO_PI 6.28318530718
#define PI 3.14159265358979323846

float getImgFrame(vec2 uv, float th) {
  float frame = 1.;
  frame *= smoothstep(0., th, uv.y);
  frame *= 1. - smoothstep(1. - th, 1., uv.y);
  frame *= smoothstep(0., th, uv.x);
  frame *= 1. - smoothstep(1. - th, 1., uv.x);
  return frame;
}

float circle(vec2 uv, vec2 c, vec2 r) {
  return 1. - smoothstep(r[0], r[1], length(uv - c));
}

float lst(float edge0, float edge1, float x) {
  return clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
}

float sst(float edge0, float edge1, float x) {
  return smoothstep(edge0, edge1, x);
}

float shadowShape(vec2 uv, float t, float contour) {
  vec2 scaledUV = uv;

  // base shape tranjectory
  float posY = mix(-1., 2., t);

  // scaleX when it's moving down
  scaledUV.y -= .5;
  float mainCircleScale = sst(0., .8, posY) * lst(1.4, .9, posY);
  scaledUV *= vec2(1., 1. + 1.5 * mainCircleScale);
  scaledUV.y += .5;

  // base shape
  float innerR = .4;
  float outerR = 1. - .3 * (sst(.1, .2, t) * (1. - sst(.2, .5, t)));
  float s = circle(scaledUV, vec2(.5, posY - .2), vec2(innerR, outerR));
  float shapeSizing = sst(.2, .3, t) * sst(.6, .3, t);
  s = pow(s, 1.4);
  s *= 1.2;

  // flat gradient to take over the shadow shape
  float topFlattener = 0.;
  {
    float pos = posY - uv.y;
    float edge = 1.2;
    topFlattener = lst(-.4, 0., pos) * (1. - sst(.0, edge, pos));
    topFlattener = pow(topFlattener, 3.);
    float topFlattenerMixer = (1. - sst(.0, .3, pos));
    s = mix(topFlattener, s, topFlattenerMixer);
  }

  // apple right circle
  {
    float visibility = sst(.6, .7, t) * (1. - sst(.8, .9, t));
    float angle = -2. -t * TWO_PI;
    float rightCircle = circle(uv, vec2(.95 - .2 * cos(angle), .4 - .1 * sin(angle)), vec2(.15, .3));
    rightCircle *= visibility;
    s = mix(s, 0., rightCircle);
  }

  // apple top circle
  {
    float topCircle = circle(uv, vec2(.5, .19), vec2(.05, .25));
    topCircle += 2. * contour * circle(uv, vec2(.5, .19), vec2(.2, .5));
    float visibility = .55 * sst(.2, .3, t) * (1. - sst(.3, .45, t));
    topCircle *= visibility;
    s = mix(s, 0., topCircle);
  }

  float leafMask = circle(uv, vec2(.53, .13), vec2(.08, .19));
  leafMask = mix(leafMask, 0., 1. - sst(.4, .54, uv.x));
  leafMask = mix(0., leafMask, sst(.0, .2, uv.y));
  leafMask *= (sst(.5, 1.1, posY) * sst(1.5, 1.3, posY));
  s += leafMask;

  // apple bottom circle
  {
    float visibility = sst(.0, .4, t) * (1. - sst(.6, .8, t));
    s = mix(s, 0., visibility * circle(uv, vec2(.52, .92), vec2(.09, .25)));
  }

  // random balls that are invisible if apple logo is selected
  {
    float pos = sst(.0, .6, t) * (1. - sst(.6, 1., t));
    s = mix(s, .5, circle(uv, vec2(.0, 1.2 - .5 * pos), vec2(.1, .3)));
    s = mix(s, .0, circle(uv, vec2(1., .5 + .5 * pos), vec2(.1, .3)));

    s = mix(s, 1., circle(uv, vec2(.95, .2 + .2 * sst(.3, .4, t) * sst(.7, .5, t)), vec2(.07, .22)));
    s = mix(s, 1., circle(uv, vec2(.95, .2 + .2 * sst(.3, .4, t) * (1. - sst(.5, .7, t))), vec2(.07, .22)));
    s /= max(1e-4, sst(1., .85, uv.y));
  }

  s = clamp(0., 1., s);
  return s;
}


void main() {
  vec2 uv = v_objectUV + .5;
  uv.y = 1. - uv.y;

  vec2 imgUV = v_imageUV;
  imgUV -= .5;
  imgUV *= 0.5714285714285714;
  imgUV += .5;
  float imgSoftFrame = getImgFrame(imgUV, .03);

  vec4 img = texture(u_image, imgUV);
  if (img.a == 0.) {
    fragColor = u_colorBack;
    return;
  }

  float t = .1 * u_time;
  t -= .3;

  float tCopy = t + 1. / 3.;
  float tCopy2 = t + 2. / 3.;

  t = mod(t, 1.);
  tCopy = mod(tCopy, 1.);
  tCopy2 = mod(tCopy2, 1.);

  vec2 animationUV = imgUV - vec2(.5);
  float angle = -u_angle * PI / 180.;
  float cosA = cos(angle);
  float sinA = sin(angle);
  animationUV = vec2(
  animationUV.x * cosA - animationUV.y * sinA,
  animationUV.x * sinA + animationUV.y * cosA
  ) + vec2(.5);

  float shape = img[0];
  float outerBlur = 1. - mix(1., img[1], shape);
  float innerBlur = mix(img[1], 0., shape);
  float contour = mix(img[2], 0., shape);

  outerBlur *= imgSoftFrame;

  float shadow = shadowShape(animationUV, t, innerBlur);
  float shadowCopy = shadowShape(animationUV, tCopy, innerBlur);
  float shadowCopy2 = shadowShape(animationUV, tCopy2, innerBlur);

  float inner = .8 + .8 * innerBlur;
  inner = mix(inner, 0., shadow);
  inner = mix(inner, 0., shadowCopy);
  inner = mix(inner, 0., shadowCopy2);

  inner *= mix(0., 2., u_innerGlow);

  inner += (u_contour * 2.) * contour;
  inner = min(1., inner);
  inner *= (1. - shape);

  float outer = 0.;
  {
    t *= 3.;
    t = mod(t - .1, 1.);

    outer = .9 * pow(outerBlur, .8);
    float y = mod(animationUV.y - t, 1.);
    float animatedMask = sst(.3, .65, y) * (1. - sst(.65, 1., y));
    animatedMask = .5 + animatedMask;
    outer *= animatedMask;
    outer *= mix(0., 5., pow(u_outerGlow, 2.));
    outer *= imgSoftFrame;
  }

  inner = pow(inner, 1.2);
  float heat = clamp(inner + outer, 0., 1.);

  heat += (.005 + .35 * u_noise) * (fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453123) - .5);

  float mixer = heat * u_colorsCount;
  vec4 gradient = u_colors[0];
  gradient.rgb *= gradient.a;
  float outerShape = 0.;
  for (int i = 1; i < ${l.maxColorCount+1}; i++) {
    if (i > int(u_colorsCount)) break;
    float m = clamp(mixer - float(i - 1), 0., 1.);
    if (i == 1) {
      outerShape = m;
    }
    vec4 c = u_colors[i - 1];
    c.rgb *= c.a;
    gradient = mix(gradient, c, m);
  }

  vec3 color = gradient.rgb * outerShape;
  float opacity = gradient.a * outerShape;

  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  color = color + bgColor * (1.0 - opacity);
  opacity = opacity + u_colorBack.a * (1.0 - opacity);

  color += .02 * (fract(sin(dot(uv + 1., vec2(12.9898, 78.233))) * 43758.5453123) - .5);

  fragColor = vec4(color, opacity);
}
`;function s(e){let t=document.createElement("canvas");return new Promise((o,a)=>{let r=new Image;r.crossOrigin="anonymous",r.addEventListener("load",()=>{("string"==typeof e?e.endsWith(".svg"):"image/svg+xml"===e.type)&&(r.width=1e3,r.height=1e3);let i=r.naturalWidth/r.naturalHeight,l=Math.floor(150),n=Math.ceil(2.5*l),s=1e3,u=1e3;i>1?u=Math.floor(1e3/i):s=Math.floor(1e3*i),t.width=s+2*n,t.height=u+2*n;let c=t.getContext("2d",{willReadFrequently:!0});if(!c)throw Error("Failed to get canvas 2d context");c.fillStyle="white",c.fillRect(0,0,t.width,t.height),c.filter="grayscale(100%) blur("+l+"px)",c.drawImage(r,n,n,s,u);let f=c.getImageData(0,0,t.width,t.height).data;c.fillRect(0,0,t.width,t.height),c.filter="grayscale(100%) blur("+Math.round(.12*l)+"px)",c.drawImage(r,n,n,s,u);let m=c.getImageData(0,0,t.width,t.height).data;c.fillRect(0,0,t.width,t.height),c.filter="grayscale(100%) blur(5px)",c.drawImage(r,n,n,s,u);let p=c.getImageData(0,0,t.width,t.height).data,g=c.createImageData(t.width,t.height),d=t.width*t.height;for(let e=0;e<d;e++){let t=4*e;g.data[t]=p[t],g.data[t+1]=f[t],g.data[t+2]=m[t],g.data[t+3]=255}c.putImageData(g,0,0),t.toBlob(e=>{if(!e){a(Error("Failed to create PNG blob"));return}o({blob:e})},"image/png")}),r.addEventListener("error",()=>{a(Error("Failed to load image"))}),r.src="string"==typeof e?e:URL.createObjectURL(e)})}var u=o(85183);let c="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",f=e=>"object"==typeof e&&"function"==typeof e.then,m=[],p=(e,t)=>(function(e,t=null){for(let o of(null===t&&(t=[e]),m))if(function(e,t){if(e===t)return!0;if(!e||!t)return!1;let o=e.length;if(t.length!==o)return!1;for(let a=0;a<o;a++)if(e[a]!==t[a])return!1;return!0}(t,o.keys)){if(Object.prototype.hasOwnProperty.call(o,"error"))throw o.error;if(Object.prototype.hasOwnProperty.call(o,"response"))return o.response;throw o.promise}let o={keys:t,promise:(f(e)?e:e(...t)).then(e=>{o.response=e}).catch(e=>o.error=e)};throw m.push(o),o.promise})(e,t);var g=o(28289),d=o(69797);let h={name:"Default",params:{...i.q$,scale:.75,speed:1,frame:0,contour:.5,angle:0,noise:0,innerGlow:.5,outerGlow:.5,colorBack:"#000000",colors:["#11206a","#1f3ba2","#2f63e7","#6bd7ff","#ffe679","#ff991e","#ff4c00"]}};({...i.q$});let v=(0,a.memo)(function({speed:e=h.params.speed,frame:t=h.params.frame,image:o="",contour:l=h.params.contour,angle:f=h.params.angle,noise:m=h.params.noise,innerGlow:g=h.params.innerGlow,outerGlow:v=h.params.outerGlow,colorBack:y=h.params.colorBack,colors:b=h.params.colors,suspendWhenProcessingImage:w=!1,fit:_=h.params.fit,offsetX:x=h.params.offsetX,offsetY:C=h.params.offsetY,originX:A=h.params.originX,originY:U=h.params.originY,rotation:S=h.params.rotation,scale:V=h.params.scale,worldHeight:E=h.params.worldHeight,worldWidth:k=h.params.worldWidth,...I}){let M;let R="string"==typeof o?o:o.src,[B,F]=(0,a.useState)(c);M=w&&"undefined"!=typeof window?p(()=>s(R).then(e=>URL.createObjectURL(e.blob)),[R,"heatmap"]):B,(0,a.useLayoutEffect)(()=>{if(w)return;if(!R){F(c);return}let e=!0;return s(R).then(t=>{e&&F(URL.createObjectURL(t.blob))}),()=>{e=!1}},[R,w]);let O=(0,a.useMemo)(()=>({u_image:M,u_contour:l,u_angle:f,u_noise:m,u_innerGlow:g,u_outerGlow:v,u_colorBack:(0,u.f)(y),u_colors:b.map(u.f),u_colorsCount:b.length,u_fit:i.MI[_],u_offsetX:x,u_offsetY:C,u_originX:A,u_originY:U,u_rotation:S,u_scale:V,u_worldHeight:E,u_worldWidth:k}),[e,t,l,f,m,g,v,b,y,M,_,x,C,A,U,S,V,E,k]);return(0,d.jsx)(r.b,{...I,speed:e,frame:t,fragmentShader:n,mipmaps:["u_image"],uniforms:O})},g.r)},83934:(e,t,o)=>{o.d(t,{Ue:()=>m});let a=e=>{let t;let o=new Set,a=(e,a)=>{let r="function"==typeof e?e(t):e;if(!Object.is(r,t)){let e=t;t=(null!=a?a:"object"!=typeof r||null===r)?r:Object.assign({},t,r),o.forEach(o=>o(t,e))}},r=()=>t,i={setState:a,getState:r,getInitialState:()=>l,subscribe:e=>(o.add(e),()=>o.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),o.clear()}},l=t=e(a,r,i);return i},r=e=>e?a(e):a;var i=o(15791),l=o(60743);let{useDebugValue:n}=i,{useSyncExternalStoreWithSelector:s}=l,u=!1,c=e=>e,f=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let t="function"==typeof e?r(e):e,o=(e,o)=>(function(e,t=c,o){o&&!u&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),u=!0);let a=s(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,o);return n(a),a})(t,e,o);return Object.assign(o,t),o},m=e=>e?f(e):f}}]);