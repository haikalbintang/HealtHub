"use client";
import React, { useState } from "react";

function MyModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={openModal}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Open Modal
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-75 flex">
          <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded shadow-lg">
            <div className="absolute top-0 right-0 p-4">
              <button onClick={closeModal}>&times;</button>
            </div>
            <h2 className="text-xl font-semibold mb-4">Modal Title</h2>
            <p className="mb-4">Modal content goes here.</p>
            <button
              onClick={closeModal}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Close Modal
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyModal;
