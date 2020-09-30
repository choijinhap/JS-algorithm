const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_SELECTION = ROCK;

const DRAW = 'DRAW';
const PLAYER_WIN = 'PLAYER_WIN';
const COMPUTER_WIN = 'COMPUTER_WIN';
let isGameRunning = false;

const getPlayerChoice = function () {
  const selection = prompt(
    `select ${ROCK} ${PAPER} or ${SCISSORS}`
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_SELECTION} for you!`);
    return;
  }
  return selection;
};

const getComputerChoice = function () {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = function (cChoice, pChoice=DEFAULT_USER_SELECTION) {
  if (cChoice === pChoice) {
    return DRAW;
  } else if (
    (cChoice === ROCK && pChoice === PAPER) ||
    (cChoice === PAPER && pChoice === SCISSORS) ||
    (cChoice === SCISSORS && pChoice === ROCK)
  ) {
    return PLAYER_WIN;
  } else {
    return COMPUTER_WIN;
  }
};

startGameBtn.addEventListener('click', function () {
  if (isGameRunning) {
    return;
  }
  isGameRunning = true;
  console.log('Gamie is  starting...');
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const winner = getWinner(computerChoice, playerChoice);

  let message = `you choice ${playerChoice||DEFAULT_USER_SELECTION} and computer chose ${computerChoice}, therefore you `;
  if (winner === DRAW) {
    message = message + 'had a draw';
  } else if (winner === PLAYER_WIN) {
    message = message + 'won';
  } else {
    message = message + 'lost';
  }
  alert(message);
  isGameRunning = false;
});

//not related to game
const sumUp =  (resultHandler,...numbers)=>{
    const validateNumber=(number)=>{
        return isNaN(number)?0:number;
    }
    let sum=0;
    for(const num of numbers){
        sum+=validateNumber(num);
    }
    resultHandler(sum,'The result after adding all number is');
}

const substractUp =  (resultHandler,...numbers)=>{
    const validateNumber=(number)=>{
        return isNaN(number)?0:number;
    }
    let sum=0;
    for(const num of numbers){
        sum-=validateNumber(num);
    }
    resultHandler(sum,'The reuslt after substracting all number is');
}

const showResult =(result,message) =>{
    alert(message+' '+result);
}
sumUp(showResult,1,2,'as',4);
substractUp(showResult,1,2,'as',4);

