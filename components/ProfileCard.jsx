import { Box, Center, Flex, Heading, Text, Image } from '@chakra-ui/react'
import Link from './Link'

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
            My name is Helen Blomberg, I live in Llanelli and have been
            practicing as a qualified Reiki Practitioner for a number of years.
            I currently offer Usui Reiki for adults under my own service,
            HeartRei Therapies. My background is in health care and counselling,
            having previously been employed by the NHS and{' '}
            <Link href="https://www.mariecurie.org.uk/" isExternal>
              Marie Curie.
            </Link>{' '}
            I am a member of the{' '}
            <Link href="https://www.fht.org.uk/users/blomberg208884" isExternal>
              Federation of Holistic Therapists
            </Link>
            , and abide by their ethical framework.
          </Text>
          <Text variant="signature" fontSize="3xl">
            Helen
          </Text>
        </Box>
        <Image
          src="/images/profile-photo.jpg"
          alt="A potrait of Helen"
          htmlWidth="308px"
          htmlHeight="399px"
        />
      </Flex>
    </Center>
  )
}
