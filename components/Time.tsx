import { useState } from "react";
import home from "../styles/scss/Home.module.scss";

type PropsType = {
    selectedType: string,
    color: string,
    neon: string,
    geometory: string,
    apex: string,
    retro: string,
}
const Time = (props: PropsType) => {
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [time, setTime] = useState("");
  const [day, setDay] = useState(
    new Date().toLocaleString("en-US", { weekday: "long" })
  );
  const {selectedType, color, neon, geometory, apex, retro} = props;

  setInterval(() => {
    const datetime = new Date().toLocaleTimeString().slice(0, -3);
    setDate(new Date().toLocaleDateString());
    setDay(new Date().toLocaleString("en-US", { weekday: "long" }));
    if (datetime.length === 4) {
      setTime("0" + datetime);
    } else {
      setTime(datetime);
    }
  }, 1000);

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
