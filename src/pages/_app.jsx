import 'focus-visible'
import '@/styles/tailwind.css'
import Script from 'next/script'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
  <>
    <Head>
        <title>dbExpression</title>
        <meta name='keywords'  content='dbexpression db expression microsoft sql server sqlserver' />
    </Head>
    <Component {...pageProps} />
  </>
  )
}
