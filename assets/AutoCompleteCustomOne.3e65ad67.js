import{b}from"./route-block.2f1a6263.js";import{n as L,y as T,p as w,E as B,x as F,q as K,O as N}from"./vuetify.dec8593d.js";import{h as A,l as e,c as y,O as f,P as V,Q as l,m as o,V as s,a6 as c,u as d,n as E,q as g,W as G,a5 as P,F as q,N as M}from"./vue.bed1aeba.js";const R={class:"pa-4"},U=A({name:"playgroundCustomAutocomplete"}),D=Object.assign(U,{setup(Q){e({name:"nuevo producto"});let _=e([{name:"Macbook",brand:"Apple",id:1},{name:"iPad",brand:"Apple",id:2,disable:!0},{name:"Galaxy 5",brand:"Samsung",id:3},{name:"Galaxy 1",brand:"Samsung",id:4},{name:"Galaxy 2",brand:"Samsung",id:5},{name:"every",brand:"every",id:6}]);e();let v=e("");e("");let n=e([]),u=e(""),m=e(["id"]),x=y(()=>!m.value.length),S=e(!1),h=y(()=>_.value.filter(a=>{let t=Object.values(a),r=Object.entries(a).map(([p,I])=>{if(m.value.includes(p))return[I]});return(x.value?t:r).some(p=>p.toString().toLowerCase().includes(u.value.toLowerCase()))}).slice(0,j.value));function k(i){return v.value?i[v.value]:Object.values(i)[0]}function O(){return Object.values(n.value)}let C=e(20);e(null);let j=e(C.value);return(i,a)=>(f(),V(F,{class:"overflow-visible","min-height":"300",color:"#323a44"},{default:l(()=>[o(B,null,{default:l(()=>[s("span",R,[s("div",null,[s("code",null," searchable keys: "+c(d(m)),1)]),s("div",null,[s("code",null," return-object: "+c(d(S)),1)]),s("div",null,[s("code",null," Selected-item: "+c(O()),1)])]),o(L,{attach:"",class:"overflow-visible"},{activator:l(({props:t})=>[o(T,E({modelValue:d(u),"onUpdate:modelValue":a[0]||(a[0]=r=>g(u)?u.value=r:u=r),"color.trim":"primary"},t),null,16,["modelValue"])]),default:l(()=>[o(w,{selected:d(n),"onUpdate:selected":a[1]||(a[1]=t=>g(n)?n.value=t:n=t)},{default:l(()=>[(f(!0),G(q,null,P(d(h),(t,r)=>(f(),V(K,{key:r,value:t},{default:l(()=>[o(N,null,{default:l(()=>[M(c(k(t)),1)]),_:2},1024)]),_:2},1032,["value"]))),128))]),_:1},8,["selected"])]),_:1})]),_:1})]),_:1}))}});typeof b=="function"&&b(D);export{D as default};
