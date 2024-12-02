import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Header } from '../components/Header/Header';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Header />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
