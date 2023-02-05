import React, { useState } from "react";

const Score = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  return (
    <div className="text-center sm:p-8">
      <p>
        Your score: <span className="font-medium">{score}</span>
      </p>
      <p>
        Best score: <span className="font-medium">{bestScore}</span>{" "}
      </p>
    </div>
  );
};

export default Score;
