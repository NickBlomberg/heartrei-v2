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
    Text: {
      variants: {
        signature: {
          fontFamily: 'La Belle Aurore',
          fontWeight: '500',
        },
      },
    },
  },
})

export default theme
