import palette from '../palette';
import { getPaletteBackgroundTokens } from '../utils';

type ColorScale = {
  '50': string;
  '100': string;
  '200': string;
  '300': string;
  '400': string;
  '500': string;
  '600': string;
  '700': string;
  '800': string;
  '900': string;
};

type SemanticConfig = {
  key: string;
  color: keyof typeof palette;
  baseScale?: keyof ColorScale;
  hoveredScale: keyof ColorScale;
  pressedScale: keyof ColorScale;
  baseValue?: string;
  description: string;
};

type TokenValue = {
  value: string;
  description: string;
  palette: string;
};

const createToken = (value: string, description: string, palette: string) => ({
  value,
  description,
  palette,
});

const createSemanticStateTokens = (
  baseKey: string,
  baseValue: string,
  hoveredValue: string,
  pressedValue: string,
  description: string,
  basePalette: string,
  hoveredPalette: string,
  pressedPalette: string
) => ({
  [baseKey]: createToken(baseValue, description, basePalette),
  [`${baseKey}.hovered`]: createToken(
    hoveredValue,
    description,
    hoveredPalette
  ),
  [`${baseKey}.pressed`]: createToken(
    pressedValue,
    description,
    pressedPalette
  ),
});

const createCustomTokens = (
  baseKey: string,
  baseValue: string,
  hoveredValue: string,
  pressedValue: string,
  description: string
) => ({
  [baseKey]: createToken(baseValue, description, baseValue),
  [`${baseKey}.hovered`]: createToken(hoveredValue, description, hoveredValue),
  [`${baseKey}.pressed`]: createToken(pressedValue, description, pressedValue),
});

const generateSemanticTokens = (
  configs: SemanticConfig[]
): Record<string, TokenValue> => {
  return configs.reduce((tokens, config) => {
    const colorScale = palette[config.color] as ColorScale;

    if (config.baseValue) {
      // Handle special cases like transparent
      return {
        ...tokens,
        ...createSemanticStateTokens(
          config.key,
          config.baseValue,
          colorScale[config.hoveredScale],
          colorScale[config.pressedScale],
          config.description,
          config.baseValue,
          `${config.color}/${config.hoveredScale}`,
          `${config.color}/${config.pressedScale}`
        ),
      };
    }

    // Handle normal color scale tokens
    if (!config.baseScale) {
      throw new Error(`baseScale is required for config: ${config.key}`);
    }

    return {
      ...tokens,
      ...createSemanticStateTokens(
        config.key,
        colorScale[config.baseScale],
        colorScale[config.hoveredScale],
        colorScale[config.pressedScale],
        config.description,
        `${config.color}/${config.baseScale}`,
        `${config.color}/${config.hoveredScale}`,
        `${config.color}/${config.pressedScale}`
      ),
    };
  }, {});
};

