import home from "../styles/scss/Home.module.scss";
import { ChangeEvent, Dispatch, FormEvent, MouseEvent, SetStateAction, useState } from "react";

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
  const [open, setOpen] = useState(false);

  const onClickType = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedType(e.target.value);
  };
  const colorSelect = (e: ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };
  const neonSelect = (e: MouseEvent<HTMLInputElement>) => {
    setNeon(e.currentTarget.value);
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
  const openMenu = () => {
    setOpen(!open);
  }

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
                  type="text"
                  defaultValue={color}
                  style={{
                    marginLeft: "10px",
                    width: "100px",
                  }}
                  onChange={(e) => colorSelect(e)}
                />
              )}
              {item === "neon" && (
                // <select
                //   style={{ marginLeft: "10px" }}
                //   onChange={(e) => neonSelect(e)}
                // >
                //   {neonArray.map((item, index) => {
                //     return (
                //       <option key={index} value={item}>
                //         {item}
                //       </option>
                //     );
                //   })}
                // </select>
                <div className="relative">
                    <button type="button" onClick={openMenu}>select</button>
                    <div className={open? "absolute z-10 right-0": "absolute z-10 right-0 hidden"} >
                        <ul>
                            {neonArray.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <input
                                            type="radio"
                                            name="neon"
                                            value={item}
                                            id={item}
                                            onClick={(e) => neonSelect(e)}
                                        />
                                        <label htmlFor={item}>{item}</label>
                                    </li>
                                );
                            }
                            )}
                        </ul>
                    </div>
                </div>
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
