import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

type SphereProps = {
    position?: [number, number, number];
    color?: string;
}
const Sphere = (props:SphereProps) => {
    const {position, color} = props;
    const phase = 0.01;
    const ref = useRef<THREE.Mesh>(null);
    const opacity = 0.4;

    useFrame(()=>{
        if(ref.current){
            ref.current.position.y -= phase;
            if(ref.current.position.y < -50){
                ref.current.position.x = Math.random() * 100 - 50;
                ref.current.position.y = 50;
                ref.current.position.z = Math.random() * 100 - 50;
            }
        }
    })
    
    return(
        <mesh position={position} ref={ref}>
            <sphereGeometry args={[0.5, 32, 32, 0, Math.PI*2, 0, Math.PI]}/>
            <meshStandardMaterial attach="material" color={Number(color)} transparent opacity={opacity} roughness={0.3}/>
        </mesh>
    )
}

export default Sphere;