import palette from "./palette";

const border = {
  value: palette.grey[200],
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
  disabled: palette.jetBlack[100],
  focused: palette.forestGreen[400],
  input: palette.grey[400],
  inverse: palette.extras.white,
  selected: palette.forestGreen[600],
  brand: palette.forestGreen[600],
  danger: palette.crimsonRed[500],
  warning: palette.orangePeel[500],
  success: palette.mossGreen[500],
  discovery: palette.burntOrange[500],
  information: palette.royalBlue[500],
  bold: palette.grey[500],
};

export default border
