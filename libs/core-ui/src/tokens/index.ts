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
  },
};

export const descriptiveTokens = {
  color,
};

export default tokens;
