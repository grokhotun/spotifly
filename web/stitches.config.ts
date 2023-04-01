import type * as Stitches from '@stitches/react';
import { createStitches } from '@stitches/react';
import {
  blue,
  red,
  green,
  blueDark,
  redDark,
  greenDark,
} from '@radix-ui/colors';

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  styled,
  theme,
} = createStitches({
  theme: {
    colors: {
      ...red,
      ...green,
      ...blue,

      success1: '$green1',
      success2: '$green2',

      warning1: '$yellow1',
      warning2: '$yellow2',

      danger1: '$red1',
      danger2: '$red2',
    },
    space: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '24px',
      5: '32px',
      6: '40px',
      7: '48px',
    },
    sizes: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '24px',
      5: '32px',
      6: '40px',
      7: '48px',
    },
    fontSizes: {
      1: '12px',
      2: '16px',
      3: '20px',
      4: '24px',
      5: '32px',
      6: '40px',
    },
    fonts: {
      system: 'system-ui',
    },
  },
  utils: {
    marginX: (value: Stitches.PropertyValue<'margin'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value: Stitches.PropertyValue<'margin'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingX: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
  media: {
    xs: '(max-width: 575px)',
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
    xxl: '(min-width: 1400px)',
  },
});

export const darkTheme = createTheme({
  colors: {
    ...redDark,
    ...greenDark,
    ...blueDark,
  },
});
