import { useAtom } from "jotai";
import { particleColorAtom } from "../../Atom";
import ColorPicker from "../ColorPicker";

const Control = () => {
  const [particleColor, setParticleColor] = useAtom(particleColorAtom);
  return (
    <div className="fixed top-2 right-2 max-w-xs p-4 box-border bg-primary/20">
      <div className="mb-8">
        <h1 className="mb-4 text-xl">Particles</h1>
        <p>時計同様OBSのブラウザから追加することができます。OBSのフィルタで輝度等を変更するとキレイに見えます。</p>
        <p>現在は1種類。今後増やしていきます。</p>
      </div>
      <ul>
        <li>
          <h2 className="mb-2 text-lg">Color</h2>
          <p className="mb-2 text-base">現在の色（HEX）:{particleColor}</p>
          <ColorPicker color={particleColor} setColor={setParticleColor} className="!w-40 !h-40 mx-auto"/>
        </li>
      </ul>
    </div>
  );
};

export default Control;
