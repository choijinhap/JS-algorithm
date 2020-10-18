const listEl = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
const form = document.querySelector('#new-post form');
const fetchBtn = document.querySelector('#available-posts button');

function sendHttpRequest(method, url, data) {
  // const promise = new Promise((resolve, reject) => {
  //   const xhr = new XMLHttpRequest();
  //   xhr.open(method, url);
  //   xhr.setRequestHeader('Content-Type','application/json');
  //   xhr.responseType = 'json';
  //   xhr.onload = function () {
  //     if (xhr.status >= 200 && xhr.status < 300) {
  //       resolve(xhr.response);
  //     } else {
  //       reject('Something went wrong!');
  //     }
  //   };
  //   xhr.onerror = function () {
  //     reject('network failed');
  //   };
  //   xhr.send(JSON.stringify(data));
  // });
  // return promise;
  return fetch(url, {
    method,
    //body: JSON.stringify(data),
    body:data,
    headers: { 'Contetent-Type': 'application/json' },
  })
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      } else {
        throw new Error('Something wrong');
      }
    })
    .catch((err) => {
      throw new Error(err);
    });
}

// using async/await

// async function fetchPosts() {
//   const responseData = await sendHttpRequest(
//     'GET',
//     'https://jsonplaceholder.typicode.com/posts'
//   );
//   const listOfPosts = responseData;
//   for (const post of listOfPosts) {
//     const postEl = document.importNode(postTemplate.content, true);
//     postEl.querySelector('h2').textContent = post.title.toUpperCase();
//     postEl.querySelector('p').textContent = post.body;
//     listEl.append(postEl);
//   }
// }

function fetchPosts() {
  sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/postss')
    .then((responseData) => {
      const listOfPosts = responseData;
      listEl.innerHTML = '';
      for (const post of listOfPosts) {
        const postEl = document.importNode(postTemplate.content, true);
        postEl.querySelector('h2').textContent = post.title.toUpperCase();
        postEl.querySelector('p').textContent = post.body;
        postEl.querySelector('li').id = post.id;
        listEl.append(postEl);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

function createPost(title, content) {
  const userId = Math.random();
  const post = {
    title,
    body: content,
    userId,
  };
  const fd =new FormData(form);
  fd.append('userId',userId);
  sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts', fd);
}

fetchBtn.addEventListener('click', fetchPosts);
form.addEventListener('submit', (event) => {
  event.preventDefault();
  //validating input is
  const inputTitle = event.currentTarget.querySelector('#title').value;
  const inputContent = event.currentTarget.querySelector('#content').value;
  createPost(inputTitle, inputContent);
});

listEl.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const postId = event.target.closest('li').id;
    sendHttpRequest(
      'DELETE',
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
  }
});
