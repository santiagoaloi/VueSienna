import{h as v,af as C,c as x,r as b,U as o,V as u,W as t,_ as a,aa as d,O as p,u as f,$ as L,a9 as k,F as w,a4 as z,m as r}from"./vue.ea012b77.js";import{b as m}from"./route-block.78efdbad.js";import{_ as M}from"./index.14c414b1.js";import{c as _,b as N,V as h,G as S,M as T,s as R,E as $}from"./vuetify.603efe34.js";import"./firebase-app.89ad7201.js";import"./firebase-storage.f52a0a49.js";import"./firebase-functions.8ee4e55f.js";import"./firebase-firestore.b9d472db.js";import"./firebase-auth.2fc90a2c.js";const A=a("div",{class:"display-2"},"Endless scrolling with VLazy",-1),B=["textContent"],H=["innerHTML"],j=["innerHTML"],E=v({name:"playgroundLazyScroll"}),g=Object.assign(E,{setup(U){let y=C().getRoutes().filter(l=>{var e;return((e=l.name)==null?void 0:e.includes("playground"))&&l.name!=="playground"}),V=x(()=>n.filter(l=>l.isActive).length),n=b(y.flatMap(({name:l,meta:e})=>{let s=/(\w+)$/,i="playground/projects/",c=l.match(s)[1];return[{prependIcon:"$mdiSpaceInvaders",title:e.title||c,get to(){return`${i+c}`},subtitle:e.description?`<span class="text-deep-purple-accent-1">Ali Connors</span> &mdash; ${e.description}`:"No description available"}]}).sort(()=>-1));return(l,e)=>(o(),u(N,{class:"py-3"},{default:t(()=>[A,a("h5",null,[a("span",{textContent:d(V.value)},null,8,B),p(" of "),a("span",null,d(f(n).length),1),p(" posts shown ")]),f(n).length?(o(),u(_,{key:0,class:"fill-height overflow-y-auto"},{default:t(()=>[(o(!0),L(w,null,k(f(n),(s,i)=>(o(),u(h,{lg:"3",md:"4",sm:"6",cols:"12"},{default:t(()=>[r(S,{"min-height":"300",class:"fill-height",color:"red"},{default:t(()=>[r(T,{modelValue:s.isActive,"onUpdate:modelValue":c=>s.isActive=c,options:{threshold:.8},class:"fill-height"},{default:t(()=>[r(R,{color:"rgba(20, 20, 20, 0.8)",class:"fill-height",hover:""},{default:t(()=>[r($,null,{default:t(()=>[(o(),u(_,{key:i,onClick:e[0]||(e[0]=()=>{})},{default:t(()=>[r(h,{sm:"10",cols:"12",class:"text-sm-left text-center"},{default:t(()=>[p(" #"+d(i+1)+" ",1),a("h2",{innerHTML:s.title},null,8,H),a("div",{innerHTML:s.subtitle},null,8,j)]),_:2},1024)]),_:2},1024))]),_:2},1024)]),_:2},1024)]),_:2},1032,["modelValue","onUpdate:modelValue","options"])]),_:2},1024)]),_:2},1024))),256))]),_:1})):z("v-if",!0)]),_:1}))}});typeof m=="function"&&m(g);const X=M(g,[["__file","C:/webProjects/v-test/src/pages/playground/projects/lazy-scroll-cards/LazyScrollCards.vue"]]);export{X as default};
