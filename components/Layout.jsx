import Head from 'next/head'

import { Flex } from '@chakra-ui/react'

import Navbar from './Navbar'
import ChakraAlert from './ChakraAlert'
import Footer from './Footer'

export default function Layout({ title, description, keywords, children }) {
  return (
    <Flex direction="column" h="100vh" as="main">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Navbar />
      <ChakraAlert
        title="COVID-19:"
        description="Therapies are currently suspended until further notice"
      />
      {children}
      <Footer />
    </Flex>
  )
}

Layout.defaultProps = {
  title: 'HeartRei Therapies | Reiki energy healing | Llanelli',
  description:
    "HeartRei Therapies is a Llanelli based holistic therapy service, providing support for the Carmarthenshire area. We currently offer Reiki healing, tailored to the individual's requirements.",
  keywords:
    'llanelli, carmarthenshire, therapy, reiki, holistic, healing, energy, wellbeing',
}
