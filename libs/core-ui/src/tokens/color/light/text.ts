import palette from '../palette';
import { getPaletteTextTokens, generateSemanticTokens } from '../utils';

const semanticTextConfigs = [
  {
    key: 'default',
    value: palette.extras.charcoal,
    description:
      'Use for primary text, such as body copy, sentence case headers, and buttons.',
    palette: 'extras/charcoal',
  },
  {
    key: 'disabled',
    value: palette.jetBlack[300],
    description: 'Use for text in a disabled state.',
    palette: 'jetBlack/300',
  },
  {
    key: 'inverse',
    value: palette.extras.white,
    description: 'Use for text on bold backgrounds.',
    palette: 'extras/white',
  },
  {
    key: 'selected',
    value: palette.forestGreen[600],
    description:
      'Use for text in selected or opened states, such as tabs and dropdown buttons.',
    palette: 'forestGreen/600',
  },
  {
    key: 'brand',
    value: palette.forestGreen[600],
    description: 'Use for text that reinforces our brand.',
    palette: 'forestGreen/600',
  },
  {
    key: 'danger',
    value: palette.crimsonRed[700],
    description: 'Use for critical text, such as input field error messaging.',
    palette: 'crimsonRed/700',
  },
  {
    key: 'warning',
    value: palette.burntOrange[700],
    description:
      'Use for text to emphasize caution, such as in moved lozenges.',
    palette: 'burntOrange/700',
  },
  {
    key: 'warning.inverse',
    value: palette.grey[900],
    description: 'Use for text when on bold warning backgrounds.',
    palette: 'grey/900',
  },
  {
    key: 'success',
    value: palette.mossGreen[800],
    description:
      'Use for text to communicate a favorable outcome, such as input field success messaging.',
    palette: 'mossGreen/800',
  },
  {
    key: 'discovery',
    value: palette.burntOrange[700],
    description:
      'Use for text to emphasize change or something new, such as in new lozenges.',
    palette: 'burntOrange/700',
  },
  {
    key: 'information',
    value: palette.royalBlue[700],
    description:
      'Use for informative text or to communicate something is in progress, such as in-progress lozenges.',
    palette: 'royalBlue/700',
  },
  {
    key: 'subtlest',
    value: palette.jetBlack[100],
    description:
      'Use for tertiary text, such as meta-data, breadcrumbs, input field placeholder and helper text.',
    palette: 'jetBlack/100',
  },
  {
    key: 'subtle',
    value: palette.jetBlack[200],
    description:
      'Use for secondary text, such as navigation, subtle button links, input field labels, and all caps subheadings.',
    palette: 'jetBlack/200',
  },
];

const text = {
  ...generateSemanticTokens(semanticTextConfigs),
  ...getPaletteTextTokens(),
};

export default text;
