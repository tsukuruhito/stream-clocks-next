import Script from "next/script";
import "./globals.css";
import Head from "next/head";
import FloatLink from "../components/FloatLink";
import { Suspense } from "react";
import Analytics from "../components/Analytics";

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
            </Head>
            <body className="relative">
                <Suspense>
                    <Analytics />
                </Suspense>
                {children}
                <FloatLink />
            </body>
        </html>
    );
}
