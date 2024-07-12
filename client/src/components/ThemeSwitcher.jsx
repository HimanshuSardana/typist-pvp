import React from "react";
import { Moon, MoonIcon, SunIcon } from "lucide-react";
import { useState } from "react";

function ThemeSwitcher() {
  const [currTheme, setCurrThenme] = useState(
    document.body.classList.contains("dark") ? "dark" : "light"
  );
  return (
    <div className="stroke-black dark:stroke-white">
      {currTheme == "dark" ? (
        <SunIcon className="stroke-white" />
      ) : (
        <MoonIcon />
      )}
    </div>
  );
}

export default ThemeSwitcher;
