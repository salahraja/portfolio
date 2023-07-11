import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  <>
    {/* Add the favicon */}
    <Head>
      <link rel="shortcut icon" href="/favicon.png" />
      <title>My page title</title>
    </Head>
    {/* Add the favicon */}
    {/* Note that the path doesn't include "public" */}

    <Component {...pageProps} />
  </>;
  return <Component {...pageProps} />;
}
