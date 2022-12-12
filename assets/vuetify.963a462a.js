import{a as I,h as v,G as ue,f as Ge,F as bt,I as Xe,g as Ke,w as K,e as wt,o as xt,H as $t,J as Ct,t as St,j as At,K as Ft,B as Ze,i as E,r as $,x as he,D as ce,L as N,M as Pt,b as Ot,E as qe,N as kt,O as It,P as Tt,C as Et,n as Rt}from"./vue.05eca872.js";function ke(e,t,n){Dt(e,t),t.set(e,n)}function Dt(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function Lt(e,t,n){var o=Je(e,t,"set");return Nt(e,o,n),n}function Nt(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}function L(e,t){var n=Je(e,t,"get");return _t(e,n)}function Je(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}function _t(e,t){return t.get?t.get.call(e):t.value}function Qe(e,t,n){const o=t.length-1;if(o<0)return e===void 0?n:e;for(let r=0;r<o;r++){if(e==null)return n;e=e[t[r]]}return e==null||e[t[o]]===void 0?n:e[t[o]]}function Bt(e,t){if(e===t)return!0;if(e instanceof Date&&t instanceof Date&&e.getTime()!==t.getTime()||e!==Object(e)||t!==Object(t))return!1;const n=Object.keys(e);return n.length!==Object.keys(t).length?!1:n.every(o=>Bt(e[o],t[o]))}function we(e,t,n){return e==null||!t||typeof t!="string"?n:e[t]!==void 0?e[t]:(t=t.replace(/\[(\w+)\]/g,".$1"),t=t.replace(/^\./,""),Qe(e,t.split("."),n))}function Wn(e,t,n){if(t==null)return e===void 0?n:e;if(e!==Object(e)){if(typeof t!="function")return n;const r=t(e,n);return typeof r>"u"?n:r}if(typeof t=="string")return we(e,t,n);if(Array.isArray(t))return Qe(e,t,n);if(typeof t!="function")return n;const o=t(e,n);return typeof o>"u"?n:o}function Mt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:e},(n,o)=>t+o)}function J(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"px";if(!(e==null||e===""))return isNaN(+e)?String(e):isFinite(+e)?`${Number(e)}${t}`:void 0}function Ie(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function Un(e){return e==null?void 0:e.$el}const Hn=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});Object.freeze({enter:"Enter",tab:"Tab",delete:"Delete",esc:"Escape",space:"Space",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",end:"End",home:"Home",del:"Delete",backspace:"Backspace",insert:"Insert",pageup:"PageUp",pagedown:"PageDown",shift:"Shift"});function Yn(e){return Object.keys(e)}function Vt(e,t){const n=Object.create(null),o=Object.create(null);for(const r in e)t.some(s=>s instanceof RegExp?s.test(r):s===r)?n[r]=e[r]:o[r]=e[r];return[n,o]}function Gn(e,t){const n={...e};return t.forEach(o=>delete n[o]),n}function Xn(e){return Vt(e,["class","style","id",/^data-/])}function Kn(e){return e==null?[]:Array.isArray(e)?e:[e]}function jt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(t,Math.min(n,e))}function T(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const o={};for(const r in e)o[r]=e[r];for(const r in t){const s=e[r],a=t[r];if(Ie(s)&&Ie(a)){o[r]=T(s,a,n);continue}if(Array.isArray(s)&&Array.isArray(a)&&n){o[r]=n(s,a);continue}o[r]=a}return o}function zt(e){return e.map(t=>t.type===bt?zt(t.children):t).flat()}function fe(){return(arguments.length>0&&arguments[0]!==void 0?arguments[0]:"").replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase()}function ne(e,t){if(!t||typeof t!="object")return[];if(Array.isArray(t))return t.map(n=>ne(e,n)).flat(1);if(Array.isArray(t.children))return t.children.map(n=>ne(e,n)).flat(1);if(t.component){if(Object.getOwnPropertySymbols(t.component.provides).includes(e))return[t.component];if(t.component.subTree)return ne(e,t.component.subTree).flat(1)}return[]}var Q=new WeakMap,B=new WeakMap;class Zn{constructor(t){ke(this,Q,{writable:!0,value:[]}),ke(this,B,{writable:!0,value:0}),this.size=t}push(t){L(this,Q)[L(this,B)]=t,Lt(this,B,(L(this,B)+1)%this.size)}values(){return L(this,Q).slice(L(this,B)).concat(L(this,Q).slice(0,L(this,B)))}}function qn(e){const t=I({}),n=v(e);return ue(()=>{for(const o in n.value)t[o]=n.value[o]},{flush:"sync"}),Ge(t)}function xe(e,t){return e.includes(t)}const Wt=/^on[^a-z]/,Jn=e=>Wt.test(e),Qn=[Function,Array];function eo(e,t){return t="on"+Xe(t),!!(e[t]||e[`${t}Once`]||e[`${t}Capture`]||e[`${t}OnceCapture`]||e[`${t}CaptureOnce`])}function to(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];if(Array.isArray(e))for(const r of e)r(...n);else typeof e=="function"&&e(...n)}const et=["top","bottom"],Ut=["start","end","left","right"];function no(e,t){let[n,o]=e.split(" ");return o||(o=xe(et,n)?"start":xe(Ut,n)?"top":"center"),{side:Te(n,t),align:Te(o,t)}}function Te(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}function oo(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function ro(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function so(e){return{side:e.align,align:e.side}}function ao(e){return xe(et,e.side)?"y":"x"}class pe{constructor(t){let{x:n,y:o,width:r,height:s}=t;this.x=n,this.y=o,this.width=r,this.height=s}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function io(e,t){return{x:{before:Math.max(0,t.left-e.left),after:Math.max(0,e.right-t.right)},y:{before:Math.max(0,t.top-e.top),after:Math.max(0,e.bottom-t.bottom)}}}function lo(e){const t=e.getBoundingClientRect(),n=getComputedStyle(e),o=n.transform;if(o){let r,s,a,c,d;if(o.startsWith("matrix3d("))r=o.slice(9,-1).split(/, /),s=+r[0],a=+r[5],c=+r[12],d=+r[13];else if(o.startsWith("matrix("))r=o.slice(7,-1).split(/, /),s=+r[0],a=+r[3],c=+r[4],d=+r[5];else return new pe(t);const u=n.transformOrigin,f=t.x-c-(1-s)*parseFloat(u),l=t.y-d-(1-a)*parseFloat(u.slice(u.indexOf(" ")+1)),m=s?t.width/s:e.offsetWidth+1,i=a?t.height/a:e.offsetHeight+1;return new pe({x:f,y:l,width:m,height:i})}else return new pe(t)}function uo(e,t,n){if(typeof e.animate>"u")return{finished:Promise.resolve()};const o=e.animate(t,n);return typeof o.finished>"u"&&(o.finished=new Promise(r=>{o.onfinish=()=>{r(o)}})),o}function tt(e,t,n){if(n&&(t={_isVue:!0,$parent:n,$options:t}),t){if(t.$_alreadyWarned=t.$_alreadyWarned||[],t.$_alreadyWarned.includes(e))return;t.$_alreadyWarned.push(e)}return`[Vuetify] ${e}`+(t?Gt(t):"")}function G(e,t,n){const o=tt(e,t,n);o!=null&&console.warn(o)}function Ee(e,t,n){const o=tt(e,t,n);o!=null&&console.error(o)}const Ht=/(?:^|[-_])(\w)/g,Yt=e=>e.replace(Ht,t=>t.toUpperCase()).replace(/[-_]/g,"");function ye(e,t){if(e.$root===e)return"<Root>";const n=typeof e=="function"&&e.cid!=null?e.options:e._isVue?e.$options||e.constructor.options:e||{};let o=n.name||n._componentTag;const r=n.__file;if(!o&&r){const s=r.match(/([^/\\]+)\.vue$/);o=s==null?void 0:s[1]}return(o?`<${Yt(o)}>`:"<Anonymous>")+(r&&t!==!1?` at ${r}`:"")}function Gt(e){if(e._isVue&&e.$parent){const t=[];let n=0;for(;e;){if(t.length>0){const o=t[t.length-1];if(o.constructor===e.constructor){n++,e=e.$parent;continue}else n>0&&(t[t.length-1]=[o,n],n=0)}t.push(e),e=e.$parent}return`

found in

`+t.map((o,r)=>`${r===0?"---> ":" ".repeat(5+r*2)}${Array.isArray(o)?`${ye(o[0])}... (${o[1]} recursive calls)`:ye(o)}`).join(`
`)}else return`

(found in ${ye(e)})`}const Xt=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],Kt=e=>e<=.0031308?e*12.92:1.055*e**(1/2.4)-.055,Zt=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],qt=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4;function nt(e){const t=Array(3),n=Kt,o=Xt;for(let r=0;r<3;++r)t[r]=Math.round(jt(n(o[r][0]*e[0]+o[r][1]*e[1]+o[r][2]*e[2]))*255);return(t[0]<<16)+(t[1]<<8)+(t[2]<<0)}function Se(e){const t=[0,0,0],n=qt,o=Zt,r=n((e>>16&255)/255),s=n((e>>8&255)/255),a=n((e>>0&255)/255);for(let c=0;c<3;++c)t[c]=o[c][0]*r+o[c][1]*s+o[c][2]*a;return t}const re=.20689655172413793,Jt=e=>e>re**3?Math.cbrt(e):e/(3*re**2)+4/29,Qt=e=>e>re?e**3:3*re**2*(e-4/29);function ot(e){const t=Jt,n=t(e[1]);return[116*n-16,500*(t(e[0]/.95047)-n),200*(n-t(e[2]/1.08883))]}function rt(e){const t=Qt,n=(e[0]+16)/116;return[t(n+e[1]/500)*.95047,t(n),t(n-e[2]/200)*1.08883]}function co(e){return!!e&&/^(#|var\(--|(rgb|hsl)a?\()/.test(e)}function se(e){let t;if(typeof e=="number")t=e;else if(typeof e=="string"){let n=e.startsWith("#")?e.substring(1):e;n.length===3&&(n=n.split("").map(o=>o+o).join("")),n.length!==6&&n.length!==8&&G(`'${e}' is not a valid rgb color`),t=parseInt(n,16)}else throw new TypeError(`Colors can only be numbers or strings, recieved ${e==null?e:e.constructor.name} instead`);return t<0?(G(`Colors cannot be negative: '${e}'`),t=0):(t>4294967295||isNaN(t))&&(G(`'${e}' is not a valid rgb color`),t=16777215),t}function en(e){let t=e.toString(16);return t.length<6&&(t="0".repeat(6-t.length)+t),"#"+t}function st(e){const t=se(e);return{r:(t&16711680)>>16,g:(t&65280)>>8,b:t&255}}function tn(e,t){const n=ot(Se(e));return n[0]=n[0]+t*10,nt(rt(n))}function nn(e,t){const n=ot(Se(e));return n[0]=n[0]-t*10,nt(rt(n))}function on(e){const t=se(e);return Se(t)[1]}function R(e,t){const n=Ke();if(!n)throw new Error(`[Vuetify] ${e} ${t||"must be called from inside a setup function"}`);return n}function fo(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"composables";const t=R(e).type;return fe((t==null?void 0:t.aliasName)||(t==null?void 0:t.name))}let at=0,oe=new WeakMap;function Ae(){const e=R("getUid");if(oe.has(e))return oe.get(e);{const t=at++;return oe.set(e,t),t}}Ae.reset=()=>{at=0,oe=new WeakMap};function rn(e){const{provides:t}=R("injectSelf");if(t&&e in t)return t[e]}function it(e,t){let n;K(e,o=>{if(o&&!n)n=wt(),n.run(t);else if(!o){var r;(r=n)==null||r.stop(),n=void 0}},{immediate:!0}),xt(()=>{var o;(o=n)==null||o.stop()})}function Z(e,t){return n=>Object.keys(e).reduce((o,r)=>{const a=typeof e[r]=="object"&&e[r]!=null&&!Array.isArray(e[r])?e[r]:{type:e[r]};return n&&r in n?o[r]={...a,default:n[r]}:o[r]=a,t&&!o[r].source&&(o[r].source=t),o},{})}function sn(e,t){var n,o;return((n=e.props)==null?void 0:n.hasOwnProperty(t))||((o=e.props)==null?void 0:o.hasOwnProperty(fe(t)))}const _=function(t){var n,o;return t._setup=(n=t._setup)!=null?n:t.setup,t.name?(t._setup&&(t.props=(o=t.props)!=null?o:{},t.props=Z(t.props,fe(t.name))(),t.props._as=String,t.setup=function(s,a){const c=Ke(),d=ut(),u=$t(),f=Ct({...St(s)});ue(()=>{var g,w,x;const m=d.value.global,i=d.value[(g=s._as)!=null?g:t.name];if(i){const h=Object.entries(i).filter(C=>{let[P]=C;return P.startsWith(P[0].toUpperCase())});h.length&&(u.value=Object.fromEntries(h))}for(const h of Object.keys(s)){let C=s[h];sn(c.vnode,h)||(C=(x=(w=i==null?void 0:i[h])!=null?w:m==null?void 0:m[h])!=null?x:s[h]),f[h]!==C&&(f[h]=C)}});const l=t._setup(f,a);return it(u,()=>{var i;var m;un(T((i=(m=rn(X))==null?void 0:m.value)!=null?i:{},u.value))}),l}),t):(G("The component is missing an explicit name, unable to generate default prop value"),t)};function mo(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return t=>(e?_:At)(t)}function go(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return _({name:n!=null?n:Xe(Ft(e.replace(/__/g,"-"))),props:{tag:{type:String,default:t}},setup(o,r){let{slots:s}=r;return()=>{var a;return Ze(o.tag,{class:e},(a=s.default)==null?void 0:a.call(s))}}})}function vo(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}const ho="cubic-bezier(0.4, 0, 0.2, 1)",po="cubic-bezier(0.0, 0, 0.2, 1)",yo="cubic-bezier(0.4, 0, 1, 1)";function bo(e){for(;e;){if(lt(e))return e;e=e.parentElement}return document.scrollingElement}function wo(e,t){const n=[];if(t&&e&&!t.contains(e))return n;for(;e&&(lt(e)&&n.push(e),e!==t);)e=e.parentElement;return n}function lt(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return t.overflowY==="scroll"||t.overflowY==="auto"&&e.scrollHeight>e.clientHeight}const F=typeof window<"u",xo=F&&"IntersectionObserver"in window,an=F&&("ontouchstart"in window||window.navigator.maxTouchPoints>0),$o=F&&typeof CSS<"u"&&CSS.supports("selector(:focus-visible)");function Co(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}function So(e){const t=R("useRender");t.render=e}const X=Symbol.for("vuetify:defaults");function ln(e){return $(e!=null?e:{})}function ut(){const e=E(X);if(!e)throw new Error("[Vuetify] Could not find defaults instance");return e}function un(e,t){const n=ut(),o=$(e),r=v(()=>{const s=he(t==null?void 0:t.scoped),a=he(t==null?void 0:t.reset),c=he(t==null?void 0:t.root);let d=T(o.value,{prev:n.value});if(s)return d;if(a||c){const u=Number(a||1/0);for(let f=0;f<=u&&d.prev;f++)d=d.prev;return d}return T(d.prev,d)});return ce(X,r),r}const $e=Symbol.for("vuetify:display"),Re={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},cn=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Re;return T(Re,e)};function De(e){return F&&!e?window.innerWidth:0}function Le(e){return F&&!e?window.innerHeight:0}function fn(){const e=F?window.navigator.userAgent:"ssr";function t(g){return Boolean(e.match(g))}const n=t(/android/i),o=t(/iphone|ipad|ipod/i),r=t(/cordova/i),s=t(/electron/i),a=t(/chrome/i),c=t(/edge/i),d=t(/firefox/i),u=t(/opera/i),f=t(/win/i),l=t(/mac/i),m=t(/linux/i),i=t(/ssr/i);return{android:n,ios:o,cordova:r,electron:s,chrome:a,edge:c,firefox:d,opera:u,win:f,mac:l,linux:m,touch:an,ssr:i}}function dn(e,t){const{thresholds:n,mobileBreakpoint:o}=cn(e),r=$(Le(t)),s=fn(),a=I({}),c=$(De(t));function d(){r.value=Le(),c.value=De()}return ue(()=>{const u=c.value<n.sm,f=c.value<n.md&&!u,l=c.value<n.lg&&!(f||u),m=c.value<n.xl&&!(l||f||u),i=c.value<n.xxl&&!(m||l||f||u),g=c.value>=n.xxl,w=u?"xs":f?"sm":l?"md":m?"lg":i?"xl":"xxl",x=typeof o=="number"?o:n[o],h=s.ssr?s.android||s.ios||s.opera:c.value<x;a.xs=u,a.sm=f,a.md=l,a.lg=m,a.xl=i,a.xxl=g,a.smAndUp=!u,a.mdAndUp=!(u||f),a.lgAndUp=!(u||f||l),a.xlAndUp=!(u||f||l||m),a.smAndDown=!(l||m||i||g),a.mdAndDown=!(m||i||g),a.lgAndDown=!(i||g),a.xlAndDown=!g,a.name=w,a.height=r.value,a.width=c.value,a.mobile=h,a.mobileBreakpoint=o,a.platform=s,a.thresholds=n}),F&&window.addEventListener("resize",d,{passive:!0}),{...Ge(a),update:d}}function Ao(){const e=E($e);if(!e)throw new Error("Could not find Vuetify display injection");return e}const mn={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sort:"mdi-arrow-up",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus"},gn={component:e=>Ze(ct,{...e,class:"mdi"})},vn=[String,Function,Object],Ce=Symbol.for("vuetify:icons"),de=Z({icon:{type:vn,required:!0},tag:{type:String,required:!0}},"icon"),hn=_({name:"VComponentIcon",props:de(),setup(e){return()=>N(e.tag,null,{default:()=>[N(e.icon,null,null)]})}}),pn=_({name:"VSvgIcon",inheritAttrs:!1,props:de(),setup(e,t){let{attrs:n}=t;return()=>N(e.tag,Pt(n,{style:null}),{default:()=>[N("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[N("path",{d:e.icon},null)])]})}});_({name:"VLigatureIcon",props:de(),setup(e){return()=>N(e.tag,null,{default:()=>[e.icon]})}});const ct=_({name:"VClassIcon",props:de(),setup(e){return()=>N(e.tag,{class:e.icon},null)}}),yn={svg:{component:pn},class:{component:ct}};function bn(e){return T({defaultSet:"mdi",sets:{...yn,mdi:gn},aliases:mn},e)}const Fo=e=>{const t=E(Ce);if(!t)throw new Error("Missing Vuetify Icons provide!");return{iconData:v(()=>{const o=Ot(e)?e.value:e.icon;if(!o)throw new Error("Icon value is undefined or null");let r=o;if(typeof r=="string"&&(r=r.trim(),r.startsWith("$"))){var s;r=(s=t.aliases)==null?void 0:s[r.slice(1)]}if(!r)throw new Error(`Could not find aliased icon "${o}"`);if(typeof r!="string")return{component:hn,icon:r};const a=Object.keys(t.sets).find(u=>typeof r=="string"&&r.startsWith(`${u}:`)),c=a?r.slice(a.length+1):r;return{component:t.sets[a!=null?a:t.defaultSet].component,icon:c}})}};function wn(e,t,n){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:l=>l,r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:l=>l;const s=R("useProxiedModel"),a=$(e[t]!==void 0?e[t]:n),c=fe(t),u=c!==t?v(()=>{var l,m,i,g;return e[t],!!(((l=s.vnode.props)!=null&&l.hasOwnProperty(t)||(m=s.vnode.props)!=null&&m.hasOwnProperty(c))&&((i=s.vnode.props)!=null&&i.hasOwnProperty(`onUpdate:${t}`)||(g=s.vnode.props)!=null&&g.hasOwnProperty(`onUpdate:${c}`)))}):v(()=>{var l,m;return e[t],!!((l=s.vnode.props)!=null&&l.hasOwnProperty(t)&&(m=s.vnode.props)!=null&&m.hasOwnProperty(`onUpdate:${t}`))});it(()=>!u.value,()=>{K(()=>e[t],l=>{a.value=l})});const f=v({get(){return o(u.value?e[t]:a.value)},set(l){const m=r(l);(u.value?e[t]:a.value)===m||o(u.value?e[t]:a.value)===l||(a.value=m,s==null||s.emit(`update:${t}`,m))}});return Object.defineProperty(f,"externalValue",{get:()=>u.value?e[t]:a.value}),f}const xn={badge:"Badge",close:"Close",dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},datePicker:{itemsSelected:"{0} selected",nextMonthAriaLabel:"Next month",nextYearAriaLabel:"Next year",prevMonthAriaLabel:"Previous month",prevYearAriaLabel:"Previous year"},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Goto Page {0}",currentPage:"Page {0}, Current Page",first:"First page",last:"Last page"}},rating:{ariaLabel:{item:"Rating {0} of {1}"}}},Ne="$vuetify.",_e=(e,t)=>e.replace(/\{(\d+)\}/g,(n,o)=>String(t[+o])),ft=(e,t,n)=>function(o){for(var r=arguments.length,s=new Array(r>1?r-1:0),a=1;a<r;a++)s[a-1]=arguments[a];if(!o.startsWith(Ne))return _e(o,s);const c=o.replace(Ne,""),d=e.value&&n.value[e.value],u=t.value&&n.value[t.value];let f=we(d,c,null);return f||(G(`Translation key "${o}" not found in "${e.value}", trying fallback locale`),f=we(u,c,null)),f||(Ee(`Translation key "${o}" not found in fallback`),f=o),typeof f!="string"&&(Ee(`Translation key "${o}" has a non-string value`),f=o),_e(f,s)};function dt(e,t){return(n,o)=>new Intl.NumberFormat([e.value,t.value],o).format(n)}function be(e,t,n){var r,s;const o=wn(e,t,(r=e[t])!=null?r:n.value);return o.value=(s=e[t])!=null?s:n.value,K(n,a=>{e[t]==null&&(o.value=n.value)}),o}function mt(e){return t=>{const n=be(t,"locale",e.current),o=be(t,"fallback",e.fallback),r=be(t,"messages",e.messages);return{name:"vuetify",current:n,fallback:o,messages:r,t:ft(n,o,r),n:dt(n,o),provide:mt({current:n,fallback:o,messages:r})}}}function $n(e){var r,s;const t=$((r=e==null?void 0:e.locale)!=null?r:"en"),n=$((s=e==null?void 0:e.fallback)!=null?s:"en"),o=$({en:xn,...e==null?void 0:e.messages});return{name:"vuetify",current:t,fallback:n,messages:o,t:ft(t,n,o),n:dt(t,n),provide:mt({current:t,fallback:n,messages:o})}}const Cn={af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!1,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1},ae=Symbol.for("vuetify:locale");function Sn(e){return e.name!=null}function An(e){const t=e!=null&&e.adapter&&Sn(e==null?void 0:e.adapter)?e==null?void 0:e.adapter:$n(e),n=Fn(t,e);return{...t,...n}}function Po(){const e=E(ae);if(!e)throw new Error("[Vuetify] Could not find injected locale instance");return e}function Fn(e,t){var r;const n=$((r=t==null?void 0:t.rtl)!=null?r:Cn),o=v(()=>{var s;return(s=n.value[e.current.value])!=null?s:!1});return{isRtl:o,rtl:n,rtlClasses:v(()=>`v-locale--is-${o.value?"rtl":"ltr"}`)}}function Oo(){const e=E(ae);if(!e)throw new Error("[Vuetify] Could not find injected rtl instance");return{isRtl:e.isRtl,rtlClasses:e.rtlClasses}}const M=2.4,Be=.2126729,Me=.7151522,Ve=.072175,Pn=.55,On=.58,kn=.57,In=.62,ee=.03,je=1.45,Tn=5e-4,En=1.25,Rn=1.25,ze=.078,We=12.82051282051282,te=.06,Ue=.001;function He(e,t){const n=((e>>16&255)/255)**M,o=((e>>8&255)/255)**M,r=((e>>0&255)/255)**M,s=((t>>16&255)/255)**M,a=((t>>8&255)/255)**M,c=((t>>0&255)/255)**M;let d=n*Be+o*Me+r*Ve,u=s*Be+a*Me+c*Ve;if(d<=ee&&(d+=(ee-d)**je),u<=ee&&(u+=(ee-u)**je),Math.abs(u-d)<Tn)return 0;let f;if(u>d){const l=(u**Pn-d**On)*En;f=l<Ue?0:l<ze?l-l*We*te:l-te}else{const l=(u**In-d**kn)*Rn;f=l>-Ue?0:l>-ze?l-l*We*te:l+te}return f*100}const ie=Symbol.for("vuetify:theme"),ko=Z({theme:String},"theme"),H={defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#6200EE","primary-darken-1":"#3700B3",secondary:"#03DAC6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-variant":"#BDBDBD","on-surface-variant":"#424242",primary:"#BB86FC","primary-darken-1":"#3700B3",secondary:"#03DAC5","secondary-darken-1":"#03DAC5",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}};function Dn(){var r;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:H;if(!e)return{...H,isDisabled:!0};const t={};for(const[s,a]of Object.entries((r=e.themes)!=null?r:{})){var n,o;const c=a.dark||s==="dark"?(n=H.themes)==null?void 0:n.dark:(o=H.themes)==null?void 0:o.light;t[s]=T(c,a)}return T(H,{...e,themes:t})}function Ln(e){const t=I(Dn(e)),n=$(t.defaultTheme),o=$(t.themes),r=v(()=>{const u={};for(const[f,l]of Object.entries(o.value)){const m=u[f]={...l,colors:{...l.colors}};if(t.variations)for(const i of t.variations.colors){const g=m.colors[i];if(!!g)for(const w of["lighten","darken"]){const x=w==="lighten"?tn:nn;for(const h of Mt(t.variations[w],1))m.colors[`${i}-${w}-${h}`]=en(x(se(g),h))}}for(const i of Object.keys(m.colors)){if(/^on-[a-z]/.test(i)||m.colors[`on-${i}`])continue;const g=`on-${i}`,w=se(m.colors[i]),x=Math.abs(He(0,w)),h=Math.abs(He(16777215,w));m.colors[g]=h>Math.min(x,50)?"#fff":"#000"}}return u}),s=v(()=>r.value[n.value]),a=v(()=>{const u=[];s.value.dark&&V(u,":root",["color-scheme: dark"]);for(const[i,g]of Object.entries(r.value)){const{variables:w,dark:x}=g;V(u,`.v-theme--${i}`,[`color-scheme: ${x?"dark":"normal"}`,...Nn(g),...Object.keys(w).map(h=>{const C=w[h],P=typeof C=="string"&&C.startsWith("#")?st(C):void 0,j=P?`${P.r}, ${P.g}, ${P.b}`:void 0;return`--v-${h}: ${j!=null?j:C}`})])}const f=[],l=[],m=new Set(Object.values(r.value).flatMap(i=>Object.keys(i.colors)));for(const i of m)/^on-[a-z]/.test(i)?V(l,`.${i}`,[`color: rgb(var(--v-theme-${i})) !important`]):(V(f,`.bg-${i}`,[`--v-theme-overlay-multiplier: var(--v-theme-${i}-overlay-multiplier)`,`background: rgb(var(--v-theme-${i})) !important`,`color: rgb(var(--v-theme-on-${i})) !important`]),V(l,`.text-${i}`,[`color: rgb(var(--v-theme-${i})) !important`]),V(l,`.border-${i}`,[`--v-border-color: var(--v-theme-${i})`]));return u.push(...f,...l),u.map((i,g)=>g===0?i:`    ${i}`).join("")});function c(u){const f=u._context.provides.usehead;if(f)f.addHeadObjs(v(()=>{const l={children:a.value,type:"text/css",id:"vuetify-theme-stylesheet"};return t.cspNonce&&(l.nonce=t.cspNonce),{style:[l]}})),F&&ue(()=>f.updateDOM());else{let m=function(){if(!t.isDisabled){if(typeof document<"u"&&!l){const i=document.createElement("style");i.type="text/css",i.id="vuetify-theme-stylesheet",t.cspNonce&&i.setAttribute("nonce",t.cspNonce),l=i,document.head.appendChild(l)}l&&(l.innerHTML=a.value)}},l=F?document.getElementById("vuetify-theme-stylesheet"):null;K(a,m,{immediate:!0})}}const d=v(()=>t.isDisabled?void 0:`v-theme--${n.value}`);return{install:c,isDisabled:t.isDisabled,name:n,themes:o,current:s,computedThemes:r,themeClasses:d,styles:a,global:{name:n,current:s}}}function Io(e){R("provideTheme");const t=E(ie,null);if(!t)throw new Error("Could not find Vuetify theme injection");const n=v(()=>{var s;return(s=e.theme)!=null?s:t==null?void 0:t.name.value}),o=v(()=>t.isDisabled?void 0:`v-theme--${n.value}`),r={...t,name:n,themeClasses:o};return ce(ie,r),r}function V(e,t,n){e.push(`${t} {
`,...n.map(o=>`  ${o};
`),`}
`)}function Nn(e){const t=e.dark?2:1,n=e.dark?1:2,o=[];for(const[r,s]of Object.entries(e.colors)){const a=st(s);o.push(`--v-theme-${r}: ${a.r},${a.g},${a.b}`),r.startsWith("on-")||o.push(`--v-theme-${r}-overlay-multiplier: ${on(s)>.18?t:n}`)}return o}function _n(e){const t=$(),n=$();if(F){const o=new ResizeObserver(r=>{e==null||e(r,o),r.length&&(n.value=r[0].contentRect)});qe(()=>{o.disconnect()}),K(t,(r,s)=>{s&&(o.unobserve(s),n.value=void 0),r&&o.observe(r)},{flush:"post"})}return{resizeRef:t,contentRect:kt(n)}}const le=Symbol.for("vuetify:layout"),gt=Symbol.for("vuetify:layout-item"),Ye=1e3,To=Z({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Eo=Z({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function Ro(){const e=E(le);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function Do(e){var c;const t=E(le);if(!t)throw new Error("[Vuetify] Could not find injected layout");const n=(c=e.id)!=null?c:`layout-item-${Ae()}`,o=R("useLayoutItem");ce(gt,{id:n});const r=$(!1);It(()=>r.value=!0),Tt(()=>r.value=!1);const{layoutItemStyles:s,layoutItemScrimStyles:a}=t.register(o,{...e,active:v(()=>r.value?!1:e.active.value),id:n});return qe(()=>t.unregister(n)),{layoutItemStyles:s,layoutRect:t.layoutRect,layoutItemScrimStyles:a}}const Bn=(e,t,n,o)=>{let r={top:0,left:0,right:0,bottom:0};const s=[{id:"",layer:{...r}}];for(const a of e){const c=t.get(a),d=n.get(a),u=o.get(a);if(!c||!d||!u)continue;const f={...r,[c.value]:parseInt(r[c.value],10)+(u.value?parseInt(d.value,10):0)};s.push({id:a,layer:f}),r=f}return s};function Lo(e){const t=E(le,null),n=v(()=>t?t.rootZIndex.value-100:Ye),o=$([]),r=I(new Map),s=I(new Map),a=I(new Map),c=I(new Map),d=I(new Map),{resizeRef:u,contentRect:f}=_n(),l=v(()=>{var p;const y=new Map,S=(p=e.overlaps)!=null?p:[];for(const k of S.filter(b=>b.includes(":"))){const[b,A]=k.split(":");if(!o.value.includes(b)||!o.value.includes(A))continue;const D=r.get(b),z=r.get(A),W=s.get(b),q=s.get(A);!D||!z||!W||!q||(y.set(A,{position:D.value,amount:parseInt(W.value,10)}),y.set(b,{position:z.value,amount:-parseInt(q.value,10)}))}return y}),m=v(()=>{const y=[...new Set([...a.values()].map(p=>p.value))].sort((p,k)=>p-k),S=[];for(const p of y){const k=o.value.filter(b=>{var A;return((A=a.get(b))==null?void 0:A.value)===p});S.push(...k)}return Bn(S,r,s,c)}),i=v(()=>!Array.from(d.values()).some(y=>y.value)),g=v(()=>m.value[m.value.length-1].layer),w=v(()=>({"--v-layout-left":J(g.value.left),"--v-layout-right":J(g.value.right),"--v-layout-top":J(g.value.top),"--v-layout-bottom":J(g.value.bottom),...i.value?void 0:{transition:"none"}})),x=v(()=>m.value.slice(1).map((y,S)=>{let{id:p}=y;const{layer:k}=m.value[S],b=s.get(p),A=r.get(p);return{id:p,...k,size:Number(b.value),position:A.value}})),h=y=>x.value.find(S=>S.id===y),C=R("createLayout"),P=$(!1);Et(()=>{P.value=!0}),ce(le,{register:(y,S)=>{let{id:p,order:k,position:b,layoutSize:A,elementSize:D,active:z,disableTransitions:W,absolute:q}=S;a.set(p,k),r.set(p,b),s.set(p,A),c.set(p,z),W&&d.set(p,W);const Fe=ne(gt,C==null?void 0:C.vnode).indexOf(y);Fe>-1?o.value.splice(Fe,0,p):o.value.push(p);const Pe=v(()=>x.value.findIndex(U=>U.id===p)),me=v(()=>n.value+m.value.length*2-Pe.value*2),ht=v(()=>{const U=b.value==="left"||b.value==="right",ge=b.value==="right",yt=b.value==="bottom",Oe={[b.value]:0,zIndex:me.value,transform:`translate${U?"X":"Y"}(${(z.value?0:-110)*(ge||yt?-1:1)}%)`,position:q.value||n.value!==Ye?"absolute":"fixed",...i.value?void 0:{transition:"none"}};if(!P.value)return Oe;const O=x.value[Pe.value];if(!O)throw new Error(`[Vuetify] Could not find layout item "${p}"`);const ve=l.value.get(p);return ve&&(O[ve.position]+=ve.amount),{...Oe,height:U?`calc(100% - ${O.top}px - ${O.bottom}px)`:D.value?`${D.value}px`:void 0,left:ge?void 0:`${O.left}px`,right:ge?`${O.right}px`:void 0,top:b.value!=="bottom"?`${O.top}px`:void 0,bottom:b.value!=="top"?`${O.bottom}px`:void 0,width:U?D.value?`${D.value}px`:void 0:`calc(100% - ${O.left}px - ${O.right}px)`}}),pt=v(()=>({zIndex:me.value-1}));return{layoutItemStyles:ht,layoutItemScrimStyles:pt,zIndex:me}},unregister:y=>{a.delete(y),r.delete(y),s.delete(y),c.delete(y),d.delete(y),o.value=o.value.filter(S=>S!==y)},mainRect:g,mainStyles:w,getLayoutItem:h,items:x,layoutRect:f,rootZIndex:n});const j=v(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),vt=v(()=>({zIndex:n.value,position:t?"relative":void 0,overflow:t?"hidden":void 0}));return{layoutClasses:j,layoutStyles:vt,getLayoutItem:h,items:x,layoutRect:f,layoutRef:u}}function Mn(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{blueprint:t,...n}=e,o=T(t,n),{aliases:r={},components:s={},directives:a={}}=o,c=ln(o.defaults),d=dn(o.display,o.ssr),u=Ln(o.theme),f=bn(o.icons),l=An(o.locale);return{install:i=>{for(const g in a)i.directive(g,a[g]);for(const g in s)i.component(g,s[g]);for(const g in r)i.component(g,_({...r[g],name:g,aliasName:r[g].name}));if(u.install(i),i.provide(X,c),i.provide($e,d),i.provide(ie,u),i.provide(Ce,f),i.provide(ae,l),F&&o.ssr)if(i.$nuxt)i.$nuxt.hook("app:suspense:resolve",()=>{d.update()});else{const{mount:g}=i;i.mount=function(){const w=g(...arguments);return Rt(()=>d.update()),i.mount=g,w}}Ae.reset(),i.mixin({computed:{$vuetify(){return I({defaults:Y.call(this,X),display:Y.call(this,$e),theme:Y.call(this,ie),icons:Y.call(this,Ce),locale:Y.call(this,ae)})}}})},defaults:c,display:d,theme:u,icons:f,locale:l}}const Vn="3.0.3";Mn.version=Vn;function Y(e){var s;var t,n;const o=this.$,r=(s=(t=o.parent)==null?void 0:t.provides)!=null?s:(n=o.vnode.appContext)==null?void 0:n.provides;if(r&&e in r)return r[e]}export{io as $,G as A,xe as B,zt as C,Fo as D,_n as E,Ie as F,Hn as G,no as H,vn as I,eo as J,F as K,Po as L,it as M,Qn as N,Jn as O,Xn as P,$o as Q,Un as R,xo as S,Co as T,oo as U,ro as V,so as W,wo as X,pe as Y,Ee as Z,ao as _,Ao as a,jt as a0,lo as a1,lt as a2,vo as a3,bo as a4,uo as a5,ho as a6,Gn as a7,pn as a8,Mn as a9,to as aa,po as ab,yo as ac,Wn as ad,Yn as ae,Mt as af,Zn as ag,Te as ah,J as b,go as c,_ as d,Ro as e,ko as f,Io as g,Lo as h,Oo as i,un as j,mo as k,fo as l,To as m,qn as n,co as o,Z as p,Vt as q,Eo as r,wn as s,Do as t,So as u,R as v,Ae as w,Bt as x,Kn as y,ne as z};
