import React from "react";
import { useState, useEffect } from "react";
const Toggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    console.log("I am use Effect ");
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
        className="bg-gray-200 p-3 mt-10 md:ml-10 rounded-3xl hover:bg-green-600 transition-all hover:text-white"
      >
        Mode
      </button>
    </div>
  );
};
export default Toggle;
