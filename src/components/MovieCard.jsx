import { useNavigate } from "react-router-dom";

export default function MovieCard({ movie }) {
const navigate = useNavigate();

return (
<div onClick={() => navigate(`/detail/${movie.id}`)}>
    <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title || movie.name} />
      <p>{movie.title || movie.name}</p>
    </div>
  );
}
