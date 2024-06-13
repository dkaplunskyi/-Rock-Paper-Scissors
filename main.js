
function playGame() {

  let gamesPlayed = 0;
  let drawGames = 0;
  let computerScore = 0;
  let humanScore = 0;

  let humanSelection = '';
  let computerSelection = '';

  let resultSection = document.querySelector('#resultSection');
  let winner = document.createElement('h1');
  let winnerOfRound = document.createElement('h2');
  let roundResult = document.createElement('pre');
  resultSection.appendChild(winnerOfRound);
  resultSection.appendChild(roundResult);
  resultSection.appendChild(winner);

  function getHumanChoice(choice) {
    humanSelection = choice;
  }

  function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    switch (randomNum) {
      case 1:
        computerSelection = 'rock'
        break;
      case 2:
        computerSelection = 'paper'
        break;
      case 3:
        computerSelection = 'scissors'
        break;
    }
  }

  let playRound = (humanChoice, computerChoice) => {
    if (humanChoice === 'rock' && computerChoice === "scissors" ||
      humanChoice === 'paper' && computerChoice === 'rock' ||
      humanChoice === 'scissors' && computerChoice === 'paper') {
      humanScore++;
      winnerOfRound.textContent = 'User win this round!';
    } else if ((humanChoice === 'rock' && computerChoice === "rock") ||
      (humanChoice === 'paper' && computerChoice === 'paper') ||
      (humanChoice === 'scissors' && computerChoice === 'scissors')) {
      drawGames++;
      winnerOfRound.textContent = 'Draw!';
    } else {
      computerScore++;
      winnerOfRound.textContent = 'Computer win this round!';
    }

    gamesPlayed++;

    winner.textContent = getWinner();
    roundResult.textContent = `Draw: ${drawGames}\nUser: ${humanSelection}. Score: ${humanScore}\nComputer: ${computerSelection}. Score: ${computerScore}\nGames played: ${gamesPlayed}`;
  }

  function getWinner() {
    if (humanScore !== 0 || computerScore !== 0) {
      if (humanScore === computerScore) {
        return 'Nobody is a winner!';
      }
      return humanScore > computerScore ? 'User is a winner!!!' : 'Computer is a winner!!!';
    }
  }

  let buttons = document.querySelectorAll('button');
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      getHumanChoice(e.target.id);
      getComputerChoice();
      playRound(humanSelection, computerSelection);
    });
  });
}

playGame();
