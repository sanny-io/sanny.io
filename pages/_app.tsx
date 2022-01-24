import type { AppProps } from 'next/app'

import '../index.css'
import Head from 'next/head'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Sanny Sherief</title>
        <meta name="description" content="Sanny Sherief's portfolio website." />
        <meta name="theme-color" content="#171717" />
      </Head>

      <Component {...pageProps} />
      <Footer />
    </>
  )
}