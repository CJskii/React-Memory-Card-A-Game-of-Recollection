import React, { useEffect, useState } from "react";
import Card from "./Card";

const Board = (props) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    console.log("randomly render cards");
    generateRandomCards();
  }, [props.score]);

  const generateRandomCards = () => {
    console.log("generating random card data");
    console.log("_____________________________");
    const arr = [];
    const cardData = props.cardNames;
    while (cardData.length) {
      const randomIndex = Math.floor(Math.random() * cardData.length);
      const randomName = cardData.splice(randomIndex, 1);
      arr.push({
        name: randomName,
        source: `./CardCharacters/${randomName}.png`,
      });
    }
    setCards(arr);
  };

  const handleCardClick = () => {
    console.log("check if this card was clicked already");
    props.updateScore();
  };

  return (
    <div className="board flex flex-wrap justify-center">
      {cards.map((card, index) => {
        return (
          <Card
            key={index}
            name={card.name}
            source={card.source}
            handleCardClick={handleCardClick}
          />
        );
      })}
    </div>
  );
};

export default Board;
