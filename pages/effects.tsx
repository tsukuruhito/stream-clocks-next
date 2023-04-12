import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import FloatLink from "../components/FloatLink";
import Sidebar from "../components/three/Sidebar";
import { DropConf } from "../components/three/DropConf";
import Effectors from "../components/three/Effectors";
import Loading from "../components/Loading";

function particles() {
    let width, height, aspect;

    useEffect(() => {
        width = window.innerWidth;
        height = window.innerHeight;
        aspect = width / height;
    }, []);

    return (
        <div className="relative">
            <div className="w-screen h-screen">
                <Canvas>
                    <PerspectiveCamera
                        position={[0, 0, 5]}
                        focus={30}
                        near={0.2}
                        far={300}
                        fov={35}
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
                    <Effectors />
                </Canvas>
            </div>
            <FloatLink />
            <div className="fixed z-30 top-2 right-2">
                <Sidebar />
            </div>
            <Loading />
        </div>
    );
}
export default particles;
