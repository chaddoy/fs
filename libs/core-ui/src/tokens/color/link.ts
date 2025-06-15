import palette from "./palette";

const link = {
  value: {
    light: {
      value: palette.forestGreen[600],
      palette: 'forestGreen/600',
    },
    dark: {
      value: palette.forestGreen[600],
      palette: 'forestGreen/600',
    },
    description:
      'Use for links in a default or hovered state. Add an underline for hovered states.',
  },
  pressed: {
    light: {
      value: palette.forestGreen[700],
      palette: 'forestGreen/700',
    },
    dark: {
      value: palette.forestGreen[700],
      palette: 'forestGreen/700',
    },
    description:
      'Use for links in a default or hovered state. Add an underline for hovered states.',
  },
  visited: {
    light: {
      value: palette.mossGreen[700],
      palette: 'mossGreen/700',
    },
    dark: {
      value: palette.mossGreen[700],
      palette: 'mossGreen/700',
    },
    description: 'Use for visited links.',
  },
  'visited.pressed': {
    light: {
      value: palette.mossGreen[800],
      palette: 'mossGreen/800',
    },
    dark: {
      value: palette.mossGreen[800],
      palette: 'mossGreen/800',
    },
    description: 'Use for visited links.',
  },
};

export default link
