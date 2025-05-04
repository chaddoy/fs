import{j as q}from"./jsx-runtime-D_zvdyIk.js";function B(r){var a,t,e="";if(typeof r=="string"||typeof r=="number")e+=r;else if(typeof r=="object")if(Array.isArray(r)){var o=r.length;for(a=0;a<o;a++)r[a]&&(t=B(r[a]))&&(e&&(e+=" "),e+=t)}else for(t in r)r[t]&&(e&&(e+=" "),e+=t);return e}function _(){for(var r,a,t=0,e="",o=arguments.length;t<o;t++)(r=arguments[t])&&(a=B(r))&&(e&&(e+=" "),e+=a);return e}function S({variant:r="primary",pill:a,outline:t,bordered:e,className:o,children:T,...j}){return q.jsx("button",{className:_("bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded",a&&"rounded-full",t&&r==="primary"?"text-blue-700 hover:text-white":"text-white",t&&"bg-transparent hover:bg-blue-500 font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded",!t&&e&&"border border-blue-700",o),...j,children:T})}S.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"literal",value:"'primary'"},description:"",defaultValue:{value:"'primary'",computed:!1}},pill:{required:!1,tsType:{name:"boolean"},description:""},outline:{required:!1,tsType:{name:"boolean"},description:""},bordered:{required:!1,tsType:{name:"boolean"},description:""}},composes:["ButtonHTMLAttributes"]};const D={component:S,title:"Element/Button",tags:["autodocs"],excludeStories:/.*Data$/,args:{children:"Button"}},s={args:{variant:"primary"}},n={args:{pill:!0}},u={args:{outline:!0}},i={args:{bordered:!0}};var d,l,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  }
}`,...(p=(l=s.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,m,b;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    pill: true
  }
}`,...(b=(m=n.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var f,g,y;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    outline: true
  }
}`,...(y=(g=u.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var v,x,h;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    bordered: true
  }
}`,...(h=(x=i.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const E=["Default","Pill","Outline","Bordered"];export{i as Bordered,s as Default,u as Outline,n as Pill,E as __namedExportsOrder,D as default};
