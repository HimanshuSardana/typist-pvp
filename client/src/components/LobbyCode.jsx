import React from "react";

function LobbyCode({ code }) {
  return (
    <div className="text-center mt-10 console-text">
      <span className="dark:bg-zinc-800 dark:text-white bg-gray-200 p-3 rounded-md">
        Lobby Code: <span className="font-bold">{code}</span>
      </span>
    </div>
  );
}

export default LobbyCode;
