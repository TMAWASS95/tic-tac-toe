import React, { useState } from "react";
import Board from "./components/Board";
import "./App.css";

export default function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [theme, setTheme] = useState("light"); // light or dark

  const handleClick = (index) => {
    if (squares[index] || calculateWinner(squares)) return;

    const nextSquares = squares.slice();
    nextSquares[index] = xIsNext ? "X" : "O";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? "X" : "O"}`;

  const restartGame = () => setSquares(Array(9).fill(null));
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <div className={`app ${theme}`}>
      <h1>Tic Tac Toe</h1>
      <Board squares={squares} onClick={handleClick} winner={winner} />
      <p className="status">{status}</p>
      <div className="buttons">
        <button className="restart-btn" onClick={restartGame}>
          Restart Game
        </button>
        <button className="theme-btn" onClick={toggleTheme}>
          Toggle Theme
        </button>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [squares[a], [a, b, c]]; // return symbol and winning indexes
    }
  }
  return null;
}
