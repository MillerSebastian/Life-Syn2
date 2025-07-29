const rv=()=>{};/**
 * @license
 * Copyright 2017 Google LLC
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
 */const fg={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
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
 */const V=function(n,e){if(!n)throw Hi(e)},Hi=function(n){return new Error("Firebase Database ("+fg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
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
 */const pg=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},iv=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},vh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,u=l?n[i+2]:0,d=s>>2,f=(s&3)<<4|a>>4;let m=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(m=64)),r.push(t[d],t[f],t[m],t[g])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(pg(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):iv(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const u=i<n.length?t[n.charAt(i)]:64;++i;const f=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||u==null||f==null)throw new sv;const m=s<<2|a>>4;if(r.push(m),u!==64){const g=a<<4&240|u>>2;if(r.push(g),f!==64){const T=u<<6&192|f;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class sv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const mg=function(n){const e=pg(n);return vh.encodeByteArray(e,!0)},Ya=function(n){return mg(n).replace(/\./g,"")},Ja=function(n){try{return vh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
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
 */function ov(n){return _g(void 0,n)}function _g(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!av(t)||(n[t]=_g(n[t],e[t]));return n}function av(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
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
 */function gg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof globalThis<"u")return globalThis;throw new Error("Unable to locate globalThis object.")}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const cv=()=>gg().__FIREBASE_DEFAULTS__,lv=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},uv=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Ja(n[1]);return e&&JSON.parse(e)},Bc=()=>{try{return rv()||cv()||lv()||uv()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},yg=n=>{var e,t;return(t=(e=Bc())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Ah=n=>{const e=yg(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Ig=()=>{var n;return(n=Bc())==null?void 0:n.config},Eg=n=>{var e;return(e=Bc())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Yt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Bt(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Oo(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function Rh(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...n},a="";return[Ya(JSON.stringify(t)),Ya(JSON.stringify(o)),a].join(".")}const Ks={};function hv(){const n={prod:[],emulator:[]};for(const e of Object.keys(Ks))Ks[e]?n.emulator.push(e):n.prod.push(e);return n}function dv(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let bp=!1;function qc(n,e){if(typeof window>"u"||typeof document>"u"||!Bt(window.location.host)||Ks[n]===e||Ks[n]||bp)return;Ks[n]=e;function t(m){return`__firebase__banner__${m}`}const r="__firebase__banner",s=hv().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function a(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,g){m.setAttribute("width","24"),m.setAttribute("id",g),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{bp=!0,o()},m}function d(m,g){m.setAttribute("id",g),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function f(){const m=dv(r),g=t("text"),T=document.getElementById(g)||document.createElement("span"),N=t("learnmore"),P=document.getElementById(N)||document.createElement("a"),M=t("preprendIcon"),B=document.getElementById(M)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const U=m.element;a(U),d(P,N);const j=u();l(B,M),U.append(B,T,P,j),document.body.appendChild(U)}s?(T.innerText="Preview backend disconnected.",B.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(B.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,T.innerText="Preview backend running in this workspace."),T.setAttribute("id",g)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Sh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xe())}function Tg(){var e;const n=(e=Bc())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(globalThis.process)==="[object process]"}catch{return!1}}function fv(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function pv(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function wg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mv(){const n=xe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function vg(){return fg.NODE_ADMIN===!0}function Ag(){return!Tg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Rg(){return!Tg()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function Sg(){try{return typeof indexedDB=="object"}catch{return!1}}function _v(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(t){e(t)}})}function Dx(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const gv="FirebaseError";class qt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=gv,Object.setPrototypeOf(this,qt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mo.prototype.create)}}class Mo{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?yv(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new qt(i,a,r)}}function yv(n,e){return n.replace(Iv,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Iv=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
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
 */function lo(n){return JSON.parse(n)}function Be(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Cg=function(n){let e={},t={},r={},i="";try{const s=n.split(".");e=lo(Ja(s[0])||""),t=lo(Ja(s[1])||""),i=s[2],r=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:r,signature:i}},Ev=function(n){const e=Cg(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Tv=function(n){const e=Cg(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Gt(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Ti(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Xa(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Za(n,e,t){const r={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(r[i]=e.call(t,n[i],i,n));return r}function It(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(Pp(s)&&Pp(o)){if(!It(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Pp(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Qi(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Bs(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function qs(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class wv{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let f=0;f<16;f++)r[f]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let f=16;f<80;f++){const m=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(m<<1|m>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,d;for(let f=0;f<80;f++){f<40?f<20?(u=a^s&(o^a),d=1518500249):(u=s^o^a,d=1859775393):f<60?(u=s&o|a&(s|o),d=2400959708):(u=s^o^a,d=3395469782);const m=(i<<5|i>>>27)+u+l+d+r[f]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=m}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<t;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function vv(n,e){const t=new Av(n,e);return t.subscribe.bind(t)}class Av{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Rv(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=nu),i.error===void 0&&(i.error=nu),i.complete===void 0&&(i.complete=nu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Rv(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function nu(){}function wi(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Sv=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,V(r<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Gc=function(n){let e=0;for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
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
 */const Cv=1e3,bv=2,Pv=4*60*60*1e3,Nv=.5;function xx(n,e=Cv,t=bv){const r=e*Math.pow(t,n),i=Math.round(Nv*r*(Math.random()-.5)*2);return Math.min(Pv,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function re(n){return n&&n._delegate?n._delegate:n}class sn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const hr="[DEFAULT]";/**
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
 */class kv{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Yt;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xv(e))try{this.getOrInitializeService({instanceIdentifier:hr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=hr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hr){return this.instances.has(e)}getOptions(e=hr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Dv(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=hr){return this.component?this.component.multipleInstances?e:hr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Dv(n){return n===hr?void 0:n}function xv(n){return n.instantiationMode==="EAGER"}/**
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
 */class Vv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new kv(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */var te;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(te||(te={}));const Ov={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},Mv=te.INFO,Lv={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},Fv=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Lv[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wc{constructor(e){this.name=e,this._logLevel=Mv,this._logHandler=Fv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ov[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const Uv=(n,e)=>e.some(t=>n instanceof t);let Np,kp;function Bv(){return Np||(Np=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qv(){return kp||(kp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bg=new WeakMap,Su=new WeakMap,Pg=new WeakMap,ru=new WeakMap,Ch=new WeakMap;function Gv(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(Vn(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&bg.set(t,n)}).catch(()=>{}),Ch.set(e,n),e}function Wv(n){if(Su.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Su.set(n,e)}let Cu={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Su.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Pg.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Vn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function zv(n){Cu=n(Cu)}function jv(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(iu(this),e,...t);return Pg.set(r,e.sort?e.sort():[e]),Vn(r)}:qv().includes(n)?function(...e){return n.apply(iu(this),e),Vn(bg.get(this))}:function(...e){return Vn(n.apply(iu(this),e))}}function $v(n){return typeof n=="function"?jv(n):(n instanceof IDBTransaction&&Wv(n),Uv(n,Bv())?new Proxy(n,Cu):n)}function Vn(n){if(n instanceof IDBRequest)return Gv(n);if(ru.has(n))return ru.get(n);const e=$v(n);return e!==n&&(ru.set(n,e),Ch.set(e,n)),e}const iu=n=>Ch.get(n);function Kv(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=Vn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Vn(o.result),l.oldVersion,l.newVersion,Vn(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Hv=["get","getKey","getAll","getAllKeys","count"],Qv=["put","add","delete","clear"],su=new Map;function Dp(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(su.get(e))return su.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Qv.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Hv.includes(t)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),i&&l.done]))[0]};return su.set(e,s),s}zv(n=>({...n,get:(e,t,r)=>Dp(e,t)||n.get(e,t,r),has:(e,t)=>!!Dp(e,t)||n.has(e,t)}));/**
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
 */class Yv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Jv(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Jv(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bu="@firebase/app",xp="0.14.0";/**
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
 */const on=new Wc("@firebase/app"),Xv="@firebase/app-compat",Zv="@firebase/analytics-compat",eA="@firebase/analytics",tA="@firebase/app-check-compat",nA="@firebase/app-check",rA="@firebase/auth",iA="@firebase/auth-compat",sA="@firebase/database",oA="@firebase/data-connect",aA="@firebase/database-compat",cA="@firebase/functions",lA="@firebase/functions-compat",uA="@firebase/installations",hA="@firebase/installations-compat",dA="@firebase/messaging",fA="@firebase/messaging-compat",pA="@firebase/performance",mA="@firebase/performance-compat",_A="@firebase/remote-config",gA="@firebase/remote-config-compat",yA="@firebase/storage",IA="@firebase/storage-compat",EA="@firebase/firestore",TA="@firebase/ai",wA="@firebase/firestore-compat",vA="firebase",AA="12.0.0";/**
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
 */const ec="[DEFAULT]",RA={[bu]:"fire-core",[Xv]:"fire-core-compat",[eA]:"fire-analytics",[Zv]:"fire-analytics-compat",[nA]:"fire-app-check",[tA]:"fire-app-check-compat",[rA]:"fire-auth",[iA]:"fire-auth-compat",[sA]:"fire-rtdb",[oA]:"fire-data-connect",[aA]:"fire-rtdb-compat",[cA]:"fire-fn",[lA]:"fire-fn-compat",[uA]:"fire-iid",[hA]:"fire-iid-compat",[dA]:"fire-fcm",[fA]:"fire-fcm-compat",[pA]:"fire-perf",[mA]:"fire-perf-compat",[_A]:"fire-rc",[gA]:"fire-rc-compat",[yA]:"fire-gcs",[IA]:"fire-gcs-compat",[EA]:"fire-fst",[wA]:"fire-fst-compat",[TA]:"fire-vertex","fire-js":"fire-js",[vA]:"fire-js-all"};/**
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
 */const tc=new Map,SA=new Map,Pu=new Map;function Vp(n,e){try{n.container.addComponent(e)}catch(t){on.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Bn(n){const e=n.name;if(Pu.has(e))return on.debug(`There were multiple attempts to register component ${e}.`),!1;Pu.set(e,n);for(const t of tc.values())Vp(t,n);for(const t of SA.values())Vp(t,n);return!0}function Gr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function CA(n,e,t=ec){Gr(n,e).clearInstance(t)}function nt(n){return n==null?!1:n.settings!==void 0}/**
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
 */const bA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},On=new Mo("app","Firebase",bA);/**
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
 */class PA{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new sn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw On.create("app-deleted",{appName:this._name})}}/**
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
 */const Jn=AA;function NA(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:ec,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw On.create("bad-app-name",{appName:String(i)});if(t||(t=Ig()),!t)throw On.create("no-options");const s=tc.get(i);if(s){if(It(t,s.options)&&It(r,s.config))return s;throw On.create("duplicate-app",{appName:i})}const o=new Vv(i);for(const l of Pu.values())o.addComponent(l);const a=new PA(t,r,o);return tc.set(i,a),a}function zc(n=ec){const e=tc.get(n);if(!e&&n===ec&&Ig())return NA();if(!e)throw On.create("no-app",{appName:n});return e}function gt(n,e,t){let r=RA[n]??n;t&&(r+=`-${t}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),on.warn(o.join(" "));return}Bn(new sn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const kA="firebase-heartbeat-database",DA=1,uo="firebase-heartbeat-store";let ou=null;function Ng(){return ou||(ou=Kv(kA,DA,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(uo)}catch(t){console.warn(t)}}}}).catch(n=>{throw On.create("idb-open",{originalErrorMessage:n.message})})),ou}async function xA(n){try{const t=(await Ng()).transaction(uo),r=await t.objectStore(uo).get(kg(n));return await t.done,r}catch(e){if(e instanceof qt)on.warn(e.message);else{const t=On.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});on.warn(t.message)}}}async function Op(n,e){try{const r=(await Ng()).transaction(uo,"readwrite");await r.objectStore(uo).put(e,kg(n)),await r.done}catch(t){if(t instanceof qt)on.warn(t.message);else{const r=On.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});on.warn(r.message)}}}function kg(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const VA=1024,OA=30;class MA{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new FA(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Mp();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>OA){const o=UA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){on.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Mp(),{heartbeatsToSend:r,unsentEntries:i}=LA(this._heartbeatsCache.heartbeats),s=Ya(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return on.warn(t),""}}}function Mp(){return new Date().toISOString().substring(0,10)}function LA(n,e=VA){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Lp(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Lp(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class FA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Sg()?_v().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await xA(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Op(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Op(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Lp(n){return Ya(JSON.stringify({version:2,heartbeats:n})).length}function UA(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function BA(n){Bn(new sn("platform-logger",e=>new Yv(e),"PRIVATE")),Bn(new sn("heartbeat",e=>new MA(e),"PRIVATE")),gt(bu,xp,n),gt(bu,xp,"esm2020"),gt("fire-js","")}BA("");var qA="firebase",GA="12.0.0";/**
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
 */gt(qA,GA,"app");function Dg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const WA=Dg,xg=new Mo("auth","Firebase",Dg());/**
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
 */const nc=new Wc("@firebase/auth");function zA(n,...e){nc.logLevel<=te.WARN&&nc.warn(`Auth (${Jn}): ${n}`,...e)}function Ma(n,...e){nc.logLevel<=te.ERROR&&nc.error(`Auth (${Jn}): ${n}`,...e)}/**
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
 */function Et(n,...e){throw Ph(n,...e)}function Ct(n,...e){return Ph(n,...e)}function bh(n,e,t){const r={...WA(),[e]:t};return new Mo("auth","Firebase",r).create(e,{appName:n.name})}function nn(n){return bh(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function jA(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Et(n,"argument-error"),bh(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ph(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return xg.create(n,...e)}function z(n,e,...t){if(!n)throw Ph(e,...t)}function Jt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ma(e),new Error(e)}function an(n,e){n||Jt(e)}/**
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
 */function rc(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function Vg(){return Fp()==="http:"||Fp()==="https:"}function Fp(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function $A(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Vg()||pv()||"connection"in navigator)?navigator.onLine:!0}function KA(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Lo{constructor(e,t){this.shortDelay=e,this.longDelay=t,an(t>e,"Short delay should be less than long delay!"),this.isMobile=Sh()||wg()}get(){return $A()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Nh(n,e){an(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Og{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Jt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Jt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Jt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const HA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const QA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],YA=new Lo(3e4,6e4);function Wt(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function zt(n,e,t,r,i={}){return Mg(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Qi({key:n.config.apiKey,...o}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const u={method:e,headers:l,...s};return fv()||(u.referrerPolicy="no-referrer"),n.emulatorConfig&&Bt(n.emulatorConfig.host)&&(u.credentials="include"),Og.fetch()(await Lg(n,n.config.apiHost,t,a),u)})}async function Mg(n,e,t){n._canInitEmulator=!1;const r={...HA,...e};try{const i=new XA(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Aa(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Aa(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Aa(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Aa(n,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw bh(n,d,u);Et(n,d)}}catch(i){if(i instanceof qt)throw i;Et(n,"network-request-failed",{message:String(i)})}}async function Fo(n,e,t,r,i={}){const s=await zt(n,e,t,r,i);return"mfaPendingCredential"in s&&Et(n,"multi-factor-auth-required",{_serverResponse:s}),s}async function Lg(n,e,t,r){const i=`${e}${t}?${r}`,s=n,o=s.config.emulator?Nh(n.config,i):`${n.config.apiScheme}://${i}`;return QA.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function JA(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class XA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ct(this.auth,"network-request-failed")),YA.get())})}}function Aa(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Ct(n,e,r);return i.customData._tokenResponse=t,i}function Up(n){return n!==void 0&&n.enterprise!==void 0}class ZA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return JA(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function eR(n,e){return zt(n,"GET","/v2/recaptchaConfig",Wt(n,e))}/**
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
 */async function tR(n,e){return zt(n,"POST","/v1/accounts:delete",e)}async function ic(n,e){return zt(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Hs(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function nR(n,e=!1){const t=re(n),r=await t.getIdToken(e),i=kh(r);z(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Hs(au(i.auth_time)),issuedAtTime:Hs(au(i.iat)),expirationTime:Hs(au(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function au(n){return Number(n)*1e3}function kh(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Ma("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ja(t);return i?JSON.parse(i):(Ma("Failed to decode base64 JWT payload"),null)}catch(i){return Ma("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Bp(n){const e=kh(n);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ho(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof qt&&rR(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function rR({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class iR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Nu{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hs(this.lastLoginAt),this.creationTime=Hs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function sc(n){var f;const e=n.auth,t=await n.getIdToken(),r=await ho(n,ic(e,{idToken:t}));z(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];n._notifyReloadListener(i);const s=(f=i.providerUserInfo)!=null&&f.length?Fg(i.providerUserInfo):[],o=oR(n.providerData,s),a=n.isAnonymous,l=!(n.email&&i.passwordHash)&&!(o!=null&&o.length),u=a?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Nu(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(n,d)}async function sR(n){const e=re(n);await sc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function oR(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Fg(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function aR(n,e){const t=await Mg(n,{},async()=>{const r=Qi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=await Lg(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return n.emulatorConfig&&Bt(n.emulatorConfig.host)&&(l.credentials="include"),Og.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function cR(n,e){return zt(n,"POST","/v2/accounts:revokeToken",Wt(n,e))}/**
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
 */class di{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Bp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){z(e.length!==0,"internal-error");const t=Bp(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await aR(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new di;return r&&(z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new di,this.toJSON())}_performRefresh(){return Jt("not implemented")}}/**
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
 */function wn(n,e){z(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class At{constructor({uid:e,auth:t,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new iR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Nu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await ho(this,this.stsTokenManager.getToken(this.auth,e));return z(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return nR(this,e)}reload(){return sR(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new At({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await sc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(nt(this.auth.app))return Promise.reject(nn(this.auth));const e=await this.getIdToken();return await ho(this,tR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,i=t.email??void 0,s=t.phoneNumber??void 0,o=t.photoURL??void 0,a=t.tenantId??void 0,l=t._redirectEventId??void 0,u=t.createdAt??void 0,d=t.lastLoginAt??void 0,{uid:f,emailVerified:m,isAnonymous:g,providerData:T,stsTokenManager:N}=t;z(f&&N,e,"internal-error");const P=di.fromJSON(this.name,N);z(typeof f=="string",e,"internal-error"),wn(r,e.name),wn(i,e.name),z(typeof m=="boolean",e,"internal-error"),z(typeof g=="boolean",e,"internal-error"),wn(s,e.name),wn(o,e.name),wn(a,e.name),wn(l,e.name),wn(u,e.name),wn(d,e.name);const M=new At({uid:f,auth:e,email:i,emailVerified:m,displayName:r,isAnonymous:g,photoURL:o,phoneNumber:s,tenantId:a,stsTokenManager:P,createdAt:u,lastLoginAt:d});return T&&Array.isArray(T)&&(M.providerData=T.map(B=>({...B}))),l&&(M._redirectEventId=l),M}static async _fromIdTokenResponse(e,t,r=!1){const i=new di;i.updateFromServerResponse(t);const s=new At({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await sc(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];z(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Fg(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new di;a.updateFromIdToken(r);const l=new At({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Nu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
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
 */const qp=new Map;function Xt(n){an(n instanceof Function,"Expected a class definition");let e=qp.get(n);return e?(an(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,qp.set(n,e),e)}/**
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
 */class Ug{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ug.type="NONE";const Gp=Ug;/**
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
 */function La(n,e,t){return`firebase:${n}:${e}:${t}`}class fi{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=La(this.userKey,i.apiKey,s),this.fullPersistenceKey=La("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ic(this.auth,{idToken:e}).catch(()=>{});return t?At._fromGetAccountInfoResponse(this.auth,t,e):null}return At._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new fi(Xt(Gp),e,r);const i=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Xt(Gp);const o=La(r,e.config.apiKey,e.name);let a=null;for(const u of t)try{const d=await u._get(o);if(d){let f;if(typeof d=="string"){const m=await ic(e,{idToken:d}).catch(()=>{});if(!m)break;f=await At._fromGetAccountInfoResponse(e,m,d)}else f=At._fromJSON(e,d);u!==s&&(a=f),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new fi(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new fi(s,e,r))}}/**
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
 */function Wp(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Wg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Bg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(jg(e))return"Blackberry";if($g(e))return"Webos";if(qg(e))return"Safari";if((e.includes("chrome/")||Gg(e))&&!e.includes("edge/"))return"Chrome";if(zg(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Bg(n=xe()){return/firefox\//i.test(n)}function qg(n=xe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Gg(n=xe()){return/crios\//i.test(n)}function Wg(n=xe()){return/iemobile/i.test(n)}function zg(n=xe()){return/android/i.test(n)}function jg(n=xe()){return/blackberry/i.test(n)}function $g(n=xe()){return/webos/i.test(n)}function Dh(n=xe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function lR(n=xe()){var e;return Dh(n)&&!!((e=window.navigator)!=null&&e.standalone)}function uR(){return mv()&&document.documentMode===10}function Kg(n=xe()){return Dh(n)||zg(n)||$g(n)||jg(n)||/windows phone/i.test(n)||Wg(n)}/**
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
 */function Hg(n,e=[]){let t;switch(n){case"Browser":t=Wp(xe());break;case"Worker":t=`${Wp(xe())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Jn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class hR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function dR(n,e={}){return zt(n,"GET","/v2/passwordPolicy",Wt(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const fR=6;class pR{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??fR,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class mR{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zp(this),this.idTokenSubscription=new zp(this),this.beforeStateQueue=new hR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Xt(t)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await fi.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ic(this,{idToken:e}),r=await At._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(nt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await sc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=KA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(nt(this.app))return Promise.reject(nn(this));const t=e?re(e):null;return t&&z(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return nt(this.app)?Promise.reject(nn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return nt(this.app)?Promise.reject(nn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Xt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await dR(this),t=new pR(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Mo("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await cR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Xt(e)||this._popupRedirectResolver;z(t,this,"argument-error"),this.redirectPersistenceManager=await fi.create(this,[Xt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Hg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(nt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&zA(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function dn(n){return re(n)}class zp{constructor(e){this.auth=e,this.observer=null,this.addObserver=vv(t=>this.observer=t)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let jc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function _R(n){jc=n}function Qg(n){return jc.loadJS(n)}function gR(){return jc.recaptchaEnterpriseScript}function yR(){return jc.gapiScript}function IR(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class ER{constructor(){this.enterprise=new TR}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class TR{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const wR="recaptcha-enterprise",Yg="NO_RECAPTCHA";class vR{constructor(e){this.type=wR,this.auth=dn(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{eR(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new ZA(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Up(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(Yg)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new ER().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!t&&Up(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=gR();l.length!==0&&(l+=a),Qg(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Ns(n,e,t,r=!1,i=!1){const s=new vR(n);let o;if(i)o=Yg;else try{o=await s.verify(t)}catch{o=await s.verify(t,!0)}const a={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function oc(n,e,t,r,i){var s,o;if(i==="EMAIL_PASSWORD_PROVIDER")if((s=n._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Ns(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Ns(n,e,t,t==="getOobCode");return r(n,l)}else return Promise.reject(a)});else if(i==="PHONE_PROVIDER")if((o=n._getRecaptchaConfig())!=null&&o.isProviderEnabled("PHONE_PROVIDER")){const a=await Ns(n,e,t);return r(n,a).catch(async l=>{var u;if(((u=n._getRecaptchaConfig())==null?void 0:u.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(l.code==="auth/missing-recaptcha-token"||l.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const d=await Ns(n,e,t,!1,!0);return r(n,d)}return Promise.reject(l)})}else{const a=await Ns(n,e,t,!1,!0);return r(n,a)}else return Promise.reject(i+" provider is not supported.")}/**
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
 */function AR(n,e){const t=Gr(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(It(s,e??{}))return i;Et(i,"already-initialized")}return t.initialize({options:e})}function RR(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Xt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function SR(n,e,t){const r=dn(n);z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=Jg(e),{host:o,port:a}=CR(e),l=a===null?"":`:${a}`,u={url:`${s}//${o}${l}/`},d=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){z(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),z(It(u,r.config.emulator)&&It(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Bt(o)?(Oo(`${s}//${o}${l}`),qc("Auth",!0)):i||bR()}function Jg(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function CR(n){const e=Jg(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:jp(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:jp(o)}}}function jp(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function bR(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class xh{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Jt("not implemented")}_getIdTokenResponse(e){return Jt("not implemented")}_linkToIdToken(e,t){return Jt("not implemented")}_getReauthenticationResolver(e){return Jt("not implemented")}}async function PR(n,e){return zt(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function NR(n,e){return Fo(n,"POST","/v1/accounts:signInWithPassword",Wt(n,e))}async function kR(n,e){return zt(n,"POST","/v1/accounts:sendOobCode",Wt(n,e))}async function DR(n,e){return kR(n,e)}/**
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
 */async function xR(n,e){return Fo(n,"POST","/v1/accounts:signInWithEmailLink",Wt(n,e))}async function VR(n,e){return Fo(n,"POST","/v1/accounts:signInWithEmailLink",Wt(n,e))}/**
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
 */class fo extends xh{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new fo(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new fo(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return oc(e,t,"signInWithPassword",NR,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return xR(e,{email:this._email,oobCode:this._password});default:Et(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return oc(e,r,"signUpPassword",PR,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return VR(e,{idToken:t,email:this._email,oobCode:this._password});default:Et(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function pi(n,e){return Fo(n,"POST","/v1/accounts:signInWithIdp",Wt(n,e))}/**
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
 */const OR="http://localhost";class Cr extends xh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Cr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Et("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=t;if(!r||!i)return null;const o=new Cr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return pi(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,pi(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,pi(e,t)}buildRequest(){const e={requestUri:OR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Qi(t)}return e}}/**
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
 */function MR(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function LR(n){const e=Bs(qs(n)).link,t=e?Bs(qs(e)).deep_link_id:null,r=Bs(qs(n)).deep_link_id;return(r?Bs(qs(r)).link:null)||r||t||e||n}class Vh{constructor(e){const t=Bs(qs(e)),r=t.apiKey??null,i=t.oobCode??null,s=MR(t.mode??null);z(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=LR(e);try{return new Vh(t)}catch{return null}}}/**
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
 */class Yi{constructor(){this.providerId=Yi.PROVIDER_ID}static credential(e,t){return fo._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Vh.parseLink(t);return z(r,"argument-error"),fo._fromEmailAndCode(e,r.code,r.tenantId)}}Yi.PROVIDER_ID="password";Yi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Yi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Oh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Uo extends Oh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Sn extends Uo{constructor(){super("facebook.com")}static credential(e){return Cr._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Sn.credential(e.oauthAccessToken)}catch{return null}}}Sn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Sn.PROVIDER_ID="facebook.com";/**
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
 */class Cn extends Uo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Cr._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Cn.credential(t,r)}catch{return null}}}Cn.GOOGLE_SIGN_IN_METHOD="google.com";Cn.PROVIDER_ID="google.com";/**
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
 */class bn extends Uo{constructor(){super("github.com")}static credential(e){return Cr._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch{return null}}}bn.GITHUB_SIGN_IN_METHOD="github.com";bn.PROVIDER_ID="github.com";/**
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
 */class Pn extends Uo{constructor(){super("twitter.com")}static credential(e,t){return Cr._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Pn.credential(t,r)}catch{return null}}}Pn.TWITTER_SIGN_IN_METHOD="twitter.com";Pn.PROVIDER_ID="twitter.com";/**
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
 */async function FR(n,e){return Fo(n,"POST","/v1/accounts:signUp",Wt(n,e))}/**
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
 */class br{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await At._fromIdTokenResponse(e,r,i),o=$p(r);return new br({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=$p(r);return new br({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function $p(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class ac extends qt{constructor(e,t,r,i){super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ac.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new ac(e,t,r,i)}}function Xg(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ac._fromErrorAndOperation(n,s,e,r):s})}async function UR(n,e,t=!1){const r=await ho(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return br._forOperation(n,"link",r)}/**
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
 */async function BR(n,e,t=!1){const{auth:r}=n;if(nt(r.app))return Promise.reject(nn(r));const i="reauthenticate";try{const s=await ho(n,Xg(r,i,e,n),t);z(s.idToken,r,"internal-error");const o=kh(s.idToken);z(o,r,"internal-error");const{sub:a}=o;return z(n.uid===a,r,"user-mismatch"),br._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Et(r,"user-mismatch"),s}}/**
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
 */async function Zg(n,e,t=!1){if(nt(n.app))return Promise.reject(nn(n));const r="signIn",i=await Xg(n,r,e),s=await br._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function qR(n,e){return Zg(dn(n),e)}/**
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
 */function GR(n,e,t){var r;z(((r=t.url)==null?void 0:r.length)>0,n,"invalid-continue-uri"),z(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),z(typeof t.linkDomain>"u"||t.linkDomain.length>0,n,"invalid-hosting-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.linkDomain=t.linkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(z(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(z(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
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
 */async function ey(n){const e=dn(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Vx(n,e,t){const r=dn(n),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&GR(r,i,t),await oc(r,i,"getOobCode",DR,"EMAIL_PASSWORD_PROVIDER")}async function Ox(n,e,t){if(nt(n.app))return Promise.reject(nn(n));const r=dn(n),o=await oc(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",FR,"EMAIL_PASSWORD_PROVIDER").catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&ey(n),l}),a=await br._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function Mx(n,e,t){return nt(n.app)?Promise.reject(nn(n)):qR(re(n),Yi.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ey(n),r})}/**
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
 */async function WR(n,e){return zt(n,"POST","/v1/accounts:createAuthUri",Wt(n,e))}/**
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
 */async function Lx(n,e){const t=Vg()?rc():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:i}=await WR(re(n),r);return i||[]}function zR(n,e,t,r){return re(n).onIdTokenChanged(e,t,r)}function jR(n,e,t){return re(n).beforeAuthStateChanged(e,t)}function Fx(n,e,t,r){return re(n).onAuthStateChanged(e,t,r)}function Ux(n){return re(n).signOut()}const cc="__sak";/**
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
 */class ty{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(cc,"1"),this.storage.removeItem(cc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const $R=1e3,KR=10;class ny extends ty{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Kg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);uR()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,KR):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},$R)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ny.type="LOCAL";const HR=ny;/**
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
 */class ry extends ty{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ry.type="SESSION";const iy=ry;/**
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
 */function QR(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class $c{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new $c(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(t.origin,s)),l=await QR(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$c.receivers=[];/**
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
 */function Mh(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class YR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Mh("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ot(){return window}function JR(n){Ot().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function sy(){return typeof Ot().WorkerGlobalScope<"u"&&typeof Ot().importScripts=="function"}async function XR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ZR(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function eS(){return sy()?self:null}/**
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
 */const oy="firebaseLocalStorageDb",tS=1,lc="firebaseLocalStorage",ay="fbase_key";class Bo{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Kc(n,e){return n.transaction([lc],e?"readwrite":"readonly").objectStore(lc)}function nS(){const n=indexedDB.deleteDatabase(oy);return new Bo(n).toPromise()}function ku(){const n=indexedDB.open(oy,tS);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(lc,{keyPath:ay})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(lc)?e(r):(r.close(),await nS(),e(await ku()))})})}async function Kp(n,e,t){const r=Kc(n,!0).put({[ay]:e,value:t});return new Bo(r).toPromise()}async function rS(n,e){const t=Kc(n,!1).get(e),r=await new Bo(t).toPromise();return r===void 0?null:r.value}function Hp(n,e){const t=Kc(n,!0).delete(e);return new Bo(t).toPromise()}const iS=800,sS=3;class cy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ku(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>sS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return sy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$c._getInstance(eS()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await XR(),!this.activeServiceWorker)return;this.sender=new YR(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ZR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ku();return await Kp(e,cc,"1"),await Hp(e,cc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Kp(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>rS(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Hp(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Kc(i,!1).getAll();return new Bo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),iS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}cy.type="LOCAL";const oS=cy;new Lo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
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
 */function ly(n,e){return e?Xt(e):(z(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Lh extends xh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return pi(e,this._buildIdpRequest())}_linkToIdToken(e,t){return pi(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return pi(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function aS(n){return Zg(n.auth,new Lh(n),n.bypassAuthState)}function cS(n){const{auth:e,user:t}=n;return z(t,e,"internal-error"),BR(t,new Lh(n),n.bypassAuthState)}async function lS(n){const{auth:e,user:t}=n;return z(t,e,"internal-error"),UR(t,new Lh(n),n.bypassAuthState)}/**
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
 */class uy{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return aS;case"linkViaPopup":case"linkViaRedirect":return lS;case"reauthViaPopup":case"reauthViaRedirect":return cS;default:Et(this.auth,"internal-error")}}resolve(e){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const uS=new Lo(2e3,1e4);async function Bx(n,e,t){if(nt(n.app))return Promise.reject(Ct(n,"operation-not-supported-in-this-environment"));const r=dn(n);jA(n,e,Oh);const i=ly(r,t);return new Ir(r,"signInViaPopup",e,i).executeNotNull()}class Ir extends uy{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ir.currentPopupAction&&Ir.currentPopupAction.cancel(),Ir.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){an(this.filter.length===1,"Popup operations only handle one event");const e=Mh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ct(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Ct(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ir.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ct(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,uS.get())};e()}}Ir.currentPopupAction=null;/**
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
 */const hS="pendingRedirect",Fa=new Map;class dS extends uy{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Fa.get(this.auth._key());if(!e){try{const r=await fS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Fa.set(this.auth._key(),e)}return this.bypassAuthState||Fa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fS(n,e){const t=_S(e),r=mS(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function pS(n,e){Fa.set(n._key(),e)}function mS(n){return Xt(n._redirectPersistence)}function _S(n){return La(hS,n.config.apiKey,n.name)}async function gS(n,e,t=!1){if(nt(n.app))return Promise.reject(nn(n));const r=dn(n),i=ly(r,e),o=await new dS(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const yS=10*60*1e3;class IS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ES(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!hy(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(Ct(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qp(e))}saveEventToCache(e){this.cachedEventUids.add(Qp(e)),this.lastProcessedEventTime=Date.now()}}function Qp(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function hy({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ES(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hy(n);default:return!1}}/**
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
 */async function TS(n,e={}){return zt(n,"GET","/v1/projects",e)}/**
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
 */const wS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vS=/^https?/;async function AS(n){if(n.config.emulator)return;const{authorizedDomains:e}=await TS(n);for(const t of e)try{if(RS(t))return}catch{}Et(n,"unauthorized-domain")}function RS(n){const e=rc(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!vS.test(t))return!1;if(wS.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const SS=new Lo(3e4,6e4);function Yp(){const n=Ot().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function CS(n){return new Promise((e,t)=>{var i,s,o;function r(){Yp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yp(),t(Ct(n,"network-request-failed"))},timeout:SS.get()})}if((s=(i=Ot().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=Ot().gapi)!=null&&o.load)r();else{const a=IR("iframefcb");return Ot()[a]=()=>{gapi.load?r():t(Ct(n,"network-request-failed"))},Qg(`${yR()}?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw Ua=null,e})}let Ua=null;function bS(n){return Ua=Ua||CS(n),Ua}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const PS=new Lo(5e3,15e3),NS="__/auth/iframe",kS="emulator/auth/iframe",DS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function VS(n){const e=n.config;z(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Nh(e,kS):`https://${n.config.authDomain}/${NS}`,r={apiKey:e.apiKey,appName:n.name,v:Jn},i=xS.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Qi(r).slice(1)}`}async function OS(n){const e=await bS(n),t=Ot().gapi;return z(t,n,"internal-error"),e.open({where:document.body,url:VS(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:DS,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ct(n,"network-request-failed"),a=Ot().setTimeout(()=>{s(o)},PS.get());function l(){Ot().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const MS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},LS=500,FS=600,US="_blank",BS="http://localhost";class Jp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qS(n,e,t,r=LS,i=FS){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...MS,width:r.toString(),height:i.toString(),top:s,left:o},u=xe().toLowerCase();t&&(a=Gg(u)?US:t),Bg(u)&&(e=e||BS,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[g,T])=>`${m}${g}=${T},`,"");if(lR(u)&&a!=="_self")return GS(e||"",a),new Jp(null);const f=window.open(e||"",a,d);z(f,n,"popup-blocked");try{f.focus()}catch{}return new Jp(f)}function GS(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const WS="__/auth/handler",zS="emulator/auth/handler",jS=encodeURIComponent("fac");async function Xp(n,e,t,r,i,s){z(n.config.authDomain,n,"auth-domain-config-required"),z(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Jn,eventId:i};if(e instanceof Oh){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Xa(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries(s||{}))o[d]=f}if(e instanceof Uo){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await n._getAppCheckToken(),u=l?`#${jS}=${encodeURIComponent(l)}`:"";return`${$S(n)}?${Qi(a).slice(1)}${u}`}function $S({config:n}){return n.emulator?Nh(n,zS):`https://${n.authDomain}/${WS}`}/**
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
 */const cu="webStorageSupport";class KS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=iy,this._completeRedirectFn=gS,this._overrideRedirectResult=pS}async _openPopup(e,t,r,i){var o;an((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Xp(e,t,r,rc(),i);return qS(e,s,Mh())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await Xp(e,t,r,rc(),i);return JR(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(an(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await OS(e),r=new IS(e);return t.register("authEvent",i=>(z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(cu,{type:cu},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[cu];s!==void 0&&t(!!s),Et(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=AS(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Kg()||qg()||Dh()}}const HS=KS;var Zp="@firebase/auth",em="1.11.0";/**
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
 */class QS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function YS(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function JS(n){Bn(new sn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Hg(n)},u=new mR(r,i,s,l);return RR(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Bn(new sn("auth-internal",e=>{const t=dn(e.getProvider("auth").getImmediate());return(r=>new QS(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),gt(Zp,em,YS(n)),gt(Zp,em,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const XS=5*60,ZS=Eg("authIdTokenMaxAge")||XS;let tm=null;const eC=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>ZS)return;const i=t==null?void 0:t.token;tm!==i&&(tm=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function qx(n=zc()){const e=Gr(n,"auth");if(e.isInitialized())return e.getImmediate();const t=AR(n,{popupRedirectResolver:HS,persistence:[oS,HR,iy]}),r=Eg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=eC(s.toString());jR(t,o,()=>o(t.currentUser)),zR(t,a=>o(a))}}const i=yg("auth");return i&&SR(t,`http://${i}`),t}function tC(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}_R({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Ct("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",tC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});JS("Browser");var nm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Mn,dy;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function E(){}E.prototype=y.prototype,w.D=y.prototype,w.prototype=new E,w.prototype.constructor=w,w.C=function(v,A,b){for(var I=Array(arguments.length-2),$t=2;$t<arguments.length;$t++)I[$t-2]=arguments[$t];return y.prototype[A].apply(v,I)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,y,E){E||(E=0);var v=Array(16);if(typeof y=="string")for(var A=0;16>A;++A)v[A]=y.charCodeAt(E++)|y.charCodeAt(E++)<<8|y.charCodeAt(E++)<<16|y.charCodeAt(E++)<<24;else for(A=0;16>A;++A)v[A]=y[E++]|y[E++]<<8|y[E++]<<16|y[E++]<<24;y=w.g[0],E=w.g[1],A=w.g[2];var b=w.g[3],I=y+(b^E&(A^b))+v[0]+3614090360&4294967295;y=E+(I<<7&4294967295|I>>>25),I=b+(A^y&(E^A))+v[1]+3905402710&4294967295,b=y+(I<<12&4294967295|I>>>20),I=A+(E^b&(y^E))+v[2]+606105819&4294967295,A=b+(I<<17&4294967295|I>>>15),I=E+(y^A&(b^y))+v[3]+3250441966&4294967295,E=A+(I<<22&4294967295|I>>>10),I=y+(b^E&(A^b))+v[4]+4118548399&4294967295,y=E+(I<<7&4294967295|I>>>25),I=b+(A^y&(E^A))+v[5]+1200080426&4294967295,b=y+(I<<12&4294967295|I>>>20),I=A+(E^b&(y^E))+v[6]+2821735955&4294967295,A=b+(I<<17&4294967295|I>>>15),I=E+(y^A&(b^y))+v[7]+4249261313&4294967295,E=A+(I<<22&4294967295|I>>>10),I=y+(b^E&(A^b))+v[8]+1770035416&4294967295,y=E+(I<<7&4294967295|I>>>25),I=b+(A^y&(E^A))+v[9]+2336552879&4294967295,b=y+(I<<12&4294967295|I>>>20),I=A+(E^b&(y^E))+v[10]+4294925233&4294967295,A=b+(I<<17&4294967295|I>>>15),I=E+(y^A&(b^y))+v[11]+2304563134&4294967295,E=A+(I<<22&4294967295|I>>>10),I=y+(b^E&(A^b))+v[12]+1804603682&4294967295,y=E+(I<<7&4294967295|I>>>25),I=b+(A^y&(E^A))+v[13]+4254626195&4294967295,b=y+(I<<12&4294967295|I>>>20),I=A+(E^b&(y^E))+v[14]+2792965006&4294967295,A=b+(I<<17&4294967295|I>>>15),I=E+(y^A&(b^y))+v[15]+1236535329&4294967295,E=A+(I<<22&4294967295|I>>>10),I=y+(A^b&(E^A))+v[1]+4129170786&4294967295,y=E+(I<<5&4294967295|I>>>27),I=b+(E^A&(y^E))+v[6]+3225465664&4294967295,b=y+(I<<9&4294967295|I>>>23),I=A+(y^E&(b^y))+v[11]+643717713&4294967295,A=b+(I<<14&4294967295|I>>>18),I=E+(b^y&(A^b))+v[0]+3921069994&4294967295,E=A+(I<<20&4294967295|I>>>12),I=y+(A^b&(E^A))+v[5]+3593408605&4294967295,y=E+(I<<5&4294967295|I>>>27),I=b+(E^A&(y^E))+v[10]+38016083&4294967295,b=y+(I<<9&4294967295|I>>>23),I=A+(y^E&(b^y))+v[15]+3634488961&4294967295,A=b+(I<<14&4294967295|I>>>18),I=E+(b^y&(A^b))+v[4]+3889429448&4294967295,E=A+(I<<20&4294967295|I>>>12),I=y+(A^b&(E^A))+v[9]+568446438&4294967295,y=E+(I<<5&4294967295|I>>>27),I=b+(E^A&(y^E))+v[14]+3275163606&4294967295,b=y+(I<<9&4294967295|I>>>23),I=A+(y^E&(b^y))+v[3]+4107603335&4294967295,A=b+(I<<14&4294967295|I>>>18),I=E+(b^y&(A^b))+v[8]+1163531501&4294967295,E=A+(I<<20&4294967295|I>>>12),I=y+(A^b&(E^A))+v[13]+2850285829&4294967295,y=E+(I<<5&4294967295|I>>>27),I=b+(E^A&(y^E))+v[2]+4243563512&4294967295,b=y+(I<<9&4294967295|I>>>23),I=A+(y^E&(b^y))+v[7]+1735328473&4294967295,A=b+(I<<14&4294967295|I>>>18),I=E+(b^y&(A^b))+v[12]+2368359562&4294967295,E=A+(I<<20&4294967295|I>>>12),I=y+(E^A^b)+v[5]+4294588738&4294967295,y=E+(I<<4&4294967295|I>>>28),I=b+(y^E^A)+v[8]+2272392833&4294967295,b=y+(I<<11&4294967295|I>>>21),I=A+(b^y^E)+v[11]+1839030562&4294967295,A=b+(I<<16&4294967295|I>>>16),I=E+(A^b^y)+v[14]+4259657740&4294967295,E=A+(I<<23&4294967295|I>>>9),I=y+(E^A^b)+v[1]+2763975236&4294967295,y=E+(I<<4&4294967295|I>>>28),I=b+(y^E^A)+v[4]+1272893353&4294967295,b=y+(I<<11&4294967295|I>>>21),I=A+(b^y^E)+v[7]+4139469664&4294967295,A=b+(I<<16&4294967295|I>>>16),I=E+(A^b^y)+v[10]+3200236656&4294967295,E=A+(I<<23&4294967295|I>>>9),I=y+(E^A^b)+v[13]+681279174&4294967295,y=E+(I<<4&4294967295|I>>>28),I=b+(y^E^A)+v[0]+3936430074&4294967295,b=y+(I<<11&4294967295|I>>>21),I=A+(b^y^E)+v[3]+3572445317&4294967295,A=b+(I<<16&4294967295|I>>>16),I=E+(A^b^y)+v[6]+76029189&4294967295,E=A+(I<<23&4294967295|I>>>9),I=y+(E^A^b)+v[9]+3654602809&4294967295,y=E+(I<<4&4294967295|I>>>28),I=b+(y^E^A)+v[12]+3873151461&4294967295,b=y+(I<<11&4294967295|I>>>21),I=A+(b^y^E)+v[15]+530742520&4294967295,A=b+(I<<16&4294967295|I>>>16),I=E+(A^b^y)+v[2]+3299628645&4294967295,E=A+(I<<23&4294967295|I>>>9),I=y+(A^(E|~b))+v[0]+4096336452&4294967295,y=E+(I<<6&4294967295|I>>>26),I=b+(E^(y|~A))+v[7]+1126891415&4294967295,b=y+(I<<10&4294967295|I>>>22),I=A+(y^(b|~E))+v[14]+2878612391&4294967295,A=b+(I<<15&4294967295|I>>>17),I=E+(b^(A|~y))+v[5]+4237533241&4294967295,E=A+(I<<21&4294967295|I>>>11),I=y+(A^(E|~b))+v[12]+1700485571&4294967295,y=E+(I<<6&4294967295|I>>>26),I=b+(E^(y|~A))+v[3]+2399980690&4294967295,b=y+(I<<10&4294967295|I>>>22),I=A+(y^(b|~E))+v[10]+4293915773&4294967295,A=b+(I<<15&4294967295|I>>>17),I=E+(b^(A|~y))+v[1]+2240044497&4294967295,E=A+(I<<21&4294967295|I>>>11),I=y+(A^(E|~b))+v[8]+1873313359&4294967295,y=E+(I<<6&4294967295|I>>>26),I=b+(E^(y|~A))+v[15]+4264355552&4294967295,b=y+(I<<10&4294967295|I>>>22),I=A+(y^(b|~E))+v[6]+2734768916&4294967295,A=b+(I<<15&4294967295|I>>>17),I=E+(b^(A|~y))+v[13]+1309151649&4294967295,E=A+(I<<21&4294967295|I>>>11),I=y+(A^(E|~b))+v[4]+4149444226&4294967295,y=E+(I<<6&4294967295|I>>>26),I=b+(E^(y|~A))+v[11]+3174756917&4294967295,b=y+(I<<10&4294967295|I>>>22),I=A+(y^(b|~E))+v[2]+718787259&4294967295,A=b+(I<<15&4294967295|I>>>17),I=E+(b^(A|~y))+v[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(A+(I<<21&4294967295|I>>>11))&4294967295,w.g[2]=w.g[2]+A&4294967295,w.g[3]=w.g[3]+b&4294967295}r.prototype.u=function(w,y){y===void 0&&(y=w.length);for(var E=y-this.blockSize,v=this.B,A=this.h,b=0;b<y;){if(A==0)for(;b<=E;)i(this,w,b),b+=this.blockSize;if(typeof w=="string"){for(;b<y;)if(v[A++]=w.charCodeAt(b++),A==this.blockSize){i(this,v),A=0;break}}else for(;b<y;)if(v[A++]=w[b++],A==this.blockSize){i(this,v),A=0;break}}this.h=A,this.o+=y},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;var E=8*this.o;for(y=w.length-8;y<w.length;++y)w[y]=E&255,E/=256;for(this.u(w),w=Array(16),y=E=0;4>y;++y)for(var v=0;32>v;v+=8)w[E++]=this.g[y]>>>v&255;return w};function s(w,y){var E=a;return Object.prototype.hasOwnProperty.call(E,w)?E[w]:E[w]=y(w)}function o(w,y){this.h=y;for(var E=[],v=!0,A=w.length-1;0<=A;A--){var b=w[A]|0;v&&b==y||(E[A]=b,v=!1)}this.g=E}var a={};function l(w){return-128<=w&&128>w?s(w,function(y){return new o([y|0],0>y?-1:0)}):new o([w|0],0>w?-1:0)}function u(w){if(isNaN(w)||!isFinite(w))return f;if(0>w)return P(u(-w));for(var y=[],E=1,v=0;w>=E;v++)y[v]=w/E|0,E*=4294967296;return new o(y,0)}function d(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return P(d(w.substring(1),y));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=u(Math.pow(y,8)),v=f,A=0;A<w.length;A+=8){var b=Math.min(8,w.length-A),I=parseInt(w.substring(A,A+b),y);8>b?(b=u(Math.pow(y,b)),v=v.j(b).add(u(I))):(v=v.j(E),v=v.add(u(I)))}return v}var f=l(0),m=l(1),g=l(16777216);n=o.prototype,n.m=function(){if(N(this))return-P(this).m();for(var w=0,y=1,E=0;E<this.g.length;E++){var v=this.i(E);w+=(0<=v?v:4294967296+v)*y,y*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(T(this))return"0";if(N(this))return"-"+P(this).toString(w);for(var y=u(Math.pow(w,6)),E=this,v="";;){var A=j(E,y).g;E=M(E,A.j(y));var b=((0<E.g.length?E.g[0]:E.h)>>>0).toString(w);if(E=A,T(E))return b+v;for(;6>b.length;)b="0"+b;v=b+v}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function T(w){if(w.h!=0)return!1;for(var y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function N(w){return w.h==-1}n.l=function(w){return w=M(this,w),N(w)?-1:T(w)?0:1};function P(w){for(var y=w.g.length,E=[],v=0;v<y;v++)E[v]=~w.g[v];return new o(E,~w.h).add(m)}n.abs=function(){return N(this)?P(this):this},n.add=function(w){for(var y=Math.max(this.g.length,w.g.length),E=[],v=0,A=0;A<=y;A++){var b=v+(this.i(A)&65535)+(w.i(A)&65535),I=(b>>>16)+(this.i(A)>>>16)+(w.i(A)>>>16);v=I>>>16,b&=65535,I&=65535,E[A]=I<<16|b}return new o(E,E[E.length-1]&-2147483648?-1:0)};function M(w,y){return w.add(P(y))}n.j=function(w){if(T(this)||T(w))return f;if(N(this))return N(w)?P(this).j(P(w)):P(P(this).j(w));if(N(w))return P(this.j(P(w)));if(0>this.l(g)&&0>w.l(g))return u(this.m()*w.m());for(var y=this.g.length+w.g.length,E=[],v=0;v<2*y;v++)E[v]=0;for(v=0;v<this.g.length;v++)for(var A=0;A<w.g.length;A++){var b=this.i(v)>>>16,I=this.i(v)&65535,$t=w.i(A)>>>16,ds=w.i(A)&65535;E[2*v+2*A]+=I*ds,B(E,2*v+2*A),E[2*v+2*A+1]+=b*ds,B(E,2*v+2*A+1),E[2*v+2*A+1]+=I*$t,B(E,2*v+2*A+1),E[2*v+2*A+2]+=b*$t,B(E,2*v+2*A+2)}for(v=0;v<y;v++)E[v]=E[2*v+1]<<16|E[2*v];for(v=y;v<2*y;v++)E[v]=0;return new o(E,0)};function B(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function U(w,y){this.g=w,this.h=y}function j(w,y){if(T(y))throw Error("division by zero");if(T(w))return new U(f,f);if(N(w))return y=j(P(w),y),new U(P(y.g),P(y.h));if(N(y))return y=j(w,P(y)),new U(P(y.g),y.h);if(30<w.g.length){if(N(w)||N(y))throw Error("slowDivide_ only works with positive integers.");for(var E=m,v=y;0>=v.l(w);)E=oe(E),v=oe(v);var A=ee(E,1),b=ee(v,1);for(v=ee(v,2),E=ee(E,2);!T(v);){var I=b.add(v);0>=I.l(w)&&(A=A.add(E),b=I),v=ee(v,1),E=ee(E,1)}return y=M(w,A.j(y)),new U(A,y)}for(A=f;0<=w.l(y);){for(E=Math.max(1,Math.floor(w.m()/y.m())),v=Math.ceil(Math.log(E)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),b=u(E),I=b.j(y);N(I)||0<I.l(w);)E-=v,b=u(E),I=b.j(y);T(b)&&(b=m),A=A.add(b),w=M(w,I)}return new U(A,w)}n.A=function(w){return j(this,w).h},n.and=function(w){for(var y=Math.max(this.g.length,w.g.length),E=[],v=0;v<y;v++)E[v]=this.i(v)&w.i(v);return new o(E,this.h&w.h)},n.or=function(w){for(var y=Math.max(this.g.length,w.g.length),E=[],v=0;v<y;v++)E[v]=this.i(v)|w.i(v);return new o(E,this.h|w.h)},n.xor=function(w){for(var y=Math.max(this.g.length,w.g.length),E=[],v=0;v<y;v++)E[v]=this.i(v)^w.i(v);return new o(E,this.h^w.h)};function oe(w){for(var y=w.g.length+1,E=[],v=0;v<y;v++)E[v]=w.i(v)<<1|w.i(v-1)>>>31;return new o(E,w.h)}function ee(w,y){var E=y>>5;y%=32;for(var v=w.g.length-E,A=[],b=0;b<v;b++)A[b]=0<y?w.i(b+E)>>>y|w.i(b+E+1)<<32-y:w.i(b+E);return new o(A,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,dy=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,Mn=o}).apply(typeof nm<"u"?nm:typeof self<"u"?self:typeof window<"u"?window:{});var Ra=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fy,Gs,py,Ba,Du,my,_y,gy;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,h,p){return c==Array.prototype||c==Object.prototype||(c[h]=p.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ra=="object"&&Ra];for(var h=0;h<c.length;++h){var p=c[h];if(p&&p.Math==Math)return p}throw Error("Cannot find globalThis object")}var r=t(this);function i(c,h){if(h)e:{var p=r;c=c.split(".");for(var _=0;_<c.length-1;_++){var R=c[_];if(!(R in p))break e;p=p[R]}c=c[c.length-1],_=p[c],h=h(_),h!=_&&h!=null&&e(p,c,{configurable:!0,writable:!0,value:h})}}function s(c,h){c instanceof String&&(c+="");var p=0,_=!1,R={next:function(){if(!_&&p<c.length){var k=p++;return{value:h(k,c[k]),done:!1}}return _=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}i("Array.prototype.values",function(c){return c||function(){return s(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(c){var h=typeof c;return h=h!="object"?h:c?Array.isArray(c)?"array":h:"null",h=="array"||h=="object"&&typeof c.length=="number"}function u(c){var h=typeof c;return h=="object"&&c!=null||h=="function"}function d(c,h,p){return c.call.apply(c.bind,arguments)}function f(c,h,p){if(!c)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,_),c.apply(h,R)}}return function(){return c.apply(h,arguments)}}function m(c,h,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,m.apply(null,arguments)}function g(c,h){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),c.apply(this,_)}}function T(c,h){function p(){}p.prototype=h.prototype,c.aa=h.prototype,c.prototype=new p,c.prototype.constructor=c,c.Qb=function(_,R,k){for(var F=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)F[pe-2]=arguments[pe];return h.prototype[R].apply(_,F)}}function N(c){const h=c.length;if(0<h){const p=Array(h);for(let _=0;_<h;_++)p[_]=c[_];return p}return[]}function P(c,h){for(let p=1;p<arguments.length;p++){const _=arguments[p];if(l(_)){const R=c.length||0,k=_.length||0;c.length=R+k;for(let F=0;F<k;F++)c[R+F]=_[F]}else c.push(_)}}class M{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function B(c){return/^[\s\xa0]*$/.test(c)}function U(){var c=a.navigator;return c&&(c=c.userAgent)?c:""}function j(c){return j[" "](c),c}j[" "]=function(){};var oe=U().indexOf("Gecko")!=-1&&!(U().toLowerCase().indexOf("webkit")!=-1&&U().indexOf("Edge")==-1)&&!(U().indexOf("Trident")!=-1||U().indexOf("MSIE")!=-1)&&U().indexOf("Edge")==-1;function ee(c,h,p){for(const _ in c)h.call(p,c[_],_,c)}function w(c,h){for(const p in c)h.call(void 0,c[p],p,c)}function y(c){const h={};for(const p in c)h[p]=c[p];return h}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(c,h){let p,_;for(let R=1;R<arguments.length;R++){_=arguments[R];for(p in _)c[p]=_[p];for(let k=0;k<E.length;k++)p=E[k],Object.prototype.hasOwnProperty.call(_,p)&&(c[p]=_[p])}}function A(c){var h=1;c=c.split(":");const p=[];for(;0<h&&c.length;)p.push(c.shift()),h--;return c.length&&p.push(c.join(":")),p}function b(c){a.setTimeout(()=>{throw c},0)}function I(){var c=kl;let h=null;return c.g&&(h=c.g,c.g=c.g.next,c.g||(c.h=null),h.next=null),h}class $t{constructor(){this.h=this.g=null}add(h,p){const _=ds.get();_.set(h,p),this.h?this.h.next=_:this.g=_,this.h=_}}var ds=new M(()=>new vw,c=>c.reset());class vw{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let fs,ps=!1,kl=new $t,Cf=()=>{const c=a.Promise.resolve(void 0);fs=()=>{c.then(Aw)}};var Aw=()=>{for(var c;c=I();){try{c.h.call(c.g)}catch(p){b(p)}var h=ds;h.j(c),100>h.h&&(h.h++,c.next=h.g,h.g=c)}ps=!1};function yn(){this.s=this.s,this.C=this.C}yn.prototype.s=!1,yn.prototype.ma=function(){this.s||(this.s=!0,this.N())},yn.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function je(c,h){this.type=c,this.g=this.target=h,this.defaultPrevented=!1}je.prototype.h=function(){this.defaultPrevented=!0};var Rw=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var c=!1,h=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const p=()=>{};a.addEventListener("test",p,h),a.removeEventListener("test",p,h)}catch{}return c}();function ms(c,h){if(je.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var p=this.type=c.type,_=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=h,h=c.relatedTarget){if(oe){e:{try{j(h.nodeName);var R=!0;break e}catch{}R=!1}R||(h=null)}}else p=="mouseover"?h=c.fromElement:p=="mouseout"&&(h=c.toElement);this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Sw[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&ms.aa.h.call(this)}}T(ms,je);var Sw={2:"touch",3:"pen",4:"mouse"};ms.prototype.h=function(){ms.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var _s="closure_listenable_"+(1e6*Math.random()|0),Cw=0;function bw(c,h,p,_,R){this.listener=c,this.proxy=null,this.src=h,this.type=p,this.capture=!!_,this.ha=R,this.key=++Cw,this.da=this.fa=!1}function oa(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function aa(c){this.src=c,this.g={},this.h=0}aa.prototype.add=function(c,h,p,_,R){var k=c.toString();c=this.g[k],c||(c=this.g[k]=[],this.h++);var F=xl(c,h,_,R);return-1<F?(h=c[F],p||(h.fa=!1)):(h=new bw(h,this.src,k,!!_,R),h.fa=p,c.push(h)),h};function Dl(c,h){var p=h.type;if(p in c.g){var _=c.g[p],R=Array.prototype.indexOf.call(_,h,void 0),k;(k=0<=R)&&Array.prototype.splice.call(_,R,1),k&&(oa(h),c.g[p].length==0&&(delete c.g[p],c.h--))}}function xl(c,h,p,_){for(var R=0;R<c.length;++R){var k=c[R];if(!k.da&&k.listener==h&&k.capture==!!p&&k.ha==_)return R}return-1}var Vl="closure_lm_"+(1e6*Math.random()|0),Ol={};function bf(c,h,p,_,R){if(_&&_.once)return Nf(c,h,p,_,R);if(Array.isArray(h)){for(var k=0;k<h.length;k++)bf(c,h[k],p,_,R);return null}return p=Ul(p),c&&c[_s]?c.K(h,p,u(_)?!!_.capture:!!_,R):Pf(c,h,p,!1,_,R)}function Pf(c,h,p,_,R,k){if(!h)throw Error("Invalid event type");var F=u(R)?!!R.capture:!!R,pe=Ll(c);if(pe||(c[Vl]=pe=new aa(c)),p=pe.add(h,p,_,F,k),p.proxy)return p;if(_=Pw(),p.proxy=_,_.src=c,_.listener=p,c.addEventListener)Rw||(R=F),R===void 0&&(R=!1),c.addEventListener(h.toString(),_,R);else if(c.attachEvent)c.attachEvent(Df(h.toString()),_);else if(c.addListener&&c.removeListener)c.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Pw(){function c(p){return h.call(c.src,c.listener,p)}const h=Nw;return c}function Nf(c,h,p,_,R){if(Array.isArray(h)){for(var k=0;k<h.length;k++)Nf(c,h[k],p,_,R);return null}return p=Ul(p),c&&c[_s]?c.L(h,p,u(_)?!!_.capture:!!_,R):Pf(c,h,p,!0,_,R)}function kf(c,h,p,_,R){if(Array.isArray(h))for(var k=0;k<h.length;k++)kf(c,h[k],p,_,R);else _=u(_)?!!_.capture:!!_,p=Ul(p),c&&c[_s]?(c=c.i,h=String(h).toString(),h in c.g&&(k=c.g[h],p=xl(k,p,_,R),-1<p&&(oa(k[p]),Array.prototype.splice.call(k,p,1),k.length==0&&(delete c.g[h],c.h--)))):c&&(c=Ll(c))&&(h=c.g[h.toString()],c=-1,h&&(c=xl(h,p,_,R)),(p=-1<c?h[c]:null)&&Ml(p))}function Ml(c){if(typeof c!="number"&&c&&!c.da){var h=c.src;if(h&&h[_s])Dl(h.i,c);else{var p=c.type,_=c.proxy;h.removeEventListener?h.removeEventListener(p,_,c.capture):h.detachEvent?h.detachEvent(Df(p),_):h.addListener&&h.removeListener&&h.removeListener(_),(p=Ll(h))?(Dl(p,c),p.h==0&&(p.src=null,h[Vl]=null)):oa(c)}}}function Df(c){return c in Ol?Ol[c]:Ol[c]="on"+c}function Nw(c,h){if(c.da)c=!0;else{h=new ms(h,this);var p=c.listener,_=c.ha||c.src;c.fa&&Ml(c),c=p.call(_,h)}return c}function Ll(c){return c=c[Vl],c instanceof aa?c:null}var Fl="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ul(c){return typeof c=="function"?c:(c[Fl]||(c[Fl]=function(h){return c.handleEvent(h)}),c[Fl])}function $e(){yn.call(this),this.i=new aa(this),this.M=this,this.F=null}T($e,yn),$e.prototype[_s]=!0,$e.prototype.removeEventListener=function(c,h,p,_){kf(this,c,h,p,_)};function et(c,h){var p,_=c.F;if(_)for(p=[];_;_=_.F)p.push(_);if(c=c.M,_=h.type||h,typeof h=="string")h=new je(h,c);else if(h instanceof je)h.target=h.target||c;else{var R=h;h=new je(_,c),v(h,R)}if(R=!0,p)for(var k=p.length-1;0<=k;k--){var F=h.g=p[k];R=ca(F,_,!0,h)&&R}if(F=h.g=c,R=ca(F,_,!0,h)&&R,R=ca(F,_,!1,h)&&R,p)for(k=0;k<p.length;k++)F=h.g=p[k],R=ca(F,_,!1,h)&&R}$e.prototype.N=function(){if($e.aa.N.call(this),this.i){var c=this.i,h;for(h in c.g){for(var p=c.g[h],_=0;_<p.length;_++)oa(p[_]);delete c.g[h],c.h--}}this.F=null},$e.prototype.K=function(c,h,p,_){return this.i.add(String(c),h,!1,p,_)},$e.prototype.L=function(c,h,p,_){return this.i.add(String(c),h,!0,p,_)};function ca(c,h,p,_){if(h=c.i.g[String(h)],!h)return!0;h=h.concat();for(var R=!0,k=0;k<h.length;++k){var F=h[k];if(F&&!F.da&&F.capture==p){var pe=F.listener,Ge=F.ha||F.src;F.fa&&Dl(c.i,F),R=pe.call(Ge,_)!==!1&&R}}return R&&!_.defaultPrevented}function xf(c,h,p){if(typeof c=="function")p&&(c=m(c,p));else if(c&&typeof c.handleEvent=="function")c=m(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(c,h||0)}function Vf(c){c.g=xf(()=>{c.g=null,c.i&&(c.i=!1,Vf(c))},c.l);const h=c.h;c.h=null,c.m.apply(null,h)}class kw extends yn{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Vf(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gs(c){yn.call(this),this.h=c,this.g={}}T(gs,yn);var Of=[];function Mf(c){ee(c.g,function(h,p){this.g.hasOwnProperty(p)&&Ml(h)},c),c.g={}}gs.prototype.N=function(){gs.aa.N.call(this),Mf(this)},gs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Bl=a.JSON.stringify,Dw=a.JSON.parse,xw=class{stringify(c){return a.JSON.stringify(c,void 0)}parse(c){return a.JSON.parse(c,void 0)}};function ql(){}ql.prototype.h=null;function Lf(c){return c.h||(c.h=c.i())}function Ff(){}var ys={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Gl(){je.call(this,"d")}T(Gl,je);function Wl(){je.call(this,"c")}T(Wl,je);var or={},Uf=null;function la(){return Uf=Uf||new $e}or.La="serverreachability";function Bf(c){je.call(this,or.La,c)}T(Bf,je);function Is(c){const h=la();et(h,new Bf(h))}or.STAT_EVENT="statevent";function qf(c,h){je.call(this,or.STAT_EVENT,c),this.stat=h}T(qf,je);function tt(c){const h=la();et(h,new qf(h,c))}or.Ma="timingevent";function Gf(c,h){je.call(this,or.Ma,c),this.size=h}T(Gf,je);function Es(c,h){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){c()},h)}function Ts(){this.g=!0}Ts.prototype.xa=function(){this.g=!1};function Vw(c,h,p,_,R,k){c.info(function(){if(c.g)if(k)for(var F="",pe=k.split("&"),Ge=0;Ge<pe.length;Ge++){var se=pe[Ge].split("=");if(1<se.length){var Ke=se[0];se=se[1];var He=Ke.split("_");F=2<=He.length&&He[1]=="type"?F+(Ke+"="+se+"&"):F+(Ke+"=redacted&")}}else F=null;else F=k;return"XMLHTTP REQ ("+_+") [attempt "+R+"]: "+h+`
`+p+`
`+F})}function Ow(c,h,p,_,R,k,F){c.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+R+"]: "+h+`
`+p+`
`+k+" "+F})}function Yr(c,h,p,_){c.info(function(){return"XMLHTTP TEXT ("+h+"): "+Lw(c,p)+(_?" "+_:"")})}function Mw(c,h){c.info(function(){return"TIMEOUT: "+h})}Ts.prototype.info=function(){};function Lw(c,h){if(!c.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(c=0;c<p.length;c++)if(Array.isArray(p[c])){var _=p[c];if(!(2>_.length)){var R=_[1];if(Array.isArray(R)&&!(1>R.length)){var k=R[0];if(k!="noop"&&k!="stop"&&k!="close")for(var F=1;F<R.length;F++)R[F]=""}}}}return Bl(p)}catch{return h}}var ua={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Wf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},zl;function ha(){}T(ha,ql),ha.prototype.g=function(){return new XMLHttpRequest},ha.prototype.i=function(){return{}},zl=new ha;function In(c,h,p,_){this.j=c,this.i=h,this.l=p,this.R=_||1,this.U=new gs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new zf}function zf(){this.i=null,this.g="",this.h=!1}var jf={},jl={};function $l(c,h,p){c.L=1,c.v=ma(Kt(h)),c.m=p,c.P=!0,$f(c,null)}function $f(c,h){c.F=Date.now(),da(c),c.A=Kt(c.v);var p=c.A,_=c.R;Array.isArray(_)||(_=[String(_)]),op(p.i,"t",_),c.C=0,p=c.j.J,c.h=new zf,c.g=Ap(c.j,p?h:null,!c.m),0<c.O&&(c.M=new kw(m(c.Y,c,c.g),c.O)),h=c.U,p=c.g,_=c.ca;var R="readystatechange";Array.isArray(R)||(R&&(Of[0]=R.toString()),R=Of);for(var k=0;k<R.length;k++){var F=bf(p,R[k],_||h.handleEvent,!1,h.h||h);if(!F)break;h.g[F.key]=F}h=c.H?y(c.H):{},c.m?(c.u||(c.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,h)):(c.u="GET",c.g.ea(c.A,c.u,null,h)),Is(),Vw(c.i,c.u,c.A,c.l,c.R,c.m)}In.prototype.ca=function(c){c=c.target;const h=this.M;h&&Ht(c)==3?h.j():this.Y(c)},In.prototype.Y=function(c){try{if(c==this.g)e:{const He=Ht(this.g);var h=this.g.Ba();const Zr=this.g.Z();if(!(3>He)&&(He!=3||this.g&&(this.h.h||this.g.oa()||fp(this.g)))){this.J||He!=4||h==7||(h==8||0>=Zr?Is(3):Is(2)),Kl(this);var p=this.g.Z();this.X=p;t:if(Kf(this)){var _=fp(this.g);c="";var R=_.length,k=Ht(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ar(this),ws(this);var F="";break t}this.h.i=new a.TextDecoder}for(h=0;h<R;h++)this.h.h=!0,c+=this.h.i.decode(_[h],{stream:!(k&&h==R-1)});_.length=0,this.h.g+=c,this.C=0,F=this.h.g}else F=this.g.oa();if(this.o=p==200,Ow(this.i,this.u,this.A,this.l,this.R,He,p),this.o){if(this.T&&!this.K){t:{if(this.g){var pe,Ge=this.g;if((pe=Ge.g?Ge.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(pe)){var se=pe;break t}}se=null}if(p=se)Yr(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Hl(this,p);else{this.o=!1,this.s=3,tt(12),ar(this),ws(this);break e}}if(this.P){p=!0;let Tt;for(;!this.J&&this.C<F.length;)if(Tt=Fw(this,F),Tt==jl){He==4&&(this.s=4,tt(14),p=!1),Yr(this.i,this.l,null,"[Incomplete Response]");break}else if(Tt==jf){this.s=4,tt(15),Yr(this.i,this.l,F,"[Invalid Chunk]"),p=!1;break}else Yr(this.i,this.l,Tt,null),Hl(this,Tt);if(Kf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),He!=4||F.length!=0||this.h.h||(this.s=1,tt(16),p=!1),this.o=this.o&&p,!p)Yr(this.i,this.l,F,"[Invalid Chunked Response]"),ar(this),ws(this);else if(0<F.length&&!this.W){this.W=!0;var Ke=this.j;Ke.g==this&&Ke.ba&&!Ke.M&&(Ke.j.info("Great, no buffering proxy detected. Bytes received: "+F.length),eu(Ke),Ke.M=!0,tt(11))}}else Yr(this.i,this.l,F,null),Hl(this,F);He==4&&ar(this),this.o&&!this.J&&(He==4?Ep(this.j,this):(this.o=!1,da(this)))}else tv(this.g),p==400&&0<F.indexOf("Unknown SID")?(this.s=3,tt(12)):(this.s=0,tt(13)),ar(this),ws(this)}}}catch{}finally{}};function Kf(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function Fw(c,h){var p=c.C,_=h.indexOf(`
`,p);return _==-1?jl:(p=Number(h.substring(p,_)),isNaN(p)?jf:(_+=1,_+p>h.length?jl:(h=h.slice(_,_+p),c.C=_+p,h)))}In.prototype.cancel=function(){this.J=!0,ar(this)};function da(c){c.S=Date.now()+c.I,Hf(c,c.I)}function Hf(c,h){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Es(m(c.ba,c),h)}function Kl(c){c.B&&(a.clearTimeout(c.B),c.B=null)}In.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(Mw(this.i,this.A),this.L!=2&&(Is(),tt(17)),ar(this),this.s=2,ws(this)):Hf(this,this.S-c)};function ws(c){c.j.G==0||c.J||Ep(c.j,c)}function ar(c){Kl(c);var h=c.M;h&&typeof h.ma=="function"&&h.ma(),c.M=null,Mf(c.U),c.g&&(h=c.g,c.g=null,h.abort(),h.ma())}function Hl(c,h){try{var p=c.j;if(p.G!=0&&(p.g==c||Ql(p.h,c))){if(!c.K&&Ql(p.h,c)&&p.G==3){try{var _=p.Da.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var R=_;if(R[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<c.F)Ta(p),Ia(p);else break e;Zl(p),tt(18)}}else p.za=R[1],0<p.za-p.T&&37500>R[2]&&p.F&&p.v==0&&!p.C&&(p.C=Es(m(p.Za,p),6e3));if(1>=Jf(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else lr(p,11)}else if((c.K||p.g==c)&&Ta(p),!B(h))for(R=p.Da.g.parse(h),h=0;h<R.length;h++){let se=R[h];if(p.T=se[0],se=se[1],p.G==2)if(se[0]=="c"){p.K=se[1],p.ia=se[2];const Ke=se[3];Ke!=null&&(p.la=Ke,p.j.info("VER="+p.la));const He=se[4];He!=null&&(p.Aa=He,p.j.info("SVER="+p.Aa));const Zr=se[5];Zr!=null&&typeof Zr=="number"&&0<Zr&&(_=1.5*Zr,p.L=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const Tt=c.g;if(Tt){const va=Tt.g?Tt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(va){var k=_.h;k.g||va.indexOf("spdy")==-1&&va.indexOf("quic")==-1&&va.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(Yl(k,k.h),k.h=null))}if(_.D){const tu=Tt.g?Tt.g.getResponseHeader("X-HTTP-Session-Id"):null;tu&&(_.ya=tu,_e(_.I,_.D,tu))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-c.F,p.j.info("Handshake RTT: "+p.R+"ms")),_=p;var F=c;if(_.qa=vp(_,_.J?_.ia:null,_.W),F.K){Xf(_.h,F);var pe=F,Ge=_.L;Ge&&(pe.I=Ge),pe.B&&(Kl(pe),da(pe)),_.g=F}else yp(_);0<p.i.length&&Ea(p)}else se[0]!="stop"&&se[0]!="close"||lr(p,7);else p.G==3&&(se[0]=="stop"||se[0]=="close"?se[0]=="stop"?lr(p,7):Xl(p):se[0]!="noop"&&p.l&&p.l.ta(se),p.v=0)}}Is(4)}catch{}}var Uw=class{constructor(c,h){this.g=c,this.map=h}};function Qf(c){this.l=c||10,a.PerformanceNavigationTiming?(c=a.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Yf(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Jf(c){return c.h?1:c.g?c.g.size:0}function Ql(c,h){return c.h?c.h==h:c.g?c.g.has(h):!1}function Yl(c,h){c.g?c.g.add(h):c.h=h}function Xf(c,h){c.h&&c.h==h?c.h=null:c.g&&c.g.has(h)&&c.g.delete(h)}Qf.prototype.cancel=function(){if(this.i=Zf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Zf(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let h=c.i;for(const p of c.g.values())h=h.concat(p.D);return h}return N(c.i)}function Bw(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(l(c)){for(var h=[],p=c.length,_=0;_<p;_++)h.push(c[_]);return h}h=[],p=0;for(_ in c)h[p++]=c[_];return h}function qw(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(l(c)||typeof c=="string"){var h=[];c=c.length;for(var p=0;p<c;p++)h.push(p);return h}h=[],p=0;for(const _ in c)h[p++]=_;return h}}}function ep(c,h){if(c.forEach&&typeof c.forEach=="function")c.forEach(h,void 0);else if(l(c)||typeof c=="string")Array.prototype.forEach.call(c,h,void 0);else for(var p=qw(c),_=Bw(c),R=_.length,k=0;k<R;k++)h.call(void 0,_[k],p&&p[k],c)}var tp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Gw(c,h){if(c){c=c.split("&");for(var p=0;p<c.length;p++){var _=c[p].indexOf("="),R=null;if(0<=_){var k=c[p].substring(0,_);R=c[p].substring(_+1)}else k=c[p];h(k,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function cr(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof cr){this.h=c.h,fa(this,c.j),this.o=c.o,this.g=c.g,pa(this,c.s),this.l=c.l;var h=c.i,p=new Rs;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),np(this,p),this.m=c.m}else c&&(h=String(c).match(tp))?(this.h=!1,fa(this,h[1]||"",!0),this.o=vs(h[2]||""),this.g=vs(h[3]||"",!0),pa(this,h[4]),this.l=vs(h[5]||"",!0),np(this,h[6]||"",!0),this.m=vs(h[7]||"")):(this.h=!1,this.i=new Rs(null,this.h))}cr.prototype.toString=function(){var c=[],h=this.j;h&&c.push(As(h,rp,!0),":");var p=this.g;return(p||h=="file")&&(c.push("//"),(h=this.o)&&c.push(As(h,rp,!0),"@"),c.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&c.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&c.push("/"),c.push(As(p,p.charAt(0)=="/"?jw:zw,!0))),(p=this.i.toString())&&c.push("?",p),(p=this.m)&&c.push("#",As(p,Kw)),c.join("")};function Kt(c){return new cr(c)}function fa(c,h,p){c.j=p?vs(h,!0):h,c.j&&(c.j=c.j.replace(/:$/,""))}function pa(c,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);c.s=h}else c.s=null}function np(c,h,p){h instanceof Rs?(c.i=h,Hw(c.i,c.h)):(p||(h=As(h,$w)),c.i=new Rs(h,c.h))}function _e(c,h,p){c.i.set(h,p)}function ma(c){return _e(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function vs(c,h){return c?h?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function As(c,h,p){return typeof c=="string"?(c=encodeURI(c).replace(h,Ww),p&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Ww(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var rp=/[#\/\?@]/g,zw=/[#\?:]/g,jw=/[#\?]/g,$w=/[#\?@]/g,Kw=/#/g;function Rs(c,h){this.h=this.g=null,this.i=c||null,this.j=!!h}function En(c){c.g||(c.g=new Map,c.h=0,c.i&&Gw(c.i,function(h,p){c.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}n=Rs.prototype,n.add=function(c,h){En(this),this.i=null,c=Jr(this,c);var p=this.g.get(c);return p||this.g.set(c,p=[]),p.push(h),this.h+=1,this};function ip(c,h){En(c),h=Jr(c,h),c.g.has(h)&&(c.i=null,c.h-=c.g.get(h).length,c.g.delete(h))}function sp(c,h){return En(c),h=Jr(c,h),c.g.has(h)}n.forEach=function(c,h){En(this),this.g.forEach(function(p,_){p.forEach(function(R){c.call(h,R,_,this)},this)},this)},n.na=function(){En(this);const c=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let _=0;_<h.length;_++){const R=c[_];for(let k=0;k<R.length;k++)p.push(h[_])}return p},n.V=function(c){En(this);let h=[];if(typeof c=="string")sp(this,c)&&(h=h.concat(this.g.get(Jr(this,c))));else{c=Array.from(this.g.values());for(let p=0;p<c.length;p++)h=h.concat(c[p])}return h},n.set=function(c,h){return En(this),this.i=null,c=Jr(this,c),sp(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[h]),this.h+=1,this},n.get=function(c,h){return c?(c=this.V(c),0<c.length?String(c[0]):h):h};function op(c,h,p){ip(c,h),0<p.length&&(c.i=null,c.g.set(Jr(c,h),N(p)),c.h+=p.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var _=h[p];const k=encodeURIComponent(String(_)),F=this.V(_);for(_=0;_<F.length;_++){var R=k;F[_]!==""&&(R+="="+encodeURIComponent(String(F[_]))),c.push(R)}}return this.i=c.join("&")};function Jr(c,h){return h=String(h),c.j&&(h=h.toLowerCase()),h}function Hw(c,h){h&&!c.j&&(En(c),c.i=null,c.g.forEach(function(p,_){var R=_.toLowerCase();_!=R&&(ip(this,_),op(this,R,p))},c)),c.j=h}function Qw(c,h){const p=new Ts;if(a.Image){const _=new Image;_.onload=g(Tn,p,"TestLoadImage: loaded",!0,h,_),_.onerror=g(Tn,p,"TestLoadImage: error",!1,h,_),_.onabort=g(Tn,p,"TestLoadImage: abort",!1,h,_),_.ontimeout=g(Tn,p,"TestLoadImage: timeout",!1,h,_),a.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=c}else h(!1)}function Yw(c,h){const p=new Ts,_=new AbortController,R=setTimeout(()=>{_.abort(),Tn(p,"TestPingServer: timeout",!1,h)},1e4);fetch(c,{signal:_.signal}).then(k=>{clearTimeout(R),k.ok?Tn(p,"TestPingServer: ok",!0,h):Tn(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(R),Tn(p,"TestPingServer: error",!1,h)})}function Tn(c,h,p,_,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),_(p)}catch{}}function Jw(){this.g=new xw}function Xw(c,h,p){const _=p||"";try{ep(c,function(R,k){let F=R;u(R)&&(F=Bl(R)),h.push(_+k+"="+encodeURIComponent(F))})}catch(R){throw h.push(_+"type="+encodeURIComponent("_badmap")),R}}function _a(c){this.l=c.Ub||null,this.j=c.eb||!1}T(_a,ql),_a.prototype.g=function(){return new ga(this.l,this.j)},_a.prototype.i=function(c){return function(){return c}}({});function ga(c,h){$e.call(this),this.D=c,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}T(ga,$e),n=ga.prototype,n.open=function(c,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=h,this.readyState=1,Cs(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(h.body=c),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ss(this)),this.readyState=0},n.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Cs(this)),this.g&&(this.readyState=3,Cs(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ap(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function ap(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}n.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var h=c.value?c.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!c.done}))&&(this.response=this.responseText+=h)}c.done?Ss(this):Cs(this),this.readyState==3&&ap(this)}},n.Ra=function(c){this.g&&(this.response=this.responseText=c,Ss(this))},n.Qa=function(c){this.g&&(this.response=c,Ss(this))},n.ga=function(){this.g&&Ss(this)};function Ss(c){c.readyState=4,c.l=null,c.j=null,c.v=null,Cs(c)}n.setRequestHeader=function(c,h){this.u.append(c,h)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,c.push(p[0]+": "+p[1]),p=h.next();return c.join(`\r
`)};function Cs(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(ga.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function cp(c){let h="";return ee(c,function(p,_){h+=_,h+=":",h+=p,h+=`\r
`}),h}function Jl(c,h,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=cp(p),typeof c=="string"?p!=null&&encodeURIComponent(String(p)):_e(c,h,p))}function Se(c){$e.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}T(Se,$e);var Zw=/^https?$/i,ev=["POST","PUT"];n=Se.prototype,n.Ha=function(c){this.J=c},n.ea=function(c,h,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);h=h?h.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():zl.g(),this.v=this.o?Lf(this.o):Lf(zl),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(c),!0),this.B=!1}catch(k){lp(this,k);return}if(c=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var R in _)p.set(R,_[R]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const k of _.keys())p.set(k,_.get(k));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(k=>k.toLowerCase()=="content-type"),R=a.FormData&&c instanceof a.FormData,!(0<=Array.prototype.indexOf.call(ev,h,void 0))||_||R||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,F]of p)this.g.setRequestHeader(k,F);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{dp(this),this.u=!0,this.g.send(c),this.u=!1}catch(k){lp(this,k)}};function lp(c,h){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=h,c.m=5,up(c),ya(c)}function up(c){c.A||(c.A=!0,et(c,"complete"),et(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,et(this,"complete"),et(this,"abort"),ya(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ya(this,!0)),Se.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?hp(this):this.bb())},n.bb=function(){hp(this)};function hp(c){if(c.h&&typeof o<"u"&&(!c.v[1]||Ht(c)!=4||c.Z()!=2)){if(c.u&&Ht(c)==4)xf(c.Ea,0,c);else if(et(c,"readystatechange"),Ht(c)==4){c.h=!1;try{const F=c.Z();e:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var _;if(_=F===0){var R=String(c.D).match(tp)[1]||null;!R&&a.self&&a.self.location&&(R=a.self.location.protocol.slice(0,-1)),_=!Zw.test(R?R.toLowerCase():"")}p=_}if(p)et(c,"complete"),et(c,"success");else{c.m=6;try{var k=2<Ht(c)?c.g.statusText:""}catch{k=""}c.l=k+" ["+c.Z()+"]",up(c)}}finally{ya(c)}}}}function ya(c,h){if(c.g){dp(c);const p=c.g,_=c.v[0]?()=>{}:null;c.g=null,c.v=null,h||et(c,"ready");try{p.onreadystatechange=_}catch{}}}function dp(c){c.I&&(a.clearTimeout(c.I),c.I=null)}n.isActive=function(){return!!this.g};function Ht(c){return c.g?c.g.readyState:0}n.Z=function(){try{return 2<Ht(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(c){if(this.g){var h=this.g.responseText;return c&&h.indexOf(c)==0&&(h=h.substring(c.length)),Dw(h)}};function fp(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function tv(c){const h={};c=(c.g&&2<=Ht(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<c.length;_++){if(B(c[_]))continue;var p=A(c[_]);const R=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const k=h[R]||[];h[R]=k,k.push(p)}w(h,function(_){return _.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function bs(c,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[c]||h}function pp(c){this.Aa=0,this.i=[],this.j=new Ts,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=bs("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=bs("baseRetryDelayMs",5e3,c),this.cb=bs("retryDelaySeedMs",1e4,c),this.Wa=bs("forwardChannelMaxRetries",2,c),this.wa=bs("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Qf(c&&c.concurrentRequestLimit),this.Da=new Jw,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=pp.prototype,n.la=8,n.G=1,n.connect=function(c,h,p,_){tt(0),this.W=c,this.H=h||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.I=vp(this,null,this.W),Ea(this)};function Xl(c){if(mp(c),c.G==3){var h=c.U++,p=Kt(c.I);if(_e(p,"SID",c.K),_e(p,"RID",h),_e(p,"TYPE","terminate"),Ps(c,p),h=new In(c,c.j,h),h.L=2,h.v=ma(Kt(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=h.v,p=!0),p||(h.g=Ap(h.j,null),h.g.ea(h.v)),h.F=Date.now(),da(h)}wp(c)}function Ia(c){c.g&&(eu(c),c.g.cancel(),c.g=null)}function mp(c){Ia(c),c.u&&(a.clearTimeout(c.u),c.u=null),Ta(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&a.clearTimeout(c.s),c.s=null)}function Ea(c){if(!Yf(c.h)&&!c.s){c.s=!0;var h=c.Ga;fs||Cf(),ps||(fs(),ps=!0),kl.add(h,c),c.B=0}}function nv(c,h){return Jf(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=h.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Es(m(c.Ga,c,h),Tp(c,c.B)),c.B++,!0)}n.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const R=new In(this,this.j,c);let k=this.o;if(this.S&&(k?(k=y(k),v(k,this.S)):k=this.S),this.m!==null||this.O||(R.H=k,k=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=gp(this,R,h),p=Kt(this.I),_e(p,"RID",c),_e(p,"CVER",22),this.D&&_e(p,"X-HTTP-Session-Id",this.D),Ps(this,p),k&&(this.O?h="headers="+encodeURIComponent(String(cp(k)))+"&"+h:this.m&&Jl(p,this.m,k)),Yl(this.h,R),this.Ua&&_e(p,"TYPE","init"),this.P?(_e(p,"$req",h),_e(p,"SID","null"),R.T=!0,$l(R,p,null)):$l(R,p,h),this.G=2}}else this.G==3&&(c?_p(this,c):this.i.length==0||Yf(this.h)||_p(this))};function _p(c,h){var p;h?p=h.l:p=c.U++;const _=Kt(c.I);_e(_,"SID",c.K),_e(_,"RID",p),_e(_,"AID",c.T),Ps(c,_),c.m&&c.o&&Jl(_,c.m,c.o),p=new In(c,c.j,p,c.B+1),c.m===null&&(p.H=c.o),h&&(c.i=h.D.concat(c.i)),h=gp(c,p,1e3),p.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Yl(c.h,p),$l(p,_,h)}function Ps(c,h){c.H&&ee(c.H,function(p,_){_e(h,_,p)}),c.l&&ep({},function(p,_){_e(h,_,p)})}function gp(c,h,p){p=Math.min(c.i.length,p);var _=c.l?m(c.l.Na,c.l,c):null;e:{var R=c.i;let k=-1;for(;;){const F=["count="+p];k==-1?0<p?(k=R[0].g,F.push("ofs="+k)):k=0:F.push("ofs="+k);let pe=!0;for(let Ge=0;Ge<p;Ge++){let se=R[Ge].g;const Ke=R[Ge].map;if(se-=k,0>se)k=Math.max(0,R[Ge].g-100),pe=!1;else try{Xw(Ke,F,"req"+se+"_")}catch{_&&_(Ke)}}if(pe){_=F.join("&");break e}}}return c=c.i.splice(0,p),h.D=c,_}function yp(c){if(!c.g&&!c.u){c.Y=1;var h=c.Fa;fs||Cf(),ps||(fs(),ps=!0),kl.add(h,c),c.v=0}}function Zl(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Es(m(c.Fa,c),Tp(c,c.v)),c.v++,!0)}n.Fa=function(){if(this.u=null,Ip(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Es(m(this.ab,this),c)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,tt(10),Ia(this),Ip(this))};function eu(c){c.A!=null&&(a.clearTimeout(c.A),c.A=null)}function Ip(c){c.g=new In(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var h=Kt(c.qa);_e(h,"RID","rpc"),_e(h,"SID",c.K),_e(h,"AID",c.T),_e(h,"CI",c.F?"0":"1"),!c.F&&c.ja&&_e(h,"TO",c.ja),_e(h,"TYPE","xmlhttp"),Ps(c,h),c.m&&c.o&&Jl(h,c.m,c.o),c.L&&(c.g.I=c.L);var p=c.g;c=c.ia,p.L=1,p.v=ma(Kt(h)),p.m=null,p.P=!0,$f(p,c)}n.Za=function(){this.C!=null&&(this.C=null,Ia(this),Zl(this),tt(19))};function Ta(c){c.C!=null&&(a.clearTimeout(c.C),c.C=null)}function Ep(c,h){var p=null;if(c.g==h){Ta(c),eu(c),c.g=null;var _=2}else if(Ql(c.h,h))p=h.D,Xf(c.h,h),_=1;else return;if(c.G!=0){if(h.o)if(_==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var R=c.B;_=la(),et(_,new Gf(_,p)),Ea(c)}else yp(c);else if(R=h.s,R==3||R==0&&0<h.X||!(_==1&&nv(c,h)||_==2&&Zl(c)))switch(p&&0<p.length&&(h=c.h,h.i=h.i.concat(p)),R){case 1:lr(c,5);break;case 4:lr(c,10);break;case 3:lr(c,6);break;default:lr(c,2)}}}function Tp(c,h){let p=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(p*=2),p*h}function lr(c,h){if(c.j.info("Error code "+h),h==2){var p=m(c.fb,c),_=c.Xa;const R=!_;_=new cr(_||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||fa(_,"https"),ma(_),R?Qw(_.toString(),p):Yw(_.toString(),p)}else tt(2);c.G=0,c.l&&c.l.sa(h),wp(c),mp(c)}n.fb=function(c){c?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function wp(c){if(c.G=0,c.ka=[],c.l){const h=Zf(c.h);(h.length!=0||c.i.length!=0)&&(P(c.ka,h),P(c.ka,c.i),c.h.i.length=0,N(c.i),c.i.length=0),c.l.ra()}}function vp(c,h,p){var _=p instanceof cr?Kt(p):new cr(p);if(_.g!="")h&&(_.g=h+"."+_.g),pa(_,_.s);else{var R=a.location;_=R.protocol,h=h?h+"."+R.hostname:R.hostname,R=+R.port;var k=new cr(null);_&&fa(k,_),h&&(k.g=h),R&&pa(k,R),p&&(k.l=p),_=k}return p=c.D,h=c.ya,p&&h&&_e(_,p,h),_e(_,"VER",c.la),Ps(c,_),_}function Ap(c,h,p){if(h&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=c.Ca&&!c.pa?new Se(new _a({eb:p})):new Se(c.pa),h.Ha(c.J),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Rp(){}n=Rp.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function wa(){}wa.prototype.g=function(c,h){return new dt(c,h)};function dt(c,h){$e.call(this),this.g=new pp(h),this.l=c,this.h=h&&h.messageUrlParams||null,c=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(c?c["X-WebChannel-Content-Type"]=h.messageContentType:c={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(c?c["X-WebChannel-Client-Profile"]=h.va:c={"X-WebChannel-Client-Profile":h.va}),this.g.S=c,(c=h&&h.Sb)&&!B(c)&&(this.g.m=c),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!B(h)&&(this.g.D=h,c=this.h,c!==null&&h in c&&(c=this.h,h in c&&delete c[h])),this.j=new Xr(this)}T(dt,$e),dt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},dt.prototype.close=function(){Xl(this.g)},dt.prototype.o=function(c){var h=this.g;if(typeof c=="string"){var p={};p.__data__=c,c=p}else this.u&&(p={},p.__data__=Bl(c),c=p);h.i.push(new Uw(h.Ya++,c)),h.G==3&&Ea(h)},dt.prototype.N=function(){this.g.l=null,delete this.j,Xl(this.g),delete this.g,dt.aa.N.call(this)};function Sp(c){Gl.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var h=c.__sm__;if(h){e:{for(const p in h){c=p;break e}c=void 0}(this.i=c)&&(c=this.i,h=h!==null&&c in h?h[c]:void 0),this.data=h}else this.data=c}T(Sp,Gl);function Cp(){Wl.call(this),this.status=1}T(Cp,Wl);function Xr(c){this.g=c}T(Xr,Rp),Xr.prototype.ua=function(){et(this.g,"a")},Xr.prototype.ta=function(c){et(this.g,new Sp(c))},Xr.prototype.sa=function(c){et(this.g,new Cp)},Xr.prototype.ra=function(){et(this.g,"b")},wa.prototype.createWebChannel=wa.prototype.g,dt.prototype.send=dt.prototype.o,dt.prototype.open=dt.prototype.m,dt.prototype.close=dt.prototype.close,gy=function(){return new wa},_y=function(){return la()},my=or,Du={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ua.NO_ERROR=0,ua.TIMEOUT=8,ua.HTTP_ERROR=6,Ba=ua,Wf.COMPLETE="complete",py=Wf,Ff.EventType=ys,ys.OPEN="a",ys.CLOSE="b",ys.ERROR="c",ys.MESSAGE="d",$e.prototype.listen=$e.prototype.K,Gs=Ff,Se.prototype.listenOnce=Se.prototype.L,Se.prototype.getLastError=Se.prototype.Ka,Se.prototype.getLastErrorCode=Se.prototype.Ba,Se.prototype.getStatus=Se.prototype.Z,Se.prototype.getResponseJson=Se.prototype.Oa,Se.prototype.getResponseText=Se.prototype.oa,Se.prototype.send=Se.prototype.ea,Se.prototype.setWithCredentials=Se.prototype.Ha,fy=Se}).apply(typeof Ra<"u"?Ra:typeof self<"u"?self:typeof window<"u"?window:{});const rm="@firebase/firestore",im="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Fe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Fe.UNAUTHENTICATED=new Fe(null),Fe.GOOGLE_CREDENTIALS=new Fe("google-credentials-uid"),Fe.FIRST_PARTY=new Fe("first-party-uid"),Fe.MOCK_USER=new Fe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
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
 */let Ji="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
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
 */const qn=new Wc("@firebase/firestore");function ai(){return qn.logLevel}function nC(n){qn.setLogLevel(n)}function x(n,...e){if(qn.logLevel<=te.DEBUG){const t=e.map(Fh);qn.debug(`Firestore (${Ji}): ${n}`,...t)}}function Ce(n,...e){if(qn.logLevel<=te.ERROR){const t=e.map(Fh);qn.error(`Firestore (${Ji}): ${n}`,...t)}}function pt(n,...e){if(qn.logLevel<=te.WARN){const t=e.map(Fh);qn.warn(`Firestore (${Ji}): ${n}`,...t)}}function Fh(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function q(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,yy(n,r,t)}function yy(n,e,t){let r=`FIRESTORE (${Ji}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Ce(r),new Error(r)}function G(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||yy(e,i,r)}function rC(n,e){n||q(57014,e)}function L(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends qt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class qe{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Iy{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ey{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Fe.UNAUTHENTICATED))}shutdown(){}}class iC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class sC{constructor(e){this.t=e,this.currentUser=Fe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){G(this.o===void 0,42304);let r=this.i;const i=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let s=new qe;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new qe,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new qe)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(G(typeof r.accessToken=="string",31837,{l:r}),new Iy(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return G(e===null||typeof e=="string",2055,{h:e}),new Fe(e)}}class oC{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Fe.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class aC{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new oC(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Fe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cC{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,nt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){G(this.o===void 0,3512);const r=s=>{s.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,x("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new xu(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(G(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new xu(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}class lC{getToken(){return Promise.resolve(new xu(""))}invalidateToken(){}start(e,t){}shutdown(){}}/**
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
 */function uC(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Hc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=uC(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%62))}return r}}function $(n,e){return n<e?-1:n>e?1:0}function Vu(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const i=n.charAt(r),s=e.charAt(r);if(i!==s)return lu(i)===lu(s)?$(i,s):lu(i)?1:-1}return $(n.length,e.length)}const hC=55296,dC=57343;function lu(n){const e=n.charCodeAt(0);return e>=hC&&e<=dC}function vi(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}function Ty(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Ou="__name__";class kt{constructor(e,t,r){t===void 0?t=0:t>e.length&&q(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&q(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return kt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof kt?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=kt.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return $(e.length,t.length)}static compareSegments(e,t){const r=kt.isNumericId(e),i=kt.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?kt.extractNumericId(e).compare(kt.extractNumericId(t)):Vu(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Mn.fromString(e.substring(4,e.length-2))}}class J extends kt{construct(e,t,r){return new J(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new D(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new J(t)}static emptyPath(){return new J([])}}const fC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ie extends kt{construct(e,t,r){return new Ie(e,t,r)}static isValidIdentifier(e){return fC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ie.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ou}static keyField(){return new Ie([Ou])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new D(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new D(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new D(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new D(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ie(t)}static emptyPath(){return new Ie([])}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class O{constructor(e){this.path=e}static fromPath(e){return new O(J.fromString(e))}static fromName(e){return new O(J.fromString(e).popFirst(5))}static empty(){return new O(J.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&J.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return J.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new O(new J(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Uh(n,e,t){if(!t)throw new D(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function wy(n,e,t,r){if(e===!0&&r===!0)throw new D(C.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function sm(n){if(!O.isDocumentKey(n))throw new D(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function om(n){if(O.isDocumentKey(n))throw new D(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function vy(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Qc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":q(12329,{type:typeof n})}function Z(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new D(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Qc(n);throw new D(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function Ay(n,e){if(e<=0)throw new D(C.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function De(n,e){const t={typeString:n};return e&&(t.value=e),t}function Wr(n,e){if(!vy(n))throw new D(C.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const o=n[r];if(i&&typeof o!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){t=`Expected '${r}' field to equal '${s.value}'`;break}}if(t)throw new D(C.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const am=-62135596800,cm=1e6;class ce{static now(){return ce.fromMillis(Date.now())}static fromDate(e){return ce.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*cm);return new ce(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new D(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new D(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<am)throw new D(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new D(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/cm}_compareTo(e){return this.seconds===e.seconds?$(this.nanoseconds,e.nanoseconds):$(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ce._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Wr(e,ce._jsonSchema))return new ce(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-am;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ce._jsonSchemaVersion="firestore/timestamp/1.0",ce._jsonSchema={type:De("string",ce._jsonSchemaVersion),seconds:De("number"),nanoseconds:De("number")};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class W{static fromTimestamp(e){return new W(e)}static min(){return new W(new ce(0,0))}static max(){return new W(new ce(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const Ai=-1;class Ri{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}}function Mu(n){return n.fields.find(e=>e.kind===2)}function dr(n){return n.fields.filter(e=>e.kind!==2)}function pC(n,e){let t=$(n.collectionGroup,e.collectionGroup);if(t!==0)return t;for(let r=0;r<Math.min(n.fields.length,e.fields.length);++r)if(t=mC(n.fields[r],e.fields[r]),t!==0)return t;return $(n.fields.length,e.fields.length)}Ri.UNKNOWN_ID=-1;class vr{constructor(e,t){this.fieldPath=e,this.kind=t}}function mC(n,e){const t=Ie.comparator(n.fieldPath,e.fieldPath);return t!==0?t:$(n.kind,e.kind)}class Si{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Si(0,mt.min())}}function Ry(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=W.fromTimestamp(r===1e9?new ce(t+1,0):new ce(t,r));return new mt(i,O.empty(),e)}function Sy(n){return new mt(n.readTime,n.key,Ai)}class mt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new mt(W.min(),O.empty(),Ai)}static max(){return new mt(W.max(),O.empty(),Ai)}}function Bh(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=O.comparator(n.documentKey,e.documentKey),t!==0?t:$(n.largestBatchId,e.largestBatchId))}/**
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
 */const Cy="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class by{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */async function Xn(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==Cy)throw n;x("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new S((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof S?t:S.resolve(t)}catch(t){return S.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):S.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):S.reject(t)}static resolve(e){return new S((t,r)=>{t(e)})}static reject(e){return new S((t,r)=>{r(e)})}static waitFor(e){return new S((t,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&t()},l=>r(l))}),o=!0,s===i&&t()})}static or(e){let t=S.resolve(!1);for(const r of e)t=t.next(i=>i?S.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new S((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;t(e[u]).next(d=>{o[u]=d,++a,a===s&&r(o)},d=>i(d))}})}static doWhile(e,t){return new S((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const ft="SimpleDb";class Yc{static open(e,t,r,i){try{return new Yc(t,e.transaction(i,r))}catch(s){throw new Qs(t,s)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new qe,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new Qs(e,t.error)):this.S.resolve()},this.transaction.onerror=r=>{const i=qh(r.target.error);this.S.reject(new Qs(e,i))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(x(ft,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}C(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new gC(t)}}class Mt{static delete(e){return x(ft,"Removing database:",e),mr(gg().indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!Sg())return!1;if(Mt.F())return!0;const e=xe(),t=Mt.M(e),r=0<t&&t<10,i=Py(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static F(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)==null?void 0:e.__PRIVATE_USE_MOCK_PERSISTENCE)==="YES"}static O(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}constructor(e,t,r){this.name=e,this.version=t,this.N=r,this.B=null,Mt.M(xe())===12.2&&Ce("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async L(e){return this.db||(x(ft,"Opening database:",this.name),this.db=await new Promise((t,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{r(new Qs(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new D(C.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new D(C.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Qs(e,o))},i.onupgradeneeded=s=>{x(ft,'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.N.k(o,i.transaction,s.oldVersion,this.version).next(()=>{x(ft,"Database upgrade to version "+this.version+" complete")})}})),this.q&&(this.db.onversionchange=t=>this.q(t)),this.db}$(e){this.q=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,i){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.L(e);const a=Yc.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(u=>(a.C(),u)).catch(u=>(a.abort(u),S.reject(u))).toPromise();return l.catch(()=>{}),await a.D,l}catch(a){const l=a,u=l.name!=="FirebaseError"&&o<3;if(x(ft,"Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function Py(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class _C{constructor(e){this.U=e,this.K=!1,this.W=null}get isDone(){return this.K}get G(){return this.W}set cursor(e){this.U=e}done(){this.K=!0}j(e){this.W=e}delete(){return mr(this.U.delete())}}class Qs extends D{constructor(e,t){super(C.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Zn(n){return n.name==="IndexedDbTransactionError"}class gC{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(x(ft,"PUT",this.store.name,e,t),r=this.store.put(t,e)):(x(ft,"PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),mr(r)}add(e){return x(ft,"ADD",this.store.name,e,e),mr(this.store.add(e))}get(e){return mr(this.store.get(e)).next(t=>(t===void 0&&(t=null),x(ft,"GET",this.store.name,e,t),t))}delete(e){return x(ft,"DELETE",this.store.name,e),mr(this.store.delete(e))}count(){return x(ft,"COUNT",this.store.name),mr(this.store.count())}J(e,t){const r=this.options(e,t),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new S((o,a)=>{s.onerror=l=>{a(l.target.error)},s.onsuccess=l=>{o(l.target.result)}})}{const s=this.cursor(r),o=[];return this.H(s,(a,l)=>{o.push(l)}).next(()=>o)}}Y(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new S((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}Z(e,t){x(ft,"DELETE ALL",this.store.name);const r=this.options(e,t);r.X=!1;const i=this.cursor(r);return this.H(i,(s,o,a)=>a.delete())}ee(e,t){let r;t?r=e:(r={},t=e);const i=this.cursor(r);return this.H(i,t)}te(e){const t=this.cursor({});return new S((r,i)=>{t.onerror=s=>{const o=qh(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}H(e,t){const r=[];return new S((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new _C(a),u=t(a.primaryKey,a.value,l);if(u instanceof S){const d=u.catch(f=>(l.done(),S.reject(f)));r.push(d)}l.isDone?i():l.G===null?a.continue():a.continue(l.G)}}).next(()=>S.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.X?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function mr(n){return new S((e,t)=>{n.onsuccess=r=>{const i=r.target.result;e(i)},n.onerror=r=>{const i=qh(r.target.error);t(i)}})}let lm=!1;function qh(n){const e=Mt.M(xe());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new D("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return lm||(lm=!0,setTimeout(()=>{throw r},0)),r}}return n}const Ys="IndexBackfiller";class yC{constructor(e,t){this.asyncQueue=e,this.ne=t,this.task=null}start(){this.re(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}re(e){x(Ys,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{const t=await this.ne.ie();x(Ys,`Documents written: ${t}`)}catch(t){Zn(t)?x(Ys,"Ignoring IndexedDB error during index backfill: ",t):await Xn(t)}await this.re(6e4)})}}class IC{constructor(e,t){this.localStore=e,this.persistence=t}async ie(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.se(t,e))}se(e,t){const r=new Set;let i=t,s=!0;return S.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return x(Ys,`Processing collection: ${o}`),this.oe(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>t-i)}oe(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this._e(i,s)).next(a=>(x(Ys,`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}_e(e,t){let r=e;return t.changes.forEach((i,s)=>{const o=Sy(s);Bh(o,r)>0&&(r=o)}),new mt(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class it{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}it.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Ln=-1;function qo(n){return n==null}function po(n){return n===0&&1/n==-1/0}function Ny(n){return typeof n=="number"&&Number.isInteger(n)&&!po(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const uc="";function Je(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=um(e)),e=EC(n.get(t),e);return um(e)}function EC(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case uc:t+="";break;default:t+=s}}return t}function um(n){return n+uc+""}function xt(n){const e=n.length;if(G(e>=2,64408,{path:n}),e===2)return G(n.charAt(0)===uc&&n.charAt(1)==="",56145,{path:n}),J.emptyPath();const t=e-2,r=[];let i="";for(let s=0;s<e;){const o=n.indexOf(uc,s);switch((o<0||o>t)&&q(50515,{path:n}),n.charAt(o+1)){case"":const a=n.substring(s,o);let l;i.length===0?l=a:(i+=a,l=i,i=""),r.push(l);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:q(61167,{path:n})}s=o+2}return new J(r)}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const fr="remoteDocuments",Go="owner",ei="owner",mo="mutationQueues",TC="userId",wt="mutations",hm="batchId",Er="userMutationsIndex",dm=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
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
 */function qa(n,e){return[n,Je(e)]}function ky(n,e,t){return[n,Je(e),t]}const wC={},Ci="documentMutations",hc="remoteDocumentsV14",vC=["prefixPath","collectionGroup","readTime","documentId"],Ga="documentKeyIndex",AC=["prefixPath","collectionGroup","documentId"],Dy="collectionGroupIndex",RC=["collectionGroup","readTime","prefixPath","documentId"],_o="remoteDocumentGlobal",Lu="remoteDocumentGlobalKey",bi="targets",xy="queryTargetsIndex",SC=["canonicalId","targetId"],Pi="targetDocuments",CC=["targetId","path"],Gh="documentTargetsIndex",bC=["path","targetId"],dc="targetGlobalKey",Ar="targetGlobal",go="collectionParents",PC=["collectionId","parent"],Ni="clientMetadata",NC="clientId",Jc="bundles",kC="bundleId",Xc="namedQueries",DC="name",Wh="indexConfiguration",xC="indexId",Fu="collectionGroupIndex",VC="collectionGroup",Js="indexState",OC=["indexId","uid"],Vy="sequenceNumberIndex",MC=["uid","sequenceNumber"],Xs="indexEntries",LC=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Oy="documentKeyIndex",FC=["indexId","uid","orderedDocumentKey"],Zc="documentOverlays",UC=["userId","collectionPath","documentId"],Uu="collectionPathOverlayIndex",BC=["userId","collectionPath","largestBatchId"],My="collectionGroupOverlayIndex",qC=["userId","collectionGroup","largestBatchId"],zh="globals",GC="name",Ly=[mo,wt,Ci,fr,bi,Go,Ar,Pi,Ni,_o,go,Jc,Xc],WC=[...Ly,Zc],Fy=[mo,wt,Ci,hc,bi,Go,Ar,Pi,Ni,_o,go,Jc,Xc,Zc],Uy=Fy,jh=[...Uy,Wh,Js,Xs],zC=jh,By=[...jh,zh],jC=By;/**
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
 */class Bu extends by{constructor(e,t){super(),this.le=e,this.currentSequenceNumber=t}}function Oe(n,e){const t=L(n);return Mt.O(t.le,e)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function fm(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function er(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function qy(n,e){const t=[];for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.push(e(n[r],r,n));return t}function Gy(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
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
 */let Ae=class qu{constructor(e,t){this.comparator=e,this.root=t||Fn.EMPTY}insert(e,t){return new qu(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Fn.BLACK,null,null))}remove(e){return new qu(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Fn.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Sa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Sa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Sa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Sa(this.root,e,this.comparator,!0)}},Sa=class{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Fn=class Qt{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??Qt.RED,this.left=i??Qt.EMPTY,this.right=s??Qt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new Qt(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Qt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Qt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw q(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw q(27949);return e+(this.isRed()?0:1)}};Fn.EMPTY=null,Fn.RED=!0,Fn.BLACK=!1;Fn.EMPTY=new class{constructor(){this.size=0}get key(){throw q(57766)}get value(){throw q(16141)}get color(){throw q(16727)}get left(){throw q(29726)}get right(){throw q(36894)}copy(e,t,r,i,s){return this}insert(e,t,r){return new Fn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class he{constructor(e){this.comparator=e,this.data=new Ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new pm(this.data.getIterator())}getIteratorFrom(e){return new pm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof he)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new he(this.comparator);return t.data=e,t}}class pm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function ti(n){return n.hasNext()?n.getNext():void 0}/**
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
 */class st{constructor(e){this.fields=e,e.sort(Ie.comparator)}static empty(){return new st([])}unionWith(e){let t=new he(Ie.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new st(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return vi(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Wy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function $C(){return typeof atob<"u"}/**
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
 */class Re{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Wy("Invalid base64 string: "+s):s}}(e);return new Re(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Re(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return $(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Re.EMPTY_BYTE_STRING=new Re("");const KC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function cn(n){if(G(!!n,39018),typeof n=="string"){let e=0;const t=KC.exec(n);if(G(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ee(n.seconds),nanos:Ee(n.nanos)}}function Ee(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ln(n){return typeof n=="string"?Re.fromBase64String(n):Re.fromUint8Array(n)}/**
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
 */const zy="server_timestamp",jy="__type__",$y="__previous_value__",Ky="__local_write_time__";function el(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[jy])==null?void 0:r.stringValue)===zy}function tl(n){const e=n.mapValue.fields[$y];return el(e)?tl(e):e}function yo(n){const e=cn(n.mapValue.fields[Ky].timestampValue);return new ce(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class HC{constructor(e,t,r,i,s,o,a,l,u,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=d}}const Io="(default)";class Gn{constructor(e,t){this.projectId=e,this.database=t||Io}static empty(){return new Gn("","")}get isDefaultDatabase(){return this.database===Io}isEqual(e){return e instanceof Gn&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const $h="__type__",Hy="__max__",Dn={mapValue:{fields:{__type__:{stringValue:Hy}}}},Kh="__vector__",ki="value",Wa={nullValue:"NULL_VALUE"};function Wn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?el(n)?4:Qy(n)?9007199254740991:nl(n)?10:11:q(28295,{value:n})}function Ft(n,e){if(n===e)return!0;const t=Wn(n);if(t!==Wn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return yo(n).isEqual(yo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=cn(i.timestampValue),a=cn(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return ln(i.bytesValue).isEqual(ln(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return Ee(i.geoPointValue.latitude)===Ee(s.geoPointValue.latitude)&&Ee(i.geoPointValue.longitude)===Ee(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ee(i.integerValue)===Ee(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ee(i.doubleValue),a=Ee(s.doubleValue);return o===a?po(o)===po(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return vi(n.arrayValue.values||[],e.arrayValue.values||[],Ft);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(fm(o)!==fm(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Ft(o[l],a[l])))return!1;return!0}(n,e);default:return q(52216,{left:n})}}function Eo(n,e){return(n.values||[]).find(t=>Ft(t,e))!==void 0}function zn(n,e){if(n===e)return 0;const t=Wn(n),r=Wn(e);if(t!==r)return $(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return $(n.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Ee(s.integerValue||s.doubleValue),l=Ee(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(n,e);case 3:return mm(n.timestampValue,e.timestampValue);case 4:return mm(yo(n),yo(e));case 5:return Vu(n.stringValue,e.stringValue);case 6:return function(s,o){const a=ln(s),l=ln(o);return a.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const d=$(a[u],l[u]);if(d!==0)return d}return $(a.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const a=$(Ee(s.latitude),Ee(o.latitude));return a!==0?a:$(Ee(s.longitude),Ee(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return _m(n.arrayValue,e.arrayValue);case 10:return function(s,o){var m,g,T,N;const a=s.fields||{},l=o.fields||{},u=(m=a[ki])==null?void 0:m.arrayValue,d=(g=l[ki])==null?void 0:g.arrayValue,f=$(((T=u==null?void 0:u.values)==null?void 0:T.length)||0,((N=d==null?void 0:d.values)==null?void 0:N.length)||0);return f!==0?f:_m(u,d)}(n.mapValue,e.mapValue);case 11:return function(s,o){if(s===Dn.mapValue&&o===Dn.mapValue)return 0;if(s===Dn.mapValue)return 1;if(o===Dn.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},d=Object.keys(u);l.sort(),d.sort();for(let f=0;f<l.length&&f<d.length;++f){const m=Vu(l[f],d[f]);if(m!==0)return m;const g=zn(a[l[f]],u[d[f]]);if(g!==0)return g}return $(l.length,d.length)}(n.mapValue,e.mapValue);default:throw q(23264,{he:t})}}function mm(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return $(n,e);const t=cn(n),r=cn(e),i=$(t.seconds,r.seconds);return i!==0?i:$(t.nanos,r.nanos)}function _m(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=zn(t[i],r[i]);if(s)return s}return $(t.length,r.length)}function Di(n){return Gu(n)}function Gu(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=cn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return ln(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return O.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=Gu(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Gu(t.fields[o])}`;return i+"}"}(n.mapValue):q(61005,{value:n})}function za(n){switch(Wn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=tl(n);return e?16+za(e):16;case 5:return 2*n.stringValue.length;case 6:return ln(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+za(s),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return er(r.fields,(s,o)=>{i+=s.length+za(o)}),i}(n.mapValue);default:throw q(13486,{value:n})}}function Pr(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Wu(n){return!!n&&"integerValue"in n}function To(n){return!!n&&"arrayValue"in n}function gm(n){return!!n&&"nullValue"in n}function ym(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ja(n){return!!n&&"mapValue"in n}function nl(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[$h])==null?void 0:r.stringValue)===Kh}function Zs(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return er(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Zs(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Zs(n.arrayValue.values[t]);return e}return{...n}}function Qy(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Hy}const Yy={mapValue:{fields:{[$h]:{stringValue:Kh},[ki]:{arrayValue:{}}}}};function QC(n){return"nullValue"in n?Wa:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Pr(Gn.empty(),O.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?nl(n)?Yy:{mapValue:{}}:q(35942,{value:n})}function YC(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Pr(Gn.empty(),O.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?Yy:"mapValue"in n?nl(n)?{mapValue:{}}:Dn:q(61959,{value:n})}function Im(n,e){const t=zn(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function Em(n,e){const t=zn(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ze{constructor(e){this.value=e}static empty(){return new ze({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ja(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Zs(t)}setAll(e){let t=Ie.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const l=this.getFieldsMap(t);this.applyChanges(l,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=Zs(o):i.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());ja(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ft(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];ja(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){er(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ze(Zs(this.value))}}function Jy(n){const e=[];return er(n.fields,(t,r)=>{const i=new Ie([t]);if(ja(r)){const s=Jy(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new st(e)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ye{constructor(e,t,r,i,s,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ye(e,0,W.min(),W.min(),W.min(),ze.empty(),0)}static newFoundDocument(e,t,r,i){return new ye(e,1,t,W.min(),r,i,0)}static newNoDocument(e,t){return new ye(e,2,t,W.min(),W.min(),ze.empty(),0)}static newUnknownDocument(e,t){return new ye(e,3,t,W.min(),W.min(),ze.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ze.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ze.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ye&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ye(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class jn{constructor(e,t){this.position=e,this.inclusive=t}}function Tm(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=O.comparator(O.fromName(o.referenceValue),t.key):r=zn(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function wm(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ft(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class wo{constructor(e,t="asc"){this.field=e,this.dir=t}}function JC(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Xy{}class ne extends Xy{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new XC(e,t,r):t==="array-contains"?new tb(e,r):t==="in"?new iI(e,r):t==="not-in"?new nb(e,r):t==="array-contains-any"?new rb(e,r):new ne(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new ZC(e,r):new eb(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(zn(t,this.value)):t!==null&&Wn(this.value)===Wn(t)&&this.matchesComparison(zn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class le extends Xy{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new le(e,t)}matches(e){return xi(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function xi(n){return n.op==="and"}function zu(n){return n.op==="or"}function Hh(n){return Zy(n)&&xi(n)}function Zy(n){for(const e of n.filters)if(e instanceof le)return!1;return!0}function ju(n){if(n instanceof ne)return n.field.canonicalString()+n.op.toString()+Di(n.value);if(Hh(n))return n.filters.map(e=>ju(e)).join(",");{const e=n.filters.map(t=>ju(t)).join(",");return`${n.op}(${e})`}}function eI(n,e){return n instanceof ne?function(r,i){return i instanceof ne&&r.op===i.op&&r.field.isEqual(i.field)&&Ft(r.value,i.value)}(n,e):n instanceof le?function(r,i){return i instanceof le&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&eI(o,i.filters[a]),!0):!1}(n,e):void q(19439)}function tI(n,e){const t=n.filters.concat(e);return le.create(t,n.op)}function nI(n){return n instanceof ne?function(t){return`${t.field.canonicalString()} ${t.op} ${Di(t.value)}`}(n):n instanceof le?function(t){return t.op.toString()+" {"+t.getFilters().map(nI).join(" ,")+"}"}(n):"Filter"}class XC extends ne{constructor(e,t,r){super(e,t,r),this.key=O.fromName(r.referenceValue)}matches(e){const t=O.comparator(e.key,this.key);return this.matchesComparison(t)}}class ZC extends ne{constructor(e,t){super(e,"in",t),this.keys=rI("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class eb extends ne{constructor(e,t){super(e,"not-in",t),this.keys=rI("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function rI(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(r=>O.fromName(r.referenceValue))}class tb extends ne{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return To(t)&&Eo(t.arrayValue,this.value)}}class iI extends ne{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Eo(this.value.arrayValue,t)}}class nb extends ne{constructor(e,t){super(e,"not-in",t)}matches(e){if(Eo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Eo(this.value.arrayValue,t)}}class rb extends ne{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!To(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Eo(this.value.arrayValue,r))}}/**
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
 */class ib{constructor(e,t=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.Te=null}}function $u(n,e=null,t=[],r=[],i=null,s=null,o=null){return new ib(n,e,t,r,i,s,o)}function Nr(n){const e=L(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>ju(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),qo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Di(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Di(r)).join(",")),e.Te=t}return e.Te}function Wo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!JC(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!eI(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!wm(n.startAt,e.startAt)&&wm(n.endAt,e.endAt)}function fc(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function pc(n,e){return n.filters.filter(t=>t instanceof ne&&t.field.isEqual(e))}function vm(n,e,t){let r=Wa,i=!0;for(const s of pc(n,e)){let o=Wa,a=!0;switch(s.op){case"<":case"<=":o=QC(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=Wa}Im({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];Im({value:r,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}function Am(n,e,t){let r=Dn,i=!0;for(const s of pc(n,e)){let o=Dn,a=!0;switch(s.op){case">=":case">":o=YC(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Dn}Em({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];Em({value:r,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class fn{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function sI(n,e,t,r,i,s,o,a){return new fn(n,e,t,r,i,s,o,a)}function Xi(n){return new fn(n)}function Rm(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Qh(n){return n.collectionGroup!==null}function mi(n){const e=L(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new he(Ie.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new wo(s,r))}),t.has(Ie.keyField().canonicalString())||e.Ie.push(new wo(Ie.keyField(),r))}return e.Ie}function Xe(n){const e=L(n);return e.Ee||(e.Ee=aI(e,mi(n))),e.Ee}function oI(n){const e=L(n);return e.de||(e.de=aI(e,n.explicitOrderBy)),e.de}function aI(n,e){if(n.limitType==="F")return $u(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new wo(i.field,s)});const t=n.endAt?new jn(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new jn(n.startAt.position,n.startAt.inclusive):null;return $u(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Ku(n,e){const t=n.filters.concat([e]);return new fn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function mc(n,e,t){return new fn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function zo(n,e){return Wo(Xe(n),Xe(e))&&n.limitType===e.limitType}function cI(n){return`${Nr(Xe(n))}|lt:${n.limitType}`}function ci(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>nI(i)).join(", ")}]`),qo(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Di(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Di(i)).join(",")),`Target(${r})`}(Xe(n))}; limitType=${n.limitType})`}function jo(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):O.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of mi(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=Tm(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,mi(r),i)||r.endAt&&!function(o,a,l){const u=Tm(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,mi(r),i))}(n,e)}function lI(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function uI(n){return(e,t)=>{let r=!1;for(const i of mi(n)){const s=sb(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function sb(n,e,t){const r=n.field.isKeyField()?O.comparator(e.key,t.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?zn(l,u):q(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return q(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class pn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){er(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Gy(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const ob=new Ae(O.comparator);function ot(){return ob}const hI=new Ae(O.comparator);function Ws(...n){let e=hI;for(const t of n)e=e.insert(t.key,t);return e}function dI(n){let e=hI;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Vt(){return eo()}function fI(){return eo()}function eo(){return new pn(n=>n.toString(),(n,e)=>n.isEqual(e))}const ab=new Ae(O.comparator),cb=new he(O.comparator);function H(...n){let e=cb;for(const t of n)e=e.add(t);return e}const lb=new he($);function Yh(){return lb}/**
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
 */function Jh(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:po(e)?"-0":e}}function pI(n){return{integerValue:""+n}}function mI(n,e){return Ny(e)?pI(e):Jh(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class rl{constructor(){this._=void 0}}function ub(n,e,t){return n instanceof Vi?function(i,s){const o={fields:{[jy]:{stringValue:zy},[Ky]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&el(s)&&(s=tl(s)),s&&(o.fields[$y]=s),{mapValue:o}}(t,e):n instanceof kr?gI(n,e):n instanceof Dr?yI(n,e):function(i,s){const o=_I(i,s),a=Sm(o)+Sm(i.Ae);return Wu(o)&&Wu(i.Ae)?pI(a):Jh(i.serializer,a)}(n,e)}function hb(n,e,t){return n instanceof kr?gI(n,e):n instanceof Dr?yI(n,e):t}function _I(n,e){return n instanceof Oi?function(r){return Wu(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Vi extends rl{}class kr extends rl{constructor(e){super(),this.elements=e}}function gI(n,e){const t=II(e);for(const r of n.elements)t.some(i=>Ft(i,r))||t.push(r);return{arrayValue:{values:t}}}class Dr extends rl{constructor(e){super(),this.elements=e}}function yI(n,e){let t=II(e);for(const r of n.elements)t=t.filter(i=>!Ft(i,r));return{arrayValue:{values:t}}}class Oi extends rl{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Sm(n){return Ee(n.integerValue||n.doubleValue)}function II(n){return To(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class $o{constructor(e,t){this.field=e,this.transform=t}}function db(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof kr&&i instanceof kr||r instanceof Dr&&i instanceof Dr?vi(r.elements,i.elements,Ft):r instanceof Oi&&i instanceof Oi?Ft(r.Ae,i.Ae):r instanceof Vi&&i instanceof Vi}(n.transform,e.transform)}class fb{constructor(e,t){this.version=e,this.transformResults=t}}class Te{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Te}static exists(e){return new Te(void 0,e)}static updateTime(e){return new Te(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function $a(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class il{}function EI(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new es(n.key,Te.none()):new Zi(n.key,n.data,Te.none());{const t=n.data,r=ze.empty();let i=new he(Ie.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new mn(n.key,r,new st(i.toArray()),Te.none())}}function pb(n,e,t){n instanceof Zi?function(i,s,o){const a=i.value.clone(),l=bm(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof mn?function(i,s,o){if(!$a(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=bm(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(TI(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function to(n,e,t,r){return n instanceof Zi?function(s,o,a,l){if(!$a(s.precondition,o))return a;const u=s.value.clone(),d=Pm(s.fieldTransforms,l,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,e,t,r):n instanceof mn?function(s,o,a,l){if(!$a(s.precondition,o))return a;const u=Pm(s.fieldTransforms,l,o),d=o.data;return d.setAll(TI(s)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(n,e,t,r):function(s,o,a){return $a(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function mb(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=_I(r.transform,i||null);s!=null&&(t===null&&(t=ze.empty()),t.set(r.field,s))}return t||null}function Cm(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&vi(r,i,(s,o)=>db(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Zi extends il{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class mn extends il{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function TI(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function bm(n,e,t){const r=new Map;G(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,hb(o,a,t[i]))}return r}function Pm(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,ub(s,o,e))}return r}class es extends il{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Xh extends il{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Zh{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&pb(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=to(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=to(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=fI();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=t.has(i.key)?null:a;const l=EI(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(W.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),H())}isEqual(e){return this.batchId===e.batchId&&vi(this.mutations,e.mutations,(t,r)=>Cm(t,r))&&vi(this.baseMutations,e.baseMutations,(t,r)=>Cm(t,r))}}class ed{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){G(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return ab}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new ed(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class td{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class wI{constructor(e,t,r){this.alias=e,this.aggregateType=t,this.fieldPath=r}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class _b{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */var Ne,ie;function vI(n){switch(n){case C.OK:return q(64938);case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return q(15467,{code:n})}}function AI(n){if(n===void 0)return Ce("GRPC error has no .code"),C.UNKNOWN;switch(n){case Ne.OK:return C.OK;case Ne.CANCELLED:return C.CANCELLED;case Ne.UNKNOWN:return C.UNKNOWN;case Ne.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case Ne.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case Ne.INTERNAL:return C.INTERNAL;case Ne.UNAVAILABLE:return C.UNAVAILABLE;case Ne.UNAUTHENTICATED:return C.UNAUTHENTICATED;case Ne.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case Ne.NOT_FOUND:return C.NOT_FOUND;case Ne.ALREADY_EXISTS:return C.ALREADY_EXISTS;case Ne.PERMISSION_DENIED:return C.PERMISSION_DENIED;case Ne.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case Ne.ABORTED:return C.ABORTED;case Ne.OUT_OF_RANGE:return C.OUT_OF_RANGE;case Ne.UNIMPLEMENTED:return C.UNIMPLEMENTED;case Ne.DATA_LOSS:return C.DATA_LOSS;default:return q(39323,{code:n})}}(ie=Ne||(Ne={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */let no=null;/**
 * @license
 * Copyright 2023 Google LLC
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
 */function RI(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const gb=new Mn([4294967295,4294967295],0);function Nm(n){const e=RI().encode(n),t=new dy;return t.update(e),new Uint8Array(t.digest())}function km(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Mn([t,r],0),new Mn([i,s],0)]}class nd{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new zs(`Invalid padding: ${t}`);if(r<0)throw new zs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new zs(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new zs(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Mn.fromNumber(this.ge)}ye(e,t,r){let i=e.add(t.multiply(Mn.fromNumber(r)));return i.compare(gb)===1&&(i=new Mn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Nm(e),[r,i]=km(t);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new nd(s,i,t);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.ge===0)return;const t=Nm(e),[r,i]=km(t);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class zs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ko{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Ho.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ko(W.min(),i,new Ae($),ot(),H())}}class Ho{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ho(r,t,H(),H(),H())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ka{constructor(e,t,r,i){this.be=e,this.removedTargetIds=t,this.key=r,this.De=i}}class SI{constructor(e,t){this.targetId=e,this.Ce=t}}class CI{constructor(e,t,r=Re.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Dm{constructor(){this.ve=0,this.Fe=xm(),this.Me=Re.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=H(),t=H(),r=H();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:q(38017,{changeType:s})}}),new Ho(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=xm()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,G(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class yb{constructor(e){this.Ge=e,this.ze=new Map,this.je=ot(),this.Je=Ca(),this.He=Ca(),this.Ye=new Ae($)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:q(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((r,i)=>{this.rt(i)&&t(i)})}st(e){const t=e.targetId,r=e.Ce.count,i=this.ot(t);if(i){const s=i.target;if(fc(s))if(r===0){const o=new O(s.path);this.et(t,o,ye.newNoDocument(o,W.min()))}else G(r===1,20013,{expectedCount:r});else{const o=this._t(t);if(o!==r){const a=this.ut(e),l=a?this.ct(a,e,o):1;if(l!==0){this.it(t);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,u)}no==null||no.lt(function(d,f,m,g,T){var M,B,U;const N={localCacheCount:d,existenceFilterCount:f.count,databaseId:m.database,projectId:m.projectId},P=f.unchangedNames;return P&&(N.bloomFilter={applied:T===0,hashCount:(P==null?void 0:P.hashCount)??0,bitmapLength:((B=(M=P==null?void 0:P.bits)==null?void 0:M.bitmap)==null?void 0:B.length)??0,padding:((U=P==null?void 0:P.bits)==null?void 0:U.padding)??0,mightContain:j=>(g==null?void 0:g.mightContain(j))??!1}),N}(o,e.Ce,this.Ge.ht(),a,l))}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let o,a;try{o=ln(r).toUint8Array()}catch(l){if(l instanceof Wy)return pt("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new nd(o,i,s)}catch(l){return pt(l instanceof zs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.ge===0?null:a}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.et(t,s,null),i++)}),i}Tt(e){const t=new Map;this.ze.forEach((s,o)=>{const a=this.ot(o);if(a){if(s.current&&fc(a.target)){const l=new O(a.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,ye.newNoDocument(l,e))}s.Be&&(t.set(o,s.ke()),s.qe())}});let r=H();this.He.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.ot(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new Ko(e,t,this.Ye,this.je,r);return this.je=ot(),this.Je=Ca(),this.He=Ca(),this.Ye=new Ae($),i}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,t)?i.Qe(t,1):i.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Dm,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new he($),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new he($),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||x("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Dm),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Ca(){return new Ae(O.comparator)}function xm(){return new Ae(O.comparator)}const Ib=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Eb=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Tb=(()=>({and:"AND",or:"OR"}))();class wb{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Hu(n,e){return n.useProto3Json||qo(e)?e:{value:e}}function Mi(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function bI(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function vb(n,e){return Mi(n,e.toTimestamp())}function Pe(n){return G(!!n,49232),W.fromTimestamp(function(t){const r=cn(t);return new ce(r.seconds,r.nanos)}(n))}function rd(n,e){return Qu(n,e).canonicalString()}function Qu(n,e){const t=function(i){return new J(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function PI(n){const e=J.fromString(n);return G(FI(e),10190,{key:e.toString()}),e}function vo(n,e){return rd(n.databaseId,e.path)}function Lt(n,e){const t=PI(e);if(t.get(1)!==n.databaseId.projectId)throw new D(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new D(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new O(DI(t))}function NI(n,e){return rd(n.databaseId,e)}function kI(n){const e=PI(n);return e.length===4?J.emptyPath():DI(e)}function Yu(n){return new J(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function DI(n){return G(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Vm(n,e,t){return{name:vo(n,e),fields:t.value.mapValue.fields}}function sl(n,e,t){const r=Lt(n,e.name),i=Pe(e.updateTime),s=e.createTime?Pe(e.createTime):W.min(),o=new ze({mapValue:{fields:e.fields}}),a=ye.newFoundDocument(r,i,s,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function Ab(n,e){return"found"in e?function(r,i){G(!!i.found,43571),i.found.name,i.found.updateTime;const s=Lt(r,i.found.name),o=Pe(i.found.updateTime),a=i.found.createTime?Pe(i.found.createTime):W.min(),l=new ze({mapValue:{fields:i.found.fields}});return ye.newFoundDocument(s,o,a,l)}(n,e):"missing"in e?function(r,i){G(!!i.missing,3894),G(!!i.readTime,22933);const s=Lt(r,i.missing),o=Pe(i.readTime);return ye.newNoDocument(s,o)}(n,e):q(7234,{result:e})}function Rb(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:q(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,d){return u.useProto3Json?(G(d===void 0||typeof d=="string",58123),Re.fromBase64String(d||"")):(G(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Re.fromUint8Array(d||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const d=u.code===void 0?C.UNKNOWN:AI(u.code);return new D(d,u.message||"")}(o);t=new CI(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Lt(n,r.document.name),s=Pe(r.document.updateTime),o=r.document.createTime?Pe(r.document.createTime):W.min(),a=new ze({mapValue:{fields:r.document.fields}}),l=ye.newFoundDocument(i,s,o,a),u=r.targetIds||[],d=r.removedTargetIds||[];t=new Ka(u,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Lt(n,r.document),s=r.readTime?Pe(r.readTime):W.min(),o=ye.newNoDocument(i,s),a=r.removedTargetIds||[];t=new Ka([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Lt(n,r.document),s=r.removedTargetIds||[];t=new Ka([],s,i,null)}else{if(!("filter"in e))return q(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new _b(i,s),a=r.targetId;t=new SI(a,o)}}return t}function Ao(n,e){let t;if(e instanceof Zi)t={update:Vm(n,e.key,e.value)};else if(e instanceof es)t={delete:vo(n,e.key)};else if(e instanceof mn)t={update:Vm(n,e.key,e.data),updateMask:kb(e.fieldMask)};else{if(!(e instanceof Xh))return q(16599,{Vt:e.type});t={verify:vo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Vi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof kr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Dr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Oi)return{fieldPath:o.field.canonicalString(),increment:a.Ae};throw q(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:vb(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:q(27497)}(n,e.precondition)),t}function Ju(n,e){const t=e.currentDocument?function(s){return s.updateTime!==void 0?Te.updateTime(Pe(s.updateTime)):s.exists!==void 0?Te.exists(s.exists):Te.none()}(e.currentDocument):Te.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let l=null;if("setToServerValue"in a)G(a.setToServerValue==="REQUEST_TIME",16630,{proto:a}),l=new Vi;else if("appendMissingElements"in a){const d=a.appendMissingElements.values||[];l=new kr(d)}else if("removeAllFromArray"in a){const d=a.removeAllFromArray.values||[];l=new Dr(d)}else"increment"in a?l=new Oi(o,a.increment):q(16584,{proto:a});const u=Ie.fromServerFormat(a.fieldPath);return new $o(u,l)}(n,i)):[];if(e.update){e.update.name;const i=Lt(n,e.update.name),s=new ze({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const u=l.fieldPaths||[];return new st(u.map(d=>Ie.fromServerFormat(d)))}(e.updateMask);return new mn(i,s,o,t,r)}return new Zi(i,s,t,r)}if(e.delete){const i=Lt(n,e.delete);return new es(i,t)}if(e.verify){const i=Lt(n,e.verify);return new Xh(i,t)}return q(1463,{proto:e})}function Sb(n,e){return n&&n.length>0?(G(e!==void 0,14353),n.map(t=>function(i,s){let o=i.updateTime?Pe(i.updateTime):Pe(s);return o.isEqual(W.min())&&(o=Pe(s)),new fb(o,i.transformResults||[])}(t,e))):[]}function xI(n,e){return{documents:[NI(n,e.path)]}}function ol(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=NI(n,i);const s=function(u){if(u.length!==0)return LI(le.create(u,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(d=>function(m){return{field:Nn(m.field),direction:bb(m.dir)}}(d))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=Hu(n,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ft:t,parent:i}}function VI(n,e,t,r){const{ft:i,parent:s}=ol(n,e),o={},a=[];let l=0;return t.forEach(u=>{const d=r?u.alias:"aggregate_"+l++;o[d]=u.alias,u.aggregateType==="count"?a.push({alias:d,count:{}}):u.aggregateType==="avg"?a.push({alias:d,avg:{field:Nn(u.fieldPath)}}):u.aggregateType==="sum"&&a.push({alias:d,sum:{field:Nn(u.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:a,structuredQuery:i.structuredQuery},parent:i.parent},gt:o,parent:s}}function OI(n){let e=kI(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){G(r===1,65062);const d=t.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];t.where&&(s=function(f){const m=MI(f);return m instanceof le&&Hh(m)?m.getFilters():[m]}(t.where));let o=[];t.orderBy&&(o=function(f){return f.map(m=>function(T){return new wo(li(T.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(T.direction))}(m))}(t.orderBy));let a=null;t.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,qo(m)?null:m}(t.limit));let l=null;t.startAt&&(l=function(f){const m=!!f.before,g=f.values||[];return new jn(g,m)}(t.startAt));let u=null;return t.endAt&&(u=function(f){const m=!f.before,g=f.values||[];return new jn(g,m)}(t.endAt)),sI(e,i,o,s,a,"F",l,u)}function Cb(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q(28987,{purpose:i})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function MI(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=li(t.unaryFilter.field);return ne.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=li(t.unaryFilter.field);return ne.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=li(t.unaryFilter.field);return ne.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=li(t.unaryFilter.field);return ne.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return q(61313);default:return q(60726)}}(n):n.fieldFilter!==void 0?function(t){return ne.create(li(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return q(58110);default:return q(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return le.create(t.compositeFilter.filters.map(r=>MI(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return q(1026)}}(t.compositeFilter.op))}(n):q(30097,{filter:n})}function bb(n){return Ib[n]}function Pb(n){return Eb[n]}function Nb(n){return Tb[n]}function Nn(n){return{fieldPath:n.canonicalString()}}function li(n){return Ie.fromServerFormat(n.fieldPath)}function LI(n){return n instanceof ne?function(t){if(t.op==="=="){if(ym(t.value))return{unaryFilter:{field:Nn(t.field),op:"IS_NAN"}};if(gm(t.value))return{unaryFilter:{field:Nn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ym(t.value))return{unaryFilter:{field:Nn(t.field),op:"IS_NOT_NAN"}};if(gm(t.value))return{unaryFilter:{field:Nn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Nn(t.field),op:Pb(t.op),value:t.value}}}(n):n instanceof le?function(t){const r=t.getFilters().map(i=>LI(i));return r.length===1?r[0]:{compositeFilter:{op:Nb(t.op),filters:r}}}(n):q(54877,{filter:n})}function kb(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function FI(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Zt{constructor(e,t,r,i,s=W.min(),o=W.min(),a=Re.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Zt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Zt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Zt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Zt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class UI{constructor(e){this.yt=e}}function Db(n,e){let t;if(e.document)t=sl(n.yt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=O.fromSegments(e.noDocument.path),i=Vr(e.noDocument.readTime);t=ye.newNoDocument(r,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return q(56709);{const r=O.fromSegments(e.unknownDocument.path),i=Vr(e.unknownDocument.version);t=ye.newUnknownDocument(r,i)}}return e.readTime&&t.setReadTime(function(i){const s=new ce(i[0],i[1]);return W.fromTimestamp(s)}(e.readTime)),t}function Om(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:_c(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:vo(s,o.key),fields:o.data.value.mapValue.fields,updateTime:Mi(s,o.version.toTimestamp()),createTime:Mi(s,o.createTime.toTimestamp())}}(n.yt,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:xr(e.version)};else{if(!e.isUnknownDocument())return q(57904,{document:e});r.unknownDocument={path:t.path.toArray(),version:xr(e.version)}}return r}function _c(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function xr(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Vr(n){const e=new ce(n.seconds,n.nanoseconds);return W.fromTimestamp(e)}function _r(n,e){const t=(e.baseMutations||[]).map(s=>Ju(n.yt,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Ju(n.yt,s)),i=ce.fromMillis(e.localWriteTimeMs);return new Zh(e.batchId,i,t,r)}function js(n){const e=Vr(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Vr(n.lastLimboFreeSnapshotVersion):W.min();let r;return r=function(s){return s.documents!==void 0}(n.query)?function(s){const o=s.documents.length;return G(o===1,1966,{count:o}),Xe(Xi(kI(s.documents[0])))}(n.query):function(s){return Xe(OI(s))}(n.query),new Zt(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,Re.fromBase64String(n.resumeToken))}function BI(n,e){const t=xr(e.snapshotVersion),r=xr(e.lastLimboFreeSnapshotVersion);let i;i=fc(e.target)?xI(n.yt,e.target):ol(n.yt,e.target).ft;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Nr(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function al(n){const e=OI({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?mc(e,e.limit,"L"):e}function uu(n,e){return new td(e.largestBatchId,Ju(n.yt,e.overlayMutation))}function Mm(n,e){const t=e.path.lastSegment();return[n,Je(e.path.popLast()),t]}function Lm(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:xr(r.readTime),documentKey:Je(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class xb{getBundleMetadata(e,t){return Fm(e).get(t).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:Vr(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,t){return Fm(e).put(function(i){return{bundleId:i.id,createTime:xr(Pe(i.createTime)),version:i.version}}(t))}getNamedQuery(e,t){return Um(e).get(t).next(r=>{if(r)return function(s){return{name:s.name,query:al(s.bundledQuery),readTime:Vr(s.readTime)}}(r)})}saveNamedQuery(e,t){return Um(e).put(function(i){return{name:i.name,readTime:xr(Pe(i.readTime)),bundledQuery:i.bundledQuery}}(t))}}function Fm(n){return Oe(n,Jc)}function Um(n){return Oe(n,Xc)}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class cl{constructor(e,t){this.serializer=e,this.userId=t}static wt(e,t){const r=t.uid||"";return new cl(e,r)}getOverlay(e,t){return ks(e).get(Mm(this.userId,t)).next(r=>r?uu(this.serializer,r):null)}getOverlays(e,t){const r=Vt();return S.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){const i=[];return r.forEach((s,o)=>{const a=new td(t,o);i.push(this.St(e,a))}),S.waitFor(i)}removeOverlaysForBatchId(e,t,r){const i=new Set;t.forEach(o=>i.add(Je(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(ks(e).Z(Uu,a))}),S.waitFor(s)}getOverlaysForCollection(e,t,r){const i=Vt(),s=Je(t),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return ks(e).J(Uu,o).next(a=>{for(const l of a){const u=uu(this.serializer,l);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,t,r,i){const s=Vt();let o;const a=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return ks(e).ee({index:My,range:a},(l,u,d)=>{const f=uu(this.serializer,u);s.size()<i||f.largestBatchId===o?(s.set(f.getKey(),f),o=f.largestBatchId):d.done()}).next(()=>s)}St(e,t){return ks(e).put(function(i,s,o){const[a,l,u]=Mm(s,o.mutation.key);return{userId:s,collectionPath:l,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Ao(i.yt,o.mutation)}}(this.serializer,this.userId,t))}}function ks(n){return Oe(n,Zc)}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Vb{bt(e){return Oe(e,zh)}getSessionToken(e){return this.bt(e).get("sessionToken").next(t=>{const r=t==null?void 0:t.value;return r?Re.fromUint8Array(r):Re.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.bt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
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
 */class gr{constructor(){}Dt(e,t){this.Ct(e,t),t.vt()}Ct(e,t){if("nullValue"in e)this.Ft(t,5);else if("booleanValue"in e)this.Ft(t,10),t.Mt(e.booleanValue?1:0);else if("integerValue"in e)this.Ft(t,15),t.Mt(Ee(e.integerValue));else if("doubleValue"in e){const r=Ee(e.doubleValue);isNaN(r)?this.Ft(t,13):(this.Ft(t,15),po(r)?t.Mt(0):t.Mt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Ft(t,20),typeof r=="string"&&(r=cn(r)),t.xt(`${r.seconds||""}`),t.Mt(r.nanos||0)}else if("stringValue"in e)this.Ot(e.stringValue,t),this.Nt(t);else if("bytesValue"in e)this.Ft(t,30),t.Bt(ln(e.bytesValue)),this.Nt(t);else if("referenceValue"in e)this.Lt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.Ft(t,45),t.Mt(r.latitude||0),t.Mt(r.longitude||0)}else"mapValue"in e?Qy(e)?this.Ft(t,Number.MAX_SAFE_INTEGER):nl(e)?this.kt(e.mapValue,t):(this.qt(e.mapValue,t),this.Nt(t)):"arrayValue"in e?(this.Qt(e.arrayValue,t),this.Nt(t)):q(19022,{$t:e})}Ot(e,t){this.Ft(t,25),this.Ut(e,t)}Ut(e,t){t.xt(e)}qt(e,t){const r=e.fields||{};this.Ft(t,55);for(const i of Object.keys(r))this.Ot(i,t),this.Ct(r[i],t)}kt(e,t){var o,a;const r=e.fields||{};this.Ft(t,53);const i=ki,s=((a=(o=r[i].arrayValue)==null?void 0:o.values)==null?void 0:a.length)||0;this.Ft(t,15),t.Mt(Ee(s)),this.Ot(i,t),this.Ct(r[i],t)}Qt(e,t){const r=e.values||[];this.Ft(t,50);for(const i of r)this.Ct(i,t)}Lt(e,t){this.Ft(t,37),O.fromName(e).path.forEach(r=>{this.Ft(t,60),this.Ut(r,t)})}Ft(e,t){e.Mt(t)}Nt(e){e.Mt(2)}}gr.Kt=new gr;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni=255;function Ob(n){if(n===0)return 8;let e=0;return n>>4||(e+=4,n<<=4),n>>6||(e+=2,n<<=2),n>>7||(e+=1),e}function Bm(n){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=Ob(255&r[s]);if(i+=o,o!==8)break}return i}(n);return Math.ceil(e/8)}class Mb{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Wt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Gt(r.value),r=t.next();this.zt()}jt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Jt(r.value),r=t.next();this.Ht()}Yt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Gt(r);else if(r<2048)this.Gt(960|r>>>6),this.Gt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Gt(480|r>>>12),this.Gt(128|63&r>>>6),this.Gt(128|63&r);else{const i=t.codePointAt(0);this.Gt(240|i>>>18),this.Gt(128|63&i>>>12),this.Gt(128|63&i>>>6),this.Gt(128|63&i)}}this.zt()}Zt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Jt(r);else if(r<2048)this.Jt(960|r>>>6),this.Jt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Jt(480|r>>>12),this.Jt(128|63&r>>>6),this.Jt(128|63&r);else{const i=t.codePointAt(0);this.Jt(240|i>>>18),this.Jt(128|63&i>>>12),this.Jt(128|63&i>>>6),this.Jt(128|63&i)}}this.Ht()}Xt(e){const t=this.en(e),r=Bm(t);this.tn(1+r),this.buffer[this.position++]=255&r;for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=255&t[i]}nn(e){const t=this.en(e),r=Bm(t);this.tn(1+r),this.buffer[this.position++]=~(255&r);for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}rn(){this.sn(ni),this.sn(255)}_n(){this.an(ni),this.an(255)}reset(){this.position=0}seed(e){this.tn(e.length),this.buffer.set(e,this.position),this.position+=e.length}un(){return this.buffer.slice(0,this.position)}en(e){const t=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=!!(128&t[0]);t[0]^=r?255:128;for(let i=1;i<t.length;++i)t[i]^=r?255:0;return t}Gt(e){const t=255&e;t===0?(this.sn(0),this.sn(255)):t===ni?(this.sn(ni),this.sn(0)):this.sn(t)}Jt(e){const t=255&e;t===0?(this.an(0),this.an(255)):t===ni?(this.an(ni),this.an(0)):this.an(e)}zt(){this.sn(0),this.sn(1)}Ht(){this.an(0),this.an(1)}sn(e){this.tn(1),this.buffer[this.position++]=e}an(e){this.tn(1),this.buffer[this.position++]=~e}tn(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class Lb{constructor(e){this.cn=e}Bt(e){this.cn.Wt(e)}xt(e){this.cn.Yt(e)}Mt(e){this.cn.Xt(e)}vt(){this.cn.rn()}}class Fb{constructor(e){this.cn=e}Bt(e){this.cn.jt(e)}xt(e){this.cn.Zt(e)}Mt(e){this.cn.nn(e)}vt(){this.cn._n()}}class Ds{constructor(){this.cn=new Mb,this.ln=new Lb(this.cn),this.hn=new Fb(this.cn)}seed(e){this.cn.seed(e)}Pn(e){return e===0?this.ln:this.hn}un(){return this.cn.un()}reset(){this.cn.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class yr{constructor(e,t,r,i){this.Tn=e,this.In=t,this.En=r,this.dn=i}An(){const e=this.dn.length,t=e===0||this.dn[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.dn,0),t!==e?r.set([0],this.dn.length):++r[r.length-1],new yr(this.Tn,this.In,this.En,r)}Rn(e,t,r){return{indexId:this.Tn,uid:e,arrayValue:Ha(this.En),directionalValue:Ha(this.dn),orderedDocumentKey:Ha(t),documentKey:r.path.toArray()}}Vn(e,t,r){const i=this.Rn(e,t,r);return[i.indexId,i.uid,i.arrayValue,i.directionalValue,i.orderedDocumentKey,i.documentKey]}}function vn(n,e){let t=n.Tn-e.Tn;return t!==0?t:(t=qm(n.En,e.En),t!==0?t:(t=qm(n.dn,e.dn),t!==0?t:O.comparator(n.In,e.In)))}function qm(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}function Ha(n){return Rg()?function(t){let r="";for(let i=0;i<t.length;i++)r+=String.fromCharCode(t[i]);return r}(n):n}function Gm(n){return typeof n!="string"?n:function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(n)}class Wm{constructor(e){this.mn=new he((t,r)=>Ie.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.fn=e.orderBy,this.gn=[];for(const t of e.filters){const r=t;r.isInequality()?this.mn=this.mn.add(r):this.gn.push(r)}}get pn(){return this.mn.size>1}yn(e){if(G(e.collectionGroup===this.collectionId,49279),this.pn)return!1;const t=Mu(e);if(t!==void 0&&!this.wn(t))return!1;const r=dr(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.wn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.mn.size>0){const a=this.mn.getIterator().getNext();if(!i.has(a.field.canonicalString())){const l=r[s];if(!this.Sn(a,l)||!this.bn(this.fn[o++],l))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.fn.length||!this.bn(this.fn[o++],a))return!1}return!0}Dn(){if(this.pn)return null;let e=new he(Ie.comparator);const t=[];for(const r of this.gn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new vr(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new vr(r.field,0))}for(const r of this.fn)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new vr(r.field,r.dir==="asc"?0:1)));return new Ri(Ri.UNKNOWN_ID,this.collectionId,t,Si.empty())}wn(e){for(const t of this.gn)if(this.Sn(t,e))return!0;return!1}Sn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}bn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */function qI(n){var t,r;if(G(n instanceof ne||n instanceof le,20012),n instanceof ne){if(n instanceof iI){const i=((r=(t=n.value.arrayValue)==null?void 0:t.values)==null?void 0:r.map(s=>ne.create(n.field,"==",s)))||[];return le.create(i,"or")}return n}const e=n.filters.map(i=>qI(i));return le.create(e,n.op)}function Ub(n){if(n.getFilters().length===0)return[];const e=eh(qI(n));return G(GI(e),7391),Xu(e)||Zu(e)?[e]:e.getFilters()}function Xu(n){return n instanceof ne}function Zu(n){return n instanceof le&&Hh(n)}function GI(n){return Xu(n)||Zu(n)||function(t){if(t instanceof le&&zu(t)){for(const r of t.getFilters())if(!Xu(r)&&!Zu(r))return!1;return!0}return!1}(n)}function eh(n){if(G(n instanceof ne||n instanceof le,34018),n instanceof ne)return n;if(n.filters.length===1)return eh(n.filters[0]);const e=n.filters.map(r=>eh(r));let t=le.create(e,n.op);return t=gc(t),GI(t)?t:(G(t instanceof le,64498),G(xi(t),40251),G(t.filters.length>1,57927),t.filters.reduce((r,i)=>id(r,i)))}function id(n,e){let t;return G(n instanceof ne||n instanceof le,38388),G(e instanceof ne||e instanceof le,25473),t=n instanceof ne?e instanceof ne?function(i,s){return le.create([i,s],"and")}(n,e):zm(n,e):e instanceof ne?zm(e,n):function(i,s){if(G(i.filters.length>0&&s.filters.length>0,48005),xi(i)&&xi(s))return tI(i,s.getFilters());const o=zu(i)?i:s,a=zu(i)?s:i,l=o.filters.map(u=>id(u,a));return le.create(l,"or")}(n,e),gc(t)}function zm(n,e){if(xi(e))return tI(e,n.getFilters());{const t=e.filters.map(r=>id(n,r));return le.create(t,"or")}}function gc(n){if(G(n instanceof ne||n instanceof le,11850),n instanceof ne)return n;const e=n.getFilters();if(e.length===1)return gc(e[0]);if(Zy(n))return n;const t=e.map(i=>gc(i)),r=[];return t.forEach(i=>{i instanceof ne?r.push(i):i instanceof le&&(i.op===n.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:le.create(r,n.op)}/**
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
 */class Bb{constructor(){this.Cn=new sd}addToCollectionParentIndex(e,t){return this.Cn.add(t),S.resolve()}getCollectionParents(e,t){return S.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return S.resolve()}deleteFieldIndex(e,t){return S.resolve()}deleteAllFieldIndexes(e){return S.resolve()}createTargetIndexes(e,t){return S.resolve()}getDocumentsMatchingTarget(e,t){return S.resolve(null)}getIndexType(e,t){return S.resolve(0)}getFieldIndexes(e,t){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,t){return S.resolve(mt.min())}getMinOffsetFromCollectionGroup(e,t){return S.resolve(mt.min())}updateCollectionGroup(e,t,r){return S.resolve()}updateIndexEntries(e,t){return S.resolve()}}class sd{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new he(J.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new he(J.comparator)).toArray()}}/**
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
 */const jm="IndexedDbIndexManager",ba=new Uint8Array(0);class qb{constructor(e,t){this.databaseId=t,this.vn=new sd,this.Fn=new pn(r=>Nr(r),(r,i)=>Wo(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.vn.has(t)){const r=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.vn.add(t)});const s={collectionId:r,parent:Je(i)};return $m(e).put(s)}return S.resolve()}getCollectionParents(e,t){const r=[],i=IDBKeyRange.bound([t,""],[Ty(t),""],!1,!0);return $m(e).J(i).next(s=>{for(const o of s){if(o.collectionId!==t)break;r.push(xt(o.parent))}return r})}addFieldIndex(e,t){const r=xs(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(t);delete i.indexId;const s=r.add(i);if(t.indexState){const o=ii(e);return s.next(a=>{o.put(Lm(a,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const r=xs(e),i=ii(e),s=ri(e);return r.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=xs(e),r=ri(e),i=ii(e);return t.Z().next(()=>r.Z()).next(()=>i.Z())}createTargetIndexes(e,t){return S.forEach(this.Mn(t),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new Wm(r).Dn();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,t){const r=ri(e);let i=!0;const s=new Map;return S.forEach(this.Mn(t),o=>this.xn(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=H();const a=[];return S.forEach(s,(l,u)=>{x(jm,`Using index ${function(U){return`id=${U.indexId}|cg=${U.collectionGroup}|f=${U.fields.map(j=>`${j.fieldPath}:${j.kind}`).join(",")}`}(l)} to execute ${Nr(t)}`);const d=function(U,j){const oe=Mu(j);if(oe===void 0)return null;for(const ee of pc(U,oe.fieldPath))switch(ee.op){case"array-contains-any":return ee.value.arrayValue.values||[];case"array-contains":return[ee.value]}return null}(u,l),f=function(U,j){const oe=new Map;for(const ee of dr(j))for(const w of pc(U,ee.fieldPath))switch(w.op){case"==":case"in":oe.set(ee.fieldPath.canonicalString(),w.value);break;case"not-in":case"!=":return oe.set(ee.fieldPath.canonicalString(),w.value),Array.from(oe.values())}return null}(u,l),m=function(U,j){const oe=[];let ee=!0;for(const w of dr(j)){const y=w.kind===0?vm(U,w.fieldPath,U.startAt):Am(U,w.fieldPath,U.startAt);oe.push(y.value),ee&&(ee=y.inclusive)}return new jn(oe,ee)}(u,l),g=function(U,j){const oe=[];let ee=!0;for(const w of dr(j)){const y=w.kind===0?Am(U,w.fieldPath,U.endAt):vm(U,w.fieldPath,U.endAt);oe.push(y.value),ee&&(ee=y.inclusive)}return new jn(oe,ee)}(u,l),T=this.On(l,u,m),N=this.On(l,u,g),P=this.Nn(l,u,f),M=this.Bn(l.indexId,d,T,m.inclusive,N,g.inclusive,P);return S.forEach(M,B=>r.Y(B,t.limit).next(U=>{U.forEach(j=>{const oe=O.fromSegments(j.documentKey);o.has(oe)||(o=o.add(oe),a.push(oe))})}))}).next(()=>a)}return S.resolve(null)})}Mn(e){let t=this.Fn.get(e);return t||(e.filters.length===0?t=[e]:t=Ub(le.create(e.filters,"and")).map(r=>$u(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.Fn.set(e,t),t)}Bn(e,t,r,i,s,o,a){const l=(t!=null?t.length:1)*Math.max(r.length,s.length),u=l/(t!=null?t.length:1),d=[];for(let f=0;f<l;++f){const m=t?this.Ln(t[f/u]):ba,g=this.kn(e,m,r[f%u],i),T=this.qn(e,m,s[f%u],o),N=a.map(P=>this.kn(e,m,P,!0));d.push(...this.createRange(g,T,N))}return d}kn(e,t,r,i){const s=new yr(e,O.empty(),t,r);return i?s:s.An()}qn(e,t,r,i){const s=new yr(e,O.empty(),t,r);return i?s.An():s}xn(e,t){const r=new Wm(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.yn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let r=2;const i=this.Mn(t);return S.forEach(i,s=>this.xn(e,s).next(o=>{o?r!==0&&o.fields.length<function(l){let u=new he(Ie.comparator),d=!1;for(const f of l.filters)for(const m of f.getFlattenedFilters())m.field.isKeyField()||(m.op==="array-contains"||m.op==="array-contains-any"?d=!0:u=u.add(m.field));for(const f of l.orderBy)f.field.isKeyField()||(u=u.add(f.field));return u.size+(d?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(t)&&i.length>1&&r===2?1:r)}Qn(e,t){const r=new Ds;for(const i of dr(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=r.Pn(i.kind);gr.Kt.Dt(s,o)}return r.un()}Ln(e){const t=new Ds;return gr.Kt.Dt(e,t.Pn(0)),t.un()}$n(e,t){const r=new Ds;return gr.Kt.Dt(Pr(this.databaseId,t),r.Pn(function(s){const o=dr(s);return o.length===0?0:o[o.length-1].kind}(e))),r.un()}Nn(e,t,r){if(r===null)return[];let i=[];i.push(new Ds);let s=0;for(const o of dr(e)){const a=r[s++];for(const l of i)if(this.Un(t,o.fieldPath)&&To(a))i=this.Kn(i,o,a);else{const u=l.Pn(o.kind);gr.Kt.Dt(a,u)}}return this.Wn(i)}On(e,t,r){return this.Nn(e,t,r.position)}Wn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].un();return t}Kn(e,t,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const l=new Ds;l.seed(a.un()),gr.Kt.Dt(o,l.Pn(t.kind)),s.push(l)}return s}Un(e,t){return!!e.filters.find(r=>r instanceof ne&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=xs(e),i=ii(e);return(t?r.J(Fu,IDBKeyRange.bound(t,t)):r.J()).next(s=>{const o=[];return S.forEach(s,a=>i.get([a.indexId,this.uid]).next(l=>{o.push(function(d,f){const m=f?new Si(f.sequenceNumber,new mt(Vr(f.readTime),new O(xt(f.documentKey)),f.largestBatchId)):Si.empty(),g=d.fields.map(([T,N])=>new vr(Ie.fromServerFormat(T),N));return new Ri(d.indexId,d.collectionGroup,g,m)}(a,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:$(r.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const i=xs(e),s=ii(e);return this.Gn(e).next(o=>i.J(Fu,IDBKeyRange.bound(t,t)).next(a=>S.forEach(a,l=>s.put(Lm(l.indexId,this.uid,o,r)))))}updateIndexEntries(e,t){const r=new Map;return S.forEach(t,(i,s)=>{const o=r.get(i.collectionGroup);return(o?S.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),S.forEach(a,l=>this.zn(e,i,l).next(u=>{const d=this.jn(s,l);return u.isEqual(d)?S.resolve():this.Jn(e,s,l,u,d)}))))})}Hn(e,t,r,i){return ri(e).put(i.Rn(this.uid,this.$n(r,t.key),t.key))}Yn(e,t,r,i){return ri(e).delete(i.Vn(this.uid,this.$n(r,t.key),t.key))}zn(e,t,r){const i=ri(e);let s=new he(vn);return i.ee({index:Oy,range:IDBKeyRange.only([r.indexId,this.uid,Ha(this.$n(r,t))])},(o,a)=>{s=s.add(new yr(r.indexId,t,Gm(a.arrayValue),Gm(a.directionalValue)))}).next(()=>s)}jn(e,t){let r=new he(vn);const i=this.Qn(t,e);if(i==null)return r;const s=Mu(t);if(s!=null){const o=e.data.field(s.fieldPath);if(To(o))for(const a of o.arrayValue.values||[])r=r.add(new yr(t.indexId,e.key,this.Ln(a),i))}else r=r.add(new yr(t.indexId,e.key,ba,i));return r}Jn(e,t,r,i,s){x(jm,"Updating index entries for document '%s'",t.key);const o=[];return function(l,u,d,f,m){const g=l.getIterator(),T=u.getIterator();let N=ti(g),P=ti(T);for(;N||P;){let M=!1,B=!1;if(N&&P){const U=d(N,P);U<0?B=!0:U>0&&(M=!0)}else N!=null?B=!0:M=!0;M?(f(P),P=ti(T)):B?(m(N),N=ti(g)):(N=ti(g),P=ti(T))}}(i,s,vn,a=>{o.push(this.Hn(e,t,r,a))},a=>{o.push(this.Yn(e,t,r,a))}),S.waitFor(o)}Gn(e){let t=1;return ii(e).ee({index:Vy,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,a)=>vn(o,a)).filter((o,a,l)=>!a||vn(o,l[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=vn(o,e),l=vn(o,t);if(a===0)i[0]=e.An();else if(a>0&&l<0)i.push(o),i.push(o.An());else if(l>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.Zn(i[o],i[o+1]))return[];const a=i[o].Vn(this.uid,ba,O.empty()),l=i[o+1].Vn(this.uid,ba,O.empty());s.push(IDBKeyRange.bound(a,l))}return s}Zn(e,t){return vn(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Km)}getMinOffset(e,t){return S.mapArray(this.Mn(t),r=>this.xn(e,r).next(i=>i||q(44426))).next(Km)}}function $m(n){return Oe(n,go)}function ri(n){return Oe(n,Xs)}function xs(n){return Oe(n,Wh)}function ii(n){return Oe(n,Js)}function Km(n){G(n.length!==0,28825);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const i=n[r].indexState.offset;Bh(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new mt(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const Hm={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},WI=41943040;class Ye{static withCacheSize(e){return new Ye(e,Ye.DEFAULT_COLLECTION_PERCENTILE,Ye.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */function zI(n,e,t){const r=n.store(wt),i=n.store(Ci),s=[],o=IDBKeyRange.only(t.batchId);let a=0;const l=r.ee({range:o},(d,f,m)=>(a++,m.delete()));s.push(l.next(()=>{G(a===1,47070,{batchId:t.batchId})}));const u=[];for(const d of t.mutations){const f=ky(e,d.key.path,t.batchId);s.push(i.delete(f)),u.push(d.key)}return S.waitFor(s).next(()=>u)}function yc(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw q(14731);e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
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
 */Ye.DEFAULT_COLLECTION_PERCENTILE=10,Ye.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ye.DEFAULT=new Ye(WI,Ye.DEFAULT_COLLECTION_PERCENTILE,Ye.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ye.DISABLED=new Ye(-1,0,0);class ll{constructor(e,t,r,i){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=i,this.Xn={}}static wt(e,t,r,i){G(e.uid!=="",64387);const s=e.isAuthenticated()?e.uid:"";return new ll(s,t,r,i)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return An(e).ee({index:Er,range:r},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,i){const s=ui(e),o=An(e);return o.add({}).next(a=>{G(typeof a=="number",49019);const l=new Zh(a,t,r,i),u=function(g,T,N){const P=N.baseMutations.map(B=>Ao(g.yt,B)),M=N.mutations.map(B=>Ao(g.yt,B));return{userId:T,batchId:N.batchId,localWriteTimeMs:N.localWriteTime.toMillis(),baseMutations:P,mutations:M}}(this.serializer,this.userId,l),d=[];let f=new he((m,g)=>$(m.canonicalString(),g.canonicalString()));for(const m of i){const g=ky(this.userId,m.key.path,a);f=f.add(m.key.path.popLast()),d.push(o.put(u)),d.push(s.put(g,wC))}return f.forEach(m=>{d.push(this.indexManager.addToCollectionParentIndex(e,m))}),e.addOnCommittedListener(()=>{this.Xn[a]=l.keys()}),S.waitFor(d).next(()=>l)})}lookupMutationBatch(e,t){return An(e).get(t).next(r=>r?(G(r.userId===this.userId,48,"Unexpected user for mutation batch",{userId:r.userId,batchId:t}),_r(this.serializer,r)):null)}er(e,t){return this.Xn[t]?S.resolve(this.Xn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const i=r.keys();return this.Xn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return An(e).ee({index:Er,range:i},(o,a,l)=>{a.userId===this.userId&&(G(a.batchId>=r,47524,{tr:r}),s=_r(this.serializer,a)),l.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=Ln;return An(e).ee({index:Er,range:t,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,Ln],[this.userId,Number.POSITIVE_INFINITY]);return An(e).J(Er,t).next(r=>r.map(i=>_r(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=qa(this.userId,t.path),i=IDBKeyRange.lowerBound(r),s=[];return ui(e).ee({range:i},(o,a,l)=>{const[u,d,f]=o,m=xt(d);if(u===this.userId&&t.path.isEqual(m))return An(e).get(f).next(g=>{if(!g)throw q(61480,{nr:o,batchId:f});G(g.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:g.userId,batchId:f}),s.push(_r(this.serializer,g))});l.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new he($);const i=[];return t.forEach(s=>{const o=qa(this.userId,s.path),a=IDBKeyRange.lowerBound(o),l=ui(e).ee({range:a},(u,d,f)=>{const[m,g,T]=u,N=xt(g);m===this.userId&&s.path.isEqual(N)?r=r.add(T):f.done()});i.push(l)}),S.waitFor(i).next(()=>this.rr(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1,s=qa(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new he($);return ui(e).ee({range:o},(l,u,d)=>{const[f,m,g]=l,T=xt(m);f===this.userId&&r.isPrefixOf(T)?T.length===i&&(a=a.add(g)):d.done()}).next(()=>this.rr(e,a))}rr(e,t){const r=[],i=[];return t.forEach(s=>{i.push(An(e).get(s).next(o=>{if(o===null)throw q(35274,{batchId:s});G(o.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:o.userId,batchId:s}),r.push(_r(this.serializer,o))}))}),S.waitFor(i).next(()=>r)}removeMutationBatch(e,t){return zI(e.le,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.ir(t.batchId)}),S.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}ir(e){delete this.Xn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return S.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return ui(e).ee({range:r},(s,o,a)=>{if(s[0]===this.userId){const l=xt(s[1]);i.push(l)}else a.done()}).next(()=>{G(i.length===0,56720,{sr:i.map(s=>s.canonicalString())})})})}containsKey(e,t){return jI(e,this.userId,t)}_r(e){return $I(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:Ln,lastStreamToken:""})}}function jI(n,e,t){const r=qa(e,t.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return ui(n).ee({range:s,X:!0},(a,l,u)=>{const[d,f,m]=a;d===e&&f===i&&(o=!0),u.done()}).next(()=>o)}function An(n){return Oe(n,wt)}function ui(n){return Oe(n,Ci)}function $I(n){return Oe(n,mo)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Or{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Or(0)}static cr(){return new Or(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Gb{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.lr(e).next(t=>{const r=new Or(t.highestTargetId);return t.highestTargetId=r.next(),this.hr(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.lr(e).next(t=>W.fromTimestamp(new ce(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.lr(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.lr(e).next(i=>(i.highestListenSequenceNumber=t,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.hr(e,i)))}addTargetData(e,t){return this.Pr(e,t).next(()=>this.lr(e).next(r=>(r.targetCount+=1,this.Tr(t,r),this.hr(e,r))))}updateTargetData(e,t){return this.Pr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>si(e).delete(t.targetId)).next(()=>this.lr(e)).next(r=>(G(r.targetCount>0,8065),r.targetCount-=1,this.hr(e,r)))}removeTargets(e,t,r){let i=0;const s=[];return si(e).ee((o,a)=>{const l=js(a);l.sequenceNumber<=t&&r.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))}).next(()=>S.waitFor(s)).next(()=>i)}forEachTarget(e,t){return si(e).ee((r,i)=>{const s=js(i);t(s)})}lr(e){return Qm(e).get(dc).next(t=>(G(t!==null,2888),t))}hr(e,t){return Qm(e).put(dc,t)}Pr(e,t){return si(e).put(BI(this.serializer,t))}Tr(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.lr(e).next(t=>t.targetCount)}getTargetData(e,t){const r=Nr(t),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return si(e).ee({range:i,index:xy},(o,a,l)=>{const u=js(a);Wo(t,u.target)&&(s=u,l.done())}).next(()=>s)}addMatchingKeys(e,t,r){const i=[],s=kn(e);return t.forEach(o=>{const a=Je(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),S.waitFor(i)}removeMatchingKeys(e,t,r){const i=kn(e);return S.forEach(t,s=>{const o=Je(s.path);return S.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,t){const r=kn(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),i=kn(e);let s=H();return i.ee({range:r,X:!0},(o,a,l)=>{const u=xt(o[1]),d=new O(u);s=s.add(d)}).next(()=>s)}containsKey(e,t){const r=Je(t.path),i=IDBKeyRange.bound([r],[Ty(r)],!1,!0);let s=0;return kn(e).ee({index:Gh,X:!0,range:i},([o,a],l,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}At(e,t){return si(e).get(t).next(r=>r?js(r):null)}}function si(n){return Oe(n,bi)}function Qm(n){return Oe(n,Ar)}function kn(n){return Oe(n,Pi)}/**
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
 */const Ym="LruGarbageCollector",KI=1048576;function Jm([n,e],[t,r]){const i=$(n,t);return i===0?$(e,r):i}class Wb{constructor(e){this.Ir=e,this.buffer=new he(Jm),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Jm(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class HI{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){x(Ym,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Zn(t)?x(Ym,"Ignoring IndexedDB error during garbage collection: ",t):await Xn(t)}await this.Vr(3e5)})}}class zb{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return S.resolve(it.ce);const r=new Wb(t);return this.mr.forEachTarget(e,i=>r.Ar(i.sequenceNumber)).next(()=>this.mr.pr(e,i=>r.Ar(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(x("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve(Hm)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(x("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Hm):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,i,s,o,a,l,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(x("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,t))).next(f=>(s=f,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(u=Date.now(),ai()<=te.DEBUG&&x("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${f} documents in `+(u-l)+`ms
Total Duration: ${u-d}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f})))}}function QI(n,e){return new zb(n,e)}/**
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
 */class jb{constructor(e,t){this.db=e,this.garbageCollector=QI(this,t)}gr(e){const t=this.wr(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}wr(e){let t=0;return this.pr(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}pr(e,t){return this.Sr(e,(r,i)=>t(i))}addReference(e,t,r){return Pa(e,r)}removeReference(e,t,r){return Pa(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return Pa(e,t)}br(e,t){return function(i,s){let o=!1;return $I(i).te(a=>jI(i,a,s).next(l=>(l&&(o=!0),S.resolve(!l)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Sr(e,(o,a)=>{if(a<=t){const l=this.br(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,W.min()),kn(e).delete(function(f){return[0,Je(f.path)]}(o))))});i.push(l)}}).next(()=>S.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return Pa(e,t)}Sr(e,t){const r=kn(e);let i,s=it.ce;return r.ee({index:Gh},([o,a],{path:l,sequenceNumber:u})=>{o===0?(s!==it.ce&&t(new O(xt(i)),s),s=u,i=l):s=it.ce}).next(()=>{s!==it.ce&&t(new O(xt(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Pa(n,e){return kn(n).put(function(r,i){return{targetId:0,path:Je(r.path),sequenceNumber:i}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class YI{constructor(){this.changes=new pn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ye.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?S.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class $b{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return ur(e).put(r)}removeEntry(e,t,r){return ur(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],_c(o),a[a.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.Dr(e,r)))}getEntry(e,t){let r=ye.newInvalidDocument(t);return ur(e).ee({index:Ga,range:IDBKeyRange.only(Vs(t))},(i,s)=>{r=this.Cr(t,s)}).next(()=>r)}vr(e,t){let r={size:0,document:ye.newInvalidDocument(t)};return ur(e).ee({index:Ga,range:IDBKeyRange.only(Vs(t))},(i,s)=>{r={document:this.Cr(t,s),size:yc(s)}}).next(()=>r)}getEntries(e,t){let r=ot();return this.Fr(e,t,(i,s)=>{const o=this.Cr(i,s);r=r.insert(i,o)}).next(()=>r)}Mr(e,t){let r=ot(),i=new Ae(O.comparator);return this.Fr(e,t,(s,o)=>{const a=this.Cr(s,o);r=r.insert(s,a),i=i.insert(s,yc(o))}).next(()=>({documents:r,Or:i}))}Fr(e,t,r){if(t.isEmpty())return S.resolve();let i=new he(e_);t.forEach(l=>i=i.add(l));const s=IDBKeyRange.bound(Vs(i.first()),Vs(i.last())),o=i.getIterator();let a=o.getNext();return ur(e).ee({index:Ga,range:s},(l,u,d)=>{const f=O.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&e_(a,f)<0;)r(a,null),a=o.getNext();a&&a.isEqual(f)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?d.j(Vs(a)):d.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,i,s){const o=t.path,a=[o.popLast().toArray(),o.lastSegment(),_c(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return ur(e).J(IDBKeyRange.bound(a,l,!0)).next(u=>{s==null||s.incrementDocumentReadCount(u.length);let d=ot();for(const f of u){const m=this.Cr(O.fromSegments(f.prefixPath.concat(f.collectionGroup,f.documentId)),f);m.isFoundDocument()&&(jo(t,m)||i.has(m.key))&&(d=d.insert(m.key,m))}return d})}getAllFromCollectionGroup(e,t,r,i){let s=ot();const o=Zm(t,r),a=Zm(t,mt.max());return ur(e).ee({index:Dy,range:IDBKeyRange.bound(o,a,!0)},(l,u,d)=>{const f=this.Cr(O.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(f.key,f),s.size===i&&d.done()}).next(()=>s)}newChangeBuffer(e){return new Kb(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return Xm(e).get(Lu).next(t=>(G(!!t,20021),t))}Dr(e,t){return Xm(e).put(Lu,t)}Cr(e,t){if(t){const r=Db(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(W.min())))return r}return ye.newInvalidDocument(e)}}function JI(n){return new $b(n)}class Kb extends YI{constructor(e,t){super(),this.Nr=e,this.trackRemovals=t,this.Br=new pn(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const t=[];let r=0,i=new he((s,o)=>$(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.Br.get(s);if(t.push(this.Nr.removeEntry(e,s,a.readTime)),o.isValidDocument()){const l=Om(this.Nr.serializer,o);i=i.add(s.path.popLast());const u=yc(l);r+=u-a.size,t.push(this.Nr.addEntry(e,s,l))}else if(r-=a.size,this.trackRemovals){const l=Om(this.Nr.serializer,o.convertToNoDocument(W.min()));t.push(this.Nr.addEntry(e,s,l))}}),i.forEach(s=>{t.push(this.Nr.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.Nr.updateMetadata(e,r)),S.waitFor(t)}getFromCache(e,t){return this.Nr.vr(e,t).next(r=>(this.Br.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.Nr.Mr(e,t).next(({documents:r,Or:i})=>(i.forEach((s,o)=>{this.Br.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function Xm(n){return Oe(n,_o)}function ur(n){return Oe(n,hc)}function Vs(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Zm(n,e){const t=e.documentKey.path.toArray();return[n,_c(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function e_(n,e){const t=n.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<r.length-2;++s)if(i=$(t[s],r[s]),i)return i;return i=$(t.length,r.length),i||(i=$(t[t.length-2],r[r.length-2]),i||$(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
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
 *//**
 * @license
 * Copyright 2022 Google LLC
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
 */class Hb{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class XI{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&to(r.mutation,i,st.empty(),ce.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,H()).next(()=>r))}getLocalViewOfDocuments(e,t,r=H()){const i=Vt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=Ws();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=Vt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,H()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,i){let s=ot();const o=eo(),a=function(){return eo()}();return t.forEach((l,u)=>{const d=r.get(u.key);i.has(u.key)&&(d===void 0||d.mutation instanceof mn)?s=s.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),to(d.mutation,u,d.mutation.getFieldMask(),ce.now())):o.set(u.key,st.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,d)=>o.set(u,d)),t.forEach((u,d)=>a.set(u,new Hb(d,o.get(u)??null))),a))}recalculateAndSaveOverlays(e,t){const r=eo();let i=new Ae((o,a)=>o-a),s=H();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=t.get(l);if(u===null)return;let d=r.get(l)||st.empty();d=a.applyToLocalView(u,d),r.set(l,d);const f=(i.get(a.batchId)||H()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,d=l.value,f=fI();d.forEach(m=>{if(!s.has(m)){const g=EI(t.get(m),r.get(m));g!==null&&f.set(m,g),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return S.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(o){return O.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Qh(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):S.resolve(Vt());let a=Ai,l=s;return o.next(u=>S.forEach(u,(d,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(d)?S.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{l=l.insert(d,m)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,H())).next(d=>({batchId:a,changes:dI(d)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new O(t)).next(r=>{let i=Ws();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let o=Ws();return this.indexManager.getCollectionParents(e,s).next(a=>S.forEach(a,l=>{const u=function(f,m){return new fn(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(t,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(d=>{d.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(o=>{s.forEach((l,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,ye.newInvalidDocument(d)))});let a=Ws();return o.forEach((l,u)=>{const d=s.get(l);d!==void 0&&to(d.mutation,u,st.empty(),ce.now()),jo(t,u)&&(a=a.insert(l,u))}),a})}}/**
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
 */class Qb{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return S.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Pe(i.createTime)}}(t)),S.resolve()}getNamedQuery(e,t){return S.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(i){return{name:i.name,query:al(i.bundledQuery),readTime:Pe(i.readTime)}}(t)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Yb{constructor(){this.overlays=new Ae(O.comparator),this.qr=new Map}getOverlay(e,t){return S.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Vt();return S.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.St(e,t,s)}),S.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.qr.delete(r)),S.resolve()}getOverlaysForCollection(e,t,r){const i=Vt(),s=t.length+1,o=new O(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return S.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new Ae((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let d=s.get(u.largestBatchId);d===null&&(d=Vt(),s=s.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const a=Vt(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,d)=>a.set(u,d)),!(a.size()>=i)););return S.resolve(a)}St(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new td(t,r));let s=this.qr.get(t);s===void 0&&(s=H(),this.qr.set(t,s)),this.qr.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Jb{constructor(){this.sessionToken=Re.EMPTY_BYTE_STRING}getSessionToken(e){return S.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,S.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class od{constructor(){this.Qr=new he(Le.$r),this.Ur=new he(Le.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new Le(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Gr(new Le(e,t))}zr(e,t){e.forEach(r=>this.removeReference(r,t))}jr(e){const t=new O(new J([])),r=new Le(t,e),i=new Le(t,e+1),s=[];return this.Ur.forEachInRange([r,i],o=>{this.Gr(o),s.push(o.key)}),s}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new O(new J([])),r=new Le(t,e),i=new Le(t,e+1);let s=H();return this.Ur.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new Le(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Le{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return O.comparator(e.key,t.key)||$(e.Yr,t.Yr)}static Kr(e,t){return $(e.Yr,t.Yr)||O.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Xb{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new he(Le.$r)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Zh(s,t,r,i);this.mutationQueue.push(o);for(const a of i)this.Zr=this.Zr.add(new Le(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,t){return S.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.ei(r),s=i<0?0:i;return S.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?Ln:this.tr-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Le(t,0),i=new Le(t,Number.POSITIVE_INFINITY),s=[];return this.Zr.forEachInRange([r,i],o=>{const a=this.Xr(o.Yr);s.push(a)}),S.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new he($);return t.forEach(i=>{const s=new Le(i,0),o=new Le(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([s,o],a=>{r=r.add(a.Yr)})}),S.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;O.isDocumentKey(s)||(s=s.child(""));const o=new Le(new O(s),0);let a=new he($);return this.Zr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.Yr)),!0)},o),S.resolve(this.ti(a))}ti(e){const t=[];return e.forEach(r=>{const i=this.Xr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){G(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return S.forEach(t.mutations,i=>{const s=new Le(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,t){const r=new Le(t,0),i=this.Zr.firstAfterOrEqual(r);return S.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Zb{constructor(e){this.ri=e,this.docs=function(){return new Ae(O.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return S.resolve(r?r.document.mutableCopy():ye.newInvalidDocument(t))}getEntries(e,t){let r=ot();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ye.newInvalidDocument(i))}),S.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=ot();const o=t.path,a=new O(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:d}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Bh(Sy(d),r)<=0||(i.has(d.key)||jo(t,d))&&(s=s.insert(d.key,d.mutableCopy()))}return S.resolve(s)}getAllFromCollectionGroup(e,t,r,i){q(9500)}ii(e,t){return S.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new eP(this)}getSize(e){return S.resolve(this.size)}}class eP extends YI{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(r)}),S.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class tP{constructor(e){this.persistence=e,this.si=new pn(t=>Nr(t),Wo),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.oi=0,this._i=new od,this.targetCount=0,this.ai=Or.ur()}forEachTarget(e,t){return this.si.forEach((r,i)=>t(i)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),S.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Or(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,S.resolve()}updateTargetData(e,t){return this.Pr(t),S.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.si.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.si.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),S.waitFor(s).next(()=>i)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return S.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),S.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),S.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),S.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return S.resolve(r)}containsKey(e,t){return S.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ad{constructor(e,t){this.ui={},this.overlays={},this.ci=new it(0),this.li=!1,this.li=!0,this.hi=new Jb,this.referenceDelegate=e(this),this.Pi=new tP(this),this.indexManager=new Bb,this.remoteDocumentCache=function(i){return new Zb(i)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new UI(t),this.Ii=new Qb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Yb,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new Xb(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){x("MemoryPersistence","Starting transaction:",e);const i=new nP(this.ci.next());return this.referenceDelegate.Ei(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ai(e,t){return S.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,t)))}}class nP extends by{constructor(e){super(),this.currentSequenceNumber=e}}class ul{constructor(e){this.persistence=e,this.Ri=new od,this.Vi=null}static mi(e){return new ul(e)}get fi(){if(this.Vi)return this.Vi;throw q(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),S.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),S.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(i=>this.fi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.fi.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.fi,r=>{const i=O.fromPath(r);return this.gi(e,i).next(s=>{s||t.removeEntry(i,W.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return S.or([()=>S.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Ic{constructor(e,t){this.persistence=e,this.pi=new pn(r=>Je(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=QI(this,t)}static mi(e,t){return new Ic(e,t)}Ei(){}di(e){return S.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}wr(e){let t=0;return this.pr(e,r=>{t++}).next(()=>t)}pr(e,t){return S.forEach(this.pi,(r,i)=>this.br(e,r,i).next(s=>s?S.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ii(e,o=>this.br(e,o,t).next(a=>{a||(r++,s.removeEntry(o,W.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),S.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),S.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),S.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),S.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=za(e.data.value)),t}br(e,t,r){return S.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.pi.get(t);return S.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class rP{constructor(e){this.serializer=e}k(e,t,r,i){const s=new Yc("createOrUpgrade",t);r<1&&i>=1&&(function(l){l.createObjectStore(Go)}(e),function(l){l.createObjectStore(mo,{keyPath:TC}),l.createObjectStore(wt,{keyPath:hm,autoIncrement:!0}).createIndex(Er,dm,{unique:!0}),l.createObjectStore(Ci)}(e),t_(e),function(l){l.createObjectStore(fr)}(e));let o=S.resolve();return r<3&&i>=3&&(r!==0&&(function(l){l.deleteObjectStore(Pi),l.deleteObjectStore(bi),l.deleteObjectStore(Ar)}(e),t_(e)),o=o.next(()=>function(l){const u=l.store(Ar),d={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:W.min().toTimestamp(),targetCount:0};return u.put(dc,d)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(l,u){return u.store(wt).J().next(f=>{l.deleteObjectStore(wt),l.createObjectStore(wt,{keyPath:hm,autoIncrement:!0}).createIndex(Er,dm,{unique:!0});const m=u.store(wt),g=f.map(T=>m.put(T));return S.waitFor(g)})}(e,s))),o=o.next(()=>{(function(l){l.createObjectStore(Ni,{keyPath:NC})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.yi(s))),r<6&&i>=6&&(o=o.next(()=>(function(l){l.createObjectStore(_o)}(e),this.wi(s)))),r<7&&i>=7&&(o=o.next(()=>this.Si(s))),r<8&&i>=8&&(o=o.next(()=>this.bi(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.Di(s))),r<11&&i>=11&&(o=o.next(()=>{(function(l){l.createObjectStore(Jc,{keyPath:kC})})(e),function(l){l.createObjectStore(Xc,{keyPath:DC})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(l){const u=l.createObjectStore(Zc,{keyPath:UC});u.createIndex(Uu,BC,{unique:!1}),u.createIndex(My,qC,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(l){const u=l.createObjectStore(hc,{keyPath:vC});u.createIndex(Ga,AC),u.createIndex(Dy,RC)}(e)).next(()=>this.Ci(e,s)).next(()=>e.deleteObjectStore(fr))),r<14&&i>=14&&(o=o.next(()=>this.Fi(e,s))),r<15&&i>=15&&(o=o.next(()=>function(l){l.createObjectStore(Wh,{keyPath:xC,autoIncrement:!0}).createIndex(Fu,VC,{unique:!1}),l.createObjectStore(Js,{keyPath:OC}).createIndex(Vy,MC,{unique:!1}),l.createObjectStore(Xs,{keyPath:LC}).createIndex(Oy,FC,{unique:!1})}(e))),r<16&&i>=16&&(o=o.next(()=>{t.objectStore(Js).clear()}).next(()=>{t.objectStore(Xs).clear()})),r<17&&i>=17&&(o=o.next(()=>{(function(l){l.createObjectStore(zh,{keyPath:GC})})(e)})),r<18&&i>=18&&Rg()&&(o=o.next(()=>{t.objectStore(Js).clear()}).next(()=>{t.objectStore(Xs).clear()})),o}wi(e){let t=0;return e.store(fr).ee((r,i)=>{t+=yc(i)}).next(()=>{const r={byteSize:t};return e.store(_o).put(Lu,r)})}yi(e){const t=e.store(mo),r=e.store(wt);return t.J().next(i=>S.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,Ln],[s.userId,s.lastAcknowledgedBatchId]);return r.J(Er,o).next(a=>S.forEach(a,l=>{G(l.userId===s.userId,18650,"Cannot process batch from unexpected user",{batchId:l.batchId});const u=_r(this.serializer,l);return zI(e,s.userId,u).next(()=>{})}))}))}Si(e){const t=e.store(Pi),r=e.store(fr);return e.store(Ar).get(dc).next(i=>{const s=[];return r.ee((o,a)=>{const l=new J(o),u=function(f){return[0,Je(f)]}(l);s.push(t.get(u).next(d=>d?S.resolve():(f=>t.put({targetId:0,path:Je(f),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>S.waitFor(s))})}bi(e,t){e.createObjectStore(go,{keyPath:PC});const r=t.store(go),i=new sd,s=o=>{if(i.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:Je(l)})}};return t.store(fr).ee({X:!0},(o,a)=>{const l=new J(o);return s(l.popLast())}).next(()=>t.store(Ci).ee({X:!0},([o,a,l],u)=>{const d=xt(a);return s(d.popLast())}))}Di(e){const t=e.store(bi);return t.ee((r,i)=>{const s=js(i),o=BI(this.serializer,s);return t.put(o)})}Ci(e,t){const r=t.store(fr),i=[];return r.ee((s,o)=>{const a=t.store(hc),l=function(f){return f.document?new O(J.fromString(f.document.name).popFirst(5)):f.noDocument?O.fromSegments(f.noDocument.path):f.unknownDocument?O.fromSegments(f.unknownDocument.path):q(36783)}(o).path.toArray(),u={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(u))}).next(()=>S.waitFor(i))}Fi(e,t){const r=t.store(wt),i=JI(this.serializer),s=new ad(ul.mi,this.serializer.yt);return r.J().next(o=>{const a=new Map;return o.forEach(l=>{let u=a.get(l.userId)??H();_r(this.serializer,l).keys().forEach(d=>u=u.add(d)),a.set(l.userId,u)}),S.forEach(a,(l,u)=>{const d=new Fe(u),f=cl.wt(this.serializer,d),m=s.getIndexManager(d),g=ll.wt(d,this.serializer,m,s.referenceDelegate);return new XI(i,g,f,m).recalculateAndSaveOverlaysForDocumentKeys(new Bu(t,it.ce),l).next()})})}}function t_(n){n.createObjectStore(Pi,{keyPath:CC}).createIndex(Gh,bC,{unique:!0}),n.createObjectStore(bi,{keyPath:"targetId"}).createIndex(xy,SC,{unique:!0}),n.createObjectStore(Ar)}const Rn="IndexedDbPersistence",hu=18e5,du=5e3,fu="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",ZI="main";class cd{constructor(e,t,r,i,s,o,a,l,u,d,f=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.Mi=s,this.window=o,this.document=a,this.xi=u,this.Oi=d,this.Ni=f,this.ci=null,this.li=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Bi=null,this.inForeground=!1,this.Li=null,this.ki=null,this.qi=Number.NEGATIVE_INFINITY,this.Qi=m=>Promise.resolve(),!cd.v())throw new D(C.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new jb(this,i),this.$i=t+ZI,this.serializer=new UI(l),this.Ui=new Mt(this.$i,this.Ni,new rP(this.serializer)),this.hi=new Vb,this.Pi=new Gb(this.referenceDelegate,this.serializer),this.remoteDocumentCache=JI(this.serializer),this.Ii=new xb,this.window&&this.window.localStorage?this.Ki=this.window.localStorage:(this.Ki=null,d===!1&&Ce(Rn,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Wi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new D(C.FAILED_PRECONDITION,fu);return this.Gi(),this.zi(),this.ji(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Pi.getHighestSequenceNumber(e))}).then(e=>{this.ci=new it(e,this.xi)}).then(()=>{this.li=!0}).catch(e=>(this.Ui&&this.Ui.close(),Promise.reject(e)))}Ji(e){return this.Qi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ui.$(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Mi.enqueueAndForget(async()=>{this.started&&await this.Wi()}))}Wi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Na(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Hi(e).next(t=>{t||(this.isPrimary=!1,this.Mi.enqueueRetryable(()=>this.Qi(!1)))})}).next(()=>this.Yi(e)).next(t=>this.isPrimary&&!t?this.Zi(e).next(()=>!1):!!t&&this.Xi(e).next(()=>!0))).catch(e=>{if(Zn(e))return x(Rn,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return x(Rn,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Mi.enqueueRetryable(()=>this.Qi(e)),this.isPrimary=e})}Hi(e){return Os(e).get(ei).next(t=>S.resolve(this.es(t)))}ts(e){return Na(e).delete(this.clientId)}async ns(){if(this.isPrimary&&!this.rs(this.qi,hu)){this.qi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=Oe(t,Ni);return r.J().next(i=>{const s=this.ss(i,hu),o=i.filter(a=>s.indexOf(a)===-1);return S.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ki)for(const t of e)this.Ki.removeItem(this._s(t.clientId))}}ji(){this.ki=this.Mi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Wi().then(()=>this.ns()).then(()=>this.ji()))}es(e){return!!e&&e.ownerId===this.clientId}Yi(e){return this.Oi?S.resolve(!0):Os(e).get(ei).next(t=>{if(t!==null&&this.rs(t.leaseTimestampMs,du)&&!this.us(t.ownerId)){if(this.es(t)&&this.networkEnabled)return!0;if(!this.es(t)){if(!t.allowTabSynchronization)throw new D(C.FAILED_PRECONDITION,fu);return!1}}return!(!this.networkEnabled||!this.inForeground)||Na(e).J().next(r=>this.ss(r,du).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&x(Rn,`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.li=!1,this.cs(),this.ki&&(this.ki.cancel(),this.ki=null),this.ls(),this.hs(),await this.Ui.runTransaction("shutdown","readwrite",[Go,Ni],e=>{const t=new Bu(e,it.ce);return this.Zi(t).next(()=>this.ts(t))}),this.Ui.close(),this.Ps()}ss(e,t){return e.filter(r=>this.rs(r.updateTimeMs,t)&&!this.us(r.clientId))}Ts(){return this.runTransaction("getActiveClients","readonly",e=>Na(e).J().next(t=>this.ss(t,hu).map(r=>r.clientId)))}get started(){return this.li}getGlobalsCache(){return this.hi}getMutationQueue(e,t){return ll.wt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new qb(e,this.serializer.yt.databaseId)}getDocumentOverlayCache(e){return cl.wt(this.serializer,e)}getBundleCache(){return this.Ii}runTransaction(e,t,r){x(Rn,"Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=function(l){return l===18?jC:l===17?By:l===16?zC:l===15?jh:l===14?Uy:l===13?Fy:l===12?WC:l===11?Ly:void q(60245)}(this.Ni);let o;return this.Ui.runTransaction(e,i,s,a=>(o=new Bu(a,this.ci?this.ci.next():it.ce),t==="readwrite-primary"?this.Hi(o).next(l=>!!l||this.Yi(o)).next(l=>{if(!l)throw Ce(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Mi.enqueueRetryable(()=>this.Qi(!1)),new D(C.FAILED_PRECONDITION,Cy);return r(o)}).next(l=>this.Xi(o).next(()=>l)):this.Is(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Is(e){return Os(e).get(ei).next(t=>{if(t!==null&&this.rs(t.leaseTimestampMs,du)&&!this.us(t.ownerId)&&!this.es(t)&&!(this.Oi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new D(C.FAILED_PRECONDITION,fu)})}Xi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Os(e).put(ei,t)}static v(){return Mt.v()}Zi(e){const t=Os(e);return t.get(ei).next(r=>this.es(r)?(x(Rn,"Releasing primary lease."),t.delete(ei)):S.resolve())}rs(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(Ce(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Gi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Li=()=>{this.Mi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Wi()))},this.document.addEventListener("visibilitychange",this.Li),this.inForeground=this.document.visibilityState==="visible")}ls(){this.Li&&(this.document.removeEventListener("visibilitychange",this.Li),this.Li=null)}zi(){var e;typeof((e=this.window)==null?void 0:e.addEventListener)=="function"&&(this.Bi=()=>{this.cs();const t=/(?:Version|Mobile)\/1[456]/;Ag()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Mi.enterRestrictedMode(!0),this.Mi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Bi))}hs(){this.Bi&&(this.window.removeEventListener("pagehide",this.Bi),this.Bi=null)}us(e){var t;try{const r=((t=this.Ki)==null?void 0:t.getItem(this._s(e)))!==null;return x(Rn,`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Ce(Rn,"Failed to get zombied client id.",r),!1}}cs(){if(this.Ki)try{this.Ki.setItem(this._s(this.clientId),String(Date.now()))}catch(e){Ce("Failed to set zombie client id.",e)}}Ps(){if(this.Ki)try{this.Ki.removeItem(this._s(this.clientId))}catch{}}_s(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Os(n){return Oe(n,Go)}function Na(n){return Oe(n,Ni)}function ld(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ud{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=i}static As(e,t){let r=H(),i=H();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ud(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class iP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class eE{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return Ag()?8:Py(xe())>0?6:4}()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.ys(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ws(e,t,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new iP;return this.Ss(e,t,o).next(a=>{if(s.result=a,this.Vs)return this.bs(e,t,o,a.size)})}).next(()=>s.result)}bs(e,t,r,i){return r.documentReadCount<this.fs?(ai()<=te.DEBUG&&x("QueryEngine","SDK will not create cache indexes for query:",ci(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),S.resolve()):(ai()<=te.DEBUG&&x("QueryEngine","Query:",ci(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(ai()<=te.DEBUG&&x("QueryEngine","The SDK decides to create cache indexes for query:",ci(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Xe(t))):S.resolve())}ys(e,t){if(Rm(t))return S.resolve(null);let r=Xe(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=mc(t,null,"F"),r=Xe(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=H(...s);return this.ps.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Ds(t,a);return this.Cs(t,u,o,l.readTime)?this.ys(e,mc(t,null,"F")):this.vs(e,u,t,l)}))})))}ws(e,t,r,i){return Rm(t)||i.isEqual(W.min())?S.resolve(null):this.ps.getDocuments(e,r).next(s=>{const o=this.Ds(t,s);return this.Cs(t,o,r,i)?S.resolve(null):(ai()<=te.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ci(t)),this.vs(e,o,t,Ry(i,Ai)).next(a=>a))})}Ds(e,t){let r=new he(uI(e));return t.forEach((i,s)=>{jo(e,s)&&(r=r.add(s))}),r}Cs(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ss(e,t,r){return ai()<=te.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",ci(t)),this.ps.getDocumentsMatchingQuery(e,t,mt.min(),r)}vs(e,t,r,i){return this.ps.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */const hd="LocalStore",sP=3e8;class oP{constructor(e,t,r,i){this.persistence=e,this.Fs=t,this.serializer=i,this.Ms=new Ae($),this.xs=new pn(s=>Nr(s),Wo),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new XI(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function tE(n,e,t,r){return new oP(n,e,t,r)}async function nE(n,e){const t=L(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.Bs(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=H();for(const u of i){o.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}for(const u of s){a.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}return t.localDocuments.getDocuments(r,l).next(u=>({Ls:u,removedBatchIds:o,addedBatchIds:a}))})})}function aP(n,e){const t=L(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.Ns.newChangeBuffer({trackRemovals:!0});return function(a,l,u,d){const f=u.batch,m=f.keys();let g=S.resolve();return m.forEach(T=>{g=g.next(()=>d.getEntry(l,T)).next(N=>{const P=u.docVersions.get(T);G(P!==null,48541),N.version.compareTo(P)<0&&(f.applyToRemoteDocument(N,u),N.isValidDocument()&&(N.setReadTime(u.commitVersion),d.addEntry(N)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=H();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function rE(n){const e=L(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}function cP(n,e){const t=L(n),r=e.snapshotVersion;let i=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.Ns.newChangeBuffer({trackRemovals:!0});i=t.Ms;const a=[];e.targetChanges.forEach((d,f)=>{const m=i.get(f);if(!m)return;a.push(t.Pi.removeMatchingKeys(s,d.removedDocuments,f).next(()=>t.Pi.addMatchingKeys(s,d.addedDocuments,f)));let g=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?g=g.withResumeToken(Re.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):d.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(d.resumeToken,r)),i=i.insert(f,g),function(N,P,M){return N.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=sP?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0}(m,g,d)&&a.push(t.Pi.updateTargetData(s,g))});let l=ot(),u=H();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,d))}),a.push(iE(s,o,e.documentUpdates).next(d=>{l=d.ks,u=d.qs})),!r.isEqual(W.min())){const d=t.Pi.getLastRemoteSnapshotVersion(s).next(f=>t.Pi.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(d)}return S.waitFor(a).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(t.Ms=i,s))}function iE(n,e,t){let r=H(),i=H();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=ot();return t.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(W.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):x(hd,"Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{ks:o,qs:i}})}function lP(n,e){const t=L(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Ln),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Li(n,e){const t=L(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Pi.getTargetData(r,e).next(s=>s?(i=s,S.resolve(i)):t.Pi.allocateTargetId(r).next(o=>(i=new Zt(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r})}async function Fi(n,e,t){const r=L(n),i=r.Ms.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Zn(o))throw o;x(hd,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(i.target)}function Ec(n,e,t){const r=L(n);let i=W.min(),s=H();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,d){const f=L(l),m=f.xs.get(d);return m!==void 0?S.resolve(f.Ms.get(m)):f.Pi.getTargetData(u,d)}(r,o,Xe(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,t?i:W.min(),t?s:H())).next(a=>(aE(r,lI(e),a),{documents:a,Qs:s})))}function sE(n,e){const t=L(n),r=L(t.Pi),i=t.Ms.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",s=>r.At(s,e).next(o=>o?o.target:null))}function oE(n,e){const t=L(n),r=t.Os.get(e)||W.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.Ns.getAllFromCollectionGroup(i,e,Ry(r,Ai),Number.MAX_SAFE_INTEGER)).then(i=>(aE(t,e,i),i))}function aE(n,e,t){let r=n.Os.get(e)||W.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.Os.set(e,r)}async function uP(n,e,t,r){const i=L(n);let s=H(),o=ot();for(const u of t){const d=e.$s(u.metadata.name);u.document&&(s=s.add(d));const f=e.Us(u);f.setReadTime(e.Ks(u.metadata.readTime)),o=o.insert(d,f)}const a=i.Ns.newChangeBuffer({trackRemovals:!0}),l=await Li(i,function(d){return Xe(Xi(J.fromString(`__bundle__/docs/${d}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>iE(u,a,o).next(d=>(a.apply(u),d)).next(d=>i.Pi.removeMatchingKeysForTargetId(u,l.targetId).next(()=>i.Pi.addMatchingKeys(u,s,l.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,d.ks,d.qs)).next(()=>d.ks)))}async function hP(n,e,t=H()){const r=await Li(n,Xe(al(e.bundledQuery))),i=L(n);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=Pe(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Ii.saveNamedQuery(s,e);const a=r.withResumeToken(Re.EMPTY_BYTE_STRING,o);return i.Ms=i.Ms.insert(a.targetId,a),i.Pi.updateTargetData(s,a).next(()=>i.Pi.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Pi.addMatchingKeys(s,t,r.targetId)).next(()=>i.Ii.saveNamedQuery(s,e))})}/**
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
 */const cE="firestore_clients";function n_(n,e){return`${cE}_${n}_${e}`}const lE="firestore_mutations";function r_(n,e,t){let r=`${lE}_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}const uE="firestore_targets";function pu(n,e){return`${uE}_${n}_${e}`}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const Dt="SharedClientState";class Tc{constructor(e,t,r,i){this.user=e,this.batchId=t,this.state=r,this.error=i}static Ws(e,t,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new D(i.error.code,i.error.message))),o?new Tc(e,t,i.state,s):(Ce(Dt,`Failed to parse mutation state for ID '${t}': ${r}`),null)}Gs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ro{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Ws(e,t){const r=JSON.parse(t);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new D(r.error.code,r.error.message))),s?new ro(e,r.state,i):(Ce(Dt,`Failed to parse target state for ID '${e}': ${t}`),null)}Gs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class wc{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Ws(e,t){const r=JSON.parse(t);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=Yh();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=Ny(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new wc(e,s):(Ce(Dt,`Failed to parse client data for instance '${e}': ${t}`),null)}}class dd{constructor(e,t){this.clientId=e,this.onlineState=t}static Ws(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new dd(t.clientId,t.onlineState):(Ce(Dt,`Failed to parse online state: ${e}`),null)}}class th{constructor(){this.activeTargetIds=Yh()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class mu{constructor(e,t,r,i,s){this.window=e,this.Mi=t,this.persistenceKey=r,this.Js=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Hs=this.Ys.bind(this),this.Zs=new Ae($),this.started=!1,this.Xs=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.eo=n_(this.persistenceKey,this.Js),this.no=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.Zs=this.Zs.insert(this.Js,new th),this.ro=new RegExp(`^${cE}_${o}_([^_]*)$`),this.io=new RegExp(`^${lE}_${o}_(\\d+)(?:_(.*))?$`),this.so=new RegExp(`^${uE}_${o}_(\\d+)$`),this.oo=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this._o=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.Hs)}static v(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Ts();for(const r of e){if(r===this.Js)continue;const i=this.getItem(n_(this.persistenceKey,r));if(i){const s=wc.Ws(r,i);s&&(this.Zs=this.Zs.insert(s.clientId,s))}}this.ao();const t=this.storage.getItem(this.oo);if(t){const r=this.uo(t);r&&this.co(r)}for(const r of this.Xs)this.Ys(r);this.Xs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.no,JSON.stringify(e))}getAllActiveQueryTargets(){return this.lo(this.Zs)}isActiveQueryTarget(e){let t=!1;return this.Zs.forEach((r,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.ho(e,"pending")}updateMutationState(e,t,r){this.ho(e,t,r),this.Po(e)}addLocalQueryTarget(e,t=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const i=this.storage.getItem(pu(this.persistenceKey,e));if(i){const s=ro.Ws(e,i);s&&(r=s.state)}}return t&&this.To.zs(e),this.ao(),r}removeLocalQueryTarget(e){this.To.js(e),this.ao()}isLocalQueryTarget(e){return this.To.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(pu(this.persistenceKey,e))}updateQueryState(e,t,r){this.Io(e,t,r)}handleUserChange(e,t,r){t.forEach(i=>{this.Po(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Eo(e)}notifyBundleLoaded(e){this.Ao(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Hs),this.removeItem(this.eo),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return x(Dt,"READ",e,t),t}setItem(e,t){x(Dt,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){x(Dt,"REMOVE",e),this.storage.removeItem(e)}Ys(e){const t=e;if(t.storageArea===this.storage){if(x(Dt,"EVENT",t.key,t.newValue),t.key===this.eo)return void Ce("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Mi.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.ro.test(t.key)){if(t.newValue==null){const r=this.Ro(t.key);return this.Vo(r,null)}{const r=this.mo(t.key,t.newValue);if(r)return this.Vo(r.clientId,r)}}else if(this.io.test(t.key)){if(t.newValue!==null){const r=this.fo(t.key,t.newValue);if(r)return this.po(r)}}else if(this.so.test(t.key)){if(t.newValue!==null){const r=this.yo(t.key,t.newValue);if(r)return this.wo(r)}}else if(t.key===this.oo){if(t.newValue!==null){const r=this.uo(t.newValue);if(r)return this.co(r)}}else if(t.key===this.no){const r=function(s){let o=it.ce;if(s!=null)try{const a=JSON.parse(s);G(typeof a=="number",30636,{So:s}),o=a}catch(a){Ce(Dt,"Failed to read sequence number from WebStorage",a)}return o}(t.newValue);r!==it.ce&&this.sequenceNumberHandler(r)}else if(t.key===this._o){const r=this.bo(t.newValue);await Promise.all(r.map(i=>this.syncEngine.Do(i)))}}}else this.Xs.push(t)})}}get To(){return this.Zs.get(this.Js)}ao(){this.setItem(this.eo,this.To.Gs())}ho(e,t,r){const i=new Tc(this.currentUser,e,t,r),s=r_(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Gs())}Po(e){const t=r_(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Eo(e){const t={clientId:this.Js,onlineState:e};this.storage.setItem(this.oo,JSON.stringify(t))}Io(e,t,r){const i=pu(this.persistenceKey,e),s=new ro(e,t,r);this.setItem(i,s.Gs())}Ao(e){const t=JSON.stringify(Array.from(e));this.setItem(this._o,t)}Ro(e){const t=this.ro.exec(e);return t?t[1]:null}mo(e,t){const r=this.Ro(e);return wc.Ws(r,t)}fo(e,t){const r=this.io.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Tc.Ws(new Fe(s),i,t)}yo(e,t){const r=this.so.exec(e),i=Number(r[1]);return ro.Ws(i,t)}uo(e){return dd.Ws(e)}bo(e){return JSON.parse(e)}async po(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Co(e.batchId,e.state,e.error);x(Dt,`Ignoring mutation for non-active user ${e.user.uid}`)}wo(e){return this.syncEngine.vo(e.targetId,e.state,e.error)}Vo(e,t){const r=t?this.Zs.insert(e,t):this.Zs.remove(e),i=this.lo(this.Zs),s=this.lo(r),o=[],a=[];return s.forEach(l=>{i.has(l)||o.push(l)}),i.forEach(l=>{s.has(l)||a.push(l)}),this.syncEngine.Fo(o,a).then(()=>{this.Zs=r})}co(e){this.Zs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}lo(e){let t=Yh();return e.forEach((r,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class hE{constructor(){this.Mo=new th,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new th,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class dP{Oo(e){}shutdown(){}}/**
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
 */const i_="ConnectivityMonitor";class s_{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){x(i_,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){x(i_,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let ka=null;function nh(){return ka===null?ka=function(){return 268435456+Math.round(2147483648*Math.random())}():ka++,"0x"+ka.toString(16)}/**
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
 */const _u="RestConnection",fP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class pP{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===Io?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(e,t,r,i,s){const o=nh(),a=this.zo(e,t.toUriEncodedString());x(_u,`Sending RPC '${e}' ${o}:`,a,r);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,i,s);const{host:u}=new URL(a),d=Bt(u);return this.Jo(e,a,l,r,d).then(f=>(x(_u,`Received RPC '${e}' ${o}: `,f),f),f=>{throw pt(_u,`RPC '${e}' ${o} failed with error: `,f,"url: ",a,"request:",r),f})}Ho(e,t,r,i,s,o){return this.Go(e,t,r,i,s)}jo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ji}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}zo(e,t){const r=fP[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class mP{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Qe="WebChannelConnection";class _P extends pP{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,i,s){const o=nh();return new Promise((a,l)=>{const u=new fy;u.setWithCredentials(!0),u.listenOnce(py.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ba.NO_ERROR:const f=u.getResponseJson();x(Qe,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),a(f);break;case Ba.TIMEOUT:x(Qe,`RPC '${e}' ${o} timed out`),l(new D(C.DEADLINE_EXCEEDED,"Request time out"));break;case Ba.HTTP_ERROR:const m=u.getStatus();if(x(Qe,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const T=g==null?void 0:g.error;if(T&&T.status&&T.message){const N=function(M){const B=M.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(B)>=0?B:C.UNKNOWN}(T.status);l(new D(N,T.message))}else l(new D(C.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new D(C.UNAVAILABLE,"Connection failed."));break;default:q(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{x(Qe,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);x(Qe,`RPC '${e}' ${o} sending request:`,i),u.send(t,"POST",d,r,15)})}T_(e,t,r){const i=nh(),s=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=gy(),a=_y(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const d=s.join("");x(Qe,`Creating RPC '${e}' stream ${i}: ${d}`,l);const f=o.createWebChannel(d,l);this.I_(f);let m=!1,g=!1;const T=new mP({Yo:P=>{g?x(Qe,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(m||(x(Qe,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),x(Qe,`RPC '${e}' stream ${i} sending:`,P),f.send(P))},Zo:()=>f.close()}),N=(P,M,B)=>{P.listen(M,U=>{try{B(U)}catch(j){setTimeout(()=>{throw j},0)}})};return N(f,Gs.EventType.OPEN,()=>{g||(x(Qe,`RPC '${e}' stream ${i} transport opened.`),T.o_())}),N(f,Gs.EventType.CLOSE,()=>{g||(g=!0,x(Qe,`RPC '${e}' stream ${i} transport closed`),T.a_(),this.E_(f))}),N(f,Gs.EventType.ERROR,P=>{g||(g=!0,pt(Qe,`RPC '${e}' stream ${i} transport errored. Name:`,P.name,"Message:",P.message),T.a_(new D(C.UNAVAILABLE,"The operation could not be completed")))}),N(f,Gs.EventType.MESSAGE,P=>{var M;if(!g){const B=P.data[0];G(!!B,16349);const U=B,j=(U==null?void 0:U.error)||((M=U[0])==null?void 0:M.error);if(j){x(Qe,`RPC '${e}' stream ${i} received error:`,j);const oe=j.status;let ee=function(E){const v=Ne[E];if(v!==void 0)return AI(v)}(oe),w=j.message;ee===void 0&&(ee=C.INTERNAL,w="Unknown error status: "+oe+" with message "+j.message),g=!0,T.a_(new D(ee,w)),f.close()}else x(Qe,`RPC '${e}' stream ${i} received:`,B),T.u_(B)}}),N(a,my.STAT_EVENT,P=>{P.stat===Du.PROXY?x(Qe,`RPC '${e}' stream ${i} detected buffering proxy`):P.stat===Du.NOPROXY&&x(Qe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{T.__()},0),T}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}/**
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
 *//**
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
 */function dE(){return typeof window<"u"?window:null}function Qa(){return typeof document<"u"?document:null}/**
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
 */function zr(n){return new wb(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class fd{constructor(e,t,r=1e3,i=1.5,s=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=i,this.R_=s,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,t-r);i>0&&x("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const o_="PersistentStream";class fE{constructor(e,t,r,i,s,o,a,l){this.Mi=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new fd(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===C.RESOURCE_EXHAUSTED?(Ce(t.toString()),Ce("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===t&&this.G_(r,i)},r=>{e(()=>{const i=new D(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return x(o_,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(x(o_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class gP extends fE{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Rb(this.serializer,e),r=function(s){if(!("targetChange"in s))return W.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?W.min():o.readTime?Pe(o.readTime):W.min()}(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=Yu(this.serializer),t.addTarget=function(s,o){let a;const l=o.target;if(a=fc(l)?{documents:xI(s,l)}:{query:ol(s,l).ft},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=bI(s,o.resumeToken);const u=Hu(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(W.min())>0){a.readTime=Mi(s,o.snapshotVersion.toTimestamp());const u=Hu(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=Cb(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=Yu(this.serializer),t.removeTarget=e,this.q_(t)}}class yP extends fE{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return G(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,G(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){G(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=Sb(e.writeResults,e.commitTime),r=Pe(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=Yu(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Ao(this.serializer,r))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class IP{}class EP extends IP{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new D(C.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Go(e,Qu(t,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new D(C.UNKNOWN,s.toString())})}Ho(e,t,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Ho(e,Qu(t,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new D(C.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class TP{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ce(t),this.aa=!1):x("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Mr="RemoteStore";class wP{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=s,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{tr(this)&&(x(Mr,"Restarting streams for network reachability change."),await async function(l){const u=L(l);u.Ea.add(4),await ts(u),u.Ra.set("Unknown"),u.Ea.delete(4),await Qo(u)}(this))})}),this.Ra=new TP(r,i)}}async function Qo(n){if(tr(n))for(const e of n.da)await e(!0)}async function ts(n){for(const e of n.da)await e(!1)}function hl(n,e){const t=L(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),_d(t)?md(t):rs(t).O_()&&pd(t,e))}function Ui(n,e){const t=L(n),r=rs(t);t.Ia.delete(e),r.O_()&&pE(t,e),t.Ia.size===0&&(r.O_()?r.L_():tr(t)&&t.Ra.set("Unknown"))}function pd(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(W.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}rs(n).Y_(e)}function pE(n,e){n.Va.Ue(e),rs(n).Z_(e)}function md(n){n.Va=new yb({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),rs(n).start(),n.Ra.ua()}function _d(n){return tr(n)&&!rs(n).x_()&&n.Ia.size>0}function tr(n){return L(n).Ea.size===0}function mE(n){n.Va=void 0}async function vP(n){n.Ra.set("Online")}async function AP(n){n.Ia.forEach((e,t)=>{pd(n,e)})}async function RP(n,e){mE(n),_d(n)?(n.Ra.ha(e),md(n)):n.Ra.set("Unknown")}async function SP(n,e,t){if(n.Ra.set("Online"),e instanceof CI&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.Ia.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.Ia.delete(a),i.Va.removeTarget(a))}(n,e)}catch(r){x(Mr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await vc(n,r)}else if(e instanceof Ka?n.Va.Ze(e):e instanceof SI?n.Va.st(e):n.Va.tt(e),!t.isEqual(W.min()))try{const r=await rE(n.localStore);t.compareTo(r)>=0&&await function(s,o){const a=s.Va.Tt(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const d=s.Ia.get(u);d&&s.Ia.set(u,d.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const d=s.Ia.get(l);if(!d)return;s.Ia.set(l,d.withResumeToken(Re.EMPTY_BYTE_STRING,d.snapshotVersion)),pE(s,l);const f=new Zt(d.target,l,u,d.sequenceNumber);pd(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(r){x(Mr,"Failed to raise snapshot:",r),await vc(n,r)}}async function vc(n,e,t){if(!Zn(e))throw e;n.Ea.add(1),await ts(n),n.Ra.set("Offline"),t||(t=()=>rE(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{x(Mr,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Qo(n)})}function _E(n,e){return e().catch(t=>vc(n,t,e))}async function ns(n){const e=L(n),t=$n(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Ln;for(;CP(e);)try{const i=await lP(e.localStore,r);if(i===null){e.Ta.length===0&&t.L_();break}r=i.batchId,bP(e,i)}catch(i){await vc(e,i)}gE(e)&&yE(e)}function CP(n){return tr(n)&&n.Ta.length<10}function bP(n,e){n.Ta.push(e);const t=$n(n);t.O_()&&t.X_&&t.ea(e.mutations)}function gE(n){return tr(n)&&!$n(n).x_()&&n.Ta.length>0}function yE(n){$n(n).start()}async function PP(n){$n(n).ra()}async function NP(n){const e=$n(n);for(const t of n.Ta)e.ea(t.mutations)}async function kP(n,e,t){const r=n.Ta.shift(),i=ed.from(r,e,t);await _E(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await ns(n)}async function DP(n,e){e&&$n(n).X_&&await async function(r,i){if(function(o){return vI(o)&&o!==C.ABORTED}(i.code)){const s=r.Ta.shift();$n(r).B_(),await _E(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ns(r)}}(n,e),gE(n)&&yE(n)}async function a_(n,e){const t=L(n);t.asyncQueue.verifyOperationInProgress(),x(Mr,"RemoteStore received new credentials");const r=tr(t);t.Ea.add(3),await ts(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Qo(t)}async function rh(n,e){const t=L(n);e?(t.Ea.delete(2),await Qo(t)):e||(t.Ea.add(2),await ts(t),t.Ra.set("Unknown"))}function rs(n){return n.ma||(n.ma=function(t,r,i){const s=L(t);return s.sa(),new gP(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Xo:vP.bind(null,n),t_:AP.bind(null,n),r_:RP.bind(null,n),H_:SP.bind(null,n)}),n.da.push(async e=>{e?(n.ma.B_(),_d(n)?md(n):n.Ra.set("Unknown")):(await n.ma.stop(),mE(n))})),n.ma}function $n(n){return n.fa||(n.fa=function(t,r,i){const s=L(t);return s.sa(),new yP(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:PP.bind(null,n),r_:DP.bind(null,n),ta:NP.bind(null,n),na:kP.bind(null,n)}),n.da.push(async e=>{e?(n.fa.B_(),await ns(n)):(await n.fa.stop(),n.Ta.length>0&&(x(Mr,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class gd{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new qe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,a=new gd(e,t,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function is(n,e){if(Ce("AsyncQueue",`${e}: ${n}`),Zn(n))return new D(C.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Rr{static emptySet(e){return new Rr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||O.comparator(t.key,r.key):(t,r)=>O.comparator(t.key,r.key),this.keyedMap=Ws(),this.sortedSet=new Ae(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Rr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Rr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class c_{constructor(){this.ga=new Ae(O.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):q(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,r)=>{e.push(r)}),e}}class Lr{constructor(e,t,r,i,s,o,a,l,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new Lr(e,t,Rr.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&zo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class xP{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class VP{constructor(){this.queries=l_(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const i=L(t),s=i.queries;i.queries=l_(),s.forEach((o,a)=>{for(const l of a.Sa)l.onError(r)})})(this,new D(C.ABORTED,"Firestore shutting down"))}}function l_(){return new pn(n=>cI(n),zo)}async function yd(n,e){const t=L(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new xP,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await t.onListen(i,!0);break;case 1:s.wa=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const a=is(o,`Initialization of query '${ci(e.query)}' failed`);return void e.onError(a)}t.queries.set(i,s),s.Sa.push(e),e.va(t.onlineState),s.wa&&e.Fa(s.wa)&&Ed(t)}async function Id(n,e){const t=L(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function OP(n,e){const t=L(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const a of o.Sa)a.Fa(i)&&(r=!0);o.wa=i}}r&&Ed(t)}function MP(n,e,t){const r=L(n),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(t);r.queries.delete(e)}function Ed(n){n.Ca.forEach(e=>{e.next()})}var ih,u_;(u_=ih||(ih={})).Ma="default",u_.Cache="cache";class Td{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Lr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Lr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==ih.Cache}}/**
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
 */class IE{constructor(e,t){this.Qa=e,this.byteLength=t}$a(){return"metadata"in this.Qa}}/**
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
 */class h_{constructor(e){this.serializer=e}$s(e){return Lt(this.serializer,e)}Us(e){return e.metadata.exists?sl(this.serializer,e.document,!1):ye.newNoDocument(this.$s(e.metadata.name),this.Ks(e.metadata.readTime))}Ks(e){return Pe(e)}}class wd{constructor(e,t){this.Ua=e,this.serializer=t,this.Ka=[],this.Wa=[],this.collectionGroups=new Set,this.progress=EE(e)}get queries(){return this.Ka}get documents(){return this.Wa}Ga(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Qa.namedQuery)this.Ka.push(e.Qa.namedQuery);else if(e.Qa.documentMetadata){this.Wa.push({metadata:e.Qa.documentMetadata}),e.Qa.documentMetadata.exists||++t;const r=J.fromString(e.Qa.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Qa.document&&(this.Wa[this.Wa.length-1].document=e.Qa.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,{...this.progress}):null}za(e){const t=new Map,r=new h_(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.$s(i.metadata.name);for(const o of i.metadata.queries){const a=(t.get(o)||H()).add(s);t.set(o,a)}}return t}async ja(e){const t=await uP(e,new h_(this.serializer),this.Wa,this.Ua.id),r=this.za(this.documents);for(const i of this.Ka)await hP(e,i,r.get(i.name));return this.progress.taskState="Success",{progress:this.progress,Ja:this.collectionGroups,Ha:t}}}function EE(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class TE{constructor(e){this.key=e}}class wE{constructor(e){this.key=e}}class vE{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=H(),this.mutatedKeys=H(),this.eu=uI(e),this.tu=new Rr(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new c_,i=t?t.tu:this.tu;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,f)=>{const m=i.get(d),g=jo(this.query,f)?f:null,T=!!m&&this.mutatedKeys.has(m.key),N=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let P=!1;m&&g?m.data.isEqual(g.data)?T!==N&&(r.track({type:3,doc:g}),P=!0):this.su(m,g)||(r.track({type:2,doc:g}),P=!0,(l&&this.eu(g,l)>0||u&&this.eu(g,u)<0)&&(a=!0)):!m&&g?(r.track({type:0,doc:g}),P=!0):m&&!g&&(r.track({type:1,doc:m}),P=!0,(l||u)&&(a=!0)),P&&(g?(o=o.add(g),s=N?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{tu:o,iu:r,Cs:a,mutatedKeys:s}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((d,f)=>function(g,T){const N=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q(20277,{Rt:P})}};return N(g)-N(T)}(d.type,f.type)||this.eu(d.doc,f.doc)),this.ou(r),i=i??!1;const a=t&&!i?this._u():[],l=this.Xa.size===0&&this.current&&!i?1:0,u=l!==this.Za;return this.Za=l,o.length!==0||u?{snapshot:new Lr(this.query,e.tu,s,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:a}:{au:a}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new c_,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Ya=this.Ya.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ya=this.Ya.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=H(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const t=[];return e.forEach(r=>{this.Xa.has(r)||t.push(new wE(r))}),this.Xa.forEach(r=>{e.has(r)||t.push(new TE(r))}),t}cu(e){this.Ya=e.Qs,this.Xa=H();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Lr.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const nr="SyncEngine";class LP{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class FP{constructor(e){this.key=e,this.hu=!1}}class UP{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new pn(a=>cI(a),zo),this.Iu=new Map,this.Eu=new Set,this.du=new Ae(O.comparator),this.Au=new Map,this.Ru=new od,this.Vu={},this.mu=new Map,this.fu=Or.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function BP(n,e,t=!0){const r=dl(n);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await AE(r,e,t,!0),i}async function qP(n,e){const t=dl(n);await AE(t,e,!0,!1)}async function AE(n,e,t,r){const i=await Li(n.localStore,Xe(e)),s=i.targetId,o=n.sharedClientState.addLocalQueryTarget(s,t);let a;return r&&(a=await vd(n,e,s,o==="current",i.resumeToken)),n.isPrimaryClient&&t&&hl(n.remoteStore,i),a}async function vd(n,e,t,r,i){n.pu=(f,m,g)=>async function(N,P,M,B){let U=P.view.ru(M);U.Cs&&(U=await Ec(N.localStore,P.query,!1).then(({documents:w})=>P.view.ru(w,U)));const j=B&&B.targetChanges.get(P.targetId),oe=B&&B.targetMismatches.get(P.targetId)!=null,ee=P.view.applyChanges(U,N.isPrimaryClient,j,oe);return sh(N,P.targetId,ee.au),ee.snapshot}(n,f,m,g);const s=await Ec(n.localStore,e,!0),o=new vE(e,s.Qs),a=o.ru(s.documents),l=Ho.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),u=o.applyChanges(a,n.isPrimaryClient,l);sh(n,t,u.au);const d=new LP(e,t,o);return n.Tu.set(e,d),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),u.snapshot}async function GP(n,e,t){const r=L(n),i=r.Tu.get(e),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter(o=>!zo(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Fi(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Ui(r.remoteStore,i.targetId),Bi(r,i.targetId)}).catch(Xn)):(Bi(r,i.targetId),await Fi(r.localStore,i.targetId,!0))}async function WP(n,e){const t=L(n),r=t.Tu.get(e),i=t.Iu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Ui(t.remoteStore,r.targetId))}async function zP(n,e,t){const r=Cd(n);try{const i=await function(o,a){const l=L(o),u=ce.now(),d=a.reduce((g,T)=>g.add(T.key),H());let f,m;return l.persistence.runTransaction("Locally write mutations","readwrite",g=>{let T=ot(),N=H();return l.Ns.getEntries(g,d).next(P=>{T=P,T.forEach((M,B)=>{B.isValidDocument()||(N=N.add(M))})}).next(()=>l.localDocuments.getOverlayedDocuments(g,T)).next(P=>{f=P;const M=[];for(const B of a){const U=mb(B,f.get(B.key).overlayedDocument);U!=null&&M.push(new mn(B.key,U,Jy(U.value.mapValue),Te.exists(!0)))}return l.mutationQueue.addMutationBatch(g,u,M,a)}).next(P=>{m=P;const M=P.applyToLocalDocumentSet(f,N);return l.documentOverlayCache.saveOverlays(g,P.batchId,M)})}).then(()=>({batchId:m.batchId,changes:dI(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Vu[o.currentUser.toKey()];u||(u=new Ae($)),u=u.insert(a,l),o.Vu[o.currentUser.toKey()]=u}(r,i.batchId,t),await _n(r,i.changes),await ns(r.remoteStore)}catch(i){const s=is(i,"Failed to persist write");t.reject(s)}}async function RE(n,e){const t=L(n);try{const r=await cP(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.Au.get(s);o&&(G(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?G(o.hu,14607):i.removedDocuments.size>0&&(G(o.hu,42227),o.hu=!1))}),await _n(t,r,e)}catch(r){await Xn(r)}}function d_(n,e,t){const r=L(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Tu.forEach((s,o)=>{const a=o.view.va(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=L(o);l.onlineState=a;let u=!1;l.queries.forEach((d,f)=>{for(const m of f.Sa)m.va(a)&&(u=!0)}),u&&Ed(l)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function jP(n,e,t){const r=L(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new Ae(O.comparator);o=o.insert(s,ye.newNoDocument(s,W.min()));const a=H().add(s),l=new Ko(W.min(),new Map,new Ae($),o,a);await RE(r,l),r.du=r.du.remove(s),r.Au.delete(e),Sd(r)}else await Fi(r.localStore,e,!1).then(()=>Bi(r,e,t)).catch(Xn)}async function $P(n,e){const t=L(n),r=e.batch.batchId;try{const i=await aP(t.localStore,e);Rd(t,r,null),Ad(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await _n(t,i)}catch(i){await Xn(i)}}async function KP(n,e,t){const r=L(n);try{const i=await function(o,a){const l=L(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return l.mutationQueue.lookupMutationBatch(u,a).next(f=>(G(f!==null,37113),d=f.keys(),l.mutationQueue.removeMutationBatch(u,f))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,d,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>l.localDocuments.getDocuments(u,d))})}(r.localStore,e);Rd(r,e,t),Ad(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await _n(r,i)}catch(i){await Xn(i)}}async function HP(n,e){const t=L(n);tr(t.remoteStore)||x(nr,"The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=L(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",l=>a.mutationQueue.getHighestUnacknowledgedBatchId(l))}(t.localStore);if(r===Ln)return void e.resolve();const i=t.mu.get(r)||[];i.push(e),t.mu.set(r,i)}catch(r){const i=is(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function Ad(n,e){(n.mu.get(e)||[]).forEach(t=>{t.resolve()}),n.mu.delete(e)}function Rd(n,e,t){const r=L(n);let i=r.Vu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Vu[r.currentUser.toKey()]=i}}function Bi(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach(r=>{n.Ru.containsKey(r)||SE(n,r)})}function SE(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Ui(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),Sd(n))}function sh(n,e,t){for(const r of t)r instanceof TE?(n.Ru.addReference(r.key,e),QP(n,r)):r instanceof wE?(x(nr,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||SE(n,r.key)):q(19791,{wu:r})}function QP(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||(x(nr,"New document in limbo: "+t),n.Eu.add(r),Sd(n))}function Sd(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new O(J.fromString(e)),r=n.fu.next();n.Au.set(r,new FP(t)),n.du=n.du.insert(t,r),hl(n.remoteStore,new Zt(Xe(Xi(t.path)),r,"TargetPurposeLimboResolution",it.ce))}}async function _n(n,e,t){const r=L(n),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((a,l)=>{o.push(r.pu(l,e,t).then(u=>{var d;if((u||t)&&r.isPrimaryClient){const f=u?!u.fromCache:(d=t==null?void 0:t.targetChanges.get(l.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(u){i.push(u);const f=ud.As(l.targetId,u);s.push(f)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(l,u){const d=L(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>S.forEach(u,m=>S.forEach(m.Es,g=>d.persistence.referenceDelegate.addReference(f,m.targetId,g)).next(()=>S.forEach(m.ds,g=>d.persistence.referenceDelegate.removeReference(f,m.targetId,g)))))}catch(f){if(!Zn(f))throw f;x(hd,"Failed to update sequence numbers: "+f)}for(const f of u){const m=f.targetId;if(!f.fromCache){const g=d.Ms.get(m),T=g.snapshotVersion,N=g.withLastLimboFreeSnapshotVersion(T);d.Ms=d.Ms.insert(m,N)}}}(r.localStore,s))}async function YP(n,e){const t=L(n);if(!t.currentUser.isEqual(e)){x(nr,"User change. New user:",e.toKey());const r=await nE(t.localStore,e);t.currentUser=e,function(s,o){s.mu.forEach(a=>{a.forEach(l=>{l.reject(new D(C.CANCELLED,o))})}),s.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await _n(t,r.Ls)}}function JP(n,e){const t=L(n),r=t.Au.get(e);if(r&&r.hu)return H().add(r.key);{let i=H();const s=t.Iu.get(e);if(!s)return i;for(const o of s){const a=t.Tu.get(o);i=i.unionWith(a.view.nu)}return i}}async function XP(n,e){const t=L(n),r=await Ec(t.localStore,e.query,!0),i=e.view.cu(r);return t.isPrimaryClient&&sh(t,e.targetId,i.au),i}async function ZP(n,e){const t=L(n);return oE(t.localStore,e).then(r=>_n(t,r))}async function e0(n,e,t,r){const i=L(n),s=await function(a,l){const u=L(a),d=L(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",f=>d.er(f,l).next(m=>m?u.localDocuments.getDocuments(f,m):S.resolve(null)))}(i.localStore,e);s!==null?(t==="pending"?await ns(i.remoteStore):t==="acknowledged"||t==="rejected"?(Rd(i,e,r||null),Ad(i,e),function(a,l){L(L(a).mutationQueue).ir(l)}(i.localStore,e)):q(6720,"Unknown batchState",{Su:t}),await _n(i,s)):x(nr,"Cannot apply mutation batch with id: "+e)}async function t0(n,e){const t=L(n);if(dl(t),Cd(t),e===!0&&t.gu!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),i=await f_(t,r.toArray());t.gu=!0,await rh(t.remoteStore,!0);for(const s of i)hl(t.remoteStore,s)}else if(e===!1&&t.gu!==!1){const r=[];let i=Promise.resolve();t.Iu.forEach((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Bi(t,o),Fi(t.localStore,o,!0))),Ui(t.remoteStore,o)}),await i,await f_(t,r),function(o){const a=L(o);a.Au.forEach((l,u)=>{Ui(a.remoteStore,u)}),a.Ru.Jr(),a.Au=new Map,a.du=new Ae(O.comparator)}(t),t.gu=!1,await rh(t.remoteStore,!1)}}async function f_(n,e,t){const r=L(n),i=[],s=[];for(const o of e){let a;const l=r.Iu.get(o);if(l&&l.length!==0){a=await Li(r.localStore,Xe(l[0]));for(const u of l){const d=r.Tu.get(u),f=await XP(r,d);f.snapshot&&s.push(f.snapshot)}}else{const u=await sE(r.localStore,o);a=await Li(r.localStore,u),await vd(r,CE(u),o,!1,a.resumeToken)}i.push(a)}return r.Pu.H_(s),i}function CE(n){return sI(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function n0(n){return function(t){return L(L(t).persistence).Ts()}(L(n).localStore)}async function r0(n,e,t,r){const i=L(n);if(i.gu)return void x(nr,"Ignoring unexpected query state notification.");const s=i.Iu.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const o=await oE(i.localStore,lI(s[0])),a=Ko.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Re.EMPTY_BYTE_STRING);await _n(i,o,a);break}case"rejected":await Fi(i.localStore,e,!0),Bi(i,e,r);break;default:q(64155,t)}}async function i0(n,e,t){const r=dl(n);if(r.gu){for(const i of e){if(r.Iu.has(i)&&r.sharedClientState.isActiveQueryTarget(i)){x(nr,"Adding an already active target "+i);continue}const s=await sE(r.localStore,i),o=await Li(r.localStore,s);await vd(r,CE(s),o.targetId,!1,o.resumeToken),hl(r.remoteStore,o)}for(const i of t)r.Iu.has(i)&&await Fi(r.localStore,i,!1).then(()=>{Ui(r.remoteStore,i),Bi(r,i)}).catch(Xn)}}function dl(n){const e=L(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=RE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=JP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=jP.bind(null,e),e.Pu.H_=OP.bind(null,e.eventManager),e.Pu.yu=MP.bind(null,e.eventManager),e}function Cd(n){const e=L(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=$P.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=KP.bind(null,e),e}function s0(n,e,t){const r=L(n);(async function(s,o,a){try{const l=await o.getMetadata();if(await function(g,T){const N=L(g),P=Pe(T.createTime);return N.persistence.runTransaction("hasNewerBundle","readonly",M=>N.Ii.getBundleMetadata(M,T.id)).then(M=>!!M&&M.createTime.compareTo(P)>=0)}(s.localStore,l))return await o.close(),a._completeWith(function(g){return{taskState:"Success",documentsLoaded:g.totalDocuments,bytesLoaded:g.totalBytes,totalDocuments:g.totalDocuments,totalBytes:g.totalBytes}}(l)),Promise.resolve(new Set);a._updateProgress(EE(l));const u=new wd(l,o.serializer);let d=await o.bu();for(;d;){const m=await u.Ga(d);m&&a._updateProgress(m),d=await o.bu()}const f=await u.ja(s.localStore);return await _n(s,f.Ha,void 0),await function(g,T){const N=L(g);return N.persistence.runTransaction("Save bundle","readwrite",P=>N.Ii.saveBundleMetadata(P,T))}(s.localStore,l),a._completeWith(f.progress),Promise.resolve(f.Ja)}catch(l){return pt(nr,`Loading bundle failed with ${l}`),a._failWith(l),Promise.resolve(new Set)}})(r,e,t).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class qi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=zr(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return tE(this.persistence,new eE,e.initialUser,this.serializer)}Cu(e){return new ad(ul.mi,this.serializer)}Du(e){return new hE}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}qi.provider={build:()=>new qi};class bd extends qi{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){G(this.persistence.referenceDelegate instanceof Ic,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new HI(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Ye.withCacheSize(this.cacheSizeBytes):Ye.DEFAULT;return new ad(r=>Ic.mi(r,t),this.serializer)}}class Pd extends qi{constructor(e,t,r){super(),this.xu=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.xu.initialize(this,e),await Cd(this.xu.syncEngine),await ns(this.xu.remoteStore),await this.persistence.Ji(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}vu(e){return tE(this.persistence,new eE,e.initialUser,this.serializer)}Fu(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new HI(r,e.asyncQueue,t)}Mu(e,t){const r=new IC(t,this.persistence);return new yC(e.asyncQueue,r)}Cu(e){const t=ld(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Ye.withCacheSize(this.cacheSizeBytes):Ye.DEFAULT;return new cd(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,dE(),Qa(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Du(e){return new hE}}class bE extends Pd{constructor(e,t){super(e,t,!1),this.xu=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.xu.syncEngine;this.sharedClientState instanceof mu&&(this.sharedClientState.syncEngine={Co:e0.bind(null,t),vo:r0.bind(null,t),Fo:i0.bind(null,t),Ts:n0.bind(null,t),Do:ZP.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ji(async r=>{await t0(this.xu.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}Du(e){const t=dE();if(!mu.v(t))throw new D(C.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=ld(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new mu(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class Kn{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>d_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=YP.bind(null,this.syncEngine),await rh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new VP}()}createDatastore(e){const t=zr(e.databaseInfo.databaseId),r=function(s){return new _P(s)}(e.databaseInfo);return function(s,o,a,l){return new EP(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,o,a){return new wP(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>d_(this.syncEngine,t,0),function(){return s_.v()?new s_:new dP}())}createSyncEngine(e,t){return function(i,s,o,a,l,u,d){const f=new UP(i,s,o,a,l,u);return d&&(f.gu=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=L(i);x(Mr,"RemoteStore shutting down."),s.Ea.add(5),await ts(s),s.Aa.shutdown(),s.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Kn.provider={build:()=>new Kn};function p_(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 *//**
 * @license
 * Copyright 2017 Google LLC
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
 */class fl{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Ce("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class o0{constructor(e,t){this.Bu=e,this.serializer=t,this.metadata=new qe,this.buffer=new Uint8Array,this.Lu=function(){return new TextDecoder("utf-8")}(),this.ku().then(r=>{r&&r.$a()?this.metadata.resolve(r.Qa.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Qa)}`))},r=>this.metadata.reject(r))}close(){return this.Bu.cancel()}async getMetadata(){return this.metadata.promise}async bu(){return await this.getMetadata(),this.ku()}async ku(){const e=await this.qu();if(e===null)return null;const t=this.Lu.decode(e),r=Number(t);isNaN(r)&&this.Qu(`length string (${t}) is not valid number`);const i=await this.$u(r);return new IE(JSON.parse(i),e.length+r)}Uu(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async qu(){for(;this.Uu()<0&&!await this.Ku(););if(this.buffer.length===0)return null;const e=this.Uu();e<0&&this.Qu("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async $u(e){for(;this.buffer.length<e;)await this.Ku()&&this.Qu("Reached the end of bundle when more is expected.");const t=this.Lu.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Qu(e){throw this.Bu.cancel(),new Error(`Invalid bundle format: ${e}`)}async Ku(){const e=await this.Bu.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */class a0{constructor(e,t){this.bundleData=e,this.serializer=t,this.cursor=0,this.elements=[];let r=this.bu();if(!r||!r.$a())throw new Error(`The first element of the bundle is not a metadata object, it is
         ${JSON.stringify(r==null?void 0:r.Qa)}`);this.metadata=r;do r=this.bu(),r!==null&&this.elements.push(r);while(r!==null)}getMetadata(){return this.metadata}Wu(){return this.elements}bu(){if(this.cursor===this.bundleData.length)return null;const e=this.qu(),t=this.$u(e);return new IE(JSON.parse(t),e)}$u(e){if(this.cursor+e>this.bundleData.length)throw new D(C.INTERNAL,"Reached the end of bundle when more is expected.");return this.bundleData.slice(this.cursor,this.cursor+=e)}qu(){const e=this.cursor;let t=this.cursor;for(;t<this.bundleData.length;){if(this.bundleData[t]==="{"){if(t===e)throw new Error("First character is a bracket and not a number");return this.cursor=t,Number(this.bundleData.slice(e,t))}t++}throw new Error("Reached the end of bundle when more is expected.")}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class c0{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new D(C.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await async function(i,s){const o=L(i),a={documents:s.map(f=>vo(o.serializer,f))},l=await o.Ho("BatchGetDocuments",o.serializer.databaseId,J.emptyPath(),a,s.length),u=new Map;l.forEach(f=>{const m=Ab(o.serializer,f);u.set(m.key.toString(),m)});const d=[];return s.forEach(f=>{const m=u.get(f.toString());G(!!m,55234,{key:f}),d.push(m)}),d}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new es(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const i=O.fromPath(r);this.mutations.push(new Xh(i,this.precondition(i)))}),await async function(r,i){const s=L(r),o={writes:i.map(a=>Ao(s.serializer,a))};await s.Go("Commit",s.serializer.databaseId,J.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw q(50498,{Gu:e.constructor.name});t=W.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new D(C.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(W.min())?Te.exists(!1):Te.updateTime(t):Te.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(W.min()))throw new D(C.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Te.updateTime(t)}return Te.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class l0{constructor(e,t,r,i,s){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=i,this.deferred=s,this.zu=r.maxAttempts,this.M_=new fd(this.asyncQueue,"transaction_retry")}ju(){this.zu-=1,this.Ju()}Ju(){this.M_.p_(async()=>{const e=new c0(this.datastore),t=this.Hu(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Yu(i)}))}).catch(r=>{this.Yu(r)})})}Hu(e){try{const t=this.updateFunction(e);return!qo(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Yu(e){this.zu>0&&this.Zu(e)?(this.zu-=1,this.asyncQueue.enqueueAndForget(()=>(this.Ju(),Promise.resolve()))):this.deferred.reject(e)}Zu(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!vI(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Hn="FirestoreClient";class u0{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=Fe.UNAUTHENTICATED,this.clientId=Hc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{x(Hn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(x(Hn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=is(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function gu(n,e){n.asyncQueue.verifyOperationInProgress(),x(Hn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await nE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function m_(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Nd(n);x(Hn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>a_(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>a_(e.remoteStore,i)),n._onlineComponents=e}async function Nd(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){x(Hn,"Using user provided OfflineComponentProvider");try{await gu(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===C.FAILED_PRECONDITION||i.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;pt("Error using user provided cache. Falling back to memory cache: "+t),await gu(n,new qi)}}else x(Hn,"Using default OfflineComponentProvider"),await gu(n,new bd(void 0));return n._offlineComponents}async function pl(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(x(Hn,"Using user provided OnlineComponentProvider"),await m_(n,n._uninitializedComponentsProvider._online)):(x(Hn,"Using default OnlineComponentProvider"),await m_(n,new Kn))),n._onlineComponents}function PE(n){return Nd(n).then(e=>e.persistence)}function ss(n){return Nd(n).then(e=>e.localStore)}function NE(n){return pl(n).then(e=>e.remoteStore)}function kd(n){return pl(n).then(e=>e.syncEngine)}function kE(n){return pl(n).then(e=>e.datastore)}async function Gi(n){const e=await pl(n),t=e.eventManager;return t.onListen=BP.bind(null,e.syncEngine),t.onUnlisten=GP.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=qP.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=WP.bind(null,e.syncEngine),t}function h0(n){return n.asyncQueue.enqueue(async()=>{const e=await PE(n),t=await NE(n);return e.setNetworkEnabled(!0),function(i){const s=L(i);return s.Ea.delete(0),Qo(s)}(t)})}function d0(n){return n.asyncQueue.enqueue(async()=>{const e=await PE(n),t=await NE(n);return e.setNetworkEnabled(!1),async function(i){const s=L(i);s.Ea.add(0),await ts(s),s.Ra.set("Offline")}(t)})}function f0(n,e){const t=new qe;return n.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(u,d){const f=L(u);return f.persistence.runTransaction("read document","readonly",m=>f.localDocuments.getDocument(m,d))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new D(C.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const l=is(a,`Failed to get document '${s} from cache`);o.reject(l)}}(await ss(n),e,t)),t.promise}function DE(n,e,t={}){const r=new qe;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const d=new fl({next:m=>{d.Nu(),o.enqueueAndForget(()=>Id(s,f));const g=m.docs.has(a);!g&&m.fromCache?u.reject(new D(C.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&m.fromCache&&l&&l.source==="server"?u.reject(new D(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),f=new Td(Xi(a.path),d,{includeMetadataChanges:!0,qa:!0});return yd(s,f)}(await Gi(n),n.asyncQueue,e,t,r)),r.promise}function p0(n,e){const t=new qe;return n.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await Ec(i,s,!0),l=new vE(s,a.Qs),u=l.ru(a.documents),d=l.applyChanges(u,!1);o.resolve(d.snapshot)}catch(a){const l=is(a,`Failed to execute query '${s} against cache`);o.reject(l)}}(await ss(n),e,t)),t.promise}function xE(n,e,t={}){const r=new qe;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const d=new fl({next:m=>{d.Nu(),o.enqueueAndForget(()=>Id(s,f)),m.fromCache&&l.source==="server"?u.reject(new D(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),f=new Td(a,d,{includeMetadataChanges:!0,qa:!0});return yd(s,f)}(await Gi(n),n.asyncQueue,e,t,r)),r.promise}function m0(n,e,t){const r=new qe;return n.asyncQueue.enqueueAndForget(async()=>{try{const i=await kE(n);r.resolve(async function(o,a,l){var N;const u=L(o),{request:d,gt:f,parent:m}=VI(u.serializer,oI(a),l);u.connection.$o||delete d.parent;const g=(await u.Ho("RunAggregationQuery",u.serializer.databaseId,m,d,1)).filter(P=>!!P.result);G(g.length===1,64727);const T=(N=g[0].result)==null?void 0:N.aggregateFields;return Object.keys(T).reduce((P,M)=>(P[f[M]]=T[M],P),{})}(i,e,t))}catch(i){r.reject(i)}}),r.promise}function _0(n,e){const t=new fl(e);return n.asyncQueue.enqueueAndForget(async()=>function(i,s){L(i).Ca.add(s),s.next()}(await Gi(n),t)),()=>{t.Nu(),n.asyncQueue.enqueueAndForget(async()=>function(i,s){L(i).Ca.delete(s)}(await Gi(n),t))}}function g0(n,e,t,r){const i=function(o,a){let l;return l=typeof o=="string"?RI().encode(o):o,function(d,f){return new o0(d,f)}(function(d,f){if(d instanceof Uint8Array)return p_(d,f);if(d instanceof ArrayBuffer)return p_(new Uint8Array(d),f);if(d instanceof ReadableStream)return d.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(l),a)}(t,zr(e));n.asyncQueue.enqueueAndForget(async()=>{s0(await kd(n),i,r)})}function y0(n,e){return n.asyncQueue.enqueue(async()=>function(r,i){const s=L(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.Ii.getNamedQuery(o,i))}(await ss(n),e))}function VE(n,e){return function(r,i){return new a0(r,i)}(n,e)}function I0(n,e){return n.asyncQueue.enqueue(async()=>async function(r,i){const s=L(r),o=s.indexManager,a=[];return s.persistence.runTransaction("Configure indexes","readwrite",l=>o.getFieldIndexes(l).next(u=>function(f,m,g,T,N){f=[...f],m=[...m],f.sort(g),m.sort(g);const P=f.length,M=m.length;let B=0,U=0;for(;B<M&&U<P;){const j=g(f[U],m[B]);j<0?N(f[U++]):j>0?T(m[B++]):(B++,U++)}for(;B<M;)T(m[B++]);for(;U<P;)N(f[U++])}(u,i,pC,d=>{a.push(o.addFieldIndex(l,d))},d=>{a.push(o.deleteFieldIndex(l,d))})).next(()=>S.waitFor(a)))}(await ss(n),e))}function E0(n,e){return n.asyncQueue.enqueue(async()=>function(r,i){L(r).Fs.Vs=i}(await ss(n),e))}function T0(n){return n.asyncQueue.enqueue(async()=>function(t){const r=L(t),i=r.indexManager;return r.persistence.runTransaction("Delete All Indexes","readwrite",s=>i.deleteAllFieldIndexes(s))}(await ss(n)))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function OE(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const __=new Map;/**
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
 */const ME="firestore.googleapis.com",g_=!0;class y_{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new D(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ME,this.ssl=g_}else this.host=e.host,this.ssl=e.ssl??g_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=WI;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<KI)throw new D(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}wy("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=OE(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new D(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new D(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new D(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Yo{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new y_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new D(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new D(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new y_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ey;switch(r.type){case"firstParty":return new aC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new D(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=__.get(t);r&&(x("ComponentProvider","Removing Datastore"),__.delete(t),r.terminate())}(this),Promise.resolve()}}function LE(n,e,t,r={}){var u;n=Z(n,Yo);const i=Bt(e),s=n._getSettings(),o={...s,emulatorOptions:n._getEmulatorOptions()},a=`${e}:${t}`;i&&(Oo(`https://${a}`),qc("Firestore",!0)),s.host!==ME&&s.host!==a&&pt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...s,host:a,ssl:i,emulatorOptions:r};if(!It(l,o)&&(n._setSettings(l),r.mockUserToken)){let d,f;if(typeof r.mockUserToken=="string")d=r.mockUserToken,f=Fe.MOCK_USER;else{d=Rh(r.mockUserToken,(u=n._app)==null?void 0:u.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new D(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Fe(m)}n._authCredentials=new iC(new Iy(d,f))}}/**
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
 */class Ve{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ve(this.firestore,e,this._query)}}class ue{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new bt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ue(this.firestore,e,this._key)}toJSON(){return{type:ue._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Wr(t,ue._jsonSchema))return new ue(e,r||null,new O(J.fromString(t.referencePath)))}}ue._jsonSchemaVersion="firestore/documentReference/1.0",ue._jsonSchema={type:De("string",ue._jsonSchemaVersion),referencePath:De("string")};class bt extends Ve{constructor(e,t,r){super(e,t,Xi(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ue(this.firestore,null,new O(e))}withConverter(e){return new bt(this.firestore,e,this._path)}}function w0(n,e,...t){if(n=re(n),Uh("collection","path",e),n instanceof Yo){const r=J.fromString(e,...t);return om(r),new bt(n,null,r)}{if(!(n instanceof ue||n instanceof bt))throw new D(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(J.fromString(e,...t));return om(r),new bt(n.firestore,null,r)}}function v0(n,e){if(n=Z(n,Yo),Uh("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new D(C.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Ve(n,null,function(r){return new fn(J.emptyPath(),r)}(e))}function FE(n,e,...t){if(n=re(n),arguments.length===1&&(e=Hc.newId()),Uh("doc","path",e),n instanceof Yo){const r=J.fromString(e,...t);return sm(r),new ue(n,null,new O(r))}{if(!(n instanceof ue||n instanceof bt))throw new D(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(J.fromString(e,...t));return sm(r),new ue(n.firestore,n instanceof bt?n.converter:null,new O(r))}}function A0(n,e){return n=re(n),e=re(e),(n instanceof ue||n instanceof bt)&&(e instanceof ue||e instanceof bt)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function Dd(n,e){return n=re(n),e=re(e),n instanceof Ve&&e instanceof Ve&&n.firestore===e.firestore&&zo(n._query,e._query)&&n.converter===e.converter}/**
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
 */const I_="AsyncQueue";class E_{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new fd(this,"async_queue_retry"),this._c=()=>{const r=Qa();r&&x(I_,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=Qa();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Qa();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new qe;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Zn(e))throw e;x(I_,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Ce("INTERNAL UNHANDLED ERROR: ",T_(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const i=gd.createAndSchedule(this,e,t,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&q(47125,{Pc:T_(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function T_(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function _i(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class UE{constructor(){this._progressObserver={},this._taskCompletionResolver=new qe,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const R0=-1;class fe extends Yo{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new E_,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new E_(e),this._firestoreClient=void 0,await e}}}function S0(n,e,t){t||(t=Io);const r=Gr(n,"firestore");if(r.isInitialized(t)){const i=r.getImmediate({identifier:t}),s=r.getOptions(t);if(It(s,e))return i;throw new D(C.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new D(C.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<KI)throw new D(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return e.host&&Bt(e.host)&&Oo(e.host),r.initialize({options:e,instanceIdentifier:t})}function C0(n,e){const t=typeof n=="object"?n:zc(),r=typeof n=="string"?n:e||Io,i=Gr(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Ah("firestore");s&&LE(i,...s)}return i}function we(n){if(n._terminated)throw new D(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||BE(n),n._firestoreClient}function BE(n){var r,i,s;const e=n._freezeSettings(),t=function(a,l,u,d){return new HC(a,l,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,OE(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((s=e.localCache)!=null&&s._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new u0(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(n._componentsProvider))}function b0(n,e){pt("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings();return qE(n,Kn.provider,{build:r=>new Pd(r,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function P0(n){pt("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=n._freezeSettings();qE(n,Kn.provider,{build:t=>new bE(t,e.cacheSizeBytes)})}function qE(n,e,t){if((n=Z(n,fe))._firestoreClient||n._terminated)throw new D(C.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(n._componentsProvider||n._getSettings().localCache)throw new D(C.FAILED_PRECONDITION,"SDK cache is already specified.");n._componentsProvider={_online:e,_offline:t},BE(n)}function N0(n){if(n._initialized&&!n._terminated)throw new D(C.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new qe;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!Mt.v())return Promise.resolve();const i=r+ZI;await Mt.delete(i)}(ld(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function k0(n){return function(t){const r=new qe;return t.asyncQueue.enqueueAndForget(async()=>HP(await kd(t),r)),r.promise}(we(n=Z(n,fe)))}function D0(n){return h0(we(n=Z(n,fe)))}function x0(n){return d0(we(n=Z(n,fe)))}function V0(n){return CA(n.app,"firestore",n._databaseId.database),n._delete()}function oh(n,e){const t=we(n=Z(n,fe)),r=new UE;return g0(t,n._databaseId,e,r),r}function GE(n,e){return y0(we(n=Z(n,fe)),e).then(t=>t?new Ve(n,null,t.query):null)}/**
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
 *//**
 * @license
 * Copyright 2022 Google LLC
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
 */class Wi{constructor(e="count",t){this._internalFieldPath=t,this.type="AggregateField",this.aggregateType=e}}class WE{constructor(e,t,r){this._userDataWriter=t,this._data=r,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
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
 */class rt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new rt(Re.fromBase64String(e))}catch(t){throw new D(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new rt(Re.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:rt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Wr(e,rt._jsonSchema))return rt.fromBase64String(e.bytes)}}rt._jsonSchemaVersion="firestore/bytes/1.0",rt._jsonSchema={type:De("string",rt._jsonSchemaVersion),bytes:De("string")};/**
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
 */class rr{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new D(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ie(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function O0(){return new rr(Ou)}/**
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
 */class ir{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Pt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new D(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new D(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return $(this._lat,e._lat)||$(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Pt._jsonSchemaVersion}}static fromJSON(e){if(Wr(e,Pt._jsonSchema))return new Pt(e.latitude,e.longitude)}}Pt._jsonSchemaVersion="firestore/geoPoint/1.0",Pt._jsonSchema={type:De("string",Pt._jsonSchemaVersion),latitude:De("number"),longitude:De("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class yt{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:yt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Wr(e,yt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new yt(e.vectorValues);throw new D(C.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}yt._jsonSchemaVersion="firestore/vectorValue/1.0",yt._jsonSchema={type:De("string",yt._jsonSchemaVersion),vectorValues:De("object")};/**
 * @license
 * Copyright 2017 Google LLC
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
 */const M0=/^__.*__$/;class L0{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new mn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Zi(e,this.data,t,this.fieldTransforms)}}class zE{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new mn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function jE(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q(40011,{Ac:n})}}class ml{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Rc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new ml({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var i;const t=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){var i;const t=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Ac(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(jE(this.Ac)&&M0.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class F0{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||zr(e)}Cc(e,t,r,i=!1){return new ml({Ac:e,methodName:t,Dc:r,path:Ie.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function jr(n){const e=n._freezeSettings(),t=zr(n._databaseId);return new F0(n._databaseId,!!e.ignoreUndefinedProperties,t)}function _l(n,e,t,r,i,s={}){const o=n.Cc(s.merge||s.mergeFields?2:0,e,t,i);Ud("Data must be an object, but it was:",o,r);const a=HE(r,o);let l,u;if(s.merge)l=new st(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const m=Ro(e,f,t);if(!o.contains(m))throw new D(C.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);YE(d,m)||d.push(m)}l=new st(d),u=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,u=o.fieldTransforms;return new L0(new ze(a),l,u)}class Jo extends ir{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Jo}}function $E(n,e,t){return new ml({Ac:3,Dc:e.settings.Dc,methodName:n._methodName,fc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class xd extends ir{_toFieldTransform(e){return new $o(e.path,new Vi)}isEqual(e){return e instanceof xd}}class Vd extends ir{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=$E(this,e,!0),r=this.vc.map(s=>$r(s,t)),i=new kr(r);return new $o(e.path,i)}isEqual(e){return e instanceof Vd&&It(this.vc,e.vc)}}class Od extends ir{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=$E(this,e,!0),r=this.vc.map(s=>$r(s,t)),i=new Dr(r);return new $o(e.path,i)}isEqual(e){return e instanceof Od&&It(this.vc,e.vc)}}class Md extends ir{constructor(e,t){super(e),this.Fc=t}_toFieldTransform(e){const t=new Oi(e.serializer,mI(e.serializer,this.Fc));return new $o(e.path,t)}isEqual(e){return e instanceof Md&&this.Fc===e.Fc}}function Ld(n,e,t,r){const i=n.Cc(1,e,t);Ud("Data must be an object, but it was:",i,r);const s=[],o=ze.empty();er(r,(l,u)=>{const d=gl(e,l,t);u=re(u);const f=i.yc(d);if(u instanceof Jo)s.push(d);else{const m=$r(u,f);m!=null&&(s.push(d),o.set(d,m))}});const a=new st(s);return new zE(o,a,i.fieldTransforms)}function Fd(n,e,t,r,i,s){const o=n.Cc(1,e,t),a=[Ro(e,r,t)],l=[i];if(s.length%2!=0)throw new D(C.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)a.push(Ro(e,s[m])),l.push(s[m+1]);const u=[],d=ze.empty();for(let m=a.length-1;m>=0;--m)if(!YE(u,a[m])){const g=a[m];let T=l[m];T=re(T);const N=o.yc(g);if(T instanceof Jo)u.push(g);else{const P=$r(T,N);P!=null&&(u.push(g),d.set(g,P))}}const f=new st(u);return new zE(d,f,o.fieldTransforms)}function KE(n,e,t,r=!1){return $r(t,n.Cc(r?4:3,e))}function $r(n,e){if(QE(n=re(n)))return Ud("Unsupported field value:",e,n),HE(n,e);if(n instanceof ir)return function(r,i){if(!jE(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=$r(a,i.wc(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=re(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return mI(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ce.fromDate(r);return{timestampValue:Mi(i.serializer,s)}}if(r instanceof ce){const s=new ce(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Mi(i.serializer,s)}}if(r instanceof Pt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof rt)return{bytesValue:bI(i.serializer,r._byteString)};if(r instanceof ue){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:rd(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof yt)return function(o,a){return{mapValue:{fields:{[$h]:{stringValue:Kh},[ki]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Sc("VectorValues must only contain numeric values.");return Jh(a.serializer,u)})}}}}}}(r,i);throw i.Sc(`Unsupported field value: ${Qc(r)}`)}(n,e)}function HE(n,e){const t={};return Gy(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):er(n,(r,i)=>{const s=$r(i,e.mc(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function QE(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ce||n instanceof Pt||n instanceof rt||n instanceof ue||n instanceof ir||n instanceof yt)}function Ud(n,e,t){if(!QE(t)||!vy(t)){const r=Qc(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function Ro(n,e,t){if((e=re(e))instanceof rr)return e._internalPath;if(typeof e=="string")return gl(n,e);throw Ac("Field path arguments must be of type string or ",n,!1,void 0,t)}const U0=new RegExp("[~\\*/\\[\\]]");function gl(n,e,t){if(e.search(U0)>=0)throw Ac(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new rr(...e.split("."))._internalPath}catch{throw Ac(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ac(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new D(C.INVALID_ARGUMENT,a+n+l)}function YE(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class So{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ue(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new B0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(yl("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class B0 extends So{data(){return super.data()}}function yl(n,e){return typeof e=="string"?gl(n,e):e instanceof rr?e._internalPath:e._delegate._internalPath}/**
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
 */function JE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new D(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Bd{}class os extends Bd{}function q0(n,e,...t){let r=[];e instanceof Bd&&r.push(e),r=r.concat(t),function(s){const o=s.filter(l=>l instanceof Kr).length,a=s.filter(l=>l instanceof as).length;if(o>1||o>0&&a>0)throw new D(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class as extends os{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new as(e,t,r)}_apply(e){const t=this._parse(e);return ZE(e._query,t),new Ve(e.firestore,e.converter,Ku(e._query,t))}_parse(e){const t=jr(e.firestore);return function(s,o,a,l,u,d,f){let m;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new D(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){v_(f,d);const T=[];for(const N of f)T.push(w_(l,s,N));m={arrayValue:{values:T}}}else m=w_(l,s,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||v_(f,d),m=KE(a,o,f,d==="in"||d==="not-in");return ne.create(u,d,m)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function G0(n,e,t){const r=e,i=yl("where",n);return as._create(i,r,t)}class Kr extends Bd{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Kr(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:le.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)ZE(o,l),o=Ku(o,l)}(e._query,t),new Ve(e.firestore,e.converter,Ku(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function W0(...n){return n.forEach(e=>eT("or",e)),Kr._create("or",n)}function z0(...n){return n.forEach(e=>eT("and",e)),Kr._create("and",n)}class Il extends os{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Il(e,t)}_apply(e){const t=function(i,s,o){if(i.startAt!==null)throw new D(C.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new D(C.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new wo(s,o)}(e._query,this._field,this._direction);return new Ve(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new fn(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function j0(n,e="asc"){const t=e,r=yl("orderBy",n);return Il._create(r,t)}class Xo extends os{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Xo(e,t,r)}_apply(e){return new Ve(e.firestore,e.converter,mc(e._query,this._limit,this._limitType))}}function $0(n){return Ay("limit",n),Xo._create("limit",n,"F")}function K0(n){return Ay("limitToLast",n),Xo._create("limitToLast",n,"L")}class Zo extends os{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Zo(e,t,r)}_apply(e){const t=XE(e,this.type,this._docOrFields,this._inclusive);return new Ve(e.firestore,e.converter,function(i,s){return new fn(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,t))}}function H0(...n){return Zo._create("startAt",n,!0)}function Q0(...n){return Zo._create("startAfter",n,!1)}class ea extends os{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new ea(e,t,r)}_apply(e){const t=XE(e,this.type,this._docOrFields,this._inclusive);return new Ve(e.firestore,e.converter,function(i,s){return new fn(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,t))}}function Y0(...n){return ea._create("endBefore",n,!1)}function J0(...n){return ea._create("endAt",n,!0)}function XE(n,e,t,r){if(t[0]=re(t[0]),t[0]instanceof So)return function(s,o,a,l,u){if(!l)throw new D(C.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const d=[];for(const f of mi(s))if(f.field.isKeyField())d.push(Pr(o,l.key));else{const m=l.data.field(f.field);if(el(m))throw new D(C.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+f.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(m===null){const g=f.field.canonicalString();throw new D(C.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${g}' (used as the orderBy) does not exist.`)}d.push(m)}return new jn(d,u)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=jr(n.firestore);return function(o,a,l,u,d,f){const m=o.explicitOrderBy;if(d.length>m.length)throw new D(C.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const g=[];for(let T=0;T<d.length;T++){const N=d[T];if(m[T].field.isKeyField()){if(typeof N!="string")throw new D(C.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof N}`);if(!Qh(o)&&N.indexOf("/")!==-1)throw new D(C.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${N}' contains a slash.`);const P=o.path.child(J.fromString(N));if(!O.isDocumentKey(P))throw new D(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${P}' is not because it contains an odd number of segments.`);const M=new O(P);g.push(Pr(a,M))}else{const P=KE(l,u,N);g.push(P)}}return new jn(g,f)}(n._query,n.firestore._databaseId,i,e,t,r)}}function w_(n,e,t){if(typeof(t=re(t))=="string"){if(t==="")throw new D(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Qh(e)&&t.indexOf("/")!==-1)throw new D(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(J.fromString(t));if(!O.isDocumentKey(r))throw new D(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Pr(n,new O(r))}if(t instanceof ue)return Pr(n,t._key);throw new D(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Qc(t)}.`)}function v_(n,e){if(!Array.isArray(n)||n.length===0)throw new D(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ZE(n,e){const t=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new D(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new D(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function eT(n,e){if(!(e instanceof as||e instanceof Kr))throw new D(C.INVALID_ARGUMENT,`Function ${n}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class qd{convertValue(e,t="none"){switch(Wn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ee(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ln(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw q(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return er(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var r,i,s;const t=(s=(i=(r=e.fields)==null?void 0:r[ki].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Ee(o.doubleValue));return new yt(t)}convertGeoPoint(e){return new Pt(Ee(e.latitude),Ee(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=tl(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(yo(e));default:return null}}convertTimestamp(e){const t=cn(e);return new ce(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=J.fromString(e);G(FI(r),9688,{name:e});const i=new Gn(r.get(1),r.get(3)),s=new O(r.popFirst(5));return i.isEqual(t)||Ce(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */function El(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class Gd extends qd{constructor(e){super(),this.firestore=e}convertBytes(e){return new rt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ue(this.firestore,null,t)}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */function X0(n){return new Wi("sum",Ro("sum",n))}function Z0(n){return new Wi("avg",Ro("average",n))}function tT(){return new Wi("count")}function eN(n,e){var t,r;return n instanceof Wi&&e instanceof Wi&&n.aggregateType===e.aggregateType&&((t=n._internalFieldPath)==null?void 0:t.canonicalString())===((r=e._internalFieldPath)==null?void 0:r.canonicalString())}function tN(n,e){return Dd(n.query,e.query)&&It(n.data(),e.data())}/**
 * @license
 * Copyright 2025 Google LLC
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
 *//**
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
 */const nT="NOT SUPPORTED";class en{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class lt extends So{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new io(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(yl("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new D(C.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=lt._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}function nN(n,e,t){if(Wr(e,lt._jsonSchema)){if(e.bundle===nT)throw new D(C.INVALID_ARGUMENT,"The provided JSON object was created in a client environment, which is not supported.");const r=zr(n._databaseId),i=VE(e.bundle,r),s=i.Wu(),o=new wd(i.getMetadata(),r);for(const d of s)o.Ga(d);const a=o.documents;if(a.length!==1)throw new D(C.INVALID_ARGUMENT,`Expected bundle data to contain 1 document, but it contains ${a.length} documents.`);const l=sl(r,a[0].document),u=new O(J.fromString(e.bundleName));return new lt(n,new Gd(n),u,l,new en(!1,!1),t||null)}}lt._jsonSchemaVersion="firestore/documentSnapshot/1.0",lt._jsonSchema={type:De("string",lt._jsonSchemaVersion),bundleSource:De("string","DocumentSnapshot"),bundleName:De("string"),bundle:De("string")};class io extends lt{data(e={}){return super.data(e)}}class ut{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new en(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new io(this._firestore,this._userDataWriter,r.key,r,new en(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new D(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new io(i._firestore,i._userDataWriter,a.doc.key,a.doc,new en(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new io(i._firestore,i._userDataWriter,a.doc.key,a.doc,new en(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,d=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:iN(a.type),doc:l,oldIndex:u,newIndex:d}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new D(C.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ut._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Hc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(t.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function rN(n,e,t){if(Wr(e,ut._jsonSchema)){if(e.bundle===nT)throw new D(C.INVALID_ARGUMENT,"The provided JSON object was created in a client environment, which is not supported.");const r=zr(n._databaseId),i=VE(e.bundle,r),s=i.Wu(),o=new wd(i.getMetadata(),r);for(const m of s)o.Ga(m);if(o.queries.length!==1)throw new D(C.INVALID_ARGUMENT,`Snapshot data expected 1 query but found ${o.queries.length} queries.`);const a=al(o.queries[0].bundledQuery),l=o.documents;let u=new Rr;l.map(m=>{const g=sl(r,m.document);u=u.add(g)});const d=Lr.fromInitialDocuments(a,u,H(),!1,!1),f=new Ve(n,t||null,a);return new ut(n,new Gd(n),f,d)}}function iN(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q(61501,{type:n})}}function sN(n,e){return n instanceof lt&&e instanceof lt?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof ut&&e instanceof ut&&n._firestore===e._firestore&&Dd(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
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
 */function oN(n){n=Z(n,ue);const e=Z(n.firestore,fe);return DE(we(e),n._key).then(t=>Wd(e,n,t))}ut._jsonSchemaVersion="firestore/querySnapshot/1.0",ut._jsonSchema={type:De("string",ut._jsonSchemaVersion),bundleSource:De("string","QuerySnapshot"),bundleName:De("string"),bundle:De("string")};class sr extends qd{constructor(e){super(),this.firestore=e}convertBytes(e){return new rt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ue(this.firestore,null,t)}}function aN(n){n=Z(n,ue);const e=Z(n.firestore,fe),t=we(e),r=new sr(e);return f0(t,n._key).then(i=>new lt(e,r,n._key,i,new en(i!==null&&i.hasLocalMutations,!0),n.converter))}function cN(n){n=Z(n,ue);const e=Z(n.firestore,fe);return DE(we(e),n._key,{source:"server"}).then(t=>Wd(e,n,t))}function lN(n){n=Z(n,Ve);const e=Z(n.firestore,fe),t=we(e),r=new sr(e);return JE(n._query),xE(t,n._query).then(i=>new ut(e,r,n,i))}function uN(n){n=Z(n,Ve);const e=Z(n.firestore,fe),t=we(e),r=new sr(e);return p0(t,n._query).then(i=>new ut(e,r,n,i))}function hN(n){n=Z(n,Ve);const e=Z(n.firestore,fe),t=we(e),r=new sr(e);return xE(t,n._query,{source:"server"}).then(i=>new ut(e,r,n,i))}function dN(n,e,t){n=Z(n,ue);const r=Z(n.firestore,fe),i=El(n.converter,e,t);return cs(r,[_l(jr(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Te.none())])}function fN(n,e,t,...r){n=Z(n,ue);const i=Z(n.firestore,fe),s=jr(i);let o;return o=typeof(e=re(e))=="string"||e instanceof rr?Fd(s,"updateDoc",n._key,e,t,r):Ld(s,"updateDoc",n._key,e),cs(i,[o.toMutation(n._key,Te.exists(!0))])}function pN(n){return cs(Z(n.firestore,fe),[new es(n._key,Te.none())])}function mN(n,e){const t=Z(n.firestore,fe),r=FE(n),i=El(n.converter,e);return cs(t,[_l(jr(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Te.exists(!1))]).then(()=>r)}function ah(n,...e){var l,u,d;n=re(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||_i(e[r])||(t=e[r++]);const i={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(_i(e[r])){const f=e[r];e[r]=(l=f.next)==null?void 0:l.bind(f),e[r+1]=(u=f.error)==null?void 0:u.bind(f),e[r+2]=(d=f.complete)==null?void 0:d.bind(f)}let s,o,a;if(n instanceof ue)o=Z(n.firestore,fe),a=Xi(n._key.path),s={next:f=>{e[r]&&e[r](Wd(o,n,f))},error:e[r+1],complete:e[r+2]};else{const f=Z(n,Ve);o=Z(f.firestore,fe),a=f._query;const m=new sr(o);s={next:g=>{e[r]&&e[r](new ut(o,m,f,g))},error:e[r+1],complete:e[r+2]},JE(n._query)}return function(m,g,T,N){const P=new fl(N),M=new Td(g,P,T);return m.asyncQueue.enqueueAndForget(async()=>yd(await Gi(m),M)),()=>{P.Nu(),m.asyncQueue.enqueueAndForget(async()=>Id(await Gi(m),M))}}(we(o),a,i,s)}function _N(n,e,...t){const r=re(n),i=function(l){const u={bundle:"",bundleName:"",bundleSource:""},d=["bundle","bundleName","bundleSource"];for(const f of d){if(!(f in l)){u.error=`snapshotJson missing required field: ${f}`;break}const m=l[f];if(typeof m!="string"){u.error=`snapshotJson field '${f}' must be a string.`;break}if(m.length===0){u.error=`snapshotJson field '${f}' cannot be an empty string.`;break}f==="bundle"?u.bundle=m:f==="bundleName"?u.bundleName=m:f==="bundleSource"&&(u.bundleSource=m)}return u}(e);if(i.error)throw new D(C.INVALID_ARGUMENT,i.error);let s,o=0;if(typeof t[o]!="object"||_i(t[o])||(s=t[o++]),i.bundleSource==="QuerySnapshot"){let a=null;if(typeof t[o]=="object"&&_i(t[o])){const l=t[o++];a={next:l.next,error:l.error,complete:l.complete}}else a={next:t[o++],error:t[o++],complete:t[o++]};return function(u,d,f,m,g){let T,N=!1;return oh(u,d.bundle).then(()=>GE(u,d.bundleName)).then(M=>{M&&!N&&(g&&M.withConverter(g),T=ah(M,f||{},m))}).catch(M=>(m.error&&m.error(M),()=>{})),()=>{N||(N=!0,T&&T())}}(r,i,s,a,t[o])}if(i.bundleSource==="DocumentSnapshot"){let a=null;if(typeof t[o]=="object"&&_i(t[o])){const l=t[o++];a={next:l.next,error:l.error,complete:l.complete}}else a={next:t[o++],error:t[o++],complete:t[o++]};return function(u,d,f,m,g){let T,N=!1;return oh(u,d.bundle).then(()=>{if(!N){const M=new ue(u,g||null,O.fromPath(d.bundleName));T=ah(M,f||{},m)}}).catch(M=>(m.error&&m.error(M),()=>{})),()=>{N||(N=!0,T&&T())}}(r,i,s,a,t[o])}throw new D(C.INVALID_ARGUMENT,`unsupported bundle source: ${i.bundleSource}`)}function gN(n,e){return _0(we(n=Z(n,fe)),_i(e)?e:{next:e})}function cs(n,e){return function(r,i){const s=new qe;return r.asyncQueue.enqueueAndForget(async()=>zP(await kd(r),i,s)),s.promise}(we(n),e)}function Wd(n,e,t){const r=t.docs.get(e._key),i=new sr(n);return new lt(n,i,e._key,r,new en(t.hasPendingWrites,t.fromCache),e.converter)}function yN(n){return rT(n,{count:tT()})}function rT(n,e){const t=Z(n.firestore,fe),r=we(t),i=qy(e,(s,o)=>new wI(o,s.aggregateType,s._internalFieldPath));return m0(r,n._query,i).then(s=>function(a,l,u){const d=new sr(a);return new WE(l,d,u)}(t,n,s))}class IN{constructor(e){this.kind="memory",this._onlineComponentProvider=Kn.provider,this._offlineComponentProvider=e!=null&&e.garbageCollector?e.garbageCollector._offlineComponentProvider:{build:()=>new bd(void 0)}}toJSON(){return{kind:this.kind}}}class EN{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=iT(void 0),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}class TN{constructor(){this.kind="memoryEager",this._offlineComponentProvider=qi.provider}toJSON(){return{kind:this.kind}}}class wN{constructor(e){this.kind="memoryLru",this._offlineComponentProvider={build:()=>new bd(e)}}toJSON(){return{kind:this.kind}}}function vN(){return new TN}function AN(n){return new wN(n==null?void 0:n.cacheSizeBytes)}function RN(n){return new IN(n)}function SN(n){return new EN(n)}class CN{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Kn.provider,this._offlineComponentProvider={build:t=>new Pd(t,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class bN{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Kn.provider,this._offlineComponentProvider={build:t=>new bE(t,e==null?void 0:e.cacheSizeBytes)}}}function iT(n){return new CN(n==null?void 0:n.forceOwnership)}function PN(){return new bN}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const NN={maxAttempts:5};/**
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
 */class sT{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=jr(e)}set(e,t,r){this._verifyNotCommitted();const i=xn(e,this._firestore),s=El(i.converter,t,r),o=_l(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Te.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const s=xn(e,this._firestore);let o;return o=typeof(t=re(t))=="string"||t instanceof rr?Fd(this._dataReader,"WriteBatch.update",s._key,t,r,i):Ld(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,Te.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=xn(e,this._firestore);return this._mutations=this._mutations.concat(new es(t._key,Te.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new D(C.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function xn(n,e){if((n=re(n)).firestore!==e)throw new D(C.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */class kN{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=jr(e)}get(e){const t=xn(e,this._firestore),r=new Gd(this._firestore);return this._transaction.lookup([t._key]).then(i=>{if(!i||i.length!==1)return q(24041);const s=i[0];if(s.isFoundDocument())return new So(this._firestore,r,s.key,s,t.converter);if(s.isNoDocument())return new So(this._firestore,r,t._key,null,t.converter);throw q(18433,{doc:s})})}set(e,t,r){const i=xn(e,this._firestore),s=El(i.converter,t,r),o=_l(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,t,r,...i){const s=xn(e,this._firestore);let o;return o=typeof(t=re(t))=="string"||t instanceof rr?Fd(this._dataReader,"Transaction.update",s._key,t,r,i):Ld(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,o),this}delete(e){const t=xn(e,this._firestore);return this._transaction.delete(t._key),this}}/**
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
 */class oT extends kN{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=xn(e,this._firestore),r=new sr(this._firestore);return super.get(e).then(i=>new lt(this._firestore,r,t._key,i._document,new en(!1,!1),t.converter))}}function DN(n,e,t){n=Z(n,fe);const r={...NN,...t};return function(s){if(s.maxAttempts<1)throw new D(C.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const l=new qe;return s.asyncQueue.enqueueAndForget(async()=>{const u=await kE(s);new l0(s.asyncQueue,u,a,o,l).ju()}),l.promise}(we(n),i=>e(new oT(n,i)),r)}/**
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
 */function xN(){return new Jo("deleteField")}function VN(){return new xd("serverTimestamp")}function ON(...n){return new Vd("arrayUnion",n)}function MN(...n){return new Od("arrayRemove",n)}function LN(n){return new Md("increment",n)}function FN(n){return new yt(n)}/**
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
 */function UN(n){return we(n=Z(n,fe)),new sT(n,e=>cs(n,e))}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function BN(n,e){const t=we(n=Z(n,fe));if(!t._uninitializedComponentsProvider||t._uninitializedComponentsProvider._offline.kind==="memory")return pt("Cannot enable indexes when persistence is disabled"),Promise.resolve();const r=function(s){const o=typeof s=="string"?function(u){try{return JSON.parse(u)}catch(d){throw new D(C.INVALID_ARGUMENT,"Failed to parse JSON: "+(d==null?void 0:d.message))}}(s):s,a=[];if(Array.isArray(o.indexes))for(const l of o.indexes){const u=A_(l,"collectionGroup"),d=[];if(Array.isArray(l.fields))for(const f of l.fields){const m=gl("setIndexConfiguration",A_(f,"fieldPath"));f.arrayConfig==="CONTAINS"?d.push(new vr(m,2)):f.order==="ASCENDING"?d.push(new vr(m,0)):f.order==="DESCENDING"&&d.push(new vr(m,1))}a.push(new Ri(Ri.UNKNOWN_ID,u,d,Si.empty()))}return a}(e);return I0(t,r)}function A_(n,e){if(typeof n[e]!="string")throw new D(C.INVALID_ARGUMENT,"Missing string value for: "+e);return n[e]}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class aT{constructor(e){this._firestore=e,this.type="PersistentCacheIndexManager"}}function qN(n){var i;n=Z(n,fe);const e=R_.get(n);if(e)return e;if(((i=we(n)._uninitializedComponentsProvider)==null?void 0:i._offline.kind)!=="persistent")return null;const r=new aT(n);return R_.set(n,r),r}function GN(n){cT(n,!0)}function WN(n){cT(n,!1)}function zN(n){T0(we(n._firestore)).then(e=>x("deleting all persistent cache indexes succeeded")).catch(e=>pt("deleting all persistent cache indexes failed",e))}function cT(n,e){E0(we(n._firestore),e).then(t=>x(`setting persistent cache index auto creation isEnabled=${e} succeeded`)).catch(t=>pt(`setting persistent cache index auto creation isEnabled=${e} failed`,t))}const R_=new WeakMap;/**
 * @license
 * Copyright 2017 Google LLC
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
 */function jN(n){var r;const e=we(Z(n.firestore,fe)),t=(r=e._onlineComponents)==null?void 0:r.datastore.serializer;return t===void 0?null:ol(t,Xe(n._query)).ft}function $N(n,e){var s;const t=qy(e,(o,a)=>new wI(a,o.aggregateType,o._internalFieldPath)),r=we(Z(n.firestore,fe)),i=(s=r._onlineComponents)==null?void 0:s.datastore.serializer;return i===void 0?null:VI(i,oI(n._query),t,!0).request}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class KN{constructor(){throw new Error("instances of this class should not be created")}static onExistenceFilterMismatch(e){return zd.instance.onExistenceFilterMismatch(e)}}class zd{constructor(){this.Mc=new Map}static get instance(){return Da||(Da=new zd,function(t){if(no)throw new Error("a TestingHooksSpi instance is already set");no=t}(Da)),Da}lt(e){this.Mc.forEach(t=>t(e))}onExistenceFilterMismatch(e){const t=Symbol(),r=this.Mc;return r.set(t,e),()=>r.delete(t)}}let Da=null;(function(e,t=!0){(function(i){Ji=i})(Jn),Bn(new sn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new fe(new sC(r.getProvider("auth-internal")),new cC(o,r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new D(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Gn(u.options.projectId,d)}(o,i),o);return s={useFetchStreams:t,...s},a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),gt(rm,im,e),gt(rm,im,"esm2020")})();const zx=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:qd,AggregateField:Wi,AggregateQuerySnapshot:WE,Bytes:rt,CACHE_SIZE_UNLIMITED:R0,CollectionReference:bt,DocumentReference:ue,DocumentSnapshot:lt,FieldPath:rr,FieldValue:ir,Firestore:fe,FirestoreError:D,GeoPoint:Pt,LoadBundleTask:UE,PersistentCacheIndexManager:aT,Query:Ve,QueryCompositeFilterConstraint:Kr,QueryConstraint:os,QueryDocumentSnapshot:io,QueryEndAtConstraint:ea,QueryFieldFilterConstraint:as,QueryLimitConstraint:Xo,QueryOrderByConstraint:Il,QuerySnapshot:ut,QueryStartAtConstraint:Zo,SnapshotMetadata:en,Timestamp:ce,Transaction:oT,VectorValue:yt,WriteBatch:sT,_AutoId:Hc,_ByteString:Re,_DatabaseId:Gn,_DocumentKey:O,_EmptyAppCheckTokenProvider:lC,_EmptyAuthCredentialsProvider:Ey,_FieldPath:Ie,_TestingHooks:KN,_cast:Z,_debugAssert:rC,_internalAggregationQueryToProtoRunAggregationQueryRequest:$N,_internalQueryToProtoQueryTarget:jN,_isBase64Available:$C,_logWarn:pt,_validateIsNotUsedTogether:wy,addDoc:mN,aggregateFieldEqual:eN,aggregateQuerySnapshotEqual:tN,and:z0,arrayRemove:MN,arrayUnion:ON,average:Z0,clearIndexedDbPersistence:N0,collection:w0,collectionGroup:v0,connectFirestoreEmulator:LE,count:tT,deleteAllPersistentCacheIndexes:zN,deleteDoc:pN,deleteField:xN,disableNetwork:x0,disablePersistentCacheIndexAutoCreation:WN,doc:FE,documentId:O0,documentSnapshotFromJSON:nN,enableIndexedDbPersistence:b0,enableMultiTabIndexedDbPersistence:P0,enableNetwork:D0,enablePersistentCacheIndexAutoCreation:GN,endAt:J0,endBefore:Y0,ensureFirestoreConfigured:we,executeWrite:cs,getAggregateFromServer:rT,getCountFromServer:yN,getDoc:oN,getDocFromCache:aN,getDocFromServer:cN,getDocs:lN,getDocsFromCache:uN,getDocsFromServer:hN,getFirestore:C0,getPersistentCacheIndexManager:qN,increment:LN,initializeFirestore:S0,limit:$0,limitToLast:K0,loadBundle:oh,memoryEagerGarbageCollector:vN,memoryLocalCache:RN,memoryLruGarbageCollector:AN,namedQuery:GE,onSnapshot:ah,onSnapshotResume:_N,onSnapshotsInSync:gN,or:W0,orderBy:j0,persistentLocalCache:SN,persistentMultipleTabManager:PN,persistentSingleTabManager:iT,query:q0,queryEqual:Dd,querySnapshotFromJSON:rN,refEqual:A0,runTransaction:DN,serverTimestamp:VN,setDoc:dN,setIndexConfiguration:BN,setLogLevel:nC,snapshotEqual:sN,startAfter:Q0,startAt:H0,sum:X0,terminate:V0,updateDoc:fN,vector:FN,waitForPendingWrites:k0,where:G0,writeBatch:UN},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2017 Google LLC
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
 */const lT="firebasestorage.googleapis.com",HN="storageBucket",QN=2*60*1e3,YN=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
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
 */class jt extends qt{constructor(e,t,r=0){super(yu(e),`Firebase Storage: ${t} (${yu(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,jt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return yu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ut;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ut||(Ut={}));function yu(n){return"storage/"+n}function JN(){const n="An unknown error occurred, please check the error payload for server response.";return new jt(Ut.UNKNOWN,n)}function XN(){return new jt(Ut.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function ZN(){return new jt(Ut.CANCELED,"User canceled the upload/download.")}function ek(n){return new jt(Ut.INVALID_URL,"Invalid URL '"+n+"'.")}function tk(n){return new jt(Ut.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function S_(n){return new jt(Ut.INVALID_ARGUMENT,n)}function uT(){return new jt(Ut.APP_DELETED,"The Firebase app was deleted.")}function nk(n){return new jt(Ut.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Rt{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Rt.makeFromUrl(e,t)}catch{return new Rt(e,"")}if(r.path==="")return r;throw tk(e)}static makeFromUrl(e,t){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(j){j.path.charAt(j.path.length-1)==="/"&&(j.path_=j.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(j){j.path_=decodeURIComponent(j.path)}const d="v[A-Za-z0-9_]+",f=t.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",g=new RegExp(`^https?://${f}/${d}/b/${i}/o${m}`,"i"),T={bucket:1,path:3},N=t===lT?"(?:storage.googleapis.com|storage.cloud.google.com)":t,P="([^?#]*)",M=new RegExp(`^https?://${N}/${i}/${P}`,"i"),U=[{regex:a,indices:l,postModify:s},{regex:g,indices:T,postModify:u},{regex:M,indices:{bucket:1,path:2},postModify:u}];for(let j=0;j<U.length;j++){const oe=U[j],ee=oe.regex.exec(e);if(ee){const w=ee[oe.indices.bucket];let y=ee[oe.indices.path];y||(y=""),r=new Rt(w,y),oe.postModify(r);break}}if(r==null)throw ek(e);return r}}class rk{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function ik(n,e,t){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function d(...P){u||(u=!0,e.apply(null,P))}function f(P){i=setTimeout(()=>{i=null,n(g,l())},P)}function m(){s&&clearTimeout(s)}function g(P,...M){if(u){m();return}if(P){m(),d.call(null,P,...M);return}if(l()||o){m(),d.call(null,P,...M);return}r<64&&(r*=2);let U;a===1?(a=2,U=0):U=(r+Math.random())*1e3,f(U)}let T=!1;function N(P){T||(T=!0,m(),!u&&(i!==null?(P||(a=2),clearTimeout(i),f(0)):P||(a=1)))}return f(0),s=setTimeout(()=>{o=!0,N(!0)},t),N}function sk(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function ok(n){return n!==void 0}function C_(n,e,t,r){if(r<e)throw S_(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw S_(`Invalid value for '${n}'. Expected ${t} or less.`)}function ak(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const i=e(r)+"="+e(n[r]);t=t+i+"&"}return t=t.slice(0,-1),t}var Rc;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Rc||(Rc={}));/**
 * @license
 * Copyright 2022 Google LLC
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
 */function ck(n,e){const t=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,s=e.indexOf(n)!==-1;return t||i||s}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class lk{constructor(e,t,r,i,s,o,a,l,u,d,f,m=!0,g=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=f,this.retry=m,this.isUsingEmulator=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((T,N)=>{this.resolve_=T,this.reject_=N,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new xa(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Rc.NO_ERROR,l=s.getStatus();if(!a||ck(l,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===Rc.ABORT;r(!1,new xa(!1,null,d));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new xa(u,s))})},t=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());ok(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=JN();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?uT():ZN();o(l)}else{const l=XN();o(l)}};this.canceled_?t(!1,new xa(!1,null,!0)):this.backoffId_=ik(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&sk(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class xa{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function uk(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function hk(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function dk(n,e){e&&(n["X-Firebase-GMPID"]=e)}function fk(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function pk(n,e,t,r,i,s,o=!0,a=!1){const l=ak(n.urlParams),u=n.url+l,d=Object.assign({},n.headers);return dk(d,e),uk(d,t),hk(d,s),fk(d,r),new lk(u,n.method,d,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,o,a)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function mk(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function _k(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */class Sc{constructor(e,t){this._service=e,t instanceof Rt?this._location=t:this._location=Rt.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Sc(e,t)}get root(){const e=new Rt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return _k(this._location.path)}get storage(){return this._service}get parent(){const e=mk(this._location.path);if(e===null)return null;const t=new Rt(this._location.bucket,e);return new Sc(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw nk(e)}}function b_(n,e){const t=e==null?void 0:e[HN];return t==null?null:Rt.makeFromBucketSpec(t,n)}function gk(n,e,t,r={}){n.host=`${e}:${t}`;const i=Bt(e);i&&(Oo(`https://${n.host}/b`),qc("Storage",!0)),n._isUsingEmulator=!0,n._protocol=i?"https":"http";const{mockUserToken:s}=r;s&&(n._overrideAuthToken=typeof s=="string"?s:Rh(s,n.app.options.projectId))}class yk{constructor(e,t,r,i,s,o=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._isUsingEmulator=o,this._bucket=null,this._host=lT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=QN,this._maxUploadRetryTime=YN,this._requests=new Set,i!=null?this._bucket=Rt.makeFromBucketSpec(i,this._host):this._bucket=b_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Rt.makeFromBucketSpec(this._url,e):this._bucket=b_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){C_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){C_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(nt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Sc(this,e)}_makeRequest(e,t,r,i,s=!0){if(this._deleted)return new rk(uT());{const o=pk(e,this._appId,r,i,t,this._firebaseVersion,s,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,i).getPromise()}}const P_="@firebase/storage",N_="0.14.0";/**
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
 */const hT="storage";function jx(n=zc(),e){n=re(n);const r=Gr(n,hT).getImmediate({identifier:e}),i=Ah("storage");return i&&Ik(r,...i),r}function Ik(n,e,t,r={}){gk(n,e,t,r)}function Ek(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new yk(t,r,i,e,Jn)}function Tk(){Bn(new sn(hT,Ek,"PUBLIC").setMultipleInstances(!0)),gt(P_,N_,""),gt(P_,N_,"esm2020")}Tk();const k_="@firebase/database",D_="1.1.0";/**
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
 */let dT="";function wk(n){dT=n}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class vk{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Be(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:lo(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ak{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Gt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const fT=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new vk(e)}}catch{}return new Ak},Tr=fT("localStorage"),ch=fT("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
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
 */const gi=new Wc("@firebase/database"),Rk=function(){let n=1;return function(){return n++}}(),pT=function(n){const e=Sv(n),t=new wv;t.update(e);const r=t.digest();return vh.encodeByteArray(r)},ta=function(...n){let e="";for(let t=0;t<n.length;t++){const r=n[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=ta.apply(null,r):typeof r=="object"?e+=Be(r):e+=r,e+=" "}return e};let Sr=null,x_=!0;const Sk=function(n,e){V(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(gi.logLevel=te.VERBOSE,Sr=gi.log.bind(gi),e&&ch.set("logging_enabled",!0)):typeof n=="function"?Sr=n:(Sr=null,ch.remove("logging_enabled"))},We=function(...n){if(x_===!0&&(x_=!1,Sr===null&&ch.get("logging_enabled")===!0&&Sk(!0)),Sr){const e=ta.apply(null,n);Sr(e)}},na=function(n){return function(...e){We(n,...e)}},lh=function(...n){const e="FIREBASE INTERNAL ERROR: "+ta(...n);gi.error(e)},un=function(...n){const e=`FIREBASE FATAL ERROR: ${ta(...n)}`;throw gi.error(e),new Error(e)},ht=function(...n){const e="FIREBASE WARNING: "+ta(...n);gi.warn(e)},Ck=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ht("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Tl=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},bk=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},zi="[MIN_NAME]",Fr="[MAX_NAME]",Hr=function(n,e){if(n===e)return 0;if(n===zi||e===Fr)return-1;if(e===zi||n===Fr)return 1;{const t=V_(n),r=V_(e);return t!==null?r!==null?t-r===0?n.length-e.length:t-r:-1:r!==null?1:n<e?-1:1}},Pk=function(n,e){return n===e?0:n<e?-1:1},Ms=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Be(e))},jd=function(n){if(typeof n!="object"||n===null)return Be(n);const e=[];for(const r in n)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=Be(e[r]),t+=":",t+=jd(n[e[r]]);return t+="}",t},mT=function(n,e){const t=n.length;if(t<=e)return[n];const r=[];for(let i=0;i<t;i+=e)i+e>t?r.push(n.substring(i,t)):r.push(n.substring(i,i+e));return r};function Ze(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const _T=function(n){V(!Tl(n),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let i,s,o,a,l;n===0?(s=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),r),s=a+r,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(s=0,o=Math.round(n/Math.pow(2,1-r-t))));const u=[];for(l=t;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let f="";for(l=0;l<64;l+=8){let m=parseInt(d.substr(l,8),2).toString(16);m.length===1&&(m="0"+m),f=f+m}return f.toLowerCase()},Nk=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},kk=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Dk(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const r=new Error(n+" at "+e._path.toString()+": "+t);return r.code=n.toUpperCase(),r}const xk=new RegExp("^-?(0*)\\d{1,10}$"),Vk=-2147483648,Ok=2147483647,V_=function(n){if(xk.test(n)){const e=Number(n);if(e>=Vk&&e<=Ok)return e}return null},ls=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw ht("Exception was thrown by user callback.",t),e},Math.floor(0))}},Mk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},so=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
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
 */class Lk{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,nt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)==null||t.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){ht(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Fk{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(We("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ht(e)}}class yi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}yi.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
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
 */const $d="5",gT="v",yT="s",IT="r",ET="f",TT=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,wT="ls",vT="p",uh="ac",AT="websocket",RT="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ST{constructor(e,t,r,i,s=!1,o="",a=!1,l=!1,u=null){this.secure=t,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Tr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Tr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Uk(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function CT(n,e,t){V(typeof e=="string","typeof type must == string"),V(typeof t=="object","typeof params must == object");let r;if(e===AT)r=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===RT)r=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Uk(n)&&(t.ns=n.namespace);const i=[];return Ze(t,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Bk{constructor(){this.counters_={}}incrementCounter(e,t=1){Gt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return ov(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Iu={},Eu={};function Kd(n){const e=n.toString();return Iu[e]||(Iu[e]=new Bk),Iu[e]}function qk(n,e){const t=n.toString();return Eu[t]||(Eu[t]=e()),Eu[t]}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Gk{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ls(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const O_="start",Wk="close",zk="pLPCommand",jk="pRTLPCB",bT="id",PT="pw",NT="ser",$k="cb",Kk="seg",Hk="ts",Qk="d",Yk="dframe",kT=1870,DT=30,Jk=kT-DT,Xk=25e3,Zk=3e4;class hi{constructor(e,t,r,i,s,o,a){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=na(e),this.stats_=Kd(t),this.urlFn=l=>(this.appCheckToken&&(l[uh]=this.appCheckToken),CT(t,RT,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Gk(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Zk)),bk(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Hd((...s)=>{const[o,a,l,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===O_)this.id=a,this.password=l;else if(o===Wk)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[O_]="t",r[NT]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[$k]=this.scriptTagHolder.uniqueCallbackIdentifier),r[gT]=$d,this.transportSessionId&&(r[yT]=this.transportSessionId),this.lastSessionId&&(r[wT]=this.lastSessionId),this.applicationId&&(r[vT]=this.applicationId),this.appCheckToken&&(r[uh]=this.appCheckToken),typeof location<"u"&&location.hostname&&TT.test(location.hostname)&&(r[IT]=ET);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){hi.forceAllow_=!0}static forceDisallow(){hi.forceDisallow_=!0}static isAvailable(){return hi.forceAllow_?!0:!hi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Nk()&&!kk()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Be(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=mg(t),i=mT(r,Jk);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[Yk]="t",r[bT]=e,r[PT]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Be(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Hd{constructor(e,t,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Rk(),window[zk+this.uniqueCallbackIdentifier]=e,window[jk+this.uniqueCallbackIdentifier]=t,this.myIFrame=Hd.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){We("frame writing exception"),a.stack&&We(a.stack),We(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||We("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[bT]=this.myID,e[PT]=this.myPW,e[NT]=this.currentSerial;let t=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+DT+r.length<=kT;){const o=this.pendingSegs.shift();r=r+"&"+Kk+i+"="+o.seg+"&"+Hk+i+"="+o.ts+"&"+Qk+i+"="+o.d,i++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(r,Math.floor(Xk)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{We("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const eD=16384,tD=45e3;let Cc=null;typeof MozWebSocket<"u"?Cc=MozWebSocket:typeof WebSocket<"u"&&(Cc=WebSocket);class vt{constructor(e,t,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=na(this.connId),this.stats_=Kd(t),this.connURL=vt.connectionURL_(t,o,a,i,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,i,s){const o={};return o[gT]=$d,typeof location<"u"&&location.hostname&&TT.test(location.hostname)&&(o[IT]=ET),t&&(o[yT]=t),r&&(o[wT]=r),i&&(o[uh]=i),s&&(o[vT]=s),CT(e,AT,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Tr.set("previous_websocket_failure",!0);try{let r;vg(),this.mySock=new Cc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){vt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Cc!==null&&!vt.forceDisallow_}static previouslyFailed(){return Tr.isInMemoryStorage||Tr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Tr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=lo(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(V(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=Be(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=mT(t,eD);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(tD))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}vt.responsesRequiredToBeHealthy=2;vt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Co{static get ALL_TRANSPORTS(){return[hi,vt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=vt&&vt.isAvailable();let r=t&&!vt.previouslyFailed();if(e.webSocketOnly&&(t||ht("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[vt];else{const i=this.transports_=[];for(const s of Co.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Co.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Co.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
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
 */const nD=6e4,rD=5e3,iD=10*1024,sD=100*1024,Tu="t",M_="d",oD="s",L_="r",aD="e",F_="o",U_="a",B_="n",q_="p",cD="h";class lD{constructor(e,t,r,i,s,o,a,l,u,d){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=na("c:"+this.id+":"),this.transportManager_=new Co(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=so(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>sD?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>iD?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Tu in e){const t=e[Tu];t===U_?this.upgradeIfSecondaryHealthy_():t===L_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===F_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Ms("t",e),r=Ms("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:q_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:U_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:B_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Ms("t",e),r=Ms("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Ms(Tu,e);if(M_ in e){const r=e[M_];if(t===cD){const i={...r};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===B_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===oD?this.onConnectionShutdown_(r):t===L_?this.onReset_(r):t===aD?lh("Server Error: "+r):t===F_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):lh("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),$d!==r&&ht("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),so(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(nD))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):so(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(rD))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:q_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Tr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class xT{put(e,t,r,i){}merge(e,t,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class VT{constructor(e){this.allowedEvents_=e,this.listeners_={},V(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const i=this.getInitialEvent(e);i&&t.apply(r,i)}off(e,t,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===t&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){V(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class bc extends VT{static getInstance(){return new bc}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Sh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return V(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const G_=32,W_=768;class de{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function ae(){return new de("")}function Q(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Qn(n){return n.pieces_.length-n.pieceNum_}function me(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new de(n.pieces_,e)}function Qd(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function uD(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function bo(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function OT(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new de(e,0)}function be(n,e){const t=[];for(let r=n.pieceNum_;r<n.pieces_.length;r++)t.push(n.pieces_[r]);if(e instanceof de)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&t.push(r[i])}return new de(t,0)}function Y(n){return n.pieceNum_>=n.pieces_.length}function at(n,e){const t=Q(n),r=Q(e);if(t===null)return e;if(t===r)return at(me(n),me(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function hD(n,e){const t=bo(n,0),r=bo(e,0);for(let i=0;i<t.length&&i<r.length;i++){const s=Hr(t[i],r[i]);if(s!==0)return s}return t.length===r.length?0:t.length<r.length?-1:1}function Yd(n,e){if(Qn(n)!==Qn(e))return!1;for(let t=n.pieceNum_,r=e.pieceNum_;t<=n.pieces_.length;t++,r++)if(n.pieces_[t]!==e.pieces_[r])return!1;return!0}function _t(n,e){let t=n.pieceNum_,r=e.pieceNum_;if(Qn(n)>Qn(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}class dD{constructor(e,t){this.errorPrefix_=t,this.parts_=bo(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Gc(this.parts_[r]);MT(this)}}function fD(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Gc(e),MT(n)}function pD(n){const e=n.parts_.pop();n.byteLength_-=Gc(e),n.parts_.length>0&&(n.byteLength_-=1)}function MT(n){if(n.byteLength_>W_)throw new Error(n.errorPrefix_+"has a key path longer than "+W_+" bytes ("+n.byteLength_+").");if(n.parts_.length>G_)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+G_+") or object contains a cycle "+pr(n))}function pr(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Jd extends VT{static getInstance(){return new Jd}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return V(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Ls=1e3,mD=60*5*1e3,z_=30*1e3,_D=1.3,gD=3e4,yD="server_kill",j_=3;class rn extends xT{constructor(e,t,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=rn.nextPersistentConnectionId_++,this.log_=na("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ls,this.maxReconnectDelay_=mD,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!vg())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Jd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&bc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const i=++this.requestNumber_,s={r:i,a:e,b:t};this.log_(Be(s)),V(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const t=new Yt,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),t.promise}listen(e,t,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),V(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),V(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=t._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;rn.warnOnListenWarnings_(l,t),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Gt(e,"w")){const r=Ti(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',s=t._path.toString();ht(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Tv(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=z_)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Ev(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),V(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,t)}sendUnlisten_(e,t,r,i){this.log_("Unlisten on "+e+" for "+t);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,i){const s={p:t,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,r,i){this.putInternal("p",e,t,r,i)}merge(e,t,r,i){this.putInternal("m",e,t,r,i)}putInternal(e,t,r,i,s){this.initConnection_();const o={p:t,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,s=>{this.log_(t+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Be(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):lh("Unrecognized action received from server: "+Be(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){V(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ls,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ls,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>gD&&(this.reconnectDelay_=Ls),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*_D)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+rn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(f){V(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,m]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?We("getToken() completed but was canceled"):(We("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=m&&m.token,a=new lD(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,g=>{ht(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(yD)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&ht(f),l())}}}interrupt(e){We("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){We("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Xa(this.interruptReasons_)&&(this.reconnectDelay_=Ls,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(s=>jd(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const r=new de(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(t),s.delete(t),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,t){We("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=j_&&(this.reconnectDelay_=z_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){We("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=j_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+dT.replace(/\./g,"-")]=1,Sh()?e["framework.cordova"]=1:wg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=bc.getInstance().currentlyOnline();return Xa(this.interruptReasons_)&&e}}rn.nextPersistentConnectionId_=0;rn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
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
 */class X{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new X(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class wl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new X(zi,e),i=new X(zi,t);return this.compare(r,i)!==0}minPost(){return X.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */let Va;class LT extends wl{static get __EMPTY_NODE(){return Va}static set __EMPTY_NODE(e){Va=e}compare(e,t){return Hr(e.name,t.name)}isDefinedOn(e){throw Hi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return X.MIN}maxPost(){return new X(Fr,Va)}makePost(e,t){return V(typeof e=="string","KeyIndex indexValue must always be a string."),new X(e,Va)}toString(){return".key"}}const Ii=new LT;/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Oa{constructor(e,t,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?r(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ue{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??Ue.RED,this.left=i??ct.EMPTY_NODE,this.right=s??ct.EMPTY_NODE}copy(e,t,r,i,s){return new Ue(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ct.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,i;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return ct.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ue.RED=!0;Ue.BLACK=!1;class ID{copy(e,t,r,i,s){return this}insert(e,t,r){return new Ue(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ct{constructor(e,t=ct.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new ct(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Ue.BLACK,null,null))}remove(e){return new ct(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ue.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,i=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Oa(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Oa(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Oa(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Oa(this.root_,null,this.comparator_,!0,e)}}ct.EMPTY_NODE=new ID;/**
 * @license
 * Copyright 2017 Google LLC
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
 */function ED(n,e){return Hr(n.name,e.name)}function Xd(n,e){return Hr(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */let hh;function TD(n){hh=n}const FT=function(n){return typeof n=="number"?"number:"+_T(n):"string:"+n},UT=function(n){if(n.isLeafNode()){const e=n.val();V(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Gt(e,".sv"),"Priority must be a string or number.")}else V(n===hh||n.isEmpty(),"priority of unexpected type.");V(n===hh||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
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
 */let $_;class Me{static set __childrenNodeConstructor(e){$_=e}static get __childrenNodeConstructor(){return $_}constructor(e,t=Me.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,V(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),UT(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Me(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Me.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Y(e)?this:Q(e)===".priority"?this.priorityNode_:Me.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Me.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=Q(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(V(r!==".priority"||Qn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Me.__childrenNodeConstructor.EMPTY_NODE.updateChild(me(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+FT(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=_T(this.value_):e+=this.value_,this.lazyHash_=pT(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Me.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Me.__childrenNodeConstructor?-1:(V(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,i=Me.VALUE_TYPE_ORDER.indexOf(t),s=Me.VALUE_TYPE_ORDER.indexOf(r);return V(i>=0,"Unknown leaf type: "+t),V(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Me.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
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
 */let BT,qT;function wD(n){BT=n}function vD(n){qT=n}class AD extends wl{compare(e,t){const r=e.node.getPriority(),i=t.node.getPriority(),s=r.compareTo(i);return s===0?Hr(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return X.MIN}maxPost(){return new X(Fr,new Me("[PRIORITY-POST]",qT))}makePost(e,t){const r=BT(e);return new X(t,new Me("[PRIORITY-POST]",r))}toString(){return".priority"}}const ve=new AD;/**
 * @license
 * Copyright 2017 Google LLC
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
 */const RD=Math.log(2);class SD{constructor(e){const t=s=>parseInt(Math.log(s)/RD,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Pc=function(n,e,t,r){n.sort(e);const i=function(l,u){const d=u-l;let f,m;if(d===0)return null;if(d===1)return f=n[l],m=t?t(f):f,new Ue(m,f.node,Ue.BLACK,null,null);{const g=parseInt(d/2,10)+l,T=i(l,g),N=i(g+1,u);return f=n[g],m=t?t(f):f,new Ue(m,f.node,Ue.BLACK,T,N)}},s=function(l){let u=null,d=null,f=n.length;const m=function(T,N){const P=f-T,M=f;f-=T;const B=i(P+1,M),U=n[P],j=t?t(U):U;g(new Ue(j,U.node,N,null,B))},g=function(T){u?(u.left=T,u=T):(d=T,u=T)};for(let T=0;T<l.count;++T){const N=l.nextBitIsOne(),P=Math.pow(2,l.count-(T+1));N?m(P,Ue.BLACK):(m(P,Ue.BLACK),m(P,Ue.RED))}return d},o=new SD(n.length),a=s(o);return new ct(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
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
 */let wu;const oi={};class tn{static get Default(){return V(oi&&ve,"ChildrenNode.ts has not been loaded"),wu=wu||new tn({".priority":oi},{".priority":ve}),wu}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Ti(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof ct?t:null}hasIndex(e){return Gt(this.indexSet_,e.toString())}addIndex(e,t){V(e!==Ii,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=t.getIterator(X.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Pc(r,e.getCompare()):a=oi;const l=e.toString(),u={...this.indexSet_};u[l]=e;const d={...this.indexes_};return d[l]=a,new tn(d,u)}addToIndexes(e,t){const r=Za(this.indexes_,(i,s)=>{const o=Ti(this.indexSet_,s);if(V(o,"Missing index implementation for "+s),i===oi)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(X.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Pc(a,o.getCompare())}else return oi;else{const a=t.get(e.name);let l=i;return a&&(l=l.remove(new X(e.name,a))),l.insert(e,e.node)}});return new tn(r,this.indexSet_)}removeFromIndexes(e,t){const r=Za(this.indexes_,i=>{if(i===oi)return i;{const s=t.get(e.name);return s?i.remove(new X(e.name,s)):i}});return new tn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */let Fs;class K{static get EMPTY_NODE(){return Fs||(Fs=new K(new ct(Xd),null,tn.Default))}constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&UT(this.priorityNode_),this.children_.isEmpty()&&V(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Fs}updatePriority(e){return this.children_.isEmpty()?this:new K(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Fs:t}}getChild(e){const t=Q(e);return t===null?this:this.getImmediateChild(t).getChild(me(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(V(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new X(e,t);let i,s;t.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Fs:this.priorityNode_;return new K(i,o,s)}}updateChild(e,t){const r=Q(e);if(r===null)return t;{V(Q(e)!==".priority"||Qn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(me(e),t);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,i=0,s=!0;if(this.forEachChild(ve,(o,a)=>{t[o]=a.val(e),r++,s&&K.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+FT(this.getPriority().val())+":"),this.forEachChild(ve,(t,r)=>{const i=r.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":pT(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new X(e,t));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new X(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new X(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,X.Wrap);let s=i.peek();for(;s!=null&&t.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,X.Wrap);let s=i.peek();for(;s!=null&&t.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ra?-1:0}withIndex(e){if(e===Ii||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new K(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ii||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator(ve),i=t.getIterator(ve);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ii?null:this.indexMap_.get(e.toString())}}K.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class CD extends K{constructor(){super(new ct(Xd),K.EMPTY_NODE,tn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return K.EMPTY_NODE}isEmpty(){return!1}}const ra=new CD;Object.defineProperties(X,{MIN:{value:new X(zi,K.EMPTY_NODE)},MAX:{value:new X(Fr,ra)}});LT.__EMPTY_NODE=K.EMPTY_NODE;Me.__childrenNodeConstructor=K;TD(ra);vD(ra);/**
 * @license
 * Copyright 2017 Google LLC
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
 */const bD=!0;function ke(n,e=null){if(n===null)return K.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),V(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Me(t,ke(e))}if(!(n instanceof Array)&&bD){const t=[];let r=!1;if(Ze(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=ke(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),t.push(new X(o,l)))}}),t.length===0)return K.EMPTY_NODE;const s=Pc(t,ED,o=>o.name,Xd);if(r){const o=Pc(t,ve.getCompare());return new K(s,ke(e),new tn({".priority":o},{".priority":ve}))}else return new K(s,ke(e),tn.Default)}else{let t=K.EMPTY_NODE;return Ze(n,(r,i)=>{if(Gt(n,r)&&r.substring(0,1)!=="."){const s=ke(i);(s.isLeafNode()||!s.isEmpty())&&(t=t.updateImmediateChild(r,s))}}),t.updatePriority(ke(e))}}wD(ke);/**
 * @license
 * Copyright 2017 Google LLC
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
 */class PD extends wl{constructor(e){super(),this.indexPath_=e,V(!Y(e)&&Q(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),i=this.extractChild(t.node),s=r.compareTo(i);return s===0?Hr(e.name,t.name):s}makePost(e,t){const r=ke(e),i=K.EMPTY_NODE.updateChild(this.indexPath_,r);return new X(t,i)}maxPost(){const e=K.EMPTY_NODE.updateChild(this.indexPath_,ra);return new X(Fr,e)}toString(){return bo(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ND extends wl{compare(e,t){const r=e.node.compareTo(t.node);return r===0?Hr(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return X.MIN}maxPost(){return X.MAX}makePost(e,t){const r=ke(e);return new X(t,r)}toString(){return".value"}}const kD=new ND;/**
 * @license
 * Copyright 2017 Google LLC
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
 */function GT(n){return{type:"value",snapshotNode:n}}function ji(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Po(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function No(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function DD(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Zd{constructor(e){this.index_=e}updateChild(e,t,r,i,s,o){V(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(t)?o.trackChildChange(Po(t,a)):V(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ji(t,r)):o.trackChildChange(No(t,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(t,r).withIndex(this.index_)}updateFullNode(e,t,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ve,(i,s)=>{t.hasChild(i)||r.trackChildChange(Po(i,s))}),t.isLeafNode()||t.forEachChild(ve,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(No(i,s,o))}else r.trackChildChange(ji(i,s))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?K.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ko{constructor(e){this.indexedFilter_=new Zd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ko.getStartPost_(e),this.endPost_=ko.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&r}updateChild(e,t,r,i,s,o){return this.matches(new X(t,r))||(r=K.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,r,i,s,o)}updateFullNode(e,t,r){t.isLeafNode()&&(t=K.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(K.EMPTY_NODE);const s=this;return t.forEachChild(ve,(o,a)=>{s.matches(new X(o,a))||(i=i.updateImmediateChild(o,K.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class xD{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=t=>{const r=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ko(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,r,i,s,o){return this.rangedFilter_.matches(new X(t,r))||(r=K.EMPTY_NODE),e.getImmediateChild(t).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,r,i,s,o):this.fullLimitUpdateChild_(e,t,r,s,o)}updateFullNode(e,t,r){let i;if(t.isLeafNode()||t.isEmpty())i=K.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=K.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(K.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,K.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,r,i,s){let o;if(this.reverse_){const f=this.index_.getCompare();o=(m,g)=>f(g,m)}else o=this.index_.getCompare();const a=e;V(a.numChildren()===this.limit_,"");const l=new X(t,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(t)){const f=a.getImmediateChild(t);let m=i.getChildAfterChild(this.index_,u,this.reverse_);for(;m!=null&&(m.name===t||a.hasChild(m.name));)m=i.getChildAfterChild(this.index_,m,this.reverse_);const g=m==null?1:o(m,l);if(d&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(No(t,r,f)),a.updateImmediateChild(t,r);{s!=null&&s.trackChildChange(Po(t,f));const N=a.updateImmediateChild(t,K.EMPTY_NODE);return m!=null&&this.rangedFilter_.matches(m)?(s!=null&&s.trackChildChange(ji(m.name,m.node)),N.updateImmediateChild(m.name,m.node)):N}}else return r.isEmpty()?e:d&&o(u,l)>=0?(s!=null&&(s.trackChildChange(Po(u.name,u.node)),s.trackChildChange(ji(t,r))),a.updateImmediateChild(t,r).updateImmediateChild(u.name,K.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ef{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ve}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return V(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return V(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:zi}hasEnd(){return this.endSet_}getIndexEndValue(){return V(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return V(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Fr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return V(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ve}copy(){const e=new ef;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function VD(n){return n.loadsAllData()?new Zd(n.getIndex()):n.hasLimit()?new xD(n):new ko(n)}function K_(n){const e={};if(n.isDefault())return e;let t;if(n.index_===ve?t="$priority":n.index_===kD?t="$value":n.index_===Ii?t="$key":(V(n.index_ instanceof PD,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Be(t),n.startSet_){const r=n.startAfterSet_?"startAfter":"startAt";e[r]=Be(n.indexStartValue_),n.startNameSet_&&(e[r]+=","+Be(n.indexStartName_))}if(n.endSet_){const r=n.endBeforeSet_?"endBefore":"endAt";e[r]=Be(n.indexEndValue_),n.endNameSet_&&(e[r]+=","+Be(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function H_(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==ve&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Nc extends xT{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(V(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=na("p:rest:"),this.listens_={}}listen(e,t,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Nc.getListenId_(e,r),a={};this.listens_[o]=a;const l=K_(e._queryParams);this.restRequest_(s+".json",l,(u,d)=>{let f=d;if(u===404&&(f=null,u=null),u===null&&this.onDataUpdate_(s,f,!1,r),Ti(this.listens_,o)===a){let m;u?u===401?m="permission_denied":m="rest_error:"+u:m="ok",i(m,null)}})}unlisten(e,t){const r=Nc.getListenId_(e,t);delete this.listens_[r]}get(e){const t=K_(e._queryParams),r=e._path.toString(),i=new Yt;return this.restRequest_(r+".json",t,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(t.auth=i.accessToken),s&&s.token&&(t.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Qi(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=lo(a.responseText)}catch{ht("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&ht("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class OD{constructor(){this.rootNode_=K.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function kc(){return{value:null,children:new Map}}function us(n,e,t){if(Y(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const r=Q(e);n.children.has(r)||n.children.set(r,kc());const i=n.children.get(r);e=me(e),us(i,e,t)}}function dh(n,e){if(Y(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(ve,(r,i)=>{us(n,new de(r),i)}),dh(n,e)}}else if(n.children.size>0){const t=Q(e);return e=me(e),n.children.has(t)&&dh(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function fh(n,e,t){n.value!==null?t(e,n.value):MD(n,(r,i)=>{const s=new de(e.toString()+"/"+r);fh(i,s,t)})}function MD(n,e){n.children.forEach((t,r)=>{e(r,t)})}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class LD{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&Ze(this.last_,(r,i)=>{t[r]=t[r]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Q_=10*1e3,FD=30*1e3,UD=5*60*1e3;class BD{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new LD(e);const r=Q_+(FD-Q_)*Math.random();so(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;Ze(e,(i,s)=>{s>0&&Gt(this.statsToReport_,i)&&(t[i]=s,r=!0)}),r&&this.server_.reportStats(t),so(this.reportStats_.bind(this),Math.floor(Math.random()*2*UD))}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */var St;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(St||(St={}));function WT(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function tf(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function nf(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Dc{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=St.ACK_USER_WRITE,this.source=WT()}operationForChild(e){if(Y(this.path)){if(this.affectedTree.value!=null)return V(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new de(e));return new Dc(ae(),t,this.revert)}}else return V(Q(this.path)===e,"operationForChild called for unrelated child."),new Dc(me(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Do{constructor(e,t){this.source=e,this.path=t,this.type=St.LISTEN_COMPLETE}operationForChild(e){return Y(this.path)?new Do(this.source,ae()):new Do(this.source,me(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ur{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=St.OVERWRITE}operationForChild(e){return Y(this.path)?new Ur(this.source,ae(),this.snap.getImmediateChild(e)):new Ur(this.source,me(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class xo{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=St.MERGE}operationForChild(e){if(Y(this.path)){const t=this.children.subtree(new de(e));return t.isEmpty()?null:t.value?new Ur(this.source,ae(),t.value):new xo(this.source,ae(),t)}else return V(Q(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new xo(this.source,me(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Br{constructor(e,t,r){this.node_=e,this.fullyInitialized_=t,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Y(e))return this.isFullyInitialized()&&!this.filtered_;const t=Q(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class qD{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function GD(n,e,t,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(DD(o.childName,o.snapshotNode))}),Us(n,i,"child_removed",e,r,t),Us(n,i,"child_added",e,r,t),Us(n,i,"child_moved",s,r,t),Us(n,i,"child_changed",e,r,t),Us(n,i,"value",e,r,t),i}function Us(n,e,t,r,i,s){const o=r.filter(a=>a.type===t);o.sort((a,l)=>zD(n,a,l)),o.forEach(a=>{const l=WD(n,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,n.query_))})})}function WD(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function zD(n,e,t){if(e.childName==null||t.childName==null)throw Hi("Should only compare child_ events.");const r=new X(e.childName,e.snapshotNode),i=new X(t.childName,t.snapshotNode);return n.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function vl(n,e){return{eventCache:n,serverCache:e}}function oo(n,e,t,r){return vl(new Br(e,t,r),n.serverCache)}function zT(n,e,t,r){return vl(n.eventCache,new Br(e,t,r))}function ph(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function qr(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
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
 */let vu;const jD=()=>(vu||(vu=new ct(Pk)),vu);class ge{static fromObject(e){let t=new ge(null);return Ze(e,(r,i)=>{t=t.set(new de(r),i)}),t}constructor(e,t=jD()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:ae(),value:this.value};if(Y(e))return null;{const r=Q(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(me(e),t);return s!=null?{path:be(new de(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Y(e))return this;{const t=Q(e),r=this.children.get(t);return r!==null?r.subtree(me(e)):new ge(null)}}set(e,t){if(Y(e))return new ge(t,this.children);{const r=Q(e),s=(this.children.get(r)||new ge(null)).set(me(e),t),o=this.children.insert(r,s);return new ge(this.value,o)}}remove(e){if(Y(e))return this.children.isEmpty()?new ge(null):new ge(null,this.children);{const t=Q(e),r=this.children.get(t);if(r){const i=r.remove(me(e));let s;return i.isEmpty()?s=this.children.remove(t):s=this.children.insert(t,i),this.value===null&&s.isEmpty()?new ge(null):new ge(this.value,s)}else return this}}get(e){if(Y(e))return this.value;{const t=Q(e),r=this.children.get(t);return r?r.get(me(e)):null}}setTree(e,t){if(Y(e))return t;{const r=Q(e),s=(this.children.get(r)||new ge(null)).setTree(me(e),t);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new ge(this.value,o)}}fold(e){return this.fold_(ae(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(be(e,i),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,ae(),t)}findOnPath_(e,t,r){const i=this.value?r(t,this.value):!1;if(i)return i;if(Y(e))return null;{const s=Q(e),o=this.children.get(s);return o?o.findOnPath_(me(e),be(t,s),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ae(),t)}foreachOnPath_(e,t,r){if(Y(e))return this;{this.value&&r(t,this.value);const i=Q(e),s=this.children.get(i);return s?s.foreachOnPath_(me(e),be(t,i),r):new ge(null)}}foreach(e){this.foreach_(ae(),e)}foreach_(e,t){this.children.inorderTraversal((r,i)=>{i.foreach_(be(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Nt{constructor(e){this.writeTree_=e}static empty(){return new Nt(new ge(null))}}function ao(n,e,t){if(Y(e))return new Nt(new ge(t));{const r=n.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=at(i,e);return s=s.updateChild(o,t),new Nt(n.writeTree_.set(i,s))}else{const i=new ge(t),s=n.writeTree_.setTree(e,i);return new Nt(s)}}}function Y_(n,e,t){let r=n;return Ze(t,(i,s)=>{r=ao(r,be(e,i),s)}),r}function J_(n,e){if(Y(e))return Nt.empty();{const t=n.writeTree_.setTree(e,new ge(null));return new Nt(t)}}function mh(n,e){return Qr(n,e)!=null}function Qr(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(at(t.path,e)):null}function X_(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(ve,(r,i)=>{e.push(new X(r,i))}):n.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new X(r,i.value))}),e}function Un(n,e){if(Y(e))return n;{const t=Qr(n,e);return t!=null?new Nt(new ge(t)):new Nt(n.writeTree_.subtree(e))}}function _h(n){return n.writeTree_.isEmpty()}function $i(n,e){return jT(ae(),n.writeTree_,e)}function jT(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(V(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):t=jT(be(n,i),s,t)}),!t.getChild(n).isEmpty()&&r!==null&&(t=t.updateChild(be(n,".priority"),r)),t}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function rf(n,e){return QT(e,n)}function $D(n,e,t,r,i){V(r>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:r,visible:i}),i&&(n.visibleWrites=ao(n.visibleWrites,e,t)),n.lastWriteId=r}function KD(n,e){for(let t=0;t<n.allWrites.length;t++){const r=n.allWrites[t];if(r.writeId===e)return r}return null}function HD(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);V(t>=0,"removeWrite called with nonexistent writeId.");const r=n.allWrites[t];n.allWrites.splice(t,1);let i=r.visible,s=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&QD(a,r.path)?i=!1:_t(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return YD(n),!0;if(r.snap)n.visibleWrites=J_(n.visibleWrites,r.path);else{const a=r.children;Ze(a,l=>{n.visibleWrites=J_(n.visibleWrites,be(r.path,l))})}return!0}else return!1}function QD(n,e){if(n.snap)return _t(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&_t(be(n.path,t),e))return!0;return!1}function YD(n){n.visibleWrites=$T(n.allWrites,JD,ae()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function JD(n){return n.visible}function $T(n,e,t){let r=Nt.empty();for(let i=0;i<n.length;++i){const s=n[i];if(e(s)){const o=s.path;let a;if(s.snap)_t(t,o)?(a=at(t,o),r=ao(r,a,s.snap)):_t(o,t)&&(a=at(o,t),r=ao(r,ae(),s.snap.getChild(a)));else if(s.children){if(_t(t,o))a=at(t,o),r=Y_(r,a,s.children);else if(_t(o,t))if(a=at(o,t),Y(a))r=Y_(r,ae(),s.children);else{const l=Ti(s.children,Q(a));if(l){const u=l.getChild(me(a));r=ao(r,ae(),u)}}}else throw Hi("WriteRecord should have .snap or .children")}}return r}function KT(n,e,t,r,i){if(!r&&!i){const s=Qr(n.visibleWrites,e);if(s!=null)return s;{const o=Un(n.visibleWrites,e);if(_h(o))return t;if(t==null&&!mh(o,ae()))return null;{const a=t||K.EMPTY_NODE;return $i(o,a)}}}else{const s=Un(n.visibleWrites,e);if(!i&&_h(s))return t;if(!i&&t==null&&!mh(s,ae()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(_t(u.path,e)||_t(e,u.path))},a=$T(n.allWrites,o,e),l=t||K.EMPTY_NODE;return $i(a,l)}}}function XD(n,e,t){let r=K.EMPTY_NODE;const i=Qr(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ve,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(t){const s=Un(n.visibleWrites,e);return t.forEachChild(ve,(o,a)=>{const l=$i(Un(s,new de(o)),a);r=r.updateImmediateChild(o,l)}),X_(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Un(n.visibleWrites,e);return X_(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function ZD(n,e,t,r,i){V(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=be(e,t);if(mh(n.visibleWrites,s))return null;{const o=Un(n.visibleWrites,s);return _h(o)?i.getChild(t):$i(o,i.getChild(t))}}function e1(n,e,t,r){const i=be(e,t),s=Qr(n.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(t)){const o=Un(n.visibleWrites,i);return $i(o,r.getNode().getImmediateChild(t))}else return null}function t1(n,e){return Qr(n.visibleWrites,e)}function n1(n,e,t,r,i,s,o){let a;const l=Un(n.visibleWrites,e),u=Qr(l,ae());if(u!=null)a=u;else if(t!=null)a=$i(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],f=o.getCompare(),m=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let g=m.getNext();for(;g&&d.length<i;)f(g,r)!==0&&d.push(g),g=m.getNext();return d}else return[]}function r1(){return{visibleWrites:Nt.empty(),allWrites:[],lastWriteId:-1}}function xc(n,e,t,r){return KT(n.writeTree,n.treePath,e,t,r)}function sf(n,e){return XD(n.writeTree,n.treePath,e)}function Z_(n,e,t,r){return ZD(n.writeTree,n.treePath,e,t,r)}function Vc(n,e){return t1(n.writeTree,be(n.treePath,e))}function i1(n,e,t,r,i,s){return n1(n.writeTree,n.treePath,e,t,r,i,s)}function of(n,e,t){return e1(n.writeTree,n.treePath,e,t)}function HT(n,e){return QT(be(n.treePath,e),n.writeTree)}function QT(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class s1{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;V(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),V(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(t==="child_added"&&s==="child_removed")this.changeMap.set(r,No(r,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&s==="child_changed")this.changeMap.set(r,Po(r,i.oldSnap));else if(t==="child_changed"&&s==="child_added")this.changeMap.set(r,ji(r,e.snapshotNode));else if(t==="child_changed"&&s==="child_changed")this.changeMap.set(r,No(r,e.snapshotNode,i.oldSnap));else throw Hi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class o1{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}}const YT=new o1;class af{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Br(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return of(this.writes_,e,r)}}getChildAfterChild(e,t,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:qr(this.viewCache_),s=i1(this.writes_,i,t,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function a1(n){return{filter:n}}function c1(n,e){V(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),V(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function l1(n,e,t,r,i){const s=new s1;let o,a;if(t.type===St.OVERWRITE){const u=t;u.source.fromUser?o=gh(n,e,u.path,u.snap,r,i,s):(V(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!Y(u.path),o=Oc(n,e,u.path,u.snap,r,i,a,s))}else if(t.type===St.MERGE){const u=t;u.source.fromUser?o=h1(n,e,u.path,u.children,r,i,s):(V(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=yh(n,e,u.path,u.children,r,i,a,s))}else if(t.type===St.ACK_USER_WRITE){const u=t;u.revert?o=p1(n,e,u.path,r,i,s):o=d1(n,e,u.path,u.affectedTree,r,i,s)}else if(t.type===St.LISTEN_COMPLETE)o=f1(n,e,t.path,r,s);else throw Hi("Unknown operation type: "+t.type);const l=s.getChanges();return u1(e,o,l),{viewCache:o,changes:l}}function u1(n,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=ph(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&t.push(GT(ph(e)))}}function JT(n,e,t,r,i,s){const o=e.eventCache;if(Vc(r,t)!=null)return e;{let a,l;if(Y(t))if(V(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=qr(e),d=u instanceof K?u:K.EMPTY_NODE,f=sf(r,d);a=n.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const u=xc(r,qr(e));a=n.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=Q(t);if(u===".priority"){V(Qn(t)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const f=Z_(r,t,d,l);f!=null?a=n.filter.updatePriority(d,f):a=o.getNode()}else{const d=me(t);let f;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const m=Z_(r,t,o.getNode(),l);m!=null?f=o.getNode().getImmediateChild(u).updateChild(d,m):f=o.getNode().getImmediateChild(u)}else f=of(r,u,e.serverCache);f!=null?a=n.filter.updateChild(o.getNode(),u,f,d,i,s):a=o.getNode()}}return oo(e,a,o.isFullyInitialized()||Y(t),n.filter.filtersNodes())}}function Oc(n,e,t,r,i,s,o,a){const l=e.serverCache;let u;const d=o?n.filter:n.filter.getIndexedFilter();if(Y(t))u=d.updateFullNode(l.getNode(),r,null);else if(d.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(t,r);u=d.updateFullNode(l.getNode(),g,null)}else{const g=Q(t);if(!l.isCompleteForPath(t)&&Qn(t)>1)return e;const T=me(t),P=l.getNode().getImmediateChild(g).updateChild(T,r);g===".priority"?u=d.updatePriority(l.getNode(),P):u=d.updateChild(l.getNode(),g,P,T,YT,null)}const f=zT(e,u,l.isFullyInitialized()||Y(t),d.filtersNodes()),m=new af(i,f,s);return JT(n,f,t,i,m,a)}function gh(n,e,t,r,i,s,o){const a=e.eventCache;let l,u;const d=new af(i,e,s);if(Y(t))u=n.filter.updateFullNode(e.eventCache.getNode(),r,o),l=oo(e,u,!0,n.filter.filtersNodes());else{const f=Q(t);if(f===".priority")u=n.filter.updatePriority(e.eventCache.getNode(),r),l=oo(e,u,a.isFullyInitialized(),a.isFiltered());else{const m=me(t),g=a.getNode().getImmediateChild(f);let T;if(Y(m))T=r;else{const N=d.getCompleteChild(f);N!=null?Qd(m)===".priority"&&N.getChild(OT(m)).isEmpty()?T=N:T=N.updateChild(m,r):T=K.EMPTY_NODE}if(g.equals(T))l=e;else{const N=n.filter.updateChild(a.getNode(),f,T,m,d,o);l=oo(e,N,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function eg(n,e){return n.eventCache.isCompleteForChild(e)}function h1(n,e,t,r,i,s,o){let a=e;return r.foreach((l,u)=>{const d=be(t,l);eg(e,Q(d))&&(a=gh(n,a,d,u,i,s,o))}),r.foreach((l,u)=>{const d=be(t,l);eg(e,Q(d))||(a=gh(n,a,d,u,i,s,o))}),a}function tg(n,e,t){return t.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function yh(n,e,t,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;Y(t)?u=r:u=new ge(null).setTree(t,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((f,m)=>{if(d.hasChild(f)){const g=e.serverCache.getNode().getImmediateChild(f),T=tg(n,g,m);l=Oc(n,l,new de(f),T,i,s,o,a)}}),u.children.inorderTraversal((f,m)=>{const g=!e.serverCache.isCompleteForChild(f)&&m.value===null;if(!d.hasChild(f)&&!g){const T=e.serverCache.getNode().getImmediateChild(f),N=tg(n,T,m);l=Oc(n,l,new de(f),N,i,s,o,a)}}),l}function d1(n,e,t,r,i,s,o){if(Vc(i,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(Y(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return Oc(n,e,t,l.getNode().getChild(t),i,s,a,o);if(Y(t)){let u=new ge(null);return l.getNode().forEachChild(Ii,(d,f)=>{u=u.set(new de(d),f)}),yh(n,e,t,u,i,s,a,o)}else return e}else{let u=new ge(null);return r.foreach((d,f)=>{const m=be(t,d);l.isCompleteForPath(m)&&(u=u.set(d,l.getNode().getChild(m)))}),yh(n,e,t,u,i,s,a,o)}}function f1(n,e,t,r,i){const s=e.serverCache,o=zT(e,s.getNode(),s.isFullyInitialized()||Y(t),s.isFiltered());return JT(n,o,t,r,YT,i)}function p1(n,e,t,r,i,s){let o;if(Vc(r,t)!=null)return e;{const a=new af(r,e,i),l=e.eventCache.getNode();let u;if(Y(t)||Q(t)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=xc(r,qr(e));else{const f=e.serverCache.getNode();V(f instanceof K,"serverChildren would be complete if leaf node"),d=sf(r,f)}d=d,u=n.filter.updateFullNode(l,d,s)}else{const d=Q(t);let f=of(r,d,e.serverCache);f==null&&e.serverCache.isCompleteForChild(d)&&(f=l.getImmediateChild(d)),f!=null?u=n.filter.updateChild(l,d,f,me(t),a,s):e.eventCache.getNode().hasChild(d)?u=n.filter.updateChild(l,d,K.EMPTY_NODE,me(t),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=xc(r,qr(e)),o.isLeafNode()&&(u=n.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Vc(r,ae())!=null,oo(e,u,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class m1{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Zd(r.getIndex()),s=VD(r);this.processor_=a1(s);const o=t.serverCache,a=t.eventCache,l=i.updateFullNode(K.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(K.EMPTY_NODE,a.getNode(),null),d=new Br(l,o.isFullyInitialized(),i.filtersNodes()),f=new Br(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=vl(f,d),this.eventGenerator_=new qD(this.query_)}get query(){return this.query_}}function _1(n){return n.viewCache_.serverCache.getNode()}function g1(n,e){const t=qr(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Y(e)&&!t.getImmediateChild(Q(e)).isEmpty())?t.getChild(e):null}function ng(n){return n.eventRegistrations_.length===0}function y1(n,e){n.eventRegistrations_.push(e)}function rg(n,e,t){const r=[];if(t){V(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(t,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<n.eventRegistrations_.length;++s){const o=n.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(s+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return r}function ig(n,e,t,r){e.type===St.MERGE&&e.source.queryId!==null&&(V(qr(n.viewCache_),"We should always have a full cache before handling merges"),V(ph(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,s=l1(n.processor_,i,e,t,r);return c1(n.processor_,s.viewCache),V(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=s.viewCache,XT(n,s.changes,s.viewCache.eventCache.getNode(),null)}function I1(n,e){const t=n.viewCache_.eventCache,r=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(ve,(s,o)=>{r.push(ji(s,o))}),t.isFullyInitialized()&&r.push(GT(t.getNode())),XT(n,r,t.getNode(),e)}function XT(n,e,t,r){const i=r?[r]:n.eventRegistrations_;return GD(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */let Mc;class E1{constructor(){this.views=new Map}}function T1(n){V(!Mc,"__referenceConstructor has already been defined"),Mc=n}function w1(){return V(Mc,"Reference.ts has not been loaded"),Mc}function v1(n){return n.views.size===0}function cf(n,e,t,r){const i=e.source.queryId;if(i!==null){const s=n.views.get(i);return V(s!=null,"SyncTree gave us an op for an invalid query."),ig(s,e,t,r)}else{let s=[];for(const o of n.views.values())s=s.concat(ig(o,e,t,r));return s}}function A1(n,e,t,r,i){const s=e._queryIdentifier,o=n.views.get(s);if(!o){let a=xc(t,i?r:null),l=!1;a?l=!0:r instanceof K?(a=sf(t,r),l=!1):(a=K.EMPTY_NODE,l=!1);const u=vl(new Br(a,l,!1),new Br(r,i,!1));return new m1(e,u)}return o}function R1(n,e,t,r,i,s){const o=A1(n,e,r,i,s);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),y1(o,t),I1(o,t)}function S1(n,e,t,r){const i=e._queryIdentifier,s=[];let o=[];const a=Yn(n);if(i==="default")for(const[l,u]of n.views.entries())o=o.concat(rg(u,t,r)),ng(u)&&(n.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=n.views.get(i);l&&(o=o.concat(rg(l,t,r)),ng(l)&&(n.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Yn(n)&&s.push(new(w1())(e._repo,e._path)),{removed:s,events:o}}function ZT(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Ei(n,e){let t=null;for(const r of n.views.values())t=t||g1(r,e);return t}function ew(n,e){if(e._queryParams.loadsAllData())return Al(n);{const r=e._queryIdentifier;return n.views.get(r)}}function tw(n,e){return ew(n,e)!=null}function Yn(n){return Al(n)!=null}function Al(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
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
 */let Lc;function C1(n){V(!Lc,"__referenceConstructor has already been defined"),Lc=n}function b1(){return V(Lc,"Reference.ts has not been loaded"),Lc}let P1=1;class sg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ge(null),this.pendingWriteTree_=r1(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function nw(n,e,t,r,i){return $D(n.pendingWriteTree_,e,t,r,i),i?ia(n,new Ur(WT(),e,t)):[]}function wr(n,e,t=!1){const r=KD(n.pendingWriteTree_,e);if(HD(n.pendingWriteTree_,e)){let s=new ge(null);return r.snap!=null?s=s.set(ae(),!0):Ze(r.children,o=>{s=s.set(new de(o),!0)}),ia(n,new Dc(r.path,s,t))}else return[]}function Rl(n,e,t){return ia(n,new Ur(tf(),e,t))}function N1(n,e,t){const r=ge.fromObject(t);return ia(n,new xo(tf(),e,r))}function k1(n,e){return ia(n,new Do(tf(),e))}function D1(n,e,t){const r=uf(n,t);if(r){const i=hf(r),s=i.path,o=i.queryId,a=at(s,e),l=new Do(nf(o),a);return df(n,s,l)}else return[]}function Ih(n,e,t,r,i=!1){const s=e._path,o=n.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||tw(o,e))){const l=S1(o,e,t,r);v1(o)&&(n.syncPointTree_=n.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const d=u.findIndex(m=>m._queryParams.loadsAllData())!==-1,f=n.syncPointTree_.findOnPath(s,(m,g)=>Yn(g));if(d&&!f){const m=n.syncPointTree_.subtree(s);if(!m.isEmpty()){const g=O1(m);for(let T=0;T<g.length;++T){const N=g[T],P=N.query,M=sw(n,N);n.listenProvider_.startListening(co(P),Fc(n,P),M.hashFn,M.onComplete)}}}!f&&u.length>0&&!r&&(d?n.listenProvider_.stopListening(co(e),null):u.forEach(m=>{const g=n.queryToTagMap.get(Sl(m));n.listenProvider_.stopListening(co(m),g)}))}M1(n,u)}return a}function x1(n,e,t,r){const i=uf(n,r);if(i!=null){const s=hf(i),o=s.path,a=s.queryId,l=at(o,e),u=new Ur(nf(a),l,t);return df(n,o,u)}else return[]}function V1(n,e,t,r){const i=uf(n,r);if(i){const s=hf(i),o=s.path,a=s.queryId,l=at(o,e),u=ge.fromObject(t),d=new xo(nf(a),l,u);return df(n,o,d)}else return[]}function og(n,e,t,r=!1){const i=e._path;let s=null,o=!1;n.syncPointTree_.foreachOnPath(i,(m,g)=>{const T=at(m,i);s=s||Ei(g,T),o=o||Yn(g)});let a=n.syncPointTree_.get(i);a?(o=o||Yn(a),s=s||Ei(a,ae())):(a=new E1,n.syncPointTree_=n.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=K.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((g,T)=>{const N=Ei(T,ae());N&&(s=s.updateImmediateChild(g,N))}));const u=tw(a,e);if(!u&&!e._queryParams.loadsAllData()){const m=Sl(e);V(!n.queryToTagMap.has(m),"View does not exist, but we have a tag");const g=L1();n.queryToTagMap.set(m,g),n.tagToQueryMap.set(g,m)}const d=rf(n.pendingWriteTree_,i);let f=R1(a,e,t,d,s,l);if(!u&&!o&&!r){const m=ew(a,e);f=f.concat(F1(n,e,m))}return f}function lf(n,e,t){const i=n.pendingWriteTree_,s=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=at(o,e),u=Ei(a,l);if(u)return u});return KT(i,e,s,t,!0)}function ia(n,e){return rw(e,n.syncPointTree_,null,rf(n.pendingWriteTree_,ae()))}function rw(n,e,t,r){if(Y(n.path))return iw(n,e,t,r);{const i=e.get(ae());t==null&&i!=null&&(t=Ei(i,ae()));let s=[];const o=Q(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const u=t?t.getImmediateChild(o):null,d=HT(r,o);s=s.concat(rw(a,l,u,d))}return i&&(s=s.concat(cf(i,n,r,t))),s}}function iw(n,e,t,r){const i=e.get(ae());t==null&&i!=null&&(t=Ei(i,ae()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,u=HT(r,o),d=n.operationForChild(o);d&&(s=s.concat(iw(d,a,l,u)))}),i&&(s=s.concat(cf(i,n,r,t))),s}function sw(n,e){const t=e.query,r=Fc(n,t);return{hashFn:()=>(_1(e)||K.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?D1(n,t._path,r):k1(n,t._path);{const s=Dk(i,t);return Ih(n,t,null,s)}}}}function Fc(n,e){const t=Sl(e);return n.queryToTagMap.get(t)}function Sl(n){return n._path.toString()+"$"+n._queryIdentifier}function uf(n,e){return n.tagToQueryMap.get(e)}function hf(n){const e=n.indexOf("$");return V(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new de(n.substr(0,e))}}function df(n,e,t){const r=n.syncPointTree_.get(e);V(r,"Missing sync point for query tag that we're tracking");const i=rf(n.pendingWriteTree_,e);return cf(r,t,i,null)}function O1(n){return n.fold((e,t,r)=>{if(t&&Yn(t))return[Al(t)];{let i=[];return t&&(i=ZT(t)),Ze(r,(s,o)=>{i=i.concat(o)}),i}})}function co(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(b1())(n._repo,n._path):n}function M1(n,e){for(let t=0;t<e.length;++t){const r=e[t];if(!r._queryParams.loadsAllData()){const i=Sl(r),s=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(s)}}}function L1(){return P1++}function F1(n,e,t){const r=e._path,i=Fc(n,e),s=sw(n,t),o=n.listenProvider_.startListening(co(e),i,s.hashFn,s.onComplete),a=n.syncPointTree_.subtree(r);if(i)V(!Yn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,d,f)=>{if(!Y(u)&&d&&Yn(d))return[Al(d).query];{let m=[];return d&&(m=m.concat(ZT(d).map(g=>g.query))),Ze(f,(g,T)=>{m=m.concat(T)}),m}});for(let u=0;u<l.length;++u){const d=l[u];n.listenProvider_.stopListening(co(d),Fc(n,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ff{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new ff(t)}node(){return this.node_}}class pf{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=be(this.path_,e);return new pf(this.syncTree_,t)}node(){return lf(this.syncTree_,this.path_)}}const U1=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},ag=function(n,e,t){if(!n||typeof n!="object")return n;if(V(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return B1(n[".sv"],e,t);if(typeof n[".sv"]=="object")return q1(n[".sv"],e);V(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},B1=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:V(!1,"Unexpected server value: "+n)}},q1=function(n,e,t){n.hasOwnProperty("increment")||V(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const r=n.increment;typeof r!="number"&&V(!1,"Unexpected increment value: "+r);const i=e.node();if(V(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},G1=function(n,e,t,r){return mf(e,new pf(t,n),r)},ow=function(n,e,t){return mf(n,new ff(e),t)};function mf(n,e,t){const r=n.getPriority().val(),i=ag(r,e.getImmediateChild(".priority"),t);let s;if(n.isLeafNode()){const o=n,a=ag(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new Me(a,ke(i)):n}else{const o=n;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Me(i))),o.forEachChild(ve,(a,l)=>{const u=mf(l,e.getImmediateChild(a),t);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class _f{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}}function gf(n,e){let t=e instanceof de?e:new de(e),r=n,i=Q(t);for(;i!==null;){const s=Ti(r.node.children,i)||{children:{},childCount:0};r=new _f(i,r,s),t=me(t),i=Q(t)}return r}function hs(n){return n.node.value}function aw(n,e){n.node.value=e,Eh(n)}function cw(n){return n.node.childCount>0}function W1(n){return hs(n)===void 0&&!cw(n)}function Cl(n,e){Ze(n.node.children,(t,r)=>{e(new _f(t,n,r))})}function lw(n,e,t,r){t&&!r&&e(n),Cl(n,i=>{lw(i,e,!0,r)}),t&&r&&e(n)}function z1(n,e,t){let r=t?n:n.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function sa(n){return new de(n.parent===null?n.name:sa(n.parent)+"/"+n.name)}function Eh(n){n.parent!==null&&j1(n.parent,n.name,n)}function j1(n,e,t){const r=W1(t),i=Gt(n.node.children,e);r&&i?(delete n.node.children[e],n.node.childCount--,Eh(n)):!r&&!i&&(n.node.children[e]=t.node,n.node.childCount++,Eh(n))}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const $1=/[\[\].#$\/\u0000-\u001F\u007F]/,K1=/[\[\].#$\u0000-\u001F\u007F]/,Au=10*1024*1024,yf=function(n){return typeof n=="string"&&n.length!==0&&!$1.test(n)},uw=function(n){return typeof n=="string"&&n.length!==0&&!K1.test(n)},H1=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),uw(n)},hw=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Tl(n)||n&&typeof n=="object"&&Gt(n,".sv")},Th=function(n,e,t,r){r&&e===void 0||bl(wi(n,"value"),e,t)},bl=function(n,e,t){const r=t instanceof de?new dD(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+pr(r));if(typeof e=="function")throw new Error(n+"contains a function "+pr(r)+" with contents = "+e.toString());if(Tl(e))throw new Error(n+"contains "+e.toString()+" "+pr(r));if(typeof e=="string"&&e.length>Au/3&&Gc(e)>Au)throw new Error(n+"contains a string greater than "+Au+" utf8 bytes "+pr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Ze(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!yf(o)))throw new Error(n+" contains an invalid key ("+o+") "+pr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);fD(r,o),bl(n,a,r),pD(r)}),i&&s)throw new Error(n+' contains ".value" child '+pr(r)+" in addition to actual children.")}},Q1=function(n,e){let t,r;for(t=0;t<e.length;t++){r=e[t];const s=bo(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!yf(s[o]))throw new Error(n+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(hD);let i=null;for(t=0;t<e.length;t++){if(r=e[t],i!==null&&_t(i,r))throw new Error(n+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},Y1=function(n,e,t,r){if(r&&e===void 0)return;const i=wi(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Ze(e,(o,a)=>{const l=new de(o);if(bl(i,a,be(t,l)),Qd(l)===".priority"&&!hw(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),Q1(i,s)},J1=function(n,e,t){if(!(t&&e===void 0)){if(Tl(e))throw new Error(wi(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!hw(e))throw new Error(wi(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},dw=function(n,e,t,r){if(!(r&&t===void 0)&&!uw(t))throw new Error(wi(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},X1=function(n,e,t,r){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),dw(n,e,t,r)},$s=function(n,e){if(Q(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},Z1=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!yf(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!H1(t))throw new Error(wi(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ex{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function If(n,e){let t=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();t!==null&&!Yd(s,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:s}),t.events.push(i)}t&&n.eventLists_.push(t)}function fw(n,e,t){If(n,t),pw(n,r=>Yd(r,e))}function hn(n,e,t){If(n,t),pw(n,r=>_t(r,e)||_t(e,r))}function pw(n,e){n.recursionDepth_++;let t=!0;for(let r=0;r<n.eventLists_.length;r++){const i=n.eventLists_[r];if(i){const s=i.path;e(s)?(tx(n.eventLists_[r]),n.eventLists_[r]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function tx(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const r=t.getEventRunner();Sr&&We("event: "+t.toString()),ls(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const nx="repo_interrupt",rx=25;class ix{constructor(e,t,r,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ex,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=kc(),this.transactionQueueTree_=new _f,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function sx(n,e,t){if(n.stats_=Kd(n.repoInfo_),n.forceRestClient_||Mk())n.server_=new Nc(n.repoInfo_,(r,i,s,o)=>{cg(n,r,i,s,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>lg(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Be(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}n.persistentConnection_=new rn(n.repoInfo_,e,(r,i,s,o)=>{cg(n,r,i,s,o)},r=>{lg(n,r)},r=>{ax(n,r)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(r=>{n.server_.refreshAuthToken(r)}),n.appCheckProvider_.addTokenChangeListener(r=>{n.server_.refreshAppCheckToken(r.token)}),n.statsReporter_=qk(n.repoInfo_,()=>new BD(n.stats_,n.server_)),n.infoData_=new OD,n.infoSyncTree_=new sg({startListening:(r,i,s,o)=>{let a=[];const l=n.infoData_.getNode(r._path);return l.isEmpty()||(a=Rl(n.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Tf(n,"connected",!1),n.serverSyncTree_=new sg({startListening:(r,i,s,o)=>(n.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);hn(n.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{n.server_.unlisten(r,i)}})}function ox(n){const t=n.infoData_.getNode(new de(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Ef(n){return U1({timestamp:ox(n)})}function cg(n,e,t,r,i){n.dataUpdateCount++;const s=new de(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(r){const l=Za(t,u=>ke(u));o=V1(n.serverSyncTree_,s,l,i)}else{const l=ke(t);o=x1(n.serverSyncTree_,s,l,i)}else if(r){const l=Za(t,u=>ke(u));o=N1(n.serverSyncTree_,s,l)}else{const l=ke(t);o=Rl(n.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Pl(n,s)),hn(n.eventQueue_,a,o)}function lg(n,e){Tf(n,"connected",e),e===!1&&lx(n)}function ax(n,e){Ze(e,(t,r)=>{Tf(n,t,r)})}function Tf(n,e,t){const r=new de("/.info/"+e),i=ke(t);n.infoData_.updateSnapshot(r,i);const s=Rl(n.infoSyncTree_,r,i);hn(n.eventQueue_,r,s)}function mw(n){return n.nextWriteId_++}function cx(n,e,t,r,i){wf(n,"set",{path:e.toString(),value:t,priority:r});const s=Ef(n),o=ke(t,r),a=lf(n.serverSyncTree_,e),l=ow(o,a,s),u=mw(n),d=nw(n.serverSyncTree_,e,l,u,!0);If(n.eventQueue_,d),n.server_.put(e.toString(),o.val(!0),(m,g)=>{const T=m==="ok";T||ht("set at "+e+" failed: "+m);const N=wr(n.serverSyncTree_,u,!T);hn(n.eventQueue_,e,N),Ki(n,i,m,g)});const f=Ew(n,e);Pl(n,f),hn(n.eventQueue_,f,[])}function lx(n){wf(n,"onDisconnectEvents");const e=Ef(n),t=kc();fh(n.onDisconnect_,ae(),(i,s)=>{const o=G1(i,s,n.serverSyncTree_,e);us(t,i,o)});let r=[];fh(t,ae(),(i,s)=>{r=r.concat(Rl(n.serverSyncTree_,i,s));const o=Ew(n,i);Pl(n,o)}),n.onDisconnect_=kc(),hn(n.eventQueue_,ae(),r)}function ux(n,e,t){n.server_.onDisconnectCancel(e.toString(),(r,i)=>{r==="ok"&&dh(n.onDisconnect_,e),Ki(n,t,r,i)})}function ug(n,e,t,r){const i=ke(t);n.server_.onDisconnectPut(e.toString(),i.val(!0),(s,o)=>{s==="ok"&&us(n.onDisconnect_,e,i),Ki(n,r,s,o)})}function hx(n,e,t,r,i){const s=ke(t,r);n.server_.onDisconnectPut(e.toString(),s.val(!0),(o,a)=>{o==="ok"&&us(n.onDisconnect_,e,s),Ki(n,i,o,a)})}function dx(n,e,t,r){if(Xa(t)){We("onDisconnect().update() called with empty data.  Don't do anything."),Ki(n,r,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(i,s)=>{i==="ok"&&Ze(t,(o,a)=>{const l=ke(a);us(n.onDisconnect_,be(e,o),l)}),Ki(n,r,i,s)})}function fx(n,e,t){let r;Q(e._path)===".info"?r=og(n.infoSyncTree_,e,t):r=og(n.serverSyncTree_,e,t),fw(n.eventQueue_,e._path,r)}function hg(n,e,t){let r;Q(e._path)===".info"?r=Ih(n.infoSyncTree_,e,t):r=Ih(n.serverSyncTree_,e,t),fw(n.eventQueue_,e._path,r)}function px(n){n.persistentConnection_&&n.persistentConnection_.interrupt(nx)}function wf(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),We(t,...e)}function Ki(n,e,t,r){e&&ls(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function _w(n,e,t){return lf(n.serverSyncTree_,e,t)||K.EMPTY_NODE}function vf(n,e=n.transactionQueueTree_){if(e||Nl(n,e),hs(e)){const t=yw(n,e);V(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&mx(n,sa(e),t)}else cw(e)&&Cl(e,t=>{vf(n,t)})}function mx(n,e,t){const r=t.map(u=>u.currentWriteId),i=_w(n,e,r);let s=i;const o=i.hash();for(let u=0;u<t.length;u++){const d=t[u];V(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const f=at(e,d.path);s=s.updateChild(f,d.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;n.server_.put(l.toString(),a,u=>{wf(n,"transaction put response",{path:l.toString(),status:u});let d=[];if(u==="ok"){const f=[];for(let m=0;m<t.length;m++)t[m].status=2,d=d.concat(wr(n.serverSyncTree_,t[m].currentWriteId)),t[m].onComplete&&f.push(()=>t[m].onComplete(null,!0,t[m].currentOutputSnapshotResolved)),t[m].unwatcher();Nl(n,gf(n.transactionQueueTree_,e)),vf(n,n.transactionQueueTree_),hn(n.eventQueue_,e,d);for(let m=0;m<f.length;m++)ls(f[m])}else{if(u==="datastale")for(let f=0;f<t.length;f++)t[f].status===3?t[f].status=4:t[f].status=0;else{ht("transaction at "+l.toString()+" failed: "+u);for(let f=0;f<t.length;f++)t[f].status=4,t[f].abortReason=u}Pl(n,e)}},o)}function Pl(n,e){const t=gw(n,e),r=sa(t),i=yw(n,t);return _x(n,i,r),r}function _x(n,e,t){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=at(t,l.path);let d=!1,f;if(V(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,f=l.abortReason,i=i.concat(wr(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=rx)d=!0,f="maxretry",i=i.concat(wr(n.serverSyncTree_,l.currentWriteId,!0));else{const m=_w(n,l.path,o);l.currentInputSnapshot=m;const g=e[a].update(m.val());if(g!==void 0){bl("transaction failed: Data returned ",g,l.path);let T=ke(g);typeof g=="object"&&g!=null&&Gt(g,".priority")||(T=T.updatePriority(m.getPriority()));const P=l.currentWriteId,M=Ef(n),B=ow(T,m,M);l.currentOutputSnapshotRaw=T,l.currentOutputSnapshotResolved=B,l.currentWriteId=mw(n),o.splice(o.indexOf(P),1),i=i.concat(nw(n.serverSyncTree_,l.path,B,l.currentWriteId,l.applyLocally)),i=i.concat(wr(n.serverSyncTree_,P,!0))}else d=!0,f="nodata",i=i.concat(wr(n.serverSyncTree_,l.currentWriteId,!0))}hn(n.eventQueue_,t,i),i=[],d&&(e[a].status=2,function(m){setTimeout(m,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}Nl(n,n.transactionQueueTree_);for(let a=0;a<r.length;a++)ls(r[a]);vf(n,n.transactionQueueTree_)}function gw(n,e){let t,r=n.transactionQueueTree_;for(t=Q(e);t!==null&&hs(r)===void 0;)r=gf(r,t),e=me(e),t=Q(e);return r}function yw(n,e){const t=[];return Iw(n,e,t),t.sort((r,i)=>r.order-i.order),t}function Iw(n,e,t){const r=hs(e);if(r)for(let i=0;i<r.length;i++)t.push(r[i]);Cl(e,i=>{Iw(n,i,t)})}function Nl(n,e){const t=hs(e);if(t){let r=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[r]=t[i],r++);t.length=r,aw(e,t.length>0?t:void 0)}Cl(e,r=>{Nl(n,r)})}function Ew(n,e){const t=sa(gw(n,e)),r=gf(n.transactionQueueTree_,e);return z1(r,i=>{Ru(n,i)}),Ru(n,r),lw(r,i=>{Ru(n,i)}),t}function Ru(n,e){const t=hs(e);if(t){const r=[];let i=[],s=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(V(s===o-1,"All SENT items should be at beginning of queue."),s=o,t[o].status=3,t[o].abortReason="set"):(V(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(wr(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&r.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?aw(e,void 0):t.length=s+1,hn(n.eventQueue_,sa(e),i);for(let o=0;o<r.length;o++)ls(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function gx(n){let e="";const t=n.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let i=t[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function yx(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):ht(`Invalid query segment '${t}' in query '${n}'`)}return e}const dg=function(n,e){const t=Ix(n),r=t.namespace;t.domain==="firebase.com"&&un(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&un("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Ck();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new ST(t.host,t.secure,r,i,e,"",r!==t.subdomain),path:new de(t.pathString)}},Ix=function(n){let e="",t="",r="",i="",s="",o=!0,a="https",l=443;if(typeof n=="string"){let u=n.indexOf("//");u>=0&&(a=n.substring(0,u-1),n=n.substring(u+2));let d=n.indexOf("/");d===-1&&(d=n.length);let f=n.indexOf("?");f===-1&&(f=n.length),e=n.substring(0,Math.min(d,f)),d<f&&(i=gx(n.substring(d,f)));const m=yx(n.substring(Math.min(n.length,f)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")t="localhost";else if(g.split(".").length<=2)t=g;else{const T=e.indexOf(".");r=e.substring(0,T).toLowerCase(),t=e.substring(T+1),s=r}"ns"in m&&(s=m.ns)}return{host:e,port:l,domain:t,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Tw{constructor(e,t,r,i){this.eventType=e,this.eventRegistration=t,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Be(this.snapshot.exportVal())}}class ww{constructor(e,t,r){this.eventRegistration=e,this.error=t,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ex{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return V(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2021 Google LLC
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
 */class Tx{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new Yt;return ux(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){$s("OnDisconnect.remove",this._path);const e=new Yt;return ug(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){$s("OnDisconnect.set",this._path),Th("OnDisconnect.set",e,this._path,!1);const t=new Yt;return ug(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){$s("OnDisconnect.setWithPriority",this._path),Th("OnDisconnect.setWithPriority",e,this._path,!1),J1("OnDisconnect.setWithPriority",t,!1);const r=new Yt;return hx(this._repo,this._path,e,t,r.wrapCallback(()=>{})),r.promise}update(e){$s("OnDisconnect.update",this._path),Y1("OnDisconnect.update",e,this._path,!1);const t=new Yt;return dx(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
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
 */class Af{constructor(e,t,r,i){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=i}get key(){return Y(this._path)?null:Qd(this._path)}get ref(){return new gn(this._repo,this._path)}get _queryIdentifier(){const e=H_(this._queryParams),t=jd(e);return t==="{}"?"default":t}get _queryObject(){return H_(this._queryParams)}isEqual(e){if(e=re(e),!(e instanceof Af))return!1;const t=this._repo===e._repo,r=Yd(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+uD(this._path)}}class gn extends Af{constructor(e,t){super(e,t,new ef,!1)}get parent(){const e=OT(this._path);return e===null?null:new gn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Vo{constructor(e,t,r){this._node=e,this.ref=t,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new de(e),r=Uc(this.ref,e);return new Vo(this._node.getChild(t),r,ve)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Vo(i,Uc(this.ref,r),ve)))}hasChild(e){const t=new de(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function $x(n,e){return n=re(n),n._checkNotDeleted("ref"),e!==void 0?Uc(n._root,e):n._root}function Uc(n,e){return n=re(n),Q(n._path)===null?X1("child","path",e,!1):dw("child","path",e,!1),new gn(n._repo,be(n._path,e))}function Kx(n){return n=re(n),new Tx(n._repo,n._path)}function Hx(n,e){n=re(n),$s("set",n._path),Th("set",e,n._path,!1);const t=new Yt;return cx(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class Rf{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const r=t._queryParams.getIndex();return new Tw("value",this,new Vo(e.snapshotNode,new gn(t._repo,t._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new ww(this,e,t):null}matches(e){return e instanceof Rf?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Sf{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new ww(this,e,t):null}createEvent(e,t){V(e.childName!=null,"Child events should have a childName.");const r=Uc(new gn(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new Tw(e.type,this,new Vo(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Sf?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function wx(n,e,t,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=t,u=(d,f)=>{hg(n._repo,n,a),l(d,f)};u.userCallback=t.userCallback,u.context=t.context,t=u}const o=new Ex(t,s||void 0),a=e==="value"?new Rf(o):new Sf(e,o);return fx(n._repo,n,a),()=>hg(n._repo,n,a)}function Qx(n,e,t,r){return wx(n,"value",e,t,r)}T1(gn);C1(gn);/**
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
 */const vx="FIREBASE_DATABASE_EMULATOR_HOST",wh={};let Ax=!1;function Rx(n,e,t,r){const i=e.lastIndexOf(":"),s=e.substring(0,i),o=Bt(s);n.repoInfo_=new ST(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),r&&(n.authTokenProvider_=r)}function Sx(n,e,t,r,i){let s=r||n.options.databaseURL;s===void 0&&(n.options.projectId||un("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),We("Using default host for project ",n.options.projectId),s=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=dg(s,i),a=o.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[vx]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=dg(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const d=i&&l?new yi(yi.OWNER):new Fk(n.name,n.options,e);Z1("Invalid Firebase Database URL",o),Y(o.path)||un("Database URL must point to the root of a Firebase Database (not including a child path).");const f=bx(a,n,d,new Lk(n,t));return new Px(f,n)}function Cx(n,e){const t=wh[e];(!t||t[n.key]!==n)&&un(`Database ${e}(${n.repoInfo_}) has already been deleted.`),px(n),delete t[n.key]}function bx(n,e,t,r){let i=wh[e.name];i||(i={},wh[e.name]=i);let s=i[n.toURLString()];return s&&un("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new ix(n,Ax,t,r),i[n.toURLString()]=s,s}class Px{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(sx(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new gn(this._repo,ae())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Cx(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&un("Cannot call "+e+" on a deleted database.")}}function Yx(n=zc(),e){const t=Gr(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const r=Ah("database");r&&Nx(t,...r)}return t}function Nx(n,e,t,r={}){n=re(n),n._checkNotDeleted("useEmulator");const i=`${e}:${t}`,s=n._repoInternal;if(n._instanceStarted){if(i===n._repoInternal.repoInfo_.host&&It(r,s.repoInfo_.emulatorOptions))return;un("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&un('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new yi(yi.OWNER);else if(r.mockUserToken){const a=typeof r.mockUserToken=="string"?r.mockUserToken:Rh(r.mockUserToken,n.app.options.projectId);o=new yi(a)}Bt(e)&&(Oo(e),qc("Database",!0)),Rx(s,i,r,o)}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function kx(n){wk(Jn),Bn(new sn("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return Sx(r,i,s,t)},"PUBLIC").setMultipleInstances(!0)),gt(k_,D_,n),gt(k_,D_,"esm2020")}rn.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};rn.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};kx();export{Bx as A,oN as B,sn as C,Lx as D,Mo as E,qt as F,Cn as G,q0 as H,j0 as I,G0 as J,lN as K,Wc as L,fN as M,VN as N,mN as O,pN as P,Ux as Q,$x as R,Hx as S,ce as T,Kx as U,Qx as V,LN as W,zx as X,Bn as _,Gr as a,zc as b,xx as c,It as d,Sg as e,Dx as f,re as g,NA as h,pv as i,qx as j,C0 as k,jx as l,Yx as m,Fx as n,Kv as o,ah as p,w0 as q,gt as r,Sn as s,bn as t,Vx as u,_v as v,Mx as w,FE as x,Ox as y,dN as z};
