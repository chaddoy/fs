import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-ikABDTSQ.js";import{M as o}from"./index-Y5J1nf-U.js";import"./index-CDlOlYQx.js";import"./iframe-h8RH2BWK.js";import"./index-CA2ozmjx.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function r(s){const e={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"Troubleshooting",isTemplate:!0}),`
`,n.jsx(e.h3,{id:"troubleshooting",children:"Troubleshooting"}),`
`,n.jsx(e.h4,{id:"common-issues-and-solutions",children:"Common Issues and Solutions"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Build and Development Issues"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:'1. "Module not found" errors'})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Clear node_modules and reinstall
rm -rf node_modules
pnpm install

# Clear Nx cache
npx nx reset
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"2. Storybook not loading components"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Check if component is exported
# libs/core-ui/src/index.ts should include:
export { ComponentName } from './components/ComponentName';

# Rebuild the library
pnpm nx run core-ui:build

# Restart Storybook
pnpm nx run design-system:storybook
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"3. TypeScript errors"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Run type checking
pnpm nx run core-ui:typecheck

# Check for missing types
pnpm add -D @types/[missing-package]
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"4. Styling issues"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Rebuild CSS
pnpm nx run core-ui:build

# Check Tailwind configuration
# Ensure paths are correct in tailwind.config.js
`})}),`
`,n.jsx(e.h4,{id:"component-development-issues",children:"Component Development Issues"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"1. Component not showing in Storybook"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["✅ Check component export in ",n.jsx(e.code,{children:"libs/core-ui/src/index.ts"})]}),`
`,n.jsxs(e.li,{children:["✅ Verify story file location: ",n.jsx(e.code,{children:"libs/core-ui/src/components/[Component]/[Component].story.tsx"})]}),`
`,n.jsx(e.li,{children:"✅ Ensure story file has correct Meta title"}),`
`,n.jsxs(e.li,{children:["✅ Check Storybook configuration in ",n.jsx(e.code,{children:"apps/design-system/.storybook/main.ts"})]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"2. Tests failing"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Run tests with verbose output
pnpm nx run core-ui:test --verbose

# Update snapshots if UI changed
pnpm nx run core-ui:test -- --updateSnapshot

# Run specific test file
pnpm nx run core-ui:test --testPathPattern=Button
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"3. Linting errors"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Run linting
pnpm nx run core-ui:lint

# Auto-fix linting issues
pnpm nx run core-ui:lint --fix
`})}),`
`,n.jsx(e.h4,{id:"nx-workspace-issues",children:"Nx Workspace Issues"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:'1. "Project not found" errors'})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Check project configuration
npx nx show project core-ui

# Verify project.json exists
ls libs/core-ui/project.json

# Regenerate project configuration if needed
npx nx generate @nx/react:library core-ui --dry-run
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"2. Dependency graph issues"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# View dependency graph
npx nx graph

# Check for circular dependencies
npx nx graph --file=graph.html
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"3. Cache issues"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Clear Nx cache
npx nx reset

