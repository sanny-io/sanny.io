import '../index.css'
import Head from 'next/head'
import Footer from '../components/Footer'
import { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
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