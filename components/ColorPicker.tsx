
import { Dispatch, memo, SetStateAction } from "react";
import { HexColorPicker } from "react-colorful";
type PropsType = {
  color: string;
  setColor: Dispatch<SetStateAction<string>>;
};
const ColorPicker = (props: PropsType) => {
  const { color, setColor } = props;
  return <HexColorPicker color={color} onChange={setColor} />;
};

export default ColorPicker;
