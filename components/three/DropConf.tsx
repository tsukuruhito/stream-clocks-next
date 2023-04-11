import { useAtom } from "jotai";
import { particleTypeAtom } from "../../Atom";
import Blooms from "./Shapes/Bloom";
import Circles from "./Shapes/Circles";
import Spheres from "./Shapes/Spheres";
import Triangles from "./Shapes/Triangle";

export function DropConf() {
    const [type, setType] = useAtom(particleTypeAtom);
    const renderParticle = () => {
        switch (type) {
            case "sphere":
                return <Spheres />;
            case "triangle":
                return <Triangles />;
            case "bloom":
                return <Blooms />;
            case "circles":
                return <Circles />;
            default:
                return <Spheres />;
        }
    };
    return <>{renderParticle()}</>;
}
