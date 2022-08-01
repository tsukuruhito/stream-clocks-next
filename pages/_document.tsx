import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="ja">
      <Head />
      <body>
        <noscript
            dangerouslySetInnerHTML={{
                __html: `
                    <iframe
                    src="https://www.googletagmanager.com/ns.html?id=GTM-WBQP74M"
                    height="0"
                    width="0"
                    style="display:none;visibility:hidden"/>
                `,
            }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;