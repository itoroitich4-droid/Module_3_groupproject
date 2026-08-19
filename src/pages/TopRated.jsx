import { useEffect, useState } from "react";
import { fetchTopRatedMovies } from "../movieapi/movieapi";
import MediaCard from "../components/MediaCard";

export default function TopRated() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      const data = await fetchTopRatedMovies();
      setMovies(data);
    };loadMovies();
  }, []);

  return (
    <div className="layout">
      <h1>Top Rated Movies</h1>

      <div className="movie-container">
        {movies.map((movie) => (
    <MediaCard key={movie.id} item={movie} type="movie" />
        ))}
    </div>
    </div>
  );
}