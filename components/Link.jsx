import { Link as ChakraLink } from '@chakra-ui/react'
import NextLink from 'next/link'

export default function Link({ children, href, ...rest }) {
  return (
    <NextLink href={href} passHref>
      <ChakraLink {...rest}>{children}</ChakraLink>
    </NextLink>
  )
}
