function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3) + 1;
  switch (randomNum) {
    case 1:
      return 'rock'
      break;
    case 2:
      return 'paper'
      break
    case 3:
      return 'scissors'
      break
  }
}

function getHumanChoice() {
  return prompt("Rock, Paper or Scissiors?").toLowerCase();
}

let computerScore = 0;
let humanScore = 0;

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

function playRound(humanChoice, computerChoice) {
  if (humanChoice === 'rock' && computerChoice === "scissors" ||
    humanChoice === 'paper' && computerChoice === 'rock' ||
    humanChoice === 'scissors' && computerChoice === 'paper') {
    console.log("User win!");
    humanScore++;
  } else if ((humanChoice === 'rock' && computerChoice === "rock") ||
    (humanChoice === 'paper' && computerChoice === 'paper') ||
    (humanChoice === 'scissors' && computerChoice === 'scissors')) {
    console.log("Draw!");
  } else {
    console.log("Computer win!");
    computerScore++;
  }

  console.log(`User: ${humanSelection}. Score: ${humanScore}`);
  console.log(`Computer: ${computerSelection}. Score: ${computerScore}`);
}
playRound(humanSelection, computerSelection);


