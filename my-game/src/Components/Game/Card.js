import React, { useState } from "react";

const Card = (props) => {
  const [source, setSource] = useState(null);
  const [name, setName] = useState("Name");

  return (
    <div className="card text-center border-2 border-neutral-500 m-4 rounded">
      <h5 className="text-center text-2xl p-2">{name}</h5>
      <img
        className="center pr-2 pl-2 pb-2 hover:rounded-lg my-auto mx-auto"
        src={source}
        alt="source"
      />
    </div>
  );
};

export default Card;
