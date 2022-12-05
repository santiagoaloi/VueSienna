import{_ as ga,C as pa,r as di,F as ma,d as ya,b as va,p as wa,l as oe,s as Ea,S as Ta,L as Ia,h as ae}from"./firebase-app.89ad7201.js";var Ca=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m,ms=ms||{},E=Ca||self;function We(){}function dn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Te(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Sa(e){return Object.prototype.hasOwnProperty.call(e,Fn)&&e[Fn]||(e[Fn]=++Aa)}var Fn="closure_uid_"+(1e9*Math.random()>>>0),Aa=0;function ka(e,t,n){return e.call.apply(e.bind,arguments)}function Da(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function H(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?H=ka:H=Da,H.apply(null,arguments)}function Ue(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function K(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(s,o)}}function vt(){this.s=this.s,this.o=this.o}var Na=0;vt.prototype.s=!1;vt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Na!=0)&&Sa(this)};vt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const nr=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function ys(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function fi(e,t){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(dn(s)){const i=e.length||0,r=s.length||0;e.length=i+r;for(let o=0;o<r;o++)e[i+o]=s[o]}else e.push(s)}}function W(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}W.prototype.h=function(){this.defaultPrevented=!0};var ba=function(){if(!E.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{E.addEventListener("test",We,t),E.removeEventListener("test",We,t)}catch{}return e}();function Xe(e){return/^[\s\xa0]*$/.test(e)}var gi=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Un(e,t){return e<t?-1:e>t?1:0}function fn(){var e=E.navigator;return e&&(e=e.userAgent)?e:""}function st(e){return fn().indexOf(e)!=-1}function vs(e){return vs[" "](e),e}vs[" "]=We;function Ra(e){var t=La;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var xa=st("Opera"),Vt=st("Trident")||st("MSIE"),sr=st("Edge"),Hn=sr||Vt,ir=st("Gecko")&&!(fn().toLowerCase().indexOf("webkit")!=-1&&!st("Edge"))&&!(st("Trident")||st("MSIE"))&&!st("Edge"),_a=fn().toLowerCase().indexOf("webkit")!=-1&&!st("Edge");function rr(){var e=E.document;return e?e.documentMode:void 0}var Ye;t:{var qn="",Bn=function(){var e=fn();if(ir)return/rv:([^\);]+)(\)|;)/.exec(e);if(sr)return/Edge\/([\d\.]+)/.exec(e);if(Vt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(_a)return/WebKit\/(\S+)/.exec(e);if(xa)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Bn&&(qn=Bn?Bn[1]:""),Vt){var jn=rr();if(jn!=null&&jn>parseFloat(qn)){Ye=String(jn);break t}}Ye=qn}var La={};function Ma(){return Ra(function(){let e=0;const t=gi(String(Ye)).split("."),n=gi("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var i=t[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;e=Un(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Un(i[2].length==0,r[2].length==0)||Un(i[2],r[2]),i=i[3],r=r[3]}while(e==0)}return 0<=e})}var Wn;if(E.document&&Vt){var pi=rr();Wn=pi||parseInt(Ye,10)||void 0}else Wn=void 0;var Oa=Wn;function ue(e,t){if(W.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(ir){t:{try{vs(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Va[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ue.X.h.call(this)}}K(ue,W);var Va={2:"touch",3:"pen",4:"mouse"};ue.prototype.h=function(){ue.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Ie="closure_listenable_"+(1e6*Math.random()|0),Pa=0;function Fa(e,t,n,s,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ha=i,this.key=++Pa,this.ba=this.ea=!1}function gn(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function ws(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function or(e){const t={};for(const n in e)t[n]=e[n];return t}const mi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ar(e,t){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)e[n]=s[n];for(let r=0;r<mi.length;r++)n=mi[r],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function pn(e){this.src=e,this.g={},this.h=0}pn.prototype.add=function(e,t,n,s,i){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=Yn(e,t,s,i);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new Fa(t,this.src,r,!!s,i),t.ea=n,e.push(t)),t};function Xn(e,t){var n=t.type;if(n in e.g){var s=e.g[n],i=nr(s,t),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(gn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Yn(e,t,n,s){for(var i=0;i<e.length;++i){var r=e[i];if(!r.ba&&r.listener==t&&r.capture==!!n&&r.ha==s)return i}return-1}var Es="closure_lm_"+(1e6*Math.random()|0),$n={};function ur(e,t,n,s,i){if(s&&s.once)return hr(e,t,n,s,i);if(Array.isArray(t)){for(var r=0;r<t.length;r++)ur(e,t[r],n,s,i);return null}return n=Cs(n),e&&e[Ie]?e.N(t,n,Te(s)?!!s.capture:!!s,i):cr(e,t,n,!1,s,i)}function cr(e,t,n,s,i,r){if(!t)throw Error("Invalid event type");var o=Te(i)?!!i.capture:!!i,a=Is(e);if(a||(e[Es]=a=new pn(e)),n=a.add(t,n,s,o,r),n.proxy)return n;if(s=Ua(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)ba||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),s,i);else if(e.attachEvent)e.attachEvent(dr(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Ua(){function e(n){return t.call(e.src,e.listener,n)}const t=qa;return e}function hr(e,t,n,s,i){if(Array.isArray(t)){for(var r=0;r<t.length;r++)hr(e,t[r],n,s,i);return null}return n=Cs(n),e&&e[Ie]?e.O(t,n,Te(s)?!!s.capture:!!s,i):cr(e,t,n,!0,s,i)}function lr(e,t,n,s,i){if(Array.isArray(t))for(var r=0;r<t.length;r++)lr(e,t[r],n,s,i);else s=Te(s)?!!s.capture:!!s,n=Cs(n),e&&e[Ie]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=Yn(r,n,s,i),-1<n&&(gn(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=Is(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Yn(t,n,s,i)),(n=-1<e?t[e]:null)&&Ts(n))}function Ts(e){if(typeof e!="number"&&e&&!e.ba){var t=e.src;if(t&&t[Ie])Xn(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(dr(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=Is(t))?(Xn(n,e),n.h==0&&(n.src=null,t[Es]=null)):gn(e)}}}function dr(e){return e in $n?$n[e]:$n[e]="on"+e}function qa(e,t){if(e.ba)e=!0;else{t=new ue(t,this);var n=e.listener,s=e.ha||e.src;e.ea&&Ts(e),e=n.call(s,t)}return e}function Is(e){return e=e[Es],e instanceof pn?e:null}var Kn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Cs(e){return typeof e=="function"?e:(e[Kn]||(e[Kn]=function(t){return e.handleEvent(t)}),e[Kn])}function q(){vt.call(this),this.i=new pn(this),this.P=this,this.I=null}K(q,vt);q.prototype[Ie]=!0;q.prototype.removeEventListener=function(e,t,n,s){lr(this,e,t,n,s)};function $(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new W(t,e);else if(t instanceof W)t.target=t.target||e;else{var i=t;t=new W(s,e),ar(t,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];i=qe(o,s,!0,t)&&i}if(o=t.g=e,i=qe(o,s,!0,t)&&i,i=qe(o,s,!1,t)&&i,n)for(r=0;r<n.length;r++)o=t.g=n[r],i=qe(o,s,!1,t)&&i}q.prototype.M=function(){if(q.X.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)gn(n[s]);delete e.g[t],e.h--}}this.I=null};q.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};q.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function qe(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,u=o.ha||o.src;o.ea&&Xn(e.i,o),i=a.call(u,s)!==!1&&i}}return i&&!s.defaultPrevented}var Ss=E.JSON.stringify;function Ba(){var e=pr;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class ja{constructor(){this.h=this.g=null}add(t,n){const s=fr.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var fr=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new $a,e=>e.reset());class $a{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Ka(e){E.setTimeout(()=>{throw e},0)}function gr(e,t){Jn||Ga(),Zn||(Jn(),Zn=!0),pr.add(e,t)}var Jn;function Ga(){var e=E.Promise.resolve(void 0);Jn=function(){e.then(Qa)}}var Zn=!1,pr=new ja;function Qa(){for(var e;e=Ba();){try{e.h.call(e.g)}catch(n){Ka(n)}var t=fr;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Zn=!1}function mn(e,t){q.call(this),this.h=e||1,this.g=t||E,this.j=H(this.lb,this),this.l=Date.now()}K(mn,q);m=mn.prototype;m.ca=!1;m.R=null;m.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),$(this,"tick"),this.ca&&(As(this),this.start()))}};m.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function As(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}m.M=function(){mn.X.M.call(this),As(this),delete this.g};function ks(e,t,n){if(typeof e=="function")n&&(e=H(e,n));else if(e&&typeof e.handleEvent=="function")e=H(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:E.setTimeout(e,t||0)}function mr(e){e.g=ks(()=>{e.g=null,e.i&&(e.i=!1,mr(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class za extends vt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:mr(this)}M(){super.M(),this.g&&(E.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ce(e){vt.call(this),this.h=e,this.g={}}K(ce,vt);var yi=[];function yr(e,t,n,s){Array.isArray(n)||(n&&(yi[0]=n.toString()),n=yi);for(var i=0;i<n.length;i++){var r=ur(t,n[i],s||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function vr(e){ws(e.g,function(t,n){this.g.hasOwnProperty(n)&&Ts(t)},e),e.g={}}ce.prototype.M=function(){ce.X.M.call(this),vr(this)};ce.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function yn(){this.g=!0}yn.prototype.Aa=function(){this.g=!1};function Ha(e,t,n,s,i,r){e.info(function(){if(e.g)if(r)for(var o="",a=r.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var h=c[0];c=c[1];var l=h.split("_");o=2<=l.length&&l[1]=="type"?o+(h+"="+c+"&"):o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function Wa(e,t,n,s,i,r,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+t+`
`+n+`
`+r+" "+o})}function _t(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Ya(e,n)+(s?" "+s:"")})}function Xa(e,t){e.info(function(){return"TIMEOUT: "+t})}yn.prototype.info=function(){};function Ya(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Ss(n)}catch{return t}}var Dt={},vi=null;function vn(){return vi=vi||new q}Dt.Pa="serverreachability";function wr(e){W.call(this,Dt.Pa,e)}K(wr,W);function he(e){const t=vn();$(t,new wr(t))}Dt.STAT_EVENT="statevent";function Er(e,t){W.call(this,Dt.STAT_EVENT,e),this.stat=t}K(Er,W);function Y(e){const t=vn();$(t,new Er(t,e))}Dt.Qa="timingevent";function Tr(e,t){W.call(this,Dt.Qa,e),this.size=t}K(Tr,W);function Ce(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return E.setTimeout(function(){e()},t)}var wn={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Ir={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Ds(){}Ds.prototype.h=null;function wi(e){return e.h||(e.h=e.i())}function Cr(){}var Se={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Ns(){W.call(this,"d")}K(Ns,W);function bs(){W.call(this,"c")}K(bs,W);var ts;function En(){}K(En,Ds);En.prototype.g=function(){return new XMLHttpRequest};En.prototype.i=function(){return{}};ts=new En;function Ae(e,t,n,s){this.l=e,this.j=t,this.m=n,this.U=s||1,this.S=new ce(this),this.O=Ja,e=Hn?125:void 0,this.T=new mn(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Sr}function Sr(){this.i=null,this.g="",this.h=!1}var Ja=45e3,es={},Je={};m=Ae.prototype;m.setTimeout=function(e){this.O=e};function ns(e,t,n){e.K=1,e.v=In(lt(t)),e.s=n,e.P=!0,Ar(e,null)}function Ar(e,t){e.F=Date.now(),ke(e),e.A=lt(e.v);var n=e.A,s=e.U;Array.isArray(s)||(s=[String(s)]),Lr(n.i,"t",s),e.C=0,n=e.l.H,e.h=new Sr,e.g=to(e.l,n?t:null,!e.s),0<e.N&&(e.L=new za(H(e.La,e,e.g),e.N)),yr(e.S,e.g,"readystatechange",e.ib),t=e.H?or(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),he(),Ha(e.j,e.u,e.A,e.m,e.U,e.s)}m.ib=function(e){e=e.target;const t=this.L;t&&at(e)==3?t.l():this.La(e)};m.La=function(e){try{if(e==this.g)t:{const h=at(this.g);var t=this.g.Ea();const l=this.g.aa();if(!(3>h)&&(h!=3||Hn||this.g&&(this.h.h||this.g.fa()||Ci(this.g)))){this.I||h!=4||t==7||(t==8||0>=l?he(3):he(2)),Tn(this);var n=this.g.aa();this.Y=n;e:if(kr(this)){var s=Ci(this.g);e="";var i=s.length,r=at(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Et(this),ee(this);var o="";break e}this.h.i=new E.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:r&&t==i-1});s.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Wa(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Xe(a)){var c=a;break e}}c=null}if(n=c)_t(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ss(this,n);else{this.i=!1,this.o=3,Y(12),Et(this),ee(this);break t}}this.P?(Dr(this,h,o),Hn&&this.i&&h==3&&(yr(this.S,this.T,"tick",this.hb),this.T.start())):(_t(this.j,this.m,o,null),ss(this,o)),h==4&&Et(this),this.i&&!this.I&&(h==4?Xr(this.l,this):(this.i=!1,ke(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Y(12)):(this.o=0,Y(13)),Et(this),ee(this)}}}catch{}finally{}};function kr(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Da:!1}function Dr(e,t,n){let s=!0,i;for(;!e.I&&e.C<n.length;)if(i=Za(e,n),i==Je){t==4&&(e.o=4,Y(14),s=!1),_t(e.j,e.m,null,"[Incomplete Response]");break}else if(i==es){e.o=4,Y(15),_t(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else _t(e.j,e.m,i,null),ss(e,i);kr(e)&&i!=Je&&i!=es&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,Y(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Vs(t),t.K=!0,Y(11))):(_t(e.j,e.m,n,"[Invalid Chunked Response]"),Et(e),ee(e))}m.hb=function(){if(this.g){var e=at(this.g),t=this.g.fa();this.C<t.length&&(Tn(this),Dr(this,e,t),this.i&&e!=4&&ke(this))}};function Za(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?Je:(n=Number(t.substring(n,s)),isNaN(n)?es:(s+=1,s+n>t.length?Je:(t=t.substr(s,n),e.C=s+n,t)))}m.cancel=function(){this.I=!0,Et(this)};function ke(e){e.V=Date.now()+e.O,Nr(e,e.O)}function Nr(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Ce(H(e.gb,e),t)}function Tn(e){e.B&&(E.clearTimeout(e.B),e.B=null)}m.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(Xa(this.j,this.A),this.K!=2&&(he(),Y(17)),Et(this),this.o=2,ee(this)):Nr(this,this.V-e)};function ee(e){e.l.G==0||e.I||Xr(e.l,e)}function Et(e){Tn(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,As(e.T),vr(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function ss(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||is(n.h,e))){if(!e.J&&is(n.h,e)&&n.G==3){try{var s=n.Fa.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)en(n),An(n);else break t;Os(n),Y(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Ce(H(n.cb,n),6e3));if(1>=Vr(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Tt(n,11)}else if((e.J||n.g==e)&&en(n),!Xe(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let c=i[t];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const h=c[3];h!=null&&(n.ma=h,n.j.info("VER="+n.ma));const l=c[4];l!=null&&(n.Ca=l,n.j.info("SVER="+n.Ca));const g=c[5];g!=null&&typeof g=="number"&&0<g&&(s=1.5*g,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=e.g;if(p){const T=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(T){var r=s.h;r.g||T.indexOf("spdy")==-1&&T.indexOf("quic")==-1&&T.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Rs(r,r.h),r.h=null))}if(s.D){const A=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;A&&(s.za=A,x(s.F,s.D,A))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=e;if(s.sa=Zr(s,s.H?s.ka:null,s.V),o.J){Pr(s.h,o);var a=o,u=s.J;u&&a.setTimeout(u),a.B&&(Tn(a),ke(a)),s.g=o}else Hr(s);0<n.i.length&&kn(n)}else c[0]!="stop"&&c[0]!="close"||Tt(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Tt(n,7):Ms(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}he(4)}catch{}}function tu(e){if(e.W&&typeof e.W=="function")return e.W();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(dn(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function eu(e){if(e.oa&&typeof e.oa=="function")return e.oa();if(!e.W||typeof e.W!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(dn(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const s in e)t[n++]=s;return t}}}function br(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(dn(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=eu(e),s=tu(e),i=s.length,r=0;r<i;r++)t.call(void 0,s[r],n&&n[r],e)}var Rr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function nu(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),i=null;if(0<=s){var r=e[n].substring(0,s);i=e[n].substring(s+1)}else r=e[n];t(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ct(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Ct){this.h=t!==void 0?t:e.h,Ze(this,e.j),this.s=e.s,this.g=e.g,tn(this,e.m),this.l=e.l,t=e.i;var n=new le;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Ei(this,n),this.o=e.o}else e&&(n=String(e).match(Rr))?(this.h=!!t,Ze(this,n[1]||"",!0),this.s=Yt(n[2]||""),this.g=Yt(n[3]||"",!0),tn(this,n[4]),this.l=Yt(n[5]||"",!0),Ei(this,n[6]||"",!0),this.o=Yt(n[7]||"")):(this.h=!!t,this.i=new le(null,this.h))}Ct.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Jt(t,Ti,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Jt(t,Ti,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Jt(n,n.charAt(0)=="/"?ru:iu,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Jt(n,au)),e.join("")};function lt(e){return new Ct(e)}function Ze(e,t,n){e.j=n?Yt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function tn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Ei(e,t,n){t instanceof le?(e.i=t,uu(e.i,e.h)):(n||(t=Jt(t,ou)),e.i=new le(t,e.h))}function x(e,t,n){e.i.set(t,n)}function In(e){return x(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Yt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Jt(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,su),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function su(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Ti=/[#\/\?@]/g,iu=/[#\?:]/g,ru=/[#\?]/g,ou=/[#\?@]/g,au=/#/g;function le(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function wt(e){e.g||(e.g=new Map,e.h=0,e.i&&nu(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}m=le.prototype;m.add=function(e,t){wt(this),this.i=null,e=Kt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function xr(e,t){wt(e),t=Kt(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function _r(e,t){return wt(e),t=Kt(e,t),e.g.has(t)}m.forEach=function(e,t){wt(this),this.g.forEach(function(n,s){n.forEach(function(i){e.call(t,i,s,this)},this)},this)};m.oa=function(){wt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let s=0;s<t.length;s++){const i=e[s];for(let r=0;r<i.length;r++)n.push(t[s])}return n};m.W=function(e){wt(this);let t=[];if(typeof e=="string")_r(this,e)&&(t=t.concat(this.g.get(Kt(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};m.set=function(e,t){return wt(this),this.i=null,e=Kt(this,e),_r(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};m.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t};function Lr(e,t,n){xr(e,t),0<n.length&&(e.i=null,e.g.set(Kt(e,t),ys(n)),e.h+=n.length)}m.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var s=t[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),e.push(i)}}return this.i=e.join("&")};function Kt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function uu(e,t){t&&!e.j&&(wt(e),e.i=null,e.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(xr(this,s),Lr(this,i,n))},e)),e.j=t}var cu=class{constructor(e,t){this.h=e,this.g=t}};function Mr(e){this.l=e||hu,E.PerformanceNavigationTiming?(e=E.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(E.g&&E.g.Ga&&E.g.Ga()&&E.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var hu=10;function Or(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Vr(e){return e.h?1:e.g?e.g.size:0}function is(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Rs(e,t){e.g?e.g.add(t):e.h=t}function Pr(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Mr.prototype.cancel=function(){if(this.i=Fr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Fr(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return ys(e.i)}function xs(){}xs.prototype.stringify=function(e){return E.JSON.stringify(e,void 0)};xs.prototype.parse=function(e){return E.JSON.parse(e,void 0)};function lu(){this.g=new xs}function du(e,t,n){const s=n||"";try{br(e,function(i,r){let o=i;Te(i)&&(o=Ss(i)),t.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw t.push(s+"type="+encodeURIComponent("_badmap")),i}}function fu(e,t){const n=new yn;if(E.Image){const s=new Image;s.onload=Ue(Be,n,s,"TestLoadImage: loaded",!0,t),s.onerror=Ue(Be,n,s,"TestLoadImage: error",!1,t),s.onabort=Ue(Be,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=Ue(Be,n,s,"TestLoadImage: timeout",!1,t),E.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function Be(e,t,n,s,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(s)}catch{}}function De(e){this.l=e.ac||null,this.j=e.jb||!1}K(De,Ds);De.prototype.g=function(){return new Cn(this.l,this.j)};De.prototype.i=function(e){return function(){return e}}({});function Cn(e,t){q.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=_s,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}K(Cn,q);var _s=0;m=Cn.prototype;m.open=function(e,t){if(this.readyState!=_s)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,de(this)};m.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||E).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))};m.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ne(this)),this.readyState=_s};m.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,de(this)),this.g&&(this.readyState=3,de(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof E.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ur(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))};function Ur(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}m.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Ne(this):de(this),this.readyState==3&&Ur(this)}};m.Va=function(e){this.g&&(this.response=this.responseText=e,Ne(this))};m.Ua=function(e){this.g&&(this.response=e,Ne(this))};m.ga=function(){this.g&&Ne(this)};function Ne(e){e.readyState=4,e.l=null,e.j=null,e.A=null,de(e)}m.setRequestHeader=function(e,t){this.v.append(e,t)};m.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};m.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function de(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Cn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var gu=E.JSON.parse;function L(e){q.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=qr,this.K=this.L=!1}K(L,q);var qr="",pu=/^https?$/i,mu=["POST","PUT"];m=L.prototype;m.Ka=function(e){this.L=e};m.da=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ts.g(),this.C=this.u?wi(this.u):wi(ts),this.g.onreadystatechange=H(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(r){Ii(this,r);return}if(e=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=E.FormData&&e instanceof E.FormData,!(0<=nr(mu,t))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{$r(this),0<this.B&&((this.K=yu(this.g))?(this.g.timeout=this.B,this.g.ontimeout=H(this.qa,this)):this.A=ks(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){Ii(this,r)}};function yu(e){return Vt&&Ma()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}m.qa=function(){typeof ms<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,$(this,"timeout"),this.abort(8))};function Ii(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Br(e),Sn(e)}function Br(e){e.D||(e.D=!0,$(e,"complete"),$(e,"error"))}m.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,$(this,"complete"),$(this,"abort"),Sn(this))};m.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Sn(this,!0)),L.X.M.call(this)};m.Ha=function(){this.s||(this.F||this.v||this.l?jr(this):this.fb())};m.fb=function(){jr(this)};function jr(e){if(e.h&&typeof ms<"u"&&(!e.C[1]||at(e)!=4||e.aa()!=2)){if(e.v&&at(e)==4)ks(e.Ha,0,e);else if($(e,"readystatechange"),at(e)==4){e.h=!1;try{const a=e.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var i=String(e.H).match(Rr)[1]||null;if(!i&&E.self&&E.self.location){var r=E.self.location.protocol;i=r.substr(0,r.length-1)}s=!pu.test(i?i.toLowerCase():"")}n=s}if(n)$(e,"complete"),$(e,"success");else{e.m=6;try{var o=2<at(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.aa()+"]",Br(e)}}finally{Sn(e)}}}}function Sn(e,t){if(e.g){$r(e);const n=e.g,s=e.C[0]?We:null;e.g=null,e.C=null,t||$(e,"ready");try{n.onreadystatechange=s}catch{}}}function $r(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(E.clearTimeout(e.A),e.A=null)}function at(e){return e.g?e.g.readyState:0}m.aa=function(){try{return 2<at(this)?this.g.status:-1}catch{return-1}};m.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};m.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),gu(t)}};function Ci(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case qr:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}m.Ea=function(){return this.m};m.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Kr(e){let t="";return ws(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function Ls(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=Kr(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):x(e,t,n))}function Xt(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Gr(e){this.Ca=0,this.i=[],this.j=new yn,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Xt("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Xt("baseRetryDelayMs",5e3,e),this.bb=Xt("retryDelaySeedMs",1e4,e),this.$a=Xt("forwardChannelMaxRetries",2,e),this.ta=Xt("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new Mr(e&&e.concurrentRequestLimit),this.Fa=new lu,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}m=Gr.prototype;m.ma=8;m.G=1;function Ms(e){if(Qr(e),e.G==3){var t=e.U++,n=lt(e.F);x(n,"SID",e.I),x(n,"RID",t),x(n,"TYPE","terminate"),be(e,n),t=new Ae(e,e.j,t,void 0),t.K=2,t.v=In(lt(n)),n=!1,E.navigator&&E.navigator.sendBeacon&&(n=E.navigator.sendBeacon(t.v.toString(),"")),!n&&E.Image&&(new Image().src=t.v,n=!0),n||(t.g=to(t.l,null),t.g.da(t.v)),t.F=Date.now(),ke(t)}Jr(e)}function An(e){e.g&&(Vs(e),e.g.cancel(),e.g=null)}function Qr(e){An(e),e.u&&(E.clearTimeout(e.u),e.u=null),en(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&E.clearTimeout(e.m),e.m=null)}function kn(e){Or(e.h)||e.m||(e.m=!0,gr(e.Ja,e),e.C=0)}function vu(e,t){return Vr(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.D.concat(e.i),!0):e.G==1||e.G==2||e.C>=(e.Za?0:e.$a)?!1:(e.m=Ce(H(e.Ja,e,t),Yr(e,e.C)),e.C++,!0)}m.Ja=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new Ae(this,this.j,e,void 0);let r=this.s;if(this.S&&(r?(r=or(r),ar(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)t:{for(var t=0,n=0;n<this.i.length;n++){e:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.i.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=zr(this,i,t),n=lt(this.F),x(n,"RID",e),x(n,"CVER",22),this.D&&x(n,"X-HTTP-Session-Id",this.D),be(this,n),r&&(this.N?t="headers="+encodeURIComponent(String(Kr(r)))+"&"+t:this.o&&Ls(n,this.o,r)),Rs(this.h,i),this.Ya&&x(n,"TYPE","init"),this.O?(x(n,"$req",t),x(n,"SID","null"),i.Z=!0,ns(i,n,null)):ns(i,n,t),this.G=2}}else this.G==3&&(e?Si(this,e):this.i.length==0||Or(this.h)||Si(this))};function Si(e,t){var n;t?n=t.m:n=e.U++;const s=lt(e.F);x(s,"SID",e.I),x(s,"RID",n),x(s,"AID",e.T),be(e,s),e.o&&e.s&&Ls(s,e.o,e.s),n=new Ae(e,e.j,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=zr(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),Rs(e.h,n),ns(n,s,t)}function be(e,t){e.ia&&ws(e.ia,function(n,s){x(t,s,n)}),e.l&&br({},function(n,s){x(t,s,n)})}function zr(e,t,n){n=Math.min(e.i.length,n);var s=e.l?H(e.l.Ra,e.l,e):null;t:{var i=e.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let u=0;u<n;u++){let c=i[u].h;const h=i[u].g;if(c-=r,0>c)r=Math.max(0,i[u].h-100),a=!1;else try{du(h,o,"req"+c+"_")}catch{s&&s(h)}}if(a){s=o.join("&");break t}}}return e=e.i.splice(0,n),t.D=e,s}function Hr(e){e.g||e.u||(e.Z=1,gr(e.Ia,e),e.A=0)}function Os(e){return e.g||e.u||3<=e.A?!1:(e.Z++,e.u=Ce(H(e.Ia,e),Yr(e,e.A)),e.A++,!0)}m.Ia=function(){if(this.u=null,Wr(this),this.$&&!(this.K||this.g==null||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=Ce(H(this.eb,this),e)}};m.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Y(10),An(this),Wr(this))};function Vs(e){e.B!=null&&(E.clearTimeout(e.B),e.B=null)}function Wr(e){e.g=new Ae(e,e.j,"rpc",e.Z),e.o===null&&(e.g.H=e.s),e.g.N=0;var t=lt(e.sa);x(t,"RID","rpc"),x(t,"SID",e.I),x(t,"CI",e.L?"0":"1"),x(t,"AID",e.T),x(t,"TYPE","xmlhttp"),be(e,t),e.o&&e.s&&Ls(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=In(lt(t)),n.s=null,n.P=!0,Ar(n,e)}m.cb=function(){this.v!=null&&(this.v=null,An(this),Os(this),Y(19))};function en(e){e.v!=null&&(E.clearTimeout(e.v),e.v=null)}function Xr(e,t){var n=null;if(e.g==t){en(e),Vs(e),e.g=null;var s=2}else if(is(e.h,t))n=t.D,Pr(e.h,t),s=1;else return;if(e.G!=0){if(e.pa=t.Y,t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;s=vn(),$(s,new Tr(s,n)),kn(e)}else Hr(e);else if(i=t.o,i==3||i==0&&0<e.pa||!(s==1&&vu(e,t)||s==2&&Os(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:Tt(e,5);break;case 4:Tt(e,10);break;case 3:Tt(e,6);break;default:Tt(e,2)}}}function Yr(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function Tt(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var s=H(e.kb,e);n||(n=new Ct("//www.google.com/images/cleardot.gif"),E.location&&E.location.protocol=="http"||Ze(n,"https"),In(n)),fu(n.toString(),s)}else Y(2);e.G=0,e.l&&e.l.va(t),Jr(e),Qr(e)}m.kb=function(e){e?(this.j.info("Successfully pinged google.com"),Y(2)):(this.j.info("Failed to ping google.com"),Y(1))};function Jr(e){if(e.G=0,e.la=[],e.l){const t=Fr(e.h);(t.length!=0||e.i.length!=0)&&(fi(e.la,t),fi(e.la,e.i),e.h.i.length=0,ys(e.i),e.i.length=0),e.l.ua()}}function Zr(e,t,n){var s=n instanceof Ct?lt(n):new Ct(n,void 0);if(s.g!="")t&&(s.g=t+"."+s.g),tn(s,s.m);else{var i=E.location;s=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var r=new Ct(null,void 0);s&&Ze(r,s),t&&(r.g=t),i&&tn(r,i),n&&(r.l=n),s=r}return n=e.D,t=e.za,n&&t&&x(s,n,t),x(s,"VER",e.ma),be(e,s),s}function to(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new L(new De({jb:!0})):new L(e.ra),t.Ka(e.H),t}function eo(){}m=eo.prototype;m.xa=function(){};m.wa=function(){};m.va=function(){};m.ua=function(){};m.Ra=function(){};function nn(){if(Vt&&!(10<=Number(Oa)))throw Error("Environmental error: no available transport.")}nn.prototype.g=function(e,t){return new et(e,t)};function et(e,t){q.call(this),this.g=new Gr(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!Xe(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Xe(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Gt(this)}K(et,q);et.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;Y(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=Zr(e,null,e.V),kn(e)};et.prototype.close=function(){Ms(this.g)};et.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Ss(e),e=n);t.i.push(new cu(t.ab++,e)),t.G==3&&kn(t)};et.prototype.M=function(){this.g.l=null,delete this.j,Ms(this.g),delete this.g,et.X.M.call(this)};function no(e){Ns.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}K(no,Ns);function so(){bs.call(this),this.status=1}K(so,bs);function Gt(e){this.g=e}K(Gt,eo);Gt.prototype.xa=function(){$(this.g,"a")};Gt.prototype.wa=function(e){$(this.g,new no(e))};Gt.prototype.va=function(e){$(this.g,new so)};Gt.prototype.ua=function(){$(this.g,"b")};nn.prototype.createWebChannel=nn.prototype.g;et.prototype.send=et.prototype.u;et.prototype.open=et.prototype.m;et.prototype.close=et.prototype.close;wn.NO_ERROR=0;wn.TIMEOUT=8;wn.HTTP_ERROR=6;Ir.COMPLETE="complete";Cr.EventType=Se;Se.OPEN="a";Se.CLOSE="b";Se.ERROR="c";Se.MESSAGE="d";q.prototype.listen=q.prototype.N;L.prototype.listenOnce=L.prototype.O;L.prototype.getLastError=L.prototype.Oa;L.prototype.getLastErrorCode=L.prototype.Ea;L.prototype.getStatus=L.prototype.aa;L.prototype.getResponseJson=L.prototype.Sa;L.prototype.getResponseText=L.prototype.fa;L.prototype.send=L.prototype.da;L.prototype.setWithCredentials=L.prototype.Ka;var wu=function(){return new nn},Eu=function(){return vn()},Gn=wn,Tu=Ir,Iu=Dt,Ai={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Cu=De,je=Cr,Su=L;const ki="@firebase/firestore";/**
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
 */class Q{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Q.UNAUTHENTICATED=new Q(null),Q.GOOGLE_CREDENTIALS=new Q("google-credentials-uid"),Q.FIRST_PARTY=new Q("first-party-uid"),Q.MOCK_USER=new Q("mock-user");/**
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
 */let Qt="9.14.0";/**
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
 */const At=new Ia("@firebase/firestore");function Di(){return At.logLevel}function y(e,...t){if(At.logLevel<=oe.DEBUG){const n=t.map(Ps);At.debug(`Firestore (${Qt}): ${e}`,...n)}}function dt(e,...t){if(At.logLevel<=oe.ERROR){const n=t.map(Ps);At.error(`Firestore (${Qt}): ${e}`,...n)}}function rs(e,...t){if(At.logLevel<=oe.WARN){const n=t.map(Ps);At.warn(`Firestore (${Qt}): ${e}`,...n)}}function Ps(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
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
*/var t}/**
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
 */function I(e="Unexpected state"){const t=`FIRESTORE (${Qt}) INTERNAL ASSERTION FAILED: `+e;throw dt(t),new Error(t)}function R(e,t){e||I()}function C(e,t){return e}/**
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
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class w extends ma{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ut{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class io{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Au{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Q.UNAUTHENTICATED))}shutdown(){}}class ku{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Du{constructor(t){this.t=t,this.currentUser=Q.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const i=u=>this.i!==s?(s=this.i,n(u)):Promise.resolve();let r=new ut;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new ut,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=r;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(y("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new ut)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(R(typeof s.accessToken=="string"),new io(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return R(t===null||typeof t=="string"),new Q(t)}}class Nu{constructor(t,n,s,i){this.h=t,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=Q.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(R(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class bu{constructor(t,n,s,i){this.h=t,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new Nu(this.h,this.l,this.m,this.g))}start(t,n){t.enqueueRetryable(()=>n(Q.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ru{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xu{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,n){const s=r=>{r.error!=null&&y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>s(r))};const i=r=>{y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(R(typeof n.token=="string"),this.A=n.token,new Ru(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function _u(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class ro{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const i=_u(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=t.charAt(i[r]%t.length))}return s}}function b(e,t){return e<t?-1:e>t?1:0}function Pt(e,t,n){return e.length===t.length&&e.every((s,i)=>n(s,t[i]))}/**
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
 */class V{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new w(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new w(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new w(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new w(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return V.fromMillis(Date.now())}static fromDate(t){return V.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new V(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?b(this.nanoseconds,t.nanoseconds):b(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class S{constructor(t){this.timestamp=t}static fromTimestamp(t){return new S(t)}static min(){return new S(new V(0,0))}static max(){return new S(new V(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class fe{constructor(t,n,s){n===void 0?n=0:n>t.length&&I(),s===void 0?s=t.length-n:s>t.length-n&&I(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return fe.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof fe?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let i=0;i<s;i++){const r=t.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class _ extends fe{construct(t,n,s){return new _(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new w(f.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new _(n)}static emptyPath(){return new _([])}}const Lu=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class z extends fe{construct(t,n,s){return new z(t,n,s)}static isValidIdentifier(t){return Lu.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),z.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new z(["__name__"])}static fromServerFormat(t){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new w(f.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new w(f.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new w(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new w(f.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new z(n)}static emptyPath(){return new z([])}}/**
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
 */class v{constructor(t){this.path=t}static fromPath(t){return new v(_.fromString(t))}static fromName(t){return new v(_.fromString(t).popFirst(5))}static empty(){return new v(_.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&_.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return _.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new v(new _(t.slice()))}}function Mu(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,i=S.fromTimestamp(s===1e9?new V(n+1,0):new V(n,s));return new pt(i,v.empty(),t)}function Ou(e){return new pt(e.readTime,e.key,-1)}class pt{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new pt(S.min(),v.empty(),-1)}static max(){return new pt(S.max(),v.empty(),-1)}}function Vu(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=v.comparator(e.documentKey,t.documentKey),n!==0?n:b(e.largestBatchId,t.largestBatchId))}/**
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
 */const Pu="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Fu{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Re(e){if(e.code!==f.FAILED_PRECONDITION||e.message!==Pu)throw e;y("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class d{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&I(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new d((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof d?n:d.resolve(n)}catch(n){return d.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):d.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):d.reject(n)}static resolve(t){return new d((n,s)=>{n(t)})}static reject(t){return new d((n,s)=>{s(t)})}static waitFor(t){return new d((n,s)=>{let i=0,r=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},u=>s(u))}),o=!0,r===i&&n()})}static or(t){let n=d.resolve(!1);for(const s of t)n=n.next(i=>i?d.resolve(i):s());return n}static forEach(t,n){const s=[];return t.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(t,n){return new d((s,i)=>{const r=t.length,o=new Array(r);let a=0;for(let u=0;u<r;u++){const c=u;n(t[c]).next(h=>{o[c]=h,++a,a===r&&s(o)},h=>i(h))}})}static doWhile(t,n){return new d((s,i)=>{const r=()=>{t()===!0?n().next(()=>{r()},i):s()};r()})}}function xe(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class Fs{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}/**
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
 */function Ni(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function zt(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function oo(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */Fs.at=-1;class F{constructor(t,n){this.comparator=t,this.root=n||B.EMPTY}insert(t,n){return new F(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,B.BLACK,null,null))}remove(t){return new F(this.comparator,this.root.remove(t,this.comparator).copy(null,null,B.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(t,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new $e(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new $e(this.root,t,this.comparator,!1)}getReverseIterator(){return new $e(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new $e(this.root,t,this.comparator,!0)}}class $e{constructor(t,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=n?s(t.key,n):1,n&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class B{constructor(t,n,s,i,r){this.key=t,this.value=n,this.color=s!=null?s:B.RED,this.left=i!=null?i:B.EMPTY,this.right=r!=null?r:B.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,i,r){return new B(t!=null?t:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let i=this;const r=s(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return B.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return B.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,B.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,B.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw I();const t=this.left.check();if(t!==this.right.check())throw I();return t+(this.isRed()?0:1)}}B.EMPTY=null,B.RED=!0,B.BLACK=!1;B.EMPTY=new class{constructor(){this.size=0}get key(){throw I()}get value(){throw I()}get color(){throw I()}get left(){throw I()}get right(){throw I()}copy(e,t,n,s,i){return this}insert(e,t,n){return new B(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class P{constructor(t){this.comparator=t,this.data=new F(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new bi(this.data.getIterator())}getIteratorFrom(t){return new bi(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof P)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new P(this.comparator);return n.data=t,n}}class bi{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class it{constructor(t){this.fields=t,t.sort(z.comparator)}static empty(){return new it([])}unionWith(t){let n=new P(z.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new it(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Pt(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class X{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new X(n)}static fromUint8Array(t){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(t);return new X(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return b(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}X.EMPTY_BYTE_STRING=new X("");const Uu=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mt(e){if(R(!!e),typeof e=="string"){let t=0;const n=Uu.exec(e);if(R(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:O(e.seconds),nanos:O(e.nanos)}}function O(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Ft(e){return typeof e=="string"?X.fromBase64String(e):X.fromUint8Array(e)}/**
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
 */function ao(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function uo(e){const t=e.mapValue.fields.__previous_value__;return ao(t)?uo(t):t}function ge(e){const t=mt(e.mapValue.fields.__local_write_time__.timestampValue);return new V(t.seconds,t.nanos)}/**
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
 */class qu{constructor(t,n,s,i,r,o,a,u){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class pe{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new pe("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof pe&&t.projectId===this.projectId&&t.database===this.database}}function Dn(e){return e==null}function sn(e){return e===0&&1/e==-1/0}function Bu(e){return typeof e=="number"&&Number.isInteger(e)&&!sn(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */const Ke={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function kt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?ao(e)?4:ju(e)?9007199254740991:10:I()}function ot(e,t){if(e===t)return!0;const n=kt(e);if(n!==kt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return ge(e).isEqual(ge(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=mt(s.timestampValue),o=mt(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return Ft(s.bytesValue).isEqual(Ft(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return O(s.geoPointValue.latitude)===O(i.geoPointValue.latitude)&&O(s.geoPointValue.longitude)===O(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return O(s.integerValue)===O(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=O(s.doubleValue),o=O(i.doubleValue);return r===o?sn(r)===sn(o):isNaN(r)&&isNaN(o)}return!1}(e,t);case 9:return Pt(e.arrayValue.values||[],t.arrayValue.values||[],ot);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Ni(r)!==Ni(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!ot(r[a],o[a])))return!1;return!0}(e,t);default:return I()}}function me(e,t){return(e.values||[]).find(n=>ot(n,t))!==void 0}function Ut(e,t){if(e===t)return 0;const n=kt(e),s=kt(t);if(n!==s)return b(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return b(e.booleanValue,t.booleanValue);case 2:return function(i,r){const o=O(i.integerValue||i.doubleValue),a=O(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return Ri(e.timestampValue,t.timestampValue);case 4:return Ri(ge(e),ge(t));case 5:return b(e.stringValue,t.stringValue);case 6:return function(i,r){const o=Ft(i),a=Ft(r);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let u=0;u<o.length&&u<a.length;u++){const c=b(o[u],a[u]);if(c!==0)return c}return b(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,r){const o=b(O(i.latitude),O(r.latitude));return o!==0?o:b(O(i.longitude),O(r.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let u=0;u<o.length&&u<a.length;++u){const c=Ut(o[u],a[u]);if(c)return c}return b(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,r){if(i===Ke.mapValue&&r===Ke.mapValue)return 0;if(i===Ke.mapValue)return 1;if(r===Ke.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),u=r.fields||{},c=Object.keys(u);a.sort(),c.sort();for(let h=0;h<a.length&&h<c.length;++h){const l=b(a[h],c[h]);if(l!==0)return l;const g=Ut(o[a[h]],u[c[h]]);if(g!==0)return g}return b(a.length,c.length)}(e.mapValue,t.mapValue);default:throw I()}}function Ri(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return b(e,t);const n=mt(e),s=mt(t),i=b(n.seconds,s.seconds);return i!==0?i:b(n.nanos,s.nanos)}function Mt(e){return os(e)}function os(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const i=mt(s);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Ft(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,v.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=os(o);return i+"]"}(e.arrayValue):"mapValue"in e?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${os(s.fields[a])}`;return r+"}"}(e.mapValue):I();var t,n}function as(e){return!!e&&"integerValue"in e}function Us(e){return!!e&&"arrayValue"in e}function xi(e){return!!e&&"nullValue"in e}function _i(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Ge(e){return!!e&&"mapValue"in e}function ne(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return zt(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=ne(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=ne(e.arrayValue.values[n]);return t}return Object.assign({},e)}function ju(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class nt{constructor(t){this.value=t}static empty(){return new nt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!Ge(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=ne(n)}setAll(t){let n=z.emptyPath(),s={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=ne(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(t){const n=this.field(t.popLast());Ge(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return ot(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let i=n.mapValue.fields[t.get(s)];Ge(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,s){zt(n,(i,r)=>t[i]=r);for(const i of s)delete t[i]}clone(){return new nt(ne(this.value))}}function co(e){const t=[];return zt(e.fields,(n,s)=>{const i=new z([n]);if(Ge(s)){const r=co(s.mapValue).fields;if(r.length===0)t.push(i);else for(const o of r)t.push(i.child(o))}else t.push(i)}),new it(t)}/**
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
 */class j{constructor(t,n,s,i,r,o){this.key=t,this.documentType=n,this.version=s,this.readTime=i,this.data=r,this.documentState=o}static newInvalidDocument(t){return new j(t,0,S.min(),S.min(),nt.empty(),0)}static newFoundDocument(t,n,s){return new j(t,1,n,S.min(),s,0)}static newNoDocument(t,n){return new j(t,2,n,S.min(),nt.empty(),0)}static newUnknownDocument(t,n){return new j(t,3,n,S.min(),nt.empty(),2)}convertToFoundDocument(t,n){return this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=nt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=S.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof j&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new j(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class $u{constructor(t,n=null,s=[],i=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ht=null}}function Li(e,t=null,n=[],s=[],i=null,r=null,o=null){return new $u(e,t,n,s,i,r,o)}function qs(e){const t=C(e);if(t.ht===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>{return(i=s).field.canonicalString()+i.op.toString()+Mt(i.value);var i}).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Dn(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Mt(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Mt(s)).join(",")),t.ht=n}return t.ht}function Ku(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${Mt(s.value)}`;var s}).join(", ")}]`),Dn(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>Mt(n)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>Mt(n)).join(",")),`Target(${t})`}function Bs(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!Ju(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],s=t.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!ot(n.value,s.value))return!1;var n,s;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Oi(e.startAt,t.startAt)&&Oi(e.endAt,t.endAt)}function us(e){return v.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}class J extends class{}{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.lt(t,n,s):new Gu(t,n,s):n==="array-contains"?new Hu(t,s):n==="in"?new Wu(t,s):n==="not-in"?new Xu(t,s):n==="array-contains-any"?new Yu(t,s):new J(t,n,s)}static lt(t,n,s){return n==="in"?new Qu(t,s):new zu(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.ft(Ut(n,this.value)):n!==null&&kt(this.value)===kt(n)&&this.ft(Ut(n,this.value))}ft(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return I()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Gu extends J{constructor(t,n,s){super(t,n,s),this.key=v.fromName(s.referenceValue)}matches(t){const n=v.comparator(t.key,this.key);return this.ft(n)}}class Qu extends J{constructor(t,n){super(t,"in",n),this.keys=ho("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class zu extends J{constructor(t,n){super(t,"not-in",n),this.keys=ho("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function ho(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>v.fromName(s.referenceValue))}class Hu extends J{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Us(n)&&me(n.arrayValue,this.value)}}class Wu extends J{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&me(this.value.arrayValue,n)}}class Xu extends J{constructor(t,n){super(t,"not-in",n)}matches(t){if(me(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!me(this.value.arrayValue,n)}}class Yu extends J{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Us(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>me(this.value.arrayValue,s))}}class rn{constructor(t,n){this.position=t,this.inclusive=n}}class se{constructor(t,n="asc"){this.field=t,this.dir=n}}function Ju(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Mi(e,t,n){let s=0;for(let i=0;i<e.position.length;i++){const r=t[i],o=e.position[i];if(r.field.isKeyField()?s=v.comparator(v.fromName(o.referenceValue),n.key):s=Ut(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Oi(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ot(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class Nn{constructor(t,n=null,s=[],i=[],r=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=u,this._t=null,this.wt=null,this.startAt,this.endAt}}function Zu(e,t,n,s,i,r,o,a){return new Nn(e,t,n,s,i,r,o,a)}function bn(e){return new Nn(e)}function Vi(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function tc(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function ec(e){for(const t of e.filters)if(t.dt())return t.field;return null}function nc(e){return e.collectionGroup!==null}function ye(e){const t=C(e);if(t._t===null){t._t=[];const n=ec(t),s=tc(t);if(n!==null&&s===null)n.isKeyField()||t._t.push(new se(n)),t._t.push(new se(z.keyField(),"asc"));else{let i=!1;for(const r of t.explicitOrderBy)t._t.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t._t.push(new se(z.keyField(),r))}}}return t._t}function ft(e){const t=C(e);if(!t.wt)if(t.limitType==="F")t.wt=Li(t.path,t.collectionGroup,ye(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const r of ye(t)){const o=r.dir==="desc"?"asc":"desc";n.push(new se(r.field,o))}const s=t.endAt?new rn(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new rn(t.startAt.position,t.startAt.inclusive):null;t.wt=Li(t.path,t.collectionGroup,n,t.filters,t.limit,s,i)}return t.wt}function cs(e,t,n){return new Nn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Rn(e,t){return Bs(ft(e),ft(t))&&e.limitType===t.limitType}function lo(e){return`${qs(ft(e))}|lt:${e.limitType}`}function hs(e){return`Query(target=${Ku(ft(e))}; limitType=${e.limitType})`}function js(e,t){return t.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):v.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(e,t)&&function(n,s){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Mi(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,ye(n),s)||n.endAt&&!function(i,r,o){const a=Mi(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,ye(n),s))}(e,t)}function sc(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function fo(e){return(t,n)=>{let s=!1;for(const i of ye(e)){const r=ic(i,t,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function ic(e,t,n){const s=e.field.isKeyField()?v.comparator(t.key,n.key):function(i,r,o){const a=r.data.field(i),u=o.data.field(i);return a!==null&&u!==null?Ut(a,u):I()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return I()}}/**
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
 */function go(e,t){if(e.gt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:sn(t)?"-0":t}}function po(e){return{integerValue:""+e}}function rc(e,t){return Bu(t)?po(t):go(e,t)}/**
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
 */class xn{constructor(){this._=void 0}}function oc(e,t,n){return e instanceof on?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,t):e instanceof ve?yo(e,t):e instanceof we?vo(e,t):function(s,i){const r=mo(s,i),o=Pi(r)+Pi(s.yt);return as(r)&&as(s.yt)?po(o):go(s.It,o)}(e,t)}function ac(e,t,n){return e instanceof ve?yo(e,t):e instanceof we?vo(e,t):n}function mo(e,t){return e instanceof an?as(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class on extends xn{}class ve extends xn{constructor(t){super(),this.elements=t}}function yo(e,t){const n=wo(t);for(const s of e.elements)n.some(i=>ot(i,s))||n.push(s);return{arrayValue:{values:n}}}class we extends xn{constructor(t){super(),this.elements=t}}function vo(e,t){let n=wo(t);for(const s of e.elements)n=n.filter(i=>!ot(i,s));return{arrayValue:{values:n}}}class an extends xn{constructor(t,n){super(),this.It=t,this.yt=n}}function Pi(e){return O(e.integerValue||e.doubleValue)}function wo(e){return Us(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function uc(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof ve&&s instanceof ve||n instanceof we&&s instanceof we?Pt(n.elements,s.elements,ot):n instanceof an&&s instanceof an?ot(n.yt,s.yt):n instanceof on&&s instanceof on}(e.transform,t.transform)}class cc{constructor(t,n){this.version=t,this.transformResults=n}}class ct{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new ct}static exists(t){return new ct(void 0,t)}static updateTime(t){return new ct(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Qe(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class _n{}function Eo(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Io(e.key,ct.none()):new _e(e.key,e.data,ct.none());{const n=e.data,s=nt.empty();let i=new P(z.comparator);for(let r of t.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Nt(e.key,s,new it(i.toArray()),ct.none())}}function hc(e,t,n){e instanceof _e?function(s,i,r){const o=s.value.clone(),a=Ui(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(e,t,n):e instanceof Nt?function(s,i,r){if(!Qe(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Ui(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(To(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(e,t,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,t,n)}function ie(e,t,n,s){return e instanceof _e?function(i,r,o,a){if(!Qe(i.precondition,r))return o;const u=i.value.clone(),c=qi(i.fieldTransforms,a,r);return u.setAll(c),r.convertToFoundDocument(r.version,u).setHasLocalMutations(),null}(e,t,n,s):e instanceof Nt?function(i,r,o,a){if(!Qe(i.precondition,r))return o;const u=qi(i.fieldTransforms,a,r),c=r.data;return c.setAll(To(i)),c.setAll(u),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(e,t,n,s):function(i,r,o){return Qe(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(e,t,n)}function lc(e,t){let n=null;for(const s of e.fieldTransforms){const i=t.data.field(s.field),r=mo(s.transform,i||null);r!=null&&(n===null&&(n=nt.empty()),n.set(s.field,r))}return n||null}function Fi(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Pt(n,s,(i,r)=>uc(i,r))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class _e extends _n{constructor(t,n,s,i=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Nt extends _n{constructor(t,n,s,i,r=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function To(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function Ui(e,t,n){const s=new Map;R(e.length===n.length);for(let i=0;i<n.length;i++){const r=e[i],o=r.transform,a=t.data.field(r.field);s.set(r.field,ac(o,a,n[i]))}return s}function qi(e,t,n){const s=new Map;for(const i of e){const r=i.transform,o=n.data.field(i.field);s.set(i.field,oc(r,o,t))}return s}class Io extends _n{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class dc extends _n{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class fc{constructor(t){this.count=t}}/**
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
 */var M,D;function gc(e){switch(e){default:return I();case f.CANCELLED:case f.UNKNOWN:case f.DEADLINE_EXCEEDED:case f.RESOURCE_EXHAUSTED:case f.INTERNAL:case f.UNAVAILABLE:case f.UNAUTHENTICATED:return!1;case f.INVALID_ARGUMENT:case f.NOT_FOUND:case f.ALREADY_EXISTS:case f.PERMISSION_DENIED:case f.FAILED_PRECONDITION:case f.ABORTED:case f.OUT_OF_RANGE:case f.UNIMPLEMENTED:case f.DATA_LOSS:return!0}}function Co(e){if(e===void 0)return dt("GRPC error has no .code"),f.UNKNOWN;switch(e){case M.OK:return f.OK;case M.CANCELLED:return f.CANCELLED;case M.UNKNOWN:return f.UNKNOWN;case M.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case M.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case M.INTERNAL:return f.INTERNAL;case M.UNAVAILABLE:return f.UNAVAILABLE;case M.UNAUTHENTICATED:return f.UNAUTHENTICATED;case M.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case M.NOT_FOUND:return f.NOT_FOUND;case M.ALREADY_EXISTS:return f.ALREADY_EXISTS;case M.PERMISSION_DENIED:return f.PERMISSION_DENIED;case M.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case M.ABORTED:return f.ABORTED;case M.OUT_OF_RANGE:return f.OUT_OF_RANGE;case M.UNIMPLEMENTED:return f.UNIMPLEMENTED;case M.DATA_LOSS:return f.DATA_LOSS;default:return I()}}(D=M||(M={}))[D.OK=0]="OK",D[D.CANCELLED=1]="CANCELLED",D[D.UNKNOWN=2]="UNKNOWN",D[D.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",D[D.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",D[D.NOT_FOUND=5]="NOT_FOUND",D[D.ALREADY_EXISTS=6]="ALREADY_EXISTS",D[D.PERMISSION_DENIED=7]="PERMISSION_DENIED",D[D.UNAUTHENTICATED=16]="UNAUTHENTICATED",D[D.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",D[D.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",D[D.ABORTED=10]="ABORTED",D[D.OUT_OF_RANGE=11]="OUT_OF_RANGE",D[D.UNIMPLEMENTED=12]="UNIMPLEMENTED",D[D.INTERNAL=13]="INTERNAL",D[D.UNAVAILABLE=14]="UNAVAILABLE",D[D.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Ht{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,t))return r}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),i=this.inner[s];if(i===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(t){zt(this.inner,(n,s)=>{for(const[i,r]of s)t(i,r)})}isEmpty(){return oo(this.inner)}size(){return this.innerSize}}/**
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
 */const pc=new F(v.comparator);function gt(){return pc}const So=new F(v.comparator);function Zt(...e){let t=So;for(const n of e)t=t.insert(n.key,n);return t}function Ao(e){let t=So;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function It(){return re()}function ko(){return re()}function re(){return new Ht(e=>e.toString(),(e,t)=>e.isEqual(t))}const mc=new F(v.comparator),yc=new P(v.comparator);function k(...e){let t=yc;for(const n of e)t=t.add(n);return t}const vc=new P(b);function Do(){return vc}/**
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
 */class Ln{constructor(t,n,s,i,r){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const i=new Map;return i.set(t,Le.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new Ln(S.min(),i,Do(),gt(),k())}}class Le{constructor(t,n,s,i,r){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new Le(s,n,k(),k(),k())}}/**
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
 */class ze{constructor(t,n,s,i){this.Tt=t,this.removedTargetIds=n,this.key=s,this.Et=i}}class No{constructor(t,n){this.targetId=t,this.At=n}}class bo{constructor(t,n,s=X.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Bi{constructor(){this.Rt=0,this.bt=$i(),this.Pt=X.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(t){t.approximateByteSize()>0&&(this.Vt=!0,this.Pt=t)}xt(){let t=k(),n=k(),s=k();return this.bt.forEach((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:I()}}),new Le(this.Pt,this.vt,t,n,s)}Nt(){this.Vt=!1,this.bt=$i()}kt(t,n){this.Vt=!0,this.bt=this.bt.insert(t,n)}Ot(t){this.Vt=!0,this.bt=this.bt.remove(t)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class wc{constructor(t){this.Bt=t,this.Lt=new Map,this.Ut=gt(),this.qt=ji(),this.Kt=new P(b)}Gt(t){for(const n of t.Tt)t.Et&&t.Et.isFoundDocument()?this.Qt(n,t.Et):this.jt(n,t.key,t.Et);for(const n of t.removedTargetIds)this.jt(n,t.key,t.Et)}Wt(t){this.forEachTarget(t,n=>{const s=this.zt(n);switch(t.state){case 0:this.Ht(n)&&s.Ct(t.resumeToken);break;case 1:s.Ft(),s.St||s.Nt(),s.Ct(t.resumeToken);break;case 2:s.Ft(),s.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(s.$t(),s.Ct(t.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),s.Ct(t.resumeToken));break;default:I()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Lt.forEach((s,i)=>{this.Ht(i)&&n(i)})}Yt(t){const n=t.targetId,s=t.At.count,i=this.Xt(n);if(i){const r=i.target;if(us(r))if(s===0){const o=new v(r.path);this.jt(n,o,j.newNoDocument(o,S.min()))}else R(s===1);else this.Zt(n)!==s&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(t){const n=new Map;this.Lt.forEach((r,o)=>{const a=this.Xt(o);if(a){if(r.current&&us(a.target)){const u=new v(a.target.path);this.Ut.get(u)!==null||this.ee(o,u)||this.jt(o,u,j.newNoDocument(u,t))}r.Dt&&(n.set(o,r.xt()),r.Nt())}});let s=k();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Xt(u);return!c||c.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Ut.forEach((r,o)=>o.setReadTime(t));const i=new Ln(t,n,this.Kt,this.Ut,s);return this.Ut=gt(),this.qt=ji(),this.Kt=new P(b),i}Qt(t,n){if(!this.Ht(t))return;const s=this.ee(t,n.key)?2:0;this.zt(t).kt(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(t))}jt(t,n,s){if(!this.Ht(t))return;const i=this.zt(t);this.ee(t,n)?i.kt(n,1):i.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(t)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(t){this.Lt.delete(t)}Zt(t){const n=this.zt(t).xt();return this.Bt.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Mt(t){this.zt(t).Mt()}zt(t){let n=this.Lt.get(t);return n||(n=new Bi,this.Lt.set(t,n)),n}ne(t){let n=this.qt.get(t);return n||(n=new P(b),this.qt=this.qt.insert(t,n)),n}Ht(t){const n=this.Xt(t)!==null;return n||y("WatchChangeAggregator","Detected inactive target",t),n}Xt(t){const n=this.Lt.get(t);return n&&n.St?null:this.Bt.se(t)}Jt(t){this.Lt.set(t,new Bi),this.Bt.getRemoteKeysForTarget(t).forEach(n=>{this.jt(t,n,null)})}ee(t,n){return this.Bt.getRemoteKeysForTarget(t).has(n)}}function ji(){return new F(v.comparator)}function $i(){return new F(v.comparator)}/**
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
 */const Ec=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Tc=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Ic{constructor(t,n){this.databaseId=t,this.gt=n}}function un(e,t){return e.gt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ro(e,t){return e.gt?t.toBase64():t.toUint8Array()}function Cc(e,t){return un(e,t.toTimestamp())}function ht(e){return R(!!e),S.fromTimestamp(function(t){const n=mt(t);return new V(n.seconds,n.nanos)}(e))}function $s(e,t){return function(n){return new _(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function xo(e){const t=_.fromString(e);return R(Mo(t)),t}function ls(e,t){return $s(e.databaseId,t.path)}function Qn(e,t){const n=xo(t);if(n.get(1)!==e.databaseId.projectId)throw new w(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new w(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new v(_o(n))}function ds(e,t){return $s(e.databaseId,t)}function Sc(e){const t=xo(e);return t.length===4?_.emptyPath():_o(t)}function fs(e){return new _(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function _o(e){return R(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Ki(e,t,n){return{name:ls(e,t),fields:n.value.mapValue.fields}}function Ac(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:I()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],r=function(u,c){return u.gt?(R(c===void 0||typeof c=="string"),X.fromBase64String(c||"")):(R(c===void 0||c instanceof Uint8Array),X.fromUint8Array(c||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const c=u.code===void 0?f.UNKNOWN:Co(u.code);return new w(c,u.message||"")}(o);n=new bo(s,i,r,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const i=Qn(e,s.document.name),r=ht(s.document.updateTime),o=new nt({mapValue:{fields:s.document.fields}}),a=j.newFoundDocument(i,r,o),u=s.targetIds||[],c=s.removedTargetIds||[];n=new ze(u,c,a.key,a)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const i=Qn(e,s.document),r=s.readTime?ht(s.readTime):S.min(),o=j.newNoDocument(i,r),a=s.removedTargetIds||[];n=new ze([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const i=Qn(e,s.document),r=s.removedTargetIds||[];n=new ze([],r,i,null)}else{if(!("filter"in t))return I();{t.filter;const s=t.filter;s.targetId;const i=s.count||0,r=new fc(i),o=s.targetId;n=new No(o,r)}}return n}function kc(e,t){let n;if(t instanceof _e)n={update:Ki(e,t.key,t.value)};else if(t instanceof Io)n={delete:ls(e,t.key)};else if(t instanceof Nt)n={update:Ki(e,t.key,t.data),updateMask:Vc(t.fieldMask)};else{if(!(t instanceof dc))return I();n={verify:ls(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof on)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ve)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof we)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof an)return{fieldPath:r.field.canonicalString(),increment:o.yt};throw I()}(0,s))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Cc(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:I()}(e,t.precondition)),n}function Dc(e,t){return e&&e.length>0?(R(t!==void 0),e.map(n=>function(s,i){let r=s.updateTime?ht(s.updateTime):ht(i);return r.isEqual(S.min())&&(r=ht(i)),new cc(r,s.transformResults||[])}(n,t))):[]}function Nc(e,t){return{documents:[ds(e,t.path)]}}function bc(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=ds(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=ds(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(u){if(u.length===0)return;const c=u.map(h=>function(l){if(l.op==="=="){if(_i(l.value))return{unaryFilter:{field:xt(l.field),op:"IS_NAN"}};if(xi(l.value))return{unaryFilter:{field:xt(l.field),op:"IS_NULL"}}}else if(l.op==="!="){if(_i(l.value))return{unaryFilter:{field:xt(l.field),op:"IS_NOT_NAN"}};if(xi(l.value))return{unaryFilter:{field:xt(l.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xt(l.field),op:Lc(l.op),value:l.value}}}(h));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(t.filters);i&&(n.structuredQuery.where=i);const r=function(u){if(u.length!==0)return u.map(c=>function(h){return{field:xt(h.field),direction:_c(h.dir)}}(c))}(t.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(u,c){return u.gt||Dn(c)?c:{value:c}}(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),n}function Rc(e){let t=Sc(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){R(s===1);const h=n.from[0];h.allDescendants?i=h.collectionId:t=t.child(h.collectionId)}let r=[];n.where&&(r=Lo(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(h=>function(l){return new se(Lt(l.field),function(g){switch(g){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(l.direction))}(h)));let a=null;n.limit&&(a=function(h){let l;return l=typeof h=="object"?h.value:h,Dn(l)?null:l}(n.limit));let u=null;n.startAt&&(u=function(h){const l=!!h.before,g=h.values||[];return new rn(g,l)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const l=!h.before,g=h.values||[];return new rn(g,l)}(n.endAt)),Zu(t,i,o,r,a,"F",u,c)}function xc(e,t){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return I()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function Lo(e){return e?e.unaryFilter!==void 0?[Oc(e)]:e.fieldFilter!==void 0?[Mc(e)]:e.compositeFilter!==void 0?e.compositeFilter.filters.map(t=>Lo(t)).reduce((t,n)=>t.concat(n)):I():[]}function _c(e){return Ec[e]}function Lc(e){return Tc[e]}function xt(e){return{fieldPath:e.canonicalString()}}function Lt(e){return z.fromServerFormat(e.fieldPath)}function Mc(e){return J.create(Lt(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return I()}}(e.fieldFilter.op),e.fieldFilter.value)}function Oc(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Lt(e.unaryFilter.field);return J.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Lt(e.unaryFilter.field);return J.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Lt(e.unaryFilter.field);return J.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Lt(e.unaryFilter.field);return J.create(i,"!=",{nullValue:"NULL_VALUE"});default:return I()}}function Vc(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Mo(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class Pc{constructor(t,n,s,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(t.key)&&hc(r,t,s[i])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=ie(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=ie(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=ko();return this.mutations.forEach(i=>{const r=t.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const u=Eo(o,a);u!==null&&s.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(S.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),k())}isEqual(t){return this.batchId===t.batchId&&Pt(this.mutations,t.mutations,(n,s)=>Fi(n,s))&&Pt(this.baseMutations,t.baseMutations,(n,s)=>Fi(n,s))}}class Ks{constructor(t,n,s,i){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(t,n,s){R(t.mutations.length===s.length);let i=mc;const r=t.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Ks(t,n,s,i)}}/**
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
 */class Fc{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class St{constructor(t,n,s,i,r=S.min(),o=S.min(),a=X.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new St(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new St(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new St(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
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
 */class Uc{constructor(t){this.re=t}}function qc(e){const t=Rc({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?cs(t,t.limit,"L"):t}/**
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
 */class Bc{constructor(){this.Ye=new jc}addToCollectionParentIndex(t,n){return this.Ye.add(n),d.resolve()}getCollectionParents(t,n){return d.resolve(this.Ye.getEntries(n))}addFieldIndex(t,n){return d.resolve()}deleteFieldIndex(t,n){return d.resolve()}getDocumentsMatchingTarget(t,n){return d.resolve(null)}getIndexType(t,n){return d.resolve(0)}getFieldIndexes(t,n){return d.resolve([])}getNextCollectionGroupToUpdate(t){return d.resolve(null)}getMinOffset(t,n){return d.resolve(pt.min())}getMinOffsetFromCollectionGroup(t,n){return d.resolve(pt.min())}updateCollectionGroup(t,n,s){return d.resolve()}updateIndexEntries(t,n){return d.resolve()}}class jc{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n]||new P(_.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(t){return(this.index[t]||new P(_.comparator)).toArray()}}/**
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
 */class qt{constructor(t){this.bn=t}next(){return this.bn+=2,this.bn}static Pn(){return new qt(0)}static vn(){return new qt(-1)}}/**
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
 */class $c{constructor(){this.changes=new Ht(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,j.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?d.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Kc{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class Gc{constructor(t,n,s,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(s=i,this.getBaseDocument(t,n,s))).next(i=>(s!==null&&ie(s.mutation,i,it.empty(),V.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,k()).next(()=>s))}getLocalViewOfDocuments(t,n,s=k()){const i=It();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,s).next(r=>{let o=Zt();return r.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=It();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,k()))}populateOverlays(t,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(t,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,i){let r=gt();const o=re(),a=re();return n.forEach((u,c)=>{const h=s.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof Nt)?r=r.insert(c.key,c):h!==void 0&&(o.set(c.key,h.mutation.getFieldMask()),ie(h.mutation,c,h.mutation.getFieldMask(),V.now()))}),this.recalculateAndSaveOverlays(t,r).next(u=>(u.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var l;return a.set(c,new Kc(h,(l=o.get(c))!==null&&l!==void 0?l:null))}),a))}recalculateAndSaveOverlays(t,n){const s=re();let i=new F((o,a)=>o-a),r=k();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=s.get(u)||it.empty();h=a.applyToLocalView(c,h),s.set(u,h);const l=(i.get(a.batchId)||k()).add(u);i=i.insert(a.batchId,l)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,h=u.value,l=ko();h.forEach(g=>{if(!r.has(g)){const p=Eo(n.get(g),s.get(g));p!==null&&l.set(g,p),r=r.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,l))}return d.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(i){return v.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):nc(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,i-r.size):d.resolve(It());let a=-1,u=r;return o.next(c=>d.forEach(c,(h,l)=>(a<l.largestBatchId&&(a=l.largestBatchId),r.get(h)?d.resolve():this.getBaseDocument(t,h,l).next(g=>{u=u.insert(h,g)}))).next(()=>this.populateOverlays(t,c,r)).next(()=>this.computeViews(t,u,c,k())).next(h=>({batchId:a,changes:Ao(h)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new v(n)).next(s=>{let i=Zt();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const i=n.collectionGroup;let r=Zt();return this.indexManager.getCollectionParents(t,i).next(o=>d.forEach(o,a=>{const u=function(c,h){return new Nn(h,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,u,s).next(c=>{c.forEach((h,l)=>{r=r.insert(h,l)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(t,n,s){let i;return this.remoteDocumentCache.getAllFromCollection(t,n.path,s).next(r=>(i=r,this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId))).next(r=>{r.forEach((a,u)=>{const c=u.getKey();i.get(c)===null&&(i=i.insert(c,j.newInvalidDocument(c)))});let o=Zt();return i.forEach((a,u)=>{const c=r.get(a);c!==void 0&&ie(c.mutation,u,it.empty(),V.now()),js(n,u)&&(o=o.insert(a,u))}),o})}getBaseDocument(t,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(t,n):d.resolve(j.newInvalidDocument(n))}}/**
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
 */class Qc{constructor(t){this.It=t,this.Zn=new Map,this.ts=new Map}getBundleMetadata(t,n){return d.resolve(this.Zn.get(n))}saveBundleMetadata(t,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:ht(s.createTime)}),d.resolve()}getNamedQuery(t,n){return d.resolve(this.ts.get(n))}saveNamedQuery(t,n){return this.ts.set(n.name,function(s){return{name:s.name,query:qc(s.bundledQuery),readTime:ht(s.readTime)}}(n)),d.resolve()}}/**
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
 */class zc{constructor(){this.overlays=new F(v.comparator),this.es=new Map}getOverlay(t,n){return d.resolve(this.overlays.get(n))}getOverlays(t,n){const s=It();return d.forEach(n,i=>this.getOverlay(t,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((i,r)=>{this.ue(t,n,r)}),d.resolve()}removeOverlaysForBatchId(t,n,s){const i=this.es.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.es.delete(s)),d.resolve()}getOverlaysForCollection(t,n,s){const i=It(),r=n.length+1,o=new v(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&u.largestBatchId>s&&i.set(u.getKey(),u)}return d.resolve(i)}getOverlaysForCollectionGroup(t,n,s,i){let r=new F((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let h=r.get(c.largestBatchId);h===null&&(h=It(),r=r.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=It(),u=r.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return d.resolve(a)}ue(t,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(s.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Fc(n,s));let r=this.es.get(n);r===void 0&&(r=k(),this.es.set(n,r)),this.es.set(n,r.add(s.key))}}/**
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
 */class Gs{constructor(){this.ns=new P(U.ss),this.rs=new P(U.os)}isEmpty(){return this.ns.isEmpty()}addReference(t,n){const s=new U(t,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.cs(new U(t,n))}hs(t,n){t.forEach(s=>this.removeReference(s,n))}ls(t){const n=new v(new _([])),s=new U(n,t),i=new U(n,t+1),r=[];return this.rs.forEachInRange([s,i],o=>{this.cs(o),r.push(o.key)}),r}fs(){this.ns.forEach(t=>this.cs(t))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const n=new v(new _([])),s=new U(n,t),i=new U(n,t+1);let r=k();return this.rs.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(t){const n=new U(t,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class U{constructor(t,n){this.key=t,this._s=n}static ss(t,n){return v.comparator(t.key,n.key)||b(t._s,n._s)}static os(t,n){return b(t._s,n._s)||v.comparator(t.key,n.key)}}/**
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
 */class Hc{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new P(U.ss)}checkEmpty(t){return d.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Pc(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new U(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return d.resolve(o)}lookupMutationBatch(t,n){return d.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,i=this.ps(s),r=i<0?0:i;return d.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return d.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(t){return d.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new U(n,0),i=new U(n,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([s,i],o=>{const a=this.ys(o._s);r.push(a)}),d.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new P(b);return n.forEach(i=>{const r=new U(i,0),o=new U(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([r,o],a=>{s=s.add(a._s)})}),d.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,i=s.length+1;let r=s;v.isDocumentKey(r)||(r=r.child(""));const o=new U(new v(r),0);let a=new P(b);return this.gs.forEachWhile(u=>{const c=u.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(u._s)),!0)},o),d.resolve(this.Is(a))}Is(t){const n=[];return t.forEach(s=>{const i=this.ys(s);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){R(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return d.forEach(n.mutations,i=>{const r=new U(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.gs=s})}An(t){}containsKey(t,n){const s=new U(n,0),i=this.gs.firstAfterOrEqual(s);return d.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,d.resolve()}Ts(t,n){return this.ps(t)}ps(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}ys(t){const n=this.ps(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Wc{constructor(t){this.Es=t,this.docs=new F(v.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return d.resolve(s?s.document.mutableCopy():j.newInvalidDocument(n))}getEntries(t,n){let s=gt();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():j.newInvalidDocument(i))}),d.resolve(s)}getAllFromCollection(t,n,s){let i=gt();const r=new v(n.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:u}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||Vu(Ou(u),s)<=0||(i=i.insert(u.key,u.mutableCopy()))}return d.resolve(i)}getAllFromCollectionGroup(t,n,s,i){I()}As(t,n){return d.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new Xc(this)}getSize(t){return d.resolve(this.size)}}class Xc extends $c{constructor(t){super(),this.Yn=t}applyChanges(t){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(t,i)):this.Yn.removeEntry(s)}),d.waitFor(n)}getFromCache(t,n){return this.Yn.getEntry(t,n)}getAllFromCache(t,n){return this.Yn.getEntries(t,n)}}/**
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
 */class Yc{constructor(t){this.persistence=t,this.Rs=new Ht(n=>qs(n),Bs),this.lastRemoteSnapshotVersion=S.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Gs,this.targetCount=0,this.vs=qt.Pn()}forEachTarget(t,n){return this.Rs.forEach((s,i)=>n(i)),d.resolve()}getLastRemoteSnapshotVersion(t){return d.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return d.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),d.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),d.resolve()}Dn(t){this.Rs.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.vs=new qt(n),this.highestTargetId=n),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,n){return this.Dn(n),this.targetCount+=1,d.resolve()}updateTargetData(t,n){return this.Dn(n),d.resolve()}removeTargetData(t,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,d.resolve()}removeTargets(t,n,s){let i=0;const r=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),d.waitFor(r).next(()=>i)}getTargetCount(t){return d.resolve(this.targetCount)}getTargetData(t,n){const s=this.Rs.get(n)||null;return d.resolve(s)}addMatchingKeys(t,n,s){return this.Ps.us(n,s),d.resolve()}removeMatchingKeys(t,n,s){this.Ps.hs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(t,o))}),d.waitFor(r)}removeMatchingKeysForTargetId(t,n){return this.Ps.ls(n),d.resolve()}getMatchingKeysForTargetId(t,n){const s=this.Ps.ds(n);return d.resolve(s)}containsKey(t,n){return d.resolve(this.Ps.containsKey(n))}}/**
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
 */class Jc{constructor(t,n){this.Vs={},this.overlays={},this.Ss=new Fs(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new Yc(this),this.indexManager=new Bc,this.remoteDocumentCache=function(s){return new Wc(s)}(s=>this.referenceDelegate.xs(s)),this.It=new Uc(n),this.Ns=new Qc(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new zc,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.Vs[t.toKey()];return s||(s=new Hc(n,this.referenceDelegate),this.Vs[t.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,n,s){y("MemoryPersistence","Starting transaction:",t);const i=new Zc(this.Ss.next());return this.referenceDelegate.ks(),s(i).next(r=>this.referenceDelegate.Os(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ms(t,n){return d.or(Object.values(this.Vs).map(s=>()=>s.containsKey(t,n)))}}class Zc extends Fu{constructor(t){super(),this.currentSequenceNumber=t}}class Qs{constructor(t){this.persistence=t,this.Fs=new Gs,this.$s=null}static Bs(t){return new Qs(t)}get Ls(){if(this.$s)return this.$s;throw I()}addReference(t,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),d.resolve()}removeReference(t,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),d.resolve()}markPotentiallyOrphaned(t,n){return this.Ls.add(n.toString()),d.resolve()}removeTarget(t,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(r=>this.Ls.add(r.toString()))}).next(()=>s.removeTargetData(t,n))}ks(){this.$s=new Set}Os(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return d.forEach(this.Ls,s=>{const i=v.fromPath(s);return this.Us(t,i).next(r=>{r||n.removeEntry(i,S.min())})}).next(()=>(this.$s=null,n.apply(t)))}updateLimboDocument(t,n){return this.Us(t,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(t){return 0}Us(t,n){return d.or([()=>d.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ms(t,n)])}}/**
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
 */class zs{constructor(t,n,s,i){this.targetId=t,this.fromCache=n,this.Si=s,this.Di=i}static Ci(t,n){let s=k(),i=k();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new zs(t,n.fromCache,s,i)}}/**
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
 */class th{constructor(){this.xi=!1}initialize(t,n){this.Ni=t,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(t,n,s,i){return this.ki(t,n).next(r=>r||this.Oi(t,n,i,s)).next(r=>r||this.Mi(t,n))}ki(t,n){if(Vi(n))return d.resolve(null);let s=ft(n);return this.indexManager.getIndexType(t,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=cs(n,null,"F"),s=ft(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(r=>{const o=k(...r);return this.Ni.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(u=>{const c=this.Fi(n,a);return this.$i(n,c,o,u.readTime)?this.ki(t,cs(n,null,"F")):this.Bi(t,c,n,u)}))})))}Oi(t,n,s,i){return Vi(n)||i.isEqual(S.min())?this.Mi(t,n):this.Ni.getDocuments(t,s).next(r=>{const o=this.Fi(n,r);return this.$i(n,o,s,i)?this.Mi(t,n):(Di()<=oe.DEBUG&&y("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),hs(n)),this.Bi(t,o,n,Mu(i,-1)))})}Fi(t,n){let s=new P(fo(t));return n.forEach((i,r)=>{js(t,r)&&(s=s.add(r))}),s}$i(t,n,s,i){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const r=t.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Mi(t,n){return Di()<=oe.DEBUG&&y("QueryEngine","Using full collection scan to execute query:",hs(n)),this.Ni.getDocumentsMatchingQuery(t,n,pt.min())}Bi(t,n,s,i){return this.Ni.getDocumentsMatchingQuery(t,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class eh{constructor(t,n,s,i){this.persistence=t,this.Li=n,this.It=i,this.Ui=new F(b),this.qi=new Ht(r=>qs(r),Bs),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(s)}Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Gc(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ui))}}function nh(e,t,n,s){return new eh(e,t,n,s)}async function Oo(e,t){const n=C(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Qi(t),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let u=k();for(const c of i){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of r){a.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(s,u).next(c=>({ji:c,removedBatchIds:o,addedBatchIds:a}))})})}function sh(e,t){const n=C(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=t.batch.keys(),r=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,u,c){const h=u.batch,l=h.keys();let g=d.resolve();return l.forEach(p=>{g=g.next(()=>c.getEntry(a,p)).next(T=>{const A=u.docVersions.get(p);R(A!==null),T.version.compareTo(A)<0&&(h.applyToRemoteDocument(T,u),T.isValidDocument()&&(T.setReadTime(u.commitVersion),c.addEntry(T)))})}),g.next(()=>o.mutationQueue.removeMutationBatch(a,h))}(n,s,t,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=k();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(a=a.add(o.batch.mutations[u].key));return a}(t))).next(()=>n.localDocuments.getDocuments(s,i))})}function Vo(e){const t=C(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Cs.getLastRemoteSnapshotVersion(n))}function ih(e,t){const n=C(e),s=t.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];t.targetChanges.forEach((h,l)=>{const g=i.get(l);if(!g)return;a.push(n.Cs.removeMatchingKeys(r,h.removedDocuments,l).next(()=>n.Cs.addMatchingKeys(r,h.addedDocuments,l)));let p=g.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.has(l)?p=p.withResumeToken(X.EMPTY_BYTE_STRING,S.min()).withLastLimboFreeSnapshotVersion(S.min()):h.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(h.resumeToken,s)),i=i.insert(l,p),function(T,A,N){return T.resumeToken.approximateByteSize()===0||A.snapshotVersion.toMicroseconds()-T.snapshotVersion.toMicroseconds()>=3e8?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(g,p,h)&&a.push(n.Cs.updateTargetData(r,p))});let u=gt(),c=k();if(t.documentUpdates.forEach(h=>{t.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,h))}),a.push(rh(r,o,t.documentUpdates).next(h=>{u=h.Wi,c=h.zi})),!s.isEqual(S.min())){const h=n.Cs.getLastRemoteSnapshotVersion(r).next(l=>n.Cs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(h)}return d.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,u,c)).next(()=>u)}).then(r=>(n.Ui=i,r))}function rh(e,t,n){let s=k(),i=k();return n.forEach(r=>s=s.add(r)),t.getEntries(e,s).next(r=>{let o=gt();return n.forEach((a,u)=>{const c=r.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(S.min())?(t.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(u),o=o.insert(a,u)):y("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Wi:o,zi:i}})}function oh(e,t){const n=C(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function ah(e,t){const n=C(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Cs.getTargetData(s,t).next(r=>r?(i=r,d.resolve(i)):n.Cs.allocateTargetId(s).next(o=>(i=new St(t,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ui.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(s.targetId,s),n.qi.set(t,s.targetId)),s})}async function gs(e,t,n){const s=C(e),i=s.Ui.get(t),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!xe(o))throw o;y("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.Ui=s.Ui.remove(t),s.qi.delete(i.target)}function Gi(e,t,n){const s=C(e);let i=S.min(),r=k();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,u,c){const h=C(a),l=h.qi.get(c);return l!==void 0?d.resolve(h.Ui.get(l)):h.Cs.getTargetData(u,c)}(s,o,ft(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(u=>{r=u})}).next(()=>s.Li.getDocumentsMatchingQuery(o,t,n?i:S.min(),n?r:k())).next(a=>(uh(s,sc(t),a),{documents:a,Hi:r})))}function uh(e,t,n){let s=e.Ki.get(t)||S.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),e.Ki.set(t,s)}class Qi{constructor(){this.activeTargetIds=Do()}er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class ch{constructor(){this.Lr=new Qi,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Lr.er(t),this.Ur[t]||"not-current"}updateQueryState(t,n,s){this.Ur[t]=n}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.Ur[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new Qi,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class hh{qr(t){}shutdown(){}}/**
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
 */class zi{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const lh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class dh{constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}}/**
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
 */class fh extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.oo=n+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(t,n,s,i,r){const o=this.ho(t,n);y("RestConnection","Sending: ",o,s);const a={};return this.lo(a,i,r),this.fo(t,o,a,s).then(u=>(y("RestConnection","Received: ",u),u),u=>{throw rs("RestConnection",`${t} failed with error: `,u,"url: ",o,"request:",s),u})}_o(t,n,s,i,r,o){return this.ao(t,n,s,i,r)}lo(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+Qt,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>t[r]=i),s&&s.headers.forEach((i,r)=>t[r]=i)}ho(t,n){const s=lh[t];return`${this.oo}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}fo(t,n,s,i){return new Promise((r,o)=>{const a=new Su;a.setWithCredentials(!0),a.listenOnce(Tu.COMPLETE,()=>{var c;try{switch(a.getLastErrorCode()){case Gn.NO_ERROR:const h=a.getResponseJson();y("Connection","XHR received:",JSON.stringify(h)),r(h);break;case Gn.TIMEOUT:y("Connection",'RPC "'+t+'" timed out'),o(new w(f.DEADLINE_EXCEEDED,"Request time out"));break;case Gn.HTTP_ERROR:const l=a.getStatus();if(y("Connection",'RPC "'+t+'" failed with status:',l,"response text:",a.getResponseText()),l>0){let g=a.getResponseJson();Array.isArray(g)&&(g=g[0]);const p=(c=g)===null||c===void 0?void 0:c.error;if(p&&p.status&&p.message){const T=function(A){const N=A.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(N)>=0?N:f.UNKNOWN}(p.status);o(new w(T,p.message))}else o(new w(f.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new w(f.UNAVAILABLE,"Connection failed."));break;default:I()}}finally{y("Connection",'RPC "'+t+'" completed.')}});const u=JSON.stringify(i);a.send(n,"POST",u,s,15)})}wo(t,n,s){const i=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=wu(),o=Eu(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Cu({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const u=i.join("");y("Connection","Creating WebChannel: "+u,a);const c=r.createWebChannel(u,a);let h=!1,l=!1;const g=new dh({Hr:T=>{l?y("Connection","Not sending because WebChannel is closed:",T):(h||(y("Connection","Opening WebChannel transport."),c.open(),h=!0),y("Connection","WebChannel sending:",T),c.send(T))},Jr:()=>c.close()}),p=(T,A,N)=>{T.listen(A,Z=>{try{N(Z)}catch(G){setTimeout(()=>{throw G},0)}})};return p(c,je.EventType.OPEN,()=>{l||y("Connection","WebChannel transport opened.")}),p(c,je.EventType.CLOSE,()=>{l||(l=!0,y("Connection","WebChannel transport closed"),g.io())}),p(c,je.EventType.ERROR,T=>{l||(l=!0,rs("Connection","WebChannel transport errored:",T),g.io(new w(f.UNAVAILABLE,"The operation could not be completed")))}),p(c,je.EventType.MESSAGE,T=>{var A;if(!l){const N=T.data[0];R(!!N);const Z=N,G=Z.error||((A=Z[0])===null||A===void 0?void 0:A.error);if(G){y("Connection","WebChannel received error:",G);const Pe=G.status;let Rt=function(fa){const li=M[fa];if(li!==void 0)return Co(li)}(Pe),Fe=G.message;Rt===void 0&&(Rt=f.INTERNAL,Fe="Unknown error status: "+Pe+" with message "+G.message),l=!0,g.io(new w(Rt,Fe)),c.close()}else y("Connection","WebChannel received:",N),g.ro(N)}}),p(o,Iu.STAT_EVENT,T=>{T.stat===Ai.PROXY?y("Connection","Detected buffering proxy"):T.stat===Ai.NOPROXY&&y("Connection","Detected no buffering proxy")}),setTimeout(()=>{g.so()},0),g}}function zn(){return typeof document<"u"?document:null}/**
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
 */function Mn(e){return new Ic(e,!0)}class Po{constructor(t,n,s=1e3,i=1.5,r=6e4){this.Hs=t,this.timerId=n,this.mo=s,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-s);i>0&&y("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),t())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class Fo{constructor(t,n,s,i,r,o,a,u){this.Hs=t,this.vo=s,this.Vo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Po(t,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(t){this.Lo(),this.stream.send(t)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(t,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,t!==4?this.xo.reset():n&&n.code===f.RESOURCE_EXHAUSTED?(dt(n.toString()),dt("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const t=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.So===n&&this.Go(s,i)},s=>{t(()=>{const i=new w(f.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(i)})})}Go(t,n){const s=this.Ko(this.So);this.stream=this.jo(t,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{s(()=>this.Qo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(t){return y("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Ko(t){return n=>{this.Hs.enqueueAndForget(()=>this.So===t?n():(y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class gh extends Fo{constructor(t,n,s,i,r,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.It=r}jo(t,n){return this.connection.wo("Listen",t,n)}onMessage(t){this.xo.reset();const n=Ac(this.It,t),s=function(i){if(!("targetChange"in i))return S.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?S.min():r.readTime?ht(r.readTime):S.min()}(t);return this.listener.Wo(n,s)}zo(t){const n={};n.database=fs(this.It),n.addTarget=function(i,r){let o;const a=r.target;return o=us(a)?{documents:Nc(i,a)}:{query:bc(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=Ro(i,r.resumeToken):r.snapshotVersion.compareTo(S.min())>0&&(o.readTime=un(i,r.snapshotVersion.toTimestamp())),o}(this.It,t);const s=xc(this.It,t);s&&(n.labels=s),this.Bo(n)}Ho(t){const n={};n.database=fs(this.It),n.removeTarget=t,this.Bo(n)}}class ph extends Fo{constructor(t,n,s,i,r,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.It=r,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(t,n){return this.connection.wo("Write",t,n)}onMessage(t){if(R(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Jo){this.xo.reset();const n=Dc(t.writeResults,t.commitTime),s=ht(t.commitTime);return this.listener.Zo(s,n)}return R(!t.writeResults||t.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const t={};t.database=fs(this.It),this.Bo(t)}Xo(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>kc(this.It,s))};this.Bo(n)}}/**
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
 */class mh extends class{}{constructor(t,n,s,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.It=i,this.nu=!1}su(){if(this.nu)throw new w(f.FAILED_PRECONDITION,"The client has already been terminated.")}ao(t,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.ao(t,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new w(f.UNKNOWN,i.toString())})}_o(t,n,s,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection._o(t,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new w(f.UNKNOWN,r.toString())})}terminate(){this.nu=!0}}class yh{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(t){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.cu("Offline")))}set(t){this.lu(),this.iu=0,t==="Online"&&(this.ou=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}au(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(dt(n),this.ou=!1):y("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class vh{constructor(t,n,s,i,r){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=r,this.mu.qr(o=>{s.enqueueAndForget(async()=>{bt(this)&&(y("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=C(a);u._u.add(4),await Me(u),u.gu.set("Unknown"),u._u.delete(4),await On(u)}(this))})}),this.gu=new yh(s,i)}}async function On(e){if(bt(e))for(const t of e.wu)await t(!0)}async function Me(e){for(const t of e.wu)await t(!1)}function Uo(e,t){const n=C(e);n.du.has(t.targetId)||(n.du.set(t.targetId,t),Xs(n)?Ws(n):Wt(n).ko()&&Hs(n,t))}function qo(e,t){const n=C(e),s=Wt(n);n.du.delete(t),s.ko()&&Bo(n,t),n.du.size===0&&(s.ko()?s.Fo():bt(n)&&n.gu.set("Unknown"))}function Hs(e,t){e.yu.Mt(t.targetId),Wt(e).zo(t)}function Bo(e,t){e.yu.Mt(t),Wt(e).Ho(t)}function Ws(e){e.yu=new wc({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),se:t=>e.du.get(t)||null}),Wt(e).start(),e.gu.uu()}function Xs(e){return bt(e)&&!Wt(e).No()&&e.du.size>0}function bt(e){return C(e)._u.size===0}function jo(e){e.yu=void 0}async function wh(e){e.du.forEach((t,n)=>{Hs(e,t)})}async function Eh(e,t){jo(e),Xs(e)?(e.gu.hu(t),Ws(e)):e.gu.set("Unknown")}async function Th(e,t,n){if(e.gu.set("Online"),t instanceof bo&&t.state===2&&t.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.du.delete(o),s.yu.removeTarget(o))}(e,t)}catch(s){y("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await cn(e,s)}else if(t instanceof ze?e.yu.Gt(t):t instanceof No?e.yu.Yt(t):e.yu.Wt(t),!n.isEqual(S.min()))try{const s=await Vo(e.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.yu.te(r);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const c=i.du.get(u);c&&i.du.set(u,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const u=i.du.get(a);if(!u)return;i.du.set(a,u.withResumeToken(X.EMPTY_BYTE_STRING,u.snapshotVersion)),Bo(i,a);const c=new St(u.target,a,1,u.sequenceNumber);Hs(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){y("RemoteStore","Failed to raise snapshot:",s),await cn(e,s)}}async function cn(e,t,n){if(!xe(t))throw t;e._u.add(1),await Me(e),e.gu.set("Offline"),n||(n=()=>Vo(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{y("RemoteStore","Retrying IndexedDB access"),await n(),e._u.delete(1),await On(e)})}function $o(e,t){return t().catch(n=>cn(e,n,t))}async function Vn(e){const t=C(e),n=yt(t);let s=t.fu.length>0?t.fu[t.fu.length-1].batchId:-1;for(;Ih(t);)try{const i=await oh(t.localStore,s);if(i===null){t.fu.length===0&&n.Fo();break}s=i.batchId,Ch(t,i)}catch(i){await cn(t,i)}Ko(t)&&Go(t)}function Ih(e){return bt(e)&&e.fu.length<10}function Ch(e,t){e.fu.push(t);const n=yt(e);n.ko()&&n.Yo&&n.Xo(t.mutations)}function Ko(e){return bt(e)&&!yt(e).No()&&e.fu.length>0}function Go(e){yt(e).start()}async function Sh(e){yt(e).eu()}async function Ah(e){const t=yt(e);for(const n of e.fu)t.Xo(n.mutations)}async function kh(e,t,n){const s=e.fu.shift(),i=Ks.from(s,t,n);await $o(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Vn(e)}async function Dh(e,t){t&&yt(e).Yo&&await async function(n,s){if(i=s.code,gc(i)&&i!==f.ABORTED){const r=n.fu.shift();yt(n).Mo(),await $o(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Vn(n)}var i}(e,t),Ko(e)&&Go(e)}async function Hi(e,t){const n=C(e);n.asyncQueue.verifyOperationInProgress(),y("RemoteStore","RemoteStore received new credentials");const s=bt(n);n._u.add(3),await Me(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n._u.delete(3),await On(n)}async function Nh(e,t){const n=C(e);t?(n._u.delete(2),await On(n)):t||(n._u.add(2),await Me(n),n.gu.set("Unknown"))}function Wt(e){return e.pu||(e.pu=function(t,n,s){const i=C(t);return i.su(),new gh(n,i.connection,i.authCredentials,i.appCheckCredentials,i.It,s)}(e.datastore,e.asyncQueue,{Yr:wh.bind(null,e),Zr:Eh.bind(null,e),Wo:Th.bind(null,e)}),e.wu.push(async t=>{t?(e.pu.Mo(),Xs(e)?Ws(e):e.gu.set("Unknown")):(await e.pu.stop(),jo(e))})),e.pu}function yt(e){return e.Iu||(e.Iu=function(t,n,s){const i=C(t);return i.su(),new ph(n,i.connection,i.authCredentials,i.appCheckCredentials,i.It,s)}(e.datastore,e.asyncQueue,{Yr:Sh.bind(null,e),Zr:Dh.bind(null,e),tu:Ah.bind(null,e),Zo:kh.bind(null,e)}),e.wu.push(async t=>{t?(e.Iu.Mo(),await Vn(e)):(await e.Iu.stop(),e.fu.length>0&&(y("RemoteStore",`Stopping write stream with ${e.fu.length} pending writes`),e.fu=[]))})),e.Iu}/**
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
 */class Ys{constructor(t,n,s,i,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new ut,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,i,r){const o=Date.now()+s,a=new Ys(t,n,o,i,r);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new w(f.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Js(e,t){if(dt("AsyncQueue",`${t}: ${e}`),xe(e))return new w(f.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class Ot{constructor(t){this.comparator=t?(n,s)=>t(n,s)||v.comparator(n.key,s.key):(n,s)=>v.comparator(n.key,s.key),this.keyedMap=Zt(),this.sortedSet=new F(this.comparator)}static emptySet(t){return new Ot(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Ot)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Ot;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
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
 */class Wi{constructor(){this.Tu=new F(v.comparator)}track(t){const n=t.doc.key,s=this.Tu.get(n);s?t.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,t):t.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Tu=this.Tu.remove(n):t.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:t.doc}):I():this.Tu=this.Tu.insert(n,t)}Eu(){const t=[];return this.Tu.inorderTraversal((n,s)=>{t.push(s)}),t}}class Bt{constructor(t,n,s,i,r,o,a,u,c){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(t,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Bt(t,n,Ot.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Rn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class bh{constructor(){this.Au=void 0,this.listeners=[]}}class Rh{constructor(){this.queries=new Ht(t=>lo(t),Rn),this.onlineState="Unknown",this.Ru=new Set}}async function Zs(e,t){const n=C(e),s=t.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new bh),i)try{r.Au=await n.onListen(s)}catch(o){const a=Js(o,`Initialization of query '${hs(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,r),r.listeners.push(t),t.bu(n.onlineState),r.Au&&t.Pu(r.Au)&&ei(n)}async function ti(e,t){const n=C(e),s=t.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(t);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function xh(e,t){const n=C(e);let s=!1;for(const i of t){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Pu(i)&&(s=!0);o.Au=i}}s&&ei(n)}function _h(e,t,n){const s=C(e),i=s.queries.get(t);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(t)}function ei(e){e.Ru.forEach(t=>{t.next()})}class ni{constructor(t,n,s){this.query=t,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(t){if(!this.options.includeMetadataChanges){const s=[];for(const i of t.docChanges)i.type!==3&&s.push(i);t=new Bt(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Vu?this.Du(t)&&(this.vu.next(t),n=!0):this.Cu(t,this.onlineState)&&(this.xu(t),n=!0),this.Su=t,n}onError(t){this.vu.error(t)}bu(t){this.onlineState=t;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,t)&&(this.xu(this.Su),n=!0),n}Cu(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Du(t){if(t.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(t){t=Bt.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Vu=!0,this.vu.next(t)}}/**
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
 */class Qo{constructor(t){this.key=t}}class zo{constructor(t){this.key=t}}class Lh{constructor(t,n){this.query=t,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=k(),this.mutatedKeys=k(),this.Gu=fo(t),this.Qu=new Ot(this.Gu)}get ju(){return this.Uu}Wu(t,n){const s=n?n.zu:new Wi,i=n?n.Qu:this.Qu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((h,l)=>{const g=i.get(h),p=js(this.query,l)?l:null,T=!!g&&this.mutatedKeys.has(g.key),A=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let N=!1;g&&p?g.data.isEqual(p.data)?T!==A&&(s.track({type:3,doc:p}),N=!0):this.Hu(g,p)||(s.track({type:2,doc:p}),N=!0,(u&&this.Gu(p,u)>0||c&&this.Gu(p,c)<0)&&(a=!0)):!g&&p?(s.track({type:0,doc:p}),N=!0):g&&!p&&(s.track({type:1,doc:g}),N=!0,(u||c)&&(a=!0)),N&&(p?(o=o.add(p),r=A?r.add(h):r.delete(h)):(o=o.delete(h),r=r.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),r=r.delete(h.key),s.track({type:1,doc:h})}return{Qu:o,zu:s,$i:a,mutatedKeys:r}}Hu(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const i=this.Qu;this.Qu=t.Qu,this.mutatedKeys=t.mutatedKeys;const r=t.zu.Eu();r.sort((c,h)=>function(l,g){const p=T=>{switch(T){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return I()}};return p(l)-p(g)}(c.type,h.type)||this.Gu(c.doc,h.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,u=a!==this.qu;return this.qu=a,r.length!==0||u?{snapshot:new Bt(this.query,t.Qu,i,r,t.mutatedKeys,a===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Wi,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(t){return!this.Uu.has(t)&&!!this.Qu.has(t)&&!this.Qu.get(t).hasLocalMutations}Ju(t){t&&(t.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=t.current)}Yu(){if(!this.current)return[];const t=this.Ku;this.Ku=k(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return t.forEach(s=>{this.Ku.has(s)||n.push(new zo(s))}),this.Ku.forEach(s=>{t.has(s)||n.push(new Qo(s))}),n}tc(t){this.Uu=t.Hi,this.Ku=k();const n=this.Wu(t.documents);return this.applyChanges(n,!0)}ec(){return Bt.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class Mh{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class Oh{constructor(t){this.key=t,this.nc=!1}}class Vh{constructor(t,n,s,i,r,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Ht(a=>lo(a),Rn),this.rc=new Map,this.oc=new Set,this.uc=new F(v.comparator),this.cc=new Map,this.ac=new Gs,this.hc={},this.lc=new Map,this.fc=qt.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function Ph(e,t){const n=zh(e);let s,i;const r=n.ic.get(t);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.ec();else{const o=await ah(n.localStore,ft(t));n.isPrimaryClient&&Uo(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await Fh(n,t,s,a==="current",o.resumeToken)}return i}async function Fh(e,t,n,s,i){e._c=(l,g,p)=>async function(T,A,N,Z){let G=A.view.Wu(N);G.$i&&(G=await Gi(T.localStore,A.query,!1).then(({documents:Fe})=>A.view.Wu(Fe,G)));const Pe=Z&&Z.targetChanges.get(A.targetId),Rt=A.view.applyChanges(G,T.isPrimaryClient,Pe);return Yi(T,A.targetId,Rt.Xu),Rt.snapshot}(e,l,g,p);const r=await Gi(e.localStore,t,!0),o=new Lh(t,r.Hi),a=o.Wu(r.documents),u=Le.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline",i),c=o.applyChanges(a,e.isPrimaryClient,u);Yi(e,n,c.Xu);const h=new Mh(t,n,o);return e.ic.set(t,h),e.rc.has(n)?e.rc.get(n).push(t):e.rc.set(n,[t]),c.snapshot}async function Uh(e,t){const n=C(e),s=n.ic.get(t),i=n.rc.get(s.targetId);if(i.length>1)return n.rc.set(s.targetId,i.filter(r=>!Rn(r,t))),void n.ic.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await gs(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),qo(n.remoteStore,s.targetId),ps(n,s.targetId)}).catch(Re)):(ps(n,s.targetId),await gs(n.localStore,s.targetId,!0))}async function qh(e,t,n){const s=Hh(e);try{const i=await function(r,o){const a=C(r),u=V.now(),c=o.reduce((g,p)=>g.add(p.key),k());let h,l;return a.persistence.runTransaction("Locally write mutations","readwrite",g=>{let p=gt(),T=k();return a.Gi.getEntries(g,c).next(A=>{p=A,p.forEach((N,Z)=>{Z.isValidDocument()||(T=T.add(N))})}).next(()=>a.localDocuments.getOverlayedDocuments(g,p)).next(A=>{h=A;const N=[];for(const Z of o){const G=lc(Z,h.get(Z.key).overlayedDocument);G!=null&&N.push(new Nt(Z.key,G,co(G.value.mapValue),ct.exists(!0)))}return a.mutationQueue.addMutationBatch(g,u,N,o)}).next(A=>{l=A;const N=A.applyToLocalDocumentSet(h,T);return a.documentOverlayCache.saveOverlays(g,A.batchId,N)})}).then(()=>({batchId:l.batchId,changes:Ao(h)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let u=r.hc[r.currentUser.toKey()];u||(u=new F(b)),u=u.insert(o,a),r.hc[r.currentUser.toKey()]=u}(s,i.batchId,n),await Oe(s,i.changes),await Vn(s.remoteStore)}catch(i){const r=Js(i,"Failed to persist write");n.reject(r)}}async function Ho(e,t){const n=C(e);try{const s=await ih(n.localStore,t);t.targetChanges.forEach((i,r)=>{const o=n.cc.get(r);o&&(R(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?R(o.nc):i.removedDocuments.size>0&&(R(o.nc),o.nc=!1))}),await Oe(n,s,t)}catch(s){await Re(s)}}function Xi(e,t,n){const s=C(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.ic.forEach((r,o)=>{const a=o.view.bu(t);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=C(r);a.onlineState=o;let u=!1;a.queries.forEach((c,h)=>{for(const l of h.listeners)l.bu(o)&&(u=!0)}),u&&ei(a)}(s.eventManager,t),i.length&&s.sc.Wo(i),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function Bh(e,t,n){const s=C(e);s.sharedClientState.updateQueryState(t,"rejected",n);const i=s.cc.get(t),r=i&&i.key;if(r){let o=new F(v.comparator);o=o.insert(r,j.newNoDocument(r,S.min()));const a=k().add(r),u=new Ln(S.min(),new Map,new P(b),o,a);await Ho(s,u),s.uc=s.uc.remove(r),s.cc.delete(t),si(s)}else await gs(s.localStore,t,!1).then(()=>ps(s,t,n)).catch(Re)}async function jh(e,t){const n=C(e),s=t.batch.batchId;try{const i=await sh(n.localStore,t);Xo(n,s,null),Wo(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Oe(n,i)}catch(i){await Re(i)}}async function $h(e,t,n){const s=C(e);try{const i=await function(r,o){const a=C(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return a.mutationQueue.lookupMutationBatch(u,o).next(h=>(R(h!==null),c=h.keys(),a.mutationQueue.removeMutationBatch(u,h))).next(()=>a.mutationQueue.performConsistencyCheck(u)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(u,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>a.localDocuments.getDocuments(u,c))})}(s.localStore,t);Xo(s,t,n),Wo(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await Oe(s,i)}catch(i){await Re(i)}}function Wo(e,t){(e.lc.get(t)||[]).forEach(n=>{n.resolve()}),e.lc.delete(t)}function Xo(e,t,n){const s=C(e);let i=s.hc[s.currentUser.toKey()];if(i){const r=i.get(t);r&&(n?r.reject(n):r.resolve(),i=i.remove(t)),s.hc[s.currentUser.toKey()]=i}}function ps(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.rc.get(t))e.ic.delete(s),n&&e.sc.wc(s,n);e.rc.delete(t),e.isPrimaryClient&&e.ac.ls(t).forEach(s=>{e.ac.containsKey(s)||Yo(e,s)})}function Yo(e,t){e.oc.delete(t.path.canonicalString());const n=e.uc.get(t);n!==null&&(qo(e.remoteStore,n),e.uc=e.uc.remove(t),e.cc.delete(n),si(e))}function Yi(e,t,n){for(const s of n)s instanceof Qo?(e.ac.addReference(s.key,t),Kh(e,s)):s instanceof zo?(y("SyncEngine","Document no longer in limbo: "+s.key),e.ac.removeReference(s.key,t),e.ac.containsKey(s.key)||Yo(e,s.key)):I()}function Kh(e,t){const n=t.key,s=n.path.canonicalString();e.uc.get(n)||e.oc.has(s)||(y("SyncEngine","New document in limbo: "+n),e.oc.add(s),si(e))}function si(e){for(;e.oc.size>0&&e.uc.size<e.maxConcurrentLimboResolutions;){const t=e.oc.values().next().value;e.oc.delete(t);const n=new v(_.fromString(t)),s=e.fc.next();e.cc.set(s,new Oh(n)),e.uc=e.uc.insert(n,s),Uo(e.remoteStore,new St(ft(bn(n.path)),s,2,Fs.at))}}async function Oe(e,t,n){const s=C(e),i=[],r=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,u)=>{o.push(s._c(u,t,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(u.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const h=zs.Ci(u.targetId,c);r.push(h)}}))}),await Promise.all(o),s.sc.Wo(i),await async function(a,u){const c=C(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>d.forEach(u,l=>d.forEach(l.Si,g=>c.persistence.referenceDelegate.addReference(h,l.targetId,g)).next(()=>d.forEach(l.Di,g=>c.persistence.referenceDelegate.removeReference(h,l.targetId,g)))))}catch(h){if(!xe(h))throw h;y("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const l=h.targetId;if(!h.fromCache){const g=c.Ui.get(l),p=g.snapshotVersion,T=g.withLastLimboFreeSnapshotVersion(p);c.Ui=c.Ui.insert(l,T)}}}(s.localStore,r))}async function Gh(e,t){const n=C(e);if(!n.currentUser.isEqual(t)){y("SyncEngine","User change. New user:",t.toKey());const s=await Oo(n.localStore,t);n.currentUser=t,function(i,r){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new w(f.CANCELLED,r))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Oe(n,s.ji)}}function Qh(e,t){const n=C(e),s=n.cc.get(t);if(s&&s.nc)return k().add(s.key);{let i=k();const r=n.rc.get(t);if(!r)return i;for(const o of r){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function zh(e){const t=C(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Ho.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Qh.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Bh.bind(null,t),t.sc.Wo=xh.bind(null,t.eventManager),t.sc.wc=_h.bind(null,t.eventManager),t}function Hh(e){const t=C(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=jh.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=$h.bind(null,t),t}class Wh{constructor(){this.synchronizeTabs=!1}async initialize(t){this.It=Mn(t.databaseInfo.databaseId),this.sharedClientState=this.gc(t),this.persistence=this.yc(t),await this.persistence.start(),this.localStore=this.Ic(t),this.gcScheduler=this.Tc(t,this.localStore),this.indexBackfillerScheduler=this.Ec(t,this.localStore)}Tc(t,n){return null}Ec(t,n){return null}Ic(t){return nh(this.persistence,new th,t.initialUser,this.It)}yc(t){return new Jc(Qs.Bs,this.It)}gc(t){return new ch}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Xh{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Xi(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Gh.bind(null,this.syncEngine),await Nh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Rh}createDatastore(t){const n=Mn(t.databaseInfo.databaseId),s=(i=t.databaseInfo,new fh(i));var i;return function(r,o,a,u){return new mh(r,o,a,u)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,i=t.asyncQueue,r=a=>Xi(this.syncEngine,a,0),o=zi.C()?new zi:new hh,new vh(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(t,n){return function(s,i,r,o,a,u,c){const h=new Vh(s,i,r,o,a,u);return c&&(h.dc=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=C(t);y("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Me(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */function Yh(e,t,n){if(!n)throw new w(f.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Jh(e,t,n,s){if(t===!0&&s===!0)throw new w(f.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Ji(e){if(!v.isDocumentKey(e))throw new w(f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function ii(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":I()}function rt(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new w(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ii(e);throw new w(f.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */const Zi=new Map;class tr{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new w(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new w(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Jh("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
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
 */class ri{constructor(t,n,s,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new tr({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new w(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new w(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new tr(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Au;switch(n.type){case"gapi":const s=n.client;return new bu(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new w(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Zi.get(t);n&&(y("ComponentProvider","Removing Datastore"),Zi.delete(t),n.terminate())}(this),Promise.resolve()}}function Zh(e,t,n,s={}){var i;const r=(e=rt(e,ri))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==t&&rs("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},r),{host:`${t}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Q.MOCK_USER;else{o=Ea(s.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const u=s.mockUserToken.sub||s.mockUserToken.user_id;if(!u)throw new w(f.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Q(u)}e._authCredentials=new ku(new io(o,a))}}/**
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
 */class tt{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ee(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new tt(this.firestore,t,this._key)}}class Ve{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Ve(this.firestore,t,this._query)}}class Ee extends Ve{constructor(t,n,s){super(t,n,bn(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new tt(this.firestore,null,new v(t))}withConverter(t){return new Ee(this.firestore,t,this._path)}}function Il(e,t,...n){if(e=ae(e),arguments.length===1&&(t=ro.R()),Yh("doc","path",t),e instanceof ri){const s=_.fromString(t,...n);return Ji(s),new tt(e,null,new v(s))}{if(!(e instanceof tt||e instanceof Ee))throw new w(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(_.fromString(t,...n));return Ji(s),new tt(e.firestore,e instanceof Ee?e.converter:null,new v(s))}}/**
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
 */class oi{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Rc(this.observer.next,t)}error(t){this.observer.error?this.Rc(this.observer.error,t):dt("Uncaught Error in snapshot listener:",t.toString())}bc(){this.muted=!0}Rc(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */class tl{constructor(t,n,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Q.UNAUTHENTICATED,this.clientId=ro.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{y("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(y("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new w(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ut;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=Js(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function el(e,t){e.asyncQueue.verifyOperationInProgress(),y("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Oo(t.localStore,i),s=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function nl(e,t){e.asyncQueue.verifyOperationInProgress();const n=await sl(e);y("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(i=>Hi(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,r)=>Hi(t.remoteStore,r)),e.onlineComponents=t}async function sl(e){return e.offlineComponents||(y("FirestoreClient","Using default OfflineComponentProvider"),await el(e,new Wh)),e.offlineComponents}async function Jo(e){return e.onlineComponents||(y("FirestoreClient","Using default OnlineComponentProvider"),await nl(e,new Xh)),e.onlineComponents}function il(e){return Jo(e).then(t=>t.syncEngine)}async function hn(e){const t=await Jo(e),n=t.eventManager;return n.onListen=Ph.bind(null,t.syncEngine),n.onUnlisten=Uh.bind(null,t.syncEngine),n}function rl(e,t,n={}){const s=new ut;return e.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,u){const c=new oi({next:l=>{r.enqueueAndForget(()=>ti(i,h));const g=l.docs.has(o);!g&&l.fromCache?u.reject(new w(f.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&l.fromCache&&a&&a.source==="server"?u.reject(new w(f.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(l)},error:l=>u.reject(l)}),h=new ni(bn(o.path),c,{includeMetadataChanges:!0,Nu:!0});return Zs(i,h)}(await hn(e),e.asyncQueue,t,n,s)),s.promise}function ol(e,t,n={}){const s=new ut;return e.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,u){const c=new oi({next:l=>{r.enqueueAndForget(()=>ti(i,h)),l.fromCache&&a.source==="server"?u.reject(new w(f.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(l)},error:l=>u.reject(l)}),h=new ni(o,c,{includeMetadataChanges:!0,Nu:!0});return Zs(i,h)}(await hn(e),e.asyncQueue,t,n,s)),s.promise}class al{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Po(this,"async_queue_retry"),this.Wc=()=>{const n=zn();n&&y("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const t=zn();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.Uc){this.Uc=!0,this.Qc=t||!1;const n=zn();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new ut;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Lc.push(t),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(t){if(!xe(t))throw t;y("AsyncQueue","Operation failed with retryable error: "+t)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(t){const n=this.Bc.then(()=>(this.Gc=!0,t().catch(s=>{this.Kc=s,this.Gc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw dt("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(t,n,s){this.zc(),this.jc.indexOf(t)>-1&&(n=0);const i=Ys.createAndSchedule(this,t,n,s,r=>this.Yc(r));return this.qc.push(i),i}zc(){this.Kc&&I()}verifyOperationInProgress(){}async Xc(){let t;do t=this.Bc,await t;while(t!==this.Bc)}Zc(t){for(const n of this.qc)if(n.timerId===t)return!0;return!1}ta(t){return this.Xc().then(()=>{this.qc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Xc()})}ea(t){this.jc.push(t)}Yc(t){const n=this.qc.indexOf(t);this.qc.splice(n,1)}}function er(e){return function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(e,["next","error","complete"])}class jt extends ri{constructor(t,n,s,i){super(t,n,s,i),this.type="firestore",this._queue=new al,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Zo(this),this._firestoreClient.terminate()}}function Cl(e,t){const n=typeof e=="object"?e:ya(),s=typeof e=="string"?e:t||"(default)",i=va(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=wa("firestore");r&&Zh(i,...r)}return i}function Pn(e){return e._firestoreClient||Zo(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Zo(e){var t;const n=e._freezeSettings(),s=function(i,r,o,a){return new qu(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new tl(e._authCredentials,e._appCheckCredentials,e._queue,s)}/**
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
 */class $t{constructor(t){this._byteString=t}static fromBase64String(t){try{return new $t(X.fromBase64String(t))}catch(n){throw new w(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new $t(X.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class ai{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new w(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new z(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class ta{constructor(t){this._methodName=t}}/**
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
 */class ui{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new w(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new w(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return b(this._lat,t._lat)||b(this._long,t._long)}}/**
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
 */const ul=/^__.*__$/;class cl{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new Nt(t,this.data,this.fieldMask,n,this.fieldTransforms):new _e(t,this.data,n,this.fieldTransforms)}}function ea(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw I()}}class ci{constructor(t,n,s,i,r,o){this.settings=t,this.databaseId=n,this.It=s,this.ignoreUndefinedProperties=i,r===void 0&&this.na(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(t){return new ci(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.ia({path:s,oa:!1});return i.ua(t),i}ca(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.ia({path:s,oa:!1});return i.na(),i}aa(t){return this.ia({path:void 0,oa:!0})}ha(t){return ln(t,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let t=0;t<this.path.length;t++)this.ua(this.path.get(t))}ua(t){if(t.length===0)throw this.ha("Document fields must not be empty");if(ea(this.sa)&&ul.test(t))throw this.ha('Document fields cannot begin and end with "__"')}}class hl{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.It=s||Mn(t)}da(t,n,s,i=!1){return new ci({sa:t,methodName:n,fa:s,path:z.emptyPath(),oa:!1,la:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function ll(e){const t=e._freezeSettings(),n=Mn(e._databaseId);return new hl(e._databaseId,!!t.ignoreUndefinedProperties,n)}function dl(e,t,n,s,i,r={}){const o=e.da(r.merge||r.mergeFields?2:0,t,n,i);ra("Data must be an object, but it was:",o,s);const a=sa(s,o);let u,c;if(r.merge)u=new it(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const h=[];for(const l of r.mergeFields){const g=fl(t,l,n);if(!o.contains(g))throw new w(f.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);pl(h,g)||h.push(g)}u=new it(h),c=o.fieldTransforms.filter(l=>u.covers(l.field))}else u=null,c=o.fieldTransforms;return new cl(new nt(a),u,c)}function na(e,t){if(ia(e=ae(e)))return ra("Unsupported field value:",t,e),sa(e,t);if(e instanceof ta)return function(n,s){if(!ea(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.oa&&t.sa!==4)throw t.ha("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=na(o,s.aa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(e,t)}return function(n,s){if((n=ae(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return rc(s.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=V.fromDate(n);return{timestampValue:un(s.It,i)}}if(n instanceof V){const i=new V(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:un(s.It,i)}}if(n instanceof ui)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof $t)return{bytesValue:Ro(s.It,n._byteString)};if(n instanceof tt){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:$s(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${ii(n)}`)}(e,t)}function sa(e,t){const n={};return oo(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):zt(e,(s,i)=>{const r=na(i,t.ra(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function ia(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof V||e instanceof ui||e instanceof $t||e instanceof tt||e instanceof ta)}function ra(e,t,n){if(!ia(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=ii(n);throw s==="an object"?t.ha(e+" a custom object"):t.ha(e+" "+s)}}function fl(e,t,n){if((t=ae(t))instanceof ai)return t._internalPath;if(typeof t=="string")return oa(e,t);throw ln("Field path arguments must be of type string or ",e,!1,void 0,n)}const gl=new RegExp("[~\\*/\\[\\]]");function oa(e,t,n){if(t.search(gl)>=0)throw ln(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new ai(...t.split("."))._internalPath}catch{throw ln(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function ln(e,t,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(r||o)&&(u+=" (found",r&&(u+=` in field ${s}`),o&&(u+=` in document ${i}`),u+=")"),new w(f.INVALID_ARGUMENT,a+e+u)}function pl(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */class aa{constructor(t,n,s,i,r){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new ml(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(ua("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ml extends aa{data(){return super.data()}}function ua(e,t){return typeof t=="string"?oa(e,t):t instanceof ai?t._internalPath:t._delegate._internalPath}/**
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
 */function ca(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new w(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function Sl(e,...t){for(const n of t)e=n._apply(e);return e}/**
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
 */class yl{convertValue(t,n="none"){switch(kt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return O(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Ft(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw I()}}convertObject(t,n){const s={};return zt(t.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(t){return new ui(O(t.latitude),O(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=uo(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(ge(t));default:return null}}convertTimestamp(t){const n=mt(t);return new V(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=_.fromString(t);R(Mo(s));const i=new pe(s.get(1),s.get(3)),r=new v(s.popFirst(5));return i.isEqual(n)||dt(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */function vl(e,t,n){let s;return s=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,s}/**
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
 */class te{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ha extends aa{constructor(t,n,s,i,r,o){super(t,n,s,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new He(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(ua("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class He extends ha{data(t={}){return super.data(t)}}class la{constructor(t,n,s,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new te(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new He(this._firestore,this._userDataWriter,s.key,s,new te(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new w(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new He(s._firestore,s._userDataWriter,o.doc.key,o.doc,new te(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new He(s._firestore,s._userDataWriter,o.doc.key,o.doc,new te(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,c=-1;return o.type!==0&&(u=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:wl(o.type),doc:a,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function wl(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return I()}}/**
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
 */function Al(e){e=rt(e,tt);const t=rt(e.firestore,jt);return rl(Pn(t),e._key).then(n=>da(t,e,n))}class hi extends yl{constructor(t){super(),this.firestore=t}convertBytes(t){return new $t(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new tt(this.firestore,null,n)}}function kl(e){e=rt(e,Ve);const t=rt(e.firestore,jt),n=Pn(t),s=new hi(t);return ca(e._query),ol(n,e._query).then(i=>new la(t,s,e,i))}function Dl(e,t,n){e=rt(e,tt);const s=rt(e.firestore,jt),i=vl(e.converter,t,n);return El(s,[dl(ll(s),"setDoc",e._key,i,e.converter!==null,n).toMutation(e._key,ct.none())])}function Nl(e,...t){var n,s,i;e=ae(e);let r={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||er(t[o])||(r=t[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(er(t[o])){const l=t[o];t[o]=(n=l.next)===null||n===void 0?void 0:n.bind(l),t[o+1]=(s=l.error)===null||s===void 0?void 0:s.bind(l),t[o+2]=(i=l.complete)===null||i===void 0?void 0:i.bind(l)}let u,c,h;if(e instanceof tt)c=rt(e.firestore,jt),h=bn(e._key.path),u={next:l=>{t[o]&&t[o](da(c,e,l))},error:t[o+1],complete:t[o+2]};else{const l=rt(e,Ve);c=rt(l.firestore,jt),h=l._query;const g=new hi(c);u={next:p=>{t[o]&&t[o](new la(c,g,l,p))},error:t[o+1],complete:t[o+2]},ca(e._query)}return function(l,g,p,T){const A=new oi(T),N=new ni(g,A,p);return l.asyncQueue.enqueueAndForget(async()=>Zs(await hn(l),N)),()=>{A.bc(),l.asyncQueue.enqueueAndForget(async()=>ti(await hn(l),N))}}(Pn(c),h,a,u)}function El(e,t){return function(n,s){const i=new ut;return n.asyncQueue.enqueueAndForget(async()=>qh(await il(n),s,i)),i.promise}(Pn(e),t)}function da(e,t,n){const s=n.docs.get(t._key),i=new hi(e);return new ha(e,i,t._key,s,new te(n.hasPendingWrites,n.fromCache),t.converter)}(function(e,t=!0){(function(n){Qt=n})(Ta),ga(new pa("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new jt(new Du(n.getProvider("auth-internal")),new xu(n.getProvider("app-check-internal")),function(a,u){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new w(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new pe(a.options.projectId,u)}(r,s),r);return i=Object.assign({useFetchStreams:t},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),di(ki,"3.7.3",e),di(ki,"3.7.3","esm2017")})();export{Nl as I,Cl as L,Sl as M,Al as a,kl as d,Dl as m,Il as s};
