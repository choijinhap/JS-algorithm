const h1 = document.getElementById('main-title');
console.log(h1.textContent);
h1.textContent = 'asdfasdf';
console.log(h1.textContent);
h1.style.color = 'white';
h1.style.backgroundColor = 'black';

const li = document.querySelector('li:last-of-type');
li.textContent = li.textContent + ' changed';

//child element
const ul = document.querySelector('ul');
ul.children;
ul.children[0].textContent;
ul.firstElementChild;
//this is slow than upper
ul.querySelector('li:first-of-type');



console.log(ul.parentElement);
