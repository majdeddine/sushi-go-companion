import { rgba, darken, lighten } from 'polished';
import colors from './colors';

const Theme = {
  palette: {
    primary: {
      light: lighten(0.25, colors.black),
      main: colors.black,
      dark: darken(0.25, colors.black),
    },
    secondary: {
      light: lighten(0.25, colors.lightBlue),
      main: colors.lightBlue,
      dark: darken(0.25, colors.lightBlue),
    },
    error: {
      light: lighten(0.25, colors.red),
      main: colors.red,
      dark: darken(0.25, colors.red),
    },
    success: colors.green,
    warning: colors.amber,
    danger: colors.red,
    snow: colors.snow,
    white: colors.white,
    black: colors.black,
    grey: {
      medium: colors.grey.medium,
      dark: colors.grey.dark,
    },
    lightBlue: colors.lightBlue,
    text: {
      dark: colors.text.dark,
      light: colors.text.light,
    },
  },
  boxShadow: {
    app: `0 0 30px ${rgba(colors.black, 0.125)}`,
    small: `0 0 15px 1px ${rgba(colors.black, 0.1)}`,
  },
  transition: {
    fast: '0.3s all ease-in-out 0.1s',
  },
  radius: {
    small: '6px',
    medium: '12px',
    large: '24px',
  },
  font: {
    light: colors.white,
    dark: colors.black,
  },
  typography: {
    useNextVariants: true,
  },
};

export { Theme };
