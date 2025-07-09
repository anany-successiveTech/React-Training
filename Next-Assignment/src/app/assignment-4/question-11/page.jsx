"use client";

import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Typography,
  Box,
} from "@mui/material";

function App() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Submitted:", formData);
    setOpen(false);
  };

  return (
    <div>
      <p style={{ textAlign: "center", margin: "2rem" }}>
        11.Design a modal dialog component using Material-UI's Dialog component.
        Use it to display additional information or capture user input within
        your app.
      </p>
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          My App
        </Typography>
        <Button variant="contained" onClick={handleClickOpen}>
          Open Dialog
        </Button>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Enter Your Info</DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              name="name"
              label="Name"
              type="text"
              fullWidth
              variant="outlined"
              value={formData.name}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              name="email"
              label="Email"
              type="email"
              fullWidth
              variant="outlined"
              value={formData.email}
              onChange={handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </div>
  );
}

export default App;
