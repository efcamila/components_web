import React,{ ReactElement, useEffect, useState } from "react";
import ToggleSwitch from "../buttons/switches/ToggleSwitch";
import { IoSunnySharp } from "react-icons/io5";
import { RxMoon } from "react-icons/rx";

interface ThemeButtonProps {
  colorSwitch?: string;
  vertical?:boolean;
  icons?:{
    left?:ReactElement;
    right?:ReactElement;
  }
}

const ThemeButton = ({
  colorSwitch = "primary",
  vertical,
  icons = { left: <IoSunnySharp />, right: <RxMoon /> }
}: ThemeButtonProps) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  const onChange = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return <ToggleSwitch value={theme === "dark"} onChange={onChange} color={colorSwitch} icons={icons} vertical={vertical}/>;
};

export default ThemeButton;
