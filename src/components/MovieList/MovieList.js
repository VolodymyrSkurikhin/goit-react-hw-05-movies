import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import s from './MovieList.module.css';
import PropTypes from 'prop-types';

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

MovieList.propTypes = {
  moviesData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    })
  ),
};
