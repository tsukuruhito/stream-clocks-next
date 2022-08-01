import { Dispatch, FormEvent, SetStateAction, useContext, useRef, useState } from "react";
import home from "../styles/scss/Home.module.scss";
import { selectedTypeContext } from "../pages/_app";

type PropsType = {
  name: string;
  ary: string[];
  setState: Dispatch<SetStateAction<string>>;
};
const SelectType = (props: PropsType) => {
  const { name, ary, setState } = props;
    const { setSelectedType} = useContext(selectedTypeContext);
  const ref = useRef<HTMLDivElement>(null);
  const [checkedIndex, setCheckedIndex] = useState(0);

  const setClockType = (index: number) => {
    setState(ary[index]);
    setCheckedIndex(index);
  };
  const openMenu = (e: FormEvent<HTMLButtonElement>, ary: string[]) => {
    setSelectedType(e.currentTarget.value);
    setState(ary[checkedIndex]);
    if (ref.current) {
      ref.current.classList.toggle("hidden");
    }
  };
  return (
    <button
      type="button"
      value={name}
      onClick={(e) => openMenu(e, ary)}
      className={`text-sm pr-5 ${home.arrow}`}
    >
      other
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
                  onChange={() => setClockType(index)}
                  defaultChecked={checkedIndex === index}
                />
                <label htmlFor={item}>{item}</label>
              </li>
            );
          })}
        </ul>
      </div>
    </button>
  );
};
export default SelectType;