// Configuration for semantic background tokens
const semanticConfigs: SemanticConfig[] = [
  {
    key: 'neutral',
    color: 'jetBlack',
    baseScale: '100',
    hoveredScale: '200',
    pressedScale: '300',
    description:
      'The default background for neutral elements, such as default buttons.',
  },
  {
    key: 'neutral.subtle',
    color: 'jetBlack',
    baseValue: 'transparent',
    hoveredScale: '100',
    pressedScale: '200',
    description:
      'Use for the background of elements that appear to have no background in a resting state, such as subtle buttons and menu items.',
  },
  {
    key: 'neutral.bold',
    color: 'grey',
    baseScale: '700',
    hoveredScale: '800',
    pressedScale: '900',
    description:
      'A vibrant background option for neutral UI elements, such as announcement banners.',
  },
  {
    key: 'selected',
    color: 'forestGreen',
    baseScale: '50',
    hoveredScale: '100',
    pressedScale: '200',
    description:
      'Use for the background of elements in a selected state, such as in opened dropdown buttons.',
  },
  {
    key: 'selected.bold',
    color: 'forestGreen',
    baseScale: '600',
    hoveredScale: '700',
    pressedScale: '800',
    description:
      'Use for the backgrounds of elements in a selected state, such as checkboxes and radio buttons.',
  },
  {
    key: 'brand.subtlest',
    color: 'forestGreen',
    baseScale: '50',
    hoveredScale: '100',
    pressedScale: '200',
    description:
      'Use for the background of elements used to reinforce our brand, but with less emphasis.',
  },
  {
    key: 'brand.bold',
    color: 'forestGreen',
    baseScale: '600',
    hoveredScale: '700',
    pressedScale: '800',
    description:
      'Use for the background of elements used to reinforce our brand, but with more emphasis.',
  },
  {
    key: 'brand.boldest',
    color: 'forestGreen',
    baseScale: '900',
    hoveredScale: '800',
    pressedScale: '700',
    description:
      'Use for the background of elements used to reinforce our brand, that need to stand out a lot.',
  },
  {
    key: 'danger',
    color: 'crimsonRed',
    baseScale: '50',
    hoveredScale: '100',
    pressedScale: '200',
    description:
      'Use for backgrounds communicating critical information, such in error section messages.',
  },
  {
    key: 'danger.bold',
    color: 'crimsonRed',
    baseScale: '600',
    hoveredScale: '600',
    pressedScale: '800',
    description:
      'A vibrant background option for communicating critical information, such as in danger buttons and error banners.',
  },
  {
    key: 'warning',
    color: 'orangePeel',
    baseScale: '50',
    hoveredScale: '100',
    pressedScale: '200',
    description:
      'Use for backgrounds communicating caution, such as in warning section messages.',
  },
  {
    key: 'warning.bold',
    color: 'orangePeel',
    baseScale: '200',
    hoveredScale: '300',
    pressedScale: '400',
    description:
      'A vibrant background option for communicating caution, such as in warning buttons and warning banners.',
  },
  {
    key: 'success',
    color: 'mossGreen',
    baseScale: '50',
    hoveredScale: '100',
    pressedScale: '200',
    description:
      'Use for backgrounds communicating a favorable outcome, such as in success section messages.',
  },
  {
    key: 'success.bold',
    color: 'mossGreen',
    baseScale: '200',
    hoveredScale: '300',
    pressedScale: '400',
    description:
      'A vibrant background option for communicating a favorable outcome, such as in checked toggles.',
  },
  {
    key: 'discovery',
    color: 'burntOrange',
    baseScale: '50',
    hoveredScale: '100',
    pressedScale: '200',
    description:
      'Use for backgrounds communicating change or something new, such as in discovery section messages.',
  },
  {
    key: 'discovery.bold',
    color: 'burntOrange',
    baseScale: '600',
    hoveredScale: '700',
    pressedScale: '800',
    description:
      'A vibrant background option communicating change or something new, such as in onboarding spotlights.',
  },
  {
    key: 'information',
    color: 'royalBlue',
    baseScale: '50',
    hoveredScale: '100',
    pressedScale: '200',
    description:
      'Use for backgrounds communicating information or something in-progress, such as in information section messages.',
  },
  {
    key: 'information.bold',
    color: 'royalBlue',
    baseScale: '600',
    hoveredScale: '700',
    pressedScale: '800',
    description:
      'A vibrant background option for communicating information or something in-progress.',
  },
];

const background = {
  ...getPaletteBackgroundTokens(),

  disabled: createToken(
    palette.jetBlack[50],
    'Use for backgrounds of elements in a disabled state.',
    'jetBlack/50'
  ),

  ...createSemanticStateTokens(
    'input',
    palette.extras.white,
    palette.grey[50],
    palette.extras.white,
    'Use for background of form UI elements, such as text fields, checkboxes, and radio buttons.',
    'extras/white',
    'grey/50',
    'extras/white'
  ),

  ...createCustomTokens(
    'inverse.subtle',
    '#00000029',
    '#0000003D',
    '#00000052',
    'Use for backgrounds of elements on a bold background, such as in the buttons on spotlight cards.'
  ),

  ...generateSemanticTokens(semanticConfigs),
};

export default background;
