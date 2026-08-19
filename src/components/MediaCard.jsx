import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MediaCard({ item, type }) {
  const navigate = useNavigate();
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
   setFavorite(saved.some((x) => x.id === item.id && x.type === type)
    );
  }, [item.id, type]);

  const toggleFavorite = (e) => {
    e.stopPropagation();

    let saved = JSON.parse(localStorage.getItem("favorites")) || [];

    if (favorite) {
      saved = saved.filter(
        (x) => !(x.id === item.id && x.type === type)
      );
    } else {
      saved.push({ ...item, type });
    }

    localStorage.setItem("favorites", JSON.stringify(saved));
    setFavorite(!favorite);
  };

  return (
    <div onClick={() => navigate(`/detail/${type}/${item.id}`)}>
      <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.title || item.name}/>
      <p>{item.title || item.name}</p>
      <button onClick={toggleFavorite}>{favorite ? "Remove from Favourites" : "Add to Favourites"}
      </button>
    </div>
  );
}