import { SimpleGrid, Flex, Heading, Text, Button } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import formatDate from '@/utils/Date'
import Link from '../Link'
import Pagination from './Pagination'

export default function BlogPostList({ posts, currentPage, totalPages }) {
  const nextDisabled = parseInt(currentPage, 10) === parseInt(totalPages, 10)
  const prevDisabled = parseInt(currentPage, 10) === 1

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
        {posts.map((post) => (
          <Flex
            as="article"
            key={post.sys.id}
            direction="column"
            p={5}
            border="1px"
            borderColor="gray.200"
            boxShadow="xl"
            rounded="lg"
          >
            <Link href={`/blog/${post.slug}`}>
              <Heading as="h3" size="md" pb={4}>
                {post.title}
              </Heading>
            </Link>
            <Text pb={8}>Posted on {formatDate(post.date)}</Text>
            <Text flexGrow="1" pb={5}>
              {post.excerpt}
            </Text>

            <Link href={`/blog/${post.slug}`}>
              <Button colorScheme="green">
                Read more <ArrowForwardIcon ml={2} />
              </Button>
            </Link>
          </Flex>
        ))}
      </SimpleGrid>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        nextDisabled={nextDisabled}
        prevDisabled={prevDisabled}
      />
    </>
  )
}
