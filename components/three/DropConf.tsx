import { useAtom } from "jotai";
import { particleTypeAtom } from "../../Atom";
import DropSphere from "./DropSphere";
import Triangles from "./Triangle";

export function DropConf() {
    const [type, setType] = useAtom(particleTypeAtom);
    const renderParticle = () => {
        switch (type) {
            case "sphere":
                return <DropSphere />;
            case "triangle":
                return <Triangles />;
            default:
                return <DropSphere />;
        }
    };
    return <>{renderParticle()}</>;
}
