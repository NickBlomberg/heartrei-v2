import Head from 'next/head'

import Navbar from './Navbar'

export default function Layout({ title, description, keywords, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Navbar />
      <div>{children}</div>
    </div>
  )
}

Layout.defaultProps = {
  title: 'HeartRei Therapies | Reiki energy healing | Llanelli',
  description:
    "HeartRei Therapies is a Llanelli based holistic therapy service, providing support for the Carmarthenshire area. We currently offer Reiki healing, tailored to the individual's requirements.",
  keywords:
    'llanelli, carmarthenshire, therapy, reiki, holistic, healing, energy, wellbeing',
}
