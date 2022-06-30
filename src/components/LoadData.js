const BASE_URL = `https://api.themoviedb.org/4`;
const API_KEY = `api_key=a96c6afcb6324213a620b6851c83fc98`;
async function LoadData(url) {
  const response = await fetch(url);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error(`Sorry,try later`));
}
export function fetchTrendMovies() {
  const result = LoadData(`${BASE_URL}/trending/movie/week?${API_KEY}`);
  console.log(result);
  return result;
}
export function fetchMovieDetails(Id) {
  const result = LoadData(`${BASE_URL}/movie/${Id}?${API_KEY}&language=en-US`);
  console.log(result);
  return result;
}
export function fetchOnSearch(searchWord) {
  const result = LoadData(
    `${BASE_URL}/search/movie?query=${searchWord}&${API_KEY}&language=en-US&page=1&include_adult=false`
  );
  console.log(result);
  return result;
}
export function fetchCast(Id) {
  const result = LoadData(
    `${BASE_URL}/movie/${Id}/credits?${API_KEY}&language=en-US`
  );
  console.log(result);
  return result;
}
export function fetchReviews(Id) {
  const result = LoadData(
    `${BASE_URL}/movie/${Id}/reviews?${API_KEY}&language=en-US&page=1`
  );
  console.log(result);
  return result;
}

// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1
// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
