'use client'
import { Dispatch, SetStateAction, useState } from "react";
import { HexColorPicker } from "react-colorful";

type PropsType = {
    color: string;
    setColor: Dispatch<SetStateAction<string>>;
    className?: string;
};
const ColorPicker = (props: PropsType) => {
    const { color, setColor, className } = props;

    return (
        <HexColorPicker
            color={color}
            onChange={setColor}
            className={className}
        />
    );
};

export default ColorPicker;
