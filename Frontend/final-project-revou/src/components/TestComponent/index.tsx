import React, { useState } from "react";
import Modal from "react-modal";

function MyModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isOpen} onRequestClose={closeModal}>
        <h2>Modal Title</h2>
        <p>Modal content goes here.</p>
        <button onClick={closeModal}>Close Modal</button>
      </Modal>
    </div>
  );
}

export default MyModal;
