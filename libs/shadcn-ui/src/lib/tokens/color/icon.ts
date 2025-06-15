import palette from "./palette";


const icon = {
  value: palette.grey[600],
  accent: {
    forestGreen: palette.forestGreen[500],
    burntOrange: palette.burntOrange[500],
    amberGold: palette.amberGold[500],
    mutedOlive: palette.mutedOlive[500],
    crimsonRed: palette.crimsonRed[500],
    orangePeel: palette.orangePeel[500],
    royalBlue: palette.royalBlue[500],
    mossGreen: palette.mossGreen[500],
    grey: palette.grey[500],
    jetBlack: palette.jetBlack[500],
    coffeeBrown: palette.coffeeBrown[500],
  },
  disabled: palette.jetBlack[500],
  inverse: palette.extras.white,
  selected: palette.forestGreen[600],
  brand: palette.forestGreen[600],
  danger: palette.crimsonRed[600],
  warning: {
    value: palette.orangePeel[500],
    inverse: palette.grey[300],
  },
  success: palette.mossGreen[500],
  discovery: palette.burntOrange[500],
  information: palette.royalBlue[500],
  subtlest: palette.jetBlack[100],
  subtle: palette.jetBlack[400],
};

export default icon
