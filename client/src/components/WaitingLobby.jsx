import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import { User } from "lucide-react";
import { useParams } from "react-router-dom";

function WaitingLobby() {
  const [players, setPlayers] = useState(["Himanshu", "User 2", "User 3"]);
  const [name, setName] = useState("himanshu");
  const [tempName, setTempName] = useState("");
  const params = useParams();
  const lobbyCode = params["lobbyCode"];
  return (
    <>
      <Navbar />
      {name == "" ? (
        <div className="flex gap-5 items-center ml-20 mt-10">
          <input
            type="text"
            onChange={(e) => {
              setTempName(e.target.value);
            }}
            placeholder="Name"
            className="border border-gray-300 border-2 pt-3 pb-3 pl-5 pr-5 outline-none focus:border-blue-500 rounded-md"
          />
          <button
            className="pl-5 pr-5 pt-3 rounded-md pb-3 bg-blue-500 text-white font-bold"
            onClick={() => {
              setName(tempName);
              console.log(tempName);
              console.log(name);
            }}
          >
            Join Lobby
          </button>
        </div>
      ) : (
        <div className="ml-20 mt-10 mr-20">
          <div className="flex flex-row justify-between items-center gap-5">
            <div className="bg-gray-200 p-5 text-lg rounded-md">
              Lobby Code:{" "}
              <span className="dark:text-blue-500 font-bold">{lobbyCode}</span>
            </div>
            <div className="flex gap-5">
              <button
                disabled={players.length == 0}
                className={
                  players.length == 0
                    ? "pl-5 pr-5 p-3 bg-blue-300 text-white font-bold text-lg rounded-md"
                    : "pl-5 pr-5 p-3 bg-blue-500 text-white font-bold text-lg rounded-md"
                }
              >
                Start Test
              </button>
              <button className="hover:bg-red-100 transition transition-[500] pl-5 pr-5 p-3 text-red-500 font-bold text-lg rounded-md">
                Delete Lobby
              </button>
            </div>
          </div>
          <h3 className="font-bold text-xl mt-5">
            Players in Lobby ({players.length})
          </h3>
          <div className="flex gap-5 flex-row mt-5">
            {players.map((player, key) => {
              return (
                <div
                  key={key}
                  className="rounded-md p-3 pl-5 pr-5 font-bold text-blue-500 border border-blue-500 border-2 "
                >
                  <h1 className="flex gap-3">
                    <User />
                    {player}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default WaitingLobby;
