import{j as d}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-CDlOlYQx.js";import{c as de}from"./index-BAXNapqm.js";import{a as ue,c as me}from"./utils-DjqsqOe8.js";import{c as N}from"./createLucideIcon-BN166M7e.js";/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],ge=N("chevron-right",pe);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],ve=N("loader-circle",fe);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=[["path",{d:"M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z",key:"1jhwl8"}],["path",{d:"m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10",key:"1qfld7"}]],ye=N("mail-open",he);function Se(r){const n=be(r),e=i.forwardRef((t,a)=>{const{children:s,...l}=t,c=i.Children.toArray(s),g=c.find(Ce);if(g){const o=g.props.children,u=c.map(m=>m===g?i.Children.count(o)>1?i.Children.only(null):i.isValidElement(o)?o.props.children:null:m);return d.jsx(n,{...l,ref:a,children:i.isValidElement(o)?i.cloneElement(o,void 0,u):null})}return d.jsx(n,{...l,ref:a,children:s})});return e.displayName=`${r}.Slot`,e}var xe=Se("Slot");function be(r){const n=i.forwardRef((e,t)=>{const{children:a,...s}=e;if(i.isValidElement(a)){const l=je(a),c=Ve(s,a.props);return a.type!==i.Fragment&&(c.ref=t?de(t,l):l),i.cloneElement(a,c)}return i.Children.count(a)>1?i.Children.only(null):null});return n.displayName=`${r}.SlotClone`,n}var _e=Symbol("radix.slottable");function Ce(r){return i.isValidElement(r)&&typeof r.type=="function"&&"__radixId"in r.type&&r.type.__radixId===_e}function Ve(r,n){const e={...n};for(const t in n){const a=r[t],s=n[t];/^on[A-Z]/.test(t)?a&&s?e[t]=(...c)=>{s(...c),a(...c)}:a&&(e[t]=a):t==="style"?e[t]={...a,...s}:t==="className"&&(e[t]=[a,s].filter(Boolean).join(" "))}return{...r,...e}}function je(r){var t,a;let n=(t=Object.getOwnPropertyDescriptor(r.props,"ref"))==null?void 0:t.get,e=n&&"isReactWarning"in n&&n.isReactWarning;return e?r.ref:(n=(a=Object.getOwnPropertyDescriptor(r,"ref"))==null?void 0:a.get,e=n&&"isReactWarning"in n&&n.isReactWarning,e?r.props.ref:r.props.ref||r.ref)}const z=r=>typeof r=="boolean"?`${r}`:r===0?"0":r,O=ue,Ne=(r,n)=>e=>{var t;if((n==null?void 0:n.variants)==null)return O(r,e==null?void 0:e.class,e==null?void 0:e.className);const{variants:a,defaultVariants:s}=n,l=Object.keys(a).map(o=>{const u=e==null?void 0:e[o],m=s==null?void 0:s[o];if(u===null)return null;const p=z(u)||z(m);return a[o][p]}),c=e&&Object.entries(e).reduce((o,u)=>{let[m,p]=u;return p===void 0||(o[m]=p),o},{}),g=n==null||(t=n.compoundVariants)===null||t===void 0?void 0:t.reduce((o,u)=>{let{class:m,className:p,...ce}=u;return Object.entries(ce).every(le=>{let[E,j]=le;return Array.isArray(j)?j.includes({...s,...c}[E]):{...s,...c}[E]===j})?[...o,m,p]:o},[]);return O(r,l,g,e==null?void 0:e.class,e==null?void 0:e.className)},we=Ne("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),w=i.forwardRef(({className:r,variant:n,size:e,asChild:t=!1,...a},s)=>{const l=t?xe:"button";return d.jsx(l,{className:me(we({variant:n,size:e,className:r})),ref:s,...a})});w.displayName="Button";w.__docgenInfo={description:"",methods:[],displayName:"Button",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["VariantProps"]};function ie({children:r,loading:n,loadingText:e="Please wait",...t}){return d.jsxs(w,{...t,disabled:n||t.disabled,children:[n&&d.jsx(ve,{className:"animate-spin"}),n?e:r]})}ie.__docgenInfo={description:"",methods:[],displayName:"Button",props:{loading:{required:!1,tsType:{name:"boolean"},description:""},loadingText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Please wait'",computed:!1}}},composes:["ShadcnButtonProps"]};const Le={component:ie,title:"Elements/Button",tags:["autodocs"],excludeStories:/.*Data$/,args:{children:"Button"}},f={args:{variant:"default"}},v={args:{variant:"secondary"}},h={args:{variant:"destructive"}},y={args:{variant:"outline"}},S={args:{variant:"ghost"}},x={args:{variant:"outline",size:"icon",children:d.jsx(ge,{})}},b={args:{children:d.jsxs(d.Fragment,{children:[d.jsx(ye,{}),"Login with Email"]})}},_={args:{loading:!0,children:"Save"}},C={args:{size:"sm"}},V={args:{size:"lg"}};var I,R,L;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: 'default'
  }
}`,...(L=(R=f.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var P,k,B;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...(B=(k=v.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var D,T,W;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: 'destructive'
  }
}`,...(W=(T=h.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var $,A,q;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    variant: 'outline'
  }
}`,...(q=(A=y.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};var M,F,H;S.parameters={...S.parameters,docs:{...(M=S.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    variant: 'ghost'
  }
}`,...(H=(F=S.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var G,Z,K;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    size: 'icon',
    children: <ChevronRight />
  }
}`,...(K=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:K.source}}};var U,J,Q;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    children: <>
        <MailOpen />
        Login with Email
      </>
  }
}`,...(Q=(J=b.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Y,ee;_.parameters={..._.parameters,docs:{...(X=_.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    loading: true,
    children: 'Save'
  }
}`,...(ee=(Y=_.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var re,ne,te;C.parameters={...C.parameters,docs:{...(re=C.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(te=(ne=C.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var ae,se,oe;V.parameters={...V.parameters,docs:{...(ae=V.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...(oe=(se=V.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};const Pe=["Default","Secondary","Destructive","Outline","Ghost","Icon","WithIcon","Loading","SmallSize","LargeSize"];export{f as Default,h as Destructive,S as Ghost,x as Icon,V as LargeSize,_ as Loading,y as Outline,v as Secondary,C as SmallSize,b as WithIcon,Pe as __namedExportsOrder,Le as default};
