import{h as L,l as e,c as b,P as f,Q as y,R as l,m as n,W as s,a7 as c,u as i,n as T,q as _,X as A,a6 as B,F,a0 as K,O as N}from"./vue.c5a49e63.js";import{b as g}from"./route-block.2f1a6263.js";import{_ as P}from"./index.1486da16.js";import{n as E,y as G,p as R,E as U,x as q,q as M,O as D}from"./vuetify.8179899a.js";import"./firebase-app.4dc8b612.js";import"./firebase-storage.eb3640cf.js";import"./firebase-functions.f542ccb7.js";import"./firebase-firestore.5d0d1530.js";import"./firebase-auth.9b217eac.js";const Q={class:"pa-4"},W=L({name:"playgroundCustomAutocomplete"}),V=Object.assign(W,{setup(X){e({name:"nuevo producto"});let x=e([{name:"Macbook",brand:"Apple",id:1},{name:"iPad",brand:"Apple",id:2,disable:!0},{name:"Galaxy 5",brand:"Samsung",id:3},{name:"Galaxy 1",brand:"Samsung",id:4},{name:"Galaxy 2",brand:"Samsung",id:5},{name:"every",brand:"every",id:6}]);e();let v=e("");e("");let o=e([]),u=e(""),d=e(["id"]),S=b(()=>!d.value.length),C=e(!1),h=b(()=>x.value.filter(a=>{let t=Object.values(a),r=Object.entries(a).map(([p,I])=>{if(d.value.includes(p))return[I]});return(S.value?t:r).some(p=>p.toString().toLowerCase().includes(u.value.toLowerCase()))}).slice(0,w.value));function O(m){return v.value?m[v.value]:Object.values(m)[0]}function k(){return Object.values(o.value)}let j=e(20);e(null);let w=e(j.value);return(m,a)=>(f(),y(q,{class:"overflow-visible","min-height":"300",color:"#323a44"},{default:l(()=>[n(U,null,{default:l(()=>[s("span",Q,[s("div",null,[s("code",null," searchable keys: "+c(i(d)),1)]),s("div",null,[s("code",null," return-object: "+c(i(C)),1)]),s("div",null,[s("code",null," Selected-item: "+c(k()),1)])]),n(E,{attach:"",class:"overflow-visible"},{activator:l(({props:t})=>[n(G,T({modelValue:i(u),"onUpdate:modelValue":a[0]||(a[0]=r=>_(u)?u.value=r:u=r),"color.trim":"primary"},t),null,16,["modelValue"])]),default:l(()=>[n(R,{selected:i(o),"onUpdate:selected":a[1]||(a[1]=t=>_(o)?o.value=t:o=t)},{default:l(()=>[(f(!0),A(F,null,B(i(h),(t,r)=>(f(),y(M,{key:r,value:t},{default:l(()=>[n(D,null,{default:l(()=>[N(c(O(t)),1)]),_:2},1024)]),_:2},1032,["value"]))),128))]),_:1},8,["selected"])]),_:1}),K(' <v-autocomplete :items="items" item-title="name"></v-autocomplete> ')]),_:1})]),_:1}))}});typeof g=="function"&&g(V);const se=P(V,[["__file","/Users/santiago/webProjects/VueSienna/src/pages/playground/projects/autocomplete-custom-one/AutoCompleteCustomOne.vue"]]);export{se as default};
