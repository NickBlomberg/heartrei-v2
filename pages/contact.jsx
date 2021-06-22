import { Container, Heading, Text } from '@chakra-ui/react'

import Layout from '@/components/Layout'
import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <Layout>
      <Container my={8}>
        <Heading as="h2" size="lg">
          Contact
        </Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In fugit
          facilis, non alias atque possimus.
        </Text>
        <ContactForm mt={8} />
      </Container>
    </Layout>
  )
}
