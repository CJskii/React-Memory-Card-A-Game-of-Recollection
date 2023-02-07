import React, { useEffect, useState } from "react";
import Card from "./Card";

const Board = (props) => {
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    console.log("randomly render cards");
    generateRandomCards();
    // eslint-disable-next-line
  }, [props.score]);

  useEffect(() => {
    setTimeout(() => {
      setCurrentIndex(currentIndex + 1);
    }, 250);
  }, [currentIndex]);

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

  const handleCardClick = (e) => {
    console.log("check if this card was clicked already");
    const selectedCard = e.target.id;
    const arr = selectedCards;
    const isSelected = checkSelectedCards(selectedCard, arr);
    if (isSelected) {
      console.log("restart the game now");
      props.restartGame();
      setSelectedCards([]);
    } else {
      props.updateScore();
      arr.push(selectedCard);
      setSelectedCards(arr);
    }
  };

  const checkSelectedCards = (selectedCard, arr) => {
    const isInTheArray = arr.find((card) => card === selectedCard);
    if (isInTheArray) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="board flex flex-wrap justify-center">
      {cards.slice(0, currentIndex).map((card, index) => (
        <Card
          key={index}
          name={card.name}
          source={card.source}
          handleCardClick={(e) => handleCardClick(e)}
        />
      ))}
    </div>
  );
};

export default Board;
