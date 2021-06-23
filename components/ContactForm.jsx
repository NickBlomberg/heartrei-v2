import { VStack } from '@chakra-ui/react'

import { Formik, Form } from 'formik'
import { InputControl, TextareaControl, SubmitButton } from 'formik-chakra-ui'

import * as yup from 'yup'

export default function ContactForm({ ...rest }) {
  const sendEmail = async (data, actions) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        actions.setSubmitting(false)
        actions.resetForm()
        console.log('Message sent!!')
      }
    } catch (error) {
      actions.setSubmitting(false)
      console.error(error)
    }
  }
  return (
    <Formik
      initialValues={{ name: '', email: '', phone: '', message: '' }}
      validationSchema={yup.object().shape(
        {
          name: yup.string().required('Please enter your name'),
          email: yup
            .string()
            .email()
            .when('phone', {
              is: (phone) => !phone || phone.length === 0,
              then: yup
                .string()
                .email()
                .required('Please provide an email address or phone number'),
              otherwise: yup.string(),
            }),
          phone: yup.string().when('email', {
            is: (email) => !email || email.length === 0,
            then: yup
              .string()
              .required('Please provide a phone number or an email address'),
            otherwise: yup.string(),
          }),
          message: yup.string().required('Please enter a message'),
        },
        [['email', 'phone']],
      )}
      onSubmit={(values, actions) => {
        // setTimeout(() => {
        //   actions.setSubmitting(false)
        // }, 1000)
        sendEmail(values, actions)
      }}
    >
      <Form>
        <VStack spacing={5} {...rest}>
          <InputControl name="name" label="Name" isRequired />
          <InputControl name="email" label="Email" />
          <InputControl name="phone" label="Phone" />
          <TextareaControl
            name="message"
            label="Message"
            isRequired
            textareaProps={{ placeholder: 'How can we help you?' }}
          />
          <SubmitButton colorScheme="green">Submit</SubmitButton>
        </VStack>
      </Form>
    </Formik>
  )
}
