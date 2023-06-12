let currentPlayer = "X";
let winner = null;
let board = ["", "", "", "", "", "", "", "", ""];
let isDraw = false;

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function handleClick(index) {
  if (board[index] || winner || isDraw) return;

  board[index] = currentPlayer;
  checkWinner();

  if (!board.includes("")) {
    isDraw = true;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkWinner() {
  for (let combination of winningCombinations) {
    const [a, b, c] = combination;

    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      winner = board[a];
      return;
    }
  }
}

function resetGame() {
  currentPlayer = "X";
  winner = null;
  board = ["", "", "", "", "", "", "", "", ""];
  isDraw = false;
}

module.exports = {
  handleClick,
  resetGame,
};
