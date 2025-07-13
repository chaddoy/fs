import color from './color';
import { extractValues } from './color/utils';

const tokens = {
  colors: {
    light: {
      text: extractValues(color.light.text),
      background: extractValues(color.light.background),
      border: extractValues(color.light.border),
      icon: extractValues(color.light.icon),
      link: extractValues(color.light.link),
      interaction: extractValues(color.light.interaction),
      skeleton: extractValues(color.light.skeleton),
      blanket: extractValues(color.light.blanket),
    },
    palette: color.palette,
  },
  fontFamily: {
    brand: ['Montserrat', 'sans-serif'],
    tagline: ['Barlow Condensed', 'sans-serif'],
    navigation: ['Montserrat', 'sans-serif'],
    eyebrow: ['Barlow Condensed', 'sans-serif'],
    headings: ['Montserrat', 'sans-serif'],
    body: ['Inter', 'sans-serif'],
  },
};

export const descriptiveTokens = {
  color,
};

export default tokens;
