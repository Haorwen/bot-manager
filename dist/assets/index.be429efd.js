import{_ as S,F as _,Q as T,aX as L,a as k,Y as l}from"./index.c19540a9.js";import{A as F,cc as w,j as f,u as o,a0 as n,B as s,D as B,w as y,a1 as m,ac as c,K as b,aa as v}from"./vendor.a45ea33e.js";import{c as x,u as C}from"./index.76f8779a.js";import D from"./SessionTimeoutLogin.bf633ee8.js";import"./index.809887c2.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css              *//* empty css              *//* empty css               *//* empty css               */import"./index.dfe67a3a.js";import"./useWindowSizeFn.48fcda03.js";import"./useContentViewHeight.4cbdde4a.js";/* empty css               */import"./useSortable.a6e1258f.js";import"./lock.0c0efc31.js";import"./Login.c4235e02.js";import"./LoginForm.d9832a79.js";import"./LoginFormTitle.e74ca14b.js";import"./ForgetPasswordForm.e2eb631c.js";import"./index.402cae56.js";import"./RegisterForm.cd19c0cd.js";import"./index.a241463b.js";import"./MobileForm.b08af510.js";import"./QrCodeForm.5343d43d.js";import"./download.29a0bc39.js";const P=F({name:"LayoutFeatures",components:{BackTop:w,LayoutLockPage:x(()=>_(()=>import("./index.742490d2.js"),["assets/index.742490d2.js","assets/vendor.a45ea33e.js","assets/vendor.d7f2c096.css","assets/LockPage.b2ea75f1.js","assets/LockPage.2bff9ea2.css","assets/index.c19540a9.js","assets/index.9a418476.css","assets/lock.0c0efc31.js","assets/header.d801b988.js"])),SettingDrawer:x(()=>_(()=>import("./index.ae92ac38.js").then(function(e){return e.i}),["assets/index.ae92ac38.js","assets/index.5c7227e9.css","assets/index.35b5cf30.css","assets/index.c19540a9.js","assets/index.9a418476.css","assets/vendor.a45ea33e.js","assets/vendor.d7f2c096.css","assets/index.76f8779a.js","assets/index.3445f5e4.css","assets/index.65674215.css","assets/index.809887c2.js","assets/index.05bbcef9.css","assets/index.43ba843e.css","assets/index.858d32f5.css","assets/index.ccc15a38.css","assets/index.676b77b5.css","assets/index.7959f7e6.css","assets/index.c4896195.css","assets/index.4eb149b8.css","assets/index.dfe67a3a.js","assets/index.0935299d.css","assets/useWindowSizeFn.48fcda03.js","assets/useContentViewHeight.4cbdde4a.js","assets/useSortable.a6e1258f.js","assets/lock.0c0efc31.js"])),SessionTimeoutLogin:D},setup(){const{getUseOpenBackTop:e,getShowSettingButton:p,getSettingButtonPosition:d,getFullContent:u}=T(),g=L(),{prefixCls:j}=k("setting-drawer-fearure"),{getShowHeader:i}=C(),r=f(()=>g.getSessionTimeout),a=f(()=>{if(!o(p))return!1;const t=o(d);return t===l.AUTO?!o(i)||o(u):t===l.FIXED});return{getTarget:()=>document.body,getUseOpenBackTop:e,getIsFixedSettingDrawer:a,prefixCls:j,getIsSessionTimeout:r}}});function E(e,p,d,u,g,j){const i=n("LayoutLockPage"),r=n("BackTop"),a=n("SettingDrawer"),t=n("SessionTimeoutLogin");return s(),B(v,null,[y(i),e.getUseOpenBackTop?(s(),m(r,{key:0,target:e.getTarget},null,8,["target"])):c("",!0),e.getIsFixedSettingDrawer?(s(),m(a,{key:1,class:b(e.prefixCls)},null,8,["class"])):c("",!0),e.getIsSessionTimeout?(s(),m(t,{key:2})):c("",!0)],64)}var me=S(P,[["render",E]]);export{me as default};
