const addMoiveBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = (filter = '') => {
  const movieList = document.getElementById('movie-list');
  if (movies.length === 0) {
    movieList.classList.remove('visible');
    return;
  } else {
    movieList.classList.add('visible');
  }
  movieList.innerHTML = '';

  const filteredMovies = !filter
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filter));
  filteredMovies.forEach((movie) => {
    const newMovie = document.createElement('li');
    //object distructuring
    const { info, ...otherProps } = movie;
    console.log(otherProps);
    //const { title:movieTitle } = info;
    //const movieTitle=movie.getFormattedTitle();
    let { getFormattedTitle } = movie;
    // getFormattedTitle = getFormattedTitle.bind(movie);
    let text = getFormattedTitle.call(movie) + ' - ';
    for (const key in info) {
      if (key !== 'title') {
        text += `${key} : ${info[key]}`;
      }
    }
    newMovie.textContent = text;
    movieList.append(newMovie);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  if (
    title.trim() === '' ||
    extraName.trim() === '' ||
    extraValue.trim() === ''
  ) {
    return;
  }

  const newMovie = {
    info: {
      title,
      [extraName]: extraValue,
    },
    id: Math.random().toString(),
    getFormattedTitle() {
      return this.info.title.toUpperCase();
    },
  };
  movies.push(newMovie);
  renderMovies();
};

const searchMovieHandler = () => {
    console.log(this)
  const filter = document.getElementById('filter-title').value;
  renderMovies(filter);
};

addMoiveBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);
