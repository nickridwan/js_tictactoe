// Initialize game board
const board = ["", "", "", "", "", "", "", "", ""];
const cells = document.querySelectorAll(".cell");
const resetButton = document.getElementById("reset");
const customAlert = document.getElementById("custom-alert");
const customAlertMessage = document.getElementById("custom-alert-message");
const customAlertButton = document.getElementById("custom-alert-button");

// Add event listeners to cells
cells.forEach(cell => {
  cell.addEventListener("click", () => {
    const index = cell.id.split("-")[1];
    makeMove(index);
  });
});

// Add event listener to reset button
resetButton.addEventListener("click", resetGame);

// Show the custom alert with the specified message
function showCustomAlert(message) {
    customAlertMessage.textContent = message;
    customAlert.style.display = "block";
  }
  
  // Hide the custom alert
  function hideCustomAlert() {
    customAlert.style.display = "none";
  }
  
  // Add a click event listener to the custom alert button
  customAlertButton.addEventListener("click", hideCustomAlert);


  

// Make a move on the game board
function makeMove(index) {
  if (board[index] === "") {
    board[index] = "X";
    cells[index].textContent = "X";
    if (checkWin("X")) {
    showCustomAlert("You win!");
      resetGame();
    } else if (checkDraw()) {
        showCustomAlert("It's a draw!");
      resetGame();
    } else {
      computerMove();
    }
  }
}

// Make a move for the computer
function computerMove() {
  const index = findBestMove();
  board[index] = "O";
  cells[index].textContent = "O";
  if (checkWin("O")) {
    showCustomAlert("Computer wins!");
    resetGame();
  } else if (checkDraw()) {
    showCustomAlert("It's a draw!");

    resetGame();
  }
}

// Find the best move for the computer
function findBestMove() {
  // This is a very basic AI that just finds the first available cell
  for (let i = 0; i < board.length; i++) {
    if (board[i] === "") {
      return i;
    }
  }
}

// Check if a player has won
function checkWin(player) {
    for (let i = 0; i < 9; i += 3) {
        if (board[i] === player && board[i+1] === player && board[i+2] === player) {
          return true;
        }
      }
    
      // Check columns
      for (let i = 0; i < 3; i++) {
        if (board[i] === player && board[i+3] === player && board[i+6] === player) {
          return true;
        }
      }
    
      // Check diagonals
      if (board[0] === player && board[4] === player && board[8] === player) {
        return true;
      }
      if (board[2] === player && board[4] === player && board[6] === player) {
        return true;
      }
    
      return false;
    }

    // Check if the game is a draw
function checkDraw() {
    for (let i = 0; i < board.length; i++) {
      if (board[i] === "") {
        return false;
      }
    }
    return true;
  }
  
  // Reset the game
  function resetGame() {
    board.fill("");
    cells.forEach(cell => {
      cell.textContent = "";
    });
  }






