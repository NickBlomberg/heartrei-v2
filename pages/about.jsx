import Image from 'next/image'

import { Box, Container, VStack, Heading, Text } from '@chakra-ui/react'

import Layout from '@/components/Layout'

export default function AboutPage() {
  return (
    <Layout>
      <Container my={8} maxW="container.lg">
        <Heading as="h2" size="lg" mb={5}>
          About
        </Heading>
        <VStack spacing={10}>
          <Text fontSize="xl">
            Here at HeartRei Therapies we are happy to provide Reiki from the
            beautiful setting of Yoga House in Llanelli. Sessions are tailored
            to suit your individual needs, providing support and assistance to
            those living across Carmarthenshire. Our aim is to continue to grow
            as a Beacon of Excellence in the field of supported healing at a
            time when existing services are stretched beyond capacity.
          </Text>
          <Text fontSize="xl">
            Thank you for visiting our site, please contact for further
            information or to book for an Introductory Assessment.
          </Text>
        </VStack>
      </Container>
    </Layout>
  )
}
