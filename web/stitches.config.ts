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

export const normalizeCss = globalCss({
  ':where(html)': { lineHeight: 1.15 },
  ':where(body)': { margin: '0' },
  ':where(h1)': {
    fontSize: '2em',
    marginBlockEnd: '0.67em',
    marginBlockStart: '0.67em',
  },
  ':where(dl, ol, ul) :where(dl, ol, ul)': {
    marginBlockEnd: '0',
    marginBlockStart: '0',
  },
  ':where(hr)': { boxSizing: 'content-box', color: 'inherit', height: '0' },
  ':where(pre)': { fontFamily: 'monospace, monospace', fontSize: '1em' },
  ':where(abbr[title])': {
    textDecoration: 'underline',
  },
  ':where(b, strong)': { fontWeight: 'bolder' },
  ':where(code, kbd, samp)': {
    fontFamily: 'monospace, monospace',
    fontSize: '1em',
  },
  ':where(small)': { fontSize: '80%' },
  ':where(table)': { borderColor: 'currentColor', textIndent: '0' },
  ':where(button, input, select)': { margin: '0' },
  ':where(button)': { textTransform: 'none' },
  ':where(button, input:is([type="button" i], [type="reset" i], [type="submit" i]))':
    {
      WebkitAppearance: 'button',
    },
  ':where(progress)': { verticalAlign: 'baseline' },
  ':where(select)': { textTransform: 'none' },
  ':where(textarea)': { margin: '0' },
  ':where(input[type="search" i])': {
    WebkitAppearance: 'textfield',
    outlineOffset: '-2px',
  },
  '::-webkit-inner-spin-button, ::-webkit-outer-spin-button': {
    height: 'auto',
  },
  '::-webkit-input-placeholder': { color: 'inherit', opacity: 0.54 },
  '::-webkit-search-decoration': { WebkitAppearance: 'none' },
  '::-webkit-file-upload-button': {
    WebkitAppearance: 'button',
    font: 'inherit',
  },
  ':where(button, input:is([type="button" i], [type="color" i], [type="reset" i], [type="submit" i]))::-moz-focus-inner':
    {
      borderStyle: 'none',
      padding: '0',
    },
  ':where(button, input:is([type="button" i], [type="color" i], [type="reset" i], [type="submit" i]))::-moz-focusring':
    {
      outline: '1px dotted ButtonText',
    },
  ':where(:-moz-ui-invalid)': { boxShadow: 'none' },
  ':where(dialog)': {
    backgroundColor: 'white',
    border: 'solid',
    color: 'black',
    height: 'fit-content',
    left: '0',
    margin: 'auto',
    padding: '1em',
    position: 'absolute',
    right: '0',
    width: 'fit-content',
  },
  ':where(dialog:not([open]))': { display: 'none' },
  ':where(summary)': { display: 'list-item' },
});

export const globalStyles = globalCss({
  html: {
    height: '100vh',
  },
  body: {
    height: '100vh',
  },
  '#__next': {
    height: '100%',
  },
});
