import"./lodash.clonedeep.42da14fd.js";import{b}from"./route-block.2f1a6263.js";import{V as O}from"./VMenu.dcd9778a.js";import{V as T}from"./VTextField.d2e961b4.js";import{V as w,a as A,c as B}from"./VList.0044357c.js";import{d as F,b as K}from"./VCard.344526c3.js";import{j as N,r as e,h as V,l as f,p as y,q as l,L as u,X as r,a3 as d,x as n,M as G,b as g,s as M,u as E,F as P,a0 as R,Y as U}from"./vue.05eca872.js";import"./gh-pages.f50f052d.js";import"./index.4d4089e3.js";import"./firebase-app.4dc8b612.js";import"./firebase-storage.eb3640cf.js";import"./firebase-functions.f542ccb7.js";import"./firebase-firestore.805c72ca.js";import"./firebase-auth.9b217eac.js";import"./pinia.0dc6b6a5.js";import"./vue-chemistry.c335f58a.js";import"./vue-router.cd3f2694.js";import"./vuetify.963a462a.js";import"./pinia-plugin-persistedstate.fa7085e9.js";import"./VDivider.bdf6782d.js";const q={class:"pa-4"},D=N({name:"playgroundCustomAutocomplete"}),X=Object.assign(D,{setup(Y){e({name:"nuevo producto"});let _=e([{name:"Macbook",brand:"Apple",id:1},{name:"iPad",brand:"Apple",id:2,disable:!0},{name:"Galaxy 5",brand:"Samsung",id:3},{name:"Galaxy 1",brand:"Samsung",id:4},{name:"Galaxy 2",brand:"Samsung",id:5},{name:"every",brand:"every",id:6}]);e();let v=e("");e("");let s=e([]),i=e(""),c=e(["id"]),x=V(()=>!c.value.length),S=e(!1),h=V(()=>_.value.filter(a=>{let t=Object.values(a),o=Object.entries(a).map(([p,I])=>{if(c.value.includes(p))return[I]});return(x.value?t:o).some(p=>p.toString().toLowerCase().includes(i.value.toLowerCase()))}).slice(0,L.value));function k(m){return v.value?m[v.value]:Object.values(m)[0]}function C(){return Object.values(s.value)}let j=e(20);e(null);let L=e(j.value);return(m,a)=>(f(),y(K,{class:"overflow-visible","min-height":"300",color:"#323a44"},{default:l(()=>[u(F,null,{default:l(()=>[r("span",q,[r("div",null,[r("code",null," searchable keys: "+d(n(c)),1)]),r("div",null,[r("code",null," return-object: "+d(n(S)),1)]),r("div",null,[r("code",null," Selected-item: "+d(C()),1)])]),u(O,{attach:"",class:"overflow-visible"},{activator:l(({props:t})=>[u(T,G({modelValue:n(i),"onUpdate:modelValue":a[0]||(a[0]=o=>g(i)?i.value=o:i=o),"color.trim":"primary"},t),null,16,["modelValue"])]),default:l(()=>[u(w,{selected:n(s),"onUpdate:selected":a[1]||(a[1]=t=>g(s)?s.value=t:s=t)},{default:l(()=>[(f(!0),M(P,null,E(n(h),(t,o)=>(f(),y(A,{key:o,value:t},{default:l(()=>[u(B,null,{default:l(()=>[U(d(k(t)),1)]),_:2},1024)]),_:2},1032,["value"]))),128))]),_:1},8,["selected"])]),_:1}),R(' <VAutocomplete :items="items" item-title="name"></VAutocomplete> ')]),_:1})]),_:1}))}});typeof b=="function"&&b(X);export{X as default};
