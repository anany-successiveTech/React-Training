import React, { useState } from "react";
import Modal from "./Modal";

const ModalDemo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button data-testid="open-button" onClick={() => setIsOpen(true)}>
        Open Modal
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <p>This is the modal content</p>
      </Modal>
    </div>
  );
};

export default ModalDemo;
