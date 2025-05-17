const choices = ['rock', 'paper', 'scissors'];
let userScore = 0;
let computerScore = 0;

function playGame(userChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById('user-choice').textContent = `Your Choice: ${capitalize(userChoice)}`;
  document.getElementById('computer-choice').textContent = `Computer's Choice: ${capitalize(computerChoice)}`;

  const result = getWinner(userChoice, computerChoice);
  document.getElementById('winner').textContent = `Result: ${result}`;

  if (result === 'You Win!') userScore++;
  else if (result === 'Computer Wins!') computerScore++;

  document.getElementById('user-score').textContent = userScore;
  document.getElementById('computer-score').textContent = computerScore;
}

function getWinner(user, computer) {
  if (user === computer) return "It's a Draw!";
  if (
    (user === 'rock' && computer === 'scissors') ||
    (user === 'paper' && computer === 'rock') ||
    (user === 'scissors' && computer === 'paper')
  ) {
    return 'You Win!';
  } else {
    return 'Computer Wins!';
  }
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
