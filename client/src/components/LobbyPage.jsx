import React from "react";
import Navbar from "./Navbar";
function LobbyPage() {
  return (
    <>
      <Navbar />
      <div className="ml-20 mt-10 flex gap-5">
        <button className="pl-5 pr-5 p-3 bg-blue-500 text-white font-bold text-lg rounded-md">
          Create Lobby
        </button>
        <button className="border-blue-500 pl-5 pr-5 p-3 bg-white text-blue-500 font-bold text-lg rounded-md">
          Join Lobby
        </button>
      </div>
    </>
  );
}

export default LobbyPage;
