import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieDetails } from "../movieapi/movieapi";
import SingleMovieContainer from "../components/SingleMovieContainer";

export default function SingleMoviePage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(id).then(data => setMovie(data));
  }, [id]);

  if (!movie) return <p className="p-4">Loading...</p>;

  return <SingleMovieContainer movie={movie} />;
}
