<script>
  // import { clickClick, resetGame } from "./api.js";

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
</script>

<div class="board">
  {#each board as cell, index (index)}
    <div class="cell" on:click={() => handleClick(index)}>{cell}</div>
  {/each}
</div>

{#if winner}
  <p>Winner: {winner}</p>
  <button on:click={resetGame}>Play Again</button>
{:else if isDraw}
  <p>It's a draw!</p>
  <button on:click={resetGame}>Play Again</button>
{/if}

<style>
  .cell {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: bold;
    border: 1px solid #ccc;
    cursor: pointer;
  }

  .board {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    margin-bottom: 10px;
  }
</style>
