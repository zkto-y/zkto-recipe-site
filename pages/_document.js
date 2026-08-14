import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="A simple, homemade recipe blog." />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
