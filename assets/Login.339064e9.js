import{_ as m,u as B,a as v,b}from"./index.28eaf023.js";import{_ as h}from"./BaseBtn.48f3adac.js";import{O as s,P as r,Q as i,N as p,l as w,W as G,a5 as S,a6 as V,F as y,h as C,m as o,V as $,ac as g}from"./vue.bed1aeba.js";import{D as L}from"./vuetify.dec8593d.js";import"./firebase-app.4dc8b612.js";import"./firebase-storage.eb3640cf.js";import"./firebase-functions.f542ccb7.js";import"./firebase-firestore.5d0d1530.js";import"./firebase-auth.9b217eac.js";const A={};function D(a,e){const t=h;return s(),r(t,{disabled:"",class:"mt-2",block:""},{default:i(()=>[p(" Continue with email ")]),_:1})}const N=m(A,[["render",D]]),P={};function O(a,e){return s(),r(L,{class:"grey darken-3"})}const T=m(P,[["render",O]]);class f{constructor({name:e="changeMe",icon:t="$mdiLink",loading:_=!1,disabled:l=!1,action:c}){Object.assign(this,{name:e,icon:t,loading:_,disabled:l,action:c})}}const W={__name:"AuthProviders",setup(a){let e=B(),t=w([new f({name:"Google",icon:"$mdiGoogle",action(){return e.authenticateWithGoogle(this)}}),new f({name:"GitHub",icon:"$mdiGithub",disabled:!0,action(){return e.authenticateWithGithub(this)}})]);return(_,l)=>{const c=h;return s(!0),G(y,null,S(t.value,n=>(s(),r(c,{block:"",key:n.name,class:"my-3",disabled:n.disabled,loading:n.loading,prependIcon:n.icon,onClick:d=>n.action(n)},{default:i(()=>[p(" Signup with "+V(n.name),1)]),_:2},1032,["disabled","loading","prependIcon","onClick"]))),128)}}},E=C({name:"Login"}),F={class:"d-flex align-center my-4"},I=$("small",null," OR",-1);function j(a,e,t,_,l,c){const n=v,d=W,u=T,k=N,x=b;return s(),r(x,{col:"4",src:"x1.svg"},{default:i(()=>[e[0]||(g(-1),e[0]=o(n,{class:"mb-8",small:""},{text:i(()=>[p(" Secure login to ")]),_:1}),g(1),e[0]),o(d),$("div",F,[o(u,{class:"mr-1"}),I,o(u,{class:"ml-1"})]),o(k)]),_:1})}const X=m(E,[["render",j]]);export{X as default};