const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

const userId = 'u123';
const user = {
  name: 'Max',
  age: 30,
};

// storeBtn.addEventListener('click', () => {
//   sessionStorage.setItem('uid', userId);
//   localStorage.setItem('user', JSON.stringify(user));
// });

// retrBtn.addEventListener('click', () => {
//   const extractedId = sessionStorage.getItem('uid');
//   const extractedUser = localStorage.getItem('user');
//   console.log(JSON.parse(extractedUser));
//   if (extractedId) {
//     console.log('Got the id - ' + extractedId);
//   } else {
//     console.log('No id');
//   }
// });

storeBtn.addEventListener('click', () => {
  document.cookie = `uid=${userId}; max-age=5`;
  document.cookie = `user=${JSON.stringify(user)}`;
});

retrBtn.addEventListener('click', () => {
  const cookieData = document.cookie;
  const data = cookieData.split(';').map((i) => i.trim());
  const userValue = data[1].split('=');
  console.log(userValue);
});

console.log(document.cookie);
