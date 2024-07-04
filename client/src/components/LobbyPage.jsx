import React from "react";
import Navbar from "./Navbar";
import { useState } from "react";

function LobbyPage() {
  const [visible, setVisible] = useState("");
  return (
    <>
      <Navbar />
      {visible == "" ? (
        <div className="ml-20 mt-10 flex gap-5">
          <button
            className="pl-5 pr-5 p-3 bg-blue-500 text-white font-bold text-lg rounded-md"
            onClick={setVisible("create")}
          >
            Create Lobby
          </button>
          <button className="pl-5 pr-5 p-3 bg-white text-blue-500 font-bold text-lg border rounded-md border-2 border-blue-500">
            Join Lobby
          </button>
        </div>
      ) : visible == "create" ? (
        "Create"
      ) : (
        "Join"
      )}
    </>
  );
}

export default LobbyPage;
