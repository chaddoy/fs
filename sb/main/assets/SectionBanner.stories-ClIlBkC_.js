import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as s}from"./clsx-B-dksMZM.js";import{H as f}from"./Headings-Bb3ZPpRx.js";import{P as g}from"./Paragraph-C_aPxW4e.js";import{E as x}from"./Eyebrow-Xyro-W43.js";import{B as b}from"./Button-WKiRdgXN.js";import{C as h}from"./scroll-area-Dp_V6FlM.js";import"./card-OJBl37EF.js";import"./index-CDlOlYQx.js";import"./utils-gPd2mQ4j.js";import"./separator-C2uBqrMb.js";import"./index-BGZCjPBa.js";import"./index-CA2ozmjx.js";import"./table-kcheUeZg.js";import"./createLucideIcon-BN166M7e.js";import"./tslib.es6-pJfR_DrR.js";function t({className:r,color:n="burntOrange-subtle",image:m,eyebrow:o,children:d,...p}){const u={"forestGreen-subtlest":"bg-accent.forestGreen.subtlest","forestGreen-subtle":"bg-accent.forestGreen.subtle.hovered","burntOrange-subtle":"bg-accent.burntOrange.subtle.hovered"};return e.jsxs("div",{className:s("p-2 pb-16 flex flex-col gap-14","sm:flex-row sm:p-2 sm:gap-4","md:p-4","lg:p-4",u[n],r),...p,"data-testid":"section-banner",children:[e.jsx("div",{className:"h-72 w-full bg-cover bg-center sm:order-1 sm:w-1/2 lg:h-[568px] border border-black",style:{backgroundImage:`url(${m})`},role:"img"}),e.jsxs("div",{className:"flex flex-col gap-2 justify-center items-center sm:w-1/2",children:[o&&e.jsx(x,{children:o}),d]})]})}const v=({className:r,children:n})=>e.jsx("div",{className:s("flex flex-col gap-8 px-14 text-center","sm:px-6","md:px-9","lg:px-20","xl:px-40",r),"data-testid":"section-banner-content",children:n}),S=({className:r,children:n})=>e.jsx(f,{className:s("!text-3xl md:!text-2xl lg:!text-3xl",r),"data-testid":"section-banner-header",children:n});t.Content=v;t.Header=S;t.__docgenInfo={description:"",methods:[{name:"Content",docblock:null,modifiers:["static"],params:[{name:"{ className, children }: SectionBannerContentProps",optional:!1,type:{name:"SectionBannerContentProps",alias:"SectionBannerContentProps"}}],returns:null},{name:"Header",docblock:null,modifiers:["static"],params:[{name:"{ className, children }: SectionBannerHeaderProps",optional:!1,type:{name:"SectionBannerHeaderProps",alias:"SectionBannerHeaderProps"}}],returns:null}],displayName:"SectionBanner",props:{className:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:`| 'forestGreen-subtlest'
| 'forestGreen-subtle'
| 'burntOrange-subtle'`,elements:[{name:"literal",value:"'forestGreen-subtlest'"},{name:"literal",value:"'forestGreen-subtle'"},{name:"literal",value:"'burntOrange-subtle'"}]},description:"",defaultValue:{value:"'burntOrange-subtle'",computed:!1}},image:{required:!0,tsType:{name:"string"},description:""},eyebrow:{required:!1,tsType:{name:"ReactNode"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};const B=""+new URL("banner-image-1-D7vw_cGl.jpg",import.meta.url).href,I={title:"Components/SectionBanner",component:t,parameters:{layout:"fullscreen"},tags:["autodocs"]},a={args:{color:"burntOrange-subtle",image:B},render:r=>e.jsx(t,{...r,children:e.jsxs(t.Content,{className:"sm:gap-2",children:[e.jsx(t.Header,{children:"Visit Us at Our Showroom"}),e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsx(g,{size:"2xs",children:"Experience our latest collection in person, with guidance from our dedicated team to help you find your perfect style."}),e.jsx("div",{children:e.jsxs(b,{variant:"secondary",children:["Visit Showroom ",e.jsx(h,{})]})})]})]})})};var i,l,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    color: 'burntOrange-subtle',
    image: SectionBannerImage1
  },
  render: args => {
    return <SectionBanner {...args}>
        <SectionBanner.Content className="sm:gap-2">
          <SectionBanner.Header>Visit Us at Our Showroom</SectionBanner.Header>

          <div className="flex flex-col gap-8">
            <P size="2xs">
              Experience our latest collection in person, with guidance from our
              dedicated team to help you find your perfect style.
            </P>

            <div>
              <Button variant="secondary">
                Visit Showroom <ChevronRight />
              </Button>
            </div>
          </div>
        </SectionBanner.Content>
      </SectionBanner>;
  }
}`,...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const D=["Default"];export{a as Default,D as __namedExportsOrder,I as default};
