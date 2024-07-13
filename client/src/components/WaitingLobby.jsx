import React from "react";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import LobbyCode from "./LobbyCode";
import { User } from "lucide-react";
import { useParams } from "react-router-dom";
import Input from "./Input";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3000");

function WaitingLobby() {
  const [tempName, setTempName] = useState("");
  const [name, setName] = useState("");
  const [playerCreated, setPlayerCreated] = useState(false);
  const [players, setPlayers] = useState([]);
  const params = useParams();
  const lobbyCode = params.lobbyCode;

  useEffect(() => {
    const handleReceiveUser = (message) => {
      setPlayers(message.usersArr);
      console.log(message.usersArr);
    };

    socket.on("recieve-user", handleReceiveUser);

    return () => {
      socket.off("recieve-user", handleReceiveUser);
    };
  }, [socket]);

  useEffect(() => {
    console.log(players);
  }, [players]);

  const joinLobby = () => {
    if (tempName) {
      setName(tempName);
      setPlayerCreated(true);
      socket.emit("join-lobby", { name: tempName, lobbyCode });
    }
  };

  return (
    <div className="h-screen dark:bg-zinc-900">
      <Navbar />
      {playerCreated == false ? (
        <div className="mt-20 ml-20">
          <div className="flex gap-5 items-center ">
            <input
              type="text"
              autofocus
              onChange={(e) => {
                setTempName(e.target.value);
              }}
              placeholder="Name"
              className="border dark:bg-zinc-800 border-zinc-800 text-zinc-400 border-2 pt-3 pb-3 pl-5 pr-5 outline-none focus:border-blue-500 rounded-md"
            />
            <button
              className="pl-5 pr-5 pt-3 rounded-md pb-3 bg-blue-500 text-white font-bold"
              onClick={joinLobby}
            >
              Join Lobby
            </button>
          </div>
        </div>
      ) : (
        <div className="ml-20 mt-10 mr-20">
          <div className="flex sm:flex-col md:flex-row justify-between items-center gap-5">
            <LobbyCode code={lobbyCode} />
            <div className="flex gap-5 md:flex-row sm:flex-col">
              <button
                disabled={players.length == 0}
                className={
                  players.length == 1
                    ? "pl-5 pr-5 p-3 bg-blue-800 text-white font-bold text-lg rounded-md"
                    : "pl-5 pr-5 p-3 bg-blue-500 text-white font-bold text-lg rounded-md"
                }
              >
                {players.length == 1 ? "Waiting for Players" : "Start Test"}
              </button>
              <button className="transition transition-[500] pl-5 pr-5 p-3 text-red-500 font-bold text-lg rounded-md">
                Delete Lobby
              </button>
            </div>
          </div>
          <h3 className="font-bold text-3xl mt-10 dark:text-zinc-300">
            Players in Lobby ({players.length})
          </h3>
          <div className="flex gap-5 flex-col lg:flex-row mt-5">
            {players.map((player, key) => {
              return (
                <div
                  key={key}
                  className={
                    key == players.indexOf(name)
                      ? "rounded-md p-5 sm:w-full lg:w-1/3 font-bold text-blue-500 border dark:bg-zinc-800 border-blue-500 border-2 flex flex-col relative"
                      : "rounded-md p-5 sm:w-full lg:w-1/3 font-bold text-blue-500 border dark:bg-zinc-800 border-zinc-800 border-2 flex flex-col relative"
                  }
                >
                  <h1 className="text-3xl font-black text-blue-500">
                    {player}
                  </h1>
                  <h3 className="text-zinc-500 text-xl">
                    {key == 0 ? "Leader" : "Player"}
                  </h3>
                  {key == players.indexOf(name) && (
                    <span className="absolute top-0 right-0 px-3 py-2 rounded-bl-md bg-blue-500 text-zinc-800">
                      You
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default WaitingLobby;
