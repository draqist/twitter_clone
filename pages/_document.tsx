// pages/_document.js

import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import Theme from '../theme';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <link
          href="https://api.fontshare.com/v2/css?f[]=oswald@300,400,500,600&f[]=clash-display@200,400,700,500,600,300&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500&display=swap"
          rel="stylesheet"
        />
        <Head />
        <body>
          {/* 👇 Here's the script */}
          <ColorModeScript initialColorMode={Theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
