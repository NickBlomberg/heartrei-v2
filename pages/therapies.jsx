import { Container, Heading } from '@chakra-ui/react'

import Layout from '@/components/Layout'

export default function TherapiesPage() {
  return (
    <Layout>
      <Container my={8}>
        <Heading as="h2" size="lg">
          Therapies
        </Heading>
      </Container>
    </Layout>
  )
}
