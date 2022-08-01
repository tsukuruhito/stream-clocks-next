import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/scss/Clock.scss";
import Head from "next/head";
import GoogleTagManager, { GoogleTagManagerId } from "../components/GoogleTagManager";
import { googleTagManagerId } from "../gtm";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Stream Clocks</title>
      </Head>
      <GoogleTagManager googleTagManagerId={googleTagManagerId as GoogleTagManagerId}/>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
