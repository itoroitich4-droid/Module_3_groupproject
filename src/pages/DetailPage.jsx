import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function DetailPage() {
  const { type, id } = useParams(); 
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await fetch(`https://api.themoviedb.org/3/${type}/${id}?api_key=6a49a896e1a266bc4725c57c0c714343&language=en-US`);
      const data = await res.json();
      setItem(data);
    };
    fetchDetails();
  }, [type, id]);

  if (!item) return <p>Loading...</p>;

  return (
    <div className="detail">
      <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}  alt={item.title || item.name} />
      <h1>{item.title || item.name}</h1>
      <p>{item.overview}</p>
      <p>Rating: {item.vote_average || "N/A"}</p>
    </div>
  );
}

