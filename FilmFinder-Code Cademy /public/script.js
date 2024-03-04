const tmdbKey = '3a9b984588caccbda52935c3de27154b';
const tmdbBaseUrl = 'https://api.themoviedb.org/3/movie/11?api_key=';
const playBtn = document.getElementById('playBtn');
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    // This is an access token with the movie DB 
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYTliOTg0NTg4Y2FjY2JkYTUyOTM1YzNkZTI3MTU0YiIsInN1YiI6IjY1ZDI4YmMzMTI0MjVjMDE2M2UzMmVjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NeeKC_ZXiZshAk84oMs9tcTejNRIFjyY0uLOP3zqw28'
  }
};

const getGenres = async () => {
 const genreRequestEndpoint = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
  
  try {
    const response = await fetch(genreRequestEndpoint, options);
    if(response.ok){
      const jsonResponse =  await response.json();
      const genres  = jsonResponse.genres;
      console.log(jsonResponse.genres);
      return genres;
    }

  } catch (error) {
    console.log(error.message);
  }

};

const getMovies = () => {
  const selectedGenre = getSelectedGenre();
  const discoverMovieEndpoint = 'https://api.themoviedb.org/3/discover/movie';
  

};

const getMovieInfo = () => {

};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = () => {
  const movieInfo = document.getElementById('movieInfo');
  if (movieInfo.childNodes.length > 0) {
    clearCurrentMovie();
  };

};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;
console.log('hello world');