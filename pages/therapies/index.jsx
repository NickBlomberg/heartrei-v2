import { Container, SimpleGrid, Heading } from '@chakra-ui/react'

import Layout from '@/components/Layout'
import TherapyCard from '@/components/TherapyCard'

import ContentfulTherapy from '@/contentful/Therapy'

export default function TherapiesPage({ therapies }) {
  return (
    <Layout title="HeartRei Therapies | Therapies">
      <Container my={8} maxW="container.lg">
        <Heading as="h2" size="lg" mb={5}>
          Therapies
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={5} justifyItems="center">
          {therapies.map((therapy) => (
            <TherapyCard {...therapy} key={therapy.sys.id} />
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const therapies = await ContentfulTherapy.getAll()
  return {
    props: { therapies },
  }
}
