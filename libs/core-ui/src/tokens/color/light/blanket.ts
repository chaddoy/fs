import palette from '../palette';
import { generateSemanticTokens } from '../utils';

// Single Responsibility: Define semantic blanket token configurations
const semanticBlanketConfigs = [
  {
    key: 'default',
    value: palette.jetBlack[400],
    description: 'Use for the screen overlay that appears with modal dialogs',
    palette: 'jetBlack/400',
  },
  {
    key: 'selected',
    value: '#388BFF14',
    description: "Use as an overlay to communicate selected states when a simple background color change isn't possible, such as in Editor block elements",
    palette: '#388BFF14',
  },
  {
    key: 'danger',
    value: '#EF5C4814',
    description: "Use as an overlay to communicate danger states when a simple background color change isn't possible, such as deletion of Editor block elements",
    palette: '#EF5C4814',
  },
];

const blanket = generateSemanticTokens(semanticBlanketConfigs);

export default blanket;
