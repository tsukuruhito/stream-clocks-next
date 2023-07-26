import Controls from "./Controls";

export default function Sidebar() {
    return (
        <div className="sidebar z-30 top-2 right-2 w-1/5 p-4 box-border bg-primary/0">
                <div className="mb-8">
                    <h1 className="mb-4 text-xl">配信背景エフェクト</h1>
                    <div className="text-sm">
                        <p>配信画面にちょっとしたアクセントを追加！</p>
                        <p>配信画面への追加は時計同様OBSのブラウザから。</p>
                        <p>
                            下の設定からも見た目を変更することができますが、OBSのブレンドモードやフィルタを用いることでよりキレイな見た目にすることができます。
                        </p>
                        <p>設定動画など近々掲載できるよう頑張ります！</p>
                    </div>
                </div>
                <div>
                    <Controls />
                </div>
        </div>
    );
}
