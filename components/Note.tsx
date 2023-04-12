import Link from "next/link";

const Note = () => {
    return (
        <div className="contentBox">
            <h2 className="headingSec">Note</h2>
            <ul className="mb-4 p-2">
            <li className="mb-2">
                    <dl className="flex flex-row-reverse justify-end pb-2 border-b-[1px] border-primary border-opacity-60">
                        <dt><Link href="/effects" className="text-link hover:underline font-bold">配信背景エフェクト</Link>がリリースされました。</dt>
                        <dd className="mr-4">2023/04/11</dd>
                    </dl>
                </li>
                <li className="mb-2">
                    <dl className="flex flex-row-reverse justify-end pb-2 border-b-[1px] border-primary border-opacity-60">
                        <dt>
                            <a
                                href="https://tsukuruhito.booth.pm/items/4106079"
                                className="text-link hover:underline font-bold"
                            >
                                自分で作れる&#33;Custom Clockリリース
                            </a>
                        </dt>
                        <dd className="mr-4">2022/08/22</dd>
                    </dl>
                </li>
                <li className="mb-2">
                    <dl className="flex flex-row-reverse justify-end pb-2 border-b-[1px] border-primary border-opacity-60">
                        <dt>新パターンの追加＆表示の調整を行いました。</dt>
                        <dd className="mr-4">2022/08/06</dd>
                    </dl>
                </li>
                <li className="mb-2">
                    <dl className="flex flex-row-reverse justify-end pb-2 border-b-[1px] border-primary border-opacity-60">
                        <dt>OBSの対話モードに対応しました。</dt>
                        <dd className="mr-4">2022/08/01</dd>
                    </dl>
                </li>
            </ul>
            <h2 className="headingSec">予告</h2>
            <ul className="mb-4 p-2">
                <li className="mb-2">
                    <dl className="flex flex-row-reverse justify-end pb-2 border-b-[1px] border-primary border-opacity-60">
                        <dt>時計以外の素材公開（遅れます）。</dt>
                        <dd className="mr-4">2022/09/??</dd>
                    </dl>
                </li>
            </ul>
        </div>
    );
};
export default Note;
