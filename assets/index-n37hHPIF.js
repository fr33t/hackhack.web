import{d as y,u as z,r as s,o as A,c as N,a as t,w as u,b as o,e as S,f as c,g as T,t as U,h as Z}from"./index-CeV8IsiY.js";import{i as p,a as _}from"./nighttime-DdRxDGUb.js";const I=y({__name:"index",setup($){const f=z(),l=s(""),m=s(""),n=s(!1),r=s(""),i=s(!1),g=()=>{var d=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;d.test(l.value)?_.post("/auth/get_code",{email:l.value}).then(e=>{r.value=e.data.message,n.value=!0}):(r.value="Invalid email address!",n.value=!0)},k=()=>{console.log(m.value),i.value=!0,_.post("/auth/check_login",{email:l.value,code:m.value}).then(d=>{let e=d.data,v=e.token;r.value=e.message,n.value=!0,(e.status="200")&&localStorage.setItem("token",v),setTimeout(()=>{i.value=!1,Z.push("/panel")},2e3)})};return A(()=>{console.log(p()),p()&&(f.global.name.value="dark")}),(d,e)=>{const v=o("v-btn"),x=o("center"),V=o("v-text-field"),h=o("v-otp-input"),b=o("v-form"),w=o("v-card"),C=o("v-snackbar");return S(),N("div",null,[t(w,{class:"mx-auto my-10",hover:"","max-width":" 344"},{default:u(()=>[t(x,{class:"mt-4"},{default:u(()=>[t(v,{onClick:e[0]||(e[0]=a=>g()),variant:"plain"},{default:u(()=>[c(" hackhack ")]),_:1})]),_:1}),t(b,{"fast-fail":"",onSubmit:e[4]||(e[4]=T(()=>{},["prevent"])),class:"m-4"},{default:u(()=>[t(V,{modelValue:l.value,"onUpdate:modelValue":e[1]||(e[1]=a=>l.value=a),type:"email",placeholder:"user@example.com",label:"Email",class:"mt-2",variant:"outlined"},null,8,["modelValue"]),t(h,{modelValue:m.value,"onUpdate:modelValue":e[2]||(e[2]=a=>m.value=a),length:"5",onFinish:e[3]||(e[3]=a=>k()),loading:i.value,variant:"underlined"},null,8,["modelValue","loading"])]),_:1})]),_:1}),t(C,{modelValue:n.value,"onUpdate:modelValue":e[5]||(e[5]=a=>n.value=a),timeout:2e3},{default:u(()=>[c(U(r.value),1)]),_:1},8,["modelValue"])])}}});export{I as default};