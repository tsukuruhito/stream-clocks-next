"use client";
import { useAtom } from "jotai";
import { useEffect, useMemo, useState } from "react";
import { clockColorAtom, clockTypeAtom } from "../../Atom";
import "../../styles/Clock.scss";

const Time = () => {
    const [date, setDate] = useState(new Date().toLocaleDateString());
    const [hour, setHour] = useState("");
    const [minute, setMinute] = useState("");
    const [day, setDay] = useState(
        new Date().toLocaleString("en-US", { weekday: "long" })
    );
    const [currentType] = useAtom(clockTypeAtom);
    const [currentColor] = useAtom(clockColorAtom);

    const [clockType, setClockType] = useState("noframe");
    const [clockColor, setClockColor] = useState("#47a8ca");

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
        }, 100);
    }, []);

    useEffect(() => {
        getTime;
    }, [getTime]);

    useEffect(() => {
        if (currentType !== clockType) {
            setClockType(currentType);
        }
        if (currentColor !== clockColor) {
            setClockColor(currentColor);
        }
    }, [currentType, currentColor]);

    return (
        <div className={clockType}>
            <div
                className="date_body"
                {...(clockType === "noframe" && {
                    style: { color: clockColor },
                })}
            >
                <div className="date_day">{day}</div>
                <div className="date_date">{date}</div>
                <div className="date_time">
                    {hour}
                    <span className="coron">:</span>
                    {minute}
                </div>
            </div>
        </div>
    );
};

export default Time;
