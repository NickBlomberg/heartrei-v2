import { Container, Heading } from '@chakra-ui/react'
import BlogPost from '@/contentful/BlogPost'
import Layout from '@/components/Layout'
import BlogPostList from '@/components/Blog/PostList'
import { Config } from 'utils/Config'

export default function BlogPage({ postSummaries, totalPages, currentPage }) {
  return (
    <Layout>
      <Container my={8} maxW="container.lg">
        <Heading as="h2" size="lg" mb={5}>
          Blog
        </Heading>
        <BlogPostList
          posts={postSummaries}
          totalPages={totalPages}
          currentPage={currentPage}
        />
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const postSummaries = await BlogPost.getPaginatedPostSummaries(1)
  const totalPages = Math.ceil(postSummaries.total / Config.pagination.pageSize)

  return {
    props: {
      postSummaries: postSummaries.items,
      totalPages,
      currentPage: '1',
    },
  }
}
