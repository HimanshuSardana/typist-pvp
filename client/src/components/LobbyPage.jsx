import React from "react";
import Navbar from "./Navbar";
import Modal from "./Modal";
import { useState } from "react";

function LobbyPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  fetch("/generate/50")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); // Assuming the response is JSON
    })
    .then((data) => {
      console.log("Generated data:", data);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Navbar />
      <div className="ml-20 mt-10 flex gap-5">
        <button
          onClick={openModal}
          className="pl-5 pr-5 p-3 bg-blue-500 text-white font-bold text-lg rounded-md"
        >
          Create Lobby
        </button>
        <button className="pl-5 pr-5 p-3 bg-white text-blue-500 font-bold text-lg border rounded-md border-2 border-blue-500">
          Join Lobby
        </button>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </>
  );
}

export default LobbyPage;
