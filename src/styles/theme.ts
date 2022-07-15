export default {
  colors: {
    primary100: '#80b0d8',
    primary200: '#1a70b9',
    primary300: '#0070CC',
    primary: '#0060B1',
    primary500: '#005AA3',
    primary600: '#004F8F',
    primary700: '#00437A',
    secondary300: '#FF781F',
    secondary: '#FF6500',
    secondary500: '#F56200',
    secondary600: '#F56200',
    secondary700: '#F56200',
    white: '#fff',
    black: '#000',
    gray100: '#FAFAFB',
    gray200: '#F2F3F4',
    gray600: '#7F858D',
    gray700: '#565C69',
    gray800: '#42464D',
    avatar: '#347bbe',
    overlay: 'rgba(0, 0, 0, 0.8)',
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
      semiBold: 600,
      bold: 700,
      extraBold: 800,
    },
  },
  spacings: {
    none: '0', //0px
    xxxs: '0.125rem', //2px
    xxs: '0.25rem', //4px
    xs: '0.5rem', //8px
    lg: '0.75rem', //12px
    xl: '0.875rem', //14px
    xlarge: '1rem', //16px
    xxlarge: '1.25rem', //20px
    xxxlarge: '1.5rem', //24px
    xxxxlarge: '2rem', //32px
  },
  breakpoints: {
    sm: '36rem', //576px
    md: '48rem', //768x
    lg: '62rem', //992px
    xl: '75rem', //1200px
    xxl: '162.5rem', //1400px
    cm1: '64rem', //1024px
  },
} as const;
