import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Button,
} from '@chakra-ui/react'

import { EmailIcon, PhoneIcon } from '@chakra-ui/icons'

export default function ContactForm({ ...rest }) {
  return (
    <VStack spacing={5} {...rest}>
      <FormControl id="name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input placeholder="Name" />
      </FormControl>

      <FormControl id="email">
        <FormLabel>Email Address</FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <EmailIcon color="gray.300" />
          </InputLeftElement>
          <Input type="email" placeholder="Email" />
        </InputGroup>
      </FormControl>

      <FormControl id="phone">
        <FormLabel>Phone Number</FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <PhoneIcon color="gray.300" />
          </InputLeftElement>
          <Input type="phone" placeholder="Phone" />
        </InputGroup>
      </FormControl>

      <FormControl id="message" isRequired>
        <FormLabel>Message</FormLabel>
        <Textarea placeholder="How can we help you?" />
      </FormControl>

      <FormControl id="submit">
        <Button colorScheme="green">Submit</Button>
      </FormControl>
    </VStack>
  )
}
