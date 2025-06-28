import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as t}from"./index-ikABDTSQ.js";import{M as i}from"./index-GAA2C7JD.js";import"./index-CDlOlYQx.js";import"./iframe-G02ZoSuP.js";import"./index-CA2ozmjx.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function r(s){const e={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...t(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Quick start",isTemplate:!0}),`
`,n.jsx(e.h3,{id:"quick-start",children:"Quick Start"}),`
`,n.jsx(e.h4,{id:"1-clone-the-repository",children:n.jsx(e.strong,{children:"1. Clone the repository"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`git clone https://github.com/chaddoy/fs.git
cd fs
`})}),`
`,n.jsx(e.h4,{id:"2-install-dependencies",children:n.jsx(e.strong,{children:"2. Install dependencies"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Install pnpm globally (recommended)
npm install -g pnpm

# Verify version
pnpm --version

# Install project dependencies
pnpm install
`})}),`
`,n.jsxs(e.p,{children:["More details ",n.jsx(e.a,{href:"https://pnpm.io/installation",rel:"nofollow",children:"here"})]}),`
`,n.jsx(e.h4,{id:"3-verify-the-setup-optional-but-recommended",children:n.jsx(e.strong,{children:"3. Verify the Setup (Optional but recommended)"})}),`
`,n.jsx(e.p,{children:"You can check that packages are installed and Nx is working by running:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npx nx graph
`})}),`
`,n.jsx(e.p,{children:"This will open a browser window showing your projects and libraries dependency graph."}),`
`,n.jsx("div",{className:"!my-8"}),`
`,n.jsx(e.h4,{id:"4-run-development-servers",children:n.jsx(e.strong,{children:"4. Run development servers"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# apps/design-system
pnpm docs:dev

# apps/web
pnpm web:dev
`})})]})}function x(s={}){const{wrapper:e}={...t(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{x as default};
