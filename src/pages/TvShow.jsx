import { useEffect, useState } from "react";
import { fetchPopularTVShows } from "../movieapi/movieapi";
import MediaCard from "../components/MediaCard";

export default function TvShow() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const loadShows = async () => {
      const data = await fetchPopularTVShows();
      setShows(data);
    };
    loadShows();
  }, []);

  return (
    <div>
      <h1>Popular TV Shows</h1>
      <div>
        {shows.map(show => (
          <MediaCard key={show.id} item={show} type="tv" />
        ))}
      </div>
    </div>
  );
}
