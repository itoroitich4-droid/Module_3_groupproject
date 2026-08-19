import { useEffect, useState } from "react";
import {  fetchPopularMovies,fetchTopRatedMovies,fetchPopularTVShows,
  fetchTopRatedTVShows,fetchBladeRunner,} from "../movieapi/movieapi";

import MediaCard from "../components/MediaCard";

export default function Home() {
  const [bladeRunner, setBladeRunner] = useState(null);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [popularTVShows, setPopularTVShows] = useState([]);
  const [topRatedTVShows, setTopRatedTVShows] = useState([]);

  useEffect(() => {
    const loadHome = async () => {
      setBladeRunner(await fetchBladeRunner());
      setPopularMovies(await fetchPopularMovies());
      setTopRatedMovies(await fetchTopRatedMovies());
      setPopularTVShows(await fetchPopularTVShows());
      setTopRatedTVShows(await fetchTopRatedTVShows());
    };

    loadHome();
  }, []);

  return (
    <div>

      {/* HERO */}
      {bladeRunner && (
        <section className="hero">
          <img
            src={`https://image.tmdb.org/t/p/original${bladeRunner.backdrop_path}`}
            alt={bladeRunner.title}
          />

          <div className="hero-content">
            <h1>{bladeRunner.title}</h1>

            <p>{bladeRunner.overview}</p>

            <button>
              Watch Now
            </button>
          </div>
        </section>
      )}

      {/* POPULAR MOVIES */}
      <section className="layout">
        <h2>Popular Movies</h2>

        <div className="movie-container">
          {popularMovies.map((movie) => (
            <MediaCard
              key={movie.id}
              item={movie}
              type="movie"
            />
          ))}
        </div>
      </section>

      {/* TOP RATED MOVIES */}
      <section className="layout">
        <h2>Top Rated Movies</h2>

        <div className="movie-container">
          {topRatedMovies.map((movie) => (
            <MediaCard
              key={movie.id}
              item={movie}
              type="movie"
            />
          ))}
        </div>
      </section>

      {/* POPULAR TV SHOWS */}
      <section className="layout">
        <h2>Popular TV Shows</h2>

        <div className="movie-container">
          {popularTVShows.map((show) => (
            <MediaCard
              key={show.id}
              item={show}
              type="tv"
            />
          ))}
        </div>
      </section>

      {/* TOP RATED TV SHOWS */}
      <section className="layout">
        <h2>Top Rated TV Shows</h2>

        <div className="movie-container">
          {topRatedTVShows.map((show) => (
            <MediaCard
              key={show.id}
              item={show}
              type="tv"
            />
          ))}
        </div>
      </section>

    </div>
  );
}