import palette from '../palette';
import { generateSemanticTokens } from '../utils';

const semanticSkeletonConfigs = [
  {
    key: 'default',
    value: palette.jetBlack[100],
    description: 'Use for skeleton loading states',
    palette: 'jetBlack/100',
  },
  {
    key: 'subtle',
    value: palette.jetBlack[50],
    description: 'Use for the pulse or shimmer effect in skeleton loading states',
    palette: 'jetBlack/50',
  },
];

const skeleton = generateSemanticTokens(semanticSkeletonConfigs);

export default skeleton;
