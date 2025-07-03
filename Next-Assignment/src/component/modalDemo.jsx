// src/component/ModalDemo.jsx
import React, { useState } from "react";
import Modal from "./modal.jsx";

const ModalDemo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)} data-testid="open-button">
        Open Modal
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        This is the modal content
      </Modal>
    </div>
  );
};

export default ModalDemo;
