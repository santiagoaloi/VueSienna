import{h as L,ac as V,c as C,r as k,P as c,X as p,W as o,m as t,R as e,Y as f,u as i,a7 as u,Q as m,F as z,a6 as I,a0 as w}from"./vue.a15cdaca.js";import{b as h}from"./route-block.78efdbad.js";import{_ as A}from"./index.69c7ecdd.js";import{u as M,x as S,y as N,m as T,a as B,n as _,L as $,M as H,N as R,O as j,I as F}from"./vuetify.955766fe.js";import"./firebase-app.4dc8b612.js";import"./firebase-storage.eb3640cf.js";import"./firebase-functions.f542ccb7.js";import"./firebase-firestore.5d0d1530.js";import"./firebase-auth.9b217eac.js";const P={class:"fill-height"},U={class:"text-h3 pa-15 align-center justify-center d-flex"},D=["innerHTML"],O=["innerHTML"],E=L({name:"playgroundLazyScroll"}),g=Object.assign(E,{setup(Q){let x=V().getRoutes(),{mdAndUp:v}=M(),b=x.filter(l=>{var a;return((a=l.name)==null?void 0:a.includes("playground"))&&l.name!=="playground"}),y=C(()=>r.filter(l=>l.isActive).length),r=k(b.flatMap(({name:l,meta:a})=>{let s=/(\w+)$/,n="playground/projects/",d=l.match(s)[1];return[{prependIcon:"$mdiSpaceInvaders",title:a.title||d,get to(){return`${n+d}`},subtitle:a.description?`<span class="text-deep-purple-accent-1">Ali Connors</span> &mdash; ${a.description}`:"No description available"}]}).sort(()=>-1));return(l,a)=>(c(),p("div",P,[o("div",{class:f([{"fill-height":i(v)},"d-flex flex-column bg-transparent"]),color:"transparent"},[t(B,{class:"fill-height",src:"hero.svg",style:{overflow:"visible"},cover:""},{default:e(()=>[o("div",{class:f([{"fill-height":i(r).length},"d-flex flex-column mx-auto"])},[o("h5",U,[o("span",null,u(y.value)+" of "+u(i(r).length)+" "+u("posts shown"),1)]),t(S,{border:"",class:"d-flex flex-column mx-auto rounded-b-xl mb-10 fill-height",width:"70vw",elevation:"14",color:"rgba(30, 30, 30, 0.5)",style:{"backdrop-filter":"saturate(50%) blur(8px)"},"min-height":"200"},{default:e(()=>[t(N,{class:"d-flex flex-column","prepend-inner-icon":"$mdiMagnify",placeholder:"Search...",clearable:"",autofocus:"",bgColor:"transparent"}),i(r).length?(c(),m(T,{key:0,"bg-color":"transparent"},{default:e(()=>[(c(!0),p(z,null,I(i(r),s=>(c(),m(_,{key:s.title},{default:e(()=>[t($,{modelValue:s.isActive,"onUpdate:modelValue":n=>s.isActive=n,options:{threshold:.5},class:"fill-height d-flex"},{default:e(()=>[t(_,null,{prepend:e(({isActive:n})=>[t(H,{start:""},{default:e(()=>[t(R)]),_:1})]),default:e(()=>[t(j,null,{default:e(()=>[o("div",{class:"text-capitalize",innerHTML:s.title},null,8,D)]),_:2},1024),t(F,null,{default:e(()=>[o("div",{class:"text-capitalize",innerHTML:s.subtitle},null,8,O)]),_:2},1024)]),_:2},1024)]),_:2},1032,["modelValue","onUpdate:modelValue","options"])]),_:2},1024))),128))]),_:1})):w("v-if",!0)]),_:1})],2)]),_:1})],2)]))}});typeof h=="function"&&h(g);const le=A(g,[["__file","C:/webProjects/v-test/src/pages/playground/projects/lazy-scroll-list/LazyScrollList.vue"]]);export{le as default};
