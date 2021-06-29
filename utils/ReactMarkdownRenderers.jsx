import {
  Text,
  Heading,
  UnorderedList,
  OrderedList,
  Checkbox,
  ListItem,
  Table,
  Thead,
  Tbody,
  Th,
  Tr,
  Td,
} from '@chakra-ui/react'
import Link from '@/components/Link'

function getCoreProps(props) {
  return props['data-sourcepos']
    ? { 'data-sourcepos': props['data-sourcepos'] }
    : {}
}

export default function ReactMarkdownRenderers(markdown) {
  return {
    h1: ({ children }) => (
      <Heading as="h3" size="md" mb={5}>
        {children}
      </Heading>
    ),
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <Text as="em">{children}</Text>,
    p: ({ children }) => (
      <Text fontSize="xl" mb={7}>
        {children}
      </Text>
    ),
    a: ({ children, href }) => (
      <Link href={href} isExternal>
        {children}
      </Link>
    ),
    ul: (props) => {
      const { ordered, children, depth } = props
      const attrs = getCoreProps(props)
      let Element = UnorderedList
      let styleType = 'disc'
      if (ordered) {
        Element = OrderedList
        styleType = 'decimal'
      }
      if (depth === 1) styleType = 'circle'
      return (
        <Element
          spacing={2}
          as={ordered ? 'ol' : 'ul'}
          styleType={styleType}
          pl={4}
          {...attrs}
        >
          {children}
        </Element>
      )
    },
    ol: (props) => {
      const { ordered, children, depth } = props
      const attrs = getCoreProps(props)
      let Element = UnorderedList
      let styleType = 'disc'
      if (ordered) {
        Element = OrderedList
        styleType = 'decimal'
      }
      if (depth === 1) styleType = 'circle'
      return (
        <Element
          spacing={2}
          as={ordered ? 'ol' : 'ul'}
          styleType={styleType}
          pl={4}
          {...attrs}
        >
          {children}
        </Element>
      )
    },
    li: (props) => {
      const { children, checked } = props
      let checkbox = null
      if (checked !== null && checked !== undefined) {
        checkbox = (
          <Checkbox isChecked={checked} isReadOnly>
            {children}
          </Checkbox>
        )
      }
      return (
        <ListItem
          {...getCoreProps(props)}
          listStyleType={checked !== null ? 'none' : 'inherit'}
        >
          {checkbox || children}
        </ListItem>
      )
    },
    table: Table,
    thead: Thead,
    tbody: Tbody,
    tr: Tr,
    td: Td,
    th: Th,
  }
}
