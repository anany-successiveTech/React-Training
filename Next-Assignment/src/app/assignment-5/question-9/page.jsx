"use client";

import { useState } from "react";
import MuiModal from "@/app/styles/commonUI/MuiModal";
import { Button, Typography } from "@mui/material";

const ModalDemoPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState("info");

  const openModal = (type) => {
    setModalType(type);
    setIsOpen(true);
  };

  const getModalContent = () => {
    if (modalType === "success") {
      return (
        <Typography color="success.main">
          ✔️ Post created successfully!
        </Typography>
      );
    } else if (modalType === "error") {
      return (
        <Typography color="error.main">
          Failed to create post.
        </Typography>
      );
    } else {
      return (
        <Typography>
          This is a general information modal.
        </Typography>
      );
    }
  };

  return (
    <div>
      <p style={{ textAlign: "center", margin: "2rem" }}>
        9. Design and implement a reusable Modal component that allows
        customization of its content. Provide controls to open, close, and
        toggle the modal’s visibility. Demonstrate how to use this component to
        display different types of content within a Next.js application.
      </p>

      <main style={{ textAlign: "center", padding: "2rem" }}>
        <Button
          variant="outlined"
          onClick={() => openModal("info")}
          sx={{ m: 1 }}
        >
          Show Info
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={() => openModal("success")}
          sx={{ m: 1 }}
        >
          Show Success
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => openModal("error")}
          sx={{ m: 1 }}
        >
          Show Error
        </Button>

        <MuiModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title={modalType.toUpperCase() + " MESSAGE"}
        >
          {getModalContent()}
        </MuiModal>
      </main>
    </div>
  );
};

export default ModalDemoPage;
