import Head from 'next/head'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Benefits } from '@/components/Benefits'
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'

export default function Home() {
  return (
    <>
      <Head>
        <title>dbExpression - MSSQL Simplified</title>
        <meta
          name="description"
          content="dbExpression closes the gap between application code and native SQL, bringing Microsoft SQL Server functionality into .NET."
      />
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
