import { useEffect, useState } from "react";
import { fetchPopularMovies } from "../movieapi/movieapi.js";
import MovieCard from "../components/MovieCard";

export default function MoviesPage() {
   const [movies, setMovies] = useState([]);

useEffect(() => {
    const loadMovies = async () => {
      const data = await fetchPopularMovies();
      setMovies(data);
    };
    loadMovies();
  }, []);

return(
<div>
<h1>Popular Movies</h1>
   <div>
   {movies.map(movie => (<MovieCard key={movie.id} movie={movie} />))}
   </div>
</div>
);
}
