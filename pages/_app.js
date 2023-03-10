import '../styles/globals.css'
import {MDXProvider} from '@mdx-js/react'
import "typeface-open-sans";
const components = {
}

export default function App({Component, pageProps}) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  )
}
