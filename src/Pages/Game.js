import React, { useState } from "react";

function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (board[index] === null && !winner) {
      const newBoard = [...board];
      newBoard[index] = player;
      setBoard(newBoard);
      setPlayer(player === "X" ? "O" : "X");

      if (!calculateWinner(newBoard)) {
        setTimeout(() => computerMove(newBoard), 500);
      }
    }
  };

  const computerMove = (board) => {
    const emptyIndices = board
      .map((cell, index) => (cell === null ? index : null))
      .filter((index) => index !== null);
    const randomIndex =
      emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
    const newBoard = [...board];
    newBoard[randomIndex] = "O";
    setBoard(newBoard);
    setPlayer("X");
  };

  const calculateWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // columns
      [0, 4, 8],
      [2, 4, 6], // diagonals
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        return board[a];
      }
    }

    if (!board.includes(null)) {
      setWinner("Draw");
      return "Draw";
    }

    return null;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setPlayer("X");
    setWinner(null);
  };

  return (
    <div className="flex flex-col items-center max-h-[28rem] justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-2 text-indigo-600">
        As the website loads, Try to win this challenge!
      </h1>
      <h2 className="text-2xl font-bold mb-8">Tic Tac Toe</h2>
      <div className="grid grid-cols-3 gap-2 mb-4">
        {board.map((cell, index) => (
          <div
            key={index}
            className={`w-20 h-20 border-blue-500 border-solid border-2 rounded-lg bg-white flex items-center justify-center text-4xl font-bold cursor-pointer ${
              cell === "X"
                ? "text-blue-500"
                : cell === "O"
                ? "text-red-500"
                : ""
            }`}
            onClick={() => handleClick(index)}
          >
            {cell}
          </div>
        ))}
      </div>
      {winner && (
        <div className="mb-4">
          <p className="text-xl font-bold">
            {winner === "Draw" ? "It's a draw!" : `${winner} wins!`}
          </p>
          <button aria-label="btn"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={resetGame}
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}

export default Game;
