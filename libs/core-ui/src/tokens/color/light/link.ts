import palette from "../palette";
import { generateSemanticTokens } from "../utils";

// Single Responsibility: Define semantic link token configurations
const semanticLinkConfigs = [
  {
    key: 'default',
    value: palette.forestGreen[600],
    description: 'Use for links in a default or hovered state. Add an underline for hovered states.',
    palette: 'forestGreen/600',
  },
  {
    key: 'pressed',
    value: palette.forestGreen[700],
    description: 'Use for links in a default or hovered state. Add an underline for hovered states.',
    palette: 'forestGreen/700',
  },
  {
    key: 'visited',
    value: palette.mossGreen[700],
    description: 'Use for visited links.',
    palette: 'mossGreen/700',
  },
  {
    key: 'visited.pressed',
    value: palette.mossGreen[800],
    description: 'Use for visited links.',
    palette: 'mossGreen/800',
  },
];

const link = generateSemanticTokens(semanticLinkConfigs);

export default link;
