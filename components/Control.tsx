import home from "../styles/scss/Home.module.scss";
import { ChangeEvent, Dispatch, SetStateAction, useContext, useState } from "react";
// import ColorPicker from "./ColorPicker";
import SelectType from "./SelectType";
// import { selectedAtom } from "../Atom";
import { useAtom } from "jotai";
import { selectedTypeContext } from "../pages/_app";

type PropsType = {
  color: string;
  setColor: Dispatch<SetStateAction<string>>;
  setNeon: Dispatch<SetStateAction<string>>;
  setGeometory: Dispatch<SetStateAction<string>>;
  setApex: Dispatch<SetStateAction<string>>;
  setRetro: Dispatch<SetStateAction<string>>;
};
const Control = (props: PropsType) => {
  const { color, setColor, setNeon, setGeometory, setApex, setRetro } = props;
    const {selectedType, setSelectedType} = useContext(selectedTypeContext);
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
  const neonArray = ["neon-white", "neon-blue"];
  const geometoryArray = ["geo1", "geo2", "geo3"];
  const apexArray = ["apex-red", "apex-blue", "apex-green"];
  const retroArray = ["retro1", "retro2"];
  const [openPick, setOpenPick] = useState(false);

  const onClickType = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedType(e.target.value);
    setOpenPick(false);
  };
  const openPickMenu = () => {
    setOpenPick(!openPick);
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
                checked={item === selectedType}
              />
              <label htmlFor={item}>{item}</label>
              {item === "noframe" && (
                <div
                  className="w-6 h-6 relative rounded-md box-border border-2 border-neutral-400"
                  style={{ backgroundColor: color }}
                  onClick={openPickMenu}
                >
                  {/* <div
                    className={`absolute z-10 right-0 top-8  ${
                      !openPick && "hidden"
                    }`}
                  >
                    <ColorPicker color={color} setColor={setColor} />
                  </div> */}
                </div>
              )}
              {item === "neon" && (
                <SelectType name="neon" ary={neonArray} setState={setNeon} />
              )}
              {item === "geometory" && (
                <SelectType
                  name="geometory"
                  ary={geometoryArray}
                  setState={setGeometory}
                />
              )}
              {item === "apex" && (
                <SelectType name="apex" ary={apexArray} setState={setApex} />
              )}
              {item === "retro" && (
                <SelectType name="retro" ary={retroArray} setState={setRetro} />
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Control;
