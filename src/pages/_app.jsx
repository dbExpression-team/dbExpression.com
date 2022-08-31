import 'focus-visible'
import '@/styles/tailwind.css'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
  <>
    <Script key="ga-script" strategy='afterInteractive' src="https://www.googletagmanager.com/gtag/js?id=G-5E8SMEDZT3" />
      <Script key="ga-script-local" strategy='afterInteractive'>
        {
          `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-5E8SMEDZT3');
          `
        }
      </Script>
    <Component {...pageProps} />
  </>
  )
}
