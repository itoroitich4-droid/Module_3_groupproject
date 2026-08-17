import { Link } from "react-router-dom";

export default function MovieLayout({ title, movies }) {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies.map(movie => (
          <li key={movie.id} className="bg-gray-800 p-2 rounded transition duration-300 hover:scale-105 hover:bg-gray-700 cursor-pointer">
            <Link to={`/movies/${movie.id}`}>
              <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
              <p className="mt-2">{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
