import { Container, Heading, Text } from '@chakra-ui/react'

import Layout from '@/components/Layout'
import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <Layout>
      <Container my={8}>
        <Heading as="h2" size="lg" mb={5}>
          Contact
        </Heading>
        <Text fontSize="lg">
          Are you interested in receiving one of our treatments? You can use
          this for to get in touch! Alternatively, you can reach us by phone,
          email and Facebook (details at the bottom of the page)
        </Text>
        <ContactForm mt={8} />
      </Container>
    </Layout>
  )
}
