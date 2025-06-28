import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-ikABDTSQ.js";import{M as r}from"./index-GAA2C7JD.js";import"./index-CDlOlYQx.js";import"./iframe-G02ZoSuP.js";import"./index-CA2ozmjx.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function t(s){const e={code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...i(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Command reference",isTemplate:!0}),`
`,n.jsx(e.h3,{id:"command-reference",children:"Command Reference"}),`
`,n.jsxs(e.p,{children:["You can use ",n.jsx(e.code,{children:"npx"})," or ",n.jsx(e.code,{children:"pnpx"})," to run commands. ",n.jsx(e.code,{children:"pnpx"})," is a wrapper around ",n.jsx(e.code,{children:"npx"})," that uses the local pnpm installation."]}),`
`,n.jsx(e.h4,{id:"appsdesign-system",children:"apps/design-system"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Run the development server
pnpm docs:dev

# Build the static files
pnpm docs:build

# Run the built static files
pnpm docs:static

# Run the development server with nx cache skipped
pnpm docs:dev --skip-nx-cache
`})}),`
`,n.jsx(e.h4,{id:"appsweb",children:"apps/web"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Run the development server
pnpm web:dev

# Build the static files
pnpm web:build

# Run the built static files
pnpm web:static

# Run the tests
pnpm web:test

# Run the linting
pnpm web:lint

# Run the e2e tests
pnpm web:e2e
`})}),`
`,n.jsx(e.h4,{id:"libscore-ui",children:"libs/core-ui"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Run the tests
pnpm core-ui:test

# Run the linting
pnpm core-ui:lint
`})}),`
`,n.jsx(e.h4,{id:"libsshadcn-ui",children:"libs/shadcn-ui"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Run the tests
pnpm shadcn-ui:test

# Run the linting
pnpm shadcn-ui:lint
`})}),`
`,n.jsx(e.h4,{id:"nx-commands",children:"Nx commands"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Generate a new Next.js app
# or npx nx g ...
npx nx generate @nx/next:app apps/[app-name]

# Generate a React library
npx nx g @nx/react:library libs/[library-name]

# Generate or remove a new workspace library
npx nx g @nx/workspace:add libs/[library-name]
npx nx g @nx/workspace:remove [root-folder]/[library-name]

# Explore available commands:
npx nx --help
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Tip:"}),`
For the best developer experience, consider installing Nx Console for your editor (VSCode/IntelliJ), which helps with code generation and task running.`]}),`
`,n.jsx(e.p,{children:"If you need to install Nx globally for CLI use:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install -g nx
`})}),`
`,n.jsxs(e.p,{children:["But this is not required; you can always use ",n.jsx(e.code,{children:"npx nx"})]})]})}function m(s={}){const{wrapper:e}={...i(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(t,{...s})}):t(s)}export{m as default};
