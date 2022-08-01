/* eslint-disable @next/next/inline-script-id */
import type { NextPage } from "next";
import Script from "next/script";
import { useState } from "react";
import Control from "../components/Control";
import Time from "../components/Time";
import home from "../styles/scss/Home.module.scss";

const Home: NextPage = () => {
  const [color, setColor] = useState("#ffffff");
  const [neon, setNeon] = useState("white");
  const [geometory, setGeometory] = useState("pattern1");
  const [apex, setApex] = useState("red");
  const [retro, setRetro] = useState("pattern1");

  return (
    <>
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(d) {
              var config = {
                kitId: 'umc4qnh',
                scriptTimeout: 3000,
                async: true
              },
              h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
            })(document);
          `,
        }}
      />
      <div className={home.row}>
        <div className={home.frame}>
          <Time
            color={color}
            neon={neon}
            geometory={geometory}
            apex={apex}
            retro={retro}
          />
        </div>
        <Control
          color={color}
          setColor={setColor}
          setNeon={setNeon}
          setGeometory={setGeometory}
          setApex={setApex}
          setRetro={setRetro}
        />
      </div>
      <div className={home.inner}>
        <h1 className="text-4xl inline-block mb-4">
          配信用&nbsp;時計オーバーレイ
        </h1>
        <div className="text-base font-mono">
          <p>配信で時刻を表示したい場合の素材としてご利用いただけます。</p>
          <p>デザインパターンは今後拡充予定です。</p>
          <p>
            ご利用にあたって、ご意見、ご要望などはTwitter（
            <a
              href="https://twitter.com/ts_create_"
              target="_blanc"
              rel="noopener"
            >
              @ts_create_
            </a>
            ）のDMでお願いします。
          </p>
          <h2 className="text-xl mt-4 inline-block">使用方法</h2>
          <ol className="list-inside list-decimal">
            <li>OBSのソースからブラウザを選択</li>
            <li>このサイトのURLをコピー&amp;ペースト</li>
            <li>幅:1000、高さ:1000を指定</li>
            <li>
              カスタムCSSに記載がない場合は以下をコピー&amp;ペースト
              <div>body&#123;background-color: rgba(0, 0, 0, 0);&#125;</div>
            </li>
          </ol>
        </div>
      </div>
      <div className="px-5 box-border">
        <small>
          <p>
            当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を使用しています。
          </p>
          <p>
            このGoogleアナリティクスはデータの収集のためにCookieを使用しています。このデータは匿名で収集されており、個人を特定するものではありません。
          </p>
          <p>
            {" "}
            この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。この規約に関しての詳細は
            <a
              href="https://marketingplatform.google.com/about/analytics/terms/jp/"
              rel="noopener"
            >
              {" "}
              Googleアナリティクスサービス利用規約
            </a>
            のページや
            <a
              href="https://policies.google.com/technologies/ads?hl=ja"
              rel="noopener"
            >
              Googleポリシーと規約
            </a>
            ページをご覧ください。
          </p>
        </small>
      </div>
    </>
  );
};

export default Home;
