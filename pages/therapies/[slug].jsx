import { Container, Heading, Text } from '@chakra-ui/react'
import Layout from '@/components/Layout'
import ContentfulTherapy from '@/contentful/Therapy'
import ReactMarkdown from 'react-markdown'
import ReactMarkdownRenderers from '@/utils/ReactMarkdownRenderers'
import gfm from 'remark-gfm'

export default function Therapy({ therapy }) {
  return (
    <Layout title={`HeartRei Therapies | ${therapy.title}`}>
      <Container my={8} maxW="container.lg">
        <Heading as="h2" size="lg" mb={5}>
          {therapy.title}
        </Heading>

        <ReactMarkdown
          components={ReactMarkdownRenderers(therapy.description)}
          remarkPlugins={[gfm]}
        >
          {therapy.description}
        </ReactMarkdown>
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
