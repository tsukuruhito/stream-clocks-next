import { useAtom } from "jotai";
import { Dispatch, FormEvent, SetStateAction, useRef, useState } from "react";
import {
    apexAtom,
    checkedIndexAtom,
    geometoryAtom,
    gradientAtom,
    neonAtom,
    retroAtom,
    selectedTypeAtom,
} from "../Atom";
import home from "../styles/scss/Home.module.scss";

type PropsType = {
    name: string;
    ary: string[];
    setState: Dispatch<SetStateAction<string>>;
};
const SelectType = (props: PropsType) => {
    const { name, ary, setState } = props;
    const ref = useRef<HTMLDivElement>(null);
    const [checkedIndex, setCheckedIndex] = useAtom(checkedIndexAtom);
    const [selectedType, setSelectedType] = useAtom(selectedTypeAtom);
    const [neonIndex, setNeonIndex] = useAtom(neonAtom);
    const [geometoryIndex, setGeometoryIndex] = useAtom(geometoryAtom);
    const [apexIndex, setApexIndex] = useAtom(apexAtom);
    const [retroIndex, setRetroIndex] = useAtom(retroAtom);
    const [gradientIndex, setGradientIndex] = useAtom(gradientAtom);

    const setClockType = (index: number, name: string) => {
        setState(ary[index]);
        if (name === "neon") {
            setNeonIndex(index);
        } else if (name === "geometory") {
            setGeometoryIndex(index);
        } else if (name === "apex") {
            setApexIndex(index);
        } else if (name === "retro") {
            setRetroIndex(index);
        } else if (name === "gradient") {
            setGradientIndex(index);
        }
    };
    const openMenu = (e: FormEvent<HTMLButtonElement>, ary: string[]) => {
        setSelectedType(e.currentTarget.value);
        if (name === "neon") {
            setState(ary[neonIndex]);
        } else if (name === "geometory") {
            setState(ary[geometoryIndex]);
        } else if (name === "apex") {
            setState(ary[apexIndex]);
        } else if (name === "retro") {
            setState(ary[retroIndex]);
        } else if (name === "gradient") {
            setState(ary[gradientIndex]);
        }
        if (ref.current) {
            ref.current.classList.toggle("hidden");
        }
    };
    return (
        <div className="relative text-sm">
            <button
                type="button"
                value={name}
                onClick={(e) => openMenu(e, ary)}
                className={`pr-5 ${home.arrow}`}
            >
                other
            </button>
            <div className="hidden" ref={ref}>
                <ul className={home.select}>
                    {ary.map((item, index) => {
                        return (
                            <li key={index}>
                                <input
                                    type="radio"
                                    name={name}
                                    value={item}
                                    id={item}
                                    onChange={() => setClockType(index, name)}
                                    defaultChecked={checkedIndex === index}
                                />
                                <label htmlFor={item}>{item}</label>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};
export default SelectType;
