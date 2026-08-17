import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../movieapi/movieapi";
import HeroSection from "../components/HeroSection";
import MovieLayout from "../components/MovieLayout";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(data => setMovies(data.results));
  }, []);

  return (
    <div>
      <SearchBar />
      <HeroSection movies={movies.slice(0, 1)} />    
      <MovieLayout title="Trending This Week" movies={movies} />
    </div>
  );
}

