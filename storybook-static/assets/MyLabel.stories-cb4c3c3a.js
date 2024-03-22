import{j as q}from"./jsx-runtime-6eef64cc.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const t=({size:s="normal",color:k="text-primary",label:S,allCaps:_=!1,fontColor:h="",backgroundColor:z="transparent"})=>q.jsx("span",{className:`label ${k} ${s} ${_&&"uppercase"}`,style:{color:h,backgroundColor:z},children:S});try{t.displayName="MyLabel",t.__docgenInfo={description:`! Todas son opcionales

allCaps: boolean
color: "text-primary" | "text-secondary" | "text-tertiary"
fontColor: string, texto del span`,displayName:"MyLabel",props:{allCaps:{defaultValue:{value:"false"},description:"Text label Uppercase or Lowercase",name:"allCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"text-primary"},description:"Label color text",name:"color",required:!1,type:{name:"enum",value:[{value:'"text-primary"'},{value:'"text-secondary"'},{value:'"text-tertiary"'}]}},backgroundColor:{defaultValue:{value:"transparent"},description:"Label background color",name:"backgroundColor",required:!1,type:{name:"string"}},fontColor:{defaultValue:{value:""},description:"Label custom color text",name:"fontColor",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Text to display",name:"label",required:!0,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"Label Size",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}}}}}catch{}const A={title:"UI/labels/MyLabel",component:t,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{}},e={args:{label:"Hola gente",color:"text-tertiary",size:"normal"}},a={args:{label:"All Caps Label",size:"normal",allCaps:!0}},r={args:{label:"Secondary Label",color:"text-secondary"}},o={args:{label:"Custom Color Label",fontColor:"#5f1aa8"}},l={args:{label:"Custom Background Label",fontColor:"white",backgroundColor:"black"}};var n,c,u;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: "Hola gente",
    color: "text-tertiary",
    size: "normal"
  }
}`,...(u=(c=e.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var p,m,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: "All Caps Label",
    // color: "text-tertiary",
    size: "normal",
    allCaps: true
  }
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var i,b,y;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: "Secondary Label",
    color: "text-secondary"
  }
}`,...(y=(b=r.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var g,C,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: "Custom Color Label",
    fontColor: "#5f1aa8"
  }
}`,...(f=(C=o.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var x,L,v;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: "Custom Background Label",
    fontColor: "white",
    backgroundColor: "black"
  }
}`,...(v=(L=l.parameters)==null?void 0:L.docs)==null?void 0:v.source}}};const T=["Basic","AllCaps","Secondary","CustomColor","CustomBackground"];export{a as AllCaps,e as Basic,l as CustomBackground,o as CustomColor,r as Secondary,T as __namedExportsOrder,A as default};
