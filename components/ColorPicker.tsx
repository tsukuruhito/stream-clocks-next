import { Dispatch, SetStateAction, useEffect } from "react";
import { HexColorPicker } from "react-colorful";
import { atomWithStorage } from "jotai/utils";
import { useAtom } from "jotai";
import { storageColorAtom } from "../Atom";

type PropsType = {
    color: string;
    setColor: Dispatch<SetStateAction<string>>;
    className?: string;
};
const ColorPicker = (props: PropsType) => {
    const { color, setColor, className } = props;
    const [particleColor, setParticleColor] = useAtom(storageColorAtom);

    useEffect(() => {
        if (particleColor) {
            setColor(particleColor);
        } else {
            setParticleColor(color);
        }
    }, []);

    useEffect(() => {
        setParticleColor(color);
    }, [color]);

    return (
        <HexColorPicker
            color={color}
            onChange={setColor}
            className={className}
        />
    );
};

export default ColorPicker;
