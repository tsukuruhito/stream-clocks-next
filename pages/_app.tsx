import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/scss/Clock.scss";
import Head from "next/head";
import GoogleTagManager, {
    GoogleTagManagerId,
} from "../components/GoogleTagManager";
import { googleTagManagerId } from "../gtm";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Stream Clocks</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta
                    name="description"
                    content="ライブ配信でお使いいただける時計オーバーレイです。デザインの切り替えもOBSから行えるこれまでにないオーバーレイです。"
                />
            </Head>
            <GoogleTagManager
                googleTagManagerId={googleTagManagerId as GoogleTagManagerId}
            />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
