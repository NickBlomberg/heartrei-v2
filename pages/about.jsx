import { Container, Heading } from '@chakra-ui/react'

import Layout from '@/components/Layout'

export default function AboutPage() {
  return (
    <Layout>
      <Container my={8}>
        <Heading as="h2" size="lg">
          About
        </Heading>
      </Container>
    </Layout>
  )
}
