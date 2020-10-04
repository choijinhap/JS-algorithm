const numbers = [1, 2, 3];
console.log(numbers);

// const moreNumbers=Array(5,2);
// console.log(moreNumbers);

// const yetMoreNumbers=Array.of(1,2);
// console.log(yetMoreNumbers);

const listItems = document.querySelectorAll('li');
console.log(listItems);

const arrayListItems = Array.from(listItems);
console.log(arrayListItems);

const hobbies = ['Sports', 'Cooking'];
hobbies.push('Reading');
hobbies.unshift('Coding');
const poppedValue = hobbies.pop();
const droppedvalue = hobbies.shift();
console.log(hobbies);
console.log(poppedValue);
console.log(droppedvalue);
console.log(droppedvalue);

hobbies.splice(1, 0, 'Good Food');
console.log(hobbies);

const removedElements = hobbies.splice(-2, 1);
console.log(removedElements);

const testArray = [1, 2, 3, 4, 5];

const personData = [{ name: 'Max' }, { name: 'Manuel' }];
const manuel = personData.find((value, idx, arr) => {
  return value.name === 'Manuel';
});
manuel.name = 'Anna';
console.log(manuel, personData);

const nameData = ['Max', 'Schwarz', 'Mr', '30'];
const [firstName, lastName, ...others] = nameData;
console.log(firstName, lastName, others);
