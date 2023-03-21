import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import FloatLink from "../components/FloatLink";
import Control from "../components/three/Sidebar";
import { DropConf } from "../components/three/DropConf";

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
                <Canvas>
                    <PerspectiveCamera
                        position={[0, 0, 50]}
                        focus={100}
                        near={0.2}
                        far={300}
                        aspect={aspect}
                        makeDefault
                    />
                    <OrbitControls />
                    <fog attach="fog" args={["#fff", 10, 150]} />
                    <ambientLight intensity={1} />
                    <spotLight
                        position={[10, 50, 10]}
                        penumbra={1}
                        castShadow
                    />
                    <DropConf />
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
