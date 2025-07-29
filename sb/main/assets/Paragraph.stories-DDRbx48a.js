import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{P as r}from"./Paragraph-C_aPxW4e.js";import{B as m,F as a}from"./constants-BLqUoSiU.js";import{a as d}from"./Headings-Bb3ZPpRx.js";import"./clsx-B-dksMZM.js";import"./scroll-area-Dp_V6FlM.js";import"./index-CDlOlYQx.js";import"./utils-gPd2mQ4j.js";import"./separator-C2uBqrMb.js";import"./index-BGZCjPBa.js";import"./index-CA2ozmjx.js";import"./createLucideIcon-BN166M7e.js";import"./tslib.es6-pJfR_DrR.js";import"./card-OJBl37EF.js";import"./table-kcheUeZg.js";const _={title:"Typography/Body",tags:["autodocs"]},t={name:"P",render:()=>e.jsx("div",{className:"flex flex-col gap-12 px-8 py-0",children:Object.entries(m).map(([o,s])=>e.jsxs("div",{className:"flex flex-col gap-4 p-0",children:[e.jsx(d,{children:o}),o==="xs"&&e.jsx(r,{children:"Default size for body copy"}),e.jsx(a,{size:s,children:e.jsx(r,{size:o,children:"Body text, font-weight: 400"})}),e.jsx(a,{size:s,children:e.jsx(r,{size:o,bold:!0,children:"Body text, font-weight: 500"})})]},o))})};var i,p,n;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'P',
  render: () => {
    return <div className="flex flex-col gap-12 px-8 py-0">
        {Object.entries(BODY_FONT_SIZES).map(([key, value]) => {
        return <div key={key} className="flex flex-col gap-4 p-0">
              <H2>{key}</H2>
              {key === 'xs' && <PComponent>Default size for body copy</PComponent>}

              <FontCard size={value}>
                <PComponent size={key as keyof typeof BODY_FONT_SIZES}>
                  Body text, font-weight: 400
                </PComponent>
              </FontCard>

              <FontCard size={value}>
                <PComponent size={key as keyof typeof BODY_FONT_SIZES} bold>
                  Body text, font-weight: 500
                </PComponent>
              </FontCard>
            </div>;
      })}
      </div>;
  }
}`,...(n=(p=t.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};const S=["Paragraph"];export{t as Paragraph,S as __namedExportsOrder,_ as default};
