
function playGame() {

  let gamesPlayed = 0;
  let drawGames = 0;
  let computerScore = 0;
  let humanScore = 0;

  if (computerScore <= 3 && humanScore <= 3) {
    gameOver = true;
  }

  while (computerScore < 3 && humanScore < 3) {

    function getComputerChoice() {
      let randomNum = Math.floor(Math.random() * 3) + 1;
      switch (randomNum) {
        case 1:
          return 'rock'
          break;
        case 2:
          return 'paper'
          break;
        case 3:
          return 'scissors'
          break;
      }
    }

    function getHumanChoice() {
      let isValidInput = false;
      let userAnswer;
      while (!isValidInput) {
        userAnswer = prompt("Rock, Paper or Scissiors?");

        if (userAnswer !== null) {
          userAnswer = userAnswer.toLowerCase();
        }

        if (userAnswer === null) {
          isValidInput = true;
          computerScore = 999;
        } else if (userAnswer !== 'rock' && userAnswer !== 'paper' && userAnswer !== 'scissors') {
          console.log('Wrong input!');
        } else {
          isValidInput = true;
          return userAnswer;
        }
      }
    }

    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    let playRound = (humanChoice, computerChoice) => {
      if (humanChoice === 'rock' && computerChoice === "scissors" ||
        humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log("User win!");
        humanScore++;
      } else if ((humanChoice === 'rock' && computerChoice === "rock") ||
        (humanChoice === 'paper' && computerChoice === 'paper') ||
        (humanChoice === 'scissors' && computerChoice === 'scissors')) {
        console.log("Draw!");
        drawGames++;
      } else {
        console.log("Computer win!");
        computerScore++;
      }

      gamesPlayed++;

      console.log(`User: ${humanSelection}. Score: ${humanScore}`);
      console.log(`Computer: ${computerSelection}. Score: ${computerScore}`);
    }

    playRound(humanSelection, computerSelection);

  }

  function getWinner() {
    if (humanScore > computerScore) {
      return 'User is a winner!!!'
    } else {
      return 'Computer is a winner!!!';
    }
  }

  console.log(`Total user score: ${humanScore}`);
  console.log(`Total computer score: ${computerScore}`);
  console.log(`Total games played:  ${gamesPlayed}`);
  console.log(`Total draw games played:  ${drawGames}`);
  console.log(getWinner());






}

playGame();


