const btnEl = document.querySelector('button');
const textEL = document.querySelector('p');
btnEl.addEventListener('click', () => {
  const text = textEL.textContent;
  // fallback code (if-else statements)
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(text)
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
      });
  } else {
    alert('Feature not available , please copy manually!');
  }
});
