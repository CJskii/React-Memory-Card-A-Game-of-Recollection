import React, { useState } from "react";
import Board from "./Board";
import Score from "./Score";

const Game = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const cardNames = [
    "Ash",
    "Bangalore",
    "Bloodhound",
    "Caustic",
    "Crypto",
    "Fuse",
    "Gibraltar",
    "Horizon",
    "Lifeline",
    "Loba",
    "Maggie",
    "Mirage",
    "Newcastle",
    "Octane",
    "Pathfinder",
    "Rampart",
    "Revenant",
    "Seer",
    "Valkyrie",
    "Vantage",
    "Wattson",
    "Wraith",
  ];

  const updateScore = () => {
    // update score logic here
    console.log("score updated");
    setScore(score + 1);
  };

  const restartGame = () => {
    console.log("restarting");
    if (score > bestScore) {
      setBestScore(score);
      setScore(0);
    } else {
      setScore(0);
    }
  };

  return (
    <div className="game text-center h-full bg-neutral-700 m-4 rounded border-neutral-600 border-2 flex-col justify-center items-center">
      <Score score={score} bestScore={bestScore} />
      <Board
        score={score}
        updateScore={updateScore}
        cardNames={cardNames}
        restartGame={restartGame}
      />
    </div>
  );
};

export default Game;
