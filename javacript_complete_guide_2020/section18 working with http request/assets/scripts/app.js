const listEl = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
function sendHttpRequest(method, url, data) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = 'json';
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.send(JSON.stringify(data));
  });
  return promise;
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
  sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/posts').then(
    (responseData) => {
      const listOfPosts = responseData;
      for (const post of listOfPosts) {
        const postEl = document.importNode(postTemplate.content, true);
        postEl.querySelector('h2').textContent = post.title.toUpperCase();
        postEl.querySelector('p').textContent = post.body;
        listEl.append(postEl);
      }
    }
  );
}

function createPost(title, content) {
  const userId = Math.random();
  const post = {
    title,
    body: content,
    userId,
  };
  sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts', post);
}
fetchPosts();
createPost('DUMMY', 'A dummy post!');
