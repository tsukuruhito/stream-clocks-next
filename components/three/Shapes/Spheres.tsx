import { useFrame } from "@react-three/fiber";
import { Sphere as SphereDrei } from "@react-three/drei";
import { useRef } from "react";
import {
    particleAmountAtom,
    particleColorAtom,
    particleOpacityAtom,
    speedControlAtom,
} from "../../../Atom";
import { useAtom } from "jotai";

function Spheres() {
    const [particleAmount] = useAtom(particleAmountAtom);
    return (
        <>
            {[...Array(particleAmount)].map((_, i) => {
                const x = Math.random() * 120 - 60;
                const y = Math.random() * 100 - 50;
                const z = Math.random() * 50 - 70;
                return <Sphere key={i} position={[x, y, z]} />;
            })}
        </>
    );
}

type SphereProps = {
    position?: [number, number, number];
};

function Sphere(props: SphereProps) {
    const { position } = props;
    const [speed] = useAtom(speedControlAtom);
    const [opacity] = useAtom(particleOpacityAtom);
    const phase = speed;
    const ref = useRef<THREE.Mesh>(null);
    const [particleColor] = useAtom(particleColorAtom);

    useFrame(() => {
        if (ref.current) {
            ref.current.position.y -= phase;
            if (ref.current.position.y < -50) {
                ref.current.position.x = Math.random() * 120 - 60;
                ref.current.position.y = 50;
                ref.current.position.z = Math.random() * 50 - 70;
            }
        }
    });

    return (
        <SphereDrei position={position} ref={ref} scale={[0.5, 0.5, 0.5]}>
            <meshStandardMaterial
                color={Number(particleColor.replace("#", "0x"))}
                transparent
                opacity={opacity}
                roughness={0.3}
            />
        </SphereDrei>
    );
}

export default Spheres;
