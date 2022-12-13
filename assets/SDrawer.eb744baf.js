import K from"./SDrawerNavBottom.817dc12c.js";import Q from"./SDrawerNav.de1937d4.js";import{t as J,w as ee,A as te,d as ae,D as ne,q as I,G as oe,K as le,an as ie,a7 as ue,af as re}from"./index.50ee5b3c.js";import{r as x,h,C as F,w as D,E as U,A as O,Q as se,L as S,M as ce,T as ve,F as de,n as me,l as fe,p as he,q as X,x as A}from"./vue.05eca872.js";import{b as H,ag as ge,d as we,r as ye,f as be,i as pe,g as Se,a as _e,s as ke,ah as Ee,t as Te,j as Me,u as xe}from"./vuetify.963a462a.js";import"./VList.622cbc6f.js";import"./VDivider.22721e49.js";import"./firebase-app.4dc8b612.js";import"./firebase-storage.eb3640cf.js";import"./firebase-functions.f542ccb7.js";import"./firebase-firestore.805c72ca.js";import"./firebase-auth.9b217eac.js";import"./pinia.0dc6b6a5.js";import"./vue-chemistry.c335f58a.js";import"./vue-router.cd3f2694.js";import"./gh-pages.f50f052d.js";import"./pinia-plugin-persistedstate.fa7085e9.js";function Be(e){let{rootEl:r,isSticky:s,layoutItemStyles:a}=e;const n=x(!1),t=x(0),c=h(()=>{const f=typeof n.value=="boolean"?"top":n.value;return[s.value?{top:"auto",bottom:"auto",height:void 0}:void 0,n.value?{[f]:H(t.value)}:{top:a.value.top}]});F(()=>{D(s,f=>{f?window.addEventListener("scroll",_,{passive:!0}):window.removeEventListener("scroll",_)},{immediate:!0})}),U(()=>{document.removeEventListener("scroll",_)});let g=0;function _(){var E;const f=g>window.scrollY?"up":"down",l=r.value.getBoundingClientRect(),m=parseFloat((E=a.value.top)!=null?E:0),d=window.scrollY-Math.max(0,t.value-m),i=l.height+Math.max(t.value,m)-window.scrollY-window.innerHeight;l.height<window.innerHeight-m?(n.value="top",t.value=m):f==="up"&&n.value==="bottom"||f==="down"&&n.value==="top"?(t.value=window.scrollY+l.top,n.value=!0):f==="down"&&i<=0?(t.value=0,n.value="bottom"):f==="up"&&d<=0&&(t.value=l.top+d,n.value="top"),g=window.scrollY}return{isStuck:n,stickyStyles:c}}const Ce=100,Ve=20;function z(e){const r=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*r}function q(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let r=0;for(let s=e.length-1;s>0;s--){if(e[s].t===e[s-1].t)continue;const a=z(r),n=(e[s].d-e[s-1].d)/(e[s].t-e[s-1].t);r+=(n-a)*Math.abs(n),s===e.length-1&&(r*=.5)}return z(r)*1e3}function Re(){const e={};function r(n){Array.from(n.changedTouches).forEach(t=>{var g;((g=e[t.identifier])!=null?g:e[t.identifier]=new ge(Ve)).push([n.timeStamp,t])})}function s(n){Array.from(n.changedTouches).forEach(t=>{delete e[t.identifier]})}function a(n){var t;const c=(t=e[n])==null?void 0:t.values().reverse();if(!c)throw new Error(`No samples for touch id ${n}`);const g=c[0],_=[],f=[];for(const l of c){if(g[0]-l[0]>Ce)break;_.push({t:l[0],d:l[1].clientX}),f.push({t:l[0],d:l[1].clientY})}return{x:q(_),y:q(f),get direction(){const{x:l,y:m}=this,[d,i]=[Math.abs(l),Math.abs(m)];return d>i&&l>=0?"right":d>i&&l<=0?"left":i>d&&m>=0?"down":i>d&&m<=0?"up":He()}}}return{addMovement:r,endTouch:s,getVelocity:a}}function He(){throw new Error}function De(e){let{isActive:r,isTemporary:s,width:a,touchless:n,position:t}=e;F(()=>{window.addEventListener("touchstart",C,{passive:!0}),window.addEventListener("touchmove",M,{passive:!1}),window.addEventListener("touchend",b,{passive:!0})}),U(()=>{window.removeEventListener("touchstart",C),window.removeEventListener("touchmove",M),window.removeEventListener("touchend",b)});const c=h(()=>t.value!=="bottom"),{addMovement:g,endTouch:_,getVelocity:f}=Re();let l=!1;const m=x(!1),d=x(0),i=x(0);let E;function B(o,u){return(t.value==="left"?o:t.value==="right"?document.documentElement.clientWidth-o:t.value==="bottom"?document.documentElement.clientHeight-o:V())-(u?a.value:0)}function T(o){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const v=t.value==="left"?(o-i.value)/a.value:t.value==="right"?(document.documentElement.clientWidth-o-i.value)/a.value:t.value==="bottom"?(document.documentElement.clientHeight-o-i.value)/a.value:V();return u?Math.max(0,Math.min(1,v)):v}function C(o){if(n.value)return;const u=o.changedTouches[0].clientX,v=o.changedTouches[0].clientY,w=25,k=t.value==="left"?u<w:t.value==="right"?u>document.documentElement.clientWidth-w:t.value==="bottom"?v>document.documentElement.clientHeight-w:V(),y=r.value&&(t.value==="left"?u<a.value:t.value==="right"?u>document.documentElement.clientWidth-a.value:t.value==="bottom"?v>document.documentElement.clientHeight-a.value:V());(k||y||r.value&&s.value)&&(l=!0,E=[u,v],i.value=B(c.value?u:v,r.value),d.value=T(c.value?u:v),_(o),g(o))}function M(o){const u=o.changedTouches[0].clientX,v=o.changedTouches[0].clientY;if(l){if(!o.cancelable){l=!1;return}const k=Math.abs(u-E[0]),y=Math.abs(v-E[1]);(c.value?k>y&&k>3:y>k&&y>3)?(m.value=!0,l=!1):(c.value?y:k)>3&&(l=!1)}if(!m.value)return;o.preventDefault(),g(o);const w=T(c.value?u:v,!1);d.value=Math.max(0,Math.min(1,w)),w>1?i.value=B(c.value?u:v,!0):w<0&&(i.value=B(c.value?u:v,!1))}function b(o){if(l=!1,!m.value)return;g(o),m.value=!1;const u=f(o.changedTouches[0].identifier),v=Math.abs(u.x),w=Math.abs(u.y);(c.value?v>w&&v>400:w>v&&w>3)?r.value=u.direction===({left:"right",right:"left",bottom:"up"}[t.value]||V()):r.value=d.value>.5}const R=h(()=>m.value?{transform:t.value==="left"?`translateX(calc(-100% + ${d.value*a.value}px))`:t.value==="right"?`translateX(calc(100% - ${d.value*a.value}px))`:t.value==="bottom"?`translateY(calc(100% - ${d.value*a.value}px))`:V(),transition:"none"}:void 0);return{isDragging:m,dragProgress:d,dragStyles:R}}function V(){throw new Error}const Le=["start","end","left","right","bottom"],Ne=we({name:"VNavigationDrawer",props:{color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:Boolean,railWidth:{type:[Number,String],default:56},scrim:{type:[String,Boolean],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>Le.includes(e)},sticky:Boolean,...J(),...ee(),...ye(),...te(),...ae({tag:"nav"}),...be()},emits:{"update:modelValue":e=>!0},setup(e,r){let{attrs:s,slots:a}=r;const{isRtl:n}=pe(),{themeClasses:t}=Se(e),{borderClasses:c}=ne(e),{backgroundColorClasses:g,backgroundColorStyles:_}=I(O(e,"color")),{elevationClasses:f}=oe(e),{mobile:l}=_e(),{roundedClasses:m}=le(e),d=ie(),i=ke(e,"modelValue",null,p=>!!p),{ssrBootStyles:E}=ue(),B=x(),T=x(!1),C=h(()=>e.rail&&e.expandOnHover&&T.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),M=h(()=>Ee(e.location,n.value)),b=h(()=>!e.permanent&&(l.value||e.temporary)),R=h(()=>e.sticky&&!b.value&&M.value!=="bottom");e.disableResizeWatcher||D(b,p=>!e.permanent&&me(()=>i.value=!p)),!e.disableRouteWatcher&&d&&D(d.currentRoute,()=>b.value&&(i.value=!1)),D(()=>e.permanent,p=>{p&&(i.value=!0)}),se(()=>{e.modelValue!=null||b.value||(i.value=e.permanent||!l.value)});const{isDragging:o,dragProgress:u,dragStyles:v}=De({isActive:i,isTemporary:b,width:C,touchless:O(e,"touchless"),position:M}),w=h(()=>{const p=b.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):C.value;return o.value?p*u.value:p}),{layoutItemStyles:k,layoutRect:y,layoutItemScrimStyles:L}=Te({id:e.name,order:h(()=>parseInt(e.order,10)),position:M,layoutSize:w,elementSize:C,active:h(()=>i.value||o.value),disableTransitions:h(()=>o.value),absolute:h(()=>e.absolute||R.value&&typeof N.value!="string")}),{isStuck:N,stickyStyles:Z}=Be({rootEl:B,isSticky:R,layoutItemStyles:k}),P=I(h(()=>typeof e.scrim=="string"?e.scrim:null)),j=h(()=>({...o.value?{opacity:u.value*.2,transition:"none"}:void 0,...y.value?{left:H(y.value.left),right:H(y.value.right),top:H(y.value.top),bottom:H(y.value.bottom)}:void 0,...L.value}));return Me({VList:{bgColor:"transparent"}}),xe(()=>{var p,Y,$,W;const G=a.image||e.image;return S(de,null,[S(e.tag,ce({ref:B,onMouseenter:()=>T.value=!0,onMouseleave:()=>T.value=!1,class:["v-navigation-drawer",`v-navigation-drawer--${M.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":T.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":b.value,"v-navigation-drawer--active":i.value,"v-navigation-drawer--sticky":R.value},t.value,g.value,c.value,f.value,m.value],style:[_.value,k.value,v.value,E.value,Z.value]},s),{default:()=>[G&&S("div",{key:"image",class:"v-navigation-drawer__img"},[a.image?(p=a.image)==null?void 0:p.call(a,{image:e.image}):S("img",{src:e.image,alt:""},null)]),a.prepend&&S("div",{class:"v-navigation-drawer__prepend"},[(Y=a.prepend)==null?void 0:Y.call(a)]),S("div",{class:"v-navigation-drawer__content"},[($=a.default)==null?void 0:$.call(a)]),a.append&&S("div",{class:"v-navigation-drawer__append"},[(W=a.append)==null?void 0:W.call(a)])]}),S(ve,{name:"fade-transition"},{default:()=>[b.value&&(o.value||i.value)&&!!e.scrim&&S("div",{class:["v-navigation-drawer__scrim",P.backgroundColorClasses.value],style:[j.value,P.backgroundColorStyles.value],onClick:()=>i.value=!1},null)]})])}),{isStuck:N}}}),Je={__name:"SDrawer",setup(e){let r=re();return(s,a)=>{const n=Q,t=K;return fe(),he(Ne,{order:"1",width:"260",modelValue:A(r).drawer,"onUpdate:modelValue":a[0]||(a[0]=c=>A(r).drawer=c)},{append:X(()=>[S(t)]),default:X(()=>[S(n)]),_:1},8,["modelValue"])}}};export{Je as default};
