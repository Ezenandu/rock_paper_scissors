function getComputerChoice() {
  let choice = ["rock", "paper", "scissors"];
  let selectedChoice = choice[Math.floor(Math.random() * 3)];
  console.log(selectedChoice);
  return selectedChoice;
}

function playRound(playerSelection, computerSelection) {
  console.log(
    `PlayerSelection: ${playerSelection} while computerSelection: ${computerSelection}`
  );
  if (playerSelection === computerSelection) {
    return undefined;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return playerSelection;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return computerSelection;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return playerSelection;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return computerSelection;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return playerSelection;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return computerSelection;
  }
}

let pScore = 0;
let cScore = 0;

let selected = document.querySelector("#selectOptions");
let result = document.querySelector("#result");

selected.addEventListener("click", (event) => {
  switch (event.target.id) {
    case "rock":
      let gameR = playRound("rock", getComputerChoice());
      let gameShownR = document.createElement("p");
      gameShownR.textContent =
        gameR == "rock"
          ? `You won with rock: ${++pScore}-${cScore}`
          : gameR == undefined
          ? `Replay`
          : `You lost with rock: ${pScore}-${++cScore}`;
      result.appendChild(gameShownR);
      let finalScoreR = document.createElement("p");
      if (pScore == 5) {
        console.log(pScore);
        finalScoreR.textContent = `You won the game!`;
        pScore = 0;
        cScore = 0;
      } else if (cScore == 5) {
        console.log(cScore);
        finalScoreR.textContent = `You lost the game!`;
        pScore = 0;
        cScore = 0;
      }
      result.appendChild(finalScoreR);
      break;
    case "paper":
      let game = playRound("paper", getComputerChoice());
      let gameShown = document.createElement("p");
      gameShown.textContent =
        game == "paper"
          ? `You won with paper: ${++pScore}-${cScore}`
          : game == undefined
          ? `Replay`
          : `You lost with paper: ${pScore}-${++cScore}`;
      result.appendChild(gameShown);
      let finalScore = document.createElement("p");
      if (pScore == 5) {
        console.log(pScore);
        finalScore.textContent = `You won the game!`;
        pScore = 0;
        cScore = 0;
      } else if (cScore == 5) {
        console.log(cScore);
        finalScore.textContent = `You lost the game!`;
        pScore = 0;
        cScore = 0;
      }
      result.appendChild(finalScore);
      break;
    case "scissors":
      let gameS = playRound("scissors", getComputerChoice());
      let gameShownS = document.createElement("p");
      gameShownS.textContent =
        gameS == "scissors"
          ? `You won with scissors: ${++pScore}-${cScore}`
          : gameS == undefined
          ? `Replay`
          : `You lost with scissors: ${pScore}-${++cScore}`;
      result.appendChild(gameShownS);
      let finalScoreS = document.createElement("p");
      if (pScore == 5) {
        console.log(pScore);
        finalScoreS.textContent = `You won the game!`;
        pScore = 0;
        cScore = 0;
      } else if (cScore == 5) {
        console.log(cScore);
        finalScoreS.textContent = `You lost the game!`;
        pScore = 0;
        cScore = 0;
      }
      result.appendChild(finalScoreS);
      break;
  }
});
