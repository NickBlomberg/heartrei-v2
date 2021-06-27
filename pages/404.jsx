import { useRouter } from 'next/router'
import { Flex, Heading, Text, Image, Button } from '@chakra-ui/react'
import Layout from '@/components/Layout'

export default function PageNotFound() {
  const router = useRouter()
  return (
    <Layout>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        height="100%"
        wrap="wrap"
        padding={10}
      >
        <Heading as="h2" size="lg">
          Not found!
        </Heading>
        <Text>We were unable to find that page...</Text>
        <Image
          src="/images/404_image.svg"
          alt="A woman riding a camel through the desert"
          width={{ base: '80%', md: '40%' }}
          mt={10}
        />
        <Button
          colorScheme="green"
          variant="outline"
          onClick={() => router.push('/')}
          mt={10}
        >
          Return home
        </Button>
      </Flex>
    </Layout>
  )
}
