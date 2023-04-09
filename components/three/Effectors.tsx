import {
    EffectComposer,
    Bloom,
    DepthOfField,
} from "@react-three/postprocessing";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { particleTypeAtom } from "../../Atom";
export default function Effectors() {
    const [type, setType] = useAtom(particleTypeAtom);
    const setEffect = () => {
        if (type === "circles") {
            return (
                <EffectComposer>
                    <Bloom
                        intensity={1.5}
                        luminanceThreshold={0}
                        luminanceSmoothing={1.5}
                    />
                    <DepthOfField
                        focusDistance={3.5}
                        focalLength={6.25}
                        bokehScale={1}
                    />
                </EffectComposer>
            );
        }
    };

    useEffect(() => {
        setEffect();
    }, [type]);
    return <>{setEffect()}</>;
}
