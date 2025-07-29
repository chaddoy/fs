import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{B as t}from"./Button-WKiRdgXN.js";import{R as l}from"./rabbit-f4EDR7bc.js";import{c as O}from"./createLucideIcon-BN166M7e.js";import{C as d,a as u}from"./scroll-area-Dp_V6FlM.js";import"./card-OJBl37EF.js";import"./index-CDlOlYQx.js";import"./utils-gPd2mQ4j.js";import"./clsx-B-dksMZM.js";import"./separator-C2uBqrMb.js";import"./index-BGZCjPBa.js";import"./index-CA2ozmjx.js";import"./table-kcheUeZg.js";import"./tslib.es6-pJfR_DrR.js";/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=[["path",{d:"M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z",key:"1jhwl8"}],["path",{d:"m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10",key:"1qfld7"}]],i=O("mail-open",L);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],v=O("x",M),Z={component:t,title:"Elements/Button",tags:["autodocs"],parameters:{layout:"centered"},excludeStories:/.*Data$/,args:{children:"Button"}},e={args:{variant:"default"}},r={render:a=>n.jsxs("div",{className:"flex flex-col items-center gap-4",children:[n.jsxs("div",{className:"flex gap-4",children:[n.jsx(t,{...a,variant:"default",children:"Default"}),n.jsx(t,{...a,variant:"secondary",children:"Secondary"}),n.jsx(t,{...a,variant:"outline",children:"Outline"}),n.jsx(t,{...a,variant:"ghost",children:"Ghost"}),n.jsx(t,{...a,variant:"link",children:"Link"})]}),n.jsxs("div",{className:"flex gap-4",children:[n.jsx(t,{...a,variant:"danger",children:"Danger"}),n.jsx(t,{...a,variant:"warning",children:"Warning"}),n.jsx(t,{...a,variant:"discovery",children:"Discovery"}),n.jsx(t,{...a,variant:"information",children:"Information"}),n.jsx(t,{...a,variant:"success",children:"Success"})]}),n.jsxs("div",{className:"flex gap-4",children:[n.jsx(t,{...a,variant:"icon",children:n.jsx(l,{})}),n.jsx(t,{...a,variant:"icon-secondary",children:n.jsx(i,{})}),n.jsx(t,{...a,variant:"icon-outline",children:n.jsx(d,{})}),n.jsx(t,{...a,variant:"icon-ghost",children:n.jsx(v,{})}),n.jsx(t,{...a,variant:"icon-link",children:n.jsx(u,{})})]}),n.jsxs("div",{className:"flex gap-4",children:[n.jsx(t,{...a,variant:"icon-danger",children:n.jsx(l,{})}),n.jsx(t,{...a,variant:"icon-warning",children:n.jsx(i,{})}),n.jsx(t,{...a,variant:"icon-discovery",children:n.jsx(d,{})}),n.jsx(t,{...a,variant:"icon-information",children:n.jsx(v,{})}),n.jsx(t,{...a,variant:"icon-success",children:n.jsx(u,{})})]})]})},s={args:{children:n.jsxs(n.Fragment,{children:[n.jsx(i,{}),"Login with Email"]})}},o={args:{loading:!0,children:"Save"}},c={render:a=>n.jsxs("div",{className:"flex flex-col items-center gap-4",children:[n.jsxs("div",{className:"flex gap-4",children:[n.jsx(t,{...a,variant:"danger",size:"sm",children:"Small"}),n.jsxs(t,{...a,variant:"warning",size:"sm",children:[n.jsx(i,{}),"Small with icon"]}),n.jsx(t,{...a,variant:"icon-discovery",size:"sm",children:n.jsx(i,{})})]}),n.jsxs("div",{className:"flex gap-4",children:[n.jsx(t,{...a,variant:"danger",size:"default",children:"Default"}),n.jsxs(t,{...a,variant:"warning",size:"default",children:[n.jsx(i,{}),"Default with icon"]}),n.jsx(t,{...a,variant:"icon-discovery",size:"default",children:n.jsx(i,{})})]}),n.jsxs("div",{className:"flex gap-4",children:[n.jsx(t,{...a,variant:"danger",size:"lg",children:"Large"}),n.jsxs(t,{...a,variant:"warning",size:"lg",children:[n.jsx(i,{}),"Large with icon"]}),n.jsx(t,{...a,variant:"icon-discovery",size:"lg",children:n.jsx(i,{})})]})]})};var m,x,g;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'default'
  }
}`,...(g=(x=e.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var h,p,B;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col items-center gap-4">
      <div className="flex gap-4">
        <Button {...args} variant="default">
          Default
        </Button>
        <Button {...args} variant="secondary">
          Secondary
        </Button>
        <Button {...args} variant="outline">
          Outline
        </Button>
        <Button {...args} variant="ghost">
          Ghost
        </Button>
        <Button {...args} variant="link">
          Link
        </Button>
      </div>
      <div className="flex gap-4">
        <Button {...args} variant="danger">
          Danger
        </Button>
        <Button {...args} variant="warning">
          Warning
        </Button>
        <Button {...args} variant="discovery">
          Discovery
        </Button>
        <Button {...args} variant="information">
          Information
        </Button>
        <Button {...args} variant="success">
          Success
        </Button>
      </div>
      <div className="flex gap-4">
        <Button {...args} variant="icon">
          <Rabbit />
        </Button>
        <Button {...args} variant="icon-secondary">
          <MailOpen />
        </Button>
        <Button {...args} variant="icon-outline">
          <ChevronRight />
        </Button>
        <Button {...args} variant="icon-ghost">
          <X />
        </Button>
        <Button {...args} variant="icon-link">
          <Check />
        </Button>
      </div>
      <div className="flex gap-4">
        <Button {...args} variant="icon-danger">
          <Rabbit />
        </Button>
        <Button {...args} variant="icon-warning">
          <MailOpen />
        </Button>
        <Button {...args} variant="icon-discovery">
          <ChevronRight />
        </Button>
        <Button {...args} variant="icon-information">
          <X />
        </Button>
        <Button {...args} variant="icon-success">
          <Check />
        </Button>
      </div>
    </div>
}`,...(B=(p=r.parameters)==null?void 0:p.docs)==null?void 0:B.source}}};var j,f,y;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: <>
        <MailOpen />
        Login with Email
      </>
  }
}`,...(y=(f=s.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var z,N,w;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    loading: true,
    children: 'Save'
  }
}`,...(w=(N=o.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var S,k,D;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col items-center gap-4">
      <div className="flex gap-4">
        <Button {...args} variant="danger" size="sm">
          Small
        </Button>
        <Button {...args} variant="warning" size="sm">
          <MailOpen />
          Small with icon
        </Button>
        <Button {...args} variant="icon-discovery" size="sm">
          <MailOpen />
        </Button>
      </div>
      <div className="flex gap-4">
        <Button {...args} variant="danger" size="default">
          Default
        </Button>
        <Button {...args} variant="warning" size="default">
          <MailOpen />
          Default with icon
        </Button>
        <Button {...args} variant="icon-discovery" size="default">
          <MailOpen />
        </Button>
      </div>
      <div className="flex gap-4">
        <Button {...args} variant="danger" size="lg">
          Large
        </Button>
        <Button {...args} variant="warning" size="lg">
          <MailOpen />
          Large with icon
        </Button>
        <Button {...args} variant="icon-discovery" size="lg">
          <MailOpen />
        </Button>
      </div>
    </div>
}`,...(D=(k=c.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};const A=["Default","Variants","WithIcon","Loading","Sizes"];export{e as Default,o as Loading,c as Sizes,r as Variants,s as WithIcon,A as __namedExportsOrder,Z as default};
