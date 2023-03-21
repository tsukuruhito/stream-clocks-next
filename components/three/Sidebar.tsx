import { useState } from "react";
import Controls from "./Controls";

export default function Sidebar() {
    return (
        <div className="fixed top-2 right-2">
          <div className={`max-w-xs p-4 box-border bg-primary/20`}>
              <div className="mb-8">
                  <h1 className="mb-4 text-xl">Particles</h1>
                  <div className="text-sm">
                    <p>配信画面にちょっとしたアクセントを追加！</p>
                    <p>配信画面への追加は時計同様OBSのブラウザから。</p>
                    <p>下の設定からも見た目を変更することができますが、OBSのブレンドモードやフィルタを用いることでよりキレイな見た目にすることができます。</p>
                    <p>設定動画など近々掲載できるよう頑張ります！</p>
                  </div>
              </div>
              <div>
                  <Controls />
              </div>
          </div>
        </div>
    );
}
