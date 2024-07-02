import React from "react";
import { Moon } from "lucide-react";

function Navbar() {
  return (
    <div className="navbar h-50 flex pt-10 pl-10 pr-10 items-center justify-between dark:bg-blue-500">
      <div className="pl-10 brand text-2xl cursor-pointer">
        <span className="font-bold">typist</span>
        <span className="text-blue-500 dark:text-red-500 font-bold">pvp</span>
      </div>
      <div className="theme-switcher pr-10 cursor-pointer">
        <Moon />
      </div>
    </div>
  );
}

export default Navbar;
