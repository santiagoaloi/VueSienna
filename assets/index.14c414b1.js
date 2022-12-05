import{t as Ir,u as _,_ as $t,C as Bt,r as Gt,v as U,w as mn,x as le,L as Ws,y as Ar,z as Rr,A as Us,B as Ie,D as lt,G as qe,H as Mr,l as kr,I as $s,J as at,K as Nr,M as Pr,o as jn,i as Bs,a as Or,q as Dr,N as bt,h as Vr,O as xr,S as Hr,P as Fr,E as Wr,Q as Ur,d as $r}from"./firebase-app.89ad7201.js";import{g as Br}from"./firebase-storage.f52a0a49.js";import{g as Gr}from"./firebase-functions.8ee4e55f.js";import{L as jr,s as jt,m as qr,a as gn,d as zr,I as wt,M as Kr}from"./firebase-firestore.b9d472db.js";import{g as Gs,G as Zr,s as Yr,a as Qr,o as Xr}from"./firebase-auth.2fc90a2c.js";import{P as js,g as yn,k as qs,l as we,e as zs,H as Jr,u as V,s as eo,q as Ks,b as to,o as no,Q as so,R as io,S as ro,r as oo,c as ct,U as k,V as O,W as A,X as oe,n as Zs,m as x,Y as Je,Z as et,_ as ut,$ as St,a0 as Nt,O as Be,J as vn,h as lo,a1 as Ys,a2 as ao,a3 as Qs,a4 as Xs,a5 as co,a6 as uo,a7 as ho,a8 as fo,a9 as po,aa as _o,F as mo,t as Cn,ab as go}from"./vue.ea012b77.js";import{u as Js,V as ei,a as yo,b as ti,c as vo,d as Co,e as Eo,f as ni,g as To,h as bo,i as wo,j as So,k as Lo,l as Io,m as Ao,n as Ro,o as Mo}from"./vuetify.603efe34.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const ko={appId:"1:715600957184:web:337d547fb51449a839ede5",apiKey:"AIzaSyCA1CTsJlE9N0lTJmCk9D423HROe4zrAxY",projectId:"skriptag-cloud",authDomain:"skriptag-cloud.firebaseapp.com",storageBucket:"skriptag-cloud.appspot.com",messagingSenderId:"715600957184"},ze=Ir(ko),qt=Gs(ze),zt=jr(ze);Br(ze);Gr(ze);var No=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},si={exports:{}};/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
* @license MIT */(function(n,e){(function(t,s){n.exports=s()})(No,function(){var t={};t.version="0.2.0";var s=t.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};t.configure=function(d){var p,g;for(p in d)g=d[p],g!==void 0&&d.hasOwnProperty(p)&&(s[p]=g);return this},t.status=null,t.set=function(d){var p=t.isStarted();d=i(d,s.minimum,1),t.status=d===1?null:d;var g=t.render(!p),b=g.querySelector(s.barSelector),I=s.speed,T=s.easing;return g.offsetWidth,l(function(y){s.positionUsing===""&&(s.positionUsing=t.getPositioningCSS()),a(b,o(d,I,T)),d===1?(a(g,{transition:"none",opacity:1}),g.offsetWidth,setTimeout(function(){a(g,{transition:"all "+I+"ms linear",opacity:0}),setTimeout(function(){t.remove(),y()},I)},I)):setTimeout(y,I)}),this},t.isStarted=function(){return typeof t.status=="number"},t.start=function(){t.status||t.set(0);var d=function(){setTimeout(function(){!t.status||(t.trickle(),d())},s.trickleSpeed)};return s.trickle&&d(),this},t.done=function(d){return!d&&!t.status?this:t.inc(.3+.5*Math.random()).set(1)},t.inc=function(d){var p=t.status;return p?(typeof d!="number"&&(d=(1-p)*i(Math.random()*p,.1,.95)),p=i(p+d,0,.994),t.set(p)):t.start()},t.trickle=function(){return t.inc(Math.random()*s.trickleRate)},function(){var d=0,p=0;t.promise=function(g){return!g||g.state()==="resolved"?this:(p===0&&t.start(),d++,p++,g.always(function(){p--,p===0?(d=0,t.done()):t.set((d-p)/d)}),this)}}(),t.render=function(d){if(t.isRendered())return document.getElementById("nprogress");u(document.documentElement,"nprogress-busy");var p=document.createElement("div");p.id="nprogress",p.innerHTML=s.template;var g=p.querySelector(s.barSelector),b=d?"-100":r(t.status||0),I=document.querySelector(s.parent),T;return a(g,{transition:"all 0 linear",transform:"translate3d("+b+"%,0,0)"}),s.showSpinner||(T=p.querySelector(s.spinnerSelector),T&&m(T)),I!=document.body&&u(I,"nprogress-custom-parent"),I.appendChild(p),p},t.remove=function(){h(document.documentElement,"nprogress-busy"),h(document.querySelector(s.parent),"nprogress-custom-parent");var d=document.getElementById("nprogress");d&&m(d)},t.isRendered=function(){return!!document.getElementById("nprogress")},t.getPositioningCSS=function(){var d=document.body.style,p="WebkitTransform"in d?"Webkit":"MozTransform"in d?"Moz":"msTransform"in d?"ms":"OTransform"in d?"O":"";return p+"Perspective"in d?"translate3d":p+"Transform"in d?"translate":"margin"};function i(d,p,g){return d<p?p:d>g?g:d}function r(d){return(-1+d)*100}function o(d,p,g){var b;return s.positionUsing==="translate3d"?b={transform:"translate3d("+r(d)+"%,0,0)"}:s.positionUsing==="translate"?b={transform:"translate("+r(d)+"%,0)"}:b={"margin-left":r(d)+"%"},b.transition="all "+p+"ms "+g,b}var l=function(){var d=[];function p(){var g=d.shift();g&&g(p)}return function(g){d.push(g),d.length==1&&p()}}(),a=function(){var d=["Webkit","O","Moz","ms"],p={};function g(y){return y.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(P,D){return D.toUpperCase()})}function b(y){var P=document.body.style;if(y in P)return y;for(var D=d.length,z=y.charAt(0).toUpperCase()+y.slice(1),B;D--;)if(B=d[D]+z,B in P)return B;return y}function I(y){return y=g(y),p[y]||(p[y]=b(y))}function T(y,P,D){P=I(P),y.style[P]=D}return function(y,P){var D=arguments,z,B;if(D.length==2)for(z in P)B=P[z],B!==void 0&&P.hasOwnProperty(z)&&T(y,z,B);else T(y,D[1],D[2])}}();function c(d,p){var g=typeof d=="string"?d:f(d);return g.indexOf(" "+p+" ")>=0}function u(d,p){var g=f(d),b=g+p;c(g,p)||(d.className=b.substring(1))}function h(d,p){var g=f(d),b;!c(d,p)||(b=g.replace(" "+p+" "," "),d.className=b.substring(1,b.length-1))}function f(d){return(" "+(d.className||"")+" ").replace(/\s+/gi," ")}function m(d){d&&d.parentNode&&d.parentNode.removeChild(d)}return t})})(si);const ht=si.exports,dt=js("authentication",{state:()=>({user:null,profile:null}),actions:{getUserId(){return n=>n.userId}},getters:{isLoggedIn:n=>!!n.user,userId:n=>{var e;return(e=n.user)==null?void 0:e.uid},userEmail:n=>{var e;return(e=n.user)==null?void 0:e.email},userAvatar:n=>{var e;return(e=n.user)==null?void 0:e.photoURL},userName:n=>{var e;return(e=n.user)==null?void 0:e.displayName}},actions:{async addUserToUsersCollectionGgoogle(n){const e=jt(zt,"users",n.uid),{uid:t,email:s,displayName:i,photoURL:r}=n,o=i.split(/(\s+)/),l={uid:t,email:s,name:o[0],lastName:o.slice(1).join("").trim(),photoURL:r,coverAvatar:"",disabled:!1,verified:!0,roles:[]};try{return await qr(e,l),{created:!0}}catch({...a}){return{created:!1}}},async authenticateWithGoogle(n){try{ht.start(),n.loading=!0;const e=new Zr;e.setCustomParameters({prompt:"consent",display:"popup"});const t=await Yr(qt,e),{user:s}=t,i=jt(zt,"users",s.uid);if(!(await gn(i)).exists()&&!(await this.addUserToUsersCollectionGgoogle(s)).created)return;await this.router.push("/account/overview"),n.loading=!1}catch({...e}){ht.done(),n.loading=!1,e.code==="auth/account-exists-with-different-credential"&&alert("User already exists...")}},async logout(){await Qr(qt),this.router.push("/")}}}),qn="@firebase/database",zn="0.13.10";/**
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
 */let ii="";function Po(n){ii=n}/**
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
 */class Oo{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),U(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:mn(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Do{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return le(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const ri=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Oo(e)}}catch{}return new Do},de=ri("localStorage"),Kt=ri("sessionStorage");/**
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
 */const Se=new Ws("@firebase/database"),Vo=function(){let n=1;return function(){return n++}}(),oi=function(n){const e=Ar(n),t=new Rr;t.update(e);const s=t.digest();return Us.encodeByteArray(s)},Ke=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Ke.apply(null,s):typeof s=="object"?e+=U(s):e+=s,e+=" "}return e};let fe=null,Kn=!0;const xo=function(n,e){_(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(Se.logLevel=kr.VERBOSE,fe=Se.log.bind(Se),e&&Kt.set("logging_enabled",!0)):typeof n=="function"?fe=n:(fe=null,Kt.remove("logging_enabled"))},G=function(...n){if(Kn===!0&&(Kn=!1,fe===null&&Kt.get("logging_enabled")===!0&&xo(!0)),fe){const e=Ke.apply(null,n);fe(e)}},Ze=function(n){return function(...e){G(n,...e)}},Zt=function(...n){const e="FIREBASE INTERNAL ERROR: "+Ke(...n);Se.error(e)},pe=function(...n){const e=`FIREBASE FATAL ERROR: ${Ke(...n)}`;throw Se.error(e),new Error(e)},Z=function(...n){const e="FIREBASE WARNING: "+Ke(...n);Se.warn(e)},Ho=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Z("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},li=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Fo=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Ae="[MIN_NAME]",_e="[MAX_NAME]",Me=function(n,e){if(n===e)return 0;if(n===Ae||e===_e)return-1;if(e===Ae||n===_e)return 1;{const t=Zn(n),s=Zn(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},Wo=function(n,e){return n===e?0:n<e?-1:1},Oe=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+U(e))},En=function(n){if(typeof n!="object"||n===null)return U(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=U(e[s]),t+=":",t+=En(n[e[s]]);return t+="}",t},ai=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function Q(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const ci=function(n){_(!li(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,l,a;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=l+s,o=Math.round(n*Math.pow(2,t-l)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const c=[];for(a=t;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let f=parseInt(u.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},Uo=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},$o=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},Bo=new RegExp("^-?(0*)\\d{1,10}$"),Go=-2147483648,jo=2147483647,Zn=function(n){if(Bo.test(n)){const e=Number(n);if(e>=Go&&e<=jo)return e}return null},Ye=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Z("Exception was thrown by user callback.",t),e},Math.floor(0))}},qo=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},We=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class zo{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Z(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Ko{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(G("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Z(e)}}class Yt{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Yt.OWNER="owner";/**
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
 */const Tn="5",ui="v",hi="s",di="r",fi="f",pi=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,_i="ls",mi="p",Qt="ac",gi="websocket",yi="long_polling";/**
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
 */class Zo{constructor(e,t,s,i,r=!1,o="",l=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=de.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&de.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Yo(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function vi(n,e,t){_(typeof e=="string","typeof type must == string"),_(typeof t=="object","typeof params must == object");let s;if(e===gi)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===yi)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Yo(n)&&(t.ns=n.namespace);const i=[];return Q(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class Qo{constructor(){this.counters_={}}incrementCounter(e,t=1){le(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return xr(this.counters_)}}/**
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
 */const Pt={},Ot={};function bn(n){const e=n.toString();return Pt[e]||(Pt[e]=new Qo),Pt[e]}function Xo(n,e){const t=n.toString();return Ot[t]||(Ot[t]=e()),Ot[t]}/**
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
 */class Jo{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Ye(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Yn="start",el="close",tl="pLPCommand",nl="pRTLPCB",Ci="id",Ei="pw",Ti="ser",sl="cb",il="seg",rl="ts",ol="d",ll="dframe",bi=1870,wi=30,al=bi-wi,cl=25e3,ul=3e4;class Te{constructor(e,t,s,i,r,o,l){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ze(e),this.stats_=bn(t),this.urlFn=a=>(this.appCheckToken&&(a[Qt]=this.appCheckToken),vi(t,yi,a))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Jo(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(ul)),Fo(()=>{if(this.isClosed_)return;this.scriptTagHolder=new wn((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Yn)this.id=l,this.password=a;else if(o===el)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[Yn]="t",s[Ti]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[sl]=this.scriptTagHolder.uniqueCallbackIdentifier),s[ui]=Tn,this.transportSessionId&&(s[hi]=this.transportSessionId),this.lastSessionId&&(s[_i]=this.lastSessionId),this.applicationId&&(s[mi]=this.applicationId),this.appCheckToken&&(s[Qt]=this.appCheckToken),typeof location<"u"&&location.hostname&&pi.test(location.hostname)&&(s[di]=fi);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Te.forceAllow_=!0}static forceDisallow(){Te.forceDisallow_=!0}static isAvailable(){return Te.forceAllow_?!0:!Te.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Uo()&&!$o()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=U(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Fr(t),i=ai(s,al);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[ll]="t",s[Ci]=e,s[Ei]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=U(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class wn{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Vo(),window[tl+this.uniqueCallbackIdentifier]=e,window[nl+this.uniqueCallbackIdentifier]=t,this.myIFrame=wn.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){G("frame writing exception"),l.stack&&G(l.stack),G(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||G("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ci]=this.myID,e[Ei]=this.myPW,e[Ti]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+wi+s.length<=bi;){const o=this.pendingSegs.shift();s=s+"&"+il+i+"="+o.seg+"&"+rl+i+"="+o.ts+"&"+ol+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(cl)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{G("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const hl=16384,dl=45e3;let ft=null;typeof MozWebSocket<"u"?ft=MozWebSocket:typeof WebSocket<"u"&&(ft=WebSocket);class X{constructor(e,t,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ze(this.connId),this.stats_=bn(t),this.connURL=X.connectionURL_(t,o,l,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[ui]=Tn,typeof location<"u"&&location.hostname&&pi.test(location.hostname)&&(o[di]=fi),t&&(o[hi]=t),s&&(o[_i]=s),i&&(o[Qt]=i),r&&(o[mi]=r),vi(e,gi,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,de.set("previous_websocket_failure",!0);try{let s;$s(),this.mySock=new ft(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){X.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ft!==null&&!X.forceDisallow_}static previouslyFailed(){return de.isInMemoryStorage||de.get("previous_websocket_failure")===!0}markConnectionHealthy(){de.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=mn(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(_(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=U(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=ai(t,hl);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(dl))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}X.responsesRequiredToBeHealthy=2;X.healthyTimeout=3e4;/**
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
 */class Ge{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Te,X]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=X&&X.isAvailable();let s=t&&!X.previouslyFailed();if(e.webSocketOnly&&(t||Z("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[X];else{const i=this.transports_=[];for(const r of Ge.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Ge.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ge.globalTransportInitialized_=!1;/**
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
 */const fl=6e4,pl=5e3,_l=10*1024,ml=100*1024,Dt="t",Qn="d",gl="s",Xn="r",yl="e",Jn="o",es="a",ts="n",ns="p",vl="h";class Cl{constructor(e,t,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ze("c:"+this.id+":"),this.transportManager_=new Ge(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=We(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ml?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>_l?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Dt in e){const t=e[Dt];t===es?this.upgradeIfSecondaryHealthy_():t===Xn?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Jn&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Oe("t",e),s=Oe("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ns,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:es,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ts,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Oe("t",e),s=Oe("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Oe(Dt,e);if(Qn in e){const s=e[Qn];if(t===vl)this.onHandshake_(s);else if(t===ts){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===gl?this.onConnectionShutdown_(s):t===Xn?this.onReset_(s):t===yl?Zt("Server Error: "+s):t===Jn?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Zt("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Tn!==s&&Z("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),We(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(fl))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):We(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(pl))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ns,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(de.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Si{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class Li{constructor(e){this.allowedEvents_=e,this.listeners_={},_(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){_(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class pt extends Li{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Bs()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new pt}getInitialEvent(e){return _(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const ss=32,is=768;class N{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function L(){return new N("")}function C(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function ce(n){return n.pieces_.length-n.pieceNum_}function M(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new N(n.pieces_,e)}function Ii(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function El(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Ai(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Ri(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new N(e,0)}function W(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof N)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new N(t,0)}function v(n){return n.pieceNum_>=n.pieces_.length}function Y(n,e){const t=C(n),s=C(e);if(t===null)return e;if(t===s)return Y(M(n),M(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Mi(n,e){if(ce(n)!==ce(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function J(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(ce(n)>ce(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class Tl{constructor(e,t){this.errorPrefix_=t,this.parts_=Ai(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=bt(this.parts_[s]);ki(this)}}function bl(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=bt(e),ki(n)}function wl(n){const e=n.parts_.pop();n.byteLength_-=bt(e),n.parts_.length>0&&(n.byteLength_-=1)}function ki(n){if(n.byteLength_>is)throw new Error(n.errorPrefix_+"has a key path longer than "+is+" bytes ("+n.byteLength_+").");if(n.parts_.length>ss)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ss+") or object contains a cycle "+he(n))}function he(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class Sn extends Li{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Sn}getInitialEvent(e){return _(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const De=1e3,Sl=60*5*1e3,rs=30*1e3,Ll=1.3,Il=3e4,Al="server_kill",os=3;class re extends Si{constructor(e,t,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=re.nextPersistentConnectionId_++,this.log_=Ze("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=De,this.maxReconnectDelay_=Sl,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!$s())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Sn.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&pt.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(U(r)),_(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new at,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?t.resolve(l):t.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),_(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),_(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;re.warnOnListenWarnings_(a,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&le(e,"w")){const s=Ie(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();Z(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Nr(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=rs)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Pr(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),_(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+U(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Zt("Unrecognized action received from server: "+U(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){_(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=De,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=De,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Il&&(this.reconnectDelay_=De),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Ll)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+re.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(h){_(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?G("getToken() completed but was canceled"):(G("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,l=new Cl(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,m=>{Z(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(Al)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Z(h),a())}}}interrupt(e){G("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){G("Resuming connection for reason: "+e),delete this.interruptReasons_[e],jn(this.interruptReasons_)&&(this.reconnectDelay_=De,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>En(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new N(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){G("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=os&&(this.reconnectDelay_=rs,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){G("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=os&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+ii.replace(/\./g,"-")]=1,Bs()?e["framework.cordova"]=1:Or()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=pt.getInstance().currentlyOnline();return jn(this.interruptReasons_)&&e}}re.nextPersistentConnectionId_=0;re.nextConnectionId_=0;/**
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
 */class E{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new E(e,t)}}/**
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
 */class Lt{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new E(Ae,e),i=new E(Ae,t);return this.compare(s,i)!==0}minPost(){return E.MIN}}/**
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
 */let tt;class Ni extends Lt{static get __EMPTY_NODE(){return tt}static set __EMPTY_NODE(e){tt=e}compare(e,t){return Me(e.name,t.name)}isDefinedOn(e){throw qe("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return E.MIN}maxPost(){return new E(_e,tt)}makePost(e,t){return _(typeof e=="string","KeyIndex indexValue must always be a string."),new E(e,tt)}toString(){return".key"}}const Le=new Ni;/**
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
 */class nt{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class F{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s!=null?s:F.RED,this.left=i!=null?i:K.EMPTY_NODE,this.right=r!=null?r:K.EMPTY_NODE}copy(e,t,s,i,r){return new F(e!=null?e:this.key,t!=null?t:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return K.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return K.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,F.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,F.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}F.RED=!0;F.BLACK=!1;class Rl{copy(e,t,s,i,r){return this}insert(e,t,s){return new F(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class K{constructor(e,t=K.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new K(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,F.BLACK,null,null))}remove(e){return new K(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,F.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new nt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new nt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new nt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new nt(this.root_,null,this.comparator_,!0,e)}}K.EMPTY_NODE=new Rl;/**
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
 */function Ml(n,e){return Me(n.name,e.name)}function Ln(n,e){return Me(n,e)}/**
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
 */let Xt;function kl(n){Xt=n}const Pi=function(n){return typeof n=="number"?"number:"+ci(n):"string:"+n},Oi=function(n){if(n.isLeafNode()){const e=n.val();_(typeof e=="string"||typeof e=="number"||typeof e=="object"&&le(e,".sv"),"Priority must be a string or number.")}else _(n===Xt||n.isEmpty(),"priority of unexpected type.");_(n===Xt||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let ls;class H{constructor(e,t=H.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,_(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Oi(this.priorityNode_)}static set __childrenNodeConstructor(e){ls=e}static get __childrenNodeConstructor(){return ls}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new H(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:H.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return v(e)?this:C(e)===".priority"?this.priorityNode_:H.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:H.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=C(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(_(s!==".priority"||ce(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,H.__childrenNodeConstructor.EMPTY_NODE.updateChild(M(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Pi(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=ci(this.value_):e+=this.value_,this.lazyHash_=oi(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===H.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof H.__childrenNodeConstructor?-1:(_(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=H.VALUE_TYPE_ORDER.indexOf(t),r=H.VALUE_TYPE_ORDER.indexOf(s);return _(i>=0,"Unknown leaf type: "+t),_(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}H.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Di,Vi;function Nl(n){Di=n}function Pl(n){Vi=n}class Ol extends Lt{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?Me(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return E.MIN}maxPost(){return new E(_e,new H("[PRIORITY-POST]",Vi))}makePost(e,t){const s=Di(e);return new E(t,new H("[PRIORITY-POST]",s))}toString(){return".priority"}}const q=new Ol;/**
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
 */const Dl=Math.log(2);class Vl{constructor(e){const t=r=>parseInt(Math.log(r)/Dl,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const _t=function(n,e,t,s){n.sort(e);const i=function(a,c){const u=c-a;let h,f;if(u===0)return null;if(u===1)return h=n[a],f=t?t(h):h,new F(f,h.node,F.BLACK,null,null);{const m=parseInt(u/2,10)+a,d=i(a,m),p=i(m+1,c);return h=n[m],f=t?t(h):h,new F(f,h.node,F.BLACK,d,p)}},r=function(a){let c=null,u=null,h=n.length;const f=function(d,p){const g=h-d,b=h;h-=d;const I=i(g+1,b),T=n[g],y=t?t(T):T;m(new F(y,T.node,p,null,I))},m=function(d){c?(c.left=d,c=d):(u=d,c=d)};for(let d=0;d<a.count;++d){const p=a.nextBitIsOne(),g=Math.pow(2,a.count-(d+1));p?f(g,F.BLACK):(f(g,F.BLACK),f(g,F.RED))}return u},o=new Vl(n.length),l=r(o);return new K(s||e,l)};/**
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
 */let Vt;const Ee={};class se{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return _(Ee&&q,"ChildrenNode.ts has not been loaded"),Vt=Vt||new se({".priority":Ee},{".priority":q}),Vt}get(e){const t=Ie(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof K?t:null}hasIndex(e){return le(this.indexSet_,e.toString())}addIndex(e,t){_(e!==Le,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(E.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=_t(s,e.getCompare()):l=Ee;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new se(u,c)}addToIndexes(e,t){const s=lt(this.indexes_,(i,r)=>{const o=Ie(this.indexSet_,r);if(_(o,"Missing index implementation for "+r),i===Ee)if(o.isDefinedOn(e.node)){const l=[],a=t.getIterator(E.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),_t(l,o.getCompare())}else return Ee;else{const l=t.get(e.name);let a=i;return l&&(a=a.remove(new E(e.name,l))),a.insert(e,e.node)}});return new se(s,this.indexSet_)}removeFromIndexes(e,t){const s=lt(this.indexes_,i=>{if(i===Ee)return i;{const r=t.get(e.name);return r?i.remove(new E(e.name,r)):i}});return new se(s,this.indexSet_)}}/**
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
 */let Ve;class S{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Oi(this.priorityNode_),this.children_.isEmpty()&&_(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ve||(Ve=new S(new K(Ln),null,se.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ve}updatePriority(e){return this.children_.isEmpty()?this:new S(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Ve:t}}getChild(e){const t=C(e);return t===null?this:this.getImmediateChild(t).getChild(M(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(_(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new E(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Ve:this.priorityNode_;return new S(i,o,r)}}updateChild(e,t){const s=C(e);if(s===null)return t;{_(C(e)!==".priority"||ce(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(M(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(q,(o,l)=>{t[o]=l.val(e),s++,r&&S.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in t)o[l]=t[l];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Pi(this.getPriority().val())+":"),this.forEachChild(q,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":oi(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new E(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new E(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new E(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,E.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,E.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Qe?-1:0}withIndex(e){if(e===Le||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new S(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Le||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(q),i=t.getIterator(q);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Le?null:this.indexMap_.get(e.toString())}}S.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class xl extends S{constructor(){super(new K(Ln),S.EMPTY_NODE,se.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return S.EMPTY_NODE}isEmpty(){return!1}}const Qe=new xl;Object.defineProperties(E,{MIN:{value:new E(Ae,S.EMPTY_NODE)},MAX:{value:new E(_e,Qe)}});Ni.__EMPTY_NODE=S.EMPTY_NODE;H.__childrenNodeConstructor=S;kl(Qe);Pl(Qe);/**
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
 */const Hl=!0;function j(n,e=null){if(n===null)return S.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),_(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new H(t,j(e))}if(!(n instanceof Array)&&Hl){const t=[];let s=!1;if(Q(n,(o,l)=>{if(o.substring(0,1)!=="."){const a=j(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),t.push(new E(o,a)))}}),t.length===0)return S.EMPTY_NODE;const r=_t(t,Ml,o=>o.name,Ln);if(s){const o=_t(t,q.getCompare());return new S(r,j(e),new se({".priority":o},{".priority":q}))}else return new S(r,j(e),se.Default)}else{let t=S.EMPTY_NODE;return Q(n,(s,i)=>{if(le(n,s)&&s.substring(0,1)!=="."){const r=j(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(j(e))}}Nl(j);/**
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
 */class Fl extends Lt{constructor(e){super(),this.indexPath_=e,_(!v(e)&&C(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?Me(e.name,t.name):r}makePost(e,t){const s=j(e),i=S.EMPTY_NODE.updateChild(this.indexPath_,s);return new E(t,i)}maxPost(){const e=S.EMPTY_NODE.updateChild(this.indexPath_,Qe);return new E(_e,e)}toString(){return Ai(this.indexPath_,0).join("/")}}/**
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
 */class Wl extends Lt{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Me(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return E.MIN}maxPost(){return E.MAX}makePost(e,t){const s=j(e);return new E(t,s)}toString(){return".value"}}const Ul=new Wl;/**
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
 */function $l(n){return{type:"value",snapshotNode:n}}function Bl(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Gl(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function as(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function jl(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class In{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=q}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return _(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return _(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ae}hasEnd(){return this.endSet_}getIndexEndValue(){return _(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return _(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:_e}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return _(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===q}copy(){const e=new In;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function cs(n){const e={};if(n.isDefault())return e;let t;return n.index_===q?t="$priority":n.index_===Ul?t="$value":n.index_===Le?t="$key":(_(n.index_ instanceof Fl,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=U(t),n.startSet_&&(e.startAt=U(n.indexStartValue_),n.startNameSet_&&(e.startAt+=","+U(n.indexStartName_))),n.endSet_&&(e.endAt=U(n.indexEndValue_),n.endNameSet_&&(e.endAt+=","+U(n.indexEndName_))),n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function us(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_)),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_)),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==q&&(e.i=n.index_.toString()),e}/**
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
 */class mt extends Si{constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Ze("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(_(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=mt.getListenId_(e,s),l={};this.listens_[o]=l;const a=cs(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Ie(this.listens_,o)===l){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,t){const s=mt.getListenId_(e,t);delete this.listens_[s]}get(e){const t=cs(e._queryParams),s=e._path.toString(),i=new at;return this.restRequest_(s+".json",t,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Dr(t);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=mn(l.responseText)}catch{Z("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&Z("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class ql{constructor(){this.rootNode_=S.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function gt(){return{value:null,children:new Map}}function xi(n,e,t){if(v(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=C(e);n.children.has(s)||n.children.set(s,gt());const i=n.children.get(s);e=M(e),xi(i,e,t)}}function Jt(n,e,t){n.value!==null?t(e,n.value):zl(n,(s,i)=>{const r=new N(e.toString()+"/"+s);Jt(i,r,t)})}function zl(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
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
 */class Kl{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Q(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
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
 */const hs=10*1e3,Zl=30*1e3,Yl=5*60*1e3;class Ql{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Kl(e);const s=hs+(Zl-hs)*Math.random();We(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;Q(e,(i,r)=>{r>0&&le(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),We(this.reportStats_.bind(this),Math.floor(Math.random()*2*Yl))}}/**
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
 */var te;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(te||(te={}));function Hi(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Fi(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Wi(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class yt{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=te.ACK_USER_WRITE,this.source=Hi()}operationForChild(e){if(v(this.path)){if(this.affectedTree.value!=null)return _(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new N(e));return new yt(L(),t,this.revert)}}else return _(C(this.path)===e,"operationForChild called for unrelated child."),new yt(M(this.path),this.affectedTree,this.revert)}}/**
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
 */class me{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=te.OVERWRITE}operationForChild(e){return v(this.path)?new me(this.source,L(),this.snap.getImmediateChild(e)):new me(this.source,M(this.path),this.snap)}}/**
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
 */class je{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=te.MERGE}operationForChild(e){if(v(this.path)){const t=this.children.subtree(new N(e));return t.isEmpty()?null:t.value?new me(this.source,L(),t.value):new je(this.source,L(),t)}else return _(C(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new je(this.source,M(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class An{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(v(e))return this.isFullyInitialized()&&!this.filtered_;const t=C(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function Xl(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(jl(o.childName,o.snapshotNode))}),xe(n,i,"child_removed",e,s,t),xe(n,i,"child_added",e,s,t),xe(n,i,"child_moved",r,s,t),xe(n,i,"child_changed",e,s,t),xe(n,i,"value",e,s,t),i}function xe(n,e,t,s,i,r){const o=s.filter(l=>l.type===t);o.sort((l,a)=>ea(n,l,a)),o.forEach(l=>{const a=Jl(n,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,n.query_))})})}function Jl(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function ea(n,e,t){if(e.childName==null||t.childName==null)throw qe("Should only compare child_ events.");const s=new E(e.childName,e.snapshotNode),i=new E(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
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
 */function Ui(n,e){return{eventCache:n,serverCache:e}}function Ue(n,e,t,s){return Ui(new An(e,t,s),n.serverCache)}function $i(n,e,t,s){return Ui(n.eventCache,new An(e,t,s))}function en(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function ge(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let xt;const ta=()=>(xt||(xt=new K(Wo)),xt);class R{constructor(e,t=ta()){this.value=e,this.children=t}static fromObject(e){let t=new R(null);return Q(e,(s,i)=>{t=t.set(new N(s),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:L(),value:this.value};if(v(e))return null;{const s=C(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(M(e),t);return r!=null?{path:W(new N(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(v(e))return this;{const t=C(e),s=this.children.get(t);return s!==null?s.subtree(M(e)):new R(null)}}set(e,t){if(v(e))return new R(t,this.children);{const s=C(e),r=(this.children.get(s)||new R(null)).set(M(e),t),o=this.children.insert(s,r);return new R(this.value,o)}}remove(e){if(v(e))return this.children.isEmpty()?new R(null):new R(null,this.children);{const t=C(e),s=this.children.get(t);if(s){const i=s.remove(M(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new R(null):new R(this.value,r)}else return this}}get(e){if(v(e))return this.value;{const t=C(e),s=this.children.get(t);return s?s.get(M(e)):null}}setTree(e,t){if(v(e))return t;{const s=C(e),r=(this.children.get(s)||new R(null)).setTree(M(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new R(this.value,o)}}fold(e){return this.fold_(L(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(W(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,L(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(v(e))return null;{const r=C(e),o=this.children.get(r);return o?o.findOnPath_(M(e),W(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,L(),t)}foreachOnPath_(e,t,s){if(v(e))return this;{this.value&&s(t,this.value);const i=C(e),r=this.children.get(i);return r?r.foreachOnPath_(M(e),W(t,i),s):new R(null)}}foreach(e){this.foreach_(L(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(W(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
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
 */class ee{constructor(e){this.writeTree_=e}static empty(){return new ee(new R(null))}}function $e(n,e,t){if(v(e))return new ee(new R(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Y(i,e);return r=r.updateChild(o,t),new ee(n.writeTree_.set(i,r))}else{const i=new R(t),r=n.writeTree_.setTree(e,i);return new ee(r)}}}function ds(n,e,t){let s=n;return Q(t,(i,r)=>{s=$e(s,W(e,i),r)}),s}function fs(n,e){if(v(e))return ee.empty();{const t=n.writeTree_.setTree(e,new R(null));return new ee(t)}}function tn(n,e){return ye(n,e)!=null}function ye(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Y(t.path,e)):null}function ps(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(q,(s,i)=>{e.push(new E(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new E(s,i.value))}),e}function ae(n,e){if(v(e))return n;{const t=ye(n,e);return t!=null?new ee(new R(t)):new ee(n.writeTree_.subtree(e))}}function nn(n){return n.writeTree_.isEmpty()}function Re(n,e){return Bi(L(),n.writeTree_,e)}function Bi(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(_(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=Bi(W(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(W(n,".priority"),s)),t}}/**
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
 */function Gi(n,e){return Zi(e,n)}function na(n,e,t,s,i){_(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=$e(n.visibleWrites,e,t)),n.lastWriteId=s}function sa(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function ia(n,e){const t=n.allWrites.findIndex(l=>l.writeId===e);_(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const l=n.allWrites[o];l.visible&&(o>=t&&ra(l,s.path)?i=!1:J(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return oa(n),!0;if(s.snap)n.visibleWrites=fs(n.visibleWrites,s.path);else{const l=s.children;Q(l,a=>{n.visibleWrites=fs(n.visibleWrites,W(s.path,a))})}return!0}else return!1}function ra(n,e){if(n.snap)return J(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&J(W(n.path,t),e))return!0;return!1}function oa(n){n.visibleWrites=ji(n.allWrites,la,L()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function la(n){return n.visible}function ji(n,e,t){let s=ee.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let l;if(r.snap)J(t,o)?(l=Y(t,o),s=$e(s,l,r.snap)):J(o,t)&&(l=Y(o,t),s=$e(s,L(),r.snap.getChild(l)));else if(r.children){if(J(t,o))l=Y(t,o),s=ds(s,l,r.children);else if(J(o,t))if(l=Y(o,t),v(l))s=ds(s,L(),r.children);else{const a=Ie(r.children,C(l));if(a){const c=a.getChild(M(l));s=$e(s,L(),c)}}}else throw qe("WriteRecord should have .snap or .children")}}return s}function qi(n,e,t,s,i){if(!s&&!i){const r=ye(n.visibleWrites,e);if(r!=null)return r;{const o=ae(n.visibleWrites,e);if(nn(o))return t;if(t==null&&!tn(o,L()))return null;{const l=t||S.EMPTY_NODE;return Re(o,l)}}}else{const r=ae(n.visibleWrites,e);if(!i&&nn(r))return t;if(!i&&t==null&&!tn(r,L()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(J(c.path,e)||J(e,c.path))},l=ji(n.allWrites,o,e),a=t||S.EMPTY_NODE;return Re(l,a)}}}function aa(n,e,t){let s=S.EMPTY_NODE;const i=ye(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(q,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=ae(n.visibleWrites,e);return t.forEachChild(q,(o,l)=>{const a=Re(ae(r,new N(o)),l);s=s.updateImmediateChild(o,a)}),ps(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=ae(n.visibleWrites,e);return ps(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function ca(n,e,t,s,i){_(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=W(e,t);if(tn(n.visibleWrites,r))return null;{const o=ae(n.visibleWrites,r);return nn(o)?i.getChild(t):Re(o,i.getChild(t))}}function ua(n,e,t,s){const i=W(e,t),r=ye(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=ae(n.visibleWrites,i);return Re(o,s.getNode().getImmediateChild(t))}else return null}function ha(n,e){return ye(n.visibleWrites,e)}function da(n,e,t,s,i,r,o){let l;const a=ae(n.visibleWrites,e),c=ye(a,L());if(c!=null)l=c;else if(t!=null)l=Re(a,t);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),f=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let m=f.getNext();for(;m&&u.length<i;)h(m,s)!==0&&u.push(m),m=f.getNext();return u}else return[]}function fa(){return{visibleWrites:ee.empty(),allWrites:[],lastWriteId:-1}}function sn(n,e,t,s){return qi(n.writeTree,n.treePath,e,t,s)}function zi(n,e){return aa(n.writeTree,n.treePath,e)}function _s(n,e,t,s){return ca(n.writeTree,n.treePath,e,t,s)}function vt(n,e){return ha(n.writeTree,W(n.treePath,e))}function pa(n,e,t,s,i,r){return da(n.writeTree,n.treePath,e,t,s,i,r)}function Rn(n,e,t){return ua(n.writeTree,n.treePath,e,t)}function Ki(n,e){return Zi(W(n.treePath,e),n.writeTree)}function Zi(n,e){return{treePath:n,writeTree:e}}/**
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
 */class _a{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;_(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),_(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,as(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,Gl(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,Bl(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,as(s,e.snapshotNode,i.oldSnap));else throw qe("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class ma{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const Yi=new ma;class Mn{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new An(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Rn(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ge(this.viewCache_),r=pa(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}function ga(n,e){_(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),_(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function ya(n,e,t,s,i){const r=new _a;let o,l;if(t.type===te.OVERWRITE){const c=t;c.source.fromUser?o=rn(n,e,c.path,c.snap,s,i,r):(_(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!v(c.path),o=Ct(n,e,c.path,c.snap,s,i,l,r))}else if(t.type===te.MERGE){const c=t;c.source.fromUser?o=Ca(n,e,c.path,c.children,s,i,r):(_(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=on(n,e,c.path,c.children,s,i,l,r))}else if(t.type===te.ACK_USER_WRITE){const c=t;c.revert?o=ba(n,e,c.path,s,i,r):o=Ea(n,e,c.path,c.affectedTree,s,i,r)}else if(t.type===te.LISTEN_COMPLETE)o=Ta(n,e,t.path,s,r);else throw qe("Unknown operation type: "+t.type);const a=r.getChanges();return va(e,o,a),{viewCache:o,changes:a}}function va(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=en(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push($l(en(e)))}}function Qi(n,e,t,s,i,r){const o=e.eventCache;if(vt(s,t)!=null)return e;{let l,a;if(v(t))if(_(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ge(e),u=c instanceof S?c:S.EMPTY_NODE,h=zi(s,u);l=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=sn(s,ge(e));l=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=C(t);if(c===".priority"){_(ce(t)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=_s(s,t,u,a);h!=null?l=n.filter.updatePriority(u,h):l=o.getNode()}else{const u=M(t);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const f=_s(s,t,o.getNode(),a);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=Rn(s,c,e.serverCache);h!=null?l=n.filter.updateChild(o.getNode(),c,h,u,i,r):l=o.getNode()}}return Ue(e,l,o.isFullyInitialized()||v(t),n.filter.filtersNodes())}}function Ct(n,e,t,s,i,r,o,l){const a=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(v(t))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const m=a.getNode().updateChild(t,s);c=u.updateFullNode(a.getNode(),m,null)}else{const m=C(t);if(!a.isCompleteForPath(t)&&ce(t)>1)return e;const d=M(t),g=a.getNode().getImmediateChild(m).updateChild(d,s);m===".priority"?c=u.updatePriority(a.getNode(),g):c=u.updateChild(a.getNode(),m,g,d,Yi,null)}const h=$i(e,c,a.isFullyInitialized()||v(t),u.filtersNodes()),f=new Mn(i,h,r);return Qi(n,h,t,i,f,l)}function rn(n,e,t,s,i,r,o){const l=e.eventCache;let a,c;const u=new Mn(i,e,r);if(v(t))c=n.filter.updateFullNode(e.eventCache.getNode(),s,o),a=Ue(e,c,!0,n.filter.filtersNodes());else{const h=C(t);if(h===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),s),a=Ue(e,c,l.isFullyInitialized(),l.isFiltered());else{const f=M(t),m=l.getNode().getImmediateChild(h);let d;if(v(f))d=s;else{const p=u.getCompleteChild(h);p!=null?Ii(f)===".priority"&&p.getChild(Ri(f)).isEmpty()?d=p:d=p.updateChild(f,s):d=S.EMPTY_NODE}if(m.equals(d))a=e;else{const p=n.filter.updateChild(l.getNode(),h,d,f,u,o);a=Ue(e,p,l.isFullyInitialized(),n.filter.filtersNodes())}}}return a}function ms(n,e){return n.eventCache.isCompleteForChild(e)}function Ca(n,e,t,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=W(t,a);ms(e,C(u))&&(l=rn(n,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=W(t,a);ms(e,C(u))||(l=rn(n,l,u,c,i,r,o))}),l}function gs(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function on(n,e,t,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;v(t)?c=s:c=new R(null).setTree(t,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const m=e.serverCache.getNode().getImmediateChild(h),d=gs(n,m,f);a=Ct(n,a,new N(h),d,i,r,o,l)}}),c.children.inorderTraversal((h,f)=>{const m=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!m){const d=e.serverCache.getNode().getImmediateChild(h),p=gs(n,d,f);a=Ct(n,a,new N(h),p,i,r,o,l)}}),a}function Ea(n,e,t,s,i,r,o){if(vt(i,t)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(v(t)&&a.isFullyInitialized()||a.isCompleteForPath(t))return Ct(n,e,t,a.getNode().getChild(t),i,r,l,o);if(v(t)){let c=new R(null);return a.getNode().forEachChild(Le,(u,h)=>{c=c.set(new N(u),h)}),on(n,e,t,c,i,r,l,o)}else return e}else{let c=new R(null);return s.foreach((u,h)=>{const f=W(t,u);a.isCompleteForPath(f)&&(c=c.set(u,a.getNode().getChild(f)))}),on(n,e,t,c,i,r,l,o)}}function Ta(n,e,t,s,i){const r=e.serverCache,o=$i(e,r.getNode(),r.isFullyInitialized()||v(t),r.isFiltered());return Qi(n,o,t,s,Yi,i)}function ba(n,e,t,s,i,r){let o;if(vt(s,t)!=null)return e;{const l=new Mn(s,e,i),a=e.eventCache.getNode();let c;if(v(t)||C(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=sn(s,ge(e));else{const h=e.serverCache.getNode();_(h instanceof S,"serverChildren would be complete if leaf node"),u=zi(s,h)}u=u,c=n.filter.updateFullNode(a,u,r)}else{const u=C(t);let h=Rn(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=n.filter.updateChild(a,u,h,M(t),l,r):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(a,u,S.EMPTY_NODE,M(t),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=sn(s,ge(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||vt(s,L())!=null,Ue(e,c,o,n.filter.filtersNodes())}}function wa(n,e){const t=ge(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!v(e)&&!t.getImmediateChild(C(e)).isEmpty())?t.getChild(e):null}function ys(n,e,t,s){e.type===te.MERGE&&e.source.queryId!==null&&(_(ge(n.viewCache_),"We should always have a full cache before handling merges"),_(en(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=ya(n.processor_,i,e,t,s);return ga(n.processor_,r.viewCache),_(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Sa(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Sa(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return Xl(n.eventGenerator_,e,t,i)}/**
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
 */let vs;function La(n){_(!vs,"__referenceConstructor has already been defined"),vs=n}function kn(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return _(r!=null,"SyncTree gave us an op for an invalid query."),ys(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(ys(o,e,t,s));return r}}function Nn(n,e){let t=null;for(const s of n.views.values())t=t||wa(s,e);return t}/**
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
 */let Cs;function Ia(n){_(!Cs,"__referenceConstructor has already been defined"),Cs=n}class Es{constructor(e){this.listenProvider_=e,this.syncPointTree_=new R(null),this.pendingWriteTree_=fa(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Aa(n,e,t,s,i){return na(n.pendingWriteTree_,e,t,s,i),i?At(n,new me(Hi(),e,t)):[]}function be(n,e,t=!1){const s=sa(n.pendingWriteTree_,e);if(ia(n.pendingWriteTree_,e)){let r=new R(null);return s.snap!=null?r=r.set(L(),!0):Q(s.children,o=>{r=r.set(new N(o),!0)}),At(n,new yt(s.path,r,t))}else return[]}function It(n,e,t){return At(n,new me(Fi(),e,t))}function Ra(n,e,t){const s=R.fromObject(t);return At(n,new je(Fi(),e,s))}function Ma(n,e,t,s){const i=tr(n,s);if(i!=null){const r=nr(i),o=r.path,l=r.queryId,a=Y(o,e),c=new me(Wi(l),a,t);return sr(n,o,c)}else return[]}function ka(n,e,t,s){const i=tr(n,s);if(i){const r=nr(i),o=r.path,l=r.queryId,a=Y(o,e),c=R.fromObject(t),u=new je(Wi(l),a,c);return sr(n,o,u)}else return[]}function Xi(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,l)=>{const a=Y(o,e),c=Nn(l,a);if(c)return c});return qi(i,e,r,t,!0)}function At(n,e){return Ji(e,n.syncPointTree_,null,Gi(n.pendingWriteTree_,L()))}function Ji(n,e,t,s){if(v(n.path))return er(n,e,t,s);{const i=e.get(L());t==null&&i!=null&&(t=Nn(i,L()));let r=[];const o=C(n.path),l=n.operationForChild(o),a=e.children.get(o);if(a&&l){const c=t?t.getImmediateChild(o):null,u=Ki(s,o);r=r.concat(Ji(l,a,c,u))}return i&&(r=r.concat(kn(i,n,s,t))),r}}function er(n,e,t,s){const i=e.get(L());t==null&&i!=null&&(t=Nn(i,L()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=t?t.getImmediateChild(o):null,c=Ki(s,o),u=n.operationForChild(o);u&&(r=r.concat(er(u,l,a,c)))}),i&&(r=r.concat(kn(i,n,s,t))),r}function tr(n,e){return n.tagToQueryMap.get(e)}function nr(n){const e=n.indexOf("$");return _(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new N(n.substr(0,e))}}function sr(n,e,t){const s=n.syncPointTree_.get(e);_(s,"Missing sync point for query tag that we're tracking");const i=Gi(n.pendingWriteTree_,e);return kn(s,t,i,null)}/**
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
 */class Pn{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Pn(t)}node(){return this.node_}}class On{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=W(this.path_,e);return new On(this.syncTree_,t)}node(){return Xi(this.syncTree_,this.path_)}}const Na=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Ts=function(n,e,t){if(!n||typeof n!="object")return n;if(_(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Pa(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Oa(n[".sv"],e);_(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Pa=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:_(!1,"Unexpected server value: "+n)}},Oa=function(n,e,t){n.hasOwnProperty("increment")||_(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&_(!1,"Unexpected increment value: "+s);const i=e.node();if(_(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Da=function(n,e,t,s){return Dn(e,new On(t,n),s)},Va=function(n,e,t){return Dn(n,new Pn(e),t)};function Dn(n,e,t){const s=n.getPriority().val(),i=Ts(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,l=Ts(o.getValue(),e,t);return l!==o.getValue()||i!==o.getPriority().val()?new H(l,j(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new H(i))),o.forEachChild(q,(l,a)=>{const c=Dn(a,e.getImmediateChild(l),t);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
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
 */class Vn{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function xn(n,e){let t=e instanceof N?e:new N(e),s=n,i=C(t);for(;i!==null;){const r=Ie(s.node.children,i)||{children:{},childCount:0};s=new Vn(i,s,r),t=M(t),i=C(t)}return s}function ke(n){return n.node.value}function ir(n,e){n.node.value=e,ln(n)}function rr(n){return n.node.childCount>0}function xa(n){return ke(n)===void 0&&!rr(n)}function Rt(n,e){Q(n.node.children,(t,s)=>{e(new Vn(t,n,s))})}function or(n,e,t,s){t&&!s&&e(n),Rt(n,i=>{or(i,e,!0,s)}),t&&s&&e(n)}function Ha(n,e,t){let s=t?n:n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Xe(n){return new N(n.parent===null?n.name:Xe(n.parent)+"/"+n.name)}function ln(n){n.parent!==null&&Fa(n.parent,n.name,n)}function Fa(n,e,t){const s=xa(t),i=le(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,ln(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,ln(n))}/**
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
 */const Wa=/[\[\].#$\/\u0000-\u001F\u007F]/,Ua=/[\[\].#$\u0000-\u001F\u007F]/,Ht=10*1024*1024,lr=function(n){return typeof n=="string"&&n.length!==0&&!Wa.test(n)},$a=function(n){return typeof n=="string"&&n.length!==0&&!Ua.test(n)},Ba=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),$a(n)},ar=function(n,e,t){const s=t instanceof N?new Tl(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+he(s));if(typeof e=="function")throw new Error(n+"contains a function "+he(s)+" with contents = "+e.toString());if(li(e))throw new Error(n+"contains "+e.toString()+" "+he(s));if(typeof e=="string"&&e.length>Ht/3&&bt(e)>Ht)throw new Error(n+"contains a string greater than "+Ht+" utf8 bytes "+he(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Q(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!lr(o)))throw new Error(n+" contains an invalid key ("+o+") "+he(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);bl(s,o),ar(n,l,s),wl(s)}),i&&r)throw new Error(n+' contains ".value" child '+he(s)+" in addition to actual children.")}},Ga=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!lr(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Ba(t))throw new Error(Mr(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class ja{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function qa(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!Mi(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function ve(n,e,t){qa(n,t),za(n,s=>J(s,e)||J(e,s))}function za(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(Ka(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Ka(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();fe&&G("event: "+t.toString()),Ye(s)}}}/**
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
 */const Za="repo_interrupt",Ya=25;class Qa{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ja,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=gt(),this.transactionQueueTree_=new Vn,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Xa(n,e,t){if(n.stats_=bn(n.repoInfo_),n.forceRestClient_||qo())n.server_=new mt(n.repoInfo_,(s,i,r,o)=>{bs(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>ws(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{U(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new re(n.repoInfo_,e,(s,i,r,o)=>{bs(n,s,i,r,o)},s=>{ws(n,s)},s=>{ec(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Xo(n.repoInfo_,()=>new Ql(n.stats_,n.server_)),n.infoData_=new ql,n.infoSyncTree_=new Es({startListening:(s,i,r,o)=>{let l=[];const a=n.infoData_.getNode(s._path);return a.isEmpty()||(l=It(n.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Hn(n,"connected",!1),n.serverSyncTree_=new Es({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);ve(n.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function Ja(n){const t=n.infoData_.getNode(new N(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function cr(n){return Na({timestamp:Ja(n)})}function bs(n,e,t,s,i){n.dataUpdateCount++;const r=new N(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const a=lt(t,c=>j(c));o=ka(n.serverSyncTree_,r,a,i)}else{const a=j(t);o=Ma(n.serverSyncTree_,r,a,i)}else if(s){const a=lt(t,c=>j(c));o=Ra(n.serverSyncTree_,r,a)}else{const a=j(t);o=It(n.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=Wn(n,r)),ve(n.eventQueue_,l,o)}function ws(n,e){Hn(n,"connected",e),e===!1&&nc(n)}function ec(n,e){Q(e,(t,s)=>{Hn(n,t,s)})}function Hn(n,e,t){const s=new N("/.info/"+e),i=j(t);n.infoData_.updateSnapshot(s,i);const r=It(n.infoSyncTree_,s,i);ve(n.eventQueue_,s,r)}function tc(n){return n.nextWriteId_++}function nc(n){ur(n,"onDisconnectEvents");const e=cr(n),t=gt();Jt(n.onDisconnect_,L(),(i,r)=>{const o=Da(i,r,n.serverSyncTree_,e);xi(t,i,o)});let s=[];Jt(t,L(),(i,r)=>{s=s.concat(It(n.serverSyncTree_,i,r));const o=oc(n,i);Wn(n,o)}),n.onDisconnect_=gt(),ve(n.eventQueue_,L(),s)}function sc(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Za)}function ur(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),G(t,...e)}function hr(n,e,t){return Xi(n.serverSyncTree_,e,t)||S.EMPTY_NODE}function Fn(n,e=n.transactionQueueTree_){if(e||Mt(n,e),ke(e)){const t=fr(n,e);_(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&ic(n,Xe(e),t)}else rr(e)&&Rt(e,t=>{Fn(n,t)})}function ic(n,e,t){const s=t.map(c=>c.currentWriteId),i=hr(n,e,s);let r=i;const o=i.hash();for(let c=0;c<t.length;c++){const u=t[c];_(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Y(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;n.server_.put(a.toString(),l,c=>{ur(n,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<t.length;f++)t[f].status=2,u=u.concat(be(n.serverSyncTree_,t[f].currentWriteId)),t[f].onComplete&&h.push(()=>t[f].onComplete(null,!0,t[f].currentOutputSnapshotResolved)),t[f].unwatcher();Mt(n,xn(n.transactionQueueTree_,e)),Fn(n,n.transactionQueueTree_),ve(n.eventQueue_,e,u);for(let f=0;f<h.length;f++)Ye(h[f])}else{if(c==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{Z("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=c}Wn(n,e)}},o)}function Wn(n,e){const t=dr(n,e),s=Xe(t),i=fr(n,t);return rc(n,i,s),s}function rc(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=Y(t,a.path);let u=!1,h;if(_(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,i=i.concat(be(n.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Ya)u=!0,h="maxretry",i=i.concat(be(n.serverSyncTree_,a.currentWriteId,!0));else{const f=hr(n,a.path,o);a.currentInputSnapshot=f;const m=e[l].update(f.val());if(m!==void 0){ar("transaction failed: Data returned ",m,a.path);let d=j(m);typeof m=="object"&&m!=null&&le(m,".priority")||(d=d.updatePriority(f.getPriority()));const g=a.currentWriteId,b=cr(n),I=Va(d,f,b);a.currentOutputSnapshotRaw=d,a.currentOutputSnapshotResolved=I,a.currentWriteId=tc(n),o.splice(o.indexOf(g),1),i=i.concat(Aa(n.serverSyncTree_,a.path,I,a.currentWriteId,a.applyLocally)),i=i.concat(be(n.serverSyncTree_,g,!0))}else u=!0,h="nodata",i=i.concat(be(n.serverSyncTree_,a.currentWriteId,!0))}ve(n.eventQueue_,t,i),i=[],u&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}Mt(n,n.transactionQueueTree_);for(let l=0;l<s.length;l++)Ye(s[l]);Fn(n,n.transactionQueueTree_)}function dr(n,e){let t,s=n.transactionQueueTree_;for(t=C(e);t!==null&&ke(s)===void 0;)s=xn(s,t),e=M(e),t=C(e);return s}function fr(n,e){const t=[];return pr(n,e,t),t.sort((s,i)=>s.order-i.order),t}function pr(n,e,t){const s=ke(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);Rt(e,i=>{pr(n,i,t)})}function Mt(n,e){const t=ke(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,ir(e,t.length>0?t:void 0)}Rt(e,s=>{Mt(n,s)})}function oc(n,e){const t=Xe(dr(n,e)),s=xn(n.transactionQueueTree_,e);return Ha(s,i=>{Ft(n,i)}),Ft(n,s),or(s,i=>{Ft(n,i)}),t}function Ft(n,e){const t=ke(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(_(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(_(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(be(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?ir(e,void 0):t.length=r+1,ve(n.eventQueue_,Xe(e),i);for(let o=0;o<s.length;o++)Ye(s[o])}}/**
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
 */function lc(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function ac(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Z(`Invalid query segment '${t}' in query '${n}'`)}return e}const Ss=function(n,e){const t=cc(n),s=t.namespace;t.domain==="firebase.com"&&pe(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&pe("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Ho();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Zo(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new N(t.pathString)}},cc=function(n){let e="",t="",s="",i="",r="",o=!0,l="https",a=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(l=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(u,h)),u<h&&(i=lc(n.substring(u,h)));const f=ac(n.substring(Math.min(n.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const m=e.slice(0,c);if(m.toLowerCase()==="localhost")t="localhost";else if(m.split(".").length<=2)t=m;else{const d=e.indexOf(".");s=e.substring(0,d).toLowerCase(),t=e.substring(d+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:a,domain:t,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
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
 */class Un{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return v(this._path)?null:Ii(this._path)}get ref(){return new Ne(this._repo,this._path)}get _queryIdentifier(){const e=us(this._queryParams),t=En(e);return t==="{}"?"default":t}get _queryObject(){return us(this._queryParams)}isEqual(e){if(e=Vr(e),!(e instanceof Un))return!1;const t=this._repo===e._repo,s=Mi(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+El(this._path)}}class Ne extends Un{constructor(e,t){super(e,t,new In,!1)}get parent(){const e=Ri(this._path);return e===null?null:new Ne(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}La(Ne);Ia(Ne);/**
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
 */const uc="FIREBASE_DATABASE_EMULATOR_HOST",an={};let hc=!1;function dc(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||pe("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),G("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Ss(r,i),l=o.repoInfo,a,c;typeof process<"u"&&{}&&(c={}[uc]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=Ss(r,i),l=o.repoInfo):a=!o.repoInfo.secure;const u=i&&a?new Yt(Yt.OWNER):new Ko(n.name,n.options,e);Ga("Invalid Firebase Database URL",o),v(o.path)||pe("Database URL must point to the root of a Firebase Database (not including a child path).");const h=pc(l,n,u,new zo(n.name,t));return new _c(h,n)}function fc(n,e){const t=an[e];(!t||t[n.key]!==n)&&pe(`Database ${e}(${n.repoInfo_}) has already been deleted.`),sc(n),delete t[n.key]}function pc(n,e,t,s){let i=an[e.name];i||(i={},an[e.name]=i);let r=i[n.toURLString()];return r&&pe("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Qa(n,hc,t,s),i[n.toURLString()]=r,r}class _c{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Xa(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ne(this._repo,L())),this._rootInternal}_delete(){return this._rootInternal!==null&&(fc(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&pe("Cannot call "+e+" on a deleted database.")}}/**
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
 */function mc(n){Po(Hr),$t(new Bt("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return dc(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),Gt(qn,zn,n),Gt(qn,zn,"esm2017")}re.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};re.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};mc();/**
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
*/const gc=new Map,yc={activated:!1,tokenObservers:[]};function ne(n){return gc.get(n)||Object.assign({},yc)}const Ls={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class vc{constructor(e,t,s,i,r){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=s,this.lowerBound=i,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=i,i>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new at,await Cc(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new at,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(t){this.retryPolicy(t)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const t=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),t}}}function Cc(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */const Ec={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Et=new Wr("appCheck","AppCheck",Ec);function Tc(n){if(!ne(n).activated)throw Et.create("use-before-activation",{appName:n.name})}/**
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
 */const bc="firebase-app-check-database",wc=1,cn="firebase-app-check-store";let st=null;function Sc(){return st||(st=new Promise((n,e)=>{var t;try{const s=indexedDB.open(bc,wc);s.onsuccess=i=>{n(i.target.result)},s.onerror=i=>{var r;e(Et.create("storage-open",{originalErrorMessage:(r=i.target.error)===null||r===void 0?void 0:r.message}))},s.onupgradeneeded=i=>{const r=i.target.result;switch(i.oldVersion){case 0:r.createObjectStore(cn,{keyPath:"compositeKey"})}}}catch(s){e(Et.create("storage-open",{originalErrorMessage:(t=s)===null||t===void 0?void 0:t.message}))}}),st)}function Lc(n,e){return Ic(Ac(n),e)}async function Ic(n,e){const s=(await Sc()).transaction(cn,"readwrite"),r=s.objectStore(cn).put({compositeKey:n,value:e});return new Promise((o,l)=>{r.onsuccess=a=>{o()},s.onerror=a=>{var c;l(Et.create("storage-set",{originalErrorMessage:(c=a.target.error)===null||c===void 0?void 0:c.message}))}})}function Ac(n){return`${n.options.appId}-${n.name}`}/**
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
 */const un=new Ws("@firebase/app-check");function Is(n,e){return Ur()?Lc(n,e).catch(t=>{un.warn(`Failed to write token to IndexedDB. Error: ${t}`)}):Promise.resolve()}/**
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
 */const Rc={error:"UNKNOWN_ERROR"};function Mc(n){return Us.encodeString(JSON.stringify(n),!1)}async function hn(n,e=!1){const t=n.app;Tc(t);const s=ne(t);let i=s.token,r;if(i&&!Fe(i)&&(s.token=void 0,i=void 0),!i){const a=await s.cachedTokenPromise;a&&(Fe(a)?i=a:await Is(t,void 0))}if(!e&&i&&Fe(i))return{token:i.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),i=await ne(t).exchangeTokenPromise}catch(a){a.code==="appCheck/throttled"?un.warn(a.message):un.error(a),r=a}let l;return i?r?Fe(i)?l={token:i.token,internalError:r}:l=Rs(r):(l={token:i.token},s.token=i,await Is(t,i)):l=Rs(r),o&&Pc(t,l),l}function kc(n,e,t,s){const{app:i}=n,r=ne(i),o={next:t,error:s,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&Fe(r.token)){const l=r.token;Promise.resolve().then(()=>{t({token:l.token}),As(n)}).catch(()=>{})}r.cachedTokenPromise.then(()=>As(n))}function _r(n,e){const t=ne(n),s=t.tokenObservers.filter(i=>i.next!==e);s.length===0&&t.tokenRefresher&&t.tokenRefresher.isRunning()&&t.tokenRefresher.stop(),t.tokenObservers=s}function As(n){const{app:e}=n,t=ne(e);let s=t.tokenRefresher;s||(s=Nc(n),t.tokenRefresher=s),!s.isRunning()&&t.isTokenAutoRefreshEnabled&&s.start()}function Nc(n){const{app:e}=n;return new vc(async()=>{const t=ne(e);let s;if(t.token?s=await hn(n,!0):s=await hn(n),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const t=ne(e);if(t.token){let s=t.token.issuedAtTimeMillis+(t.token.expireTimeMillis-t.token.issuedAtTimeMillis)*.5+3e5;const i=t.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,i),Math.max(0,s-Date.now())}else return 0},Ls.RETRIAL_MIN_WAIT,Ls.RETRIAL_MAX_WAIT)}function Pc(n,e){const t=ne(n).tokenObservers;for(const s of t)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function Fe(n){return n.expireTimeMillis-Date.now()>0}function Rs(n){return{token:Mc(Rc),error:n}}/**
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
 */class Oc{constructor(e,t){this.app=e,this.heartbeatServiceProvider=t}_delete(){const{tokenObservers:e}=ne(this.app);for(const t of e)_r(this.app,t.next);return Promise.resolve()}}function Dc(n,e){return new Oc(n,e)}function Vc(n){return{getToken:e=>hn(n,e),addTokenListener:e=>kc(n,"INTERNAL",e),removeTokenListener:e=>_r(n.app,e)}}const xc="@firebase/app-check",Hc="0.5.17",Fc="app-check",Ms="app-check-internal";function Wc(){$t(new Bt(Fc,n=>{const e=n.getProvider("app").getImmediate(),t=n.getProvider("heartbeat");return Dc(e,t)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((n,e,t)=>{n.getProvider(Ms).initialize()})),$t(new Bt(Ms,n=>{const e=n.getProvider("app-check").getImmediate();return Vc(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Gt(xc,Hc)}Wc();const mr=Symbol("firebaseApp");function kt(n){return yn()&&qs(mr,null)||$r(n)}const ie=()=>{};function $n(n,e){return e.split(".").reduce((t,s)=>t&&t[s],n)}function Uc(n,e,t){const s=(""+e).split("."),i=s.pop(),r=s.reduce((o,l)=>o&&o[l],n);if(r!=null)return Array.isArray(r)?r.splice(Number(i),1,t):r[i]=t}function ue(n){return n&&typeof n=="object"}function $c(n){return n.toDate}function Bn(n){return ue(n)&&n.type==="document"}function Bc(n){return ue(n)&&n.type==="collection"}function Gc(n){return Bn(n)||Bc(n)}function jc(n){return ue(n)&&n.type==="query"}function qc(n){return ue(n)&&"ref"in n}function zc(n){return ue(n)&&typeof n.bucket=="string"}function Kc(n,e){let t;return()=>{if(!t)return t=!0,n(e())}}function Zc(){return!!(yn()&&qs(io,null))}const it=new WeakMap;function gr(n,e){if(!it.has(n)){const t=zs(!0);it.set(n,t);const{unmount:s}=e;e.unmount=()=>{s.call(e),t.stop(),it.delete(n)}}return it.get(n)}const Wt=new WeakMap;function yr(n,e=kt()){return Wt.has(e)||Wt.set(e,n||{f:{},r:{},s:{},u:{}}),Wt.get(e)}function Yc(n,e,t){if(!n)return t;const[s,i]=vr(n);if(!s)return t;const r=yr()[s]||{},o=e||i;return o&&o in r?r[o]:t}function Qc(n,e,t){if(!n)return;const[s,i]=vr(n);if(!s)return;const r=yr()[s],o=e||i;if(o)return t.then(l=>{r[o]=l}),o}function vr(n){return Gc(n)||jc(n)?["f",n.path]:qc(n)?["r",n.toString()]:zc(n)?["s",n.toString()]:[]}const Ut=new WeakMap;function Xc(n,e,t){const s=kt();Ut.has(s)||Ut.set(s,new Map);const i=Ut.get(s),r=Qc(e,t,n);return r?i.set(r,n):console.warn("[VueFire SSR]: Could not get the path of the data source"),r?()=>i.delete(r):ie}const He=new WeakMap,Jc={bindName:"$firestoreBind",unbindName:"$firestoreUnbind"},eu=function(e,t,s){const i=Object.assign({},Jc,t),{bindName:r,unbindName:o}=i,l=e.config.globalProperties;l[o]=function(c,u){cu(c,He.get(this),u),delete this.$firestoreRefs[c]},l[r]=function(c,u,h){const f=Object.assign({},i,h),m=Jr(this.$data,c);He.has(this)||He.set(this,{});const d=He.get(this);d[c]&&d[c](f.reset);const p=gr(s||kt(),e).run(()=>zs()),{promise:g,stop:b}=p.run(()=>au(u,{target:m,...f})),I=T=>{b(T),p.stop()};return d[c]=I,this.$firestoreRefs[c]=u,g.value},e.mixin({beforeCreate(){this.$firestoreRefs=Object.create(null)},created(){const{firestore:a}=this.$options,c=typeof a=="function"?a.call(this):a;if(!!c)for(const u in c)this[r](u,c[u],i)},beforeUnmount(){const a=He.get(this);if(a)for(const c in a)a[c]();this.$firestoreRefs=null}})};function tu(n){return(e,t)=>eu(t,n,e)}const nu={toFirestore(n){return n},fromFirestore(n,e){return n.exists()?Object.defineProperties(n.data(e),{id:{value:n.id}}):null}};function dn(n,e,t){if(!ue(n))return[n,{}];const s=[{},{}],i=Object.keys(t).reduce((o,l)=>{const a=t[l];return o[a.path]=a.data(),o},{});function r(o,l,a,c){l=l||{};const[u,h]=c;Object.getOwnPropertyNames(o).forEach(f=>{const m=Object.getOwnPropertyDescriptor(o,f);m&&!m.enumerable&&Object.defineProperty(u,f,m)});for(const f in o){const m=o[f];if(m==null||m instanceof Date||$c(m)||su(m))u[f]=m;else if(Bn(m))u[f]=typeof l=="object"&&f in l&&typeof l[f]!="string"?l[f]:m.path,h[a+f]=m;else if(Array.isArray(m)){u[f]=Array(m.length);for(let d=0;d<m.length;d++){const p=m[d];p&&p.path in i&&(u[f][d]=i[p.path])}r(m,l[f]||u[f],a+f+".",[u[f],h])}else ue(m)?(u[f]={},r(m,l[f],a+f+".",[u[f],h])):u[f]=m}}return r(n,e,"",s),s}function su(n){return ue(n)&&"latitude"in n&&"longitude"in n}const Gn={reset:!1,wait:!0,maxRefDepth:2,converter:nu};function Tt(n){for(const e in n)n[e].unsub()}function fn(n,e,t,s,i,r,o,l,a){const[c,u]=dn(s.data(),$n(e,t),i);r.set(e,t,c),pn(n,e,t,i,u,r,o,l,a)}function iu({ref:n,target:e,path:t,depth:s,resolve:i,reject:r,ops:o},l){const a=Object.create(null);let c=ie;return l.once?gn(n).then(u=>{u.exists()?fn(l,e,t,u,a,o,s,i,r):(o.set(e,t,null),i())}):c=wt(n,u=>{u.exists()?fn(l,e,t,u,a,o,s,i,r):(o.set(e,t,null),i())}),()=>{c(),Tt(a)}}function pn(n,e,t,s,i,r,o,l,a){const c=Object.keys(i);if(Object.keys(s).filter(p=>c.indexOf(p)<0).forEach(p=>{s[p].unsub(),delete s[p]}),!c.length||++o>n.maxRefDepth)return l(t);let h=0;const f=c.length,m=Object.create(null);function d(p){p in m&&++h>=f&&l(t)}c.forEach(p=>{const g=s[p],b=i[p],I=`${t}.${p}`;if(m[I]=!0,g)if(g.path!==b.path)g.unsub();else return;s[p]={data:()=>$n(e,I),unsub:iu({ref:b,target:e,path:I,depth:o,ops:r,resolve:d.bind(null,I),reject:a},n),path:b.path}})}function ru(n,e,t,s,i,r){const o=Object.assign({},Gn,r),{snapshotListenOptions:l,snapshotOptions:a,wait:c,once:u}=o,h="value";let f=we(c?[]:n.value);c||t.set(n,h,[]);const m=s;let d,p=ie;const g=[],b={added:({newIndex:T,doc:y})=>{g.splice(T,0,Object.create(null));const P=g[T],[D,z]=dn(y.data(a),void 0,P);t.add(V(f),T,D),pn(o,f,`${h}.${T}`,P,z,t,0,s.bind(null,y),i)},modified:({oldIndex:T,newIndex:y,doc:P})=>{const D=V(f),z=g[T],B=D[T],[Sr,Lr]=dn(P.data(a),B,z);g.splice(y,0,z),t.remove(D,T),t.add(D,y,Sr),pn(o,f,`${h}.${y}`,z,Lr,t,0,s,i)},removed:({oldIndex:T})=>{const y=V(f);t.remove(y,T),Tt(g.splice(T,1)[0])}};function I(T){const y=T.docChanges(l);if(!d&&y.length){d=!0;let P=0;const D=y.length,z=Object.create(null);for(let B=0;B<D;B++)z[y[B].doc.id]=!0;s=B=>{B&&B.id in z&&++P>=D&&(c&&(t.set(n,h,V(f)),f=n),m(V(f)),s=ie)}}y.forEach(P=>{b[P.type](P)}),y.length||(c&&(t.set(n,h,V(f)),f=n),s(V(f)))}return u?zr(e).then(I).catch(i):p=wt(e,I,i),T=>{if(p(),T){const y=typeof T=="function"?T():[];t.set(n,h,y)}g.forEach(Tt)}}function ou(n,e,t,s,i,r){const o=Object.assign({},Gn,r),l="value",a=Object.create(null);s=Kc(s,()=>$n(n,l));let c=ie;function u(h){h.exists()?fn(o,n,l,h,a,t,0,s,i):(t.set(n,l,null),s(null))}return o.once?gn(e).then(u).catch(i):c=wt(e,u,i),h=>{if(c(),h){const f=typeof h=="function"?h():null;t.set(n,l,f)}Tt(a)}}const lu={set:(n,e,t)=>Uc(n,e,t),add:(n,e,t)=>n.splice(e,0,t),remove:(n,e)=>n.splice(e,1)};function au(n,e){let t=ie;const s=Object.assign({},Gn,e),i=V(n);Zc()&&(s.once=!0);const r=s.target||we();r.value=Yc(i,s.ssrKey,r.value);const o=we(!0),l=we(),a=eo(),c=ro();let u=ie;function h(){let d=V(n);const p=new Promise((g,b)=>{if(t(s.reset),!d)return t=ie,g(null);d.converter||(d=d.withConverter(s.converter)),t=(Bn(d)?ou:ru)(r,d,lu,g,b,s)});a.value=p,p.catch(g=>{l.value=g}).finally(()=>{o.value=!1})}let f=ie;Ks(n)?f=to(n,h,{immediate:!0}):h(),i&&(u=Xc(a.value,i,s.ssrKey)),c&&(no(m),yn()&&so(()=>a.value));function m(d=s.reset){f(),u(),t(d)}return Object.defineProperties(r,{error:{get:()=>l},data:{get:()=>r},pending:{get:()=>o},promise:{get:()=>a},stop:{get:()=>m}})}function cu(n,e,t){e&&e[n]&&(e[n](t),delete e[n])}const uu=new WeakMap,rt=new WeakMap;function Cr(){const n=kt();if(!rt.has(n)){let e;const s=[new Promise(i=>{e=i}),i=>{rt.set(n,i),e(i.value)}];rt.set(n,s)}return rt.get(n)}function hu(){const n=Cr();return Array.isArray(n)?n[0]:Promise.resolve(n.value)}function du(n,e){const t=Gs(e);Xr(t,s=>{const i=Cr();n.value=s,Array.isArray(i)&&i[1](n)})}function fu(n){return n!=null&&console.warn(`Did you forget to call the VueFireAuth function? It should look like
modules: [VueFireAuth()]`),(e,t)=>{const s=gr(e,t).run(()=>we());uu.set(e,s),du(s,e)}}function pu(n,{firebaseApp:e,modules:t=[]}){n.provide(mr,e);for(const s of t)n.use(s.bind(null,e))}const _u="modulepreload",mu=function(n){return"/VueSienna/"+n},ks={},w=function(e,t,s){if(!t||t.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(t.map(r=>{if(r=mu(r),r in ks)return;ks[r]=!0;const o=r.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(!!s)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===r&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${l}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":_u,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())},$=(n,e)=>{const t=n.__vccOpts||n;for(const[s,i]of e)t[s]=i;return t},gu={__name:"SplitRightCol",props:{right:{type:Boolean,default:!1},col:{type:[Number,String],default:6}},setup(n){const e=n;let{smAndDown:t}=Js(),s=oo({colOrder:ct(()=>!e.right||!t?"12":"-1"),md:ct(()=>12-e.col)});return(i,r)=>(k(),O(ei,Zs({class:"split-col-img"},{...V(s)},{cols:"12"}),{default:A(()=>[oe(i.$slots,"default")]),_:3},16))}},yu=$(gu,[["__file","C:/webProjects/v-test/src/@core/components/base-split-view/SplitRightCol.vue"]]),vu={__name:"SplitImage",props:{src:{type:String,default:""}},setup(n){return(e,t)=>(k(),O(yo,{cover:"",src:n.src},{default:A(()=>[oe(e.$slots,"default")]),_:3},8,["src"]))}},Cu=$(vu,[["__file","C:/webProjects/v-test/src/@core/components/base-split-view/SplitImage.vue"]]),Eu={__name:"SplitLeftCol",props:{col:{type:[Number,String],default:6}},setup(n){let{mdAndDown:e}=Js();return(t,s)=>(k(),O(ei,{md:V(e)?12:n.col,cols:"12"},{default:A(()=>[x(ti,{fluid:"",class:"px-11"},{default:A(()=>[oe(t.$slots,"default")]),_:3})]),_:3},8,["md"]))}},Tu=$(Eu,[["__file","C:/webProjects/v-test/src/@core/components/base-split-view/SplitLeftCol.vue"]]),bu={align:"center",class:"fill-height","no-gutters":!0,style:"overflow-x: hidden"},wu={};function Su(n,e){const t=Tu,s=Cu,i=yu;return k(),O(vo,Je(et(V(bu))),{default:A(()=>[x(t,Je(et(n.$attrs)),{default:A(()=>[oe(n.$slots,"default")]),_:3},16),x(i,Je(et(n.$attrs)),{default:A(()=>[x(s,Je(et(n.$attrs)),{default:A(()=>[oe(n.$slots,"image-content")]),_:3},16)]),_:3},16)]),_:3},16)}const Lu=$(wu,[["render",Su],["__file","C:/webProjects/v-test/src/@core/components/base-split-view/SplitView.vue"]]),Iu="/VueSienna/bgCode.png",Au={},Ru=ut("div",{class:"home-landing-img-wrap"},[ut("img",{style:{width:"50vw"},src:Iu})],-1);function Mu(n,e){const t=Lu;return k(),O(t,{col:"6",src:"x2.svg"},{"image-content":A(()=>[Ru]),default:A(()=>[oe(n.$slots,"default")]),_:3})}const ku=$(Au,[["render",Mu],["__file","C:/webProjects/v-test/src/pages/homepage/components/HomeLanding.vue"]]),Nu={class:"subtitle pt-5"},Pu={__name:"HomeSubtitle",setup(n){return(e,t)=>(k(),St("h2",Zs({style:{color:"#adbac7"}},{...V(Nu)}),[oe(e.$slots,"default")],16))}},Ou=$(Pu,[["__file","C:/webProjects/v-test/src/pages/homepage/components/HomeSubtitle.vue"]]);const Du={},Vu={class:"main-title font-weight-black"};function xu(n,e){return k(),St("h2",Vu,[oe(n.$slots,"default")])}const Hu=$(Du,[["render",xu],["__file","C:/webProjects/v-test/src/@core/components/GradientTitle.vue"]]);const Fu={__name:"SkriptagTitle",props:{small:{type:Boolean,default:!0},large:{type:Boolean,default:!1},appbar:{type:Boolean,default:!1},glow:{type:Boolean,default:!1},link:{type:Boolean,default:!1}},setup(n){const e=n;let t=ct(()=>{if(e.small)return"h2"});return(s,i)=>(k(),O(vn(V(t)),{onClick:i[0]||(i[0]=r=>s.$router.push("/")),class:Nt({"text-white":!n.large&&n.appbar,"skriptag-logo-link":n.link,"skriptag-glow":n.glow})},{default:A(()=>[oe(s.$slots,"text",{},void 0,!0),ut("span",{class:Nt({large:n.large})},[Be("Skript"),ut("span",{class:Nt({"skriptag-a":!n.appbar,"skriptag-a-appbar":n.appbar})},"\xE2",2),Be("g")],2)]),_:3},8,["class"]))}},Er=$(Fu,[["__scopeId","data-v-0977207d"],["__file","C:/webProjects/v-test/src/@core/components/SkriptagTitle.vue"]]),Wu={};function Uu(n,e){return k(),O(Eo,{icon:"$mdiGithub",class:"mb-2",color:"primary","text-color":"white",border:"",href:"https://github.com/santiagoaloi/VueSienna",target:"_blank"},{default:A(()=>[x(Co,{start:"",icon:"$mdiGithub"}),Be(" v1.0.1 ")]),_:1})}const $u=$(Wu,[["render",Uu],["__file","C:/webProjects/v-test/src/@core/components/SkriptagGithub.vue"]]),Bu=lo({name:"Homepage"});function Gu(n,e,t,s,i,r){const o=$u,l=Er,a=Hu,c=Ou,u=ku;return k(),O(u,null,{default:A(()=>[x(o),x(l,{glow:"",large:"",class:"mb-2"}),x(a,{innerHTML:"Make the best app you've ever made."},null,8,["innerHTML"]),x(c,null,{default:A(()=>[Be(" Get consultancy , learn coding, download free and premium application templates, access JS/VueJS training material and participate in blogs. ")]),_:1})]),_:1})}const ju=$(Bu,[["render",Gu],["__file","C:/webProjects/v-test/src/pages/homepage/index.vue"]]),qu=()=>w(()=>import("./TableMultiple.43ac1b7b.js"),["assets/TableMultiple.43ac1b7b.js","assets/BaseTable.428e5d3d.js","assets/BaseBtn.0d2c5793.js","assets/vue.ea012b77.js","assets/vuetify.603efe34.js","assets/vuetify.bdde561b.css","assets/BaseTable.264ee801.css","assets/route-block.78efdbad.js","assets/firebase-app.89ad7201.js","assets/firebase-storage.f52a0a49.js","assets/firebase-functions.8ee4e55f.js","assets/firebase-firestore.b9d472db.js","assets/firebase-auth.2fc90a2c.js"]),zu=()=>w(()=>import("./Table.faf09ec7.js"),["assets/Table.faf09ec7.js","assets/BaseTable.428e5d3d.js","assets/BaseBtn.0d2c5793.js","assets/vue.ea012b77.js","assets/vuetify.603efe34.js","assets/vuetify.bdde561b.css","assets/BaseTable.264ee801.css","assets/route-block.78efdbad.js","assets/firebase-app.89ad7201.js","assets/firebase-storage.f52a0a49.js","assets/firebase-functions.8ee4e55f.js","assets/firebase-firestore.b9d472db.js","assets/firebase-auth.2fc90a2c.js"]),Ku=()=>w(()=>import("./SimpleArrayPagination.35dc2375.js"),["assets/SimpleArrayPagination.35dc2375.js","assets/vue.ea012b77.js","assets/route-block.78efdbad.js","assets/vuetify.603efe34.js","assets/vuetify.bdde561b.css","assets/firebase-app.89ad7201.js","assets/firebase-storage.f52a0a49.js","assets/firebase-functions.8ee4e55f.js","assets/firebase-firestore.b9d472db.js","assets/firebase-auth.2fc90a2c.js"]),Zu=()=>w(()=>import("./ShakeElement.3fc0c9ac.js"),["assets/ShakeElement.3fc0c9ac.js","assets/BaseBtn.0d2c5793.js","assets/vue.ea012b77.js","assets/vuetify.603efe34.js","assets/vuetify.bdde561b.css","assets/route-block.78efdbad.js","assets/firebase-app.89ad7201.js","assets/firebase-storage.f52a0a49.js","assets/firebase-functions.8ee4e55f.js","assets/firebase-firestore.b9d472db.js","assets/firebase-auth.2fc90a2c.js","assets/ShakeElement.68012ee4.css"]),Yu=()=>w(()=>import("./RatingSlides.13210f37.js"),["assets/RatingSlides.13210f37.js","assets/vue.ea012b77.js","assets/route-block.78efdbad.js","assets/vuetify.603efe34.js","assets/vuetify.bdde561b.css","assets/firebase-app.89ad7201.js","assets/firebase-storage.f52a0a49.js","assets/firebase-functions.8ee4e55f.js","assets/firebase-firestore.b9d472db.js","assets/firebase-auth.2fc90a2c.js"]),Qu=()=>w(()=>import("./RatingCardOverview.8146cfed.js"),["assets/RatingCardOverview.8146cfed.js","assets/vue.ea012b77.js","assets/route-block.78efdbad.js","assets/vuetify.603efe34.js","assets/vuetify.bdde561b.css","assets/firebase-app.89ad7201.js","assets/firebase-storage.f52a0a49.js","assets/firebase-functions.8ee4e55f.js","assets/firebase-firestore.b9d472db.js","assets/firebase-auth.2fc90a2c.js"]),Xu=()=>w(()=>import("./OverlayOpacity.c249cd24.js"),["assets/OverlayOpacity.c249cd24.js","assets/vue.ea012b77.js","assets/route-block.78efdbad.js","assets/vuetify.603efe34.js","assets/vuetify.bdde561b.css","assets/firebase-app.89ad7201.js","assets/firebase-storage.f52a0a49.js","assets/firebase-functions.8ee4e55f.js","assets/firebase-firestore.b9d472db.js","assets/firebase-auth.2fc90a2c.js","assets/OverlayOpacity.667676ff.css"]),Ju=()=>w(()=>import("./LazyScrollListFakeData.aabfc5b0.js"),["assets/LazyScrollListFakeData.aabfc5b0.js","assets/vue.ea012b77.js","assets/route-block.78efdbad.js","assets/vuetify.603efe34.js","assets/vuetify.bdde561b.css","assets/firebase-app.89ad7201.js","assets/firebase-storage.f52a0a49.js","assets/firebase-functions.8ee4e55f.js","assets/firebase-firestore.b9d472db.js","assets/firebase-auth.2fc90a2c.js","assets/LazyScrollListFakeData.fc9e89b7.css"]),eh=()=>w(()=>import("./LazyScrollList.0dec6476.js"),["assets/LazyScrollList.0dec6476.js","assets/vue.ea012b77.js","assets/route-block.78efdbad.js","assets/vuetify.603efe34.js","assets/vuetify.bdde561b.css","assets/firebase-app.89ad7201.js","assets/firebase-storage.f52a0a49.js","assets/firebase-functions.8ee4e55f.js","assets/firebase-firestore.b9d472db.js","assets/firebase-auth.2fc90a2c.js"]),th=()=>w(()=>import("./LazyScrollCards.3b878521.js"),["assets/LazyScrollCards.3b878521.js","assets/vue.ea012b77.js","assets/route-block.78efdbad.js","assets/vuetify.603efe34.js","assets/vuetify.bdde561b.css","assets/firebase-app.89ad7201.js","assets/firebase-storage.f52a0a49.js","assets/firebase-functions.8ee4e55f.js","assets/firebase-firestore.b9d472db.js","assets/firebase-auth.2fc90a2c.js"]),nh=()=>w(()=>import("./Finance.397cd337.js"),["assets/Finance.397cd337.js","assets/vue.ea012b77.js","assets/route-block.78efdbad.js","assets/vuetify.603efe34.js","assets/vuetify.bdde561b.css","assets/firebase-app.89ad7201.js","assets/firebase-storage.f52a0a49.js","assets/firebase-functions.8ee4e55f.js","assets/firebase-firestore.b9d472db.js","assets/firebase-auth.2fc90a2c.js"]),sh=()=>w(()=>import("./Collective.16d4e610.js"),["assets/Collective.16d4e610.js","assets/vue.ea012b77.js","assets/route-block.78efdbad.js","assets/vuetify.603efe34.js","assets/vuetify.bdde561b.css","assets/firebase-app.89ad7201.js","assets/firebase-storage.f52a0a49.js","assets/firebase-functions.8ee4e55f.js","assets/firebase-firestore.b9d472db.js","assets/firebase-auth.2fc90a2c.js","assets/Collective.35194139.css"]),ih=()=>w(()=>import("./CenterInputText.c3f35cff.js"),["assets/CenterInputText.c3f35cff.js","assets/vue.ea012b77.js","assets/route-block.78efdbad.js","assets/vuetify.603efe34.js","assets/vuetify.bdde561b.css","assets/firebase-app.89ad7201.js","assets/firebase-storage.f52a0a49.js","assets/firebase-functions.8ee4e55f.js","assets/firebase-firestore.b9d472db.js","assets/firebase-auth.2fc90a2c.js"]),rh=()=>w(()=>import("./AutocompleteEndlessScroll.0fd5a0c1.js"),["assets/AutocompleteEndlessScroll.0fd5a0c1.js","assets/vue.ea012b77.js","assets/route-block.78efdbad.js","assets/vuetify.603efe34.js","assets/vuetify.bdde561b.css","assets/firebase-app.89ad7201.js","assets/firebase-storage.f52a0a49.js","assets/firebase-functions.8ee4e55f.js","assets/firebase-firestore.b9d472db.js","assets/firebase-auth.2fc90a2c.js"]),oh=()=>w(()=>import("./AutocompleteCustomTwo.b593c84d.js"),["assets/AutocompleteCustomTwo.b593c84d.js","assets/vue.ea012b77.js","assets/route-block.78efdbad.js","assets/vuetify.603efe34.js","assets/vuetify.bdde561b.css","assets/firebase-app.89ad7201.js","assets/firebase-storage.f52a0a49.js","assets/firebase-functions.8ee4e55f.js","assets/firebase-firestore.b9d472db.js","assets/firebase-auth.2fc90a2c.js"]),lh=()=>w(()=>import("./AutoCompleteCustomOne.5593d8c5.js"),["assets/AutoCompleteCustomOne.5593d8c5.js","assets/vue.ea012b77.js","assets/route-block.78efdbad.js","assets/vuetify.603efe34.js","assets/vuetify.bdde561b.css","assets/firebase-app.89ad7201.js","assets/firebase-storage.f52a0a49.js","assets/firebase-functions.8ee4e55f.js","assets/firebase-firestore.b9d472db.js","assets/firebase-auth.2fc90a2c.js"]),ah=()=>w(()=>import("./PublicProfile.9dcefd9f.js"),["assets/PublicProfile.9dcefd9f.js","assets/vue.ea012b77.js","assets/vuetify.603efe34.js","assets/vuetify.bdde561b.css","assets/firebase-app.89ad7201.js","assets/firebase-storage.f52a0a49.js","assets/firebase-functions.8ee4e55f.js","assets/firebase-firestore.b9d472db.js","assets/firebase-auth.2fc90a2c.js"]),ch=()=>w(()=>import("./Overview.1c5e512c.js"),["assets/Overview.1c5e512c.js","assets/vue.ea012b77.js","assets/vuetify.603efe34.js","assets/vuetify.bdde561b.css","assets/firebase-app.89ad7201.js","assets/firebase-storage.f52a0a49.js","assets/firebase-functions.8ee4e55f.js","assets/firebase-firestore.b9d472db.js","assets/firebase-auth.2fc90a2c.js"]),uh=()=>w(()=>import("./Playground.0ed97f76.js"),["assets/Playground.0ed97f76.js","assets/vue.ea012b77.js","assets/vuetify.603efe34.js","assets/vuetify.bdde561b.css","assets/firebase-app.89ad7201.js","assets/firebase-storage.f52a0a49.js","assets/firebase-functions.8ee4e55f.js","assets/firebase-firestore.b9d472db.js","assets/firebase-auth.2fc90a2c.js"]),hh=()=>w(()=>import("./Login.e5b4b5c1.js"),["assets/Login.e5b4b5c1.js","assets/BaseBtn.0d2c5793.js","assets/vue.ea012b77.js","assets/vuetify.603efe34.js","assets/vuetify.bdde561b.css","assets/firebase-app.89ad7201.js","assets/firebase-storage.f52a0a49.js","assets/firebase-functions.8ee4e55f.js","assets/firebase-firestore.b9d472db.js","assets/firebase-auth.2fc90a2c.js"]),dh=()=>w(()=>import("./_...all_.0e48d919.js"),["assets/_...all_.0e48d919.js","assets/vue.ea012b77.js","assets/firebase-app.89ad7201.js","assets/firebase-storage.f52a0a49.js","assets/firebase-functions.8ee4e55f.js","assets/firebase-firestore.b9d472db.js","assets/firebase-auth.2fc90a2c.js","assets/vuetify.603efe34.js","assets/vuetify.bdde561b.css"]),fh=[{name:"playground-TableMultiple",path:"/playground/tablemultiple",component:qu,props:!0,meta:{title:"Base table (multiple)",description:"Tryout of multiple custom-made base table component.",icon:"$mdiTable"}},{name:"playground-Table",path:"/playground/table",component:zu,props:!0,meta:{title:"Base table",description:"Tryout of custom-made base table component.",icon:"$mdiTable"}},{name:"playground-SimpleArrayPagination",path:"/playground/simplearraypagination",component:Ku,props:!0,meta:{title:"Pagination - Array of objects",description:"Simple array pagination.",icon:"$mdiFormDropdown"}},{name:"playground-ShakeElement",path:"/playground/shakeelement",component:Zu,props:!0,meta:{title:"Shake window",description:"Shake window on wrong auth credentials validation.",icon:"$mdiWindowMaximize"}},{name:"playground-RatingSlides",path:"/playground/ratingslides",component:Yu,props:!0,meta:{title:"Rating component 2 (slides)",description:"Mockup rating cards slider to be used in official vuetify docs site.",icon:"$mdiStar"}},{name:"playground-RatingCardOverview",path:"/playground/ratingcardoverview",component:Qu,props:!0,meta:{title:"Rating component 1 (card)",description:"Mockup rating card to be used in official vuetify docs site.",icon:"$mdiStar"}},{name:"playground-OverlayOpacity",path:"/playground/overlayopacity",component:Xu,props:!0,meta:{title:"Overlay - Opacity",description:"Playing  with opacity",icon:null}},{name:"playground-LazyScrollListFakeData",path:"/playground/lazyscrolllistfakedata",component:Ju,props:!0,meta:{title:"Lazy scroll (list - fake data)",description:"Tryout of lazy loading list items."}},{name:"playground-LazyScrollList",path:"/playground/lazyscrolllist",component:eh,props:!0,meta:{title:"Lazy scroll (list - playground files)",description:"Tryout of lazy loading cards.",icon:"$mdiFormatLineWeight"}},{name:"playground-LazyScrollCards",path:"/playground/lazyscrollcards",component:th,props:!0,meta:{title:"Lazy scroll (cards - playground files)",description:"Tryout of lazy loading cards.",icon:"$mdiCardOutline"}},{name:"playground-Finance",path:"/playground/finance",component:nh,props:!0,meta:{title:"Payment Menthods - Finance",description:"Playing  with getters with fake finance data.",icon:"$mdiCurrencyUsd"}},{name:"playground-Collective",path:"/playground/collective",component:sh,props:!0,meta:{title:"Collective layout mockup",description:"Requested by John Leider.",icon:"$mdiCircleOutline"}},{name:"playground-CenterInputText",path:"/playground/centerinputtext",component:ih,props:!0,meta:{title:"Input text centered",description:"Attempt of centering the text inside the input component",icon:"$mdiFormDropdown"}},{name:"playground-AutocompleteEndlessScroll",path:"/playground/autocompleteendlessscroll",component:rh,props:!0,meta:{title:"Autocomplete - lazy loading scroll",description:"Lazy loading concept.",icon:"$mdiFormDropdown"}},{name:"playground-AutocompleteCustomTwo",path:"/playground/autocompletecustomtwo",component:oh,props:!0,meta:{title:"Autocomplete (Facu)",description:"Autocomplete demo on how to disable list items and clear field after item selection.",icon:"$mdiFormDropdown"}},{name:"playground-AutoCompleteCustomOne",path:"/playground/autocompletecustomone",component:lh,props:!0,meta:{title:"Autocomplete (Santi)",description:"Autocomplete demo on how to disable list items and clear field after item selection.",icon:"$mdiFormDropdown"}},{name:"account-PublicProfile",path:"/account/publicprofile",component:ah,props:!0,meta:{layout:"secure",requiresAuth:!0,fullPath:"/src/pages/@secure/account/public-profile/PublicProfile.vue"}},{name:"account-Overview",path:"/account/overview",component:ch,props:!0,meta:{layout:"secure",requiresAuth:!0,fullPath:"/src/pages/@secure/account/overview/Overview.vue"}},{name:"Playground",path:"/playground",component:uh,props:!0},{name:"Login",path:"/login",component:hh,props:!0},{name:"index",path:"/",component:ju,props:!0},{name:"all",path:"/:all(.*)*",component:dh,props:!0}],Pe=js("app",{state:()=>({drawer:!0,isRouting:null,currentTheme:"dark"}),persist:!0}),ph={};function _h(n,e){const t=Ys("router-view");return k(),O(To,{scrollable:""},{default:A(()=>[x(t,null,{default:A(({Component:s})=>[s?(k(),O(ni,{key:0,"leave-absolute":""},{default:A(()=>[(k(),O(ao,null,[(k(),O(Qs,null,{default:A(()=>[(k(),O(vn(s)))]),_:2},1024))],1024))]),_:2},1024)):Xs("v-if",!0)]),_:1})]),_:1})}const Tr=$(ph,[["render",_h],["__file","C:/webProjects/v-test/src/layouts/components/default/app-view/DAppView.vue"]]),mh=Object.freeze(Object.defineProperty({__proto__:null,default:Tr},Symbol.toStringTag,{value:"Module"})),gh={};function yh(n,e){const t=Tr;return k(),O(t)}const vh=$(gh,[["render",yh],["__file","C:/webProjects/v-test/src/layouts/default.vue"]]),Ch={default:vh,secure:()=>w(()=>import("./secure.7fe7a41c.js"),["assets/secure.7fe7a41c.js","assets/SAppView.50063c69.js","assets/vue.ea012b77.js","assets/vuetify.603efe34.js","assets/vuetify.bdde561b.css","assets/firebase-app.89ad7201.js","assets/firebase-storage.f52a0a49.js","assets/firebase-functions.8ee4e55f.js","assets/firebase-firestore.b9d472db.js","assets/firebase-auth.2fc90a2c.js","assets/SDrawer.2b6f5bff.js","assets/SDrawerNav.2d6e6228.js"]),"components/default/app-view/DAppView":()=>w(()=>Promise.resolve().then(()=>mh),void 0),"components/secure/app-bar/SAppBar":()=>w(()=>import("./SAppBar.5459b88a.js"),["assets/SAppBar.5459b88a.js","assets/SLoginBtn.652c7c00.js","assets/BaseBtn.0d2c5793.js","assets/vue.ea012b77.js","assets/vuetify.603efe34.js","assets/vuetify.bdde561b.css","assets/firebase-app.89ad7201.js","assets/firebase-storage.f52a0a49.js","assets/firebase-functions.8ee4e55f.js","assets/firebase-firestore.b9d472db.js","assets/firebase-auth.2fc90a2c.js"]),"components/secure/app-bar/SAppBarLogo":()=>w(()=>import("./SAppBarLogo.42e49783.js"),["assets/SAppBarLogo.42e49783.js","assets/vue.ea012b77.js","assets/vuetify.603efe34.js","assets/vuetify.bdde561b.css","assets/firebase-app.89ad7201.js","assets/firebase-storage.f52a0a49.js","assets/firebase-functions.8ee4e55f.js","assets/firebase-firestore.b9d472db.js","assets/firebase-auth.2fc90a2c.js"]),"components/secure/app-bar/SLoginBtn":()=>w(()=>import("./SLoginBtn.652c7c00.js"),["assets/SLoginBtn.652c7c00.js","assets/BaseBtn.0d2c5793.js","assets/vue.ea012b77.js","assets/vuetify.603efe34.js","assets/vuetify.bdde561b.css","assets/firebase-app.89ad7201.js","assets/firebase-storage.f52a0a49.js","assets/firebase-functions.8ee4e55f.js","assets/firebase-firestore.b9d472db.js","assets/firebase-auth.2fc90a2c.js"]),"components/secure/app-bar/SPlaygroundBtn":()=>w(()=>import("./SPlaygroundBtn.5f8fa5d8.js"),["assets/SPlaygroundBtn.5f8fa5d8.js","assets/BaseBtn.0d2c5793.js","assets/vue.ea012b77.js","assets/vuetify.603efe34.js","assets/vuetify.bdde561b.css","assets/firebase-app.89ad7201.js","assets/firebase-storage.f52a0a49.js","assets/firebase-functions.8ee4e55f.js","assets/firebase-firestore.b9d472db.js","assets/firebase-auth.2fc90a2c.js"]),"components/secure/app-drawer/SDrawer":()=>w(()=>import("./SDrawer.2b6f5bff.js"),["assets/SDrawer.2b6f5bff.js","assets/SDrawerNav.2d6e6228.js","assets/vue.ea012b77.js","assets/vuetify.603efe34.js","assets/vuetify.bdde561b.css","assets/firebase-app.89ad7201.js","assets/firebase-storage.f52a0a49.js","assets/firebase-functions.8ee4e55f.js","assets/firebase-firestore.b9d472db.js","assets/firebase-auth.2fc90a2c.js"]),"components/secure/app-drawer/SDrawerNav":()=>w(()=>import("./SDrawerNav.2d6e6228.js"),["assets/SDrawerNav.2d6e6228.js","assets/vue.ea012b77.js","assets/vuetify.603efe34.js","assets/vuetify.bdde561b.css","assets/firebase-app.89ad7201.js","assets/firebase-storage.f52a0a49.js","assets/firebase-functions.8ee4e55f.js","assets/firebase-firestore.b9d472db.js","assets/firebase-auth.2fc90a2c.js"]),"components/secure/app-view/SAppView":()=>w(()=>import("./SAppView.50063c69.js"),["assets/SAppView.50063c69.js","assets/vue.ea012b77.js","assets/vuetify.603efe34.js","assets/vuetify.bdde561b.css","assets/firebase-app.89ad7201.js","assets/firebase-storage.f52a0a49.js","assets/firebase-functions.8ee4e55f.js","assets/firebase-firestore.b9d472db.js","assets/firebase-auth.2fc90a2c.js"])};function Eh(n){return n.map(e=>{var t;return{path:e.path,component:Ch[((t=e.meta)==null?void 0:t.layout)||"default"],children:[{...e,path:""}]}})}const Ce=co({history:uo("/VueSienna/"),routes:[...Eh(fh),{name:"logout",path:"/logout"}],strict:!0,scrollBehavior:()=>({left:0,top:0})});Ce.beforeEach(async(n,e,t)=>{const s=await hu(),i=n.matched.some(l=>l.path==="/logout"),r=n.matched.some(l=>l.path==="/login"&&s),o=n.matched.some(l=>l.meta.requiresAuth);if(n.path!==e.path){const l=Pe();setTimeout(()=>{l.isRouting=!0},600),ht.start()}if(i){await dt().logout(),t({path:"/"});return}if(o&&!s){t({path:"/login"});return}if(r){t({path:"/account/overview"});return}t()});Ce.onError(()=>{const n=Pe();setTimeout(()=>{n.isRouting=!1},600)});Ce.afterEach((n,e,t)=>{const s=Pe();setTimeout(()=>{s.isRouting=!1},600),ht.done()});const Th=n=>n.use(Ce),bh=Object.freeze(Object.defineProperty({__proto__:null,install:Th,router:Ce},Symbol.toStringTag,{value:"Module"}));var wh=Object.defineProperty,Ns=Object.getOwnPropertySymbols,Sh=Object.prototype.hasOwnProperty,Lh=Object.prototype.propertyIsEnumerable,Ps=(n,e,t)=>e in n?wh(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Os=(n,e)=>{for(var t in e||(e={}))Sh.call(e,t)&&Ps(n,t,e[t]);if(Ns)for(var t of Ns(e))Lh.call(e,t)&&Ps(n,t,e[t]);return n};function Ih(n){return typeof n=="object"&&n!==null}function Ah(n){return n}function Ds(n,e){return n=Ih(n)?n:Object.create(null),new Proxy(n,{get(t,s,i){var r;return s==="key"?((r=e.key)!=null?r:Ah)(Reflect.get(t,s,i)):Reflect.get(t,s,i)||Reflect.get(e,s,i)}})}function Vs(n){return n!==null&&typeof n=="object"}function _n(n,e){const t=Array.isArray(n)&&Array.isArray(e),s=Vs(n)&&Vs(e);if(!t&&!s)throw new Error("Can only merge object with object or array with array");const i=t?[]:{};return[...Object.keys(n),...Object.keys(e)].forEach(o=>{Array.isArray(n[o])&&Array.isArray(e[o])?i[o]=[...Object.values(_n(n[o],e[o]))]:e[o]!==null&&typeof e[o]=="object"&&typeof n[o]=="object"?i[o]=_n(n[o],e[o]):n[o]!==void 0&&e[o]===void 0?i[o]=n[o]:n[o]===void 0&&e[o]!==void 0&&(i[o]=e[o])}),i}function xs(n,e){return e.reduce((t,s)=>s==="[]"&&Array.isArray(t)?t:t==null?void 0:t[s],n)}function Hs(n,e,t){const s=e.slice(0,-1).reduce((i,r)=>/^(__proto__)$/.test(r)?{}:i[r]=i[r]||{},n);if(Array.isArray(s[e[e.length-1]])&&Array.isArray(t)){const i=s[e[e.length-1]].map((r,o)=>Array.isArray(r)&&typeof r!="object"?[...r,...t[o]]:typeof r=="object"&&r!==null&&Object.keys(r).some(l=>Array.isArray(r[l]))?_n(r,t[o]):Os(Os({},r),t[o]));s[e[e.length-1]]=i}else e[e.length-1]===void 0&&Array.isArray(s)&&Array.isArray(t)?s.push(...t):s[e[e.length-1]]=t;return n}function br(n,e){return e.reduce((t,s)=>{const i=s.split(".");if(!i.includes("[]"))return Hs(t,i,xs(n,i));const r=i.indexOf("[]"),o=i.slice(0,r),l=i.slice(0,r+1),a=i.slice(r+1),c=xs(n,l),u=[];for(const h of c)a.length!==0&&(Array.isArray(h)||typeof h=="object")?u.push(br(h,[a.join(".")])):u.push(h);return Hs(t,o,u)},Array.isArray(n)?[]:{})}function Fs(n,e,t,s,i){try{const r=e==null?void 0:e.getItem(s);r&&n.$patch(t==null?void 0:t.deserialize(r))}catch(r){i&&console.error(r)}}function Rh(n={}){return e=>{const{options:{persist:t},store:s}=e;if(!t)return;const i=(Array.isArray(t)?t.map(r=>Ds(r,n)):[Ds(t,n)]).map(({storage:r=localStorage,beforeRestore:o=null,afterRestore:l=null,serializer:a={serialize:JSON.stringify,deserialize:JSON.parse},key:c=s.$id,paths:u=null,debug:h=!1})=>({storage:r,beforeRestore:o,afterRestore:l,serializer:a,key:c,paths:u,debug:h}));i.forEach(r=>{const{storage:o,serializer:l,key:a,paths:c,beforeRestore:u,afterRestore:h,debug:f}=r;u==null||u(e),Fs(s,o,l,a,f),h==null||h(e),s.$subscribe((m,d)=>{try{const p=Array.isArray(c)?br(d,c):d;o.setItem(a,l.serialize(p))}catch(p){f&&console.error(p)}},{detached:!0})}),s.$hydrate=({runHooks:r=!0}={})=>{i.forEach(o=>{const{beforeRestore:l,afterRestore:a,storage:c,serializer:u,key:h,debug:f}=o;r&&(l==null||l(e)),Fs(s,c,u,h,f),r&&(a==null||a(e))})}}}var Mh=Rh();const kh=n=>{const e=ho();e.use(({store:t})=>{t.router=fo(Ce)}),n.use(e),e.use(Mh)},Nh=Object.freeze(Object.defineProperty({__proto__:null,install:kh},Symbol.toStringTag,{value:"Module"}));function Ph(n){return function(...e){return n.apply(this,e.map(t=>V(t)))}}const Oh=Ph(console.log),Dh=n=>{n.use(pu,{firebaseApp:ze,modules:[fu(),tu()]}),Oh("VueFire initialized.")},Vh=Object.freeze(Object.defineProperty({__proto__:null,install:Dh},Symbol.toStringTag,{value:"Module"})),xh={dark:{dark:!0,colors:{primary:"#7b55c7",surface:"#1c2128","on-surface":"#ccc","appbar-background":"#1c2128","primary-button":"#373e47","on-surface-variant":"#242B33","text-field-background":"#2D333B","navigation-drawer":"#22272e","logout-btn":"#472e72"},variables:{"app-background":"#22272e","app-typography":"#adbac7","app-gradient-title-from":"#9898df","app-gradient-title-to":"#adbac7","app-skriptag-title":"#192430","theme-appbar-background-overlay-multiplier":"0.1"}},light:{dark:!1,colors:{primary:"#7b55c7",surface:"#f6fcff","on-surface":"#2c3b49","appbar-background":"#22272e","primary-button":"#223141","on-surface-variant":"#fff","text-field-background":"#e9eef5","on-background":"#2c3b49","logout-btn":"#22272e"},variables:{"app-background":"#eff3f8","app-typography":"#2c3b49","app-gradient-title-from":"#9898df","app-gradient-title-to":"#2c3b49","app-skriptag-title":"#192430","theme-appbar-background-overlay-multiplier":"0.1","theme-navigation-drawer-overlay-multiplier":"1"}}};var Hh="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z",Fh="M10 4A4 4 0 0 0 6 8A4 4 0 0 0 10 12A4 4 0 0 0 14 8A4 4 0 0 0 10 4M10 6A2 2 0 0 1 12 8A2 2 0 0 1 10 10A2 2 0 0 1 8 8A2 2 0 0 1 10 6M17 12C16.84 12 16.76 12.08 16.76 12.24L16.5 13.5C16.28 13.68 15.96 13.84 15.72 14L14.44 13.5C14.36 13.5 14.2 13.5 14.12 13.6L13.16 15.36C13.08 15.44 13.08 15.6 13.24 15.68L14.28 16.5V17.5L13.24 18.32C13.16 18.4 13.08 18.56 13.16 18.64L14.12 20.4C14.2 20.5 14.36 20.5 14.44 20.5L15.72 20C15.96 20.16 16.28 20.32 16.5 20.5L16.76 21.76C16.76 21.92 16.84 22 17 22H19C19.08 22 19.24 21.92 19.24 21.76L19.4 20.5C19.72 20.32 20.04 20.16 20.28 20L21.5 20.5C21.64 20.5 21.8 20.5 21.8 20.4L22.84 18.64C22.92 18.56 22.84 18.4 22.76 18.32L21.72 17.5V16.5L22.76 15.68C22.84 15.6 22.92 15.44 22.84 15.36L21.8 13.6C21.8 13.5 21.64 13.5 21.5 13.5L20.28 14C20.04 13.84 19.72 13.68 19.4 13.5L19.24 12.24C19.24 12.08 19.08 12 19 12H17M10 13C7.33 13 2 14.33 2 17V20H11.67C11.39 19.41 11.19 18.77 11.09 18.1H3.9V17C3.9 16.36 7.03 14.9 10 14.9C10.43 14.9 10.87 14.94 11.3 15C11.5 14.36 11.77 13.76 12.12 13.21C11.34 13.08 10.6 13 10 13M18.04 15.5C18.84 15.5 19.5 16.16 19.5 17.04C19.5 17.84 18.84 18.5 18.04 18.5C17.16 18.5 16.5 17.84 16.5 17.04C16.5 16.16 17.16 15.5 18.04 15.5Z",Wh="M19 1L14 6V17L19 12.5V1M21 5V18.5C19.9 18.15 18.7 18 17.5 18C15.8 18 13.35 18.65 12 19.5V6C10.55 4.9 8.45 4.5 6.5 4.5C4.55 4.5 2.45 4.9 1 6V20.65C1 20.9 1.25 21.15 1.5 21.15C1.6 21.15 1.65 21.1 1.75 21.1C3.1 20.45 5.05 20 6.5 20C8.45 20 10.55 20.4 12 21.5C13.35 20.65 15.8 20 17.5 20C19.15 20 20.85 20.3 22.25 21.05C22.35 21.1 22.4 21.1 22.5 21.1C22.75 21.1 23 20.85 23 20.6V6C22.4 5.55 21.75 5.25 21 5M10 18.41C8.75 18.09 7.5 18 6.5 18C5.44 18 4.18 18.19 3 18.5V7.13C3.91 6.73 5.14 6.5 6.5 6.5C7.86 6.5 9.09 6.73 10 7.13V18.41Z",Uh="M20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20M4,6V18H20V6H4Z",$h="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",Bh="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z",Gh="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",jh="M7,15H9C9,16.08 10.37,17 12,17C13.63,17 15,16.08 15,15C15,13.9 13.96,13.5 11.76,12.97C9.64,12.44 7,11.78 7,9C7,7.21 8.47,5.69 10.5,5.18V3H13.5V5.18C15.53,5.69 17,7.21 17,9H15C15,7.92 13.63,7 12,7C10.37,7 9,7.92 9,9C9,10.1 10.04,10.5 12.24,11.03C14.36,11.56 17,12.22 17,15C17,16.79 15.53,18.31 13.5,18.82V21H10.5V18.82C8.47,18.31 7,16.79 7,15Z",qh="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z",zh="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z",Kh="M6,13H18V11H6M3,6V8H21V6M10,18H14V16H10V18Z",Zh="M17 5H20L18.5 7L17 5M3 2H21C22.11 2 23 2.9 23 4V8C23 9.11 22.11 10 21 10H16V20C16 21.11 15.11 22 14 22H3C1.9 22 1 21.11 1 20V4C1 2.9 1.9 2 3 2M3 4V8H14V4H3M21 8V4H16V8H21M3 20H14V10H3V20M5 12H12V14H5V12M5 16H12V18H5V16Z",Yh="M3,17H21V15H3V17M3,20H21V19H3V20M3,13H21V10H3V13M3,4V8H21V4H3Z",Qh="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z",Xh="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z",Jh="M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z",ed="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z",td="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",nd="M7,10L12,15L17,10H7Z",sd="M18,9V10.5L12,16.5L6,10.5V9H18M12,13.67L14.67,11H9.33L12,13.67Z",id="M12 2A9.91 9.91 0 0 0 9 2.46A10 10 0 0 1 9 21.54A10 10 0 1 0 12 2Z",rd="M19,12C19,15.86 15.86,19 12,19C8.14,19 5,15.86 5,12C5,8.14 8.14,5 12,5C15.86,5 19,8.14 19,12Z",od="M7,6H5V4H7V6M17,6H19V4H17V6M23,12V18H21V14H19V18H17V16H7V18H5V14H3V18H1V12H3V10H5V8H7V6H9V8H15V6H17V8H19V10H21V12H23M15,10V12H17V10H15M7,12H9V10H7V12M11,18H7V20H11V18M17,18H13V20H17V18Z",ld="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z",ad="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",cd="M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z",ud="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z",hd="M4 5V18H21V5H4M14 7V16H11V7H14M6 7H9V16H6V7M19 16H16V7H19V16Z",dd="M19,5V7H15V5H19M9,5V11H5V5H9M19,13V19H15V13H19M9,17V19H5V17H9M21,3H13V9H21V3M11,3H3V13H11V3M21,11H13V21H21V11M11,15H3V21H11V15Z",fd="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",pd="M3.55,18.54L4.96,19.95L6.76,18.16L5.34,16.74M11,22.45C11.32,22.45 13,22.45 13,22.45V19.5H11M12,5.5A6,6 0 0,0 6,11.5A6,6 0 0,0 12,17.5A6,6 0 0,0 18,11.5C18,8.18 15.31,5.5 12,5.5M20,12.5H23V10.5H20M17.24,18.16L19.04,19.95L20.45,18.54L18.66,16.74M20.45,4.46L19.04,3.05L17.24,4.84L18.66,6.26M13,0.55H11V3.5H13M4,10.5H1V12.5H4M6.76,4.84L4.96,3.05L3.55,4.46L5.34,6.26L6.76,4.84Z",_d="M4,4H20V20H4V4M6,8V18H18V8H6Z";const md=Object.freeze(Object.defineProperty({__proto__:null,mdiGithub:Qh,mdiGoogle:Xh,mdiLink:Jh,mdiAccount:Hh,mdiAccountCogOutline:Fh,mdiViewDashboardOutline:dd,mdiSpaceInvaders:od,mdiDotsVertical:qh,mdiFilterVariant:Kh,mdiMagnify:ed,mdiMenu:td,mdiEmail:zh,mdiTwitter:ud,mdiWeb:fd,mdiChevronLeft:$h,mdiChevronRight:Bh,mdiRecord:rd,mdiViewColumnOutline:hd,mdiBookOpenPageVariantOutline:Wh,mdiStar:ld,mdiStarOutline:ad,mdiMenuDownOutline:sd,mdiTable:cd,mdiWindowMaximize:_d,mdiFormDropdown:Zh,mdiCircleOutline:Gh,mdiFormatLineWeight:Yh,mdiCardOutline:Uh,mdiCurrencyUsd:jh,mdiMenuDown:nd,mdiMoonWaxingCrescent:id,mdiWhiteBalanceSunny:pd},Symbol.toStringTag,{value:"Module"})),gd={VToolbar:{VBtn:{variant:"elevated"}},VAppBar:{flat:!0,density:"comfortable",color:"appbar-background"},VTextField:{variant:"solo",hideDetails:!0,density:"comfortable",bgColor:"text-field-background"},VAutocomplete:{menuProps:{contentClass:"autocomplete-list-bg-color",maxHeight:"200"}},VTooltip:{location:"bottom"},VImg:{transition:!1},VNavigationDrawer:{color:"navigation-drawer",width:280,permanent:!0}},yd={collapse:"M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z",complete:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",cancel:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",close:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",delete:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",clear:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",success:"M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z",info:"M13,9H11V7H13M13,17H11V11H13M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",warning:"M11,4.5H13V15.5H11V4.5M13,17.5V19.5H11V17.5H13Z",error:"M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z",prev:"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",next:"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z",checkboxOn:"M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z",checkboxOff:"M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z",checkboxIndeterminate:"M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z",delimiter:"M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",sort:"M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z",expand:"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",menu:"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",subgroup:"M7,10L12,15L17,10H7Z",dropdown:"M7,10L12,15L17,10H7Z",radioOn:"M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,7C9.24,7 7,9.24 7,12C7,14.76 9.24,17 12,17C14.76,17 17,14.76 17,12C17,9.24 14.76,7 12,7Z",radioOff:"M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",edit:"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z",ratingEmpty:"M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",ratingFull:"M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z",ratingHalf:"M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",loading:"M19,8L15,12H18C18,15.31 15.31,18 12,18C11,18 10.03,17.75 9.2,17.3L7.74,18.76C8.97,19.54 10.43,20 12,20C16.42,20 20,16.42 20,12H23M6,12C6,8.69 8.69,6 12,6C13,6 13.97,6.25 14.8,6.7L16.26,5.24C15.03,4.46 13.57,4 12,4C7.58,4 4,7.58 4,12H1L5,16L9,12",first:"M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z",last:"M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z",unfold:"M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z",file:"M16.5,6V17.5C16.5,19.71 14.71,21.5 12.5,21.5C10.29,21.5 8.5,19.71 8.5,17.5V5C8.5,3.62 9.62,2.5 11,2.5C12.38,2.5 13.5,3.62 13.5,5V15.5C13.5,16.05 13.05,16.5 12.5,16.5C11.95,16.5 11.5,16.05 11.5,15.5V6H10V15.5C10,16.88 11.12,18 12.5,18C13.88,18 15,16.88 15,15.5V5C15,2.79 13.21,1 11,1C8.79,1 7,2.79 7,5V17.5C7,20.54 9.46,23 12.5,23C15.54,23 18,20.54 18,17.5V6H16.5Z",plus:"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",minus:"M19,13H5V11H19V13Z"},vd={component:bo};const Cd=n=>{const e=wo({icons:{defaultSet:"mdiSvg",aliases:{...md,...yd},sets:{mdiSvg:vd}},theme:{themes:xh},defaults:gd});n.use(e)},Ed=Object.freeze(Object.defineProperty({__proto__:null,install:Cd},Symbol.toStringTag,{value:"Module"})),Td=Object.assign({"/src/modules/pinia.js":Nh,"/src/modules/router.js":bh,"/src/modules/vuefire.js":Vh,"/src/modules/vuetify.js":Ed}),bd=n=>Object.values(Td).map(e=>e.install(n)),wd={__name:"GAppBarTab",setup(n){const e=dt(),t=ct(()=>{const s=e.isLoggedIn?"Profile":"Login";return[{name:"Skriptag",to:"/",disabled:!0},{name:"playground",to:"/playground",disabled:!1},{name:s,to:"/login",disabled:!1}]});return(s,i)=>(k(!0),St(mo,null,po(V(t),r=>(k(),O(So,{ripple:!1,key:r.name,value:"tab-"+r.name,to:r.to},{default:A(()=>[Be(_o(r.name),1)]),_:2},1032,["value","to"]))),128))}},Sd=$(wd,[["__file","C:/webProjects/v-test/src/@core/components/global-app-bar/GAppBarTab.vue"]]),Ld={__name:"GAppBarTabs",setup(n){const{isRouting:e}=Cn(Pe());let t=we("tab-Skriptag");return(s,i)=>{const r=Sd;return k(),O(Lo,{height:"65",disabled:V(e),"slider-color":"primary",modelValue:t.value,"onUpdate:modelValue":i[0]||(i[0]=o=>t.value=o)},{default:A(()=>[x(r)]),_:1},8,["disabled","modelValue"])}}},Id=$(Ld,[["__file","C:/webProjects/v-test/src/@core/components/global-app-bar/GAppBarTabs.vue"]]),Ad={class:"g-appbar-switch-wrapper"},Rd={__name:"GAppBarThemeSwitch",setup(n){const{currentTheme:e}=Cn(Pe());return(t,s)=>(k(),St("div",Ad,[x(Io,{title:"Switch theme","true-icon":"$mdiMoonWaxingCrescent","false-icon":"$mdiWhiteBalanceSunny",inset:"",class:"d-flex text-white","hide-details":"",ripple:!1,color:"#6B6975","true-value":"dark","false-value":"light",modelValue:V(e),"onUpdate:modelValue":s[0]||(s[0]=i=>Ks(e)?e.value=i:null)},null,8,["modelValue"])]))}},Md=$(Rd,[["__file","C:/webProjects/v-test/src/@core/components/global-app-bar/GAppBarThemeSwitch.vue"]]),kd={};function Nd(n,e){const t=Er,s=Md,i=Id;return k(),O(Ro,{class:"app-bar-border",height:"72"},{default:A(()=>[x(ti,{fluid:"",class:"g-appbar-container"},{default:A(()=>[x(t,{appbar:"",link:""}),x(Ao),x(s),x(i)]),_:1})]),_:1})}const Pd=$(kd,[["render",Nd],["__file","C:/webProjects/v-test/src/@core/components/global-app-bar/GAppBar.vue"]]),Od={__name:"App",setup(n){const{currentTheme:e}=Cn(Pe());return(t,s)=>{const i=Pd,r=Ys("router-view");return k(),O(Mo,{theme:V(e)},{default:A(()=>[x(i),x(r,null,{default:A(({Component:o})=>[o?(k(),O(ni,{key:0,mode:"out-in"},{default:A(()=>[(k(),O(Qs,null,{default:A(()=>[(k(),O(vn(o)))]),_:2},1024))]),_:2},1024)):Xs("v-if",!0)]),_:1})]),_:1},8,["theme"])}}},Dd=$(Od,[["__file","C:/webProjects/v-test/src/App.vue"]]);document.addEventListener("contextmenu",n=>{n.preventDefault()},!1);let ot;async function wr(n){if(dt().user=n,n){const e=jt(zt,"users",n.uid);wt(Kr(e),t=>{});return}dt().profile={}}async function Vd(n){ot=go(Dd),bd(ot),wr(n),await Ce.isReady(),ot.mount("#app")}const xd=n=>{if(!ot){Vd(n);return}wr(n)};qt.onAuthStateChanged(async n=>{xd(n)});export{$ as _,Er as a,Lu as b,Hu as c,Pe as d,dt as u};
