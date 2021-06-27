import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react'
import { CalendarIcon } from '@chakra-ui/icons'
import Layout from '@/components/Layout'
import ContentfulBlogPost from '@/contentful/BlogPost'

export default function Post({ post }) {
  return (
    <Layout>
      <Container my={8} maxW="container.lg">
        <Heading as="h2" size="lg" mb={5}>
          {post.title}
        </Heading>
        <Box px={{ base: 3, md: 16 }}>
          <Flex direction="row" align="center" mb={2}>
            <CalendarIcon color="gray.400" mr={2} />
            <Text>
              {new Date(post.date).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </Text>
          </Flex>

          <Text fontSize="xl">{post.content}</Text>
        </Box>
      </Container>
    </Layout>
  )
}

export async function getStaticPaths() {
  const blogSlugs = await ContentfulBlogPost.getAllSlugs()

  const paths = blogSlugs.map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const post = await ContentfulBlogPost.getBySlug(params.slug)

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
    },
  }
}
