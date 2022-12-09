import{h as m,Q as d,Y as f,U as V,Z as h,u as i,P as v,t as L,m as t,S as a,N as p,X as r,q as $,a8 as _,F as b,a9 as S,R as x}from"./vue.4c54b776.js";import{u as T,W as w,X as F,n as P,j as C,w as g,v as I,D as j,E as M,O as N,Q as B,J as k,t as z,a as H}from"./vuetify.0ecd34a8.js";import{_ as R}from"./index.c1df4990.js";import"./firebase-app.89ad7201.js";import"./firebase-storage.f52a0a49.js";import"./firebase-functions.8ee4e55f.js";import"./firebase-firestore.a2c1f006.js";import"./firebase-auth.e24d5b9f.js";const A=m({name:"playgroundWrapper"}),D=Object.assign(A,{setup(n){const{mdAndUp:e}=T();return(s,l)=>(d(),f("div",{class:h([{"fill-height":i(e)},"d-flex flex-column"]),color:"transparent"},[V(s.$slots,"default")],2))}}),O=v("playground",{state:()=>({searchField:null,searchableFields:["title","subtitle"]}),actions:{routes(){return this.router.getRoutes()}},getters:{projects(){return this.routes().filter(n=>{var e;return((e=n.name)==null?void 0:e.includes("playground"))&&n.name!=="playground"}).flatMap(({path:n,meta:e})=>{let s=/(\w+)$/,l=n.match(s)[1];return[{icon:e.icon||"$mdiSpaceInvaders",to:`playground/${l.toLowerCase()}`,title:e.title||l,subtitle:e.description?`<span class="text-deep-purple-accent-1">Ali Connors</span> &mdash; ${e.description}`:"No description available"}]})},filteredProjects(n){return this.projects.filter(e=>n.searchableFields.map(s=>e[s]).some(s=>{var l,u;return s.toString().toLowerCase().includes((u=(l=n.searchField)==null?void 0:l.toLowerCase())!=null?u:"")})).sort(()=>-1)}}}),U={class:"pa-4"},W={class:"d-flex justify-end mr-5 pa-2"},E=["innerHTML"],Q=["innerHTML"],X=m({name:"playgroundList"}),q=Object.assign(X,{setup(n){let e=O();const{searchField:s,filteredProjects:l}=L(e);return(u,c)=>(d(),f("div",{class:h([{"fill-height":i(l).length},"d-flex flex-column mx-auto"])},[t(z,{class:"d-flex flex-column mx-auto rounded-lg my-10",width:"70vw",elevation:"14"},{default:a(()=>[t(w,{color:"transparent"},{default:a(()=>[t(F,{class:"text-grey"},{default:a(()=>[p(" Playground Projects ")]),_:1}),t(P),t(C,{size:"small",icon:""},{default:a(()=>[t(g,null,{default:a(()=>[p("$mdiFilterVariant")]),_:1})]),_:1})]),_:1}),r("div",U,[t(I,{"prepend-inner-icon":"$mdiMagnify",placeholder:"Search...",clearable:"",autofocus:"",modelValue:i(s),"onUpdate:modelValue":c[0]||(c[0]=o=>$(s)?s.value=o:null)},null,8,["modelValue"])]),r("div",W,[r("small",null,_(i(l).length)+" "+_("projects found."),1)]),t(j,{"bg-color":"transparent",lines:"two"},{default:a(()=>[(d(!0),f(b,null,S(i(l),o=>(d(),x(M,{to:o.to,key:o.title},{prepend:a(()=>[t(N,{start:""},{default:a(()=>[t(g,null,{default:a(()=>[p(_(o.icon),1)]),_:2},1024)]),_:2},1024)]),default:a(()=>[r("div",null,[t(B,null,{default:a(()=>[r("div",{class:"text-capitalize",innerHTML:o.title},null,8,E)]),_:2},1024),t(k,null,{default:a(()=>[r("div",{class:"text-capitalize",innerHTML:o.subtitle},null,8,Q)]),_:2},1024)])]),_:2},1032,["to"]))),128))]),_:1})]),_:1})],2))}}),J=m({name:"playground"});function Y(n,e,s,l,u,c){const o=q,y=D;return d(),x(y,null,{default:a(()=>[t(H,{src:"hero.svg",cover:""},{default:a(()=>[t(o)]),_:1})]),_:1})}const ne=R(J,[["render",Y]]);export{ne as default};
