import{h as L,l as c,r as I,P as l,Q as n,R as t,m as a,X as d,a6 as m,u as k,F as p,W as i,a7 as x,O as y}from"./vue.c5a49e63.js";import{b as _}from"./route-block.2f1a6263.js";import{_ as S}from"./index.aa3a3cfb.js";import{k as w,F as R,G as B,b as j,H as O,c as U,V as $,x as F,p as N,q as P,I as z,J as M,o as V}from"./vuetify.8179899a.js";import"./firebase-app.4dc8b612.js";import"./firebase-storage.eb3640cf.js";import"./firebase-functions.f542ccb7.js";import"./firebase-firestore.5d0d1530.js";import"./firebase-auth.9b217eac.js";const T={class:"mt-auto d-flex flex-column text-h4 text-capitalize"},X={class:"mt-auto px-3"},q={class:"mt-auto"},D={class:"d-flex justify-center align-center py-4"},E=L({name:"playgroundRatingSlides"}),h=Object.assign(E,{setup(G){let u=c(!0),o=c(0),v=c([{icon:"$mdiChevronLeft",action(){o.value=Math.max(o.value-1,0)}},{icon:"$mdiChevronRight",action(){o.value=Math.min(o.value+1,f.length-1)}}]),f=I([[{title:"tesla",text:"The biggest achievement",rating:5},{title:"twitter",text:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",rating:3},{title:"apple",text:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",rating:5}],[{title:"spotify",text:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",rating:1},{title:"spaceX",text:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",rating:4},{title:"nasa",text:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",rating:3}],[{title:"netflix",text:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",rating:4}]]);return(H,s)=>(l(),n(j,null,{default:t(()=>[a(B,{"max-width":"1100",class:"mx-auto bg-transparent"},{default:t(()=>[a(w,{modelValue:u.value,"onUpdate:modelValue":s[0]||(s[0]=e=>u.value=e),class:"ml-9 mb-n8",color:"#747bff",label:"Read-only ratings"},null,8,["modelValue"]),a(R,{modelValue:o.value,"onUpdate:modelValue":s[1]||(s[1]=e=>o.value=e),"hide-delimiters":"","show-arrows":!1},{default:t(()=>[(l(!0),d(p,null,m(k(f),(e,g)=>(l(),n(O,{key:e,value:g},{default:t(()=>[a(U,{class:"pa-8"},{default:t(()=>[(l(!0),d(p,null,m(e,(r,b)=>(l(),n($,{md:"4",cols:"12",key:b},{default:t(()=>[a(F,{elevation:"13",class:"d-flex justify-center align-center flex-column py-8 rounded-lg",height:"400",color:"rgba(50, 58, 68, 0.5)"},{default:t(()=>[i("div",T,x(r.title),1),i("div",X,[a(N,{lines:"two","bg-color":"transparent"},{default:t(()=>[a(P,null,{default:t(()=>[a(z,{class:"font-italic"},{default:t(()=>[y(' "'+x(r.text)+'" ',1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),i("div",null,[a(M,{color:"yellow-darken-3",modelValue:r.rating,"onUpdate:modelValue":C=>r.rating=C,readonly:u.value},null,8,["modelValue","onUpdate:modelValue","readonly"])]),i("div",q,[a(V,{class:"text-capitalize",variant:"text","prepend-icon":"$mdiBookOpenPageVariantOutline",color:"grey"},{default:t(()=>[y("See story")]),_:1})])]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),i("div",D,[(l(!0),d(p,null,m(v.value,e=>(l(),n(V,{rounded:0,key:e.icon,icon:e.icon,onClick:g=>e.action(),color:"rgba(	50, 58, 68, 0.5)"},null,8,["icon","onClick"]))),128))])]),_:1})]),_:1}))}});typeof _=="function"&&_(h);const at=S(h,[["__file","/Users/santiago/webProjects/VueSienna/src/pages/playground/projects/rating-slides/RatingSlides.vue"]]);export{at as default};