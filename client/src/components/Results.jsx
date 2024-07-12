import React from "react";

function Results({ wpm, accuracy, timeTaken }) {
  return (
    <div className="flex flex-col gap-5 mx-20 mt-10">
      <h3 className="text-3xl text-blue-500 px-20 font-black flex flex-row gap-2">
        <span className="text-zinc-600">#1</span> <h3>Himanshu</h3>
      </h3>
      <div className="flex gap-3 sm:flex-col md:flex-row w-screen px-20 ">
        <div className="card p-5  border border-1 dark:border-zinc-800 border-zinc-300 dark:bg-zinc-800 rounded-md bg-white w-full flex flex-col-reverse">
          <h3 className="text-lg font-bold text-zinc-400 ">Words per minute</h3>
          <span className="text-3xl font-black text-blue-500">
            {parseInt(wpm)}
          </span>
        </div>
        <div
          className={
            accuracy == 100
              ? "card p-5 border border-2 dark:border-blue-500 border-zinc-300 rounded-md dark:bg-zinc-800 bg-white w-full flex flex-col-reverse relative"
              : "card p-5 border border-1 dark:border-zinc-800 border-zinc-300 rounded-md dark:bg-zinc-800 bg-white w-full flex flex-col-reverse relative"
          }
        >
          <h3 className="text-lg font-bold text-zinc-400 ">Accuracy</h3>
          <span className="text-3xl font-black text-blue-500">{accuracy}%</span>
          {accuracy == 100 ? (
            <span className="absolute top-0 font-bold right-0 py-1 px-2 bg-blue-500 rounded-bl-md">
              Perfect!
            </span>
          ) : (
            ""
          )}
        </div>

        <div className="card p-5 bg-white dark:border-zinc-800 border border-1 border-zinc-300 dark:bg-zinc-800 rounded-md  w-full flex flex-col-reverse">
          <h3 className="text-lg font-bold text-zinc-400 ">Time Taken</h3>
          <span className="text-3xl font-black text-blue-500">
            {timeTaken}s
          </span>
        </div>
      </div>
    </div>
  );
}

export default Results;
