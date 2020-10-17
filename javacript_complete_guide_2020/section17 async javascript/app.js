const button = document.querySelector('button');
const output = document.querySelector('p');

function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(
    (posData) => {
      console.log(posData)
      // setTimeout(() => {
      //   console.log(posData);
      // }, 2000);
    },
    (error) => {
      console.log(error);
    }
  );
  setTimeout(() => {
    console.log('Timer done!');
  }, 0);
  console.log('Getting position');
}

button.addEventListener('click', trackUserHandler);
