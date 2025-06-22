import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-ikABDTSQ.js";import{M as l}from"./index-Y5J1nf-U.js";import"./index-CDlOlYQx.js";import"./iframe-h8RH2BWK.js";import"./index-CA2ozmjx.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function r(s){const n={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Command reference",isTemplate:!0}),`
`,e.jsx(n.h3,{id:"command-reference",children:"Command Reference"}),`
`,e.jsxs(n.p,{children:["You can use ",e.jsx(n.code,{children:"npx"})," or ",e.jsx(n.code,{children:"pnpx"})," to run commands. ",e.jsx(n.code,{children:"pnpx"})," is a wrapper around ",e.jsx(n.code,{children:"npx"})," that uses the local pnpm installation."]}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["Run ",e.jsx(n.code,{children:"apps/web"})," development server"]})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npx nx dev web
`})}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["Build ",e.jsx(n.code,{children:"apps/web"})," for production"]})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npx nx build web
`})}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["Run ",e.jsx(n.code,{children:"apps/design-system"})," development storybook"]})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npx nx dev design-system:storybook
`})}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["Build ",e.jsx(n.code,{children:"apps/design-system"})," for production"]})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npx nx build design-system:build-storybook
`})}),`
`,e.jsx(n.p,{children:"You can add the following options to the command:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--no-open"})," to prevent the browser from opening automatically"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--port=[port]"})," to specify the port"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--skip-nx-cache"})," to skip the Nx cache"]}),`
`]}),`
`,e.jsx("div",{className:"!my-8"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Generate a new Next.js app"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npx nx generate @nx/next:app apps/[app-name] // or npx nx g ...
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Generate a React library"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npx nx g @nx/react:library libs/[library-name]
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Generate and remove a new workspace library"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npx nx g @nx/workspace:add libs/[library-name]
npx nx g @nx/workspace:remove [root-folder]/[library-name]
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Explore available commands:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npx nx --help
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tip:"}),`
For the best developer experience, consider installing Nx Console for your editor (VSCode/IntelliJ), which helps with code generation and task running.`]}),`
`,e.jsx(n.p,{children:"If you need to install Nx globally for CLI use:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install -g nx
`})}),`
`,e.jsxs(n.p,{children:["But this is not required; you can always use ",e.jsx(n.code,{children:"npx nx"})]})]})}function j(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{j as default};
