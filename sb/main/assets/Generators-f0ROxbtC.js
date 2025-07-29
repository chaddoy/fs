import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-ikABDTSQ.js";import{M as r}from"./index-Bx3wMpsL.js";import"./index-CDlOlYQx.js";import"./iframe-Dl3YK1GM.js";import"./index-BGZCjPBa.js";import"./index-CA2ozmjx.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function t(o){const e={code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...s(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Generators",isTemplate:!0}),`
`,n.jsx(e.h3,{id:"generators",children:"Generators"}),`
`,n.jsx(e.p,{children:"Nx provides a set of generators to help you create new components, libraries, and applications."}),`
`,n.jsx("div",{className:"!my-8"}),`
`,n.jsx(e.h4,{id:"core-ui",children:"core-ui"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Generate a new component
pnpm component [ComponentName]
# Add --story-group=[storyGroup] if you want to add the component to a specific story group

# This creates:
# libs/core-ui/src/components/[ComponentName]/
# ├── [ComponentName].tsx
# ├── [ComponentName].spec.tsx
# ├── [ComponentName].story.tsx
# └── index.ts
`})}),`
`,n.jsx(e.h4,{id:"shadcn-ui",children:"shadcn-ui"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Add a new shadcn-ui component
pnpm component:shadcn

# This generates the component and updates the index.ts file
# libs/shadcn-ui/src/
# ├── components/ui/[component-name].tsx
# └── index.ts
`})})]})}function l(o={}){const{wrapper:e}={...s(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(t,{...o})}):t(o)}export{l as default};
