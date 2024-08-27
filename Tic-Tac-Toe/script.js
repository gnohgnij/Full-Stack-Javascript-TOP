const player = (playerName, icon) => {
  return { playerName, icon };
};

const gameboard = (() => {
  let board = []; //board with 9 slots
  for (let i = 0; i < 9; i++) board.push("");

  const grid = document.querySelector("#grid");
  for (let i = 0; i < 9; i++) {
    //create grid
    const square = document.createElement("div");
    square.setAttribute("class", "square");
    square.setAttribute("id", i);
    grid.appendChild(square);
  }
  return { board };
})();

const game = (() => {
  const playerOne = player("Player One", "batman");
  const playerTwo = player("Player Two", "superman");

  let winner = undefined;
  let winnerDeclared = false;
  let emptySpaces = 9;

  let currentTurn = playerOne;

  const nextPlayer = () => {
    if (currentTurn == playerOne) {
      currentTurn = playerTwo;
    } else {
      currentTurn = playerOne;
    }
  };

  const winningCombi = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const determineWinner = () => {
    let playerOneIndexes = [];
    let playerTwoIndexes = [];

    for (let i = 0; i < 9; i++) {
      if (gameboard.board[i] == "batman") {
        playerOneIndexes.push(i);
      } else if (gameboard.board[i] == "superman") {
        playerTwoIndexes.push(i);
      }
    }

    for (let i = 0; i < winningCombi.length; i++) {
      var playerOneCheck = 0;
      var playerTwoCheck = 0;
      let combi = winningCombi[i];
      combi.forEach((pos) => {
        if (playerOneIndexes.includes(pos)) {
          playerOneCheck++;
        } else if (playerTwoIndexes.includes(pos)) {
          playerTwoCheck++;
        }
      });
      if (playerOneCheck == 3) {
        winner = playerOne;
        winnerDeclared = true;
      } else if (playerTwoCheck == 3) {
        winner = playerTwo;
        winnerDeclared = true;
      }
    }
  };

  const allSquares = document.querySelectorAll(".square");
  allSquares.forEach((square) =>
    square.addEventListener("click", function () {
      if (square.childNodes.length > 0) {
        return;
      }
      const icon = document.createElement("img");
      icon.setAttribute("class", "pic");
      icon.src = "images/" + currentTurn.icon + ".png";
      square.appendChild(icon);
      gameboard.board[Number(square.id)] = currentTurn.icon;
      emptySpaces--;

      determineWinner();

      if (winnerDeclared === true) {
        let winnerDiv = document.querySelector("#result");
        let winnerText = document.createElement("h1");
        winnerText.setAttribute("id", "result-text");
        winnerText.textContent = winner.playerName + " is the winner!";
        winnerDiv.appendChild(winnerText);
      } else if (emptySpaces > 0 && winnerDeclared == false) {
        game.nextPlayer();
      } else if (emptySpaces == 0 && winnerDeclared == false) {
        let resultDiv = document.querySelector("#result");
        let resultText = document.createElement("h1");
        resultText.setAttribute("id", "result-text");
        resultText.textContent = "Draw!";
        resultDiv.appendChild(resultText);
      }
    })
  );

  return { currentTurn, nextPlayer, winner, winningCombi, determineWinner };
})();
