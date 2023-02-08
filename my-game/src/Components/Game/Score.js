import React from "react";

const Score = (props) => {
  return (
    <div className="score mx-auto text-center sm:p-6 flex flex-shrink-0 items-center justify-center m-2 mt-4 rounded text-emerald-100">
      <p className="px-4 text-2xl">
        Your score: <span className="font-medium">{props.score}</span>
      </p>
      <p className="px-4 text-2xl">
        Best score: <span className="font-medium">{props.bestScore}</span>{" "}
      </p>
    </div>
  );
};

export default Score;
