import{_ as S,F as _,Q as T,aX as L,a as k,Y as f}from"./index.aaa1a380.js";import{A as F,cc as w,j as l,u as o,a0 as n,B as s,D as B,w as y,a1 as m,ac as d,K as v,aa as C}from"./vendor.a45ea33e.js";import{c as x,u as D}from"./index.568d2644.js";import P from"./SessionTimeoutLogin.f58d0d30.js";import"./index.a15f8a8f.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css              *//* empty css              *//* empty css               *//* empty css               */import"./index.06254a78.js";import"./useWindowSizeFn.48fcda03.js";import"./useContentViewHeight.ac28b703.js";/* empty css               */import"./useSortable.5cfd8c8f.js";import"./lock.5d6e984a.js";import"./Login.cf3dd8c7.js";import"./LoginForm.888175d4.js";import"./LoginFormTitle.20a95248.js";import"./ForgetPasswordForm.86838361.js";import"./index.fdffad30.js";import"./RegisterForm.a7374787.js";import"./index.9f0e8c3a.js";import"./MobileForm.44ea4855.js";import"./QrCodeForm.6b6d7ad8.js";import"./download.0861eb88.js";const E=F({name:"LayoutFeatures",components:{BackTop:w,LayoutLockPage:x(()=>_(()=>import("./index.f5635559.js"),["assets/index.f5635559.js","assets/vendor.a45ea33e.js","assets/vendor.d7f2c096.css","assets/LockPage.aab4e09c.js","assets/LockPage.2bff9ea2.css","assets/index.aaa1a380.js","assets/index.9a418476.css","assets/lock.5d6e984a.js","assets/header.d801b988.js"])),SettingDrawer:x(()=>_(()=>import("./index.0e8d0ece.js").then(function(e){return e.i}),["assets/index.0e8d0ece.js","assets/index.5c7227e9.css","assets/index.35b5cf30.css","assets/index.aaa1a380.js","assets/index.9a418476.css","assets/vendor.a45ea33e.js","assets/vendor.d7f2c096.css","assets/index.568d2644.js","assets/index.3445f5e4.css","assets/index.65674215.css","assets/index.a15f8a8f.js","assets/index.05bbcef9.css","assets/index.43ba843e.css","assets/index.858d32f5.css","assets/index.ccc15a38.css","assets/index.676b77b5.css","assets/index.7959f7e6.css","assets/index.c4896195.css","assets/index.4eb149b8.css","assets/index.06254a78.js","assets/index.0935299d.css","assets/useWindowSizeFn.48fcda03.js","assets/useContentViewHeight.ac28b703.js","assets/useSortable.5cfd8c8f.js","assets/lock.5d6e984a.js"])),SessionTimeoutLogin:P},setup(){const{getUseOpenBackTop:e,getShowSettingButton:p,getSettingButtonPosition:c,getFullContent:u}=T(),g=L(),{prefixCls:j}=k("setting-drawer-fearure"),{getShowHeader:i}=D(),r=l(()=>g.getSessionTimeout),a=l(()=>{if(!o(p))return!1;const t=o(c);return t===f.AUTO?!o(i)||o(u):t===f.FIXED});return{getTarget:()=>document.body,getUseOpenBackTop:e,getIsFixedSettingDrawer:a,prefixCls:j,getIsSessionTimeout:r}}});function I(e,p,c,u,g,j){const i=n("LayoutLockPage"),r=n("BackTop"),a=n("SettingDrawer"),t=n("SessionTimeoutLogin");return s(),B(C,null,[y(i),e.getUseOpenBackTop?(s(),m(r,{key:0,target:e.getTarget},null,8,["target"])):d("",!0),e.getIsFixedSettingDrawer?(s(),m(a,{key:1,class:v(e.prefixCls)},null,8,["class"])):d("",!0),e.getIsSessionTimeout?(s(),m(t,{key:2})):d("",!0)],64)}var me=S(E,[["render",I]]);export{me as default};