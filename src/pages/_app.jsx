import 'focus-visible'
import '@/styles/tailwind.css'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
  <>
    <Script key="ga-script" strategy='afterInteractive' src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`} />
      <Script id="ga-script-local" strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
        `}
      </Script>
    <Component {...pageProps} />
  </>
  )
}
