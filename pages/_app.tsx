import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/scss/Clock.scss";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Stream Clocks</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
