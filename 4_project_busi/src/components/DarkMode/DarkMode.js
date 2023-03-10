import React from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";

import { useState, useEffect } from "react"
// const DarkMode = ({ setDarkMode }) => {
//     const setDarkTheme = () => {
//         document.documentElement.classList.add("dark");
//         setDarkMode(true);
//     };

//     const setLightTheme = () => {
//         document.documentElement.classList.remove("dark");
//         setDarkMode(false);
//     };

//     const toggleTheme = (e) => {
//         if (e.target.checked) setDarkTheme();
//         else setLightTheme();
//     };
const DarkMode = () => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        console.log("I am use Effect ");
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const handleThemeSwitch = (e) => {
        if (e.target.checked) {
            setTheme('dark')
        } else setTheme('light')

    };



    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={handleThemeSwitch}
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;
