import { useAtom } from "jotai";
import { useContext, useEffect, useMemo, useState } from "react";
import { selectedTypeContext } from "../pages/_app";

type PropsType = {
  color: string;
  neon: string;
  geometory: string;
  apex: string;
  retro: string;
};
const Time = (props: PropsType) => {
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [time, setTime] = useState("");
  const [day, setDay] = useState(
    new Date().toLocaleString("en-US", { weekday: "long" })
  );
    const {selectedType} = useContext(selectedTypeContext);
  const { color, neon, geometory, apex, retro } = props;

  const getTime = useMemo(() => {
    setInterval(() => {
      const datetime = new Date().toLocaleTimeString().slice(0, -3);
      setDate(new Date().toLocaleDateString());
      setDay(new Date().toLocaleString("en-US", { weekday: "long" }));
      if (datetime.length === 4) {
        setTime("0" + datetime);
      } else {
        setTime(datetime);
      }
    }, 500);
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
        <div className="date_time">{time}</div>
      </div>
    </div>
  );
};

export default Time;
