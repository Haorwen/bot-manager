import{A as l,a8 as m,b_ as d,a as _,j as f,a0 as e,B as g,a1 as E,a5 as s,w as c}from"./vendor.a45ea33e.js";/* empty css                */import{_ as C,I as L,aK as h,b as B,P as I}from"./index.aaa1a380.js";const T=l({name:"ErrorAction",components:{Icon:L,Tooltip:m,Badge:d},setup(){const{t:o}=B(),{push:n}=_(),t=h(),r=f(()=>t.getErrorLogListCount);function a(){n(I.ERROR_LOG_PAGE).then(()=>{t.setErrorLogListCount(0)})}return{t:o,getCount:r,handleToErrorList:a}}});function b(o,n,t,r,a,j){const i=e("Icon"),u=e("Badge"),p=e("Tooltip");return g(),E(p,{title:o.t("layout.header.tooltipErrorLog"),placement:"bottom",mouseEnterDelay:.5,onClick:o.handleToErrorList},{default:s(()=>[c(u,{count:o.getCount,offset:[0,10],overflowCount:99},{default:s(()=>[c(i,{icon:"ion:bug-outline"})]),_:1},8,["count"])]),_:1},8,["title","mouseEnterDelay","onClick"])}var R=C(T,[["render",b]]);export{R as default};