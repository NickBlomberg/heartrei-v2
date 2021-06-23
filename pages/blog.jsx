import { Container, Heading, Text } from '@chakra-ui/react'

import Layout from '@/components/Layout'

export default function BlogPage() {
  return (
    <Layout>
      <Container my={8}>
        <Heading as="h2" size="lg" mb={5}>
          Blog
        </Heading>
        <Text>No blogs posts yet, check back soon!</Text>
      </Container>
    </Layout>
  )
}
