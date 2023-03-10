import { Html, Head, Main, NextScript } from 'next/document'
import { TypographyStyle } from "react-typography";
import typography from "../utils/typography";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <TypographyStyle typography={typography} />
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
