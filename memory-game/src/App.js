import React, { useEffect, useState } from "react";

import "./App.css";
import CardGrid from "./components/CardGrid";
import GameOverModal from "./components/GameOverModal";
import Header from "./components/Header";
import Scores from "./components/Scores";
import WinModal from "./components/WinModal";

function App() {
  const numOfPics = [0, 4, 8, 16, 32];

  const [level, setLevel] = useState(1);
  const [allImg, setAllImg] = useState([]);
  const [clickedCards, setClickCards] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [win, setWin] = useState(false);

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  useEffect(() => {
    const fetchImg = async () => {
      await fetch(
        "https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/all.json"
      )
        .then((response) => response.json())
        .then((data) => {
          let numCache = [];
          for (let i = 0; i < numOfPics[level]; i++) {
            const index = getRandomInt(0, data.length);
            while (numCache.includes(index)) {
              index = getRandomInt(0, data.length);
            }
            numCache.push(index);
            setAllImg((prevState) => [...prevState, data[index]]);
          }
        });
    };

    fetchImg();
  }, [level, gameOver]);

  useEffect(() => {
    const levelUp = () => {
      if (clickedCards.length === numOfPics[level]) {
        setLevel((prevState) => prevState + 1);
        setClickCards([]);
        setAllImg([]);
      }
    };

    levelUp();
  }, [clickedCards]);

  useEffect(() => {
    function winGame() {
      if (
        level === numOfPics.length - 1 &&
        clickedCards.length === numOfPics[level]
      ) {
        setWin(true);
      }
    }

    winGame();
  }, [level, clickedCards]);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function cardClick(event) {
    const cardName = event.target.nextSibling.textContent;
    if (!clickedCards.includes(cardName)) {
      setClickCards((prevState) => [...prevState, cardName]);
      const newScore = currentScore + 1;
      if (newScore > highScore) {
        setHighScore(newScore);
      }
      setCurrentScore(newScore);
      setAllImg(shuffleArray(allImg));
    } else {
      setGameOver(true);
    }
  }

  function restart() {
    setCurrentScore(0);
    setClickCards([]);
    setLevel(1);
    setAllImg([]);
    setGameOver(false);
    setWin(false);
  }

  return (
    <>
      <Header />
      <Scores currentScore={currentScore} highScore={highScore} level={level} />
      {!gameOver && <CardGrid images={allImg} cardClick={cardClick} />}
      {gameOver && <GameOverModal restart={restart} />}
      {win && <WinModal restart={restart} />}
    </>
  );
}

export default App;
