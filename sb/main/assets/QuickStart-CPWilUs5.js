import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as t}from"./index-ikABDTSQ.js";import{M as i}from"./index-Y5J1nf-U.js";import"./index-CDlOlYQx.js";import"./iframe-h8RH2BWK.js";import"./index-CA2ozmjx.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function r(s){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Quick start",isTemplate:!0}),`
`,e.jsx(n.h3,{id:"quick-start",children:"Quick Start"}),`
`,e.jsx(n.h4,{id:"1-clone-the-repository",children:e.jsx(n.strong,{children:"1. Clone the repository"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`git clone https://github.com/chaddoy/fs.git
cd fs
`})}),`
`,e.jsx(n.h4,{id:"2-install-dependencies",children:e.jsx(n.strong,{children:"2. Install dependencies"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`# Install pnpm globally (recommended)
npm install -g pnpm

# Verify version
pnpm --version

# Install project dependencies
pnpm install
`})}),`
`,e.jsxs(n.p,{children:["More details ",e.jsx(n.a,{href:"https://pnpm.io/installation",rel:"nofollow",children:"here"})]}),`
`,e.jsx(n.h4,{id:"3-verify-the-setup-optional-but-recommended",children:e.jsx(n.strong,{children:"3. Verify the Setup (Optional but recommended)"})}),`
`,e.jsx(n.p,{children:"You can check that packages are installed and Nx is working by running:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npx nx graph
`})}),`
`,e.jsx(n.p,{children:"This will open a browser window showing your projects and libraries dependency graph."}),`
`,e.jsx("div",{className:"!my-8"}),`
`,e.jsx(n.h4,{id:"4-run-development-servers",children:e.jsx(n.strong,{children:"4. Run development servers"})}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["Run ",e.jsx(n.code,{children:"apps/web"})," development server"]})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npx nx dev web
`})}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["Run ",e.jsx(n.code,{children:"apps/design-system"})," development storybook"]})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npx nx dev design-system:storybook
`})})]})}function m(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{m as default};
