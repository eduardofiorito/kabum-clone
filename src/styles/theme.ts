import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    primary: '#0060B1',
    secondary: '#FF6500',
    white: '#fff',
    gray100: '#FAFAFB',
    gray200: '#F2F3F4',
    gray600: '#7F858D',
    gray700: '#565C69',
    gray800: '#42464D',
  },
  font: {
    family:
      "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    sizes: {
      xs: '0.75rem', //12px
      sm: '0.875rem', //14px
      base: '1rem', //16px
      lg: '1.125rem', //18px
      xl: '1.25rem', //20px
      xxl: '1.5rem', //24px
      xxxl: '1.875rem', //30px
      xxxxl: '2rem', //32px
      xxxxxl: '2.25rem', //36px
    },
    weight: {
      regular: 400,
      bold: 700,
      extraBold: 800,
    },
  },
  spacings: {
    none: '0.125rem',
    xxs: '0.25rem',
    xs: '0.5rem',
    lg: '0.75rem',
    xl: '0.875rem',
    xlarge: '1rem',
    xxlarge: '1.25rem',
    xxxlarge: '1.5rem',
  },
};
