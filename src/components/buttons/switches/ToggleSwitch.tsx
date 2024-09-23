import React, { ReactElement } from "react";
import "./Switch.css"

interface SwitchProps {
  value: boolean;
  onChange: () => void;
  color: string;
  icons?: {
    left?: ReactElement;
    right?: ReactElement;
  };
  vertical?: boolean;
}

const ToggleSwitch = ({
  value = false,
  onChange,
  color = "primary",
  icons,
  vertical = false
}: SwitchProps) => {
  return (
    <>
    {vertical ? (
      <div
      onClick={onChange}
      className="flex flex-col justify-center gap-2  w-9 h-[65px] rounded-full relative items-center bg-gray-200 shadow-sm cursor-pointer"
      >
        <span
        className={`transition-top-bottom duration-300 ease-in-out ${value === true ? "bottom-[2px]" : "top-[2px]" } ${color} h-8 w-8 rounded-full flex flex-col items-center justify-center absolute`}
          ></span>
      <span className="flex flex-col justify-center items-center z-20">
        {icons?.left &&
          React.cloneElement(icons?.left, {
            className: `w-[21px] h-[21px] ${
              value === true ? "text-gray-400" : "text-white"
              }`,
            })}
      </span>
      <span className="flex flex-col justify-center items-center z-20 ">
        {icons?.right &&
          React.cloneElement(icons?.right, {
            className: `w-[21px] h-[21px] ${
              value === true ? "text-white" : "text-gray-400"
              }`,
            })}
      </span>
    </div>
    ):(
      <div
      onClick={onChange}
      className="flex justify-center gap-2 w-[65px] h-9 rounded-full relative items-center bg-gray-200 shadow-sm cursor-pointer"
      >
      <span
        className={`${
          value === true ? "right-[2px]" : "left-[2px]"
          } ${color} h-8 w-8 rounded-full transition-all duration-300 flex items-center justify-center absolute`}
          ></span>
      <span className="flex justify-center items-center z-20">
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
    )}
          </>
        );
};

export default ToggleSwitch;
