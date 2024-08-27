import { useEffect, useState } from "react";
import ToggleSwitch from "../buttons/switches/ToggleSwitch";
import { FaSun } from "react-icons/fa";
import { IoMoonSharp } from "react-icons/io5";

interface ThemeButtonProps {
  colorSwitch: string;
  vertical?:boolean;
}

const ThemeButton = ({colorSwitch, vertical}:ThemeButtonProps) => {
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

  return <ToggleSwitch value={theme === "dark"} onChange={onChange} color={colorSwitch} icons={{left:<FaSun/>,right:<IoMoonSharp/>}} vertical={vertical}/>;
};

export default ThemeButton;
