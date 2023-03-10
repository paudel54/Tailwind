import React from "react";
import { useState, useEffect } from "react";
const Toggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  //   toggling func
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    console.log("handler pressed");
  };

  return (
    <div>
      <button
        onClick={handleThemeSwitch}
        className="bg-green-200 p-4 rounded-3xl"
      >
        Dark Mode
      </button>
    </div>
  );
};
export default Toggle;
