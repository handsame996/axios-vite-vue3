import{r as f,o as i,c as d,a as s,t as p,F as _,p as m,b as g,d as l,e as h,f as v,g as y,h as b}from"./vendor.7ec55db8.js";const k=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}};k();var V="/assets/logo.03d6d6da.png";var x=(t,o)=>{const a=t.__vccOpts||t;for(const[n,e]of o)a[n]=e;return a};const u=t=>(m("data-v-3d3c9e2e"),t=t(),g(),t),S=u(()=>s("p",null,[l(" Recommended IDE setup: "),s("a",{href:"https://code.visualstudio.com/",target:"_blank"},"VSCode"),l(" + "),s("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank"},"Volar")],-1)),I=u(()=>s("p",null,[s("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank"}," Vite Documentation "),l(" | "),s("a",{href:"https://v3.vuejs.org/",target:"_blank"},"Vue 3 Documentation")],-1)),L=u(()=>s("p",null,[l(" Edit "),s("code",null,"components/HelloWorld.vue"),l(" to test hot module replacement. ")],-1)),N={props:{msg:String},setup(t){const o=f(0);return(a,n)=>(i(),d(_,null,[s("h1",null,p(t.msg),1),S,I,s("button",{type:"button",onClick:n[0]||(n[0]=e=>o.value++)},"count is: "+p(o.value),1),L],64))}};var O=x(N,[["__scopeId","data-v-3d3c9e2e"]]);const j=()=>h.create({baseURL:"/api",timeout:5e3})({method:"post",url:"/day",params:{date:"2021-1-1",key:"904e3e2a3b43eecc86370ff6f0d7f6a9"}});const D=s("img",{alt:"Vue logo",src:V},null,-1),E={setup(t){return v(()=>{j().then(o=>{console.log(o)})}),(o,a)=>(i(),d(_,null,[D,y(O,{msg:"Hello Vue 3 + Vite"})],64))}};b(E).mount("#app");
