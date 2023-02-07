import React from "react";

const Card = (props) => {
  return (
    <div
      className="card text-center border-2 border-neutral-500 m-4 rounded bg-red-500 cursor-pointer"
      onClick={props.handleCardClick}
      id={props.name}
    >
      <h5 className="text-center text-3xl p-3" id={props.name}>
        {props.name}
      </h5>
      <img
        className="center pr-2 pl-2 pb-2 hover:rounded-lg my-auto mx-auto"
        src={props.source}
        alt="source"
        id={props.name}
      />
    </div>
  );
};

export default Card;
