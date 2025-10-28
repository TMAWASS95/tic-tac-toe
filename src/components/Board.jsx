import "../App.css";
import Square from "./Square";

export default function Board({ squares, onClick, winner }) {
  const winningIndexes = winner ? winner[1] : [];

  return (
    <div className="board">
      {squares.map((value, index) => (
        <Square
          key={index}
          value={value}
          onClick={() => onClick(index)}
          isWinning={winningIndexes.includes(index)}
        />
      ))}
    </div>
  );
}
