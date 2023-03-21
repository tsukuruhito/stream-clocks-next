import { useAtom } from "jotai";
import { useEffect, useMemo, useState } from "react";
import { selectedTypeAtom } from "../Atom";

type PropsType = {
    color: string;
    neon: string;
    geometory: string;
    apex: string;
    retro: string;
    gradient: string;
};
const Time = (props: PropsType) => {
    const [date, setDate] = useState(new Date().toLocaleDateString());
    const [hour, setHour] = useState("");
    const [minute, setMinute] = useState("");
    // const [second, setSecond] = useState("");
    const [day, setDay] = useState(
        new Date().toLocaleString("en-US", { weekday: "long" })
    );
    const { color, neon, geometory, apex, retro, gradient } = props;
    const [selectedType, setSelectedType] = useAtom(selectedTypeAtom);

    const getTime = useMemo(() => {
        setInterval(() => {
            const date = new Date();
            setDate(date.toLocaleDateString());
            setDay(date.toLocaleString("en-US", { weekday: "long" }));
            if (date.getHours() < 10) {
                setHour("0" + date.getHours());
            } else {
                setHour(String(date.getHours()));
            }
            if (date.getMinutes() < 10) {
                setMinute("0" + date.getMinutes());
            } else {
                setMinute(String(date.getMinutes()));
            }
            // if (date.getSeconds() < 10) {
            //   setSecond("0" + date.getSeconds());
            // }else{
            //   setSecond(String(date.getSeconds()));
            // }
        }, 100);
    }, []);

    useEffect(() => {
        getTime;
    }, [getTime]);

    const setClass = () => {
        if (selectedType === "neon") {
            return `${selectedType} ${neon}`;
        } else if (selectedType === "geometory") {
            return `${selectedType} ${geometory}`;
        } else if (selectedType === "apex") {
            return `${selectedType} ${apex}`;
        } else if (selectedType === "retro") {
            return `${selectedType} ${retro}`;
        } else if (selectedType === "gradient") {
            return `${selectedType} ${gradient}`;
        } else {
            return `${selectedType}`;
        }
    };

    return (
        <div className={setClass()}>
            <div
                className="date_body"
                {...(selectedType === "noframe" && {
                    style: { color: color },
                })}
            >
                <div className="date_day">{day}</div>
                <div className="date_date">{date}</div>
                <div className="date_time">
                    {hour}
                    <span className="coron">:</span>
                    {minute}
                    {/* <span className="second">{second}</span> */}
                </div>
            </div>
        </div>
    );
};

export default Time;
