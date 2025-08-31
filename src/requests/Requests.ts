// requests.ts
const API_KEY = import.meta.env.VITE_APP_TMDB_API_KEY;
const MOVIE_URL = import.meta.env.VITE_APP_MOVIE_URL;

const requests = {
  requestPopular: `${MOVIE_URL}/movie/popular?api_key=${API_KEY}&language=en-US`,
  requestTrending: `${MOVIE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
  requestTopRated: `${MOVIE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  requestUpcoming: `${MOVIE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US`,
  requestAdventure: `${MOVIE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=adventure&page=1&include_adult=false`,
};

export default requests;
