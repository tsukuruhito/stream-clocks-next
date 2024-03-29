import "./globals.css";
import FloatLink from "../components/FloatLink";
import { Suspense } from "react";
import Analytics from "../components/Analytics";

export const metadata = {
    metadata: new URL("https://stream-clocks.com"),
    openGraph: {
        title: "Stream Tools",
        description:
            "YouTube等のライブ配信で使える時計オーバーレイや背景エフェクトです。",
        url: "https://stream-clocks.com",
        siteName: "Stream Tools",
        locale: "jp_JP",
        type: "website",
    },
    twitter: {
        title: "Stream Tools",
        cardType: "summary_large_image",
        description:
            "YouTube等のライブ配信で使える時計オーバーレイや背景エフェクトです。",
        site: "@ts_create_",
    },
};

export default function RootLayou({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ja">
            <head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </head>
            <body className="relative">
                {/* <Script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5696595671065230"
                    crossOrigin="anonymous"
                ></Script> */}
                <Suspense>
                    <Analytics />
                </Suspense>
                {children}
                <FloatLink />
            </body>
        </html>
    );
}
