import{h as F,l as e,c as b,R as f,S as y,U as l,m as n,Y as s,a9 as c,u as i,n as I,q as _,Z as L,aa as T,F as B,a1 as K,O as N}from"./vue.d9b8162b.js";import"./index.836c7776.js";import{b as V}from"./route-block.2f1a6263.js";import{_ as U}from"./index.fb021691.js";import{A as E,v as G,D as P,F as R,t as D,E as M,Q as q}from"./vuetify.f74e1cdb.js";import"./firebase-app.89ad7201.js";import"./firebase-storage.f52a0a49.js";import"./firebase-functions.8ee4e55f.js";import"./firebase-firestore.a2c1f006.js";import"./firebase-auth.e24d5b9f.js";const Q={class:"pa-4"},Y=F({name:"playgroundCustomAutocomplete"}),g=Object.assign(Y,{setup(Z){e({name:"nuevo producto"});let S=e([{name:"Macbook",brand:"Apple",id:1},{name:"iPad",brand:"Apple",id:2,disable:!0},{name:"Galaxy 5",brand:"Samsung",id:3},{name:"Galaxy 1",brand:"Samsung",id:4},{name:"Galaxy 2",brand:"Samsung",id:5},{name:"every",brand:"every",id:6}]);e();let v=e("");e("");let o=e([]),u=e(""),d=e(["id"]),x=b(()=>!d.value.length),C=e(!1),h=b(()=>S.value.filter(a=>{let t=Object.values(a),r=Object.entries(a).map(([p,w])=>{if(d.value.includes(p))return[w]});return(x.value?t:r).some(p=>p.toString().toLowerCase().includes(u.value.toLowerCase()))}).slice(0,A.value));function k(m){return v.value?m[v.value]:Object.values(m)[0]}function O(){return Object.values(o.value)}let j=e(20);e(null);let A=e(j.value);return(m,a)=>(f(),y(D,{class:"overflow-visible","min-height":"300",color:"#323a44"},{default:l(()=>[n(R,null,{default:l(()=>[s("span",Q,[s("div",null,[s("code",null," searchable keys: "+c(i(d)),1)]),s("div",null,[s("code",null," return-object: "+c(i(C)),1)]),s("div",null,[s("code",null," Selected-item: "+c(O()),1)])]),n(E,{attach:"",class:"overflow-visible"},{activator:l(({props:t})=>[n(G,I({modelValue:i(u),"onUpdate:modelValue":a[0]||(a[0]=r=>_(u)?u.value=r:u=r),"color.trim":"primary"},t),null,16,["modelValue"])]),default:l(()=>[n(P,{selected:i(o),"onUpdate:selected":a[1]||(a[1]=t=>_(o)?o.value=t:o=t)},{default:l(()=>[(f(!0),L(B,null,T(i(h),(t,r)=>(f(),y(M,{key:r,value:t},{default:l(()=>[n(q,null,{default:l(()=>[N(c(k(t)),1)]),_:2},1024)]),_:2},1032,["value"]))),128))]),_:1},8,["selected"])]),_:1}),K(' <VAutocomplete :items="items" item-title="name"></VAutocomplete> ')]),_:1})]),_:1}))}});typeof V=="function"&&V(g);const re=U(g,[["__file","/Users/santiago/webProjects/VueSienna/src/pages/playground/projects/autocomplete-custom-one/AutoCompleteCustomOne.vue"]]);export{re as default};
