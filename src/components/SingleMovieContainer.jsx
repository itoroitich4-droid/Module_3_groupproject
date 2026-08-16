export default function SingleMovieContainer({ movie }) {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{movie.title}</h1>
      <p className="mt-2">{movie.overview}</p>
      <p className="mt-2">Release Date: {movie.release_date}</p>
      <p className="mt-2">Rating: {movie.vote_average}</p>
    </div>
  );
}
