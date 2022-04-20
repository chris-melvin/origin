import { useState, useEffect, useContext } from "react";
import { BsSunFill, BsMoon } from "react-icons/bs";
import { ThemeContext } from "./darkThemeContext";

export default function Darkmode() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);
  const handleClick = () => {
    if (darkMode) theme.dispatch({ type: "LIGHTMODE" });
    else theme.dispatch({ type: "DARKMODE" });
  };
  return (
    <button className="mx-6" onClick={handleClick}>
      {darkMode ? (
        <BsMoon className="text-[#219ebc] text-xl" />
      ) : (
        <BsSunFill className="text-[#ffb703]  text-xl" />
      )}
    </button>
  );
}
