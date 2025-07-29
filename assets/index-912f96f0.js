import{e as Ae,r as v,m as Se,h as ct,i as ut,w as lt,a as ft,b as $,c as Ee,t as dt,g as pt,o as ht,n as mt,d as gt,f as yt,j as It,k as wt,u as bt,R as _t,l as vt,p as Tt,q as At}from"./vendor-a1a62974.js";import{r as q,_ as V,C as B,a as G,E as Re,F as Pe,o as St,g as ke,b as Et,d as Rt,L as Pt,i as kt,c as de,e as Ct,v as Ot,f as Lt,h as Dt,j as Ft,k as Nt,l as xt,m as Mt,n as jt,p as D,q as F}from"./firebase-1b009ed5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Ce;const K=e=>Ce=e,Oe=Symbol();function ee(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var x;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(x||(x={}));function $t(){const e=Ae(!0),t=e.run(()=>v({}));let n=[],s=[];const r=Se({install(a){K(r),r._a=a,a.provide(Oe,r),a.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(a){return this._a?n.push(a):s.push(a),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return r}const Le=()=>{};function pe(e,t,n,s=Le){e.push(t);const r=()=>{const a=e.indexOf(t);a>-1&&(e.splice(a,1),s())};return!n&&pt()&&ht(r),r}function k(e,...t){e.slice().forEach(n=>{n(...t)})}const qt=e=>e(),he=Symbol(),J=Symbol();function te(e,t){e instanceof Map&&t instanceof Map?t.forEach((n,s)=>e.set(s,n)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const s=t[n],r=e[n];ee(r)&&ee(s)&&e.hasOwnProperty(n)&&!$(s)&&!Ee(s)?e[n]=te(r,s):e[n]=s}return e}const Vt=Symbol();function Bt(e){return!ee(e)||!Object.prototype.hasOwnProperty.call(e,Vt)}const{assign:_}=Object;function Ut(e){return!!($(e)&&e.effect)}function zt(e,t,n,s){const{state:r,actions:a,getters:o}=t,c=n.state.value[e];let u;function i(){c||(n.state.value[e]=r?r():{});const l=gt(n.state.value[e]);return _(l,a,Object.keys(o||{}).reduce((p,h)=>(p[h]=Se(yt(()=>{K(n);const E=n._s.get(e);return o[h].call(E,E)})),p),{}))}return u=De(e,i,t,n,s,!0),u}function De(e,t,n={},s,r,a){let o;const c=_({actions:{}},n),u={deep:!0};let i,l,p=[],h=[],E;const R=s.state.value[e];!a&&!R&&(s.state.value[e]={}),v({});let ue;function le(d){let f;i=l=!1,typeof d=="function"?(d(s.state.value[e]),f={type:x.patchFunction,storeId:e,events:E}):(te(s.state.value[e],d),f={type:x.patchObject,payload:d,storeId:e,events:E});const I=ue=Symbol();mt().then(()=>{ue===I&&(i=!0)}),l=!0,k(p,f,s.state.value[e])}const st=a?function(){const{state:f}=n,I=f?f():{};this.$patch(P=>{_(P,I)})}:Le;function at(){o.stop(),p=[],h=[],s._s.delete(e)}const fe=(d,f="")=>{if(he in d)return d[J]=f,d;const I=function(){K(s);const P=Array.from(arguments),O=[],Y=[];function ot(w){O.push(w)}function it(w){Y.push(w)}k(h,{args:P,name:I[J],store:b,after:ot,onError:it});let L;try{L=d.apply(this&&this.$id===e?this:b,P)}catch(w){throw k(Y,w),w}return L instanceof Promise?L.then(w=>(k(O,w),w)).catch(w=>(k(Y,w),Promise.reject(w))):(k(O,L),L)};return I[he]=!0,I[J]=f,I},rt={_p:s,$id:e,$onAction:pe.bind(null,h),$patch:le,$reset:st,$subscribe(d,f={}){const I=pe(p,d,f.detached,()=>P()),P=o.run(()=>lt(()=>s.state.value[e],O=>{(f.flush==="sync"?l:i)&&d({storeId:e,type:x.direct,events:E},O)},_({},u,f)));return I},$dispose:at},b=ft(rt);s._s.set(e,b);const C=(s._a&&s._a.runWithContext||qt)(()=>s._e.run(()=>(o=Ae()).run(()=>t({action:fe}))));for(const d in C){const f=C[d];if($(f)&&!Ut(f)||Ee(f))a||(R&&Bt(f)&&($(f)?f.value=R[d]:te(f,R[d])),s.state.value[e][d]=f);else if(typeof f=="function"){const I=fe(f,d);C[d]=I,c.actions[d]=f}}return _(b,C),_(dt(b),C),Object.defineProperty(b,"$state",{get:()=>s.state.value[e],set:d=>{le(f=>{_(f,d)})}}),s._p.forEach(d=>{_(b,o.run(()=>d({store:b,app:s._a,pinia:s,options:c})))}),R&&a&&n.hydrate&&n.hydrate(b.$state,R),i=!0,l=!0,b}/*! #__NO_SIDE_EFFECTS__ */function Gt(e,t,n){let s;const r=typeof t=="function";s=r?n:t;function a(o,c){const u=ct();return o=o||(u?ut(Oe,null):null),o&&K(o),o=Ce,o._s.has(e)||(r?De(e,t,s,o):zt(e,s,o)),o._s.get(e)}return a.$id=e,a}const Kt={__name:"App",setup(e){return(t,n)=>(It(),wt(bt(_t)))}},Ht="modulepreload",Wt=function(e){return"/Life-Syn2/"+e},me={},g=function(t,n,s){if(!n||n.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(n.map(a=>{if(a=Wt(a),a in me)return;me[a]=!0;const o=a.endsWith(".css"),c=o?'[rel="stylesheet"]':"";if(!!s)for(let l=r.length-1;l>=0;l--){const p=r[l];if(p.href===a&&(!o||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${c}`))return;const i=document.createElement("link");if(i.rel=o?"stylesheet":Ht,o||(i.as="script",i.crossOrigin=""),i.href=a,document.head.appendChild(i),o)return new Promise((l,p)=>{i.addEventListener("load",l),i.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>t()).catch(a=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a})},Fe=vt({history:Tt("/Life-Syn2/"),routes:[{path:"/",redirect:"/login"},{path:"/login",name:"login",component:()=>g(()=>import("./Login-8b3d3a6c.js"),["assets/Login-8b3d3a6c.js","assets/vendor-a1a62974.js","assets/firebase-1b009ed5.js","assets/alert-015a1aea.js","assets/sweetalert2.esm.all-9d2ad45a.js","assets/FloatingIcons-e36b23d3.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/FloatingIcons-5074b732.css","assets/Login-23d2bf00.css"])},{path:"/register",name:"register",component:()=>g(()=>import("./Login-8b3d3a6c.js"),["assets/Login-8b3d3a6c.js","assets/vendor-a1a62974.js","assets/firebase-1b009ed5.js","assets/alert-015a1aea.js","assets/sweetalert2.esm.all-9d2ad45a.js","assets/FloatingIcons-e36b23d3.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/FloatingIcons-5074b732.css","assets/Login-23d2bf00.css"])},{path:"/user/:uid",name:"user-profile",component:()=>g(()=>import("./UserProfile-3168adea.js"),["assets/UserProfile-3168adea.js","assets/firebase-1b009ed5.js","assets/sweetalert2.esm.all-9d2ad45a.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/vendor-a1a62974.js","assets/UserProfile-af172340.css"])},{path:"/",component:()=>g(()=>import("./Layout-8a7f3948.js"),["assets/Layout-8a7f3948.js","assets/vendor-a1a62974.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/firebase-1b009ed5.js","assets/sweetalert2.esm.all-9d2ad45a.js","assets/alert-015a1aea.js","assets/Layout-685cc831.css","assets/Profile-ad0529b2.css"]),children:[{path:"dashboard",name:"dashboard",component:()=>g(()=>import("./Dashboard-e37ef8b3.js"),["assets/Dashboard-e37ef8b3.js","assets/vendor-a1a62974.js","assets/firebase-1b009ed5.js","assets/auto-69f04699.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/FloatingIcons-e36b23d3.js","assets/FloatingIcons-5074b732.css","assets/Dashboard-bbd3b625.css"])},{path:"tasks",name:"tasks",component:()=>g(()=>import("./Tasks-3c92f829.js"),["assets/Tasks-3c92f829.js","assets/vendor-a1a62974.js","assets/firebase-1b009ed5.js","assets/alert-015a1aea.js","assets/sweetalert2.esm.all-9d2ad45a.js","assets/FloatingIcons-e36b23d3.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/FloatingIcons-5074b732.css","assets/Tasks-e3e78f33.css"])},{path:"calendar",name:"calendar",component:()=>g(()=>import("./Calendar-a8d7b367.js"),["assets/Calendar-a8d7b367.js","assets/vendor-a1a62974.js","assets/firebase-1b009ed5.js","assets/alert-015a1aea.js","assets/sweetalert2.esm.all-9d2ad45a.js","assets/FloatingIcons-e36b23d3.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/FloatingIcons-5074b732.css","assets/Calendar-a6536b51.css"])},{path:"wallet",name:"wallet",component:()=>g(()=>import("./Wallet-4aaf46b2.js"),["assets/Wallet-4aaf46b2.js","assets/vendor-a1a62974.js","assets/firebase-1b009ed5.js","assets/auto-69f04699.js","assets/alert-015a1aea.js","assets/sweetalert2.esm.all-9d2ad45a.js","assets/FloatingIcons-e36b23d3.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/FloatingIcons-5074b732.css","assets/Wallet-1434998d.css"])},{path:"meals",name:"meals",component:()=>g(()=>import("./Meals-f7235429.js"),["assets/Meals-f7235429.js","assets/vendor-a1a62974.js","assets/firebase-1b009ed5.js","assets/alert-015a1aea.js","assets/sweetalert2.esm.all-9d2ad45a.js","assets/FloatingIcons-e36b23d3.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/FloatingIcons-5074b732.css","assets/Meals-14aa4153.css"])},{path:"feed",name:"feed",component:()=>g(()=>import("./Feed-e13c7597.js"),["assets/Feed-e13c7597.js","assets/vendor-a1a62974.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/firebase-1b009ed5.js","assets/UserProfile-3168adea.js","assets/sweetalert2.esm.all-9d2ad45a.js","assets/UserProfile-af172340.css","assets/Chat-75e264c3.js","assets/FloatingIcons-e36b23d3.js","assets/FloatingIcons-5074b732.css","assets/Chat-d14806e7.css","assets/Feed-9f381961.css"])},{path:"chat",name:"chat",component:()=>g(()=>import("./Chat-75e264c3.js"),["assets/Chat-75e264c3.js","assets/vendor-a1a62974.js","assets/firebase-1b009ed5.js","assets/FloatingIcons-e36b23d3.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/FloatingIcons-5074b732.css","assets/Chat-d14806e7.css"])},{path:"profile",name:"profile",component:()=>g(()=>import("./Profile-a17405bc.js"),["assets/Profile-a17405bc.js","assets/vendor-a1a62974.js","assets/firebase-1b009ed5.js","assets/sweetalert2.esm.all-9d2ad45a.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/Profile-ad0529b2.css"])},{path:"chatIA",name:"chatIA",component:()=>g(()=>import("./IAchat-5538b078.js"),["assets/IAchat-5538b078.js","assets/vendor-a1a62974.js","assets/firebase-1b009ed5.js","assets/FloatingIcons-e36b23d3.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/FloatingIcons-5074b732.css","assets/IAchat-9fe3cfd4.css"])}]}]});Fe.beforeEach((e,t,n)=>{const s=localStorage.getItem("isLoggedIn")==="true",r=["/login","/register"],a=!r.includes(e.path);return!s&&a?n("/login"):s&&r.includes(e.path)?n("/dashboard"):n()});const Ne="@firebase/installations",se="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe=1e4,Me=`w:${se}`,je="FIS_v2",Yt="https://firebaseinstallations.googleapis.com/v1",Jt=60*60*1e3,Qt="installations",Xt="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},A=new Re(Qt,Xt,Zt);function $e(e){return e instanceof Pe&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe({projectId:e}){return`${Yt}/projects/${e}/installations`}function Ve(e){return{token:e.token,requestStatus:2,expiresIn:tn(e.expiresIn),creationTime:Date.now()}}async function Be(e,t){const s=(await t.json()).error;return A.create("request-failed",{requestName:e,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Ue({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function en(e,{refreshToken:t}){const n=Ue(e);return n.append("Authorization",nn(t)),n}async function ze(e){const t=await e();return t.status>=500&&t.status<600?e():t}function tn(e){return Number(e.replace("s","000"))}function nn(e){return`${je} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sn({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const s=qe(e),r=Ue(e),a=t.getImmediate({optional:!0});if(a){const i=await a.getHeartbeatsHeader();i&&r.append("x-firebase-client",i)}const o={fid:n,authVersion:je,appId:e.appId,sdkVersion:Me},c={method:"POST",headers:r,body:JSON.stringify(o)},u=await ze(()=>fetch(s,c));if(u.ok){const i=await u.json();return{fid:i.fid||n,registrationStatus:2,refreshToken:i.refreshToken,authToken:Ve(i.authToken)}}else throw await Be("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn=/^[cdef][\w-]{21}$/,ne="";function on(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=cn(e);return rn.test(n)?n:ne}catch{return ne}}function cn(e){return an(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ke=new Map;function He(e,t){const n=H(e);We(n,t),un(n,t)}function We(e,t){const n=Ke.get(e);if(n)for(const s of n)s(t)}function un(e,t){const n=ln();n&&n.postMessage({key:e,fid:t}),fn()}let T=null;function ln(){return!T&&"BroadcastChannel"in self&&(T=new BroadcastChannel("[Firebase] FID Change"),T.onmessage=e=>{We(e.data.key,e.data.fid)}),T}function fn(){Ke.size===0&&T&&(T.close(),T=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn="firebase-installations-database",pn=1,S="firebase-installations-store";let Q=null;function ae(){return Q||(Q=St(dn,pn,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(S)}}})),Q}async function U(e,t){const n=H(e),r=(await ae()).transaction(S,"readwrite"),a=r.objectStore(S),o=await a.get(n);return await a.put(t,n),await r.done,(!o||o.fid!==t.fid)&&He(e,t.fid),t}async function Ye(e){const t=H(e),s=(await ae()).transaction(S,"readwrite");await s.objectStore(S).delete(t),await s.done}async function W(e,t){const n=H(e),r=(await ae()).transaction(S,"readwrite"),a=r.objectStore(S),o=await a.get(n),c=t(o);return c===void 0?await a.delete(n):await a.put(c,n),await r.done,c&&(!o||o.fid!==c.fid)&&He(e,c.fid),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function re(e){let t;const n=await W(e.appConfig,s=>{const r=hn(s),a=mn(e,r);return t=a.registrationPromise,a.installationEntry});return n.fid===ne?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function hn(e){const t=e||{fid:on(),registrationStatus:0};return Je(t)}function mn(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(A.create("app-offline"));return{installationEntry:t,registrationPromise:r}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},s=gn(e,n);return{installationEntry:n,registrationPromise:s}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:yn(e)}:{installationEntry:t}}async function gn(e,t){try{const n=await sn(e,t);return U(e.appConfig,n)}catch(n){throw $e(n)&&n.customData.serverCode===409?await Ye(e.appConfig):await U(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function yn(e){let t=await ge(e.appConfig);for(;t.registrationStatus===1;)await Ge(100),t=await ge(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await re(e);return s||n}return t}function ge(e){return W(e,t=>{if(!t)throw A.create("installation-not-found");return Je(t)})}function Je(e){return In(e)?{fid:e.fid,registrationStatus:0}:e}function In(e){return e.registrationStatus===1&&e.registrationTime+xe<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wn({appConfig:e,heartbeatServiceProvider:t},n){const s=bn(e,n),r=en(e,n),a=t.getImmediate({optional:!0});if(a){const i=await a.getHeartbeatsHeader();i&&r.append("x-firebase-client",i)}const o={installation:{sdkVersion:Me,appId:e.appId}},c={method:"POST",headers:r,body:JSON.stringify(o)},u=await ze(()=>fetch(s,c));if(u.ok){const i=await u.json();return Ve(i)}else throw await Be("Generate Auth Token",u)}function bn(e,{fid:t}){return`${qe(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oe(e,t=!1){let n;const s=await W(e.appConfig,a=>{if(!Qe(a))throw A.create("not-registered");const o=a.authToken;if(!t&&Tn(o))return a;if(o.requestStatus===1)return n=_n(e,t),a;{if(!navigator.onLine)throw A.create("app-offline");const c=Sn(a);return n=vn(e,c),c}});return n?await n:s.authToken}async function _n(e,t){let n=await ye(e.appConfig);for(;n.authToken.requestStatus===1;)await Ge(100),n=await ye(e.appConfig);const s=n.authToken;return s.requestStatus===0?oe(e,t):s}function ye(e){return W(e,t=>{if(!Qe(t))throw A.create("not-registered");const n=t.authToken;return En(n)?{...t,authToken:{requestStatus:0}}:t})}async function vn(e,t){try{const n=await wn(e,t),s={...t,authToken:n};return await U(e.appConfig,s),n}catch(n){if($e(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Ye(e.appConfig);else{const s={...t,authToken:{requestStatus:0}};await U(e.appConfig,s)}throw n}}function Qe(e){return e!==void 0&&e.registrationStatus===2}function Tn(e){return e.requestStatus===2&&!An(e)}function An(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Jt}function Sn(e){const t={requestStatus:1,requestTime:Date.now()};return{...e,authToken:t}}function En(e){return e.requestStatus===1&&e.requestTime+xe<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rn(e){const t=e,{installationEntry:n,registrationPromise:s}=await re(t);return s?s.catch(console.error):oe(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pn(e,t=!1){const n=e;return await kn(n),(await oe(n,t)).token}async function kn(e){const{registrationPromise:t}=await re(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(e){if(!e||!e.options)throw X("App Configuration");if(!e.name)throw X("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw X(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function X(e){return A.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe="installations",On="installations-internal",Ln=e=>{const t=e.getProvider("app").getImmediate(),n=Cn(t),s=G(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},Dn=e=>{const t=e.getProvider("app").getImmediate(),n=G(t,Xe).getImmediate();return{getId:()=>Rn(n),getToken:r=>Pn(n,r)}};function Fn(){V(new B(Xe,Ln,"PUBLIC")),V(new B(On,Dn,"PRIVATE"))}Fn();q(Ne,se);q(Ne,se,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z="analytics",Nn="firebase_id",xn="origin",Mn=60*1e3,jn="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ie="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m=new Pt("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},y=new Re("analytics","Analytics",$n);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(e){if(!e.startsWith(ie)){const t=y.create("invalid-gtag-resource",{gtagURL:e});return m.warn(t.message),""}return e}function Ze(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function Vn(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function Bn(e,t){const n=Vn("firebase-js-sdk-policy",{createScriptURL:qn}),s=document.createElement("script"),r=`${ie}?l=${e}&id=${t}`;s.src=n?n==null?void 0:n.createScriptURL(r):r,s.async=!0,document.head.appendChild(s)}function Un(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function zn(e,t,n,s,r,a){const o=s[r];try{if(o)await t[o];else{const u=(await Ze(n)).find(i=>i.measurementId===r);u&&await t[u.appId]}}catch(c){m.error(c)}e("config",r,a)}async function Gn(e,t,n,s,r){try{let a=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const c=await Ze(n);for(const u of o){const i=c.find(p=>p.measurementId===u),l=i&&t[i.appId];if(l)a.push(l);else{a=[];break}}}a.length===0&&(a=Object.values(t)),await Promise.all(a),e("event",s,r||{})}catch(a){m.error(a)}}function Kn(e,t,n,s){async function r(a,...o){try{if(a==="event"){const[c,u]=o;await Gn(e,t,n,c,u)}else if(a==="config"){const[c,u]=o;await zn(e,t,n,s,c,u)}else if(a==="consent"){const[c,u]=o;e("consent",c,u)}else if(a==="get"){const[c,u,i]=o;e("get",c,u,i)}else if(a==="set"){const[c]=o;e("set",c)}else e(a,...o)}catch(c){m.error(c)}}return r}function Hn(e,t,n,s,r){let a=function(...o){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(a=window[r]),window[r]=Kn(a,e,t,n),{gtagCore:a,wrappedGtag:window[r]}}function Wn(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(ie)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn=30,Jn=1e3;class Qn{constructor(t={},n=Jn){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const et=new Qn;function Xn(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Zn(e){var o;const{appId:t,apiKey:n}=e,s={method:"GET",headers:Xn(n)},r=jn.replace("{app-id}",t),a=await fetch(r,s);if(a.status!==200&&a.status!==304){let c="";try{const u=await a.json();(o=u.error)!=null&&o.message&&(c=u.error.message)}catch{}throw y.create("config-fetch-failed",{httpStatus:a.status,responseMessage:c})}return a.json()}async function es(e,t=et,n){const{appId:s,apiKey:r,measurementId:a}=e.options;if(!s)throw y.create("no-app-id");if(!r){if(a)return{measurementId:a,appId:s};throw y.create("no-api-key")}const o=t.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new ss;return setTimeout(async()=>{c.abort()},n!==void 0?n:Mn),tt({appId:s,apiKey:r,measurementId:a},o,c,t)}async function tt(e,{throttleEndTimeMillis:t,backoffCount:n},s,r=et){var c;const{appId:a,measurementId:o}=e;try{await ts(s,t)}catch(u){if(o)return m.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:a,measurementId:o};throw u}try{const u=await Zn(e);return r.deleteThrottleMetadata(a),u}catch(u){const i=u;if(!ns(i)){if(r.deleteThrottleMetadata(a),o)return m.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${i==null?void 0:i.message}]`),{appId:a,measurementId:o};throw u}const l=Number((c=i==null?void 0:i.customData)==null?void 0:c.httpStatus)===503?de(n,r.intervalMillis,Yn):de(n,r.intervalMillis),p={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return r.setThrottleMetadata(a,p),m.debug(`Calling attemptFetch again in ${l} millis`),tt(e,p,s,r)}}function ts(e,t){return new Promise((n,s)=>{const r=Math.max(t-Date.now(),0),a=setTimeout(n,r);e.addEventListener(()=>{clearTimeout(a),s(y.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function ns(e){if(!(e instanceof Pe)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class ss{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function as(e,t,n,s,r){if(r&&r.global){e("event",n,s);return}else{const a=await t,o={...s,send_to:a};e("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rs(){if(Ct())try{await Ot()}catch(e){return m.warn(y.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return m.warn(y.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function os(e,t,n,s,r,a,o){const c=es(e);c.then(h=>{n[h.measurementId]=h.appId,e.options.measurementId&&h.measurementId!==e.options.measurementId&&m.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${h.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(h=>m.error(h)),t.push(c);const u=rs().then(h=>{if(h)return s.getId()}),[i,l]=await Promise.all([c,u]);Wn(a)||Bn(a,i.measurementId),r("js",new Date);const p=(o==null?void 0:o.config)??{};return p[xn]="firebase",p.update=!0,l!=null&&(p[Nn]=l),r("config",i.measurementId,p),i.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(t){this.app=t}_delete(){return delete M[this.app.options.appId],Promise.resolve()}}let M={},Ie=[];const we={};let Z="dataLayer",cs="gtag",be,nt,_e=!1;function us(){const e=[];if(kt()&&e.push("This is a browser extension environment."),Lt()||e.push("Cookies are not available."),e.length>0){const t=e.map((s,r)=>`(${r+1}) ${s}`).join(" "),n=y.create("invalid-analytics-context",{errorInfo:t});m.warn(n.message)}}function ls(e,t,n){us();const s=e.options.appId;if(!s)throw y.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)m.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw y.create("no-api-key");if(M[s]!=null)throw y.create("already-exists",{id:s});if(!_e){Un(Z);const{wrappedGtag:a,gtagCore:o}=Hn(M,Ie,we,Z,cs);nt=a,be=o,_e=!0}return M[s]=os(e,Ie,we,t,be,Z,n),new is(e)}function fs(e=Et()){e=ke(e);const t=G(e,z);return t.isInitialized()?t.getImmediate():ds(e)}function ds(e,t={}){const n=G(e,z);if(n.isInitialized()){const r=n.getImmediate();if(Rt(t,n.getOptions()))return r;throw y.create("already-initialized")}return n.initialize({options:t})}function ps(e,t,n,s){e=ke(e),as(nt,M[e.app.options.appId],t,n,s).catch(r=>m.error(r))}const ve="@firebase/analytics",Te="0.10.18";function hs(){V(new B(z,(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),r=t.getProvider("installations-internal").getImmediate();return ls(s,r,n)},"PUBLIC")),V(new B("analytics-internal",e,"PRIVATE")),q(ve,Te),q(ve,Te,"esm2020");function e(t){try{const n=t.getProvider(z).getImmediate();return{logEvent:(s,r,a)=>ps(n,s,r,a)}}catch(n){throw y.create("interop-component-reg-failed",{reason:n})}}}hs();const ms={apiKey:"AIzaSyDmgGYuFnK7tPu-UoAkv4hG-SCN7RAyy-g",authDomain:"lifesync-3cb2f.firebaseapp.com",projectId:"lifesync-3cb2f",storageBucket:"lifesync-3cb2f.firebasestorage.app",messagingSenderId:"922990801055",appId:"1:922990801055:web:a78240af9ed2764ccb72aa",measurementId:"G-266MRY0GQT",databaseURL:"https://lifesync-3cb2f-default-rtdb.firebaseio.com"},j=Dt(ms);fs(j);const gs=Ft(j),N=Nt(j);xt(j);const vs=Mt(j),ys=Gt("search",()=>{const e=v([]),t=v([]),n=v([]),s=v([]),r=v([]);let a=!1;function o(){a||(a=!0,jt(gs,c=>{if(!c)return;const u=c.uid;D(F(N,"transactions"),i=>{e.value=i.docs.map(l=>({id:l.id,...l.data()})).filter(l=>l.userId===u)}),D(F(N,"meals"),i=>{t.value=i.docs.map(l=>({id:l.id,...l.data()})).filter(l=>l.userId===u)}),D(F(N,"tasks"),i=>{n.value=i.docs.map(l=>({id:l.id,...l.data()})).filter(l=>l.userId===u)}),D(F(N,"notes"),i=>{s.value=i.docs.map(l=>({id:l.id,...l.data()})).filter(l=>l.userId===u)}),D(F(N,"events"),i=>{r.value=i.docs.map(l=>({id:l.id,...l.data()})).filter(l=>l.userId===u)})}))}return{transactions:e,meals:t,tasks:n,notes:s,events:r,syncAll:o}}),ce=At(Kt);ce.use($t());ce.use(Fe);const Is=ys();Is.syncAll();ce.mount("#app");export{g as _,gs as a,vs as b,N as d,ys as u};
