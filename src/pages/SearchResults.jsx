import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../movieapi/movieapi";
import MediaCard from "../components/MediaCard";

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const [results, setResults] = useState([]);

useEffect(() => {
const getResults = async () => {
   if (!query) return;
      const data = await searchMovies(query);
      setResults(data);
    };
 getResults();
  }, [query]);

  if (!query) {
    return <p>Search for a movie.</p>;
  }

  return (
    <div className="layout">
      <h2>Results for "{query}"</h2>
      <div className="movie-container">
        {results.map((movie) => (
    <MediaCard key={movie.id} item={movie} type="movie"/>
        ))}
      </div>
    </div>
  );
}