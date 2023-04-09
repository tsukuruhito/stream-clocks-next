import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import {
    particleAmountAtom,
    particleColorAtom,
    particleOpacityAtom,
    particleTypeAtom,
    speedControlAtom,
} from "../Atom";

type effectType = {
    effectName: string;
    type: string;
    amount: number;
    speed: number;
    opacity: number;
    color: string;
};

export default function EffectForm() {
    // define state by atom about effects
    const [type, setType] = useAtom(particleTypeAtom);
    const [amount, setAmount] = useAtom(particleAmountAtom);
    const [speed, setSpeed] = useAtom(speedControlAtom);
    const [opacity, setOpacity] = useAtom(particleOpacityAtom);
    const [color, setColor] = useAtom(particleColorAtom);
    const [saveKey, setSaveKey] = useState("default");
    const [saveList, setSaveList] = useState<effectType[]>([]);
    const [alert, setAlert] = useState(false);

    const getSaveList = () => {
        const length = localStorage.length;
        const ary: effectType[] = [];
        for (let i = 0; i < length; i++) {
            const key = localStorage.key(i);
            if (key !== null && key.includes("effect-")) {
                const effects = localStorage.getItem(key);
                effects !== null && ary.push(JSON.parse(effects));
            }
        }
        setSaveList(ary);
    };
    useEffect(() => {
        getSaveList();
    }, []);

    const handleSave = () => {
        const json = JSON.stringify({
            effectName: saveKey,
            type,
            amount,
            speed,
            opacity,
            color,
        });
        if (saveKey.match(/^[a-zA-Z0-9]+$/)) {
            localStorage.setItem(`effect-${saveKey}`, json);
            getSaveList();
            setAlert(false);
        } else {
            setAlert(true);
        }
    };
    const handleApply = (item: effectType) => {
        if (item !== null) {
            setType(item.type);
            setAmount(item.amount);
            setSpeed(item.speed);
            setOpacity(item.opacity);
            setColor(item.color);
        }
    };
    const handleDelete = (effectName: string) => {
        localStorage.removeItem(`effect-${effectName}`);
        getSaveList();
    };
    return (
        <div className="flex flex-col gap-4 grid-">
            <div>
                <p>
                    保存名<span className="text-xs">（※ローマ字入力）</span>
                </p>
                <div className="flex items-center text-sm gap-1">
                    <label htmlFor="name" className="sr-only">
                        保存名
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        value={saveKey}
                        onChange={(e) => setSaveKey(e.target.value)}
                    />
                    <button
                        className="bg-primary text-white font-bold py-1 px-2 rounded"
                        type="button"
                        onClick={handleSave}
                    >
                        保存-save
                    </button>
                </div>
                {alert && (
                    <p className="text-xs text-[#ff0000]">
                        ※半角英数字で入力してください。
                        <br />
                        Please enter the save name in half-width alphanumeric
                        characters.
                    </p>
                )}
            </div>
            <div>
                <ul className="flex gap-4 mb-2">
                    <li>
                        <div className="bg-primary text-white p-1 rounded inline-block align-middle mr-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-3 h-3"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.5 12.75l6 6 9-13.5"
                                />
                            </svg>
                        </div>
                        <p className="text-xs inline-block text-center align-middle leading-none">
                            適用-apply
                        </p>
                    </li>
                    <li>
                        <div className="bg-primary text-white p-1 rounded inline-block align-middle mr-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-3 h-3"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                            </svg>
                        </div>
                        <p className="text-xs inline-block text-center align-middle leading-none">
                            削除-delete
                        </p>
                    </li>
                </ul>
                <ul>
                    {saveList.length > 0 &&
                        saveList.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    className="flex justify-between mb-1"
                                >
                                    <p>{item.effectName}</p>
                                    <div className="flex gap-x-2">
                                        <button
                                            type="button"
                                            className="bg-primary text-white p-1 rounded"
                                            onClick={() => handleApply(item)}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4.5 12.75l6 6 9-13.5"
                                                />
                                            </svg>
                                        </button>
                                        <button
                                            type="button"
                                            className="bg-primary text-white p-1 rounded"
                                            onClick={() =>
                                                handleDelete(item.effectName)
                                            }
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </li>
                            );
                        })}
                </ul>
            </div>
        </div>
    );
}
