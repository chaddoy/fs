import { generateSemanticTokens } from '../utils';

// Single Responsibility: Define semantic interaction token configurations
const semanticInteractionConfigs = [
  {
    key: 'hovered',
    value: '#00000029',
    description: 'Use as a background overlay for elements in a hovered state when their background color cannot change, such as avatars.',
    palette: '#00000029',
  },
  {
    key: 'pressed',
    value: '#00000052',
    description: 'Use as a background overlay for elements in a pressed state when their background color cannot change, such as avatars.',
    palette: '#00000052',
  },
];

const interaction = generateSemanticTokens(semanticInteractionConfigs);

export default interaction;
