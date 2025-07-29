import palette from '../palette';
import { generateSemanticTokens } from '../utils';

const semanticLinkConfigs = [
  {
    key: 'default',
    value: palette.forestGreen[600],
    description:
      'Use for links in a default or hovered state. Add an underline for hovered states.',
    palette: 'forestGreen/600',
  },
  {
    key: 'pressed',
    value: palette.forestGreen[700],
    description:
      'Use for links in a default or hovered state. Add an underline for hovered states.',
    palette: 'forestGreen/700',
  },
  {
    key: 'visited',
    value: palette.royalPurple[700],
    description: 'Use for visited links.',
    palette: 'royalPurple/700',
  },
  {
    key: 'visited.pressed',
    value: palette.royalPurple[800],
    description: 'Use for visited links.',
    palette: 'royalPurple/800',
  },
];

const link = generateSemanticTokens(semanticLinkConfigs);

export default link;
