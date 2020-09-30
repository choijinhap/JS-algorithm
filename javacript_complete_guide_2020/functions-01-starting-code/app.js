const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_SELECTION = ROCK;
let isGameRunning = false;
function getPlayerChoice() {
  const selection = prompt(
    `select ${ROCK} ${PAPER} or ${SCISSORS}`
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_SELECTION} for you!`);
    return DEFAULT_USER_SELECTION;
  }
  return selection;
}

startGameBtn.addEventListener('click', function () {
  if (isGameRunning) {
    return;
  }
  isGameRunning = true;
  console.log('Gamie is  starting...');
  const playerSelection = getPlayerChoice();
  console.log(playerSelection);
});
