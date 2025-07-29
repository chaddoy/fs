import palette from '../palette';
import { getPaletteTokens, generateSemanticTokens } from '../utils';

const semanticIconConfigs = [
  {
    key: 'default',
    value: palette.grey[600],
    description: 'Use for icon-only buttons, or icons paired with color.text',
    palette: 'grey/600',
  },
  {
    key: 'disabled',
    value: palette.grey[300],
    description: 'Use for icons in a disabled state.',
    palette: 'grey/300',
  },
  {
    key: 'inverse',
    value: palette.extras.white,
    description: 'Use for icons on bold backgrounds.',
    palette: 'extras/white',
  },
  {
    key: 'selected',
    value: palette.forestGreen[600],
    description:
      'Use for icons in selected or opened states, such as those used in dropdown buttons.',
    palette: 'forestGreen/600',
  },
  {
    key: 'brand',
    value: palette.forestGreen[600],
    description: 'Use for icons that reinforce our brand.',
    palette: 'forestGreen/600',
  },
  {
    key: 'danger',
    value: palette.crimsonRed[600],
    description:
      'Use for icons communicating critical information, such as those used in error handing.',
    palette: 'crimsonRed/600',
  },
  {
    key: 'warning',
    value: palette.orangePeel[500],
    description:
      'Use for icons communicating caution, such as those used in warning section messages.',
    palette: 'orangePeel/500',
  },
  {
    key: 'warning.inverse',
    value: palette.grey[300],
    description: 'Use for icons when on bold warning backgrounds.',
    palette: 'grey/300',
  },
  {
    key: 'success',
    value: palette.mossGreen[500],
    description:
      'Use for icons communicating a favorable outcome, such as those used in success section messaged.',
    palette: 'mossGreen/500',
  },
  {
    key: 'discovery',
    value: palette.royalPurple[500],
    description:
      'Use for icons communicating change or something new, such as discovery section messages.',
    palette: 'royalPurple/500',
  },
  {
    key: 'information',
    value: palette.royalBlue[500],
    description:
      'Use for icons communicating information or something in-progress, such as information section messages.',
    palette: 'royalBlue/500',
  },
  {
    key: 'subtlest',
    value: palette.jetBlack[100],
    description: 'Use for icons paired with color.text.subtlest',
    palette: 'jetBlack/100',
  },
  {
    key: 'subtle',
    value: palette.jetBlack[400],
    description: 'Use for icons paired with color.text.subtle',
    palette: 'jetBlack/400',
  },
];

const icon = {
  ...generateSemanticTokens(semanticIconConfigs),
  ...getPaletteTokens(
    (key) =>
      `Use for ${key} icons on non-bold backgrounds when there is no meaning tied to the color, such as file type icons.`
  ),
};

export default icon;
