import React, { useState } from "react";
import Board from "./Board";

const Game = () => {
  return (
    <div className=" text-center h-full bg-neutral-700 m-4 rounded border-neutral-600 border-2">
      <Board />
    </div>
  );
};

export default Game;
