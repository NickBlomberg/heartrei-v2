import {
  Flex,
  VStack,
  SimpleGrid,
  Heading,
  List,
  ListItem,
  Image,
  Icon,
} from '@chakra-ui/react'
import { FaFacebookSquare } from 'react-icons/fa'
import Link from './Link'

export default function Footer({ ...rest }) {
  const quickLinks = [
    { id: 1, label: 'Home', href: '/' },
    { id: 2, label: 'About', href: '/about' },
    { id: 3, label: 'Therapies', href: '/therapies' },
    { id: 4, label: 'Contact', href: '/contact' },
    { id: 5, label: 'Blog', href: '/blog' },
  ]

  return (
    <SimpleGrid
      columns={{ base: 1, md: 3 }}
      p={5}
      bg="gray.100"
      width="100vw"
      borderTop="2px"
      borderColor="gray.200"
      mt="auto"
      {...rest}
    >
      <FooterSection heading="Quick Links">
        <List spacing={4}>
          {quickLinks.map(({ id, label, href }) => (
            <ListItem key={id}>
              <Link href={href}>{label}</Link>
            </ListItem>
          ))}
        </List>
      </FooterSection>

      <FooterSection heading="Contact">
        <VStack spacing={6}>
          <Link href="mailto:heartrei.therapies@gmail.com">
            heartrei.therapies@gmail.com
          </Link>
          <Link href="tel:07927070285">07927 070 285</Link>
          <Link href="https://facebook.com/HeartReiTherapies/" isExternal>
            <Icon as={FaFacebookSquare} w={9} h={9} color="blue.600" />
          </Link>
        </VStack>
      </FooterSection>

      <FooterSection heading="Certifications">
        <Link href="https://www.fht.org.uk/users/blomberg208884" isExternal>
          <Image src="/images/FHT-logo.jpg" w={125} />
        </Link>
      </FooterSection>
    </SimpleGrid>
  )
}

const FooterSection = ({ children, heading }) => (
  <Flex direction="column" align="center" mb={10}>
    <Heading as="h4" size="md" mb={7}>
      {heading}
    </Heading>
    {children}
  </Flex>
)
