import Script from "next/script";
import "./globals.css";
import Head from "next/head";
import GoogleTagManager from "../components/GoogleTagManager";
import { googleTagManagerId } from "../gtm";
import FloatLink from "../components/FloatLink";

export default function RootLayou({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ja">
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <Script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5696595671065230"
                    crossOrigin="anonymous"
                ></Script>
                <GoogleTagManager googleTagManagerId={googleTagManagerId} />
            </Head>
            <body className="relative">
                {/* Google Tag Manager (noscript) */}
                <noscript>
                    <iframe
                        src={`https://www.googletagmanager.com/ns.html?id=${googleTagManagerId}`}
                        height="0"
                        width="0"
                        style={{ display: "none", visibility: "hidden" }}
                    ></iframe>
                </noscript>
                {/* End Google Tag Manager (noscript) */}
                {children}
                <FloatLink />
            </body>
        </html>
    );
}
