var p1Button = document.getElementById('p1');
var p2Button = document.querySelector('#p2');
var resetButton = document.querySelector('#reset');
var gamesInputBox = document.querySelector('#gamesInput');

var p1ScoreDisplay = document.querySelector('#p1Score');
var p2ScoreDisplay = document.querySelector('#p2Score');
var numGamesDisplay = document.querySelector('p span');

var p1Score = 0;
var p2Score = 0;

var numGamesToWin = 5;
var gameOver = false;


p1Button.addEventListener("click", () => {
  if (!gameOver) {
    p1Score++;
    p1ScoreDisplay.textContent = p1Score;
    if (p1Score === numGamesToWin) {
      gameOver = true;
      p1ScoreDisplay.classList.add("winningGreen");
    }
  }
})

p2Button.addEventListener("click", () => {
  if (!gameOver) {
    p2Score++;
    p2ScoreDisplay.textContent = p2Score;
    if (p2Score === numGamesToWin) {
      gameOver = true;
      p2ScoreDisplay.classList.add("winningGreen");
    }
  }
})

resetButton.addEventListener("click", () => {
  resetGame()
})

gamesInputBox.addEventListener("change", () => {
  numGamesDisplay.textContent = this.value;
  numGamesToWin = Number(this.value);
  resetGame();
})


function resetGame() {
  p1Score = 0;
  p2Score = 0;
  p1ScoreDisplay.textContent = p1Score;
  p2ScoreDisplay.textContent = p2Score;
  p1ScoreDisplay.classList.remove("winningGreen");
  p2ScoreDisplay.classList.remove("winningGreen");
  gameOver = false;
}