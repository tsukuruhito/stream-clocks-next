import { Metadata } from "next";
import Script from "next/script";
import home from "../styles/Home.module.scss";
import Control from "../components/clocks/Control";
import dynamic from "next/dynamic";
import Link from "next/link";

export type NoteType = {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    title: string;
    date: string;
    link: string;
};
export const metadata: Metadata = {
    title: "Stream Tools | Clocks",
    description:
        "ライブ配信でお使いいただける時計オーバーレイです。デザインの切り替えもOBSから行えるこれまでにないオーバーレイです。 This is a clock overlay that can be used for live streaming. It is an overlay that can switch designs from OBS.",
};

const Time = dynamic(() => import("../components/clocks/Time"), {
    ssr: false,
});

async function getNote() {
    const res = await fetch("https://stream-tools.microcms.io/api/v1/note", {
        headers: {
            "X-MICROCMS-API-KEY": process.env.CMS_API_KEY || "",
        },
    });
    if (!res.ok) throw new Error("fetch error");

    return res.json();
}

export default async function Page() {
    const data = await getNote();
    return (
        <div className="relative">
            <Script
                id="typekit"
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
            <div className="flex flex-wrap justify-center items-center relative">
                <div className="m-8">
                    <p className="base-font text-primary font-bold">View</p>
                    <div className={home.frame}>
                        <Time />
                    </div>
                </div>
                <div className="box">
                    <Control />
                </div>
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
                    <div className="contentBox box text-sm">
                        <h2 className="headingSec">使用方法</h2>
                        <ol className="list-inside list-decimal p-2 pl-6 -indent-4">
                            <li>OBSのソースからブラウザを選択</li>
                            <li>このサイトのURLをコピー&amp;ペースト</li>
                            <li>
                                時計の表示エリアと操作エリアが入るように幅と高さを指定
                            </li>
                            <li>
                                透過されていない場合は以下をカスタムCSSに追加
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
                    <div className="contentBox box text-sm">
                        <h2 className="headingSec">Note</h2>
                        <ul className="mb-4 p-2">
                            {data.contents.map((item: NoteType) => {
                                return (
                                    <li className="mb-2">
                                        <dl className="flex flex-row-reverse justify-end pb-2 border-b-[1px] border-primary border-opacity-60">
                                            {item.link ? (
                                                <dt>
                                                    {item.link.startsWith(
                                                        "/"
                                                    ) ? (
                                                        <Link
                                                            href={item.link}
                                                            className="text-link hover:underline font-bold"
                                                        >
                                                            {item.title}
                                                        </Link>
                                                    ) : (
                                                        <a
                                                            href={item.link}
                                                            className="text-link hover:underline font-bold"
                                                        >
                                                            {item.title}
                                                        </a>
                                                    )}
                                                </dt>
                                            ) : (
                                                <dt>{item.title}</dt>
                                            )}
                                            <dd className="mr-4">
                                                {item.date
                                                    .substring(
                                                        0,
                                                        item.date.indexOf("T")
                                                    )
                                                    .replaceAll("-", "/")}
                                            </dd>
                                        </dl>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
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
        </div>
    );
}
