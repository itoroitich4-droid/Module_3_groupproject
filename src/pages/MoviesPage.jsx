import { useEffect, useState } from "react";
import { fetchPopularMovies } from "../movieapi/movieapi";
import MediaCard from "../components/MediaCard";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      const data = await fetchPopularMovies();
      setMovies(data);
    };
    loadMovies();
  }, []);

  return (
    <div className="layout">
      <h1>Popular Movies</h1>
      <div>
        {movies.map(movie => (
          <MediaCard key={movie.id} item={movie} type="movie" />
        ))}
      </div>
    </div>
  );
}

