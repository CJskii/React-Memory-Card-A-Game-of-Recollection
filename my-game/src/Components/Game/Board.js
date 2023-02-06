import React, { useEffect, useState } from "react";
import Card from "./Card";

const Board = (props) => {
  const [images, setImages] = useState([]);
  const [cards, setCards] = useState([]);
  const characterNames = [
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
  useEffect(() => {
    generateCardData();
  }, []);

  useEffect(() => {
    console.log("randomly render cards");
  }, [props.score]);

  const generateCardData = () => {
    const arr = [];
    characterNames.forEach((name) => {
      arr.push({
        name: name,
        source: `./CardCharacters/${name}.png`,
      });
    });
    console.log(arr);
    setCards(arr);
  };

  const handleCardClick = () => {
    console.log("check if this card was clicked already");
  };

  return (
    <div className="board flex flex-wrap justify-center">
      {cards.map((card, index) => {
        return <Card key={index} name={card.name} source={card.source} />;
      })}
    </div>
  );
};

export default Board;
