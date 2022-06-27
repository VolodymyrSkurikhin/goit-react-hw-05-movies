import React, { useEffect, useState } from 'react';
import { useParams, NavLink, Outlet } from 'react-router-dom';
import * as LoadData from '../../../components/LoadData';
import s from './MovieDetails.module.css';

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  // console.log(movie);
  useEffect(() => {
    LoadData.fetchMovieDetails(movieId).then(res => setMovie(res));
  }, [movieId]);
  function takeGenres(entries) {
    return entries.map(entry => entry.name);
  }
  movie && console.log(movie.poster_path);
  return (
    movie && (
      <>
        <button type="button">Go back</button>
        <div className={s.detailContainer}>
          <div className={s.leftContainer}>
            <img
              href={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="Movie poster"
              className={s.poster}
            />
          </div>
          <div className={s.rightContainer}>
            <h1 className={s.title}>
              {movie.original_title}
              <span className={s.release_date}>
                {movie.release_date.slice(0, 4)}
              </span>
            </h1>
            <p className={s.sectionText}>
              {`User score: ${(movie.vote_average * 10).toFixed()} %`}
            </p>
            <h2 className={s.sectionTitle}>Overview</h2>
            <p className={s.sectionText}>{movie.overview}</p>
            <h2 className={s.sectionTitle}>Genres</h2>
            <p className={s.sectionText}>{takeGenres(movie.genres)}</p>
          </div>
        </div>
        <hr />
        <h2 className={s.sectionTitle}>Additional Information</h2>
        <ul className={s.addInfoUl}>
          <li className={s.addInfo}>
            <NavLink to="cast" className={s.link} activeClassName={s.active}>
              Cast
            </NavLink>
          </li>
          <li className={s.addInfo}>
            <NavLink to="reviews" className={s.link} activeClassName={s.active}>
              Reviews
            </NavLink>
          </li>
        </ul>
        <hr />
        <Outlet />
      </>
    )
  );
}
