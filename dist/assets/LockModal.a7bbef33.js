var f=(e,c,o)=>new Promise((m,r)=>{var p=s=>{try{a(o.next(s))}catch(n){r(n)}},t=s=>{try{a(o.throw(s))}catch(n){r(n)}},a=s=>s.done?m(s.value):Promise.resolve(s.value).then(p,t);a((o=o.apply(e,c)).next())});import{_ as w,a as C,f as x,b as y}from"./index.aaa1a380.js";import{B as F,b as $}from"./index.2463c5ca.js";import{B as b,h as S}from"./useForm.ba5979a5.js";import{u as L}from"./lock.5d6e984a.js";import{h as M}from"./header.d801b988.js";import{A as I,j as _,a0 as u,B as N,a1 as R,a5 as j,H as d,K as l,J as g,w as k,ad as P,a4 as U}from"./vendor.a45ea33e.js";import"./useWindowSizeFn.48fcda03.js";/* empty css               *//* empty css               *//* empty css               *//* empty css              *//* empty css              *//* empty css               *//* empty css                *//* empty css                */import"./index.fdffad30.js";/* empty css               */import"./download.0861eb88.js";import"./index.9f0e8c3a.js";const V=I({name:"LockModal",components:{BasicModal:F,BasicForm:b},setup(){const{t:e}=y(),{prefixCls:c}=C("header-lock-modal"),o=x(),m=L(),r=_(()=>{var i;return(i=o.getUserInfo)==null?void 0:i.realName}),[p,{closeModal:t}]=$(),[a,{validateFields:s,resetFields:n}]=S({showActionButtonGroup:!1,schemas:[{field:"password",label:e("layout.header.lockScreenPassword"),component:"InputPassword",required:!0}]});function h(){return f(this,null,function*(){const B=(yield s()).password;t(),m.setLockInfo({isLock:!0,pwd:B}),yield n()})}const v=_(()=>{const{avatar:i}=o.getUserInfo;return i||M});return{t:e,prefixCls:c,getRealName:r,register:p,registerForm:a,handleLock:h,avatar:v}}}),z=["src"];function A(e,c,o,m,r,p){const t=u("BasicForm"),a=u("a-button"),s=u("BasicModal");return N(),R(s,U({footer:null,title:e.t("layout.header.lockScreen")},e.$attrs,{class:e.prefixCls,onRegister:e.register}),{default:j(()=>[d("div",{class:l(`${e.prefixCls}__entry`)},[d("div",{class:l(`${e.prefixCls}__header`)},[d("img",{src:e.avatar,class:l(`${e.prefixCls}__header-img`)},null,10,z),d("p",{class:l(`${e.prefixCls}__header-name`)},g(e.getRealName),3)],2),k(t,{onRegister:e.registerForm},null,8,["onRegister"]),d("div",{class:l(`${e.prefixCls}__footer`)},[k(a,{type:"primary",block:"",class:"mt-2",onClick:e.handleLock},{default:j(()=>[P(g(e.t("layout.header.lockScreenBtn")),1)]),_:1},8,["onClick"])],2)],2)]),_:1},16,["title","class","onRegister"])}var ne=w(V,[["render",A]]);export{ne as default};