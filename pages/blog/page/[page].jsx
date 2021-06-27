import { Container, Heading } from '@chakra-ui/react'
import ContentfulBlogPost from '@/contentful/BlogPost'
import { Config } from 'utils/Config'

import Layout from '@/components/Layout'
import BlogPostList from '@/components/Blog/PostList'

export default function BlogIndexPage({
  postSummaries,
  totalPages,
  currentPage,
}) {
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

export async function getStaticPaths() {
  const totalPosts = await ContentfulBlogPost.getTotal()
  const totalPages = Math.ceil(totalPosts / Config.pagination.pageSize)

  const paths = []

  for (let page = 2; page <= totalPages; page += 1) {
    paths.push({ params: { page: page.toString() } })
  }

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const postSummaries = await ContentfulBlogPost.getPaginatedPostSummaries(
    params.page,
  )

  const totalPages = Math.ceil(postSummaries.total / Config.pagination.pageSize)

  return {
    props: {
      postSummaries: postSummaries.items,
      totalPages,
      currentPage: params.page,
    },
  }
}
