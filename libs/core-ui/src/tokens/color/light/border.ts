import palette from '../palette';
import { getPaletteTokens, generateSemanticTokens } from '../utils';

const semanticBorderConfigs = [
  {
    key: 'default',
    value: palette.grey[200],
    description: 'Use to visually group or separate UI elements, such as flat cards or side panel dividers.',
    palette: 'grey/200',
  },
  {
    key: 'accent.grey',
    value: palette.grey[500],
    description: 'Use for borders on non-bold grey accent backgrounds.',
    palette: 'grey/500',
  },
  {
    key: 'accent.jetBlack',
    value: palette.jetBlack[500],
    description: 'Use for borders on non-bold gray accent backgrounds.',
    palette: 'jetBlack/500',
  },
  {
    key: 'accent.coffeeBrown',
    value: palette.coffeeBrown[500],
    description: 'Use for coffeeBrown borders on non-bold backgrounds when there is no meaning tied to the color.',
    palette: 'coffeeBrown/500',
  },
  {
    key: 'disabled',
    value: palette.jetBlack[100],
    description: 'Use for borders of elements in a disabled state.',
    palette: 'jetBlack/100',
  },
  {
    key: 'focused',
    value: palette.forestGreen[400],
    description: 'Use for focus rings of elements in a focus state.',
    palette: 'forestGreen/400',
  },
  {
    key: 'input',
    value: palette.grey[400],
    description: 'Use for borders of form UI elements, such as text fields, checkboxes, and radio buttons.',
    palette: 'grey/400',
  },
  {
    key: 'inverse',
    value: palette.extras.white,
    description: 'Use for borders on bold backgrounds.',
    palette: 'extras/white',
  },
  {
    key: 'selected',
    value: palette.forestGreen[600],
    description: 'Use for borders or visual indicators of elements in a selected or opened state, such as in tabs or menu items.',
    palette: 'forestGreen/600',
  },
  {
    key: 'brand',
    value: palette.forestGreen[600],
    description: 'Use for borders or visual indicators of elements that reinforce our brand, such as logos or primary buttons.',
    palette: 'forestGreen/600',
  },
  {
    key: 'danger',
    value: palette.crimsonRed[500],
    description: 'Use for borders communicating critical information, such as the borders on invalid text fields.',
    palette: 'crimsonRed/500',
  },
  {
    key: 'warning',
    value: palette.burntOrange[500],
    description: 'Use for borders communicating caution.',
    palette: 'burntOrange/500',
  },
  {
    key: 'success',
    value: palette.mossGreen[500],
    description: 'Use for borders communicating a favorable outcome, such as the borders on validated text fields.',
    palette: 'mossGreen/500',
  },
  {
    key: 'discovery',
    value: palette.burntOrange[500],
    description: 'Use for borders communicating change or something new, such as the borders in onboarding spotlights.',
    palette: 'burntOrange/500',
  },
  {
    key: 'information',
    value: palette.royalBlue[500],
    description: 'Use for borders communicating information or something in-progress.',
    palette: 'royalBlue/500',
  },
  {
    key: 'bold',
    value: palette.grey[500],
    description: 'A neutral border option that passes min 3:1 contrast ratios.',
    palette: 'grey/500',
  },
];

const border = {
  ...generateSemanticTokens(semanticBorderConfigs),
  ...getPaletteTokens(
    key => `Use for ${key} borders on non-bold backgrounds when there is no meaning tied to the color.`
  ),
};

export default border;
