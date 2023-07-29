"use client";
import { useEffect } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { DropConf } from "./DropConf";
import Effectors from "./Effectors";

function CustomCanvas() {
    let width, height, aspect;

    useEffect(() => {
        width = window.innerWidth;
        height = window.innerHeight;
        aspect = width / height;
    }, []);
    return (
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
            <spotLight position={[10, 50, 10]} penumbra={1} castShadow />
            <DropConf />
            <Effectors />
        </Canvas>
    );
}

export default CustomCanvas;
