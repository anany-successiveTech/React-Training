"use client";

import React, { useState } from "react";
import "@/app/styles/gametic.css";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Typography from "@mui/material/Typography";

const TicTacToe = () => {
  const [cell, setCell] = useState(Array(9).fill(""));
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [winAlertOpen, setWinAlertOpen] = useState(false);

  const winningPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (cells) => {
    for (let [a, b, c] of winningPattern) {
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        setWinner(cells[a]);
        setWinAlertOpen(true);
        return;
      }
    }
    if (!cells.includes("") && !winner) {
      setWinner("Draw");
      setWinAlertOpen(true);
    }
  };

  const handleClick = (index) => {
    if (cell[index] !== "" || winner) return;

    const newCell = [...cell];
    newCell[index] = "X";
    setCell(newCell);
    checkWinner(newCell);

    if (!winner) {
      setTimeout(() => {
        makeComputerMove(newCell);
      }, 500);
    }
  };

  const makeComputerMove = (cells) => {
    if (winner) return;

    const emptyIndexes = [];
    for (let i = 0; i < cells.length; i++) {
      if (cells[i] === "") emptyIndexes.push(i);
    }

    if (emptyIndexes.length === 0) return;

    const randomIndex =
      emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)];
    const newCells = [...cells];
    newCells[randomIndex] = "O";

    setCell(newCells);
    checkWinner(newCells);
  };

  const handleResetGame = () => {
    setCell(Array(9).fill(""));
    setPlayer("X");
    setWinner(null);
    setSnackbarOpen(true);
    setWinAlertOpen(false);
  };

  return (
    <div>
      <div className="ttt-header">
        <h1>TIC TAC TOE</h1>
        <Typography variant="subtitle1" color="text.secondary">
          {winner ? "" : "Your Turn: X"}
        </Typography>
      </div>

     <div className="ttt-game-container">
  <div className="ttt-row">
    <button onClick={() => handleClick(0)} disabled={winner || cell[0] !== ""}>{cell[0]}</button>
    <button onClick={() => handleClick(1)} disabled={winner || cell[1] !== ""}>{cell[1]}</button>
    <button onClick={() => handleClick(2)} disabled={winner || cell[2] !== ""}>{cell[2]}</button>
  </div>
  <div className="ttt-row">
    <button onClick={() => handleClick(3)} disabled={winner || cell[3] !== ""}>{cell[3]}</button>
    <button onClick={() => handleClick(4)} disabled={winner || cell[4] !== ""}>{cell[4]}</button>
    <button onClick={() => handleClick(5)} disabled={winner || cell[5] !== ""}>{cell[5]}</button>
  </div>
  <div className="ttt-row">
    <button onClick={() => handleClick(6)} disabled={winner || cell[6] !== ""}>{cell[6]}</button>
    <button onClick={() => handleClick(7)} disabled={winner || cell[7] !== ""}>{cell[7]}</button>
    <button onClick={() => handleClick(8)} disabled={winner || cell[8] !== ""}>{cell[8]}</button>
  </div>
</div>


      <div className="ttt-controls">
        <button onClick={handleResetGame}>Reset Game</button>
      </div>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={1500}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Game Reset Successfully!
        </Alert>
      </Snackbar>

      <Snackbar
        open={winAlertOpen}
        autoHideDuration={3000}
        onClose={() => setWinAlertOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setWinAlertOpen(false)}
          severity={winner === "Draw" ? "info" : "success"}
          sx={{ width: "100%" }}
        >
          {winner === "Draw" ? "It's a Draw!" : `🎉 Player ${winner} Wins!`}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default TicTacToe;
