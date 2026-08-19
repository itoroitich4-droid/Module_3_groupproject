import { useEffect, useState } from "react";
import MediaCard from "../components/MediaCard";

export default function Favourites() {
  const [favorites, setFavorites] = useState([]);

 useEffect(() => {const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

 setFavorites(savedFavorites);
  }, []);

  return (
    <div>
   <h1>My Favourites</h1>
      {favorites.length === 0 ? (<p>You haven't added anything to your favourites yet.</p>) : 
      (<div className="movie-container">
    {favorites.map((item) => (
    <MediaCard key={`${item.type}-${item.id}`} item={item} type={item.type} />
    ))}
      </div>)}
 </div>
  );
}