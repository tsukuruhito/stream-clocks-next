import home from "../styles/scss/Home.module.scss";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

type PropsType = {
  color: string;
  setSelectedType: Dispatch<SetStateAction<string>>;
  setColor: Dispatch<SetStateAction<string>>;
  setNeon: Dispatch<SetStateAction<string>>;
  setGeometory: Dispatch<SetStateAction<string>>;
  setApex: Dispatch<SetStateAction<string>>;
  setRetro: Dispatch<SetStateAction<string>>;
};
const Control = (props: PropsType) => {
  const {
    color,
    setSelectedType,
    setColor,
    setNeon,
    setGeometory,
    setApex,
    setRetro,
  } = props;

  const array = [
    "noframe",
    "simple",
    "pastel",
    "neon",
    "retroGame",
    "liquid",
    "geometory",
    "apex",
    "retro",
  ];
  const neonArray = ["white", "blue"];
  const geometryArray = ["pattern1", "pattern2", "pattern3"];
  const apexArray = ["red", "blue", "green"];
  const retroArray = ["pattern1", "pattern2"];

  const onClickType = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedType(e.target.value);
  };
  const colorSelect = (e: ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };
  const neonSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setNeon(e.target.value);
  };
  const apexSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setApex(e.target.value);
  };
  const geometorySelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setGeometory(e.target.value);
  };
  const retroSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setRetro(e.target.value);
  };

  return (
    <section className={home.control}>
      <ul>
        {array.map((item, index) => {
          return (
            <li key={index}>
              <input
                id={item}
                type="radio"
                name="type"
                value={item}
                onChange={(e) => onClickType(e)}
              />
              <label htmlFor={item}>{item}</label>
              {item === "noframe" && (
                <input
                  type="color"
                  defaultValue={color}
                  style={{
                    marginLeft: "10px",
                    width: "50px",
                  }}
                  onChange={(e) => colorSelect(e)}
                />
              )}
              {item === "neon" && (
                <select
                  style={{ marginLeft: "10px" }}
                  onChange={(e) => neonSelect(e)}
                >
                  {neonArray.map((item, index) => {
                    return (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              )}
              {item === "geometory" && (
                <select
                  style={{ marginLeft: "10px" }}
                  onChange={(e) => geometorySelect(e)}
                >
                  {geometryArray.map((item, index) => {
                    return (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              )}
              {item === "apex" && (
                <select
                  style={{ marginLeft: "10px" }}
                  onChange={(e) => apexSelect(e)}
                >
                  {apexArray.map((item, index) => {
                    return (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              )}
              {item === "retro" && (
                <select
                  style={{ marginLeft: "10px" }}
                  onChange={(e) => retroSelect(e)}
                >
                  {retroArray.map((item, index) => {
                    return (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Control;
