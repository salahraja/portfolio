import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps) {
  <>
    {/* Add the favicon */}
    <Head>
      <link rel="shortcut icon" href="https://ln5.sync.com/dl/a699f5400/b9iq6q48-safke7sv-d5ta2cef-s4nerx2n" />
      <title>My page title</title>
      <meta property="og:title" content="Salah's Portfolio" />
        <meta property="og:description" content="My coding portfolio!" />
        <meta property="og:image" content="https://ln5.sync.com/dl/7d729f030/fz2kbahu-ic82gbfv-5ne52xe9-zq8u9xpn" />
        <meta property="og:url" content="https://www.salahs.org" />
    </Head>
    {/* Add the favicon */}
    {/* Note that the path doesn't include "public" */}
    <Analytics />
    <Component {...pageProps} />
  </>;
  return <Component {...pageProps} />;
}
