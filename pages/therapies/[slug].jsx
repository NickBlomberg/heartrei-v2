import { Container, Heading, Text } from '@chakra-ui/react'

import Layout from '@/components/Layout'
import ContentfulTherapy from '@/contentful/Therapy'

export default function Therapy({ therapy }) {
  return (
    <Layout>
      <Container my={8} maxW="container.lg">
        <Heading as="h2" size="lg" mb={5}>
          {therapy.title}
        </Heading>
        <Text>{therapy.description}</Text>
      </Container>
    </Layout>
  )
}

export async function getStaticPaths() {
  const therapySlugs = await ContentfulTherapy.getAllSlugs()

  const paths = therapySlugs.map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }) {
  const therapy = await ContentfulTherapy.getBySlug(params.slug)

  if (!therapy) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      therapy,
    },
  }
}
