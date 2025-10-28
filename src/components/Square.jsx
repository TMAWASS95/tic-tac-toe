import "../App.css";

export default function Square({ value, onClick, isWinning }) {
  return (
    <button
      className={`square ${value ? "filled" : ""} ${isWinning ? "winner" : ""}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}
