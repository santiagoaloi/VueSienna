import{r as B,l as r,c as l,b as g,U as u,V as C,W as s,m as i,D as N,$ as P,O as w}from"./vue.ea012b77.js";import{b as d}from"./route-block.78efdbad.js";import{_ as y}from"./index.14c414b1.js";import{c as A,V as I,Q as k,R as E,A as L,s as R}from"./vuetify.603efe34.js";import"./firebase-app.89ad7201.js";import"./firebase-storage.f52a0a49.js";import"./firebase-functions.8ee4e55f.js";import"./firebase-firestore.b9d472db.js";import"./firebase-auth.2fc90a2c.js";const D={class:"text-teal pa-4"},p={__name:"AutocompleteEndlessScroll",setup(W){let c=B([{id:1,name:"Harry",lastName:"Potter",itemProps:{disabled:!0}},{id:2,name:"Ron",lastName:"Weasley",itemProps:{disabled:!1}},{id:3,name:"Ginny",lastName:"Weasley",itemProps:{disabled:!1}},{id:4,name:"Lord",lastName:"Voldemort",itemProps:{disabled:!1}},{id:5,name:"Severus",lastName:"Snape",itemProps:{disabled:!1}},{id:6,name:"Albus",lastName:"Dumbledore",itemProps:{disabled:!1}}]),o=r(""),e=r(2),m=r(null),t=r(e.value),f=l(()=>Math.ceil(h.value/e.value)),v=l(()=>f.value.length>=t.value),h=l(()=>c.length),_=l(()=>e.value===t.value);function b(){t.value=e.value}function x(){if(!(_.value||v.value))return t.value+=e.value,m.value=t.value+e.value,c.slice(0,m.value)}let S=l(()=>c.filter(a=>a.name.toString().toLowerCase().includes(o.value.toLowerCase())).slice(0,t.value));return g(()=>o.value,(n,a)=>{!n&&a&&b()}),(n,a)=>(u(),C(R,{color:"transparent",flat:"",class:"d-flex flex-column fill-height"},{default:s(()=>[i(L,null,{default:s(()=>[i(A,{density:"compact",dense:""},{default:s(()=>[i(I,{cols:"8"},{default:s(()=>[i(k,{search:o.value,"onUpdate:search":a[0]||(a[0]=V=>o.value=V),items:S.value,"item-title":"name",filled:"","cache-items":"","menu-props":{maxHeight:200}},{"append-item":s(()=>[N((u(),P("div",D,[w(" Loading... ")])),[[E,x]])]),_:1},8,["search","items"])]),_:1})]),_:1})]),_:1})]),_:1}))}};typeof d=="function"&&d(p);const $=y(p,[["__file","C:/webProjects/v-test/src/pages/playground/projects/autocomplete-endless-scroll/AutocompleteEndlessScroll.vue"]]);export{$ as default};
