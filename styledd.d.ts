import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      white: string;
      gray100: string;
      gray200: string;
      gray600: string;
      gray700: string;
      gray800: string;
    };
    font: {
      family: string;
      weight: {
        regular: number;
        bold: number;
        extraBold: number;
      };
      sizes: {
        xs: string;
        sm: string;
        base: string;
        lg: string;
        xl: string;
        xxl: string;
        xxxl: string;
        xxxxl: string;
        xxxxxl: string;
      };
    };
    spacings: {
      none: string;
      xxs: string;
      xs: string;
      lg: string;
      xl: string;
      xlarge: string;
      xxlarge: string;
      xxxlarge: string;
    };
  }
}
