import React from "react";

function LobbyCode(props) {
  const code = props.code;
  return (
    <div className="text-center mt-10 console-text">
      <span className="bg-gray-200 p-3 rounded-md">
        Lobby Code: <span className="font-bold">{code}</span>
      </span>
    </div>
  );
}

export default LobbyCode;
