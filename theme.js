import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  components: {
    Heading: {
      variants: {
        brand: {
          fontFamily: 'Courgette',
          color: 'gray.600',
        },
      },
    },
  },
})

export default theme
