import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Control from "../components/Control";
// import Time from "../components/Time";
import home from "../styles/scss/Home.module.scss";
import dynamic from "next/dynamic";
import Note from "../components/Note";
import FloatLink from "../components/FloatLink";
import Loading from "../components/Loading";
import { useAtom } from "jotai";
import { clockColorAtom } from "../Atom";

const AvoidSSRComponent = dynamic(() => import("../components/Time"), {
    ssr: false,
});

const Home: NextPage = () => {
    const [color, setColor] = useState("#d5c3a4");
    const [neon, setNeon] = useState("white");
    const [geometory, setGeometory] = useState("pattern1");
    const [apex, setApex] = useState("red");
    const [retro, setRetro] = useState("retro1");
    const [gradient, setGradient] = useState("gradient1");
    const [clockColor, setClockColor] = useAtom(clockColorAtom);

    useEffect(() => {
        if (clockColor) {
            setColor(clockColor);
        } else {
            setColor("#d5c3a4");
        }
    }, []);
    useEffect(() => {
        setClockColor(color);
    }, [color]);

    return (
        <div className="relative">
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
          `,
                }}
            />
            <div className={home.row}>
                <div className="m-8">
                    <p className="base-font text-primary font-bold">View</p>
                    <div className={home.frame}>
                        <AvoidSSRComponent
                            color={color}
                            neon={neon}
                            geometory={geometory}
                            apex={apex}
                            retro={retro}
                            gradient={gradient}
                        />
                    </div>
                </div>
                <Control
                    color={color}
                    setColor={setColor}
                    setNeon={setNeon}
                    setGeometory={setGeometory}
                    setApex={setApex}
                    setRetro={setRetro}
                    setGradient={setGradient}
                />
            </div>
            <section className="base-font p-8 text-stone-500 max-w-screen-lg mx-auto">
                <h1 className="text-2xl inline-block font-semibold mb-4 text-primary">
                    配信用&nbsp;時計オーバーレイ
                </h1>
                <div className="mb-6">
                    <p>
                        配信で時刻を表示したい場合の素材としてご利用いただけます。
                    </p>
                    <p>
                        このページの配信用時計オーバーレイは個人利用、法人利用問わず無料でお使いいただけます。
                    </p>
                    <p>デザインパターンは今後拡充予定です。</p>
                    <p>
                        ご意見、ご要望などはTwitter（
                        <a
                            href="https://twitter.com/ts_create_"
                            target="_blanc"
                            rel="noopener"
                            className="text-primary"
                        >
                            @ts_create_
                        </a>
                        ）のDMでお願いします。
                    </p>
                    <p>今後、どんどん拡張されていくのでお楽しみに！</p>
                </div>
                <div className="text-base flex justify-between mb-8 flex-wrap">
                    <div className="contentBox">
                        <h2 className="headingSec">使用方法</h2>
                        <ol className="list-inside list-decimal p-2">
                            <li>OBSのソースからブラウザを選択</li>
                            <li>このサイトのURLをコピー&amp;ペースト</li>
                            <li>
                                時計の表示エリアと操作エリアが入るように幅と高さを指定
                            </li>
                            <li>
                                透過されていない場合は以下をカスタムCSSにコピー&amp;ペースト
                                <div>
                                    body&#123;background-color: rgba(0, 0, 0,
                                    0);&#125;
                                </div>
                            </li>
                            <li>
                                対話モードを使いデザインパターンやテキスト色を変更
                            </li>
                        </ol>
                    </div>
                    <Note />
                </div>
                <section className="text-xs text-stone-500">
                    <p>
                        当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を使用しています。
                    </p>
                    <p>
                        このGoogleアナリティクスはデータの収集のためにCookieを使用しています。このデータは匿名で収集されており、個人を特定するものではありません。
                    </p>
                    <p>
                        この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。この規約に関しての詳細は
                        <a
                            href="https://marketingplatform.google.com/about/analytics/terms/jp/"
                            rel="noopener"
                        >
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
                </section>
            </section>
            <FloatLink />
            <Loading />
        </div>
    );
};

export default Home;
