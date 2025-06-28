// tools/generators/src/generators/component/schema.ts
export interface ComponentGeneratorSchema {
  name: string;
  project: string;
  directory?: string;
  style?: 'css' | 'scss' | 'styled-components' | 'none';
  withTests?: boolean;
  withStories?: boolean;
  export?: boolean;
  storyGroup?: string;
}
