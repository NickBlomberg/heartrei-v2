import Image from 'next/image'
import {
  Box,
  Flex,
  Stack,
  Heading,
  useDisclosure,
  useBreakpointValue,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

import Link from './Link'

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const handleToggle = () => (isOpen ? onClose() : onOpen())

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={3}
      bg="gray.100"
      color="gray.700"
      borderBottom="2px"
      borderColor="gray.200"
    >
      <Link href="/">
        <Flex align="center">
          <Image
            src="/images/heartrei-logo.png"
            alt="HeartRei Therapies Logo"
            height="60px"
            width="60px"
          />
          <Heading
            as="h1"
            size={useBreakpointValue({ base: 'md', md: 'lg' })}
            variant="brand"
            ml={3}
          >
            HeartRei Therapies
          </Heading>
        </Flex>
      </Link>

      <Box display={{ base: 'block', md: 'none' }} onClick={handleToggle}>
        <HamburgerIcon />
      </Box>

      <Stack
        direction={{ base: 'column', md: 'row' }}
        display={{ base: isOpen ? 'flex' : 'none', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
        spacing={{ base: 10, md: 7 }}
        mt={{ base: 8, md: 0 }}
        mr={{ base: 0, md: 5 }}
      >
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/therapies">Therapies</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/blog">Blog</Link>
      </Stack>
    </Flex>
  )
}
