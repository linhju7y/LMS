import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({});

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: <>{initialProps.styles}</>,
      };
    } finally {
    }
  }

  render() {
    return (
      <Html lang="vi">
        <Head>
          <title>MONA LMS V2</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />

          <meta name="robots" content="noindex" />
          <link
            rel="stylesheet"
            href="https://www.amcharts.com/lib/3/plugins/export/export.css"
            type="text/css"
            media="all"
          />

          <script src="https://www.amcharts.com/lib/3/plugins/export/export.min.js"></script>
          <script src="https://www.amcharts.com/lib/3/amcharts.js"></script>
          <script src="https://www.amcharts.com/lib/3/serial.js"></script>
          <script src="https://www.amcharts.com/lib/3/themes/light.js"></script>
          <script src="path/to/chartjs/dist/chart.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
