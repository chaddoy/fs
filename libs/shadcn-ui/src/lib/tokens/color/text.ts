import palette from "./palette";

const text = {
  value: palette.extras.charcoal,
  white: palette.extras.white,
  offWhite: palette.extras.offWhite,
  charcoal: palette.extras.charcoal,
  accent: {
    forestGreen: {
      value: palette.forestGreen[700],
      bolder: palette.forestGreen[800],
    },
    burntOrange: {
      value: palette.burntOrange[700],
      bolder: palette.burntOrange[800],
    },
    amberGold: {
      value: palette.amberGold[700],
      bolder: palette.amberGold[800],
    },
    mutedOlive: {
      value: palette.mutedOlive[700],
      bolder: palette.mutedOlive[800],
    },
    crimsonRed: {
      value: palette.crimsonRed[700],
      bolder: palette.crimsonRed[800],
    },
    orangePeel: {
      value: palette.orangePeel[700],
      bolder: palette.orangePeel[800],
    },
    royalBlue: {
      value: palette.royalBlue[700],
      bolder: palette.royalBlue[800],
    },
    mossGreen: {
      value: palette.mossGreen[700],
      bolder: palette.mossGreen[800],
    },
    grey: {
      value: palette.grey[700],
      bolder: palette.grey[800],
    },
    jetBlack: {
      value: palette.jetBlack[700],
      bolder: palette.jetBlack[800],
    },
    coffeeBrown: {
      value: palette.coffeeBrown[700],
      bolder: palette.coffeeBrown[800],
    },
  },
  disabled: palette.jetBlack[300],
  inverse: palette.extras.white,
  selected: palette.forestGreen[600],
  brand: palette.forestGreen[600],
  danger: palette.crimsonRed[700],
  warning: {
    value: palette.orangePeel[700],
    inverse: palette.grey[900],
  },
  success: palette.mossGreen[800],
  discovery: palette.burntOrange[700],
  information: palette.royalBlue[700],
  subtlest: palette.jetBlack[100],
  subtle: palette.jetBlack[400],
};

export default text
