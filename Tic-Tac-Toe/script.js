const player = (playerName, icon) => {
    return {playerName, icon};
}

const gameboard = (() => {
    
    let board = []; //board with 9 slots
    for(let i=0; i<9; i++)
        board.push('');

    const grid = document.querySelector('#grid');
    for(let i=0; i<9; i++){ //create grid
        const square = document.createElement('div');
        square.setAttribute('class', 'square');
        square.setAttribute('id', i);
        grid.appendChild(square);
    }

    const allSquares = document.querySelectorAll('.square');
    allSquares.forEach(square => square.addEventListener('click', function(){
        console.log(game.currentTurn);
        const icon = document.createElement('img');
        icon.setAttribute('class', 'pic');
        icon.src = 'images/' + game.currentTurn.icon + '.png';
        square.appendChild(icon);
        // console.log(game.determineWinner());
        game.nextPlayer();
    }))


    return {board};
})();

const game = (() => {
    const playerOne = player("Player One", "batman");
    const playerTwo = player("Player Two", "superman");

    let winner = undefined;

    let currentTurn = playerOne;

    const nextPlayer = () => {
        const allSquares = document.querySelectorAll('.square');
        if(currentTurn == playerOne){
            currentTurn = playerTwo;
        }
        else{
            currentTurn = playerOne;
        }
    }

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
        let winnerDeclared = false;

        let playerOneIndexes = [];
        let playerTwoIndexes = [];
        for(let i=0; i<9; i++){
            if(gameboard.board[i] == "batman"){
                playerOneIndexes.push(i)
            }
            else{
                playerTwoIndexes.push(i);
            }
        }

        for(let i=0; i<winningCombi.length; i++){

            if(winningCombi[i].toString() == playerOneIndexes.toString()){
                winner = playerOne;
                winnerDeclared = true;
            }
            else if(winningCombi[i].toString() == playerTwoIndexes.toString()){
                winner = playerTwo;
                winnerDeclared = true;
            }
        }
        return {winnerDeclared};
    }

    return {currentTurn, nextPlayer, winner, winningCombi, determineWinner};
})();

