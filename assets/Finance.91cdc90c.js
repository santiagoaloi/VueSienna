import{h as l,r as o,c as u,P as h,Q as p,R as f,m as _,u as g}from"./vue.c5a49e63.js";import{b as c}from"./route-block.2f1a6263.js";import{_ as b}from"./index.aa3a3cfb.js";import{P as y,b as k}from"./vuetify.8179899a.js";import"./firebase-app.4dc8b612.js";import"./firebase-storage.eb3640cf.js";import"./firebase-functions.f542ccb7.js";import"./firebase-firestore.5d0d1530.js";import"./firebase-auth.9b217eac.js";const P=l({name:"playground"}),n=Object.assign(P,{setup(M){let r=o([{uid:1,method:"cash"},{uid:2,method:"credit-card"},{uid:3,method:"checking-account"}]),s=o({uid:1,firstName:"Santi",lastName:"Aloi",finance:{get allowedPaymentMethods(){return m(this)},checkingAccount:{accountId:25,creditLimit:5e3,balance:5e3,get limitReached(){return this.creditLimit===this.balance}}}});function m(t){let{limitReached:a}=t.checkingAccount,i=r.flatMap(e=>e.method);return a?i.filter(e=>e!=="checking-account"):[...i]}let d=u(()=>s.finance.allowedPaymentMethods);return(t,a)=>(h(),p(k,{class:"ma-15"},{default:f(()=>[_(y,{"item-title":"method","iten-value":"id",items:g(d),attach:""},null,8,["items"])]),_:1}))}});typeof c=="function"&&c(n);const B=b(n,[["__file","/Users/santiago/webProjects/VueSienna/src/pages/playground/projects/finance/Finance.vue"]]);export{B as default};