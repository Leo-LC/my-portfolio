import{j as e}from"./jsx-runtime.391947bd.js";import{s,a as l}from"./index.222a3623.02902a13.js";import"./index.ed373d49.js";const r=({id:t,label:n,type:a})=>e.jsxs("div",{className:s.inputWrapper,children:[a==="text"||a==="email"?e.jsx("input",{type:a,id:t,className:s.input,placeholder:" ",required:!0}):a==="textarea"?e.jsx("textarea",{name:"Message",id:t,rows:5,className:s.textarea,placeholder:" ",required:!0}):null,e.jsx("label",{htmlFor:t,className:s.label,children:n})]}),x=()=>{const t="https://public.herotofu.com/v1/84da5320-74b4-11ee-80c8-136eb968d513";return e.jsxs("form",{className:" text-base text-center md:text-left flex flex-col w-[70%] gap-[4rem] ",id:"contact-form",action:t,method:"post",acceptCharset:"UTF-8",children:[e.jsx(r,{type:"text",id:"name",label:"Your Name*"}),e.jsx(r,{type:"email",id:"email",label:"Your Email*"}),e.jsx(r,{type:"textarea",id:"message",label:"Your Message*"}),e.jsxs("div",{className:l.btn,children:[e.jsx("input",{type:"submit",value:"Send it !"}),e.jsx("span",{"aria-hidden":"true",className:l.scroll,children:"Send it !"}),e.jsx("div",{style:{textIndent:"-99999px",whiteSpace:"nowrap",overflow:"hidden",position:"absolute"},"aria-hidden":"true",children:e.jsx("input",{type:"text",name:"_gotcha",tabIndex:-1,autoComplete:"off"})})]})]})};export{x as default};
