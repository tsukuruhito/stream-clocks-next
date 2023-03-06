import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import ColorPicker from "../components/ColorPicker";
import FloatLink from "../components/FloatLink";
import Control from "../components/three/Control";
import Sphere from "../components/three/Sphere";

const particles = () => {
    let width, height, aspect;
    const num = 500;
    const [color, setColor] = useState("0xffffff");

    useEffect(()=>{
        width = window.innerWidth;
        height = window.innerHeight;
        aspect = width / height;
    },[]);

    return (
        <>
            <div className="w-screen h-screen">
                <Canvas camera={{fov: 75,position:[0, 0, 10], near:0.5}}>
                    <perspectiveCamera position={[0, 0,30]} near={0.2} far={100} aspect={aspect} />
                    <ambientLight intensity={0.8}/>
                    <fog attach="fog" args={['white', 0, 100]}/>
                    <spotLight position={[10, 15, 10]} penumbra={1} castShadow/>
                    
                    {[...Array(num)].map((_, i) => {
                        const x = Math.random() * 100 - 50;
                        const y = Math.random() * 100 - 50;
                        const z = Math.random() * 50 - 50;
                        return <Sphere key={i} position={[x, y, z]} color={color.replace('#', '0x')}/>
                    })}
                </Canvas>
            </div>
            <FloatLink />
            <div className="fixed top-2 right-2">
                <ColorPicker color={color} setColor={setColor}/>
            </div>
        </>
    );
}
export default particles;