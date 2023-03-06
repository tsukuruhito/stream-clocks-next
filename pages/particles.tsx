import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import FloatLink from "../components/FloatLink";
import Control from "../components/three/Control";
import { SphereConf } from "../components/three/SphereConf";

function particles() {
  let width, height, aspect;

  useEffect(() => {
    width = window.innerWidth;
    height = window.innerHeight;
    aspect = width / height;
  }, []);

  return (
    <>
      <div className="w-screen h-screen">
        <Canvas camera={{ fov: 75, position: [0, 0, 10], near: 0.5 }}>
          <perspectiveCamera
            position={[0, 0, 30]}
            near={0.2}
            far={100}
            aspect={aspect}
          />
          <SphereConf />
        </Canvas>
      </div>
      <FloatLink />
      <div className="fixed top-2 right-2">
        <Control />
      </div>
    </>
  );
}
export default particles;
