import Script from 'next/script'
import { ChakraProvider } from '@chakra-ui/react'

import '@fontsource/courgette/400.css'
import '@fontsource/la-belle-aurore/400.css'

import theme from 'theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <Script
        data-host="https://microanalytics.io"
        data-dnt="false"
        src="https://microanalytics.io/js/script.js"
        id="ZwSg9rf6GA"
        strategy="lazyOnload"
      />
    </ChakraProvider>
  )
}

export default MyApp
