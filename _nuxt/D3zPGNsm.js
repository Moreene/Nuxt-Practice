import{y as r,c as l,a,t as o,n as p,o as i}from"./Baip-8pS.js";const f={__name:"index",async setup(u){let t,n;const s=([t,n]=r(()=>$fetch("/api/fetch")),t=await t,n(),t);return(c,e)=>(i(),l("div",null,[e[0]||(e[0]=a("h2",null,"取得 server api 中的資料",-1)),e[1]||(e[1]=a("p",null,"方法：fetch",-1)),a("p",null,"回傳："+o(p(s)),1)]))}};export{f as default};