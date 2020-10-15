const btn = document.querySelector('button');

const btnClickHandler = () => {
  alert('button onclick');
};

const anotherClickHandler=()=>{
    console.log('another click')
}

// btn.onclick = btnClickHandler;
// btn.onclick=anotherClickHandler;

//for adding and removing bound function
const boundFn=btnClickHandler.bind(this);
btn.addEventListener('click',boundFn)
setTimeout(() => {
    btn.removeEventListener('click',boundFn)    
}, 2000);

