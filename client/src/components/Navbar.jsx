import React from "react";
import { Moon } from "lucide-react";
import ThemeSwitcher from "./ThemeSwitcher";

function Navbar() {
  return (
    <div className="navbar h-50 flex pt-10 pl-10 dark:bg-zinc-900 pr-10 items-center justify-between ">
      <div className="pl-10 brand text-2xl cursor-pointer">
        <span className="font-bold dark:text-white">typist</span>
        <span className="text-blue-500 font-bold">pvp</span>
      </div>
      <div className="theme-switcher pr-10 cursor-pointer">
        <ThemeSwitcher />
      </div>
    </div>
  );
}

export default Navbar;
