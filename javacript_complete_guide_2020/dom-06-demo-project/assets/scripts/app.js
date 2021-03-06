const addMovieModal = document.getElementById('add-modal');
//const addMovieModal = document.querySelector('#add-modal');
//const addMovieModal = document.body.children[1];

const startAddMovieButton = document.querySelector('header button');
//const startAddMovieButton = document.querySelector('header').lastElementChild;

const backdrop = document.getElementById('backdrop');
// const backdrop=document.body.firstElementCHild;

const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
// const confirmAddMovieButton = addMovieModal.querySelector('.btn--success');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
// const userInputs=addMovieModal.getElementsByTagName('input');

const entryText = document.getElementById('entry-text');

const movies = [];

const updateUi = () => {
  if (movies.length === 0) {
    entryText.style.display = 'block';
  } else {
    entryText.style.display = 'none';
  }
};

const closeDeleteMovieModal = () => {
  const deleteModal = document.getElementById('delete-modal');
  deleteModal.classList.remove('visible');
  toggleBackdrop();
};
const deleteMovieHandler = (movieId) => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  const movieList = document.getElementById('movie-list');
  //movieList.children[movieIndex].remove();
  movieList.removeChild(movieList.children[movieIndex]);
  closeDeleteMovieModal();
  updateUi();
};

const showDeleteMovieModal = (movieId) => {
  const deleteModal = document.getElementById('delete-modal');
  deleteModal.classList.add('visible');
  toggleBackdrop();
  const cancleDeleteButton = deleteModal.querySelector('.btn--passive');
  let confirmDeleteButton = deleteModal.querySelector('.btn--danger');

  confirmDeleteButton.replaceWith(confirmDeleteButton.cloneNode(true));

  confirmDeleteButton = deleteModal.querySelector('.btn--danger');

  cancleDeleteButton.addEventListener('click', closeDeleteMovieModal);
  confirmDeleteButton.addEventListener(
    'click',
    deleteMovieHandler.bind(null, movieId)
  );
  //   deleteMovie(movieId);
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
  const newMovieElement = document.createElement('li');
  newMovieElement.className = 'movie-element';
  newMovieElement.innerHTML = `
        <div class="movie-element__imgage">
            <img src="${imageUrl}" alt="${title}"/>
        </div>
        <div>
            <h2>${title}</h2>
            <p>${rating}/5 stars</p>
        </div>
    `;
  newMovieElement.addEventListener(
    'click',
    showDeleteMovieModal.bind(null, id)
  );
  const movieList = document.getElementById('movie-list');
  movieList.appendChild(newMovieElement);
};

const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

const closeMovieModal = () => {
  addMovieModal.classList.remove('visible');
};
const showMovieModal = () => {
  addMovieModal.classList.add('visible');
  toggleBackdrop();
};

const clearMovieInput = () => {
  for (const userInput of userInputs) {
    userInput.value = '';
  }
};

const cancelAddMovieHandler = () => {
  clearMovieInput();
  closeMovieModal();
  toggleBackdrop();
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === '' ||
    imageUrlValue.trim() === '' ||
    ratingValue === '' ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert('Please enter valid values (rating between 1 and 5');
    return;
  }

  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  };
  movies.push(newMovie);
  console.log(movies);
  updateUi();
  renderNewMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.imageUrl,
    newMovie.rating
  );
  clearMovieInput();
  closeMovieModal();
  toggleBackdrop();
};

const backdropClickHandler = () => {
  clearMovieInput();
  closeMovieModal();
  closeDeleteMovieModal();
};

startAddMovieButton.addEventListener('click', showMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);
