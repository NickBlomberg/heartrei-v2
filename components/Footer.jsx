import {
  Flex,
  VStack,
  SimpleGrid,
  Heading,
  List,
  ListItem,
  Image,
  Icon,
  useBreakpointValue,
} from '@chakra-ui/react'

import { PhoneIcon, EmailIcon } from '@chakra-ui/icons'

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
      as="footer"
      columns={{ base: 1, md: 3 }}
      p={5}
      bg="gray.100"
      width="100vw"
      borderTop="2px"
      borderColor="gray.200"
      mt="auto"
      {...rest}
    >
      <FooterSection heading="Navigation">
        <List spacing={4}>
          {quickLinks.map(({ id, label, href }) => (
            <ListItem key={id}>
              <Link href={href}>{label}</Link>
            </ListItem>
          ))}
        </List>
      </FooterSection>

      <FooterSection heading="Certifications">
        <Link
          href="https://www.fht.org.uk/users/blomberg208884"
          isExternal
          aria-label="FHT Certification"
        >
          <Image
            src="/images/FHT-logo.png"
            htmlWidth="125px"
            htmlHeight="57px"
            alt="FHT certification logo"
          />
        </Link>
      </FooterSection>

      <FooterSection heading="Contact">
        <VStack
          spacing={4}
          align={useBreakpointValue({ base: 'center', md: 'end' })}
        >
          <Link href="mailto:heartrei.therapies@gmail.com">
            <EmailIcon mx={2} color="gray.300" />
            heartrei.therapies@gmail.com
          </Link>
          <Link href="tel:07927070285">
            <PhoneIcon mx={2} color="gray.300" />
            07927 070 285
          </Link>
          <Link
            href="https://facebook.com/HeartReiTherapies/"
            isExternal
            aria-label="Facebook"
          >
            <Icon as={FaFacebookSquare} w={9} h={9} color="blue.600" />
          </Link>
        </VStack>
      </FooterSection>
    </SimpleGrid>
  )
}

const FooterSection = ({ children, heading }) => (
  <Flex direction="column" align="center" mb={10}>
    <Heading as="h3" size="md" mb={7}>
      {heading}
    </Heading>
    {children}
  </Flex>
)
