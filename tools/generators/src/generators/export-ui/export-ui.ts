import {
  formatFiles,
  Tree,
  readProjectConfiguration,
  joinPathFragments,
} from '@nx/devkit';

export interface ExportUiGeneratorSchema {
  project: string;
}

export async function exportUiGenerator(
  tree: Tree,
  options: ExportUiGeneratorSchema
) {
  const projectConfig = readProjectConfiguration(tree, options.project);
  const projectRoot = projectConfig.root;

  const uiComponentsPath = joinPathFragments(projectRoot, 'src/components/ui');
  const indexPath = joinPathFragments(projectRoot, 'src/index.ts');

  if (!tree.exists(uiComponentsPath)) {
    console.log(`UI components directory not found: ${uiComponentsPath}`);
    return;
  }

  // Get all .tsx files in the ui directory
  const uiFiles = tree
    .children(uiComponentsPath)
    .filter((file) => file.endsWith('.tsx'))
    .map((file) => file.replace('.tsx', ''));

  if (uiFiles.length === 0) {
    console.log('No UI components found');
    return;
  }

  // Generate export statements
  const exportStatements = uiFiles
    .map((component) => `export * from './components/ui/${component}';`)
    .join('\n');

  // Read existing index content
  let indexContent = '';
  if (tree.exists(indexPath)) {
    indexContent = tree.read(indexPath, 'utf-8') || '';
  }

  // Remove existing UI exports if they exist
  const lines = indexContent.split('\n');
  const filteredLines = lines.filter(
    (line) => !line.includes('./components/ui/') && line.trim() !== ''
  );

  // Add new exports
  const newContent = [...filteredLines, exportStatements].join('\n');

  // Write the updated index file
  tree.write(indexPath, newContent);

  console.log(`Exported ${uiFiles.length} UI components:`);
  uiFiles.forEach((component) => console.log(`  - ${component}`));

  await formatFiles(tree);
}

export default exportUiGenerator;
