import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/assets/favicon.ico" />

          <meta name="author" content="Eduardo Fiorito"></meta>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="theme-color" content="#0060b1"></meta>
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="#0060b1"
          ></meta>

          {/* OpenGraph */}
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="pt_BR"></meta>
          <meta property="og:site_name" content="Kabum" />

          {/* Twitter */}
          <meta name="twitter:site" content="@kabumcombr"></meta>
          <meta name="twitter:card" content="summary" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
