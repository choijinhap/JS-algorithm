const h1 = document.getElementById('main-title');
console.log(h1.textContent);
h1.textContent='asdfasdf';
console.log(h1.textContent);
h1.style.color='white';
h1.style.backgroundColor='black'

const li=document.querySelector('li:last-of-type')
li.textContent=li.textContent+' changed'
