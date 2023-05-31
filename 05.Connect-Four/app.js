const grid = document.querySelector('.grid');
const result = document.querySelector('#result');
const displayCurrentPlayer = document.querySelector('#current-player');
let currentPlayer = 1;
let squares = []

function createBoard() {
  for (let i = 0; i < 42; i++) {
    const square = document.createElement('div');
    square.classList.add('square')
    squares.push(square)
    grid.appendChild(square);
  }

  for (let i = 0; i < 7; i++) {
    const squareTaken = document.createElement('div');
    squareTaken.classList.add('taken')
    squares.push(squareTaken)
    grid.appendChild(squareTaken);
  }
}
createBoard()

const winningCombinations = [
  //Horizontal 
  [0, 1, 2, 3], [1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6],
  [7, 8, 9, 10], [8, 9, 10, 11], [9, 10, 11, 12], [10, 11, 12, 13],
  [14, 15, 16, 17], [15, 16, 17, 18], [16, 17, 18, 19], [17, 18, 19, 20],
  [21, 22, 23, 24], [22, 23, 24, 25], [23, 24, 25, 26], [24, 25, 26, 27],
  [28, 29, 30, 31], [29, 30, 31, 32], [30, 31, 32, 33], [31, 32, 33, 34],
  [35, 36, 37, 38], [36, 37, 38, 39], [37, 38, 39, 40], [38, 39, 40, 41],

  // Vertical combinations
  [0, 7, 14, 21], [1, 8, 15, 22], [2, 9, 16, 23], [3, 10, 17, 24],
  [4, 11, 18, 25], [5, 12, 19, 26], [6, 13, 20, 27], [7, 14, 21, 28],
  [8, 15, 22, 29], [9, 16, 23, 30], [10, 17, 24, 31], [11, 18, 25, 32],
  [12, 19, 26, 33], [13, 20, 27, 34], [14, 21, 28, 35], [15, 22, 29, 36],
  [16, 23, 30, 37], [17, 24, 31, 38], [18, 25, 32, 39], [19, 26, 33, 40],
  [20, 27, 34, 41],

  // Diagonal combinations
  [0, 8, 16, 24], [1, 9, 17, 25], [2, 10, 18, 26], [3, 11, 19, 27],
  [7, 15, 23, 31], [8, 16, 24, 32], [9, 17, 25, 33], [10, 18, 26, 34],
  [14, 22, 30, 38], [15, 23, 31, 39], [16, 24, 32, 40], [17, 25, 33, 41],
  [3, 9, 15, 22]]




function checkBoard() {
  for (let y = 0; y < winningCombinations.length; y++) {
    const square1 = squares[winningCombinations[y][0]];
    const square2 = squares[winningCombinations[y][1]];
    const square3 = squares[winningCombinations[y][2]];
    const square4 = squares[winningCombinations[y][3]];

    //check those squares to see if they all have class of player one
    if (square1.classList.contains('player-one') &&
      square2.classList.contains('player-one') &&
      square3.classList.contains('player-one') &&
      square4.classList.contains('player-one')) {
      result.innerHTML = 'Player One Wins!'
    }

    //check those squares to see if they all have class of player two
    if (square1.classList.contains('player-two') &&
      square2.classList.contains('player-two') &&
      square3.classList.contains('player-two') &&
      square4.classList.contains('player-two')) {
      result.innerHTML = 'Player Two Wins!'
    }
  }


}

for (i = 0; i < squares.length; i++) {
  squares[i].onclick = (function (index) {
    return function () {
      console.log('you have clicked ' + index);
      //if the square below you current square is taken, you can go on top of it
      if (squares[index + 7].classList.contains('taken') && !squares[index].classList.contains('taken')) {
        if (currentPlayer == 1) {
          squares[index].classList.add('taken')
          squares[index].classList.add('player-one')
          currentPlayer = 2
          displayCurrentPlayer.innerHTML = currentPlayer;
        } else if (currentPlayer == 2) {
          squares[index].classList.add('taken')
          squares[index].classList.add('player-two')
          currentPlayer = 1
          displayCurrentPlayer.innerHTML = currentPlayer;
        }
      } else alert('Can\'t go here!')
      checkBoard()
    };
  })(i);
}