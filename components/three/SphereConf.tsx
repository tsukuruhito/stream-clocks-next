import { useAtom } from "jotai";
import { particleColorAtom } from "../../Atom";
import Sphere from "./Sphere";

export function SphereConf() {
  const num = 300;
  const [particleColor, setParticleColor] = useAtom(particleColorAtom);
  return (
    <>
      <ambientLight intensity={1} />
      <fog attach="fog" args={["white", 0, 100]} />
      <spotLight position={[10, 15, 10]} penumbra={1} castShadow />

      {[...Array(num)].map((_, i) => {
        const x = Math.random() * 120 - 60;
        const y = Math.random() * 100 - 50;
        const z = Math.random() * 50 - 70;
        return (
          <Sphere
            key={i}
            position={[x, y, z]}
            color={particleColor.replace("#", "0x")}
          />
        );
      })}
    </>
  );
}
