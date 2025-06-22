import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as t}from"./index-ikABDTSQ.js";import{M as l}from"./index-Y5J1nf-U.js";import"./index-CDlOlYQx.js";import"./iframe-h8RH2BWK.js";import"./index-CA2ozmjx.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function s(i){const e={code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{title:"Project structure",isTemplate:!0}),`
`,n.jsx(e.h3,{id:"project-structure",children:"Project Structure"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`fs/
├── apps/                   # Applications
│   ├── web/                # Main Next.js web application
│   ├── design-system/      # Storybook for component documentation
│   └── web-e2e/            # End-to-end tests for web app
├── libs/                   # Shared libraries
│   ├── core-ui/            # Custom React components
│   └── shadcn-ui/          # shadcn/ui component library
└── [config files]          # Nx, TypeScript, ESLint, etc.
`})}),`
`,n.jsx(e.h4,{id:"key-applications",children:"Key Applications"}),`
`,n.jsx("div",{className:"number-list",children:n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"apps/web"})," - Main Next.js application",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Built with Next.js 15.2.4 and React 19"}),`
`,n.jsx(e.li,{children:"Serves as the primary web application"}),`
`,n.jsx(e.li,{children:"Uses Tailwind CSS for styling"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"apps/design-system"})," - Component documentation",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Storybook 8.6.12 for interactive component documentation"}),`
`,n.jsx(e.li,{children:"Serves as the living style guide and component library"}),`
`,n.jsx(e.li,{children:"Deployed to GitHub Pages for team access"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"apps/web-e2e"})," - End-to-end testing",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Playwright-based E2E tests"}),`
`,n.jsx(e.li,{children:"Ensures application functionality across browsers"}),`
`]}),`
`]}),`
`]})}),`
`,n.jsx(e.h4,{id:"shared-libraries",children:"Shared Libraries"}),`
`,n.jsx("div",{className:"number-list",children:n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"libs/core-ui"})," - Custom component library",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Home-grown React components"}),`
`,n.jsx(e.li,{children:"Built with TypeScript and Tailwind CSS"}),`
`,n.jsx(e.li,{children:"Includes design tokens and styling utilities"}),`
`,n.jsxs(e.li,{children:["Exported as ",n.jsx(e.code,{children:"@fs/core-ui"})," package"]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"libs/shadcn-ui"})," - shadcn/ui component library",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Pre-built, accessible components"}),`
`,n.jsx(e.li,{children:"Based on Radix UI primitives"}),`
`,n.jsx(e.li,{children:"Highly customizable with Tailwind CSS"}),`
`,n.jsxs(e.li,{children:["Exported as ",n.jsx(e.code,{children:"@fs/shadcn-ui"})," package"]}),`
`]}),`
`]}),`
`]})}),`
`,n.jsx(e.h4,{id:"development-philosophy",children:"Development Philosophy"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Component-First"}),": All UI elements are built as reusable components"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Design System Driven"}),": Consistent design tokens and patterns"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Type Safety"}),": Full TypeScript support across the workspace"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Testing"}),": Comprehensive testing strategy (unit, integration, E2E)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Documentation"}),": Living documentation through Storybook"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Performance"}),": Intelligent caching and build optimization with Nx"]}),`
`]}),`
`,n.jsx(e.h4,{id:"key-benefits",children:"Key Benefits"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Scalability"}),": Monorepo structure supports multiple applications and teams"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Consistency"}),": Shared design system ensures UI consistency"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Developer Experience"}),": Fast builds, intelligent caching, and excellent tooling"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Maintainability"}),": Clear separation of concerns and modular architecture"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Reusability"}),": Components can be shared across applications"]}),`
`]}),`
`,n.jsx(e.p,{children:"This structure enables teams to build applications quickly while maintaining high quality, consistency, and developer productivity through shared tooling and components."})]})}function j(i={}){const{wrapper:e}={...t(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{j as default};