# Clear specific project cache
npx nx reset core-ui
`})}),`
`,n.jsx(e.h4,{id:"shadcn-ui-issues",children:"shadcn-ui Issues"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"1. Component not generating"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Navigate to shadcn-ui directory
cd libs/shadcn-ui

# Check components.json configuration
cat components.json

# Try generating with verbose output
npx shadcn@latest add button --verbose
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"2. Styling not applying"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"✅ Check if Tailwind CSS is properly configured"}),`
`,n.jsx(e.li,{children:"✅ Verify CSS imports in your application"}),`
`,n.jsx(e.li,{children:"✅ Check for CSS conflicts"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"3. TypeScript errors with shadcn-ui"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Rebuild shadcn-ui library
pnpm nx run shadcn-ui:build

# Check type definitions
pnpm nx run shadcn-ui:typecheck
`})}),`
`,n.jsx(e.h4,{id:"performance-issues",children:"Performance Issues"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"1. Slow builds"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Check Nx cache status
npx nx show projects --with-details

# Enable Nx Cloud for faster builds (optional)
npx nx connect
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"2. Large bundle sizes"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Analyze bundle
npx nx build web --analyze

# Check for duplicate dependencies
pnpm list --depth=0
`})}),`
`,n.jsx(e.h4,{id:"environment-issues",children:"Environment Issues"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"1. Node.js version conflicts"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Check Node.js version
node --version

# Use correct Node.js version (check .nvmrc)
nvm use

# Install dependencies with correct Node version
pnpm install
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"2. Package manager issues"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Clear package manager cache
pnpm store prune

# Reinstall dependencies
rm -rf node_modules pnpm-lock.yaml
pnpm install
`})}),`
`,n.jsx(e.h4,{id:"git-and-deployment-issues",children:"Git and Deployment Issues"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"1. Merge conflicts in generated files"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Regenerate files after resolving conflicts
pnpm nx run core-ui:build
pnpm nx run shadcn-ui:build
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"2. Storybook deployment failing"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Check GitHub Actions logs
# Verify deployment configuration
# Test build locally
pnpm nx run design-system:build-storybook
`})}),`
`,n.jsx(e.h4,{id:"debugging-tools",children:"Debugging Tools"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Browser Developer Tools:"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"React Developer Tools"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Install"}),": ",n.jsx(e.a,{href:"https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi",rel:"nofollow",children:"Chrome Web Store"})," or ",n.jsx(e.a,{href:"https://addons.mozilla.org/en-US/firefox/addon/react-devtools/",rel:"nofollow",children:"Firefox Add-ons"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Features"}),":",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Inspect component hierarchy"}),`
`,n.jsx(e.li,{children:"View props and state"}),`
`,n.jsx(e.li,{children:"Profile component performance"}),`
`,n.jsx(e.li,{children:"Debug component re-renders"}),`
`,n.jsx(e.li,{children:"Edit component state in real-time"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Storybook Add-ons for Debugging"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Storybook Addon Actions"}),": Track component events"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Storybook Addon Controls"}),": Manipulate component props"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Storybook Addon Viewport"}),": Test responsive design"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Storybook Addon Accessibility"}),": Check accessibility issues"]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Useful Commands"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Check workspace status
npx nx show projects

# View project details
npx nx show project core-ui

# Check affected projects
npx nx affected:graph

# Run with debug output
DEBUG=* pnpm nx run core-ui:build
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Log Files"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Nx logs"}),": ",n.jsx(e.code,{children:".nx/cache/"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Build logs"}),": Check terminal output"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Test logs"}),": ",n.jsx(e.code,{children:"coverage/"})," directory"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Storybook logs"}),": Browser console"]}),`
`]}),`
`,n.jsx(e.h4,{id:"getting-help",children:"Getting Help"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Before asking for help:"})}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"✅ Check this troubleshooting guide"}),`
`,n.jsx(e.li,{children:"✅ Search existing issues in the repository"}),`
`,n.jsx(e.li,{children:"✅ Try the solutions above"}),`
`,n.jsx(e.li,{children:"✅ Gather relevant error messages and logs"}),`
`,n.jsx(e.li,{children:"✅ Use React Developer Tools to inspect component issues"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"When reporting issues:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Include error messages and stack traces"}),`
`,n.jsx(e.li,{children:"Specify your environment (OS, Node.js version, etc.)"}),`
`,n.jsx(e.li,{children:"Describe steps to reproduce"}),`
`,n.jsx(e.li,{children:"Include relevant code snippets"}),`
`,n.jsx(e.li,{children:"Mention what you've already tried"}),`
`,n.jsx(e.li,{children:"Attach React Developer Tools screenshots if relevant"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Resources:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://nx.dev",rel:"nofollow",children:"Nx Documentation"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://storybook.js.org",rel:"nofollow",children:"Storybook Documentation"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://ui.shadcn.com",rel:"nofollow",children:"shadcn/ui Documentation"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://github.com/facebook/react/tree/main/packages/react-devtools",rel:"nofollow",children:"React Developer Tools Documentation"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://github.com/your-org/fs/issues",rel:"nofollow",children:"GitHub Issues"})}),`
`]}),`
`,n.jsx(e.h4,{id:"prevention-tips",children:"Prevention Tips"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Best Practices:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"✅ Always run tests before committing"}),`
`,n.jsx(e.li,{children:"✅ Keep dependencies updated"}),`
`,n.jsx(e.li,{children:"✅ Use consistent code formatting"}),`
`,n.jsx(e.li,{children:"✅ Document breaking changes"}),`
`,n.jsx(e.li,{children:"✅ Test components in different environments"}),`
`,n.jsx(e.li,{children:"✅ Use React Developer Tools for component debugging"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Regular Maintenance:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Weekly: Update dependencies
pnpm update

# Monthly: Audit dependencies
pnpm audit

# Quarterly: Review and clean up unused code
npx nx graph --file=unused.html
`})}),`
`,n.jsx(e.p,{children:"The key additions are:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"React Developer Tools section"})," with installation links and features"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Storybook Add-ons"})," for debugging"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:'Updated "Before asking for help"'})," to include React Developer Tools"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:'Updated "When reporting issues"'})," to mention React Developer Tools screenshots"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Added React Developer Tools documentation"})," to resources"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:'Updated "Best Practices"'})," to include component debugging"]}),`
`]}),`
`,n.jsx(e.p,{children:"This provides developers with essential browser-based debugging tools for React component development."})]})}function j(s={}){const{wrapper:e}={...i(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{j as default};
