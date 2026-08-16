export default function HeroSection({ movies }) {
  if (!movies || movies.length === 0) return null;
  const movie = movies[0];

  return (
    <div className="bg-cover bg-center h-96 flex items-center justify-center"
         style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})` }}>
      <h1 className="text-4xl font-bold bg-black bg-opacity-50 p-4 rounded">
        {movie.title}
      </h1>
    </div>
  );
}
