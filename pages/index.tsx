import type { NextPage } from "next";
import Head from "next/head";
import { ChangeEvent, useState } from "react";
import Control from "../components/Control";
import Time from "../components/Time";
import home from "../styles/scss/Home.module.scss";

const Home: NextPage = () => {
  const [selectedType, setSelectedType] = useState("noframe");
  const [color, setColor] = useState("#ffffff");
  const [neon, setNeon] = useState("white");
  const [geometory, setGeometory] = useState("pattern1");
  const [apex, setApex] = useState("red");
  const [retro, setRetro] = useState("pattern1");

  return (
    <>
      <Head>
        <title>Stream Clocks</title>
        <script
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
            `
          }}
        />
      </Head>
      <div className={home.row}>
        <div className={home.frame}>
          <Time
            selectedType={selectedType}
            color={color}
            neon={neon}
            geometory={geometory}
            apex={apex}
            retro={retro}
          />
        </div>
        <div className={home.inner}>
          <h1 className={home.page_title}>配信用&nbsp;時計オーバーレイ</h1>
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
          <Control
            color={color}
            setSelectedType={setSelectedType}
            setColor={setColor}
            setNeon={setNeon}
            setGeometory={setGeometory}
            setApex={setApex}
            setRetro={setRetro}
          />
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
      </div>
    </>
  );
};

export default Home;
