import{b as a}from"./route-block.2f1a6263.js";import{V as d}from"./VAutocomplete.fe077ca0.js";import{a2 as l}from"./index.4d4089e3.js";import{j as p,a as m,h as u,l as h,p as f,q as _,L as g,x as k}from"./vue.05eca872.js";import"./VTextField.d2e961b4.js";import"./vuetify.963a462a.js";import"./VList.0044357c.js";import"./VDivider.bdf6782d.js";import"./VMenu.dcd9778a.js";import"./VCheckboxBtn.de55fccf.js";import"./firebase-app.4dc8b612.js";import"./firebase-storage.eb3640cf.js";import"./firebase-functions.f542ccb7.js";import"./firebase-firestore.805c72ca.js";import"./firebase-auth.9b217eac.js";import"./pinia.0dc6b6a5.js";import"./vue-chemistry.c335f58a.js";import"./vue-router.cd3f2694.js";import"./gh-pages.f50f052d.js";import"./pinia-plugin-persistedstate.fa7085e9.js";const y=p({name:"playground"}),b=Object.assign(y,{setup(M){let r=m([{uid:1,method:"cash"},{uid:2,method:"credit-card"},{uid:3,method:"checking-account"}]),c=m({uid:1,firstName:"Santi",lastName:"Aloi",finance:{get allowedPaymentMethods(){return n(this)},checkingAccount:{accountId:25,creditLimit:5e3,balance:5e3,get limitReached(){return this.creditLimit===this.balance}}}});function n(e){let{limitReached:i}=e.checkingAccount,o=r.flatMap(t=>t.method);return i?o.filter(t=>t!=="checking-account"):[...o]}let s=u(()=>c.finance.allowedPaymentMethods);return(e,i)=>(h(),f(l,{class:"ma-15"},{default:_(()=>[g(d,{"item-title":"method","iten-value":"id",items:k(s),attach:""},null,8,["items"])]),_:1}))}});typeof a=="function"&&a(b);export{b as default};
