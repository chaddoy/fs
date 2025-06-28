import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, addProjectConfiguration } from '@nx/devkit';

import { exportUiGenerator } from './export-ui';
import { ExportUiGeneratorSchema } from './schema';

describe('export-ui generator', () => {
  let tree: Tree;
  const options: ExportUiGeneratorSchema = {
    project: 'shadcn-ui',
  };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();

    // Add the shadcn-ui project configuration
    addProjectConfiguration(tree, 'shadcn-ui', {
      root: 'libs/shadcn-ui',
      sourceRoot: 'libs/shadcn-ui/src',
      projectType: 'library',
      targets: {
        build: {
          executor: '@nx/js:tsc',
        },
      },
    });
  });

  it('should run successfully', async () => {
    await exportUiGenerator(tree, options);
    expect(true).toBe(true); // Basic test to ensure no errors
  });

  it('should create index.ts with UI component exports', async () => {
    // Create UI components directory and files
    tree.write(
      'libs/shadcn-ui/src/components/ui/button.tsx',
      'export const Button = () => null;'
    );
    tree.write(
      'libs/shadcn-ui/src/components/ui/card.tsx',
      'export const Card = () => null;'
    );

    await exportUiGenerator(tree, options);

    expect(tree.exists('libs/shadcn-ui/src/index.ts')).toBe(true);

    const indexContent = tree.read('libs/shadcn-ui/src/index.ts', 'utf-8');
    expect(indexContent).toContain("export * from './components/ui/button';");
    expect(indexContent).toContain("export * from './components/ui/card';");
  });

  it('should handle missing UI components directory', async () => {
    await exportUiGenerator(tree, options);

    // Should not create index.ts if directory doesn't exist
    expect(tree.exists('libs/shadcn-ui/src/index.ts')).toBe(false);
  });

  it('should only export .tsx files', async () => {
    // Create mixed file types
    tree.write(
      'libs/shadcn-ui/src/components/ui/button.tsx',
      'export const Button = () => null;'
    );
    tree.write(
      'libs/shadcn-ui/src/components/ui/card.ts',
      'export const Card = () => null;'
    );
    tree.write(
      'libs/shadcn-ui/src/components/ui/separator.css',
      '.separator { }'
    );

    await exportUiGenerator(tree, options);

    const indexContent = tree.read('libs/shadcn-ui/src/index.ts', 'utf-8');
    expect(indexContent).toContain("export * from './components/ui/button';");
    expect(indexContent).not.toContain("export * from './components/ui/card';");
    expect(indexContent).not.toContain(
      "export * from './components/ui/separator';"
    );
  });
});
