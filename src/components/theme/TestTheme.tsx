import ThemeButton from "./Theme";
import { BsEmojiSunglassesFill } from "react-icons/bs";
import { FaSmile } from "react-icons/fa";
import Text from "../text/Text";
import Table from "../tables/TableAction";
import React from "react";
import TableInfoPages from "../../pages/componentsPages/TableInfoPages";

const data = [
  {
    attribute: "colorSwitch",
    type: "string",
    description: "Define el color del círculo.",
    default: "primary",
  },
  {
    attribute: "vertical?",
    type: "boolean",
    description:
      "Define la dirección vertical del ThemeButton",
    default: "false",
  },
  {
    attribute: <>icons?:<br/>{`{left?,right?}`}</>,
    type: "ReactElement",
    description: "Define el ícono izquierdo y derecho.",
    default: "left: <IoSunnySharp />, right: <RxMoon />",
  },
];


const TestTheme = () => {
  return (
    <div className="flex flex-col gap-5 mt-5">
      <div className="mb-4">
      <TableInfoPages data={data}/>
      </div>

      <div className="flex flex-col gap-3">
        <Text.Heading3>Default</Text.Heading3>
        <ThemeButton/>
      </div>

      <div className="flex flex-col gap-3">
        <Text.Heading3>ColorSwitch</Text.Heading3>
        <ThemeButton colorSwitch="bg-rose-500" />
      </div>

      <div className="flex flex-col gap-3">
      <Text.Heading3>Vertical</Text.Heading3>
      <ThemeButton colorSwitch="bg-orange-600" vertical />
      </div>

      <div className="flex flex-col gap-3">
      <Text.Heading3>Icons</Text.Heading3>
      <ThemeButton
            colorSwitch="bg-red-400"
            icons={{ left: <BsEmojiSunglassesFill />, right: <FaSmile /> }}
          />
      </div>
    </div>
  );
};

export default TestTheme;
