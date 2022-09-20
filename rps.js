// GAME
let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection) {
  // Scenarios where the player wins
  if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return "You Win! Rock beats Scissors.";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return "You Win! Paper beats Rock.";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return "You Win! Scissors beats Paper.";
  }
  // Scenarios where the player loses
  else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    return "You Lose! Paper beats Rock.";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    return "You Lose! Scissors beats Paper.";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    return "You Lose! Rock beats Scissors.";
  }
  // Tie scenario
  else {
    return `It's a tie! You both picked ${computerSelection}.`;
  }
}

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return "rock";
  } else if (random === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

// UI

const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const roundResults = document.getElementById("roundResults");
const playerChoice = document.getElementById("playerChoice");
const computerChoice = document.getElementById("computerChoice");
const gameOverText = document.getElementById("gameOverText");

function initiateUI() {
  playerScore = 0;
  computerScore = 0;
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
  roundResults.textContent =
    "Pick your weapon. First to win 5 times wins it all.";
  playerChoice.textContent = "?";
  computerChoice.textContent = "?";
  gameOverText.textContent = "";
  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;
}

function updateUI() {
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
  isGameOver();
}

function isGameOver() {
  if (computerScore === 5 || playerScore === 5) {
    computerScore === 5
      ? (gameOverText.textContent = `Game Over! Computer Wins ${computerScore} - ${playerScore}.`)
      : (gameOverText.textContent = `Game Over! Player Wins ${playerScore} - ${computerScore}.`);
    const restartButton = document.createElement("button");
    restartButton.textContent = "Restart Game";
    restartButton.addEventListener("click", () => {
      initiateUI();
    });
    restartButton.setAttribute(
      "style",
      "height: 50px; width: 150px; font-size: 18px; margin: 20px auto;"
    );
    gameOverText.appendChild(restartButton);
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
  }
}

rockBtn.addEventListener("click", () => {
  let currComputerChoice = getComputerChoice();
  roundResults.textContent = playRound("rock", currComputerChoice);
  playerChoice.textContent = "✊";
  currComputerChoice === "rock"
    ? (computerChoice.textContent = "✊")
    : currComputerChoice === "paper"
    ? (computerChoice.textContent = "🖐")
    : (computerChoice.textContent = "✌️");
  updateUI();
});

paperBtn.addEventListener("click", () => {
  let currComputerChoice = getComputerChoice();
  roundResults.textContent = playRound("paper", currComputerChoice);
  playerChoice.textContent = "🖐";
  currComputerChoice === "rock"
    ? (computerChoice.textContent = "✊")
    : currComputerChoice === "paper"
    ? (computerChoice.textContent = "🖐")
    : (computerChoice.textContent = "✌️");
  updateUI();
});

scissorsBtn.addEventListener("click", () => {
  let currComputerChoice = getComputerChoice();
  roundResults.textContent = playRound("scissors", currComputerChoice);
  playerChoice.textContent = "✌️";
  currComputerChoice === "rock"
    ? (computerChoice.textContent = "✊")
    : currComputerChoice === "paper"
    ? (computerChoice.textContent = "🖐")
    : (computerChoice.textContent = "✌️");
  updateUI();
});

initiateUI();
