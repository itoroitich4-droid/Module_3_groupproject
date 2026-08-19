const API_KEY = "6a49a896e1a266bc4725c57c0c714343"; 
const BASE_URL = "https://api.themoviedb.org/3";

// for the popular movies
export async function fetchPopularMovies() {
const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
const data = await response.json();
return data.results;
}
// for the top rated movies
export async function fetchTopRatedMovies() {
const response = await fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`);
const data = await response.json();
return data.results;
}


// for  popular tv shows
export async function fetchPopularTVShows() {
    const response = await fetch(
        `${BASE_URL}/tv/popular?api_key=${API_KEY}`
    );

    const data = await response.json();

    return data.results;
}
// for top rated tvshows
export async function fetchTopRatedTVShows() {
    const response = await fetch(
        `${BASE_URL}/tv/top_rated?api_key=${API_KEY}`
    );

    const data = await response.json();

    return data.results;
}

// for searchbar 
export async function searchMovies(query) {
  const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);

const data = await response.json();

 return data.results;
}
// for bladerunner 2049
export async function fetchBladeRunner() {
  const response = await fetch(`${BASE_URL}/movie/335984?api_key=${API_KEY}`);

  const data = await response.json();

  return data;
}