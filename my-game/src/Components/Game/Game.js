import React, { useState } from "react";
import Board from "./Board";
import Score from "./Score";

const Game = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const updateScore = () => {
    // update score logic here
    console.log("score updated");
    setScore(score + 1);
  };

  const updateBestScore = () => {
    // conditional check for score when the game finishes
  };

  return (
    <div className="text-center h-full bg-neutral-700 m-4 rounded border-neutral-600 border-2 flex-col justify-center items-center">
      <Score score={score} bestScore={bestScore} />
      <Board
        score={score}
        updateScore={updateScore}
        updateBestScore={updateBestScore}
      />
    </div>
  );
};

export default Game;
