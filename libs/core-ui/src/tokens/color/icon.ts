import palette from "./palette";


const icon = {
  value: {
    light: {
      value: palette.grey[600],
      palette: 'grey/600',
    },
    dark: {
      value: palette.grey[600],
      palette: 'grey/600',
    },
    description: 'Use for icon-only buttons, or icons paired with color.text',
  },
  'accent.forestGreen': {
    light: {
      value: palette.forestGreen[500],
      palette: 'forestGreen/500',
    },
    dark: {
      value: palette.forestGreen[500],
      palette: 'forestGreen/500',
    },
    description:
      'Use for forestGreen icons on non-bold backgrounds when there is no meaning tied to the color, such as file type icons.',
  },
  'accent.burntOrange': {
    light: {
      value: palette.burntOrange[500],
      palette: 'burntOrange/500',
    },
    dark: {
      value: palette.burntOrange[500],
      palette: 'burntOrange/500',
    },
    description:
      'Use for burntOrange icons on non-bold backgrounds when there is no meaning tied to the color, such as file type icons.',
  },
  'accent.amberGold': {
    light: {
      value: palette.amberGold[500],
      palette: 'amberGold/500',
    },
    dark: {
      value: palette.amberGold[500],
      palette: 'amberGold/500',
    },
    description:
      'Use for amberGold icons on non-bold backgrounds when there is no meaning tied to the color, such as file type icons.',
  },
  'accent.mutedOlive': {
    light: {
      value: palette.mutedOlive[500],
      palette: 'mutedOlive/500',
    },
    dark: {
      value: palette.mutedOlive[500],
      palette: 'mutedOlive/500',
    },
    description:
      'Use for mutedOlive icons on non-bold backgrounds when there is no meaning tied to the color, such as file type icons.',
  },
  'accent.crimsonRed': {
    light: {
      value: palette.crimsonRed[500],
      palette: 'crimsonRed/500',
    },
    dark: {
      value: palette.crimsonRed[500],
      palette: 'crimsonRed/500',
    },
    description:
      'Use for crimsonRed icons on non-bold backgrounds when there is no meaning tied to the color, such as file type icons.',
  },
  'accent.orangePeel': {
    light: {
      value: palette.orangePeel[500],
      palette: 'orangePeel/500',
    },
    dark: {
      value: palette.orangePeel[500],
      palette: 'orangePeel/500',
    },
    description:
      'Use for orangePeel icons on non-bold backgrounds when there is no meaning tied to the color, such as file type icons.',
  },
  'accent.royalBlue': {
    light: {
      value: palette.royalBlue[500],
      palette: 'royalBlue/500',
    },
    dark: {
      value: palette.royalBlue[500],
      palette: 'royalBlue/500',
    },
    description:
      'Use for royalBlue icons on non-bold backgrounds when there is no meaning tied to the color, such as file type icons.',
  },
  'accent.mossGreen': {
    light: {
      value: palette.mossGreen[500],
      palette: 'mossGreen/500',
    },
    dark: {
      value: palette.mossGreen[500],
      palette: 'mossGreen/500',
    },
    description:
      'Use for mossGreen icons on non-bold backgrounds when there is no meaning tied to the color, such as file type icons.',
  },
  'accent.grey': {
    light: {
      value: palette.grey[500],
      palette: 'grey/500',
    },
    dark: {
      value: palette.grey[500],
      palette: 'grey/500',
    },
    description:
      'Use for grey icons on non-bold backgrounds when there is no meaning tied to the color, such as file type icons.',
  },
  'accent.jetBlack': {
    light: {
      value: palette.jetBlack[500],
      palette: 'jetBlack/500',
    },
    dark: {
      value: palette.jetBlack[500],
      palette: 'jetBlack/500',
    },
    description:
      'Use for jetBlack icons on non-bold backgrounds when there is no meaning tied to the color, such as file type icons.',
  },
  'accent.coffeeBrown': {
    light: {
      value: palette.coffeeBrown[500],
      palette: 'coffeeBrown/500',
    },
    dark: {
      value: palette.coffeeBrown[500],
      palette: 'coffeeBrown/500',
    },
    description:
      'Use for coffeeBrown icons on non-bold backgrounds when there is no meaning tied to the color, such as file type icons.',
  },
  disabled: {
    light: {
      value: palette.grey[300],
      palette: 'grey/300',
    },
    dark: {
      value: palette.grey[300],
      palette: 'grey/300',
    },
    description: 'Use for icons in a disabled state.',
  },
  inverse: {
    light: {
      value: palette.extras.white,
      palette: 'extras/white',
    },
    dark: {
      value: palette.extras.white,
      palette: 'extras/white',
    },
    description: 'Use for icons on bold backgrounds.',
  },
  selected: {
    light: {
      value: palette.forestGreen[600],
      palette: 'forestGreen/600',
    },
    dark: {
      value: palette.forestGreen[600],
      palette: 'forestGreen/600',
    },
    description:
      'Use for icons in selected or opened states, such as those used in dropdown buttons.',
  },
  brand: {
    light: {
      value: palette.forestGreen[600],
      palette: 'forestGreen/600',
    },
    dark: {
      value: palette.forestGreen[600],
      palette: 'forestGreen/600',
    },
    description: 'Use for icons that reinforce our brand.',
  },
  danger: {
    light: {
      value: palette.crimsonRed[600],
      palette: 'crimsonRed/600',
    },
    dark: {
      value: palette.crimsonRed[600],
      palette: 'crimsonRed/600',
    },
    description:
      'Use for icons communicating critical information, such as those used in error handing.',
  },
  warning: {
    light: {
      value: palette.orangePeel[500],
      palette: 'orangePeel/500',
    },
    dark: {
      value: palette.orangePeel[500],
      palette: 'orangePeel/500',
    },
    description:
      'Use for icons communicating caution, such as those used in warning section messages.',
  },
  'warning.inverse': {
    light: {
      value: palette.grey[300],
      palette: 'grey/300',
    },
    dark: {
      value: palette.grey[300],
      palette: 'grey/300',
    },
    description: 'Use for icons when on bold warning backgrounds.',
  },
  success: {
    light: {
      value: palette.mossGreen[500],
      palette: 'mossGreen/500',
    },
    dark: {
      value: palette.mossGreen[500],
      palette: 'mossGreen/500',
    },
    description:
      'Use for icons communicating a favorable outcome, such as those used in success section messaged.',
  },
  discovery: {
    light: {
      value: palette.burntOrange[500],
      palette: 'burntOrange/500',
    },
    dark: {
      value: palette.burntOrange[500],
      palette: 'burntOrange/500',
    },
    description:
      'Use for icons communicating change or something new, such as discovery section messages.',
  },
  information: {
    light: {
      value: palette.royalBlue[500],
      palette: 'royalBlue/500',
    },
    dark: {
      value: palette.royalBlue[500],
      palette: 'royalBlue/500',
    },
    description:
      'Use for icons communicating information or something in-progress, such as information section messages.',
  },
  subtlest: {
    light: {
      value: palette.jetBlack[400],
      palette: 'jetBlack/100',
    },
    dark: {
      value: palette.jetBlack[100],
      palette: 'jetBlack/100',
    },
    description: 'Use for icons paired with color.text.subtlest.',
  },
  subtle: {
    light: {
      value: palette.jetBlack[500],
      palette: 'jetBlack/500',
    },
    dark: {
      value: palette.jetBlack[400],
      palette: 'jetBlack/400',
    },
    description: 'Use for icons paired with color.text.subtle',
  },
};

export default icon
