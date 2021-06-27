import { Box, Flex, Button } from '@chakra-ui/react'
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import Link from '../Link'

export default function Pagination({
  currentPage,
  prevDisabled,
  nextDisabled,
}) {
  const prevPageUrl =
    currentPage === '2'
      ? '/blog'
      : `/blog/page/${parseInt(currentPage, 10) - 1}`

  const nextPageUrl = `/blog/page/${parseInt(currentPage, 10) + 1}`
  return (
    <Flex
      as="nav"
      direction="row"
      mt={5}
      align="center"
      justify="center"
      justifyContent="space-between"
    >
      <Box>
        {!prevDisabled && (
          <Link href={prevPageUrl}>
            <Button leftIcon={<ArrowBackIcon />}>Previous</Button>
          </Link>
        )}
      </Box>

      <Box>
        {!nextDisabled && (
          <Link href={nextPageUrl}>
            <Button rightIcon={<ArrowForwardIcon />}>Next</Button>
          </Link>
        )}
      </Box>
    </Flex>
  )
}
