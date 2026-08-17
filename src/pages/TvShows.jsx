import { useEffect, useState } from "react";
import { fetchPopularTV } from "../movieapi/movieapi";

export default function TvShows() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetchPopularTV().then(data => setShows(data.results));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Popular TV Shows</h1>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {shows.map(show => (
          <li key={show.id} className="bg-gray-800 p-2 rounded transition duration-300 hover:scale-105 hover:bg-gray-700 cursor-pointer">
            <img 
              src={`https://image.tmdb.org/t/p/w300${show.poster_path}`} 
              alt={show.name} 
              className="rounded"
            />
            <p className="mt-2">{show.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
