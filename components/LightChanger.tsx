"use client";
import React, { useState, useEffect } from "react";
import SunIcon from "../public/sun.svg";
import MoonIcon from "../public/moon.svg";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
    >
      <img
        src={darkMode ? SunIcon : MoonIcon}
        alt="theme toggle"
        className="w-6 h-6"
      />
    </button>
  );
}
