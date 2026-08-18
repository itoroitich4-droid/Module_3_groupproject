import { useNavigate } from "react-router-dom";

export default function MediaCard({ item, type }) {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/detail/${type}/${item.id}`)}>
      <img 
        src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} 
        alt={item.title || item.name} 
      />
      <p>{item.title || item.name}</p>
    </div>
  );
}
