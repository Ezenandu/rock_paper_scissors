//1. Take input of playerSelection choice "Select rock, paper or scissors: " and use toLowerCase():-

function playerChoice() {
  selection = prompt("Select rock, paper or scissors: ").toLowerCase();
  if ((selection != "rock") && (selection != "paper") && (selection != "scissors")) {
    console.log("Wrong selection");
    playerChoice();
  }
  console.log(selection);
  return selection;
}

//2. getComputerChoice:-

function getComputerChoice() {
  let choice = ["rock", "paper", "scissors"];
  let selectedChoice = choice[Math.floor(Math.random() * 3)];
  console.log(selectedChoice);
  return selectedChoice;
}

//3. Compare with ComputerSelection Value and play each round "playRound(playerSelection,  computerSelection)":-

function playRound(playerSelection, computerSelection) {
  console.log(
    `PlayerSelection: ${playerSelection} while computerSelection: ${computerSelection}`
  );
  if (playerSelection === computerSelection) {
    let pChoice = playerChoice();
    let cChoice = getComputerChoice();
    playRound(pChoice, cChoice);
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

//5. Play 5 times "game()":-

function game() {
  let m = 0;
  let n = 0;

  while ((m + n) < 5) {
    let player = playerChoice();
    let computerChoice = getComputerChoice();
    // console.log(`player selected: ${player} while computer selected: ${computerChoice}`);
    let round = playRound(player, computerChoice);
    if (round === player) {
      m++;
    } else {
      n++;
    }
  }

  if (m > n) {
    alert("You Won!");
  } else {
    alert("You Lose!");
  }
}

game();

//6. Winner declared "You Lose! Paper beats Rock" or "You Won! Rock beats Scissors"
