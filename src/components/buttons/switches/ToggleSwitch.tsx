import React, { ReactElement } from "react";

interface SwitchProps {
  value: boolean;
  onChange: () => void;
  color: string;
  icons?: {
    left?: ReactElement;
    right?: ReactElement;
  };
}

const ToggleSwitch = ({
  value = false,
  onChange,
  color = "bg-blue-500",
  icons,
}: SwitchProps) => {
  return (
    <div
      onClick={onChange}
      className="flex justify-center gap-2 w-[70px] h-9 rounded-full relative items-center bg-gray-200 shadow-sm cursor-pointer"
    >
      <span
        className={`${
          value === true ? "ml-[2.2rem]" : "ml-1"
        } ${color} h-8 w-8 rounded-full transition-all duration-300 flex items-center justify-center absolute left-0`}
      ></span>
      <span className="flex justify-center items-center z-20 mr-1">
        {icons?.left &&
          React.cloneElement(icons?.left, {
            className: `w-[21px] h-[21px] ${
              value === true ? "text-gray-400" : "text-white"
            }`,
          })}
      </span>
      <span className="flex justify-center items-center z-20 ">
        {icons?.right &&
          React.cloneElement(icons?.right, {
            className: `w-[21px] h-[21px] ${
              value === true ? "text-white" : "text-gray-400"
            }`,
          })}
      </span>
    </div>
  );
};

export default ToggleSwitch;
