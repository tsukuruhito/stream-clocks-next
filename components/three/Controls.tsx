"use client";
import { useAtom } from "jotai";
import {
    particleAmountAtom,
    particleColorAtom,
    particleOpacityAtom,
    particleTypeAtom,
    speedControlAtom,
} from "../../Atom";
import ColorPicker from "../clocks/ColorPicker";
import EffectForm from "./EffectForm";

export default function Controls() {
    const [particleColor, setParticleColor] = useAtom(particleColorAtom);
    const [amount, setAmount] = useAtom(particleAmountAtom);
    const [speed, setSpeed] = useAtom(speedControlAtom);
    const [opacity, setOpacity] = useAtom(particleOpacityAtom);
    const [type, setType] = useAtom(particleTypeAtom);

    const shapes = [
        {
            name: "sphere",
            label: "Sphere",
        },
        {
            name: "triangle",
            label: "Triangle",
        },
        {
            name: "circles",
            label: "Circles",
        },
    ];
    const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setType(e.target.value);
    };
    function handleSpeedChange(e: React.ChangeEvent<HTMLInputElement>) {
        setSpeed(parseFloat(e.target.value));
    }
    function handleOpacityChange(e: React.ChangeEvent<HTMLInputElement>) {
        setOpacity(parseFloat(e.target.value));
    }
    function handleAmountChange(e: React.ChangeEvent<HTMLInputElement>) {
        setAmount(parseFloat(e.target.value));
    }

    return (
        <ul className="grid grid-cols-1 gap-2">
            <li>
                <h2 className="mb-1 text-lg">Color</h2>
                <p className="mb-1 text-base">
                    現在の色（HEX）:{particleColor}
                </p>
                <ColorPicker
                    color={particleColor}
                    setColor={setParticleColor}
                    className="!w-40 !h-40"
                />
            </li>
            {type !== "circles" && (
                <>
                    <li>
                        <h2 className="mb-1 text-lg">Amount</h2>
                        <p className="mb-1 text-base">現在の量：{amount}</p>
                        <input
                            type="range"
                            min={100}
                            max={1000}
                            step={100}
                            value={amount}
                            onChange={handleAmountChange}
                        />
                    </li>
                    <li>
                        <h2 className="mb-1 text-lg">Speed</h2>
                        <p className="mb-1 text-base">
                            現在の落下速度：{speed}
                        </p>
                        <input
                            type="range"
                            min={0.01}
                            max={0.1}
                            step={0.01}
                            value={speed}
                            onChange={handleSpeedChange}
                        />
                    </li>
                </>
            )}
            <li>
                <h2 className="mb-1 text-lg">Opacity</h2>
                <p className="mb-1 text-base">現在の不透明度：{opacity}</p>
                <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.001}
                    value={opacity}
                    onChange={handleOpacityChange}
                />
            </li>
            <li>
                <h2 className="mb-1 text-lg">Type</h2>
                <p className="mb-1 text-base">現在のタイプ：</p>
                <div className="flex items-center gap-2">
                    {shapes.map((shape) => (
                        <label key={shape.name}>
                            <input
                                type="radio"
                                name="type"
                                value={shape.name}
                                checked={type === shape.name}
                                onChange={handleTypeChange}
                            />
                            {shape.label}
                        </label>
                    ))}
                </div>
            </li>
            <li>
                <EffectForm />
            </li>
        </ul>
    );
}
