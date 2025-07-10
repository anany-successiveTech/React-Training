// src/component/Modal.jsx
import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div data-testid="modal-backdrop" className="modal-backdrop">
      <div className="modal-content">
        {children}
        <button onClick={onClose} data-testid="close-button">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
