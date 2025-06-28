import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import {
  Tree,
  readProjectConfiguration,
  addProjectConfiguration,
} from '@nx/devkit';

import { componentGenerator } from './component';
import { ComponentGeneratorSchema } from './schema';

describe('component generator', () => {
  let tree: Tree;
  const options: ComponentGeneratorSchema = {
    name: 'test-component',
    project: 'core-ui',
  };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();

    // Add the core-ui project configuration
    addProjectConfiguration(tree, 'core-ui', {
      root: 'libs/core-ui',
      sourceRoot: 'libs/core-ui/src',
      projectType: 'library',
      targets: {
        build: {
          executor: '@nx/js:tsc',
        },
      },
    });
  });

  it('should run successfully', async () => {
    await componentGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'core-ui');
    expect(config).toBeDefined();
  });

  it('should create component files with PascalCase naming', async () => {
    await componentGenerator(tree, options);

    // Check that the directory is created with PascalCase
    expect(tree.exists('libs/core-ui/src/components/TestComponent')).toBe(true);

    // Check that the component file is created with PascalCase
    expect(
      tree.exists('libs/core-ui/src/components/TestComponent/TestComponent.tsx')
    ).toBe(true);
    expect(
      tree.exists(
        'libs/core-ui/src/components/TestComponent/TestComponent.stories.tsx'
      )
    ).toBe(true);
    expect(
      tree.exists(
        'libs/core-ui/src/components/TestComponent/TestComponent.spec.tsx'
      )
    ).toBe(true);
    expect(
      tree.exists('libs/core-ui/src/components/TestComponent/index.ts')
    ).toBe(true);
  });

  it('should update exports in index.ts with correct path', async () => {
    // Create the index.ts file first
    tree.write('libs/core-ui/src/index.ts', '// existing exports\n');

    await componentGenerator(tree, options);

    const indexContent = tree.read('libs/core-ui/src/index.ts', 'utf-8');
    expect(indexContent).toContain(
      "export * from './components/TestComponent';"
    );
  });

  it('should work with custom directory', async () => {
    const customOptions = {
      ...options,
      directory: 'custom-components',
    };

    await componentGenerator(tree, customOptions);

    // Check that the directory is created with PascalCase in custom location
    expect(
      tree.exists('libs/core-ui/src/custom-components/TestComponent')
    ).toBe(true);
    expect(
      tree.exists(
        'libs/core-ui/src/custom-components/TestComponent/TestComponent.tsx'
      )
    ).toBe(true);
  });

  it('should use default story group when not provided', async () => {
    await componentGenerator(tree, options);

    const storiesContent = tree.read(
      'libs/core-ui/src/components/TestComponent/TestComponent.stories.tsx',
      'utf-8'
    );
    expect(storiesContent).toContain("title: 'Components/TestComponent'");
  });

  it('should use custom story group when provided', async () => {
    const customOptions = {
      ...options,
      storyGroup: 'Elements',
    };

    await componentGenerator(tree, customOptions);

    const storiesContent = tree.read(
      'libs/core-ui/src/components/TestComponent/TestComponent.stories.tsx',
      'utf-8'
    );
    expect(storiesContent).toContain("title: 'Elements/TestComponent'");
  });

  it('should handle kebab-case input names correctly', async () => {
    const kebabOptions = {
      name: 'my-test-component',
      project: 'core-ui',
    };

    // Create the index.ts file first
    tree.write('libs/core-ui/src/index.ts', '// existing exports\n');

    await componentGenerator(tree, kebabOptions);

    // Should create PascalCase directory and files
    expect(tree.exists('libs/core-ui/src/components/MyTestComponent')).toBe(
      true
    );
    expect(
      tree.exists(
        'libs/core-ui/src/components/MyTestComponent/MyTestComponent.tsx'
      )
    ).toBe(true);

    // Export should use PascalCase
    const indexContent = tree.read('libs/core-ui/src/index.ts', 'utf-8');
    expect(indexContent).toContain(
      "export * from './components/MyTestComponent';"
    );
  });
});
