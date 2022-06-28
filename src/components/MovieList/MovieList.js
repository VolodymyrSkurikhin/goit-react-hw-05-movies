import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import s from './MovieList.module.css';

export default function MovieList({ moviesData }) {
  const location = useLocation();
  console.log(location);
  const path = location.pathname.includes('/movies') ? '' : 'movies/';
  return (
    <ul>
      {moviesData.map(movie => (
        <li key={movie.id}>
          <Link
            className={s.listLink}
            to={`${path}${movie.id}`}
            state={{ from: location }}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
