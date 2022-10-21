import { Head, Html, Main, NextScript } from 'next/document'
import Link from 'next/link'
import { useEffect, useState } from "react";

const getFaviconPath = (isDarkMode = false) => {
  return `/${isDarkMode ? "dark" : "light"}/`;
};

export default function Document(props) {
  
  const [faviconHref, setFaviconHref] = useState("light/");

  useEffect(() => {
    // Get current color scheme.
    const matcher = window.matchMedia("(prefers-color-scheme: dark)");
    // Set favicon initially.
    setFaviconHref(getFaviconPath(matcher.matches));
    // Change favicon if the color scheme changes.
    matcher.onchange = () => setFaviconHref(getFaviconPath(matcher.matches));
  }, [faviconHref]);

  return (
    <Html
      className="h-full scroll-smooth bg-white antialiased [font-feature-settings:'ss01']"
      lang="en"
    >
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta property="og:image" content="https://dbexpressionpublic.blob.core.windows.net/web/dbex-og.png" />
        <meta property="twitter:image" content="https://dbexpressionpublic.blob.core.windows.net/web/dbex-twitter.png" />
        <link rel="icon" type="image/png" sizes="16x16" href={faviconHref.concat("favicon-16x16.png")} />
        <link rel="icon" type="image/png" sizes="32x32" href={faviconHref.concat("favicon-32x32.png")} />
        <link rel="icon" type="image/png"  sizes="48x48" href={faviconHref.concat("favicon-48x48.png")} />
        <link rel="apple-touch-icon" sizes="180x180" href={faviconHref.concat("apple-touch-icon.png")} />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Lexend:wght@400;500&display=swap"
        />
      </Head>
      <body className="flex h-full flex-col">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
