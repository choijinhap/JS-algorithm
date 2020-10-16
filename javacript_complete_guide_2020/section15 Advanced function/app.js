//pure function
function add(num1, num2) {
  return num1 + num2;
}
console.log(add(1, 5));
console.log(add(12, 15));

//impure function => same input but differnt output
function addRandom(num1) {
  return num1 + Math.random();
}
console.log(addRandom(5));

let previousResult = 0;
//impure function => change outside of function (side effect)
function addMoreNumbers(num1, num2) {
  const sum = num1 + num2;
  previousResult = sum;
  return sum;
}

const hobbies = ['sports', 'cooking'];
//impure => change input object(reference variable)
function printHobbies(h) {
  h.push('new hobby');
  console.log(h);
}
printHobbies(hobbies);

//factory function that can call multiple times in different parts of a function
function createTaxCalculator(tax) {
  function calculateTax(amount) {
    return amount * tax;
  }
  return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.19);
const calculateInocmeAmount = createTaxCalculator(0.25);
console.log(calculateVatAmount(100));
console.log(calculateInocmeAmount(200));
