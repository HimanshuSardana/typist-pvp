import React from "react";

function Input() {
  return (
    <div>
      <div className="field relative">
        <input
          type="text"
          placeholder="Name"
          id="name"
          className="peer px-5 py-4 pt-5 transition dark:bg-zinc-800 rounded-md border border-2 dark:border-zinc-800 focus:dark:border-blue-500 outline-none dark:text-white"
        />

        <label
          htmlFor="name"
          className="absolute opacity-1 transition-all text-xs text-blue-500 top-2 left-[1.2rem] peer-placeholder-shown:top-[1.3rem] peer-placeholder-shown:text-[1rem] peer-placeholder-shown:text-zinc-400 left-[1.4rem] peer-placeholder-shown:opacity-0"
        >
          Name
        </label>
      </div>
    </div>
  );
}

export default Input;
