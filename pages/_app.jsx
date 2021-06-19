import { ChakraProvider } from '@chakra-ui/react'

import '@fontsource/courgette/400.css'

import theme from 'theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
