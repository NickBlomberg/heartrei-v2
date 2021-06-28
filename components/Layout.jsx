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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
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
