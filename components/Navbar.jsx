import Link from 'next/link'
import Image from 'next/image'
import { Flex, Heading } from '@chakra-ui/react'

export default function Navbar() {
  return (
    <Flex
      as="nav"
      align="center"
      padding={5}
      bg="gray.100"
      color="gray.700"
      borderBottom="2px"
      borderColor="gray.200"
    >
      <Link href="/">
        <a>
          <Flex align="center">
            <Image
              src="/images/heartrei-logo.png"
              alt="HeartRei Therapies Logo"
              height="60px"
              width="60px"
            />
            <Heading as="h1" size="lg" variant="brand" ml={3}>
              HeartRei Therapies
            </Heading>
          </Flex>
        </a>
      </Link>
    </Flex>
  )
}
