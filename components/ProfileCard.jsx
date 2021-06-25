import Image from 'next/image'
import { Box, Center, Flex, Heading, Text } from '@chakra-ui/react'

import profilePhoto from '../public/images/profile-photo.jpg'

export default function ProfileCard() {
  return (
    <Center>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align="center"
        maxW="3xl"
        p={5}
        border="1px"
        borderColor="gray.100"
        boxShadow="xl"
        rounded="lg"
        m={8}
      >
        <Box pr={4}>
          <Heading as="h2" size="lg" mb={4}>
            About Helen
          </Heading>
          <Text mb={4}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
            numquam vero id veniam error fugit dicta suscipit facere, minus
            laborum soluta? Cum, dolore itaque quisquam et tenetur eos id ipsa
            nesciunt, accusantium, illo molestias inventore ad exercitationem
            earum neque maiores officiis esse architecto! Veniam fugit eius
            consectetur? Corporis voluptatem sint voluptates deleniti fugiat
            ipsam soluta possimus asperiores! Nobis, deleniti animi.
          </Text>
          <Text variant="signature" fontSize="3xl">
            Helen
          </Text>
        </Box>
        <Image src={profilePhoto} alt="A potrait of Helen" placeholder="blur" />
      </Flex>
    </Center>
  )
}
