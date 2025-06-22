import palette from "./palette";

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

type PaletteValue = {
  [key: string]: {
    value: string;
    description: string;
    palette: string;
  };
};

type TokenConfig = {
  suffix: string;
  baseScale: keyof ColorScale;
  hoveredScale: keyof ColorScale;
  pressedScale: keyof ColorScale;
  description: (key: string) => string;
};

type SemanticTokenConfig = {
  key: string;
  value: string;
  description: string;
  palette: string;
};

const createToken = (value: string, description: string, palette: string) => ({
  value,
  description,
  palette,
});

const createStateVariants = (
  baseKey: string,
  colorScale: ColorScale,
  config: TokenConfig,
  colorKey: string
): PaletteValue => ({
  [baseKey]: createToken(
    colorScale[config.baseScale],
    config.description(colorKey),
    `${colorKey}/${config.baseScale}`
  ),
  [`${baseKey}.hovered`]: createToken(
    colorScale[config.hoveredScale],
    config.description(colorKey),
    `${colorKey}/${config.hoveredScale}`
  ),
  [`${baseKey}.pressed`]: createToken(
    colorScale[config.pressedScale],
    config.description(colorKey),
    `${colorKey}/${config.pressedScale}`
  ),
});

const generateColorTokens = (
  colorKey: string,
  colorScale: ColorScale,
  configs: TokenConfig[]
): PaletteValue => {
  return configs.reduce((tokens, config) => {
    const baseKey = `accent.${colorKey}.${config.suffix}`;
    return {
      ...tokens,
      ...createStateVariants(baseKey, colorScale, config, colorKey),
    };
  }, {});
};

const isColorPalette = (key: string): boolean => key !== 'extras';

const generateSemanticTokens = (configs: SemanticTokenConfig[]): PaletteValue => {
  return configs.reduce((tokens, config) => ({
    ...tokens,
    [config.key]: createToken(config.value, config.description, config.palette),
  }), {});
};

const generatePaletteTokens = (
  configs: TokenConfig[],
  getDescription: (key: string) => string
): PaletteValue => {
  return Object.keys(palette)
    .filter(isColorPalette)
    .reduce((tokens, colorKey) => {
      const colorScale = palette[colorKey as keyof typeof palette] as ColorScale;
      return {
        ...tokens,
        ...generateColorTokens(colorKey, colorScale, configs),
      };
    }, {});
};

export const getPaletteTextTokens = (): PaletteValue => {
  const textConfigs: TokenConfig[] = [
    {
      suffix: '',
      baseScale: '700',
      hoveredScale: '700',
      pressedScale: '700',
      description: (key: string) => 
        `Use for ${key} text on subtlest and subtler ${key} accent backgrounds when there is no meaning tied to the color.`,
    },
    {
      suffix: 'bolder',
      baseScale: '800',
      hoveredScale: '800',
      pressedScale: '800',
      description: (key: string) => 
        `Use for ${key} text on subtle ${key} accent backgrounds when there is no meaning tied to the color.`,
    },
  ];

  return generatePaletteTokens(textConfigs, () => '');
};

export const getPaletteTokens = (getDescription: (key: string) => string): PaletteValue => {
  return Object.keys(palette)
    .filter(isColorPalette)
    .reduce((tokens, colorKey) => {
      const colorScale = palette[colorKey as keyof typeof palette] as ColorScale;
      return {
        ...tokens,
        [`accent.${colorKey}`]: createToken(
          colorScale[500],
          getDescription(colorKey),
          `${colorKey}/500`
        ),
      };
    }, {});
};

export const getPaletteBackgroundTokens = (): PaletteValue => {
  const backgroundConfigs: TokenConfig[] = [
    {
      suffix: 'subtlest',
      baseScale: '50',
      hoveredScale: '100',
      pressedScale: '200',
      description: (key: string) => 
        `${key}.subtlest: Use for for backgrounds when there is no meaning tied to the color. Reserved for when you only want a hint of color.`,
    },
    {
      suffix: 'subtler',
      baseScale: '100',
      hoveredScale: '200',
      pressedScale: '300',
      description: (key: string) => 
        `${key}.subtler: Use for for backgrounds when there is no meaning tied to the color, such as colored tags.`,
    },
    {
      suffix: 'subtle',
      baseScale: '300',
      hoveredScale: '200',
      pressedScale: '100',
      description: (key: string) => 
        `${key}.subtle: Use for for backgrounds when there is no meaning tied to the color, such as colored tags.`,
    },
    {
      suffix: 'bolder',
      baseScale: '600',
      hoveredScale: '700',
      pressedScale: '800',
      description: (key: string) => 
        `${key}.bolder: Use for for backgrounds when there is no meaning tied to the color, such as colored tags.`,
    },
  ];

  return generatePaletteTokens(backgroundConfigs, () => '');
};

export { createToken, generateSemanticTokens };
