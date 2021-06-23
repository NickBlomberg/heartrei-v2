import { Container, Heading } from '@chakra-ui/react'

import Layout from '@/components/Layout'

export default function BlogPage() {
  return (
    <Layout>
      <Container my={8}>
        <Heading as="h2" size="lg">
          Blog
        </Heading>
      </Container>
    </Layout>
  )
}
