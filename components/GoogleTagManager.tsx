'use client';
import Script from "next/script";
import React from "react";

export type GoogleTagManagerId = string;

type Props = {
    googleTagManagerId: GoogleTagManagerId;
};
const GoogleTagManager: React.FC<Props> = ({ googleTagManagerId }) => (
    //     <!-- Google Tag Manager -->
    <Script
        id="gtm"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            // new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            // j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            // 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            // })(window,document,'script','dataLayer','${googleTagManagerId});
      `,
        }}
    />
    // <!-- End Google Tag Manager -->
);

export default GoogleTagManager;
