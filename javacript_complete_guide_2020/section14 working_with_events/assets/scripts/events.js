const btn = document.querySelector('button');

const btnClickHandler = (event) => {
  alert('button onclick');
  console.log(event);
};

const anotherClickHandler = () => {
  console.log('another click');
};

// btn.onclick = btnClickHandler;
// btn.onclick=anotherClickHandler;

//for adding and removing bound function
const boundFn = btnClickHandler.bind(this);
btn.addEventListener('click', boundFn);
setTimeout(() => {
  btn.removeEventListener('click', boundFn);
}, 2000);

window.addEventListener('scroll', (event) => {
  console.log(event);
});

const form = document.querySelector('form');

//only form can have this
form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(event.target);
});
