import{j as h}from"./jsx-runtime-D_zvdyIk.js";function y(r){var a,t,e="";if(typeof r=="string"||typeof r=="number")e+=r;else if(typeof r=="object")if(Array.isArray(r)){var o=r.length;for(a=0;a<o;a++)r[a]&&(t=y(r[a]))&&(e&&(e+=" "),e+=t)}else for(t in r)r[t]&&(e&&(e+=" "),e+=t);return e}function B(){for(var r,a,t=0,e="",o=arguments.length;t<o;t++)(r=arguments[t])&&(a=y(r))&&(e&&(e+=" "),e+=a);return e}function v({variant:r="primary",pill:a,outline:t,className:e,children:o,...x}){return h.jsx("button",{className:B("bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",a&&"rounded-full",t&&"bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded",e),...x,children:o})}v.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"literal",value:"'primary'"},description:"",defaultValue:{value:"'primary'",computed:!1}},pill:{required:!1,tsType:{name:"boolean"},description:""},outline:{required:!1,tsType:{name:"boolean"},description:""}},composes:["ButtonHTMLAttributes"]};const S={component:v,title:"Element/Button",tags:["autodocs"],excludeStories:/.*Data$/,args:{children:"Button"}},s={args:{variant:"primary"}},n={args:{pill:!0}},u={args:{outline:!0}};var i,l,p;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  }
}`,...(p=(l=s.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,d,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    pill: true
  }
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var f,g,b;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    outline: true
  }
}`,...(b=(g=u.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const T=["Default","Pill","Outline"];export{s as Default,u as Outline,n as Pill,T as __namedExportsOrder,S as default};
