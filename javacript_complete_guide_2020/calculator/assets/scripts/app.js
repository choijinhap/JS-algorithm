const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
  return parseInt(usrInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(operation, prevResult, number, result) {
  const logEntry = {
    operation,
    prevResult,
    number,
    result,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculate(calType) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;

  if (
    calType !== 'ADD' &&
    calType !== 'SUBSTRACT' &&
    calType !== 'MULTIPLY' &&
    calType !== 'DIVIDE' &&
    !enteredNumber
  ) {
    return;
  }
  let calOp = '';
  if (calType === 'ADD') {
    calOp = '+';
    currentResult += enteredNumber;
  } else if (calType === 'SUBSTRACT') {
    calOp = '-';
    currentResult -= enteredNumber;
  } else if (calType === 'MULTIPLY') {
    calOp = '*';
    currentResult *= enteredNumber;
  } else {
    calOp = '/';

    currentResult /= enteredNumber;
  }
  createAndWriteOutput(calOp, initialResult, enteredNumber);
  writeToLog(calType, initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', calculate.bind(this, 'ADD'));
subtractBtn.addEventListener('click', calculate.bind(this, 'SUBSTRACT'));
multiplyBtn.addEventListener('click', calculate.bind(this, 'MULTIPLY'));
divideBtn.addEventListener('click', calculate.bind(this, 'DIVIDE'));
