import { VStack, Text, Heading, Button } from '@chakra-ui/react'

import Link from './Link'

export default function TherapyCard({ title, slug, description }) {
  return (
    <VStack
      align="start"
      spacing={5}
      p={5}
      border="1px"
      borderColor="gray.100"
      boxShadow="xl"
      rounded="lg"
      minWidth="100%"
    >
      <Heading as="h3" size="md">
        {title}
      </Heading>
      <Text>{description}</Text>
      <Link href={`/therapies/${slug}`}>
        <Button colorScheme="green">View</Button>
      </Link>
    </VStack>
  )
}
