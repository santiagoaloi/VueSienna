import{_ as c}from"./BaseBtn.5df191e0.js";import{h as V,r as g,l as h,R as k,S as v,U as a,m as e,Y as r,a9 as w,u as l,O as b,ae as x,_ as C}from"./vue.d9b8162b.js";import{b as u}from"./route-block.2f1a6263.js";import{_ as S}from"./index.fb021691.js";import{q as y,F as B,c as T,V as i,v as m,B as U,n as j,t as E,b as F}from"./vuetify.f74e1cdb.js";import"./firebase-app.89ad7201.js";import"./firebase-storage.f52a0a49.js";import"./firebase-functions.8ee4e55f.js";import"./firebase-firestore.a2c1f006.js";import"./firebase-auth.e24d5b9f.js";const N={class:"mb-5"},A=V({name:"playgroundShakeLogin"}),d=Object.assign(A,{setup(L){let s=g({username:"",password:""}),n=h(!1);function p(){n.value=!0,setTimeout(()=>{n.value=!1},500)}return(f,t)=>{const _=c;return k(),v(F,{fluid:"",class:"fill-height d-flex align-center"},{default:a(()=>[e(E,{class:C(["mx-auto pa-3",{shake:n.value}]),width:"500","min-height":"200"},{default:a(()=>[e(y,{textContent:"Shake on wrong credentials"}),e(B,null,{default:a(()=>[r("div",N,[r("code",null,w(f.loginForm),1)]),r("form",{onSubmit:t[2]||(t[2]=x(o=>p(),["prevent"]))},[e(T,null,{default:a(()=>[e(i,{cols:"12"},{default:a(()=>[e(m,{modelValue:l(s).username,"onUpdate:modelValue":t[0]||(t[0]=o=>l(s).username=o),label:"Account"},null,8,["modelValue"])]),_:1}),e(i,null,{default:a(()=>[e(m,{label:"Password",type:"password",modelValue:l(s).password,"onUpdate:modelValue":t[1]||(t[1]=o=>l(s).password=o)},null,8,["modelValue"])]),_:1})]),_:1}),e(U,null,{default:a(()=>[e(j),e(_,{type:"submit"},{default:a(()=>[b("Login")]),_:1})]),_:1})],32)]),_:1})]),_:1},8,["class"])]),_:1})}}});typeof u=="function"&&u(d);const H=S(d,[["__file","/Users/santiago/webProjects/VueSienna/src/pages/playground/projects/shake-element/ShakeElement.vue"]]);export{H as default};