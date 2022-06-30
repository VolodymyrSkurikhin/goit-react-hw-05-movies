import React, { useEffect, useState, lazy, Suspense } from 'react';
import {
  Route,
  useParams,
  NavLink,
  Routes,
  useLocation,
} from 'react-router-dom';
import * as LoadData from '../../../components/LoadData';
// import Cast from '../../Cast/Cast';
// import Reviews from '../../Reviews/Reviews';
import s from './MovieDetails.module.css';

const Cast = lazy(() =>
  import('../../Cast/Cast' /* webpackChunkname: "Cast" */)
);
const Reviews = lazy(() =>
  import('../../Reviews/Reviews' /* webpackChunkname: "Reviews" */)
);

export default function MovieDetails() {
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    LoadData.fetchMovieDetails(movieId)
      .then(res => setMovie(res))
      .catch(() => setMovie(''));
  }, [movieId]);
  function takeGenres(entries) {
    if (!entries) {
      return 'no info';
    }
    if (entries.length === 0) {
      return 'No info';
    }
    return entries.map(entry => entry.name).join(', ');
  }
  return (
    movie && (
      <>
        <NavLink to={location.state?.from ?? '/movies'}>
          <button type="button">Go back</button>
        </NavLink>{' '}
        <div className={s.detailContainer}>
          <div className={s.leftContainer}>
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt="Movie poster"
                className={s.poster}
              />
            ) : (
              <h3>No poster</h3>
            )}
          </div>
          <div className={s.rightContainer}>
            <h1 className={s.title}>
              {movie.original_title ? movie.original_title : ''}
              {movie.release_date && (
                <span className={s.release_date}>
                  {`(${movie.release_date.slice(0, 4)})`}
                </span>
              )}
            </h1>
            <p className={s.sectionText}>
              {movie.vote_average
                ? `User score: ${(movie.vote_average * 10).toFixed()} %`
                : 'No data'}
            </p>
            <h2 className={s.sectionTitle}>Overview</h2>
            {movie.overview && movie.overview.length !== 0 ? (
              <p className={s.sectionText}>{movie.overview}</p>
            ) : (
              <p className={s.sectionText}>No info</p>
            )}
            <h2 className={s.sectionTitle}>Genres</h2>
            <p className={s.sectionText}>{takeGenres(movie.genres)}</p>
          </div>
        </div>
        <hr />
        <h2 className={s.sectionTitle}>Additional Information</h2>
        <ul className={s.addInfoUl}>
          <li className={s.addInfo}>
            <NavLink
              to="cast"
              state={{ from: location.state.from }}
              className={({ isActive }) => (isActive ? s.active : s.link)}
            >
              Cast
            </NavLink>
          </li>
          <li className={s.addInfo}>
            <NavLink
              to="reviews"
              state={{ from: location.state.from }}
              className={({ isActive }) => (isActive ? s.active : s.link)}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
        <hr />
        <Suspense fallback={<h3>Loading...</h3>}>
          <Routes>
            <Route path="cast" element={<Cast movieId={movieId} />} />
            <Route path="reviews" element={<Reviews movieId={movieId} />} />
          </Routes>
        </Suspense>
      </>
    )
  );
}
