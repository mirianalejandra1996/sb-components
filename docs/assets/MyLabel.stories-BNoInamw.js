import{j as S}from"./jsx-runtime-BnIj46N_.js";import"./index-CsdIBAqE.js";const x=({size:f="normal",color:g="text-primary",label:C,allCaps:L=!1,fontColor:v=""})=>S.jsx("span",{className:`label ${g} ${f} ${L&&"uppercase"}`,style:{color:v},children:C});x.__docgenInfo={description:`! Todas son opcionales

allCaps: boolean
color: "text-primary" | "text-secondary" | "text-tertiary"
fontColor: string, texto del span`,methods:[],displayName:"MyLabel",props:{allCaps:{required:!1,tsType:{name:"boolean"},description:"Text label Uppercase or Lowercase",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:'"text-primary" | "text-secondary" | "text-tertiary"',elements:[{name:"literal",value:'"text-primary"'},{name:"literal",value:'"text-secondary"'},{name:"literal",value:'"text-tertiary"'}]},description:"Label color text",defaultValue:{value:'"text-primary"',computed:!1}},fontColor:{required:!1,tsType:{name:"string"},description:"Label custom color text",defaultValue:{value:"''",computed:!1}},label:{required:!0,tsType:{name:"string"},description:"Text to display"},size:{required:!1,tsType:{name:"union",raw:'"normal" | "h1" | "h2" | "h3"',elements:[{name:"literal",value:'"normal"'},{name:"literal",value:'"h1"'},{name:"literal",value:'"h2"'},{name:"literal",value:'"h3"'}]},description:"Label Size",defaultValue:{value:'"normal"',computed:!1}}}};const z={title:"UI/labels/MyLabel",component:x,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{}},e={args:{label:"Hola gente",color:"text-tertiary",size:"normal"}},a={args:{label:"All Caps Label",size:"normal",allCaps:!0}},r={args:{label:"Secondary Label",color:"text-secondary"}},l={args:{label:"Custom Color Label",fontColor:"#5f1aa8"}};var t,o,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    label: "Hola gente",
    color: "text-tertiary",
    size: "normal"
  }
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var n,c,i;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: "All Caps Label",
    // color: "text-tertiary",
    size: "normal",
    allCaps: true
  }
}`,...(i=(c=a.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var m,p,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: "Secondary Label",
    color: "text-secondary"
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,y,b;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: "Custom Color Label",
    fontColor: "#5f1aa8"
  }
}`,...(b=(y=l.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const q=["Basic","AllCaps","Secondary","CustomColor"];export{a as AllCaps,e as Basic,l as CustomColor,r as Secondary,q as __namedExportsOrder,z as default};
