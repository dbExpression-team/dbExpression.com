import Head from 'next/head'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Benefits } from '@/components/Benefits'
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import Script from 'next/script'

export default function Home() {
  return (
    <>
      <Head>
        <title>dbExpression - MSSQL Simplified</title>
        <meta
          name="description"
          content="dbExpression closes the gap between application code and native SQL, bringing Microsoft SQL Server functionality into .NET."
        />
        <Script key="ga-script" strategy='afterInteractive' src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`} />
        <Script key="ga-script-local" strategy='afterInteractive'>
          {
            `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', ${process.env.GOOGLE_ANALYTICS_ID});
            `
          }
        </Script>
      </Head>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <PrimaryFeatures />
        <SecondaryFeatures />
      </main>
      <Footer />
    </>
  )
}
