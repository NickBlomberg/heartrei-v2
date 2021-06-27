import Link from 'next/link'
import {
  Flex,
  Stack,
  VStack,
  Text,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react'

import { ChatIcon, ArrowForwardIcon } from '@chakra-ui/icons'

export default function Showcase() {
  return (
    <Flex
      w="full"
      h="75vh"
      backgroundImage="/images/sunflower-showcase.jpg"
      backgroundSize="cover"
      backgroundPosition="center center"
    >
      <VStack
        w="full"
        justify="center"
        px={useBreakpointValue({ base: 6, md: 8 })}
        bgGradient="linear(to-r, blackAlpha.700, transparent)"
      >
        <Stack maxW="3xl" align="center" spacing={{ base: 10, md: 5 }}>
          <Text
            color="white"
            fontWeight={700}
            fontSize={useBreakpointValue({ base: '3xl', md: '5xl' })}
          >
            Welcome to HeartRei
          </Text>

          <Stack direction={{ base: 'column', md: 'row' }} spacing={5}>
            <Link href="/therapies" passHref>
              <Button colorScheme="green" rightIcon={<ArrowForwardIcon />}>
                View Therapies
              </Button>
            </Link>
            <Link href="/contact" passHref>
              <Button colorScheme="gray" rightIcon={<ChatIcon />}>
                Contact
              </Button>
            </Link>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  )
}
