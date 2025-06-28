import {
  formatFiles,
  generateFiles,
  Tree,
  readProjectConfiguration,
  names,
  joinPathFragments,
} from '@nx/devkit';
import * as path from 'path';
import { ComponentGeneratorSchema } from './schema';

export async function componentGenerator(
  tree: Tree,
  options: ComponentGeneratorSchema
) {
  // Read the target project configuration
  const projectConfig = readProjectConfiguration(tree, options.project);
  const projectRoot = projectConfig.root;

  // Generate component name variations
  const componentNames = names(options.name);

  // Determine output directory
  const outputDirectory = options.directory
    ? joinPathFragments(
        projectRoot,
        'src',
        options.directory,
        componentNames.className
      )
    : joinPathFragments(projectRoot, 'src/components', componentNames.className);

  // Generate component files
  generateFiles(tree, path.join(__dirname, 'files'), outputDirectory, {
    ...options,
    ...componentNames,
    fileName: componentNames.className,
    storyGroup: options.storyGroup || 'Components',
    tmpl: '',
  });

  // Update project exports
  updateExports(tree, projectRoot, componentNames);

  await formatFiles(tree);
}

function updateExports(
  tree: Tree,
  projectRoot: string,
  componentNames: ReturnType<typeof names>
) {
  const indexPath = joinPathFragments(projectRoot, 'src/index.ts');
  if (tree.exists(indexPath)) {
    const indexContent = tree.read(indexPath, 'utf-8');
    const newExport = `export * from './components/${componentNames.className}';\n`;
    tree.write(indexPath, indexContent + newExport);
  }
}

export default componentGenerator;
