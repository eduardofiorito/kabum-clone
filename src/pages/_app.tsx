import { SkipNavigation } from 'components/SkipNavigation';
import { CartProvider } from 'context/CartContext';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/global';
import theme from 'styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CartProvider>
          <SkipNavigation />
          <GlobalStyle />
          <Component {...pageProps} />
        </CartProvider>
      </ThemeProvider>
    </>
  );
}
