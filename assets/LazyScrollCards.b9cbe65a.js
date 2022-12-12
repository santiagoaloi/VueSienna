import{u as y}from"./vue-router.cd3f2694.js";import{b as f}from"./route-block.2f1a6263.js";import{a as h,a2 as v,V as _}from"./index.4d4089e3.js";import{V as x}from"./VSheet.a1a6ecd7.js";import{V as C}from"./VLazy.60abf818.js";import{b,d as L}from"./VCard.344526c3.js";import{j as k,h as w,a as N,l as a,p,q as t,X as s,a3 as d,Y as c,x as m,s as T,u as M,F as R,a0 as A,L as r}from"./vue.05eca872.js";import"./firebase-app.4dc8b612.js";import"./firebase-storage.eb3640cf.js";import"./firebase-functions.f542ccb7.js";import"./firebase-firestore.805c72ca.js";import"./firebase-auth.9b217eac.js";import"./pinia.0dc6b6a5.js";import"./vue-chemistry.c335f58a.js";import"./gh-pages.f50f052d.js";import"./vuetify.963a462a.js";import"./pinia-plugin-persistedstate.fa7085e9.js";const B=s("div",{class:"display-2"},"Endless scrolling with VLazy",-1),H=["textContent"],S=["innerHTML"],$=["innerHTML"],z=k({name:"playgroundLazyScroll"}),j=Object.assign(z,{setup(E){let g=y().getRoutes().filter(l=>{var e;return((e=l.name)==null?void 0:e.includes("playground"))&&l.name!=="playground"}),V=w(()=>i.filter(l=>l.isActive).length),i=N(g.flatMap(({name:l,meta:e})=>{let o=/(\w+)$/,n="playground/projects/",u=l.match(o)[1];return[{prependIcon:"$mdiSpaceInvaders",title:e.title||u,get to(){return`${n+u}`},subtitle:e.description?`<span class="text-deep-purple-accent-1">Ali Connors</span> &mdash; ${e.description}`:"No description available"}]}).sort(()=>-1));return(l,e)=>(a(),p(v,{class:"py-3"},{default:t(()=>[B,s("h5",null,[s("span",{textContent:d(V.value)},null,8,H),c(" of "),s("span",null,d(m(i).length),1),c(" posts shown ")]),m(i).length?(a(),p(h,{key:0,class:"fill-height overflow-y-auto"},{default:t(()=>[(a(!0),T(R,null,M(m(i),(o,n)=>(a(),p(_,{lg:"3",md:"4",sm:"6",cols:"12"},{default:t(()=>[r(x,{"min-height":"300",class:"fill-height",color:"red"},{default:t(()=>[r(C,{modelValue:o.isActive,"onUpdate:modelValue":u=>o.isActive=u,options:{threshold:.8},class:"fill-height"},{default:t(()=>[r(b,{color:"rgba(20, 20, 20, 0.8)",class:"fill-height",hover:""},{default:t(()=>[r(L,null,{default:t(()=>[(a(),p(h,{key:n,onClick:e[0]||(e[0]=()=>{})},{default:t(()=>[r(_,{sm:"10",cols:"12",class:"text-sm-left text-center"},{default:t(()=>[c(" #"+d(n+1)+" ",1),s("h2",{innerHTML:o.title},null,8,S),s("div",{innerHTML:o.subtitle},null,8,$)]),_:2},1024)]),_:2},1024))]),_:2},1024)]),_:2},1024)]),_:2},1032,["modelValue","onUpdate:modelValue","options"])]),_:2},1024)]),_:2},1024))),256))]),_:1})):A("v-if",!0)]),_:1}))}});typeof f=="function"&&f(j);export{j as default};
