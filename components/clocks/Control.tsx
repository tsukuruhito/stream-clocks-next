"use client";
import home from "../../styles/Home.module.scss";
import { ChangeEvent, Key, useEffect, useState } from "react";
import useSWR from "swr";
import ColorPicker from "./ColorPicker";
import {
    clockColorAtom,
    clockTypeAtom,
    storageClockColorAtom,
    storageClockTypeAtom,
} from "../../Atom";
import { useAtom } from "jotai";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
function Control() {
    const { data, error, isLoading } = useSWR("/clocklist.json", fetcher);
    const [openPick, setOpenPick] = useState(false);

    const [currentColor, setCurrentColor] = useAtom(clockColorAtom);
    const [currentType, setCurrentType] = useAtom(clockTypeAtom);

    const [memoryType, setMemoryType] = useAtom(storageClockTypeAtom);
    const [memoryColor, setMemoryColor] = useAtom(storageClockColorAtom);

    useEffect(() => {
        if (memoryType && memoryColor) {
            setCurrentType(memoryType);
            setCurrentColor(memoryColor);
        }
    }, []);

    useEffect(() => {
        setMemoryType(currentType);
        setMemoryColor(currentColor);
    }, [currentType, currentColor]);

    const openPickMenu = () => {
        setOpenPick(!openPick);
    };

    const changeType = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrentType(e.target.value);
    };

    if (error) return <div>failed to load</div>;
    if (isLoading) return <div>loading...</div>;
    return (
        <div className={home.control}>
            <h2 className="text-lg font-bold base-font">Control</h2>
            <div className="text-sm text-stone-500 base-font">
                <p>
                    種類を選択してください。
                    <span className="text-xs text-[#999]">
                        select clock type
                    </span>
                </p>
                <p className="mt-2">
                    種類
                    <span className="text-xs text-[#999]">current type</span>
                    <span className="text-lg font-bold text-primary ml-2 tracking-wider">
                        {currentType}
                    </span>
                </p>
            </div>
            <ul>
                {data.list.map(
                    (item: string, index: Key | null | undefined) => {
                        return (
                            <li key={index}>
                                <input
                                    id={item}
                                    name="clock-type"
                                    type="radio"
                                    value={item}
                                    onChange={changeType}
                                    checked={currentType === item}
                                />
                                <label htmlFor={item} className="clock-type">
                                    {item}
                                </label>
                            </li>
                        );
                    }
                )}
            </ul>
            <div className="flex items-center mt-4">
                <button
                    type="button"
                    className={`
                            w-6 h-6 relative rounded-md box-border border-2 border-neutral-400 text-[0px] align-middle
                            ${
                                currentType !== "noframe" &&
                                "filter grayscale opacity-30 pointer-events-none"
                            }
                    `}
                    style={{ backgroundColor: currentColor }}
                    onClick={openPickMenu}
                >
                    <div
                        className={`absolute z-10 left-10 top-0 
                            ${!openPick && "hidden"}
                        `}
                    >
                        <ColorPicker
                            color={currentColor}
                            setColor={setCurrentColor}
                        />
                    </div>
                </button>
                <p className="text-sm text-stone-500 base-font ml-2">
                    {currentType !== "noframe" ? (
                        "use only noframe"
                    ) : (
                        <>
                            色
                            <span className="text-xs text-[#999]">
                                current color
                            </span>
                            <span className="text-lg font-bold text-primary ml-2 tracking-wider">
                                {currentColor}
                            </span>
                        </>
                    )}
                </p>
            </div>
        </div>
    );
}

export default Control;
