import{l as a,c as y,U as k,V as L,W as s,m as o,_ as u,aa as d,u as l,O as m,q as b,n as W,$ as H,a9 as J,F as Q}from"./vue.ea012b77.js";import{b as j}from"./route-block.78efdbad.js";import{_ as X}from"./index.14c414b1.js";import{v as O,z as Y,t as Z,C as ee,E as le,s as te,D as ae,P as re,I as ue}from"./vuetify.603efe34.js";import"./firebase-app.89ad7201.js";import"./firebase-storage.f52a0a49.js";import"./firebase-functions.8ee4e55f.js";import"./firebase-firestore.b9d472db.js";import"./firebase-auth.2fc90a2c.js";function g(V){return V!==null&&typeof V=="object"&&!Array.isArray(V)}const se={class:"pa-4"},F={__name:"AutocompleteCustomTwo",setup(V){let x=a(null),I=a([{name:"Macbook",brand:"Apple",id:1},{name:"iPad",brand:"Apple",id:2,disable:!0},{name:"Galaxy 5",brand:"Samsung",id:3},{name:"Galaxy 1",brand:"Samsung",id:4},{name:"Galaxy 2",brand:"Samsung",id:5},{name:"every",brand:"every",id:6},1,2,3]),B=y(()=>c.value.length?_(c.value[0],$.value,"hasDefault"):"Seleccionar"),C=a(""),$=a(""),D=a(""),K=a(""),i=a(!1),p=a(!1),v=a(!0),M=a(!1),c=a([]),n=a(""),w=a([]),P=y(()=>!w.value.length),h=y(()=>!!v.value),T=y(()=>!!p.value);y(()=>!!M.value);let R=y(()=>I.value.filter(e=>{if(g(e)){let t=Object.values(e),f=[e].reduce((A,q)=>w.value.map(z=>q[z]),[]),S=P.value?t:f;return S?S.some(A=>A.toString().toLowerCase().includes(n.value.toLowerCase())):n.value?e==n.value:e}return e.toString().toLowerCase().includes(n.value.toLowerCase())}).slice(0,G.value));function _(r,e,t){if(g(r)){if(e)return Array.isArray(e)?e.map(f=>r[f]).join(" "):r[e];if(t)return Object.values(r)[0]}if(t)return r}function U(){let r=c.value[0];i.value&&(C.value=r),!i.value&&g(r)&&(C.value=Object.values(r)[0]),g(r)||(C.value=r)}let E=a(20);a(null);let G=a(E.value);function N(){h.value&&(n.value=""),T.value&&x.value.focus()}return(r,e)=>(k(),L(te,{class:"overflow-visible","min-height":"300",color:"#323a44"},{default:s(()=>[o(le,null,{default:s(()=>[u("span",se,[u("div",null,[u("code",null," searchable keys: "+d(l(w)),1)]),u("div",null,[u("code",null," Selected-item: "+d(l(c)),1)]),u("div",null,[u("code",null," v-model: "+d(l(C)),1)]),u("div",null,[u("code",null,[m(" return-object: "+d(l(i))+" ",1),o(O,{color:"success",onClick:e[0]||(e[0]=t=>b(i)?i.value=!l(i):i=!l(i)),density:"compact"},{default:s(()=>[m(" switch ")]),_:1})])]),u("div",null,[u("code",null,[m(" focus-on-select: "+d(l(T))+" ",1),o(O,{color:"success",onClick:e[1]||(e[1]=t=>b(p)?p.value=!l(p):p=!l(p)),density:"compact"},{default:s(()=>[m(" switch ")]),_:1})])]),u("div",null,[u("code",null,[m(" clear-search-on-select: "+d(l(h))+" ",1),o(O,{color:"success",onClick:e[2]||(e[2]=t=>b(v)?v.value=!l(v):v=!l(v)),density:"compact"},{default:s(()=>[m(" switch ")]),_:1})])])]),o(Y,null,{activator:s(({props:t,isActive:f})=>[o(Z,W({modelValue:l(n),"onUpdate:modelValue":e[3]||(e[3]=S=>b(n)?n.value=S:n=S),"color.trim":"primary"},t,{ref_key:"textFieldRef",ref:x,placeholder:l(B),"append-inner-icon":f?"$mdiMenuUpOutline":"$mdiMenuDownOutline"}),null,16,["modelValue","placeholder","append-inner-icon"])]),default:s(()=>[o(ee,{selected:l(c),"onUpdate:selected":[e[4]||(e[4]=t=>b(c)?c.value=t:c=t),e[5]||(e[5]=t=>U())],"onClick:select":N},{default:s(()=>[(k(!0),H(Q,null,J(l(R),(t,f)=>(k(),L(ae,{key:f,value:t},{default:s(()=>[o(re,null,{default:s(()=>[m(d(_(t,l(D),"hasDefault")),1)]),_:2},1024),o(ue,null,{default:s(()=>[m(d(_(t,l(K))),1)]),_:2},1024)]),_:2},1032,["value"]))),128))]),_:1},8,["selected"])]),_:1})]),_:1})]),_:1}))}};typeof j=="function"&&j(F);const Se=X(F,[["__file","C:/webProjects/v-test/src/pages/playground/projects/autocomplete-custom-two/AutocompleteCustomTwo.vue"]]);export{Se as default};
