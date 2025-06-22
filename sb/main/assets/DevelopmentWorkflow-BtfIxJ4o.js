import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-ikABDTSQ.js";import{M as r}from"./index-Y5J1nf-U.js";import"./index-CDlOlYQx.js";import"./iframe-h8RH2BWK.js";import"./index-CA2ozmjx.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function i(s){const e={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Development workflow",isTemplate:!0}),`
`,n.jsx(e.h3,{id:"development-workflow",children:"Development Workflow"}),`
`,n.jsx(e.h4,{id:"1-starting-your-day",children:"1. Starting your day"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Pull latest changes"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`git checkout main
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`git pull origin main
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Start development servers"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# For component development
npx nx dev design-system:storybook
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# For app development
npx nx dev web
`})}),`
`,n.jsx(e.h4,{id:"2-component-development-cycle",children:"2. Component Development Cycle"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Creating new components"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Generate component structure using Nx React generator
npx nx generate @nx/react:component [ComponentName] --project=core-ui

# This creates:
# libs/core-ui/src/components/[ComponentName]/
# ├── [ComponentName].tsx
# ├── [ComponentName].spec.tsx
# ├── [ComponentName].story.tsx
# ├── index.ts
# └── [ComponentName].module.css
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Development Workflow"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# 1. Create feature branch
git checkout -b feature/[component-name]

# 2. Develop component
# - Edit component files
# - View in Storybook: npx nx dev design-system:storybook
# - Test component: pnpm nx run core-ui:test

# 3. Test your changes
npx nx run core-ui:test
npx nx run core-ui:lint
npx nx run core-ui:build

# 4. Update snapshots if needed
npx nx run core-ui:test -- --updateSnapshot
`})}),`
`,n.jsx(e.h4,{id:"3-quality-assurance",children:"3. Quality Assurance"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Before committing"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Run all tests
npx nx run core-ui:test
npx nx run core-ui:test-coverage

# Check linting
npx nx run core-ui:lint
npx nx run shadcn-ui:lint

# Build libraries
npx nx run core-ui:build
npx nx run shadcn-ui:build

# Build Storybook
npx nx run design-system:build-storybook
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"E2E testing"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Run E2E tests
npx nx run web:e2e
`})}),`
`,n.jsx(e.h4,{id:"4-documentation",children:"4. Documentation"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Component Documentation:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Update Storybook stories in [ComponentName].story.tsx"}),`
`,n.jsx(e.li,{children:"Add usage examples and variants"}),`
`,n.jsx(e.li,{children:"Document props and interfaces"}),`
`,n.jsx(e.li,{children:"Include accessibility considerations"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Export Components:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// libs/core-ui/src/index.ts
export { ComponentName } from './components/ComponentName';
`})}),`
`,n.jsx(e.h4,{id:"5-code-review",children:"5. Code review"}),`
`,n.jsx(e.p,{children:"Code Review Checklist:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"[ ] Component follows design system patterns"}),`
`,n.jsx(e.li,{children:"[ ] All tests pass"}),`
`,n.jsx(e.li,{children:"[ ] Storybook stories are complete"}),`
`,n.jsx(e.li,{children:"[ ] Component is properly exported"}),`
`,n.jsx(e.li,{children:"[ ] Accessibility requirements met"}),`
`,n.jsx(e.li,{children:"[ ] Responsive design considerations"}),`
`,n.jsx(e.li,{children:"[ ] Performance optimizations applied"}),`
`]}),`
`,n.jsx(e.h4,{id:"6-deployment",children:"6. Deployment"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Storybook deployment:"})}),`
`,n.jsx(e.h2,{id:"tba",children:"TBA"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"App deployment:"})}),`
`,n.jsx(e.h2,{id:"tba-1",children:"TBA"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Best practices:"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Component Development"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Single Responsibility: Each component should do one thing well"}),`
`,n.jsx(e.li,{children:"Composition: Build complex components from simple ones"}),`
`,n.jsx(e.li,{children:"Props Interface: Define clear, well-typed props"}),`
`,n.jsx(e.li,{children:"Default Props: Provide sensible defaults"}),`
`,n.jsx(e.li,{children:"Error Boundaries: Handle edge cases gracefully"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Styling Guidelines"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Use design tokens from libs/core-ui/src/tokens/"}),`
`,n.jsx(e.li,{children:"Follow Tailwind CSS utility-first approach"}),`
`,n.jsx(e.li,{children:"Maintain consistent spacing and typography"}),`
`,n.jsx(e.li,{children:"Ensure responsive design"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Testing Strategy"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Unit Tests: Test component logic and props"}),`
`,n.jsx(e.li,{children:"Integration Tests: Test component interactions"}),`
`,n.jsx(e.li,{children:"Visual Tests: Use Storybook for visual regression testing"}),`
`,n.jsx(e.li,{children:"Accessibility Tests: Ensure ARIA compliance"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Performance Considerations"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Lazy load heavy components"}),`
`,n.jsx(e.li,{children:"Optimize bundle size"}),`
`,n.jsx(e.li,{children:"Use React.memo for expensive components"}),`
`,n.jsx(e.li,{children:"Implement proper key props for lists"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Common Workflows"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Adding New Design Tokens"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# 1. Add tokens to libs/core-ui/src/tokens/
# 2. Update theme configuration
# 3. Test across components
# 4. Update documentation
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Updating Existing Components"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# 1. Check component usage across apps
# 2. Plan breaking changes carefully
# 3. Update stories and documentation
# 4. Test backward compatibility
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Bug Fixes"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# 1. Reproduce in Storybook
# 2. Write failing test
# 3. Fix the issue
# 4. Verify fix works
# 5. Update documentation if needed
`})}),`
`,n.jsxs(e.p,{children:["The key correction is that you do have the ",n.jsx(e.code,{children:"@nx/react:component"})," generator available based on your ",n.jsx(e.code,{children:"nx.json"})," configuration. If it's not working, you can always fall back to manual creation."]})]})}function m(s={}){const{wrapper:e}={...o(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{m as default};
