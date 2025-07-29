import { ComponentType } from 'react';
import { HeadingProps } from './types';
import { H1, H2, H3 } from './Headings';
import { HEADING_FONT_SIZES } from './constants';

export const getHeadingFontSizes = (Component: ComponentType<HeadingProps>) => {
  if (Component === H1) {
    return {
      desktop: HEADING_FONT_SIZES.h1.desktop,
      mobile: HEADING_FONT_SIZES.h1.mobile,
    };
  }

  if (Component === H2) {
    return {
      desktop: HEADING_FONT_SIZES.h2.desktop,
      mobile: HEADING_FONT_SIZES.h2.mobile,
    };
  }

  if (Component === H3) {
    return {
      desktop: HEADING_FONT_SIZES.h3.desktop,
      mobile: HEADING_FONT_SIZES.h3.mobile,
    };
  }

  return {
    desktop: HEADING_FONT_SIZES.h4.desktop,
    mobile: HEADING_FONT_SIZES.h4.mobile,
  };
};
